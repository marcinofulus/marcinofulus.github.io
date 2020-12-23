.. _binarne:

Dodatek: Komputerowa analiza drzew binarnych
============================================

Modele zachowania zmienającej się w czasie ceny pewnego aktywa
:math:`S`, dzielą się na te z czasem ciągłym i dyskretnym. W przypadku
modeli z czasem dyskretnym, zakładamy, że zmiany cen aktywa oraz
wszelkie transakcje mają miejsce w pewnym wybranych momentach czasu,
np. raz na dzień. 

Najprostszym wariantem modelu z czasem dyskretnym, jest taki, w którym
cena aktywa w czasie :math:`t+1` może przybierać jedną z dwóch
wartości:

.. math::

   S_{i+1} = \left\{ 
    \begin{array}{l l}
       S^{+} & \quad \text{z prawdopodobieństwem} \; p\\
       S^{-}   & \quad \text{z prawdopodobieństwem} \; 1-p
    \end{array} \right.


Startując z pewnej wartości aktywa w chwili początkowej, w pierwszym
okresie mamy dwie możliwości. W drugim okresie, każda z tych możliwości
prowadzi do kolejnych dwóch. Uogólniając po :math:`N` okresach mamy
:math:`2^N` możliwych scenariuszy ewolucji ceny.

Wartości :math:`S^+` :math:`S^-` generalnie mogą być dowolne, ale z
przyczyn praktycznych stosuje się kilka reguł. Po pierwsze wartość
aktywa :math:`S_{i+1}` zależy od poprzedniej wartości
:math:`S_{i}`. Po drugie chcemy, żeby drzewo wartości aktywa
generowane przez proces zmian cen w czasie było drzewem
"rekombinującym". Oznacza to, że jeśli aktywo zdrożeje a następnie
potanieje to jego cena będzie dokładnie taka sama jakby najpierw
potaniało a potem zdrożało. Wtedy, pomimo tego, że liczba scenariuszy
po :math:`N` okresach nadal pozostaje równa :math:`2^N`, to liczba
możliwych do osiągnięcia różnych cen aktywa wynosie
:math:`N+1`. Zdecydowanie ułatwia to wykonywanie rachunków na
większych drzewach.

Następujące dwa scenariusze wyboru reguł zmian cen prowadzą do drzew
rekombinujących.

 - Drzewa addytywne: Jeśli cena aktywa po jednym okresie może wzrosnąć
   o :math:`\Delta_1` lub zmaleć o :math:`\Delta_2` i wartości te są
   stałe w czasie oraz niezależne od wartości ceny aktywa.

 - Drzewa multiplikatywne: Jeśli cena aktywa po jednym okresie może
   wzrosnąć do :math:`S u` lub zmaleć do :math:`S d`, dla pewnych
   liczb :math:`u>1` oraz :math:`0<d<1`, niezależnych od ceny akcji i
   czasu.


Do operacji na drzewach użyjemy list zagnieżdżonych. Będziemy
stosowali kilka funkcji pomocniczych, które będą generowały drzewa jak
i przedstawiały je graficznie.



.. sagecellserver::

    import numpy as np 
    def gen_all(niter,SP = 4.0,q=0.175,delta1=None,delta2=None):
        SP = [[SP]]
        for i in range(niter):
            tmp = []
            for s in SP[-1]:
                if delta1==None or delta2==None:
                    tmp+= [ (1+q)*s, s/(1+q) ]
                else:    
                    tmp+= [ s+delta1, s-delta2 ]
            SP.append(tmp)
        return SP
    def gen_recombining(niter,SP = 4.0,q=0.175,delta1=None,delta2=None):
        SP = [[SP]]
        for i in range(niter):
            tmp = []
            for s in SP[-1]:
                if delta1==None or delta2==None:
                    tmp+= [ (1+q)*s]
                else:    
                    tmp+= [ s+delta1]
            if delta1==None or delta2==None:
                tmp+= [ s/(1+q)]
            else:    
                tmp+= [ s-delta2]
                    
                    
            SP.append(tmp)
        return SP
        
    def plot_tree(SP):
        plt = point( (0,SP[0][0]),size=244,color='gray',alpha=0.2,zorder=0)
        
        if len(SP) == len(SP[-1]):
            for l,prices in enumerate(SP):
                for i,p in enumerate(prices):
                    if l>0:
                        plt+=point2d( (l,p),size=244,color='gray',alpha=0.2,zorder=0,faceted=True )
                        plt+= text("%0.1f"%p,(l,p),color='black',figsize=(5,3))
            for l in range(len(SP)-1):
                for i in range(l+1):
                    plt+=arrow2d( (l,SP[l][i]),(l+1,SP[l+1][i]), arrowshorten=16)
                    plt+=arrow2d( (l,SP[l][i]),(l+1,SP[l+1][i+1]), arrowshorten=16)
        else:
            for l,prices in enumerate(SP):
                for i,p in enumerate(prices):
                    if l>0:
                        plt+=arrow2d( (l-1,SP[l-1][int(i/2)]),(l,p), arrowshorten=16)
                        plt+=point2d( (l,p),size=244,color='gray',alpha=0.2,zorder=0,faceted=True )
                        plt+= text("%0.1f"%p,(l,p),color='black',figsize=(5,3))
        plt.axes_labels(["rok","wartosc"])
        plt.axes_range(xmin=-.2, xmax = len(SP)-1+0.2,ymin=0,ymax=SP[-1][0]+1)
        return plt
        
    def plot_tree2(SP,OP):
        plt = point( (0,SP[0][0]),size=244,color='gray',alpha=0.2,zorder=0)
        
        if len(SP) == len(SP[-1]):
            for l,(prices,oprices) in enumerate(zip(SP,OP)):
                for i,(p,op) in enumerate(zip(prices,oprices)):
                    if l>0:
                        plt+=point2d( (l,p),size=244,color='gray',alpha=0.2,zorder=0,faceted=True )
                        plt+= text("%0.1f"%op,(l,p),color='black',figsize=(5,3))
            for l in range(len(SP)-1):
                for i in range(l+1):
                    plt+=arrow2d( (l,SP[l][i]),(l+1,SP[l+1][i]), arrowshorten=16)
                    plt+=arrow2d( (l,SP[l][i]),(l+1,SP[l+1][i+1]), arrowshorten=16)
        else:
            for l,(prices,oprices) in enumerate(zip(SP,OP)):
                for i,(p,op) in enumerate(zip(prices,oprices)):
                    if l>0:
                        plt+=arrow2d( (l-1,SP[l-1][int(i/2)]),(l,p), arrowshorten=16)
                        plt+=point2d( (l,p),size=244,color='gray',alpha=0.2,zorder=0,faceted=True )
                        plt+= text("%0.1f"%op,(l,p),color='black',figsize=(5,3))
        plt.axes_labels(["rok","wartosc"])
        plt.axes_range(xmin=-.2, xmax = len(SP)-1+0.2,ymin=0,ymax=SP[-1][0]+1)
        return plt


.. end of output

.. admonition:: Opis programu

   Funkcja :code:`gen_all` generuje zadaną przez pierwszy parametr
   liczbę poziomów drzewa binarnego. Startujemy z wartości
   :code:`SP`. Z danej wartości w poprzednim okresie są generowane
   dwie nowe. Zgodnie z regułą addytywną: :code:`s+delta1, s-delta2` a
   z multiplikatywną mamy :code:`(1+q)*s, s/(1+q)`. Reguła
   multiplikatywna jest domyśna, a funkcja użyje wersji addytynej
   jesli na wejsciu podamy parametry :code:`delta1,delta2`. Struktura
   danych w której będziemy przechowywać dane wyjsciowe (drzewo
   binarne) to lista wartości w każdym okresie - czyli zagnieżdżona
   lista list.  Ponieważ :code:`gen_all` generuje wszystkie
   scenariusze należy pamiętać więc by :math:`n` nie było zbyt duże,
   bo ilość scenariuszy jest :math:`\sim 2^n`.


   Funkcja :code:`gen_recombining` ma ten sam wywołania jak
   :code:`gen_all`. Różnica polega na tym, że liczba możliwych stóp
   procentowych w n-tym okresie wynosi :math:`n+1` a nie :math:`2 n`.

   Funkcje :code:`plot_tree` i :code:`plot_tree2` przedstawiają
   graficznie drzewa binarne, przy czym ta ostatnia wersja pozwala
   nanieść wartości z dodatkowego drzewa. Ma to zastosowanie w
   przypadku wizualizacji ewolucji cen opcji.


Drzewa multiplikatywne mają kilka zalet. Po pierwsze cena nie będzie
ujemna. Nie jest to prawdą w modelu addytywnym! Po drugie, założenie
stałej zmiany, niezależnej od ceny aktywa wydaje się
nierzeczywiste. Rozsądniejszym wydaje się podanie względnej zmienności
ceny aktywa, co właśnie implementuje model multyplikatywny. 


Wygenerujmy dla przykładu drzewo z czterema rozgałęzieniami,
rekombinujące i multiplikatywne:

.. sagecellserver::

   show(plot_tree(gen_recombining(4,SP=30,q=0.1)))
   show(plot_tree(gen_all(4,SP=30,q=0.1)))


Zauważmy, że w pełnym drzewie binarnym mamy w :math:`n`-tym okresie
:math:`2^n` wartości, z których tylko :math:`n` jest liczbowo
różnych. Procedura rysująca wszystkie wartości, rysuje stopy
procentowe w kółkach o kolorze jasnoszarym, przy czym jeżeli
narysujemy więcej niż raz jasnoszare kółko jedno na drugim to kolor
będzie ciemniejszy (związane jest to z opcją alpha=0.2, która określa
stopnień przezroczystości koloru). Wynika z tego, że im ciemniejszy
kolor tym więcej elementów pełnego drzewa dwumiennego ma daną
wartość. 

W pełnym drzewie binarnym istnieje tylko jedna ścieżką realizująca
każdą gałąź. Wobec tego można powiedzieć, że liczba ścieżek
realizujących stopę procentową jest proporcjonalna do odcienia na
powyższym rysunku. Wyraźnie widzimy, że skrajne wartości są dużo mniej
prawdopodobne od tych w środku.


Drzewa binarne, są fundamentalnym elementem modelowania rynku
finansowego. Rozważania z zakresu teorii rynków finansowych mogą być
łatwo zademnostrowane na rynkach skończonych, które są naturalnym
rozszerzeniem rynku jednookresowego, dwustanowego.



Drzewa binarne
--------------

Rozważmy drzewo binarne w którym aktywo zmienia się począwszy od
wartości początkowej :math:`S_0=100` o 20 jednostek w górę lub w
dół. Poniższy kod generuje takie drzewo:

.. code-block:: python

    sage: N = 3
    sage: SP = gen_recombining(N,SP=100,delta1=20,delta2=20)
    sage: plt_sp = plot_tree(SP)
    sage: plt_sp.set_axes_range(ymax=170)
    sage: plt_sp

.. image:: ARF2_model_dwumianowy_media/cell_7_sage0.png
    :align: center


Możemy go samodzielnie uruchomić:

.. sagecellserver::

    N = 3
    SP = gen_recombining(N,SP=100,delta1=20,delta2=20)
    plt_sp = plot_tree(SP)
    plt_sp.set_axes_range(ymax=170)
    plt_sp.show()
    print( SP )

Mając drzewo w postaci struktury zagnieżdżonej listy, możemy
wygenerować sobie wszystkie scenariusze ewolucji na tym drzewie:

.. only:: html

    .. sagecellserver::

        all_paths = list ( map(lambda x:[0]+np.cumsum(x).tolist(),cartesian_product( N*[[0,1]] ).list() ) )
        print( all_paths )


.. only:: latex

    .. code-block:: python

        sage: all_paths = map(lambda x:[0]+\
                    np.cumsum(x).tolist(),\
                    CartesianProduct(*( N*[[0,1]])).list() )
        sage: all_paths
        [[0, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 1], [0, 0, 1, 2], [0, 1, 1, 1], [0, 1, 1, 2], [0, 1, 2, 2], [0, 1, 2, 3]]

    .. end of output

Weźmy prawdopodobieństwa :math:`q`:


.. code-block:: python

    sage: var('q')
    sage: q = 1/2
    sage: Q = [q,1-q]


.. end of output

Wybierzmy sobie z naszego drzewa pewną cenę z okresu drugiego oraz
dwie możliwości jej ewolucji w czasie.


.. code-block:: python

    sage: SP[2][1],SP[3][1],SP[3][2]
    (100, 120, 80)

.. end of output

możemy sobie narysować to na drzewie, aby sprawdzić czy są to
dokładnie te węzły o które nam chodzi.


.. code-block:: python

    sage: point([ (2,SP[2][1]),(3,SP[3][1]),(3,SP[3][2])],color='yellow',size=600,zorder=-10,ymin=0,ymax=170,xmax=3.4)+plt_sp

.. image:: ARF2_model_dwumianowy_media/cell_96_sage0.png
    :align: center


.. end of output


Dla prawdopodobieństwa :math:`q=\frac{1}{2}` możemy obliczyć jaka
będzie stopa oprocentowanie wolnego od ryzyka, które zapewni to, że
nie będzie mógł zachodzić arbitraż (w podręcznikach matematycznych
zwane jest ono też miarą arbitrażową):


.. code-block:: python

    sage: var('r')
    sage: eq = SP[2][1]*(1+r) == q*SP[3][1]+(1-q)*SP[3][2]
    sage: show(eq)


.. MATH::

    100 \, r + 100 = 100


.. end of output

Ile wynosi  :math:`r`?


.. code-block:: python

    sage: solve(eq,r)
    [r == 0]

.. end of output

Bedzie to zachodziło dla każdego węzła, sprawdźmy:


.. code-block:: python

    sage: def calculate_r(i=2,j = 1):
    ...       
    ...       eq = SP[i][j]*(1+r) == q*SP[i+1][j]+(1-q)*SP[i+1][j+1]
    ...       show([SP[i][j],SP[i+1][j],SP[i+1][j+1]])
    ...       return solve(eq,r)[0].rhs()


.. end of output

.. code-block:: python

    sage: calculate_r(i=1,j = 1)
    0


.. MATH::

    \left[80, 100, 60\right]


.. end of output


Definiujemy tablicę wszystkich ścieżek (historii) ewolucji ceny
aktywa, z notają, że:

- 0 \- oznacza wzrost ceny 
- 1 \- oznacza spadek ceny 


.. code-block:: python

    sage: all_moves = CartesianProduct(*( N*[[0,1]]) ).list()

.. end of output

Ruchom tym przyporządkowujemy prawdopodobieństwa. Korzystamy z faktu,
że prawdopodobieństwa wzrostu lub spadku nie zależą od miejsca w
drzewie w którym się znajdujemy.


.. code-block:: python

    sage: Qmoves = [ map(lambda x:Q[x],m) for m in all_moves ]


.. end of output

Możemy teraz obliczyć prawdopodobieństwo każdej ścieżki:


.. code-block:: python

    sage: map(prod,Qmoves)
    [1/8, 1/8, 1/8, 1/8, 1/8, 1/8, 1/8, 1/8]

.. end of output

Zobaczmy czy sumują się one do jedności:


.. code-block:: python

    sage: try:
    ...       print(  sum(map(prod,Qmoves)).full_simplify() )
    sage: except:
    ...       print( sum(map(prod,Qmoves)) )
    1

.. end of output

Jeśli dla każdej ścieżki obliczymy jej koncową wartość - biorąc pod
uwagę rekombinacje to mamy po prostu sumę:


.. code-block:: python

    sage: map( sum, all_moves)
    [0, 1, 1, 2, 1, 2, 2, 3]

.. end of output

To biorąc odpowiedznie prawdopodobieństwa zajścia ścieżek:


.. code-block:: python

    sage: map(prod,Qmoves)
    [1/8, 1/8, 1/8, 1/8, 1/8, 1/8, 1/8, 1/8]

.. end of output

Otrzymamy -  Rozkład dwumianowy (Bernoulliego!)


.. code-block:: python

    sage: binom = (N+1)*[0]
    sage: for m,p in zip( map( sum, all_moves), map(prod,Qmoves) ):
    ...       binom[m] += p
    sage: binom
    [1/8, 3/8, 3/8, 1/8]

.. end of output

sprawdźmy korzystając np. z jego implementacji w pakiecie scipy:


.. code-block:: python

    sage: import scipy.stats
    sage: binom_dist = scipy.stats.binom(N,1-q)
    sage: #bar_chart([binom_dist.pmf(x) for x in range(21)])
    sage: d = [binom_dist.pmf(x) for x in range(N+1)]
    sage: d
    [0.12500000000000003, 0.375, 0.375, 0.12500000000000003]

.. end of output

Możemy teraz obliczyć średnią z ceny aktywa po ścieżkach:


.. code-block:: python

    sage: for q_,p_,in zip(Qmoves,all_paths):
    ...       print( q_,p_,round( prod(q_)*SP[N][p_[N]] ) )
    [1/2, 1/2, 1/2] [0, 0, 0, 0] 20
    [1/2, 1/2, 1/2] [0, 0, 0, 1] 15
    [1/2, 1/2, 1/2] [0, 0, 1, 1] 15
    [1/2, 1/2, 1/2] [0, 0, 1, 2] 10
    [1/2, 1/2, 1/2] [0, 1, 1, 1] 15
    [1/2, 1/2, 1/2] [0, 1, 1, 2] 10
    [1/2, 1/2, 1/2] [0, 1, 2, 2] 10
    [1/2, 1/2, 1/2] [0, 1, 2, 3] 5

.. end of output

Średnia wartość aktywa  :math:`S` wynosi:


.. MATH::

     \sum_{p\in P}\left (\prod q_i \right )SP_{N,p_N}

.. end of math

gdzie oznaczyliśmy przez dla ścieżki  :math:`p` ze zbioru wszystkich scieżek  :math:`P` przez:

 - :math:`q_i` \- prawdopodobieństwo, skoku ceny między okresami
   :math:`i` i :math:`i+1`
 - :math:`p_N` \- indeks w drzewie wartości aktywa na końcu ścieżki
   :math:`p`
 - :math:`SP_{i,j}` jest tablicą cen aktywa, w :math:`i` oznacza okres
   a :math:`j` indeks w drzewie wartości.


 

Na przykład mamy:


.. code-block:: python

    sage: sum([prod(q_)*SP[N][p_[N]] for q_,p_,in zip(Qmoves,all_paths)])
    100

.. end of output

Mając takie narzędzie możemy policzyć średnią po realizacjach
(ścieżkach) dowolnej funkcji ceny aktywa. Na przykład akcji sprzedaży,
której cena jest dana przez: :math:`\max(0,S-K)`

 


.. code-block:: python

    sage: K=100
    sage: sum([prod(q_)*( max(0,SP[N][p_[N]]-K) ) for q_,p_,in zip(Qmoves,all_paths)])
    15

.. end of output

Ewolucja portfela na drzewie binarnym.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Mamy portfel :math:`P` \- [liczba akcji, liczba obligacji] w chwili
:math:`t=0`. Obliczmy jego ewolucję czasową. Zanim to uczynimy,
policzmy jak zmienia się cena aktywa na pewnej ścieżce:


.. code-block:: python

    sage: for i,p_ in enumerate(all_paths[6]):
    ...       print( "czas:",i,"cena",SP[i][p_] )
    czas: 0 cena 100
    czas: 1 cena 80
    czas: 2 cena 60
    czas: 3 cena 80

.. end of output

co graficznie możemy przedstawić:


.. code-block:: python

    sage: plot_tree(SP)+line( [( i,SP[i][p_] ) for i,p_ in enumerate(all_paths[6])],color='red')

.. image:: ARF2_model_dwumianowy_media/cell_47_sage0.png
    :align: center


.. end of output

.. code-block:: python

    sage: r = 0
    sage: P = [1,123]
    sage: for i,p_ in enumerate(all_paths[6]):
    ...       print(  "czas:",i,"cena",SP[i][p_],"wartość portfela:",P[0]*SP[i][p_]+P[1]*(1+r)^i )
    czas: 0 cena 100 wartość portfela: 223
    czas: 1 cena 80 wartość portfela: 203
    czas: 2 cena 60 wartość portfela: 183
    czas: 3 cena 80 wartość portfela: 203

.. end of output


.. code-block:: python

    sage: K=100
    sage: [prod(q_)*( max(0,SP[N][p_[N]]-K) ) for q_,p_,in zip(Qmoves,all_paths)]
    [15/2, 5/2, 5/2, 0, 5/2, 0, 0, 0]

.. end of output

.. code-block:: python

    sage: [max(0,s-K) for s in SP[N]]
    [60, 20, 0, 0]

.. end of output

.. code-block:: python

    sage: OP = [ [max(0,s-K) for s in SP[N]] ]


.. end of output

.. code-block:: python

    sage: OP
    [[60, 20, 0, 0]]

.. end of output



Hedging na drzewie binarnym:
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Przypuścmy, że mamy kupca na opcję po 16, której cena godziwa,
tzn. taka przy której nie zachodzi arbitraż, wynosi 15. Istnieje
możliwość zarobienia. Wystawiając jednak opcje narażamy się na duże
ryzyko. Na naszym modelowym rynku idealnym jesteśmy zainteresowani
zyskiem bez ponoszenia ryzyka.

Ideą hegdingu, jest taka konstrukcja portfelem by w KAŻDYM scenariuszu
ewolucji ceny aktywa, otrzymać zysk = 1 (wynikający z początkowej
różnicy ceny godziwej i rynkowej).

Po pierwsze będziemy potrzebowali ceny opcji w każdym węźle
drzewa. Niech drzewo cen opcji będzie w strukturze zagnieżdzonej listy
OP.


.. code-block:: python

    sage: OP = [ [max(0,s-K) for s in SP[N]] ]
    sage: for idx in range(N):
    ...       el = [ q*OP[-1][i]+(1-q)*OP[-1][i+1] for i in range(len(OP[-1])-1)] 
    ...       OP.append(el)
    sage: OP.reverse()


.. end of output

.. code-block:: python

    sage: plot_tree2(SP,OP)

.. image:: ARF2_model_dwumianowy_media/cell_71_sage0.png
    :align: center


.. end of output

.. code-block:: python

    sage: OP
    [[15], [25, 5], [40, 10, 0], [60, 20, 0, 0]]

.. end of output

.. code-block:: python

    sage: p_ = all_paths[6]
    sage: p_
    [0, 1, 2, 2]

.. end of output

.. code-block:: python

    sage: p_ = [0,0,1,2]
    sage: Pt = [(0,16,SP[0][0])]
    sage: for i,(k,k_next) in enumerate(zip(p_,p_[1:])):
    ...       delta = (OP[i+1][k]-OP[i+1][k+1])/(SP[i+1][k]-SP[i+1][k+1])
    ...       x = delta - Pt[-1][0]
    ...       print(  k,delta,Pt[-1][0] )
    ...       Pt.append( (delta,Pt[-1][1]-x*SP[i][k],SP[i+1][k_next]) )
    0 1/2 0
    0 3/4 1/2
    1 1/2 3/4

.. end of output

.. code-block:: python

    sage: Pt
    [(0, 16, 100), (1/2, -34, 120), (3/4, -64, 100), (1/2, -39, 80)]

.. end of output

.. code-block:: python

    sage: Pt[-1][0]*Pt[-1][2],Pt[-1][1]
    (40, -39)

.. end of output

.. code-block:: python

    sage: print( "mamy akje szt.:",Pt[-1][0],"po",Pt[-1][2] )
    sage: print( "oraz depozyt/dlug:",Pt[-1][1] )
    sage: print( "i obiecankę za opcję:",-max( Pt[-1][2]-K,0) )
    mamy akje szt.: 1/2 po 80
    oraz depozyt/dlug: -39
    i obiecankę za opcję: 0

.. end of output

.. code-block:: python

    sage: total = Pt[-1][0]*Pt[-1][2]+Pt[-1][1]-max( Pt[-1][2]-K,0)
    sage: total
    1

.. end of output

.. code-block:: python

    sage: def calculate_evo(SP,OP,p_,c=1):
    ...       Pt = [(0,0,SP[0][0])]
    ...       for i,(k,k_next) in enumerate(zip(p_,p_[1:])):
    ...           delta = c*(OP[i+1][k]-OP[i+1][k+1])/(SP[i+1][k]-SP[i+1][k+1])
    ...           delta = 3.0 ## try -1 0 
    ...           x = delta - Pt[-1][0]
    ...           Pt.append( (delta,Pt[-1][1]-x*SP[i][k],SP[i+1][k_next]) )    
    ...       return (Pt[-1][0]*Pt[-1][2]+Pt[-1][1]-max(c*( Pt[-1][2]-K),0),Pt)


.. end of output

.. code-block:: python

    sage: def calculate_evo(SP,OP,p_,c=1):
    ...       Pt = [(0,0,SP[0][0])]
    ...       for i,(k,k_next) in enumerate(zip(p_,p_[1:])):
    ...           delta = c*(OP[i+1][k]-OP[i+1][k+1])/(SP[i+1][k]-SP[i+1][k+1])
    ...           x = delta - Pt[-1][0]
    ...           Pt.append( (delta,Pt[-1][1]-x*SP[i][k],SP[i+1][k_next]) )    
    ...       return (Pt[-1][0]*Pt[-1][2]+Pt[-1][1]-max(c*( Pt[-1][2]-K),0),Pt)


.. end of output

.. code-block:: python

    sage: calculate_evo(SP,OP,[0,0,1,2])[0]
    -15

.. end of output

.. code-block:: python

    sage: for path in all_paths:
    ...       print( SP[-1][path[-1]],calculate_evo(SP,OP,path)[0],-max(SP[-1][path[-1]]-K,0) )
    160 -15 -60
    120 -15 -20
    120 -15 -20
    80 -15 0
    120 -15 -20
    80 -15 0
    80 -15 0
    40 -15 0

.. end of output



Niezerowa stopa procentowa
^^^^^^^^^^^^^^^^^^^^^^^^^^

Pomińmy teraz nierealistyczne założenie o niezerowej stopie procentowej.

max(0,K\-s) \- czyli mamy do czynienia z opcją sprzedaży

 


.. code-block:: python

    sage: rate = 28.59
    sage: (1+rate/3/100).n(),exp(rate/3/100).n()
    (1.09530000000000, 1.09998880227224)

.. end of output

.. code-block:: python

    sage: C = exp(rate/3/100).n()
    sage: C
    1.09998880227224

.. end of output

.. code-block:: python

    sage: C=1.1


.. end of output

Generujemy drzewko prawdopodobieństw arbitrażowych:


.. code-block:: python

    sage: QP = []
    sage: for k in range(N):
    ...       q_ = [ (sp*C-sp1)/(sp0-sp1) for j,(sp,sp0,sp1) in enumerate(zip(SP[k],SP[k+1
    sage: ],SP[k+1][1:]))]
    ...          # print( k,j,sp,sp0,sp1,(sp*C-sp1)/(sp0-sp1) )
    ...       QP.append(q_)


.. end of output

.. code-block:: python

    sage: QP
    [[0.750000000000000], [0.800000000000000, 0.700000000000000], [0.850000000000000, 0.750000000000000, 0.650000000000000]]

.. end of output

.. code-block:: python

    sage: plot_tree(SP)

.. image:: ARF2_model_dwumianowy_media/cell_83_sage0.png
    :align: center


.. end of output

Generacja drzewka prawdopodobienstw  :math:`q=q_t`


.. code-block:: python

    sage: K = 100
    sage: OP = [ [max(0,K-s) for s in SP[N]] ]
    sage: for idx in range(N):    
    ...       el = [ 1/C*(QP[N-idx-1][i]*OP[-1][i]+(1-QP[N-idx-1][i])*OP[-1][i+1]) for i in range(len(OP[-1])-1)] 
    ...       OP.append(el)
    sage: OP.reverse()


.. end of output

.. code-block:: python

    sage: plt=plot_tree2(SP,OP)
    sage: plt.set_axes_range(ymax=170.0)
    sage: plt += line([(0,100),(3,100* exp(rate/100))],color='red')
    sage: plt += line([(i,100*(1+rate/3/100.)^i) for i in range(4)],color='green')
    sage: plt

.. image:: ARF2_model_dwumianowy_media/cell_79_sage0.png
    :align: center


.. end of output

.. code-block:: python

    sage: OP
    [[3.13673929376408], [0.826446280991734, 11.3223140495868], [0.000000000000000, 4.54545454545454, 30.9090909090909], [0, 0, 20, 60]]

.. end of output

.. code-block:: python

    sage: q= 0.657756377113472
    sage: 1/C*(q*20+(1-q)*60)
    30.6270408322374

.. end of output

.. code-block:: python

    sage: plot_tree(SP)

.. image:: ARF2_model_dwumianowy_media/cell_123_sage0.png
    :align: center


.. end of output

.. code-block:: python

    sage: path = [0,0,0,1]
    sage: path = [0, 0, 1, 2]
    sage: plt =  plot_tree2(SP,OP)
    sage: plt += line( [( i,SP[i][p_] ) for i,p_ in enumerate(path)],color='red')
    sage: plt.set_axes_range(xmin=-1)
    sage: plt

.. image:: ARF2_model_dwumianowy_media/cell_121_sage0.png
    :align: center


.. end of output

 *Są cztery możliwości: kupno i sprzedaż, opcja put,call \- chyba żle jest ...* 


.. code-block:: python

    sage: def calculate_evo(SP,OP,p_,c=1,rate=28.59,depozyt=0):
    ...       """ Zwraca zysk/strate na zabezpieczeniu pozycji opcji P/C technika delta-hegde
    ...       
    ...       :param SP: drzewo cen akcji
    ...       :param SP: drzewo cen opcji
    ...       :param c: 1 - dla wystawienia opcji, -1 - dla kupna opcji
    ...       """
    ...       C = exp(rate/3/100).n()
    ...       Pt = [(0,depozyt,SP[0][0])]
    ...       for i,(k,k_next) in enumerate(zip(p_,p_[1:])):
    ...           delta = c*(OP[i+1][k]-OP[i+1][k+1])/(SP[i+1][k]-SP[i+1][k+1])
    ...           x = delta - Pt[-1][0]
    ...           #print( delta,x,-x*SP[i][k] )
    ...           Pt.append( (delta,C*( Pt[-1][1]-x*SP[i][k]),SP[i+1][k_next]) )    
    ...       return (Pt[-1][0]*Pt[-1][2]+Pt[-1][1]-c*max(c*( Pt[-1][2]-K),0),Pt)


.. end of output

.. code-block:: python

    sage: [SP[i][k] for i,k in enumerate(path)]
    [100, 120, 100, 80]

.. end of output

.. code-block:: python

    sage: calculate_evo(SP,OP,path,c=-1,rate=28.59)[1]
    [(0, 0, 100), (0.262396694214876, -28.8633425389616, 120), (0.113636363636363, -12.1131898459641, 100), (1/2, -55.8239405508766, 80)]

.. end of output

.. code-block:: python

    sage: calculate_evo(SP,OP,path,c=-1,rate=28.59)[0]
    4.17605944912340

.. end of output

Załóżmy, że kupiliśmy opcję za 2.5, wtedy mamy depozyt=2.5:


.. code-block:: python

    sage: calculate_evo(SP,OP,path,c=-1,rate=28.59,depozyt=-2.5)[0]*exp(-rate/100)
    0.637631093519873

.. end of output

Wartość opcji w czasie  :math:`t=3` wynosi:


.. code-block:: python

    sage: (OP[0][0])*1.1^3
    4.17499999999999

.. end of output

Efekt zabezpieczenia \- każdy scenariusz prowadzi do tego samego wyniku finansowego.


.. code-block:: python

    sage: for path in all_paths:
    ...       print( path,SP[-1][path[-1]],calculate_evo(SP,OP,path,c=-1,rate=28.59)[0] )
    [0, 0, 0, 0] 160 4.17544866397274
    [0, 0, 0, 1] 120 4.17544866397274
    [0, 0, 1, 1] 120 4.17605944912340
    [0, 0, 1, 2] 80 4.17605944912340
    [0, 1, 1, 1] 120 4.17667022805639
    [0, 1, 1, 2] 80 4.17667022805639
    [0, 1, 2, 2] 80 4.17707741815681
    [0, 1, 2, 3] 40 4.17707741815681

.. end of output

Widzimy, że dla każdego scenariusza mamy ten sam stan końcowy!



.. code-block:: python

    sage: exp(0.1/sqrt(3))^3
    e^(0.100000000000000*sqrt(3))

.. end of output





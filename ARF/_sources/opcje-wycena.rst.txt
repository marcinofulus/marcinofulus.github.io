Metody wyznaczania ceny opcji
=============================


Jak wyznaczyć cenę opcji?
-------------------------

Wyznaczenie ceny opcji polega na tym by określić jej wartość godziwą w
dowolnej chwili czasu. Wartość zależy od ceny aktywa w przyszłości a
ta z kolei zmienia się w losowy sposób.  Niestety, nie ma sposobu by
znać tę wartość z wyprzedzeniem.

Dlatego aby wyznaczyć cenę opcji posługujemy się modelami
teoretycznymi.  Istnieje wiele modeli stosowanych do tego
celu. Wszystkie modele zakładają, że proces ewolucji ceny aktywa jest
jest pewnym procesem losowym. Ponadto zakładamy, że mamy do czynienia
z rynkiem wolnym od arbitrażu na którym można bez ograniczeń i
prowizji handlowac dowolną ilością aktywów.

Najprostszym modelem jest dwumianowy model wyceny opcji. (*Cox,
Ross, Rubinstein, "Option pricing: Simplified Approach", Journal of
Financial Economics- September 1979*). Ten model wycenia europejską
opcję call na akcje spółki nie wypłacającej dywidendę. 

W modelu dwumianowym czas pozostały do wygaśnięcia opcji dzieli się na
dyskretne przedziały. Po każdy okresie czasu cena aktywa :math:`P`
zmienia się przyjmując jeden z dwu możliwych stanów. Może wzrosnąć do
wartości Pu (z prawdopodobieństwem p) lub zmaleć do wartości
:math:`P_d` (z prawdopodobieństwem :math:`1-p`), gdzie :math:`u > 1`,
:math:`d < 1`. Mając zbiór cen aktywa (np. akcji) w postaci drzewka,
można wycenić opcję przeprowadzając rachunek wstecz, począwszy od daty
wygaśnięcia.  Obliczenia wykonuje się w kierunku początku drzewa od
chwili :math:`T` do :math:`T-1`, dyskontując w tym przedziale czasowym
wartość portfela bezpiecznego składającego się z aktywa i opcji, po
stopie procentowej wolnej od ryzyka. Procedurę powtarza się aż do
chwili wystawienia opcji. Modele te są opisane w szczególach w
rozdziale o opcjach binarnych :ref:`binarne`.
 

Model minimalny - rynek dwustanowy jednookresowy
------------------------------------------------

Rozważmy najprostszy rynek uwzględniający nieprzewidywalną zmienność.
Wyobraźmy sobie, że mamy pewne aktywo :math:`S`, które w chwili
początkowej :math:`t=0` posiada wartość :math:`S(t=0)=S_0`. Po czasie
:math:`T` dopuszczamy jeden z dwóch możliwych scenariuszy: aktywo
drożeje do wartości :math:`S_{up}` albo tanieje do wartości
:math:`S_{down}`. W tym momencie prawdopodobieństwa każdego ze
scenariuszy są niewiadomą. Rynek jest jednookresowy, co oznacza, że
rozważamy tylko dwie chwile czasu: początkową: :math:`t=0` i przyszłą: :math:`t=T`.

Zakładamy, że na rynku istnieje możliwość ulokowania gotówki w depozyt
bankowy ze stopą procentową :math:`r`. Zakładamy, że taka operacja
jest pozbawiona jakiegokolwiek ryzyka. Innymi słowy po czasie
:math:`T` depozyt bankowy gwarantuje nam, że nasz kapitał będzie
wynosił :math:`S_0 e^{rT}`.

Kolejnym elementem stosowanym przy wycenie instrumentów, co do których
przyszłości nie mamy pewności, jest pojęcie rynku wolnego od
arbitrażu. Arbitraż oznacza, że startując z pewnego kapitału możemy
zarobić - w sensie wartości średniej, kupując lub sprzedająć dostępne
instrumenty. Zarobek oznacza oczywiście, że po operacji będziemy mieli
więcej środków niż dał by nam depozyt bankowy. Oczywiście musimy wziąć
pod uwagę wartości średnie, jeśli występują losowo zmieniające się
aktywa.

Okazuje się, że jeśli przyjmiemy założenie rynku wolnego od arbitrażu,
to przy ustalonych stanach aktywa :math:`S_{up}` i :math:`S_{down}`,
prawdopodobieństwo tego, że aktywo podrożeje :math:`p` musi spełniać:

.. math::
  :label: Parb

   p S_{up} + (1-p) S_{down} = S_0 e^{rT}

Dlaczego? Jeśli prawdopodobieństwo to było by większe, wtedy
moglibyśmy kupić aktywo i w sensie wartości średniej otrzymalibyśmy
więcej niż lokata bankowa. Arbitraż byłby możliwy. W przeciwnym
przypadku posiadając aktywo moglibyśmy je sprzedać i ulokować środki
na depozycie. Po okresie :math:`T` za wartość depozytu moglibyśmy
nabyć więcej jednostek aktywa niż mieliśmy na początku. Znowu
zyskaliśmy w sensie wartości średniej.

Równanie :eq:`Parb` jest podstawą konstrukcji wszystkich metod
wyceny instrumentów finansowych. Korzystając z niego możemy się
przekonać jaka jest wartość instrumentu w chwili początkowej czyli
wycenić dany instrument.

Jeśli znamy, albo założymy, wartości cen po czasie :math:`T`, to
równanie :eq:`Parb` jest równaniem na prawdopodobieństwo
:math:`p`. Możemy je wyliczyć. Wtedy mając wszystkie dane na temat
drzewa kombinacji, jesteśmy w stanie analizować proces ewolucji cen
różnych instrumentów na takim drzewie.


Wycena opcji na drzewie binarnym
--------------------------------

.. important::

   Do analizy zachowania się ceny na drzewie będziemy korzystać z
   kilku funkcji pomocniczych. Dlatego należy wczytać poniższą
   komórkę:

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

       print(  "OK - wczytano funkcje pomocnicze" )

   .. end of output


Rozważmy drzewo multiplikatywne i instrument o wartości początkowej
:math:`S_0`. Narysujmy drzewo możliwych scenariuszy po pięciu
miesiącach, przyjmując jeden okres modelu jako jeden miesiąc:

.. sagecellserver::

   N = 5
   SP = gen_recombining(N,SP=50,q=0.1224)
   plot_tree(SP)

Niech roczna stopa procentowa wynosi 10% a cena wykupu opcji
:math:`K=50`. Łatwo się przekonać, że takie drzewo jest wolne od
arbitrażu dla miary określonej przez :math:`p=0.5073`.

.. sagecellserver::

   p = 0.5073
   Q = [p,1-p]
   K = 50
   r = 10.0
   C  = exp(r/100*1/12.).n()

Aby wycenic opcje postępujemy w następujący sposób. W ostatnim okresie
cena europejskiej opcji kupna (call) zależy tylko od ceny aktualnej
aktywa oraz ceny wykupu i jest równa:

.. sagecellserver::

   [max(0,s-K) for s in SP[N]]

Znając te liczby możemy obliczyć cenę opcji w przedostatnim okresie
rozliczeniowym. Skorzystamy z tym celu z równania :eq:`Parb`, dla ceny
nie aktywa podstawowoego ale opcji.  Zauważmy, że prawdopodopieństwa
:math:`p` i :math:`1-p` obliczyliśmy z równania :eq:`Parb` dla cen
opcji. Mamy więc:

.. math::

    S_{i} = e^{-r T}\left( p S^{+}_{i+1} +(1-p) S^{-}_{i+1} \right)


Możemy więc napisać następujący algorytm. Zaczynamy od ceny opcji w
chwili :math:`t=T` - czyli od prawej strony drzewa binarnego, która
jest dana przez :math:`\mathrm{max}(0,S-K)`. Następnie stosując wzrór
:eq:`Parb` dla każdego rozgałędzienia z osobna wyliczamy ceny
arbitrażowe dla czasu o jeden okres wcześniej.  Podstępując dalej w
ten sposób możemy otrzymać całe drzewo cen:

.. sagecellserver::

   OP = [ [max(0,s-K) for s in SP[N]] ]
   for idx in range(N):
       el = [ 1/C*(p*OP[-1][i]+(1-p)*OP[-1][i+1]) for i in range(len(OP[-1])-1)] 
       OP.append(el)
   OP.reverse()

   print( "Cena opcji:",OP[0] )
   plot_tree2(SP,OP)


Można jeszcze sobie zadać pytanie jaką intepretacje mają poszczególne
ceny w okresach pośrednich?  Weżmy z powyższego rysunku punkt z ceną
:math:`8.2`. Jest to cena opcji okresie :math:`3` w przypadku, gdy cena
aktywa w tym momencie wynosi :math:`56.1`. Tą ostatnią cenę odczytujemy z
poprzedniego wykresu drzewa cen instrumentu bazowego.


Powyższy algorytm wycenia opcję nie tylko w okresie początkowym, ale i
w każdej chwili pośredniej. Jeżeli opcja jest typy europejskiego to
możemy uprościć ten proces. Zauważmy, że w tym przypadku cena zależy
tylko od rozkładu cen w chwili :math:`t=T`. Całe drzewo składa się z
niezależnych zmian ceny, o tych samych prawdopodobieństwach :math:`p`
i :math:`1-p` w każdym rozgałęzieniu. Taki proces zmian jest
stochastycznym procesem Bernouliego. Dla takiego procesu znamy rozkład
końcowy po :math:`N` próbach:

.. math::
   :label: bernoulli

   P(k) = {N\choose k} p^k (1-p)^{N-k}.


Cena opcji zależy tylko od tego rozkładu końcowego i możemy ją
obliczyć jaka średnią funkcji zmiennej losowej po rozkładzie
:eq:`bernoulli`:

.. math::
   :label: srednia_bernoulli

   \langle S \rangle = \sum_{k=1}^{N} \mathrm{max}(0,S(k)-K) P(k) 



Implementacja tego wzoru w Sage jest bardzo prosta:

.. sagecellserver::

   r=0.1
   T = 5/12.
   p = 0.5073
   K = 50
   S0 = 50
   u = 1.1224
   d = 1/u
   N = 5
   print( exp(-r*T).n()*sum([ binomial(N,j)*p^(j)*(1-p)^(N-j)*max(S0*u^j*d^(N-j)-K,0) for j in range(N+1)]) )


Wykonując ostatnią komórkę powinniśmy dostać tą samą liczbę jak w
procesie wyceny na całym drzewie.


Model ciągły
------------

Obok modeli dyskretnych do opisu ewolucji ceny danego aktywa stosuje
się modele ciągłe. Można by zadać sobie pytanie do czego jest
potrzebne takie podejscie, skoro czas w praktyce jest naturalnie
podzielony na okresy związane z notowaniami np. dziennymy czy miesięcznymi? 

Jedną z głównych zalet jest możliwość uzyskania, przynajmniej w
najprostszych przypadkach, analitycznych wyników. Umożliwiają one
np. przeprowadzanie analizy wrażliwości, która była trudna do
przeprowadzenia tylko na podstawie symulacji.

Modele z czasem ciągłym można też rozwiązywać numerycznie stosując
dyskretyzację czasu z pewnym skończonym krokiem. Krok ten decyduje o
dokładności rozwiązania numerycznego, im miejszy krok tym większa
dokładność. Z drugiej strony powoduje to zwiększenie liczby obliczeń,
która w tym przypadku rośnie liniowo z ilością kroków. Jeśli mamy
model ciągły to mamy pełną kontrolę nad wielkością kroku i  ilością
obliczeń i możemy zoptymalizować  procedurę numryczną. 

Klasycznym modelem stosowanym do opisu ewolucji ceny aktywów, jest
tzw. `geometryczny ruch Browna:
<http://el.us.edu.pl/ekonofizyka/index.php/MKZR:Numeryczne_rozwi%C4%85zania_r%C3%B3wna%C5%84_stochastycznch-przyk%C5%82ady>`_. Dany
jest on przez równanie Langevina:

.. math::
   :label: SDE1
           
    dS(t) = \mu S(t) dt + \sigma S(t) d W(t),

gdzie :math:`S` jest procesem stochastycznym - ceną aktywa. Parametry
:math:`\mu` oraz :math:`\sigma` mają interpretację stopy wzrostu i
wariancji danego aktywa, odpowiednio. Proces taki jest łatwy do
zasymulowania numerycznego.

.. admonition:: Poeksperymentuj z komputerem

   Poniższa komórka zawiera kod programu symulującego proces
   geometrycznego ruchu Browna. W tablicy `numpy` zapisujemy historię
   `M` trajektorii składającą się z `N` punktów czasu. Innymi słowy
   :code:`S[3,5]` - szóstym krokiem czwartej trajektorii (indeksy
   zaczynają sie od zera).

   Poeksperymentujmy:

     - Wykonaj kilka razy komórkę. Za każdym wykonaniem generator
       liczb losowych :code:`np.random.randn` zwróci inną próbkę liczb
       gaussowskich i otrzymamy inne scenariusze symulowanej historii ceny. 

     - Jak wpływa wartość parametru :math:`r` oraz :math:`\sigma` na wygląd trajektorii?

     - Zmień liczbę trajektorii na dużo większą. Jak zmienia się czas obliczeń?

     - Dopisz linijkę obliczającą średnią cenę na końcu symulacji (w
       czasie :math:`t=T`) :code:`np.average(S[:,-1])`.

     - Wykonaj symulacje kilka razy - zobacz jak zmienia się średnia
       dla :math:`M=10,100,1000,10000`? Jak wpływa ilość trajektorii na wartość średnią?
       Można zautomatyzować ten proces uruchamiając część kodu w dodatkowej pętli. 
   
     - Wykonaj histogram cen końcowych i porównaj z rozkładem
       :math:`P(S,t=T)`. Można skorzystać z rozdziału `geometryczny ruch Browna
       <http://el.us.edu.pl/ekonofizyka/index.php/MKZR:Numeryczne_rozwi%C4%85zania_r%C3%B3wna%C5%84_stochastycznch-przyk%C5%82ady>`_ w którym znajduje się zarówno postać wzoru końcowego jak i algorytm obliczający
       histogram.
 

.. sagecellserver::

   import numpy as np 
   T,r,sigma = 1,0.1,0.2
   S0 = 100
   N = 300
   M = 10
   h = T/N;
   S = np.zeros((M,N))
   S[:,0] = S0*np.ones(M); 

   for i in range(1,N):
       S[:,i] = S[:,i-1] + r*S[:,i-1]*h + sigma*np.sqrt(h)*S[:,i-1]*np.random.randn(M)

   sum([line(enumerate(S[i,:]),thickness=0.2,figsize=4) for i in range(M)])




Opcję europejską możemy wycenić korzystając z symulacji procesu
losowego.  W tym celu generujemy :math:`M` trajektorii ceny
instrumentu podstawowego i obliczamy średnią z funkcji wyceny opcji w
chwili zapadalności. Używając powyższego schematu do symulacji
dynamiki instrumentu podstawowego jako geometrycznego ruchu Browna,
wystarczy wykonać operację uśredniania, która w przedstawia się
następująco:


.. code-block:: python
    
    np.exp(-r*T)*np.mean( np.maximum(S[:,N-1]-K,0) )  


Pełna procedura wyceny metodą Monte-Carlo wygląda następująco:


.. sagecellserver::

    
    K = 125.0
    r,T,sigma = 0.1, 1, 0.1
    S0 = 120   

    import numpy as np 
    N = 100
    M = 1000
    h = T/N;
    S = np.zeros((M,N))
    S[:,0] = S0*np.ones(M); 
    for i in range(1,N):
      S[:,i] = S[:,i-1] + r*S[:,i-1]*h + sigma*np.sqrt(h)*S[:,i-1]*np.random.randn(M)

    call_MC = np.exp(-r*T)*np.mean( np.maximum(S[:,N-1]-K,0) )
    put_MC = np.exp(-r*T)*np.mean( np.maximum(K-S[:,N-1],0) )
    print( "Wycena z symulacji Monte-Carlo, opcja Call:",call_MC," opcja Put:",put_MC )

    # sum([line(enumerate(S[i,:]),thickness=0.2,figsize=4) for i in range(123)])



Kolejnym elementem analizy jest określenie związku między modelami
ciągłym a drzewami dyskretnymi.



Związek pomiędzy modelem ciągłym i binarnym
-------------------------------------------

Rozważmy model dwustanowy - jednookresowy. Niech cenę aktywa określa
reguła multiplikatywna.

.. math::

   S_{1} = \left\{ 
    \begin{array}{l l}
       S_0 u   & \quad \text{z prawdopodobieństwem} \; p\\
       S_0 d   & \quad \text{z prawdopodobieństwem} \; 1-p
    \end{array} \right.


Mamy więc trzy liczby: :math:`p,u,d`, które określają ten
model. Chcemy zastosować go jako przybliżenie pewnego ciągłego procesu
ewolucji ceny, który jest scharakteryzowany przez dwa parametry:

- :math:`r t` - wolna od ryzyka stopa procentowa
- :math:`\sigma^2 t=\log(\frac{S_1}{S_0})` - średniokwadratowe
  odchylenie standardowe logarytmicznej stopy zwrotu (w modelu ciągłym).

Dla procesu ciągłego opisywanego przez geometryczny proces Wienera:

.. math::

   dS = rSdt+\sigma S dW,

prawdopodobieństwo ceny aktywa w czasie :math:`t` przy założeniu, że
cena w czasie :math:`S(t=0)=S_0` jest dane rozkładem lognormalnym:

.. math::
   :label: eq:logn

   P(S,t|S_0,0)= \frac{1}{\sqrt{2\pi\sigma^2 t S^2}} e^{-\displaystyle\frac{(\log(\frac{S}{S_0})-(r-\frac{1}{2}\sigma^2)t)^2}{2\sigma^2 t}}


Wykorzystując wzory na średnią i wariancję (np. z `wikipedii
<http://pl.wikipedia.org/wiki/Rozk%C5%82ad_logarytmicznie_normalny>`_)
i porównując z postacią rozkładu :eq:`eq:logn` otrzymujemy wzory na
wartość oczekiwaną i wariancję procesu ciągłego:

.. math:: 
   :label: eq:long_EV

   E(S) = S_0 e^{r t} \\
   Var(S)=   S_0^{2} {\left(e^{\sigma^{2} t} - 1\right)} e^{2 \, r t}


Chcemy by jeden krok procesu binarnego odtwarzał przynajmniej dwa
pierwsze momenty procesu ciągłego: średnią i wariancję. Tak
więc proces dyskretny będzie musiał spełnić dwa równania:

.. math::
   :label: eq:cond

   E(S) = p S_0 u+(1-p) S_0 d \\
   Var(S)=  p (S_0 u)^2+(1-p) (S_0 d)^2 - E(S)

gdzie podstawiamy wartości średniej i wariancji rozkładu lognormalnego
korzystając z :eq:`eq:long_EV`.

Mamy więc dwa warunki i trzy zmienne do ustalenia, co powoduje, że
potencjalnie może być nieskończenie wiele rozwiązań. Rozważmy pierwszy
przypadek w którym przyjmiemy:


.. math::
   :label: eq:crr1

   d = \frac{1}{u}.


Taki wariant drzewa binarnego jest znany jako model **Coxa, Rossa i
Rubinsteina (CRR)**. Rozwiązując układ równań :eq:`eq:crr1`, w
przybliżenie małego czasu :math:`t`, otrzymujemy wzory wiążące model ciągły z  drzewem binarnym:


.. math::
   :label: eq:crr

   p &= \frac{e^{rt}-d}{u-d} \\
   u &= e^{\sigma \sqrt{t}} \\
   d &= e^{-\sigma \sqrt{t}}.


Wyprowadzenie tych wzorów można łatwo otrzymać na przykład stosując
system algebry komputerowej. I tak, zdefiniujmy najpierw zmienne i
wzory na średnią i wariancję rozkładu lognormalnego oraz zdefiniujmym
układ :eq:`eq:cond`:

.. sagecellserver::
   
    var('r,t,u,d,S0,p,sigma')
    lognormE = S0*exp(r*t)
    lognormVar = S0^2*exp(2*r*t)*(exp(sigma^2*t)-1)
    show([lognormE,lognormVar])

    eq1  = lognormE == p*S0*u+(1-p)*S0*d
    eq2  = lognormVar ==(p*(S0*u)^2+(1-p)*(S0*d)^2) - lognormE^2

    show([eq1,eq2])


Rozwiążmy teraz pierwsze równanie ze względu na :math:`p`

.. sagecellserver::

    psol = solve(eq1,p,solution_dict=True)[0]
    p.subs(psol).show()
   
a następnie podstawmy wynik do drugiego równania i skorzystajmy z
założenia :eq:`eq:crr1`:

.. sagecellserver::

    solsu = (eq2).subs(psol).subs(d=1/u).solve(u)
    expr = solsu[1].rhs()
    expr.show()

Ponieważ interesuje nas granica małych czasów to możemy rozwinąć ten
nieco długi wzór w szereg Taylora w punktcie :math:`t=0` i ograniczyć
się do wyrazów pierwszego rzędu w czasie. Zauważmy, że to rozwinięcie
jest identyczne z rozwinięciem drugiego równania ze wzorów
:eq:`eq:crr`, co kończy nasze wyprowadzenie:


.. sagecellserver::

    expr.taylor(t,0,1).show()
    exp(sigma*sqrt(t)).taylor(t,0,1).show()


Możemy też pokusić się o rozwiązanie układu równań w innej
parametryzacji, w której mamy:

.. math::
   :label: eq:JR

   p &= \frac{1}{2} \\
   u &= e^{\sigma \sqrt{t}+(r-\frac{\sigma^2}{2})*t)}\\
   d &= e^{-\sigma \sqrt{t}+(r-\frac{\sigma^2}{2})*t)}. 



Taki przypadek jest znany jako parametryzacja
Jarrowa-Rudda. Sprawdźmy, czy rzeczywiście to zachodzi. W równaniach
podstawmy więc od razu :math:`p = \frac{1}{2}` i porównajmy
rozwinięcia w szereg wyników oraz rozwinięcia równań :eq:`eq:JR`:

.. sagecellserver::

   sols = solve([eq1.subs(p==1/2),eq2.subs(p==1/2)],[u,d])
   print( "pełne rozwiązanie:")
   show(sols[1])
   print( "Rozwinięcia w t=0:" )
   sols[1][0].rhs().taylor(t,0,1).show()
   sols[1][1].rhs().taylor(t,0,1).show()
   print( "Rozwinięcia wzorów w  t=0:"  )
   exp(sigma*sqrt(t)+(r-sigma^2/2)*t).taylor(t,0,1).show()
   exp(-sigma*sqrt(t)+(r-sigma^2/2)*t).taylor(t,0,1).show()


Ważną uwagą jest to, że model drzewa binarnego i model ciągły jest
równoważny tylko w granicy :math:`t\to 0.` Oznacza to, że wyceniając
pewnien instrument jednookresowym modelem dyskretnym otrzymamy spore
różnice w stosunku do modelu ciągłego, jeśli interesująca nas skala
czasowa będzie duża.

Sytuacja jednak się zmienia jeśli zastosujemy model
wielookresowy. Wtedy nasz czas możemy podzielić na wiele odcinków a
liczba tych podziałów będzie zależała od tego jaką dokładność chcemy
osiągnąć. Wycena za pomocą modelu wielokresowego będzie dążyła do
modelu ciągłego w granicy :math:`n\to \infty.`

Przykład - wyceny opcji z danymi z rynku ciągłego.

.. sagecellserver::

   T = 5/12.
   N = 123
   sigma = 0.4
   K = 50
   r = 10.0

   u = exp(sigma*sqrt(T/N))
   d = 1.0/u
   p = (exp(r/100*T/N)-d)/(u-d)
   C  = exp(r/100*T/N).n()

   SP = gen_recombining(N,SP=K,q=u-1.0)

   OP = [ [max(0,s-K) for s in SP[N]] ]
   for idx in range(N):
       el = [ 1/C*(p*OP[-1][i]+(1-p)*OP[-1][i+1]) for i in range(len(OP[-1])-1)] 
       OP.append(el)
   print( OP[-1] )





Wzory Blacka Scholesa dla europejskiech opcji Call i Put
--------------------------------------------------------

W tym rozdziale przedstawione zostaną własności metody opartej o ciagły proces
losowy. Olbrzymią zaletą jest istnienie prostych analitycznych
wzorów na cenę opcji Europejskich, co pozwala na łatwą ich analizę i
poznanie własności.

Model dwumianowy zakładał stacjonarny dwumianowy proces stochastyczny
dla ruchu ceny aktywa (akcji) zachodzący w dyskretnych przedziałach
czasowych. Jeśli przejdziemy do granicy skracając dyskretne okresy
czasowe to ten stochastyczny proces stanie procesem dyfuzji (proces Ito) zwanym geometrycznym ruchem Browna. Podobnie jak w poprzednim modelu dwumianowym konstruowany jest portfel wolny od ryzyka
składający się z aktywa i wystawionej opcji call. Taki portfel
generuje bezpieczna stopę zwrotu. Struktura zabezpieczonego portfela
posiada formę zbliżoną do równania dyfuzji ciepła w fizyce.

Wzór Blacka Scholesa na wartość opcji nie wypłacającej dywidendy przyjmuje postać:

Opcja Call

.. math::

   C(S_0,K,r,T,\sigma,r) = S_0 F(d_1) - K e^{-rT} F(d_2)

a opcja Put

.. math::

   P(S_0,K,r,T,\sigma,r) = K e^{-rT} F(-d_2) - S_0  F(-d_1)

 
gdzie symbole :math:`d_1,d_2` oznaczają:

.. math::

   d_1 = \frac{\ln (S_0/K) + (r+\frac{1}{2} \sigma ^2)T}{\sigma \sqrt{T}}

a

.. math::

   d_2 = d_1 - \sigma \sqrt{T}


Funkcja :math:`F(x)` jest dystrybuantą `rozkładu normalnego
<http://pl.wikipedia.org/wiki/Rozk%C5%82ad_normalny>`_ o średniej zero i
jednostkowej variancji. Możemy więc wyrazić ją przez funkcja błędu Gaussa:

.. math::

   F(x) =  \frac{1}{2} \, \text{erf}\left(\frac{1}{2} \, \sqrt{2} x\right) + \frac{1}{2}


Powyższe wzory możemy wprowadzić do systemu Sage i zbadać ich własności:


.. admonition:: Poeksperymentuj z komputerem


   Zbadaj własności wzorów na wycenę opcji Call. Zauważmy, że poniższy
   wykres jest wykresem ceny opcji a nie wykresem zysk/strata. Linia
   niebieska to cena kupna opcji a czerwona to cena jej wykonania.

   - Ustaw :math:`\sigma,r,T` na zero. Jak można zinterpetować taki profil ceny?
   - Zwiększ :math:`\sigma` - co się dzieje z ceną? Jak zmienia się jej wartość czasowa?
   - Zostawiąjąc niezmienne (ale dodatnie :math:`\sigma`) zwiększ
     stopę procentową. Pojawia się dodatkowa linia będąca asymtotą
     wzoru Blacka-Scholesa. Co to oznacza?
   
 

 
.. sagecellserver::
     
    var('S')
    def longCALL(S,K,P=0):
        return max_symbolic(S-K,0)-P
    def longPUT(S,K,P=0):
        return max_symbolic(K-S,0)-P
    def shortCALL(S,K,P=0):
        return -max_symbolic(S-K,0)+P
    def shortPUT(S,K,P=0):
        return -max_symbolic(K-S,0)+P


    var('sigma,S0,K,T,r')
    cdf(x) = 1/2*(1+erf(x/sqrt(2)))
    d1=(log(S0/K)+(r+sigma**2/2)*T)/(sigma*sqrt(T))
    d2=d1-sigma*sqrt(T)
    C(S0,K,r,T,sigma) = S0*cdf(d1)-K*exp(-r*T)*cdf(d2)
    P(S0,K,r,T,sigma) = K*exp(-r*T)*cdf(-d2)-S0*cdf(-d1)

    def plotBS(OPTION=longCALL,K=125,sigma=.1,r=0.0,T=1, c='red'):
        var('S')
        S1,S2 = 100,160

        if "CALL" in OPTION.__name__:
            cena = C
        else:
            cena = P
        if "short" in OPTION.__name__:
            k = -1.0
        else:
            k = 1.0


        p  = plot( OPTION(S,K),(S,S1,S2),color=c,thickness=2.5)
        p += plot( OPTION(S,exp(-r*T)*K),(S,S1,S2),color='gray',thickness=.5)
        p += plot(k*(cena(x,K,r,T,sigma)),(x,S1,S2),color='blue',thickness=1)
        p += point([(K,0)],color='brown',size=40,gridlines=[[K],[]])
        p += text(r"$K$",(K,2))

        return p

    @interact
    def _(s=slider(0.001,0.5,0.02,label='volatility',default=0.1),r=slider(0,0.1,0.01),T=slider(1,12,1),K=slider(104,150,1,default=129)):

        p = plotBS(OPTION=longCALL,K=K, c='red',sigma=s,r=r,T=T)
        p.set_axes_range(ymax=50,ymin=0)
        p.show(figsize=6)



Wycena ze wzorów Blacka-Scholesa a wycena Monte-Carlo
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


W modelu Blacka-Scholesa zakłada się, że instrument podstawowy ( zmiana jego ceny)
zachowuję się jak geometryczny ruch Browna. Można więc przypuszczać,
że wycena opcji metodą Monte-Carlo, stosując model ciągły powinna
odtworzyć liczby pochodzące ze wzorów Blacka-Scholesa. 


.. admonition: Poeksperymentuj z komputerem 

   Sprawdź jak działa wycena różnymi metodami w praktyce:

     - wykonaj poniższą komórkę
     - sprawdź czy otrzymałeś ten sam wynik
     - co można zrobić by poprawić dokładność wyniku z symulacji Monte-Carlo?
     - ile czasu potrzeba by wycenić poniższą opcję z dokładnością do jednego procenta?



.. sagecellserver::

    
    var('sigma,S0,K,T,r')
    cdf(x) = 1/2*(1+erf(x/sqrt(2)))
    d1=(log(S0/K)+(r+sigma**2/2)*T)/(sigma*sqrt(T))
    d2=d1-sigma*sqrt(T)
    C(S0,K,r,T,sigma) = S0*cdf(d1)-K*exp(-r*T)*cdf(d2)


    K = 125.0
    
    r,T,sigma = 0.1, 1, 0.1
    S0 = 120   
    print( "Wycena ze wzoru:",C(S0,K,r,T,sigma).n() )

    import numpy as np 
    N = 100
    M = 1000
    h = T/N;
    S = np.zeros((M,N))
    S[:,0] = S0*np.ones(M); 
    for i in range(1,N):
      S[:,i] = S[:,i-1] + r*S[:,i-1]*h + sigma*np.sqrt(h)*S[:,i-1]*np.random.randn(M)

    call_MC = np.exp(-r*T)*np.mean( np.maximum(S[:,N-1]-K,0) )
    put_MC = np.exp(-r*T)*np.mean( np.maximum(K-S[:,N-1],0) )
    print( "Wycena z symulacji Monte-Carlo:",call_MC,put_MC )

    # sum([line(enumerate(S[i,:]),thickness=0.2,figsize=4) for i in range(123)])






Porównanie wyceny modelem binarnym i modelem wyceny Blacka Scholes'a
--------------------------------------------------------------------

Załóżmy, że wyceniamy opcję europejską.  Można zadać sobie pytanie o
ile będą różniły się wyceny według modelu ciągłego i binarnego z
:math:`N` okresami. W tym celu definiujemy sobie funkcje wyceniające
opcje modelem binarnym :code:`Bin_Call`. Można narysować wykres ceny
opcji od ilości pokoleń drzewa. Cena wynikającą ze wzoru
Blacka-Scholesa będzie zaznaczoną przerywaną poziomą linią.


.. admonition:: Poeksperymentuj z komputerem

   Poniższy kod zawiera zaimlementowaną funkcję wyceny opcji
   europejskie kupna oraz rysuje wykres jej wyceny w zależności od
   ilości okresów.

   - Jaki jest błąd względny dla małej liczby okresów: :math:`N=1,2,3`?
   - Zaimplementuj podobne porównanie dla opcji sprzedaży.
   - Czy dla dużych :math:`N` cena opcji zależy od metody jej wyceniania?


.. sagecellserver::

     def Bin_Call(N,S0,K,r,T,sigma):
         u = exp(sigma*sqrt(T/N))
         d = 1.0/u
         p = (exp(r*T/N)-d)/(u-d)
         return exp(-r*T).n()*sum([binomial(N,j)*p^j*(1-p)^(N-j)*max(S0*u^j*d^(N-j)-K,0) for j in range(N+1)])

     sigma,S0,K,T,r=0.1,120,125,1,0.1

     point( [(i,Bin_Call(i,S0,K,r,T,sigma)) for i in range(1,36,1)], \
       gridlines=[None,[C(S0,K,r,T,sigma).n()]],figsize=(8,2)).show()




.. _greeks:

Analiza wrażliwości
-------------------



Analiza wrażliwości określa  jak czuła jest cena opcji na zmianę
 wartości wielkości rynkowych. 

Wiemy, że na cenę opcji w chwili :math:`t=0` wpływają następujące
wielkości:

 - cena aktywa podstawowego: :math:`S` (w chwili :math:`t=0`),
 - cena wykonania: :math:`K`,
 - czas do wygaśnięcia: :math:`T`,
 - stopa procentowa wolna od ryzyka: :math:`r`,
 - zmienność ceny aktywa (*volatility*) :math:`\sigma` 


Powstaje pytanie jak cena opcji jest czuła na zmiany tych parametrów ?


Aby odpowiedzieć na to pytanie możemy posłużyć się, może nie
eleganckim ale usprawiedliwionym i skutecznym do tego celu,
rozwinięciem tej funkcji w szereg Taylora i uwzględnić w nim tylko
pierwsze pochodne cząstkowe (z wyjątkowo drugą pochodną względem
ceny opcji względem ceny aktywa).

W ten sposób określoną zmianę ceny przybliżamy otrzymanym wzorem.

Pochodne cząstkowe ceny opcji wchodzące w skład tego przybliżenia mają
znaczenie praktyczne będąc używane i oznaczane swymi nazwami.

Oznaczmy symbolem :math:`V` cenę naszej opcji. W przypadku
europejskiej opcji Put lub Call będziemy stosować symbole od
pierwszych liter, odpowiednio: :math:`P` :math:`C`. Tak więc dla
dowolnej opcji zawsze możemy zapisać:

.. math::

   \Delta V \simeq \frac{\partial V}{\partial T} \Delta T + \frac{\partial V}{\partial S} \Delta S + \frac{1}{2} \frac{\partial ^2 V}{\partial S^2}(\Delta S)^2 + \frac{\partial V}{\partial \sigma} \Delta \sigma + \frac{\partial V}{\partial r} \Delta r .

Współczynniki w powyższym wzorze można łatwo obliczyć, jeśli dana jest
formuła  analityczna na cenę opcji. Najczęsciej spotykanym przypadkiem są
wzory  Blacka-Scholesa dla europejskich opcji kupna i
sprzedaży.


.. admonition:: Dla dociekliwych

   Spróbuj obliczyć poniższe współczynniki dla modelu Cox'a, Ross'a,
   Rubinsteina (CRR). Czy można je policzyć jeśli jedyną metodą wyceny
   jest metoda Monte Carlo?



Delta opcji
~~~~~~~~~~~


Zmiana ceny opcji przy zmianie ceny aktywa podstawowego nosi nazwę
współczynnika delta.

.. math::

   \Delta = \frac{\partial V}{ \partial S}


dla europejskiej opcji Call wycenionej według modelu Blacka-Scholesa
(bez dywidendy) wynosi ona:

.. math::

   \Delta_{Call} = N(d_1) 


a dla opcji Put

.. math::

   \Delta_{Put} = N(d_1) - 1

Powyższe wzory możemy otrzymać przez różniczkowanie wzorów
Blacka-Scholesa ze względu na :math:`S_0`. Sprawdźmy z pomocą systemu
algebry komputerowej czy, rzeczywiście są spełnione.

Po pierwsze wczytajmy sobie wzory Blacka-Scholesa:

.. sagecellserver::

    var('sigma,S0,K,T,r')
    cdf(x) = 1/2*(1+erf(x/sqrt(2)))
    d1=(log(S0/K)+(r+sigma**2/2)*T)/(sigma*sqrt(T))
    d2=d1-sigma*sqrt(T)
    C(sigma,S0,K,T,r) = S0*cdf(d1)-K*exp(-r*T)*cdf(d2)
    P(sigma,S0,K,T,r) = K*exp(-r*T)*cdf(-d2)-S0*cdf(-d1)


.. sagecellserver::

    try:
        print( bool( C.diff(S0) == cdf(d1) )  )
        print( bool( P.diff(S0) == cdf(d1)-1 )  )
        print( bool( C.diff(S0) - P.diff(S0) == 1 ) ) 
    except:
        print( "Wczytaj wzory Blacka-Scholesa!" )


Widać, że zachodzi własność:

.. math::

   \Delta_{call} - \Delta_{put} = 1,



Delta wskazuje na ilość akcji potrzebnych do otworzenia zwrotu z
opcji.

Np., :math:`\Delta_{call} = 0.80` znaczy ze działa jak 0.80
akcji. Jeśli cena akcji wzrośnie o 1, cena opcji call wzrośnie o 0.80.
cecha ta pozwala na budowanie strategii zabezpieczających. Ale o
zastosowania analizy wrażliwości w strategii zabezpieczania przed
ryzykiem można znaleźć w **Hedging za pomoca opcji**.

Narysujmy jak zależy dla pewnej opcji Call - Delta od ceny instrumentu
bazowego:

.. sagecellserver::
    
    try:
        p = plot( C.diff(S0)(0.1,S0,120,1,0.03),(S0,90,150),figsize=5)
        p += plot( C(0.1,S0,120,1,0.03)/10,(S0,90,150),color='gray')
        p.show()
    except:
        print( "Wczytaj wzory Blacka-Scholesa!" )



Współczynnik gamma
~~~~~~~~~~~~~~~~~~

*Gamma* drugą pochodną ceny opcji względem ceny akcji. Gamma jest
 pierwsza pochodną delta w stosunku do ceny aktywa. Gamma jest także
 nazywana *krzywizną*.

.. math::

   \Gamma_c = \frac{\partial ^2 C}{\partial S^2} = \frac{\Delta_c}{\partial S}

   \Gamma_p = \frac{\partial ^2 P}{\partial S^2} = \frac{\Delta_p}{\partial S}


Współczynnik gamma jest zatem miarą niestabilności współczynnika delta.

.. sagecellserver::

    try:   
        p = plot( C.diff(S0,2)(0.1,S0,120,1,0.03),(S0,90,150),figsize=5)
        p += plot( C.diff(S0)(0.1,S0,120,1,0.03)/10,(S0,90,150),color='gray')
        p += plot( C(0.1,S0,120,1,0.03)/100,(S0,90,150),color='gray')
        p.show()
    except:
        print( "Wczytaj wzory Blacka-Scholesa!" )


Interpretacja 

Jeżeli w wyniku zmiany kursu instrumentu bazowego współczynnik delta
zmieni się z 0.5 do 0.52 to wówczas zmiana delty o 0.02 określać
będzie wartość współczynnika gamma.

.. admonition:: Przykład. 

   Niech aktualna wartość instrumentu bazowego wynosi =75 jednostek
   pieniężnych. Aktualna wartość opcji = 0.35. Delta opcji = 0.16 a
   gamma opcji = 0.05.  Jaka jest wartość opcji jeżeli kurs
   instrumentu bazowego wzrośnie do 80?  

   A wiec zmiana ceny
   instrumentu bazowego = 5 a zmiana ceny wynikająca ze wsp. delta = 5
   x 0.16 = 0.80. Wzrost wartości instrumentu bazowego o 5 powoduje
   wzrost wartości delty a zatem należy wyznaczyć dodatkową zmianę
   wartości opcji wynikającą z gamma. Zmiana ceny wynikająca z gamma =
   0.5 x 0.05 x 52 = 0.62.

   Nowa wartość opcji to stara wartość + zmiana z delty + zmiany gamma
   czyli: 0.35 + 0.80 + 0.62 = 1.77


Współczynnik Theta
~~~~~~~~~~~~~~~~~~

Kolejną pochodną cząstkową jest wielkość zwana Theta. 

Określa ona jak się zachowa cena opcji call (put) jeśli zmieni się
czas do wygaśnięcia, a wszystko inne zostanie stałe?

Theta jest to pierwsza pochodna ceny względem czasu.

Opcje to „psujące się” aktywa, ponieważ wartość ich zanika po pewnym czasie
(wygaśnięcie).

Wartość opcji = wartość wewnętrzna + premia czasowa.

Wielkość tę dla opcja call i put wylicza się:

.. math::

   \Theta_c = \frac{\partial C}{\partial t}

   \Theta_p = \frac{\partial P}{\partial t}


Theta większa od zera gdyż im więcej  jest czasu do wygaśnięcia tym większa wartość opcji. 

Ale ponieważ czas do wygaśnięcia może tylko maleć theta jest
rozpatrywana jako wartość ujemna.  Biorąc pod uwagę możliwość
zajmowanej pozycji w opcjach należy pamiętać, że:

- Upływ czasu szkodzi posiadaczowi opcji. 
- Upływ czasu działa na korzyść temu co opcje wystawił. 

Ze wzoru Blacka Scholes można wyliczyć wartość: 

.. math::

   \Theta_c = - \frac{S \sigma e^{-.5(d_1 ^2)}}{2\sqrt{2\pi t}} -rKe^{-rt}N(d_2)

   \Theta_p = \frac{S \sigma e^{-.5(d_1 ^2)}}{2\sqrt{2 \pi t}} +rKe^{-rt} N(d_2)

.. sagecellserver::
    
    try:
        p = plot( C.diff(T)(0.1,S0,120,1,0.03),(S0,90,150),figsize=5)
        p += plot( C(0.1,S0,120,1,0.03)/10,(S0,90,150),color='gray')
        p.show()
    except:
        print( "Wczytaj wzory Blacka-Scholesa!" )


Liczenie  Theta - interpretacja 

Równania określają theta na rok. Np.  :math:`\Theta = -5.58`, znaczy,
że opcja straci 5.58 w wartości ceny na rok - czyli (0.02 na dzień).

Theta pozycji krótkich jest dodatnia. Theta pozycji długich jest
ujemna. Opcje at-the-money mają największe wartości theta.

Tabela poniżej  pokazuje znaki  pochodnych cząstkowych dla róznych pozycji opcji.

    ==========	=====	=====	=====
     .		Delta	Theta	Gamma
    ==========	=====	=====	=====
    Long call	 \+	 \-	 \+
    Long put	 \-	 \-	 \+
    Short call	 \-	 \+	 \-
    Short put	 \+	 \+	 \-
    ==========	=====	=====	=====	


Znak gamma jest zawsze przeciwny do znaku theta



Czułość względem odchylenia standardowego - Vega
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Odpowiada na pytanie, jak się zmieni wartość opcji Call (Put) jeśli
zmieni się odchylenie standardowe zwrotu czyli czułość na zmienność
(volatility) funkcji?

*Vega* pierwszą cząstkową pochodną ceny opcji względem zmienności
 (volatility) aktywa podstawowego.

.. math::

   \text{vega}_c = \frac{\partial C}{\partial \sigma}

   \text{vega}_c = \frac{\partial P}{\partial \sigma}





Im wyższa volatility tym większa wartość opcji.  Np., opcja o vega
0.30 zyskuje 0.30% wartości na każdy punkt procentowy wzrostu
spodziewanej zmienności aktywa.  Vega bywa także nazywane kappa,
omega, tau, zeta, lub sigma prim.  Ze wzoru Blacka Scholesa można
przykładowo wyliczyć wartości Vega.

.. math::

   \text{vega} = \frac{S\sqrt{t}e^{-0.5(d_1 ^2)}}{\sqrt{2\pi}}


Vega pozycji długich jest dodatnia. Vega pozycji krótkich jest ujemna.
Wartości opcji są **bardzo** czułe na zmianę odchylenia standardowego
ceny aktywa.  Im większe volatility, tym więcej są warte opcje call i
put.  Opcje at-the-money mają największą wartość Vega. Vega maleje dla
opcji in- oraz out-of-the-money. **Vega**, maleje wraz z upływem czasu
do terminu wygaśnięcia.


.. sagecellserver::

    var('sigma,S0,K,T,r')
    cdf(x) = 1/2*(1+erf(x/sqrt(2)))
    d1=(log(S0/K)+(r+sigma**2/2)*T)/(sigma*sqrt(T))
    d2=d1-sigma*sqrt(T)
    C(sigma,S0,K,T,r) = S0*cdf(d1)-K*exp(-r*T)*cdf(d2)
    plot( C.diff(sigma,1)(.1,S0,125,1,.1),(S0,70,150),figsize=5)



Rho
~~~

*Rho* pierwsza pochodna ceny opcji względem stopy procentowej wolnej od ryzyka:

.. math::

   \rho _c = Kte^{-rt}N(d_2)

   \rho _p = -Kte^{-rt}N(-d_2)


Rho jest najmniej znaczącą z pochodnych. Nawet jeśli opcja ma
wyjątkowo długie życie, zmiany stopy procentowej wpływają na premie
niewiele.


.. sagecellserver::

    try:
        p = plot( C.diff(r)(0.1,S0,120,1,0.03),(S0,90,150),figsize=5)
        p += plot( C(0.1,S0,120,1,0.03)/10,(S0,90,150),color='gray')
        p.show()
    except:
        print( "Wczytaj wzory Blacka-Scholesa!" )



Wycena opcji Amerykańskiej modelami binarnym i ciągłym
-------------------------------------------------------

Nie zawsze wycena opcji jest możliwa do wyliczenia poprzez uśrednianie po rozkładzie
brzegowym dla :math:`t=T`. Przykładem są opcje amerykańskie. Różnią się
one od europejskich tym, że prawo do zawarcia transakcji obowiązuje
nie tylko w chwili :math:`t=T`, ale w dowolnej chwili przed
nią. Posiadacz tego prawa musi zadecydować kiedy będzie chciał z tego
prawa skorzystać.

Procedura wyceny takiej opcji, będzie korzystała z pełnej informacji o
historii zmian ceny instrumentu. 

Algorytm wyznaczania ceny opcji korzysta z warunku braku
arbitrażu. Postępujemy podobnie jak przy wycenie opcji europejskiej na
całym drzewie. Jednak w każdym rozwidleniu drzewa, sprawdzamy czy
wartość otrzymana z warunku braku arbitrażu :eq:`Parb` nie jest
mniejsza od wartości wewnętrzej opcji. Jesli tak jest to wpisujemy
właśnie tą wartość wewnętrzą do drzewa, zamiast wartości wynikającej z
:eq:`Parb`. Poniżej prezentujemy możliwą implementację tego
algorytmu:

.. sagecellserver::

    T = 5/12.
    N = 8
    sigma = 0.4
    K = 50
    r = 0.26

    u = exp(sigma*sqrt(T/N))
    d = 1.0/u
    p = (exp(r*T/N)-d)/(u-d)
    C  = exp(r*T/N).n()

    S0 = K-15
    SP = gen_recombining(N,SP=S0,q=u-1.0)

    # PUT AM
    OP = [ [max(0,K-s) for s in SP[N]] ]
    for j in range(N):
        el = [ max( max(K-SP[N-j-1][i],0) , 1/C*(p*OP[-1][i]+(1-p)*OP[-1][i+1])) for i in range(len(OP[-1])-1)]
        OP.append(el)
    OP.reverse()

    def Bin_Put(N,sigma,S0,K,T,r):
        u = exp(sigma*sqrt(T/N))
        d = 1.0/u
        p = (exp(r*T/N)-d)/(u-d)
        return exp(-r*T).n()*sum([binomial(N,j)*p^j*(1-p)^(N-j)*max(K-S0*u^j*d^(N-j),0) for j in range(N+1)])

    print( "Opcja amerykańska:",OP[0],"Opcja europejska:",Bin_Put(N,sigma,S0,K,T,r) )
    

Widzimy, że wartość opcji amerykańskiej przy podanych parametrach
różni się znacznie od opcji europejskiej. Mozna się przypatrzeć na
drzewie w których miejscach wartość wewnętrzna będzie większa od
wartości arbitrażowej. Zobaczmy:


.. sagecellserver::

   table( [[max(l-K,0)>l2 for l,l2 in zip(b,b2)] for b,b2 in zip(SP,OP)] )


.. admonition:: Poeksperymentuj z komputerem

   - W powyższym kodzie pozmieniaj wartość początkową aktywa. Jak
     zmienia się cena opcji? Jak zmienia się tabela z ostatniej komórki
     Sage?

   - Zaimplementuj wycenę amerykańskiej opcji Call. Porównaj wartość z
     opcją europejska. Czy zaobserwowałeś coś dziwnego?

   - Zaimplementuj wycenę opcji amerykańskiej w oparciu o model ciągły
     stosując odpowiednie uśrednianie po trajektoriach.

..


   .. sagecellserver::

       T = 5/12.
       N = 8
       sigma = 0.4
       K = 50
       r = 0.26

       u = exp(sigma*sqrt(T/N))
       d = 1.0/u
       p = (exp(r*T/N)-d)/(u-d)
       C  = exp(r*T/N).n()

       S0 = K-15
       SP = gen_recombining(N,SP=S0,q=u-1.0)

       #call AM
       OP = [ [max(0,s-K) for s in SP[N]] ]
       for j in range(N):
           el = [ max( max(SP[N-j-1][i]-K,0) , 1/C*(p*OP[-1][i]+(1-p)*OP[-1][i+1])) for i in range(len(OP[-1])-1)]
           OP.append(el)
       OP.reverse()

       def Bin_Call(N,sigma,S0,K,T,r):
           u = exp(sigma*sqrt(T/N))
           d = 1.0/u
           p = (exp(r*T/N)-d)/(u-d)
           return exp(-r*T).n()*sum([binomial(N,j)*p^j*(1-p)^(N-j)*max(S0*u^j*d^(N-j)-K,0) for j in range(N+1)])


       table( [[max(l-K,0)>l2 for l,l2 in zip(b,b2)] for b,b2 in zip(SP,OP)] )






   .. sagecellserver::

       import numpy as np 
       N = 300
       M = 1000
       h = T/N;
       r = 0.1 
       S = np.zeros((M,N))

       S[:,0] = S0*np.ones(M); 
       for i in range(1,N):
         S[:,i] = S[:,i-1] + r*S[:,i-1]*h + sigma*np.sqrt(h)*S[:,i-1]*np.random.randn(M)

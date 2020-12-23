.. _kontrakty_terminowe:

Opcje
=====

Podstawowe cechy opcji
----------------------


Opcje stanowią podstawowy element innych instrumentów finansowych.
Opcje to instrument zwany instrumentem pochodnym, gdyż jego cena
zależy (pochodzi) od ceny innego aktywa.

Opcje to instrument finansowy, którego popularność szybko
rośnie. Opcje to instrument mądry, użyteczny ale i
niebezpieczny.  Ten wzrost stosowania opcji ma swe źródło w szczególnych cechach opcji.



Opcje:

- Stwarzają na rynku możliwości do korygowania ryzyka lub zmieniania
  przepływów przychodów, co bez ich istnienia nie byłoby możliwe.
- Stwarzają możliwość  stosowania dźwigni finansowej. 
- Mogą być używane jako generator dodatkowego dochodu z portfela
  inwestycyjnego.

Przykładowo opcje dają możliwość dźwigni finansowej. Efekt dźwigni
finansowej w przypadku opcji polega na tym, że przy pomocy względnie
małych sum pieniędzy możemy generować znaczne zyski.

Przykładowo popatrzmy na notowania cen akcji Yahoo w kilku kolejnych
dniach i cen opcji na zakup tych akcji w tym samym czasie.


    ==========			===================		===================
      czas    			cena  akcji Yahoo		cena opcji na akcje
    ==========			===================		===================
    DZIEŃ 1				100				5
    DZIEŃ 2				105				7
    DZIEŃ 3				111				9
    DZIEŃ 4				113			       10
    Zysk (%)				**13**			      **100**
    ==========			===================		===================


Jak widać w przypadku zmian cen akcji można było zarobić 13%
dysponując kwotą około 100 jednostek a na opcjach 100% dysponując
kwota około 10 jednostek. Opcja to niezłe narzędzie do spekulacji. Ale
to jest właśnie w niej niebezpieczne. Wszystkim zainteresowanym
polecamy przeczytanie ciekawego tekstu "10 mitów o instrumentach
pochodnych": `<http://www.cato.org/pubs/pas/pa-283.html>`_


Opcje mają i inne zastosowania. Głównie stosuje się je do
zabezpieczania przed niekorzystną zmianą cen instrumentów
finansowych. Temu ich zastosowaniu będzie poświecony poniższy tekst.

Co dają opcje swym posiadaczom. Za co płacą pieniądze kupując opcje?
Kupując opcje kupuje się możliwość wyboru w przyszłości. Prawo wyboru
jest niestety prawem ograniczonym, bo cena opcji wiąże się z ceną
aktywa. Opcje bowiem są oparte o prawo do aktywów.

Właściciel opcji może:

- Sprzedać ją komuś innemu. 
- Pozwolić jej wygasnąć (nie skorzystać z możliwości jakie  daje).
- Wykonać ją (czyli skorzystać z niej).


Opcja **call** i opcja **put**
------------------------------

Opcja **call daje prawo (ale nie nakaz) do kupienia** w określonym
okresie czasie aktywa za określoną cenę.

Nabywający opcji płaci pieniądze w wysokości **Premii** sprzedawcy
opcji w zamian za to prawo.

**Sprzedawca** opcji bierze pieniądze (**Premia**) za **obowiązek sprzedaży** w
określonym okresie czasu, aktywa, za określona cenę, jeśli posiadacz
opcji zechce skorzystać z tego prawa.

Opcja **call** to jak kupienie biletu do kina. Kupując bilet do kina
za jego cenę (Premia) możemy wybierać miedzy następującymi
możliwościami (wybór ograniczony w czasie - praktycznie do rozpoczęcia
seansu):

- Iść do kina i zobaczyć film (wykonanie opcji)
- Sprzedać posiadany bilet komuś innemu (np. z zyskiem jeśli seans
  jest wyjątkowo atrakcyjny)
- Nie iść do kina (pozwolić opcji na wygaśniecie).

Opcja **put** daje **prawo (ale nie obowiązek)** do sprzedaży aktywa w
określonym czasie, za określoną cenę. Kupujący opcję płaci pieniądze w
wysokości **Premii** sprzedawcy opcji w zamian za prawo do
sprzedania. **Sprzedawca** opcji bierze pieniądze w zamian za **obowiązek kupienia** określone aktywa za określoną cenę, w określonym czasie.
Nie jest koniecznym posiadanie aktywa przed wykorzystaniem prawa z
wystawienia opcji **Put**.

Aby wejść w posiadanie opcji, ktoś ją musi sprzedać (wystawić).  Jeśli
wystawi się opcję a nikt jej nie kupi można ją zniszczyć. Ilość opcji
call w obrocie nie jest równa ilości opcji put. Ilość opcji w obrocie
zmienia się w trakcie każdego dnia funkcjonowania rynku finansowego.


Terminologia rynku opcji
------------------------

Cena wykonania
~~~~~~~~~~~~~~

Cena za którą nabywca może kupić (w przypadku Call) lub sprzedać (w
przypadku Put) aktywo podstawowe.

Premia
~~~~~~

Cena opcji, płacona przez nabywającego, wystawcy opcji.  Każda opcja
posiada dwie ceny:

- Cenę sprzedaży (**bid**) czyli najwyższa cenę, jaką ktoś chce
  zapłacić za opcje.
- Cenę kupna (**ask**) czyli najniższą za którą ktoś chce sprzedać
  daną opcję.


Data wygaśnięcia/zapadalności T
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Jest to ostatni termin do wykorzystania opcji (jeśli to opcja
amerykańska), jedyna data do wykorzystania opcji (jeśli jest to opcja
europejska).

Różnica miedzy opcją amerykańską a europejską jest taka, że opcje
amerykańska możemy wykorzystać każdego dnia do terminu wygaśnięcia
(zapadalności) a opcje europejska tylko w dzień zapadalności. Po tym
terminie opcja wygasa.

Wykonanie
~~~~~~~~~ 

Kupno podstawowego aktywa (w przypadku call), sprzedaż aktywa
podstawowego (w przypadku put). Zazwyczaj jest jedna cena wykonania
powyżej i jedna cena poniżej aktualnej ceny aktywa.

Prawa i obowiązki
~~~~~~~~~~~~~~~~~


Tylko *posiadacz opcji* ma **prawo**. Prawo by sprzedać lub kupić aktywo
podstawowe. *Wystawca opcji* (sprzedający) ma wypełnić **obowiązek**
wynikający z prawa posiadacza opcji.

W przypadku kontraktu opcyjnego występują dwie transakcje związane z
tym kontraktem. Transakcja otwierająca zależność opcyjną to sprzedaż
opcji przez wystawiającego. Transakcja która kończy zobowiązanie
opcyjne jest nazywana transakcją zamknięcia. 

.. admonition:: UWAGA!

   Opcja call nie jest odwrotną transakcją do put ani put nie jest
   odwrotna do call. Ryzyko stron nie jest bowiem symetryczne. Można
   pozbyć się ryzyka wystawienia opcji poprzez zawarcie transakcji
   odwrotnej - t.j. wystawca opcji może pozbyć sie zobowiązania
   poprzez kupienie **identycznej** opcji.

Posiadając opcje posiadamy prawo wyboru. Jaka jest wartość takiego
prawa czyli co to jest wartość opcji? Opcja to prawo kupna lub
sprzedaży aktywa za określoną cenę. Jej wartość składa się z wartości
oceniającej aktualne warunki rynkowe (wartość wewnętrzna – intristic
value) oraz nadzieje na przyszłość, ocenę przyszłych warunków
rynkowych - wartość czasową (time value). Na wartość opcji czyli na
jej cenę składa się jej wartość wewnętrzna i jej wartość czasowa. Im
opcja jest bliższa wygaśnięcia tym wartość czasowa maleje.

Wartość wewnętrzna (*Intrinsic Value*)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


- dla opcji **call** jest różnicą pomiędzy ceną instrumentu bazowego,
  a ceną wykonania,
- dla opcji **put** jest różnicą pomiędzy ceną wykonania, a ceną
  instrumentu bazowego.

Wartość wewnętrzna przyjmuje tylko wartości dodatnie lub jest równa zero.

Opcja z zerowa wartością wewnętrzna nazywa się **out of the money**,
opcja z wartości a wewnętrzną większą od zera nazywa się **in the
money** a jeśli cena wykonania opcji jest równa cenie aktywa bazowego
opcje nazywa się **at the money**.


.. figure:: figs/inatout.png 
   :align: center
   :figwidth: 629px

   Ewolucja czasowa ceny aktywa. Jeśli mamy opcję Call o cenie wykupu
   :math:`K=125` to w obszarze czerwonym jest ona **out of the money**,
   w zielonym **in the money** a punktach w których kurs aktywa
   przechodzi przez cenę wykonania **at the money**.



Kupując opcje musimy się liczyć z dwoma opłatami
transakcyjnymi. Jedna - za zakup opcji, druga  opłata transakcji
nabycia/sprzedania aktywa. Wystawca opcji zarabia wartość premii jeśli
nabywca nie wykorzysta opcji.

Inwestor wyszukuje właściwą opcje kierując się (w przypadku akcji
spółki) Nazwą firmy, datą zapadalności (wygaśnięcia), ceną wykonania,
i typem opcji.



Profile ryzyka w czterech przypadkach
-------------------------------------


.. admonition:: Przykład
   
    Mamy następującą informacje:  Diora  Stycz.125.00 Call

    Gdzie:

    - Diora - nazwa spółki
    - Styczeń - data zapadalności, 
    - 125.00 - cena wykonania
    - *Call* - typ opcji.


    Przyjmijmy, ze cena takiej opcji cal wynosi **3.25** a cena opcji
    put **13.25** - jednostki monetarnej. Będziemy także oznaczać datę
    zapadalności jako :math:`t=T`, a chwilę obecną :math:`t=0`.


Long Call - kupujemy prawo kupna
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Zanim przystąpimy do analizy profili wypłat, omówimy dokładnie co
bedzie znajdowało się na poniższych wykresach. We wszyskich
przypadkach będziemy rozważać ten sam przypadek opcji na aktywo o
chwilowej cenie :math:`115`, i cenie wykonania w momencie czasu
:math:`t=T` wynosi :math:`K=125`. Rynkowa cena takiej opcji call i put
wynosi odpowiednio 3.25 i 13.25. Na poniższym rysunku znajdują się dwie
krzywe. Grubą niebieską linią zaznaczono profil wypłaty w czasie
:math:`t=T` od ceny jaką przyjmie aktywo w czasie :math:`t=T`. Cienką
czerwoną linią zaznaczono cenę opcji w czasie :math:`t=0`.  


.. figure:: figs/longcall0.* 
   :align: center
   :figwidth: 65%

   Cena akcji w :math:`t=0` (cienka czerwona linia) oraz :math:`t=T`
   (grubą niebieską linia).


Załóżmy teraz, że nabędziemy taką opcje w momencie :math:`t=0`. Jej
cena zgodnie z założeniami wynosi 3.25. Zakładając, że nie mieliśmy
żadnego kapitału, po takim zakupie jesteśmy zadłużeni na 3.25 i mamy
opcje z pewnym profilem wypłaty w okresie zapadalności
:math:`t=T`. Jeżeli wieć przesuniemy wykres o 3.25 do góry, to wykres
ceny opcji w czasie :math:`t=0` będzie przechodził przez zero
dokładnie dla tej wartości ceny aktywa jaka akurat jest w
:math:`t=0`. Dostaniemy więc wykres:


.. figure:: figs/longcall.* 
   :align: center
   :figwidth: 65%

   Long - Call: czyli nabyliśmy prawo do kupna po cenie :math:`K`.

Punkt na wykresię :math:`(115,0)` możemy interpetować jako stan
naszego portfela, bowiem, na chwilę zakupu opcji :math:`t=0` mamy
dokładnie zero a aktywo ma wartość 115. Czy zarobimy na kupnie tej
opcji zależy od scenariusza ewolucji ceny aktywa na rynku w czasie do
:math:`t=T`. W przypadku opcji europejskiej, jedynie od jego 
wartościm w chwili wygasania opcji.


Innymi słowy: 

Profil zysku dla posiadacza opcji *call (long call)* w zależności od
ceny wykonania aktywa jest następujący: jeśli cena aktywa na czas
wykonania jest niższa od ceny wykonania, posiadacz opcji ponosi koszt
jej zakupu, bo oczywiście pozwoli jej wygasnąć a kupi aktywo
poniższych cenach rynkowych. W naszym przypadku -3.25.  Gdy cena
aktywa wzrośnie powyżej ceny wykonania + cena opcji (125+3.25=128.25)
(break even point) zysk będzie praktycznie nieograniczony i zależny od
wzrostu.  Między ceną wykonania a ceną wykonania + cena opcji zysk
będzie ujemny ale ograniczony . Te punkty punkty zaznaczone są
czerwonymi kropkami na osi odciętych na powyższym wykresie.


Short Call - sprzedajemy prawo kupna
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

W przypadku strony wystawiającej (sprzedającego opcje call) zysk
pojawia się w wysokości premii jeśli kupujący nie skorzysta z opcji.
Jeśli cena aktywa będzie wyższa od ceny wykonania sprzedający ponosi
stratę i jest ona zależna od ceny aktywa czyli jest nieograniczona.

.. figure:: figs/shortcall.* 
   :align: center
   :figwidth: 65%

   Short - Call: czyli sprzedaliśmy prawo do kupna po cenie
   :math:`K` - wystawiliśmy opcję.


Long Put - kupujemy prawo sprzedaży
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: figs/longput.* 
   :align: center
   :figwidth: 65%

   Long - Put: czyli nabyliśmy prawo do sprzedaży po cenie :math:`K`.


Posiadacz opcji *put (long put)* o cenie **13.25** i cenie wykonania 125
nie będzie wykorzystywał opcji jeśli cena aktywa będzie wyższa niż
125 bo sprzeda aktywo na rynku kasowym. W zakresie 125 - 111.75
zrealizuje opcje celem zminimalizowania straty. Zysk osiągnie jak cena
spadnie poniżej 111.75.
 

.. figure:: figs/shortput.* 
   :align: center
   :figwidth: 65%

   Short - Put: czyli sprzedaliśmy prawo do sprzedaży po cenie
   :math:`K` - wystawiliśmy opcję.



Wystawca opcji *put* natomiast realizuje zysk w wysokości premii jeśli
nabywca nie zrealizuje opcji czyli gdy ceny aktywa będą powyżej
125.0. Natomiast jeśli spadną poniżej 117.5 poniesie stratę.

Kupując opcje kupujący zabezpiecza się przed niekorzystną zmianą ceny
aktywa. Wystawca opcji kupna zarabia, gdy nie zrealizujemy opcji,
czyli wtedy gdy cena akcji na rynku spadnie. Wystawca opcji sprzedaży
zarabia wtedy, gdy na wskutek wzrostu cen nie wykorzystamy opcji.

Patrząc na profile ryzyka poszczególnych pozycji zajętych na rynku
opcji - czyli; *long call, short call, long put, short put*, nasuwa
się pomysł aby używać kombinacji opcji i w ten sposób chronić
posiadane aktywa za pomocą opcji. Takie strategie opcyjne są omówione
w rozdziale - Hedging za pomoca opcji.

Jak zależy profil wypłaty od parametrów K,S?
--------------------------------------------


Poeksperymentujmy z wykresem zysku/straty na zakupie opcji w
zależności od parametrów :math:`S_0,K`. Tak jak poprzednio, zakładamy,
że w chwili początkowej nie mamy żadnego kapitału i jedyną operacją,
którą wykonujemy jest zakup lub sprzedaż opcji. W przypadku zakupu
stan naszego portfela obciąża nam nasz na kredyt, jeśli zaś
sprzedajemy to mamy depozyt. Zakładamy, że w chwili początkowej
istnieje pewna godziwa cena opcji, którą wliczamy w nasz początkowy
bilans. Innymi słowy na poniższych wykresach zielona linia oznacza
profil zysku straty z transakcji w chwili :math:`t=T`, biorący pod
uwagę fakt poniesienia kosztów kupienia opcji lub wpływów za jej
wystawienie.

.. note::

   W poniższym kodzie definiujemy funkcje :code:`C` i :code:`P`, które
   są słynnymi wzorami Blacka-Scholesa na cenę opcji Call i Put,
   odpowiednio. W tym momencie przyjmijmy, że reprezentują one cenę
   godziwą opcji. Ich wyprowadzenie będzie omówione w następnym
   rozdziale.


.. only:: html

 Wykonajmy najpierw komórkę z definicjami:

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

     def plotOption(OPTION=longCALL,S0=115,K=125, c='red'):
         var('S')
         S1,S2 = 100,140
         sigma = 0.1
         if "CALL" in OPTION.__name__:
             cena = C 
         else:
             cena = P
         if "short" in OPTION.__name__:
             k = -1.0
         else:
             k = 1.0    

         SP = cena(S0,K,0.0,1,sigma).n()       
         p  = plot( OPTION(S,K,SP),(S,S1,S2),color=c)
         p += plot(k*(cena(x,K,0.0,1,sigma)-SP),(x,S1,S2),\
          color='gray',thickness=0.5)
         p += point([(K,0),(S0,0)],color='brown',size=40,\
          gridlines=[[K],[]])
         p += text(r"$K$",(K,2))
         p += text(r"$S_0$",(S0,k*2))
         return p

     print("Wczytano funkcje pomocnicze!")



Kupujemy opcję Call
~~~~~~~~~~~~~~~~~~~

.. admonition:: Poeksperymentuj komputerem

   Uruchom poniższy kod. 

   - Jak z otrzymanego wykresu odczytać cenę za którą kupiono opcję? 
   - Dla jakich ustawień suwaka opcja jest *in-the-money* a dla jakich  *out-the-money*?
   - Dla jakiego ustawienia wartość czasowa opcji jest największa?
   - Kiedy opcja jest prawie nic nie warta?
   - Ustaw :math:`S_0=130` a na :math:`K=110`. Z przesunięcia wykresu
     profilu wypłaty określ ile zapłacono za opcje. Dlaczego cena była
     równa prawie :math:`130-110`?
   - Jaką możemy ponieść maksymalną stratę?
   - Jaki jest maksymalny zysk?


.. sagecellserver::

     try:
         @interact 
         def _(K=slider(100,135,1,default=125),\
          S0=slider(100,135,1,default=115)):
             p = plotOption(OPTION=longCALL,S0=S0,K=K,c='green')
             p.set_axes_range(xmin=100,xmax=140,ymin=-20,ymax=20)
             p.show(figsize=5)
     except:
         print("Wykonaj pierwszą komórkę!")


.. only:: latex

 .. figure:: figs/kupujemy_call.png
    :align: center

    Opcja call z parametrami :math:`K` i :math:`S_0`. 



    

Sprzedajemy opcję Call
~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Poeksperymentuj komputerem

   Uruchom poniższy kod. 

   - Jak z otrzymanego wykresu odczytać cenę otrzymaną za wystawienie  opcji? 
   - Dla jakich ustawień suwaka opcja jest *in-the-money* a dla jakich  *out-the-money*?
   - Dla jakiego ustawienia wartość czasowa opcji jest największa?
   - Kiedy opcja jest prawie nic nie warta?
   - Ustaw :math:`S_0=128` a na :math:`K=108`. Z przesunięcia wykresu
     profilu wypłaty określ ile zapłacono za opcje.Dlaczego cena była
     równa prawie :math:`128-108`?
   - Jaką możemy ponieść maksymalną stratę?
   - Jaki jest maksymalny zysk?


.. sagecellserver::

    try:
        @interact 
        def _(K=slider(100,135,1,default=125),S0=slider(100,135,1,default=115)):
            p = plotOption(OPTION=shortCALL,S0=S0,K=K,c='green')
            p.set_axes_range(xmin=100,xmax=140,ymin=-10,ymax=20)
            p.show(figsize=5)
    except:
        print("Wykonaj pierwszą komórkę!")


Kupujemy opcję Put
~~~~~~~~~~~~~~~~~~


.. admonition:: Poeksperymentuj komputerem

   Uruchom poniższy kod. 

   - Jak z otrzymanego wykresu odczytać cenę za którą kupiono opcję? 
   - Dla jakich ustawień suwaka opcja jest *in-the-money* a dla jakich  *out-the-money*?
   - Dla jakiego ustawienia wartość czasowa opcji jest największa?
   - Kiedy opcja jest prawie nic nie warta?
   - Ustaw :math:`S_0=110` a na :math:`K=130`. Z przesunięcia wykresu
     profilu wypłaty określ ile zapłacono za opcje. Dlaczego cena była
     równa prawie :math:`130-110`?
   - Jaką możemy ponieść maksymalną stratę?
   - Jaki jest maksymalny zysk?


.. sagecellserver::

    try:
        @interact 
        def _(K=slider(100,135,1,default=122),S0=slider(100,135,1,default=115)):
            p = plotOption(OPTION=longPUT,S0=S0,K=K,c='green')
            p.set_axes_range(xmin=100,xmax=140,ymin=-20,ymax=20)
            p.show(figsize=5)
    except:
        print("Wykonaj pierwszą komórkę!")


Sprzedajemy opcję Put
~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Poeksperymentuj komputerem

   Uruchom poniższy kod. 

   - Jak z otrzymanego wykresu odczytać cenę otrzymaną za wystawienie  opcji? 
   - Dla jakich ustawień suwaka opcja jest *in-the-money* a dla jakich  *out-the-money*?
   - Dla jakiego ustawienia wartość czasowa opcji jest największa?
   - Kiedy opcja jest prawie nic nie warta?
   - Ustaw :math:`S_0=105` a na :math:`K=125`. Z przesunięcia wykresu
     profilu wypłaty określ ile zapłacono za opcje.Dlaczego cena była
     równa prawie :math:`125-105`?
   - Jaką możemy ponieść maksymalną stratę?
   - Jaki jest maksymalny zysk?



.. sagecellserver::

    try:
        @interact 
        def _(K=slider(100,135,1,default=125),S0=slider(100,135,1,default=115)):
            p = plotOption(OPTION=shortPUT,S0=S0,K=K,c='green')
            p.set_axes_range(xmin=100,xmax=140,ymin=-10,ymax=20)
            p.show(figsize=5)
    except:
        print("Wykonaj pierwszą komórkę!")




Wycena opcji
------------


Na wartość opcji wpływają czynniki rynkowe. Na przykładzie
europejskiej opcji *call* (pierwszej opcji wycenionej teoretycznie)
widać, że wartość opcji zależy od pięciu czynników. Czynnikami tymi są:

- cena  aktywa podstawowego na rynku kasowym
- cena wykonania
- czas do wygaśnięcia
- stopa wolna od ryzyka
- zmienność ceny aktywa (*volatility*)


W przypadku **ceny aktywa**, im wyższa cena aktywa (np. akcji), tym wyższa
cena opcji *call* a niższa cena opcji *put*. Odwrotna zależność
zachodzi w przypadku ceny wykonania dla opcji *call*; im niższa cena
aktywa tym wyższa wartość opcji.

**Czas do wygaśnięcia** (zapadalności) - Czas do wygaśnięcia jest
mierzony jako część roku. Podobnie jak zmienność (*volatility*),
dłuższy czas do wygaśnięcia zwiększa wartość wszelkich opcji. To
dlatego, że są większe szanse że opcja wygaśnie w cenie
(*in-the-money*) w dłuższym czasie.

**Stopa wolna od ryzyka** - Stopa wolna od ryzyka jest najmniej
znaczącym parametrem. Jest ona używana do dyskontowania ceny
wykonania, ale ponieważ czas do wygaśnięcia w praktyce jest dużo
niższy niż 9 miesięcy to stopy te bywają niskie i mają niewielki wpływ
na cenę opcji.  Jeśli stopa wzrasta, to w wyniku wzrostu obniża się
cena wykonania.  Dlatego, jeśli stopa rośnie opcja *call* wzrasta w
wartości a opcja *put* obniża wartość. *Im większa stopa wolna od
ryzyka to większy przychód wygenerują pieniądze, które "zaoszczędzi"
się kupując opcje a nie aktywo. Ta różnica zainwestowana do czasu
wygaśnięcia opcji generuje wyższy przychód.*

**Zmienność** ceny aktywa podstawowego (*Volatility*) jest mierzona
jako zanualizowane odchylenie standardowe zysku z aktywa podstawowego.
Cena wszystkich opcji rośnie z rosnącą zmiennością (*volatility*). To
dlatego, że opcje z wyższą zmiennością maja większą szanse na
wygaśnięcie w cenie (*in-the-money*).

**Cena wykonania** jest ustalona na czas życia opcji, ale każde
*aktywo* podstawowe może mieć kilka cen wykonania dla każdego miesiąca
wykorzystania.  Dla *call*, im wyższa cena wykonania (*strike price*),
tym niższa wartość *call*. Dla *put*, im wyzsza cena *strike*, tym
wyższa wartość *put*.






     +-----------------------+------------------+------------+--------------------+------------+--------------------+
     |    Czynnik            |                  | Opcja Call |                    | Opcja Put  |                    |
     +=======================+==================+============+====================+============+====================+
     |   Cena aktywa         | :math:`\uparrow` |   Wprost   | :math:`\uparrow`   | Odwrotnie  | :math:`\downarrow` |
     +-----------------------+------------------+------------+--------------------+------------+--------------------+
     |   Cena wykonania      | :math:`\uparrow` |  Odwrotnie | :math:`\downarrow` | Wprost     | :math:`\uparrow`   |
     +-----------------------+------------------+------------+--------------------+------------+--------------------+
     |   Zmienność           | :math:`\uparrow` |  Wprost    | :math:`\uparrow`   | Wprost     | :math:`\uparrow`   |
     +-----------------------+------------------+------------+--------------------+------------+--------------------+
     | Stopa wolna od ryzyka | :math:`\uparrow` |  Wprost    | :math:`\uparrow`   | Odwrotnie  | :math:`\downarrow` |
     +-----------------------+------------------+------------+--------------------+------------+--------------------+
     |   Czas                | :math:`\uparrow` |  Wprost    | :math:`\uparrow`   | Wprost     | :math:`\uparrow`   |
     +-----------------------+------------------+------------+--------------------+------------+--------------------+


Tabela (1).  Wpływ czynników rynkowych na cenę opcji *call* i *put*.


Podsumowując, aktualna **cena aktywa** podstawowego jest najbardziej
istotnym parametrem ceny. Dla opcji *call*, im wyższa cena aktywa
podstawowego tym wyższa wartość *call*.





Opcje i lekcja na ich temat,  jaka wynika z kłopotów  polskich firm z opcjami w roku 2008
-----------------------------------------------------------------------------------------




W każdym rozdziale niniejszego opracowania, tam gdzie, wspomina się o
opcjach podkreślane jest, że opcja to świetny instrument do
zabezpieczania się przed ryzykiem ale jeśli chodzi o relacje do tego
ryzyka - asymetryczny. Asymetryczność przejawia się m.in. w tym, że
kupujący opcje czuje się jak posiadacz polisy
ubezpieczeniowej. Zapłacił za nią, czyli poniósł koszt, ale wie, że za
tą cenę może być spokojny o przyszłość. Bo jeśli ceny aktywa na które
opiewa opcja zmienią się w sposób niekorzystny dla posiadacza opcji
(ubezpieczenia) to opcja ochrania go i zmiany te nie będą odczuwalne
dla niego. Jeśli zmiany pójdą w stronę korzystną pozwoli opcji
wygasnąć ( tak jak w przypadku polisy- nie skorzysta z niej jeśli nie
potrzebuje) i skorzysta z dobrodziejstw zmiany. Koszty opcji już
poniósł w przeszłości i żadne dodatkowe koszty mu nie grożą.


Niestety inaczej wygląda sytuacja wystawcy opcji. Wystawca opcji
sprzedaje "ubezpieczenie" od niekorzystnej zmiany ceny na rynku i
zobowiązuje się do zrealizowania w przyszłości transakcji w warunkach
korzystnych dla nabywcy i przed zmianą których nabywca się
zabezpieczał. Czyli kupić od nabywcy opcji put aktywo po określonej
cenie lub sprzedać nabywcy opcji call aktywo po określonej
cenie. Przypomnieć należy, że aby wystawić opcje nie jest wymagane
posiadanie aktywa na które opcja opiewa. Wystawca opcji działa
podobnie do firmy ubezpieczeniowej.  W zamian za premię, czyli cenę
sprzedanej opcji zobowiązuje się „wyrównania” niekorzystnych zmian
ceny.  Zarabia wtedy gdy nabywca nie skorzysta z opcji ale musi
wywiązać się ze zobowiązania jeśli ten co kupił u niego opcję zażąda
tego i to bez względu na to ile go to będzie kosztować. To znaczy, że
sprzedając opcje powinien skalkulować sobie ile to może kosztować i
wziął to pod uwagę zanim wystawił opcję.

Jak wynika z powyższego straty z nabycia opcji nie przekraczają
kosztów jej kupna ale korzyść z jej posiadania  jest znaczna i nie
ograniczana żadnymi barierami poza wielkością zmiany ceny na rynku a
ta zmiana może być, przynajmniej teoretycznie, nieograniczona. Koszty
z wystawienia opcji niestety mogą być wysokie, bo zależą od zmiany
ceny na rynku, a ta zmiana, przynajmniej teoretycznie, może być
nieograniczona. Korzyść natomiast ograniczona jest do wysokości premii
czyli ceny za którą nabywca opcji kupił, opcje od wystawcy.


Jeśli po lekturze powyższego tekstu pojawi się refleksja, że wystawcy
opcji bardzo ryzykują to, ta refleksja na tym poziomie wiedzy o rynku i
opcjach jest w pełni słuszna ( i taką pozostaje). Żałować należy, że
taką wiedzą albo inaczej, że do takiej konkluzji nie doszli
zarządzający pewnymi spółkami w kraju w roku 2008. Spółki te popadły
bowiem w tym czasie w duże kłopoty finansowe w związku z transakcjami
opcyjnymi, które, zawarły. Zanim sytuacja roku 2008 zostanie
przedstawiona istotnym jest zrobienie jeszcze jednego wyjaśnienia.


Uwaga o tym, że ryzyko wystawcy opcji jest większe niż nabywającego
jest prawdą na tym poziomie wiedzy i taką prawdą pozostaje, tak jak
zasady zachowania mechaniki klasycznej przykładowo są ważne w fizyce
kwantowej i innych bardziej zaawansowanych działach fizyki. Prawda ta
jednak nie wyklucza wystawiania opcji. Aby można było nabyć opcje,
ktoś ją musi wystawić. Opcje są wystawiane i jest to robione w celach
uzyskania zysku a nie straty. Zaleca się jednak by czytający ten tekst
nie wystawiali opcji tak długo, jak długo będą odkrywać jakieś istotne
informacje w niniejszym opracowaniu. Jeśli bowiem ich doświadczenie i
wiedza o rynku będzie tak duża, że nie będą korzystać z takich
opracowań, mogą rozważać możliwość wystawienia opcji. Na rynku finansowym, jak i w życiu,
nie można osiągnąć nic więcej bez podjęcia ryzyka. Tylko należy mieć
świadomość istnienia ryzyka i umieć oszacować koszty podjęcia tego
ryzyka i zarządzania nim tak by, ewentualne straty mieściły się w
możliwościach ich pokrycia bez zdezorganizowania funkcjonowania firmy
i jej działalności. Niemniej jednak, podmiot gospodarczy, który nie
specjalizuje się w transakcjach na rynku instrumentów pochodnych, nie
powinien wystawiać tego typu instrumentów.


Sytuacja   na rynku walutowym w okolicach roku 2008 - uwarunkowania   eksporterów
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Od kilku lat polski złoty PLN generalnie umacniał się w stosunku do
głównych walut i coraz mniej złotówek otrzymywali eksporterzy za każdy
( przykładowo) dolar uzyskany z eksportu.  Koszty jednak ponosili w
złotówkach.  Czyli z ich punktu widzenia eksport stawał się mniej
opłacalny albo inaczej byli coraz mniej konkurencyjni na rynku.


.. figure:: figs/USD_2008.png 
   :align: center
   :figwidth: 340px
   :height: 230px

   Kurs USD - PLN w okresie od kwietnia 2004 roku do kwietnia  2008 roku.

Interesem eksporterów było zabezpieczenie się przed umacniającym się
złotym czyli otrzymywanie jak najwięcej złotówek za np. dolara.

Transakcja która mogła spełnić ich oczekiwania przykładowo wygladała
następująco: 

.. admonition:: Scenariusz 1

                Firma Export S.A. chciała zabezpieczyć swój przyszły
                przychód o wartości 1 miliona USD na wypadek wzrostu
                wartości złotówki. Ponieważ działalność firmy to
                eksport towarów a nie operacje finansowe skorzystała z
                pomocy dostawcy usług finansowych np. Banku
                International. Bank zaproponował sprzedaż opcji
                walutowej - koszt opcji (jakiś ułamek wartości
                aktywa) - czyli 10 000 PLN. Kupiony instrument
                zobowiązywał bank w określonym terminie ( np. 3
                miesiące) do zakupu miliona dolarów po ustalonym
                kursie ( korzystnym dla eksportera)- powiedzmy po 2,50
                PLN za USD. W chwili zawarcia transakcji kurs oscyluje
                około 2.48 PLN za dolara.  Firma nie martwi się w tym
                przypadku o zmiany ceny dolara na rynku bo jeśli złoty
                się umocni w stosunku do sytuacji opisanej w zawartej
                transakcji i skorzysta z zakupionej opcji, jeśli
                natomiast złoty się osłabi pozwoli opcji wygasnąć i
                skorzysta z zaistniałej sytuacji na rynku. W tym
                drugim przypadku można mówić o stracie a prawidłowo, o kosztach nabycia w wysokości
                opłaty za transakcje czyli ceny opcji, w tym
                przypadku 10 000 PLN. Ten koszt już był poniesiony i
                jest już zaksięgowany w kosztach i wielkość
                ewentualnych kosztów nie wzrośnie.

Właściwie do tego miejsca wszystko wydaje się jasne i zrozumiałe. Tak
powinno działać zabezpieczenie.

Tylko że z czasem firmie bardzo nie podoba się poziom kosztów
transakcji zawieranych. Jeśli obroty wynoszą dziesiątki i setki
milionów koszty te stanowią pokaźną pozycje. Tym bardziej,że zgodnie  z opinią podatkową Urzędów Skarbowych koszty nabycia opcji nie są zaliczany do kosztów uzyskania przychodu.

Bank, któremu klient zwierzył się ze swych obserwacji o kosztach i w
obawie o stratę klienta a może w trosce o jego komfort??  wymyśla taką
konstrukcję transakcji aby klient nie ponosił tych kosztów.
Zaproponowana transakcja wygląda następująco:


.. admonition:: Scenariusz  2

                Firma Export S.A chcąc zabezpieczyć swój przyszły
                przychód w wysokości 1 miliona USD na wypadek wzrostu
                wartości złotówki. Ponieważ nie chce płacić bankowi
                International za wykupienie opcji walutowej 10 000 PLN
                bank International proponuje: ja sprzedam Ci opcję
                walutową za 10 000 PLN w której zobowiążę się do
                wykupienia Twojego miliona dolarów po korzystnym 2,50
                PLN, to kosztować Cię będzie 10 000PLN ale Ty
                sprzedasz mi opcję walutową wartą, powiedzmy 10 000
                PLN, i zgodnie z tą umową zobowiążesz się, że
                sprzedasz bankowi 1 milion USD po kursie 2,50PLN za
                USD. Ponieważ Klient ma płacić bankowi a bank
                klientowi równe kwoty opłaty za opcje wiec sumaryczny
                koszt dla klienta wynosi 0 PLN. Koszty takie
                zadawalają klienta. Ponadto firma Export S.A nie musi
                martwić się wzrastającą wartością
                złotówki. Rozwiązanie wydaje się idealne. Co prawda
                przykład jest teoretyczny więc cena opcji sprzedaży i
                kupna są identyczne. W praktyce tak nie jest ale od
                czego są specjaliści od finansów. Można bowiem
                regulować tak kwotą sprzedawanych przez klienta
                bankowi dolarów aby kwoty opłat za opcje były równe
                czego oczekuje klient.  Zadowolenie klienta -
                wartością naczelną dla banku. To, że Klient ma sprzedać
                więcej dolarów bankowi niż bank zobowiązuję w swej
                opcji kupić jest szczegółem. Przecież wystarczy
                popatrzeć na wykres by zobaczyć, że PLN się umacnia
                czyli bank i tak nie wykorzysta swej opcji.


I znów wszyscy są zadowoleni, tylko, że klient nie zauważa (może nie
zauważył) , że wystawił opcje. Jako wystawca opcji ma obowiązek
dostarczyć bankowi dolary po 2,50 jeśli bank tego zażąda.

Sytuacja na rynku nagle uległa zmianie. Kryzys finansowy USA pojawił
się w roku 2008 powodując duże perturbacje na rynkach, w tym na rynku
walutowym.


.. figure:: figs/USD_2008b.png 
   :align: center
   :figwidth: 340px
   :height: 230px

   Notowania  kursu  USD/PLN.



Skutkiem wyprzedaży aktywów przez inwestorów zagranicznych w Polsce
złoty uległ nagłemu osłabieniu.  

Wtedy pojawił się problem dla posiadaczy złożonych opcji, kiedy
wartość złotego idzie w dół. 1 milion dolarów jaki zarobi firma Export
S.A.  Bank International kupiłby po kursie 3,50 PLN za 1 USD. Tylko,
że Firma Export S.A.  nie ma już wyboru – musi sprzedać swoje
pieniądze bankowi International po kursie 2,50 za 1 USD. Ponadto
często więcej dolarów niż zabezpieczała sobie kupując opcje put (
pierwsza opcja) bo druga opcja zawarta celem zrównoważenia opłaty
(kosztów opcji) za opcje put często opiewała na większą kwotę. Kolejny
raz na rynku zdarzyła się sytuacja, której nie przewidzieli
zawierający transakcje albo inaczej uznali prawdopodobieństwo
wystąpienia jako bardzo niskie, wręcz niemożliwe do wystąpienia w
realnym świecie. Kolejny raz rynek brutalnie nauczał pokory . Zerowe
prawdopodobieństwo nie istnieje.  Ilość zawartych transakcji była
znaczna. Patrz wykres poniżej.


.. figure:: figs/tip.png
   :align: center
   :figwidth: 340px
   :height: 230px



Firmy wpadły w kłopoty finansowe. W mediach pojawiło się określenie
„toksyczne opcje” jako określenie umów zawieranych z
bankami przez polskie przedsiębiorstwa w 2008 roku, które często
doprowadzały je do kłopotów finansowych, z bankructwem włącznie. Jak
to bywa z mediami określenie nie było precyzyjne bo firmy zawierały
różne umowy z różnymi bankami, ale miało cel wywołania emocji.
Zaistniała sytuacja była analizowana i omawiana szeroko bo i problem
był spory i w przypadku niektórych firm zakończył się bankructwem [#f1]_.


Konkluzje prawie wszystkich opracowań były zgodne i
podobne. Wypracowując opisaną strategie zabezpieczającą przed ryzykiem
kursowym i podpisując umowy z bankami firmy przyjęły na siebie jeszcze
większe ryzyko kursowe niż to, przed którym szukały ochrony. 
Ponadto, asymetria umów, w których nominał waluty opcji wystawionych
przewyższa nominał waluty opcji nabytych, wskazywał na brak orientacji w
działaniu opcji albo brak zrozumienia wykonywanych transakcji(co
wydaje się mało prawdopodobne) albo na działania spekulacyjne. Firmy
jako podmioty nie zajmujące się działalnością na rynkach finansowych
nie powinny były wystawiać opcji.  

Zawsze, w każdej działalności, należy kierować się zasadą
ograniczonego zaufania do partnerów ( a szczególnie finansowych, i szczególnie gdy
oferowane jest " coś za darmo") i nigdy nie wchodzić posiadanie
instrumentów finansowych, których działania do końca się nie rozumie.
Na rynku pojawiają się ciągle coraz bardziej skomplikowane i wymyślne
instrumenty finansowe projektowane przez świetnie wyszkolonych
specjalistów posiadających znakomita wiedzę matematyczno- numeryczną,
których działanie nie wszyscy do końca rozumieją a ryzyka których nie
jest w pełni znane.
 
Jednak należy podkreślić jeden pozytywny element omawianej
sytuacji. Firmy nie finansowe podeszły aktywnie do zarządzania ryzykiem
finansowym, w tym przypadku , kursowym. Omówiony został przypadek firm, 
które nie zrobiły tego idealnie i popełniły pewne błędy na słusznej
drodze, słusznych decyzji o zabezpieczeniu. W powyższym przypadku nie
mówiono o firmach, które zrobiły to zabezpieczenie właściwie.

.. rubric:: Footnotes

.. [#f1] Ciekawą analizę problemu można przykładowo znaleźć w pracy:
         Danuta Dziagwo, Leszek Dziagwo. „Ryzyko instrumentów
         pochodnych w obrocie gospodarczym na przykładzie „Opcji
         toksycznych””- Zeszyty Naukowe Uniwersytetu Szczecińskiego Nr
         752 Ekonomiczne Problemy Usług NR 102 2013.





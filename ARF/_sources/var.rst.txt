VaR
---

Wstęp- co to jest VaR?
=====================

Zarządzanie portfelem to proces ustawicznej analizy sytuacji na rynku
i zachowania się cen aktywów, proces optymalizacji składu posiadanego
portfela tak by zysk z niego był wysoki oraz szukanie sposobów by
ewentualna strata wartości portfela była możliwie najmniej
bolesna. Ograniczanie strat, to podstawowe oczekiwanie zarządzania
ryzykiem a źródłem tego ryzyka jest zmienność cen aktywów. Generalnie,
optymalizacja w procesie zarządzania portfelem sprowadza się do
maksymalizacji dochodu przy niezmiennym ryzyku albo do zmniejszania
ryzyka przy ustalonym dochodzie.

Coraz większe skomplikowanie instrumentów finansowych i transakcji
wymagało stworzenia w miarę prostego, ale jednocześnie elastycznego
narzędzia kontroli ekspozycji na ryzyko.

Przykładowo w koncepcji CAPM takim parametrem charakteryzującym poziom
ryzyka akcji jest współczynnik beta. VaR (skrót od angielskiego *Value at Risk*) jako metoda (a także wskaźnik
podejmowanego ryzyka), powstała w związku z koniecznością wyceny
ryzyka instrumentów, portfeli instrumentów, które to stają się coraz
bardziej wyrafinowane i skomplikowane. Wartość VaR
wyraża stopień ekspozycji podmiotu na ryzyko w zakresie posiadania
określonego portfela aktywów. Zadaniem VaRu jest określenie pewnej
wartości potencjalnej straty (przy założonym poziomie
prawdopodobieństwa, przedziale czasowym, normalnych warunkach
rynkowych i przy wycenie aktywów po cenach ostatnich zawartych rynkowo
transakcji czyli Mark-to-Market).  VaR informuje, na jaki poziom strat
narażona jest pula aktywów, przy określonych warunkach pomiaru.

*VaR* (wartość narażona na ryzyko, wartość zagrożona) jest to kwota,
jaką można stracić w wyniku inwestycji w portfel w określonym
horyzoncie czasowym i przy założonym poziomie ufności. VaR jest
statystyczną miarą ryzyka, która szacuje stratę na portfelu, jaka może
wystąpić przy założonym poziomie ufności. VAR zawsze określa
prawdopodobieństwo, zgodnie z którym straty (dotkliwość ryzyka) przy
zadanym prawdopodobieństwie (przedział ufności) statystycznie nie
powinny być większe od wyliczone kwoty.

Definiując VaR uznajemy, że VaR jest poziomem straty, który może
zostać przekroczony z prawdopodobieństwem równym a.

Nie należy interpretować wyliczonej wartości VaR'u jako stwierdzenie,
że „VaR jest maksymalną stratą” nawet jeśli autorzy dodają do tego
wyrażenia uwagę, że mamy do czynienia ze statystyką, np. „przy
ustalonym poziomie istotności (ufności)”.  Bywają sytuacje, że straty
mogą być dużo wyższe [#f1]_

Innymi słowy VaR to wartość strat, która może być przekroczona z
prawdopodobieństwem α lub to wielkość straty, która może nie być
przekroczona z prawdopodobieństwem równym :math:`(1-\alpha)` w
kolejnym dniu. VaR jest bardzo wygodną i praktyczna miarą
ryzyka. Prostota jej to przede wszystkim to, że jest to konkretna
liczba. To daje prostą możliwość porównania i pewność w interpretacji
odnośnie do porównywania zasad zarządzania finansowego. Jest to
metoda, która podaje ogólny poziom ryzyka, niezależnie od rodzaju
aktywów w powszechnie zrozumiałych jednostkach jakimi są pieniądze
(wartość rynkowa).

Konsekwencja zasady funkcjonowania VaR jest prosta: Jeżeli dany
portfel aktywów przynosi większe zyski, przy mniejszym poziomie ryzyka
VaR, to należało zwiększyć jego wielkość. Jeżeli dane aktywo przynosi
większe zyski przy takim samym poziomie VaR, to należało zwiększyć
zaangażowanie w to aktywo. Jeżeli zarządzający generował większe zyski
przy tym samym poziomie VaR, to należy się mu się odpowiednio większa
premia. 

Kwantyle i percentyle
=====================

Z pojęciem VaR nieodłącznie związane jest pojęcie kwantyla. Cóż to
jest kwantyl? Kwantylem rzędu :math:`p` zmiennej losowej :math:`X` o
ciągłym rozkładzie danym gęstością :math:`f(x)` nazywamy taką wartość
:math:`x_p`, że zachodzi:

.. math::

   \int_{-\infty}^{x_p} f(x) dx = F(x_p) = p

Percentylem, określa się kwantyl rzędu :math:`\frac{p}{100\%}`, czyli
kwantyl rzędu 0.05 jest równy percentylowi rzędu :math:`5\%`.  Dla
rozkładu normalnego (Gaussa) o średniej i variancji :math:`\mu` i
:math:`\sigma`, odpowiednio, kwantyl rzędu :math:`p` jest dany wzorem:

.. math:: 
   :label: kwantyl_norm

   \mu+\sigma\sqrt{2}\,\operatorname{erf}^{-1}(2 p - 1),

co łatwo pokazać wiedząc, że dystybuanta zmiennej normalnej wynosi:

.. math::

   \frac12\left[1 + \operatorname{erf}\left( \frac{x-\mu}{\sigma\sqrt{2}}\right)\right] 

Wzór :eq:`kwantyl_norm` ma ważną własność - widzimy, że wystarczy
znać kwantyl dla rozkładu o średniej zero i wariancji jeden by łatwo go
sobie przetransformować na zmienną losową o dowonych parametrach
(oczywiście gaussowską).

Wzory te są dostępne w każdym podręczniku statystyki więc nie warto
znać ich na pamięć, jednak warto się dowiedzieć jak wyliczyć wartość
kwantyla dla danych parametrów numerycznie. Niestety, widzimy, że wzór
:eq:`kwantyl_norm` zawiera funkcję błędu Gaussa. Użyjemy, Sage-a. 

.. admonition:: Poeksperymentujmy z kwantylami!

   Wartości numeryczne różnych wartości rozkładu normalnego (i nie
   tylko), można otrzymać w następujący sposób:
   
.. sagecellserver::

   T = RealDistribution('gaussian',1.0)
   k =  T.cum_distribution_function_inv(0.05)
   print( k )


Teraz, sprawdźmy, że rzeczywiście wycałkowanie funkcji gęstości od
minus nieskończoności do :math:`k` daje 0.05:
   
.. sagecellserver::

   numerical_integral(lambda x:T.distribution_function(x),-oo,k)
   

Kwantyl możemy obliczyć nie tylko dla normalnej zmiennej
losowej. Załóżmy, że mamy pewną liczbę (np. 100 000) realizacji
zmiennej losowej w wektorze :math:`X`. Jeżeli posortujemy te wartości
rosnąco i weźniemy element o indeksie :math:`5\% \times 100000 =
5000`, to będziemy mieli wartość zmiennej losowej, poniżej której
znajduję sie 5% "populacji" wyników losowania.  Oczywiście, jeśli
liczba losowań nie będzie podzielna przez 20, to musimy
np. zaokrąglić. W numpy mamy przydatną funkcję `np.percentile`, która
oblicza kwantyl z danego wektora danych. Nazwa sugeruje, że podajemy
na wejsciu :math:`p \times 100\%`. Sprawdźmy sami:

.. sagecellserver::
      
      import numpy as np
      X = np.random.randn(100000)
      X.sort()
      print( X[5000] )
      print( "Wbudowana funkcja w numpy, daje:", np.percentile(X,int(5)) )

Przy małej liczbie danych widać pewne różnice pomiędzy `np.percentile`
a naszą procedurą, wynikającą ze sposobu interpolacji. Warto też
zauważyć, że jeśli dysponujemy małą próbką danych, to wyznaczenie
kwantyla obarczone jest dużym błędem. W szczególności jeśli mamy
próbkę o liczebności 100 (co w analizie danych finansowych nie jest
rzadkie) to kwantyl rzędu 0.01, ma taką samą wariancję jak badana
zmienna losowa, i jego wartość będzie tego samego rzędu co do
wielkości jak wariancja. Fakt ten znacznie rzutuje na wybór metod
obliczeniowych stosowanych w analizie wartości zagrożonej.
   
Warto też nadmienić, że wartość kwantyla dla dowolnego poziomu można
odczytać w arkuszu kalkulacyjnym (np. OpenOffice, Excel, Arkusze
Google) w funkcji: `NORMSINV`.



VaR - metody obliczania
=======================

Wartość zagrożona (wartość narażona na ryzyko, Value at Risk, VaR) w
chwili t jest to taka strata wartości rynkowej portfela, że
prawdopodobieństwo osiągnięcia jej lub przekroczenia w rozpatrywanym
okresie (t,) równe jest zadanemu poziomowi tolerancji :math:`\alpha`.

Literatura ; Jorion P., Value at Risk, 2nd edition, McGraw-Hill, 2001,
Krzysztof Piontek, Akademia Ekonomiczna
im. Oskara Langego we Wrocławiu Katedra Inwestycji Finansowych i Ubezpieczeń - `http://www.kpiontek.ue.wroc.pl/testyVaR.pdf`

Powyższa definicje można zapisać w następujący sposób:

Prawdopodobieństwo tego że wartość portfela pod koniec okresu będzie
nie mniejsza niż wartość portfela na początku okresu pomniejszona o
VaR jest równa :math:`\alpha`.

Taka jest istota VaRu. Jednak wyliczenie tej wielkości to problem
praktyczny który nie jest realizowany jednakowo. Stosuje się bowiem w
praktyce wiele metod aby oszacować tą wartość.  Wartość zagrożona w
odniesieniu do portfela na rynku kapitałowym czy instrumentu
finansowego, jest to taka strata jego wartości rynkowej, że
prawdopodobieństwo jej osiągnięcia lub przekroczenia w zadanym okresie
równe jest przyjętemu poziomowi tolerancji :math:`\alpha`. Zazwyczaj
przyjmuje się:

.. math::

  \alpha =  (0.01,0.05), 

przy czym im jest on niższy, tym wyższa jest wartość VaR. Tak wiec
przyjmuje się najczęściej praktycznie przyjmowane prawdopodobieństwo
przekroczenia VaR wynosi 5% lub 1%. Oczywiście, zakładamy typowe
warunki rynkowej zmienności cen, znane z historii. Jest to pierwsze z
założeń jakie są przyjmowane. Można by dyskutować czy warunki z okresu
lat 2003 - 2005 można zastosować do sytuacji rynku w roku 2007, albo
czy dane z okresu 1925_1928 będą reprezentatywne do tego co rynek
pokazał pod koniec października 1929roku, czyli w początku Wielkiego
Kryzysu.


Metody wariancji -  kowariancji
+++++++++++++++++++++++++++++++

Bez względu na metodę, Value at Risk - miarę straty można wyrazić jako
wartość absolutną lub jako jej procentową wielkość w stosunku do
wartości bazowej, bądź w odniesieniu do wartości średniej portfela.


Omawianie tych metod zacznijmy od przykładu portfela składającego się
z pojedynczego aktywa.  Wartość rynkowa aktywa zmienia się rynkowo w
czasie.  Jest ona większa lub mniejsza. Trend jest raczej trudny do
przewidzenia. Często zakładamy, że ruch cen to ruch Browna.  Duże
zmiany wartości są rzadsze niż mniejsze.  Obserwując zmiany cen w
dłuższym okresie możemy zauważyć, że duże zmiany są mało prawdopodobne
a ekstremalnie duże, wręcz niemożliwe. Decydując jak bardzo mało
prawdopodobne są to zmiany decydujemy jakie skoki są praktycznie
niemożliwe czyli jakie straty portfela są bardzo mało prawdopodobne (
lub nawet niemożliwe). Wybrany poziom prawdopodobieństwa to poziom
tolerancji. Mówimy tutaj o ufności a właściwie poziomie ufności.

Jeśli poziom tolerancji czyli prawdopodobieństwo przekroczenia to
:math:`\alpha`, to poziom ufności :math:`c` jest równy :math:`1-\alpha`.

Wartość VaR dla portfela składającego się z jednego aktywa jest funkcją: 
 - wartości ( mierzonej w pieniądzu) portfela
 - zmienności ceny aktywa, mierzonej jako odchylenie standardowe
 - poziomu tolerancji
 - horyzontu czasowego.

Jeśli staramy się określić VaR dla kolejnego, jednego dnia możemy
przyjąć założenie, ze średnia zmian dla jednego dnia wynosi zero.

 Dla  portfela jednego aktywa i jednego dnia zmian VaR  wynosi: 

.. math::
   :label: eq:var

   VaR = W \times \sigma \times k,

gdzie:

   :math:`W` - wartość portfela w dniu poprzednim (w okresie poprzednim)

   :math:`\sigma` - odchylenie  standardowe ceny aktywa

   :math:`k` - liczba odchyleń standardowych poniżej średniej
         odpowiadające :math:`\alpha` kwantylowi wystandaryzowanego
         rozkładu normalnego.

Dla poziomu ufności :math:`95\%`, :math:`c=0.95` czyli :math:`(1-c)` jest piątym kwantylem (czyli 5%) standardowego rozkładu normalnego. Odpowiadająca temu wartość :math:`k = -1.645`, a gdy  :math:`1- \alpha = 0.99`, to :math:`k = -2.326`.


.. admonition:: Przykład

  Mamy portfel o wartości 100000 jednostek pieniężnych składający się
  z akcji spółki "Reflex. SA.". Załóżmy, że odchylenie standardowe
  dziennego zwrotu na tych akcjach wynosi 0.0251 ( 2.51%)
  dziennie. 

  Chcąc wiedzieć z pewnością 95% jaki jest VaR naszego portfela
  prowadzimy wyliczenia następująco: 

  .. math:: 

      W \times \sigma \times  k. 

  Czyli: 

  .. math::
    
     100 000 \times 0.0251 \times -1.645 = -4128.95 

  Znaczy to, że posiadając taki portfel w ciągu następnego dnia
  istnieje 5% szans na to, że straty portfela mogą wynieś 4129
  jednostek pieniężnych lub więcej. Czyli wartość portfela może spaść
  poniżej 95871 jednostek pieniężnych.



Poszerzenie na  więcej niż jeden okres czasowy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Aby wycenić wartość VaR w czasie więcej niż jeden dzień (okres
czasowy), korzysta się z zależności odchylenia standardowego od czasu. 

Odchylenie standardowe po t okresach (np. dniach) jest równe
odchyleniu standardowemu dziennemu (jednego okresu) razy pierwiastek z
ilości okresów. Zachodzi to oczywiście, jeżeli procesy zmiany ceny w
każdym z okresów są niezależnymi od siebie normalnymi zmiennymi
losowymi o tych samych parametrach.

.. math::
   :label: sigmat

   \sigma_t = \sqrt{t} \sigma_1,

gdzie
 	:math:`t` - oznacza ilość okresów( dni)  

	:math:`\sigma_t`  - oznacza odchylenie standardowe dzienne ( jednego okresu)

	:math:`\sigma_1`  - oznacza odchylenie standardowe po  t okresach ( dniach).


Czyli jeśli chcemy znać VaR naszego portfela w ciągu miesiąca na
poziomie 95% pewności (przyjmuje się średnio jako 22 dni robocze)
wyliczamy:

.. math::

   VaR = 100000 \times 0,0251 \times 1.645 \times \sqrt{22} = 19 366.5  \text{ jednostek pieniężnych}


Należy jeszcze uogólnić sytuacje na przypadek, gdy że średnia wartość
rozkładu zmiany ceny w danych okreśie jest niezerowa. W takim
przypadku kwantyl jest równy:

.. math::
   :label: var2a

   R\alpha = \mu - k\sigma 

Czyli VaR jest równy: 

.. math::
   :label: var2 

   VaR = (\mu - k\sigma ) W  


Gdzie 

 :math:`W` - wartość portfela 

 :math:`\mu` - średnia wartość rozkładu 

 :math:`\sigma` - odchylenie standardowe stopy zwrotu 

 :math:`k` - stała rozkładu



Portfel składający się z wielu aktywów
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Co jeśli w naszym portfelu znajduje się więcej niż jedno aktywo?
Wtedy należy uwzględnić istnienie  korelacji miedzy zachowaniem się aktywów. 

Uwzględnienie korelacji prowadzi do stosowania tych samych elementów
jak teorii portfela której autorem jest Markowitz. Z tej teorii
wiadomo, że ryzyko portfela zmniejsza jego dywersyfikacja i taki efekt
powinna odzwierciedlać również miara ryzyka jaką jest VaR.

Aby wyliczyć wartość VaR takiego portfela należy dodatkowo określić:

 - wagę aktywa w portfelu (jego udział w wartości portfela), udział
   jest bowiem ważony kapitałem
 - odchylenie standardowe stopy zwrotu każdego z aktywów portfela
 - korelacje miedzy stopami zwrotu każdego aktywa portfela.  

Czyli VaR dla portfela aktywów o cenach danych przez wektor
:math:`x_i` może być opisany przez unormowany do jedności wektor:


.. math::

   \mathbf{w} = (w_1,w_2,...,w_n).

Wartość portfela wyraża się przez:

.. math::

   W = \sum_{i=1}^{n} w_i x_i

 

.. attention::

   Wartość portfela jest więc liniową funkcją (kombinacją) parametrów
   rynku. To założenie nie zawsze jest spełnione, jeśli w portfelu
   mamy instrumenty takie jak opcje czy kontrakty terminowe to ich
   wartość zależy w pewnien nieliniowy sposób np. od wartości stóp
   procentowych czy cen instrumentów bazowych. 

VaR jest dany przez taki sam wzór:

.. math::
   :label: var3

   VaR = (\mu_P - k\sigma_P ) W  

jednak wartości :math:`\mu_P` i :math:`\sigma_P` są odpowienio: średnią
wartością oraz odchyleniem standardowym całego portfela. Niech ceny
aktywów będą dane jako wektor :math:`\mathbf{\mu} =
(\mu_1,\mu_2,...,\mu_n)`. Zakładając, że mamy do czynienia z
gausowskimi zmiennymi losowymi, średnie odchylenie i wartość
portfela dane są przez:


.. math::
  :label: sigma_mu

  \sigma_P = \mathbf{w^T} \Sigma \mathbf{w} \\
  \mu_P = \mathbf{w} \mathbf{\mu} 

.. attention::

   Liniowa kombinacja zmiennych gaussowskich ma rozkład Gaussa więc
   zakładając, że mamy normalne rozkłady zmian cen będziemy mogli
   opisywać rozkład wartości portfela przez :eq:`sigma_mu`


Wielowymiarowy rozkład stóp zwrotów składników portfela (wymiarowość
jest określona przez liczbę składników) jest więc wielowymiarowym
rozkładem normalnym o wektorze średnich :math:`\boldsymbol{\mu}`:

.. math::
   :label: mu_rozpisany

   \boldsymbol{\mu} = \left[\begin{array}{c} 
      \mu_1  \\
      \mu_2 \\
      \ldots \\
      \mu_n
   \end{array}\right]\,,

i macierzy kowariancji danych :math:`\boldsymbol{\Sigma}`:


.. math::
   :label: sigma_rozpisany

   \boldsymbol{\Sigma}\ =\  
   \left[\begin{array}{cccc} 
      \sigma_{11}      &    \sigma_{12}   & \ldots &    \sigma_{1n}   \\
      \sigma_{21}      &    \sigma_{22}   & \ldots &    \sigma_{2n}   \\
      \ldots & \ldots & \ldots & \ldots \\
      \sigma_{n1}      &    \sigma_{n2}   & \ldots &    \sigma_{nn}     
   \end{array}\right]\,



		
gdzie :math:`n` jest liczba składników portfela.


Wartości :math:`\mu_P` oraz :math:`\Sigma_P` możemy wyliczyć
korzystając z wektora dryftu i  macierzy kowariancji danych.


.. math::
   :label: sr_sigma

   \boldsymbol{\Sigma} = \sum_{i=1}^{n}   \sum_{j=1}^{n} w_i w_j \sigma_{ij}   

   \boldsymbol{\mu} = \sum_{i=1}^{n} w_i \mu_{i}   


Zaś :math:`\mu` oraz :math:`\sigma` są określone przez powyższy
wektor :math:`\boldsymbol{\mu}` i macierzą
:math:`\boldsymbol{\Sigma}`.  Po podstawieniu ostatnich dwu wzorów do
wzoru :eq:`var2` obliczyć można VaR.  Powyższe podejście nosi nazwę
metody wariancji-kowariancji. 

.. admonition:: Przykład

   Niech portfel o wartości początkowej 100000 składa się z dwu
   składników jednego o wadze 60% i odchylenie standardowym 1% i
   drugiego o o wadze 40% i odchyleniu 2% oraz współczynnik korelacji
   między nimi niech wynosi 0.4.  
 
   Przypomnijmy, że współczynnik korelacji dla dwóch zmiennych
   losowych :math:`X,Y` wiąże się w następujący sposób z elementem
   pozadiagonalnym macierzy kowariancji: 

   .. math:: 

      \rho_{XY} =\frac{\langle XY \rangle}{\sigma_X \sigma_Y}

   Dla takich danych:

   .. math::
       :label: ex2

       \sigma_P = \sqrt{w_X^2\sigma_X^2+w_Y^2\sigma_Y^2 + 2 w_X w_Y \rho \sigma_X \sigma_Y  } 


.. sagecellserver::

   w_X = 0.6
   w_Y = 1-w_X
   rho = 0.4
   sigma_X = 0.01
   sigma_Y = 0.02
   sigmaP = sqrt(w_X^2*sigma_X^2+w_Y^2*sigma_Y^2 + 2*w_X*w_Y*rho*sigma_X*sigma_Y)
   print( sigmaP )
   T = RealDistribution('gaussian', 1.0)
   k =  T.cum_distribution_function_inv(0.05) 
   print( 'k = ',k )
   print( "VaR procentowy= ",sigmaP*k )
   print( "VaR pieniężny = ", 100000*sigmaP*k )







Metody symulacji historycznej
+++++++++++++++++++++++++++++

Metoda ta sprowadza się do wykorzystania historycznych stóp zwrotu
instrumentu finansowego (np.  portfela akcji). Najczęściej przyjmuje
się dzienne historyczne stopy zwrotu. Obserwuje się stopy przez pewien
(odpowiednio długi) okres czasu, przykładowo 1 rok - czyli około 225
obserwacji- z dni transakcyjnych. Historyczne stopy zwrotu pozwalają
określić empiryczny rozkład. Umożliwia to oszacowanie kwantyla
rozkładu i wyznaczenie wartości ryzykownej. Skuteczność symulacji
historycznej jest uwarunkowana niezmiennością stóp zwrotu w
przyszłości w stosunku do danych historycznych. Stąd korzysta się z n
obserwacji objętych badaniem według formuły:

.. math::
   :label: Rt

   R_t = \sum_{i=1}^n w_i R_{it}
			
W ten sposób zostaje wygenerowany rozkład statystyczny stóp
zwrotu. Wyznaczenie odpowiedniego kwantyla tego rozkładu pozwala na
wyliczenie VaR bezpośrednio z definicji, czyli wg. pokazanych w
poprzednich metodach zasad. Tym razem nie zakłada się, że rozkład
jest rozkładem normalnym oraz unika się szacowania parametrów takich
jak średnia czy odchylenie standardowe korzystając z danych
historycznych.


Metoda symulacji Monte Carlo
++++++++++++++++++++++++++++

W metodzie Monte Carlo przyjmuje się pewien model kształtowania się
cen rynkowych aktywa.  Wybór modelu zależy od autorów, ich
doświadczenia praktycznego czy teoretycznego. Niemniej jednak musi on
zostać starannie sprawdzony na danych historycznych czy rzeczywiście
charakteryzuje właściwie zachowania się danych rynkowych instrumentu
finansowego. Następnie generuje się wiele (tysiące) obserwacji stóp
zwrotu instrumentów finansowych tworzących portfel. Otrzymuje się, w
ten sposób rozkład stóp zwrotów z portfela. Wyznaczenie odpowiedniego
kwantyla tego rozkładu prowadzi do obliczenia VaR.

Schemat obliczeń Monte Carlo jest następujący:

 - obliczamy parametry procesu zmian parametrów od których zależy cena
   portfela - tzn. średnią i macierz kowariancji
 - konstruujemy wektor zmiennch  losowych o wcześniej obliczonych parametrach
 - dla każdej wartości tego wektora, obliczamy wartość przyszłą indeksów a następnie wartość portfela
 - wyliczmy odpowiedni kwantyl rozkladu wartości portfela.


Pojawia się praktyczne pytanie - jak mając standardowy generator niezależnych
liczb pseudolosowych o rozkładzie normalnym (:math:`N(0,1)`)
wygenererować wektor o zadanej średniej i kowariancji. Wartość średnia
to nie jest problem, bo wystarczy dodać żądaną średnią do wektora o
zerowej średniej. Natomiast, aby wynikowy wektor miał pożądane
korelacje należy pomnożyć go przez pierwiastek z macierzy kowariancji.

Rzeczywiście, niech:

.. math::

   x_i  = \mu_i + \sqrt{S_{ik}}N_k(0,1)

wtedy:

.. math::
   
   \langle x_i x_j \rangle  = \left\langle \left( \mu_i + \sqrt{S_{ik}}N_k(0,1) \right) \left( \mu_j + \sqrt{S_{jl}}N_k(0,1)\right) \right\rangle 

wymnażamy dwa nawiasy i otrzymujemy sumę średnich następujących składników, które się upraszczają do:

.. math::

   \langle \mu_i \rangle \langle \mu_j \rangle = \mu_i \mu_j 

zmienna losowa :math:`N_i(0,1)` ma średnią zero więc mamy:

.. math::

  \langle \sqrt{S_{ik}}N_k(0,1) \mu_j \rangle = 0

.. math::
 
   \langle \sqrt{S_{jl}}N_l(0,1) \mu_i \rangle  = 0

i ostatni wyraz zawiera:

.. math::

  \langle \sqrt{S_{ik}}N_k(0,1) \sqrt{S_{jl}}N_k(0,1) \rangle \\
  
Wykonując średniowanie, widzimy, że ponieważ zmienne :math:`N_i(0,1)` są niezależnie  i zachodzi 

.. math::

   \langle N_k(0,1) N_l(0,1)) \rangle = \delta_{kl}

to ostatecznie otrzymujemy:

.. math::

   \langle x_i x_j \rangle  = \mu_i\mu_j + \sqrt{S_{ik}}\sqrt{S_{jl}}\delta_{kl} = \mu_i\mu_j + S_{ij}

czyli:

.. math::

   \langle x_i x_j \rangle  - \mu_i\mu_j  = S_{ij}





VaR z uwzględnieniem wartości ekstremalnych - "Grube ogony  rozkładu"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Dokładna analiza stóp zwrotu doświadczalnych, czasowych szeregów finansowych
pozwala stwierdzić, że to co dość często było w powtarzane,
czyli o rozkładzie normalnym jako modelu, w wielu przypadkach jest
nieprawdą. Większość szeregów finansowych wykazuje: istnienie „
grubych ogonów” czyli tego, że prawdopodobieństwo pojawienia się skrajnych
wartości, czy bardzo dużych zmian jest wyraźnie większe niż w
przypadku rozkładu Gaussa.

Wykresy rozkładów zwrotów pokazują, że duże zmiany występują znacznie
częściej niż przewiduje to rozkład normalny, natomiast mniej jest
średnich zmian (wartości odchylających się od średniej od 0.5 do 2.5
odchyleń standardowych).  W związku z powyższym konieczne jest
poszukiwanie o nowych modeli. Na podstawie przeprowadzonych analiz (
np. Katarzyna Brzozowska-Rup, Wiesław Dziubdziela „Estymacja indeksu
ogona wybranych szeregów finansowych za pomocą entropii
Renyi’ego". 
http://www.wne.sggw.pl/czasopisma/pdf/EIOGZ_2006_nr60_s69.pdf) oraz (
Ewa Miłoś- Finansowy Kwartalnik Internetowy „e-Finanse” 2011, vol. 7,
nr 1 www.e-finanse.com Wyższa Szkoła Informatyki i Zarządzania w
Rzeszowie) wykazać można, że w wielu zjawiskach wartości ekstremalne
pojawiają się zgodne z rozkładami potęgowymi.  W obliczeniach VaR
skupiamy się na poziomie ufności 99% zakładając, że strata się nie
zdarzy. W modelach wartości ekstremalnych skupiamy się na tych
niekorzystnych zdarzeniach, które mają bardzo małe prawdopodobieństwo
wystąpienia ale mogą przynieść duże straty.  Szczególnie w
instytucjach ubezpieczeniowych istnieje potrzeba analizy zjawisk
katastrof.

Rozkłady wykazujące cechy „ grubych ogonów to przykładowo
rozkład t- Studenta, Pareto, etc. Modele rozkładów jakie stosowane są
w analizach i szacowaniach VaR opisane są przykładowo (Tomasz
Bałamut- Metody estymacji Value AT Risk - NBP- Materiały i studia;
zeszyt 147; 2002r.)


Nieliniowa funkcja wyceny
+++++++++++++++++++++++++

W przypadku, gdy portfel składa się z instrumentów podstawowych, to
jego wartość jest liniową funkcją cen składników. Może się jednak
zdarzyć, a dzieje się to często w praktyce, że nasz portfel zawiera
instrumenty, które w nieliniowy sposób zależą od parametrów rynku.  W
takim przypadku metody: historyczna i Monte-Carlo mogą być zastosowane
bez większych modyfikacji, jednak metoda wariancji-kowariancji musi
być zmodyfikowana.

Niech wartość portfela będzie funkcją :math:`P(x_1,x_2,...,x_n)`
parametrów rynku :math:`\mathbf{x}=(x_1,x_2,...,x_n)`. Załóżmy, że
znamy wartość tych parametrów dzisiaj: :math:`\mathbf{x_0}` i chcemy
dowiedzieć się jak zmieni się wartość portfela do jutra. Niech
przyrosty zmiennych będą dane przez proces:

.. math::
   :label: dx

   \mathbf{dx} = \mathbf{\mu} dt + \sqrt{\mathbf{S} dt}N(0,1)

gdzie :math:`dt,S` to przedział czasu i macierz kowariancji przyrostów
procesu na tym przedziale. 

Zakładamy więc, że przyrosty indeksów :math:`\mathbf{dx}` w okresie
:math:`dt` są skorelowanymi zmiennymi gaussowskimi. W metodzie
wariancji-kowariancji dla liniowej funkcji wyceny, to założenie
implikowało normalność rozkładu wartości portfela. Nie jest to jednak
prawdą jeśli funkcja wyceny jest nielinowa. Możemy jednak wyznaczyć
parametry rozkładu normalnego, który jak najlepiej przybliża
rzeczywisty rozkład wartości portfela.

W tym celu, naturalnym wydaje się być zlinearyzowanie funkcji wyceny i
zastosowanie wzorów :eq:`sigma_mu`. Popełnilibyśmy jednak duży
błąd. Pamiętajmy, że jeżeli chcemy otrzymać wynik, który jest rzędu
pierwszego w :math:`dt` to musimy uwględnić możliwość pojawienia się
kwadratów członów :math:`\sqrt{\mathbf{S} dt}N(0,1)`. Innymi słowy
musimy rozwinąć funkcję :math:`P(x_1,x_2,...,x_n)` w szereg Taylora do
drugiego rzędu włącznie, podstawić za przyrosty procesy :eq:`dx` i
obliczyć z takim rozkładem :math:`\mu_P` oraz :math:`\sigma_P`, z
dokładnością do :math:`dt`.

Ostatecznie odpowiedniki wzorów :eq:`sigma_mu` przybiorą postać:


.. math::
  :label: sigma_mu_nonlin
   
  \mu_P = \mu\mathbf{\nabla} P + \frac{1}{2}\mathrm{Tr}\left( \mathbf{H}(P) \mathbf{S}\right) dt\\
  \sigma_P = \mathbf{\nabla} P \mathbf{S} \mathbf{\nabla} P^T  dt

gdzie: 

 - :math:`\nabla P` - gradient wektora wartości portfela obliczony dla wartości początkowej :math:`\mathbf{x_0}`
 - :math:`H(P)` - Hessian wektora wartości portfela obliczony dla wartości początkowej :math:`\mathbf{x_0}`
  





Przykład obliczenia VaR
+++++++++++++++++++++++

.. attention:: 

   Poniższe komórki są od siebie zależne więc należy
   wykonywać poprzednie by działały kolejne.

Zaimportujmy sobie dane historyczne notować dwóch spółek, Comarch i
Colian. W tym przypadku pliki z danymi mamy w publicznym katalogu
serwisu Dropbox, ale mogą być to dowolne miejsca w sieci, dostępne
poprzez www. Po zaimportowaniu, danych narysujemy historię notowań i
ich dziennych zmian.


.. sagecellserver::

   from  urllib import request
   import numpy as np 
   import scipy.linalg

   fp  = request.urlopen("https://www.dropbox.com/s/eemrayeer8kfwxn/COMARCH.mst?dl=1")
   d1 = np.loadtxt(fp,skiprows=1,usecols=range(1,7),delimiter=',')
   fp  = request.urlopen("https://www.dropbox.com/s/m015q77ro58jxqy/COLIAN.mst?dl=1")
   d2 = np.loadtxt(fp,skiprows=1,usecols=range(1,7),delimiter=',')

   # ostatni rok
   d1,d2 = d1[-248:,1],d2[-248:,1]

   p1 = point(enumerate(d1))+\
    point(enumerate(d2),color='red',figsize=(8,2)) 

   p2 = line(enumerate(np.diff(d1)/d1[1:]))+\
    line(enumerate(np.diff(d2)/d2[1:]),color='red',figsize=(8,2))
 
   dataVAR = np.vstack([d1,d2]).T
   show(p1),show(p2)

W tym stanie mamy dane historyczne dwóch aktywów w tabeli :code:`dataVAR`, w
której kolumny odpowiadają kolejnym aktywom, a rzędy kolejnym okresom
czasowym.
   
Zdefiniujemy sobie teraz funkcję, która obliczy nam wartość portfela
dla danych wartości parametrów rynku - :code:`valueP`. Funkcja ta pobiera
dwa argumenty, :code:`P` - portfel, będący wektorem ilości aktywów
(dwuelementowym w tym przypadku) oraz stan rynku :code:`m`. Dodatkowa
zabudowana jest funkcjonalność obliczenia wartości na pewnej historii
rynku, wówczas zwracany jest wektor wartości portfela w tychże
chwilach.

.. sagecellserver::

   def valueP(P,m):
       if len(m.shape)==2:
           stock = sum([ m[:,i]*P[i]  for i in range(len(P))])
       else:
           stock = sum([ m[i]*P[i]  for i in range(len(P))])   
       return stock

   P = np.array([1,21])
   mrkt = np.array( [ 87.01,   3.01] )
  
   print( "Wartość portfela",P," dla notowań",mrkt,"wynosi:",valueP(P,mrkt) )



Metoda historyczna
~~~~~~~~~~~~~~~~~~

Mając wczytane dane rynkowe oraz portfel w powyższy sposób, dość łatwo
możemy sobie zaimplementowac metodę historyczną. W tym celu obliczamy
przyrosty notowań, działając na macierz :code:`dataVAR` funkcją
:code:`np.diff` względem rzędu. Następnie zapisujemy w pod nazwą
:code:`hist_sim` hipotetyczne kursy przyszłe aktywów, dla każdej
wartości przyrostu. Pozostaje już tylko wycenić portfel dla nowych
wartości rynku i wziąć piąty kwantyl.

.. sagecellserver::

   dataVAR_dx = np.diff(dataVAR,axis=0)
   hist_sim = mrkt+dataVAR_dx
   changes = valueP(P,hist_sim) - valueP(P,mrkt)
   print( "VaR, metoda historyczna",np.percentile(changes,int(5)) )


Metoda wariancji kowariancji
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

W metodzie wariancji-kowariancji obliczamy najpierw wektor średni
:code:`avg` oraz macierz kowariancji :code:`Cov` z dziennych zmian cen
:code:`dataVAR`. Następnie korzystając z formuł :eq:`sigma_mu`
obliczamy parametry portfela :math:`\mu_P` i :math:`\sigma_P` i
wyliczamy odpowiedni kwantyl rozkładu normalnego w tymi wartościami.

.. sagecellserver::

   dataVAR_dx = np.diff(dataVAR,axis=0)
   avg = np.average(dataVAR_dx,axis=0)
   Cov = np.cov(dataVAR_dx.T)

   sigma2P = (P.T).dot(Cov).dot(P)
   muP = avg.dot(P)

   T = RealDistribution('gaussian', 1.0)
   k =  T.cum_distribution_function_inv(0.05)
   print( "VaR metodą wariancji-kowariancji:", muP + np.sqrt(sigma2P)*k )


Metoda symulacji Monte-Carlo
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

W metodzie symulacji Monte-Carlo postepujęmy podobnie jak w
historycznej, z tą różnicą, że generujemy zestaw nowych cen nie z
pomocą historycznie zaobserwowanych zmian, ale sztucznie
wygenerowanych. Zakładamy, że zmiany parametrów rynku ( w tym
przypadku - ceny dwóch aktywów) powodujące zmiany wartości portfela są
wektorem normalnych zmiennych losowych, zadanym przez wektor średnich i
macierz kowariancji. Te ostatnie, jak w poprzedniej metodzie obliczamy
z dostępnej historii. 


.. sagecellserver::

   N = dataVAR.shape[1]
   dataVAR_dx = np.diff(dataVAR,axis=0)
   avg = np.average(dataVAR_dx,axis=0)
   Cov = np.cov(dataVAR_dx.T)

   sqrtCov =  np.real_if_close(scipy.linalg.sqrtm(Cov))
   values = np.array([ valueP(P,mrkt + avg + \
    np.dot(sqrtCov,np.random.randn(N))) for i in range(10000)])
   print( "VaR, MC:",np.percentile(values-valueP(P,mrkt),int(5)) )


Porównanie wyników
~~~~~~~~~~~~~~~~~~

Zauważmy, że VaR obliczony metoda wariancji-kowariancji i Monte
Carlo - są do siebie badzo zbliżone. W rzeczywistości powinny one
dawać w tym przypadku dokładnie tą samą wartość. Dlaczego? Zauważmy,
że mamy liniową zależność wartości porftela od indeksów
rynkowych. Oznacza to, że symulowany rozkład będzie normalny (jako
liniowa kombinacja założonych w Monte Carlo normalnych rozkładów zmian
indeksów. Najlepiej zobaczyć do na wykresie:


.. sagecellserver::

    Gaussian(x,mu,sigma) = 1/sqrt(2*pi*sigma^2)*exp(-(x-mu)^2/(2*sigma^2))
    print( muP,sigma2P )
    nbins = 100
    H = np.histogram(values-valueP(P,mrkt),bins=nbins)
    normalizacja = H[0].sum()*(H[1].max()-H[1].min())/nbins
    point( zip(H[1],H[0]/normalizacja) )+\
     plot(Gaussian(x,muP,sqrt(sigma2P)),(x,-16,16),color='red',figsize=5)

Porównajmy więc dopasowany rozkład normalny z tym który realizuje się
w rzeczywistości - który możemy otrzymać przez znormalizowanie
histogramu przyrostów historycznych:

.. sagecellserver::

    nbins=55
    H = np.histogram(np.diff(valueP(P,dataVAR)),bins=nbins)
    normalizacja = H[0].sum()*(H[1].max()-H[1].min())/nbins
    line( zip(H[1],H[0]/normalizacja) )+\
     plot(Gaussian(x,muP,sqrt(sigma2P)),(x,-16,16),color='red',figsize=5)


Widzimy, że tu różnice są znaczne. Interpretując histogram danych
rzeczywistych widzimy, że w praktyce mamy o wiele większe
prawdopodobieństwo zajścia dużych fluktuacji niż przewiduje rozkład
Gaussa.


VaR  w systemie Risk Metrics
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

VaR jako miara ryzyka powstała przy opracowaniu systemu pomiaru ryzyka
w J.P. Morgan na początku lat 90.  Na ten system składa ( składała w
przeszłości przy opracowywaniu systemu) się metodologia, zgromadzone
dane dotyczące setek instrumentów na całym świecie i oprogramowanie
pozwalające na wyliczenia VaR zgodnie z metodologia i zebranymi
danymi. System powstał w celu wprowadzenie wystandaryzowanej miary
ryzyka dla całej organizacji jaka jest J.P Morgan. Miara ta została
oparta o analizę odchyleń zwrotów z danych instrumentów finansowych
oraz zależności między nimi. Po publikacji systemu RiskMetricsTM przez
J.P. Morgan, VaR stała się miarą powszechnie używaną w zarządzaniu
ryzykiem finansowym, nie tylko w instytucjach finansowych.  Miara ta
została przyjęta przez Nadzór Finansowy jako regulacyjna metoda oceny
ryzyka dla banków.  Dotyczy to regulacji europejskich w tym polskich.
Model podstawowy obliczania VaR stosowany przez RiskMetricsTM jest
oparty o założenie, że zwroty są generowane w geometrycznym ruchu
Browna. Jest to ogólnie mówiąc metoda wariancji - kowariancji.



Wady i zalety VaR-u
+++++++++++++++++++

VaR to stosunkowo prosta w praktycznym działaniu metoda porównania
ryzyka w przypadku instytucji działającej na rynku. Porównanie jest
stosunkowo proste bo polega na porównaniu wielkości wyliczonych VaR
dla proponowanych portfeli. Wielkość ta wyrażona jest w pieniądzu i
jest konkretną liczbą. Interpretacja i porównanie jest więc
proste. Pozwala na łatwiejsze zarządzanie ryzykiem pojedynczego
portfela jak i na wyższych szczeblach zarządzania ryzykiem działu czy
całej instytucji. Pozwala na oszacowanie wielkości i tworzenie rezerwy
kapitałowej na wypadek strat. Jest metoda uznaną przez Nadzór
Finansowy. Nie jest to jednak wartość idealna.

Wady jej biorą się z założeń stosowanych modeli do wyliczeń VaR.  VaR
jest liczony dla „ normalnych” warunków rynku. Normalny rynek to rynek
danych historycznych. Jeśli tylko rynek odchodzi od „ normalności”,
model może zawieść.  Jak wykazuje historia rynków zachowanie typowe
rynków występuje od czasu do czasu. Czy rynek w okresie 2004 - 2005
jest typowym rynkiem dla wycen w roku 2007?  W przypadku niepokojów na
rynkach, rynki zachowują się "nietypowo" a straty wtedy są szczególnie
duże. Przy gwałtownych zmianach na rynku VaR może być zawodny.

Liczenie VaR-u może być pracochłonne ( wyliczenia VaR portfeli metodą
Monte Carlo).

Główny wpływ na jakość wyników VaR ma estymacja zdarzeń i trafność
doboru modeli.  Istnieją lepsze, alternatywne metody pomiaru ryzyka
np. oczekiwana wartość strat większych od VaR w danym przedziale
czasowym czyli warunkowa wartość oczekiwanych strat

Podsumowując warto podkreślić. Jest to najbardziej popularne obecnie
narzędzie oceny ryzyka.  Jednakże, żadne narzędzie używane w finansach
nie jest rynkowo neutralne. VaR jest uproszczeniem modelowym rynku.
Zależy od jakości tego uproszczenia. „Modelowa matematyczność” wyceny
oraz ustalenie poziomu ufności VaR na stosunkowo wysokim poziomie,
powoduje złudzenie posiadania kontroli, podczas gdy należy mieć duży
szacunek do rynku, oraz pamiętać, że zerowe prawdopodobieństwo nie
istnieje.


Słabości VaR
~~~~~~~~~~~~

W praktyce, co wynika po części z uregulowań prawnych, określanych
przez instytucje nadzorujące rynek, wartość zagrożona (VaR) jest jedną
z szerzej stosowanych miar ryzyka.  Ma jednak pewne wady, z których
największą, z punktu widzenia stosowania VaR w analizie portfelowej,
jest to, że VaR nie spełnia warunku addytywności. Oznacza to, iż VaR
policzona dla zdywersyfikowanego portfela może być większa niż suma
VaR-ów wyznaczonych dla instrumentów składowych.  Tylko w przypadku
współczynnika korelacji równego lub mniejszego od 0 warunek
addytywności jest spełniony. Ale taka sytuacje zachowania
:math:`\sigma` już znamy z analizy portfela, a dokładnie
dywersyfikacji wg. Markowitza.  

Należy ponownie zwrócić uwagę na jeszcze jedno przyjęte
założenie. Założono, że rozkłady zmiany cen są rozkładem normalnym,
lub do niego zbliżonym.  W rzeczywistości rozkłady doświadczalne zmian
cen aktywów finansowych często nie odpowiadają rozkładowi
normalnemu. W praktyce, rzeczywiście, większość zmian cen oscyluje
wokół wartości oczekiwanej, ale występują jednak częściej (niż w
rozkładzie normalnym) zmiany ekstremalne. Zmiany te charakteryzują
występowanie tzw. „grubych ogonów” rozkładu, co wpływa na zwiększenie
zmienności i nie jest ujmowane w VaR, w sposób adekwatny. Przyjęcie
założenia o rozkładzie normalnym zmian wartości ułatwia jednak
obliczeniach znacznie zmniejsza koszty pomiaru ryzyka.  

Nadzorcy rynku, mimo, że formalnie uznają VaR jako narzędzie
zarządzania ryzykiem pozwalające na określenie wielkości rezerwy
tworzonej na wypadek ewentualnej straty to wielkość tej rezerwy
wymaganej przez Nadzór jest większy zazwyczaj od wyliczonego tak jak
powyżej o współczynnik - :math:`a` i zwiększając rozmiar tej rezerwy :math:`a`
razy.


Analizy Scenariuszy
+++++++++++++++++++


Jak to już było podkreślane Var jest prostą miarą ryzyka. To pewna
wartość pieniędzy, które mogą być „stracone” przy niekorzystnej
sytuacji zmienności rynku. Pierwsze co wydaje się koniecznym do
zrobienia to weryfikacja otrzymanych wyników w ujęciu historycznym.

Sposób myślenia zwany z angielska **"back testing”** czyli porównanie
historyczne

Mając już opracowany model i sposób liczenia Var dla portfela warto
popatrzeć wstecz jak wyliczony z metody i modelu VaR miał się do
rzeczywistych wyników. Warto popatrzeć na np. 100 ostatnich wyliczeń
VaR ( np. . 95%, jednodniowego) i porównać ten wynik z rzeczywistymi
stratami portfela w tym okresie. Interesujacym jest odpowiedź na
pytanie czy wyliczony VaR był przekraczany w przeszłości i jak często.

Jeśli wyliczany VaR jest systematycznie za niski znaczy to, że
przyjęty model nie dowartościowuje ryzyko i dlatego straty portfela
przekraczają VaR. Znaczy to, ze należy zwiększyć „mnożnik“ dla liczenia
wymogów kapitałowych.  Jeśli VaR jest „za wysoki“ model przecenia
ryzyko i wymagany kapitał jest może być za duży (czyli - za drogi).

Kolejne kryterium analizy to **Analiza Czułości**.
Znając skład portfela powinniśmy wyliczyć na jakie zmiany i jakich wielkości jest
szczególnie czuły nasz portfel. Takiej analizie służy zróżniczkowanie
równania na wartość portfela w zależności od zmiennych rynkowych.
O ile analiza czułości daje dobre wyniki dla niewielkich zmian
rynku to jeśli mamy do czynienie z warunkami kryzysowymi to nie jest
dobrą aproksymacją ryzyka.

**"Stress testing"** to metoda testowania w warunkach znacznych zmian
otoczenia rynkowego.  W stress testing, stosujemy duże zmiany
czynników, i wyliczamy dla nich wartość portfela.  Celem stress
testing pokazanie w jasny sposób, co się może wydarzyć z ryzykiem i z
czym będzie trzeba się zmierzyć. Przykładowo, typowe zdanie z
stosowania metody stress testing może być „jeśli stopy procentowe
wzrosną o 2%, możemy stracić $15 millionów; jeśli wzrosną o 4%,
stracimy $28 millionów."


Zazwyczaj, ruchy rynku podaje się w sposób standaryzowany, aby były
lepiej rozumiane w firmie.  Na przykład, zmiany cen akcji przy zmianie
o -20%, -10%, oraz +10% i +20% . Zasadnym jest podjęcie decyzji które
dane będzie grupować razem co będzie lepiej ilustrowało problem.


**"Metoda” scenariuszy awaryjnych”"**.

Stress testing i analiza scenariuszy są podobnymi metodami i są
stosowane celem wyliczenia co się może wydarzyć w określonej sytuacji
na rynku. Jednakże, w metodzie stress testing, zmiany czynników ryzyka
są zazwyczaj podobne i są niejako typowe i obiektywne. W analizie
scenariuszy, zmiany są dobrane subiektywnie i celowo.  W metodzie
scenariuszy awaryjnych, używa się takich danych by stworzyć kilka
scenariuszy – najgorszego przypadku. Każdy scenariusz odpowiada
szczególnemu przypadkowi kryzysu rynku, np. kryzys USA 2007, upadek
gospodarki Chin, podniesienie cen przez OPEC, wstrzymanie eksportu
surowców energetycznych przez Rosje, itd . Zazwyczaj wybiera się 5- 10
najgorszych scenariuszy.


Scenariusze zazwyczaj bazują na: poprzednich kryzysach, aktualnym
portfelu firmy, opiniach ekspertów (scenariusze zazwyczaj proponują: Risk
Menedżer, szefowie pionów etc.). Biorąc pod uwagi ubiegłe kryzysy,
porównuje się dane historyczne z różnych rynków i sprawdza się co by
się stało gdyby aktualnie to się nam przydarzyło dziś.  Przykładowo,
jeśli 20% spadek w jeden dzień na rynku U.S.A. ( co miało miejsce
w1987), wydarzył by się na rynkach euro?? Scenariusz konfliktu
zbrojnego etc.

Tak wiec, oprócz formalnego liczenia VaR dla statystycznych danych
metoda powinna zostać przetestowana tak jak opisano powyżej i
wyliczenia dla scenariuszy powinny uzupełniać formalne, codzienne
wyliczenia VaR.

Taki zestaw analiz pozwala na lepsze zrozumienie ryzyka.



.. rubric:: Footnotes

.. [#f1] VaR jest to konstrukcja oparta o statystykę rynków czyli zdarzeń
 statystycznie najczęściej występujących czyli mimo, że w 99 % sytuacji
 jest wspaniałym wynalazkiem, to niestety kiedy mamy do czynienie z
 ekstremalną sytuacją, VaR jest mało użyteczny. Stratę bowiem liczy
 się, jako utratę wartości liczoną według zasady Mark-to-Market. Znaczy
 to, że realna strata w przypadku katastrofy rynkowej jest z reguły
 dużo wyższa. Powodem tego jest: płynność (a raczej jej brak w sytuacji
 kryzysowej) i bezwzględność konkurencji. Innymi słowy; strata,
 realizowana przy zamykaniu pozycji, w wyniku braku płynności na rynku,
 może być dużo wyższa. Ponadto, konkurencja może straty pogłębić,
 jeszcze bardziej np. zwiększając podaż.)

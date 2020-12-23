Czas i pieniądz
===============




Finanse to wiedza pozwalająca jej posiadaczowi na efektywną alokacje
posiadanych zasobów. Przyjmuje się najczęściej, że miarą efektywności
alokacji jest wzrost wartości. Podstawą decyzji o właściwej alokacji
jest ocena aktywów będących do dyspozycji.


Aktywo, jego wartość, wycena
----------------------------


Aktywo to ta cześć zasobów, która generuje strumień przepływów
pieniężnych.  Aktywo posiada charakterystyczną cechę, którą jest jego
wartość.  Wartość aktywa określa rynek.

Najczęściej ta wycena odbywa się metodą aukcji, gdzie aktywo zyskuje
ten, który ofiaruje za niego najwyższą cenę czyli ustala jego
najwyższą wartość.  Oszacowaniu wartości aktywów zanim poddane
zostaną testowi aukcji rynkowej służy matematyka. Matematyka pozwala
na porównywanie wartości oraz na przewidywanie ich prawdopodobnej wartości rynkowej
dzięki oferowaniu pewnych zasad i modeli przydatnych do
wyceny. Matematyczne wyrafinowanie metod i modeli wyceny wzrasta
bardzo szybko. Komputery ułatwiają przeprowadzanie skomplikowanych
obliczeń, niemniej jednak głębokie zrozumienie matematycznych reguł
rządzących finansami jest podstawą tej dziedziny wiedzy. Zdrowy
rozsadek nadal obowiązuje i koniecznym jest głębokie rozumienie tego,
co się liczy i dlaczego.

Wartość aktywów mierzona jest najczęściej wartością
pieniądza. Używając pieniądza do wyceny odkryć można szereg jego
specyficznych cech, o których będzie poniżej.

Pierwsza uwaga dotyczy praktycznego spostrzeżenia, że poszukując
danych finansowych np. ceny, w różnych źródłach znajduje się szeregi (
najczęściej czasowe) danych ceny.  Jeśli dokonuje się porównywania
tych danych należy mieć pewność, że mamy do czynienia z tą samą
wielkością oraz że wielkości te występującą w tych samych jednostkach
miary. Jeśli jednostki są różne wprowadzić należy właściwe
przeliczniki jednostki tak by porównywać to samo a nie przykładowo
mile i kilometry w przypadku porównywania odległości. Ceny w finansach
wyrażane są nie tylko w różnych walutach ale i w różnych sposobach
oddzielania wartości mniejszych od jedności i wartości oddzielania
tysięcy.


Na pytanie co wolimy otrzymać: pewną kwotę pieniężną dzisiaj czy za
jakiś czas odpowiadamy, że wolimy otrzymać tę kwotę dziś. Posiadanie
kwoty dziś jest dla nas lepsze niż otrzymanie jej kiedyś w
przyszłości. Można wiec powiedzieć, że pieniądz dzisiaj ma dla nas
większą wartość niż ten sam pieniądz w przyszłości.  Posiadając
pieniądz możemy nim rozporządzać. Możemy kupić coś teraz lub
przeznaczyć je na inny cel. Jeśli udostępnimy nasze pieniądze innym to
odczuwamy dyskomfort braku kontroli nad nimi, poczucie ryzyka ich
utraty. Za ten dyskomfort spodziewamy się od pożyczającego jakiejś
nagrody. Nagroda powinna być zależna od czasu na jaki je pożyczamy.
Ilość dni jaki upływa między każdorazowym transferem pieniądza jest
istotnym elementem w finansach.



Pieniądz dzisiaj ma dla nas większą wartość niż ten sam pieniądz w
przyszłości.  Jest to odczucie oparte o doświadczenie. Wartość
pieniądza zmienia się w czasie.  Matematyczne zasady zmiany wartości
pieniądza w czasie opierają się na założeniu, że za udostępnienie
pieniędzy komuś, kto potrafi je lepiej zagospodarować należy się
pożyczającemu nagroda w postaci jakiejś części ich wartości. Jest
kilka powodów takiego myślenia.  Pierwszy z powodów to
inflacja. Często obserwuje się wzrost cen w czasie. Nagroda wspomniana
powinna rekompensować zmianę tego poziomu cen. Drugi powód to ryzyko
tego, że pożyczkobiorca nie zwróci pożyczonej sumy.  Nagroda powinna
rekompensować ryzyko niespłacenia długu. Trzeci powód to utrata
możliwości swobodnej decyzji alokacji. Pożyczając pieniądze nie możemy zrealizować wspaniałych
możliwości jakie mogą się pojawić czasie gdy nie mamy pieniędzy we własnej gestii i
czekamy na ich zwrot. Nagroda wspomniana ma za zadanie rekompensować
wszelkie, możliwe, stracone możliwości. Nawet jeśli dwa pierwsze
powody nie występują, trzeci - wpływa na zmianę wartości pieniądza w
czasie.  To że pieniądz ma różna wartość w czasie powoduje konieczność
szczególnej ostrożności w porównywaniu kwot cyfrowych.



Linia czasu i strumienie finansowe.
-----------------------------------

Pomocna w obliczeniach matematyki finansowej jest linia czasu. Jest to
odcinek prostej łaczący chwilę aktualną (0) z punktem w przyszłości
lub przeszłości. Odcinek ten dzielony jest zazwyczaj na mniejsze
odcinki obrazujace okresy naliczania odsetek.  Na lini czasu nanosi
się strzałki pionowe ilustrujące strumienie pieniężne opisywanej
operacji korzystając z następującej konwencji: wpływ gotówki to
strumień dodatni a wypływ gotówki to strumień ujemny. Linia czasu
ilustrujaca przepływy pieniężne to prosta podzielona na odcinki
okresów (nad osią kolejne numery okresów), na dole lini, lub na
górze - kolejne przepływy( zaleznie od znaku). Ilustracja poniżej
pokazuje przykład lini czasu.

**przykład**

.. sagecellserver::

 cf = [(0,1.2),(1,2),(2,-1),(3,-1.2)]
 p = Graphics()
 for t,v in cf:
     p += arrow((t,0),(t,v))
 p    


Aktywo możemy przedstawić na osi czasowej jako pewien zbiór przepływów
generowanych przez to aktywo.  Strumienie pieniężne mogą mieć znak
plus lub minus. W zależności od tego czy wpływają na wzrost stanu
posiadania gotówki (+) czy też go zmniejszają będąc wpłatą na „obce”
konto(-).  Oś czasowa pozwala na ilustracje efektu wpływu czasu na
wartość pieniężną. Posuwanie się po wartościach pieniądza w kierunku
przyszłości czyli liczenie wartości przyszłej to
kapitalizacja. Liczenie w kierunku przeszłości to dyskontowanie.
Dokonując obliczeń uwzględniających czas należy stosować wykres
czasowy.



Wartość pieniądza w czasie
--------------------------

Mając w posiadaniu pewną kwotę pieniędzy stajemy przed następującym
wyborem: czy wydać te pieniądze natychmiast i kupić sobie coś czyli
innymi słowy skonsumować je czy też przezornie zachować na późniejszy
czas gdy może będą nam bardziej potrzebne?

Jeśli już nie przeznaczamy ich na konsumpcję, to w dalszym ciągu
myślimy jak je przechować do chwili późniejszej.  Chwila refleksji
podsunie nam dość naturalna obawę czy trzymanie pieniędzy w portfelu
(czy też innym bezpiecznym miejscu, przykładowa skarpeta czy pod
materacem) to najlepsze sposób na nasze pieniądze bo przecież inflacja
zmniejszać będzie ich wartość. Możemy też, te pieniądze zainwestować i
spowodować by "pracowały" dla nas. Inwestowanie to oddanie własnych
pieniędzy innym, którzy w zamian za użyczenie naszych pieniędzy na
pewien okres zapłacą nam w postaci odsetek od pożyczonego kapitału i
zwrócą go nam w tej samej kwocie co pożyczyli

Taką inwestycją może być lokata bankowa. Depozyt bankowy jest
instrumentem pozwalającym na zwiększenie wartości naszych pieniędzy w
czasie trwania depozytu.

Wpłacając pewną kwotę :math:`P` do banku, na rachunek
oszczędnościowy. Bank płaci nam rocznie roczne oprocentowanie w
wysokości :math:`r`.



Procent prosty
~~~~~~~~~~~~~~

Przykładowo:

Jeśli kwotę 100 PLN umieścimy na depozycie wypłacajacym 3% rocznie  to:

 - po 1 roku otrzymamy odsetki w wysokosci 3 PLN - które odprowadzamy
   na osobne konto
 - po 2 roku otrzymamy odsetki w wysokości 3 PLN - które odprowadzamy
   na osobne konto
 - po 3 roku otrzymamy odsetki w wysokości 3 PLN - które odprowadzamy
   na osobne konto

Po trzech latach dysponujemu kwotą 100 PLN na końcie depozytowym i
kwotą 9 PLN na osobnym koncie.  Taki sposób naliczania odsetek to
procent prosty.
 

Procent składany
~~~~~~~~~~~~~~~~

To zabieg polegajacy na wpłacaniu odsetek na tak samo
oprocentowane konto po każdym okresie. Jest to równoważne dodaniu odsetek do kapitału
po każdym okresie. Taki zabieg zwany jest procentem składanym.

Procent składany to sposób oprocentowania kapitału, polegający na tym,
że odsetki są doliczane do wartości początkowej kapitału i procentują
wraz z nim w kolejnym okresie bazowym. Odsetki otrzymane po upływie
każdego okresu bazowego są natychmiast reinwestowane na tych samych
warunkach co kapitał początkowy. 

Przykładowo wpłacajac kwote :math:`P` na konto depozytowe
(oszczędnościowe) oprocentowane rocznie procentem :math:`r`.  Po roku
mamy więc:

.. math::

   F= P + Pr = P (1+r)

Po 2 latach zaś jesli po roku pozostawimy w depozycie zainwestowaną
kwotę wraz z odsetkami:

.. math::
  
   F = P(1+r)(1+r) = F (1+r)^2 


Gdzie:

 - F = wartość przyszła
 - P = wartość aktualna (bieżąca) pieniędzy
 - r = stopa procentowa (oprocentowanie roczne)

po :math:`n` latach wartość ta będzie wynosić:

.. math::

   F = P (1+r)^n

Albo inaczej przyjmując  bardziej międzynarodowe oznaczenia:

.. math::

    F_V=P_V(1+r)^n


Gdzie:

 * :math:`F_V` nazywa się  wartościa przyszłą (*future value*)
 * :math:`P_V` to wartość bieżąca  pieniedzy (*present value*)
 * :math:`n` ilość lat
 * :math:`r` - stopa  odsetkowa.

W ten sposób wyliczona została wartośc przyszła zainwestowanych
pieniędzy.  Wartość przyszła jest to wartość jaka narośnie z sumy
inwestycji w pewnym okresie czasu jeśli oprocentowana będzie procentem
składanym przy danej stopie odsetek.

 

.. admonition:: Przykład 

   Obliczyć składane odsetki od 100 PLN zainwestowanych na 6% przez 3
   lata. Naliczanie odsetek roczne.

    - 1-szy rok odsetki wynoszą 6.00. Końcowa kwota inwestycji wynosi
      106.00 PLN. Kwota ta jest inwestowana w całości na kolejny rok.
    - 2-gi rok odsetki wynoszą 6.36. Końcowa kwota inwestycji wynosi
      112.36 PLN. Kwota ta jest inwestowana w całości na kolejny rok.
    - 3-ci rok odsetki wynoszą 6.74. Końcowa kwota inwestycji wynosi
      119.11PLN.

   Całkowite odsetki: 19.10 PLN


Kapitalizacja ciągła
~~~~~~~~~~~~~~~~~~~~

Wyobraźmy sobie, że wykonujemy kapitalizację odsetek :math:`m`-razy w
ciągu roku. W takim przypadku stopa procentowa stosowana do obliczenia
odsetek jest będzie wynosiła :math:`\frac{r}{m}`. Na przykład
kapitalizując odsetki półrocznie (:math:`m=2`) ze stopą roczną
:math:`r=6\%` to dwa razy w roku do kapitału dodamy po :math:`r=3\%`:

.. math:: 
   
   F_V = ( 1 + \frac{0.06}{2} )^2 P_V


Okazuje się, że istnieje granica :math:`m\to\infty`, która jest zwana
procesem kapitalizacji ciągłej. W takim procesie kapilalizujemy na
biężąco otrzymywane odsetki. Dla procesu :math:`m` kapitalizacji w
ciągu :math:`n` lat mamy:


.. math::

   F_V = P_V (1+\frac{r}{m})^{m n}   

Jak wiemy funkcja wykładnicza jest granicą następującego ciągu:
:math:`e^x = \lim_{m\to\infty}(1+\frac{x}{m})^m`, więc mamy:


.. math::

   F_V = \lim_{m\to\infty} P_V (1+\frac{r}{m})^{m n} = \lim_{m\to\infty} P_V \left( (1+\frac{r}{m})^m \right)^n = e^{n r} P_V  







Kapitalizacja, dyskontowanie
----------------------------

Gdyby znaleźć się w sytuacji, gdy dzisiaj potrzebujemy pieniędzy,
które możemy zwrócić dopiero po pewnym czasie to znajdując kogoś kto
dziś posiada pewna nadwyżkę pieniędzy możemy pożyczyć od niego
pieniądze. Stajemy przed problemem ile pieniędzy będziemy musieli
zwrócić po pewnym czasie. Dzisiaj wiemy ile potrzebujemu więc:

.. math::

   P_V= \frac{F_V}{(1+r)^n}


Rynek pieniądza znajduje się w równowadze i warunki oprocentowania
"komuś" są takie same jak "od kogoś", czyli stopa dyskontowa jest
równa stopie oprocentowania.

Ostatnia prezentowana zależność pozwala nam obliczyć wartość pieniędzy
w przyszłości - „wartość przyszłą”, znając wartość aktualną
(bieżącą). 

Z powyższego wzoru możemy też wyliczyć wartość dzisiejszą (aktualną)
znając wartość przyszłą. Taki proces,  posuwania sie w czasie wstecz, zwany jest dyskontowaniem. 

W obu przypadkach należy znać stopę procentową. Stopę tę określa
każdorazowo rynek.
 






Zdyskontowane strumienie pieniężne
----------------------------------


Jeśli nabywamy jakiś instrument finansowy to instrument ten generuje
przepływy finansowe. Przepływy mogą być

 - wypływem na nabycie instrumentu
 - wpływem do inwestora w postaci odsetek lub dywidendy albo końcowej
   wypłaty pieniężnej (zwrot zaciągniętej pożyczki albo wpływ ze
   sprzedaży akcji)

Ponieważ przepływy są odległe od siebie w czasie ich dzisiejszą
wartość musimy obliczyć uwzględniając wartość pieniądza w czasie.


Dyskontowanie przepływów to wyrażanie ich w pieniądzu z okresu
bieżącego czyli wartości aktualnej.

.. math:: 

   P_V =\sum_{i=1}^n P_V(D_i),


gdzie :math:`PV(D_i)` to wartość zaktualizowana przepływu :math:`D_i`.
W przypadku stałych wartości płatności w czasie wzór ten przybierze
postać:

.. math::  

   P_o=\sum\limits_{i=1}^n\frac{D}{(1+r)^i}







Stopa nominalna i efektywna
---------------------------

Nominalna stopa procentowa oznacza stopę procentową obliczoną przy
zastosowaniu procentu prostego. Natomiast efektywna stopa procentowa
określa rzeczywiste oprocentowanie kapitału wynikające z zastosowania
nominalnej stopy procentowej oraz sposobu kapitalizowania odsetek.

Jeżeli odsetki są kapitalizowane raz do roku, to efektywna roczna
stopa procentowa będzie równa nominalnej rocznej stopie
procentowej. Natomiast jeśli odsetki będą kapitalizowane częściej niż
raz do roku, to efektywna roczna stopa procentowa będzie wyższa niż
nominalna roczna stopa procentowa.

Stopa procentowa w jednym okresie bazowym określona jest wzorem:

.. math::

   r =\frac{r_{NRSP}}{n}

gdzie:

 - :math:`r`- stopa procentowa za jeden okres bazowy,
 - :math:`r_{NRSP}` - nominalna roczna stopa procentowa,
 - :math:`n` - liczba okresów bazowych w roku.

Wzór na efektywną roczną stopę procentową ma postać:

.. math::

   r_{ERSP}={(1+r)^n}-1,

lub też

.. math::

   r_{ERSP}={(1+\frac{r_{NRSP}}{n})^n}-1

gdzie:

 - :math:`r_{ERSP}` - efektywna roczna stopa procentowa,
 - :math:`r_{NRSP}` - nominalna roczna stopa procentowa,
 - :math:`r` - stopa procentowa za jeden okres bazowy,
 - :math:`n` - liczba kapitalizacji w roku (liczba okresów bazowych w roku).

Innymi słowy; Jeśli naliczanie odsetek ma miejsce m razy w roku
i na koniec roku n będzie mn płatności odsetek to

.. math:: 

   F_V=P_V(1+\frac{r}{m})^{nm}

czyli przy jednokrotnym  naliczaniu odsetek w roku  wzrost kapitału w ciągu roku bedzie równy

.. math:: r_w=(1+r)

przy półrocznym naliczaniu;

.. math:: 

   r_{wf}=(1+\frac{r}{2})^2

przy naliczaniu kwartalnym

.. math:: 

   r_w=(1+\frac{r}{4})^4

przy naliczaniu miesięcznym

.. math:: 

   r_w=(1+\frac{r}{12})^{12}

a przy naliczaniu dziennym

.. math::

   r_w=(1+\frac{r}{365})^{365}

gdzie:

 - :math:`r_w` - zannualizowany współczynnik wzrostu kapitału.

Czyli  częstsze naliczanie odsetek jest korzystne dla właściciela depozytu.

W sytuacji gdy liczba okresów bazowych n dąży do nieskończoności mamy
do czynienia z kapitalizacją ciągłą. Wzór na efektywną roczną stopę
procentową przy zastosowaniu ciągłej kapitalizacji odsetek przyjmuje
postać:

.. math::

   r_{ERSPC}=(e^r_{NRSP})-1

gdzie:
 
 - :math:`r_{ERSPC}` - efektywna roczna stopa procentowa przy ciągłej kapitalizacji  odsetek,
 - :math:`r_{NRSP}` - nominalna roczna stopa procentowa,
 - :math:`e` -podstawa logarytmu naturalnego.



.. admonition:: Poeksperymentuj z komputerem!

 Wyobraźmy sobie, że mamy depozyt na kwotę :math:`100` na
 oprocentowaniu na pewną stopę :math:`r`. Zbadaj ile będziemy mieli na
 depozycie środków po np. :math:`4` latach w przypadku:

 - kapitalizacji rocznej,
 - kapitalizacji miesięcznej,
 - kapitalizacji ciągłej.

 Na wykresie kolorem czerwonym zaznaczona jest kapitalizacja ciągła,
 zielone punkty to kapilalizacja roczna. Można też zwiększyć częstość
 kapitalizacji depozytu zmieniąc parametr "liczba kapitalizacji w
 miesiącu". Pod wykresem pokazana jest nominalna wartość końcowego
 kapitału w obu procesach i ich względna różnica.
 
.. sagecellserver::
   :linked: false

   var('x')
   @interact
   def _(years=slider(range(1,30),default=4,label='Lata'),rate=slider(0,100,1,default=27,label='stopa roczna (%)'),N=slider(range(1,30),default=1,label='liczba kapitalizacji w roku')):

	    pkts = [(float(i)/N,100*(1+(rate/(N))/100.)^i) for i in range(years*N+1)]
	    plt = line(pkts,color='green',marker='o')
	    plt += plot(100*exp(x*rate/100.),(x,0,years),color='red')
	    sd,sc = pkts[-1][1],100*exp(years*rate/100.)
	    print(sd, sc, round((sc-sd)/((sc+sd)*0.5)*100,2), "%")
	    plt.show(figsize=(6,2))





Sposoby  oceny efektywności  aktywa 
-----------------------------------

Dyskontowanie strumieni pieniężnych pozwala na porównanie różnych
przepływów pieniężnych poprzez sprowadzenie ich do porównania ich
wartości w tym samym punkcie czasu.  Dyskontowanie pozwala na
mierzenie efektywności alokacji.


Wartość bieżąca netto
~~~~~~~~~~~~~~~~~~~~~

Jest to wielkość pozwalająca na ocenę efektywności inwestycji.  W
chwili :math:`t = 0` nabywamy aktywo. Nabycie to ujemny przepływ
finansowy w chwili t=0 często ten przepływ nazywamy kosztem
inwestycji.

Wartość bieżącą netto wyliczamy odejmując od przyszłych wpływów
finansowych dzisiejsze koszty inwestycji np. nabycie instrumentu:

.. math::

   NPV=\sum_{t=1}^n\frac{D_t}{(1+r)^t}-I_0


gdzie:

 * :math:`NPV` - wartość bieżąca netto,
 * :math:`D_t` - przepływy gotówkowe w okresie t,
 * :math:`r` - stopa dyskonta,
 * :math:`I_0` - nakłady początkowe,
 * :math:`t` - kolejne okresy (najczęściej lata) inwestycji

Generalnie wartość bieżąca netto to różnica zdyskontowanych wpływów
(ze znakiem :math:`+`) i wypływów (ze znakiem :math:`-`) finansowych
generowanych przez inwestycje.  

Jeśli NPV jest mniejsze od zera to inwestycja jest niekorzystna.



IRR czyli wewnętrzna stopa zwrotu
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wartość NPV zależy od stopy procentowej. Wyobraźmy sobie sytuację w
której inwestujemy w pewny biznes środki z kredytu na pięć lat. Biznes
ten przyniesie zysk już za rok - pewnej stałej wartości nominalnej,
tak, że NPV jest dodatnie i wyjdziemy na swoje. Jednak jeśli stopa
procentowa wzrośnie, to może się okazać że kredyt będzie nasz
kosztował więcej niż zysk z inwestycji. W finansach stosuje się
pojęcie wewnętrzej stopy zwrotu (ang. Internal Rate of Return, IRR). 
Z definicji jest to taka stopa przy której :math:`NVP=0`. Obliczenie IRR sprowadza się matematycznie do znalezienia miejsca zerowego wielomianu. Rozwiązań :math:`NPV=0` może być wiele, ale w takim przypadku interesuje
nas najmniejsze dodatnie miejsce zerowe. Ponieważ mamy do czynienia z
wielomianem rzędu większego od czterech do rozwiązywania stosujemy
metody przybliżone.

.. admonition:: Poeksperymentuj z komputerem!

    Pożyczamy 5000zł w zamian za wypłatę sześciu kwot po 1000zł na koniec każdego roku. Zobacz jak wygląda NPV w funkcji stopy procentowej dla takiej inwestycji.  Stosując funkcję w Sage :code:`find_root` można znaleźć jej miejsce zerowe  - czyli IRR.
       

 .. sagecellserver::
   :linked: false

   var('r')
   CF = [1000,1000,1000,1000,1000,1000]
   c = lambda x,y:x/(1+r)^y
   NPV = -5000+sum( [c(cf_,i+1) for i,cf_ in enumerate(CF)])
   show(NPV)
   print(find_root(NPV,0,1))
   plot(NPV,(r,0,.15),figsize=4 )


.. admonition:: Poeksperymentuj z komputerem!

    Nie zawsze NPV ma jedno zero! 
    
 .. sagecellserver::
   :linked: false

   var('r')
   CF = [-12.,-669.,477]
   c = lambda x,y:x/(1+r)^y
   NPV = 205+sum( [c(cf_,i+1) for i,cf_ in enumerate(CF)])
   
   print(find_root( NPV, 1e-5,0.1))
   print(find_root( NPV, .1,0.2))
   plot(NPV,(r,0,.15),figsize=4 )
    
    

Obliczanie  wartości pieniądza w czasie
---------------------------------------

Poniżej pokazane będą dwa przykłady obliczeń z tego zakresu. Nie
wymagają użycia bardzo skomplikowanych metod obliczeń ale mają
za zadanie pokazać specyfikę tego rodzaju obliczeń i przydatność w tym
celu komputera oraz wymaganych na wielu egzaminach zawodowych
umiejętności posługiwania sie kalkulatorem finansowym, które to
urządzenie ma wbudowane możliwości liczenia szeregów geometrycznych i
jest niezwykle przydatne w finansach. Warto zapoznać się z tym
urządzeniem i umieć dokonywać na nim różnych obliczeń.

Zgodnie z komunikatem nr 8 Komisji Egzaminacyjnej dla doradców
inwestycyjnych z dnia 22 lutego 2006 podczas egzaminów na doradców
finansowych mogą być używane jedynie kalkulatory rekomendowane przez
Komisję. Przykładowo kalkulatory finansowe HP 10BII oraz 12C Platinum
zostały dopuszczone do używania podczas egzaminów na doradców
inwestycyjnych.

.. admonition:: Przykład 1

  Jaka jest wartość aktualna (bieżąca) kwoty 1000 PLN którą otrzymamy
  za 15 lat jeśli dzisiaj oferują nam depozyt na 7% rocznie?
 
  Rozwiązanie:
  
.. sagecellserver::
  :linked: false
  
   1000/(1+0.07)^15
  
 
 
.. admonition:: Przykład 2
 
  Przewidywana cena samochodu za  siedem lat wynosi  40 000.
 
    a) Ile musisz odkładać  rocznie na konto oprocentowane 10% rocznie  by móc   
       oszczędzić tę kwote przez  te  7 lat?
    b) Jeśli masz dzisiaj 15 000 na ten cel, to jaka musi być stopa zwrotu z tej , 
       Twojej, inwestycji by  za 7 lat wyniosła ona   40 000?
       
       
  Rozwiązanie:
  
  .. sagecellserver::
     :linked: false
  
      print( 40000/sum(  [ (1+0.1)^i for i in range(7)] ) )
  
  .. sagecellserver::
     :linked: false
    
      print( (40000-15000*(1+0.1)^7)/sum(  [ (1+0.1)^i for i in range(7)] ) )
 
Na pytania te można odpowiedzieć korzystając z  wyliczeń matematyki finansowej w zakresie wartości pieniadza w czasie.
Kłopotem może być wyliczenie sum wyrazów o dość wysokich potęgach, ale od czego jest kalkulator.
Można udzielić odpowiedzi korzystajac z akusza kalkulacyjnego, kodów pokazanych powyżej w Sage oraz wspomnianych kalkulatorów finansowych, gdzie te i podobne zagadnienie wylicza się bardzo prosto wprowadzajac wiadome w postaci danych, a to; stopy procentowej, raty spłaty, ilości spłat, wartości początkowej lub wartości końcowej i wyliczeniu brakującj a szukanej wielkości poprzez naciśnięcie odpowiedniego przycisku. 






Wartość pieniądza w czasie - uwagi podsumowujące
------------------------------------------------

Mówiąc o wartości pieniężnej  należy mieć na uwadze czas dla którego wartość ta jest określana. 
Czas bowiem zmienia wartość pieniędzy.
Uwagi końcowe:

* Porównując wartości pieniężne sprawdzić należy w jakich jednostkach są  podawane.
* Dwie wielkości  wartości pieniężnych mogą być porównywane ( w tym dodawane lub odejmowane) jeśli  dotyczą tego samego momentu czasu.
* Jeśli porównuje się  wartości monetarne w różnych momentach czasowych należy zastosować odpowiednie przeliczniki zwane dyskontowaniem lub kapitalizacją.
* Jeśli mamy dwie wartości monetarne :math:`X` i :math:`Y`, to:

  - Jeśli wartość :math:`X > Y` (lub :math:`X<Y`) w czasie :math:`t_1` to
    jest większa (lub odpowiednio mniejsza) w czasie :math:`t_2`.
  - Jeśli :math:`X =Y` w czasie :math:`t_1` to :math:`X` będzie
    równa :math:`Y` w każdym czasie :math:`t_2`.



Jak obliczyć ilość dni pomiędzy dwoma datami?
---------------------------------------------

Ilość dni jaki upływa między każdorazowym transferem pieniądza jest
istotnym elementem w finansach.

Ilość dni między datami 
~~~~~~~~~~~~~~~~~~~~~~~

Jedną z możliwości jest konwersja daty do ilości dni Juliańskch. Jest
to liczba dni, która upłynęła od 1 stycznia roku 4713 p.n.e., według
kalendarza juliańskiego. Metoda i algorytm jest opisana na stronach
Wikipedii: `Data Juliańska
<https://pl.wikipedia.org/wiki/Data_julia%C5%84ska>`_.



Większość systemów komputerowych ma wbudowaną funkcję pozwalającą na
obliczanie ilości dni pomiędzy dwoma datami. Na przykład w języku
python można wykorzystać moduł datetime w następujący sposób: 


.. sagecellserver::

   from datetime import date
   data1,data2 = (1980,10,31), (1989,5,1)
   print( date(*data2)-date(*data1) )

   


Wyliczmy ile jest dni roboczych, począwszy od 1 października 2014 do
17 lutego 2015 - czyli w semestrze zimowym: 


.. sagecellserver::

    from datetime import date,timedelta
    data1,data2 = (2014,10,1), (2015,2,17)

    d = date(*data1)
    c=0

    while d<=date(*data2):
        if  d.weekday()<5:
            print( d,d.strftime("%A") )
        d += timedelta(days=int(1))
        c+=1
    print( c )


Ilość dni pracujących - dni roboczych ma istotne znaczenie dla różnych
obliczeń na rynkach finansowych. Dlatego umiejętność takich obliczeń
jest bardzo istotna.  Przy takich obliczeniach należy pamiętać o
różnych kulturach i różnych dniach świątecznych obowiązujących na
świecie jeśli nasze rozliczenia dotyczą różnych krajów.
Dla obliczeń
instrumentów finansowych przyjmuje się różne ilości dni w
roku. Długość roku kalendarzowego wymosi 365/366 dni. Taki rok
charakteryzuje pewne instrumenty szczególnie popularne na rynku
brytyjskim. Rok o długości 360 dni - to tzw. rok obrotowy
(:math:`12\times30` dni). Taka miara roku popularna jest na rynku
amerykańskim. Instrument finansowy posiada w swym opisie informacje
jaki format dni w roku jest stosowny dla tego instrumentu.


.. admonition:: Poeksperymentuj z komputerem!

   Ile wtorków będzie w tym semestrze?

.. sagecellserver::

   print( "liczba wtorków:" )


Standardy liczenia dni w praktyce finansowej
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


W matematyce finansowej spotkać można kilka standardów na określanie
odległości w czasie.

1.  Dokładna liczba dni.
    Przyjmuje się, że rok liczy 365/366 dni a
    ilość dni liczy sie przykładowo tak jak powyżej pokazano. Każdy
    miesiąc ma tyle dni ile przewiduje kalendarz. Ilość lat określa
    się dzieląc ilość dni między datami przez ilość dni w roku.
2.  Zasada równych miesięcy.
    Według tej zasady rok liczy 360 dni i dzieli
    się na 12 miesięcy po 30 dni. Tzn. w lutym jest data 29luty oraz
    30luty.  A 31 nie występuje w żadnym miesiącu.  Zasada ta
    stosowana jest w 3 wersjach:
   
    A. Metoda Europejska - 12 miesięcy po 30 dni. 360 dni w roku.
       Metoda czasem nazywana 30/360.  W tej konwencji liczone są
       renty i spłaty kredytów większości kalkulatorów.  Stosuje się
       tą metodę do szybkich przybliżeń w matematyce finansowej.

    B. Dokładna liczba dni w miesiącach - rok 360 dni. Wylicza się
       prawdziwą ilość dni między datami (tak jak w przypadku
       kalendarza juliańskiego). Stosowanie tej metody zwanej czasami
       metodą bankową powoduje to, że kredytobiorca powinien płacić
       odsetki od rzeczywistych dni w miesiącu. Innymi słowy powinien
       zapłacić za dodatkowe 5 lub 6 dni w roku w porównaniu do metody
       30/360. Czyli stopa oprocentowania rocznego kredytu praktycznie
       dla niego wyniesie:
       :math:`r=\frac{365}{360}r' =20.28\%`, gdzie
       :math:`r'` - stopa określona dla kredytu
    C. Metoda stosowana na rynku amerykańskim (NASD) to 12 miesięcy po
       30 dni każdy.
       http://www.hsbcnet.com/gbm/attachments/standalone/2006-isda-definitions.pdf
       Zasady poprawek do daty aktualnej dla instrumentów
       naliczających odsetki na koniec kalendarzowego miesiąca. Może
       być potrzebne stosowanie kilku poprawek. Stosuje się je w
       następującej kolejności:

          * Jeśli data1 przypada na ostatni dzień miesiąca lutego i
            data2 przypada też na ostatni dzień miesiąca lutego
            (innego roku) to zmienia się datę2 na 30.
          * Jeśli data1 przypada na ostatni dzień lutego to zmieniamy
            ją na 30.
          * Jeśli data 2 przypada na 31 i data 1 przypada na 30 to
            zmieni się datę 2 na 30.
          * Jeśli data1  przypada na 31 to zmienia się ją na 30.

Należy pamiętać, że pewne instrumenty finansowe rozliczane są w
tygodniach. Przykładowo bony skarbowe. W tym przypadku rok ma 52
tygodnie i dzieli się na 4 kwartały po 13 tygodni. Tydzień to 7 dni.

Instrumenty finansowe mają bardzo interesujące zasady naliczania czasu
i zawsze należy zaznajomić się regulacjami przyjętymi dla danego
instrumentu finansowego.  Sprawę dodatkowo komplikują różne standardy
używane na świecie.


Renty i kredyty
---------------

Renty
~~~~~

Renta to jest ciąg płatności. Zazwyczaj płatności występują
regularnie (równe okresy) i zazwyczaj w równej wielkości. Źródłem
takich strumieni finansowych mogą być np; obligacje (płatności
kuponowe), opłaty czynszowe wpływające za wynajem lokalu, akcje
wypłacające regularnie dywidendę, odsetki od lokat terminowych etc. .

Wielkości charakterystyczne dla rent to :
Wielkość płatności, odstęp czasowy między płatnościami, moment płatności, sposób naliczania odsetek, otoczenie stopy procentowej  i ilość rat .

Renta wieczysta
+++++++++++++++

Renta wieczysta to nieskończony ciąg, równookresowych i równych
płatności. Rozpoczęcie analizy przypadku rent od takiego modelu
spowodowane jest jego znaczącym miejscem w matematyce
finansowej. Niech renta ta to ciąg płatności C. Płatności są płacone
na koniec kolejnych okresów, czyli pierwszy strumień pojawia się w
okresie1.  Wartość bieżącą tego ciągu płatności w punkcie t = 0
policzyć można dyskontując płatności do chwili t = 0 w następujący
sposób:

.. math::

  PV = \frac {C}{(1+r)}+\frac{C}{(1+r)^2} + \frac{C}{(1+r)^3}+ ... \frac{C}{(1+r)^n} +  ...

Jeśli obie strony pomnożymy przez :math:`(1+r)`, otrzymamy:

.. math::

   PV(1+r) = \ C + \frac {C}{(1+r)}+\frac{C}{(1+r)^2} + \frac{C}{(1+r)^3}+ ... \frac{C}{(1+r)^	n} + ...


Po prawej stronie równania wyrazy występujące po :math:`C` to
nieskończony szereg płatności jak w wyjściowym równaniu czyli ta cześć
sumy to :math:`PV`

Czyli

.. math::

   PV(1+r) =  C + PV 

Stąd 

.. math::

  PV= \frac{C}{r} 


Wartość bieżąca takiego instrumentu to cena tegoż instrumentu zwana też
wartością godziwą.

 - :math:`PV` - to tyle ile jest warty taki  instrument

Wzór prosty i łatwy do zapamiętania ale pojawia sie pytanie czy jest
to tylko model teoretyczny czy takie instrumenty istnieją. Takie
obligacje, zwana konsolami wyemitował rząd brytyjski na potrzeby
finansowania wojny z Napoleonem Bonaparte i spłaca je do dziś i
zamierza to robić do końca swego istnienia. Korporacja Disneya
wyemitowała obligacje stuletnie. Można policzyć wartość tej obligacji
i porównać go z wartością konsoli aby przekonać się jak dobrze
obligacje Disneya przybliżają obligacje wieczystą.  


Zastosowanie renty do określenia wartości godziwej akcji czyli renta wieczysta o rosnącej racie
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Zanim zostanie opisane zachowanie się aktywa zwanego akcją czyli
instrumentu własnościowego rozważyć należ przypadek jak wycenić rentę
wieczystą, której wartość raty w czasie będzie wzrastała. Wzrost
następuje co okres o g %.

Innymi słowy:
Po okresie 1 rata jest
równa C,
po okresie 2 rata to :math:`\frac{C}{(1+g)}` 
a po okresi 3 rata jest równa :math:`\frac{C}{(1+g)^2}` etc.


Wartość bieżąca czyli cena będzie równa sumie zdyskontowanych rat:

.. math::

   PV = \frac{C}{1+r}+\frac{C(1+g)}{(1+r)^2} + \frac{C(1+g)^2}{(1+r)^2}+...\frac{C(1+g)^n-1}{(1+r)^n} + ...

Mnożąc obie strony równania przez :math:`\frac{1+r}{1+g}` postępując
podobnie jak w przypadku renty wieczystej otrzymujemy: 

.. math::

   PV \frac{1+r}{1+g} = \frac{C}{1+g} + PV \frac{1+r}{1+g}

Po prostych przeliczeniach algebraicznych otrzymujemy: 

.. math::

   PV= \frac{C}{r-g}

Gdzie g<r.

Wycena  akcji w oparciu o wartość wypłacanej dywidendy
++++++++++++++++++++++++++++++++++++++++++++++++++++++


Zastosowanie powyższego rozumowania do wyceny wartości akcji samo się
narzuca. Akcja to instrument właścicielski dający właścicielowi prawo
do udziału w majątku emitenta akcji,  w tym prawo do
dywidendy. Dywidenda to udział w zysku.  Należy pamiętać, że jeśli
akcje kupujemy na nieznany okres to należy traktować spółkę jako
źródło dywidendy na okres nieskończony. Spółka bowiem nie ma
zdefiniowanego czasu życia. Raczej należy myślec tu o czasie
nieskończonym a nie o skończonym ciągu rat.  Jeśli tak, to w tym
przypadku :math:`n\to\infty` to dla skończonej ceny w
nieskończoności Otrzymujemy 

.. math:: 

   PV=\sum\limits_{i=1}^n\frac{C_i }{(1+r)^i} 


Model powyższy określania ceny godziwej akcji jest zwany modelem
dyskontowanej dywidendy.  Należy podkreślić w tym miejscu kilka
aspektów stosowania modelu. Pierwszy aspekt, należy pamiętać, że jest
to model. Założenie nieskończonego życia spółki powoduje, że wycena
dzisiejszej wartości spółki nie wymaga znajomości przyszłej ceny
akcji. Model ten wskazuje, że w cenie aktualnej akcji jest „zawarty”
nieskończony ciąg przyszłych dywidend.

Jeśli weźmie się do analizy zyski firmy to uwaga, że
firma niezwykle rzadko przeznacza cały zysk na dywidendę jest
niezwykle trafną uwagą. Konsekwencją takiego myślenia jest, to, że cena
wyliczona z dywidend, które zazwyczaj są mniejsze niż zyski firmy
może dać wartość mniejszą niż w oparciu o wzrost zysków. Ale dla tego
modelu przyjmuje się jeszcze jedno założenie- jeśli zyski firmy
rosną, to dywidenda też powinna rosnąć w tym samym tempie.

Przypadek stałego wzrostu. Wzrost zerowy dywidendy
++++++++++++++++++++++++++++++++++++++++++++++++++

Załóżmy, że spółka płaci stałą dywidendę i nie ma szans na jej wzrost w
rozsądnej przyszłości.  Czyli:
 
.. math::

  D_1 >   = D_2   = ... = D_i

Gdzie :math:`D_i` to i-ta dywidenda.

Jeśli ma stałą wartość :math:`C`, to stały strumień pieniądza
generowany przez wypłatę dywidend do nieskończoności jako sumy szeregu
nieskończonego daje wynik:

.. math::

   P_o = \frac {C}{r}

Czyli mamy przypadek renty wieczystej.


Innymi słowy cena akcji jest równa wartości wieczystej dywidendy
dzielonej przez stopę dyskontową. Jeśli stopa dyskontowa jest stopą
rynkową dyskonta (właściwą dla ryzyka inwestycji w tą akcję) to tak
uzyskana cena jest ceną rynkową. Chociaż liczba firm wypłacających w
nieskończoność stałą dywidendę jest praktycznie raczej niewielka, to
ten model jest przydatny do wyceny jeśli aktualnie wypłacane dywidendy
nie zmieniają się od pewnego czasu. Z pewnością równanie takie można
stosować dla wyceny akcji uprzywilejowanych (co do wielkości wypłaty
dywidendy).  

Stały wzrost dywidendy. Wzrost większy od zera
++++++++++++++++++++++++++++++++++++++++++++++

Przyjmujemy, że dywidenda wzrasta z roku na rok o czynnik g.

Cena z modelu dyskontowego dywidendy jest

.. math::

   P_o=\sum_{i=1}^n\frac{D_i}{(1+r)^i}


Jeśli wzrost dywidendy jest stały możemy kolejne dywidendy zapisać
korzystając z dywidendy okresu poprzedniego i czynnika wzrostu
 
.. math::

   D_1 = D_0(1+g) 

Gdzie

  G -  jest procentowym wzrostem dywidendy (zysków)  W kolejnym roku

.. math::

  D_2=(D_1 )(1+g)

Czyli:

.. math::

  D_2=(D_0 )(1+g)^2 

Dla  i-tego roku

.. math::

  D_i=(D_0 )(1+g)^i

Wstawiając tak wyliczoną i-tą dywidende do wzoru na cene akcji w
modelu dyskontowania dywidendy otrzymamy to samo co dla wzrostu renty
wieczystej o czynnik g:

.. math::

   PV = P_0 = \frac{C}{r-g}


To ostatnie równanie jest zwane równaniem modelu Gordona i jest
najczęściej stosowanym równaniem dla dywidendowej wyceny akcji
spółki. Nazwa równanie Gordona jest przyjęte w literaturze mimo, kilka
lat wcześniej równoważny model została zaprezentowany przez
J.B.Williams’a w „Theory of Investment Value”( Cambridge, MA: Harvard
University Press, 1938).

Ciekawych odpowiedzi na pytanie co w przypadku gdy g jest większe od r??? - odsyłamy do
rozważań przedstawionych w pozycjach : Ramesh Rao „Financial
Management” –Uniwersity of Texas South Western College Publishing1995
lub R.A.Brealey, S.T.Myers-„ Principles of corporate Finance” McGraw
HillComp-1996.



Renta dla skończonej ilości okresów
+++++++++++++++++++++++++++++++++++


Jeśli mamy do czynienia ze skończoną liczbą rat to wartość
aktualną takiego szeregu możemy policzyć.  Możemy postąpić na przykład w 
taki sposób: Kupujemy rentę wieczystą a po n okresach jej posiadania
sprzedajemy ją na rynku. Tak więc z nieskończonego ciągu rat
wybraliśmy dla siebie wartość skończonego szeregu
rat. Przeprowadziliśmy operacje kupna nieskończonego ciągu rat i jego
sprzedaży po n okresach. Jak jest wartość transakcji?  Kupiliśmy rentę
wieczystą za cenę: 

.. math::

   P_o =PV= \frac {C}{r}

A następnie sprzedaliśmy po czasie n okresów rentę wieczystą za którą
dostaliśmy taką cenę jak jest warta renta wieczysta czyli:
:math:`P_o
= \frac{C}{r}`.
Tylko, że dostaliśmy tę cenę po n okresach. Jej
wartość bieżąca to :

.. math:: 

   P_o=PV=\frac{C/r }{(1+r)^n}


Czyli cena transakcji, która jest wartością skończonego szeregu
płatności to: 

.. math::

   P_0=PV=\frac {C}{r}-\frac{C/r }{(1+r)^n}

Albo inaczej: 

.. math::
   :label: PV1
 
   P_0=PV=\frac {C}{r}\left(1-\frac{1 }{(1+r)^n}\right)


A ten wzór opisuje  kredyt wzięty dzisiaj o wartości bieżącej sumy n spłat płaconych w przyszłości w kolejnych okresach.


Suma szeregu geometrycznego a cztery przydatne wzory na rentę
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Dla renty możemy wyliczyć wartość przyszłą i aktualną. Ponadto mamy rentę płatną na początku okresu, zwaną czasem rentą z góry, oraz rentę zwykłą czyli płatną na końcu okresu  Daje to w sumie cztery kombinacje, dla których są cztery oddzielne  wzory. Wszystkie one jednak pochodzą ze znanego z lekcji matematyki jednego wzoru na sumę częściową szeregu geometrycznego:


   

   
.. math::

     S_n = \sum_{k=1}^n a_k = \sum_{k=1}^n q^{k-1}a_0 = \frac{a_0(1-q^n)}{1-q} = a_0\frac{(q^n-1)}{q-1}
     

Łatwo zauważyć, że :math:`a_0` to płatność, nazywana w powyższych wzorach przez :math:`C` a na kalkulatorach finansowych - PMT. Iloraz szeregu w zależności od sytuacji będzie czynnikiem dyskontującym albo kapitalizującym.


Mamy więc:

1. Wartość aktualną (PV) dla renty zwykłej czyli płatnej na końcu okresu. 

   Bierzemy sumę  :math:`S_{n+1}` bez pierwszego wyrazu a za iloraz szeregu geometrycznego wstawiamy: :math:`q=\frac{1}{1+r}`.



 .. math::

    PV = S_{n+1}-a_0 = a_0 \frac{1-\frac{1}{\left(r + 1\right)^{N}} }{r}

2. Wartość przyszłą  FV  dla renty zwykłej czyli płatnej na końcu okresu.

   Bierzemy sumę  :math:`S_{n}` a za iloraz szeregu geometrycznego wstawiamy:      
   :math:`q=1+r`.

   .. math::
     
     FV = S_n =  a_0 \frac{{\left(r + 1\right)}^{N} - 1}{r}


3. Wartość aktualną (PV) dla renty z góry czyli płatnej na początku okresu.

   Bierzemy sumę  :math:`S_n`  a za iloraz szeregu   
   geometrycznego wstawiamy: :math:`q=\frac{1}{1+r}`.

   .. math::

     PV = S_n =  a_0 \frac{\frac{1}{{\left(r + 1\right)}^{N}} - 1}{\frac{1}{r + 1} - 1}


4. Wartość przyszłą (FV) dla renty z góry czyli płatnej na początku okresu.

  Bierzemy sumę  :math:`S_{n+1}` bez pierwszego wyrazu a za iloraz szeregu 
  geometrycznego wstawiamy: :math:`q=1+r`.

  .. math::

    FV =S_{n+1}-a_0=a_0\frac{{\left(r + 1\right)}^{{\left(N + 1\right)}} - 1}{r} - 1



W Sage możemy łatwo zapisać i wyliczyć  powyższe wzory:

.. sagecellserver::

    var('q r N')
    S(N) = (1-q^N)/(1-q)
    show(S(N))
    
    print( "PV renta zwykła:"  )
    (S(N+1)-1 ).subs(q==1/(1+r)).full_simplify().show()
    print( "FV renta zwykła:" )
    S(N).subs(q==(1+r)).full_simplify().show()        
    print( "PV renta z góry:" )
    S(N).subs(q==1/(1+r)).simplify().show()
    print( "FV renta z góry:" )
    (S(N+1)-1).subs(q==(1+r)).simplify().show()    





Kredyty
~~~~~~~

Wyliczenia wartości aktualnej przyszłych, równych strumieni
pieniężnych, tak jak w przypadku renty, może zostać zastosowane do
wyliczenia spłaty kredytu.  Kredyt bowiem to kwota pieniędzy
otrzymywana dzisiaj od kredytodawcy i spłacana w przyszłości
najczęściej w równych odstępach czasu. Spłata kredytu określona przez zasady
renty to spłata równymi ratami okresowymi (przykładowo płaconymi co
miesiąc).  Z wyliczeń dotyczących renty wynika, że:

.. math::

   PV = PMT \frac{1-\frac{1}{(1+r)^n}}{r}

Gdzie:
   - PV - wartość aktualna (bieżąca)
   - PMT - płatność regularna, okresowa, rata.
   - R -  stopa procentowa
   
Oznaczenie PMT użyte zostało, gdyż jest to światowy standard, używany
we wszelkich kalkulatoprach finansowych. Wcześniej ta wielkośc była
nazywana C (patrz wzór :eq:`PV1`).  Proste matematyczne przekształcenie wzoru pozwala
obliczyć wartość raty spłaty kredytu w tym sposobie spłacania.

.. math::

   PMT  = \frac{\mathrm{PV}\; r}{1-(1+r)^{-n}}


Innym sposobem spłacania kredytu, stosowanym przez banki, jest sposób
spłacania równymi ratami kapitałowymi.  W tym sposobie wysokość
okresowej raty spłacania kredytu obliczana jest w następujący sposób:
Wielkość pożyczonej kwoty jest dzielona przez ilość okresów
spłaty. Otrzymana w ten sposób wielkość rata kapitałowa. Kapitał
pożyczony w ramach kredytu jest spłacany równymi ratami
kapitałowymi. Do tej raty należy doliczyć koszty pieniądza czasie
czyli koszt odsetek od pożyczonego (a nie zwróconego jeszcze)
kapitału.  Wielkość raty spłaty na koniec każdego kresu określona jest
jako suma raty kapitałowej i wartość czasowa odsetek od niespłaconego
kapitału.  Obrazuje to poniższy wzór:

.. TODO!!!! z sage !

.. math::

   dj = \frac{P}{N} + Odj
   
   

gdzie :
 - dj- rata spłaty kredytu
 - P/N- rata kapitałowa (P – kwota pożyczona, N ilość okresów spłaty)
 - Odj- odsetki od niespłaconego kapitału.

część odsetkowa = kwota kredytu pozostała do spłaty razy oprocentowanie w skali roku/ilość rat w roku
Sumaryczna wielkość raty spłaty kredytu składająca się z raty kapitałowej i odsetek jest wielkością malejącą w czasie spłaty gdyż  wielkość odsetek  maleje.
Porównanie spłaty kredytów  omówionymi metodami pokazują  przeliczenia  poniżej: 





.. sagecellserver::
   :linked: false

   K = 1000.0
   r = 0.2
   N = 5
   Kt=[["winny","rata","odsetki","rata kapitalowa"],[K,0.,0.,0.]]
   PMT = Kt[-1][0]/sum( [1/(1+r)^i for i in range(1,N+1)] )
   for i in range(1,N+1):
       kredyt = Kt[-1][0]
       odsetki = kredyt*r
       rata_kapitalowa = PMT - odsetki
       Kt.append( [kredyt+odsetki - PMT, PMT, odsetki, PMT-odsetki])
   table(Kt) 


.. sagecellserver::
   :linked: false
   
   K = 1000.0
   r = 0.2
   N = 5
   Kt=[["winny","rata","odsetki","rata kapitalowa"],[K,0.,0.,0.]]

   for i in range(1,N+1):
       kredyt = Kt[-1][0]
       odsetki = kredyt*r
       rata_kapitalowa = 200
       PMT = rata_kapitalowa + odsetki
       Kt.append( [kredyt+odsetki - PMT, PMT, odsetki, PMT-odsetki])
       
   table(Kt)
   
Porównując  powyższe harmonogramy spłat kredytu dwoma sposobami należy pamiętać, że z punktu matematyki finansowej i wartości pieniądza w czasie te dwa rodzaje spłaty są sobie równe.  Czyli koszt kredytu jest prawie taki sam, niezależnie, czy wybierzemy formę spłat równych, czy malejących. Nie mniej jednak raty płacone nie są sobie równe i pojawia się pytanie który sposób jest (??) lepszy i dla kogo?

Rozważmy porównanie w sytuacji  stałej stopy procentowej w czasie spłacania kredytu. Ponadto z punktu czysto praktycznego przyjmijmy, że kredyt spłacany jest w ratach miesięcznych.

Gdy wybierzemy spłaty równe, to, przez cały okres spłaty kredytu comiesięczne wpłaty do banku będą takie same. Część kapitałowa raty systematycznie rośnie w ciągu całego okresu spłaty, zaś część odsetkowa sukcesywnie maleje. Początkowo większą część spłaty stanowią więc odsetki, a bardzo niewielką - kapitał. Proporcje te zmieniają się w miarę dokonywania kolejnych spłat. Pod koniec okresu spłaty pojedyncza rata zawiera już głównie część kapitałową.

Przy stałym oprocentowaniu wysokość rat równych przez cały czas jest taka sama.

Spłaty malejące, jak zresztą sama nazwa wskazuje, z każdym kolejnym miesiącem są coraz niższe. W każdej spłacie spłacana jest równa część pożyczonego kapitału, natomiast coraz mniejsze odsetki. Wynika to z prostej zależności - malejący stan zadłużenia to stale mniejsza suma, od której naliczane są odsetki.
Sumując arytmetycznie odsetki, widać, że ich suma w przypadku spłat malejących jest mniejsza  niż analogiczna suma w przypadku spłat równych.
Natomiast spłaty w okresie początkowym są wyższe niż w przypadku spłat równych.  
Metoda  malejących spłat jest bardziej uciążliwa dla budżetu kredytobiorcy i wymaga  posiadania większych „rezerw” na początku okresu spłat. Metoda stałych spłat jest równym obciążeniem  czasie całej spłaty kredytu i jest łatwiejsza do oceny czy kredytobiorca jest w stanie spłacać kredyt.

Tak więc wybór metody spłaty kredytu zależy głównie od sytuacji finansowej kredytobiorcy.  
 
 
   
   
   
   
   
		    




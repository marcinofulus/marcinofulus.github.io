Kontrakty terminowe - wycena
============================

Kontrakty terminowe
-------------------

Kontrakt terminowy to kontrakt zawarty dziś na dostawę dobra w
przyszłości za ceną ustaloną dziś, płatną w przyszłości. Innymi słowy,
kontrakt taki **zobowiązuje** sprzedającego do sprzedaży a kupującego do
kupna **Określonego Aktywa za Określoną Cenę w Określonym Czasie**.

Tego typu kontrakty to kontrakty forward i futures. 

Kontrakt forward to zazwyczaj kontrakt OTC zawarty miedzy dwoma
stronami oddający specyfikę oczekiwań tychże stron w stosunku do tego
kontraktu. Tak wiec taki kontrakt jest dość unikalny i raczej trudny
do przeniesienia na innego kontrahenta, którego sytuacja jest
najczęściej inna niż stron, które ten kontrakt zawarły. Kontrakt
forward jest z natury swojej, kontraktem mało płynnym.

Kontrakt futures to kontrakt terminowy, wystandaryzowany pod względem
jakości tego co jest dostarczane, ilości i daty
dostawy. Standaryzacja kontrakty futures polega na zdefiniowaniu:

 * "Podstawowego" towaru lub instrumentu. To może być zarówno,
   np. miedź czy ropa naftowa jak i krótkoterminowa stopa procentowa.
 * Sposób rozliczenia kontraktu, rozliczenie pieniężne lub dostawa
   fizyczna.
 * "Ilości" jednostek podstawowego towaru przypadającej na jeden
   kontrakt. Może to być przykładowo ilość ton miedzi, ilość baryłek
   ropy, czy jednostek obcej waluty.
 * Waluty, w której kontrakt jest kwotowany.
 * Specyfikacji, jakości dostawy. W przypadku obligacji określenie,
   które obligacje mają być dostarczone. W przypadku dostawy fizycznej
   towaru, dotyczy to nie tylko jego jakości, ale i sposobu i miejsca
   dostawy.
 * Miesiąca dostawy.
 * Ostatniej daty, w której kontrakt może być handlowany.

Kontrakt futures jest handlowany na rynku giełdowym i jest raczej
kontraktem płynnym (o ile giełda handluje i nie jest zamknięta).

Kontrakty terminowe maja swoja długą historie na rynku
finansowym. Powstały z potrzeby zapewnienia sobie znanych cen na produkty
rolne. Pewne zapiski historyczne wskazują na możliwość istnienia
handlowania ryżem z przyszłych zbiorów 6000 lat temu w Chinach. W
zapiskach Arystotelesa można znaleźć wzmiankę o Talesie z Miletu,
który w oparciu o swą wiedzę oszacował przyszłe zbiory oliwek i zawarł
na długo przed zbiorami kontrakty na oliwki po cenie określonej w dniu
zawarcia transakcji. Jak mówią owe notatki, ponieważ było bardzo
daleko do zbiorów ceny na te "przyszłe " oliwki były nie wysokie i gdy
nastały zbiory, Tales chyba nieźle na tej transakcji zarobił.

Pierwsza w historii giełda futures to giełda ryżu Dojima w Japonii
powstała w 1730 roku. Rynek ten powstał, aby uwzględnić sezonowość
produkcji rolnej.  Kontrakty tego rodzaju są bardzo naturalne i każdy
kto ma do czynienia z powtarzającym się zapotrzebowaniem na określone
dobra wie, że ich wahające się ceny często niepokoją i koniecznym jest
ustalenie sobie ceny transakcji w przyszłości aby móc planować
rozsądnie finansowanie działalności. Tak wiec producenci surowców
(surowce kopalne), rolnicy jak i Ci, którzy przetwarzają surowce w
bardziej skomplikowane produkty ( Przetwórcy) potrzebują tego rynku
aby "ustalać" ceny w przyszłości.

Rynek terminowy to rynek którym rządzi prawo podaży i popytu, tak samo
jak na rynku transakcji natychmiastowych ( zwanego rynkiem kasowym lub
spot). Czyli im więcej będzie potrzeba surowca w przyszłości przy
niezmiennej podaży, tym wyższa będzie cena na ten surowiec.  Cena na
dostawę ustalana jest jako cena równowagi na dany towar. Jednak
istnieją związki rynku terminowego z rynkiem dostaw fizycznych (rynek
-natychmiastowy). Związek ten jest intuicyjnie oczywisty. Ceny na
rynku fizycznym dobra i ceny tego dobra na rynku terminowym są z sobą
związane. Kontrakt futures jest przecież instrumentem pochodnym i cena
jego zależy od ceny dobra podstawowego. Szczególnie widać ten związek
w dniu dostawy kontraktu terminowego. W dniu dostawy dobra na którym
oparty jest kontrakt futures i ceny tego dobra na rynku transakcji
fizycznych ( spot) są sobie równe. Bowiem oba rynki w ten dzień
dostarczają to samo dobro. Przed datą dostawy ceny kontraktów
terminowych mogą być wyższe lub niższe od ceny na rynku spot. Różnica
cen miedzy rynkami nazywana jest bazą.

.. math::

  \mathrm{Baza} =   \mathrm{cena futures} - \mathrm{cena  spot}

.. note::

 Niektórzy autorzy definiują bazę jako różnicę miedzy ceną spot a ceną futures.


Jeśli cena futures jest wyższa niż cena spot, baza jest dodatnia. Ceny
futures w tym przypadku maleją w kierunku ceny spot, do dnia dostawy,
gdy baza staje się równa zero. Sytuacja taka nazywana jest
**contango**.

Jeśli cena futures jest niższa niż cena spot, baza jest ujemna. W tym
przypadku cena futures rośnie w czasie by w dniu dostawy zrównać się z
ceną spot. Sytuacja taka nazywa się **backwardation** (
M.D. Fitzgerald- „Financial Futures”- Euromoney Books 1993)


.. caution:: 

  P. Saługa,Z. Grudziński-Polityka Energetyczna. Tom 12 Zeszyt 2/2
  str.525-540. rok 2009 używają na określenie contango i backwardation
  nazw reportu i deportu. Jednak uczestnicy rynku terminowego używają
  nazw angielskich.


Powyższe komentarze dotyczące  contango  i backwardation będą pomocne gdy pojawi się pytanie o cenę godziwą
kontraktu terminowego.

Rynek kontraktów futures, podobieństwa i różnice
------------------------------------------------

Cena kontraktów na rynku futures podlega wahaniom zależnym od punktu
równowagi miedzy podażą a popytem w każdej chwili funkcjonowania
rynku. Równowaga ta wyznaczana jest przez oczekiwania kupujących i
sprzedających.

Głównymi uczestnikami rynku futures są:

 * Producenci albo nabywcy surowców (commodities) handlowanych na
   giełdzie futures. Ta kategoria uczestników zwana jest "Hedgers"
   albowiem ich celem jest zabezpieczenie się przed ryzykiem zmiany
   cen.
 * Speculators - to grupa uczestników rynku, podobnie jak to ma
   miejsce na innych rynkach, to inwestorzy, którzy chcą zarobić na
   zmianie w przyszłości cen kontraktów, które nabyli. Ta grupa nadaje
   rynkowi płynność.

Istotną cechą rynku terminowego futures jest wypełnienie kontraktu,
które może mieć formę dostawy albo rozliczenia gotówkowego
kontraktu. Ma ono miejsce wtedy gdy kontrakt nie zostanie zlikwidowany
( poprzez zawarcie kontraktu przeciwnego) wcześniej, przed dniem
dostawy. Proces ten jest zwykle szczegółowo opisany w regulaminie
giełdy składa się z sekwencji działań jakie należy podjąć określonym
porządku. Istotną rolę odgrywa Izba Rozliczeniowa, instytucja
obsługująca transakcje giełdowe.  Izby Rozliczeniowe jako, że są
stroną każdego kontraktu są również włączone w ten proces. Generalnie
Izba czuwa by strona „short” transakcji dostarczyła stronie „long”
godziwe dobro z rynku fizycznego. Czasem rozliczenie może być robione
w formie rozliczenia pieniężnego. Jeśli na rynku fizycznym są różne
dobra spełniające specyfikę kontraktu dostarczający ( short) ma prawo
wybrać to, które jest „ najtańsze do dostarczenia” ( cheapest to
deliver). Przykładowo ma to miejsce gdy rozliczenie wymaga
dostarczenia portfela obligacji o określonym terminie do
zapadalności. Takich obligacji na rynku może być bardzo wiele ale
dostarczający ma prawo wybrać portfel takich, które dają największą
implikowana stopę repo dla strony short z transakcji „ cost- of carry”
tzn. strategii zakupu obligacji( za pożyczone środki)na rynku kasowym
i sprzedanie ich na rynku futures. <ref> D.Blake- Financial Market
Analysis- Mc Graw- Hill company1990)</ref>.  <ref>Implikowana stopa
repo to rentowność z transakcji repo dla odstępu czasu od chwili
aktualnej(bieżącej) do terminu realizacji kontraktu.-
przyp. autorów</ref>

Zasady zawierania kontraktów futures w obrocie rynkowym przypominają
zasady obrotu instrumentami podstawowymi na rynku giełdowym.Różnicą w tych, podobnych zasadach jest istnienie depozytu
zabezpieczającego ( margin), wymaganego od obu stron transakcji chwili
jej zawarcia. Ponieważ ceny na rynku danego aktywa zmieniają się
ustawicznie, zawarta transakcja może zmieniać swą atrakcyjność dla
stron jakie je zawarły. Depozyt zabezpieczający ma za zadanie
zmniejszenie ryzyka kredytowego stron zawierających transakcje. Innymi
słowy jeśli ruch cen zmniejsza atrakcyjność zawartej transakcji dla
jednej ze stron, to strona ta musi zwiększyć swój depozyt
zabezpieczający. Jest to akt pokazania chęci wywiązania się z
transakcji w przyszłości. Wielkość depozytu jest codziennie wyceniana
do rynku “mark to market”, aby odzwierciedlać zmiany w wartości
zajętej pozycji.

Wielkość ta jest ustalana dla każdego towaru (commodity)
osobno. Wielkość depozytu do kontraktu jest względnie niewielka i jest
równa maksymalnej dziennej fluktuacji ceny i przeliczana jest na
całkowitą wielkość transakcji. Wymagany poziomu depozytu to jest
wielkość depozytu, która musi być utrzymana na rachunku inwestycyjnym
uczestnika rynku terminowego futures.

Wielkość ta ulega zmianom zależnym od ruchu ceny rynkowej
kontraktu. Jeśli stan depozytu jest niższy od wielkości wymaganej,
dodatkowe środki musza zostać przelane na rachunek inwestycyjny
(maintenance margin) tak by spełnić wymogi depozytu zabezpieczającego.
Jeśli stan środków na koncie przewyższa wymagana wielkość depozytu,
nadmiar środków może być umorzony, albo użyty do otwarcia nowej
pozycji. Jak wpływa zmiana ceny aktywa na sytuacje stron transakcji
futures ilustruje tabela poniższa:

+----------+----------+-----------+
|          |Kupujący  |Sprzedający|
|          |          |           |
+----------+----------+-----------+
|Cena      |Może      |Musi       |
|rośnie    |umorzyć   |dopłacić do|
|          |nadmiarową|depozytu   |
|          |kwotę     |           |
+----------+----------+-----------+
|Cena spada|Musi      |Może       |
|          |dopłacić  |umorzyć    |
|          |do        |nadmiarową |
|          |depozytu  |kwotę      |
+----------+----------+-----------+


Wycena  kontraktów  futures
---------------------------

Wycena godziwa kontraktów  futures.

Ceny kontraktów futures zależą od równowagi miedzy podażą a popytem
ale mimo tego „ przypadkowego” tła pochodzenia ceny można określić
wartość godziwą, cenę godziwą kontraktu futures.
Jeśli na rynku nie ma niepewności, wycena godziwa kontraktu futures ( forward) opiera się na
następującym sposobie myślenia. Zakładany jest brak kosztów transakcji
oraz brak ograniczeń wyobraźni oraz brak gotówki. Inwestor obserwując
rynek transakcji spot i futures zauważył, że są dwa sposoby
skorzystania z tych rynków aby osiągnąć zysk.

 1. Korzysta z własności rynku futures ( i upływającego czasu) i
    sprzedaje kontrakt futures na dostawę aktywa w określonym terminie
    (nie jest wymagane posiadanie aktywa, które ma się dostarczyć w
    przyszłości- inaczej „krótka sprzedaż”).  W dniu dostawy, szybko
    pożycza pieniądze w kwocie wartości kontraktu, kupuje aktywo na
    rynku spot, dostarcza kupcowi futures, inkasuje pieniądze za
    kontrakt. Oddaje pożyczoną kwotę ( odsetki wynoszą zero bo oddaje
    w ten sam dzień co pożyczył). Jego ewentualny zysk to różnica
    miedzy ceną kontraktu futures w dniu sprzedaży a ceną aktywa na
    rynku spot w dniu dostawy.
 2. Ponieważ nie posiada gotówki w dniu „ zero” pożycza pieniądze w
    kwocie równej cenie aktywa na rynku spot.  Kupuje aktywa na rynku
    kasowym. Nie lubiąc ryzyka sprzedaje kontrakt futures na datę
    dostawy i już wie jaką cenę uzyska za aktywo w dniu dostawy.  Jego
    zysk to różnica miedzy ceną kontraktu spot a ceną kontraktu
    futures pomniejszona o wartość odsetek od pożyczonych pieniędzy na
    kupno początkowego kontraktu.


Dla lepszego zrozumienia załóżmy, że okres czasu między dniem
pierwszej transakcji a czasem dostawy wynosi T lat. To pozwoli na
wyliczenie odsetek od kredytu. Czytelnik z wyobraźnia widzi już siebie
jak korzystając z powyższej podpowiedzi kupił np. 1000 baryłek ropy
(wielkość kontaktu futures) i trzyma je T lat np. w ogrodzie czy na
balkonie.  Oczywiście przechowywanie fizycznego aktywa kosztuje i
koszty przechowywania należy ująć w kalkulacji ceny godziwej. Tak więc
na początku w obu przypadkach ilość pieniądza na starcie wynosi zero.

Zysk z tej pierwszej inwestycji wynosi

.. math::

   P_1=P_f - P_s(T),

gdzie:

 - :math:`P_f` - aktualna cena na rynku futures
 - :math:`P_s(T)` -  cena spot w roku :math:`T`.

Jasnym jest, że w świecie całkowitej pewności :math:`P_f=P_s(T)`,
czyli, że ceny futures muszą być równe aktualnej przyszłej cenie rynku
spot.  Należy w tym miejscu przypomnieć sobie to co było mówione o
zachowaniu przyszłych kursów wymiany w stosunku do dzisiejszych kursów
wymiany, w skrypcie "Wprowadzenie do funkcjonowania rynków
finansowych" (`link
<http://el.us.edu.pl/ekonofizyka/index.php/RF:Rynek_wymiany_walut#Rynek_wymiany_walut>`_)
a szczególnie o konwergencji cen na rynkach futures i spot. Tak więc
zysk z takiej transakcji będzie równy zero. Należy zauważyć, że z
powodu pełnej pewności nie ma potrzeby pobierania „initial margin”
czyli depozytu zabezpieczającego ani depozyt ten nie będzie się
zmieniał. Czyli w strategii 1 nie wystąpią żadne wypływy pieniężne ani
wpływy w czasie życia inwestycji. Również koszty przechowywania nie
występują w kontrakcie futures i całe koszty są związane
z transakcją na rynku kasowym i nie wystąpią do końca okresu.

W przypadku strategii 2 sytuacja jest bardziej skomplikowana, mimo, że
podobnie jak w 1 na początku nie ma przepływu pieniądza. Jeśli na
zakup fizycznego zakupu aktywa potrzebne jest wzięcie kredytu o stopie
r, to koszt tego kredytu będzie obniżał końcowy zysk. Ten zysk jest
również obniżony o koszty przechowywania aktywa przez omawiany okres
czasu. Koszty przechowywania (jeśli wystąpią) są z reguły jakimś
procentem od ceny spot aktywa. Zazwyczaj bardzo małym procentem.
Widać, że działają podobnie jak oprocentowanie pożyczki.  Przyjmijmy
dla prostoty, że r to sumaryczna stopa kredytu i składowania. To
uproszczenie jest o tyle uzasadnione, że koszty składowania występują
tylko w przypadku surowców (i w tym przypadku należy uwzględniać, że
r jest równe sumie obu stóp) albo w przypadku olbrzymiej ilości
kontraktów kosztów tych nie ma i r jest tylko oprocentowaniem kredytu.
Należy jeszcze wspomnieć o jeszcze innym aspekcie posiadania
fizycznego aktywa. Czasem w przypadku pewnych aktywów w trakcie ich
posiadania mogą pojawić się pewne beneficja. Jeśli przykładowo
posiadamy fizyczna benzynę możemy ją zatankować gdy na stacjach jej
braknie, jeśli posiadamy fizyczny portfel akcji możemy otrzymać
dywidendę należną posiadaczom akcji.  Posiadacze fizycznego złota w
czasie zawieruchy dziejowej czują swą przewagę nad posiadaczami
kontraktu na dostawę tegoż w terminie późniejszym. Jest to dodatkowy
zwrot z posiadania aktywa, z reguły jest to pewien procent ceny kasowej
aktywa. Tak więc zysk, z transakcji 2 wynosi:


.. math::

   P_2 = P_s(T)- P_s(1+rT) + d P_s T = P_s(T)- P_s-(r-d)P_sT,

gdzie: 
 - :math:`P_s` -  aktualna cena spot (kasowa)
 - :math:`P_s(T)` -  cena spot w roku :math:`T`
 - :math:`r` - roczny koszty przechowywania (carry costs), włączając
   koszty oprocentowania pożyczki)
 - :math:`d` -  roczny zwrot z posiadania aktywa.


W ostatnim wzorze został użyty procent prosty a nie procent
składany. Jeśli by użyć procentu składanego wtedy należałoby użyć
formuły :math:`(1+r)^T` a koszty przechowywania na rynku kasowym
byłyby proporcjonalne do ceny. "Cost -of carry" są równe przychodom
pomniejszonym o wydatki czyli :math:`(r-d)` i mogą być, jak wiemy
ujemne albo dodatnie.

Obie strategie dają ten sam wynik czyli sprzedaż aktywa w roku
:math:`T`. Obydwie nie wymagają zaangażowania czyjegoś kapitału i obie
wolne są od ryzyka. Dwie identyczne strategie nie zużywające kapitału,
odbywające się bez ryzyka (takie dwie transakcje zwane są arbitrażem) w
warunkach równowagi powinny generować ten sam zysk, a zysk ten
powinien być równy zero. Jeśli wiemy, że strategia 2 generuje zysk
zero to strategia 1 tez powinna generować zysk równy zero.

Porównując te równania można wyliczyć cenę godziwa kontraktu futures
:math:`Pf_o`

.. math::

  Pf_o={1+(r-d)T}Ps = Ps+(r-d)PsT

Czyli godziwa cena  futures  jest równa  aktualnej cenie spot + „cost-of- Carry” - kosztom przechowywania. Biorąc pod uwagę definicję bazy i wstawiając ja do ostatniego równania widzimy, ze cost-of-carry jest równy bazie.

.. math::

 \mathrm{baza}= Pf_o- P_s+(r-d)P_s(T)= \mathrm{cost-of-carry}


Baza jest dodatnia (contango) jeśli koszty przechowywania są dodatnie
i jest ujemna (backwardation) jeśli koszty przechowywania są ujemne.

Podobne równaniami  zachodzą  miedzy cenami kontraktów futures na różne terminy dostawy:


.. math::

  Pf_2=Pf_1+(r-d)Pf_1(T_2-T_1)

Gdzie:

 - :math:`Pf_1` -  aktualna cene kontraktu futures z terminem dostawy :math:`T_1`
 - :math:`Pf_2` - aktualna cena kontraktu futures z terminem dostawy
   :math:`T_2( T_1<T_2).`


Różnica miedzy cenami dwu kontraktów futures nazywa się  spread,  i widać  że spread jest równy „ cost-of-carry” oraz  także, że jest równy bazie.

.. math:: 

 \mathrm{spread}=Pf_2- Pf_1=(r-d)Pf_1(T_2 -T_1) = \mathrm{cost-of-carry}


Jeśli cost-of-carry, a tym samym i spread, jest dodatni to
:math:`Pf_2>Pf_1` (contango) a jeśli te wielkości są ujemne to
:math:`Pf_2<Pf_1` (backwardation).

Z arbitrażem (bez ryzyka) możemy mieć do czynienia jeśli cena  :math:`\ Pf_2`  jest większa niż lewa strona równania:

.. math::

  Pf_2=Pf_1+(r-d)Pf_1(T_2-T_1)

Wtedy mając kontrakt long do czasu dostawy w :math:`T_1` a kontrakt
short do czasu dostawy :math:`T_2` byłoby możliwe przyjąć dostawę w
:math:`T_1` za :math:`Pf_1` i trzymać aktywo aby dostarczyć go w
czasie :math:`T_2` za cenę :math:`Pf_2` i wygenerować zysk dla
siebie. Jednakże, jeśli kontrakty futures są wycenione godziwie taka
sytuacja nie może się zdarzyć. Arbitraż zostanie zilustrowany bardziej
szczegółowo w dalszej części rozdziału.

Przykłady wyceny
~~~~~~~~~~~~~~~~

Przypadek1.  Wycena kontraktu futures - krótkoterminowy instrument zero kuponowy.

Przyjmijmy, że będzie to bon skarbowy, powiedzmy 360 dniowy bon skarbowy, przyjmijmy, że wyceniamy kontrakt futures na  bony skarbowe US Treasury. Można wiec przyjąć że w stopie futures nie ma premii za ryzyko. Rozważania na przypadek polskich Bonów Skarbowych będą wyglądać tak samo, ale w praktyce, rynek futures dla  US Treasury istnieje  i jest dość duży znacznie większy niż na Bony Skarbowe.
  
Ponieważ  instrument nie generuje płatności kuponowych  korzystając ze wzoru 

.. math::

  Pf_o={1+(r-d)T}Ps

Dla  :math:`d=0`  i dla  czasu  n dni otrzymujemy:

.. math::  Pf_o=[1+r(\frac{n}{360}]Ps

Przypomnieć  należy, że:

  - :math:`Pf_o` to cena kontraktu futures
  - :math:`n` -  ilość dni do dostawy kontraktu
  - :math:`Ps` - cena spot aktywa bazowego (obecna cena instrumentu
    bazowego)
  - :math:`r` - stopa procentowa odpowiadająca terminowi realizacji
    kontraktu.

Przypadek 2. Kontrakt walutowy. 

Czyli  np. konieczność  wyceny przyszłego  kursu wymiany.

.. note::  

  Rozumowanie przeprowadzone dla kontraktu futures nie będzie się
  różnić od rozważań przeprowadzonych dla wyceny kontraktu forward dla
  kursów wymiany przeprowadzonych w `skrypcie  autorstwa  M.Łukaszewski i J.Sładkowski <http://el.us.edu.pl/ekonofizyka/index.php/RF:Rynek_wymiany_walut>`_ 
  Ma jednak w tym miejscu cel
  wykazania, że przyjęta i omawiana powyżej zasada wyceny kontraktów futures
  można też zastosować w pokazany poniżej sposób. 

Załóżmy, ze jesteśmy już w strefie EURO i celem jest pozyskanie USD w
terminie za rok.

Podobnie jak to było omawiane przy wycenie kontraktu forward na kurs
wymiany inwestor ma do wybory dwa postępowania.  Albo potrzebną kwotę
dolarów otrzymujemy dzisiaj kupując dolary za euro i lokujemy je na
depozycie dolarowym na rok. Albo, kwotę w euro deponujemy na depozycie
euro na rok i za rok dokonujemy wymiany na dolary. Zakładając brak
arbitrażu kwoty na depozytach po roku powinny być
równoważne. Założenie jest w pełni uzasadnione co wykazano w rozdziale
o kursach walutowych ( hipoteza oczekiwania w przypadku stóp
procentowych).

Innymi słowy, są dwie możliwe strategie. Kupić dziś kontrakt
terminowy. Kupno kontraktu terminowego za cenę Pf oznacza, że za rok od
dziś posiadacz kontraktu zamieni Pf euro na jednego dolara. Druga
strategia polega na tym, że pożyczamy Euro na początku okresu po
stopie re, wymieniamy je na dolary po cenie spot i inwestujemy na
rynku depozytów dolarowych przy stopie rd. Pod koniec roku z dochodów
dolarowych spłacamy zadłużenie w euro.

Każdy z depozytów w ciągu roku przyrósł :math:`1+r` razy. Czyli
depozyt euro przyrósł :math:`1+r_e` razy a depozyt dolarowy :math:`1+r_d`
razy.
 
Łatwo wykazać, że:

.. math:: 

  ( \frac{1+r_e}{1+r_d})P_s = P_f,

gdzie:
 - :math:`r_d` - stopa oprocentowania dolarowego
 - :math:`r_e` - stopa oprocentowania  euro
 - :math:`P_s` - cena spot wymiany
 - :math:`P_f` - cena futures

Po odpowiednim przekształceniu i  odrzuceniu nieznaczących wyrazów wyższych rzędów, otrzymać można  znajomo wyglądający wzór.

.. math:: 

   Pf_o+ P_s+(r_e-r_d)P_s


Czyli ponownie widać, że cena futures jest równa cenie spot  powiększonej o „cost-of-carry, czyli różnicy stóp procentowych rynku euro i rynku dolarowego 

Ten wzór można przekształcić do bardziej przydatnej formy:

.. math:: 

  \frac{Pf_o - P_s}{P_s}=r_e-r_d 

Jest to tzw. Równanie parytetu stop procentowych. Mówi ono, że wzrost
terminowego kurs wymiany jest równy różnicy stóp procentowych rynków
walut wymienianych. Innymi słowy równanie pozwala oceniać jak rynek
terminowy ocenia aprecjację jednej waluty względem drugiej.

Przykład 3.

Cena godziwa futures na akcje  lub indeks  rynku akcji.

Cenę na kontrakt futures na akcje  można obliczyć w następujący sposób. 

Zakładamy istnienie uproszczenia - kontrakt futures na 1 rok i trzymamy jest do terminu  dostawy.

Strategia1. Na początku roku kupujemy odpowiednią dla warunku
kontraktu ilość akcji. Na koniec roku sprzedajemy. To co zyskujemy to
różnica cen akcji i dywidenda wypłacona w czasie roku.

Czyli

  .. math::  \mathrm{Zwrot}_1= (Ps_1-Ps)+dPs,

gdzie  

 - :math:`Ps`- cena akcji na początku roku
 - :math:`PS_1` cena akcji na końcu roku 
 - :math:`d` - dywidenda ( liczona jako procent ceny akcji)


Strategia2.

Kupujemy kontrakt futures na akcje. Dodatkowo, kwota równa cenie
odpowiedniej do warunków kontraktu ilości akcji zostaje zainwestowana
na rynku pieniężnym na okres roku.

Zysk z tych transakcji to oprocentowanie uzyskane na rynku
pieniężnym, minus cena kontraktu futures plus różnica miedzy ceną akcji na
końcu roku i na początku roku( to co daje kontrakt futures).

Czyli

.. math::

  \mathrm{Zwrot}_2= (Ps_1-Pf)+(1+r)Ps- Ps,

gdzie :math:`r` - stopa procentowa oprocentowani na rynku pieniężnym a 
inne oznaczenia jak wyżej.

Obie strategie powinny odbywają się w tych samych warunkach ryzyka i
są tak samo wyceniane wiec wynik muszą przynieść identyczny. Jeśli tak,
to równając zyski z sobą otrzymujemy.

.. math::
  Pf_o = Ps = (r-d)Ps

Czyli znów cena futures równa się cenie spot plus “cost-of-carry”.

Proszę zauważyć, że robienie depozytu obrazuje w praktyce kredytowanie
całej transakcji na rynku pieniężnym i jest kosztem inwestycji.

Jeśli   transakcje przeprowadzamy  na okres krótszy niż rok to wzór ten  należy zapisać w poniższej formie:

.. math::  

  Pf_o=Ps+(r-d) \frac{n}{360}Ps,

gdzie :math:`n` to liczba dni w których trwa inwestycja a pozostałe
oznaczenia jak wyżej. Rok obrachunkowy jest 360 dniowy.


Przykład 3a. Cena futures na indeks rynku akcji.


Rozumowanie przebiega tak samo jak w przypadku akcji. Tylko, że cena
zakupu indeksu to cena zakupu takiej ilości akcji i z taką wagą jak
opisane jest w indeksie i zasadach kontraktu futures.
 
Skoro rozumowanie jest takie samo więc  cena kontaktu futures na indeks wynosi:

.. math::

 Pf_o = Ps = (r-d)Ps,

gdzie:\

 - :math:`Ps` - Cena, tzn,  wartość kasowa akcji wchodzących w skład indeksu, na początku roku
 - :math:`Pf_o` - cena kontraktu futures 
 - :math:`r` - stopa procentowa rynku pieniężnego.
 - :math:`d` - współczynnik dywidendy (czyli dywidenda do ceny akcji).

Jeśli inwestycja dotyczy inne okresu niż równo jeden rok to wzór  na cene godziwą kontraktu futures  wynosi:

.. math::
    Pf_o=Ps+(r-d) \frac{n}{360}Ps,

gdzie :math:`n` to liczba dni w których trwa inwestycja a pozostałe
oznaczenia są jak wyżej.

**Kapitalizacja ciągła  a wycena kontraktów terminowych**

Dotychczas  omawiając  efekt stopy procentowej używany był  model kapitalizacji dyskretnej, czyli typowego procentu składanego. W analizie finansowej często wykorzystuje się logarytmiczną stopę zwrotu albo inaczej kapitalizacje ciągłą,  co jest uzasadnione własnościami statystycznymi. Kapitalizacja ciągła jest uzasadniona dodatkowo tym, że w przeciwieństwie do zwykłych stóp, stopy logarytmiczne maja charakter addytywny, co pozwala na wykorzystywani rozkładu normalnego (Agnieszka Pasztyła. „Badania dochodu i ryzyka inwestycji za pomocą analizy rozkładów”. `<http://www.statsoft.pl/portals/0/Downloads/pasztyla.pdf>`_).

.. admonition:: Przykład 

 Jaka stopa ciągłego naliczanie jest równoważna dla stopy
 miesięcznej kapitalizacji 15%?

.. math:: e^R = (1+0.15/12)12 

  Rozwiązując ze względu na :math:`R` otrzymujemy: :math:`R
  =14,91\%`.
  
Kapitalizacja ciągła jest jak widać dobrym przybliżeniem i
stosowana jest przez wiele systemów informacji rynkowej.

Czyli cena kontraktu futures :math:`Pf_o` dla aktywa nie generującego
kosztów składowania ani dochodu z tytułu posiadania przy kapitalizacji
ciągłej, wynosi:

.. math::

  Pf_o=Ps e^{rT}

Jest to przykładowo  słuszne dla złota.


Jeśli aktywo generuje przychód w pieniądzu to przy braku kosztów składowania cena godziwa kontaktu, przy ciągłej  kapitalizacji wycenia się :

.. math::  F_0 = (S_0 - I )e^{rT},    

gdzie :math:`I` to wartość bieżąca przychodu.

Jeśli aktywa generują znaną rentowność q to cena kontraktu futures,
dla kapitalizacji ciągłej wynosi:

.. math::  F_0 = S_0 e^{(r-q)T},    

gdzie:

 - :math:`q` - rentowność aktywa
 - :math:`r` - stopa procentowa
 - :math:`T` - czas do dostawy.

Cena kontraktu  futures dla  aktywów generujących koszty składowania. 

Analogicznie jeśli występują koszty składowania i wynoszą d jako
procent od wartości to cena kontraktu wyniesie:

.. math::  Pf_o = Ps e^{(r+d)T},    


Albo inaczej :math:`\ Pf_o=(Ps +D)e^{rT}`, gdzie :math:`D` to wartość
aktualna kosztów składowania.



Kontrakt futures na waluty- kapitalizacja ciągła.

Cena kontraktu wyniesie 

.. math::  Pf_o=Ps e^{(r- r_j)T},

gdzie 

 - :math:`r` - stopa wolna od ryzyka rodzimej waluty
 - :math:`r_j` stopa wolna od ryzyka waluty obcej, 
 - :math:`T` czas do dostawy.

**Strategia  arbitrażu**

Strategia arbitrażu (jeśli taki istnieje) przykład dla wyceny ciągłej
a dla sytuacji na rynkach nie zachodzi równość cen. Sytuacja wygląda następująco:

Jeśli 

.. math:: Pf_o<Ps e^{rT}

To należy kupić kontrakt terminowy, sprzedać krótko aktywo będące
podstawą kontraktu futures, zainwestować otrzymana gotówkę przy stopie
:math:`r` na czas :math:`T`. Cash Flow dla :math:`T=0`, :math:`CF0`,
jest zero. Natomiast po okresie :math:`T` Cash flow :math:`C`:

.. math:: CF_T= Pse^{rT}-Pf_o>0

Warto zastanowić się, co stanie sie na rynku z cenami jeśli wielu
inwestorów zastosuje taką strategię??

:math:`Ps` powinno maleć a
:math:`Pf` wzrastać.

I co wtedy z naszym arbitrażem?

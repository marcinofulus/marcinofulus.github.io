VaR

Zarządzanie portfelem to proces ustawicznej analizy sytuacji na rynku
i zachowania się cen aktywów, proces optymalizacji składu posiadanego
portfela tak by zysk z niego był wysoki oraz szukanie sposobów by
ewentualna strata wartości portfela była możliwie najmniej
bolesna. Ograniczanie strat, to podstawowe oczekiwanie zarządzania
ryzykiem a źródłem tego ryzyka jest zmienność cen aktywów. Generalnie,
optymalizacja w procesie zarządzania portfelem sprowadza się do
maksymalizacji dochodu przy niezmiennym ryzyku albo do zmniejszania
ryzyka przy ustalonym dochodzie.

Coraz większe skomplikowanie instrumentów finansowych i transakcji wymagało stworzenia w miarę prostego, ale jednocześnie elastycznego narzędzia kontroli ekspozycji na ryzyko.  
Przykładowo w koncepcji CAPM takim parametrem charakteryzującym poziom ryzyka akcji jest współczynnik beta. VaR jako metoda (a także wskaźnik podejmowanego ryzyka), powstała w związku z koniecznością wyceny ryzyka instrumentów, portfeli instrumentów, które to stają się coraz bardziej wyrafinowane i skomplikowane gdyż nowe instrumenty pojawiające się na rynku są coraz bardziej wyrafinowane. Wartość VaR wyraża stopień ekspozycji podmiotu na ryzyko w zakresie posiadania określonego portfela aktywów. Zadaniem VaRu jest określenie pewnej wartości potencjalnej straty (przy założonym poziomie prawdopodobieństwa, przedziale czasowym, normalnych warunkach rynkowych i przy wycenie aktywów po cenach ostatnich zawartych rynkowo transakcji czyli Mark-to-Market).  VaR informuje, na jaki poziom strat narażona jest pula aktywów, przy określonych warunkach pomiaru.
VaR (wartość narażona na ryzyko, wartość zagrożona)  jest to kwota, jaką można stracić w wyniku inwestycji w portfel w określonym horyzoncie czasowym i przy założonym poziomie ufności. VaR jest statystyczną miarą ryzyka, która szacuje stratę na portfelu, jaka może wystąpić przy założonym poziomie ufności. VAR zawsze określa prawdopodobieństwo, zgodnie z którym straty (dotkliwość ryzyka) przy zadanym prawdopodobieństwie (przedział ufności) statystycznie nie powinny być  większe od wyliczone kwoty. 
Definiując VaR uznajemy, że VaR jest poziomem straty, który może zostać przekroczony z prawdopodobieństwem równym a.
Nie należy interpretować wyliczonej wartości VaRu jako stwierdzenie, że „VaR jest maksymalną stratą” nawet jeśli  autorzy dodają do tego wyrażenia  uwagę, że  mamy do czynienia ze statystyką, np. „przy ustalonym poziomie istotności (ufności)”.  Bywają sytuacje, ze straty mogą być dużo wyższe ( tutaj jako footnote: VaR jest konstrukcja oparta o statystykę rynków czyli zdarzeń statystycznie najczęściej występujących czyli mimo, że w 99 % sytuacji jest wspaniałym wynalazkiem, to niestety kiedy mamy do czynienie z ekstremalną sytuacją, VaR jest mało użyteczny. Stratę bowiem liczy się, jako utratę wartości liczoną według zasady Mark-to-Market. Znaczy to, że realna strata w przypadku katastrofy rynkowej jest z reguły dużo wyższa. Powodem tego jest: płynność (a raczej jej brak w sytuacji kryzysowej) i bezwzględność konkurencji. Innymi słowy; strata, realizowana przy zamykaniu pozycji, w wyniku braku płynności na rynku, może być dużo wyższa. Ponadto,  konkurencja może straty pogłębić, jeszcze bardziej zwiększając podaż.)
  Innymi słowy VaR to wartość strat , która może być przekroczona z prawdopodobieństwem α lub to wielkość straty, która może nie być przekroczona z prawdopodobieństwem równym ( 1- α) w kolejnym dniu.
VaR jest bardzo wygodną i praktyczna miara ryzyka. Prostota jej to przede wszystkim to, że jest to  konkretna liczba. To daje prosta możliwość porównania i pewność w interpretacji odnośnie do porównywania zasad zarządzania finansowego. Jest to metoda, która podaje ogólny poziom ryzyka, niezależnie od rodzaju aktywów w powszechnie zrozumiałych jednostkach jakimi są pieniądze (wartość rynkowa).
Konsekwencja zasady funkcjonowania VaR jest prosta: Jeżeli dany portfel aktywów przynosi większe zyski, przy mniejszym poziomie ryzyka VaR, to należało zwiększyć jego wielkość. Jeżeli dane aktywo przynosi większe zyski przy takim samym poziomie VaR, to należało zwiększyć zaangażowanie w to aktywo. Jeżeli zarządzający generował większe zyski przy tym samym poziomie VaR, to należy się mu się odpowiednio większa premia.
VaR – metody  obliczania.

Wartość zagrożona (wartość narażona na ryzyko, Value at Risk, VaR)
w chwili t jest to taka strata wartości rynkowej portfela, że prawdopodobieństwo osiągnięcia jej lub przekroczenia w rozpatrywanym okresie (t,) równe jest zadanemu poziomowi tolerancji α.

(Literatura ; Jorion P., Value at Risk,  2nd edition, McGraw-Hill, 2001,
 Krzysztof Piontek, Akademia Ekonomiczna
im. Oskara Langego we Wrocławiu Katedra Inwestycji Finansowych i Ubezpieczeń - http://www.kpiontek.ue.wroc.pl/testyVaR.pdf).

Powyższa definicje można zapisać w następujący sposób:
Prawdopodobieństwo tego że  wartość portfela pod koniec  okresu będzie  nie mniejsza niż wartość portfela na początku okresu  pomniejszona o VaR jest równa α.
 Taka jest istota VaRu. Jednak wyliczenie tej wielkości to problem praktyczny który nie jest realizowany jednakowo. Stosuje się bowiem w praktyce wiele  metod aby oszacować tą wartość. 
Wartość zagrożona w odniesieniu do portfela na rynku kapitałowym czy instrumentu finansowego, jest to taka strata jego wartości rynkowej, że prawdopodobieństwo jej osiągnięcia lub przekroczenia w zadanym okresie równe jest przyjętemu poziomowi tolerancji α. Zazwyczaj przyjmuje się α = 〈0,01;0,05]〉, przy czym im jest on niższy, tym wyższa jest wartość VaR. Tak wiec przyjmuje się najczęściej praktycznie przyjmowane prawdopodobieństwo przekroczenia VaR wynosi 5% lub 1%. Oczywiście, zakładamy  typowe warunki  rynkowej zmienności cen, znane z historii. Jest to pierwsze z założeń jakie są przyjmowane. Można by dyskutować czy warunki z okresu lat 2003 -  2005 można zastosować do sytuacji rynku w roku 2007, albo czy dane z okresu 1925_1928 będą reprezentatywne do tego co rynek pokazał pod koniec października 1929roku,  czyli w początku Wielkiego Kryzysu.


Metody wariancji -  kowariancji

Bez względu na metodę, Value at Risk – miarę straty można wyrazić jako wartość absolutną lub jako jej procentową wielkość w stosunku do wartości bazowej, bądź w odniesieniu do wartości średniej portfela.


 Omawianie tych metod  zacznijmy od  przykładu portfela składającego się z pojedynczego aktywa.  Wartość  rynkowa aktywa zmienia się  rynkowo w czasie.  Jest ona większa lub mniejsza . Trend  jest raczej trudny do przewidzenia . Często zakładamy ,ze ruch cen to ruch Browna.   Duże zmiany wartości są  rzadsze niż  mniejsze.
Obserwując zmiany cen w dłuższym okresie możemy zauważyć, że duże zmiany są mało prawdopodobne a ekstremalnie duże,  wręcz niemożliwe. Decydując jak bardzo mało prawdopodobne są to zmiany decydujemy jakie skoki są praktycznie niemożliwe czyli jakie straty portfela są  bardzo mało prawdopodobne ( lub nawet  niemożliwe). Wybrany poziom prawdopodobieństwa to poziom tolerancji . Mówimy tutaj o ufności a właściwie poziomie ufności. 
Jeśli poziom tolerancji czyli prawdopodobieństwo przekroczenia to α , to poziom ufności c jest równy ( 1-α).
Wartość VaR dla portfela składającego się z jednego aktywa jest funkcją: 
wartości ( mierzonej w pieniądzu) portfela
Zmienności ceny aktywa, mierzonej jako odchylenie standardowe
Poziomu tolerancji
Horyzontu czasowego.
Jeśli  staramy się określić VaR dla  kolejnego, jednego dnia  możemy przyjąć  założenie, ze średnia zmian dla jednego dnia wynosi zero.
 Dla  portfela jednego aktywa i jednego dnia zmian VaR  wynosi: 
 W x σ x k
Gdzie  
 	W -  wartość portfela w dniu poprzednim( w okresie poprzednim)
	σ – odchylenie  standardowe ceny aktywa
 	 k – liczba odchyleń standardowych poniżej średniej odpowiadające  (1-α) kwantylowi wystandaryzowanego rozkładu normalnego.
 Dla poziomu ufności 95% , c = 0,95  czyli  (1-c) jest piątym kwantylem ( czyli 5%) standardowego rozkładu normalnego.
Odpowiadająca temu wartość k = 1,645, a gdy 1 – α = 0,99, to c = 2,33.



Wartość k dla dowolnego poziomu można odczytać z tablic albo skorzystać z  funkcji w arkuszu Excel NORMSINV.
Przykładowo:
 Mamy portfel o wartości 100 000 jednostek pieniężnych składający się  z akcji spółki „ Reflex. SA.” Załóżmy, że odchylenie standardowe dziennego zwrotu na tych akcjach wynosi 0,0251 ( 2,51%) dziennie. Chcąc wiedzieć z pewnością 95% jaki jest VaR naszego portfela  prowadzimy wyliczenia następująco: 
				W x σ x k
Czyli:
  100 00 x 0,0251 x 1,645 = 4 128, 95
Znaczy to , że posiadając taki portfel w ciągu  następnego dnia  istnieje  5% szans na to , że  straty portfela mogą wynieś  4 129 jednostek pieniężnych lub więcej. Czyli wartość portfela może spaść poniżej 95 871 jednostek pieniężnych.
  Poszerzenie na  więcej niż jeden okres czasowy.
Aby wycenić wartość VaR  w czasie więcej niż jeden dzień ( okres czasowy) , korzysta się z zależności  odchylenia standardowego od czasu.
 Odchylenie  standardowe po t okresach ( np. dniach)  jest równe odchyleniu  standardowemu dziennemu ( jednego okresu)  razy pierwiastek  z ilości okresów.
	σt = t1/2σ1
gdzie
 	t- oznacza ilość okresów( dni)  
	σ1 – oznacza odchylenie standardowe dzienne ( jednego okresu)
	σt  –  oznacza odchylenie standardowe po  t okresach ( dniach).

 Czyli jeśli chcemy znać VaR naszego portfela w ciągu miesiąca na poziomie 95% pewności ( przyjmuje się średnio jako 22 dni robocze) wyliczamy:
 VaR = 100 00 x 0,0251 x 1,645 X 221/2 = 19 366,5 jednostek pieniężnych.
Co jeśli w naszym portfelu znajduje się więcej niż jedno aktywo? W takim przypadku wyliczając VaR musimy uwzględnić  teorie portfela, której  autorem jest Markowitz. Z tej teorii wiadomo, ze ryzyko portfela zmniejsza jego dywersyfikacja. Ponadto należy uwzględnić istnienie ( lub jego brak)  korelacji miedzy zachowaniem się  aktywów.
Aby wyliczyć wartość VaR takiego portfela należy dodatkowo określić:
Wagę aktywa w portfelu ( jego udział w wartości portfela) , udział jest bowiem ważony kapitałem.
Odchylenie standardowe stopy zwrotu każdego z aktywów  portfela.
Korelacje miedzy stopami zwrotu każdego aktywa portfela.
Należy jeszcze uogólnić sytuacje (poprzednio założyliśmy, że  średnia wartość rozkładu wynosi  zero). W ogólnym przypadku kwanty jest równy:
		Rα= μ – kσ
Czyli  VaR jest równy:
		VaR = ( μ – kσ) W					(XXX)
 Gdzie 
		W – wartość portfela
		μ – średnia wartość rozkładu
		σ – odchylenie standardowe stopy zwrotu
k – stała rozkładu
 Niech wielowymiarowy rozkład stóp zwrotów składników portfela (wymiarowość jest określona przez liczbę składników) jest wielowymiarowym rozkładem normalnym o wektorze średnich μ i macierzy kowariancji danych Σ
		
gdzie n jest liczba składników portfela.
 Wartości  μ oraz σ możemy wyliczyć korzystając z 
			 
Oraz 
				
 Gdzie
		Wi  - to udział (waga)  i – tego składnika w portfelu
 Zaś  μ oraz σ są określone przez powyższym wektorem μ i  macierzą Σ.
 Po  podstawieniu ostatnich dwu wzorów do wzoru ( XXX)  obliczyć można  VaR.
Powyższe  podejście nosi nazwę metody wariancji – kowariancji.
 Przykładowo niech  portfel o wartości początkowej 100 000 składa się z dwu  składników  jednego o wadze 60 % i odchylenie standardowym 1% i drugiego o odchyleniu  2% współczynnik korelacji niech wynosi 0,4.
 Dla takich danych :
		
 








VaR – „słabości”
 Widząc liniowy związek Var z  odchyleniem standardowym i patrząc na wzory  analizy portfelowej dostrzec można pewne „słabości „ VaR.
Patrząc formalnie na ostatni wzór widać, ze:




 
Czyli 
		






W praktyce, co wynika po części z uregulowań prawnych, wartość zagrożona (VaR) jest jedną z szerzej stosowanych miar ryzyka.  Ma jednak pewne wady, z których największą, z punktu widzenia stosowania VaR w analizie portfelowej, jest to, że VaR nie spełnia warunku addytywności. Oznacza to, iż VaR policzona dla zdywersyfikowanego portfela może być większa niż suma VaR-ów wyznaczonych dla instrumentów składowych.  Tylko w przypadku współczynnika korelacji równego lub mniejszego od 0  warunek addytywności jest spełniony. Ale  taka sytuacje   zachowania   σ już znamy z analizy  portfela, a  dokładnie  dywersyfikacji   wg. Markowitza.
Należy ponownie zwrócić uwagę na jeszcze jedno przyjęte założenie. Założono, ze rozkłady zmiany cen są rozkładem normalnym, lub do niego zbliżony.  W rzeczywistości rozkłady doświadczalne zmian cen aktywów finansowych często nie odpowiadają rozkładowi normalnemu. W praktyce,  rzeczywiście ,większość zmian cen oscyluje wokół wartości oczekiwanej, ale występują jednak częściej (niż w rozkładzie normalnym) zmiany ekstremalne. Zmiany te charakteryzują występowanie tzw. „grubych ogonów” rozkładu, co wpływa na zwiększenie zmienności i  nie są ujmowane w VaR, w sposób adekwatny. Przyjęcie założenia o rozkładzie normalnym zmian wartości ułatwia jednak obliczeniach znacznie zmniejsza koszty pomiaru ryzyka.
 Nadzorcy  rynku , mimo, ze formalnie uznają  VaR jako narzędzie zarządzania ryzykiem pozwalające na określenie wielkości  rezerwy tworzonej na wypadek ewentualnej straty to wielkość  tej rezerwy wymaganej przez Nadzór jest  większy zazwyczaj od wyliczonego tak jak powyżej o współczynnik – a zwiększając  rozmiar tej rezerwy a razy.   

Metody symulacji historycznej.

Metoda ta sprowadza się do wykorzystania historycznych stóp zwrotu instrumentu finansowego (np.
portfela akcji). Najczęściej przyjmuje się dzienne historyczne stopy zwrotu. Obserwuje się stopy przez pewien (odpowiednio długi)  okres czasu przykładowo 1 rok – czyli około 225 obserwacji- z dni transakcyjnych. Historyczne stopy zwrotu pozwalają określić empiryczny rozkład. Umożliwia to oszacowanie kwantyla rozkładu i wyznaczenie wartości ryzykownej. Skuteczność symulacji historycznej jest uwarunkowana niezmiennością stóp zwrotu w przyszłości w stosunku do danych historycznych. Stąd korzysta się z n obserwacji objętych badaniem według formuły:


			
W ten sposób zostaje wygenerowany rozkład statystyczny stóp zwrotu. Wyznaczenie  odpowiedniego kwantyla tego rozkładu pozwala na wyliczenie  VaR bezpośrednio z definicji, czyli wg. pokazanych w poprzednich metodach zasad. Tym razem  nie zakłada się , ze rozkład jest rozkładem normalnym oaz unika się szacowania parametrów takich jak średnia czy odchylenie standardowe korzystając z danych historycznych.

Metoda symulacji Monte Carlo.

 W metodzie Monte Carlo przyjmuje się  pewien model  kształtowania się cen rynkowych aktywa.  Wybór modelu zależy od autorów ich doświadczenia  praktyczne czy teoretyczne.  Niemniej jednak musi on zostać starannie sprawdzony na danych historycznych czy rzeczywiście charakteryzuje właściwie zachowania się  danych rynkowych instrumentu finansowego. Następnie generuje się  wiele ( tysiące) obserwacji stóp zwrotu instrumentów finansowych tworzących  portfel. Otrzymuje się,  w ten sposób rozkład stóp zwrotów z portfela. Wyznaczenie odpowiedniego kwanty la tego rozkładu pozwala na estymacje VaR wg już omówionych metod.
Schemat  obliczeń M-te Carlo
 Geometryczny Ruch Browna ???



 VaR z uwzględnieniem wartości ekstremalnych – „Grube ogony  rozkładu”.
Dokładna analiza stóp zwrotu doświadczalnych szeregów finansowych czasowych pozwala stwierdzić, że to co dość często było w  powtarzane , czyli o  rozkładzie normalnym  jako modelu, w wielu przypadkach jest nieprawdą. Większość szeregów finansowych wykazuje: istnienie „ grubych ogonów” czyli  prawdopodobieństwo pojawienia się skrajnych wartości, czy bardzo dużych zmian jest wyraźnie większe niż w przypadku rozkładu Gaussa. 

Wykresy rozkładów  zwrotów  pokazują, że duże zmiany występują znacznie częściej niż przewiduje to rozkład normalny, natomiast mniej jest średnich zmian (wartości odchylających się od średniej od 0,5 do 2,5
odchyleń standardowych). 
W związku z powyższym konieczne jest poszukiwanie o nowych modeli. Na podstawie przeprowadzonych  analiz ( np. Katarzyna Brzozowska-Rup, Wiesław Dziubdziela „ESTYMACJA INDEKSU OGONA” WYBRANYCH SZEREGÓW FINANSOWYCH ZA POMOCĄ ENTROPII RENYI’EGO. –szukaj http://www.wne.sggw.pl/czasopisma/pdf/EIOGZ_2006_nr60_s69.pdf) oraz ( Ewa Miłoś-   Finansowy Kwartalnik Internetowy „e-Finanse” 2011, vol. 7, nr 1 www.e-finanse.com  Wyższa Szkoła Informatyki i Zarządzania w Rzeszowie)    wykazać można, że w wielu zjawiskach wartości ekstremalne pojawiają się zgodne z rozkładami potęgowymi. 
W obliczeniach  VaR skupiamy się  na  poziomie ufności  99% zakładając , że strata się nie zdarzy. W modelach wartości ekstremalnych skupiamy się na  tych niekorzystnych zdarzeniach, które maja bardzo małe prawdopodobieństwo wystąpienia  ale  mogą przynieść duże straty.  Szczególnie w instytucjach ubezpieczeniowych  istnieje potrzeba analizy  zjawisk katastrof .
Rozkłady  wykazujące  cechy  „ grubych ogonów to przykładowo rozkład t- Studenta, Pareto, etc. Modele rozkładów jakie stosowane są w analizach i szacowaniach  VaR opisane są przykładowo ( Tomasz Bałamut- Metody estymacji Value AT Risk - NBP- Materiały i studia;  zeszyt 147; 2002r.)

 VaR  w systemie Risk Metrics.

VaR jako miara ryzyka powstała przy opracowaniu systemu pomiaru ryzyka w J.P. Morgan na początku lat 90.  Na ten system składa ( składało w przeszłości przy opracowywaniu systemu) się metodologia,  zgromadzone dane dotyczące  setek instrumentów  na całym świecie i oprogramowanie pozwalające na wyliczenia VaR zgodnie z metodologia i zebranymi danymi. System powstał  w celu wprowadzenie wystandaryzowanej miary ryzyka dla całej organizacji  jaka jest J.P Morgan. Miara ta została oparta o analizę odchyleń zwrotów z danych instrumentów finansowych oraz zależności między nimi. Po publikacji systemu RiskMetricsTM przez J.P. Morgan, VaR stała się miarą powszechnie używaną w zarządzaniu ryzykiem finansowym, nie tylko w instytucjach finansowych.
 Miara ta została przyjęta  przez  Nadzór Finansowy jako regulacyjna metoda oceny ryzyka dla banków.  Dotyczy to  regulacji  europejskich w tym polskich.
 Model podstawowy  obliczania VaR stosowany przez RiskMetricsTM jest oparty o założenie, że  zwroty są generowane w geometrycznym ruchu Browna. Jest to ogólnie mówiąc  metoda wariancji – kowariancji. 



Wady i zalety VaR-u

VaR to stosunkowo prosta w praktycznym działaniu metoda porównania ryzyka w przypadku instytucji działającej na rynku. Porównanie jest stosunkowo proste bo polega na porównaniu  wielkości wyliczonych VaR  dla  proponowanych portfeli . Wielkość ta wyrażona jest w  pieniądzu i jest  konkretną  liczbą. Interpretacja  i porównanie jest więc proste. Pozwala  na  łatwiejsze zarządzanie ryzykiem  pojedynczego portfela  jak i na  wyższych szczeblach zarządzania ryzykiem działu czy całej instytucji. Pozwala na oszacowanie wielości  i tworzenie rezerwy kapitałowej na wypadek strat. Jest metoda uznaną przez  Nadzór Finansowy .
Nie jest to jednak wartość idealna.
 Wady jej biorą się z założeń stosowanych modeli do wyliczeń VaR. 
VaR jest liczony dla „ normalnych”  warunków  rynku. Normalny rynek to rynek danych historycznych. Jeśli tylko rynek odchodzi od „ normalności”,   model może zawieść.  Jak wykazuje  historia rynków zachowanie typowe rynków występuje  od czasu do czasu. Czy rynek w okresie  2004 – 2005 jest typowym rynkiem dla wycen w  roku 2007?  W przypadku  niepokojów na rynkach,   rynki zachowują się „ nietypowo „ a straty wtedy są szczególnie duże. Przy gwałtownych zmianach na rynku VaR może być zawodny.
 Liczenie VaR- u  może być pracochłonne ( wyliczenia VaR portfeli metodą Monte Carlo).
  Główny   wpływ na jakość  wyników VaR ma  estymacja  zdarzeń i trafność doboru modeli.
Istnieją lepsze, alternatywne metody pomiaru ryzyka  np. oczekiwana wartość strat większych od VaR w danym przedziale czasowym  czyli warunkowa wartość oczekiwanych strat
Podsumowując warto podkreślić. Jest to najbardziej popularne obecnie narzędzie oceny ryzyka.
 Jednakże, żadne narzędzie używane w finansach nie jest rynkowo neutralne. VaR jest uproszczeniem  modelowym rynku.   Zależy od jakości tego uproszczenia. „Modelowa matematyczność” wyceny oraz ustalenie poziomu ufności VaR na stosunkowo wysokim poziomie, powoduje  złudzenie posiadania kontroli, podczas gdy należy mieć duży szacunek do rynku, oraz pamiętać ,że zerowe prawdopodobieństwo nie istnieje. 




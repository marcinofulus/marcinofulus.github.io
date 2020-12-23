========================
Specyfika danych rynkowych
========================

Oprogramowanie Sage a w szczególności zawarte w nim biblioteki `numpy`
oraz `scipy` oraz wbudowane możliwości wizualizacji i interakcji dają
możliwość stworzenia "od podstaw" prototypu własnej aplikacji to
szerokiego spektrum analiz danych i statystyk.


Zwroty względne, bezwzględne i log-zwroty
========================================

Rozważmy ewolucję ceny pewnego aktywa w czasie. Wartości notowań
aktywa są pewnym procesem losowym. W analizie jego zmienności ważnym
pojęciem jest "zwrot", który jest matematycznie rzecz biorąc
przyrostem procesu na pewnym okresie czasu. Załóżmy, że mamy pewien
dyskretny ciąg chwil czasu :math:`t_i` w których aktywo ma cenę  :math:`S_i`.
W finansach spotykamy trzy ważne pojęcia:

- zwrot absolutny w chwili :math:`t_i`: :math:`S_i-S_{i-1}`
- zwrot względny w chwili  :math:`t_i`: :math:`\displaystyle\frac{S_i-S_{i-1}}{S_{i-1}}`
- log-zwrot w chwili :math:`t_i`: :math:`\log S_i -\log S_{i-1}`

Analiza szeregów czasowych notowań historycznych najczęściej operuje
właśnie tymi wielkościami. Posiadają one kilka istotnych własności. Po
pierwsze, korzystając z własności logarytmu naturalnego możemy
napisać:

.. math::

   \log S_i -\log S_{i-1} = \log \frac{S_i}{S_{i-1}}.

Jeśli zwrot względny jest mały, to jest w przybliżeniu równy
log-zwrotowi. Zapiszmy:

.. math::

   \log \frac{S_i}{S_{i-1}} = \log  \frac{S_{i-1}+S_i-S_{i-1}}{S_{i-1}} \\
   = \log \left(1+\frac{S_i-S_{i-1}}{S_{i-1}}\right).
   
Teraz możemy rozwinąć logarytm w szereg Taylora:

.. math::
   :label: taylorlog

   \log (1+x) = x-\frac{x^2}{x} + \mathop{O}(x^3),

jeżeli zatrzymamy się tylko na liniowym członie to otrzymamy:

.. math::

    \log \frac{S_i}{S_{i-1}} \simeq \frac{S_i-S_{i-1}}{S_{i-1}}


Klasycznym modelem matematycznym, który stosuje się do opisu
zachowania się zmian ceny jest geometryczny ruch Browna. W takim
przypadku zakłada się, że zwrot względny spełnia:

.. math:: 

  \frac{S_i-S_{i-1}}{S_{i-1}} = \mu  + \sigma N_i(0,1),


gdzie :math:`\mu` to deterministyczne tempo wzrostu logarytmu ceny
związane ze stopą procentową a :math:`\sigma^2` to wariancja zmian
logarytmu ceny.  :math:`N_i(0,1)` oznacza niezależne gaussowskie
zmienne losowe o średniej zero i wariancji jeden. Przejście do granicy
:math:`(t_i-t_{i-1})\to 0` wymaga zastosowania stochastycznych równań
różniczkowych i taki proces ciągły jest dany wzorem:


.. math:: 
  :label: sde1

  dS = \mu S dt  + \sigma S dW,


gdzie :math:`dW` to różniczka procesu Wienera. Można pokazać, że
zakładając ewolucje według równania stochastycznego :eq:`sde1`
otrzymujemy proces w którym warunkowy rozkład ceny w czasie :math:`t`
przy założeniu ceny :math:`S_0` w chwili :math:`t=0`, jest
log-normalny:

.. math::
   :label: Pwar

   P_S(S,t|S_0,0)= \frac{1}{\sqrt{2\pi\sigma^2 t } S } e^{-\displaystyle\frac{(\log(\frac{S}{S_0})-(\mu-\frac{\sigma^2}{2}) t)^2}{2\sigma^2t}}.


.. note::

   Sprawdź jaka jest kanoniczna postać rozkładu log-normalnego np. w
   `Wikipedii
   <http://pl.wikipedia.org/wiki/Rozk%C5%82ad_logarytmicznie_normalny>`_. Zauważ,
   że w naszej notacji zarówno średnia jak i wariancja rosną  liniowo z
   czasem.  Jak to zinterpretować?



Rozkład log-normalny jest zupełnie odmienny od rozkładu normalnego,
jednak dla małych zmian ceny można by się spodziewać pewnych
podobieństw. Rozważmy sytuację, w której mamy wartość początkową ceny
pewnego aktywa równą :math:`S_0` i rozważamy najbliższą przyszłość. Co
to znaczy? W tej sytuacji będzie to taki horyzont czasowy na którym
cena akcji niewiele się zmieni w stosunku do ceny początkowej tzn.:

.. math::
   
   \frac{S}{S_0} \simeq 1

W praktyce, taki krótki horyzont czasowy może typowo oznaczać zmianę
kursów pomiędzy notowaniami dziennymi. Przekonamy się teraz, że
rozkład ceny na któtkich czasach jest "prawie" gaussowski. Do równania
:eq:`Pwar` wstawmy w mianowniku :math:`S_0` zamiast :math:`S` a w
eksponencie zastąpmy logarytm rozwinięciem :math:`\log
\frac{S}{S_0}\simeq \frac{S-S_0}{S_0}`. Otrzymamy wówczas rozkład
normany w postaci:

.. math::
   :label: Pshort

   P_S(S,t|S_0,0)= \frac{1}{\sqrt{2\pi\sigma^2 t } S_0 } e^{-\displaystyle\frac{\frac{S-S_0}{S_0}-(\mu-\frac{\sigma^2}{2}) t)^2}{2\sigma^2t}}.

   



.. admonition:: Poeskperymentuj z komputerem

   Zbadaj czym różnią się dwa rozkłady - normalny :eq:`Pshort` i
   log-normalny :eq:`Pwar` dla małych i dużych  czasów.

     - Zwiększ czas i zaobserwuj jak zmienia się rozkład. Czy w każdym
       z przypadków może pojawić się cena aktywa mniejsza od zera?
  
     - Zmień w kodzie inne parametry: wartość początkową, wariancję na
       jednostkę czasu i szybkość wzrostu ceny.


.. sagecellserver::
    :linked: false
 
    var('r,sigma,t,x0')
    logN = 1/(sigma*sqrt(2*pi*t)*x)*exp(-(log(x)-log(x0)-(r-sigma^2)*t)^2/(2*sigma^2*t))
    Normal = 1/(sigma*sqrt(2*pi*t)*x0)*exp(-( (x-x0)/x0-(r-sigma^2/2)*t)^2/(2*sigma^2*t))

    @interact
    def _(t_=slider(0.001,0.2,0.001,default=0.01)):
        pars = {r:0,sigma:1.51,x0:1,t:t_}
        p1 = plot( logN.subs(pars) , (x,1e-5,4), fill=True)
        p2 = plot( Normal.subs(pars) , (x,1e-5,4), figsize=4,color='red')
        (p1+p2).show()




Przykład analizy danych rynkowych
=================================

Wczytamy dane i obliczymy zwroty względne i logarytmiczne.

.. attention:: Dane zazwyczaj są w pliku, jednak w tym przypadku w skrypcie
   nie mamy możliwości załączenia pliku. Dlatego będziemy analizować
   dane, które są dostępne jako odnośnik URL i które możemy otworzyć z
   pomocą biblioteki :code:`urllib`.

Dane z notowań historycznych najczęściej występują w formacie zwanym
`csv` - czyli wartości oddzielone przecinkiem. Można je wczytać do
arkusza kalkulacyjnego, ale też bezpośrednio otworzyć za pomocą
pakietu :code:`numpy`.


.. sagecellserver::


    import numpy as np
    from urllib import request
    
    fp  = request.urlopen("https://www.dropbox.com/s/eemrayeer8kfwxn/COMARCH.mst?dl=1")
    data = np.loadtxt(fp,skiprows=1,usecols=[2],delimiter=',')
    N = data.shape[0]
    t = np.arange(N)
    line(zip(t,data),thickness=0.3,figsize=(7,2))



.. admonition:: Poeksperymentuj sam

   Ile jest danych? Wypisz na ekranie pierwsze 100 wartości.


Policzmy teraz zwroty względne i logarytmiczne i narysujmy wykres log-zwrotów i zwrotów względnych. Aby odróżnić te dwa zestawy danych będziemy rysować kropkami i: 

.. sagecellserver::

    r_rel = np.gradient(data)/data
    r_log = np.gradient(np.log(data))

    line(zip(t,r_rel),color='gray',thickness=0.5)+\
    point(zip(t,r_log),color='red')


Jak widać praktycznie wielkości te się pokrywają.  Możemy też łatwo
sporządzić histogram wartości tychże zwrotów co jeszcze bardziej
uwydatnia tą własność:

.. sagecellserver::

   nbins=100
   plst = []
   for r,c,title in zip([r_rel,r_log],['red','blue'],["Zwroty wzgledne","Log-zwroty"]):
       H = np.histogram(r,bins=nbins)
       normalizacja = H[0].sum()*(H[1].max()-H[1].min())/nbins
       plst.append(line( zip(H[1],H[0]/normalizacja),color=c,figsize=(4,2),title=title))
   show(plst[0])
   show(plst[1])



.. admonition:: Poeksperymentuj z komputerem

   Zbadaj jak wyglądałby histogram dla różnych wartości parametry
   :code:`nbins`. Czy bardzo duże i bardzo małe wartości mają sens?
   Jaki jest użyteczny zakres tego parametru?



Stacjonarność danych
~~~~~~~~~~~~~~~~~~~~

Zauważmy że w modelu geometrycznego ruchu Browna, parametry
:math:`r,\sigma^2` nie zależą jawnie od czasu. Może się to wydawać
mylące bo wariancja i średnia rozkładu warunkowego na cenę aktywa
:eq:`Pwar` jest funkcją czasu. Jednak to wynika z faktu, że cena aktywa
jest opisana zmienną losową spełniającą równanie stochastyczne
:eq:`sde1`. Jej rozkład warunkowy jest jednak zależny od
czasu. Sytuacja jest taka sama jak dla np. położenia punktu
materialnego w ruchu jednostajnym prostoliniowym. W takim ruchu
położenie zależy od czasu pomimo, że wszystkie współczynniki w
równaniu Newtona są stałe.  W naszym przypadku mamy interpretację dla
parametrów :math:`r,\sigma^2` - są mianowicie to średnia i wariancja
na jednostkę czasu. Zauważmy też, że jest to prawdą tylko w granicy
małych czasów.

Sprawdźmy jak dobrze jest spełniony warunek stacjonarności :math:`r,\sigma^2`!

.. sagecellserver::

   print(np.std(r_log[:1000]),np.std(r_log[1000:2000]))


Widzimy, że jest kiepsko spełniona! Widać to już całkiem nieźle z wykresu
log-zwrotów, który to ma okresy większej i mniejszej zmienności. 

.. admonition:: Poeksperymentuj z komputerem
  
   Narysuj wykres wariancji danych estymowanej po okresie :math:`k`
   notowań. 

   - Co się stanie gdy zwiększymy ten okres? 
   - Porównaj ten    wykres z zależnością dziennych zwrotów od czasu.


.. sagecellserver::

    k=5
    X = r_log
    var_win = [np.var(X[i:i+k]) for i in range(0,X.shape[0],1)]
    line(zip(t[::1],var_win),ymin=0,ymax=0.002,figsize=(6,2))


Autokorelacja
~~~~~~~~~~~~~

Log-zwroty są ze sobą nieskorelowane. Gdyby było inaczej to predykcja
ceny była by zbyt prosta i teoretycznie prowadziła by do możliwości
arbitrażu. Sprawdźmy, że tak jest rzeczywiście:

.. sagecellserver::

    X = r_log
    autocorr = [np.corrcoef(np.vstack((X[:-k],X[k:])))[0,1] for k in range(1,250)]
    line(enumerate(autocorr))


Grube ogony, kurtoza i skośność
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Analizując histogram log-zwrotów możemy odnieść wrażenie, że jest on
nieco bardziej wypikowany w okolicy zera i ma trochę "grubszy ogon"
tzn. większe wartości daleko od zera. Zobaczmy sami:

.. admonition:: Poeksperymentuj z komputerem

   Uruchom poniższy kod. Oblicza on histogram log-zwrotów oraz
   porównuje go z rozkładem Gaussa o tych samych parametrach: średniej i wariancji. 



.. sagecellserver::

     nbins=80
     Gaussian(x,mu,sigma) = 1/sqrt(2*pi*sigma^2)*exp(-(x-mu)^2/(2*sigma^2))
     X = r_rel[400:1200]
     mu,sigma = np.average(X),np.std(X)
     H = np.histogram(X,bins=nbins,range=[-.13r,.13r])
     normalizacja = H[0].sum()*(H[1].max()-H[1].min())/nbins
     p = line( zip(H[1],H[0]),color='red',figsize=(7,4))
     mu,sigma = np.average(X),np.std(X)
     p += plot(normalizacja*Gaussian(x,mu,sigma),(x,-4*sigma,4*sigma),fill=True,gridlines=[None,[1]])
     p

Popularnymi wielkościami, które charakteryzują jak dany rozkład
odbiega od rozkładu normalnego są kurtoza i skośność. Jak wiemy w
rozkładzie normalnym wszystkie momenty rzędu wyższego niż dwa można
wyrazić jako funkcje momentów pierwszego i drugiego. Dlatego można
zbudować wyrażenia:

.. math::

   \hat K =  \frac{\mu_4}{\sigma^4} - 3 \\
   \hat S =  \frac{\mu_3}{\sigma^3},

gdzie :math:`\mu_i = \mathop{E}\big[(X-\mu)^i\big]`.

.. admonition:: Poeksperymentuj z komputerem

    Estymatory kurtozy i skośności są zaimplementowane w pakiecie
    `scipy` i można je zaimportować przez: :code:`from scipy.stats import kurtosis,skew`.

     - Do poprzedniego kodu dodaj obliczanie kurtozy i skośności danego rozkładu
     - Zmień okno z `[400:1200]` na inne, mniejsze większe i w innym miejscu. 
     - Jakie wartości  kurtozy i skośności można zaobserwować?



Problem  - analiza innych danych
================================

Zdobądź ze źródeł internetowych pliki z innymi indeksami
giełdowymi. Napisz własny analizator, który będzie potrafił na
podstawie pliku z danymi:

 - narysować zależność czasową
 - wybrać okno do analizy i je zaznaczyć na wykresie
 - obliczyć log-zwroty
 - narysować histogram wybranego okna
 - obliczyć współczynniki takie jak kurtoza, wariancja, średnia,
   skośność.






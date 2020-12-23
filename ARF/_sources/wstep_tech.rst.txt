Wstęp techniczny czyli jak korzystać z części interaktywnych?
=============================================================


Skrypt ten kładzie szczególny nacisk na  praktyczny aspekt zrozumienia teorii
rynków finansowych. Wychodzimy z założenia, że ćwiczenia w
samodzielnej implementacji wielu algorytmów pozwolą na praktyczne
sprawdzenie nabytej wiedzy teoretycznej. Nie podważamy tutaj istoty i
piękna teorii matematycznych. Pragniemy jedynie podkreślić, że
napisanie algorytmu wymaga nie tylko jej zrozumienia, ale i jest
podwierdzemien poprawności toku rozumowania. Otrzymanie poprawnego
wyniku liczbowego nie wybacza pomyłki. Samodzielne eksperymentowanie z
komputerem pozwala na uzyskanie biegłości, która jest potrzebna gdy na
osi odciętych jest przyszłość a na rzędnych prawdziwe pieniądze.


.. image:: figs/sage_logo_new.png
   :alt: William Stein
   :align: right
   :width: 150

`Sage <http://sagemath.org>`_, jest pakietem `otwartego
oprogramowania <http://pl.wikipedia.org/wiki/Otwarte_oprogramowanie>`_
opartym o język Python. Proponujemy wykorzystanie Sage do wizualizacji
i analizy danych, przekształcania formuł i wykonywania symulacji
numerycznych. Z systemu Sage można korzystać na wiele sposobów.

1. Po pierwsze można pracować w systemie "notatnik", zarówno
   korzystając z instalacji lokalnej na własnym komputerze jak i z
   instalacji oferowanej przez Wydział MFiCh.

2. Do wykonania pojedyńczych eksperymentów i prostych obliczeń, możemy
   korzystać z serwera pojedyńczych obliczeń, zwanego `Sagecell
   <http://sagecell.icse.us.edu.pl:6363/>`_.

3. Interaktywne książki - jak ten sktypt, korzystający z systemu
   Sagecell, umożliwiają korzystanie z systemu Sage z poziomu
   przeglądarki, bez uprzedniej rejestracji czy logowania, tak jak w
   tym przykładzie.

4. Można skorzystać z darmowago systemu stworzonego przez Wiliama
   Steina zmanego `Sage Math Cloud <https://cloud.sagemath.com>`_.

Interaktywne komórki Sagecell
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Jak skorzystać z elementów interaktywnych w tym skrypcie? Jeśli
zobaczymy taką komórkę wystarczy nacisnąć przyciska "Wykonaj" i
zostanie uruchomiony system Sage na jednym z serwerów i zostanie wykonany na
nim kod programu znajdującego się w polu tekstowym:

.. admonition:: Poeksperymentuj z komputerem

   Naciśnij "Wykonaj!"


.. sagecellserver::

   formula = integrate( sin(2*x),x)
   show( formula )


Zauważmy ważną cechę - jeśli na stronie jest więcej niż jedna komórka
to definicje utworzone podczas wykonania jednej są dostępne w drugiej.

.. admonition:: Poeksperymentuj z komputerem

   Wykonaj najpierw piewszą komórkę a potem drugą. Następnie przeładuj
   stronę i wykonaj najpierw druga a potem pierwszą. 

   Zauważ, że przeładowawanie strony powoduje skasowanie informacji o
   wczesniej zdefiniowanych zmiennych! Dzieje się tak dlatego, gdyż po
   przeładowaniu komórki obsługuje nowy proces Sage na serwerze, a
   stary ginie.




.. sagecellserver::

   try:
       show( formula ) 
       show("pochodna wynosi:")
       show( formula.diff(x) )
   except:
       print( "Nie zdefiniowano zmiennej!" )


.. attention::

    - Problem 1: Naciskanie na przycisk "Wykonaj" nie przynosi
      oczekiwanego efektu.  

      Odp. W takim razie zalecamy ponowne
      przeładowanie strony i ewentualne wykonanie komórek z wymaganymi
      uprzednio definicjami (pamiętamy, że przeładowanie strony kasuje
      stan Sage.

    - Problem 2: Program po zwiększeniu liczby kroków przestaje działać.
   
      Odp. Proces na serwerze ma ograniczoną ilość czasu na
      wykonanie. Jeśli czas zostaje przekroczony to ginie. Aby dalej
      używać komórek interaktywnych trzeba przeładować stronę.


Komórki Sagecell zawierają dostęp do kompletnego systemu Sage. Nie
sposób we wstępie opisać jego możliwości, ale zachęcamy do
przeczytania licznych materiałów:

- Bardzo krótkie wprowadzenie do `Sage'a <http://visual.icse.us.edu.pl/Warsztaty/iCSE_1a_Wprowadzenie_CubeProject.html>`_
- Książka "Matematyka łatwiejsza niż przypuszczasz" `<http://icse.us.edu.pl/e-book/>`_
- Materiały do zajęć Technologie Informacyjne dla I roku Studentów: `<http://visual.icse.us.edu.pl/iCSE_main/icse_final.html#technologia-informacyjna>`_.
- Dociekliwych zachęcamy do `zanurkowania w Pythonie <http://pl.wikibooks.org/wiki/Zanurkuj_w_Pythonie>`_


Dodatek: Czas Juliański
-----------------------

ble
~~~

Jednym ze sposobów obliczania ilości dni, które upłynęły pomiędzy dwoma datami jest  konwersja daty to czasu `Juliańskiego
<http://pl.wikipedia.org/wiki/Data_julia%C5%84ska>`_. Jest to liczba
dni, która upłynęła od tóra upłynęła od 1 stycznia roku 4713 p.n.e.,
według kalendarza juliańskiego. Poniżej zamieszczamy implementację algorytmu obliczającego czas juliański.

.. sagecellserver::

   def julian_days((Y,M,D)):
       a=floor((14-M)/12)
       y=Y+4800-a
       m=M+12*a-3
       return D + floor((153*m+2)/5) + 365*y + floor(y/4) - floor(y/100) + floor(y/400)-32045

   data1,data2 = (1980,10,31), (1989,5,1)

   print julian_days(data2)-julian_days(data1 )

   from datetime import date

   print "Sprawdzamy za pomocą modulu datetime:", date(*data2)-date(*data1)

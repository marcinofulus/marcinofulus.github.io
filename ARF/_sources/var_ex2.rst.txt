Przykład - obliczenie VaR  dla nieliniowej funkcji wyceny
=========================================================


.. attention:: 

   Poniższe komórki są od siebie zależne więc należy
   wykonywać poprzednie by działały kolejne.

Wyobraźmy sobie, że posiadamy dwie akcję na rynku krajowym, oraz
pozycję krótką na zerokuponową obligację na rynku zagranicznym. Z tej
perspektywy rynek opisany przez cztery parametry, czas, wartość
aktywa, stopę procentową na rynku zagranicznym oraz kurs wymiany
waluty obcej. Wartość naszego portfela zależy bowiem od tych
parametrów. W przypadku ceny akcji jest to zależność liniowa, ale
wartość obligacji zależy nieliniowo od czasu, stopy procentowej i
kursu wymiany.

Rożważmy historię rynku zawartą w tabeli, w której każdy rząd oznacza:

 - czas w dniach  liczony od 1.1.1997
 - cena aktywa
 - stopa procentową na rynku zagranicznym
 - kurs wymiany waluty obcej.

Mamy:

.. sagecellserver::

   import numpy as np 
   import scipy.linalg

   dataVAR= np.array([[   1.   ,  282.   ,    5.28 ,    3.5  ],
       [   2.   ,  283.   ,    5.26 ,    3.47 ],
       [   3.   ,  285.   ,    5.23 ,    3.46 ],
       [   4.   ,  280.   ,    5.24 ,    3.45 ],
       [   5.   ,  282.   ,    5.25 ,    3.45 ],
       [   6.   ,  281.   ,    5.24 ,    3.46 ],
       [   7.   ,  282.   ,    5.24 ,    3.45 ],
       [   8.   ,  286.   ,    5.25 ,    3.43 ],
       [   9.   ,  285.   ,    5.25 ,    3.47 ],
       [  10.   ,  286.   ,    5.26 ,    3.443],
       [  11.   ,  288.   ,    5.27 ,    3.42 ],
       [  12.   ,  289.   ,    5.28 ,    3.42 ],
       [  13.   ,  290.   ,    5.28 ,    3.41 ],
       [  14.   ,  289.   ,    5.28 ,    3.42 ],
       [  15.   ,  291.   ,    5.29 ,    3.46 ],
       [  16.   ,  293.   ,    5.31 ,    3.41 ],
       [  17.   ,  294.   ,    5.32 ,    3.4  ],
       [  18.   ,  290.   ,    5.34 ,    3.49 ],
       [  19.   ,  287.   ,    5.35 ,    3.47 ],
       [  20.   ,  288.   ,    5.34 ,    3.48 ],
       [  21.   ,  289.   ,    5.35 ,    3.46 ],
       [  22.   ,  281.   ,    5.36 ,    3.44 ],
       [  23.   ,  283.   ,    5.23 ,    3.45 ],
       [  24.   ,  285.   ,    5.24 ,    3.42 ],
       [  25.   ,  288.   ,    5.25 ,    3.41 ],
       [  26.   ,  289.   ,    5.26 ,    3.41 ],
       [  27.   ,  287.   ,    5.26 ,    3.43 ],
       [  28.   ,  285.   ,    5.28 ,    3.42 ],
       [  29.   ,  290.   ,    5.27 ,    3.44 ],
       [  30.   ,  291.   ,    5.27 ,    3.42 ],
       [  31.   ,  289.   ,    5.27 ,    3.37 ],
       [  32.   ,  288.   ,    5.29 ,    3.39 ],
       [  33.   ,  290.   ,    5.28 ,    3.41 ],
       [  34.   ,  293.   ,    5.31 ,    3.44 ],
       [  35.   ,  292.   ,    5.32 ,    3.41 ],
       [  36.   ,  293.   ,    5.28 ,    3.42 ],
       [  37.   ,  293.   ,    5.3  ,    3.42 ],
       [  38.   ,  293.   ,    5.31 ,    3.44 ],
       [  39.   ,  292.   ,    5.32 ,    3.41 ],
       [  40.   ,  293.   ,    5.3  ,    3.4  ]])


Na przykład dnia 13.1.1997 było:

.. sagecellserver::

   print( dataVAR[12] )
   
Wyobraźmy sobie, że jest 10.2.1997 i mamy portfel dwóch akcji i
jesteśmy dłużni jedną obligację na sto jednostek waluty zagranicznej z
data zapadalności 8 maja 2000. Oznaczmy przez :code:`P` strukturę danych
określającą nasz portfel, stan rynku przez :code:`mrkt10Feb97` oraz
zdefiniujmy funkcję wyceny portfela :code:`valueP`:

.. sagecellserver::
   
    from datetime import date
    mrkt10Feb97 = np.array( [[40,293,5.3,3.4]] )
    P = [2,(-1,(date(2000,5,8)-date(1997,1,1)).days)]

    def valueP(P,m):
        if len(m.shape)==1:
            stock = m[1]*P[0]
            bond = 100*m[3]*exp(-m[2]/100. * (P[1][1]-m[0])/365.25) * P[1][0]
        else:
            stock = m[:,1]*P[0]
            bond = 100*m[:,3]*exp(-m[:,2]/100. * (P[1][1]-m[:,0])/365.25) * P[1][0]

        return stock+bond


    print( "Wartość portfela na 10 Feb 1997",valueP(P,mrkt10Feb97)[0] )


Metoda historyczna
------------------

Wyceńmy wartość zagrożoną ryzykiem VaR na poziomie 20% metodą
historyczną. W tym przypadku mamy taki sam sposób postępowania jak w
przykładzie z liniową funkcją wyceny:

.. sagecellserver::

    dataVAR_dx = np.diff(dataVAR,axis=0)
    hist_sim = mrkt10Feb97+dataVAR_dx
    changes = valueP(P,hist_sim)-valueP(P,mrkt10Feb97)
    print( "Metoda historyczna",np.percentile(changes,int(20)) )


Metoda wariancji kowariancji
----------------------------

W tej metodzie mamy znaczną różnicę, nie obowiązują bowiem proste formuły 

.. sagecellserver::

    dataVAR_dx = np.diff(dataVAR,axis=0)
    avg = np.average(dataVAR_dx,axis=0)
    Cov = np.cov(dataVAR_dx.T)

    m=mrkt10Feb97[0]
    h = 0.01
    dx = h*np.eye(4)
    dP = [(valueP(P,m+dx[i])-valueP(P,m))/h for i in range(4)]
    dP =  np.array(dP)

    m = mrkt10Feb97[0]
    dx = h*np.eye(4)
    d2P = [[(valueP(P,m+dx[i]+dx[j])+valueP(P,m)-\
      valueP(P,m+dx[i])-valueP(P,m+dx[j]))/h^2 for i in range(4)] for j in range(4)]
    d2P =  np.array(d2P)

    muP = avg.dot(dP)+0.5*np.trace(d2P.dot(Cov))
    sigma2P = dP.dot(Cov).dot(dP.T)
    T = RealDistribution('gaussian', 1.0)
    k =  T.cum_distribution_function_inv(0.2)
    print( "VaR, metoda wariancji kowariancji:",muP + np.sqrt(sigma2P)*k )


Metoda Monte Carlo
------------------


.. sagecellserver::

    import scipy.linalg
    sqrtCov = np.real_if_close(scipy.linalg.sqrtm(Cov))
    values = np.array([ valueP(P,mrkt10Feb97 + avg + \
      np.dot(sqrtCov,np.random.randn(4)))[0] for i in range(10000)])

    print( "VaR, MC:",np.percentile(values-valueP(P,mrkt10Feb97)[0],int(20)) )


Porównanie
----------



.. sagecellserver::


    Gaussian(x,mu,sigma) = 1/sqrt(2*pi*sigma^2)*exp(-(x-mu)^2/(2*sigma^2))
    print( muP,sigma2P )
    nbins = 20
    H = np.histogram(np.diff(valueP(P,dataVAR)),bins=np.linspace(-12,12,nbins))

    normalizacja = H[0].sum()*(H[1].max()-H[1].min())/nbins
    line( zip(H[1],H[0]/normalizacja) )+\
     plot(Gaussian(x,muP,sqrt(sigma2P)),(x,-16,16),color='red',figsize=5)


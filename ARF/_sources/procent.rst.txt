Dodatek: Praktyczna teoria procentu 
===================================
 

Wyobraźmy sobie, że mamy depozyt na kwotę :math:`100` na
oprocentowaniu na pewną stopę :math:`r`. Ile będziemy mieli na
depozycie środków po np. :math:`4` latach w przypadku:

- kapitalizacji rocznej,
- kapitalizacji miesięcznej,
- kapitalizacji ciągłej.





.. admonition:: Poeksperymentuj z komputerem!


.. sagecellserver::

		var('x')
		@interact
		def _(years=slider(range(1,30),default=4),rate=slider(0,100,1,default=27),N=slider(range(1,30),default=1)):

				pkts = [(float(i)/N,100*(1+(rate/(N))/100.)^i) for i in range(years*N+1)]
				plt = line(pkts,color='green',marker='o')
				plt += plot(100*exp(x*rate/100.),(x,0,years),color='red')
				sd,sc = pkts[-1][1],100*exp(years*rate/100.)
				print sd,sc,round((sc-sd)/((sc+sd)*0.5)*100,2),"%"
				plt.show(figsize=(6,2))

Exercises
~~~~~~~~~

The exercises can be downloaded in a form of a notebook from `here <http://visual.icse.us.edu.pl/LA/Notebooks/Problem_wlasny_zadania.ipynb>`_ .


**Exercise 1.** [1]_

Consider a web consisting of 4 pages illustrated by the following graph:

.. figure:: figures/PRex1.png
   :scale: 70 %
   :align: center

where an arrow from page A to page B indicates a link from page A to page B.

1. Write down link matrix for this web and compute an importance score vector of this web using basic approach presented in Example 1., :ref:`PageRank-Algorithm`. You can make the computations in the window below.

.. sagecellserver::

    
To verify whether the adjacency matrix :math:`A` you use is correct, at the end of your code write 

.. code-block:: python

    sage: W=DiGraph(A)
    sage: W.relabel({0:'1' , 1:'2', 2:'3', 3:'4'})
    sage: W.plot()

and check whether the resulting graph is the same as above.

2. Compute an importance score vector of this web using formula :eq:`basic_formula`. Later compare the result with the importance score vector from point 1.

.. sagecellserver::

    

3. Suppose the people who own page 3 are infuriated by the fact that its importance score, computed using formula :eq:`basic_formula`, is lower than the score of page 1. In an attempt to boost page 3’s score, they create a page 5 that links to page 3; page 3 also links to page 5. Does this boost page 3’s score above that of page 1? 

First plot the graph presenting the new situation.

.. sagecellserver::



Now compute the new ranking using formula :eq:`basic_formula`.

.. sagecellserver::



**Exercise 2.** [1]_

Consider again the web from previous exercise with the addition of a page 5 that links to
page 3, where page 3 also links to page 5:

.. figure:: figures/PRex2.png
   :scale: 90 %
   :align: center

1. Calculate the new ranking by finding the eigenvector of matrix :math:`M` defined by equation :eq:`matrix_M`.
Use :math:`\ m=0.15\ `.

.. sagecellserver::

    


2. Add a sixth page that links to every page of the web in the previous exercise, but to which no other page links. Write the code to plot the new web in the window below.

.. sagecellserver::



Now rank the pages using

a). the formula :eq:`basic_formula`,

.. sagecellserver::

    
    
    
b). the matrix :math:`M` defined by equation :eq:`matrix_M` with :math:`\ m=0.15\ `.

.. sagecellserver::

    
    
    
Compare the results.

3. Use the power method to compute the ranking of the web from point 2. Take different initial vectors :math:`\ x_0\ ` and see how many iterations you need to obtain the result which is close to the result from 2b). See also what happens if some entries of :math:`\ x_0\ ` are not positive or do not sum up to one. How does the value of :math:`m` influence the result? 

.. sagecellserver::


**Exercise 3.** (dangling nodes)

Consider the web illustrated by the following graph:

.. figure:: figures/PRex3.png
   :scale: 90 %
   :align: center

Compute ranking of the pages by finding the Perron eigenvector. 

.. sagecellserver::



**Exercise 4.** (webs randomly generated)

The code below returns a random web with :math:`\ n\ ` pages (more precisely: a random directed graph on :math:`\ n\ ` nodes), where the probability of a link from one page to another is :math:`\ p\ `. Check how the result changes if you vary value of :math:`\ p\ ` between :math:`0` and :math:`1`.

.. sagecellserver::

    n=5
    p=0.5
    G=digraphs.RandomDirectedGNP(n,p)
    G.plot()

1. Find the link matrix for this web.

.. sagecellserver::




2. Compute ranking of this web using different methods.

.. sagecellserver::



**Exercise 5.** (disconnected webs)

Consider a web consisting of two (disconnected) subwebs:

.. sagecellserver::

    W1=digraphs.RandomDirectedGNP(5,.5)
    A1=W1.adjacency_matrix()
    W2=digraphs.RandomDirectedGNP(3,.5)
    A2=W2.adjacency_matrix()
    A=block_matrix([[A1,zero_matrix(A1.nrows(),A2.ncols())],[zero_matrix(A2.nrows(),A1.ncols()),A2]])
    W=DiGraph(A)
    print W.adjacency_matrix()
    W.plot() 
    
Rank the pages using the matrix M defined by equation :eq:`matrix_M` with  :math:`\ m=0.15\ `. See what happens if you change the value of :math:`m`. Do the same with a web consisting of more subwebs.

.. sagecellserver::





.. [1] This exercise was taken from an article of K. Bryan and T. Leise, "The \$25,000,000,000 Eigenvector. The Linear Algebra Behind Google". Available at https://www.rose-hulman.edu/~bryan/google.html .

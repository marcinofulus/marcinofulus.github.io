.. _PageRank-Algorithm:

Google's Application - PageRank Algorithm
-----------------------------------------

A big part of Google's success is its PageRank Algorithm which rates importance of the websites and then presents them accordingly to the user. Quite often most relevant and helpful pages are listed first. It turns out that the reason is yet another disguise of the eigenvector problem. This section is based on an article of Bryan and Leise "The \$25,000,000,000 Eigenvector. The Linear Algebra Behind Google" [BL]_, which is available at https://www.rose-hulman.edu/~bryan/google.html .

One of the tasks of Google browser is to locate the websites with public access and index them with relevant keywords and phrases. Once this is done, the websites have to be ordered according to their importance. The main idea behind this procedure relies on an assumption that more important web pages are linked by other pages more often. We will call the links to a given page by the *backlinks*.

**Example 1.**

Consider a web consisting of four pages which are linked with each other according to the following scheme (an arrow from page A to page B indicates a link from page A to page B):

.. figure:: figures/PR1.png
   :scale: 70 %
   :align: center

It was plotted using the following code:

.. code-block:: python

    sage: A = matrix([[0,1,0,1], [0,0,1,0],[1,1,0,1],[1,1,0,0]])
    sage: W=DiGraph(A)
    sage: W.relabel({0:'1' , 1:'2', 2:'3', 3:'4'})
    sage: W.plot()
    
where the matrix :math:`A` determines the arrows between the websites, e.g. the first row of the matrix contains :math:`1` at the entries 2 and 4 because website 1 links to these pages. In other words: the :math:`i`-th row tells us to which pages page :math:`i` links, and the :math:`i`-th column tells us where the backlinks for page :math:`i` come from. Such a matrix is called an *adjacency matrix*. Note that we had to relabel the names of vertices in the graph, so that the enumeration starts from 1 and not from 0.

Having created the web by such a code, we can easily count the number of backlinks of a given page - it suffices to add the entries in a corresponding column:

.. code-block:: python

    sage: n=A.ncols()   # size of the (square) matrix A
    sage: b=vector(0 for i in range(n))   
    sage: for i in range(n):
    sage:     b[i]=sum(A[j][i] for j in range(n))
    sage: print b 
    
    (2, 3, 1, 2)
    
The outcome suggests that the page 2 is most important, next are the pages 1 and 4 of equal importance, and the least important is the page 3. One may view this as a result of democrative vote of websites for the most important one.

The basic approach presented in the above example does not take into account a few important factors:

1. a link from an important page should matter much more than a link from a mediocre page;

2. not all the websites are connected with each other via links, in fact the actual web comprises a highly disconnected graph; how to compare such pages?

3. is there always a unique most important website?

4. some pages do not contain any links (such pages are called *dangling nodes*).

In what follows we extend the idea presented above to tackle all these problems.

.. admonition:: Problem 1.

   It should matter where the backlinks come from.

Denote by :math:`\ x_i\ ` the importance score of the web page :math:`\ i\ ` (we do not specify yet how it may be computed), and let :math:`\ n_i\ ` be the number of links on the page :math:`\ i\,.` For instance, in the example presented above, the score of page 1 would be determined by the relation :math:`\ x_1=x_3+x_4\,.` However, in this way the page 3 may vote three times. To avoid such a situation, we normalise the vote by the the number of links that the page contains, i.e. the score of page 1 should be rather given by a formula :math:`\ x_1=\frac{x_3}{3} +\frac{x_4}{2}\,.` In general, if a web consists of :math:`\ n\ ` pages and :math:`\ L_k\subset\{ 1,2,\ldots ,n\}\ ` denotes the set of pages which link to the page :math:`\ k\,,\ ` then we define (assumming that :math:`\ L_k\neq\emptyset` ):

.. math::
    :label: basic_formula

    x_k=\sum_{j\in L_k} \frac{x_j}{n_j}
        
We will assume additionally that a link from a page to itself does not count.

**Example 2.**

Consider the web from Example 1. The importance scores of the websites are as follows:

.. math:: 

    \begin{eqnarray*}
    x_1 & = & \frac{x_3}{3} +\frac{x_4}{2}\\
    x_2 & = & \frac{x_1}{2} + \frac{x_3}{3} +\frac{x_4}{2}\\
    x_3 & = & \frac{x_2}{1}\\
    x_4 & = & \frac{x_1}{2} + \frac{x_3}{3}
    \end{eqnarray*}

The above equalities may be written in a form of matrix equation :math:`\ x=Ax\,,\ ` where 

.. math:: 

    x = 
    \left[\begin{array}{c} 
    x_{1} \\ x_{2} \\ x_3 \\ x_4
    \end{array}\right]
    \qquad\text{and}\qquad 
    A=\left[\begin{matrix}
    0 & 0 & 1/3 & 1/2\\
    1/2 & 0 & 1/3 & 1/2\\
    0 & 1 & 0 & 0\\
    1/2 & 0 & 1/3 & 0
    \end{matrix}\right]
    
In this way, finding importance scores of web pages is equivalent to finding an eigenvector of the matrix :math:`\ A\ ` with the eigenvalue :math:`1\,`! Let us check first whether :math:`1` is indeed an eigenvalue of :math:`\ A\,.\ ` We will do the computations in Sage.

.. code-block:: python

    sage: Ad = matrix([[0,1,0,1], [0,0,1,0],[1,1,0,1],[1,1,0,0]])
    sage: W=DiGraph(A)
    sage: # First we need to normalise adjacency matrix Ad so that the sum of entries in each row is 1.
    sage: n=Ad.ncolumns() # counts the number of columns of Ad
    sage: l=vector(0 for i in range(n)) 
    sage: for i in range(n):
    sage:     l[i]=sum(A[i,j] for j in range(n)) # counts the number of links on page i
    sage: D=matrix(n) # n by n zero matrix
    sage: for i in range(n):
    sage:     D[i,i]=l[i]
    sage: print D.inverse()*Ad
   
    [  0 1/2   0 1/2 ]
    [  0   0   1   0 ]
    [1/3 1/3   0 1/3 ]
    [1/2 1/2   0   0 ]
    
.. code-block:: python

   # Now note that the matrix we are looking for is the transpose of the normalised adjacency matrix.
   sage: A=(D.inverse()*Ad).transpose()
   sage: print A
   
   [  0   0 1/3 1/2 ]
   [1/2   0 1/3 1/2 ]
   [  0   1   0   0 ]
   [1/2   0 1/3   0 ]
     
We are ready to compute the eigenvalues of :math:`A`. This can be done in a few ways: by computing and factorising the characteristic polynomial

.. code-block:: python

   sage: f=A.charpoly()
   sage: f.factor()
   
   (x - 1) * (x + 1/2) * (x^2 + 1/2*x + 1/6)
   
by applying a direct function 

.. code-block:: python

   sage: A.eigenvalues()
   
   [1, -1/2, -0.25000000000000000? - 0.3227486121839514?*I, -0.25000000000000000? + 0.3227486121839514?*I]
   
or even by asking sage to provide directly the eigenvectors

.. code-block:: python

   sage: A.eigenvectors_right()
   
   [(1, [
   (1, 3/2, 3/2, 1)
   ], 1), (-1/2, [
   (1, 0, 0, -1)
   ], 1), (-0.25000000000000000? - 0.3227486121839514?*I,
   [(1, 0.25000000000000000? + 0.9682458365518542?*I, -2.2500000000000000? - 0.9682458365518542?*I, 1)],
   1), (-0.25000000000000000? + 0.3227486121839514?*I,
   [(1, 0.25000000000000000? - 0.9682458365518542?*I, -2.2500000000000000? + 0.9682458365518542?*I, 1)],
   1)]

Note that the function ``eigenvectors_right()`` provides first an eigenvalue, and then the associated eigenvector.

We obtained a completely different importance score vector!

* Basic approach: :math:`\ (2, 3, 1, 2)\ `.
* Normalised approach: :math:`\ (1, \frac32, \frac32, 1)\ `.    

However, if we look once again at the picture presenting our web, we see that the new result is not that surprising after all: page 2 gets most votes, and page 3 just one, but this one vote comes from page 2 which is considered to be most important.

Every matrix which arises in the same way as the matrix :math:`A` in the above example will be called a *link matrix*. Note that all the entries of a link matrix are nonnegative and, thanks to the normalisation, the entries in each column sum to one, that is, a link matrix is an example of a *column-stochastic matrix*. 

The problem of existence of an eigenvector with the eigenvalue :math:`1` solves the following proposition (proven in [BL]_).

.. admonition:: Proposition.

    Every column-stochastic matrix has :math:`1` as an eigenvalue.
    
We denote by :math:`\ V_1(A)\ ` the eigenspace for eigenvalue :math:`1` of a column-stochastic
matrix :math:`A.` If :math:`A` is the link matrix, the space :math:`\ V_1(A)\ ` contains vectors which carry information about importance scores of websites. However, is :math:`\ V_1(A)\ ` always :math:`1`-dimensional?

**Example 3.**

Consider a web consisting of two disconnected subwebs :math:`\ W_1\ ` (pages 1-4) and :math:`\ W_2\ ` (pages 5,6):

.. figure:: figures/PR2.png
   :scale: 70 %
   :align: center

The diagram was made by adding two paths to a graph from Example 1.:

.. code-block:: python

    sage: W.add_path(['5','6'])
    sage: W.add_path(['6','5'])
    sage: W.plot()

Note that if we apply the function ``W.add_path()`` then new vertices are created automatically. (We wrote ``W.add_path(['5','6'])`` instead of ``W.add_path([5,6])`` so that if we call a function ``W.vertices()``, then we obtain a vector ['1', '2', '3', '4', '5', '6'] rather than [5, 6, '1', '2', '3', '4'].)

Following an approach presented in Example 2. we obtain exactly the same relations for :math:`\ x_1, x_2, x_3, x_4\ `, and additionally :math:`\ x_5= \frac{x_6}{1} =x_6\,.` This leads into the matrix equation :math:`\ x=Ax\ ` with 

.. math:: 

    A=\left[\begin{matrix}
    0 & 0 & 1/3 & 1/2 & 0 & 0\\
    1/2 & 0 & 1/3 & 1/2 & 0 & 0\\
    0 & 1 & 0 & 0 & 0 & 0\\
    1/2 & 0 & 1/3 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 1\\
    0 & 0 & 0 & 0 & 1 & 0
    \end{matrix}\right]\, .

As before, we compute the eigenvectors for the eigenvalue :math:`1` using Sage (now we know that there exists at least one such eigenvector):

.. code-block:: python

    # First, we find an adjacency matrix of the web W.
    sage: Ad=W.adjacency_matrix()
    sage: print Ad
    
    [0 1 0 1 0 0]
    [0 0 1 0 0 0]
    [1 1 0 1 0 0]
    [1 1 0 0 0 0]
    [0 0 0 0 0 1]
    [0 0 0 0 1 0]
    
.. code-block:: python

   # Secondly, we find the link matrix.
   sage: n=Ad.ncols() # counts the number of columns of Ad
   sage: l=vector(0 for i in range(n)) 
   sage: for i in range(n):
   sage:     l[i]=sum(A[i,j] for j in range(n)) # counts the number of links on page i
   sage: D=matrix(n) # n by n zero matrix
   sage: for i in range(n):
   sage:     D[i,i]=l[i]
   sage: A=(D.inverse()*Ad).transpose()
   sage: print A
   
   [  0   0 1/3 1/2   0   0]
   [1/2   0 1/3 1/2   0   0]
   [  0   1   0   0   0   0]
   [1/2   0 1/3   0   0   0]
   [  0   0   0   0   0   1]
   [  0   0   0   0   1   0]
   
.. code-block:: python

   # Finally, we compute the eigenvectors. This time we do it differently.
   sage: B=A-identity_matrix(n)
   sage: B.rref() # B in the reduced row echelon form
   
   [   1    0    0   -1    0    0]
   [   0    1    0 -3/2    0    0]
   [   0    0    1 -3/2    0    0]
   [   0    0    0    0    1   -1]
   [   0    0    0    0    0    0]
   [   0    0    0    0    0    0]
   
Hence,

.. math::

    x_1=x_4,\qquad x_2=\frac32\, x_4,\qquad x_3=\frac32\, x_4,\qquad x_5=x_6
    
and thus

.. math::

  V_1(A)=L(\left(1,\frac32, \frac32, 1, 0, 0\right)^T,\, (0,0,0,0,1,1)^T)
          =L(\left(\frac23, 1, 1, \frac23, 0, 0\right)^T,\, (0,0,0,0,1,1)^T) \qquad\text{(after normalisation).} 
              
This time the space of eigenvectors is :math:`\ 2`-dimensional and :math:`\,` *any* :math:`\,` of the vectors 

.. math::

    \lambda\cdot \left(\frac23, 1, 1, \frac23, 0, 0\right)^T + (1-\lambda)\cdot \left(0,0,0,0,1,1\right)^T,\qquad \lambda\in Q
    
could carry information about an importance score of the websites.

In fact, if a web :math:`\ W\ ` contains :math:`r` subwebs, then :math:`\ \mathrm{dim}(V_1(A))\geq r\,.` Indeed, if 
:math:`\ W_1,W_2\ldots W_r\ ` are subwebs of :math:`\ W\ ` and :math:`\ A_1, A_2,\ldots, A_r\ ` are their link matrices, then the link matrix :math:`\ A\ ` of :math:`\ W\ ` is of the form

.. math::

    A=\left[\begin{matrix}
    A_1 & 0 & \ldots & 0\\
    0   & A_2 & 0    & 0\\
    \vdots & \vdots & \ddots & 0\\
    0   & 0   & 0    & A_r
    \end{matrix}\right]

and 

.. math::

    V_1(A)=L(
    \left[\begin{array}{c} v_1\\ 0\\ 0\\ \vdots\\ 0\end{array}\right],
    \left[\begin{array}{c} 0\\ v_2\\ 0\\ \vdots\\ 0\end{array}\right],
    \ldots,
    \left[\begin{array}{c} 0\\ 0\\ 0\\ \vdots\\ v_r\end{array}\right])\,, 
    
where :math:`\ v_1, v_2 \ldots, v_r\ ` are eigenvectors for the eigenvalue :math:`1` of matrices :math:`\ A_1, A_2,\ldots, A_r\,.`

.. admonition:: Problem 2.

    How to compare web pages that are not connected via a path of links and find the most important one?

To deal with this problem we will assume for simplicity that every page has at least one link. 

Assume that a web :math:`\ W\ ` consists of :math:`\ n\ ` pages. Let :math:`\ S\ ` be an :math:`\ n\times n\ ` matrix with all entries equal to :math:`\ \frac1n\,`. We replace the link matrix :math:`\ A\ ` with the matrix

.. math::
    :label: matrix_M

    M = (1−m)A + mS,
    
where :math:`\ m\in [0,1]\ ` is a certain fixed value. The value of :math:`m` originally used by Google was :math:`0.15`. It is not difficult to check that the matrix :math:`M` is a column-stochastic matrix, and thus it has an eigenvector for the eigenvalue :math:`1 .\,` Moreover, one can prove (c.f. [BL]_)

.. admonition:: Proposition.

    If :math:`M` is column-stochastic and each of its entry is positive, then :math:`\ \mathrm{dim}(V_1(M))=1\,.` 
    

**Example 4.**

Consider a web from Example 3. and take :math:`\ m=0.15\,.` Then the matrix :math:`M` may be easily found by the following code: 

.. code-block:: python

    sage: A=matrix(QQ,[[0, 0, 1/3, 1/2, 0, 0], [1/2, 0, 1/3, 1/2, 0, 0], [0, 1, 0, 0, 0, 0], [1/2, 0, 1/3, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0]])
    sage: n=A.ncols()
    sage: m=0.15
    sage: S=ones_matrix(QQ,n)/n # the all ones matrix multiplied by 1/n
    sage: M = (1−m)*A + m*S
    sage: print M.n(digits=3) # each entry has a precision up to 0.001
    
    [0.0250 0.0250  0.308  0.450 0.0250 0.0250]
    [ 0.450 0.0250  0.308  0.450 0.0250 0.0250]
    [0.0250  0.875 0.0250 0.0250 0.0250 0.0250]
    [ 0.450 0.0250  0.308 0.0250 0.0250 0.0250]
    [0.0250 0.0250 0.0250 0.0250 0.0250  0.875]
    [0.0250 0.0250 0.0250 0.0250  0.875 0.0250]
    
We can easily in SageMath determine the eigenvector corresponding to eigenvalue 1. 

.. note:: 

   It is important to change ring of the matrix :math:`M` to RDF or CDF, since the computations might cause problems in exact arithmetics.
   

.. admonition:: Experiment with Sage!

	Run the code below to compute the eigenvector for eigenvalue 1.
   

.. sagecellserver::

    A=matrix(QQ,[[0, 0, 1/3, 1/2, 0, 0], [1/2, 0, 1/3, 1/2, 0, 0], [0, 1, 0, 0, 0, 0], [1/2, 0, 1/3, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0]])
    n=A.ncols()
    m=0.15
    l=1-m
    S=ones_matrix(QQ,n)/n # the all ones matrix multiplied by 1/n
    M = l*A + m*S
	
    for e,evs,k in M.change_ring(RDF).eigenvectors_right():
	if abs(e-1)<1e-6:
	    if k==1:
	        ev = evs[0]
	        print(ev)
	    else:
	        print("k not 0",k)
	
	

we see that the most important website is the second one, and just after it is the third one, which agrees to some extent with both normalised and basic approach.

Thanks to Sage we did not have to spend a lot of time doing unpleasant computations by hand. However, the bigger the matrix is, the longer one has to wait for the answer. And if currently there are almost :math:`\ 2\cdot 10^9\ ` websites [2]_...

.. admonition:: Problem 3.

    How to compute an eigenvector of a huge matrix efficiently?

We will discuss, after [BL]_, an idea behind :math:`\,` *the power method* . :math:`\,` This method bases on 
    
.. admonition:: Theorem [BL]_.

        The matrix :math:`M` defined by equation :eq:`matrix_M` for a web with no dangling nodes will always be a 
        column-stochastic matrix with positive entries and so have a unique vector :math:`\ q=[q_i]_n\ ` with positive components 
        such that :math:`\ Mq = q\ ` and :math:`\ \sum_{i=1}^n q_i=1\ `.
        The vector :math:`\ q\ ` may be computed as the limit of iterations 
        
        .. math::
            
            x_k = (1 − m)Ax_{k−1} + ms,
            
        where :math:`\ x_0=[x_{0,i}]_n\ ` is any initial vector with positive components such that
        :math:`\ \sum_{i=1}^n x_{0,i}=1\ `, and :math:`\ s=[1/n,\ldots, 1/n]^T\ `.
        
.. #reference to section "Norm of a vector"    
    
This theorem does not only tell us that every column-stochastic matrix has a :math:`\,` *unique* :math:`\,` eiegenvector for the eigenvalue :math:`1` (which results in a unique importance score ranking), :math:`\,` but also :math:`\,` *how* :math:`\,` it may be computed. And this computation is surprisingly simple! Note also that if we apply the matrix :math:`\ M\ ` to a vector :math:`\ x=[x_i]_n\ ` whose entries sum up to one: :math:`\ \sum_{i=1}^n x_i=1\ `, then 

.. math::

    Mx = ((1−m)A + mS)x = (1−m)Ax + mSx = (1−m)Ax + ms,
    
because    

.. math::

    Sx = \left[\begin{matrix} 
    \frac1n & \cdots & \frac1n\\
    \vdots  & \ddots & \vdots\\
    \frac1n & \cdots & \frac1n
    \end{matrix}\right]
    \left[\begin{matrix} x_1\\ \vdots \\x_n \end{matrix}\right]
    =\left[\begin{matrix} \sum_{i=1}^n (\frac1n x_i)\\ \vdots \\\sum_{i=1}^n (\frac1n x_i) \end{matrix}\right]
    =\left[\begin{matrix} \frac1n\\ \vdots \\\frac1n \end{matrix}\right]
    =s.
    
This fact significantly decreases the amount of computations that have to be performed. Indeed, to calculate 
:math:`\ Mx\ ` it suffices to add the known quantity :math:`\ ms\ ` to a product :math:`\ (1−m)Ax\ `, where the matrix :math:`A` consists mainly of zeros. 

**Example 5.**

We will compare the results from Example 4. with a construction suggested by the above theorem. The code below takes as the initial vector :math:`\ x_0=[1/n,\ldots, 1/n]\ ` , where :math:`n` is the size of matrix :math:`A`, and performs :math:`10` iterations. See what happens if you change the entries of :math:`x_0`, number of iterations or the value of :math:`m`. How good is the approximation of the importance score vector? How many iterations need to be done to obtain the same ranking of web pages as in Example 4.? See also what happens if some entries of :math:`x_0` are non-positive or do not sum up to one.

.. sagecellserver::

    A=matrix(QQ,[[0, 0, 1/3, 1/2, 0, 0], [1/2, 0, 1/3, 1/2, 0, 0], [0, 1, 0, 0, 0, 0], [1/2, 0, 1/3, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0]])
    n=A.ncols()
    m=0.15
    ms=m*vector(QQ,[1/n for i in range(n)])/n 
    mA = (1-m)*A
    x0=vector(QQ,[1/n for i in range(n)])
    N=10
    for k in range(N):
        x0=mA*x0+ms
        print 'k = ', k, ':', x0/x0[n-1] # we normalize x0 so that the last entry is equal to one
        
.. admonition:: Problem 4.

    If a web contains dangling nodes, then the link matrix is not column-stochastic and thus the methods discussed 
    above cannot be applied.

If a web contains websites with no links (i.e. dangling nodes), then the corresponding columns of the link matrix :math:`A`  will contain only zeros. In such situation :math:`A` is *column-substochastic*, that is, sum of entries of :math:`A` is less or equal to one. The eigenvalues of :math:`A` still need to be less or equal to one, but :math:`1` does not have to be an eigenvalue. However, :math:`A` will still have a positive eigenvalue and a corresponding eigenevctor with non-negative entries may be taken as the importance score vector. If instead of a link matrix :math:`A` we consider the matrix :math:`M` defined by the formula :eq:`matrix_M`, then the eigenvector will be unique:

.. admonition:: Perron's theorem.

    Let :math:`\ A\ ` be a square matrix with positive entries and :math:`\ \lambda\ ` its greatest eigenvalue. Then:
    
    1. :math:`\ \lambda > 0\ `,
    2. algebraic multiplicity of :math:`\ \lambda\ ` is equal to one,
    3. there exists a unique eigenvector for :math:`\ \lambda\ ` with all the entries positive (the *Perron vector*),
    4. entries of eigenvectors for other eigenvalues are not all positive.

More general situation of a matrix with non-negative entries is treated in Perron–Frobenius Theorem, which we do not include here.

**Example 6.**

Consider the web illustrated by the following graph:

.. figure:: figures/PR3.png
   :scale: 70 %
   :align: center

Its link matrix is  

.. math::

    A=\left[\begin{matrix}
    0 & 0 & 1/3 & 1/2\\
    1/2 & 0 & 1/3 & 1/2\\
    0 & 0 & 0 & 0\\
    1/2 & 0 & 1/3 & 0
    \end{matrix}\right]

We will compute an eigenvector of :math:`A` for the greatest eigenvalue using the formula :eq:`basic_formula` without constructing the matrix :math:`M`:

.. code-block:: python

    sage: A=matrix(QQ,[[0, 0, 1/3, 1/2], [1/2, 0, 1/3, 1/2], [0, 0, 0, 0], [1/2, 0, 1/3, 0]])
    sage: l=sorted(A.eigenvectors_right()) # sorted list of eigenvectors
    sage: print l, '\n'; l[len(l)-1] # len(l) = length of the list l
    
    [(-1/2, [
    (1, 0, 0, -1)
    ], 1), (0, [
    (0, 1, 0, 0)
    ], 2), (1/2, [
    (1, 2, 0, 1)
    ], 1)]
    
    (1/2, [
    (1, 2, 0, 1)
    ], 1)
    


.. [BL] K. Bryan and T. Leise, "The \$25,000,000,000 Eigenvector. The Linear Algebra Behind Google". Available at https://www.rose-hulman.edu/~bryan/google.html .

.. [2] http://www.internetlivestats.com/watch/websites/ .
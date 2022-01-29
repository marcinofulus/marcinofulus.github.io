.. -*- coding: utf-8 -*-

Exercises and Problems
----------------------

**Exercise 1.**

Press "Activate" to display matrices :math:`\,\boldsymbol{A}\,` 
and :math:`\,\boldsymbol{B}\,` together with their product 
:math:`\,\boldsymbol{A}\boldsymbol{B}.` :math:`\\`
To change the size of matrices set a new value of n. :math:`\,` Additionally:

* Verify by hand the computer result :math:`\,\boldsymbol{A}\boldsymbol{B}\,`
  of the multiplication.
* | Add a piece of code that displays the product
    :math:`\,\boldsymbol{B}\boldsymbol{A}\,` 
  | and demonstrate thereby the noncommutativity of the matrix multiplication.
  
.. sagecellserver::

   n = 3
   A = random_matrix(ZZ, n, x=-5, y=6)
   B = random_matrix(ZZ, n, x=-5, y=6)
   table([["  A :","","  B :","","  AB :"],[A,"*",B,"=",A*B]])

.. The solution:

.. sagecellserver:

   n = 3
   A = random_matrix(ZZ, n, x=-5, y=6)
   B = random_matrix(ZZ, n, x=-5, y=6)
   show(table([["  A :","","  B :","","  AB :"],[A,"*",B,"=",A*B]]))
   show(table([["  B :","","  A :","","  BA :"],[B,"*",A,"=",B*A]]))

**Exercise 2.** 

This example concerns matrices whose elements
depend (at least initially) on variables. :math:`\\`
Starting from the code in the cell below, add the following steps:

* | Create the matrix :math:`\,\boldsymbol{A}\,` by two other ways.
* | Determine the base ring of the matrix :math:`\,\boldsymbol{A}\ ` 
    (apply :math:`\,` ``A.base_ring()``).
* | Write the matrix :math:`\,\boldsymbol{B}\,` obtained from 
    :math:`\,\boldsymbol{A}\,` by the substition :math:`\,` a = -1
  | (apply :math:`\,` ``A.subs()``) :math:`\,` and determine the ring thereof.
* | Write the matrix :math:`\,\boldsymbol{C}\,` obtained from 
    :math:`\,\boldsymbol{B}\,` by changing the ring to RDF
  | (apply :math:`\,` ``B.change_ring()``) :math:`\,` and check the ring. 

.. sagecellserver::
   
   var('a')
   A = matrix([[a, 2, 3.], [4/3, 5, 6]])
   A

.. The solution:

.. sagecellserver:
   
   var('a')
   MS23 = MatrixSpace(SR,2,3)
   
   # A = MS23([[a, 2, 3.], [4/3, 5, 6]])   
   # A = MS23.matrix([[a, 2, 3.], [4/3, 5, 6]])
   
   print A
   print A.base_ring()
   
   B = A.subs(a=-1)
   print B.n(digits=4)
   print B.base_ring()
   
   C = B.change_ring(RDF)
   print C.n(digits=4)
   print C.base_ring()
   
**Exercise 3.**

The program creates a random matrix :math:`\,\boldsymbol{A}\,`
over the integer ring with :math:`\,m\,` rows and :math:`\,n\,` columns.
Next it extracts an :math:`\,i`-th row and/or a :math:`\,j`-th column 
of :math:`\boldsymbol{A},\ ` indicating the type thereof.

Set the values of :math:`\,m,n\,` as well as of :math:`\,i,j\,`
:math:`\ (0 \leq i \leq m-1,\ 0 \leq j \leq n-1)` :math:`\\`
and uncomment one or more hashed commands to visualise :math:`\\`
various ways of obtaining the results. 

.. Experiment by uncommenting one or more hashed commands.

.. sagecellserver::
   
   m = 3; n = 4      
   A = random_matrix(ZZ,m,n)
   print A, '\n'
   
   i = 2; j = 1
   
   # print A[i]; print type(A[i]), '\n'
   # print A.row(i); print type(A.row(i)), '\n'
   # print A[i,:]; print type(A[i,:]), '\n'
   
   # print A.column(j); print type(A.column(j)), '\n'
   # print A[:,j]; print type(A[:,j])     

**Exercise 4.**

Complete the code below by adding the following steps:

1. | :math:`\,` Create a random :math:`\ 5 \times 4\ ` matrix 
     :math:`\,\boldsymbol{A}\,` over the integer ring
   | :math:`\,` (apply ``random_matrix()``).
  
2. | :math:`\,` Using the slicing technique, create the matrix 
     :math:`\,\boldsymbol{B},\,` whose consecutive rows  
   | :math:`\,` are the last, middle and first row of matrix 
     :math:`\,\boldsymbol{A}.` 
     
3. | :math:`\,` Write down a selected column of matrix 
     :math:`\,\boldsymbol{A}\,` 
   | :math:`\,` as a vector :math:`\,\boldsymbol{v}\,` 
     and as a 1-column matrix :math:`\,\boldsymbol{C}.\ ` 
   | :math:`\,` Check the type of the obtained objects.

**Hint** for the item 2.: :math:`\\` 
Use the template ``[p:q:r]`` with the default value 
of q : :math:`\,` ``[p::r]``, :math:`\\` 
and with :math:`\,` p = -1, r = -2. :math:`\,` 
What is the actual value of q ?

.. sagecellserver::

   A = 
   B = 
   v =
   C =
      
   show ((A, B, v, C))
   print type(v)
   print type(C)
   

.. The solution:
   
.. sagecellserver:
   
   A = random_matrix(ZZ,5,4)
   B = A[-1::-2]
   v = A.column(2)
   C = A[:,2]
   
   show ((A, B, v, C))
   print type(v)
   print type(C)

.. :math:`\ `

**Exercise 5.**

Despite the Sage's "row bias" with respect to vectors and matrices, 
it is possible to create a matrix with given columns 
(they are to be input as vectors). Run the following code: 

.. sagecellserver::

   v1 = random_vector(ZZ,5)
   v2 = random_vector(ZZ,5)
   v3 = random_vector(ZZ,5)

   A = column_matrix([v1,v2,v3])

   (v1,v2,v3,A)

.. :math:`\ `

.. The following problems are designed to be solved 
   with the aid of a computer, using a Sage notebook.   

.. :math:`\ `
   
**Problem 0.** :math:`\,`

Check the associative and distributive laws:       
   
.. math::
   
   (\boldsymbol{A}\boldsymbol{B})\,\boldsymbol{C} \ =\ 
   \boldsymbol{A}\,(\boldsymbol{B}\boldsymbol{C})\,,

   (\boldsymbol{A}+\boldsymbol{B})\,\boldsymbol{C} \ =\ 
   \boldsymbol{A}\boldsymbol{C}\,+\,\boldsymbol{B}\boldsymbol{C}\,,

   \boldsymbol{A}\,(\boldsymbol{B}+\boldsymbol{C})\ =\ 
   \boldsymbol{A}\boldsymbol{B}\ +\ \boldsymbol{A}\boldsymbol{C}\,,
   
for three randomly generated matrices
:math:`\ \boldsymbol{A},\boldsymbol{B},\boldsymbol{C}\in M_3(Q).`     
   
**Problem 1.** :math:`\,`

Take, for example, the matrices

.. math::
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{cc}
   1 & 2 \\ 0 & 0
   \end{array}\right]\,,\quad
   \boldsymbol{B}\ =\ 
   \left[\begin{array}{cc}
   1 & 0 \\ 3 & 0
   \end{array}\right]\quad
   \in\ M_2(Q)

to show that the identity

.. math::
   :label: sum_square
   
   (\boldsymbol{A}+\boldsymbol{B})^2\ =\ 
   \boldsymbol{A}^2+2\boldsymbol{A}\boldsymbol{B}+\boldsymbol{B}^2

no longer holds true in algebra of matrices. 
In view of that, investigate the two issues:

* What is the actual formula for the square of a sum or difference
  :math:`\ (\boldsymbol{A}\pm\boldsymbol{B})^2\ \,`
  of matrices?
  
* | When, i.e. on what conditions for 
    :math:`\ \boldsymbol{A},\boldsymbol{B}\in M_n(K),\ `
    the equation :eq:`sum_square` remains true?

.. |  
  
**Problem 2.** :math:`\,`

For the matrices
:math:`\ \ \boldsymbol{P}\ =\ 
\left[\begin{array}{ccc} 
0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 
\end{array}\right]
\quad\text{and}\quad\ 
\boldsymbol{Q}\ =\ 
\left[\begin{array}{ccc} 
0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 
\end{array}\right]\quad
\in\ M_3(R):`

1. Calculate the products
   :math:`\ \,\boldsymbol{P}\boldsymbol{Q},\ \,\boldsymbol{Q}\boldsymbol{P},\ 
   \boldsymbol{P}^2,\ \boldsymbol{Q}^2.`
  
2. | Investigate the result of multiplying an arbitrary matrix 
     :math:`\ \boldsymbol{A}\in M_3(R)\ ` 
   | from the left or from the right 
     by :math:`\ \boldsymbol{P}\ ` or :math:`\ \boldsymbol{Q}.` 
  
3. | Find other matrices from :math:`\ M_3(R),\ ` whose square
     equals the identity matrix :math:`\ \boldsymbol{I}_3\,.`    

**Hint** for the item 3.: :math:`\\` 
Try matrices obtained from :math:`\ \boldsymbol{I}_3\ `
by swapping around two rows or two columns.  

.. :math:`\ `

**Problem 3.** :math:`\,`

Experiment with small exponents :math:`\ n=2,3,4,\,\ldots\ ` 
to come up with a general formula for an arbitrary power of the following matrices
over the rational field :math:`\ Q:`

.. math::
   
   \left[\begin{array}{cc} 1 & c \\ 0 & 1 \end{array}\right]\,,\quad
   \left[\begin{array}{cc} 2 & 2 \\ 0 & 0 \end{array}\right]\,,\quad
   \left[\begin{array}{cc} 2 & 1 \\ 0 & 1 \end{array}\right]\,,\quad
   \left[\begin{array}{cc} 1 & 1 \\ 1 & 1 \end{array}\right]\,,\quad
   \left[\begin{array}{cc} a & b \\ 0 & 0 \end{array}\right]\,,\quad
   \left[\begin{array}{cc} 1 & 1 \\ 1 & 0 \end{array}\right]\,.

**Problem 4.** :math:`\,`

Given the matrix :math:`\ \boldsymbol{A}\ ` 
and the vector :math:`\ \boldsymbol{x},\ `
calculate :math:`\ \boldsymbol{A}^n,\ n\in\boldsymbol{N},\ `
and the product :math:`\ \boldsymbol{A}^n\,\boldsymbol{x}:`

.. math::
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{cccc}
   0 & 2 & 0 & 0 \\
   0 & 0 & 2 & 0 \\
   0 & 0 & 0 & 2 \\
   0 & 0 & 0 & 0
   \end{array}\right]\ 
   \in\ M_4(Q),
   \qquad
   \boldsymbol{x}\ =\ 
   \left[\begin{array}{c} 
   a \\ b \\ c \\ d \end{array}\right]\,
   \in\,Q^{\,4}\,.




















   
   
   
   
   
   
   
   
   
   
   
        


Exercises and Problems
----------------------

Solution of a Linear System by the Gauss-Jordan Elimination
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Exercise 0.** :math:`\\` 
The coefficient matrix :math:`\boldsymbol{A}\,` and the vector of constants
:math:`\,\boldsymbol{b}\,` determine a linear system of four equations 
in four variables with a unique solution over the rational field.

1. | :math:`\,` Construct the augmented matrix :math:`\,\boldsymbol{B}\,`
     and solve the system 
   | :math:`\,` by transforming :math:`\,\boldsymbol{B}\,`
     into the reduced row echelon form.

2. | :math:`\,` To confirm the result make sure that 
     the product of the matrix :math:`\boldsymbol{A}\,` 
   | :math:`\,` by the solution column 
     :math:`\,\boldsymbol{x}\,` equals the column of constants
     :math:`\,\boldsymbol{b}`.

.. | :math:`\,` Confirm the result by verifying that the product of the matrix 
     :math:`\boldsymbol{A}\,` 
   | :math:`\,` and the solution column 
     :math:`\,\boldsymbol{x}\,` equals the column of constants
     :math:`\,\boldsymbol{b}`.

**Hint.** The solution column :math:`\,\boldsymbol{x}\,` 
is the last column of the augmented matrix in the reduced row echelon form 
(it may be detached by slicing). 
The method ``column()`` may be used to convert a vector 
into the one-column matrix.

.. sagecellserver::

   A = matrix(QQ,[[1, 2, 3,-2],
                  [2,-1,-2,-3],
                  [3, 2,-1, 2],
                  [2,-3, 2, 1]])
               
   b = vector([6,8,4,-8])

.. The solution:
   
.. sagecellserver:

   A = matrix(QQ,[[1, 2, 3,-2],
                  [2,-1,-2,-3],
                  [3, 2,-1, 2],
                  [2,-3, 2, 1]])
               
   b = vector([6,8,4,-8])

   B = A.augment(b)
   R = B.rref()
   
   x = R[:,-1]
   print x
   
   A*x == b.column()   
   
Elementary Operations on Matrices by the Sage Commands
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Exercise 1.** :math:`\\`
Uncomment one of the three hashed lines to demonstrate that the corresponding
command operates directly upon the original matrix:

The row version:

.. sagecellserver::
   
   A = matrix([[2, 5, 3, 0],
               [2, 0,-2,-1],
               [0, 0, 4, 5]])
            
   # A.swap_rows(1,2)
   # A.rescale_row(2,-3)
   # A. add_multiple_of_row(0,1,3)
   A

The column version:

.. sagecellserver::

   A = matrix([[2, 5, 3, 0],
               [2, 0,-2,-1],
               [0, 0, 4, 5]])
            
   # A.swap_columns(1,2)
   # A.rescale_col(2,-3)
   # A. add_multiple_of_column(0,1,3)
   A

**Exercise 2.** :math:`\\`
Uncomment one of the three hashed lines to demonstrate that the corresponding
command returns a transformed matrix while leaving the original one unchanged:

The row version:

.. sagecellserver::
   
   A = matrix([[2, 5, 3, 0],
               [2, 0,-2,-1],
               [0, 0, 4, 5]])

   # B = A.with_swapped_rows(1,2)
   # B = A.with_rescaled_row(2,-3)
   # B = A.with_added_multiple_of_row(0,1,3)
   A,B

The column version:

.. sagecellserver::
   
   A = matrix([[2, 5, 3, 0],
               [2, 0,-2,-1],
               [0, 0, 4, 5]])
            
   # B = A.with_swapped_columns(1,2)
   # B = A.with_rescaled_col(2,-3)
   # B = A.with_added_multiple_of_column(0,1,3)
   A,B

**Exercise 3.** :math:`\\`
Note that whereas ``echelonize()`` acts directly on the original matrix,
``echelon_form()`` and ``rref()`` return the modified matrix without 
changing the original: :math:`\\`

.. sagecellserver::

   A = matrix([[2, 5, 3, 0],
               [2, 0,-2,-1],
               [0, 0, 4, 5]])
            
   A.echelonize(); A

.. sagecellserver::

   A = matrix([[2, 5, 3, 0],
               [2, 0,-2,-1],
               [0, 0, 4, 5]])
            
   B = A.echelon_form()
   C = A.rref()
   A, B, C

Matrix Inverse
~~~~~~~~~~~~~~

**Exercise 4.** :math:`\\`
Assuming the matrices to be over the rational field, 
solve for the matrix :math:`\boldsymbol{X}:`

.. math::
   
   \begin{array}{ll}
   \text{a.)}\quad
   \boldsymbol{X}\,
   \left[\begin{array}{ccc} 
   1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 1 
   \end{array}\right]
   \,=\,
   \left[\begin{array}{ccc} 
   6 & 9 & 8 \\ 0 & 1 & 6 
   \end{array}\right];
   &
   \text{b.)}\quad
   \left[\begin{array}{rr} 
   3 & -1 \\ 5 & -2 
   \end{array}\right]\,
   \boldsymbol{X}\,
   \left[\begin{array}{rr} 
   5 & 6 \\ 7 & 8 
   \end{array}\right]
   \,=\,
   \left[\begin{array}{rr} 
   14 & 16 \\ 9 & 10 
   \end{array}\right];
   \\ \\
   \text{c.)}\quad 
   \left[\begin{array}{rr} 
   2 & -3 \\ 4 & -6 
   \end{array}\right]\,
   \boldsymbol{X}\,=\,
   \left[\begin{array}{rr} 
   1 & 4 \\ 2 & 8 
   \end{array}\right];
   &
   \text{d.)}\quad
   \left[\begin{array}{cc} 
   2 & 1 \\ 2 & 1 
   \end{array}\right]\,
   \boldsymbol{X}\,=\,
   \left[\begin{array}{rr} 
   1 & 1 \\ 1 & 1 
   \end{array}\right].
   \end{array}

**Exercise 5.** :math:`\\`
Find the inverse of each of the two matrices over the rational field:

.. math::
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{rrrr} 1 & -a &  0 &  0 \\
                             0 &  1 & -b &  0 \\
                             0 &  0 &  1 & -c \\
                             0 &  0 &  0 &  1  \end{array}\right]\,,\qquad
   \boldsymbol{L}_5\ =\ 
   \left[\begin{array}{rrrrr} 1 & 0 & 0 & 0 & 0 \\
                              1 & 1 & 0 & 0 & 0 \\
                              1 & 2 & 1 & 0 & 0 \\
                              1 & 3 & 3 & 1 & 0 \\
                              1 & 4 & 6 & 4 & 1 \end{array}\right]\,.
                              
Write down the code generating a matrix :math:`\ L_n\ ` and its 
inverse :math:`\ L_n^{-1}\ ` for an arbitrary natural :math:`\,n.`

**Note.** :math:`\,L_5\,` is a lower triangular Pascal matrix: 
it is composed of binomial coefficients and complementary zeroes.

**Exercise 6.** :math:`\\`
Calculate the inverse of the matrix :math:`\,\boldsymbol{A}\,`
over the rational field:

.. math::
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{rrrrr} 1 & -1 &  1 & -1 &  1 \\
                              0 &  1 & -1 &  1 & -1 \\
                              0 &  0 &  1 & -1 &  1 \\
                              0 &  0 &  0 &  1 & -1 \\
                              0 &  0 &  0 &  0 &  1 \end{array}\right]\,.
                              
Experiment to obtain a general form of the inverse of such a matrix 
for an arbitrary size :math:`\,n.`

This "upper triangular alternating" matrix of a given size :math:`\,n\,`
is generated by the Sage code:
                               
.. sagecellserver::

   n = 5
   A = matrix([[(-1)^(i+j) if j>=i else 0 for j in range(n)] 
                                          for i in range(n)])
   A                                          

**Exercise 7.** :math:`\\`
Apply the Sage method :math:`\,` ``inverse()`` :math:`\,` 
to the symbolic matrix

.. math::
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{cc}
   a & b \\ c & d
   \end{array}\right],\quad a,b,c,d\in R.
   
Notice that :math:`\,\boldsymbol{A}\,` is invertible if and only if
:math:`\ \det{\boldsymbol{A}} \equiv ad-bc \neq 0.`

**Hint.** :math:`\,` To show a readable output apply the method 
:math:`\,` ``factor()`` to the raw result.

.. The solution:

.. sagecellserver:

   var('a,b,c,d')
   A = matrix(SR,2,[a,b,c,d])
   show(A.inverse().factor())


Matrix Inverse by the Elimination Method
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The inverse of a given matrix :math:`\,\boldsymbol{A}\in M_n(K)\,` can be 
obtained by appropriate elementary row operations on the 2-block
composed of :math:`\,\boldsymbol{A}\,` and the identity matrix
:math:`\,\boldsymbol{I}_n.\ `

In a previous section a 2-block has been built by the method ``augment()``, 
and the matrix :math:`\,\boldsymbol{A}^{-1}\,` was selected 
by slicing. In the present alternative way the framework of block matrices 
is applied. The association of matrices :math:`\,\boldsymbol{A}\,` and 
:math:`\,\boldsymbol{I}_n\ ` is performed by the method ``block_matrix()``, 
whereas the resulting inverse matrix :math:`\,\boldsymbol{A}^{-1}\,`
is extracted using the method ``subdivision()``. [5]_
In both cases the row-reducing is executed by ``rref()``.

The following program generates an invertible matrix :math:`\,\boldsymbol{A}\,` 
of a given size :math:`\,n\,` over the rational field :math:`\,Q,\ `
and calculates its inverse by means of the above-mentioned 
procedures. 

.. :math:`\ `

.. admonition: Experiment with Sage! 

**Exercise 8.** :math:`\,`
 
For :math:`\,n = 2,\,3\ ` perform by hand elementary operations which transform 
a matrix :math:`\ [\,\boldsymbol{A}\,|\,\boldsymbol{I}\,]\ ` :math:`\\`  
to the form :math:`\ [\,\boldsymbol{I}\,|\,\boldsymbol{A}^{-1}\,].\ ` 
Compare your result with that given by the program.

Experiment with greater :math:`\,n\,` and compare the result of the present 
elimination method with that given by the standard method ``inverse()`` 
of matrix inversion. 

:math:`\ `

.. sagecellserver::

   n = 4

   A = random_matrix(QQ, n, algorithm = 'echelonizable',
                     rank = n, upper_bound = 10)

   show(table([["Calculate the inverse of the matrix", 'A', '=', A]]))
  
   B = block_matrix([[A,identity_matrix(n)]])  # augment the matrix A
   R = B.rref()                # reduced row echelon form of B
   A_1 = R.subdivision(0,1)    # matrix A^(-1) selected from R
   
   @interact
   
   def _(h=('Step:',["2-block (A,I)","2-block (I,A^(-1))","Verify"])):
    
       if h=="2-block (A,I)": show(table([
           ["", "", "$\qquad\ $ B = (A,I)$\:$ is extension of A:"],
           ["B", '=', B]]))
                    
       elif h=="2-block (I,A^(-1))": show(table([
           ["", "", "$\quad\ \ \ $ Reduced row echelon form of B:"],
           ["B.rref()", '=', R]]))
                    
       elif h=="Verify": show(table([
           ["$A\ :$", "", "$A^{-1}\ :$", "", "$A\ *\ A^{-1}\ :$"],
           [A, '*', A_1, '=', A*A_1]]))

Permutation Matrices
~~~~~~~~~~~~~~~~~~~~

**Problem 0.**

Pre-multiplying a column vector :math:`\,\boldsymbol{x}\,=\,[x_i]_m\in K^m\ `
by a permutation matrix :math:`\,\boldsymbol{P}_\sigma\in M_m(K)\ ` 
rearranges the entries of :math:`\,\boldsymbol{x}\ ` according 
to the permutation :math:`\,\sigma:`

.. math::
   
   \boldsymbol{P}_\sigma\ \boldsymbol{x}\ =\ 
   \left[\begin{array}{c}
   \boldsymbol{e}_{\sigma(1)} \\
   \boldsymbol{e}_{\sigma(2)} \\ 
   \dots                      \\
   \boldsymbol{e}_{\sigma(m)}
   \end{array}\right]
   \left[\begin{array}{c}
   x_1 \\ x_2 \\ \dots \\ x_m
   \end{array}\right]\ =\ 
   \left[\begin{array}{c}
   x_{\sigma(1)} \\ x_{\sigma(2)} \\ \dots \\ x_{\sigma(m)}
   \end{array}\right]\,.

(here :math:`\,\boldsymbol{e}_i\ ` is a :math:`\,` *row* :math:`\,` 
vector with unity in the :math:`\,i`-th position, zeroes elsewhere, 
:math:`\ i=1,2,\dots,m.`).

Validate the result of action of :math:`\,\boldsymbol{P}_\sigma\ ` 
upon the :math:`\,` *column* vector :math:`\,\boldsymbol{e}_k^T :`

.. math::
   
   \boldsymbol{P}_\sigma\ \boldsymbol{e}_k^T\ =\ 
   \boldsymbol{e}^T_{\sigma^{-1}(k)}\,,\quad
   k=1,2,\dots,m.

.. :math:`\ `

.. admonition: Experiment with Sage!

.. Given a number :math:`\,n=2,3,...,\ ` the program constructs the permutation 
   group :math:`\,S_n\,`  and displays a randomly selected permutation 
   :math:`\,\sigma\in S_n\,` together with its matrix 
   :math:`\,\boldsymbol{P}_\sigma.`
   
**Exercise 9.**   
   
Set an integer :math:`\,n=2,3,...,\ ` and display a randomly selected 
permutation :math:`\,\sigma\in S_n\,` together with its matrix 
:math:`\,\boldsymbol{P}_\sigma.`   
   
.. sagecellserver::

   n = 4   
   G = SymmetricGroup(n)
   g = G.random_element()
   (g, g.matrix())

Column Version of Permutation Matrices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this approach a permutation refers to columns 
rather than to rows of a matrix.

Namely, for a rectangular matrix
:math:`\ \boldsymbol{A}\,=\,[a_{ij}]_{m\times n}\in M_{m\times n}(K)\ `
given in the column form

.. math::
   
   \boldsymbol{A}\ =\ 
   [\,\boldsymbol{A}_1\,|\,\boldsymbol{A}_2\,|\,\dots\,|\,\boldsymbol{A}_n\,]\,,
   \quad\text{where}\quad
   \boldsymbol{A}_j\ =\ 
   \left[\begin{array}{c}
   a_{1j} \\ a_{2j} \\ \dots \\ a_{mj}
   \end{array}
   \right]\,,\quad j=1,2,\ldots,n,

and a permutation :math:`\ \sigma\in S_n\,,\ ` the operation 
:math:`\,O^t_\sigma\,` is defined by

.. math::
   
   O^t_\sigma\,\boldsymbol{A}\ \ :\,=\ \ 
   [\;\boldsymbol{A}_{\sigma(1)}\,|\;\boldsymbol{A}_{\sigma(2)}\,|\;\dots\,|\,
   \boldsymbol{A}_{\sigma(n)}\,]

(the superscript 't' distinguishes the column operation 
from its row counterpart).

By analogy with the row case, the permutation matrix 
:math:`\ \boldsymbol{Q}_\sigma\ ` is defined as :math:`\\` the result 
of application of :math:`\,O^t_\sigma\,` to the identity matrix 
:math:`\ \boldsymbol{I}_n =
[\;\boldsymbol{e}_1\,|\;\boldsymbol{e}_2\,|\;\dots\,|\,\boldsymbol{e}_n\,]\,:`

.. math::
   
   \boldsymbol{Q}_\sigma\ :\,=\ O^t_\sigma\ \boldsymbol{I}_n\ =\ 
   [\;\boldsymbol{e}_{\sigma(1)}\,|\;\boldsymbol{e}_{\sigma(2)}\,|\;\dots\,|\,
   \boldsymbol{e}_{\sigma(n)}]

.. (:math:`\boldsymbol{e}_j\ ` is a column vector with the unity 
   in the :math:`\,j`-th position, zeroes elsewhere, :math:`\ j=1,2,..,n.`).

.. :math:`\,`

**Problem 1.** :math:`\,`
Prove that:

1. | :math:`\,` A permutation of columns of a product 
     :math:`\boldsymbol{A}\boldsymbol{B}\ ` 
     of two matrices can be achieved 
   | :math:`\,` by the same permutation of columns 
     of the *second* factor :math:`\boldsymbol{B}\ ` only.

2. | :math:`\,` A permutation of columns of a rectangular matrix 
     :math:`\boldsymbol{A}\ ` is equivalent 
   | :math:`\,` to *post*-multiplying :math:`\boldsymbol{A}\ ` 
     by the matrix of that permutation.

This may be written down in detail as

.. admonition: Theorem.
   
   Let :math:`\,\boldsymbol{A}\in M_{m\times p}(K),\ 
   \boldsymbol{B}\in M_{p\times n}(K),\ \ 
   \sigma\in S_n\,.\ ` Then 

   1. :math:`\ O_\sigma\,(\boldsymbol{A}\boldsymbol{B})\ =\ 
      \boldsymbol{A}\,(O_\sigma\boldsymbol{B})\,;`

   2. :math:`\ O_\sigma\,\boldsymbol{A}\ =\ 
      \boldsymbol{A}\,\boldsymbol{P}_\sigma\,,\qquad\text{where}\quad
      \boldsymbol{P}_\sigma = O_\sigma\,\boldsymbol{I}_n\in M_n(K)\,.`

.. admonition:: Theorem.

   Given a permutation :math:`\ \sigma\in S_n\,,\ `
   the following statements hold true:

   1. :math:`\,` If :math:`\,\boldsymbol{A}\in M_{m\times p}(K),\ 
      \boldsymbol{B}\in M_{p\times n}(K),\ `
      then
      :math:`\ O^t_\sigma\,(\boldsymbol{A}\boldsymbol{B})\ =\ 
      \boldsymbol{A}\,(O^t_\sigma\boldsymbol{B})\,.`

   2. :math:`\,` If :math:`\,\boldsymbol{A}\in M_{m\times n}(K),\ `
      then
      :math:`\ O^t_\sigma\,\boldsymbol{A}\ =\ 
      \boldsymbol{A}\,\boldsymbol{Q}_\sigma\,,\ \ \text{where}\ \ 
      \boldsymbol{Q}_\sigma = O^t_\sigma\,\boldsymbol{I}_n\in M_n(K)\,.`

**Hints.**
 
1. :math:`\,` Apply the Column Rule of Matrix Multiplication.

2. :math:`\,` Note that
   :math:`\ \boldsymbol{A} = \boldsymbol{A}\,\boldsymbol{I}_n\ `
   and take advantage of statement 1.

**Problem 2.** :math:`\,`
Prove that a product of two permutation matrices is also a permutation matrix:

.. math::
   :label: QQ_col
   
   \boldsymbol{Q}_\rho\ \boldsymbol{Q}_\sigma\ =\ \,
   \boldsymbol{Q}_{\rho\:\circ\:\sigma}\,,
   \qquad\rho,\sigma\in S_n\,.

**Hint.** :math:`\,` 
Recall the multiplication rule for the row permutation matrices:

.. math::
   :label: PP_row

   \quad\boldsymbol{P}_\rho\ \boldsymbol{P}_\sigma\ =
   \ \boldsymbol{P}_{\sigma\,\circ\,\rho}\,,\quad\rho,\sigma\in S_m

and remark that the row and column matrices of a permutation
are interrelated by the transpose:

.. math::
   :label: ortho
   
   \boldsymbol{Q}_\sigma = \,\boldsymbol{P}_\sigma^{\,T}\,,\quad 
   \boldsymbol{P}_\sigma = \,\boldsymbol{Q}^{\,T}_\sigma\,,\qquad
   \sigma\in S_n.

Equations :math:`\,` :eq:`QQ_col`, :math:`\,` :eq:`PP_row` :math:`\,` 
and :math:`\,` :eq:`ortho` :math:`\,` suggest the

.. admonition:: Corollary. :math:`\\`
   
   The map :math:`\,F\,` of a permutation group :math:`\,S_n\,` 
   to an algebra :math:`\,M_n(K)` :math:`\\`
   of square matrices of size :math:`\,n\,` over a field :math:`\,K:`
   
   .. math::
      
      F:\quad S_n\ni\sigma\ \rightarrow\ F(\sigma)\ :\,=\ 
      P_{\sigma^{-1}} \equiv\,Q_\sigma\in M_n(K)
      
   is homomorphic:
   :math:`\quad F(\rho\circ\sigma) = 
   F(\rho) \cdot\ F(\sigma),\quad
   \rho,\,\sigma\in S_n\,.`
      
   Therefore :math:`\,F\,` is a :math:`\,` *representation* :math:`\,` 
   of the group :math:`\,S_n\ ` on the vector space :math:`\ K^n.`

.. note: :math:`\ `
   
   Observe that the Rule :eq:`QQ_col` preserves the order of permutations    
   (whereas in :eq:`PP_row` the order is reversed). This means that the map
   
   .. math::
      
      S_n\ni\,\sigma\quad\rightarrow\quad Q_\sigma \in\,M_n(K)

   is a *representation* of the group :math:`\,S_n\ `
   on the vector space :math:`\ K^n.` 
   
   

.. [5] http://doc.sagemath.org/html/en/reference/matrices/sage/matrix/matrix2.html











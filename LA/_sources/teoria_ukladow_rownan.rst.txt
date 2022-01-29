.. -*- coding: utf-8 -*-

Theorems on Solutions of Linear Equations
-----------------------------------------

Rank of a Matrix
~~~~~~~~~~~~~~~~

Let :math:`\,\boldsymbol{A}\ ` be a matrix with :math:`\,m\,` rows
:math:`\ \ \text{and}\ \ \,n\ ` columns over a field 
:math:`\,K:\ \,\boldsymbol{A}\,\in M_{m\times n}(K). \\`

.. admonition:: Definition. :math:`\,`

   The *row rank* :math:`\,` of the matrix :math:`\,\boldsymbol{A}\ \,`
   is the number of linearly independent rows of this matrix. :math:`\\`
   Similarly, the :math:`\,` *column rank* :math:`\,` is the number of linearly independent columns.

.. admonition:: Theorem. :math:`\,`

   The column rank is equal to the row rank of the matrix.

It makes sense then to talk about the rank of the matrix :math:`\,\boldsymbol{A},\,`
which is equal to its number of linearly independent rows or columns.
We denote it by :math:`\ \text{rk}\,\boldsymbol{A}.`

.. **Corollaries:**

   1. The rank of the matrix cannot be greater than any of its two sizes:
   :math:`\ \,\text{rk}\,\boldsymbol{A}\,\leq\,m,n.`

   2. The rank of the matrix equals the dimension of the space spanned by its rows, :math:`\\`
   and also to the dimension of the space spanned by its columns.

**Corollary 1.** :math:`\\`
The rank of the matrix cannot be greater than any of its two dimensions:
:math:`\ \,\text{rk}\boldsymbol{A}\,\leq\,m,n.`

**Corollary 2.** :math:`\\`
The rank of the matrix equals the dimension of the space spanned by its rows, :math:`\\`
and also to the dimension of the space spanned by its columns. :math:`\\`

.. admonition:: Theorem. :math:`\,`

   Elementary operations on rows or columns do not change rank of the matrix.

.. **Corollary.** :math:`\,`

The rank of the matrix is equal then to the number of leading unities in its reduced row echelon form.

.. admonition:: Theorem. :math:`\,`

   The rank of the matrix is equal to the highest order of its non-zero minors.  

.. **Definition.** :math:`\,`
   *Minor of order* :math:`\,k\,` of a matrix :math:`\,\boldsymbol{A}\,`
   is the determinant of a matrix :math:`\,` obtained from :math:`\,\boldsymbol{A}\,` 
   by deleting :math:`\,m-k\,` rows :math:`\ `
   and :math:`\ \ \,n-k\,` columns :math:`\ (1\leq k \leq m,n).`

We will apply the aforementioned methods to determine rank of a given matrix by using functions built in Sage. :math:`\\`

Rank of the matrix is given by a direct function ``rank()``:

.. code-block:: python

   sage: A = matrix(QQ,[[2, 3, 5,-3,-2],
                        [3, 4, 3,-1,-3],
                        [5, 6,-1, 3,-5]])

   sage: rk_A = A.rank()
   sage: print "Rank of the matrix A is", rk_A
   
   Rank of the matrix A is 2

The methods ``row_space()`` and ``column_space()`` create a space spanned by rows :math:`\\`
and columns of the matrix, :math:`\,` while ``dimension()`` provides a dimension of the space:

.. code-block:: python

   sage: Vrow = A.row_space()
   sage: Vcol = A.column_space()
   sage: print "Dimension of the row space of matrix A:", Vrow.dimension()
   sage: print "Dimension of the column space of matrix A:", Vcol.dimension()

   Dimension of the row space of matrix A: 2
   Dimension of the column space of matrix A: 2

In reduced row echelon form the matrix :math:`\,\boldsymbol{A}\,` has two leading unities:

.. code-block:: python

   sage: table([["A", "=", A, '$\\rightarrow$', A.rref()]])

.. math::

   A\quad =\quad
   \left(\begin{array}{rrrrr}
      2 & 3 &  5 & -3 & -2 \\
      3 & 4 &  3 & -1 & -3 \\
      5 & 6 & -1 &  3 & -5
   \end{array}\right)\quad\rightarrow\quad\left(\begin{array}{rrrrr}
                                             1 & 0 & -11 &  9 & -1 \\
                                             0 & 1 &   9 & -7 &  0 \\
                                             0 & 0 &   0 &  0 &  0
                                          \end{array}\right)\,.

The method ``minors(k)`` provides a list of all the minors of order :math:`\,k\ ` 
of the given matrix:

.. code-block:: python
   
   sage: print A.minors(2)
   sage: print ""
   sage: print A.minors(3)

   [-1, -9, 7, 0, -11, 9, -1, 4, -9, 7, -3, -27, 21, 0, -33, 27, -3, 12,
   -27, 21, -2, -18, 14, 0, -22, 18, -2, 8, -18, 14]
   
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

As one can see, the matrix :math:`\,\boldsymbol{A}\ ` has non-zero minors of order two, whereas all the minors of order three vanish. :math:`\\`

Eventually, each of the methods used gives the same result: 
:math:`\ \,\text{rk}\,\boldsymbol{A} = 2.`

General Solution of a System of Equations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We consider a (nonhomogeneous) system of linear equations given by a matrix equation of the form

.. math::
   :label: 05

   \boldsymbol{A}\,\boldsymbol{x}\,=\,\boldsymbol{b}

and the corresponding homogeneous system

.. math::
   :label: 06

   \boldsymbol{A}\,\boldsymbol{x}\,=\,\boldsymbol{0}\,,

where :math:`\,\boldsymbol{A}\,\in M_{m\times n}(K)\,`
and :math:`\,\boldsymbol{b}\in K^m.`

A necessary and sufficient condition for any solution to exist provides

.. **Theorem 0.** :math:`\,` (Kronecker-Capelli) :math:`\\`

.. admonition:: Theorem 0. :math:`\,` (Kronecker-Capelli) :math:`\,`

   A system of linear equations :eq:`05` has a solution  
   (is consistent) if and only if the rank of its coefficient matrix 
   is equal to the rank of its augmented matrix:

   .. math::
      :label: 07
      
      \text{rk}\,\boldsymbol{A}\,=\,\text{rk}\,\boldsymbol{B}\,,\qquad
      \text{where}\quad\boldsymbol{B}\,=\,[\,\boldsymbol{A}\,|\,\boldsymbol{b}\,].

For the homogeneous system :eq:`06` the condition :eq:`07` is always fulfilled,
because adding a zero column does not change the rank of the matrix.
Hence, the homogeneous system is always consistent :math:`\,` - :math:`\,` 
there always exists at least a zero solution :math:`\,\boldsymbol{x} = \boldsymbol{0}.\,`
The existence of non-zero solutions explains

.. **Theorem 1.** :math:`\\`

.. admonition:: Theorem 1. :math:`\,`

   The homogeneous system of equations :eq:`06` has non-zero solutions if and only if
   the rank of its coefficient matrix is smaller than the number of unknowns:
   :math:`\ \ \text{rk}\boldsymbol{A}\,<\,n\,.`

In particular, the non-zero solutions exist if the number of equations is smaller than the number of unknowns, that is when :math:`\,m<n.`

Let us consider an important case of :math:`\ \,m=n.\ \,` 
Then the condition :math:`\ \,\text{rk}\boldsymbol{A}<n\ \,`
is satisfied if and only if :math:`\ \det\boldsymbol{A}=0.\ \,` 
Hence, and also by Cramer's formulae follows

.. admonition:: Theorem 1a.
   
   The homogeneous system of equations given by the square matrix
   :math:`\,\boldsymbol{A}\,`
   has non-zero solutions if and only if :math:`\ \det\boldsymbol{A}=0.`

:math:`\;`

Denote by :math:`\ S\ \,` and :math:`\ \,S_0\ `
the sets of solutions for the systems :math:`\,` :eq:`05` :math:`\ ` and :math:`\ \,` :eq:`06` : 

.. math::
   :label: 08

   S\ :\,=\ \{\,\boldsymbol{X}\in K^n:\ \boldsymbol{A}\boldsymbol{X}\,=\,\boldsymbol{b}\,\}\,,
   \qquad
   S_0\ :\,=\ \{\,\boldsymbol{X}\in K^n:\ \boldsymbol{A}\boldsymbol{X}\,=\,\boldsymbol{0}\,\}\,.

Due to the nature of matrix multiplication, it follows that if both
:math:`\,\boldsymbol{X}_1,\,\boldsymbol{X}_2,\,` are in the set :math:`\,S_0,\,`
then so is their every linear combination
:math:`\,a_1\boldsymbol{X}_1+a_2\boldsymbol{X}_2,\ \,a_1,a_2\in K:`

.. math::
   
   \boldsymbol{A}\boldsymbol{X}_1=\boldsymbol{A}\boldsymbol{X}_2=\boldsymbol{0}
   \qquad\Rightarrow\qquad
   \boldsymbol{A}\ (a_1\boldsymbol{X}_1+\,a_2\boldsymbol{X}_2)\ =\ 
   a_1\,\boldsymbol{A}\boldsymbol{X}_1\,+\ a_2\,\boldsymbol{A}\boldsymbol{X}_2\ =\ 
   \boldsymbol{0}\,.

This means that the set :math:`\,S_0\,` is a subspace of the space :math:`\,K^n\,.\ `
More precisely, 

.. **Theorem 2.** :math:`\\`

.. admonition:: Theorem 2. :math:`\,`

   The set :math:`\,S_0\,` of solutions of the homogeneous system of equations :eq:`06`
   is a vector space (a subspace of the space :math:`\,K^n`), 
   whose dimension is equal to the dieference of the number of unknowns 
   and the rank of the coefficient matrix:
   
   .. math::
   
      \text{dim}\,S_0\ =\ n - \text{rk}\boldsymbol{A}\,.

We should emphasize that the set :math:`\,S\,` of solutions of the nonhomogeneous system of equations :eq:`05` *is not* a vector space (namely, it is a *linear variety*).
If :math:`\,\text{rk}\boldsymbol{A} = n,\,` then :math:`\,\text{dim}\,S_0 = 0,\,`
that is the space :math:`\,S_0\,` is reduced to the set containing only one element, the zero vector. This means (in accordance with Theorem 1.) 
that the system of equations has only the zero solution.

.. **Wniosek.** :math:`\,`

.. .. admonition:: Wniosek. :math:`\,`

   Rozwiązanie zerowe jest jedynym rozwiązaniem jednorodnego układu równań :eq:`06`
   wtedy i tylko wtedy, gdy rząd macierzy współczynników
   równa się liczbie niewiadomych: :math:`\ \ \text{rz}\boldsymbol{A} = n\,.\ \,`
   
.. Wniosek ten wynika też bezpośrednio z Twierdzenia 1. :math:`\\`

A relation between the solution sets :math:`\ S\ \,` and :math:`\ \,S_0\ `
defined in :eq:`08` presents

.. **Theorem 3.** :math:`\\`

.. admonition:: Theorem 3. :math:`\,`

   Let :math:`\,\boldsymbol{X'}\,` be a particular solution of the system :eq:`05`:
   
   .. math::
      
      \boldsymbol{A}\boldsymbol{X'} =\ \boldsymbol{b}\,.      
   
   Then the set :math:`\,S\,` of all the solutions of the system :eq:`05` may be 
   obtained by adding :math:`\,\boldsymbol{X'}\,` :math:`\\` 
   to each solution of the system :eq:`06` from the set :math:`\,S_0 :`
   
   .. math::
   
      S\ =\ \{\,\boldsymbol{X'}\}\ +\ S_0\,.

In this way the general solution of the nonhomogeneous system of linear equations is a sum of a particular solution of this system and the general solution of the corresponding homogeneous system.

.. **Corollary.** :math:`\\`

.. admonition:: Corollary. :math:`\,`

   The nonhomogeneous system :eq:`05` has precisely one solution
   if and only if the rank of the coefficient matrix equals the number of the
   unknowns: :math:`\ \text{rk}\boldsymbol{A} = n\,.\ `

.. This is a consequence of the previous corollary from Theorem 2. :math:`\\`

Hence, at least in general, in order to solve a nonhomogeneous system,
it suffices to find (or guess) its particular solution and solve
the corresponding homogeneous system. 

Systems of Linear Equations in Sage
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

According to Theorem 3., :math:`\,` the solution of a system of linear equations

.. math::
   
   \boldsymbol{A}\,\boldsymbol{x}\,=\,\boldsymbol{b}

where :math:`\,\boldsymbol{A}\,\in M_{m\times n}(K)\,`
and :math:`\,\boldsymbol{b}\in K^m,\ `
may be obtained in two stages:

1. :math:`\,` finding a particular solution of the system;
2. :math:`\,` calculation of the general solution of the homogeneous system 
   associated with the original one.

.. Można w tym celu wykorzystać metody przynależne 
   klasie macierzy w systemie Sage:

To this end the two methods in Sage may be used:

* ``A.solve_right(b)`` or in short ``A\b`` 
  yields a particular solution of the system;
* ``A.right_kernel_matrix()`` returns a matrix, whose rows form basis of the 
  space :math:`\,S_0\,` of solutions of the associated homogeneous system.

.. zwraca macierz, której wiersze tworzą
  bazę przestrzeni :math:`\,S_0\,` rozwiązań stowarzyszonego układu jednorodnego. :math:`\\`

**Example.** :math:`\,` Consider the system over rational field :math:`\,Q:`

.. math::
   
   \begin{array}{l} 
      3\,x_1\ -\ 2\,x_2\ +\ 5\,x_3\ +\ 4\,x_4\ =\ 2 \\
      6\,x_1\ -\ 4\,x_2\ +\ 4\,x_3\ +\ 3\,x_4\ =\ 3 \\
      9\,x_1\ -\ 6\,x_2\ +\ 3\,x_3\ +\ 2\,x_4\ =\ 4
   \end{array}

.. code-block:: python
   
   sage: A = matrix(QQ,[[3,-2, 5, 4],
                        [6,-4, 4, 3],
                        [9,-6, 3, 2]])
               
   sage: b = vector(QQ,[2,3,4])

   # A particular solution:
   sage: X = A.solve_right(b)

   # Rows of the matrix B0 form basis of the space 
   # of solutions of the homogeneous system:
   sage: B0 = A.right_kernel_matrix()    
                               
   sage: show((X, B0))

.. math::
      
   \left(\quad\left(\ \frac{7}{18}\,,\ 0\,,\ \frac{1}{6}\,,\ 0\ \right),\quad
   \left(\ \begin{array}{rrrr}
      1 & 0 & -15 &  18 \\
      0 & 1 &  10 & -12
   \end{array}\ \right)\quad\right)

.. code-block:: python
   
   sage: # Verification of the results:
   sage: A*X==b, A*B0.transpose()==zero_matrix(QQ,3,2)

   (True, True)

:math:`\;`

Hence, the general solution of the system consists of the vecors of the form

.. math:: \\

   \left[\begin{array}{r} x_1 \\ x_2 \\ x_3 \\ x_4 \end{array}\right]\quad =\quad 
   \left[\begin{array}{c} \small{7/18} \\ 0 \\ \small{1/6} \\ 0 \end{array}\right]\ \ +\ \ s\ \, 
   \left[\begin{array}{r} 1 \\ 0 \\ -15 \\  18 \end{array}\right]\ \ +\ \ t\ \, 
   \left[\begin{array}{r} 0 \\ 1 \\  10 \\ -12 \end{array}\right]\,,\qquad s,t\in Q\,.

























.. -*- coding: utf-8 -*-

.. _`Example with Discussion`:

Example with Discussion
-----------------------

We will use the aforementioned methods to solve a system of equations over a field :math:`\,Q:`

.. math::
   :nowrap:

   \begin{alignat*}{6}
      x_1 & {\,} + {\,} & 3\,x_2 & {\,}   {\,} &        & {\,} + {\,} & 2\,x_4 & {\,} - {\,} &    x_5 & {\;} = {\;} & 2 \\
          & {\,}   {\,} &        & {\,}   {\,} &    x_3 & {\,} + {\,} & 4\,x_4 & {\,} - {\,} & 3\,x_5 & {\;} = {\;} & 2 \\
      x_1 & {\,} + {\,} & 3\,x_2 & {\,} + {\,} &    x_3 & {\,} + {\,} & 6\,x_4 & {\,} - {\,} & 4\,x_5 & {\;} = {\;} & 4
   \end{alignat*}

First, write down the coefficient matrix :math:`\,\boldsymbol{A},\ `
the column of constants :math:`\,\boldsymbol{b}\ `
and the augmented matrix :math:`\,\boldsymbol{B}\,` of this system:

.. math::

   \boldsymbol{A}\ =\ 
   \left[\begin{array}{rrrrr}
      1 & 3 & 0 & 2 & -1 \\
      0 & 0 & 1 & 4 & -3 \\
      1 & 3 & 1 & 6 & -4
   \end{array}\right]\,,\quad
   \boldsymbol{b}\ =\ 
   \left[\begin{array}{r}
      2 \\ 2 \\ 4
   \end{array}\right]\,;\qquad
   \boldsymbol{B}\ =\ 
   \left[\begin{array}{rrrrrr}
      1 & 3 & 0 & 2 & -1 & 2 \\
      0 & 0 & 1 & 4 & -3 & 2 \\
      1 & 3 & 1 & 6 & -4 & 4
   \end{array}\right]\,.

Elimination Method
~~~~~~~~~~~~~~~~~~

Transformation of the augmented matrix to the reduced row echelon form:

.. code-block:: python

   sage: B = matrix(QQ,[[1, 3, 0, 2,-1, 2],
                        [0, 0, 1, 4,-3, 2],
                        [1, 3, 1, 6,-4, 4]])
   
   sage: table([[B, '$\\rightarrow$', B.rref()]])

.. math::
   :label: 09
   
   \left(\begin{array}{rrrrrr}
      1 & 3 & 0 & 2 & -1 & 2 \\
      0 & 0 & 1 & 4 & -3 & 2 \\
      1 & 3 & 1 & 6 & -4 & 4
   \end{array}\right)\quad\rightarrow\quad\left(\begin{array}{rrrrrr}
                                             1 & 3 & 0 & 2 & -1 & 2 \\
                                             0 & 0 & 1 & 4 & -3 & 2 \\
                                             0 & 0 & 0 & 0 & 0 & 0
                                          \end{array}\right)

Hence, the initial system of three equations is equivalent to a system consisting of the first two equations (which is understandable as the third equation is just a sum of the first two):

.. math::
   :nowrap:

   \begin{alignat*}{6}
      x_1 & {\,} + {\,} & 3\,x_2 & {\,}   {\,} &        & {\,} + {\,} & 2\,x_4 & {\,} - {\,} &    x_5 & {\;} = {\;} & 2 \\
          & {\,}   {\,} &        & {\,}   {\,} &    x_3 & {\,} + {\,} & 4\,x_4 & {\,} - {\,} & 3\,x_5 & {\;} = {\;} & 2 \\
   \end{alignat*}

It is worth to notice that one can read off a particular solution of the initial system from the reduced row echelon form of the augmented matrix :eq:`09`: :math:`\,`
the numbers in the last column of this matrix are the values of the unknowns corresponding to the columns with leading units, if the values of the other unknowns are taken to be zero. This particular solution is 

.. math::
   :label: 10

   x_1 = x_3 = 2,\quad x_2 = x_4 = x_5 = 0.

We rewrite the above system of two equations as 

.. math::
   :nowrap:

   \begin{alignat*}{5}
      x_1 & {\;} = {\;} & 2 & {\,} - {\,} & 3\,x_2 & {\,} - {\,} & 2\,x_4 & {\,} + {\,} & x_5 \\
      x_3 & {\,} = {\,} & 2 & {\,} - {\,} & 4\,x_4 & {\,} + {\,} & 3\,x_5  
   \end{alignat*}

We take the unknowns :math:`\ x_2,\,x_4\ \,\text{and}\ \, x_5\ `
(corresponding to the columns without leading units) as parameters:

.. math::
   
   x_2 = s,\ \,x_4 = t,\ \,x_5 = u,\qquad s,t,u\,\in\,Q,

so that the solution is of the form

.. math::

   \begin{array}{l}
      x_1 \ =\ 2 \ - \ 3\,s \ - \ 2\,t \ + \ u \\
      x_2 \ = \ s \\
      x_3 \ = \ 2 \ - \ 4\,t \ + \ 3\,u \\
      x_4 \ = \ t \\
      x_5 \ = \ u
   \end{array}\qquad\quad
   s,t,u\,\in\,Q\,.

Finally, a solution of the system may be written in a vector form

.. math::
   :label: 11

   \left[\begin{array}{c} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{array}\right]\ \,=\ \,  
   \left[\begin{array}{r}  2  \\  0  \\  2  \\  0  \\  0  \end{array}\right]\ +\ s\ 
   \left[\begin{array}{r} -3  \\  1  \\  0  \\  0  \\  0  \end{array}\right]\ +\ t\ 
   \left[\begin{array}{r} -2  \\  0  \\ -4  \\  1  \\  0  \end{array}\right]\ +\ u\ 
   \left[\begin{array}{r}  1  \\  0  \\  3  \\  0  \\  1 \end{array}\right]\,,\quad
   s,t,u\,\in\,Q.

.. Pierwszy składnik po znaku równości przedstawia rozwiązanie szczególne :eq:`10`,
   podczas gdy dalsze wyrazy dają ogólne rozwiązanie układu jednorodnego,
   stowarzyszonego z niejednorodnym układem wyjściowym. 
   Tę ostatnią interpretację potwierdzą dalsze rachunki w tym przykładzie.

A Direct Approach
~~~~~~~~~~~~~~~~~

We use the methods ``solve_right()`` and ``right_kernel_matrix()`` to determine a particular solution of the initial unhomogeneous system, and also a general solution of the associated homogeneous system:

.. code-block:: python

   sage: A = matrix(QQ,[[1, 3, 0, 2,-1],
                        [0, 0, 1, 4,-3],
                        [1, 3, 1, 6,-4]])
              
   sage: b = vector(QQ,[2,2,4])
   
   sage: X = A\b   # a particular solution of the original system

   # Rows of matrix B0 form a basis of the space of solutions
   # of the homogeneous system associated with the original one
   sage: B0 = A.right_kernel_matrix()
   sage: B0 = 2*B0 # to get rid of fractions

   sage: show((X, B0))

.. math::

   \left(\quad\left(2,\,0,\,2,\,0,\,0\right),\quad 
   \left(\ \begin{array}{rrrrr}
      2 & 0 & 0 & -3 & - 4 \\
      0 & 2 & 0 & -9 & -12 \\
      0 & 0 & 2 &  1 &   2
   \end{array}\ \right)\quad\right)
   
Hence, a general solution comprises a set of vectors of the form

.. math::
   :label: 12

   \left[\begin{array}{c} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{array}\right]\ \, =\ \,  
   \left[\begin{array}{r}  2  \\  0  \\  2  \\  0  \\   0 \end{array}\right]\ +\ s\ 
   \left[\begin{array}{r}  2  \\  0  \\  0  \\ -3  \\  -4 \end{array}\right]\ +\ t\ 
   \left[\begin{array}{r}  0  \\  2  \\  0  \\ -9  \\ -12 \end{array}\right]\ +\ u\ 
   \left[\begin{array}{r}  0  \\  0  \\  2  \\  1  \\   2 \end{array}\right]\,,\quad
   s,t,u\,\in\,Q.

Comparison of Results
~~~~~~~~~~~~~~~~~~~~~

Formulae :eq:`11` and :eq:`12` presenting a general solution of the system are not identical: they contain the same particular solution, but the vectors spanning the solution spaces of the homogeneous system are different.

In order to check the consistence of these formulae we construct and compare the aforementioned space. We make use of the function ``span()``,
which returns the space spanned by the given (in a list form) vectors:

.. code-block:: python

   sage: V1 = span(QQ,[[-3, 1, 0, 0, 0],[-2, 0,-4, 1,  0],[1, 0, 3, 0, 1]])              
   sage: V2 = span(QQ,[[ 2, 0, 0,-3,-4],[ 0, 2, 0,-9,-12],[0, 0, 2, 1, 2]])
   
   sage: V1==V2

   True

.. sage: print V1, '\n'
   sage: print V2, '\n'
   
   Vector space of degree 5 and dimension 3 over Rational Field
   Basis matrix:
   [   1    0    0 -3/2   -2]
   [   0    1    0 -9/2   -6]
   [   0    0    1  1/2    1] 
   
   Vector space of degree 5 and dimension 3 over Rational Field
   Basis matrix:
   [   1    0    0 -3/2   -2]
   [   0    1    0 -9/2   -6]
   [   0    0    1  1/2    1] 
  
A difference between the formulae :eq:`11` and :eq:`12` might have occured because a basis of the vector space is not given unambigously:
*every* maximal set of linearly independent vectors defines a basis.
Non-trivial spaces over number fields :math:`\,Q,\,R,\,C\,`
have infinitely many bases.

Alternative Solution of the Homogeneous System
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The homogeneous system of equations from the previous example, having a matrix form 

.. math::
   :label: 13

   \boldsymbol{A}\,\boldsymbol{x}\ =\ \boldsymbol{0}\,,
   \qquad
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{ccccc}
      1 & 3 & 0 & 2 & -1 \\
      0 & 0 & 1 & 4 & -3 \\
      1 & 3 & 1 & 6 & -4
   \end{array}\right]\,,

may be solved in a different, non-standard way.

First, we determine rank of the matrix :math:`\,\boldsymbol{A}\ \,`
and :math:`\ ` dimension of the solution space :math:`\,S_0.\ ` Note that:

* :math:`\ \text{rk}\boldsymbol{A} < 3,\,` because the rows are linearly dependent
  (the third is a sum of the first two);
* | :math:`\ \text{rk}\boldsymbol{A}\geq 2,\,` because there exist non-zero minors of  order two
  | :math:`\qquad\qquad\ ` (eg. a minor in a top right corner).

Hence, :math:`\ \,\text{rk}\boldsymbol{A} = 2\ ` and a dimension of the space :math:`\,S_0\,,` equal to a difference between the number of the unknowns and rank of the matrix :math:`\,\boldsymbol{A},\,` is :math:`\ 5 - 2 = 3.\ `
To determine the space :math:`\,S_0\,` it suffices to provide any of its bases consisting of three linearly independent column vectors belonging to the space
:math:`\,Q^5.`

**General discussion.**

In this situation a problem of solving the system :eq:`13` is equivalent to  finding a matrix :math:`\,\boldsymbol{X}\,` with five rows and three linearly independent columns, which satisfies the condition

.. math::
   :label: 14

   \boldsymbol{A}\,\boldsymbol{X}\ =\ \boldsymbol{O}_3\,,

where the right hand side is a square zero matrix of order three. 

Indeed, assume that the matrix :math:`\,\boldsymbol{X}\in M_{5\times 3}(Q)\,`
satisfies the equation :eq:`14`. Denote its columns by
:math:`\,\boldsymbol{X}_1,\,\boldsymbol{X}_2,\,\boldsymbol{X}_3\ \,`
so that :math:`\ \,` in column matrix notation 

.. math::

   \boldsymbol{A}\,\boldsymbol{X}\ \,=\ \,
   \boldsymbol{A}\ 
   \left[\,\boldsymbol{X}_1\,|\;\boldsymbol{X}_2\,|\;\boldsymbol{X}_3\,\right]\ \,=\ \,
   \left[\,
   \boldsymbol{A}\boldsymbol{X}_1\,|\;
   \boldsymbol{A}\boldsymbol{X}_2\,|\;
   \boldsymbol{A}\boldsymbol{X}_3\,\right]\ \,=\ \,
   \left[\,\boldsymbol{0}\,|\,\boldsymbol{0}\,|\,\boldsymbol{0}\,\right]\,.

Now, if we compare the columns of the last two matrices:
 
.. math::

   \boldsymbol{A}\boldsymbol{X}_1\ =\ \boldsymbol{0},\qquad
   \boldsymbol{A}\boldsymbol{X}_2\ =\ \boldsymbol{0},\qquad
   \boldsymbol{A}\boldsymbol{X}_3\ =\ \boldsymbol{0}\,,

we see that the columns :math:`\,\boldsymbol{X}_1,\,\boldsymbol{X}_2,\,\boldsymbol{X}_3\ `
of the matrix :math:`\,\boldsymbol{X}\,` satisfy the equation :eq:`13` :math:`\,`
and :math:`\,` (by their linear independence) comprise a basis of the space 
:math:`\,S_0.`

**Determination of a basis for the solution space.**

The desired matrix :math:`\,\boldsymbol{X}\,` may be constructed from  the reduced row echelon form :math:`\,\boldsymbol{C}\,` of the coefficient matrix 
:math:`\,\boldsymbol{A}\,` of the system :eq:`13`. :math:`\ ` By the formula :eq:`09`:
 
.. math::
   :label: 15
   
   \boldsymbol{C}\quad =\quad
   \left[\begin{array}{rrrrr}
      1 & 3 & 0 & 2 & -1 \\
      0 & 0 & 1 & 4 & -3 \\
      0 & 0 & 0 & 0 &  0
   \end{array}\right]\,.

Swapping the second and the third column of :math:`\,\boldsymbol{C}\,`
leads to a matrix :math:`\,\boldsymbol{D}\,` with a clear block structure
(notation of blocks includes their sizes):

.. math::
   :label: 16   

   \boldsymbol{D}\quad =\quad 
   \left[\begin{array}{cc|ccc}
      1 & 0 & 3 & 2 & -1 \\
      0 & 1 & 0 & 4 & -3 \\
      \hline
      0 & 0 & 0 & 0 &  0
   \end{array}\right]
   \quad \equiv\quad
   \left[\begin{array}{c|c}
      \boldsymbol{I_2}      & \boldsymbol{F_{23}} \\
      \hline                
      \boldsymbol{O_{12}}   & \boldsymbol{O_{13}}
   \end{array}\right]\,.

Note that :math:`\,\boldsymbol{D}\,` is a matrix (in a reduced echelon form) of the system which we obtaind from :eq:`13` by changing the numeration of unknowns: :math:`\ x_2\leftrightarrow x_3.\ \,`
We define a new matrix

.. math::
   :label: 17

   \boldsymbol{Y}\quad :\,=\quad
   \left[\begin{array}{c}
      \boldsymbol{-F_{23}} \\
      \hline
      \boldsymbol{I_3}
   \end{array}\right]
   \quad =\quad
   \left[\begin{array}{rrr}
      -3 & -2 & 1 \\
       0 & -4 & 3 \\
      \hline
       1 &  0 & 0 \\
       0 &  1 & 0 \\
       0 &  0 & 1
    \end{array}\right]\,.

Applying the rules for multiplication of block matrices, we get

.. math::
   :label: 18

   \boldsymbol{D}\cdot\boldsymbol{Y}\ \,=\ \,   
   \left[\begin{array}{c|c}
      \boldsymbol{I_2}    & \boldsymbol{F_{23}} \\
      \hline
      \boldsymbol{O_{12}} & \boldsymbol{O_{13}}
   \end{array}\right]\ \cdot\ 
   \left[\begin{array}{c}
      \boldsymbol{-F_{23}} \\
      \hline
      \boldsymbol{I_3}
   \end{array}\right]\ \,=\ \,
   \left[\begin{array}{c}
      -\boldsymbol{I_2 F_{23}}+\boldsymbol{F_{23}I_3} \\
      \hline
      \boldsymbol{-O_{12}F_{23}}+\boldsymbol{O_{13}I_3}
   \end{array}\right]\ \,=

   =\ \,
   \left[\begin{array}{c}
      \boldsymbol{-F_{23}}+\boldsymbol{F_{23}} \\
      \hline
      \boldsymbol{-O_{13}}+\boldsymbol{O_{13}}
   \end{array}\right]\ \,=\ \,
   \left[\begin{array}{c}
      \boldsymbol{O_{23}} \\
      \hline
      \boldsymbol{O_{13}}
   \end{array}\right]\ \,=\ \,\boldsymbol{O_3}.

The columns of the matrix :math:`\,\boldsymbol{Y}\,` are then solutions of the system with a matrix :math:`\,\boldsymbol{D}\,` in a reduced echelon form, that is with the swapped unknowns :math:`\ x_2,\,x_3.\ `
Solutions of the initial system :eq:`13` are the columns of the matrix :math:`\,\boldsymbol{X}\,` obtained from :math:`\,\boldsymbol{Y}\,` by
swapping the second and the third row 
(because in these matrices, rows correspond with consecutive unknowns):

.. math::
   :label: 19

   \boldsymbol{X}\quad =\quad
   \left[\begin{array}{rrr}
      -3 & -2 & 1 \\
       1 &  0 & 0 \\
       0 & -4 & 3 \\
       0 &  1 & 0 \\
       0 &  0 & 1
    \end{array}\right]\,.

We still have to check that the columns of the matrix :math:`\,\boldsymbol{X}\,`
are linearly independent, i.e. that :math:`\,\text{rk}\,\boldsymbol{X} = 3.\,`
This is testified by  the non-zero minor of  order 3. composed from first three rows of the matrix:

.. math::

   \det\,
   \left[\begin{array}{rrr}
   -3 & -2 & 1 \\
    1 &  0 & 0 \\
    0 & -4 & 3
   \end{array}\right]\ \,=\ \, 2.

Finaly, a general solution of the homogeneous sytem :eq:`13` is of the form

.. math::
   :label: 20

   \left[\begin{array}{c} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{array}\right]\quad =\quad  
   s\ \,\left[\begin{array}{r} -3  \\  1  \\  0  \\  0  \\  0 \end{array}\right]\ +\ 
   t\ \,\left[\begin{array}{r} -2  \\  0  \\ -4  \\  1  \\  0 \end{array}\right]\ +\ 
   u\ \,\left[\begin{array}{r}  1  \\  0  \\  3  \\  0  \\  1 \end{array}\right]\,,\qquad
   s,t,u\,\in\,Q\,,

which coincides with the solution :eq:`11` of unhomogeneous system. :math:`\\`

**Application of computer algebra.**

Now we use tools of Sage to perform matrix operations described above.

1. Transformation of the matrix :math:`\,\boldsymbol{A}\,` to reduced echelon form 
   :math:`\,\boldsymbol{C}\,` (formula :eq:`15`):

   .. code-block:: python

      sage: A = matrix(QQ,[[1, 3, 0, 2,-1],
                           [0, 0, 1, 4,-3],
                           [1, 3, 1, 6,-4]])

      sage: C = A.rref(); C

      [ 1  3  0  2 -1]
      [ 0  0  1  4 -3]
      [ 0  0  0  0  0]

2. Construction of the matrix :math:`\,\boldsymbol{D}\,` by swapping the second and 
   the third column of the matrix :math:`\,\boldsymbol{C},\,`
   and indication of its block structure (formula :eq:`16`):

   .. code-block:: python

      sage: D = copy(C).with_swapped_columns(1,2)
      sage: D.subdivide(2,2); D

      [ 1  0| 3  2 -1]
      [ 0  1| 0  4 -3]
      [-----+--------]
      [ 0  0| 0  0  0]

3. Isolation of the block :math:`\,\boldsymbol{F_{23}}\,`
   and construction of the matrix :math:`\,\boldsymbol{Y}\ ` (formula :eq:`17`):

   .. code-block:: python

      sage: F23 = D.subdivision(0,1)
      sage: I3 = identity_matrix(3)
      sage: Y = block_matrix([[-F23],[I3]]); Y

      [-3 -2  1]
      [ 0 -4  3]
      [--------]
      [ 1  0  0]
      [ 0  1  0]
      [ 0  0  1]

4. Verification that a product of matrices :math:`\,\boldsymbol{D}\,`
   and :math:`\,\boldsymbol{Y}\,`
   is equal to the zero matrix of order 3. :math:`\\` (formula :eq:`18`):

   .. code-block:: python

      sage: D*Y

      [0 0 0]
      [0 0 0]
      [-----]
      [0 0 0]

5. Construction of the matrix :math:`\,\boldsymbol{X}\,` by swapping the second 
   and the third row of the matrix :math:`\,\boldsymbol{Y},\,`
   and removing block structure of :math:`\,\boldsymbol{X}\,` (formula :eq:`19`):

   .. code-block:: python

      sage: X = Y.with_swapped_rows(1,2)
      sage: X.subdivide(); X

      [-3 -2  1]
      [ 1  0  0]
      [ 0 -4  3]
      [ 0  1  0]
      [ 0  0  1]

6. Verification that the matrix :math:`\,\boldsymbol{X}\,` satisfies the equation :eq:`14`:

   .. code-block:: python

      sage: A*X

      [0 0 0]
      [0 0 0]
      [0 0 0]

.. admonition:: Remark:
   
   As opposed to the methods ``swap_columns()`` and ``swap_rows()``,
   which perform the operations directly on the original matrix, 
   the methods ``with_swapped_columns()`` and ``with_swapped_rows()`` 
   used here output a tranformed matrix without changing the original one.

.. Na uwagę zasługuje użycie metod ``with_swapped_columns()`` oraz ``with_swapped_rows()`` 
   zamiast ``swap_columns()`` oraz ``swap_rows()`` w punktach 2. i :math:`\,` 5. :math:`\ `
   Rzecz w tym, że ``swap_columns()`` i ``swap_rows()`` wykonują operacje bezpośrednio
   na oryginalnej macierzy, nie zwracając żadnej wartości (inaczej: zwracając obiekt pusty).
   Natomiast ``with_swapped_columns()`` i ``with_swapped_rows()``
   zwracają zmienioną macierz (którą można oznaczyć nową nazwą i dalej wykorzystać) 
   zachowując przy tym niezmieniony oryginał. :math:`\\` 

Joining all the operations we obtain the result :eq:`20`:

.. sagecellserver::

   A = matrix(QQ,[[1, 3, 0, 2,-1],
                  [0, 0, 1, 4,-3],
                  [1, 3, 1, 6,-4]])
   C = A.rref()
   D = copy(C).with_swapped_columns(1,2)
   D.subdivide(2,2)
   F23 = D.subdivision(0,1)
   I3 = identity_matrix(3)
   Y = block_matrix([[-F23],[I3]])
   X = Y.with_swapped_rows(1,2)

   cmpnt = '$ %s \\ \\left[\\begin{array}{r} %s \\\ %s \\\ %s \\\ %s \\\ %s \\end{array}\\right]$'

   html(cmpnt % (' ',  'x_1',  'x_2',  'x_3',  'x_4',  'x_5') + '  $=$  ' +\
        cmpnt % ('s', X[0,0], X[1,0], X[2,0], X[3,0], X[4,0]) + '  $+$  ' +\
        cmpnt % ('t', X[0,1], X[1,1], X[2,1], X[3,1], X[4,1]) + '  $+$  ' +\
        cmpnt % ('u', X[0,2], X[1,2], X[2,2], X[3,2], X[4,2]) + '$\\,,$ ' +\
        '$\\qquad s,t,u \\in Q.$')

We should emphasize though that a method presented in this section to solve the system  :eq:`13`, even though it is instructive, it is not universal: it turned out effective  only because of a specific structure of the coefficient matrix
:math:`\,\boldsymbol{A},\,` which led to a block form :eq:`16`. The standard procedure is either a direct method described before or the elimination method.

| **Exercise.**
| Check by hand calculation that the matrix 
  :math:`\,\boldsymbol{X}\,` given by the formula :eq:`19` satisfies the equation :eq:`14`.








 


Matrix Formulation of the Elimination Method
--------------------------------------------

The elimination method (discussed in Chapter 2) transforms a system 
of linear equations into the echelon form by applying elementary operations
to the equations themselves.

An analogous result may be obtained by performing the corresponding operations
on rows of the augmented matrix representing a given set of equations.

Augmented Matrix of a System of Equations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For a system of :math:`\,m\,` linear equations with :math:`\,n\,` unknowns:

.. math::
   :label: 01

   \begin{array}{c}
   a_{11}\,x_1\; + \ \,a_{12}\,x_2\; + \ \,\ldots\  + \ \;a_{1n}\,x_n \ \, = \ \ b_1 \\
   a_{21}\,x_1\; + \ \,a_{22}\,x_2\; + \ \,\ldots\  + \ \;a_{2n}\,x_n \ \, = \ \ b_2 \\
   \quad\,\ldots\qquad\quad\ldots\qquad\ \,\ldots\qquad\ \ \ldots\qquad\ \ \,\ldots  \\
   a_{m1}\,x_1\; + \ \,a_{m2}\,x_2\; + \ \,\ldots\  + \ \;a_{mn}\,x_n \ \, = \ \ b_m
   \end{array}

where coefficients :math:`\,a_{ij}\,` and constants
:math:`\,b_i\ \ (i=1,2,\ldots,m;\ j=1,2,\ldots,n)\,` 
belong to a field :math:`\,K,\,` we have defined
the *coefficient matrix* :math:`\boldsymbol{A},\ `
the *column vector of constants* :math:`\boldsymbol{b},\,` and
the *column vector of unknowns* :math:`\boldsymbol{x}:` 

.. math::

   \boldsymbol{A}\  =\  \left[\;\begin{array}{cccc}
                           a_{11} & a_{12} & \ldots & a_{1n} \\
                           a_{21} & a_{22} & \ldots & a_{2n} \\
                           \ldots & \ldots & \ldots & \ldots \\
                           a_{m1} & a_{m2} & \ldots & a_{mn}
                        \end{array}\right]\,,
   \qquad
   \boldsymbol{b}\,=\,\left[\begin{array}{c} 
                         b_{1} \\ b_{2} \\ \ldots \\ b_{m} 
                      \end{array}\right]\,,
   \qquad
   \boldsymbol{x}\,=\,\left[\begin{array}{c} 
                         x_{1} \\ x_{2} \\ \ldots \\ x_{n} 
                      \end{array}\right]\,.

Then system :eq:`01` may be rewritten compactly as

.. math::
   :label: 02

   \boldsymbol{A}\,\boldsymbol{x}\,=\,\boldsymbol{b}.

When all constants vanish: :math:`\ \boldsymbol{b} = \boldsymbol{0},\ `
the system of equations is said to be *homogeneous*. :math:`\\` 
The homogeneous system

.. math::

   \boldsymbol{A}\,\boldsymbol{x}\ =\ \boldsymbol{0}

is *associated* with the unhomogeneous system :eq:`02`.

Two systems of equations are *equivalent*, :math:`\,` 
when they possess the same set of solutions.

.. We define the *augmented matrix* :math:`\ \boldsymbol{B},\ `
   which determines completely system of equations :eq:`01`:

The system of equations :eq:`01` is represented in one-to-one way
by the *augmented matrix* :math:`\,\boldsymbol{B}:`

.. math::

   \boldsymbol{B}\ \,:\,=\ \,[\,\boldsymbol{A}\,|\,\boldsymbol{b}\;]\ \,
                     =\ \,\left[\begin{array}{ccccc}
                                a_{11} & a_{12} & \ldots & a_{1n} & b_1    \\
                                a_{21} & a_{22} & \ldots & a_{2n} & b_2    \\
                                \ldots & \ldots & \ldots & \ldots & \ldots \\
                                a_{m1} & a_{m2} & \ldots & a_{mn} & b_m
                          \end{array}\right]\,.

The three types of elementary operations on equations of a system 
correspond to the row operations on the augmented matrix:

1. :math:`\,` swap around the positions of two rows
2. :math:`\,` multiply a row by a *nonzero* scalar
3. | :math:`\,` add to a row a scalar multiple of another row
   | :math:`\,` (in particular: add or subtract two different rows).

The augmented matrix :math:`\,\boldsymbol{B}\,` transformed by the above 
row operations refers to a system of equations equivalent to the original one. 
On the other hand, elementary operations applied to columns of matrix 
:math:`\,\boldsymbol{B}\,` usually do change the set of solutions 
and hence are not applicable in the process of solving a system. 
Nevertheless, a permutation of columns of matrix :math:`\,\boldsymbol{A}\,` 
(which only reorders variables) may sometimes facilitate the solution.

Echelon Form of a Matrix
~~~~~~~~~~~~~~~~~~~~~~~~

We start from a few definitions.

* In a *zero row* all elements vanish; 
  a *non-zero row* has at least one non-zero element.

* The *leading entry* (*pivot*) of a non-zero row 
  is the first non-zero element from the left.

A matrix is in the *row echelon form*, if

1. :math:`\,` all zero rows (if any) are below the non-zero ones, and

2. | :math:`\,` for any two non-zero rows, 
     the leading entry of the lower row
   | :math:`\,` is strictly to the right 
     of the leading entry of the upper row.

These conditions imply that if a column contains the pivot of a non-zero row, 
then all elements of that column below the pivot vanish.
Consequently, all elements of the matrix below the main diagonal are zeroes.

This is an example of a matrix in row echelon form
(the leading entries are boxed):

.. math::
   
   \left[
   \begin{array}{rrrrr}
   \boxed{2} &       -1  & 0 &        5  &        4 \\
          0  & \boxed{5} & 3 &        1  &       -1 \\
          0  &        0  & 0 & \boxed{1} &        8 \\
          0  &        0  & 0 &        0  & \boxed{7}
   \end{array}
   \right]\,.

.. \;

A matrix is in *reduced row echelon form* if, in addition to being 
in row echelon form, it satifies the two following conditions:

3. :math:`\,` all leading entries are equal to 1 :math:`\,`
   (they are then called *leading unities*), :math:`\,` and

4. :math:`\,` each leading unity is the only non-zero element in its column.

An example of a matrix in reduced row echelon form is
(the leading unities are boxed):

.. math::
   
   \left[
   \begin{array}{rrrrr}
   \boxed{1} &        0  & 6 &        0  &  2 \\
          0  & \boxed{1} & 3 &        0  & -1 \\
          0  &        0  & 0 & \boxed{1} &  4 \\
          0  &        0  & 0 &        0  &  0
   \end{array}
   \right]\,.
   
.. \;

Replacing rows with columns in the above formulae, 
one may define the (*reduced*) *column echelon form*
of a matrix. Thus a matrix is in the (reduced) column echelon form
if and only if its transpose is in the (reduced) row echelon form.
Since operations on equations of a system correspond to
operations on rows of the augmented matrix,
in the following we shall consider the row version of echelon form only.

The discussion may be generalized to the case of a matrix over 
an arbitrary ring with identity (e.g. the integer ring :math:`\,Z`).
To assure reversibility, definition of the 2nd elementary row operation
is to be slightly modified (descriptions of the other two operations 
are unchanged):

2. :math:`\,` multiply a row by an *invertible* element of the ring

Every matrix over a ring :math:`\,P\,` with identity may be transformed into 
a row echelon form by row elementary operations - this procedure is called 
*Gauss elimination*. On the other hand, every matrix over a field 
:math:`\,K\,` may be converted in this way into the (unique) reduced row
echelon form. This row-reducing of a matrix is referred to as 
*Gauss-Jordan elimination*. 

The matrix :math:`\,\boldsymbol{A}\,` may be considered both over 
the integer ring :math:`\,Z\,` or over the rational field :math:`\,Q:`

.. math::

   \boldsymbol{A}\ =\   
   \left[\begin{array}{rrrr}
      2 & 5 &  3 &  0 \\
      2 & 0 & -2 & -1 \\
      0 & 0 &  4 &  5
   \end{array}\right]\,.

If :math:`\,\boldsymbol{A}\,` is a matrix over :math:`\,Z,\,` then elementary
operations on its rows :math:`\,r0,\,r1,\,r2\,` (in Sage the numbering starts 
from zero!) make way to an echelon form only:

.. math::

   \begin{array}{ccccc}
      & & \begin{array}{c}\small{r1=r1-r0,} \\
                          \small{r1=r1+r2:}\end{array} 
      & & \begin{array}{c}\small{r0=r0+r1,} \\
                          \small{r1=-r1:} \end{array} \\ \\
      \left[\begin{array}{rrrr}
         2 & 5 &  3 &  0 \\
         2 & 0 & -2 & -1 \\
         0 & 0 &  4 &  5
      \end{array}\right] & \rightarrow & 
      \left[\begin{array}{rrrr}
         2 &  5 &  3 & 0 \\
         0 & -5 & -1 & 4 \\
         0 &  0 &  4 & 5
      \end{array}\right] & \rightarrow & 
      \left[\begin{array}{rrrr}
         2 & 0 & 2 &  4 \\
         0 & 5 & 1 & -4 \\
         0 & 0 & 4 &  5
      \end{array}\right]
   \end{array}

(the echelon form is actually obtained at the first step; 
the next operations try to get the reduced form, 
which is however not achievable in this framework).

Alternatively, if we assume that :math:`\,\boldsymbol{A}\,` is a matrix over 
the field :math:`\,Q,\,` the operations may be pushed further, 
up to the reduced echelon form: 

.. math::

   \begin{array}{cccccc}
        & \begin{array}{c} \small{r0=2\ r0,} \\ 
                           \small{r1=4\ r1:} \end{array} 
      & & \begin{array}{c} \small{r0=r0-r2,} \\
                           \small{r1=r1-r2:} \end{array}
      & & \begin{array}{c} \small{r0=r0/4,}  \\
                           \small{r1=r1/20,} \\
                           \small{r2=r2/4:} \end{array} \\ \\
      \rightarrow &
      \left[\begin{array}{rrrr}
         4 &  0 & 4 &   8 \\
         0 & 20 & 4 & -16 \\
         0 &  0 & 4 &   5
      \end{array}\right] & \rightarrow & 
      \left[\begin{array}{rrrr}
         4 &  0 & 0 &   3 \\
         0 & 20 & 0 & -21 \\
         0 &  0 & 4 &   5
      \end{array}\right] & \rightarrow & 
      \left[\begin{array}{cccc}
         1 & 0 & 0 &   3/4  \\
         0 & 1 & 0 & -21/20 \\
         0 & 0 & 1 &   5/4
      \end{array}\right]\,.
   \end{array}

   \;

.. _`Practical Elimination in Sage`:

Practical Elimination in Sage
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In Sage there are built-in functions (strictly: methods), which perform
the row and column elementary operations on matrices: 

1. :math:`\,` ``swap_rows(i,j)`` :math:`\ ` 
   swaps around rows :math:`\,` i :math:`\,` and :math:`\,` j;
2. :math:`\,` ``rescale_row(i,a)`` :math:`\ ` 
   multiplies row :math:`\,` i :math:`\,` by the scalar :math:`\,` a;
3. :math:`\,` ``add_multiple_of_row(i,j,a)`` :math:`\,` 
   adds :math:`\,` a times row j :math:`\,` to row i. 

The column counterparts of these methods are ``swap_columns(i,j)``,
``rescale_col(i,a)`` and ``add_multiple_of_column(i,j,a)``. 
The above methods perform the operations directly on the original matrix 
and do not return any value. In contrast to them, the methods
``with_swapped_rows(i,j)``, ``with_rescaled_row(i,a)`` and 
``with_added_multiple_of_row(i,j,a)`` as well as
``with_swapped_columns(i,j)``, ``with_rescaled_col(i,a)`` and
``with_added_multiple_of_column(i,j,a)``
do return the modified matrix while leaving the original unchanged. [0]_

If :math:`\,\boldsymbol{A}\,` is a matrix, 
:math:`\ \,\boldsymbol{b}\ ` is a matrix or a vector, 
then the command ``A.augment(b)`` returns the matrix, obtained by appending 
:math:`\,\boldsymbol{b}\,` onto the right side of :math:`\,\boldsymbol{A}\,` 
(vector :math:`\,\boldsymbol{b}\,` is first converted to a one-column matrix).
The method ``augment()`` may be thus used to construct the augmented matrix
of a system of linear equations from the coefficient matrix and the column 
vector of constants. [1]_

.. The method ``echelon_form()`` returns a matrix  transformed 
   to the row echelon form, whereas ``rref()`` yields a matrix 
   in the reduced row echelon form. When the base ring of a matrix 
   is not a field, then an equivalent matrix over the rational field 
   is constructed prior to row reduction in ``rref()``. 
   Both methods, ``echelon_form()`` and ``rref()``, 
   return the transformed matrix and do not change the original one.
   To convert directly the original into the echelon form, 
   the function ``echelonize()`` is to be be applied instead. [2]_ 

The method ``echelon_form()`` returns a matrix  transformed to the row echelon 
or (when the base ring of the matrix is a field) to the reduced row 
echelon form. The method ``rref()`` returns a matrix in the reduced 
row echelon form (if the base ring is not a field, the original matrix 
is replaced by an equivalent matrix  over the rational field prior to 
row-reducing). Both methods, ``echelon_form()`` and ``rref()``, 
return the transformed matrix and do not change the original one.
To convert directly the original into the echelon form, 
the function ``echelonize()`` is to be be applied instead. [2]_ 

We shall use these methods to check the results from the last section:

.. code-block:: python
   
   sage: A = matrix([[2, 5, 3, 0],
                     [2, 0,-2,-1],
                     [0, 0, 4, 5]])

   sage: (A, A.echelon_form(), A.rref())

   (
   [ 2  5  3  0]  [ 2  0  2  4]  [     1      0      0    3/4]
   [ 2  0 -2 -1]  [ 0  5  1 -4]  [     0      1      0 -21/20]
   [ 0  0  4  5], [ 0  0  4  5], [     0      0      1    5/4]
   )

.. sagecellserver
   
   A = matrix([[2, 5, 3, 0],
               [2, 0,-2,-1],
               [0, 0, 4, 5]])
   
   show((A, A.echelon_form(), A.rref()))

:math:`\;`

**Example 1.** :math:`\,` **Consistent linear system with a unique solution**

We shall apply the elimination method to the system of equations
over the rational field :math:`\,Q:`

.. math::
   :nowrap:

   \begin{alignat*}{4}
    2\,x_1 & {\,} - {\,} &    x_2 & {\,} - {\,} &    x_3 & {\;} = {\;} &  4 \\
    3\,x_1 & {\,} + {\,} & 4\,x_2 & {\,} - {\,} & 2\,x_3 & {\;} = {\;} & 11 \\
    3\,x_1 & {\,} - {\,} & 2\,x_2 & {\,} + {\,} & 4\,x_3 & {\;} = {\;} & 11
   \end{alignat*}

The coefficient matrix :math:`\,\boldsymbol{A},\,`
column vector of constants :math:`\,\boldsymbol{b},\,`
and the augmented matrix :math:`\,\boldsymbol{B}:`

.. math::

   \boldsymbol{A}\ =\ 
   \left[\begin{array}{rrr}
      2 & -1 & -1 \\
      3 &  4 & -2 \\
      3 & -2 &  4
   \end{array}\right]\,,
   \quad
   \boldsymbol{b}\ =\ 
   \left[\begin{array}{r}
      4 \\ 11 \\ 11
   \end{array}\right]\,,
   \qquad
   \boldsymbol{B}\ =\ 
   \left[\begin{array}{rrrr}
      2 & -1 & -1 &  4 \\
      3 &  4 & -2 & 11 \\
      3 & -2 &  4 & 11 
   \end{array}\right]\,.

.. \;

The Gauss-Jordan elimination consists of the operations
on rows :math:`\,r0,\,r1,\,r2\,` of matrix :math:`\,\boldsymbol{B}:`

.. math::
   
   \begin{array}{cccccc}
      & & r2=r2-r1: 
      & & \begin{array}{c} r1=r1-r0, \\ 
                           r2=-r2/6: \end{array} & \\ \\
      \left[\begin{array}{rrrr}
         2 & -1 & -1 &  4 \\
         3 &  4 & -2 & 11 \\
         3 & -2 &  4 & 11
      \end{array}\right] & \rightarrow &
      \left[\begin{array}{rrrr}
         2 & -1 & -1 &  4 \\
         3 &  4 & -2 & 11 \\
         0 & -6 &  6 &  0
      \end{array}\right] & \rightarrow &
      \left[\begin{array}{rrrr}
         2 & -1 & -1 & 4 \\
         1 &  5 & -1 & 7 \\
         0 &  1 & -1 & 0
      \end{array}\right] & \rightarrow \\ \\
      r0=r0-2\,r1: & & r0,r1,r2=r1,r2,r0: & & r2=r2+11\,r1: & \\ \\
      \left[\begin{array}{rrrr}
         0 & -11 &  1 & -10 \\
         1 &   5 & -1 &   7 \\
         0 &   1 & -1 &   0
      \end{array}\right] & \rightarrow &
      \left[\begin{array}{rrrr}
         1 &   5 & -1 &   7 \\
         0 &   1 & -1 &   0 \\
         0 & -11 &  1 & -10
      \end{array}\right] & \rightarrow &
      \left[\begin{array}{rrrr}
         1 & 5 &  -1 &   7 \\
         0 & 1 &  -1 &   0 \\
         0 & 0 & -10 & -10
      \end{array}\right] & \rightarrow \\ \\
      r2=-r2/10: & & \begin{array}{l}r0=r0+r2, \\
                                     r1=r1+r2: \end{array} 
                 & & r0=r0-5\,r1: & \\ \\
      \left[\begin{array}{rrrr}
         1 & 5 & -1 & 7 \\
         0 & 1 & -1 & 0 \\
         0 & 0 &  1 & 1
      \end{array}\right] & \rightarrow &
      \left[\begin{array}{rrrr}
         1 & 5 & 0 & 8 \\
         0 & 1 & 0 & 1 \\
         0 & 0 & 1 & 1
      \end{array}\right] & \rightarrow & 
      \left[\begin{array}{rrrr}
         1 & 0 & 0 & 3 \\
         0 & 1 & 0 & 1 \\
         0 & 0 & 1 & 1
      \end{array}\right]\,. &   
   \end{array}

:math:`\ `

The following program executes this procedure step-by-step:

.. code-block:: python

   sage: A = matrix(QQ,[[2,-1,-1],      # the coefficient matrix
                        [3, 4,-2],
                        [3,-2, 4]])

   sage: b = vector([4,11,11])          # the vector of constants

   sage: B = A.augment(b)               # compose the augmented matrix
                                        
   sage: B.add_multiple_of_row(2,1,-1)  # from the third row subtract the second
                                        
   sage: B.add_multiple_of_row(1,0,-1)  # from the second row subtract the first
   sage: B.rescale_row(2,-1/6)          # third row divide by -6
                                        
   sage: B.add_multiple_of_row(0,1,-2)  # from first row subtract doubled second 
                                        
   sage: B.swap_rows(0,1)               # swap first and second rows
   sage: B.swap_rows(1,2)               # swap second and third rows 
                                        
   sage: B.add_multiple_of_row(2,1,11)  # to third row add the second 
                                        # multiplied by 11
                                        
   sage: B.rescale_row(2,-1/10)         # third row divide by -10
                                        
   sage: B.add_multiple_of_row(0,2,1)   # to  the first row add the third
   sage: B.add_multiple_of_row(1,2,1)   # to the second row add the third
                                        
   sage: B.add_multiple_of_row(0,1,-5)  # from the first row subtract the second 
                                        # multiplied by 5

   sage: B                              # display the transformed matrix B

   [1 0 0 3]
   [0 1 0 1]
   [0 0 1 1]

This result may be obtained directly by means of the method ``rref()``:

.. code-block:: python

   sage: A = matrix(QQ,[[2,-1,-1],  # the coefficient matrix
                        [3, 4,-2],
                        [3,-2, 4]])

   sage: b = vector([4,11,11])      # the vector of constants

   sage: B = A.augment(b)           # compose the augmented matrix
   sage: B.rref()                   # display the transformed matrix B

   [1 0 0 3]
   [0 1 0 1]
   [0 0 1 1]

The reduced echelon matrix corresponds to the trivial system of equations

.. math::
   :nowrap:

   \begin{alignat*}{4}
      1\,x_1 & {\,} + {\,} & 0\,x_2 & {\,} + {\,} & 0\,x_3 & {\;} = {\;} & 3 \\
      0\,x_1 & {\,} + {\,} & 1\,x_2 & {\,} + {\,} & 0\,x_3 & {\;} = {\;} & 1 \\
      0\,x_1 & {\,} + {\,} & 0\,x_2 & {\,} + {\,} & 1\,x_3 & {\;} = {\;} & 1
   \end{alignat*}

where we recognize immediately the solution: 
:math:`\ \ x_1 = 3,\ x_2=x_3 = 1.` 

.. :math:`\ `

**Example 2.** :math:`\,` 
**Consistent linear system  with infinitely many solutions**

We shall consider the system of three equations in four variables
over the rational field :math:`\,Q:`

.. math::
   :nowrap:

   \begin{alignat*}{5}
      x_1 & {\,} - {\,} &    x_2 & {\,} + {\,} & 2\,x_3 & {\,} - {\,} &    x_4 & {\;} = {\;} &  1 \\
   2\,x_1 & {\,} - {\,} & 3\,x_2 & {\,} - {\,} &    x_3 & {\,} + {\,} &    x_4 & {\;} = {\;} & -1 \\
      x_1 & {\,}   {\,} &        & {\,} + {\,} & 7\,x_3 & {\,} - {\,} & 4\,x_4 & {\;} = {\;} &  4
   \end{alignat*}

.. \;

The Sage code 

.. The augmented matrix transformed into the reduced echelon form

.. code-block:: python

   sage: B = matrix(QQ,[[1,-1, 2,-1, 1],
                        [2,-3,-1, 1,-1],
                        [1, 0, 7,-4, 4]])

   sage: table([[B, '$\\rightarrow$', B.rref()]])

displays both the original augmented matrix and its row-reduced echelon form:

.. math::

   \left[\begin{array}{rrrrr}
         1 & -1 &  2 & -1 &  1 \\
         2 & -3 & -1 &  1 & -1 \\
         1 &  0 &  7 & -4 &  4
         \end{array}\right]\quad\rightarrow\quad\left[\begin{array}{rrrrr}
                                                      1 & 0 & 7 & -4 & 4 \\
                                                      0 & 1 & 5 & -3 & 3 \\
                                                      0 & 0 & 0 &  0 & 0
                                                      \end{array}\right]\,.

The latter matrix refers to the system of two equations 
(the third one is fulfilled identically):

.. math::

   \begin{array}{l}
   1\,x_1 \ + \ 0\,x_2 \ + \ 7\,x_3 \ - \ 4\,x_4 \ = \ 4 \\
   0\,x_1 \ + \ 1\,x_2 \ + \ 5\,x_3 \ - \ 3\,x_4 \ = \ 3 \,.
   \end{array}

which may be rewritten as

.. math::
   
   \begin{array}{c} 
   x_1\ =\ 4\ -\ 7\,x_3\ +\ 4\,x_4 \\ x_2\ =\ 3\ -\ 5\,x_3\ +\ 3\,x_4 \,.
   \end{array}

.. math:
   :nowrap:

   \begin{alignat*}{4}
      x_1 & {\;} = {\;} & 4 & {\,} - {\,} & 7\,x_3 & {\,} + {\,} & 4\,x_4 \\
      x_2 & {\;} = {\;} & 3 & {\,} - {\,} & 5\,x_3 & {\,} + {\,} & 3\,x_4 \,.
   \end{alignat*}

For each pair of values :math:`\,x_3,\,x_4\,` there exists exactly one pair 
of values :math:`\,x_1,\,x_2,` for which the system is satisfied. 
Therefore we consider :math:`\,x_3,\,x_4\,` as free parameters: 
:math:`\ x_3 = s,\ x_4 = t,\ ` and the solution takes the form

.. math::
   :nowrap:

   \begin{alignat*}{4}
      x_1 & {\;} = {\;} & 4 & {\,} - {\,} & 7\,s & {\,} + {\,} & 4\,t \\
      x_2 & {\;} = {\;} & 3 & {\,} - {\,} & 5\,s & {\,} + {\,} & 3\,t \\
      x_3 & {\;} = {\;} & s \\
      x_4 & {\;} = {\;} & t
   \end{alignat*}

where :math:`\,s\ \,\text{and}\ \,t\,` are arbitrary rational numbers. 
:math:`\,` In the vector notation

.. math::
   :label: 03

   \left[\begin{array}{c} x_1 \\ x_2 \\ x_3 \\ x_4 \end{array}\right]\ \ =\ \   
   \left[\begin{array}{c}
      4 - 7\,s + 4\,t \\
      3 - 5\,s + 3\,t \\
      s               \\
      t
   \end{array}\right]\ \  =\ \  
   \left[\begin{array}{r}  4 \\  3 \\ 0 \\ 0 \end{array}\right]\ +\ s\ \,
   \left[\begin{array}{r} -7 \\ -5 \\ 1 \\ 0 \end{array}\right]\ +\ t\ \,
   \left[\begin{array}{r} 4 \\ 3 \\ 0 \\ 1 \end{array}\right],\quad
   s,t\in Q.

.. \;

The above discussion suggests a general approach to such systems of linear 
equations with infinitely many solutions. The augmented matrix being
transformed to the reduced row echelon form, the unknowns corresponding 
to columns with leading unities are to be expressed by the remaining ones, 
whereupon the latter are assumed to be free parameters.

.. :math:`\ `

**Example 3.** :math:`\,` **Inconsistent linear system**

The present system of equations differs from the previous one
only in a constant term on the right-hand side:

.. math::
   :nowrap:

   \begin{alignat*}{5}
      x_1 & {\,} - {\,} &    x_2 & {\,} + {\,} & 2\,x_3 & {\,} - {\,} &    x_4 & {\;} = {\;} & 1 \\
   2\,x_1 & {\,} - {\,} & 3\,x_2 & {\,} - {\,} &    x_3 & {\,} + {\,} &    x_4 & {\;} = {\;} & 1 \\
      x_1 & {\,}   {\,} &        & {\,} + {\,} & 7\,x_3 & {\,} - {\,} & 4\,x_4 & {\;} = {\;} & 4
   \end{alignat*}

whereby it turns out to be inconsistent. :math:`\\`
Indeed, the augmented matrix transformed to the reduced row echelon form

.. code-block: python

   sage: B = matrix(QQ,[[1,-1, 2,-1, 1],
   ...                  [2,-3,-1, 1, 1],
   ...                  [1, 0, 7,-4, 4]])

   sage: html.table([[B, '$\\rightarrow$', B.rref()]])

.. math::

   \left[\begin{array}{rrrrr}
         1 & -1 &  2 & -1 &  1 \\
         2 & -3 & -1 &  1 &  1 \\
         1 &  0 &  7 & -4 &  4
         \end{array}\right]\quad\rightarrow\quad\left[\begin{array}{rrrrr}
                                                      1 & 0 & 7 & -4 & 0 \\
                                                      0 & 1 & 5 & -3 & 0 \\
                                                      0 & 0 & 0 &  0 & 1
                                                      \end{array}\right]

corresponds to the system

.. math::
   :nowrap:

   \begin{alignat*}{5}
   1\,x_1 & {\,} + {\,} & 0\,x_2 & {\,} + {\,} & 7\,x_3 & {\,} - {\,} & 4\,x_4 & {\;} = {\;} &  0 \\
   0\,x_1 & {\,} + {\,} & 1\,x_2 & {\,} + {\,} & 5\,x_3 & {\,} - {\,} & 3\,x_4 & {\;} = {\;} &  0 \\
   0\,x_1 & {\,} + {\,} & 0\,x_2 & {\,} + {\,} & 0\,x_3 & {\,} + {\,} & 0\,x_4 & {\;} = {\;} &  1
   \end{alignat*}

which evidently has no solution, since there are no values of 
:math:`\,x_1,\,x_2,\,x_3,\,x_4,\,` satisfying the last equation :math:`\ 0=1.`

:math:`\ `

**Example 4.** :math:`\,` **Homogeneous linear system** 

Let's consider the homogeneous system associated with that in Example 2.:

.. math::
   :nowrap:

   \begin{alignat*}{5}
      x_1 & {\,} - {\,} &    x_2 & {\,} + {\,} & 2\,x_3 & {\,} - {\,} &    x_4 & {\;} = {\;} & 0 \\
   2\,x_1 & {\,} - {\,} & 3\,x_2 & {\,} - {\,} &    x_3 & {\,} + {\,} &    x_4 & {\;} = {\;} & 0 \\
      x_1 & {\,}   {\,} &        & {\,} + {\,} & 7\,x_3 & {\,} - {\,} & 4\,x_4 & {\;} = {\;} & 0
   \end{alignat*}

.. Po przekształceniu macierzy rozszerzonej do zredukowanej postaci schodkowej:

The augmented matrix converted to the reduced row echelon form

.. code-block: python

   sage: B = matrix(QQ,[[1,-1, 2,-1, 0],
                        [2,-3,-1, 1, 0],
                        [1, 0, 7,-4, 0]])

   sage: table([[B, '$\\rightarrow$', B.rref()]])

.. math::

   \left[\begin{array}{rrrrr}
         1 & -1 &  2 & -1 &  0 \\
         2 & -3 & -1 &  1 &  0 \\
         1 &  0 &  7 & -4 &  0
         \end{array}\right]\quad\rightarrow\quad\left[\begin{array}{rrrrr}
                                                      1 & 0 & 7 & -4 & 0 \\
                                                      0 & 1 & 5 & -3 & 0 \\
                                                      0 & 0 & 0 &  0 & 0
                                                      \end{array}\right]

..  \;

.. :math:`\\`

leads to the system of two equations

.. math::
   :nowrap:

   \begin{alignat*}{5}
   1\,x_1 & {\,} + {\,} & 0\,x_2 & {\,} + {\,} & 7\,x_3 & {\,} - {\,} & 4\,x_4 & {\;} = {\;} &  0 \\
   0\,x_1 & {\,} + {\,} & 1\,x_2 & {\,} + {\,} & 5\,x_3 & {\,} - {\,} & 3\,x_4 & {\;} = {\;} &  0
   \end{alignat*}

which are equivalent to

.. :math:`\qquad\qquad
   \begin{array}{c} 
   x_1\ =\ -\ 7\,x_3\ +\ 4\,x_4 \\ 
   x_2\ =\ -\ 5\,x_3\ +\ 3\,x_4
   \end{array}`

.. math::
   :nowrap:

   \begin{alignat*}{3}
      x_1 & {\;} = {\,} - {\,} & 7\,x_3 & {\,} + {\,} & 4\,x_4 \\
      x_2 & {\;} = {\,} - {\,} & 5\,x_3 & {\,} + {\,} & 3\,x_4 \,.
   \end{alignat*}

As previously, we treat :math:`\,x_3,\,x_4\,` as parameters with arbitrary 
values: :math:`\ x_3 = s,\ x_4 = t :`

.. math::

   \begin{array}{l}
      x_1 \ =\ - 7\,s\ +\ 4\,t \\
      x_2 \ =\ - 5\,s\ +\ 3\,t \\
      x_3 \ =\quad s           \\
      x_4 \ =\quad t
   \end{array}
   \qquad\qquad s,t\in Q\,

and get finally the solution in the vector form:

.. math::
   :label: 04

   \left[\begin{array}{c} 
   x_1 \\ x_2 \\ x_3 \\ x_4 
   \end{array}\right]
   \quad = \quad  
   \left[\begin{array}{c}
      - 7\,s + 4\,t \\
      - 5\,s + 3\,t \\
      s             \\
      t
   \end{array}\right]
   \quad = \quad 
   s\ \left[\begin{array}{r} -7 \\ -5 \\ 1 \\ 0 \end{array}\right]\ \, +\ \: 
   t\ \left[\begin{array}{r} 4 \\ 3 \\ 0 \\ 1 \end{array}\right]\,,
   \qquad s,t\in Q\,.

.. \;

Comparison of formulae :eq:`03` and :eq:`04` in Examples 2. and 4.
suggests a relationship between the solution of an (inhomogeneous) 
linear system and the solution of its homogeneous counterpart. 
This question will be brought up in a further chapter.

.. [0] http://doc.sagemath.org/html/en/reference/matrices/sage/matrix/matrix0.html
.. [1] http://doc.sagemath.org/html/en/reference/matrices/sage/matrix/matrix1.html
.. [2] http://doc.sagemath.org/html/en/reference/matrices/sage/matrix/matrix2.html









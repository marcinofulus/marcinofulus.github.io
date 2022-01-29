
Matrices
--------

**Exercise 0.** :math:`\,` For three randomly chosen matrices
:math:`\ \boldsymbol{A},\boldsymbol{B},\boldsymbol{C}\in M_3(Q)\ ` 
verify distributivity of multiplication over addition:

.. math::
   
   \boldsymbol{A}\,(\boldsymbol{B}+\boldsymbol{C})\ =\ 
   \boldsymbol{A}\boldsymbol{B}+\boldsymbol{A}\boldsymbol{C}\,.

**Exercise 1.** :math:`\,` For matrices
:math:`\ \,\boldsymbol{A}=
\left[\begin{array}{rrr} 5 & -1 & 0 \\ 2 &  3 & 1 \\ -1 &  2 & 2 \end{array}\right]\,,\ `
:math:`\ \boldsymbol{B}=
\left[\begin{array}{rrr} -1 & 2 & 0 \\ 1 & 3 & 2 \\ -2 & 5 & 4 \end{array}\right]\ \  
\in\ M_3(R)`
 
compute :math:`\ \,\boldsymbol{A}\boldsymbol{B},\ \,\boldsymbol{B}\boldsymbol{A},\ \,`
:math:`\ [\boldsymbol{A},\boldsymbol{B}]=
\boldsymbol{A}\boldsymbol{B}-\boldsymbol{B}\boldsymbol{A}\ \,`
and also determinants and traces of these three expressions.

Verify the equalities :math:`\ \,\det(\boldsymbol{A}\boldsymbol{B})=
\det\boldsymbol{A}\cdot\det\boldsymbol{B}=
\det(\boldsymbol{B}\boldsymbol{A}),\ `
:math:`\ \,\text{tr}\,(\boldsymbol{A}\boldsymbol{B})=
\text{tr}\,(\boldsymbol{B}\boldsymbol{A}).`

Is :math:`\ \,\text{tr}\,(\boldsymbol{A}\boldsymbol{B})=
\text{tr}\boldsymbol{A}\cdot\text{tr}\boldsymbol{B}\ ` ?

**Exercise 2.** :math:`\,` Observe on the example of matrices

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

that the identity

.. math::
   :label: sum_square2
   
   (\boldsymbol{A}+\boldsymbol{B})^2\ =\ 
   \boldsymbol{A}^2+2\boldsymbol{A}\boldsymbol{B}+\boldsymbol{B}^2

does not hold in a matrix algebra.

1. What is the correct formula for a square of sum or difference 
   :math:`\ (\boldsymbol{A}\pm\boldsymbol{B})^2\ \,`
   of matrices  :math:`\ \boldsymbol{A},\boldsymbol{B}\in M_n(K)\,` ?

2. Under what condition on matrices :math:`\ \boldsymbol{A},\boldsymbol{B}\in M_n(K)\ `
   the formula :eq:`sum_square2` is true ?

**Exercise 3.** :math:`\,` Let
:math:`\ \ \boldsymbol{P}\ =\ 
\left[\begin{array}{ccc} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{array}\right]\, ,
\quad\ \boldsymbol{Q}\ =\ 
\left[\begin{array}{ccc} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{array}\right]\quad
\in\ M_3(R):`

1. Compute 
   :math:`\ \,\boldsymbol{P}\boldsymbol{Q},\ \,\boldsymbol{Q}\boldsymbol{P},\ 
   \boldsymbol{P}^2,\ \boldsymbol{Q}^2.`

2. What is the effect of multiplication of an arbitrary matrix :math:`\ \boldsymbol{A}\in M_3(R)\ `
   on the left or on the right by :math:`\ \boldsymbol{P}\ ` or :math:`\ \boldsymbol{Q}\,` ?

3. Give examples of other matrices of order three  
   whose square is equal to the identity matrix.

**Hint** to point 3.
:math:`\ \boldsymbol{P}\ ` and :math:`\ \boldsymbol{Q}\ ` are permutation matrices.
The square of a permutation matrix is the identity matrix if and only if the square
of the corresponding permutation is the identity permutation. Such a property holds 
for example for transpositions.

**Exercise 4.** :math:`\,`
Experiment with small exponents :math:`\ n=2,3,4,\,\ldots` :math:`\\` 
to find a formula  for the :math:`\ n`-th power of the following matrices
over the field :math:`\ Q:`

.. math::
   
   \left[\begin{array}{cc} 1 & c \\ 0 & 1 \end{array}\right]\,,\quad
   \left[\begin{array}{cc} 2 & 2 \\ 0 & 0 \end{array}\right]\,,\quad
   \left[\begin{array}{cc} 2 & 1 \\ 0 & 1 \end{array}\right]\,,\quad
   \left[\begin{array}{cc} 1 & 1 \\ 1 & 1 \end{array}\right]\,,\quad
   \left[\begin{array}{cc} a & b \\ 0 & 0 \end{array}\right]\,,\quad
   \left[\begin{array}{cc} 1 & 1 \\ 1 & 0 \end{array}\right]\,.

**Hint.** :math:`\\` 
In the last case it may be helpful to use Wikipedia page on Fibonacci numbers.

**Exercise 5.** :math:`\,` Let 

.. math::
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{cccc}
   0 & 2 & 0 & 0 \\
   0 & 0 & 2 & 0 \\
   0 & 0 & 0 & 2 \\
   0 & 0 & 0 & 0
   \end{array}\right]\ \in\ M_4(Q),\qquad
   \boldsymbol{v}\ =\ 
   \left[\begin{array}{c} a \\ b \\ c \\ d \end{array}\right]\,\in\,Q^{\,4}\,.
   
Compute :math:`\ \boldsymbol{A}^n\ ` and :math:`\ \boldsymbol{A}^n\boldsymbol{v}\ `
for arbitrary :math:`\ n\in\boldsymbol{N}\ `.


**Exercise 6.** :math:`\,`
Given a rectangular matrix :math:`\ \boldsymbol{A}\,,`
assume that the solutions :math:`\ \boldsymbol{X}_1,\boldsymbol{X}_2,\boldsymbol{X}_3\ `
to linear problems

.. math::
   :label: 3_set
   
   \boldsymbol{A}\boldsymbol{X}_1\ =\ 
   \left[\begin{array}{c} 1 \\ 0 \\ 0 \end{array}\right]\,,\qquad
   \boldsymbol{A}\boldsymbol{X}_2\ =\ 
   \left[\begin{array}{c} 0 \\ 1 \\ 0 \end{array}\right]\,,\qquad
   \boldsymbol{A}\boldsymbol{X}_3\ =\ 
   \left[\begin{array}{c} 0 \\ 0 \\ 1 \end{array}\right]

are known. Consider a matrix :math:`\ \boldsymbol{X}\ ` whose columns are
:math:`\ \boldsymbol{X}_1,\boldsymbol{X}_2,\boldsymbol{X}_3:\ `
:math:`\ \boldsymbol{X}\,=\,[\,\boldsymbol{X}_1\,|\,\boldsymbol{X}_2\,|\,\boldsymbol{X}_3\,].\ `

1. What is the effect of matrix multiplication :math:`\ \boldsymbol{A}\boldsymbol{X}\,` ?

2. Assume that :math:`\ \boldsymbol{A}\ ` is a nondegenerate square matrix of order 3.: 
   :math:`\ \det\boldsymbol{A}\ne0.` What is the meaning of the matrix :math:`\ \boldsymbol{X}\ ` ?

3. Assume that :math:`\ \boldsymbol{A}\ ` is a degenerate square matrix of order 3.:
   :math:`\ \det\boldsymbol{A} = 0.` 
   
   a). Explain why in such case one of the problems :eq:`3_set` does not have a solution.

   b). Denote by :math:`\ N\ ` the number of linear problems without solutions. 
   In what situations :math:`\ N=1,\,2,\,3\ `? Give an example of each such situation.

4. Consider matrix equation :math:`\ \boldsymbol{A}\boldsymbol{X}=\boldsymbol{B},\ `
   where :math:`\ \boldsymbol{A}\in M_{p\times q}(K),\ `
   :math:`\ \boldsymbol{B}\,=\,[\,\boldsymbol{B}_1\,|\,\boldsymbol{B}_2\,|\,\ldots\,|\,
   \boldsymbol{B}_r\,]\in M_{p\times r}(K),\ ` 
   and :math:`\ \boldsymbol{X}\,=\,[\,\boldsymbol{X}_1\,|\,\boldsymbol{X}_2\,
   |\,\ldots\,|\,\boldsymbol{X}_r\,]\in M_{q\times r}(K)\ ` is the unknown matrix.
   Explain why solving this equation is equivalent to solving
   :math:`\ r\ ` linear systems of equations of the form
   :math:`\ \boldsymbol{A}\boldsymbol{X}_j=\boldsymbol{B}_j\,,\ \ j=1,2,\ldots,r\ `
   with :math:`\ q\ ` unknowns.

**Hints.**

1. Apply the column rule of matrix multiplication (section :ref:`matrix_mult`). 

3. Use a necessary and sufficient condition for a matrix to be invertible (section :ref:`calc_inv_matrix`, Theorem 7).

**Discussion** of the point 3. :math:`\,`
Denote by :math:`\ \boldsymbol{R}_1,\boldsymbol{R}_2,\boldsymbol{R}_3\ ` 
the consecutive rows of the matrix :math:`\ \boldsymbol{A}.` :math:`\\`
Since :math:`\ \det\boldsymbol{A}=0,\ ` then rank of the matrix :math:`\ \boldsymbol{A}\ `
equals 1 or 2.

1. :math:`\ \text{rk}\boldsymbol{A}=1.\ \ ` 
   Without loss of generality we may assume that
   :math:`\ \,\boldsymbol{A}=
   \left[\begin{array}{c} \boldsymbol{R}_1 \\ c_2\,\boldsymbol{R}_1 \\ c_3\,\boldsymbol{R}_1
   \end{array}\right],\ \,\boldsymbol{R}_1\ne\boldsymbol{0}`
   (the other cases can be solved analogously).
   It is easy to see that then the second and the third problem in :eq:`3_set` are inconsistent. 
   Indeed, :math:`\\`
   if :math:`\ \,\boldsymbol{R}_1\boldsymbol{X}=0,\ \,` 
   then :math:`\ \,\boldsymbol{R}_2\boldsymbol{X}=c_2\,(\boldsymbol{R}_1\boldsymbol{X})=0\ \,`
   and :math:`\ \,\boldsymbol{R}_3\boldsymbol{X}=c_3\,(\boldsymbol{R}_1\boldsymbol{X})=0,` :math:`\\`
   which means that :math:`\ \,\boldsymbol{A}\boldsymbol{X}=\boldsymbol{0}.`

   If :math:`\ \,\boldsymbol{R}_1\boldsymbol{X}=1,\ \,`
   then :math:`\ \,\boldsymbol{R}_2\boldsymbol{X}=c_2\,(\boldsymbol{R}_1\boldsymbol{X})=c_2\ \,`
   and :math:`\ \,\boldsymbol{R}_3\boldsymbol{X}=c_3\,(\boldsymbol{R}_1\boldsymbol{X})=c_3.` :math:`\\`
   This means that the first problem is consistent if and only if :math:`\ c_2=c_3=0.`
   
   Hence, :math:`\,` if :math:`\ c_2\ne 0\ ` or :math:`\ c_3\ne 0,\ ` 
   then :math:`\ N=3,\ \,` and if :math:`\ c_2=c_3=0,\ ` then :math:`\ N=2.`

2. | :math:`\ \text{rk}\boldsymbol{A}=2.\ \ ` Without loss of generality (up to the order of the rows)
     we may assume that
     :math:`\ \,\boldsymbol{A}=
     \left[\begin{array}{c} \boldsymbol{R}_1 \\ \boldsymbol{R}_2 \\ 
     c_1\boldsymbol{R}_1+c_2\boldsymbol{R}_2
     \end{array}\right],`
   | where :math:`\ \boldsymbol{R}_1,\,\boldsymbol{R}_2\ ` are linearly independent.
   | Now the third problem of :eq:`3_set` is inconsistent for any values of constants :math:`\ c_1,\,c_2.` 
   | Furthermore, by the same argument as above, we find that
   | if :math:`\ c_1\ne 0\ ` and :math:`\ c_2\ne 0,\ ` then :math:`\ N=3\,;`
   | if :math:`\ c_1=0,\ c_2\ne 0\ ` or :math:`\ c_1\ne 0,\ c_2=0,\ ` then :math:`\ N=2\,;`
   | if :math:`\ c_1=c_2=0,\ ` then :math:`\ N=1\ `.


**Exercise 7.** :math:`\,`
Find inverse matrices to:

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

The matrix :math:`L_5\ ` is a lower triangular Pascal matrix: 
its :math:`\ k`-th row contains coefficients of the Newton's binomial formula for 
:math:`\ (a+b)^k\,,\ ` :math:`\ k=0,1,2,3,4\ ` 
and the supplementary zeros.

Write the code which generates matrix :math:`\ L_n\ ` and its inverse :math:`\ L_n^{-1}\ `
for arbitrary order :math:`\ n=2,3,\,\ldots`

.. sagecellserver::




**Exercise 8.** :math:`\,`
Find the inverse of the matrix

.. math::
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{rrrrr} 1 & -1 &  1 & -1 &  1 \\
                              0 &  1 & -1 &  1 & -1 \\
                              0 &  0 &  1 & -1 &  1 \\
                              0 &  0 &  0 &  1 & -1 \\
                              0 &  0 &  0 &  0 &  1 \end{array}\right]\,.

Generalise the answer to similar matrices of arbitary orders.

In Sage such an upper triangular matrix of order  :math:`\ n\ ` 
may be constructed as follows:

.. code-block:: python

   sage: n = 5
   sage: A = matrix([[(-1)^(i+j) if j>=i else 0 for j in range(n)] 
                                                for i in range(n)])

**Exercise 9.** :math:`\,` Determine the matrix :math:`\ \boldsymbol{X}\ ` from an equation:

a.) :math:`\ \ \boldsymbol{X}\,
\left[\begin{array}{ccc} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 1 \end{array}\right]\,=\,
\left[\begin{array}{ccc} 6 & 9 & 8 \\ 0 & 1 & 6 \end{array}\right]\,;\quad\ `
b.) :math:`\ \ \left[\begin{array}{rr} 3 & -1 \\ 5 & -2 \end{array}\right]\,
\boldsymbol{X}\,
\left[\begin{array}{rr} 5 & 6 \\ 7 & 8 \end{array}\right]\,=\,
\left[\begin{array}{rr} 14 & 16 \\ 9 & 10 \end{array}\right]\,.`

**Exercise 10.** :math:`\,` Solve a matrix equation:

a.) :math:`\ \ \left[\begin{array}{rr} 2 & -3 \\ 4 & -6 \end{array}\right]\,
\boldsymbol{X}\,=\,
\left[\begin{array}{rr} 1 & 4 \\ 2 & 8 \end{array}\right]\,;\qquad\ `
b.) :math:`\ \ \left[\begin{array}{cc} 2 & 1 \\ 2 & 1 \end{array}\right]\,
\boldsymbol{X}\,=\,
\left[\begin{array}{rr} 1 & 1 \\ 1 & 1 \end{array}\right]\,.`

**Exercise 11.** :math:`\\`
Can a square matrix of order 4. whose rows consist of numbers 0, 1, 2, 3
in a certain order be invertible ? 
What would be the answer if the rows consisted of numbers 0, 1, 2, -3 ?

**Exercise 12.** :math:`\,`
Find all matrices which commute with the matrix 
:math:`\ \,\boldsymbol{A}\,=\,
\left[\begin{array}{rr} 1 & 2 \\ 1 & 1 \end{array}\right]\,\in M_2(R),\ `
i.e., find all the matrices :math:`\ \boldsymbol{X}\in M_2(R),\ `
such that :math:`\ \,\boldsymbol{A}\boldsymbol{X}=\boldsymbol{X}\boldsymbol{A}.` :math:`\\`
Observe that the solutions comprise a subalgebra of the matrix algebra :math:`\ M_2(R).` :math:`\\`
Determine dimension of this subalgebra and give an example of its basis.


















 

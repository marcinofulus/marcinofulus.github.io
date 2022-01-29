Matrix Inverse
--------------

In the noncommutative ring :math:`\,M_n(K)\,` of square matrices of size
:math:`\,n\,` over a field :math:`\,K, \\` the identity matrix

.. math::
   
   \boldsymbol{I}_n\ =\  
   \left[\begin{array}{cccc} 
      1      &    0   & \ldots &    0   \\
      0      &    1   & \ldots &    0   \\
      \ldots & \ldots & \ldots & \ldots \\
      0      &    0   & \ldots &    1     
   \end{array}\right]\,.

is the multiplicative neutral element: 
:math:`\ \ \boldsymbol{A}\boldsymbol{I}_n\,=\,
\boldsymbol{I}_n\boldsymbol{A}\,=\,\boldsymbol{A}\ \ `
for all matrices :math:`\ \boldsymbol{A}\in M_n(K)\,.`

.. math:
   
   \boldsymbol{A}\boldsymbol{I}_n\ =\ 
   \boldsymbol{I}_n\boldsymbol{A}\ =\ \boldsymbol{A}\,.

Accordingly, the inverse of a matrix :math:`\,\boldsymbol{A}\in M_n(K)\ ` is 
defined as follows. :math:`\\` 
If there exists a matrix :math:`\boldsymbol{B}\in M_n(K)\,` such that 
:math:`\,\boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}=
\boldsymbol{I}_n\,,` :math:`\\` then :math:`\,\boldsymbol{A}\ ` is 
:math:`\,` *invertible* and :math:`\,\boldsymbol{B}\,` 
is :math:`\,` the *inverse* :math:`\,` of :math:`\,\boldsymbol{A}:\ `
:math:`\ \boldsymbol{B}=\boldsymbol{A}^{-1}.`

A square matrix :math:`\,\boldsymbol{A}\in M_n(K)\,` has at most one inverse.
Indeed, let

.. math::
   
   \boldsymbol{A}\boldsymbol{B}\ =\ 
   \boldsymbol{B}\boldsymbol{A}\ =\ 
   \boldsymbol{I}_n
   \quad\text{and}\quad
   \boldsymbol{A}\boldsymbol{C}\ =\ 
   \boldsymbol{C}\boldsymbol{A}\ =\ 
   \boldsymbol{I}_n\,.

Then, in virtue of associativity of matrix multiplication, we get

.. math::
   
   \boldsymbol{B} = \boldsymbol{B}\boldsymbol{I}_n = 
   \boldsymbol{B}(\boldsymbol{A}\boldsymbol{C}) = 
   (\boldsymbol{B}\boldsymbol{A})\boldsymbol{C} =
   \boldsymbol{I}_n\boldsymbol{C} = \boldsymbol{C}\,.

Thus the inverse of a matrix (if any) is unique.

Not all square matrices are invertible. A necessary (but not sufficient) 
condition of invertibility is that the matrix must not contain zero 
rows nor zero columns:

.. admonition:: Proposition 1. :math:`\,`

   If :math:`\,\boldsymbol{A}\in M_n(K)\,` is an invertible matrix,
   then :math:`\,\boldsymbol{A}\,` has no rows composed purely
   of zeroes nor columns composed purely of zeroes.

**Proof.**

If an :math:`\,i`-th row of the matrix :math:`\,\boldsymbol{A}\,` 
is composed of zeroes only, then for any matrix :math:`\boldsymbol{B}\,`
the :math:`\,i`-th row of the product :math:`\,\boldsymbol{A}\boldsymbol{B}\,`
is composed of zeroes (see the Row Rule of Matrix Multiplication).

If a :math:`\,j`-th column of the matrix :math:`\,\boldsymbol{A}\,` 
is the zero column, then for any matrix :math:`\boldsymbol{B}\,` the 
:math:`\,j`-th column of the product :math:`\,\boldsymbol{B}\boldsymbol{A}\,`
is composed of zeroes (see the Column Rule of Matrix Multiplication).

In both cases there does not exist a matrix 
:math:`\,\boldsymbol{B}\in M_n(K)\,` such that
:math:`\ \boldsymbol{A}\boldsymbol{B} = 
\boldsymbol{B}\boldsymbol{A} = \boldsymbol{I}_n\,.\quad\bullet` 

.. admonition:: Theorem 1. :math:`\,`

   If the matrices :math:`\,\boldsymbol{A},\boldsymbol{B}\in M_n(K)\,`
   are invertible, their product :math:`\,\boldsymbol{A}\boldsymbol{B}\,`
   is also invertible, and :math:`\ \ (\boldsymbol{A}\boldsymbol{B})^{-1}\ =\ 
   \boldsymbol{B}^{-1}\boldsymbol{A}^{-1}\,.`

.. math:
   
   (\boldsymbol{A}\boldsymbol{B})^{-1}\ =\ 
   \boldsymbol{B}^{-1}\boldsymbol{A}^{-1}\,.

**Proof.**

Due to the associativity of matrix multiplication, we get

.. math::

   (\boldsymbol{A}\boldsymbol{B})(\boldsymbol{B}^{-1}\boldsymbol{A}^{-1})\ =\ 
   \boldsymbol{A}(\boldsymbol{B}\boldsymbol{B}^{-1})\boldsymbol{A}^{-1}\ =\ 
   (\boldsymbol{A}\boldsymbol{I}_n)\boldsymbol{A}^{-1}\ =\ 
   \boldsymbol{A}\boldsymbol{A}^{-1}\ =\ \boldsymbol{I}_n\,,

   (\boldsymbol{B}^{-1}\boldsymbol{A}^{-1})(\boldsymbol{A}\boldsymbol{B})\ =\ 
   \boldsymbol{B}^{-1}(\boldsymbol{A}^{-1}\boldsymbol{A})\boldsymbol{B}\ =\ 
   \boldsymbol{B}^{-1}(\boldsymbol{I}_n\boldsymbol{B})\ =\ 
   \boldsymbol{B}^{-1}\boldsymbol{B}\ =\ \boldsymbol{I}_n\,.\quad\bullet

In general, if the matrices 
:math:`\,\boldsymbol{A}_1,\boldsymbol{A}_2,\dots,\boldsymbol{A}_k\in M_n(K)\,`
are invertible, then by induction

.. math::
   
   \left(\boldsymbol{A}_1\boldsymbol{A}_2\dots\boldsymbol{A}_k\right)^{-1}\ =\ 
   \boldsymbol{A}_k^{-1}\dots\boldsymbol{A}_2^{-1}\boldsymbol{A}_1^{-1}\,.

.. :math:`\ `

In Sage the matrix inverse is performed by the method ``inverse()``.

**Example.** :math:`\,` The inverse of the matrix
:math:`\ \ \boldsymbol{A}\ =\ 
\left[\begin{array}{rrr} 
1 & -1 & -2 \\ 0 & 1 & 2 \\ 1 & -1 & -1
\end{array}\right]\,.`

is calculated and verified by the following Sage code:

.. code-block:: python

   sage: A = matrix([[1,-1,-2],
                     [0, 1, 2],
                     [1,-1,-1]])
                     
   sage: B = A.inverse()
   sage: table([[A, '*', B, '=', A*B]])

In the output

.. math::
   
   \left[\begin{array}{rrr}
         1 & -1 & -2 \\
         0 &  1 &  2 \\
         1 & -1 & -1
   \end{array}\right]\ \ *\ \ \left[\begin{array}{rrr}
                                      1 & 1 &  0 \\
                                      2 & 1 & -2 \\
                                     -1 & 0 &  1
                              \end{array}\right]
   \quad = \quad
   \left[\begin{array}{rrr}
         1 & 0 & 0 \\
         0 & 1 & 0 \\
         0 & 0 & 1
   \end{array}\right]

.. the second factor on the left-hand side is the inverse in question.

the matrix :math:`\,\boldsymbol{A}^{-1}\,` in question is given 
as the second factor on the left-hand side.





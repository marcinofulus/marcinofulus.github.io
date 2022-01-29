
LU Factorization of a Matrix
----------------------------

Our aim is to represent a square matrix 
:math:`\,\boldsymbol{A}\in M_n(K)\,` as a product of a lower and an upper
triangular matrices: 
:math:`\ \boldsymbol{A}\ =\ \boldsymbol{L}\,\boldsymbol{U}.`

.. The procedure shall be shown for a particular example. :math:`\,` 

We start out with a particular example. :math:`\,` 
Let :math:`\ \boldsymbol{A}\ =\ \left[\begin{array}{rrr}
2 &  1 & 1 \\
4 & -6 & 0 \\
-2 &  7 & 2\end{array}\right]\in M_n(Q)\,.`

The Gauss elimination, which converts :math:`\,\boldsymbol{A}\,`
to an upper triangular matrix :math:`\,\boldsymbol{U},\ `
is composed of the following consecutive elementary operations:

1. | From the 2nd row of matrix :math:`\,\boldsymbol{A}\,` 
     we subtract the doubled 1st row.
   | This elementary operation :math:`\,O_3(1,0,-2)\,` is represented 
     by the elementary matrix :math:`\,\boldsymbol{E}^{(1)}=
     \boldsymbol{E}_3(1,0,-2).\ ` The result is 
     :math:`\ \boldsymbol{A}_1=\boldsymbol{E}^{(1)}\boldsymbol{A}:`
   
   .. math::

      \boldsymbol{A}_1\ =\       
      \left[\begin{array}{rrr} 1 & 0 & 0 \\
                              -2 & 1 & 0 \\
                               0 & 0 & 1\end{array}\right]\ 
      \left[\begin{array}{rrr} 2 &  1 & 1 \\
                               4 & -6 & 0 \\
                              -2 &  7 & 2\end{array}\right]\ =\ 
      \left[\begin{array}{rrr} 2 &  1 &  1 \\
                               0 & -8 & -2 \\
                              -2 &  7 &  2\end{array}\right]\,.

2. | To the 3rd row of matrix :math:`\,\boldsymbol{A}_1\,` we add the 1st row.
   | This operation :math:`\,O_3(2,0,1)\,` is represented by the matrix
     :math:`\,\boldsymbol{E}^{(2)}=\boldsymbol{E}_3(2,0,1).\,`
   | The result is :math:`\ \boldsymbol{A}_2=
     \boldsymbol{E}^{(2)}\boldsymbol{A}_1:`
   
   .. math::
      
      \boldsymbol{A}_2\ =\       
      \left[\begin{array}{rrr} 1 & 0 & 0 \\
                               0 & 1 & 0 \\
                               1 & 0 & 1\end{array}\right]\ 
      \left[\begin{array}{rrr} 2 &  1 &  1 \\
                               0 & -8 & -2 \\
                              -2 &  7 &  2\end{array}\right]\ =\ 
      \left[\begin{array}{rrr} 2 &  1 &  1 \\
                               0 & -8 & -2 \\
                               0 &  8 &  3\end{array}\right]\,.

3. | To the 3rd row of matrix :math:`\,\boldsymbol{A}_2\,` we add the 2nd row.
   | This operation :math:`\,O_3(2,1,1)\,` is represented by the matrix
     :math:`\,\boldsymbol{E}^{(3)}=\boldsymbol{E}_3(2,1,1).\,`
   | The result is the upper triangular matrix
     :math:`\ \boldsymbol{U}=\boldsymbol{E}^{(3)}\boldsymbol{A}_2:`

   .. math::
      
      \boldsymbol{U}\ =\       
      \left[\begin{array}{rrr} 1 & 0 & 0 \\
                               0 & 1 & 0 \\
                               0 & 1 & 1\end{array}\right]\ 
      \left[\begin{array}{rrr} 2 &  1 &  1 \\
                               0 & -8 & -2 \\
                               0 &  8 &  3\end{array}\right]\ =\ 
      \left[\begin{array}{rrr} 2 &  1 &  1 \\
                               0 & -8 & -2 \\
                               0 &  0 &  1\end{array}\right]\,.

Gathering together the partial results, we may write:
   
.. math::
   :label: UEEEA
   
   \boldsymbol{U}\ =\ 
   \boldsymbol{E}^{(3)}\boldsymbol{E}^{(2)}\boldsymbol{E}^{(1)}\boldsymbol{A}\,.

In each of the the three applied elementary operations 
a multiple of an upper row (with a lesser index)
has been added to a lower row (with a greater index).
The corresponding elementary matrices, 
obtained by application of these operations to the identity matrix,
are therefore lower triangular matrices. 
So are their products and inverses.

.. from the identity matrix by application of the same operations,

Thus the Eq. :eq:`UEEEA` can be rewritten as

.. math::
   
   \boldsymbol{A}\ =\ \boldsymbol{L}\,\boldsymbol{U}

where
:math:`\quad\boldsymbol{L}\ \ =\ \ \left[\,
\boldsymbol{E}^{(3)}\boldsymbol{E}^{(2)}\boldsymbol{E}^{(1)}
\right]^{-1}\ =\ \ \ 
\left[\boldsymbol{E}^{(1)}\right]^{-1}
\left[\boldsymbol{E}^{(2)}\right]^{-1}
\left[\boldsymbol{E}^{(3)}\right]^{-1}\quad`
is a lower, :math:`\\`
and :math:`\ \boldsymbol{U}\ ` :math:`\,` - :math:`\,`  
an upper triangular matrix.

.. math:
   
   \boldsymbol{L}\ \ =\ \ \left[\,
   \boldsymbol{E}^{(3)}\boldsymbol{E}^{(2)}\boldsymbol{E}^{(1)}
   \right]^{-1}\ =\ \ \ 
   \left[\boldsymbol{E}^{(1)}\right]^{-1}
   \left[\boldsymbol{E}^{(2)}\right]^{-1}
   \left[\boldsymbol{E}^{(3)}\right]^{-1}

The matrix :math:`\ \boldsymbol{L}\ ` can be calculated by hand:

.. math::

   \boldsymbol{E}^{(3)}\boldsymbol{E}^{(2)}\boldsymbol{E}^{(1)}\ =\ 
   \boldsymbol{E}_3(2,1,1)\,\cdot\,
   \boldsymbol{E}_3(2,0,1)\,\cdot\,
   \boldsymbol{E}_3(1,0,-2)\ =

   =\ 
   \left[\begin{array}{rrr} 1 & 0 & 0 \\
                            0 & 1 & 0 \\
                            0 & 1 & 1\end{array}\right]\,\cdot\,
   \left[\begin{array}{rrr} 1 & 0 & 0 \\
                            0 & 1 & 0 \\
                            1 & 0 & 1\end{array}\right]\,\cdot\, 
   \left[\begin{array}{rrr} 1 & 0 & 0 \\
                           -2 & 1 & 0 \\
                            0 & 0 & 1\end{array}\right]\ =\  
   \left[\begin{array}{rrr} 1 & 0 & 0 \\
                           -2 & 1 & 0 \\
                           -1 & 1 & 1\end{array}\right]\,;
   
   \boldsymbol{L}\quad =\quad 
   \left[\begin{array}{rrr} 1 & 0 & 0 \\
                           -2 & 1 & 0 \\
                           -1 & 1 & 1\end{array}\right]
   ^{-1}\ =\quad 
   \left[\begin{array}{rrr} 1 &  0 & 0 \\ 
                             2 &  1 & 0 \\ 
                            -1 & -1 & 1\end{array}\right]\,.

or using the Sage code:

.. code-block:: python
   
   sage: E1 = elementary_matrix(QQ, 3, row1=1, row2=0, scale=-2)
   sage: E2 = elementary_matrix(QQ, 3, row1=2, row2=0, scale= 1)
   sage: E3 = elementary_matrix(QQ, 3, row1=2, row2=1, scale= 1)
   sage: E = E3*E2*E1
   sage: L = E.inverse(); L

   [ 1  0  0]
   [ 2  1  0]
   [-1 -1  1]

.. math:
   
   \left(\begin{array}{rrr}  1 &  0 & 0 \\ 
                             2 &  1 & 0 \\ 
                            -1 & -1 & 1\end{array}\right)

   \;

Finally, the decomposition :math:`\,\boldsymbol{A}=
\boldsymbol{L}\boldsymbol{U}\ ` of the matrix :math:`\,\boldsymbol{A}\,`
into a product of a lower and upper triangular matrices, reads as follows:

.. math::
   :label: A_LU_ex

   \blacktriangleright\quad   
   \left[\begin{array}{rrr} 2 &  1 & 1 \\
                            4 & -6 & 0 \\
                           -2 &  7 & 2\end{array}\right]\ \ =\ \ 
   \left[\begin{array}{rrr}  1 &  0 & 0 \\ 
                             2 &  1 & 0 \\ 
                            -1 & -1 & 1\end{array}\right]
   \ \cdot\ 
   \left[\begin{array}{rrr} 2 &  1 &  1 \\
                            0 & -8 & -2 \\
                            0 &  0 &  1\end{array}\right]\,.

.. The above-mentioned procedure is not directly applicable 
   when the upper left-most coefficient :math:`\,a_{11}\,` vanishes.
   Then, the operation on rows should be preluded by their transposition,
   which however involves a non-triangular elementary matrix.
   In such a case the procedure would be applied to the matrix
   :math:`\,\boldsymbol{P}\boldsymbol{A},\,` where :math:`\,\boldsymbol{P}\,`
   is the matrix of an appropriate permutation: 
   :math:`\,\boldsymbol{P}\boldsymbol{A}=\boldsymbol{L}\,\boldsymbol{U}.`

The above-mentioned procedure would not be directly applicable, 
if the upper left-most coefficient :math:`\,a_{11}\,` vanished.
Then, the operations on rows should be preceded by their permutation,
which however involves a non-triangular elementary matrix.
In such a case the procedure would be applied to the matrix
:math:`\,\boldsymbol{P}\boldsymbol{A},\,` where :math:`\,\boldsymbol{P}\,`
is the matrix of an appropriate permutation: 
:math:`\,\boldsymbol{P}\boldsymbol{A}=\boldsymbol{L}\,\boldsymbol{U}.`

.. math:
   :label: PA_LU
   
   \boldsymbol{P}\boldsymbol{A}=\boldsymbol{L}\boldsymbol{U}.

In Sage the decomposition is performed by the method ``LU()``, [1]_ :math:`\ `
applicable to a :math:`\,m \times n\,` 
rectangular matrix :math:`\,\boldsymbol{A}.\ ` By default, the output is 
a triplet :math:`\,(\boldsymbol{P},\boldsymbol{L},\boldsymbol{U}),\ `
where :math:`\,\boldsymbol{L}\,` is a :math:`\,m \times m\,` 
lower triangular matrix with all diagonal elements equal to one, 
:math:`\,\boldsymbol{U}\,` is a :math:`\,m \times n\,` upper diagonal 
matrix and :math:`\,\boldsymbol{P}\,` is a :math:`\,m \times m\,` 
permutation matrix such that 
:math:`\,\boldsymbol{A}\ =\ \boldsymbol{P}\,\boldsymbol{L}\,\boldsymbol{U}\,.`

.. math:
   :label: A_PLU
   
   \boldsymbol{A}\ =\ \boldsymbol{P}\boldsymbol{L}\boldsymbol{U}\,.

A direct application of the method ``LU()`` to the matrix 
:math:`\,\boldsymbol{A}\,` from our example

.. code-block: python
   
   sage: A = matrix(QQ, [[ 2, 1, 1], 
                         [ 4,-6, 0],
                         [-2, 7, 2]])

   sage: (P,L,U) = A.LU()

   sage: table([[A, '=', P, '$\\cdot$', L, '$\\cdot$', U]])

.. sagecellserver::
   
   A = matrix(QQ, [[ 2, 1, 1], 
                   [ 4,-6, 0],
                   [-2, 7, 2]])

   (P,L,U) = A.LU()

   table([[A, '=', P, '$\\cdot$', L, '$\\cdot$', U]])
   
provides a decomposition different from :eq:`A_LU_ex`:

.. math::
   
   \left[\begin{array}{rrr}
       2 &  1 & 1 \\
       4 & -6 & 0 \\
      -2 &  7 & 2
   \end{array}\right]\ \ =\ \ 
   \left[\begin{array}{rrr}
       0 & 1 & 0 \\
       1 & 0 & 0 \\
       0 & 0 & 1
   \end{array}\right]\ \cdot\ 
   \left[\begin{array}{rrr}
       1 & 0 & 0 \\
       \textstyle{1\over 2} & 1 & 0 \\
      -\textstyle{1\over 2} & 1 & 1
   \end{array}\right]\ \cdot\  
   \left[\begin{array}{rrr}
      4 & -6 & 0 \\
      0 &  4 & 1 \\
      0 &  0 & 1
   \end{array}\right]\,.

To obtain the result :eq:`A_LU_ex`, the 'nonzero' pivoting strategy
is to be assumed:

.. sagecellserver::
   
   A = matrix(QQ, [[ 2, 1, 1], 
                   [ 4,-6, 0],
                   [-2, 7, 2]])

   (P,L,U) = A.LU(pivot='nonzero')

   table([[A, '=', P, '$\\cdot$', L, '$\\cdot$', U]])

Now the output reads:

.. math::
   
   \left[\begin{array}{rrr}
       2 &  1 & 1 \\
       4 & -6 & 0 \\
      -2 &  7 & 2
   \end{array}\right]\ \ =\ \ 
   \left[\begin{array}{rrr}
       1 & 0 & 0 \\
       0 & 1 & 0 \\
       0 & 0 & 1
   \end{array}\right]\ \cdot\ 
   \left[\begin{array}{rrr}
          1 &  0 & 0 \\
          2 &  1 & 0 \\
         -1 & -1 & 1
   \end{array}\right]\ \cdot\  
   \left[\begin{array}{rrr}
         2 &  1 &  1 \\
         0 & -8 & -2 \\
         0 &  0 &  1
   \end{array}\right]\,.

:math:`\;`

.. note::
   
   The method ``LU()`` has been designed for use with exact rings,
   e.g. the field ``QQ`` of rational numbers.
   For numerical results,  the base ring should be converted to
   the field ``RDF`` of real numbers with double precision or to
   the field ``CDF`` of complex numbers with double precision.


.. [1] http://doc.sagemath.org/html/en/reference/matrices/sage/matrix/matrix2.html


  




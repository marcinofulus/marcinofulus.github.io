
Practical Calculation of Determinants
-------------------------------------

Elementary Operations
~~~~~~~~~~~~~~~~~~~~~

Row elementary operations convert a square matrix to the echelon, 
i.e. upper triangular, form. The determinant of such a transformed
matrix is simply the product of its diagonal elements. Application of
elementary operations may be therefore a useful method of calculating
determinants. However, one must take into account that elementary operations 
upon rows (columns) of a matrix can modify its determinant. Namely:

1. Transposition of any two rows (columns) changes the sign of the determinant.

2. Multiplying a row (column) by a non-zero scalar multiplies the determinant
   by that scalar.

3. Adding to a row a multiple of another row, as well as adding to a column
   a multiple of another column, does not change the determinant of the matrix.
   
**Example 1.** 
:math:`\qquad\left|\begin{array}{ccccc}
1 & 1 & 1 & 1 & 1 \\
1 & 2 & 1 & 1 & 1 \\
1 & 1 & 3 & 1 & 1 \\
1 & 1 & 1 & 4 & 1 \\
1 & 1 & 1 & 1 & 5
\end{array}
\right|\ \ = \ \ 
\left|\begin{array}{ccccc}
1 & 1 & 1 & 1 & 1 \\
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 2 & 0 & 0 \\
0 & 0 & 0 & 3 & 0 \\
0 & 0 & 0 & 0 & 4
\end{array}
\right|\ \ =\ \ 24\,.`

Operations performed on rows
:math:`\ \boldsymbol{R}_1,\,\boldsymbol{R}_2,\,\boldsymbol{R}_3,\,
\boldsymbol{R}_4,\,\boldsymbol{R}_5:\quad 
\boldsymbol{R}_i = \boldsymbol{R}_i - \boldsymbol{R}_1\,,\quad i = 2,3,4,5.`

.. math:
   
   \left|\begin{array}{ccccc}
         1 & 1 & 1 & 1 & 1 \\
         1 & 2 & 1 & 1 & 1 \\
         1 & 1 & 3 & 1 & 1 \\
         1 & 1 & 4 & 4 & 1 \\
         1 & 1 & 1 & 1 & 5
         \end{array}
   \right|\ \ = \ \ 
   \left|\begin{array}{ccccc}
         1 & 1 & 1 & 1 & 1 \\
         0 & 1 & 0 & 0 & 0 \\
         0 & 0 & 2 & 0 & 0 \\
         0 & 0 & 0 & 3 & 0 \\
         0 & 0 & 0 & 0 & 4
         \end{array}
   \right|\ \ =\ \ 24\,.

**Example 2.**

.. math::
   
   \left|\begin{array}{rrrr}
          1 &  2 & 1 &  1 \\
          2 &  3 & 2 &  3 \\
         -1 &  0 & 1 & -1 \\
         -2 & -1 & 4 & 0
         \end{array}
   \right|\ =\ 
   \left|\begin{array}{rrrr}
          1 &  2 & 1 & 1 \\
          0 & -1 & 0 & 1 \\
          0 &  2 & 2 & 0 \\
          0 &  3 & 6 & 2
         \end{array}
   \right|\ =\ 
   \left|\begin{array}{rrrr}
          1 &  2 & 1 & 1 \\
          0 & -1 & 0 & 1 \\
          0 &  0 & 2 & 2 \\
          0 &  0 & 6 & 5
         \end{array}
   \right|\ =\ 
   \left|\begin{array}{rrrr}
          1 &  2 & 1 &  1 \\
          0 & -1 & 0 &  1 \\
          0 &  0 & 2 &  2 \\
          0 &  0 & 0 & -1
         \end{array}
   \right|\ =\ 2\,.

Operations performed on rows 
:math:`\ \boldsymbol{R}_1,\,\boldsymbol{R}_2,\,
\boldsymbol{R}_3,\,\boldsymbol{R}_4:`

:math:`\ 
\boldsymbol{R}_2 = \boldsymbol{R}_2 - 2\,\boldsymbol{R}_1,\ \ 
\boldsymbol{R}_3 = \boldsymbol{R}_3 + \boldsymbol{R}_1,\ \ 
\boldsymbol{R}_4 = \boldsymbol{R}_4 + 2\,\boldsymbol{R}_1\,;`

:math:`\ 
\boldsymbol{R}_3 = \boldsymbol{R}_3 + 2\,\boldsymbol{R}_2,\ \ 
\boldsymbol{R}_4 = \boldsymbol{R}_4 + 3\,\boldsymbol{R}_2\,;`

:math:`\ \boldsymbol{R}_4 = \boldsymbol{R}_4 - 3\,\boldsymbol{R}_3\,.`

**Example 3.** :math:`\ \ ` 
Making use of the equalities
:math:`\quad\left\{\ \,
\begin{array}{l}
1798\ =\ 31\,\cdot\,58 \\ 2139\ =\ 31\,\cdot\,69 \\
3255\ =\ 31\,\cdot\,105 \\ 4867\ =\ 31\,\cdot\,157
\end{array}\right.`

without evaluating the determinant, validate that
:math:`\quad\left|\begin{array}{llll}
1 & 7 & 9 & 8 \\
2 & 1 & 3 & 9 \\
3 & 2 & 5 & 5 \\
4 & 8 & 6 & 7
\end{array}
\right|\quad` is also divisible by 31.

.. math:
   
   1798\ =\ 31\,\cdot\,58

   2139\ =\ 31\,\cdot\,69

   3255\ =\ 31\,\cdot\,105

   4867\ =\ 31\,\cdot\,157

   \left|\begin{array}{llll}
          1 & 7 & 9 & 8 \\
          2 & 1 & 3 & 9 \\
          3 & 2 & 5 & 5 \\
          4 & 8 & 6 & 7
         \end{array}
   \right|

**Solution.** :math:`\,`

The operation
:math:`\ \,\boldsymbol{C}_4\ =\  
1000\,\cdot\,\boldsymbol{C}_1\,+\,100\,\cdot\,\boldsymbol{C}_2\,+\,
10\,\cdot\,\boldsymbol{C}_3\,+\,\boldsymbol{C}_4\ \,` on columns 
:math:`\ \boldsymbol{C}_1,\,\boldsymbol{C}_2,\,
\boldsymbol{C}_3,\,\boldsymbol{C}_4\ ` 
does not change the value of the determinant. As a result we obtain

.. math::
   
   \left|\begin{array}{llll}
          1 & 7 & 9 & 8 \\
          2 & 1 & 3 & 9 \\
          3 & 2 & 5 & 5 \\
          4 & 8 & 6 & 7
         \end{array}
   \right|\ \ =\ \ 
   \left|\begin{array}{llll}
          1 & 7 & 9 & 1798 \\
          2 & 1 & 3 & 2139 \\
          3 & 2 & 5 & 3255 \\
          4 & 8 & 6 & 4867
         \end{array}
   \right|\ \ =\ \ 
   \left|\begin{array}{llll}
          1 & 7 & 9 & 31\,\cdot\,58 \\
          2 & 1 & 3 & 31\,\cdot\,69 \\
          3 & 2 & 5 & 31\,\cdot\,105 \\
          4 & 8 & 6 & 31\,\cdot\,157
         \end{array}
   \right|\ \ =\ \ 
   31\ \cdot\ 
   \left|\begin{array}{llll}
          1 & 7 & 9 & 58 \\
          2 & 1 & 3 & 69 \\
          3 & 2 & 5 & 105 \\
          4 & 8 & 6 & 157
         \end{array}
   \right|\,.

The Laplace Expansion
~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Definition.
   
   A *minor* of size :math:`\,k\ ` of a matrix 
   :math:`\,\boldsymbol{A}\in M_{m\times n}(K)\ `
   is the determinant of the square matrix obtained from 
   :math:`\,\boldsymbol{A}\ ` by removing some selected
   :math:`\ m-k\ ` rows :math:`\,` and
   :math:`\ n-k\ ` columns :math:`\ (1\leq k \leq m,n).`

:math:`\,` 
   
**Example 4.** :math:`\ ` Let
:math:`\ \ \boldsymbol{A}\ \,=\ \,
\left[\begin{array}{rrrrr}
-2 & 0 & 3 & 4 & 1 \\ 
4 & 7 & 6 & -2 & 0 \\ 
3 & 3 & 5 & 1 & 1 \\ 
-1 & 2 & 3 & 0 & 4
\end{array}\right]\in M_{4\times 5}(Q)\,.`

Removing the third row and the second and fourth column we get a minor
of size three:

.. math::
   
   \left|\begin{array}{rrr}
         -2 & 3 & 1 \\ 
          4 & 6 & 0 \\
         -1 & 3 & 4
         \end{array}
   \right|\ \ =\ \ 
   3\ \,
   \left|\begin{array}{rrr}
         -2 & 1 & 1 \\ 
          4 & 2 & 0 \\
         -1 & 1 & 4
         \end{array}
   \right|\ \ =\ \ 
   6\ \,
   \left|\begin{array}{rrr}
         -2 & 1 & 1 \\ 
          2 & 1 & 0 \\
         -1 & 1 & 4
         \end{array}
   \right|\ \ =\ \ 
   6\ \,(-13)\ \ =\ \ -78\,.

:math:`\,` 

.. admonition:: Definition. 

   :math:`\,`
   
   Suppose we have a square matrix 
   :math:`\ \boldsymbol{A}\,=\,[a_{ij}]_{n\times n}\in M_{n}(K).` :math:`\\`
   Select an element :math:`\ a_{ij}\ ` and delete the :math:`\,i`-th row
   and the :math:`\,j`-th column of :math:`\ \boldsymbol{A}.` :math:`\\`
   The obtained minor :math:`\,M_{ij}\,` 
   multiplied by the sign factor :math:`\ (-1)^{i+j}\ ` is termed :math:`\\`
   the *cofactor of the element* :math:`\ a_{ij}\ ` *in the matrix*
   :math:`\ \boldsymbol{A}\,` or shortly the :math:`\ i,j\ ` *cofactor
   of* :math:`\,\boldsymbol{A},` :math:`\\`
   and is denoted by :math:`\ A_{ij}:`

   .. math::
      
      A_{ij}\ \,:\,=\ \,(-1)^{i+j}\,M_{ij}\,,\qquad i,j=1,2,\ldots,n.

:math:`\,`

**Example 5.** :math:`\ ` Let
:math:`\ \ \boldsymbol{A}\ \,=\ \,
\left[\begin{array}{rrrr}
2 & 1 & 0 & 6 \\ 3 & -1 & 7 & 4 \\ 1 & 0 & 5 & 2 \\ -1 & -2 & 1 & 5
\end{array}\right]\in M_4(Q)\,.`

The cofactors of the elements
:math:`\ a_{12} = 1\ ` and :math:`\ a_{33} = 5\ ` are:

.. math::
   
   A_{12}\ =\ (-1)^{1+2}\ 
   \left|\begin{array}{rrr}
         3 & 7 & 4 \\ 
         1 & 5 & 2 \\
        -1 & 1 & 5
         \end{array}
   \right|\ \ =\ \ -44\,;
   \quad
   A_{33}\ =\ (-1)^{3+3}\ 
   \left|\begin{array}{rrr}
         2 &  1 & 6 \\ 
         3 & -1 & 4 \\
        -1 & -2 & 5
         \end{array}
   \right|\ \ =\ \ -55\,.

It is worth noting that the cofactor :math:`\ A_{ij}\,` of an element 
:math:`\,a_{ij}\,` does not depend on that element nor on any element 
in the :math:`\,i`-th row or in the :math:`\,j`-th column of the matrix.
:math:`\\`

.. admonition:: Theorem 4. :math:`\,` The Laplace Expansion. :math:`\\`

   The determinant of a matrix 
   :math:`\ \boldsymbol{A}\,=\,[a_{ij}]_{n\times n}\in M_{n}(K)\ ` 
   is given by: :math:`\\`
   
   1. the sum of products of consecutive elements of a selected :math:`\,i`-th 
      row by the cofactors of these elements (expansion of the determinant
      along the :math:`\,i`-th row):

      .. math::
         :label: Lap_exp_verse
         
         \det\boldsymbol{A}\ =\ 
         a_{i1}\,A_{i1}\,+\,a_{i2}\,A_{i2}\,+\,\dots\,+\,a_{in}\,A_{in}\,,
         \quad i=1,2,\ldots,n.

   2. the sum of products of consecutive elements of a selected :math:`\,j`-th
      column by the cofactors of these elements (expansion of the determinant
      along the :math:`\,j`-th column):
      
      .. math::
         :label: Lap_exp_col
         
         \det\boldsymbol{A}\ =\ 
         a_{1j}\,A_{1j}\,+\,a_{2j}\,A_{2j}\,+\,\dots\,+\,a_{nj}\,A_{nj}\,,
         \quad j=1,2,\ldots,n.

Interestingly enough, the Laplace expansion may be performed along *any*
row or *any* column: the result will be always the same.

To prove the Laplace expansion it suffices to check that the r-h-sides
of Equations :eq:`Lap_exp_verse` and :eq:`Lap_exp_col` fulfill the 
requirements of the axiomatic definition of the determinant.

As a method of computing determinants, the Laplace expansion is the most
efficient when in a row or in a column there is only one non-zero element 
(this form may be achieved by elementary operations).
Thus a practical calculation of a determinant is performed in two stages:

* use of elementary operations to convert the matrix into the form in which 
  in a row :math:`\\` (or in a column) there is only one non-zero element;
* application of the Laplace expansion along that row (or that column).

**Example 6.** :math:`\,` 
The applied operations are described beneath the calculations. 

.. math::
   
   \left|\begin{array}{rrrr}
         2 & -5 &  1 & 2 \\
        -3 &  7 & -1 & 4 \\
         5 & -9 &  2 & 7 \\
         4 & -6 &  1 & 2
         \end{array}
   \right|\ \ =\ \ 
   \left|\begin{array}{rrrr}
         2 & -5 &  1 & 2 \\
        -1 &  2 &  0 & 6 \\
         1 &  1 &  0 & 3 \\
         2 & -1 &  0 & 0
         \end{array}
   \right|\ \ =\ \ 
   \left|\begin{array}{rrr}
        -1 &  2 &  6 \\
         1 &  1 &  3 \\
         2 & -1 &  0 \\
         \end{array}
   \right|\ \ =\ \ 
   3\ \ 
   \left|\begin{array}{rrr}
        -1 &  2 &  2 \\
         1 &  1 &  1 \\
         2 & -1 &  0 \\
         \end{array}
   \right|\,;

Operations on rows :math:`\ \boldsymbol{R}_1,\,\boldsymbol{R}_2,\,
\boldsymbol{R}_3,\,\boldsymbol{R}_4:`
:math:`\boldsymbol{R}_2 = \boldsymbol{R}_2 + \boldsymbol{R}_1,\ \ 
\boldsymbol{R}_3 = \boldsymbol{R}_3 - 2\,\boldsymbol{R}_1,\ \ 
\boldsymbol{R}_4 = \boldsymbol{R}_4 - \boldsymbol{R}_1.`
Laplace expansion along the 3rd column.
Number  :math:`\ 3\ ` pulled out of the 3rd column. 

.. math::

   \left|\begin{array}{rrr}
        -1 &  2 &  2 \\
         1 &  1 &  1 \\
         2 & -1 &  0 \\
         \end{array}
   \right|\ \ =\ \ 
   \left|\begin{array}{rrr}
        -1 &  3 &  3 \\
         1 &  0 &  0 \\
         2 & -3 & -2 \\
         \end{array}
   \right|\ \ =\ \
   3\ \ 
   \left|\begin{array}{rrr}
        -1 &  1 &  3 \\
         1 &  0 &  0 \\
         2 & -1 & -2 \\
         \end{array}
   \right|\ \ =\ \ 
   -\ 3\ \ 
   \left|\begin{array}{rr}
         1 &  3 \\
        -1 & -2
         \end{array}
   \right|\ \ =\ \ -\ 3\,;

Operations performed on columns
:math:`\ \boldsymbol{C}_1,\,\boldsymbol{C}_2,\,\boldsymbol{C}_3:\ ` 
:math:`\boldsymbol{C}_2 = \boldsymbol{C}_2 - \boldsymbol{C}_1,\ \ 
\boldsymbol{C}_3 = \boldsymbol{C}_3 - \boldsymbol{C}_1.\ ` :math:`\\` 
Number :math:`\ 3\ ` pulled out of the 2nd column. 
Laplace expansion along the 2nd row. :math:`\\` 

Finally:
:math:`\qquad\left|\begin{array}{rrrr}
2 & -5 &  1 & 2 \\ -3 &  7 & -1 & 4 \\ 5 & -9 &  2 & 7 \\ 4 & -6 &  1 & 2
\end{array}\right|\ \ =\ \ 
3\ \ \left|\begin{array}{rrr} 
-1 &  2 &  2 \\ 1 &  1 &  1 \\ 2 & -1 &  0 \end{array}\right|\ \ =\ \ 
-\ 9\,. \\`

In Sage a determinant of a given square matrix is computed by the function
(method) ``determinant()``, in short ``det()``. We shall call it to calculate
the determinant from the above example and to confirm the theorem on
determinant of a transpose matrix:

.. code-block:: python
   
   sage: A = matrix(QQ,[[ 2,-5, 1, 2],
                        [-3, 7,-1, 4],
                        [ 5,-9, 2, 7],
                        [ 4,-6, 1, 2]])

   sage: det_A  = A.determinant()

   # Shorthand notation for a determinant of a transposed matrix:
   sage: det_At = A.T.det()

   sage: print "det A =", det_A; det_A==det_At

   det A = -9
   True 















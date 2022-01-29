
Applications of Determinants
----------------------------

.. _twtest:

Examination of the Linear Dependence of Vectors
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


.. admonition:: Theorem 5. :math:`\\`
   

   The determinant of a matrix vanishes if, and only if,
   its columns are linearly dependent.

   Thus, if :math:`\ \boldsymbol{A}\,=\,
   [\,\boldsymbol{A}_1\,|\;\boldsymbol{A}_2\,|\,\dots\,|\,
   \boldsymbol{A}_n\,]\,\in\,M_n(K),\ \,` then

   .. math::
      
      \det{\boldsymbol{A}}\,=\,0\qquad\Leftrightarrow\qquad
      \boldsymbol{A}_1,\boldsymbol{A}_2,\dots,\boldsymbol{A}_n\ \ 
      \text{are linearly dependent}.

**Proof.** :math:`\,` Let :math:`\ \boldsymbol{A}\,=\,
[\,\boldsymbol{A}_1\,|\;\boldsymbol{A}_2\,|\,\dots\,|\,
\boldsymbol{A}_n\,]\,\in\,M_n(K).`

:math:`\Leftarrow\ :\ \ `
We assume that the columns 
:math:`\ \boldsymbol{A}_1,\boldsymbol{A}_2,\dots,\boldsymbol{A}_n\ `
are linearly dependent.

Then one of the columns is a linear combination of the remaining ones. 
Let for example

.. math::
   
   \boldsymbol{A}_n\ =\ 
   \lambda_1\,\boldsymbol{A}_1\,+\;\lambda_2\,\boldsymbol{A}_2\,+\;\ldots\,+
   \lambda_{n-1}\,\boldsymbol{A}_{n-1}\,.

On the basis of Postulates :math:`\,` 1. :math:`\,` and 
:math:`\,` 2. :math:`\,` of the axiomatic definition, we obtain

.. math::
   
   \det{\boldsymbol{A}}\ \ =\ \ \det{\,[\,
   \boldsymbol{A}_1\,|\;\boldsymbol{A}_2\,|\,\dots\,|\,\boldsymbol{A}_{n-1}\,|\; 
   \lambda_1\,\boldsymbol{A}_1\,+\,\lambda_2\,\boldsymbol{A}_2\,+\,\ldots\,+\,
   \lambda_{n-1}\,\boldsymbol{A}_{n-1}\,]}\ \ =

   =\ \ 
   \lambda_1\,\det{\,[\,\boldsymbol{A}_1\,|\;\boldsymbol{A}_2\,|\,\dots\,|\,
   \boldsymbol{A}_{n-1}\,|\,\boldsymbol{A}_1\,]}\ \ +

   +\ \ 
   \lambda_2\,\det{\,[\,\boldsymbol{A}_1\,|\;\boldsymbol{A}_2\,|\,\dots\,|\,
   \boldsymbol{A}_{n-1}\,|\,\boldsymbol{A}_2\,]}\ \ +

   \ldots

   +\ \ 
   \lambda_{n-1}\,\det{\,[\,\boldsymbol{A}_1\,|\;\boldsymbol{A}_2\,|\,\dots\,|\,
   \boldsymbol{A}_{n-1}\,|\,\boldsymbol{A}_{n-1}\,]}\,.

Each out of the :math:`\,n-1\,` components in the last sum
is proportional to a determinant with two identical columns.
Thus, recalling Property IIIa., we infer that :math:`\ \det\boldsymbol{A} = 0.` 

:math:`\,`

:math:`\Rightarrow\ :\ \ `
We assume that the columns 
:math:`\ \boldsymbol{A}_1,\boldsymbol{A}_2,\dots,\boldsymbol{A}_n\ `
of the matrix :math:`\ \boldsymbol{A}\,` are linearly independent.

The number :math:`\,n\,` of linearly independent columns being equal 
to the dimension of the vector space :math:`\,K^n\ ` they belong to,
the aforesaid columns form a basis of that space.
Thus every vector in :math:`\,K^n\ ` can be uniquely represented as 
a linear combination of 
:math:`\ \boldsymbol{A}_1,\boldsymbol{A}_2,\dots,\boldsymbol{A}_n\,.\ `
 
In particular, the vectors :math:`\,\boldsymbol{e}_j\ `
of the standard basis of the space :math:`\,K^n\ ` may be written as

.. math::
   :label: eqn_ej
   
   \boldsymbol{e}_j\ \ =\ \ \sum_{s\,=\,1}^n\ b_{sj}\,\boldsymbol{A}_s\,,
   \qquad\text{where}\quad\boldsymbol{e}_j\ =\ 
   \left[\begin{array}{c} 0 \\ \dots \\ 1 \\ \dots \\ 0 \end{array}\right]
   \leftarrow j\,,\qquad j=1,2,\ldots,n.

Equations :eq:`eqn_ej` assert that the :math:`\,j`-th column of the identity
matrix :math:`\,\boldsymbol{I}_n = 
[\,\boldsymbol{e}_1\,|\;\boldsymbol{e}_2\,|\,\dots\,|\,\boldsymbol{e}_n\,]\ `
is a linear combination of columns of matrix :math:`\,\boldsymbol{A},\ `
with coefficients taken from the :math:`\,j`-th column of matrix 
:math:`\,\boldsymbol{B}=[b_{ij}]_{n\times n}.\ `
According to the Column Rule of Matrix Multiplication, this means that
:math:`\ \boldsymbol{I}_n = \boldsymbol{A}\boldsymbol{B}.\ ` 

Using the theorem on the determinant of a product of matrices, we may write
 
.. math::

   \det{\boldsymbol{A}}\,\cdot\,\det{\boldsymbol{B}}\ \ =\ \ 
   \det{\,(\boldsymbol{A}\boldsymbol{B})}\ \ =\ \ 
   \det{\boldsymbol{I}_n}\ =\ 1\,.

Hence :math:`\ \det{\boldsymbol{A}}\ne 0,\ \,` 
because if there was :math:`\ \det\boldsymbol{A} = 0,\ `
it would be :math:`\ \det\boldsymbol{A}\,\cdot\,\det\boldsymbol{B}\,=\,0.` 

So we have proved that

.. math::
   
   \text{columns}\ \ \boldsymbol{A}_1,\boldsymbol{A}_2,\dots,\boldsymbol{A}_n\ \ 
   \text{are linearly independent}
   \quad\Rightarrow\quad
   \det{\boldsymbol{A}}\ne 0\,,

which is equivalent, by contraposition, to the statement

.. math::
   
   \det\boldsymbol{A}\ =\ 0
   \quad\Rightarrow\quad
   \text{columns}\ \ \boldsymbol{A}_1,\boldsymbol{A}_2,\dots,\boldsymbol{A}_n\ \ 
   \text{are linearly dependent}\,.\quad\bullet

**Notes and Comments.**

* In view of Theorem 3. on invariance of the determinant under matrix' 
  transpose, :math:`\\` Theorem 5. may be rewritten in the row version:

  The determinant of a matrix vanishes if, and only if,
  its rows are linearly dependent.

* Equations :eq:`eqn_ej` pertain to the situation where in the vector space
  :math:`\,K^n\,` there are two bases: the basis :math:`\ \,\mathcal{B}\,=\,
  (\boldsymbol{A}_1,\boldsymbol{A}_2,\dots,\boldsymbol{A}_n),\ \,` composed 
  of linearly independent columns of matrix :math:`\,\boldsymbol{A},\ ` 
  and the standard basis :math:`\ \mathcal{E}\,=\,
  (\boldsymbol{e}_1,\boldsymbol{e}_2,\dots,\boldsymbol{e}_n)\,.`
  
  The matrix :math:`\,\boldsymbol{B}=[\,b_{ij}\,]_{n\times n}\,,\ ` 
  whose :math:`\,j`-th column is composed of the coordinates 
  of the :math:`\,j`-th vector of basis :math:`\ \mathcal{E}\ `
  in the basis :math:`\ \mathcal{B}\ \ \ (j=1,2,\ldots,n),\ \,` 
  is named the *transition matrix* from basis :math:`\,\mathcal{B}\ ` 
  to basis :math:`\ \mathcal{E}.` 

:math:`\;`

**Example 7.** :math:`\,` It is to be confirmed that the vectors

.. math::
   
   \boldsymbol{f}_1\ =\ 
   \left[\begin{array}{c} 1 \\ 0 \\ 0 \\ \dots \\ 0 \end{array}\right]\,,\quad
   \boldsymbol{f}_2\ =\ 
   \left[\begin{array}{c} 1 \\ 1 \\ 0 \\ \dots \\ 0 \end{array}\right]\,,\quad
   \boldsymbol{f}_3\ =\ 
   \left[\begin{array}{c} 1 \\ 1 \\ 1 \\ \dots \\ 0 \end{array}\right]\,,\quad
   \dots,\quad
   \boldsymbol{f}_n\ =\ 
   \left[\begin{array}{c} 1 \\ 1 \\ 1 \\ \dots \\ 1 \end{array}\right]

form a basis in the vector space :math:`\ K^n.`

**Solution.**

In an :math:`\,n`-dimensional vector space every set of :math:`\,n\,`
linearly independent vectors is a basis. :math:`\\`
Since :math:`\,\text{dim}\,K^n=n,\ ` 
it is enough to verify the linear independence of vectors
:math:`\,\boldsymbol{f}_1,\,\boldsymbol{f}_2,\,\ldots,\,\boldsymbol{f}_n.`

Using Theorem 5., we check whether the determinant of the matrix composed
of these :math:`\,n\,` column vectors is different from zero. 
The matrix being upper triangular, the calculation is trivial, 
leading to the positive answer:

.. math::
   
   \det{\ [\,
   \boldsymbol{f}_1\,|\;\boldsymbol{f}_2\,|\,\ldots\,|\,
   \boldsymbol{f}_n\,]}\ \ =\ \ 
   \left|
   \begin{array}{ccccc}
     1   &   1   &   1   & \dots &   1   \\
     0   &   1   &   1   & \dots &   1   \\
     0   &   0   &   1   & \dots &   1   \\
   \dots & \dots & \dots & \dots & \dots \\
     0   &   0   &   0   & \dots &   1
   \end{array}
   \right|
   \ \ =\ \ 1\ne 0\,.

.. _`calc_inv_matrix`: 

Calculation of the Inverse of a Matrix
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Theorem 6. :math:`\,` 
   Generalized Laplace Expansion. :math:`\\`
   
   The following relations hold true for a matrix 
   :math:`\ \boldsymbol{A}=[\,a_{ij}\,]_{n\times n}\in M_n(K):`
   
   .. math::
      
      a_{i1}\,A_{j1}\ +\ a_{i2}\,A_{j2}\ +\ \dots\ +\ a_{in}\,A_{jn}\ \ =\ \ 
      \delta_{ij}\,\cdot\,\det\boldsymbol{A}\,,\qquad i,j=1,2,\ldots,n;

      a_{1k}\,A_{1l}\ +\ a_{2k}\,A_{2l}\ +\ \dots\ +\ a_{nk}\,A_{nl}\ \ =\ \ 
      \delta_{kl}\,\cdot\,\det\boldsymbol{A}\,,\qquad k,l=1,2,\ldots,n.

      \text{where}\quad\delta_{pq}\ \,=\ \,
      \left\{\ 
      \begin{array}{cc} 
      1 & \text{for}\ \ p=q, \\ 0 & \text{for}\ \ p\ne q; 
      \end{array}\right.\qquad
      p,q=1,2,\ldots,n.\qquad
      \text{(the Kronecker delta)}

This may be rewritten more succinctly as

.. math::
   :label: Lap_exp_gen
   
   \sum_{k\,=\,1}^n\ a_{ik}\ A_{jk}\ \ =\ \ 
   \delta_{ij}\,\cdot\,\det\boldsymbol{A}\,,\qquad i,j=1,2,\ldots,n;\qquad
   \text{(row version)}
      
   \sum_{i\,=\,1}^n\ a_{ik}\ A_{il}\ \ =\ \  
   \delta_{kl}\,\cdot\,\det\boldsymbol{A}\,,\qquad k,l=1,2,\ldots,n;\qquad
   \text{(column version)}

**Interpretation** (row version):

..  :math:`\ i=j:\ ` the sum of products of consecutive elements of a selected
    row of the matrix by the cofactors of *the same elements* is equal to
    the determinant of the matrix;

* :math:`\ i=j:\ ` The consecutive elements of a selected row of the matrix 
  are multiplied by *their* cofactors; :math:`\,` the sum of all such 
  products is equal to the determinant of the matrix.

* :math:`\ i\ne j:\ ` The consecutive elements of a selected row 
  are multiplied by the cofactors of the corresponding elements 
  *in another row*; :math:`\,` the sum of all such products is equal to zero. 

The column version may be interpreted in an analogous way.

**Proof.** :math:`\,` 
For :math:`\,i=j\ ` Equation :eq:`Lap_exp_gen` becomes the Laplace expansion 
with respect to the :math:`\ i`-th row. 
So, it is enough to consider the case :math:`\ i\ne j\ ` only.

Starting from the matrix :math:`\ \boldsymbol{A}=[\,a_{ij}\,]_{n\times n}\,,\ `
we create an auxiliary matrix :math:`\ \boldsymbol{B}=[\,b_{ij}\,]_{n\times n}\,.`
:math:`\\`
:math:`\ \boldsymbol{B}\ ` differs from :math:`\ \boldsymbol{A}\ ` only
in the :math:`\,j`-th row, which is a repetition of the :math:`\,i`-th one:

.. math::
   
   \boldsymbol{A}\ \ =\ \ 
   \left[\begin{array}{c}
         \boldsymbol{A}_1 \\ 
         \dots            \\ 
         \boldsymbol{A}_i \\ 
         \dots            \\ 
         \boldsymbol{A}_j \\ 
         \dots            \\
         \boldsymbol{A}_n
         \end{array}
   \right]
         \begin{array}{c}
         \;           \\ 
         \;           \\        
         \leftarrow i \\ 
         \;           \\ 
         \leftarrow j \\ 
         \;           \\
         \;
         \end{array}
   \qquad\qquad
   \boldsymbol{B}\ \ =\ \ 
   \left[\begin{array}{c}
         \boldsymbol{A}_1 \\ 
         \dots            \\ 
         \boldsymbol{A}_i \\ 
         \dots            \\ 
         \boldsymbol{A}_i \\ 
         \dots            \\
         \boldsymbol{A}_n
         \end{array}
   \right]
         \begin{array}{c}
         \;           \\ 
         \;           \\        
         \leftarrow i \\ 
         \;           \\ 
         \leftarrow j \\ 
         \;           \\
         \;
         \end{array}

The elements :math:`\,b_{jk}\,` and cofactors :math:`\,B_{jk}\,` of matrix 
:math:`\,\boldsymbol{B}\,` fulfill the relations

.. math::
   :label: elem
   
   b_{jk}\,=\,b_{ik}\,=\,a_{ik}\,,
   \qquad B_{jk}\,=\,A_{jk}\,,
   \qquad k=1,2,\ldots,n.

Because of two identical rows, the determinant of matrix 
:math:`\,\boldsymbol{B}\,` equals zero. Taking into account equalities
:eq:`elem` and expansion of :math:`\,\det\boldsymbol{B}\ ` with respect
to the :math:`\,j`-th row, we obtain

.. math::
   
   \sum_{k\,=\,1}^n\ a_{ik}\,A_{jk}\ \ =\ \    
   \sum_{k\,=\,1}^n\ b_{jk}\,B_{jk}\ \ =\ \ 
   \det\boldsymbol{B}\ \ =\ \ 0\,.
   \quad\bullet

.. admonition:: Definition.
   
   Let :math:`\,\boldsymbol{A}\in M_n(K)\,.\ \,` 
   If :math:`\ \det{\boldsymbol{A}}=0,\ \,` then :math:`\ \boldsymbol{A}\ \,`
   is called :math:`\,` a :math:`\,` *singular matrix*. :math:`\\`
   Otherwise, :math:`\,` when :math:`\ \det{\boldsymbol{A}}\ne 0,\ `
   :math:`\ \boldsymbol{A}\ ` is :math:`\,` a :math:`\,` *non-singular matrix*.

.. admonition:: Theorem 7.
   
   A matrix :math:`\ \boldsymbol{A}\in M_n(K)\ \,` is invertible :math:`\,` 
   if, and only if, :math:`\,` it is non-singular.

**Proof.**

:math:`\Rightarrow\ :\ `
We assume that there exists the inverse :math:`\,\boldsymbol{A}^{-1}.\ \,`
Then 
 
.. If there exists the inverse :math:`\,\boldsymbol{A}^{-1},\ \,` then

.. math::
   
   \det\boldsymbol{A}\,\cdot\,\det\boldsymbol{A}^{-1}\ \,=\ \,
   \det\,(\boldsymbol{A}\boldsymbol{A}^{-1})\ \,=\ \,
   \det\boldsymbol{I}_n\ \,=\ \,1\,.

Hence :math:`\ \det\boldsymbol{A}\ne 0,\ \,` because 
if there was :math:`\ \det\boldsymbol{A} = 0,\ \,` there would be 
:math:`\ \det\boldsymbol{A}\,\cdot\,\det\boldsymbol{A}^{-1}\,=\;0.`

.. admonition:: Corollary.
   
   If a matrix :math:`\,\boldsymbol{A}\in M_n(K)\ ` is invertible, :math:`\,`
   then :math:`\ \,\det\boldsymbol{A}^{-1}\,=\ (\det\boldsymbol{A})^{-1}\,.`

:math:`\Leftarrow\ :\ `
We assume that the matrix :math:`\ \boldsymbol{A}=[\,a_{ij}\,]_{n\times n}\ ` 
is non-singular: :math:`\ \det{\boldsymbol{A}}\ne 0.\ ` 
Then the matrix
 
.. math::
   :label: rec_mat
   
   \boldsymbol{B}\ \,:\,=\ \,
   \frac{1}{\det\boldsymbol{A}}\ 
   \left[\begin{array}{cccc}
         A_{11} & A_{12} & \dots & A_{1n} \\
         A_{21} & A_{22} & \dots & A_{2n} \\
         \dots  & \dots  & \dots  & \dots \\
         A_{n1} & A_{n2} & \dots & A_{nn}
         \end{array}
   \right]^{\,T}=\ \ \,
   \frac{1}{\det\boldsymbol{A}}\ 
   \left[\begin{array}{cccc}
         A_{11} & A_{21} & \dots & A_{n1} \\
         A_{12} & A_{22} & \dots & A_{n2} \\
         \dots  & \dots  & \dots  & \dots \\
         A_{1n} & A_{2n} & \dots & A_{nn}
         \end{array}
   \right],

where :math:`\ A_{ij}\ ` is the cofactor of the element :math:`\ a_{ij}\,,\ \,` 
is the inverse of matrix :math:`\,\boldsymbol{A}\,.`

Indeed, elements :math:`\ b_{ij}\ ` of matrix :math:`\ \boldsymbol{B}\ ` 
are given by

.. math::
   
   b_{ij}\ \ =\ \ 
   \frac{1}{\det{\boldsymbol{A}}}\ \ A_{ji}\,,\qquad i,j=1,2,\ldots,n.

Let 
:math:`\ \boldsymbol{A}\boldsymbol{B}=\boldsymbol{C}=[c_{ij}]_{n\times n}\,,\ `
:math:`\ \boldsymbol{B}\boldsymbol{A}=\boldsymbol{C'}=[c_{ij}']_{n\times n}\,.\ `
Using :eq:`Lap_exp_gen` we get

.. math::
   
   c_{ij}\ \,=\ \ \sum_{s\,=\,1}^n\ a_{is}\,b_{sj}
   \ \,=\ \ \frac{1}{\det\boldsymbol{A}}\ \ \sum_{s\,=\,1}^n\ a_{is}\,A_{js}
   \ \,=\ \ \frac{1}{\det\boldsymbol{A}}\ \cdot\ \delta_{ij}\,\cdot\ \det\boldsymbol{A}
   \ \,=\ \,\delta_{ij}\,,

   c_{ij}'\ \,=\ \ \sum_{s\,=\,1}^n\ b_{is}\,a_{sj}
   \ \,=\ \ \frac{1}{\det\boldsymbol{A}}\ \ \sum_{s\,=\,1}^n\ a_{sj}\,A_{si}
   \ \,=\ \ \frac{1}{\det\boldsymbol{A}}\ \cdot\ \delta_{ji}\,\cdot\ \det\boldsymbol{A}
   \ \,=\ \,\delta_{ij}\,,

where :math:`\ i,j=1,2,\ldots,n.\ \,` A matrix whose elements are 
Kronecker deltas :math:`\ \delta_{ij}\ ` is the identity matrix. :math:`\,` 
Thus :math:`\ \boldsymbol{A}\boldsymbol{B}=\boldsymbol{B}\boldsymbol{A}=
\boldsymbol{I}_n\,,\ ` that is :math:`\ \boldsymbol{B}=\boldsymbol{A}^{-1}\,.
\quad\bullet`

.. admonition:: Definition.
   
   .. The *adjugate matrix* of a matrix :math:`\,\boldsymbol{A}\in M_n(K)\ ` 
      is by definition the transpose of the cofactor matrix of 
      :math:`\,\boldsymbol{A}:`

   For :math:`\,\boldsymbol{A}\in M_n(K),\ `
   the transpose of the cofactor matrix is the 
   *adjugate matrix* :math:`\,\boldsymbol{A}^D:` 

   .. math::
      
      \boldsymbol{A}^D\ \,:\,=\ \ \,
      \left[\begin{array}{cccc}
            A_{11} & A_{12} & \dots & A_{1n} \\
            A_{21} & A_{22} & \dots & A_{2n} \\
            \dots  & \dots  & \dots  & \dots \\
            A_{n1} & A_{n2} & \dots & A_{nn}
            \end{array}
      \right]^{\,T}\,=\ \ 
      \left[\begin{array}{cccc}
            A_{11} & A_{21} & \dots & A_{n1} \\
            A_{12} & A_{22} & \dots & A_{n2} \\
            \dots  & \dots  & \dots  & \dots \\
            A_{1n} & A_{2n} & \dots & A_{nn}
            \end{array}
      \right]\,.

Including the adjugate matrix as an intermediate step,
the procedure of calculating inverse of a matrix 
:math:`\,\boldsymbol{A}=[a_{ij}]_{n\times n}\in M_n(K)\ `
may be divided into four stages:

0. :math:`\,` Calculate :math:`\ \det{\boldsymbol{A}}\ \,` and :math:`\,` 
   check whether :math:`\ \det{\boldsymbol{A}}\ne 0\,.`

1. :math:`\,` Determine the cofactor matrix 
   :math:`\,\boldsymbol{C}=[\,A_{ij}\,]_{n\times n}\ `
   by replacing :math:`\,a_{ij}\rightarrow A_{ij}\ `
   in :math:`\,\boldsymbol{A}.`

2. :math:`\,` Transpose the cofactor matrix to obtain the adjugate matrix: 
   :math:`\,\boldsymbol{A}^D=\boldsymbol{C}^{\,T}.`

3. :math:`\,` Divide the adjugate matrix by the determinant 
   of :math:`\,\boldsymbol{A}:\ ` :math:`\ \boldsymbol{A}^{-1}\ =\ \,
   \frac{1}{\det{\boldsymbol{A}}}\ \ \boldsymbol{A}^D.` :math:`\\`

**Example 8.** :math:`\,` 
We shall calculate the inverse of the matrix
:math:`\ \ \boldsymbol{A}\ =\ 
\left[\begin{array}{rrr} 
2 & 2 & 3 \\ 1 & -1 & 0 \\ -1 & 2 & 1 
\end{array}\right]\ \in M_3(Q)\,.`

:math:`\ \det{\boldsymbol{A}}\ =\ 
\left|\begin{array}{rrr} 
2 & 2 & 3 \\ 1 & -1 & 0 \\ -1 & 2 & 1 
\end{array}\right|\ =\
\left|\begin{array}{rrr} 
2 & 4 & 3 \\ 1 &  0 & 0 \\ -1 & 1 & 1 
\end{array}\right|\ =\ 
-\ \left|\begin{array}{cc} 
4 & 3 \\ 1 & 1 \end{array}\right|\ =\ -1\,.`

.. :math:`A_{11}=+\left|\begin{array}{rr} -1 &  0 \\  2 & 1 \end{array}\right|\ =\ -1\,;\ \ \ `
   :math:`A_{12}=-\left|\begin{array}{rr}  1 &  0 \\ -1 & 1 \end{array}\right|\ =\ -1\,;\ \ \ `
   :math:`A_{13}=+\left|\begin{array}{rr}  1 & -1 \\ -1 & 2 \end{array}\right|\ =\ +1\,;`
   
   :math:`A_{21}=-\left|\begin{array}{rr}  2 &  3 \\  2 & 1 \end{array}\right|\ =\ +4\,;\ \ \ `
   :math:`A_{22}=+\left|\begin{array}{rr}  2 &  3 \\ -1 & 1 \end{array}\right|\ =\ +5\,;\ \ \ `
   :math:`A_{23}=-\left|\begin{array}{rr}  2 &  2 \\ -1 & 2 \end{array}\right|\ =\ -6\,;`
   
   :math:`A_{31}=+\left|\begin{array}{rr}  2 &  3 \\ -1 &  0 \end{array}\right|\ =\ +3\,;\ \ \ `
   :math:`A_{32}=-\left|\begin{array}{rr}  2 &  3 \\  1 &  0 \end{array}\right|\ =\ +3\,;\ \ \ `
   :math:`A_{33}=+\left|\begin{array}{rr}  2 &  2 \\  1 & -1 \end{array}\right|\ =\ -4\,.`

.. math::
   
   \begin{array}{lll}
   A_{11}=+\left|\begin{array}{rr} -1 &  0 \\  2 &  1 \end{array}\right|\ =\ -1\,; &
   A_{12}=-\left|\begin{array}{rr}  1 &  0 \\ -1 &  1 \end{array}\right|\ =\ -1\,; &
   A_{13}=+\left|\begin{array}{rr}  1 & -1 \\ -1 &  2 \end{array}\right|\ =\ 1\,; \\ \\
   A_{21}=-\left|\begin{array}{rr}  2 &  3 \\  2 &  1 \end{array}\right|\ =\ 4\,; &
   A_{22}=+\left|\begin{array}{rr}  2 &  3 \\ -1 &  1 \end{array}\right|\ =\ 5\,; &
   A_{23}=-\left|\begin{array}{rr}  2 &  2 \\ -1 &  2 \end{array}\right|\ =\ -6\,; \\ \\
   A_{31}=+\left|\begin{array}{rr}  2 &  3 \\ -1 &  0 \end{array}\right|\ =\ 3\,; &
   A_{32}=-\left|\begin{array}{rr}  2 &  3 \\  1 &  0 \end{array}\right|\ =\ 3\,; &
   A_{33}=+\left|\begin{array}{rr}  2 &  2 \\  1 & -1 \end{array}\right|\ =\ -4\,.
   \end{array}

.. math::
   
   \begin{array}{l}
   \boldsymbol{A}^D\ \ =\ \ 
   \left[\begin{array}{rrr}
         -1 & -1 &  1 \\
          4 &  5 & -6 \\
          3 &  3 & -4
         \end{array}
   \right]^{\,T}=\ \ \,
   \left[\begin{array}{rrr}
          -1 &  4 &  3 \\
          -1 &  5 &  3 \\
           1 & -6 & -4
         \end{array}
   \right]\,; 
   \\ \\
   \displaystyle
   \boldsymbol{A}^{-1}\ \ =\ \ \,
   \frac{1}{(-1)}\ 
   \left[\begin{array}{rrr}
          -1 &  4 &  3 \\
          -1 &  5 &  3 \\
           1 & -6 & -4
         \end{array}
   \right]\ \ =\ \ 
   \left[\begin{array}{rrr}
           1 & -4 & -3 \\
           1 & -5 & -3 \\
          -1 &  6 &  4
         \end{array}
   \right]\,.
   \end{array}

   \;

The method :math:`\,` ``inverse()`` :math:`\,` of Sage returns the inverse 
of a given non-singular square matrix. It may be applied both to numeric 
as well as symbolic matrices.

.. admonition:: Experiment with Sage:
   
   Given the matrix size :math:`\,n`, the program displays 
   in the symbolic form a square matrix 
   :math:`\,\boldsymbol{A}=[a_{ij}]_{n\times n}\ ` 
   and its inverse. According to the general formulas, the denominators
   of the inverse matrix elements contain the determinant of 
   :math:`\,\boldsymbol{A},` whereas the numerators are the appropriate
   cofactors.
   
.. sagecellserver::
   
   n = 2
   A = matrix([[var('a%d%d' % (i,j)) for j in range(1,n+1)] 
                                     for i in range(1,n+1)])
   show(A)
   show(A.inverse().factor())

Cramer's Rule to Solve Systems of Linear Equations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We shall consider a system of :math:`\,n\,` linear equations 
in :math:`\,n\,` unknowns over a field :math:`\,K`: 

.. math::
   :label: cramer_0

   \begin{array}{c}
   a_{11}\,x_1\; + \ \,a_{12}\,x_2\; + \ \,\ldots\  + \ \;a_{1n}\,x_n \ \, = \ \ b_1 \\
   a_{21}\,x_1\; + \ \,a_{22}\,x_2\; + \ \,\ldots\  + \ \;a_{2n}\,x_n \ \, = \ \ b_2 \\
   \quad\,\ldots\qquad\quad\ldots\qquad\ \,\ldots\qquad\ \ \ldots\qquad\ \ \,\ldots  \\
   a_{n1}\,x_1\; + \ \,a_{n2}\,x_2\; + \ \,\ldots\  + \ \;a_{nn}\,x_n \ \, = \ \ b_n
   \end{array}

with a non-singular (square) coefficient matrix 
:math:`\ \boldsymbol{A}=[a_{ij}]_{n\times n}:\ `
:math:`\ \det{\boldsymbol{A}}\ne 0.`

Rewriting the system :eq:`cramer_0` in the matrix form

.. math::
   
   \boldsymbol{A}\,\boldsymbol{x}\ =\ \boldsymbol{b}\,,

and pre-multiplying the both sides by :math:`\ \boldsymbol{A}^{-1},\ `
we get at once the solution:

.. math::
   
   \boldsymbol{x}\ =\ \boldsymbol{A}^{-1}\,\boldsymbol{b}\,.

To derive a practical formula for particular unknowns,
we shall make use of the expression :eq:`rec_mat` for the inverse matrix:

.. math::
   :nowrap:
   
   \begin{eqnarray*}
   \left[\begin{array}{c} x_1 \\ x_2 \\ \dots \\ x_n \end{array}\right]
   & = &
   \frac{1}{\det\boldsymbol{A}}\ 
   \left[\begin{array}{cccc}
         A_{11} & A_{21} & \dots & A_{n1} \\
         A_{12} & A_{22} & \dots & A_{n2} \\
         \dots  & \dots  & \dots  & \dots \\
         A_{1n} & A_{2n} & \dots & A_{nn}
         \end{array}
   \right]\ 
   \left[\begin{array}{c} b_1 \\ b_2 \\ \dots \\ b_n \end{array}\right] \\ \\ 
   & = &
   \frac{1}{\det\boldsymbol{A}}\ 
   \left[\begin{array}{c}
         A_{11}\,b_1\ +\ A_{21}\,b_2\ +\ \dots\ +\ A_{n1}\,b_n \\
         A_{12}\,b_1\ +\ A_{22}\,b_2\ +\ \dots\ +\ A_{n2}\,b_n \\
         \dots\qquad\ \ \dots\qquad\ \dots\qquad\dots                \\
         A_{1n}\,b_1\ +\ A_{2n}\,b_2\ +\ \dots\ +\ A_{nn}\,b_n
         \end{array}
   \right]\,.
   \end{eqnarray*}

Equating the respective coordinates of the column vectors on both sides 
of the equation, :math:`\\`
we come up with the explicit formula for :math:`\,x_j,\ \ j=1,2,\ldots,n:`

.. math::
   :nowrap:

   \begin{eqnarray*}   
   x_j & = & \frac{1}{\det\boldsymbol{A}}\ \ 
             (b_1\,A_{1j}\ +\ b_2\,A_{2j}\ +\ \dots\ +\ b_n\,A_{nj}) \\
   & = &
   \frac{1}{\det\boldsymbol{A}}\ \ 
   \left|\begin{array}{ccccccc}
         a_{11} & \dots & a_{1,j-1} &  b_1  & a_{1,j+1} & \dots & a_{1n} \\
         a_{21} & \dots & a_{2,j-1} &  b_2  & a_{2,j+1} & \dots & a_{2n} \\
         \dots  & \dots &  \dots    & \dots &  \dots    & \dots & \dots  \\ 
         a_{n1} & \dots & a_{n,j-1} &  b_n  & a_{n,j+1} & \dots & a_{nn}
         \end{array}
   \right|\,,\qquad j=1,2,\ldots,n.
   \end{eqnarray*}

.. admonition:: Theorem 8. :math:`\,` The Cramer's Rule.
   
   The linear system :eq:`cramer_0` has the unique solution given by

   .. math::
      
      x_j\ \ =\ \ \frac{D_j}{D}\,,\qquad j=1,2,\ldots,n,

   where :math:`\,D\,` is the determinant of the coefficient matrix
   :math:`\,\boldsymbol{A},\ ` and :math:`\,D_j\,` is the determinant
   of the matrix obtained from :math:`\,\boldsymbol{A}\ ` by replacing
   the :math:`\,j`-th column with the column of constants
   :math:`\,\boldsymbol{b}.\ `  Using the column notation of matrices,
   this may be written as

   .. math::
      
      D\ \,=\ \,\det\;[\;\boldsymbol{A}_1\,|\,\dots\,|\,
      \boldsymbol{A}_j\,|\,\dots\,|\,\boldsymbol{A}_n\,]\,,
      
      D_j\ =\ \,\det\;[\;\boldsymbol{A}_1\,|\,\dots\,|\ 
      \boldsymbol{b}\,|\ \dots\,|\,\boldsymbol{A}_n\,]\,.

**Example 9.** :math:`\,` 
Consider the system of 3 equations in 3 unknowns
over the rational field :math:`\,Q:`

.. Rozwiążemy układ trzech równań o trzech niewiadomych nad ciałem :math:`\,Q:`

.. math::
   :nowrap:

   \begin{alignat*}{4}
   2\,x_1 & {\,} - {\,} &    x_2 & {\,} - {\,} &    x_3 & {\;} = {} &  4 \\
   3\,x_1 & {\,} + {\,} & 4\,x_2 & {\,} - {\,} & 2\,x_3 & {\;} = {} & 11 \\
   3\,x_1 & {\,} - {\,} & 2\,x_2 & {\,} + {\,} & 4\,x_3 & {\;} = {} & 11 
   \end{alignat*}

When in a given system the number of equations equals the number of unknowns
(the coefficient matrix :math:`\,\boldsymbol{A}\,` is square), then we begin
with the calculation of :math:`\ D=\det\boldsymbol{A}.\ ` In this case

.. math::
   
   D\ =\ 
   \left|\begin{array}{rrr} 2 & -1 & -1 \\  3 & 4 & -2 \\  3 & -2 & 4 \end{array}\right|\ =\ 
   \left|\begin{array}{rrr} 0 &  0 & -1 \\ -1 & 6 & -2 \\ 11 & -6 & 4 \end{array}\right|\ =\ 
   -\ \left|\begin{array}{rr} -1 & 6 \\  11 & -6 \end{array}\right|\ =\ 
   6\ \left|\begin{array}{rr}  1 & 1 \\ -11 & -1 \end{array}\right|\ =\ 60\,.

Since :math:`\,D\ne 0,\ ` we calculate the determinants :math:`\,D_1,\,D_2\,`
and :math:`\,D_3\,` in the Cramer's rule:  

:math:`D_1\ =\ 
\left|\begin{array}{rrr} 4 & -1 & -1 \\ 11 & 4 & -2 \\ 11 & -2 & 4 \end{array}\right|\ =\ 
\left|\begin{array}{rrr} 0 &  0 & -1 \\  3 & 6 & -2 \\ 27 & -6 & 4 \end{array}\right|\ =\ 
-\ \left|\begin{array}{rr} 3 &  6 \\ 27 & -6 \end{array}\right|\ =\ 
18\ \left|\begin{array}{rr} 1 & -1 \\  9 &  1 \end{array}\right|\ =\ 180\,,`

:math:`D_2\ =\ 
\left|\begin{array}{rrr} 2 & 4 & -1 \\  3 & 11 & -2 \\  3 & 11 & 4 \end{array}\right|\ =\ 
\left|\begin{array}{rrr} 0 & 0 & -1 \\ -1 &  3 & -2 \\ 11 & 27 & 4 \end{array}\right|\ =\ 
-\ \left|\begin{array}{rr} -1 & 3 \\  11 & 27 \end{array}\right|\ =\ 
3\ \left|\begin{array}{rr}  1 & 1 \\ -11 &  9 \end{array}\right|\ =\ 60\,,`

:math:`D_3\ =\ 
\left|\begin{array}{rrr} 2 & -1 & 4 \\  3 & 4 & 11 \\  3 & -2 & 11 \end{array}\right|\ =\ 
\left|\begin{array}{rrr} 0 & -1 & 0 \\ 11 & 4 & 27 \\ -1 & -2 &  3 \end{array}\right|\ =\ 
\left|\begin{array}{rr} 11 & 27 \\ -1 & 3 \end{array}\right|\ =\ 
3\ \left|\begin{array}{rr} 11 &  9 \\ -1 & 1 \end{array}\right|\ =\ 60\,.`

.. math:
   
   D_1\ =\ 
   \left|\begin{array}{rrr} 4 & -1 & -1 \\ 11 & 4 & -2 \\ 11 & -2 & 4 \end{array}\right|\ =\ 
   \left|\begin{array}{rrr} 0 &  0 & -1 \\  3 & 6 & -2 \\ 27 & -6 & 4 \end{array}\right|\ =\ 
    -\ \left|\begin{array}{rr} 3 &  6 \\ 27 & -6 \end{array}\right|\ =\ 
   18\ \left|\begin{array}{rr} 1 & -1 \\  9 &  1 \end{array}\right|\ =\ 180\,,

   D_2\ =\ 
   \left|\begin{array}{rrr} 2 & 4 & -1 \\  3 & 11 & -2 \\  3 & 11 & 4 \end{array}\right|\ =\ 
   \left|\begin{array}{rrr} 0 & 0 & -1 \\ -1 &  3 & -2 \\ 11 & 27 & 4 \end{array}\right|\ =\ 
   -\ \left|\begin{array}{rr} -1 & 3 \\  11 & 27 \end{array}\right|\ =\ 
   3\ \left|\begin{array}{rr}  1 & 1 \\ -11 &  9 \end{array}\right|\ =\ 60\,,

   D_3\ =\ 
   \left|\begin{array}{rrr} 2 & -1 & 4 \\  3 & 4 & 11 \\  3 & -2 & 11 \end{array}\right|\ =\ 
   \left|\begin{array}{rrr} 0 & -1 & 0 \\ 11 & 4 & 27 \\ -1 & -2 &  3 \end{array}\right|\ =\ 
      \left|\begin{array}{rr} 11 & 27 \\ -1 & 3 \end{array}\right|\ =\ 
   3\ \left|\begin{array}{rr} 11 &  9 \\ -1 & 1 \end{array}\right|\ =\ 60\,.

Finally, the system has the unique solution:

.. math::
   
   x_1\ =\ \textstyle{180\over 60}\ =\ 3\,,\quad
   x_2\ =\ \textstyle{60\over 60}\ =\ 1\,,\quad
   x_3\ =\ \textstyle{60\over 60}\ =\ 1\,.

In Sage, the formulas of the Cramer's rule may be obtained also in symbolic 
form for any size :math:`\,n=2,3,\ldots\ ` of matrix :math:`\,\boldsymbol{A}.\ `
Namely, the solution of the system is given by the last column of the augmented 
matrix :math:`\,\boldsymbol{B}=[\,\boldsymbol{A}\,|\,\boldsymbol{b}\,]\ ` 
transformed to the reduced row echelon form.

.. admonition:: Experiment with Sage:
   
   Given the size :math:`\,n\,` of the coefficient matrix 
   :math:`\,\boldsymbol{A},\ ` the following program displays 
   the augmented matrix :math:`\,\boldsymbol{B}\ ` in its original
   and row-reduced echelon form. Elements of the last column of 
   the latter matrix, which provide the solution, are displayed 
   additionally enlarged for a better readability.

.. sagecellserver::

   n = 2
   
   A = matrix([[var('a%d%d' % (i,j)) for j in range(1,n+1)] 
                                     for i in range(1,n+1)])

   b = vector([var('b%d' % j) for j in range(1,n+1)])

   B = A.augment(b); 
   R = B.rref().factor()
   B.subdivide(n,n); R.subdivide(n,n)

   show(table([[B, '$\\rightarrow$', R]]))
   for i in range(n): show(R[i,n])












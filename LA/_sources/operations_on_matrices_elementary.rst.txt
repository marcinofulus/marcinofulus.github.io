
Elementary Matrices
-------------------

A matrix :math:`\,\boldsymbol{E}\in M_m(K)\ ` is an *elementary matrix* 
when it is obtained from the identity matrix :math:`\,\boldsymbol{I}_m\,` 
by a single elementary operation.

According to the three types of elementary operations
:math:`\ (i,j=0,1,\ldots,m-1):`

1. :math:`\ O_1(i,j):\ ` swapping the :math:`\,i`-th and :math:`\,j`-th rows,

2. :math:`\ O_2(i,a):\ ` multiplication of the :math:`\,i`-th row 
   by the scalar :math:`\,a \neq 0\,,`

3. :math:`\ O_3(i,j,a):\ ` addition to the :math:`\,i`-th row 
   the :math:`\,a\,` multiple of the :math:`\,j`-th row, 

there are three types of elementary matrices: 

1. :math:`\ \boldsymbol{E}_1(i,j)\,=\,O_1(i,j)\ \boldsymbol{I}_m\,,`

2. :math:`\ \boldsymbol{E}_2(i,a)\,=\,O_2(i,a)\ \boldsymbol{I}_m\,,
   \quad (a \neq 0)`

3. :math:`\ \boldsymbol{E}_3(i,j,a)\,=\,O_3(i,j,a)\ \boldsymbol{I}_m\,.`

Below we give examples of elementary matrices for :math:`\,K=Q,\ m=3:`

.. math::
   
   \boldsymbol{E}_1(0,1) =
   \left[\begin{array}{ccc} 
   0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 
   \end{array}\right],\quad 
   \boldsymbol{E}_2(0,\textstyle{2\over 3}) =
   \left[\begin{array}{ccc}
   \textstyle{2\over 3} & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 
   \end{array}\right],\quad 
   \boldsymbol{E}_3(1,2,\textstyle{7\over 4}) = 
   \left[\begin{array}{ccc}
   1 & 0 & 0 \\ 0 & 1 & \textstyle{7\over 4} \\ 0 & 0 & 1
   \end{array}\right].

An interesting property of elementary matrices is that an elementary (row)
operation on a matrix can be achieved by pre-multiplying that matrix by 
the elementary matrix obtained from the identity matrix by the same operation. 
This may be stated as

.. admonition:: Theorem 2. :math:`\ ` 

   Let :math:`\,\boldsymbol{A}\in M_{m\times n}(K).\ ` 
   Then :math:`\,` for :math:`\ i,j=0,1,\ldots,m-1:`

   1. :math:`\ O_1(i,j)\,\boldsymbol{A}\ =\ 
      \boldsymbol{E}_1(i,j)\,\boldsymbol{A}\,,`
   2. :math:`\ O_2(i,a)\,\boldsymbol{A}\ =\ 
      \boldsymbol{E}_2(i,a)\,\boldsymbol{A}\,,
      \qquad (a\ne 0)`
   3. :math:`\ O_3(i,j,a)\,\boldsymbol{A}\ = 
      \boldsymbol{E}_3(i,j,a)\,\boldsymbol{A}\,,`
   
   where :math:`\ \boldsymbol{E}_1(i,j),\ \boldsymbol{E}_2(i,a),\ 
   \boldsymbol{E}_3(i,j,a)\in M_m(K).`

(proof in Appendix A1)

Elementary matrices are invertible, 
and their inverses are also elementary matrices. :math:`\\` 
This is explained in detail by the following

.. admonition:: Proposition 2. :math:`\ `

   1. :math:`\ [\boldsymbol{E}_1(i,j)]^{-1}\,=\ \boldsymbol{E}_1(i,j),`

   2. :math:`\ [\boldsymbol{E}_2(i,a)]^{-1}\,=\ \boldsymbol{E}_2(i,a^{-1}),
      \qquad (a\ne 0)`

   3. :math:`\ [\boldsymbol{E}_3(i,j,a)]^{-1}\,=\ \boldsymbol{E}_3(i,j,-a).`
  
(proof in Appendix A1)

In Sage elementary matrices are created by the function 
:math:`\,` ``elementary_matrix()``. :math:`\\`
Its arguments are: :math:`\,` the base ring :math:`\,` ``R`` :math:`\,` 
(optional, defaults to ZZ), :math:`\,` the order of the matrix 
:math:`\,` ``n``, :math:`\\` the numbers :math:`\,` ``i`` :math:`\,` and 
:math:`\,` ``j`` :math:`\,` of :math:`\,` rows :math:`\,` (beginning at zero), 
:math:`\,` and the scale factor :math:`\,` ``a``. 

.. Its arguments depend on the type of the matrix to be built:

For the three types of elementary matrices, 
the function is called respectively as:

1. :math:`\,` ``elementary_matrix(R, n, row1=i, row2=j)``
2. :math:`\,` ``elementary_matrix(R, n, row1=i, scale=a)``
3. :math:`\,` ``elementary_matrix(R, n, row1=i, row2=j, scale=a)``

The Sage code returns elementary matrices shown in the foregoing example:

.. code-block:: python

   sage: E1 = elementary_matrix(QQ, 3, row1=0, row2=2)
   sage: E2 = elementary_matrix(QQ, 3, row1=0, scale=2/3)
   sage: E3 = elementary_matrix(QQ, 3, row1=1, row2=2, scale=7/4)
   sage: E1,E2,E3

   (
   [0 0 1]  [2/3   0   0]  [  1   0   0]
   [0 1 0]  [  0   1   0]  [  0   1 7/4]
   [1 0 0], [  0   0   1], [  0   0   1]
   )

Taking a particular matrix :math:`\,\boldsymbol{A},\ ` 
we shall check Theorem 2., item 3.:

.. code-block:: python

   sage: A = matrix(QQ,3,4,[[0, 1, 2, 3],
                            [5,-2, 3, 6],
                            [4,-4, 0, 8]])

   # Direct execution of the elementary operation:
   sage: B1 = A.with_added_multiple_of_row(1,2,7/4)

   # Multiplication of the matrix A by the appropriate elementary matrix:
   sage: B2 = elementary_matrix(QQ, 3, row1=1, row2=2, scale=7/4) * A

   sage: table([[A, '$\\rightarrow$', B1, ',', B2]])

The output reads as expected:

.. math::
   
   \left[\begin{array}{rrrr}
   0 &  1 & 2 & 3 \\
   5 & -2 & 3 & 6 \\
   4 & -4 & 0 & 8
   \end{array}\right]
   \ \ \rightarrow\ \ 
   \left[\begin{array}{rrrr}
    0 &  1 & 2 &  3 \\
   12 & -9 & 3 & 20 \\
    4 & -4 & 0 &  8
   \end{array}\right]
   \ \ ,\ \ 
   \left[\begin{array}{rrrr}
     0 &  1 & 2 &  3 \\
    12 & -9 & 3 & 20 \\
     4 & -4 & 0 &  8
    \end{array}\right]

We are now in a position to prove

.. admonition:: Theorem 3. :math:`\,`

   Let :math:`\ \boldsymbol{A}\in M_n(K)\,.\ ` 
   The following three conditions are equivalent:
   
   1. :math:`\,` :math:`\boldsymbol{A}\ ` is invertible;
   2. :math:`\,` The reduced row echelon form of :math:`\boldsymbol{A}\ ` 
      is the identity matrix :math:`\boldsymbol{I}_n`;
   3. :math:`\,` :math:`\boldsymbol{A}\ ` is a product of elementary matrices.

**Lemma.**

Suppose that the transformation of matrix :math:`\boldsymbol{A}\ ` to the 
reduced row echelon form :math:`\,\boldsymbol{C}\,` involves consecutive 
applications of elementary operations :math:`\,O_1\,,O_2,\,\dots,\,O_k\,:`

.. math::
   
   O_k\ \dots\,O_2\ O_1\ \boldsymbol{A}\ =\ \boldsymbol{C}
 
where :math:`\,O_1\,,O_2,\,\dots,\,O_k\,` are represented by elementary 
matrices :math:`\,\boldsymbol{E}_1,\boldsymbol{E}_2,\dots,\boldsymbol{E}_k\,.` 
Then

.. math::
   :label: AC
   
   \boldsymbol{E}_k\dots\boldsymbol{E}_2\,\boldsymbol{E}_1\,
   \boldsymbol{A}\ =\ \boldsymbol{C}\,,

   \boldsymbol{A}\ =\ 
   \boldsymbol{E}_1'\,\boldsymbol{E}_2'\,\dots\,\boldsymbol{E}_k'\ 
   \boldsymbol{C}\,,

where :math:`\ \boldsymbol{E}_i' \equiv \boldsymbol{E}_i^{-1}\ ` 
are also elementary matrices.
Taking into account Theorem 2. and its generalization to a product of
several matrix factors, we conclude that a matrix :math:`\boldsymbol{A}\ ` 
is invertible if and only if its reduced row echelon form 
:math:`\boldsymbol{C}\ ` is invertible. :math:`\quad\bullet`

.. :math:`\\`

.. The relations :eq:`AC` imply that :math:`\boldsymbol{A}\ ` is invertible 
   iff its reduced row echelon form :math:`\boldsymbol{C}\ ` is invertible.


**Proof of the Theorem.**

:math:`\boldsymbol{1.\,\Rightarrow\,2.}\ ` 
Assume that :math:`\boldsymbol{A}\ ` is invertible.
Then its reduced row echelon form :math:`\boldsymbol{C},\ ` 
being also invertible, consists of :math:`\,n\,` non-zero rows. 
In each row there is a leading unit, shifted to the right with respect to
the leading unit in the preceding row. Moreover, each leading unit is 
the only non-zero entry in its column. Thus :math:`\ \boldsymbol{C}\ `
is the identity matrix: :math:`\ \boldsymbol{C}=\boldsymbol{I}_n.`

:math:`\boldsymbol{2.\,\Rightarrow\,3.}\ `
From the second equation in :eq:`AC` we see that when 
:math:`\boldsymbol{C}\ ` is equal to the identity matrix, 
:math:`\boldsymbol{A}\ ` is a product of elementary matrices.

:math:`\boldsymbol{3.\,\Rightarrow\,1.}\ `
This implication stems from the above-mentioned generalized Theorem 2.
on the invertibility of a product of invertible matrices. :math:`\quad\bullet`

.. claim that a product of invertible matrices 
   is also an invertible matrix.

The above discussion elucidates to some extent the question of matrix
invertibility. :math:`\\`
Proposition 1. in the preceding section yields a necessary
condition, whereas the items 2. and 3. of Theorem 3. state necessary and
sufficient conditions for the existence of a matrix inverse. Yet another 
condition involving determinants will be given in a next chapter.
 

























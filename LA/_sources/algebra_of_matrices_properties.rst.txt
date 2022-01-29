
Properties of Matrix Operations
-------------------------------

Alternative Definition of the Product of Two Square Matrices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Multiplication of a vector from :math:`\,K^n\,` (from the left-hand side)
by a square matrix from :math:`\,M_n(K)\,` gives as the result a vector 
of the same kind. The operation may be therefore repeated by a further 
multiplication of the obtained result by another matrix. 
Taking into account this possibility of such composing the consecutive 
operations, we shall redefine the product of two square matrices 
of the same size.

.. Taking this into account we shall redefine
   the product of two square matrices of the same size.

.. It is therefore an external binary operation in the set :math:`\,K^n\,` 
   - a generalization of the scalar multiplication of vectors.
   Accepting this interpretation, we shall redefine the product 
   of two square matrices of the same size.

.. admonition:: Definition.
   
   The product of the matrices 
   :math:`\,\boldsymbol{A},\boldsymbol{B}\in M_n(K)\,`
   is given by the matrix :math:`\,\boldsymbol{C}\in M_n(K),\ `
   which satisfies the condition
   
   .. math::
      :label: alt_def
   
      \boldsymbol{C}\boldsymbol{x}\ =\ 
      \boldsymbol{A}\,(\boldsymbol{B}\,\boldsymbol{x})
      \qquad\text{for all vectors}\ \ \boldsymbol{x}\in K^n\,.

To make sure that this definition is in accordance with the more general 
rule for multiplying rectangular matrices of appropriate sizes,
we shall consider column vectors

.. math::
   
   \boldsymbol{x} = [x_i]_n,\quad
   \boldsymbol{y} = [y_i]_n,\quad
   \boldsymbol{z} = [z_i]_n\ \ \in\ K^n

and square matrices 

.. math::
   
   \boldsymbol{A} = [a_{ij}]_{n\times n}\,,\quad
   \boldsymbol{B} = [b_{ij}]_{n\times n}\ \ \in\ M_n(K)\,,

for which the following relations hold:

.. math::

   \boldsymbol{z}\ =\ \boldsymbol{A}\,\boldsymbol{y}\,,
   \qquad\text{that is}\qquad 
   z_i\ =\ \sum_{k=1}^n\;a_{ik}\;y_k\,, \quad i=1,2,\ldots,n\,,
   \qquad\qquad\text{(a)}

   \boldsymbol{y}\ =\ \boldsymbol{B}\,\boldsymbol{x}\,,
   \qquad\text{that is}\qquad 
   y_k\ =\ \sum_{j=1}^n\;b_{kj}\;x_j\,, \quad k=1,2,\ldots,n\,.
   \qquad\qquad\text{(b)}

Inserting expressions (b) appropriately into (a), we obtain

.. math::

   \boldsymbol{z}\ =\ \boldsymbol{A}\,(\boldsymbol{B}\,\boldsymbol{x})\,,

   z_i\ =\ \sum_{k=1}^n\ a_{ik}\,\left(\;\sum_{j=1}^n\;b_{kj}\;x_j \right)
   \ =\ \sum_{k,j=1}^n\;a_{ik}\;b_{kj}\;x_j
   \ =\ \sum_{j=1}^n\ \left(\ \sum_{k=1}^n\;a_{ik}\;b_{kj}\right)\ x_j\,.

The last relation may be rewritten as

.. math::
   :label: ABC

   \boldsymbol{z} = \boldsymbol{C}\,\boldsymbol{x}\,,\quad
   \boldsymbol{C}\,=\,[c_{ij}]_{n\times n}\,,\quad
   c_{ij}\ =\ \displaystyle\sum_{k=1}^n\;a_{ik}\;b_{kj}\,,\quad
   i,j\,=\,1,2,\ldots,n\,.
   
.. \begin{array}{lclcl}
   & z_i\ =\ \displaystyle\sum_{j=1}^n\;c_{ij}\;x_j\,,\quad & \text{gdzie}
   & \quad c_{ij}\ =\ \displaystyle\sum_{k=1}^n\;a_{ik}\;b_{kj}\,, & 
   i,j\,=\,1,2,\ldots,n\,, \\ \\
   \text{czyli} & \boldsymbol{z} = \boldsymbol{C}\,\boldsymbol{x}\,,\quad &
   \text{gdzie} & \quad\boldsymbol{C}\,=\,[c_{ij}]_{n\times n}\,. &
   \end{array}

Thus :math:`\ \boldsymbol{A}\,(\boldsymbol{B}\,\boldsymbol{x})=
\boldsymbol{C}\,\boldsymbol{x},\ `
where the matrix :math:`\ \boldsymbol{C}\ ` with elements :math:`\,c_{ij}\ `
given by :eq:`ABC` is the product of matrices :math:`\ \boldsymbol{A}\ ` 
and :math:`\ \boldsymbol{B}\ ` in the sense of the definition 
in the previous section.
 
.. Equation :eq:`alt_def` suggests that the product of two matrices
   corresponds to superposition of two linear operations on vectors.

We shall see  later that equation :eq:`alt_def` reflects the relation 
between the matrix multiplication and the superposition of linear operations
on vectors.

Properties of Matrix Multiplication
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following properties may be easily proved by reference
to the definition of the matrix product.

1. Matrix multiplication is associative:

   :math:`\ (\boldsymbol{A}\boldsymbol{B})\,\boldsymbol{C} \ =\ 
   \boldsymbol{A}\,(\boldsymbol{B}\boldsymbol{C})\,,
   \qquad\quad
   \boldsymbol{A}\in M_{m\times p}(K),\ \  
   \boldsymbol{B}\in M_{p\times q}(K),\ \ 
   \boldsymbol{C}\in M_{q\times n}(K)\,.`

2. Matrix multiplication is distributive across matrix addition:

   :math:`\ (\boldsymbol{A}+\boldsymbol{B})\,\boldsymbol{C} \ =\ 
   \boldsymbol{A}\boldsymbol{C}\,+\,\boldsymbol{B}\boldsymbol{C}\,,
   \qquad\quad
   \boldsymbol{A},\boldsymbol{B}\in M_{m\times p}(K),\ \ 
   \boldsymbol{C}\in M_{p\times n}(K)\,;`

   :math:`\ \boldsymbol{A}\,(\boldsymbol{B}+\boldsymbol{C})\ =\ 
   \boldsymbol{A}\boldsymbol{B}\ +\ \boldsymbol{A}\boldsymbol{C}\,,
   \qquad\quad
   \boldsymbol{A}\in M_{m\times p}(K),\ \ 
   \boldsymbol{B},\boldsymbol{C}\in M_{p\times n}(K)\,.`

3. Matrix product is compatible with scalar multiplication:
      
   :math:`\ c\ (\boldsymbol{A}\boldsymbol{B})\ =\ 
   (c \boldsymbol{A})\,\boldsymbol{B}\ =\ 
   \boldsymbol{A}\,(c \boldsymbol{B})\,,
   \qquad
   c\in K,\ \ 
   \boldsymbol{A}\in M_{m\times p}(K),\ \ 
   \boldsymbol{B}\in M_{p\times n}(K)\,.`

4. The identity element for matrix multiplication 
   in the set :math:`\ M_n(K)\ ` is the identity matrix 

   .. math::
      
      \boldsymbol{I}_n \ :\,=\ 
      \left[\begin{array}{cccc} 
      1      &    0   & \ldots &    0   \\
      0      &    1   & \ldots &    0   \\
      \ldots & \ldots & \ldots & \ldots \\
      0      &    0   & \ldots &    1     
      \end{array}\right]\,.

   Thus
   :math:`\quad\boldsymbol{I}_n\,\boldsymbol{A}\ =\ 
   \boldsymbol{A}\,\boldsymbol{I}_n\ =\ \boldsymbol{A}\quad`
   for every matrix :math:`\ \boldsymbol{A}\in M_n(K).`

.. :math:`\ \qquad\qquad\qquad\qquad\boldsymbol{I}_n \ :\,=\ 
   \left[\begin{array}{cccc} 
   1      &    0   & \ldots &    0   \\
   0      &    1   & \ldots &    0   \\
   \ldots & \ldots & \ldots & \ldots \\
   0      &    0   & \ldots &    1     
   \end{array}\right]\,.`

5. | Matrix multiplication is noncommutative: :math:`\,` in general 
     :math:`\,\boldsymbol{A}\boldsymbol{B}\neq\boldsymbol{B}\boldsymbol{A}`
   | even for square matrices of the same size, when both products do exist.
   
   Only the matrices proportional to the identity matrix

   .. math::
      
      c\ \boldsymbol{I}_n\ =\ 
      \left[\begin{array}{cccc}
      c      &    0   & \ldots &    0   \\
      0      &    c   & \ldots &    0   \\
      \ldots & \ldots & \ldots & \ldots \\
      0      &    0   & \ldots &    c     
      \end{array}\right]\,,
      \qquad c\,\in\,K,
   
   commute with all matrices from the set :math:`\ M_n(K).`

.. :math:`\qquad\ \,
   c\ \boldsymbol{I}_n\ =\ \left[\begin{array}{cccc} 
   c      &    0   & \ldots &    0   \\
   0      &    c   & \ldots &    0   \\
   \ldots & \ldots & \ldots & \ldots \\
   0      &    0   & \ldots &    c     
   \end{array}\right]\,,\qquad c\,\in\,K,`

An instructive example of noncommutativity of matrix multiplication:

:math:`\qquad\text{For}\quad\boldsymbol{A}\ =\ 
[\,a_1\ a_2\ a_3\,]\,,\quad 
\boldsymbol{B}\ =\ 
\left[\begin{array}{c} 
b_1 \\ b_2 \\ b_3 
\end{array}\right]\quad
\text{we obtain:}`

:math:`\qquad\boldsymbol{A} \boldsymbol{B}\ =\ 
[\,a_1\ a_2\ a_3\,]\ 
\left[\begin{array}{c} 
b_1 \\ b_2 \\ b_3 
\end{array}\right]\ =\    
[\,a_1\,b_1\;+\;a_2\,b_2\;+\;a_3\,b_3\,]\ \simeq
\ a_1\,b_1\;+\;a_2\,b_2\;+\;a_3\,b_3\,,`

:math:`\qquad\ \boldsymbol{B} \boldsymbol{A}\ \,=\ \,
\left[\begin{array}{c} b_1 \\ b_2 \\ b_3 \end{array}\right]\ 
[\,a_1\ a_2\ a_3\,]\ =\ 
\left[\,\begin{array}{ccc}
b_1\,a_1 & b_1\,a_2 & b_1\,a_3 \\ 
b_2\,a_1 & b_2\,a_2 & b_2\,a_3 \\
b_3\,a_1 & b_3\,a_2 & b_3\,a_3
\end{array}\right]\,.` 
:math:`\\`

.. The properties :math:`\ 1.-\,5.\ ` imply that :math:`\ M_n(K),\ ` 
   together with matrix addition, matrix multiplication, 
   and scalar matrix multiplication, is a noncommutative algebra with identity.

The latter result is called the *outer product* 
:math:`\ \boldsymbol{b}\otimes\boldsymbol{a}\ `
of the two column vectors:
:math:`\,\boldsymbol{b} = \boldsymbol{B}\ ` and 
:math:`\,\boldsymbol{a} = \boldsymbol{A}^T\,.\ \,`
Thus :math:`\,\boldsymbol{B} \boldsymbol{A}\ = \ 
\boldsymbol{b}\,\boldsymbol{a}^T\ =\ 
\boldsymbol{b}\otimes\boldsymbol{a}\,.\ `
On the other hand, in this special case the product 
:math:`\,\boldsymbol{B} \boldsymbol{A}\ ` equals the *tensor product*
:math:`\,\boldsymbol{B}\otimes\boldsymbol{A}\ ` of these matrices,
see Chapter :ref:`ch_kronecker` of this textbook.

.. (this is a special case of the *tensor product* of matrices).
 
The Row and Column Rules of Matrix Multiplication
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Theorem.** :math:`\,`
Consider the two matrices over a field :math:`\,K,\ ` 
given in the row notation:

.. math::
   
   \boldsymbol{A}\ =\ \left[\begin{array}{c}
                         \boldsymbol{A}_1 \\ 
                         \boldsymbol{A}_2 \\
                         \dots            \\
                         \boldsymbol{A}_m 
                      \end{array}\right]\ =\ 
                      [a_{ij}]_{m\times p}\,,
   \qquad
   \boldsymbol{B}\ =\ \left[\begin{array}{c}
                         \boldsymbol{B}_1 \\ 
                         \boldsymbol{B}_2 \\
                         \dots            \\
                         \boldsymbol{B}_p 
                      \end{array}\right]\ =\ 
                      [b_{ij}]_{p\times n}\,.

Here :math:`\quad\boldsymbol{A}_i\ =\ 
[\;a_{i1}\ a_{i2}\ \dots a_{ip}\;]\ \ (i=1,2,\dots,m),\quad
\boldsymbol{B}_i\ =\ [\;b_{i1}\ b_{i2}\ \dots b_{in}\;]\ \ (i=1,2,\dots,p).`

The row notation being still in use, their product 
may be written as follows: :math:`\\`

.. math::
   :label: rule_verse_1

   \boldsymbol{A}\boldsymbol{B}\ =\    
   \left[\begin{array}{c}
         \boldsymbol{A}_1 \\ 
         \boldsymbol{A}_2 \\
         \dots            \\
         \boldsymbol{A}_m 
   \end{array}\right]\boldsymbol{B}
   \ \ =\ \   
   \left[\begin{array}{c}
         \boldsymbol{A}_1\,\boldsymbol{B} \\ 
         \boldsymbol{A}_2\,\boldsymbol{B} \\
         \dots            \\
         \boldsymbol{A}_m\,\boldsymbol{B} 
   \end{array}\right],

.. math::
   :label: rule_verse_2

   \text{where}\qquad
   \boldsymbol{A}_i\,\boldsymbol{B}\ \ =\ \ 
   \sum_{k=1}^p \,a_{ik}\,\boldsymbol{B}_k\,,\quad i=1,2,\dots, m.

**Proof.** :math:`\,` We introduce the denotement

.. math::
   
   \boldsymbol{W}\ =\ \left[\begin{array}{c}
                            \boldsymbol{W}_1 \\ 
                            \boldsymbol{W}_2 \\
                            \dots            \\
                            \boldsymbol{W}_m \end{array}\right]\ :\,=\ 
   \left[\begin{array}{c}
         \boldsymbol{A}_1\,\boldsymbol{B} \\ 
         \boldsymbol{A}_2\,\boldsymbol{B} \\
         \dots            \\
         \boldsymbol{A}_m\,\boldsymbol{B} \end{array}\right],
   \qquad
   \boldsymbol{W}\ =\ [w_{ij}]_{m\times n}\,,

and write down the matrix :math:`\ \boldsymbol{B}\ ` in the column notation:

.. math::
   
   \boldsymbol{B}\ \,=\ \,
   \left[\;\boldsymbol{C}_1\,|\,
           \boldsymbol{C}_2\,|\,
           \dots\,|\,
           \boldsymbol{C}_n\,\right],
   \qquad
   \boldsymbol{C}_j\ =\ \left[\begin{array}{c}
                        b_{1j} \\ b_{2j} \\ \dots \\ b_{pj}
                        \end{array}\right]\,,
   \quad j=1,2,\dots,n.

Using the Column Rule of Matrix Multiplication, we get

.. math::
   
   \boldsymbol{W}_i\ =\ 
   \boldsymbol{A}_i\,\boldsymbol{B}\ \,=\ \,
   \boldsymbol{A}_i\ \,
   \left[\;\boldsymbol{C}_1\,|\,
           \boldsymbol{C}_2\,|\,
           \dots\,|\,
           \boldsymbol{C}_n\,\right]
   \ \ =\ \ 
   \left[\;\boldsymbol{A}_i\,\boldsymbol{C}_1\;|\; 
           \boldsymbol{A}_i\,\boldsymbol{C}_2\;|\; 
           \dots\;|\;
           \boldsymbol{A}_i\,\boldsymbol{C}_n\,\right],

   w_{ij}\ =\ \boldsymbol{A}_i\,\boldsymbol{C}_j\ \,=\ \,
   [\,a_{i1}\ a_{i2}\ \dots a_{ip}\,]\ 
   \left[\begin{array}{c} 
   b_{1j} \\ b_{2j} \\ \dots \\ b_{pj} 
   \end{array}\right]
   \ \ =\ \ 
   \sum_{k=1}^p\,a_{ik}\,b_{kj}\,,
   \qquad
   \begin{array}{l} 
   i\,=\,1,2,\ldots,m\,; \\ 
   j\,=\,1,2,\ldots,n. 
   \end{array}

The matrices :math:`\ \boldsymbol{A}\boldsymbol{B}\ \ 
\text{and}\ \ \boldsymbol{W}\ ` are of the same size
(:math:`\,m\,` rows and :math:`\,n\,` columns), :math:`\\`
and their corresponding elements are equal:

.. math::
   
   (\boldsymbol{A}\boldsymbol{B})_{ij}\ =\ 
   \sum_{k=1}^p\,a_{ik}\,b_{kj}\ =\ 
   w_{ij}\ =\ (\boldsymbol{W})_{ij}\,,
   \qquad
   i=1,2,\dots,m;\ \ j=1,2,\dots,n.

Hence :math:`\ \boldsymbol{A}\boldsymbol{B}\ =\ \boldsymbol{W}\ `
and the relation :eq:`rule_verse_1` is proven.

To demonstrate the equation :eq:`rule_verse_2` we note that

.. .. math::
   :nowrap:
   
   \begin{eqnarray*}
   \boldsymbol{W}_i & \ =\  & 
   \left[\ \ \ w_{i1}\quad w_{i2}\quad \ldots\quad w_{in}\ \ \ \right] \\ \\
   & \ =\ & \left[\quad\sum_{k=1}^p\,a_{ik}\,b_{k1}\quad\, 
                       \sum_{k=1}^p\,a_{ik}\,b_{k2}\quad\,
                       \ldots\quad\,
                       \sum_{k=1}^p\,a_{ik}\,b_{kn}\ \ \,\right] \\
   & \ =\  & \ \sum_{k=1}^p\ \ \left[\ \, a_{ik}\,b_{k1}\quad
                               a_{ik}\,b_{k2}\quad 
                               \ldots\quad 
                               a_{ik}\,b_{kn}\ \, \right] \\
   & \ =\  & \ \sum_{k=1}^p\ \ a_{ik}\ 
               \left[\ \,b_{k1}\ \ b_{k2}\ \ \ldots\ \ b_{kn}\ \,\right] \\
   & \ =\  & \ \sum_{k=1}^p\ a_{ik}\ \boldsymbol{B}_k \,,
   \qquad\quad i=1,2,\dots,m.
   \end{eqnarray*}

.. math::
   
   \begin{array}{ccl}
   \boldsymbol{W}_i & = & 
   \left[\ \ w_{i1}\quad w_{i2}\quad \ldots\quad w_{in}\ \ \right]\ \ \ = \\ \\
   & = & \left[\quad\displaystyle
         \sum_{k=1}^p\,a_{ik}\,b_{k1}\quad\, 
         \sum_{k=1}^p\,a_{ik}\,b_{k2}\quad\,
         \ldots\quad\,
         \sum_{k=1}^p\,a_{ik}\,b_{kn}\ \ \,\right]\ \ \ = \\ \\
   & = & \ \displaystyle\sum_{k=1}^p\ \ a_{ik}\ 
         \left[\ \,b_{k1}\ \ b_{k2}\ \ \ldots\ \ b_{kn}\ \,\right]\ \ \ = \\ \\
   & = & \ \displaystyle\sum_{k=1}^p\ a_{ik}\ \boldsymbol{B}_k \,,
   \qquad\quad i=1,2,\dots,m.\quad\bullet
   \end{array}

The above theorem may be named the Row Rule of Matrix Multiplication.
We write it down here together with the previously derived Column Rule, 
since both will be often referenced. :math:`\\`

.. admonition: Rule 3. :math:`\,` 
   Row Rule of Matrix Multiplication. :math:`\\`
   
   Let :math:`\ \boldsymbol{A}\,\in M_{m\times p}(K),\ 
   \boldsymbol{B}\,\in M_{p\times n}(K).\ `
   Then the :math:`\ i`-th row of the product 
   :math:`\ \boldsymbol{A}\boldsymbol{B}\ ` is: :math:`\\`
   
   a. the product of the :math:`\ i`-th row 
      of the matrix :math:`\ \boldsymbol{A}\ ` 
      by the matrix :math:`\ \boldsymbol{B};` :math:`\\`
   
   b. the linear combination of rows of matrix :math:`\ \boldsymbol{B},\ `
      the coefficients being :math:`\\`
      the consecutive elements of the :math:`\ i`-th row of matrix 
      :math:`\ \boldsymbol{A},\ \ i\,=\,1,2,\ldots,m.`

.. admonition:: Row and Column Rules of Matrix Multiplication. :math:`\\`

   Let :math:`\ \boldsymbol{A}\,\in M_{m\times p}(K),\ 
   \boldsymbol{B}\,\in M_{p\times n}(K).\ ` :math:`\\`

   Then the :math:`\ i`-th row of the product 
   :math:`\ \boldsymbol{A}\boldsymbol{B}\ ` is: :math:`\\`
   
   1. :math:`\,` the product of the :math:`\ i`-th row 
      of the matrix :math:`\ \boldsymbol{A}\ ` 
      by the matrix :math:`\ \boldsymbol{B};` :math:`\\`
   
   2. | :math:`\,` the linear combination of rows of matrix 
        :math:`\ \boldsymbol{B},\ ` the coefficients being
      | :math:`\,` the consecutive elements of the :math:`\ i`-th row of matrix 
        :math:`\ \boldsymbol{A},\ \ i\,=\,1,2,\ldots,m.` 
      | :math:`\ `

   On the other hand, the :math:`\ j`-th column of the product 
   :math:`\ \boldsymbol{A}\boldsymbol{B}\ ` is: :math:`\\`

   1. :math:`\,` the product of the matrix :math:`\ \boldsymbol{A}\,`
      by the :math:`\ j`-th column of matrix :math:`\boldsymbol{B};` 
      :math:`\\`

   2. | :math:`\,` the linear combination of columns of matrix 
        :math:`\ \boldsymbol{A},\,` the coefficients being 
      | :math:`\,` the consecutive elements of the :math:`\ j`-th column 
        :math:`\,` of matrix :math:`\boldsymbol{B},\ \ j=1,2,\ldots,n.`

.. admonition: Row and Column Rules of Matrix Multiplication. :math:`\\`

   Let :math:`\ \boldsymbol{A}\,\in M_{m\times p}(K),\ 
   \boldsymbol{B}\,\in M_{p\times n}(K).\ ` Then :math:`\\`

   :math:`\bullet\ \ ` the :math:`\ i`-th row of the product 
   :math:`\ \boldsymbol{A}\boldsymbol{B}\ ` is: :math:`\\`
   
   1. :math:`\,` the product of the :math:`\ i`-th row 
      of the matrix :math:`\ \boldsymbol{A}\ ` 
      by the matrix :math:`\ \boldsymbol{B};` :math:`\\`
   
   2. | :math:`\,` the linear combination of rows of matrix 
        :math:`\ \boldsymbol{B},\ ` the coefficients being
      | :math:`\,` the consecutive elements of the :math:`\ i`-th row of matrix 
        :math:`\ \boldsymbol{A},\ \ i\,=\,1,2,\ldots,m.`
      | :math:`\ `

   :math:`\bullet\ \ ` the :math:`\ j`-th column of the product 
   :math:`\ \boldsymbol{A}\boldsymbol{B}\ ` is: :math:`\\`

   1. :math:`\,` the product of the matrix :math:`\ \boldsymbol{A}\,`
      by the :math:`\ j`-th column of matrix :math:`\boldsymbol{B};` 
      :math:`\\`

   2. | :math:`\,` the linear combination of columns of matrix 
        :math:`\ \boldsymbol{A},\,` the coefficients being 
      | :math:`\,` the consecutive elements of the :math:`\ j`-th column 
        of matrix :math:`\boldsymbol{B},\ \ j=1,2,\ldots,n.`
      
:math:`\ `      
 






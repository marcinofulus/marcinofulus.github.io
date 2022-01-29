
Basic Operations on Matrices 
----------------------------

In this section we shall define addition of matrices of the same size,
multiplication of a matrix by a number, and the matrix multiplication,
where the product of two matrices of appropriate sizes is another matrix.

Matrix multiplication is introduced in two stages:
definition of the product of a matrix by a column vector
(which makes possible a compact notation of a system of linear equations)
is subsequently generalized to the case of a multi-column multiplicand.

Matrix Definition and Terminology
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Consider a system of :math:`\,m\,` linear equations in :math:`\,n\,` variables

.. math::
   :label: set_eqn

   \begin{array}{c}
   a_{11}\,x_1\;+\ \,a_{12}\,x_2\;+\ \,\ldots\ +\ \;a_{1n}\,x_n\ \,=\ \ b_1 \\
   a_{21}\,x_1\;+\ \,a_{22}\,x_2\;+\ \,\ldots\ +\ \;a_{2n}\,x_n\ \,=\ \ b_2 \\
   \ldots\qquad\ \ \ldots\qquad\ \ \ldots\qquad\ldots\qquad\quad\ldots      \\
   a_{m1}\,x_1\;+\ \,a_{m2}\,x_2\;+\ \,\ldots\ +\ \;a_{mn}\,x_n\ \,=\ \ b_m\,.
   \end{array}

The coefficients :math:`\,a_{ij}\,` of the variables 
:math:`(i=1,2,\ldots,m;\ \;j=1,2,\ldots,n)`
form the *rectangular matrix* :math:`\,\boldsymbol{A}\ `
(called hereafter the *coefficient matrix* of the system :eq:`set_eqn`)
with :math:`\,m\,` rows and :math:`\,n\,` columns,
denoted shortly by :math:`\,[a_{ij}]_{m\times n}:`

.. math::

   \boldsymbol{A}\ =\ [a_{ij}]_{m\times n}\ =\ 
   \left[\begin{array}{cccc}
   a_{11} & a_{12} & \ldots & a_{1n} \\
   a_{21} & a_{22} & \ldots & a_{2n} \\
   \ldots & \ldots & \ldots & \ldots \\
   a_{m1} & a_{m2} & \ldots & a_{mn}
   \end{array}\right]\,.

.. note::

   When the notation :math:`\,a_{ij}\,` of a matrix entry is applied,
   the first index (here :math:`i`) and the second index (here :math:`j`)
   designate respectively the row and the column, in which the entry is located.

The set of all rectangular matrices with :math:`\ m\ ` rows and :math:`\ n\ `
columns, whose elements belong to a field :math:`\,K,\,` is denoted by
:math:`\,M_{m\times n}(K)\ ` (:math:`\,K\,` is usually the field 
:math:`\,R\,` of real numbers or the field :math:`\,C\ ` of complex numbers).

When :math:`\,m=n,\,` :math:`\ \boldsymbol{A}\ ` is said to be 
a *square matrix* of size :math:`\,n.\ ` The set of all such square matrices 
is denoted by :math:`M_n(K).` 

The one-column matrices from :math:`\,M_{n\times 1}(K)\ `
may be considered identical with the corresponding column vectors from 
:math:`\,K^n.\ ` Examples thereof related to the system :eq:`set_eqn` are 
the *solution vector* :math:`\,\boldsymbol{x}\ ` 
and the *vector of constants* :math:`\,\boldsymbol{b}:`

.. math::

   \boldsymbol{x}\,=\,
   \left[\begin{array}{c} x_{1} \\ x_{2} \\ \ldots \\ x_{n} \end{array}\right]
   \ \in\ K^n\simeq M_{n\times 1}(K)\,,
   \qquad
   \boldsymbol{b}\,=\,
   \left[\begin{array}{c} b_{1} \\ b_{2} \\ \ldots \\ b_{m} \end{array}\right]
   \ \in\ K^m\simeq M_{m\times 1}(K)\,.
   
Addition and Scalar Multiplication. Vector Space of Matrices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Matrices from the set :math:`\,M_{m\times n}(K)\,` may be added:

.. math::

   \left[\begin{array}{ccc} 
       a_{11} & \ldots & a_{1n} \\
       a_{21} & \ldots & a_{2n} \\
       \ldots & \ldots & \ldots \\
       a_{m1} & \ldots & a_{mn}
   \end{array}\right]
   \ \ + \ \ 
   \left[\begin{array}{ccc} 
       b_{11} & \ldots & b_{1n} \\
       b_{21} & \ldots & b_{2n} \\
       \ldots & \ldots & \ldots \\
       b_{m1} & \ldots & b_{mn}
   \end{array}\right]
   \ \ :\,= \ \ 
   \left[\begin{array}{ccc} 
       a_{11} + b_{11} & \ldots & a_{1n} + b_{1n} \\
       a_{21} + b_{21} & \ldots & a_{2n} + b_{2n} \\
           \ldots      & \ldots &     \ldots      \\
       a_{m1} + b_{m1} & \ldots & a_{mn} + b_{mn}
   \end{array}\right]

and multiplied by numbers (called henceforth *scalars*) :math:`\, c \in K`:

.. math::

   c \ \ 
   \left[\begin{array}{cccc} 
       a_{11} & a_{12} & \ldots & a_{1n} \\
       a_{21} & a_{22} & \ldots & a_{2n} \\
       \ldots  & \ldots & \ldots & \ldots \\
       a_{m1} & a_{m2} & \ldots & a_{mn}
   \end{array}\right]
   \ \ :\,= \ \ 
   \left[\begin{array}{cccc}
       c \; a_{11} & c \; a_{12} & \ldots & c \; a_{1n} \\
       c \; a_{21} & c \; a_{22} & \ldots & c \; a_{2n} \\
       \ldots      & \ldots      & \ldots & \ldots      \\
       c \; a_{m1} & c \; a_{m2} & \ldots & c \; a_{mn}
   \end{array}\right]\,.

.. Addition of matrices consists in adding their respective elements, 
   which are numbers. This implies the associativity and commutativity
   of the matrix addition. 

In the above definitions the addition and scalar multiplication of matrices
are expressed by the respective operations on their elements, which are numbers.
Properties of the operations on numbers transfer in a natural way 
to the matrix domain. On that basis we claim that:

* matrix addition is associative and commutative:

  :math:`\quad (\boldsymbol{A} + \boldsymbol{B}) \, + \, \boldsymbol{C}
  \ \; = \ \;
  \boldsymbol{A} \, + \, (\boldsymbol{B} + \boldsymbol{C})\,,`
  
  :math:`\quad\ \boldsymbol{A}\, + \,\boldsymbol{B}\ \,=\ \,
  \boldsymbol{B}\, + \,\boldsymbol{A},\qquad
  \boldsymbol{A}, \, \boldsymbol{B}, \, \boldsymbol{C}\,
  \in \, M_{m\times n}(K).`
   
* scalar multiplication is distributive over scalar and matrix 
  addition, :math:`\\` and is compatible with field multiplication:
  
  :math:`\quad (a + b)\,\boldsymbol{A}\ =\ 
  a\,\boldsymbol{A}\, +\, b\,\boldsymbol{A}\,,`
  :math:`\quad a\,(\boldsymbol{A} + \boldsymbol{B})\ =\ 
  a\,\boldsymbol{A}\, +\, a\,\boldsymbol{B}\,,`
  
  :math:`\quad a\,(b\boldsymbol{A})\ =\ 
  (ab)\,\boldsymbol{A},\qquad 
  a,\,b\,\in K,\quad\boldsymbol{A},\,\boldsymbol{B}\,\in\, M_{m\times n}(K)\,,`

* scalar multiplication satisfies the trivial condition:

  :math:`\quad 1\,\boldsymbol{A}\ =\ 
  \boldsymbol{A},\qquad
  1\in K,\quad\boldsymbol{A}\,\in\, M_{m\times n}(K)\,.`

All these properties imply that the set :math:`\,M_{m\times n}(K)\,` of
matrices with :math:`\,m\,` rows and :math:`\,n\,` columns 
over a field :math:`\,K\,` is the vector space over that field.
The zero vector of this space is the zero matrix 
:math:`\ \boldsymbol{O}\,=\,[\,0\,]_{m\times n},\ ` and the opposite
(additive inverse) of the matrix 
:math:`\ \boldsymbol{A}\,=\,[a_{ij}]_{m\times n}\ ` is the matrix
:math:`\ \boldsymbol{-A}\,:\,=\,[-a_{ij}]_{m\times n}.`

Multiplication of a Matrix by a Column Vector
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
The product of a matrix :math:`\,\boldsymbol{A}\in M_{m\times n}(K)\,`
with :math:`\,m\,` rows and :math:`\,n\,` columns by a column vector
:math:`\,\boldsymbol{x}\in K^n\,` of size :math:`\,n\ ` is defined as follows: 

.. math::
   :label: prod_col
   
   \left[\begin{array}{cccc}
      a_{11} & a_{12} & \ldots & a_{1n} \\
      a_{21} & a_{22} & \ldots & a_{2n} \\
      \ldots & \ldots & \ldots & \ldots \\
      a_{m1} & a_{m2} & \ldots & a_{mn} \\
   \end{array}\right]
   \ 
   \left[\begin{array}{c} x_1 \\ x_2 \\ \ldots \\ x_n \end{array}\right]
   \ :\,=\  
   \left[\begin{array}{c}
      a_{11}\,x_1 +\,a_{12}\,x_2 + \,\ldots\, +\,a_{1n}\,x_n \\
      a_{21}\,x_1 +\,a_{22}\,x_2 + \,\ldots\, +\,a_{2n}\,x_n \\
      \ \ldots\qquad\ \ldots\qquad\ldots\qquad\ldots         \\
      a_{m1}\,x_1 +\,a_{m2}\,x_2 + \,\ldots\, +\,a_{mn}\,x_n
   \end{array}\right]
   
(the operation is possible iff the number of matrix' columns equals
the size of the vector).

According to equation :eq:`prod_col`, the multiplication 
(from the left-hand side) of a column vector :math:`\,\boldsymbol{x}\,` 
of size :math:`\,n\ ` by a matrix :math:`\,\boldsymbol{A}\,`
with :math:`\,m\,` rows and :math:`\,n\,` columns, returns 
a column vector :math:`\,\boldsymbol{y}\,` of size :math:`\,m\,`:

.. A possible interpretation of :eq:`prod_col` is that multiplication 
   (from the left-hand side) of a column vector :math:`\,\boldsymbol{x}\,` 
   of size :math:`\,n\ ` by the matrix :math:`\,\boldsymbol{A}\,=\,
   [a_{ij}]_{m\times n}\ ` returns a column vector :math:`\,\boldsymbol{y}\,` 
   of size :math:`\,m\,`:

.. math::
   
   \boldsymbol{A}\,\boldsymbol{x}\ =\ \boldsymbol{y}\,,\qquad\text{where}
   \quad y_i\ = \ 
   a_{i1}\,x_1 + \,a_{i2}\,x_2 + \,\ldots\, + \,a_{in}\,x_n\,,
   \quad i=1,2,\ldots,m.

The right-hand side of equation :eq:`prod_col` may be rewritten as

.. math::

   \left[\begin{array}{c}
   a_{11}\,x_1 +\,a_{12}\,x_2 + \,\ldots\, +\,a_{1n}\,x_n \\
   a_{21}\,x_1 +\,a_{22}\,x_2 + \,\ldots\, +\,a_{2n}\,x_n \\
   \ \ldots\qquad\ \ldots\qquad\ldots\qquad\ldots         \\
   a_{m1}\,x_1 +\,a_{m2}\,x_2 + \,\ldots\, +\,a_{mn}\,x_n
   \end{array}\right]
   \ \,=\ \, 
   x_1
   \left[\begin{array}{c} 
   a_{11} \\ a_{21} \\ \ldots \\ a_{m1} 
   \end{array}\right]
   \; +\ 
   x_2
   \left[\begin{array}{c} 
   a_{12} \\ a_{22} \\ \ldots \\ a_{m2} 
   \end{array}\right] 
   \; +\
   \ldots 
   \ + \ 
   x_n
   \left[\begin{array}{c} 
   a_{1n} \\ a_{2n} \\ \ldots \\ a_{mn} 
   \end{array}\right]\,.
  
Denoting by 
:math:`\ \,\boldsymbol{A}_1,\ \boldsymbol{A}_2,\ \ldots,\,\boldsymbol{A}_n\ \,`
the columns of the matrix :math:`\,\boldsymbol{A}\,:`

.. math::
   
   \boldsymbol{A}\ \,=\ \,
   [\,\boldsymbol{A}_1\,|\,\boldsymbol{A}_2\,|\,\ldots\,|\,\boldsymbol{A}_n\,]

.. równanie :eq:`prod_col` przyjmuje więc postać

we may rewrite equation :eq:`prod_col` in the form

.. math::
   :label: prod_col_1

   \boldsymbol{A} \, \boldsymbol{x} \ =\ 
   x_1\,\boldsymbol{A}_1 \ +\ x_2\,\boldsymbol{A}_2 \ +\ 
   \ldots \ + \ x_n\,\boldsymbol{A}_n\,.

.. admonition:: Rule 0. :math:`\ ` Product of a Matrix and a Vector.

   Suppose :math:`\,\boldsymbol{A}\in M_{m\times n}(K)\,,\ 
   \boldsymbol{x}\in K^n\,.\ `
   Then the product :math:`\,\boldsymbol{A}\,\boldsymbol{x}\ `
   is the linear combination of columns of matrix :math:`\,\boldsymbol{A},\ `
   the coefficients being consecutive elements of the vector
   :math:`\,\boldsymbol{x}.` 
   
Going back to the generic system of linear equations :eq:`set_eqn`,
we shall rewrite it in the form of equality of two column vectors:

.. math::

   \left[\begin{array}{c}
      a_{11}\,x_1 +\,a_{12}\,x_2 + \,\ldots\, +\,a_{1n}\,x_n \\
      a_{21}\,x_1 +\,a_{22}\,x_2 + \,\ldots\, +\,a_{2n}\,x_n \\
      \ \ldots\qquad\ \ldots\qquad\ldots\qquad\ldots         \\
      a_{m1}\,x_1 +\,a_{m2}\,x_2 + \,\ldots\, +\,a_{mn}\,x_n
   \end{array}\right]
   \ \ =\ \ 
   \left[\begin{array}{c} 
      b_{1} \\ b_{2} \\ \ldots \\ b_{m} 
   \end{array}\right]\,.

The definition :eq:`prod_col` of the matrix-vector product 
allows for the compact notation of :eq:`set_eqn`:

.. math::

   \boldsymbol{A} \, \boldsymbol{x} \ =\ \boldsymbol{b}\,.

Finally, due to the formula :eq:`prod_col_1`, :math:`\,` 
we obtain the column picture of a system of linear equations:

.. math::

   x_1\,\boldsymbol{A}_1\ +\ x_2\,\boldsymbol{A}_2\ +\ \ldots\ + \ 
   x_n\,\boldsymbol{A}_n\ =\ \boldsymbol{b}\,.

.. _`matrix_mult`:

Matrix Multiplication (Product of Two Matrices)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We mentioned earlier that column vectors from :math:`\,K^n\,`
may be identified with one-column matrices from :math:`\,M_{n\times 1}(K).\ `
Thus the formula :eq:`prod_col` may be interpreted as the recipe 
for the product of a :math:`\ m\times n\ ` matrix by a one-column 
matrix of size :math:`\,n.\ ` In this section we shall generalize it 
so that the multiplicand might be any multi-column matrix 
with :math:`\,n\,` rows.

Within this interpretation the product of matrices
:math:`\ \boldsymbol{A}\,=\,[a_{ij}]_{m\times p}\ \;` and 
:math:`\quad \boldsymbol{B}\,=\,[b_{ij}]_{p\times 1}\ \,`
reads:

.. math::

   \boldsymbol{A} \boldsymbol{B}
   \ =\ 
   \left[\,\begin{array}{cccc}
       a_{11} & a_{12} & \ldots & a_{1p} \\
       a_{21} & a_{22} & \ldots & a_{2p} \\
       \ldots & \ldots & \ldots & \ldots \\
       a_{m1} & a_{m2} & \ldots & a_{mp} \\
   \end{array}\right] \ 
   \left[\begin{array}{c} 
      b_{11} \\ b_{21} \\ \ldots \\ b_{p1} 
   \end{array}\right]
   \ =\ 
   \left[\begin{array}{c}
      a_{11}\,b_{11} +\,a_{12}\,b_{21} + \,\ldots\, +\,a_{1p}\,b_{p1} \\
      a_{21}\,b_{11} +\,a_{22}\,b_{21} + \,\ldots\, +\,a_{2p}\,b_{p1} \\
      \ \ldots\qquad\ \ldots\qquad\ldots\qquad\ldots                  \\
      a_{m1}\,b_{11} + a_{m2}\,b_{21} + \,\ldots\, +\,a_{mp}\,b_{p1}
   \end{array}\right]\,.

Denoting :math:`\ \boldsymbol{A} \boldsymbol{B}\ =\ 
\boldsymbol{C}\ =\ [c_{ij}]_{m\times 1}\ ` we get

.. math::
   :label: eqn_C1

   \boldsymbol{C}\ =\
   \left[\begin{array}{c} 
      c_{11} \\ c_{21} \\ \ldots \\ c_{m1} 
   \end{array}\right]
   \ =\ 
   \left[\begin{array}{c}
      a_{11}\,b_{11} +\,a_{12}\,b_{21} + \,\ldots\, +\,a_{1p}\,b_{p1} \\
      a_{21}\,b_{11} +\,a_{22}\,b_{21} + \,\ldots\, +\,a_{2p}\,b_{p1} \\
      \ \ldots\qquad\ \ldots\qquad\ldots\qquad\ldots                  \\
      a_{m1}\,b_{11} + a_{m2}\,b_{21} + \,\ldots\, +\,a_{mp}\,b_{p1}
   \end{array}\right]\,.

The columns of matrix :math:`\ \boldsymbol{A}\ ` being denoted by 
:math:`\ \boldsymbol{A}_1,\,\boldsymbol{A}_2,\,\dots,\,\boldsymbol{A}_p,\ `
this may be written as

.. math::
   :label: eqn_C2
   
   \begin{array}{lll}
   & \qquad & \boldsymbol{C}\ =\ 
   b_{11}\,\boldsymbol{A}_1\ +\ b_{21}\,\boldsymbol{A}_2\ +\ 
   \dots\ +\ b_{p1}\,\boldsymbol{A}_p
   \\[6pt] 
   \text{and} & \qquad & c_{i1}\ =\ 
   a_{i1}\,b_{11} + a_{i2}\,b_{21} + \,\ldots\, + a_{ip}\,b_{p1}
   \,,\quad i\,=\,1,2,\ldots,m\,.
   \end{array}

Now let matrix :math:`\ \boldsymbol{B}\ `
be composed of :math:`\,n\,` columns of size :math:`\,p`:

.. math::

   \boldsymbol{B}\ \ =\ \ 
   \left[\,\boldsymbol{B}_1\,|\,\boldsymbol{B}_2\,|\,
   \ldots\,|\,\boldsymbol{B}_n\,\right]\ \ =\ \ 
   \left[\begin{array}{cccc}
      b_{11} & b_{12} & \ldots & b_{1n} \\
      b_{21} & b_{22} & \ldots & b_{2n} \\
      \ldots & \ldots & \ldots & \ldots \\
      b_{p1} & b_{p2} & \ldots & b_{pn} \\
   \end{array}\right]\,.

The product :math:`\ \boldsymbol{A}\boldsymbol{B}\ \,` is then *defined* as
the matrix obtained by multiplication (from the left) of each column of
:math:`\ \boldsymbol{B}\ \,` by the matrix :math:`\ \boldsymbol{A}:`

.. math::
   :label: rule_col_1

   \boldsymbol{A}\boldsymbol{B}\ \equiv\ 
   \boldsymbol{A}\ \left[\,\boldsymbol{B}_1\,|\,
   \boldsymbol{B}_2\,|\,\ldots\,|\,
   \boldsymbol{B}_n\,\right]\ \ :\,=\ \ 
   \left[\;\boldsymbol{A}\boldsymbol{B}_1\;|\;
   \boldsymbol{A}\boldsymbol{B}_2\;|\;\ldots\;|\; 
   \boldsymbol{A}\boldsymbol{B}_n\;\right]\,.

Denoting 
:math:`\,\boldsymbol{A}\boldsymbol{B} = \boldsymbol{C} = 
[\;\boldsymbol{C}_1\,|\,\boldsymbol{C}_2\,|\,\ldots\,|\,
\boldsymbol{C}_n\;] = [c_{ij}]_{m\times n}\,`
we get, by analogy with :eq:`eqn_C1`, :eq:`eqn_C2`: 

.. math::

   \boldsymbol{C}_j\ =\ 
   \left[\begin{array}{c} 
   c_{1j} \\ c_{2j} \\ \ldots \\ c_{mj} 
   \end{array}\right]\ =\ 
   \left[\begin{array}{c}
   a_{11}\,b_{1j} +\,a_{12}\,b_{2j} + \,\ldots\, +\,a_{1p}\,b_{pj} \\
   a_{21}\,b_{1j} +\,a_{22}\,b_{2j} + \,\ldots\, +\,a_{2p}\,b_{pj} \\
   \ \ldots\qquad\ \ldots\qquad\ldots\qquad\ldots                  \\
   a_{m1}\,b_{1j} +\,a_{m2}\,b_{2j} + \,\ldots\, +\,a_{mp}\,b_{pj}
   \end{array}\right]\,,

.. math::
   :label: eqn_C3

   \begin{array}{l}
   \boldsymbol{C}_j\ =\ 
   b_{1j}\,\boldsymbol{A}_1\ +\ b_{2j}\,\boldsymbol{A}_2\ +\ 
   \ldots\ + \ b_{pj}\,\boldsymbol{A}_p
   \\
   c_{ij}\ =\ 
   a_{i1}\,b_{1j} +\,a_{i2}\,b_{2j} + \,\ldots\, +\,a_{ip}\,b_{pj}
   \,,\qquad 
   \begin{array}{l} 
   i\,=\,1,2,\ldots,m\,; \\ 
   j\,=\,1,2,\ldots,n.
   \end{array}
   \end{array}

The definition :math:`\,` :eq:`rule_col_1` :math:`\,`
and formula :math:`\,` :eq:`eqn_C3` :math:`\,` which arises from it
may be restated as

.. admonition:: Rule 1. :math:`\ ` 
   Column Rule of Matrix Multiplication. :math:`\\`

   Let :math:`\ \boldsymbol{A}\,\in M_{m\times p}(K),\ 
   \boldsymbol{B}\,\in M_{p\times n}(K).\ `
   Then the :math:`\ j`-th column of the product 
   :math:`\ \boldsymbol{A}\boldsymbol{B}\ ` is: :math:`\\`

   1. :math:`\,` the product of the matrix :math:`\ \boldsymbol{A}\,`
      by the :math:`\ j`-th column of matrix :math:`\boldsymbol{B};` 
      :math:`\\`

   2. | :math:`\,` the linear combination of columns of matrix 
        :math:`\ \boldsymbol{A},\,` the coefficients being
      | :math:`\,` the consecutive elements of the :math:`\ j`-th column 
        of matrix :math:`\boldsymbol{B},\ \ j=1,2,\ldots,n.`

.. According to formula :eq:`eqn_C3`, 

The space :math:`\,M_{1\times 1}(K)\,` of 1-element matrices 
over the field :math:`\,K\,` being identified with the field 
:math:`\,K\,` itself: :math:`\ M_{1\times 1}(K)\simeq K,\ ` 
the element :math:`\ c_{ij}\,` of the matrix 
:math:`\,\boldsymbol{C}=\boldsymbol{A}\boldsymbol{B}\,`
is the product (in the sense of equation :eq:`prod_col_1` 
and Rule 0.) of the :math:`\,i`-th row of matrix :math:`\,\boldsymbol{A}\,` 
by the :math:`\,j`-th column of matrix :math:`\,\boldsymbol{B}:`

.. math:
   
   c_{ij}\ =\ 
   a_{i1}\,b_{1j} + a_{i2}\,b_{2j} + \,\ldots \;+\; a_{ip}\,b_{pj}\ \,=\ \;
   [\ a_{i1}\ \ a_{i2}\ \ \ldots\ \ a_{ip}\ ] \ 
   \left[\begin{array}{c} 
   b_{1j} \\ b_{2j} \\ \ldots \\ b_{pj} 
   \end{array}\right]\,.

.. math::
   
   c_{ij}\ =\ 
   a_{i1}\,b_{1j} + a_{i2}\,b_{2j} + \,\ldots \;+\; a_{ip}\,b_{pj}\ \,=\ \;
   \left[\begin{array}{cccc}   
   a_{i1} & a_{i2} & \ldots & a_{ip}
   \end{array}\right]\ 
   \left[\begin{array}{c} 
   b_{1j} \\ b_{2j} \\ \ldots \\ b_{pj} 
   \end{array}\right]\,.

In this way we get the practical recipe for calculating elements of the 
matrix product:

.. admonition:: Rule 2. :math:`\ `
   Practical Calculation of Matrix Product. :math:`\,`
   
   If :math:`\,\boldsymbol{A}\,\in M_{m\times p}(K),\ 
   \boldsymbol{B}\,\in M_{p\times n}(K)\,,\ ` then the element 
   at the :math:`\,i`-th row and the :math:`\,j`-th column
   of the product :math:`\,\boldsymbol{A}\boldsymbol{B}\,`
   is the product of the :math:`\,i`-th row of matrix 
   :math:`\,\boldsymbol{A}\,` by the :math:`\,j`-th column
   of matrix :math:`\,\boldsymbol{B},`
   :math:`\ \ i\,=\,1,2,\ldots,m\,,\ \,j\,=\,1,2,\ldots,n.`

The above formulae pertaining the matrix product may be gathered as follows:

.. admonition:: General Formulae for Matrix Multiplication. :math:`\\`
   
   Let :math:`\,\boldsymbol{A},\boldsymbol{B}\in M(K).\ `
   The product :math:`\,\boldsymbol{A}\boldsymbol{B}\,` exists if and only if
   the number of columns of matrix :math:`\,\boldsymbol{A}\,` equals
   the number of rows of matrix :math:`\,\boldsymbol{B}.\,`
   Then the row size of the product :math:`\,\boldsymbol{A}\boldsymbol{B}\,`
   equals that of :math:`\,\boldsymbol{A}\,` and the column size of
   :math:`\,\boldsymbol{A}\boldsymbol{B}\,` equals that of 
   :math:`\,\boldsymbol{B}.\,` The elements of 
   :math:`\,\boldsymbol{A}\boldsymbol{B}\,` are products of rows of 
   :math:`\,\boldsymbol{A}\,` by the columns of :math:`\,\boldsymbol{B}.\,` 
   :math:`\\`

   Specifically, if :math:`\ \boldsymbol{A}\,=\,
   [a_{ij}]_{m\times p}\,,\ \boldsymbol{B}\,=\,[b_{ij}]_{p\times n}\,,\ `
   then :math:`\ \,\boldsymbol{A} \boldsymbol{B} = 
   \boldsymbol{C} = [c_{ij}]_{m\times n}\,,\ ` where
   
   .. math::
   
      c_{ij}\ =\ 
      \left[\begin{array}{cccc}
      a_{i1} & a_{i2} & \ldots & a_{ip}
      \end{array}\right]\ 
      \left[\begin{array}{c} 
      b_{1j} \\ b_{2j} \\ \ldots \\ b_{pj} 
      \end{array}\right]
      \ \, =\ \,\sum_{k=1}^p \; a_{ik}\,b_{kj}\,,
      \qquad
      \begin{array}{l} 
      i\,=\,1,2,\ldots,m\,; \\ 
      j\,=\,1,2,\ldots,n. 
      \end{array}





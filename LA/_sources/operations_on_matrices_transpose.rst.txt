
Matrix Transpose
----------------

The *transpose* of a matrix 
:math:`\,\boldsymbol{A}=[a_{ij}]_{m\times n}\,` is defined as 
the matrix :math:`\,\boldsymbol{A}^T=\,[a^T_{ij}]_{n\times m}\,,\ ` where

.. math::
   
   a_{ij}^T\ :\,=\ a_{ji},\qquad i=1,2,\ldots,n;\ \ j=1,2,\ldots,m.


In the direct notation: :math:`\qquad
\left[\begin{array}{cccc}
a_{11} & a_{12} & \ldots & a_{1n} \\
a_{21} & a_{22} & \ldots & a_{2n} \\
\ldots & \ldots & \ldots & \ldots \\
a_{m1} & a_{m2} & \ldots & a_{mn}
\end{array}\right]^T
\ =\quad
\left[\begin{array}{cccc}
a_{11} & a_{21} & \ldots & a_{m1} \\
a_{12} & a_{22} & \ldots & a_{m2} \\
\ldots & \ldots & \ldots & \ldots \\
a_{1n} & a_{2n} & \ldots & a_{mn}
\end{array}\right]\,.`

.. math:
   
   \left[\begin{array}{cccc}
      a_{11} & a_{12} & \ldots & a_{1n} \\
      a_{21} & a_{22} & \ldots & a_{2n} \\
      \ldots & \ldots & \ldots & \ldots \\
      a_{m1} & a_{m2} & \ldots & a_{mn}
   \end{array}\right]^{\ T}
   \ =\quad
   \left[\begin{array}{cccc}
      a_{11} & a_{21} & \ldots & a_{m1} \\
      a_{12} & a_{22} & \ldots & a_{m2} \\
      \ldots & \ldots & \ldots & \ldots \\
      a_{1n} & a_{2n} & \ldots & a_{mn}
   \end{array}\right]\,.

.. \ \ i=1,2,\ldots,n;\ j=1,2,\ldots,m.`

Thus each :math:`\,i`-th row of matrix  :math:`\,\boldsymbol{A}^T\,`
is composed of elements of the :math:`\,i`-th column of matrix 
:math:`\,\boldsymbol{A},\,` and each `\ j`-th column of matrix 
:math:`\,\boldsymbol{A}^T\,` is composed of elements of the 
:math:`\,j`-th row of matrix :math:`\,\boldsymbol{A},\,` 
:math:`\ i=1,2,\ldots,n;\ j=1,2,\ldots,m.`

Graphically, the operation of transposing a matrix may be described as
the reflection of that matrix over its main diagonal.

**Examples.**

1.) :math:`\ ` If 
:math:`\ \ \boldsymbol{A}\ =\ \left[\begin{array}{rr} 
2 & - 1 \\ 3 & 0 \\ - 2 & 1 \end{array}\right]
\in M_{3\times 2}(R),\ \ ` 
then :math:`\ \ \boldsymbol{A}^T\ =\ \left[\begin{array}{rrr} 
2 & 3 & -2 \\ -1 & 0 & 1 \end{array} \right]\in M_{2\times 3}(R).`

2.) :math:`\ ` Transpose of a square matrix over the ring :math:`\,Z:`
:math:`\ \ \left[\begin{array}{rrr} 
-2 & 1 & 0 \\ 5 & 2 & 3 \\ 7 & -3 & 8 
\end{array}\right]^T =\ \;\left[\begin{array}{rrr} 
-2 & 5 & 7 \\ 1 & 2 & -3 \\ 0 & 3 & 8 
\end{array}\right]\,.`

3.) :math:`\ ` Transpose of a one-column matrix over any ring:  
:math:`\ \ \left[\begin{array}{c} 
a_1 \\ a_2 \\ a_3 \\ a_4
\end{array}\right]^T =\ \;\left[\begin{array}{cccc} 
a_1 & a_2 & a_3 & a_4
\end{array}\right]\,.`

.. :math:`\\` 

**Properties of Transpose.** 

0.) :math:`\,` If :math:`\,\boldsymbol{A}\in M_{m \times n}(K),\,` 
then :math:`\,\left(\boldsymbol{A}^T\right)^T\ =\ \boldsymbol{A}`

(a twofold application of transpose returns the original matrix).

1.) :math:`\,` Let 
:math:`\,\boldsymbol{A},\boldsymbol{B}\in M_{m \times n}(K),\ c\in K.\ \ ` 
Then
:math:`\ \ (\boldsymbol{A}+\boldsymbol{B})^T =\,
\boldsymbol{A}^T + \boldsymbol{B}^T,\ \ 
(c\boldsymbol{A})^T =\,c\boldsymbol{A}^T\,.`

(transpose of a sum of two matrices equals the sum of their transposes, 
:math:`\\`
a numerical factor may be moved up to the front of the transpose symbol:
:math:`\\`
transpose is a linear operation).

.. math:
   
   (\boldsymbol{A}+\boldsymbol{B})^T = \boldsymbol{A}^T + \boldsymbol{B}^T,
   \quad (c\boldsymbol{A})^T = c\boldsymbol{A}^T

2.) :math:`\,` Let :math:`\,\boldsymbol{A}\in M_{m\times p}(K),\ 
\boldsymbol{B}\in M_{p\times n}(K).\ ` Then 
:math:`\ \ (\boldsymbol{A}\boldsymbol{B})^T =\,
\boldsymbol{B}^T\boldsymbol{A}^T\,`

(transpose of a product of two matrices equals the product 
of their transposes in reverse order).

.. math:
   
   (\boldsymbol{A}\boldsymbol{B})^T = \boldsymbol{B}^T\boldsymbol{A}^T\,.

**Proof** of the Property 2.:

* | Comparison of the matrices' dimensions.
  | :math:`\boldsymbol{A}\boldsymbol{B}:\ m\times n\,;\quad
    (\boldsymbol{A}\boldsymbol{B})^T:\ n\times m\,.`
  | :math:`\boldsymbol{B}^T:\ n\times p\,;\quad
    \boldsymbol{A}^T:\ p\times m\,;\quad 
    \boldsymbol{B}^T\boldsymbol{A}^T:\ n\times m\,.`

* | Comparison of the corresponding matrix elements.
  | For :math:`\boldsymbol{A} = [a_{ij}]_{m\times p}\,,\ 
    \boldsymbol{B}=[b_{ij}]_{p\times n}:`
  | :math:`(\boldsymbol{A}\boldsymbol{B})^T|_{ij}\ =\ 
    (\boldsymbol{A}\boldsymbol{B})|_{ji}\ =\ 
    \sum\limits_{s=1}^p \,a_{js}\,b_{si}\,,` 
  | :math:`\boldsymbol{B}^T\boldsymbol{A}^T|_{ij}\ =\ 
    \sum\limits_{s=1}^p \,b_{is}^T\,a_{sj}^T\ =\ 
    \sum\limits_{s=1}^p \,a_{js}\,b_{si}\,,\quad 
    i=1,2,\ldots,n;\ \ j=1,2,\ldots,m.\quad\bullet`

Symmetric and Skew-Symmetric Matrices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A square matrix :math:`\,\boldsymbol{A}=[a_{ij}]_{n\times n}\in M_n(K)\,` is 
called a *symmetric matrix*, :math:`\\`
if :math:`\,\boldsymbol{A}^T=\boldsymbol{A}\,,\ `
that is if :math:`\ \, a_{ij} = a_{ji}\,,\ \ i,j=1,2,\ldots,n.`
 
Such matrix is invariant under the reflection over its main diagonal.

On the other hand, when :math:`\,\boldsymbol{A}^T=-\boldsymbol{A}\,,\ `
the matrix :math:`\,\boldsymbol{A}\ ` is said to be *skew-symmetric*.

Then  :math:`\ a_{ij} = - \  a_{ji}\,,\ \ i,j=1,2,\ldots,n,\ `
wherefrom :math:`\ a_{ii} = 0\ \ \text{for}\ \ i=1,2,\ldots,n. \\`
(in a skew-symmetric matrix all diagonal entries vanish).

Symmetric and skew-symmetric real matrices of size three 
have the following general form:

.. math::
   
   \boldsymbol{A}_s\ =\ \left[\begin{array}{ccc}
                         a & b & c \\ b & d & e \\ c & e & f
                      \end{array}\right]\,,
   \qquad
   \boldsymbol{A}_a\ =\ \left[\begin{array}{rrr}
                         0 & a & \ \ b \\ -a & 0 & \ \ c \\ -b & -c & \ \ 0
                      \end{array}\,\right]\,.

Every square matrix :math:`\,\boldsymbol{A}\in M_n(K)\,` may be expressed 
in a unique way as a sum of a symmetric and a skew-symmetric matrix components:

.. math::

   \boldsymbol{A}\ \ =\ \ 
   \textstyle{1\over 2}\ (\boldsymbol{A}+\boldsymbol{A}^T)\ +\ 
   \textstyle{1\over 2}\ (\boldsymbol{A}-\boldsymbol{A}^T),

In Sage the matrix transpose is performed by the method ``transpose()``
(abbreviated to ``T``). There are also methods ``is_symmetric()`` 
and ``is_skew_symmetric()``, which check whether a given square matrix 
has the respective property.

**Example.** :math:`\,` We shall rewrite the matrix

.. math::

   \boldsymbol{A}\ =\ \left[\begin{array}{rrr}
                         4 &  3 & -1 \\ 
                         2 & -5 &  8 \\ 
                         0 & -2 &  1
                      \end{array}\right]\,\in\,M_3(R)

as the sum of symmetric and skew-symmetric components. 
The Sage code:

.. code-block:: python

   sage: A = matrix(QQ,[[4, 3,-1],
                        [2,-5, 8],
                        [0,-2, 1]])

   sage: As = (A + A.T)/2 
   sage: Aa = (A - A.T)/2

   sage: show(table([[A, '=', As, '+', Aa]]))
   sage: (As.is_symmetric(), Aa.is_skew_symmetric())

yields the following result:

.. math::
   
   \left[\begin{array}{rrr}
      4 &  3 & -1 \\
      2 & -5 &  8 \\
      0 & -2 &  1
   \end{array}\right]\ \ =\ \ 
   \left[\begin{array}{rrr}
      4 & \textstyle{5\over 2} & -\textstyle{1\over 2} \\
      \textstyle{5\over 2} & -5 & 3 \\
      -\textstyle{1\over 2} & 3 & 1 \\
   \end{array}\right]\ \ +\ \ 
   \left[\begin{array}{rrr}
      0 & \textstyle{1\over 2} & -\textstyle{1\over 2} \\
      -\textstyle{1\over 2} & 0 & 5 \\
      \textstyle{1\over 2} & -5 & 0 \\
   \end{array}\right]

(True, True)
   


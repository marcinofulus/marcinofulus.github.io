
Problems and Exercises
----------------------

LU Factorization
~~~~~~~~~~~~~~~~

**Problem 1.** :math:`\,`
Prove that the inverse of a non-singular lower (upper) triangular matrix
is also a lower (upper) triangular matrix.

**Proof.** :math:`\,`
Let :math:`\,\boldsymbol{L}\,` be a non-singular lower triangular matrix
of size :math:`\,n\,` over a field :math:`\,K,\ ` and 

.. The inverse :math:`\,\boldsymbol{L}^{-1}\,` reads

.. math::
   
   \boldsymbol{L}^{-1}\ =\ 
   \left[\,\boldsymbol{x}_1\,|\,\boldsymbol{x}_2\,|\,\ldots\,|\,
   \boldsymbol{x}_n\,\right]\ =\ 
   [x_{ij}]_{\,n\times n}\,,
   \quad\text{where}\quad
   \boldsymbol{x}_j\ =\ 
   \left[\begin{array}{c}
   x_{1j} \\ x_{2j} \\ \ldots \\ x_{nj}
   \end{array}\right],
   \quad j=1,2,\ldots,n.

Using the Column Rule of Matrix Multiplication, we may write

.. math::
   
   \boldsymbol{L}\,\boldsymbol{L}^{-1}\ =\ \boldsymbol{I}_n\,,

   \boldsymbol{L}\ 
   \left[\,\boldsymbol{x}_1\,|\,\boldsymbol{x}_2\,|\,\ldots\,|\,
   \boldsymbol{x}_n\,\right]\ =\ 
   \left[\,\boldsymbol{e}_1\,|\,\boldsymbol{e}_2\,|\,\ldots\,|\,
   \boldsymbol{e}_n\,\right]\,,

   \left[\,
   \boldsymbol{L}\boldsymbol{x}_1\,|\,
   \boldsymbol{L}\boldsymbol{x}_2\,|\,\ldots\,|\,
   \boldsymbol{L}\boldsymbol{x}_n\,\right]\ =\ 
   \left[\,\boldsymbol{e}_1\,|\,\boldsymbol{e}_2\,|\,\ldots\,|\,
   \boldsymbol{e}_n\,\right]\,,

   \boldsymbol{L}\,\boldsymbol{x}_j\ =\ \boldsymbol{e}_j\,,
   \qquad j=1,2,\ldots,n.

Here :math:`\,\boldsymbol{e}_j\,` is a column vector with unity 
in the :math:`\,j`-th row and zeros elsewhere.

According to the Cramer's rule we get

.. math::
   
   x_{ij}\ =\ \,\frac{D_{ij}}{D}\,,
   \qquad\text{where}\quad
   \begin{array}{l}
   D_{ij}=\det{\boldsymbol{L}_{ij}}\,, \\ D\ =\ \det{\boldsymbol{L}}\,;
   \end{array}
   \quad
   i,j=1,2,\ldots,n.

:math:`\boldsymbol{L}_{ij}\ ` is a matrix obtained from :math:`\boldsymbol{L}\,`
by replacing the :math:`\,i`-th column with :math:`\boldsymbol{e}_j\,:`

.. math::
   
   \boldsymbol{L}_{ij}\ =\ 
   \left[\,
   \boldsymbol{x}_1\,|\,\ldots\,|\,
   \boldsymbol{x}_{i-1}\,|\,
   \boldsymbol{e}_j\,|\,
   \boldsymbol{x}_{i+1}\,|\,\ldots\,|\,
   \boldsymbol{x}_n\,\right]\,,
   \qquad i,j=1,2,\ldots,n.

Remembering that :math:`\boldsymbol{L}\,` is a lower triangular matrix,
it's easy to realize that :math:`\,D_{ij}=0\,` for :math:`\,i<j.\ ` Thus

.. math::
   
   x_{ij} = 0\quad\text{for}\quad i<j,\ \ i,j=1,2,\ldots,n,

hence :math:`\boldsymbol{L}^{-1}\,` is a lower triangular matrix.
:math:`\quad\bullet` 

**Exercise 1.** :math:`\,`
The Sage code below constructs a random matrix 
:math:`\,\boldsymbol{A}\in M_{m\times n}(Q)\,`
and returns its decomposition 
:math:`\,\boldsymbol{A} = \boldsymbol{P}\,\boldsymbol{L}\,\boldsymbol{U}.\,`

* write down additional commands to verify the decomposition;

* set various dimensions :math:`\,m\,`
  and :math:`\,n\,` of matrix :math:`\,\boldsymbol{A};`

* try another pivoting strategy (pivot = 'nonzero') :math:`\\`
  or another format of the output (format = 'compact'). [2]_

.. sagecellserver::

   m = 3
   n = 4
   A = random_matrix(QQ, m, n, rank=m, upper_bound=10,
                     algorithm='echelonizable')

   (P,L,U) = A.LU()

   table([[A, '=', P, '$\\cdot$', L, '$\\cdot$', U]])



.. [2] http://doc.sagemath.org/html/en/reference/matrices/sage/matrix/matrix2.html

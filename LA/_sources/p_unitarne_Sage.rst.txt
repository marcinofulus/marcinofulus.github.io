
Application of Sage
-------------------

Inner Product
~~~~~~~~~~~~~

An inner product of vectors :math:`\quad
\boldsymbol{x}\,=\,
\left[\begin{array}{c} x_1 \\ x_2 \\ \dots \\ x_n \end{array}\right]\,,
\quad
\boldsymbol{y}\,=\,
\left[\begin{array}{c} y_1 \\ y_2 \\ \dots \\ y_n \end{array}\right]\quad
\in K^n\,,` :math:`\\`

where :math:`\ K=R\ \,` or :math:`\ K=C\,,\ ` may be computed by multiplication operation 
:math:`\,` * :math:`\,`  or Sage methods:  
:math:`\,` ``dot_product()``, :math:`\,` ``hermitian_inner_product()``, 
:math:`\,` ``inner_product()``.

.. Metoda :math:`\,` ``dot_product()`` :math:`\,` oblicza iloczyn skalarny według wzoru

First two methods compute an inner product according to the formula

.. math::
   :label: xTy
   
   \langle\boldsymbol{x},\boldsymbol{y}\rangle\ \ =\ \ 
   \boldsymbol{x}^T\boldsymbol{y}\ \ =\ \ 
   \sum_{i\,=\,1}^n\ x_i\;y_i\,,

which is suitable for real vectors. The code below returns an inner product of two vectors  
of size :math:`\,n\ ` in a symbolic form and verifies whether the two methods are equivalent:

.. code-block:: python
   
   sage: n = 4
   sage: x = vector([var('x%d' % k) for k in range(1,n+1)])
   sage: y = vector([var('y%d' % l) for l in range(1,n+1)])
   sage: print x.dot_product(y), bool(x.dot_product(y)==x*y)

   x1*y1 + x2*y2 + x3*y3 + x4*y4 True

The vectors may come from different rings as long as the operations on their entries make sense: 

.. code-block:: python
   
   sage: x = vector(ZZ, [ 3,-1, 4])
   sage: y = vector(CDF,[-2, 7, 5])
   sage: xdy = x.dot_product(y)
   sage: print xdy, xdy.base_ring()
   
   7.0 Complex Double Field

The method :math:`\,` ``hermitian_inner_product()`` :math:`\,` computes an inner product of the form

.. math::
   
   \langle\boldsymbol{x},\boldsymbol{y}\rangle\ \ =\ \ 
   \boldsymbol{x}^+\boldsymbol{y}\ \ =\ \ 
   \sum_{i\,=\,1}^n\ x_i^*\,y_i\,,

which is suitable for the unitary space :math:`\,C^n\ \,` 
(here ``dot_product()`` returns an incorrect result):

.. code-block:: python

   sage: x = vector([3+2*I,-1+I,2-I])
   sage: y = vector([1+I,2,-3*I])
   sage: xdy  = x.dot_product(y)
   sage: xhy = x.hermitian_inner_product(y)
   sage: print "Erroneous result: ", xdy
   sage: print "Correct result:", xhy

   Erroneous result:  I - 4
   Correct result: -7*I + 6

An inner product in the space :math:`\,R^n\ ` may be also defined in a more general way:

.. math::
   :label: xTAy
   
   \langle\boldsymbol{x},\boldsymbol{y}\rangle\ \ =\ \ 
   \boldsymbol{x}^T\boldsymbol{A}\,\boldsymbol{y}\ \ =\ \ 
   \sum_{i,\,j=1}^n\ a_{ij}\;x_i\,y_j\,,
      
where :math:`\ \boldsymbol{A}=[\,a_{ij}\,]_{n\times n}\in M_n(R)\ ` is a symmetric positive definite matrix:

.. math::
   :label: ATA
   
   \boldsymbol{A}^T=\boldsymbol{A}\,,\qquad\
   \left[\ 
   \boldsymbol{x}^T\boldsymbol{A}\,\boldsymbol{x}\geq 0
   \quad\land\quad
   \left(\ \boldsymbol{x}^T\boldsymbol{A}\,\boldsymbol{x}=0
   \ \ \Leftrightarrow\ \ 
   \boldsymbol{x}=\boldsymbol{0}\ \right)\ \right]\,,\ \ 
   \boldsymbol{x}\in R^n\,.

(the condition :eq:`ATA` is satisfied if and only if 
:math:`\ \boldsymbol{A}=\boldsymbol{C}^T\boldsymbol{C}\,,\ \ \det\boldsymbol{C}\neq 0\,`).

To compute an inner product of the form :eq:`xTAy` one may use the method 
:math:`\,` ``inner_product()``. 
The matrix :math:`\,\boldsymbol{A}\ ` may be included in a definition of the ring
to which the vector :math:`\,\boldsymbol{x}\ ` belongs. If it is not included, then the method
works exactly the same as :math:`\,` ``dot_product()``:

.. code-block:: python

   sage: x = vector(QQ,[3, 2, 4,-1])
   sage: y = vector(ZZ,[3, 1,-4, 2])
   sage: xiy = x.inner_product(y)
   sage: xiy, xiy==x.dot_product(y)

   (-7, True)

The code below computes an inner product :eq:`xTAy` 
with matrix :math:`\ \,\boldsymbol{A}=\boldsymbol{C}^T\boldsymbol{C}\ \,`
for the same vectors :math:`\,` ``x,y`` :math:`\,`
and :math:`\,` verifies correctness of the result by direct computation.  
Matrix :math:`\,\boldsymbol{A}\ `
is read from a definition of the *first* factor.
Hence, change of order of the factors returns a different result
(in this case: a standard inner product :eq:`xTy`).

.. code-block:: python

   sage: C= matrix(QQ,[[ 2,-1, 0, 3],
                       [ 4,-2, 1,-1],
                       [ 4, 1, 2,-5],
                       [-3, 0, 2, 0]])
   
   sage: A = C.T*C
   
   sage: X = VectorSpace(QQ, 4, inner_product_matrix=A)
   sage: x = X([3,2,4,-1])
   
   sage: Y = FreeModule(ZZ,4)
   sage: y = Y([3,1,-4,2])
   
   sage: xiy = x.inner_product(y)
   sage: yix = y.inner_product(x)
   
   sage: test_xy = xiy==(x.row()*A*y.column())[0,0]
   sage: test_yx = yix==(y.row()*x.column())[0,0]    
   
   sage: print "Scalar product with the matrix A: <x,y> =",\
         xiy, test_xy
   
   sage: print "The generic scalar product:       <y,x> = ",\
         yix, test_yx

   Scalar product with the matrix A: <x,y> = -55 True
   The generic scalar product:       <y,x> =  -7 True

Norm
~~~~

Function (method) :math:`\,` ``norm()`` :math:`\,` computes a :math:`\,p`-norm 
of a real or complex vector

.. math::
   
   \boldsymbol{x}\,=\,
   \left[\begin{array}{c} x_1 \\ x_2 \\ \ldots \\ x_n \end{array}\right]\ 
   \in K^n\,,\qquad K=R\quad\lor\quad K=C

according to the formula:
:math:`\qquad\|\boldsymbol{x}\|_p\ \ :\,=\ \ 
\left(\ \displaystyle\sum_{i\,=\,1}^n\ |x_i|^{\,p}\right)^{1/p}\,,\qquad
1 \leq p \leq \infty\,.`

Particular cases:

:math:`\quad\|\boldsymbol{x}\|_1\ \ =\ \ 
|x_1|+\,|x_2|+\,\ldots\,+\,|x_n|\ ;`

:math:`\quad\|\boldsymbol{x}\|_2\ \ =\ \ 
\sqrt{\,|x_1|^2+\,|x_2|^2+\ldots\,+\,|x_n|^2\,}\quad` (Euclidean norm)

:math:`\quad\|\boldsymbol{x}\|_\infty\ \ =\ \ 
\displaystyle\lim_{p\rightarrow\infty}\|\boldsymbol{x}\|_p\ \ =\ \ 
\max_{i=1\dots n} |x_i|\,.`

The command ``norm`` may be used as a function: ``norm(x)``, 
or as a method: ``x.norm(p)``, :math:`\\`
where a default value for the parameter :math:`\,p\ ` is 2, which corresponds to the Euclidean norm.

.. admonition:: Experiment with Sage:
   
   If you set the size :math:`\,n\ ` of a vector :math:`\,\boldsymbol{x}\ ` 
   and the norm parameter :math:`\,p\,,\ ` you obtain a symbolic :math:`\\`
   expression for the Euclidean norm and the :math:`\,p`-norm of a vector
   :math:`\,\boldsymbol{x}.\ ` 

.. sagecellserver::
  
   n = 3
   p = 4
   x = vector([var('x%d' % k) for k in range(1,n+1)])
   show(norm(x))
   show(x.norm(p))

:math:`\;`

The method ``norm()`` also computes the matrix norm

.. math::
   :label: m_norm
   
   \|\boldsymbol{A}\|_p\ \ :\,=\ \ \max_{\boldsymbol{x}\neq\boldsymbol{0}}\ 
   \frac{\|\boldsymbol{A}\boldsymbol{x}\|_p}{\|\boldsymbol{x}\|_p}\ ,\qquad
   \boldsymbol{A}=[\,a_{ij}\,]_{n\times n}\in M_n(K)\,,\quad 1 \leq p \leq \infty\,,

induced in algebra :math:`\,M_n(K)\ ` by the :math:`\,p`-norm on :math:`\,K^n\,,\ ` 
and also the Frobenius norm

.. math::
   
   \|\boldsymbol{A}\|_F\ \ :\,=\ \ \sqrt{\,\sum_{i,\,j=1}^n\ |a_{ij}|^2}\,,\qquad
   \boldsymbol{A}=[\,a_{ij}\,]_{n\times n}\in M_n(K)\,,

which is a direct generalisation of the Euclidean vector norm. :math:`\\`
Particular cases of the norm :eq:`m_norm` are:

:math:`\quad\|\boldsymbol{A}\|_1\ \,=\ \,
\displaystyle\max_{j=1\dots n}\ \sum_{i\,=\,1}^n\ |a_{ij}|\quad`
(the greatest column sum) ;

:math:`\quad\|\boldsymbol{A}\|_\infty\ \,=\ \,
\displaystyle\max_{i=1\dots n}\ \sum_{j\,=\,1}^n\ |a_{ij}|\quad`  
(the greatest row sum) .

.. **Przykłady dla**
   :math:`\quad\boldsymbol{x}\ =\ 
   \left[\begin{array}{c} 1-2\,i \\ 3\,i \\ -4 \\ -1+i \end{array}\right]\,,\quad
   \boldsymbol{y}\ =\ 
   \left[\begin{array}{c} -2 \\ 2-i \\ 1 \\ 3+2\,i \end{array}\right]\quad
   \in\ C^4\,.`

.. admonition:: Experiment with Sage:
   
   Try the following programs for different vectors and matrices.

Inner products and norms of complex vectors.

.. sagecellserver::
   
   x = vector(CDF,[1-2*I,3*I,-4,-1+I])

   # Three equivalent statements for the Euclidean norm:
   print (norm(x), x.norm(), x.norm(2)), '\n'

   # A few exemplary exotic norms:
   print (x.norm(1), x.norm(5), x.norm(pi/2), x.norm(Infinity))

.. (5.65685424949, 5.65685424949, 5.65685424949) 

   (10.6502815399, 4.21382155129, 6.67035241562, 4.0)

.. sagecellserver::

   x = vector(CDF,[1-2*I,3*I,-4,-1+I])
   y = vector(CDF,[-2,2-I,1,3+2*I])

   # Verification of the Schwarz inequality:
   print abs(x.hermitian_inner_product(y)) <= norm(x)*norm(y)
   print abs(x.hermitian_inner_product(y)), '<=', \
         norm(x), '*', norm(y), '=', norm(x)*norm(y), '\n' 

   # Verification of the triangle inequality:
   print norm(x+y) <= norm(x)+norm(y)    
   print norm(x+y), '<=', norm(x), '+', norm(y), '=', norm(x)+norm(y)
   
.. True
   18.0277563773 <= 5.65685424949 * 4.79583152331 = 27.1293199325 
   
   True
   5.9160797831 <= 5.65685424949 + 4.79583152331 = 10.4526857728

Different norms of square and rectangular matrices:

.. sagecellserver::

   A = matrix(RR, [[13,-4],
                   [-4, 7]])
   
   A.norm(1), A.norm(2), A.norm('frob'), A.norm(Infinity)

.. (17.0, 15.0, 15.8113883008, 17.0)

.. sagecellserver::

   A = matrix(QQbar, [[ 1, 2, 4,  3],
                      [-1, 0, 3,-10]])
   
   print (A.norm(1),A.norm(2),A.norm('frob'),A.norm(Infinity)),'\n'
   
   # Verification of the Euclidean norm (p=2):
   ATA = A.T*A
   max([sqrt(lambda2) for lambda2 in ATA.eigenvalues()])

.. (13.0, 10.6903311292, 11.8321595662, 14.0) 

   10.690331129154468?

If we view complex numbers as vectors in the space :math:`\,C^1,\ ` then the natural norm becomes the modulus:

.. math::
   
   \|z\|\ =\ |z|\,,\quad z\in C\,,

where for :math:`\ z=a+b\,i:\ |z|\,=\,\sqrt{z^*z}\,=\,\sqrt{a^2+b^2}\,.`

It is surprising that the function ``norm()`` applied to complex numbers
does not return the modulus, but its square:

.. code-block:: python

   sage: var('a,b')
   sage: z = a+b*I
   sage: norm(z).simplify()
   
   a^2 + b^2

A "norm" of this type (which does not satisfy conditions required by a definition of the norm) is used in number theory.
In order to obtain a correct result one has to rewrite a complex number as a one-dimensional vector or a matrix of size one:

.. code-block:: python 

   sage: z0 = 1-2*I
   sage: z1 = vector(CDF,[z0])
   sage: z2 = matrix(CDF,[[z0]])
   sage: norm(z0), norm(z1), norm(z2)

   (5, 2.2360679775, 2.2360679775)

Operations on Matrices
~~~~~~~~~~~~~~~~~~~~~~

Operations on real or complex matrices implemented in Sage:

* transpose: :math:`\,` ``transpose()``, :math:`\,` in short :math:`\,` ``T`` ;

* complex conjugation: :math:`\,` ``conjugate()``, :math:`\,` in short :math:`\,` ``C`` ;

* Hermitian conjugation: :math:`\,` ``conjugate_transpose()``, :math:`\,` 
  w skrócie :math:`\,` ``H`` ;

* inverse: :math:`\,` ``inverse()``, :math:`\,` in short :math:`\,` ``I`` .

The following methods verify different properties of a matrix, namely whether it is:

* symmetric: :math:`\,` ``is_symmetric()`` ;

* antisymmetric: :math:`\,` ``is_skew_symmetric()`` ;

* Hermitian: :math:`\,` ``is_hermitian()`` ;

* unitary: :math:`\,` ``is_unitary()`` ; 

* singular: :math:`\,` ``is_singular()``

* square: :math:`\,` ``is_square()`` :math:`\\`

**Example.**

.. :math:`\;`

.. code-block:: python
   
   sage: A = matrix(3,[ 1+I, 2-3*I, -1+2*I,
                       -3+I,   4*I, -2-4*I,
                        4-I,    -I,  1+3*I])
   
   sage: show(table([["Hermitian conjugation:"],
                     [A, '$\\rightarrow$', A.H]]))
   
   sage: A.is_hermitian(), (A.H*A).is_hermitian()

:math:`\qquad` Hermitian conjugation:

:math:`\\ \left(\begin{array}{rrr} 
i+1 & -\,3\,i+2 & 2\,i-1 \\ i-3 & 4\,i & -\,4\,i-2 \\ -\,i+4 & -\,i & 3\,i+1
\end{array}\right)
\quad\rightarrow\quad
\left(\begin{array}{rrr}
-\,i+1 & -\,i-3 & i+4 \\ 3\,i+2 & -\,4\,i & i \\ -\,2\,i-1 & 4\,i-2 & -\,3\,i+1 
\end{array}\right)`

(False, True)






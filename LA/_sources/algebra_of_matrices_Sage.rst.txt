.. -*- coding: utf-8 -*-
.. _algebra-of-matrices-Sage:

Vectors and Matrices in Sage
----------------------------

In the previous section we have been assuming that the matrix elements 
are real or complex numbers from the field :math:`\,R\,` or :math:`\,C,\,`
respectively.
Actually, the operations on matrices are possible, and properties 
of these operations are preserved, even though elements belong 
to a simpler structure - a ring with identity.
In Sage the algebra of polynomials or matrices is built just over a ring
rather than over a field.

Below we list the most important rings applied in Sage:

+-----------------------------------------------+------------------------------------------------------+
| | :math:`\qquad\qquad\quad\text{Symbol}`:     | | Description :math:`\,` and :math:`\,` name in Sage:|
+===============================================+======================================================+
|                                               | | *Ring of integer numbers*:                         |
| | :math:`\qquad\qquad\qquad` ZZ               | | Integer Ring                                       |
+-----------------------------------------------+------------------------------------------------------+
|                                               | | *Field of rational numbers*:                       |
| | :math:`\qquad\qquad\qquad` QQ               | | Rational Field                                     |
+-----------------------------------------------+------------------------------------------------------+
|                                               | | *Field of real numbers*:                           |
| | :math:`\qquad\qquad\qquad` RR               | | Real Field with 53 bits of precision               |
+-----------------------------------------------+------------------------------------------------------+
|                                               | | *Field of complex numbers*:                        |
| | :math:`\qquad\qquad\qquad` CC               | | Complex Field with 53 bits of precision            |
+-----------------------------------------------+------------------------------------------------------+
|                                               | | *Field of real numbers*                            |
| | :math:`\qquad\qquad\qquad` RDF              | | *with double precision* :                          |
|                                               | | Real Double Field                                  |
+-----------------------------------------------+------------------------------------------------------+
|                                               | | *Field of complex numbers*                         |
| | :math:`\qquad\qquad\qquad` CDF              | | *with double precision*:                           |
|                                               | | Complex Double Field                               |
+-----------------------------------------------+------------------------------------------------------+
|                                               | | *Field of real numbers*                            | 
| | :math:`\qquad\qquad` RealField(12)          | | *with the given precision*:                        |
|                                               | | Real Field with 12 bits of precision               |
+-----------------------------------------------+------------------------------------------------------+
|                                               | | *Field of complex numbers*                         |
| | :math:`\qquad\qquad` ComplexField(248)      | | *with the given precision*:                        |
|                                               | | Complex Field with 248 bits of precision           |
+-----------------------------------------------+------------------------------------------------------+
|                                               | | *Symbolic ring*:                                   |
| | :math:`\qquad\qquad\qquad` SR               | | Symbolic Ring                                      |
+-----------------------------------------------+------------------------------------------------------+

There are two strategies of calculations on vectors and matrices:

* exact linear algebra: elements of vectors and matrices
  belong to the sets ZZ, QQ or SR; calculations are exact, 
  but not all can be performed and their efficiency is limited;
* numerical linear algebra: elements of vectors and matrices are numbers
  of finite precision from fields RR, CC, RDF or CDF;
  the obtained results are rounded and errors from successive roundings 
  may accumulate.

.. note::

   The base ring of a matrix, whose elements depend on any variables,
   is the symbolic ring SR. If numerical values are assigned to these variables,
   the base ring of the matrix will be still SR, though the matrix will be
   composed of numbers only. To make numerical methods applicable, 
   the function ``change_ring()`` is to be explicitly used.

**Example.** :math:`\\`
The matrix :math:`\,\boldsymbol{A}\,` depends on the variable 
:math:`\,` ``phi`` :math:`\,` and its base ring is Symbolic Ring:

.. code-block:: python

   sage: var('phi')
   sage: A = matrix([[cos(phi),-sin(phi)],
                     [sin(phi), cos(phi)]])

   sage: print A, "\n"
   sage: print "Base ring of the matrix A:", A.base_ring()

   [ cos(phi) -sin(phi)]
   [ sin(phi)  cos(phi)] 

   Base ring of the matrix A: Symbolic Ring

After substitution :math:`\,` ``phi`` = 0.25 :math:`\,` 
the base ring is still Symbolic Ring:

.. code-block:: python

   sage: B = A.subs(phi=0.25)

   sage: print B.n(digits=4), "\n"
   sage: print "Base ring of the matrix B:", B.base_ring()

   [ 0.9689 -0.2474]
   [ 0.2474  0.9689]  

   Base ring of the matrix B: Symbolic Ring


.. The explicit change of the ring returns the purely numerical matrix:

Only the explicit change of ring returns the purely numerical matrix:

.. code-block:: python

   sage: C = B.change_ring(RDF)
  
   sage: print C.n(digits=4), "\n"
   sage: print "Base ring of the matrix C:", C.base_ring()

   [ 0.9689 -0.2474]
   [ 0.2474  0.9689]  

   Base ring of the matrix C: Real Double Field

Sage supports the 'row' (as opposed to 'column') approach 
to vectors and matrices. Vectors are displayed 'horizontally', 
and matrix is a sequence (list) of rows.
It is to be pointed out that in Sage a vector is an object 
different from a one-row as well as from a one-column matrix: 
it is just a finite sequence of elements of a ring. 
It can be transformed into an above-mentioned matrix 
only by application of the appropriate function.

Creation of Vectors and Matrices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In Sage vectors and matrices are *objects* of the Python language,
that belong to the respective *classes*. These objects are created
using the *constructors* ``vector()`` and ``matrix()``.

.. sidebar:: Principles of the Object-Oriented Programming.
   
   | An *object* is composed of *attributes* and *methods*.
   | Methods can access attributes and modify them.
   | A *class* is a template for creating objects by means of 
   | *constructors*, the objects beimg *instances* of the class.

Below we apply the standard syntax of the object-oriented programming:
if the function ``func()`` is a method of a class, 
then the result of its application to the object ``obj`` of this class
is denoted by ``obj.func()``.

**Vectors.**

The constructor ``vector()`` can be called in several ways. 
Usually, the arguments are:

* ``ring`` - a base ring (or field) which contains 
  all the elements of the vector
* ``degree`` - number of elements
* ``object`` - a list containing entries of the vector 

In the examples below, the method ``base_ring()`` gives the ring (or field)
over which vectors have been built, and ``parent()`` yields 
the class, to which the vectors belong. 

.. code-block:: python

   sage: # A generic use of the constructor;
         # the degree specification is actually redundant:

   sage: v = vector(QQ, 3, [1.2, 3.6, -0.48])
   sage: print v; print v.base_ring(); v.parent()

   (6/5, 18/5, -12/25)
   Rational Field
   Vector space of dimension 3 over Rational Field

.. code-block:: python

   sage: # Specification of the base ring is optional;
         # the default is the integer ring ZZ:

   sage: v = vector([3, 5, -11])
   sage: print v; v.base_ring()

   (3, 5, -11)
   Integer Ring

.. code-block:: python

   sage: # if no entries of the object are specified, 
         # the vector is populated with zeros:

   sage: v = vector(RDF,5)
   sage: print v; v.parent()

   (0.0, 0.0, 0.0, 0.0, 0.0)
   Vector space of dimension 5 over Real Double Field

Vectors may also be created as instances of the 
:math:`\,` ``VectorSpace()`` :math:`\,` class:

.. code-block:: python

   sage: VS = VectorSpace(QQ,3)
   sage: v = VS([-1, 4, 3.5])
   sage: print VS; v
   
   Vector space of dimension 3 over Rational Field
   (-1, 4, 7/2)

**Matrices.**

The constructor ``matrix()`` acts similarly to ``vector()``.
Its main arguments are:

* ``ring`` – the base ring for the entries of the matrix; 
  if not determined, defaults to ZZ
* ``nrows`` – the number of rows in the matrix
* ``ncols`` – the number of columns in the matrix;
  defaults to nrows if not specified
* ``entries`` - a flat list of elements, a list of lists 
  (i.e., a list of rows) or a list of Sage vectors

.. it defaults to ZZ if is not specified 
   and cannot be determined from the entries

.. code-block:: python

   sage: # A default constructor creates an empty matrix:
   sage: M = matrix()   
   sage: print M; print M.base_ring(); M.parent()

   []
   Integer Ring
   Full MatrixSpace of 0 by 0 dense matrices over Integer Ring

.. code-block:: python

   sage: # A generic use of the matrix constructor:
   sage: M1 = matrix(RDF, 2,3, [1,2,3,4,5,6]) 
   sage: M2 = matrix(RDF, [[1,2,3],[4,5,6]])   
   sage: print M1, "\n"; print M2, "\n"; M1.parent()

   [1.0 2.0 3.0]
   [4.0 5.0 6.0] 

   [1.0 2.0 3.0]
   [4.0 5.0 6.0] 
   
   Full MatrixSpace of 2 by 3 dense matrices over Real Double Field

.. code-block:: python
   
   sage: # Construction of a square matrix:
   sage: M = matrix(3,range(9)); M

   [0 1 2]
   [3 4 5]
   [6 7 8]

.. code-block:: python

   sage: # Matrix given as a list of vectors:

   sage: v1 = vector([1,2,3,-1]);\
         v2 = vector([4,5,6,-2]);\
         v3 = vector([7,8,9,-3])
   sage: M = matrix([v1,v2,v3]); M

   [ 1  2  3 -1]
   [ 4  5  6 -2]
   [ 7  8  9 -3]

By analogy with ``VectorSpace()``, the command ``MatrixSpace()``
creates the space of matrices of definite dimensions over a given ring. 
The mandatory arguments are base ring and number of rows
(the number of columns, by default equal to the number of rows, is optional).
The appropriate methods give access to attributes of the space 
such as dimension, dimensions of matrices, basis.

.. code-block:: python

   sage: MS32 = MatrixSpace(ZZ,3,2)
   sage: print MS32; print MS32.dimension();\ 
         print MS32.dims(); MS32.basis()

   Full MatrixSpace of 3 by 2 dense matrices over Integer Ring
   6
   (3, 2)
   [
   [1 0]  [0 1]  [0 0]  [0 0]  [0 0]  [0 0]
   [0 0]  [0 0]  [1 0]  [0 1]  [0 0]  [0 0]
   [0 0], [0 0], [0 0], [0 0], [1 0], [0 1]
   ]

.. code-block:: python

   sage: # Mat() is an alias for MatrixSpace():

   sage: MS = Mat(RealField(12),2) 
   sage: print MS; MS.basis()

   Full MatrixSpace of 2 by 2 dense matrices over Real Field with 12 bits
   of precision
   [
   [1.00  0.000]  [0.000 1.00 ]  [0.000 0.000]  [0.000 0.000]
   [0.000 0.000], [0.000 0.000], [1.00  0.000], [0.000 1.00 ]
   ]

A space of matrices being at disposal,
the matrices may be created as its instances:

.. code-block:: python

   sage: MS22 = Mat(QQ,2)
   sage: MS23 = Mat(QQ,2,3)

   sage: A = MS22([1,2,3,4])
   sage: B = MS23([1,2,3,4,5,6])

   sage: A, B, A*B # matrices A, B and the product AB

   (
   [1 2]  [1 2 3]  [ 9 12 15]
   [3 4], [4 5 6], [19 26 33]
   )

Alternatively, the ``matrix()`` statement
is used as a method belonging to the matrix class:

.. code-block:: python

   sage: MS33 = Mat(QQ,3)
   sage: MS34 = Mat(QQ,3,4)
   sage: A = MS33.matrix(range(9))
   sage: B = MS34.matrix(range(12))
   sage: A, B, A*B # matrices A, B and the product AB

   (
   [0 1 2]  [ 0  1  2  3]  [ 20  23  26  29]
   [3 4 5]  [ 4  5  6  7]  [ 56  68  80  92]
   [6 7 8], [ 8  9 10 11], [ 92 113 134 155]
   )

In addition to the universal constructor ``matrix()``,
Sage offers several specialized constructors creating
some specific matrices in a ready form:

.. code-block:: python

   sage: O = zero_matrix(QQ,3,2)
   sage: I = identity_matrix(3)
   sage: J = ones_matrix(3,4)
   sage: D = diagonal_matrix([1,2,3])
   sage: R = random_matrix(QQ, 3,3, algorithm='diagonalizable')
   sage: E = elementary_matrix(QQ, 3, row1=1, row2=2, scale=2)
   sage: O, I, J, D, R, E   

   (
   [0 0]  [1 0 0]  [1 1 1 1]  [1 0 0]  [  8  10 -20]  [1 0 0]
   [0 0]  [0 1 0]  [1 1 1 1]  [0 2 0]  [-36 -22  24]  [0 1 2]
   [0 0], [0 0 1], [1 1 1 1], [0 0 3], [-18 -10  10], [0 0 1]
   )

Properties of Vectors and Matrices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Indices.**

In the traditional mathematical notation the numbering of elements
of a sequence starts from one. Thus a vector of size :math:`\,n\ `
and a matrix with :math:`\,m\,` rows and :math:`\,n\,` columns 
read as follows:

.. math::

   \boldsymbol{v}\ =\ [v_i]_n\ =\ (\,v_1,\ v_2,\ \ldots,\ v_n\,)\,,

.. math::
                                        
   \boldsymbol{A}\ \,=\ \,[a_{ij}]_{m\times n}\ \,=\ \,
   \left[\begin{array}{cccc}
      a_{11} & a_{12} & \ldots & a_{1n} \\
      a_{21} & a_{22} & \ldots & a_{2n} \\
      \ldots & \ldots & \ldots & \ldots \\
      a_{m1} & a_{m2} & \ldots & a_{mn}
   \end{array}\right]\,.
  
In Sage the starting number of elements of vectors 
as well as that of rows and columns of matrices is zero. 
Therefore vectors and matrices have the following index structure:

.. math::
   
   \boldsymbol{v}\ =\ (\, v[0],\ v[1],\ \ldots,\ v[n-1]\, )\,,

.. math::

   \boldsymbol{A}\quad=\quad\left(\begin{array}{cccc}
       A[0,0]   & A[0,1]   & \ldots & A[0,n-1]   \\ 
       A[1,0]   & A[1,1]   & \ldots & A[1,n-1]   \\
       \ldots   & \ldots   & \ldots & \ldots     \\
       A[m-1,0] & A[m-1,1] & \ldots & A[m-1,n-1]
   \end{array}\right)\,.

Let :math:`\,\boldsymbol{v}\,` be an :math:`\,n`-size vector:
:math:`\ \boldsymbol{v}\ =\ (\, v_1,\ v_2,\ \ldots,\ v_n\,)\ 
=\ (\, v[0],\ v[1],\ \ldots,\ v[n-1]\, ).\ `
The relation between the two numbering conventions is thus such that
:math:`\,v_i\,=\,v[i-1]:\ ` the :math:`\,i`-th element of
:math:`\ \boldsymbol{v}\ ` is equal to the :math:`\,[i-1]`-th element 
of this vector, :math:`\ i=1,2,\ldots,n.\ ` Analogous rules hold for matrices. 
Below these relations are illustrated by examples:

.. code-block:: python

   sage: v = vector([-1, 5, 3, -4, 8])
   sage: print 'Vector v and its selected elements:', '\n'
   sage: print 'v =', v, '\n\nv[0] =', v[0], '  v[3] =', v[3]

   Vector v and its selected elements:

   v = (-1, 5, 3, -4, 8) 

   v[0] = -1   v[3] = -4

.. code-block:: python

   sage: A = matrix([[0,2,4,6],[1,3,5,7],[2,4,6,8]])

   sage: print A

   sage: print '\nSelected row, column and elements:'

   sage: print '\nSecond row   = row number [1]    = A.row(1)    =',\
               A.row(1)                                          
                                                                 
   sage: print '\nFirst column = column number [0] = A.column(0) =',\
               A.column(0)

   sage: print '\nA[0,0] =', A[0,0],\
               '  A[1,3] =', A[1,3],\
               '  A[2,2] =', A[2,2]

   [0 2 4 6]
   [1 3 5 7]
   [2 4 6 8]
   
   Selected row, column and elements:
   
   Second row   = row number [1]    = A.row(1)    = (1, 3, 5, 7)
   
   First column = column number [0] = A.column(0) = (0, 1, 2)
   
   A[0,0] = 0   A[1,3] = 7   A[2,2] = 6

Finally, we present two examples of the situation, when matrix elements 
are a function of their indices. :math:`\,\boldsymbol{A}\ ` is the general 
rectangular matrix of the given dimensions, with elements :math:`\,a_{ij};\\`
:math:`\ \boldsymbol{B}\ ` is the complex matrix (:math:`\,i\,` 
is the imaginary unit) with elements

.. math::

   b_{kl}\,=\,k+l\cdot i\,,\qquad
   \begin{array}{l} k\,=\,1,2,\ldots,m\,; \\ \,l\,=\,1,2,\ldots,n.\end{array}

.. sagecellserver::

   m, n = 4, 5
   A = matrix([[var("a%d%d" % (k,l)) for l in range(1,n+1)]
                                     for k in range(1,m+1)])
   m, n = 4, 3 
   B = matrix([[CIF(k,l) for l in range(1,n+1)]
                         for k in range(1,m+1)])
   show((A,B))

**Slicing.**

Slicing extracts selected elements from a sequence,
thus creating sub-sequences. This technique is applicable, among others, 
to lists, vectors and matrices (a matrix being a list of rows). 
In particular, if :math:`\,L\ ` is a list of size :math:`\,n,\ ` 
then for :math:`\ p = 0, 1, ..., n-1;` :math:`\ q = 1, 2, ..., n;`
:math:`\ p<q:`

* | ``L[p]`` :math:`\ ` - :math:`\ ` the ``[p]``-th, 
    :math:`\ ` that is the (p+1)-th, :math:`\ `
    element of :math:`\,L`;
  | ``L[-2]``, ``L[-1]`` :math:`\ ` - :math:`\ ` 
    the next-to-last and last elements of :math:`\,L`; 

* | ``L[p:q]`` :math:`\ ` - :math:`\ ` sublist of 
    :math:`\ q-p\ ` elements of :math:`\,L,\ `
  | starting at the ``[p]``-th :math:`\ ` and :math:`\ ` 
    ending with the ``[q-1]``-th :math:`\ ` element;

* | ``L[:q]`` :math:`\ ` - :math:`\ ` sublist of :math:`\,q\ ` 
    elements of :math:`\,L,\ ` 
  | starting at the beginning of the list and ending with the
    ``[q-1]``-th element;

* | ``L[p:]`` :math:`\ ` - :math:`\ ` sublist of :math:`\ n-p\ ` 
    elements of :math:`\ L,\ ` 
  | starting at the ``[p]``-th element and going to the end;

* | ``L[p:q:r]`` :math:`\ ` - :math:`\ ` sublist of elements 
    of :math:`\,L\ ` with numbers from ``[p]`` to ``[q-1]`` inclusively, 
  | with the step (slicing increment) :math:`\ r.`

.. Below we apply these rules to matrix rows, columns and elements:

.. code-block:: python

   sage: M = matrix(4,5,range(20)) 
   sage: # Slicing yields a matrix composed of: 
   sage: A = M[1:3]     # rows [1]., [2].
   sage: B = M[:,2:5]   # columns [2]., [3]., [4].
   sage: C = M[1:3,2:5] # elements of rows [1]., [2].
                        #  and columns [2]., [3]., [4].
   sage: D = M[1:,::2]  # elements of rows [1]., [2]., [3].
                        #  and columns [0]., [2]., [4].
   sage: print M
   sage: A, B, C, D

   [ 0  1  2  3  4]
   [ 5  6  7  8  9]
   [10 11 12 13 14]
   [15 16 17 18 19]
   (
                     [ 2  3  4]                        
                     [ 7  8  9]              [ 5  7  9]
   [ 5  6  7  8  9]  [12 13 14]  [ 7  8  9]  [10 12 14]
   [10 11 12 13 14], [17 18 19], [12 13 14], [15 17 19]
   )

.. note:: :math:`\,`
    
   Let :math:`\,A\,` be an :math:`\ m \times n\ ` 
   matrix over a ring :math:`\,P,\ 
   i=0,1,\ldots,m-1;\ j=0,1,\ldots,n-1. \\`
   
   Then its ``[i]``-th row may be obtained in three ways:
   
   * ``A[i]`` :math:`\ ` or :math:`\ ` ``A.row(i)``  
     :math:`\ ` - :math:`\ ` as an :math:`\,n`-size vector over :math:`\,P;`
   
   * ``A[i,:]`` :math:`\ ` - :math:`\ ` as an :math:`\ 1`-row matrix
     over :math:`\,P\ ` with :math:`\,n\ ` elements. :math:`\\`

   For the ``[j]``-th column there are two formulae:
   
   * ``A.column(j)`` :math:`\ ` - :math:`\ `
     as a vector of size :math:`\,m\ ` over :math:`\,P\ `
     (written horizontally);
   
   * ``A[:,j]`` :math:`\ ` - :math:`\ ` as a :math:`\,1`-column matrix
     over :math:`\,P\ ` with :math:`\,m\ ` elements.

The above rules are illustrated by the following example:

.. code-block: python

   sage: A = random_matrix(ZZ,3,4); print A, '\n'

   sage: print A[2]; print type(A[2]), '\n'
   sage: print A.row(2); print type(A.row(2)), '\n'
   sage: print A[2,:]; print type(A[2,:]), '\n'  
   sage: print A.column(1); print type(A.column(1)), '\n'
   sage: print A[:,1]; print type(A[:,1])

   [-1  0  2 -1]
   [-1  7 -1 -1]
   [ 1 -1  3 -2] 

   (1, -1, 3, -2)
   <type 'sage.modules.vector_integer_dense.Vector_integer_dense'> 
   
   (1, -1, 3, -2)
   <type 'sage.modules.vector_integer_dense.Vector_integer_dense'> 
   
   [ 1 -1  3 -2]
   <type 'sage.matrix.matrix_integer_dense.Matrix_integer_dense'> 

   (0, 7, -1)
   <type 'sage.modules.vector_integer_dense.Vector_integer_dense'> 
   
   [ 0]
   [ 7]
   [-1]
   <type 'sage.matrix.matrix_integer_dense.Matrix_integer_dense'>

.. code-block:: python

   sage: A = matrix(3,4,[-1,0,2,1,-1,7,-1,1,1,-1,3,2])
   sage: print A, '\n'

   sage: print A[2]; print type(A[2]), '\n'
   sage: print A.row(2); print type(A.row(2)), '\n'
   sage: print A[2,:]; print type(A[2,:]), '\n'  
   sage: print A.column(1); print type(A.column(1)), '\n'
   sage: print A[:,1]; print type(A[:,1])

   [-1  0  2  1]
   [-1  7 -1  1]
   [ 1 -1  3  2] 

   (1, -1, 3, 2)
   <type 'sage.modules.vector_integer_dense.Vector_integer_dense'> 
   
   (1, -1, 3, 2)
   <type 'sage.modules.vector_integer_dense.Vector_integer_dense'> 
   
   [ 1 -1  3  2]
   <type 'sage.matrix.matrix_integer_dense.Matrix_integer_dense'> 

   (0, 7, -1)
   <type 'sage.modules.vector_integer_dense.Vector_integer_dense'> 
   
   [ 0]
   [ 7]
   [-1]
   <type 'sage.matrix.matrix_integer_dense.Matrix_integer_dense'>

.. Uncomment a selected hashed command to verify the corresponding rule:

.. sagecellserver:
   
   A = random_matrix(ZZ,3,4); print A, '\n'

   # print A[2]; print type(A[2]), '\n'
   # print A.row(2); print type(A.row(2)), '\n'
   # print A[2,:]; print type(A[2,:]), '\n'  
   # print A.column(1); print type(A.column(1)), '\n'
   # print A[:,1]; print type(A[:,1])     

Operations on Vectors and Matrices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Linear Combination of Vectors.**

The addition and scalar multiplication of :math:`\,n`-size vectors
over a ring :math:`\,P\,` are analogous to the operations on column vectors
over a field :math:`\,K.\ `  
If a vector :math:`\ \boldsymbol{w} = (w_1,w_2,\ldots,w_n)\ ` 
is the linear combination of vectors 
:math:`\,\boldsymbol{x} = (x_1,x_2,\ldots,x_n)\ ` and 
:math:`\ \,\boldsymbol{y} = (y_1,y_2,\ldots,y_n):\ `

.. the coefficients being :math:`\,a\ ` and :math:`\ \,b`:

.. math::

   \boldsymbol{w}\ =\ a\,\boldsymbol{x}\, +\, b\,\boldsymbol{y}\,,
   \qquad a,b\in P,

then its elements are given by

.. math::

   w_i\ =\ a\,x_i\, +\, b\,y_i\,,\qquad i\,=\,1,2,\ldots,n.

.. By analogy with the column vectors, the :math:`\,n`-element vectors 
   over a field :math:`\,K\,` form, with respect to vector addition 
   and scalar multiplication, the :math:`\,n`-dimensional vector space
   over that field.
   
The :math:`\,n`-element vectors over a ring :math:`\,P\,` form a free module
with respect to vector addition and scalar multiplication
(for :math:`\,n`-size vectors over a field the module is a vector space).
 
.. (vectors over a field form a vector space over that field).

.. (when the ring is a field: :math:`\ P=K,\ ` this is an 
   :math:`\,n`-dimensional vector space over that field).

**Dot Product of vectors.**

Dot product (scalar product) of two vectors of the same size is defined as
the sum of products of corresponding elements:

.. math::

   \boldsymbol{x} \cdot \boldsymbol{y} \ \,:\,=\ \,
   \sum_{i=1}^n\,x_i\,y_i\ \,=\ \,
   x_1\,y_1\,+\,x_2\,y_2\,+\,\ldots\,+\,x_n\,y_n\,.

This is an example of a linear combination and the dot product of vectors:

.. code-block:: python

   sage: x = vector([-1,2,5])
   sage: y = vector([3,0,4])

   # Linear combination w of vectors x, y with coefficients 3, -2:
   sage: w = 3*x-2*y
  
   # Dot product p of vectors x, y:  
   sage: p = x*y

   sage: show(table([[3,'$\cdot$',x,'-',2,'$\cdot$',y,'=',w]]))
   sage: show(table([[x,'$\cdot$',y,'=',p]]))

:math:`\begin{array}{ccccccccc}
3 & \cdot & \left(-1,\,2,\,5\right) & - & 
2 & \cdot & \left(3,\,0,\,4\right) & = & 
\left(-9,\,6,\,7\right)\end{array}`

:math:`\begin{array}{ccccc}
\left(-1,\,2,\,5\right) & \cdot & \left(3,\,0,\,4\right) & = & 17
\end{array}`

The dot product of two vectors :math:`\,\boldsymbol{x},\,\boldsymbol{y}\ `
is connected with the matrix product of the one-row matrix obtained 
from :math:`\,\boldsymbol{x}\,` by the one-column matrix obtained from 
:math:`\,\boldsymbol{y}`.

A vector may be transformed into a one-row or one-column matrix 
by means of the methods ``row()`` or ``column()``, respectively.

.. code-block:: python

   sage: x = vector([-1,2,5])
   sage: y = vector([3,0,4])

   sage: x_row = x.row()
   sage: y_col = y.column()
   
   sage: p = x_row * y_col
   sage: table([[x_row,'*',y_col,'=',p]])

:math:`\begin{array}{ccccc}
\left(\begin{array}{ccc} -1 & 2 & 5 \end{array}\right) & \ast &
\left(\begin{array}{c} 3 \\ 0 \\ 4 \end{array}\right) & = & (17)
\end{array}`

:math:`\,`

**Products of a matrix and a vector.**

If :math:`\ \boldsymbol{x}\ ` is an :math:`\ n`-element vector, :math:`\ `
and :math:`\ \boldsymbol{A}\ ` - :math:`\ ` a square matrix of size :math:`\ n`:

.. math::
   
   \boldsymbol{x}\ =\ (x_1,x_2,\ldots,x_n)\,,\qquad 
   \boldsymbol{A}\ =\ \left[\begin{array}{cccc}
       a_{11} & a_{12} & \ldots & a_{1n} \\
       a_{21} & a_{22} & \ldots & a_{2n} \\
       \ldots & \ldots & \ldots & \ldots \\ 
       a_{n1} & a_{n2} & \ldots & a_{nn}
   \end{array}\right]\,,

then there exist products 
:math:`\ \ \boldsymbol{v} = \boldsymbol{x} \cdot \boldsymbol{A}\ \ ` and 
:math:`\ \ \boldsymbol{w} = \boldsymbol{A} \cdot \boldsymbol{x}\,.`

Both results, :math:`\ \boldsymbol{v}\ ` and :math:`\ \boldsymbol{w},\ `
are vectors, and

.. math::

   v_j\ :\,=\ \sum_{i=1}^n\,x_i\,a_{ij}\ =\ 
   x_1\,a_{1j}\,+\,x_2\,a_{2j}\,+\,\ldots\,+\,x_n\,a_{nj}\,,
   \qquad j\,=\,1,2,\ldots,n,

   w_i\ :\,=\ \sum_{j=1}^n\,a_{ij}\,x_j\ =\ 
   a_{i1}\,x_1\,+\,a_{i2}\,x_2\,+\,\ldots\,+\,a_{in}\,x_n\,,
   \qquad i\,=\,1,2,\ldots,n.

:math:`\ `

This is illustrated by the example:

.. code-block:: python

   sage: x = vector(range(3))
   sage: A = matrix(3,range(9))

   sage: v = x*A; w = A*x

   sage: show(table([[x,'*',A,'=',v]]))
   sage: show(table([[A,'*',x,'=',w]]))

:math:`\begin{array}{ccccc}
\left(0,\,1,\,2\right) & \ast & 
\left(\begin{array}{rrr} 
0 & 1 & 2 \\ 3 & 4 & 5 \\ 6 & 7 & 8 
\end{array}\right) & = & 
\left(15,\,18,\,21\right) 
\end{array}`

:math:`\begin{array}{ccccc}
\left(\begin{array}{rrr} 
0 & 1 & 2 \\ 3 & 4 & 5 \\ 6 & 7 & 8 
\end{array}\right) &
\ast & \left(0,\,1,\,2\right) &
= & \left(5,\,14,\,23\right)
\end{array}`

Note that if we replace vectors by one-row matrices,
the first equation will remain true, while the second will become 
senseless (the product of a square matrix by a one-row matrix is not defined):

.. code-block:: python

   sage: x = vector(range(3))
   sage: A = matrix(3,range(9))

   sage: x_row = x.row()

   sage: v_row = x_row * A
   sage: show(table([[x_row,'*',A,'=',v_row]]))

   sage: w_row = A * x_row
   sage: show(table([[A,'*',x_row,'=',w_row]]))    

:math:`\begin{array}{ccccc}
\left(\begin{array}{rrr} 0 & 1 & 2 \end{array}\right) & \ast & 
\left(\begin{array}{rrr} 
0 & 1 & 2 \\ 3 & 4 & 5 \\ 6 & 7 & 8 
\end{array}\right) & = & 
\left(\begin{array}{rrr} 15 & 18 & 21 \end{array}\right)
\end{array}`

--------------------------------------------------------------------------------

``TypeError: unsupported operand parent(s) for '*': 
'Full MatrixSpace of 3 by 3 dense matrices over Integer Ring' and 
'Full MatrixSpace of 1 by 3 dense matrices over Integer Ring'`` 

To get the correct matrix version of the second equation, 
vectors are to be replaced by one-column matrices:

.. code-block:: python

   sage: x = vector(range(3))
   sage: A = matrix(3,range(9))

   sage: x_col = x.column()
   sage: w_col = A * x_col

   sage: show(table([[A,'*',x_col,'=',w_col]]))

:math:`\begin{array}{ccccc}
\left(\begin{array}{rrr} 
0 & 1 & 2 \\ 3 & 4 & 5 \\ 6 & 7 & 8 
\end{array}\right) & \ast & 
\left(\begin{array}{r} 0 \\ 1 \\ 2 \end{array}\right) & = & 
\left(\begin{array}{r} 5 \\ 14 \\ 23 \end{array}\right)
\end{array}`

In passing we note that the first equation may be rewritten 
in the column version by transpose of both sides
(transpose of a product of matrices 
yields the product of transposed factors in reverse order): 

.. code-block:: python

   sage: x = vector(range(3))
   sage: A = matrix(3,range(9))

   sage: x_col = x.column()
   sage: A_t = A.transpose()

   sage: v_col = A_t * x_col

   sage: table([[A_t,'*',x_col,'=',v_col]])

.. :math:`\,`

:math:`\begin{array}{ccccc}
\left(\begin{array}{rrr} 
0 & 3 & 6 \\ 1 & 4 & 7 \\ 2 & 5 & 8 
\end{array}\right) & \ast & 
\left(\begin{array}{r} 0 \\ 1 \\ 2 \end{array}\right) & = & 
\left(\begin{array}{r} 15 \\ 18 \\ 21 \end{array}\right)
\end{array}`

:math:`\;`

**Product of matrices.**

Sage of course deals with the multiplication of any two matrices
with appropriate dimensions
(the number of columns of the first matrix 
must equal the number of rows of the second).
A few examples (in which one factor was a 1-row or 1-column matrix) 
have been already given in this section. Here is another example:

.. code-block:: python

   sage: A = matrix(2,3,range(6))
   sage: B = matrix(3,range(9))
   sage: C = A*B
   sage: table([[A,'*',B,'=',C]])

:math:`\begin{array}{ccccc}
\left(\begin{array}{rrr} 
0 & 1 & 2 \\ 3 & 4 & 5 
\end{array}\right) & \ast &
\left(\begin{array}{rrr} 
0 & 1 & 2 \\ 3 & 4 & 5 \\ 6 & 7 & 8 
\end{array}\right) & = &
\left(\begin{array}{rrr} 
15 & 18 & 21 \\ 42 & 54 & 66 
\end{array}\right)
\end{array}`

:math:`\;`

An attempt to multiply matrices with incompatible dimensions
results in an error:

.. code-block:: python

   sage: A = matrix(3,range(9))
   sage: B = matrix(2,3,range(6))

   sage: C = A*B

``TypeError: unsupported operand parent(s) for '*': 
'Full MatrixSpace of 3 by 3 dense matrices over Integer Ring' and 
'Full MatrixSpace of 2 by 3 dense matrices over Integer Ring'``
  
The above examples show that the symbols of addition, 
subtraction and multiplication have context-sensitive meaning.

Specifically, the symbols :math:`\,` "``+``/``-``" :math:`\,`
denote addition/subtraction of numbers (scalars), vectors or matrices; 
:math:`\ ` the symbol :math:`\,` "``*``" :math:`\,` denotes multiplication 
of numbers, multiplication of a vector by a number, dot product of two vectors,
multiplication of a vector by a matrix and vice versa, 
or product of two matrices.

Block Matrices
~~~~~~~~~~~~~~

Every matrix with dimensions at least two
can be divided into four (or more) rectangular blocks.
Such division being performed, we say of a block matrix.
It turns out that the rules of multiplication of block matrices
are completely analogous to those of elementary matrices:

.. math::
   :label: blok1

   \left[\begin{array}{c|c}
       \boldsymbol{A} & \boldsymbol{B} \\
       \hline
       \boldsymbol{C} & \boldsymbol{D}
    \end{array}\right]
    \left[\begin{array}{c}
        \boldsymbol{X} \\
        \hline
        \boldsymbol{Y}
   \end{array}\right]
   \ =\ 
   \left[\begin{array}{c}
       \boldsymbol{A} \boldsymbol{X} + \boldsymbol{B} \boldsymbol{Y} \\
       \hline
       \boldsymbol{C} \boldsymbol{X} + \boldsymbol{D} \boldsymbol{Y}
   \end{array}\right]\,.

The blocks :math:`\ \boldsymbol{A},\boldsymbol{B},
\boldsymbol{C},\boldsymbol{D},\boldsymbol{X},\boldsymbol{Y}\ `
are here any matrices provided that their dimensions
make the matrix multiplications possible. 
 
Typically, using equation :eq:`blok1` does not reduce the volume 
of operations. However, when there are some zero or identity blocks,
the calculations may be relevantly simplified.
Consider e.g. the case, when there are two zero blocks
(denoted by :math:`\ \boldsymbol{O}`). :math:`\ ` Then 

.. math::

   \left[\begin{array}{c|c}
      \boldsymbol{A} & \boldsymbol{O} \\
      \hline
      \boldsymbol{O} & \boldsymbol{D}
   \end{array}\right]
   \left[\begin{array}{c}
       \boldsymbol{X} \\
       \hline
       \boldsymbol{Y}
   \end{array}\right]
   \ =\ 
   \left[\begin{array}{c}
       \boldsymbol{A} \boldsymbol{X} \\
       \hline
       \boldsymbol{D} \boldsymbol{Y}
   \end{array}\right]

Sage has several functions destined to handle block matrices.

The ``block_matrix()`` command takes a list of submatrices to add as blocks,
optionally preceding it by a ring and the number of block rows 
and block columns. Its arguments are:

* ``ring`` :math:`\ -\ ` the base ring
* ``nrows`` :math:`\ -\ ` the number of block rows
* ``ncols`` :math:`\ -\ ` the numbber of block columns
* ``blocks`` :math:`\ -\ ` submatrices to be assembled
* ``subdivide`` :math:`\ -\ ` boolean, whether or not to add subdivision 
  information to the matrix

.. code-block:: python
   
   sage: A = matrix(QQ, 2, 3, [3,9,6,10,12,15])
   sage: block_matrix([[1,A], [0,1]])

   [ 1  0| 3  9  6]
   [ 0  1|10 12 15]
   [-----+--------]
   [ 0  0| 1  0  0]
   [ 0  0| 0  1  0]
   [ 0  0| 0  0  1]

Here the 0 and 1 entry have been interpreted as the zero and identity matrix
of compatible dimensions.
The subdivision information (horizontal and vertical lines) may be lifted
by putting ``subdivision = False``.

.. .. code-block:: python
   
   sage: A = matrix(ZZ,3,2,[4,7,2,1,9,0])
   sage: B = matrix(ZZ,3,range(9))
   sage: M = block_matrix([[A,1],[0,B]], subdivide=False)
   sage: M

   [4 7 1 0 0]
   [2 1 0 1 0]
   [9 0 0 0 1]
   [0 0 0 1 2]
   [0 0 3 4 5]
   [0 0 6 7 8]

The ``subdivide()`` method divides a matrix into blocks,
which can then be extracted. :math:`\\` The arguments are

* ``row_lines`` - None, an integer, or a list of integers
* ``col_lines`` - None, an integer, or a list of integers

The ``subdivision()`` method extracts a given block from a matrix,
whereas ``subdivision_entry()`` yields a selected element.

The following examples should make their functioning clear:

.. imprints the subdivision onto a matrix,
   determined by the dimensions of the upper-left block.

.. code-block:: python
   
   sage: A = matrix(QQ, 5, range(25))
   sage: A.subdivide(3,2) 
   sage: print A, '\n'
   sage: print A.subdivision(1,0), '\n'
   sage: A.subdivision_entry(0,1,2,1)

   [ 0  1| 2  3  4]
   [ 5  6| 7  8  9]
   [10 11|12 13 14]
   [-----+--------]
   [15 16|17 18 19]
   [20 21|22 23 24] 
   
   [15 16]
   [20 21]
   
   13

.. code-block:: python

   sage: A = matrix(6,range(36))
   sage: A.subdivide([1,3,5],[2,4])
   sage: print A, '\n'
   sage: A.subdivision(2,1)

   [ 0  1| 2  3| 4  5]
   [-----+-----+-----]
   [ 6  7| 8  9|10 11]
   [12 13|14 15|16 17]
   [-----+-----+-----]
   [18 19|20 21|22 23]
   [24 25|26 27|28 29]
   [-----+-----+-----]
   [30 31|32 33|34 35] 
   
   [20 21]
   [26 27]

.. admonition:: Experiment with Sage! :math:`\\`
   
   The program given below uses the function ``block_matrix()``
   to compose a matrix of the given submatrices.
 
   The reader is encouraged to test equation :eq:`blok1` 
   for various components of the block matrices.

.. sagecellserver::

   A  = random_matrix(ZZ,2)
   
   B1 = block_matrix([[identity_matrix(2),A],
                      [zero_matrix(1,2),zero_matrix(1,2)]])
   
   B2 = block_matrix([[A],[identity_matrix(2)]])
   
   table([['$\\qquad\\quad\ \ B1$','','$\\qquad\ \ B2$','',
           '$\\quad B1\ \\ast \ B2$'], 
          [B1,'*',B2,'=',B1*B2]])













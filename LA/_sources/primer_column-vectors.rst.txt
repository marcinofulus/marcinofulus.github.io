.. -*- coding: utf-8 -*-

Column Vectors
--------------

A *column vector* of size :math:`\,n\,` over a field :math:`\,K\,` 
is a sequence of :math:`\,n\,` scalars, written vertically:

.. math::

   \boldsymbol{x}\ =\ [x_{i}]_n\ \ =\ \ 
   \left[\begin{array}{c} 
   x_{1} \\ x_{2} \\ \ldots \\ x_{n} 
   \end{array}\right] \,,
   \quad   
   \text{where}\quad x_{i}\in K,\quad i=1,2,\ldots,n\,; \quad n\in N.

The set of all such vectors is denoted by :math:`\,K^n.\ ` 
When dealing with practical problems, :math:`\\`
:math:`\ K\ ` is usually the field :math:`\,R\ ` of real numbers
or the field :math:`\ C\ ` of complex numbers.

The column vectors in :math:`\,K^n\,` may be added: [1]_

.. math::

   \left[\begin{array}{c} 
   x_1 \\ x_2 \\ \ldots \\ x_n 
   \end{array}\right] \ +\ 
   \left[\begin{array}{c} 
   y_1 \\ y_2 \\ \ldots \\ y_n 
   \end{array}\right] \ :\,=\ \,
   \left[\begin{array}{c} 
   x_1+y_1 \\ x_2+y_2 \\ \ldots \\ x_n+y_n 
   \end{array}\right]\,,

and multiplied by scalars :math:`\, c \in K`:

.. math::

   c \ \ 
   \left[\begin{array}{c} 
   x_1 \\ x_2 \\ \ldots \\ x_n 
   \end{array}\right] \ :\,=\ \,
   \left[\begin{array}{c} 
   c\; x_1 \\ c\; x_2 \\ \ldots \\ c\; x_n 
   \end{array}\right]\,.

In Sage it is equally simple: 

.. sagecellserver::

    v = vector([5,8,3])
    w = vector([1,2,3])
    c = 10
    print 'v + w = ', v + w
    print 'cv =', c*v
    
Press **Evaluate** to see the outcome of the code. You can modify the code yourself too. See what happens if the vectors are of different size. In section :ref:`algebra-of-matrices-Sage` we explain how to indicate the underlying field.

The addition and scalar multiplication of column vectors in :math:`\,K^n\,`
consist in addition and multiplication of scalars in :math:`\,K.\ `
On that basis, it's easy to validate the following properties,
which lead to the conclusion that :math:`\,K^n\,` is an abelian group 
under addition of column vectors.

.. so the properties of operations in :math:`\,K^n\ ` 
   reflect those in :math:`\,K:`

.. The properties of operations in :math:`\,K^n\ ` result from the fact, that 

0. :math:`\,` The addition of column vectors is an internal operation 
   in :math:`\,K^n.` 

1. :math:`\,` The addition is associative and commutative:
   
   .. math::
      
      (\boldsymbol{x} + \boldsymbol{y}) \, + \, \boldsymbol{z} \ \; = \ \; 
      \boldsymbol{x} \, + \,(\boldsymbol{y} + \boldsymbol{z})\,,
      
      \boldsymbol{x}\,+\,\boldsymbol{y}\ =\ \boldsymbol{y}\,+\,\boldsymbol{x},
      \qquad\forall\ \ \boldsymbol{x},\boldsymbol{y},\boldsymbol{z}\,\in\,K^n.
   
2. :math:`\,` The neutral element for addition is the zero column vector
   :math:`\ \,\boldsymbol{\theta}\ =\ 
   \left[\begin{array}{c} 0 \\ 0 \\ \ldots \\ 0 \end{array}\right]\,.`

3. | :math:`\,` For any :math:`\ \boldsymbol{x}\in K^n,\ ` 
     there exists the opposite vector :math:`\ (-\,\boldsymbol{x})\ ` 
     such that :math:`\ \boldsymbol{x} + (-\,\boldsymbol{x}) =
     \boldsymbol{\theta}.`
   | 
   | :math:`\,` Namely, :math:`\,` for :math:`\ \,\boldsymbol{x}\,=\,
     \left[\begin{array}{c} 
     x_{1} \\ x_{2} \\ \ldots \\ x_{n} 
     \end{array}\right]\ \,`
     the opposite is :math:`\ \,(-\,\boldsymbol{x})\,=\,
     \left[\begin{array}{c}
     -x_{1} \\ -x_{2} \\ \ldots \\ -x_{n} 
     \end{array}\right]\,.`
   | :math:`\,` 

Furthermore, since the scalar multiplication of column vectors 
is distributive, 
both over addition of scalars and over addition of vectors:

.. math::
   
   (a + b)\ \boldsymbol{x}\ =\ a\,\boldsymbol{x}\ +\ b\,\boldsymbol{x}\,,
   \qquad
   a\,(\boldsymbol{x} + \boldsymbol{y})\ =\ 
   a\,\boldsymbol{x}\,+\,a\,\boldsymbol{y}\,,

and satisfies the compatibility conditions

.. math::
   
   a\,(b\,\boldsymbol{x})\ =\ (ab)\,\boldsymbol{x},\qquad
   1\,\boldsymbol{x}\ =\ \boldsymbol{x},\qquad\quad
   \forall\ \ a,b\in K,\quad\forall\ \ \boldsymbol{x},\boldsymbol{y}\in\ K^n,

the set :math:`\ K^n\ ` is a vector space over the field :math:`\,K\,`
under addition and scalar multiplication of column vectors. 


Column vectors over the real field :math:`\,R\,` of size two or three
can be associated with geometric vectors in a plane or in the space, 
respectively. Namely, if :math:`\ \,\vec{e}_1,\,\vec{e}_2\ \,` or
:math:`\ \,\vec{e}_1,\,\vec{e}_2\,,\vec{e}_3\ \,` form a basis
of mutually perpendicular unit vectors, then:
 
:math:`\quad\boldsymbol{x}\ =\ 
\left[\begin{array}{c} x_1 \\ x_2 \end{array}\right]
\quad\simeq\quad
\vec{v}\ =\ x_1\,\vec{e}_1 + x_2\,\vec{e}_2\,;`
 
:math:`\quad\boldsymbol{x}\ =\ 
\left[\begin{array}{c} x_1 \\ x_2 \\ x_3 \end{array}\right]
\quad\simeq\quad
\vec{v}\ =\ x_1\,\vec{e}_1 + x_2\,\vec{e}_2 + x_3\,\vec{e}_3\,.`

The relation :math:`\ \simeq\ ` between the column and geometric vectors
has the property that

if 
:math:`\quad\boldsymbol{x}\ \simeq\ \vec{v}\quad\text{and}\quad
\boldsymbol{y}\ \simeq\ \vec{w},\qquad`

then 
:math:`\qquad\ \boldsymbol{x}+\boldsymbol{y}\ \,\simeq\ \,\vec{v}+\vec{w}\qquad`
and :math:`\qquad c\ \boldsymbol{x}\ \simeq\ c\ \vec{v}\ ` for all :math:`\ c\in R.`

A bijective correspondence between two vector spaces over the same field 
(geometric vectors also form a real vector space), 
which preserves space operations in the above sense, 
is called *isomorphism*, and the pertinent vector spaces 
are said to be *isomorphic*. 

The notion of isomorphism generalized to other algebraic structures
(e.g. to algebras) will be discussed in subsequent parts of this textbook.

.. admonition:: Experiment with Sage: 

   For given values :math:`\ x_1,\,x_2\ ` you will get
   the geometric image :math:`\ \vec{v}\ ` of the vector
   :math:`\ \,\boldsymbol{x} = 
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right]`.

:math:`\;`

.. sagecellserver::

   e1 = vector([1,0]); e2 = vector([0,1])

   @interact

   def _(x1=('$$x_1:$$', slider(-3, 3, 1/4, default=3)),
         x2=('$$x_2:$$', slider(-2, 3, 1/4, default=2))):

       plt = arrow((0,0),e1, color='green',
              legend_label=' $\\vec{e}_1$', legend_color='black', zorder=6) +\
             arrow((0,0),e2, color='red',
              legend_label=' $\\vec{e}_2$', legend_color='black', zorder=6) +\
             arrow((0,0),x1*e1, color='green',
              width=1, arrowsize=3, zorder=7) +\
             arrow((0,0),x2*e2, color='red',
              width=1, arrowsize=3, zorder=7) +\
             arrow((0,0),x1*e1+x2*e2, color='black',
              legend_label=' $\\vec{v}$', legend_color='black', zorder=8) +\
             line([x1*e1,x1*e1+x2*e2], color='black',
              linestyle='dashed', thickness=0.5) +\
             line([x2*e2,x1*e1+x2*e2], color='black',
              linestyle='dashed', thickness=0.5) +\
             point((0,0), color='white',
              faceted=True,  size=18, zorder=9)

       pretty_print(html("$\\qquad\\qquad\\qquad\\qquad\\qquad\
                    \\vec{v}\\,=\\,\ x_1\\,\\vec{e}_1+x_2\\,\\vec{e}_2$"))
       print ''
       plt.set_axes_range(-3,5,-2,3)
       plt.show(aspect_ratio=1, axes_labels=['x','y'], ticks=[1,1], figsize=7)

:math:`\;`

.. [1] The symbol :math:`\ \ " :\,= "\ \ ` means :math:`\ ` 
   "equal by definition".




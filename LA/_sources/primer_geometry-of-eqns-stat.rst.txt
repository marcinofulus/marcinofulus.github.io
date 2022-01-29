.. -*- coding: utf-8 -*-
.. _geometry-of-eqns:

Geometry of Linear Equations
----------------------------

In this section we shall discuss systems of linear equations 
in two or three variables over the real field :math:`\,R.\,`
Such systems can be directly visualized,
either in a plane by a set of straight lines, 
or in the three-dimensional (still imaginable) space 
by a collection of planes.

.. the solutions being represented by intersections 
   of these objects (if they exist).

We shall focus on two geometric approaches to linear systems: 
the row picture and the column picture. This terminology concerns 
rows and columns of the coefficient matrix which, together with 
the vector of constants, represents a system of equations.
We also mention the algebraic matrix picture, which is 
the starting point for the general theory, developed in next chapters. 

.. We also mention the algebraic matrix picture.
   The algebraic matrix picture is only mentioned here, 
   to be elaborated elsewhere in this book.
   in further parts of the book.
   which has been developed in further parts of the textbook.

The intended purpose of simple examples shown here is (hopefully) 
to expand the intuition, useful for dealing with greater linear systems 
represented by sets of hyperplanes in multi-dimensional spaces.

Row Picture
~~~~~~~~~~~

Consider the following system of two linear equations:

.. math::
   :nowrap:
   
   \begin{alignat*}{3}
   2\,x_1 & {\,} - {\,} & x_2 & {\;} = {\;} & 1 \\ 
   x_1 & {\,} + {\,}& x_2 & {\;} = {\;} & 5
   \end{alignat*}
   
It may be solved by hand or by computer:

.. sagecellserver::

   var('x1 x2')
   
   eq1 = 2*x1-x2==1
   eq2 = x1+x2==5

   show(solve([eq1,eq2],[x1,x2]))

to yield the solution :math:`\ x_1=2,\ x_2=3.` 
   
Each equation is represented by a straight line in the plane :math:`(x_1,x_2).`
The solution corresponds to a point lying on both lines simultaneously,
that is to the point of intersection of these lines:

.. figure:: figures/Rys_0.png
   :height: 10 cm
   :width: 10 cm
   :scale: 70 %
   :align: center

.. three cases are possible:

In general, two straight lines in a plane may behave in three ways:

1. :math:`\,` lines intersect at a single point;
2. :math:`\,` lines are identical and merge together;
3. :math:`\,` lines are parallel (though different).

Accordingly, a corresponding system of two equations: 

1. :math:`\,` has a single unique solution;
2. :math:`\,` has infinitely many solutions;
3. :math:`\,` has no solution.

When a system of equations has at least one solution (case 1. and 2. above),
:math:`\\`
it is said to be :math:`\,` *consistent*, :math:`\,` 
otherwise (case 3.) it is :math:`\,` *inconsistent*. :math:`\\`
On the other hand, a system with more than one solution
(case 2.) is :math:`\,` *indeterminate*.

Column Picture
~~~~~~~~~~~~~~
 
The foregoing system of equations

.. math::
   :nowrap:
   
   \begin{alignat*}{3}
   2\,x_1 & {\,} - {\,} & x_2 & {\;} = {\;} & 1 \\ 
   x_1 & {\,} + {\,}& x_2 & {\;} = {\;} & 5
   \end{alignat*}

can be rewritten as equality of two column vectors:

.. math::
   
   \left[\begin{array}{r} 2\,x_1\ -\ x_2 \\ x_1\ +\ x_2 \end{array}\right]
   \ =\ 
   \left[\begin{array}{c} 1 \\ 5 \end{array}\right]\,.

The left-hand side can be expressed as a linear combination
with coefficients :math:`\,x_1,\,x_2\,:`

.. Using the definitions of operations on column vectors, we obtain

.. math:
   
   \left[\begin{array}{r} 2x_1 \\ x_1 \end{array}\right]\ +\   
   \left[ \begin{array}{r} -x_2 \\ x_2 \end{array}\right] \ =\  
   \left[\begin{array}{r} 1 \\ 5 \end{array}\right]\,,

.. math::

   x_1\ \left[\begin{array}{r} 2 \\ 1 \end{array}\right] \ + \ 
   x_2\ \left[\begin{array}{r} -1 \\ 1 \end{array}\right] \ = \ 
   \left[\begin{array}{r} 1 \\ 5 \end{array}\right]\,.

Now the unknowns :math:`\,x_1,\,x_2\ ` are weights for column vectors 
:math:`\ \boldsymbol{a}_1 =
\left[\begin{array}{r} 2 \\ 1 \end{array}\right],\ ` 
:math:`\boldsymbol{a}_2 =
\left[\begin{array}{r} -1 \\ 1 \end{array}\right]\ ` :math:`\\` in a linear 
combination, :math:`\,` which should equal the column vector of constants
:math:`\ \boldsymbol{b}\,=
\left[ \begin{array}{r} 1 \\5 \end{array} \right].`

.. sidebar: Kombinacja liniowa.

   | Kombinacja liniowa :math:`\ \,\boldsymbol{w}\ \,` wektorów
     :math:`\ \,\boldsymbol{v}_1\ \ \text{i}\ \ \,\boldsymbol{v}_2\ `
   | o współczynnikach liczbowych :math:`\ \,x_1\ \ \text{i}\ \ \, x_2\,` 
   | jest z definicji ich :math:`\ ` "sumą ważoną" :math:`\ ` postaci
   |
   | :math:`\qquad\qquad\boldsymbol{w}\ =\ 
     x_1\,\boldsymbol{v}_1 + x_2\,\boldsymbol{v}_2\,.`
   |

.. admonition: Experiment with Sage:
   
.. sagecellserver:

   v1 = vector([2,1]); v2 = vector([-1,1]); w = vector([1,5])

   @interact

   def _(x1=('$$x_1:$$', slider(0,3,1/2, default=3)),
         x2=('$$x_2:$$', slider(0,3,1/2, default=2))):

       plt = arrow((0,0),v1, color='green',
              legend_label=' $\\vec{v}_1$', legend_color='black', zorder=5) +\
             arrow((0,0),v2, color='red',
              legend_label=' $\\vec{v}_2$', legend_color='black', zorder=5) +\
             arrow((0,0),w, color='black',
              legend_label=' $\\vec{w}$', legend_color='black', zorder=5) +\
             arrow((0,0),x1*v1, color='gray', width=1, arrowsize=3) +\
             arrow((0,0),x2*v2, color='gray', width=1, arrowsize=3) +\
             arrow((0,0),x1*v1+x2*v2, color='gray', 
              width=1.75, arrowsize=3) +\
             line([x1*v1,x2*v2+x1*v1], color='black',
              linestyle='dashed', thickness=0.5) +\
             line([x2*v2,x2*v2+x1*v1], color='black',
              linestyle='dashed', thickness=0.5) +\
             point((0,0), color='white', faceted=True, size=18, zorder=7)

       plt.set_axes_range(-3,7,-1,6)

       if x1*v1+x2*v2==w: pretty_print(html("DONE!!!"))
       plt.show(aspect_ratio=1, ticks=[1,1], figsize=5)

.. admonition:: Experiment with Sage:
   
   In the following program the column vectors
   :math:`\;\boldsymbol{a}_1,\ \boldsymbol{a}_2\ ` 
   and :math:`\;\boldsymbol{b}\ ` are represented by the geometric vectors
   :math:`\;\vec{a}_1,\ \vec{a}_2\ ` and :math:`\;\vec{b},\ ` respectively.
   Using the sliders, set the values of coefficients
   :math:`\ x_1\ ` and :math:`\ x_2\ ` so that the vector
   :math:`\;x_1\ \vec{a}_1 + x_2\ \vec{a}_2\;` (coloured grey)
   is equal to the vector :math:`\,\vec{b}`.

.. sagecellserver::

   a1 = vector([2,1]); a2 = vector([-1,1]); b = vector([1,5])

   @interact

   def _(x1=('$$x_1:$$', slider(0,3,1/2, default=3)),
         x2=('$$x_2:$$', slider(0,3,1/2, default=2))):

       plt = arrow((0,0),a1, color='green',
              legend_label=' $\\vec{a}_1$', legend_color='black', zorder=5) +\
             arrow((0,0),a2, color='red',
              legend_label=' $\\vec{a}_2$', legend_color='black', zorder=5) +\
             arrow((0,0),b, color='black',
              legend_label=' $\\vec{b}$', legend_color='black', zorder=5) +\
             arrow((0,0),x1*a1, color='gray', width=1, arrowsize=3) +\
             arrow((0,0),x2*a2, color='gray', width=1, arrowsize=3) +\
             arrow((0,0),x1*a1+x2*a2, color='gray', 
              width=1.75, arrowsize=3) +\
             line([x1*a1,x2*a2+x1*a1], color='black',
              linestyle='dashed', thickness=0.5) +\
             line([x2*a2,x2*a2+x1*a1], color='black',
              linestyle='dashed', thickness=0.5) +\
             point((0,0), color='white', faceted=True, size=18, zorder=7)

       plt.set_axes_range(-3,7,-1,6)

       if x1*a1+x2*a2==b: pretty_print(html("DONE!!!"))
       plt.show(aspect_ratio=1, ticks=[1,1], figsize=5)

In general, a system of linear equations is completely determined
by the coefficient matrix :math:`\,\boldsymbol{A}\ ` and the vector
of constants :math:`\,\boldsymbol{b}.\ ` In the present example 

.. math::

   \boldsymbol{A}\ =
   \ \left[\begin{array}{rr} 2 & -1 \\ 1 & 1 \end{array}\right]\,,\qquad
   \boldsymbol{b}\ =\ \left[\begin{array}{c} 1 \\ 5 \end{array}\right]\,.

The row picture of a system of equations is obtained by reading the rows
of matrix :math:`\,\boldsymbol{A},\ ` whereas the column picture 
involves the columns thereof.

:math:`\ `

Consistent System: a unique solution
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We shall deal with the system of three equations in three variables:

.. math::
   :nowrap:

   \begin{alignat*}{4}
   2\,x_1 & {\,} + {\,} & x_2 & {\,} + {\,} &    x_3 & {\;} = {} &  1 \\
      x_1 & {\,} - {\,} & x_2 &             &        & {\;} = {} & -1 \\
      x_1 & {\,} + {\,} & x_2 & {\,} + {\,} & 2\,x_3 & {\;} = {} &  2 
   \end{alignat*}

Its solution is given by 
:math:`\ \ x_1 = -\frac{1}{4},\ \ x_2 = \frac{3}{4},\ \ x_3 = \frac{3}{4}\,.`

In the three-dimensional space of coordinates :math:`\ x_1,\,x_2,\,x_3\ ` 
each linear equation yields a plane.
In the row picture, the solution of the system is therefore given by the 
geometric locus of points belonging simultaneously to the three planes.
In the present case, this is the single point of their intersection.

.. intersection of the three planes: 

.. figure:: figures/Rys_11.jpg
   :height: 10 cm
   :width: 10 cm
   :scale: 90 %
   :align: center

**Row picture.** The planes corresponding to the consecutive 
equations of the system are coloured red, green and blue, respectively,
whereas the point common to them (representing the solution)
is drawn in white.

In the column picture the problem consists in determining the coefficients
:math:`\ x_1,\,x_2,\,x_3\ \,` :math:`\\` in a linear combination of column 
vectors :math:`\ \boldsymbol{a}_1,\,\boldsymbol{a}_2,\,\boldsymbol{a}_3\,,\ `
which is equal to vector :math:`\,\boldsymbol{b}:` 

.. math::
   :label: col

   x_1\,\boldsymbol{a}_1\,+\,x_2\,\boldsymbol{a}_2\,+\,x_3\,\boldsymbol{a}_3\ =
   \ \boldsymbol{b}\,.

.. The column vectors :math:`\ \boldsymbol{a}_1,\,\boldsymbol{a}_2,\,
   \boldsymbol{a}_3,\,\boldsymbol{b}\,,\ ` can readily be identified

The function ``verse3column()`` writes down a given system 
of three linear equations in three unknowns in the column form :eq:`col`:

.. sagecellserver::

   def verse3colmn(Eqns):

       var('x1 x2 x3')
    
       L = [vector([eq.lhs().coefficient(x) for eq in Eqns]) for x in [x1,x2,x3]]
       
       b = vector([eq.rhs() for eq in Eqns])
       L.append(b)
       
       clmn = '$\\left[\\begin{array}{r} %d \\\ %d \\\ %d \\end{array}\\right]$'
       comp = '$x_%i\\ $' + clmn
   
       pretty_print(html(
           comp % (1, L[0][0],L[0][1],L[0][2]) + ' $\\,+\\,$ ' +\
           comp % (2, L[1][0],L[1][1],L[1][2]) + ' $\\,+\\,$ ' +\
           comp % (3, L[2][0],L[2][1],L[2][2]) + ' $\\ =\\ $ ' +\
           clmn %    (L[3][0],L[3][1],L[3][2])))            

The function has to be called with a list of equations as the argument:

.. sagecellserver::

   var('x1 x2 x3')

   eq1 = 2*x1+1*x2+1*x3== 1
   eq2 = 1*x1-1*x2+0*x3==-1
   eq3 = 1*x1+1*x2+2*x3== 2
   Eqns = [eq1,eq2,eq3]
   
   try: verse3colmn(Eqns)
   except NameError: pretty_print(html("Execute code in the previous cell!"))

.. figure:: figures/Rys_21.jpg
   :height: 10 cm
   :width: 10 cm
   :scale: 70 %
   :align: center

**Column picture.**  
The vectors :math:`\ \boldsymbol{a}_1,\,\boldsymbol{a}_2,\,\boldsymbol{a}_3\ ` 
and :math:`\ \boldsymbol{b}\ ` are coloured red, green, blue and grey,
respectively. 
The uniqueness of the solution stems from the fact that 
:math:`\ \boldsymbol{a}_1,\,\boldsymbol{a}_2,\,\boldsymbol{a}_3\ `
are not coplanar, thereby creating a basis in the three-dimensional 
space of geometric vectors.

.. A unique solution of the system stems from the fact that vectors
   :math:`\ \boldsymbol{a}_1,\,\boldsymbol{a}_2,\, \boldsymbol{a}_3\ ` 
   are not coplanar.

Consistent System: infinitely many solutions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now we shall discuss the following system of linear equations:

.. math::
   :nowrap:

   \begin{alignat*}{4}
   2\,x_1 & {\,} + {\,} &    x_2 & {\,} + {\,} &    x_3 & {\;} = {\;} & 1 \\
   4\,x_1 & {\,} + {\,} & 2\,x_2 & {\,} + {\,} & 2\,x_3 & {\;} = {\;} & 2 \\
      x_1 & {\,} + {\,} &    x_2 & {\,} + {\,} & 2\,x_3 & {\;} = {\;} & 3
   \end{alignat*}

The Sage function ``solve()`` yields the solution dependent on
a parameter :math:`\,r_1,\,`  which may assume arbitrary values:

.. sagecellserver::

   var('x1 x2 x3')

   eq1 = 2*x1+1*x2+1*x3==1
   eq2 = 4*x1+2*x2+2*x3==2
   eq3 = 1*x1+1*x2+2*x3==3

   show(solve([eq1,eq2,eq3],[x1,x2,x3]))

Therefore, the equations are simultaneously satisfied with infinitely many
triplets of numbers.

This outcome is a consequence of a linear dependence of equations.
In general, a system of linear equations is said to be (linearly) dependent,
when one of the equations can be expressed as a linear combination 
of the remaining ones, that is when one equation can be algebraically derived
from the others. Such equation does not contribute any new information
about variables and removing it does not change the set of solutions.

In the present example, the second equation is simply the first one scaled 
by a factor of two. Thus actually we have to deal with a system of two 
(independent) equations in three variables.

.. figure:: figures/Rys_31.jpg
   :height: 10 cm
   :width: 10 cm
   :scale: 80 %
   :align: center

**Row picture.** The planes, corresponding to the two first equations
(coloured red and green) are identical and merge together. 
The blue plane, corresponding to the third equation, intersects them
along the (white) straight line. That line represents the infinite set
of solutions of the system.

.. figure:: figures/Rys_41.jpg
   :height: 10 cm
   :width: 10 cm
   :scale: 75 %
   :align: center

**Column picture.** The vectors :math:`\ \vec{a}_1,\,\vec{a}_2,\,\vec{a}_3\ `
(coloured red, green, blue, respectively) are coplanar. 
The vector :math:`\ \vec{b}\,` (grey), representing the vector of constants,
belongs to the same plane. In this situation infinitely many linear 
combinations of vectors :math:`\ \vec{a}_1,\,\vec{a}_2,\,\vec{a}_3\ ` 
may be equal to :math:`\ \vec{b}.`

**A remark on indeterminate systems of equations.**

.. Suppose that while solving a system of equations (not necessarily linear)
   with the aid of the Sage function ``solve()``, 
   we have obtained expressions containing parameters ``r1, r2, ...`` 
   (their names are unpredictable).

Suppose that solving a system of equations (not necessarily linear)
with the aid of the Sage function ``solve()`` resulted in expressions 
containing parameters :math:`\ ` ``r1, r2, ...`` :math:`\\`
(their names are unpredictable).
If we want to make use of these parameters for, say, drawing solutions,
then before using them we have to declare the corresponding variables.

In the present example we consider a trivial indeterminate system
of two linear equations in two variables, whose solution depends on
a single parameter. The following procedure makes it possible to draw
the set of solutions for a given range of the parameter.

We encourage the reader to analyze the code and to become acquainted
with the advanced tools of Sage applied herein.

.. sagecellserver::

   var('x1 x2')
   
   # Indeterminate system of equations:
   Eqns = [  x1 +   x2 == 1,
           2*x1 + 2*x2 == 2]
   
   s = solve(Eqns,[x1,x2])
   print s[0] # solution of the system
   
   # Extract all parameters from the solution:
   lvar = uniq(flatten(map(lambda w: w.variables(), s[0])))
   for x in [x1,x2]: lvar.remove(x)
   for rvar in lvar: var(rvar)
   print lvar # list of the parameters as variables

   # Plot of the set of solutions for the parameter in the given range:
   pts = [map(lambda w: w.rhs().subs(lvar[0]==p), s[0]) 
          for p in srange(-1,1,0.1)]

   line(pts, axes_labels=['$x_1$','$x_2$'], color='green', figsize=5)

Inconsistent System: no solution
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We shall slightly modify the previous example by changing its 
right-hand side:

.. math::
   :nowrap:

   \begin{alignat*}{4}
   2\,x_1 & {\,} + {\,} &    x_2 & {\,} + {\,} &    x_3 & {\;} = {\;} & 0 \\
   4\,x_1 & {\,} + {\,} & 2\,x_2 & {\,} + {\,} & 2\,x_3 & {\;} = {\;} & 5 \\
      x_1 & {\,} + {\,} &    x_2 & {\,} + {\,} & 2\,x_3 & {\;} = {\;} & 1
   \end{alignat*}

Now the system no longer has any solution:

.. sagecellserver::

   var('x1 x2 x3')

   eq1 = 2*x1+1*x2+1*x3==0
   eq2 = 4*x1+2*x2+2*x3==5
   eq3 = 1*x1+1*x2+2*x3==1

   show(solve([eq1,eq2,eq3],[x1,x2,x3]))

Indeed, there is an obvious contradiction between the first two equations.
The left-hand side of the second equation being the double of 
the left-hand side of the first one, the right-hand side 
of the second equation should equal 0, not 5. 

Below we study a graphical representation of this situation, 
using the row and column pictures of a linear system.

.. figure:: figures/Rys_51.jpg
   :height: 10 cm
   :width: 10 cm
   :scale: 90 %
   :align: center

**Row picture.** :math:`\\`
The planes, corresponding to the first two equations of the system 
(coloured red and green) are parallel, but do not merge. 
Thus regardless of a position of the third (blue) plane, 
representing the third equation, the geometric locus of points common
to all three planes is the empty set. :math:`\\` :math:`\\`

.. figure:: figures/Rys_61.jpg
   :height: 10 cm
   :width: 10 cm
   :scale: 80 %
   :align: center

**Column picture.** :math:`\,`
As previously, the vectors :math:`\,\vec{a}_1,\,\vec{a}_2,\,\vec{a}_3\,` 
(red, green, blue) are coplanar. :math:`\\`
In contrast to the previous case however, vector :math:`\ \vec{b}\,` (grey) 
is not coplanar with them. None of the linear combinations of 
:math:`\ \vec{a}_1,\,\vec{a}_2,\,\vec{a}_3\ ` can equal :math:`\ \vec{b},\ ` 
hence the set of solutions is empty.

Matrix Picture of a Linear System
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Let's reconsider the generic system of three equations in three variables:

.. math::
   :nowrap:

   \begin{alignat*}{4}
   2\,x_1 & {\,} + {\,} & x_2 & {\,} + {\,} &    x_3 & {\;} = {} &  1 \\
      x_1 & {\,} - {\,} & x_2 &             &        & {\;} = {} & -1 \\
      x_1 & {\,} + {\,} & x_2 & {\,} + {\,} & 2\,x_3 & {\;} = {} &  2 
   \end{alignat*}

where the matrix of coefficients and the vector of constants are given by

.. math::

   \boldsymbol{A}\ =\ 
   \left[\,\boldsymbol{a}_1\,|\,\boldsymbol{a}_2\,|\,\boldsymbol{a}_3\,\right]
   \ =\ 
   \left[\begin{array}{rrr}
    2 &  1 & 1 \\
    1 & -1 & 0 \\
    1 &  1 & 2
   \end{array}\right]\,,\qquad     
   \boldsymbol{b}\ =\ 
   \left[\begin{array}{r} 
   1 \\ -1 \\ 2 
   \end{array}\right]\,.

A product of the matrix :math:`\,\boldsymbol{A}\ ` and the column vector 
:math:`\,\boldsymbol{x}\ ` of unknowns being defined as

.. math::
   
   \boldsymbol{A}\,\boldsymbol{x}\ \equiv\ 
   \left[\,\boldsymbol{a}_1\,|\,\boldsymbol{a}_2\,|\,\boldsymbol{a}_3\,\right]\ 
   \left[\begin{array}{r} x_1 \\ x_2 \\ x_3 \end{array}\right]\ \ :\,=\ \ 
   x_1\ \boldsymbol{a}_1\ +\ x_2\ \boldsymbol{a}_2\ +\ x_3\ \boldsymbol{a}_3\,,

.. math:

   \left[\begin{array}{rrr}
          2 &  1 & 1 \\
          1 & -1 & 0 \\
          1 &  1 & 2
         \end{array}\right]\ 
   \left[\begin{array}{r} x_1 \\ x_2 \\ x_3 \end{array}\right]\ \ =\ \  
   x_1\ \left[\begin{array}{r} 2 \\  1 \\ 1 \end{array}\right]\ +\ \,
   x_2\ \left[\begin{array}{r} 1 \\ -1 \\ 1 \end{array}\right]\ +\ \,
   x_3\ \left[\begin{array}{r} 1 \\ 0 \\ 2 \end{array}\right]\,,

the column form of the above system

.. math::
   
   x_1\ \left[\begin{array}{r} 2 \\  1 \\ 1 \end{array}\right]\ +\ \,
   x_2\ \left[\begin{array}{r} 1 \\ -1 \\ 1 \end{array}\right]\ +\ \,
   x_3\ \left[\begin{array}{r} 1 \\ 0 \\ 2 \end{array}\right]
   \ =\ 
   \left[\begin{array}{r} 1 \\ -1 \\ 2 \end{array}\right]\,,

can be rewritten in a compact matrix form as   
:math:`\ \ \boldsymbol{A} \boldsymbol{x} = \boldsymbol{b}\,.` :math:`\\`
The latter formula may be called 
:math:`\,` a :math:`\,` *matrix picture* :math:`\,` 
of a linear system.




   














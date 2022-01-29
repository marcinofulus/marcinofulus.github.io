
Systems of Linear Equations
---------------------------

**Exercise 0.** :math:`\\`
Write down the following problems in a form of a system of linear equations and find its solutions (by any means).

#. | Andrew is two times older than Peter, and the sum of their age equals 33.
   | How old are Andrew and Peter?

#. | The points :math:`\ P_1=(2,5)\ ` and :math:`\ P_2=(3,7)\ ` lie on a line given by the equation
     :math:`\ y=ax+b.\ ` 
   | Find the parameters :math:`\ a\ ` and  :math:`\ b.`

#. | The parabola passes through the points :math:`\ P_1=(1,4),\ P_2=(2,8)\ ` and :math:`\ P_3=(3,14).\ `
   | Find the coefficients :math:`\ a,\,b,\,c\ ` which determine the equation :math:`\ y=ax^2+bx+c\ ` of this parabola.

**Exercise 1.** :math:`\\`
Perform elementary operations on the equations (cf. :ref:`Gaussian Elimination`)
or rows of the corresponding matrices (cf. :ref:`Practical Elimination in Sage`), without applying functions ``solve()``, 
:math:`\,`   ``X.solve_right()``, :math:`\,` ``X\y``, :math:`\,` ``X.rref()``, :math:`\,` 
in order to solve the following systems of equations over the field :math:`\ Q:`

#. .. math::
      :nowrap:
     
      \begin{alignat*}{3}
         x_1 & \ -\  &    x_2 & \ =\  & 0 \\
      -\,x_1 & \ +\  & 2\,x_2 & \ =\  & \ \textstyle\frac{1}{36}
      \end{alignat*}
   
   .. (1/36, 1/36), rank A: 2

#. .. math::
      :nowrap:
      
      \begin{alignat*}{3}
      -\,2\,x_1 & \ -\  & 3\,x_2 & \ =\  & 0 \\
         3\,x_1 & \ +\  & 4\,x_2 & \ =\  & \ \textstyle\frac{16}{7}
      \end{alignat*}

   .. (48/7, -32/7), rank A: 2

#. .. math::
      :nowrap:
      
      \begin{alignat*}{4}
        16\,x_1 & \ +\ & 41\,x_2 & \ -\ & 101\,x_3 & \ =\ & -\,\textstyle\frac{1}{10} \\
            x_1 & \ +\ &  3\,x_2 & \ -\ &   7\,x_3 & \ =\ &  \ \textstyle\frac{1}{2}  \\
      -\,5\,x_1 & \ -\ & 13\,x_2 & \ +\ &  32\,x_3 & \ =\ &  1
      \end{alignat*}
   
   .. (16, 71/5, 83/10), rank A: 3

#. .. math::
      :nowrap:
      
      \begin{alignat*}{4}
         -\,x_1 & \ -\ & 3\,x_2 & \ +\ & 9\,x_3 & \ =\ &    1 \\
            x_1 & \  \ &        & \ +\ &    x_3 & \ =\ & -\,2 \\
      -\,2\,x_1 & \ -\ & 2\,x_2 & \ +\ & 5\,x_3 & \ =\ &    2
      \end{alignat*}
   
   .. (2, -13, -4), rank A: 3

#. .. math::
      :nowrap:
      
      \begin{alignat*}{4}
      -\,11\,x_1 & \ +\ & 44\,x_2 & \ -\ & 135\,x_3 & \ =\ &    0                     \\
          2\,x_1 & \ -\ &  7\,x_2 & \ +\ &  20\,x_3 & \ =\ &    \textstyle\frac{1}{3} \\
          4\,x_1 & \ -\ & 16\,x_2 & \ +\ &  49\,x_3 & \ =\ & -\ \textstyle\frac{1}{7}
      \end{alignat*}
   
   .. (223/21, 157/21, 11/7), rank A: 3

#. .. math::
      :nowrap:
      
      \begin{alignat*}{5}
            x_1 &\ +\ &  3\,x_2 &\ -\ &    x_3 &\ +\ &  23 \,x_4 &\ =\ & -\,1 \\
         4\,x_1 &\ +\ & 13\,x_2 &\ -\ & 3\,x_3 &\ +\ &  93 \,x_4 &\ =\ & -\,1 \\
      -\,5\,x_1 &\ -\ & 17\,x_2 &\ +\ & 4\,x_3 &\ -\ & 121 \,x_4 &\ =\ & -\ \textstyle\frac{1}{2} \\
                &\  \ &     x_2 &\ +\ & 3\,x_3 &\ -\ &   6 \,x_4 &\ =\ &  \textstyle\frac{1}{2}
      \end{alignat*}
   
   .. (6, 20, -27/2, -7/2), rank A: 4

**Exercise 2.** :math:`\,`
Now use all necessary functions of Sage (c.f. :ref:`Example with Discussion`) 
to solve real linear problems of the form :math:`\ \boldsymbol{A}\,\boldsymbol{x}=\boldsymbol{b}\ \,` 
for the following data:

1. .. math::
      
      \boldsymbol{A}\ =\ 
      \left[\begin{array}{rrrr}
       1 & -5 &   9 &  11 \\
       1 & -4 &   8 &   9 \\
      -3 & 15 & -26 & -33 \\
      -2 &  7 & -10 & -16 
      \end{array}\right]\,,\qquad
      \boldsymbol{b}\ =\ 
      \left[\begin{array}{r}
      -1 \\ 0 \\ 4 \\ 4
      \end{array}\right]\,;

2. .. math::
      
      \boldsymbol{A}\ =\ 
      \left[\begin{array}{rrrr}
       1 &   4 &   5 & -1 \\
      -3 & -12 & -14 &  3 \\
       3 &  12 &  19 & -3 \\
      -2 &  -8 & -12 &  2
      \end{array}\right]\,,\qquad
      \boldsymbol{b}\ =\ 
      \left[\begin{array}{r}
      13 \\ -38 \\ 43 \\ -28
      \end{array}\right]\,;

.. .. math::

      \boldsymbol{A}\ =\ 
      \left[\begin{array}{rrrr}
       1 &   4 &   5 & -1 \\
      -3 & -12 & -14 &  3 \\
       3 &  12 &  19 & -3 \\
      -2 &  -8 & -12 &  2
      \end{array}\right]\,,\qquad
      \boldsymbol{b}\ =\  
      \left[\begin{array}{r}
      0 \\ 0 \\ 0 \\ 0
      \end{array}\right]\,;

3. .. math::
      
      \boldsymbol{A}\ =\ 
      \left[\begin{array}{rrr}
      1 &  -5 & -11 \\
      2 &  -9 & -20 \\
      4 & -16 & -36
      \end{array}\right]\,,\qquad
      \boldsymbol{b}\ =\ 
      \left[\begin{array}{r}
      -1 \\ -5 \\ 1 
      \end{array}\right]\,.

A basis of the solution space of the homogeneous linear problem
:math:`\ \boldsymbol{A}\,\boldsymbol{x}=\boldsymbol{0}\ ` is called a :math:`\,`
*fundamental set of solutions* :math:`\,` for this problem.

**Exercise 3.** :math:`\,`
Find a fundamental set of solutions of the homogeneous linear problem  
over :math:`\ Q\ ` with coefficient matrix

.. math::
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{rrrr}
       1 &   4 &   5 & -1 \\
      -3 & -12 & -14 &  3 \\
       3 &  12 &  19 & -3 \\
      -2 &  -8 & -12 &  2
   \end{array}\right]\,.

**Exercise 4.** :math:`\,`
Find a homogeneous system of equations consisting of 
:math:`\,` a.) two :math:`\,` b.) three :math:`\,` equations so that the vectors 

.. math::
   
   \left[\begin{array}{r} 1 \\  4 \\ -2 \\ 2 \\ -1 \end{array}\right]\,,\quad
   \left[\begin{array}{r} 3 \\ 13 \\ -1 \\ 2 \\  1 \end{array}\right]\,,\quad
   \left[\begin{array}{r} 2 \\  7 \\ -8 \\ 4 \\ -5 \end{array}\right]

comprise its fundamental set of solutions.

.. (4.4.30)

**Exercise 5.** :math:`\,`
Does there exist a homogeneous system of linear equations whose fundamental set of solutions
is given both by the vectors
:math:`\ (\boldsymbol{x}_1,\boldsymbol{x}_2,\boldsymbol{x}_3)\ ` and
:math:`\ (\boldsymbol{y}_1,\boldsymbol{y}_2,\boldsymbol{y}_3),\ ` where

.. math::

   \begin{array}{lll}   
   \boldsymbol{x}_1=
   \left[\begin{array}{r} 2 \\ 3 \\ 1 \\ 2 \end{array}\right], &
   \boldsymbol{x}_2=
   \left[\begin{array}{r} 1 \\ 1 \\ -2 \\ -2 \end{array}\right], &
   \boldsymbol{x}_3=
   \left[\begin{array}{r} 3 \\ 4 \\ 2 \\ 1 \end{array}\right],
   \\ \\ 
   \boldsymbol{y}_1=
   \left[\begin{array}{r} 1 \\ 0 \\ 2 \\ -5 \end{array}\right], &
   \boldsymbol{y}_2=
   \left[\begin{array}{r} 0 \\ 1 \\ 8 \\ 7 \end{array}\right], &
   \boldsymbol{y}_3=
   \left[\begin{array}{r} 4 \\ 5 \\ -2 \\ 0 \end{array}\right].
   \end{array}

.. (4.4.31)

**Exercise 6.** :math:`\\`
Does there exist :math:`\ \lambda\in Q\ ` for which the followng system of linear equations  

.. math::
   :nowrap:

   \begin{alignat*}{4}
        x_1 & \ +\ & 2\,x_2 & \ +\ & 3\,\lambda\,x_3 & \ =\ & -1 \\
        x_1 & \ +\ &    x_2 & \ -\ &             x_3 & \ =\ &  1 \\
   \,2\,x_1 & \ +\ &    x_2 & \ +\ &          5\,x_3 & \ =\ &  3
   \end{alignat*}

has infinitely many solutions over :math:`\ Q\ `?

**Hint.** The (negative) answer may be given by computation of only one 
determinant of rank 3. 

**Exercise 7.** 
For which :math:`\ \lambda\in R\ ` the following system of linear equations over the field :math:`\ R\ `
has a solution? :math:`\,` Find this solution. 

.. math::
   :nowrap:

   \begin{alignat*}{5}
   2\,x_1 &\ -\ &    x_2 &\ +\ &    x_3 &\ +\ &     x_4 &\ =\ & 1 \\
      x_1 &\ +\ & 2\,x_2 &\ -\ &    x_3 &\ +\ &  4\,x_4 &\ =\ & 2 \\
      x_1 &\ +\ & 7\,x_2 &\ -\ & 4\,x_3 &\ +\ & 11\,x_4 &\ =\ & \lambda 
   \end{alignat*}


**Exercise 8.** 
Describe a solution space of the following systems of equations depending on :math:`\ \lambda`: 

#. .. math::
      :nowrap:
      
      \begin{alignat*}{4}
      3\,x_1 & \ +\ & 2\,x_2 & \ +\ &    x_3 & \ =\ & -1      \\
      7\,x_1 & \ +\ & 6\,x_2 & \ +\ & 5\,x_3 & \ =\ & \lambda \\
      5\,x_1 & \ +\ & 4\,x_2 & \ +\ & 3\,x_3 & \ =\ & 2
      \end{alignat*}

#. .. math::
      :nowrap:
      
      \begin{alignat*}{4}
      \lambda\,x_1 & \ +\ &    x_2 & \ +\ &    x_3 & \ =\ &  0 \\
            5\,x_1 & \ +\ &    x_2 & \ -\ & 2\,x_3 & \ =\ &  2 \\
           -2\,x_1 & \ -\ & 2\,x_2 & \ +\ &    x_3 & \ =\ & -3
      \end{alignat*}

#. .. math::
      :nowrap:
      
      \begin{alignat*}{4}
               x_1 & \ +\ &          x_2 & \ +\ & \lambda\,x_3 & \ =\ & 1 \\
               x_1 & \ +\ & \lambda\,x_2 & \ +\ &          x_3 & \ =\ & 1 \\
      \lambda\,x_1 & \ +\ &          x_2 & \ +\ &          x_3 & \ =\ & 1
      \end{alignat*}

**Exercise 9.** :math:`\,`
Determine all the values of :math:`\ \lambda\in R\ ` for which
a vector :math:`\ \boldsymbol{b}\ ` may be expressed as a linear combination of vectors
:math:`\ \boldsymbol{a}_1,\,\boldsymbol{a}_2,\,\boldsymbol{a}_3:`

.. math::
   
   \begin{array}{lllll}
   1.) & \qquad
   \boldsymbol{a}_1=\left[\begin{array}{r} 2 \\  3 \\ 5       \end{array}\right], &
   \boldsymbol{a}_2=\left[\begin{array}{r} 3 \\  7 \\ 8       \end{array}\right], &
   \boldsymbol{a}_3=\left[\begin{array}{r} 1 \\ -6 \\ 1       \end{array}\right], & \quad
   \boldsymbol{b} = \left[\begin{array}{r} 7 \\ -2 \\ \lambda \end{array}\right]; \\ \\
   2.) & \qquad
   \boldsymbol{a}_1=\left[\begin{array}{r} 4 \\ 4 \\ 3       \end{array}\right], &
   \boldsymbol{a}_2=\left[\begin{array}{r} 7 \\ 2 \\ 1       \end{array}\right], &
   \boldsymbol{a}_3=\left[\begin{array}{r} 4 \\ 1 \\ 6       \end{array}\right], & \quad
   \boldsymbol{b} = \left[\begin{array}{r} 5 \\ 9 \\ \lambda \end{array}\right]; \\ \\
   3.) & \qquad
   \boldsymbol{a}_1=\left[\begin{array}{r} 3       \\ 2 \\ 6 \end{array}\right], &
   \boldsymbol{a}_2=\left[\begin{array}{r} 7       \\ 3 \\ 9 \end{array}\right], &
   \boldsymbol{a}_3=\left[\begin{array}{r} 5       \\ 1 \\ 3 \end{array}\right], & \quad
   \boldsymbol{b} = \left[\begin{array}{r} \lambda \\ 2 \\ 5 \end{array}\right]; \\ \\
   4.) & \qquad
   \boldsymbol{a}_1=\left[\begin{array}{r} 3 \\ 2 \\ 5       \end{array}\right], &
   \boldsymbol{a}_2=\left[\begin{array}{r} 2 \\ 4 \\ 7       \end{array}\right], &
   \boldsymbol{a}_3=\left[\begin{array}{r} 5 \\ 6 \\ \lambda \end{array}\right], & \quad
   \boldsymbol{b} = \left[\begin{array}{r} 1 \\ 3 \\ 5       \end{array}\right].
   \end{array}

**Hint.** :math:`\,`
Study existence of solutions for a linear problem given in a column form

.. math::
   
   x_1\,\boldsymbol{a}_1+x_2\,\boldsymbol{a}_2+x_3\,\boldsymbol{a}_3=\boldsymbol{b}.

**Exercise 10.** 
Consider a vector space of real polynomials of one variable :math:`\ x\ ` 
of degree (at most) :math:`\ n.\ `
What is the dimension of the subspace consisting of polynomials satisfying the conditions 
:math:`\ w(x_1)=w(x_2)=\ldots=w(x_k)=0,\ ` where :math:`\ x_1,x_2,\ldots,x_k\ `
are pairwise distinct numbers :math:`\ (k\le n).`

.. (4.4.28) Odpowiedź: n+1-k.

**Hnt.** 
Use a formula for the Vandermonde determinant (see equation :eq:`Vandermonde`).

**Exercise 11.** 
Find a basis for a vector space of real polynomials of one variable of degree (at most) 5
satisfying the conditions :math:`\ w(0)=w(1)=w(2)=w(3)=0.`

.. (4.4.29)`
































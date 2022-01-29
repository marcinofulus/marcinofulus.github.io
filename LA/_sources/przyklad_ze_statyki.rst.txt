.. -*- coding: utf-8 -*-

Equilibrium of a Linear Set of Masses Connected by Springs
----------------------------------------------------------

Consider a system of :math:`\,n+1\,` point masses :math:`\,P_0,\,P_1,\,\ldots,\,P_n\ `
placed on a vertical axis with the origin :math:`\,\boldsymbol{O}.\ ` 
Every pair of neighbouring points is connected via a spring of length :math:`\,d\,` and of constant springiness :math:`\,k.\,`
If there are no external forces, the system remains at the original equilibrium state:
the particle :math:`\,P_0\,` is at the point :math:`\,\boldsymbol{O},\ `
and the coordinates :math:`\,X_i\ ` of the particles take values
 
.. math::
   
   X_i^o\,=\,i\cdot d\,,\qquad i = 0,1,\ldots,n\,.

To allow different configurations, we introduce variables :math:`\,x_i\,`
measuring deviation of the :math:`\,i`-th particle from its original equilibrium state:

.. math::

   X_i\,=\,X_i^o\,+\,x_i\,=\,i\cdot d\,+\,x_i\,,\qquad i = 0,1,\ldots,n\,.

The force which acts on every internal particle :math:`\,i\,` by its neighbours is equal to

.. math::

   F_i\ =\ -k\ \left[\,\left(X_i-X_{i-1}\right)\,-\,d\,\right]\ +
         \ k\ \left[\,\left(X_{i+1}-X_i\right)\,-\,d\,\right]\ =
           
        =\ -k\ (x_i-x_{i-1})\,+\,k\ (x_{i+1}-x_i)\ =
         
        =\ k\ (x_{i-1}\,-\,2\,x_i\,+\,x_{i+1})\,,\qquad i = 1,\ldots,n-1\,.

.. Wyobraźmy sobie teraz, że

Having in mind a concrete physical situation we assume additionally that:

* the particles have the same mass :math:`\,m\,` and are subject to the gravitational force;

* the external points :math:`\,P_0\ ` and :math:`\,P_n\,`
  are fixed in their original equilibrium state:
  
  .. math::
     :label: 21
     
     X_0\,=\,0\,,\quad X_n\,=\,n\cdot d\,,
     \qquad\text{that is}\qquad x_0 = x_n = 0\,.

This situation may be illustrated as follows: we have a vertically hanging chain which consists of :math:`\,n\,` uniform weights and
:math:`\,n\,` uniform separating springs.
First weight hangs on a spring which is attached on one side directly to the ceiling 
(the mass point :math:`\,P_0\,` is the point where the spring is fixed to the ceiling), 
and the last weight rests on the floor. 
Height of the room is equal to the length of the chain in the state of weightlessness.

We determine the state of equilibrium of the system by describing the set of deviations :math:`\,x_1,\,\ldots,\,x_{n-1}\,.`

In the state of equilibrium the net force acting on every internal particle equals zero:

.. math::
   :label: 22

   F_i\ =\ k\ (x_{i-1}\,-\,2\,x_i\,+\,x_{i+1})\ +\ mg\ =\ 0\,,
   \qquad i = 1,\ldots,n-1\,.

If we combine the conditions :eq:`21` and :eq:`22`, we obtain a system of :math:`\,n+1\,` equation with :math:`\,n+1\,` unknowns:

.. math::
   :label: 23

   \begin{cases}\ \ \begin{array}{l}
      x_0\,=\,0 \\
      x_{i-1}\,-\,2\,x_i\,+\,x_{i+1}\,=\,-\,p\,,\qquad i = 1,\ldots,n-1\,, \\
      x_n\,=\,0
   \end{array}\end{cases}

where :math:`\ p\,=\,mg/k\,` is a parameter describing length.

For example, :math:`\,` for :math:`\ n=5\ ` the above system may be written as:

.. math::
   :label: 24

   \begin{cases}\ \ \begin{array}{l}
      x_0\,=\,0 \\
      x_0\,-\,2\,x_1\,+\,x_2\,=\,-\,p \\
      x_1\,-\,2\,x_2\,+\,x_3\,=\,-\,p \\
      x_2\,-\,2\,x_3\,+\,x_4\,=\,-\,p \\
      x_3\,-\,2\,x_4\,+\,x_5\,=\,-\,p \\
      x_5\,=\,0
   \end{array}\end{cases}

so that in a matrix form

.. math::

   \left[\ \begin{array}{rrrrrr}
      1 &  0 &  0 &  0 &  0 & 0 \\
      1 & -2 &  1 &  0 &  0 & 0 \\
      0 &  1 & -2 &  1 &  0 & 0 \\
      0 &  0 &  1 & -2 &  1 & 0 \\
      0 &  0 &  0 &  1 & -2 & 1 \\
      0 &  0 &  0 &  0 &  0 & 1
   \end{array}\ \right]\ 
   \left[\begin{array}{c}
      x_0 \\ x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5
   \end{array}\right]\ \ =\ \ -\,p\ 
   \left[\begin{array}{c}
      0 \\ 1 \\ 1 \\ 1 \\ 1 \\ 0
   \end{array}\right]\,.

For realistic values:
:math:`\quad mg = 1 \ \text{N}\,,
\quad k = 1\ \frac{\text{N}}{\text{cm}}\ =\ 100\ \frac{\text{N}}{\text{m}}\,,\ ` 
we obtain :math:`\ p\,=\,0.01\ \text{m}\,.\\` 
Note that the formulae do not include the length :math:`\,d\,` of the springs.

The tools of Sage packet give a possibility to solve :eq:`23` for any given :math:`\,n`. For large values of :math:`\,n\,` it may be better to not show the deviation values :math:`\,x_i\,` but rather a graphical illustration of the result; this can be done via function ``list_plot()``:

.. sagecellserver::  
   
   n = 50; p = 0.01
   
   L = matrix(RDF,n+1)
   L[0,0], L[-1,-1] = 1.0, 1.0
   for i in range(1,n): L[i,i-1], L[i,i], L[i,i+1] = 1.0, -2.0, 1.0
   
   f = -vector(RDF,(n+1)*[p])
   f[0], f[n] = 0.0, 0.0
   
   #print L\f
   list_plot(L\f, axes_labels=['$i$','$x_i$'], figsize=5)

As one can see, deviations from the original state are biggest in the middle of the chain and decrease symmetrically towards its ends.

**Exercise.** :math:`\\`
Use the program above to find a numerical solution of the system :eq:`24`.
























 




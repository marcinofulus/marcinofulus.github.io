.. -*- coding: utf-8 -*-

Elimination Method for Systems of Equations
-------------------------------------------

Echelon Form of a System of Equations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We shall consider a system of :math:`\,m\,` equations 
in :math:`\,n\,` variables :math:`\,(2\le m\le n):`

.. over a field :math:`\,K:` 

.. math:
   :label: 01
   :nowrap:

   \begin{alignat*}{4}
      a_{11}\,x_1 & {\,} + {\,} & a_{12}\,x_2 & {\,} + {\,} & \,\ldots\, & {\ } + {\,} & a_{1n}\,x_n & {\ } = {\ \ }  b_1    \\
      a_{21}\,x_1 & {\,} + {\,} & a_{22}\,x_2 & {\,} + {\,} & \,\ldots\, & {\ } + {\,} & a_{2n}\,x_n & {\ } = {\ \ }  b_2    \\
      \ldots\ \   & {\,} + {\,} & \ldots\ \   & {\,} + {\,} & \,\ldots\, & {\ } + {\,} & \ldots\ \   & {\ } = {\ }    \ldots \\
      a_{m1}\,x_1 & {\,} + {\,} & a_{m2}\,x_2 & {\,} + {\,} & \,\ldots\, & {\ } + {\,} & a_{mn}\,x_n & {\ } = {\ \ }  b_m
   \end{alignat*}

.. math::
   :label: 01

   \begin{array}{c}
   a_{11}\,x_1\; + \ \,a_{12}\,x_2\; + \ \,\ldots\  + \ \;a_{1n}\,x_n \ \, = \ \ b_1 \\
   a_{21}\,x_1\; + \ \,a_{22}\,x_2\; + \ \,\ldots\  + \ \;a_{2n}\,x_n \ \, = \ \ b_2 \\
   \quad\,\ldots\qquad\quad\ldots\qquad\ \,\ldots\qquad\ \ \ldots\qquad\ \ \,\ldots  \\
   a_{m1}\,x_1\; + \ \,a_{m2}\,x_2\; + \ \,\ldots\  + \ \;a_{mn}\,x_n \ \, = \ \ b_m\,.
   \end{array}

The coefficients :math:`\,a_{ij}\,` and constants
:math:`\,b_i\ \ (i=1,2,\ldots,m;\ j=1,2,\ldots,n)\ `
belong to a field :math:`\,K,\,` e.g. they are rational,
real or complex numbers.

Given a particular equation of a linear system, we define
a *leading variable* as a variable 
corresponding to the left-most non-zero coefficient in this equation. 
Thus :math:`\,x_l\,` is a leading variable in the :math:`\,i`-th equation
of :eq:`01`, when :math:`\ a_{il}\neq 0\ ` and all variables with indices 
less than :math:`\,l\ ` (if any) actually do not occur in the equation 
because their coefficients vanish :math:`\ (1 \le l \le n).` 

For instance, in the equation :math:`\ 2\,x_3\,+\,4\,x_4\,-\,8\,x_6\ =\ 10\ `
coming from a linear system in variables :math:`\,x_1,\,x_2,\,\ldots,\,x_7\,,\ `
the leading variable is :math:`\,x_3:\ ` the "earlier" variables,
:math:`\ x_1,\,x_2,\ ` are absent (their coefficients vanish).

A system of linear equations :eq:`01` is in a (row) *echelon form*,
when in each, but the first, equation the index of the leading variable
is greater than the analogous index in any previous equation of the system.
In other words, the sequence of indices of leading variables
in consecutive equations of the system is strictly increasing.
We note that then in each :math:`\,k`-th equation 
of the system the variables :math:`\ x_1,\dots,x_{k-1}\ \,` are absent 
:math:`(k=2,\dots,m)\,.` 

.. _`Gaussian Elimination`:

Gaussian Elimination 
~~~~~~~~~~~~~~~~~~~~

Systems of linear equations are in a natural way represented by matrices
and an advanced approach to them uses the matrix formalism.
In Chapter 4. we shall redefine the aforementioned notions of
a leading element and echelon form in relation to matrices. 

.. A serious and practical approach to systems of linear equations
   inevitably [involves] leads to the use of matrices representing them.

.. Later (see Chapter 4.) we shall reformulate the above-mentioned concepts 
   of a leading element and an echelon form in relation to matrices
   representing linear systems. 

.. as a whole 

So far, however, we shall take advantage of the Sage's ability
to perform elementary operations on linear equations, 
each of the latter being treated as a whole.
That way we shall illustrate the Gaussian and the Gauss-Jordan elimination 
methods on an elementary level, without even citing the concept of a matrix.
  
Every system of linear equations can be transformed to the echelon form
by the following *elementary operations*:

#. :math:`\,` swapping the positions of two equations;
#. :math:`\,` multiplying an equation by a non-zero scalar;
#. | :math:`\,` adding to one equation a scalar multiple of another one
   | :math:`\,` (in particular: adding or subtracting two equations).

These operations do not change the set of solutions, 
so the obtained transformed system is equivalent to the initial one.

Below we apply this procedure to a particular system of three equations 
in three unknowns over the rational field (for a better readability
the output is simulated).
           
.. code-block:: python

   var('x1 x2 x3')

   eq1 = x1+2*x2+2*x3==4
   eq2 = x1+3*x2+3*x3==5
   eq3 = 2*x1+6*x2+5*x3==6

   #show(vector([eq1,eq2,eq3]).column())

.. math::
   :nowrap:

   \begin{alignat*}{4}
         x_1 & {\,} + {\,} & 2\,x_2 & {\,} + {\,} & 2\,x_3 & {\;} = {\;} & 4 \\
         x_1 & {\,} + {\,} & 3\,x_2 & {\,} + {\,} & 3\,x_3 & {\;} = {\;} & 5 \\
      2\,x_1 & {\,} + {\,} & 6\,x_2 & {\,} + {\,} & 5\,x_3 & {\;} = {\;} & 6
   \end{alignat*}

.. code-block:: python

    eq2 = eq2-eq1
    eq3 = eq3-2*eq1

    #show(vector([eq1,eq2,eq3]).column())
    
.. math::
   :nowrap:

   \begin{alignat*}{4}
      x_1 & {\,} + {\,} & 2\,x_2 & {\,} + {\,} & 2\,x_3 & {\;} = {} &  4 \\
          &             &    x_2 & {\,} + {\,} &    x_3 & {\;} = {} &  1 \\
          &             & 2\,x_2 & {\,} + {\,} &    x_3 & {\;} = {} & -2
   \end{alignat*}

.. code-block:: python

   eq3 = eq3-2*eq2

   #show(vector([eq1,eq2,eq3]).column())
    
.. math::
   :nowrap:

   \begin{alignat*}{4}
      x_1 & {\,} + {\,} & 2\,x_2 & {\,} + {\,} & 2\,x_3 & {\;} = {} &  4 \\
          &             &    x_2 & {\,} + {\,} &    x_3 & {\;} = {} &  1 \\
          &             &        & {\,} - {\,} &    x_3 & {\;} = {} & -4
   \end{alignat*}

.. code-block:: python

   eq3 = -eq3

   #show(vector([eq1,eq2,eq3]).column())
   
.. math::
   :nowrap:

   \begin{alignat*}{4}
      x_1 & {\,} + {\,} & 2\,x_2 & {\,} + {\,} & 2\,x_3 & {\;} = {\;} & 4 \\
          &             &    x_2 & {\,} + {\,} &    x_3 & {\;} = {\;} & 1 \\
          &             &        &             &    x_3 & {\;} = {\;} & 4
   \end{alignat*}

The system of equations is now in the echelon form. :math:`\\`
Performing the *backward substitution* we obtain the solution: 

.. code-block: python
      
      html.table( [eq1.subs(eq2.subs(eq3)-4).subs(eq3)-2,eq2.subs(eq3)-4,eq3] )
  
.. math::
   :nowrap:

   \begin{alignat*}{5}
      x_3 & {\;} = {\;} & 4 &             &        &             &        &             &   \\
      x_2 & {\;} = {\;} & 1 & {\,} - {\,} &    x_3 & {\,} = {\,} & -3     &             &   \\
      x_1 & {\,} = {\,} & 4 & {\,} - {\,} & 2\,x_2 & {\,} - {\,} & 2\,x_3 & {\,} = {\,} & 2 
   \end{alignat*}

The algorithm for solving systems of linear equations by transforming them to 
the echelon form with the aid of elementary operations and by a subsequent 
backward substitution is called the *Gaussian elimination*.

Gauss-Jordan Elimination
~~~~~~~~~~~~~~~~~~~~~~~~

Once the echelon form of the system is obtained:

.. math::
   :nowrap:

   \begin{alignat*}{4}
      x_1 & {\,} + {\,} & 2\,x_2 & {\,} + {\,} & 2\,x_3 & {\;} = {\;} & 4 \\
          &             &    x_2 & {\,} + {\,} &    x_3 & {\;} = {\;} & 1 \\
          &             &        &             &    x_3 & {\;} = {\;} & 4
   \end{alignat*}

one may continue elementary operations, until the form showing explicitly
the solution of the system is achieved:

.. code-block:: python

   eq1 = eq1-2*eq2
   eq2 = eq2-eq3

   #show(vector([eq1,eq2,eq3]).column())
   
.. math::
   :nowrap:

   \begin{alignat*}{2}
      x_1 & {\,} = {} &  2 \\
      x_2 & {\,} = {} & -3 \\
      x_3 & {\,} = {} &  4
   \end{alignat*}

The above algorithm, which transforms a linear system into 
the trivial echelon form :math:`\\` 
that displays directly the values of unknowns, 
is called the *Gauss-Jordan elimination*. :math:`\\`

At the end we shall check whether our result agrees with that provided
by the built-in function ``solve()`` :

.. sagecellserver::

   var('x1 x2 x3')

   eq1 = x1+2*x2+2*x3==4
   eq2 = x1+3*x2+3*x3==5
   eq3 = 2*x1+6*x2+5*x3==6

   show(solve([eq1,eq2,eq3],[x1,x2,x3]))

:math:`\\`





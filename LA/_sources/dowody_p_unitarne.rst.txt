
Unitary Spaces
--------------

.. admonition:: Theorem 1.
   
   Schwarz inequality in a unitary space :math:`\,V(C):`
   
   .. math::
      
      |\,\langle x,y\rangle\,|^2\ \ \leq\ \ 
      \langle x,x\rangle\,\langle y,y\rangle\,,\qquad x,y\in V\,,
   
   becomes equality if and only if :math:`\,`
   the vectors :math:`\,x,y\ ` are linearly dependent:
   
   .. math::
   
      |\,\langle x,y\rangle\,|^2\ \,=\ \,\langle x,x\rangle\,\langle y,y\rangle
      \qquad\Leftrightarrow\qquad
      x,y\ \ \text{linearly dependent}\,.

**Proof.**

:math:`\ \Rightarrow\,:\ ` Assume that vectors :math:`\,x,y\ ` are linearly independent. 

Then :math:`\ y\neq\theta,\ ` and moreover (since every non-trivial linear combination of linearly independent vectors is a non-zero vector)  
for every :math:`\,\alpha\in C:`

.. math::
   
   x-\alpha\,y\ \,=\ \,1\cdot x\,-\,\alpha\cdot y\ \neq\ \theta\,,

   \langle\,x-\alpha\,y,\,x-\alpha\,y\,\rangle\ >\ 0\,.

.. Korzystając, jak w ogólnym dowodzie nierówności Schwarza, z własności iloczynu skalarnego
   i podstawiając 
   :math:`\ \ \alpha\ =\ \displaystyle\frac{(x,y)^*}{(y,y)}\,,\ `
   dochodzimy do ostrej nierówności

If we take :math:`\ \,\alpha\ =\ 
\displaystyle\frac{\langle x,y\rangle^*}{\langle y,y\rangle}\ ` as in the proof of Schwarz inequality, we obtain 

.. math::
   
   \langle x,x\rangle\,\langle y,y\rangle\ \ >\ \ |\,\langle x,y\rangle\,|^2\,.

That is, we get the implication

.. math::
   
   x,y\ \ \text{linearly independent}
   \qquad\Rightarrow\qquad
   |\,\langle x,y\rangle\,|^2\ \ \neq\ \ \langle x,x\rangle\,\langle y,y\rangle\,,

which by contraposition is equivalent to

.. math::
   
   |\,\langle x,y\rangle\,|^2\ \ =\ \ \langle x,x\rangle\,\langle y,y\rangle
   \qquad\Rightarrow\qquad
   x,y\ \ \text{linearly dependent}\,.

:math:`\ \Leftarrow\,:\ ` Assume that vectors :math:`\,x,y\ ` are linearly dependent. 

Then :math:`\ \,y=\alpha\,x\ ` or :math:`\ \,x=\beta\,y\ \,` for some 
:math:`\ \alpha,\beta\in C.`

In the first case:

.. math::
   
   \begin{array}{l}
   |\,\langle x,y\rangle\,|^2\ \,=\ \,|\,\langle x,\,\alpha\,x\rangle\,|^2\ \,=\ \,
   |\,\alpha\,\langle x,x\rangle\,|^2\ \,=\ \,|\alpha|^2\ \langle x,x\rangle^2\,,
   \\
   \langle x,x\rangle\,\langle y,y\rangle\ \,=\ \,
   \langle x,x\rangle\,\langle\alpha\,x,\,\alpha\,x\rangle\ \,=\ \,
   \langle x,x\rangle\ \alpha^*\alpha\,\langle x,x\rangle\ \,=\ \,
   |\alpha|^2\ \langle x,x\rangle^2\,,
   \end{array}

an in the second one:

.. math::
   
   \begin{array}{l}
   |\,\langle x,y\rangle\,|^2\ \,=\ \,
   |\,\langle\beta\,y,\,y\rangle\,|^2\ \,=\ \,
   |\,\beta^*\,\langle y,y\rangle\,|^2\ \,=\ \,|\beta|^2\ \langle y,y\rangle^2\,,
   \\
   \langle x,x\rangle\,\langle y,y\rangle\ \,=\ \,
   \langle\beta\,y,\,\beta\,y\rangle\,\langle y,y\rangle\ \,=\ \,
   \beta^*\beta\ \langle y,y\rangle\ \langle y,y\rangle\,=\ \,
   |\beta|^2\ \langle y,y\rangle^2\,.
   \end{array}

Hence, in both cases
:math:`\ \ |\,\langle x,y\rangle\,|^2\ \,=\ \,\langle x,x\rangle\,\langle y,y\rangle\,.`

In this way we proved the remaining implication

.. math::
   
   x,y\ \ \text{linearly dependent}
   \qquad\Rightarrow\qquad
   |\,\langle x,y\rangle\,|^2\ \ =\ \ \langle x,x\rangle\,\langle y,y\rangle\,.
   
   \;

Lemma 1. presents necessary and sufficient conditions 
for a linear operator to be the *zero operator* :math:`\,\mathcal{O},` :math:`\\` 
which is defined as :math:`\ \mathcal{O}\,x=\theta.`

.. .. math::
   
   F\ =\ \mathcal{O}\qquad\Leftrightarrow\qquad Fx=\theta\quad\text{dla wszystkich}\ \ x\in V . 
   
.. admonition:: Lemat 1. :math:`\\`
   
   Let :math:`\ F\in\text{End}(V)\,` be a linear operator defined on the space :math:`\ V=V(K)\,,\ K\in\{R,C\}\,.\ ` :math:`\\`
   
   0. If :math:`\ F\ ` is defined on a unitary space :math:`\,V(C)\ ` :math:`\\`
      or a Euclidean space :math:`\,V(R)\,,\ ` then
      
      .. math::
         
         F\ =\ \mathcal{O}\qquad\Leftrightarrow\qquad
         \langle\,x,Fy\,\rangle\,=\,0\quad\text{for all}\ \ x,y\in V\,.

   1. If :math:`\ F\ ` is a Hermitian operator: :math:`\ F^+=\,F\,,\ ` :math:`\\`
      defined on a Euclidean space :math:`\,V(R),\ `  then
      
      .. math::
         
         F\ =\ \mathcal{O}\qquad\Leftrightarrow\qquad
         \langle\,x,Fx\,\rangle\,=\,0\quad\text{for all}\ \ x\in V\,.

   2. If :math:`\ F\ ` is defined on a unitary space :math:`\,V(C)\,,\ ` then
      
      .. math::
         
         F\ =\ \mathcal{O}\qquad\Leftrightarrow\qquad
         \langle\,x,Fx\,\rangle\,=\,0\quad\text{for all}\ \ x\in V\,.

**Proof.**

0. :math:`\Rightarrow\ :\ ` If :math:`\ F=\mathcal{O}\,,\ \,` then
   :math:`\ \,\langle\,x,Fy\,\rangle\,=\,
   \langle\,x,\mathcal{O}\,y\,\rangle\,=\,
   \langle\,x,\theta\,\rangle\,=\,0\,.`
   
   :math:`\Leftarrow\ :\ ` 
   Assume that :math:`\,\langle\,x,Fy\,\rangle\,=\,0\ ` for all :math:`\ x,y\in V\,.`

   Then for :math:`\ x=Fy\ ` we have :math:`\ \langle\,Fy,Fy\,\rangle=0\,,\ `
   and thus :math:`\ Fy=\theta\ ` for all :math:`\ y\in V.\ \\` 
   This means that :math:`\ F=\mathcal{O}\,.`

1. :math:`\Rightarrow\ :\ ` The same proof as in point 0.

   :math:`\Leftarrow\ :\ ` 
   Assume that :math:`\ \langle x,Fx\rangle\,=\,0\ ` for all :math:`\ x\in V(R).`
   
   In particular, if we put :math:`\ x+y\ ` in place of :math:`\ x\ ,\ ` we obtain 
   :math:`\ \,\langle\,x+y,F(x+y)\,\rangle\,=\,0\,,\ \ x,y\in V\,,\ \ ` that is
   
   .. math::
      :label: x_F_y
      
      \langle\,x+y,F(x+y)\,\rangle\,=\,\langle\,x+y,Fx+Fy\,\rangle\,=

      =\       
      \langle\,x,Fx\,\rangle\,+\,\langle\,x,Fy\,\rangle\,+\,
      \langle\,y,Fx\,\rangle\,+\,\langle\,y,Fy\,\rangle\,=
      
      =\ 
      \langle\,x,Fy\,\rangle\,+\,\langle\,y,Fx\,\rangle\,=\,0\,,\quad x,y\in V\,.

   Since :math:`\,F\ ` is a Hermitian operator on a real space, 
   
   .. math::
      :label: y_F_x
      
      \langle\,y,Fx\,\rangle\ =\ \langle\,Fy,x\,\rangle\ =\ \langle\,x,Fy\,\rangle\,.

   Substitution of the equality :eq:`y_F_x` into :eq:`x_F_y` gives
   :math:`\ \langle\,x,Fy\,\rangle=0\,,\ \ x,y\in V\,,\ \\`
   which :math:`\,` by the point 0. :math:`\,` is equivalent to  
   :math:`\ F=\mathcal{O}.\\`

2. :math:`\Rightarrow\ :\ ` The same proof as in point 0.

   :math:`\Leftarrow\ :\ ` 
   Assume that :math:`\ \langle x,Fx\rangle\,=\,0\ ` for all :math:`\ x\in V(C).`

   We make two substitutions, similar to the one in point  1.:
   :math:`\ x\rightarrow x+y\ \,` and :math:`\ \,x\rightarrow x+i\,y\,.\ `
   Then
   
   .. math::
      
      \begin{array}{lcr}
      & \left\{\ \begin{array}{r}
      \langle\,x,Fy\,\rangle\,+\,\langle\,y,Fx\,\rangle\,=\,0 \\
      \langle\,x,F(iy)\,\rangle\,+\,\langle\,iy,Fx\,\rangle\,=\,0
      \end{array}\right. & \quad x,y\in V\,,
      \\ \\
      \text{and thus} & \left\{\ \begin{array}{r}
      \langle\,x,Fy\,\rangle\,+\,\langle\,y,Fx\,\rangle\,=\,0 \\
      \langle\,x,Fy\,\rangle\,-\,\langle\,y,Fx\,\rangle\,=\,0
      \end{array}\right. & \quad x,y\in V\,.
      \end{array}
   
   Adding the two last equalities we obtain
   :math:`\ \langle\,x,Fy\,\rangle=0\,,\ \ x,y\in V\,,\ ` 
   which means that :math:`\,F=\mathcal{O}.\,` 
   Note that in a complex space :math:`V\,` the assumption on the 
   operator :math:`\ F\ ` to be Hermitian is not necessary. :math:`\\`

.. admonition:: Corollary. :math:`\\`
   
   If one of the two following conditions holds: :math:`\\`
   
   1. :math:`\ F\ ` and :math:`\ G\ ` are Hermitian linear operators:
      :math:`\ F^+=\,F\,,\ \ G^+=\,G\,,` :math:`\\`
      defined on a Euclidean space :math:`\,V(R)\,,` :math:`\\`
   
   2. :math:`\ F\ ` and :math:`\ G\ ` are linear operators
      defined on a unitary space :math:`\,V(C)\,,` :math:`\\`

   then :math:`\qquad\quad F\ =\ G\quad\Leftrightarrow\quad
   \langle\,x,Fx\,\rangle\,=\,\langle\,x,G\,x\,\rangle
   \quad\text{for all}\ \ x\in V\,.`

Indeed, if the equality :math:`\ \ \langle\,x,Fx\,\rangle=\langle\,x,G\,x\,\rangle
\ ` holds for all :math:`\ x\in V\ \ ` then :math:`\\ \\` 
:math:`\ \ \langle\,x,(F-G)\,x\,\rangle\,=\,0\,,\ \ x\in V\,,\ ` where in case 1.:
:math:`\ \ (F-G)^+=F^+-G^+=F-G\,.\ \\ \\` 
Hence :math:`\ \ F-G=\mathcal{O}\,,\ \ ` and thus :math:`\ \ F=G.`

Now we state and prove an important criterion for a linear operator to be Hermitian:

.. admonition:: Theorem 2. 
   
   If :math:`\,F\ ` is a linear operator
   defined on a unitary space :math:`\,V(C)\,,\ \,` then
   
   .. math::
      
      F=F^+\qquad\Leftrightarrow\qquad
      \langle\,x,Fx\,\rangle\in R\quad\text{for all}\ \ x\in V\,.

**Proof.** :math:`\,`
Because :math:`\ \ \langle\,x,F^+x\,\rangle\ =\ 
\langle\,Fx,x\,\rangle\ =\ \langle\,x,Fx\,\rangle^*\,,\ \ x\in V\,,\ \\`
Lemma 1. implies equivalence of the following conditions: 

.. math::
   
   F\ =\ F^+
   
   \langle\,x,Fx\,\rangle\ =\ \langle\,x,F^+x\,\rangle\,,\ \ x\in V\,,

   \langle\,x,Fx\,\rangle\ =\ \langle\,x,Fx\,\rangle^*\,,

   \langle\,x,Fx\,\rangle\in R\,,\ \ x\in V\,.

In quantum mechanics, the states of quantum system are represented by vectors from certain unitary space  :math:`\,V(C)\ ` of states, and measurable physical quantities of the system correspond to linear 
operators defined on this space.
It is assumed that if :math:`\,\|x\|=1\,,\ ` then the expression :math:`\,\langle\,x,Fx\,\rangle\ `
represents the *mean value* of the quantity :math:`\,F\ ` in the state :math:`\,x.\ `
This postulate makes sense if and only if the expression takes real values for all
:math:`\,x\in V.\ ` Such a condition is fulfilled only by Hermitian operators. Hence,
only these operators can represent physical quantities. :math:`\\`

.. admonition:: Theorem 3.
   
   Let :math:`\,U\,` be a linear operator
   defined on a Euclidean or unitary space :math:`\,V(K),\ K\in\{R,C\}.\ \,`
   Then the following conditions are equivalent:
   
   1. :math:`\ U^+U=I\,,\ ` where :math:`\,I\ ` is the identity operator:
      :math:`\ \,Ix=x,\ x\in V\,;`
   
   2. :math:`\ \langle\,Ux,Uy\,\rangle\,=\,\langle x,y\rangle\quad
      \text{for all}\ \,x,y\in V\,;`
   
   3. :math:`\ \|\,Ux\,\|\,=\,\|x\|\quad\text{for every}\ \,x\in V\,.`

**Proof.**

Note that 

.. math::
   
   \begin{array}{l}
   U^+U=I\quad\Rightarrow\quad\langle\,Ux,Uy\,\rangle\,=\,
   \langle\,U^+U\,x,y\,\rangle\,=\,\langle\,Ix,y\,\rangle\,=\,
   \langle x,y\rangle\,,\quad x,y\in V
   \end{array}

and 

.. math::

   \begin{array}{lcl}
   \langle\,Ux,Uy\,\rangle\,=\,\langle x,y\rangle & \quad\Rightarrow & \quad
   \|\,Ux\,\|^{\,2}\,=\,\langle\,Ux,Ux\,\rangle\,=\,\langle x,x\rangle\,=\,\|x\|^2 
   \\ \\
   & \quad\Rightarrow & \quad\|\,Ux\,\|\,=\,\|x\|\,,\quad x\in V\,.
   \end{array}
   
This proves the implications :math:`\ \,\text{1.}\,\Rightarrow\,\text{2.}\ \,` 
and :math:`\ \,\text{2.}\,\Rightarrow\,\text{3.}\ \,`
Now it remains to show that :math:`\ \,\text{3.}\,\Rightarrow\,\text{1.}`

.. math::
   :nowrap:
   
   \begin{eqnarray*}
   \|\,Ux\,\| & = & \|x\| \\
   \|\,Ux\,\|^{\,2} & = & \|x\|^2 \\
   \langle\,Ux,Ux\,\rangle & = & \langle x,x\rangle \\
   \langle\,x,\,U^+U\,x\,\rangle & = & \langle x,Ix\rangle
   \end{eqnarray*}

The operators :math:`\ U^+U\ \ ` and :math:`\ I\ ` are Hermitian: 
:math:`\ (U^+U)^+=U^+U,\ \ I^+=I.\ ` Hence, corollary to Lemma 1. implies that both 
in a Euclidean (real) and unitary (complex)
space :math:`\,V\ ` the equality :math:`\,U^+U=I\ ` holds.

   
   
   

    






























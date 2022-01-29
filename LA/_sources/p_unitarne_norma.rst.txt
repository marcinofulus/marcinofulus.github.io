
Norm of a Vector
----------------

.. admonition:: Definition.
   
   | Let :math:`\,V\ ` be a real or complex vector space.
   | A *norm* on the space :math:`\,V\ ` is a function :math:`\,f:\,V\rightarrow R\ ` 
     satisfying the following conditions 
   | (and denoted :math:`\,f(x)=\| x\|,\ \ x\in V`) :

   1. :math:`\ \|x\|\,\geq\,0
      \qquad\land\qquad 
      (\ \,\|x\|=0\quad\Leftrightarrow\quad x=\theta\ \,)\,,`
      
   2. :math:`\ \|\alpha\,x\|\ =\ |\alpha|\,\|x\|\,,\qquad
      \alpha\in R\ \ \lor\ \ \alpha\in C\,,`

   3. :math:`\ \|\,x+y\,\|\ \leq\ \|x\|\,+\,\|y\|\,,\qquad x,y\in V\,.`

**Comments and remarks.**

* | A norm of a vector is a non-negative real number, 
  | and the only vector for which it is equal to zero  is the zero vector.

* | Multiplication of a vector by a scalar :math:`\,\alpha\in K\ ` multilplies its norm 
  | by an absolute value of :math:`\,\alpha\ ` (if :math:`\,K=R`) :math:`\,` 
    or by a modulus of :math:`\,\alpha\ ` (if :math:`\,K=C`).

* | A norm of a sum of two vectors is not greater than a sum of their norms.
  | This condition is called the triangle inequality.
  | As one can see, a norm is a generalization of length of a geometric vector.

A vector space :math:`\,V\ ` with a norm 
is called a *normed vector space*.

**Examples.**

1. :math:`\ V=R^1\,;\quad\|x\|=|x|\,,\quad x\in R\ \ ` (an absolute value of the number :math:`\,x`).

2. :math:`\ V=C^1\,;\quad\|z\|=|z|\,,\quad z\in C\ \ ` (a modulus of the number :math:`\,z`).

3. :math:`\ V=R^3\,;\quad\text{for}\ \ 
   x\,=\,\left[\begin{array}{c} \alpha_1 \\ \alpha_2 \\ \alpha_3 \end{array}\right] :\quad
   \|x\|\,=\,\sqrt{\alpha_1^2+\alpha_2^2+\alpha_3^2}\ .`

4. On a vector space of geometric vectors the norm is the length of a vector.
   If we choose a basis :math:`\,\mathcal{E}=(\vec{e}_1,\vec{e}_2,\vec{e}_3)\,` of three
   mutually perpendicular unit vectors, a norm of the vector
   :math:`\ \vec{a}=\alpha_1\,\vec{e}_1+\alpha_2\,\vec{e}_2+\alpha_3\,\vec{e}_3\ `
   may be written as
   
   .. math::
      
      \|\,\vec{a}\,\|\ =\ |\,\vec{a}\,|\ =\ \sqrt{\alpha_1^2+\alpha_2^2+\alpha_3^2}\ \ =\ \ 
      \sqrt{\,\vec{a}\cdot\vec{a}}\ .

   Here the norm is equal to a square root of an inner product of the vector with itself.

The last result, which expresses the norm in terms of an inner product, may be generalized and applied to an arbitrary unitary (or Euclidean) vector space. 

.. admonition:: Theorem 2.
   
   On a unitary (or Euclidean) vector space :math:`\ V\ ` one may define a norm 
   as a function
   
   .. math::
      :label: norm
      
      f(x)\ =\ \sqrt{\,\langle x,x\rangle}\ ,\qquad x\in V\,.

**Proof** requires checking whether the function :eq:`norm` satisfies the postulates of a definition of a norm. :math:`\\`
By the definition of an inner product, we deduce that 

1. :math:`\ f(x)\ \geq 0\qquad\land\qquad[\ \,f(x)\,=\,0\quad\Leftrightarrow\quad x=\theta\ \,]\,;`
 
2. :math:`\ f(\alpha\,x)\ \,=\ \,\sqrt{\,\langle\alpha\,x,\,\alpha\,x\rangle}\ \,=\ \,
   \sqrt{\,\alpha^*\,\alpha\,\langle x,x\rangle}\ \,=\ \,
   \sqrt{\,|\alpha|^2\,\langle x,x\rangle}\ \ =\ \  
   |\alpha|\ \,f(x)\,;`
   
3. | :math:`\ [\,f(x+y)\,]^2\ \ =\ \ \langle\,x+y,\,x+y\,\rangle\ \ =`
   |  :math:`=\ \ \langle x,x\rangle\,+\,\langle x,y\rangle\,+\,\langle y,x\rangle\,+\,
      \langle y,y\rangle\ \ =\ \ 
      \langle x,x\rangle\,+\,\langle x,y\rangle\,+\,\langle x,y\rangle^*+\,\langle y,y\rangle\ \ =`
   |  :math:`=\ \ \langle x,x\rangle\,+\,2\;\text{re}\,\langle x,y\rangle\,+\,
      \langle y,y\rangle\ \ \leq\ \ 
      \langle x,x\rangle\,+\,2\ |\langle x,y\rangle|\,+\,\langle y,y\rangle\ \ \leq`
   |  :math:`\leq\ \ \langle x,x\rangle\,+\,2\,\sqrt{\langle x,x\rangle\,\langle y,y\rangle}\,+\,
      \langle y,y\rangle\ \ =\ \ 
      [\,f(x)\,]^2\,+\,2\,f(x)\,f(y)\,+\,[\,f(y)\,]^2\ \ =`
   | :math:`\ =\ \ [\,f(x)+f(y)\,]^2\,;`
   |
   | :math:`\ [\,f(x+y)\,]^2\ \leq\ [\,f(x)+f(y)\,]^2\qquad\Rightarrow\qquad
     f(x+y)\ \leq\ f(x)+f(y)\,.`
   |

In point 3. we used the relations

.. math::
   
   z+z^*=\,2\ \text{re}\,z\,,\quad \text{re}\,z\,\leq |z|\,,\qquad z\in C
    
and Schwarz inequality
:math:`\ \ |\langle x,y\rangle|\ \leq\ \sqrt{\langle x,x\rangle\langle y,y\rangle}\,.`

Theorem 2. implies that on every unitary (or Euclidean) vector space :math:`\,V\,` 
one may define a norm by :math:`\ \|x\|\,=\,\sqrt{\langle x,x\rangle}\,,\ \ x\in V.\ `
Then Schwarz inequality takes the form

.. math::
   
   |\langle x,y\rangle|\ \ \leq\ \ \|x\|\,\|y\|\,,\qquad x,y\in V\,.

On a space :math:`\,V\,` different norms may also exist, 
eg. on a space :math:`\,C^n\ ` one may define a norm of a vector 

:math:`\ x\ =\ 
\left[\begin{array}{c} \alpha_1 \\ \alpha_2 \\ \dots \\ \alpha_n \end{array}\right]\quad`
not only by
:math:`\quad\|x\|\ =\ \sqrt{\langle x,x\rangle}\ =\ 
\sqrt{\,|\alpha_1|^2+|\alpha_2|^2+\ldots+|\alpha_n|^2\,}\,,`

but also by :math:`\quad\|x\|\ =\ |\alpha_1|+|\alpha_2|+\ldots+|\alpha_n|\,.`

.. .. math::

   \|x\|\ =\ \sqrt{(x,x)}\ =\ \sqrt{\,|\alpha_1|^2+|\alpha_2|^2+\ldots+|\alpha_n|^2\,}
   \quad\text{albo}\quad
   \|x\|\ =\ |\alpha_1|+|\alpha_2|+\ldots+|\alpha_n|\,.

.. \begin{array}{rcl}
   & \quad & \|x\|\ =\ \sqrt{\,|\alpha_1|^2+|\alpha_2|^2+\ldots+|\alpha_n|^2\,}\,, 
   \\ \\
   \text{albo}     & \quad & \|x\|\ =\ |\alpha_1|+|\alpha_2|+\ldots+|\alpha_n|\,.
   \end{array}
   


























.. _`inner-product`:

Inner (Scalar) Product
----------------------

Axiomatic Definition and its Implementations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Definition.
   
   | Let :math:`\,V(C)\ ` be a vector space.
   | An *inner product* is a map :math:`\,f:\ V\times V\rightarrow C\ `
     satisfying the conditions 
   | (and denoted :math:`\,f(x,y)=\langle x,y\rangle,\ \ x,y\in V`) :

   1. :math:`\,\langle y,x\rangle\,=\,\langle x,y\rangle^*\,,`

   2. :math:`\,\langle\,x,\,y_1+y_2\,\rangle\,=\,\langle x,y_1\rangle\,+\,\langle x,y_2\rangle\,,`

   3. :math:`\,\langle x,\,\alpha\,y\rangle\,=\,\alpha\,\langle x,y\rangle\,,\quad\alpha\in C\,,`

   4. :math:`\,\langle x,x\rangle\geq 0\quad\land\quad
      [\ \,\langle x,x\rangle=0\ \ \Leftrightarrow\ \ x=\theta\ \,]\,.`

**Comments and remarks.**

* An inner product of two vectors belonging to the complex space :math:`\,V\ `
  is a complex number.

* The condition 1. states that swapping of vectors is equivalent to 
  complex conjugation of an inner product.
  If :math:`\ y=x,\ ` then: :math:`\ \langle x,x\rangle=\langle x,x\rangle^*\,,\ `
  which means that an inner product of a vector with itself is a real number. 
  Because of this, it makes sense to introduce 
  an additional condition 4., which requires that :math:`\ \langle x,x\rangle\geq 0.` 

* The conditions 2. and :math:`\,` 3. state in turn additivity and homogeneity of 
  an inner product with respect to the *second* vector.

* The condition 4. imposes that an inner product of a vector with itself 
  is a non-negative number, and the only vector for which it is zero
  is the zero vector.
  
The definition directly implies further properties of an inner product:

.. math::
   
   \langle x_1+x_2,y\rangle\,=\,\langle y,x_1+x_2\rangle^*=\,
   [\,\langle y,x_1\rangle+\langle y,x_2\rangle\,]^*=\,
   \langle y,x_1\rangle^*+\,\langle y,x_2\rangle^*=\,\langle x_1,y\rangle\,+\,\langle x_2,y\rangle\,;

   \langle\alpha\,x,y\rangle\,=\,\langle y,\alpha\,x\rangle^*=\,[\,\alpha\,\langle y,x\rangle\,]^*=
   \,\alpha^*\langle y,x\rangle^*=\,\alpha^*\langle x,y\rangle\,.

Hence, an inner product is linear with respect to the second vector and antilinear with respect to the first one:

.. math::
   
   \langle\,x,\ \alpha_1\,y_1\,+\,\alpha_2\,y_2\,\rangle\ =\ 
   \alpha_1\ \langle x,y_1\rangle\,+\,\alpha_2\ \langle x,y_2\rangle\,,

   \langle\,\alpha_1\,x_1\,+\,\alpha_2\,x_2,\,y\,\rangle\ =\ 
   \alpha_1^*\ \langle x_1,y\rangle\,+\,\alpha_2^*\,\langle x_2,y\rangle\,,

where :math:`\ \,\alpha_1,\alpha_2\in C,\ \ x,\,x_1,x_2,\ y,\,y_1,y_2\in V\,.`

The definition of an inner product which is given in mathematical textbooks 
may differ from the one given here in point 3., which tends to be written as: 
:math:`\,(\alpha\,x,y)=\alpha\,(x,y)\,,\ \ \alpha\in C.\ `
Then an inner product is linear with respect to the first vector and antilinear 
with respect to the second one. For applications in physics, and especially in 
quantum mechanics, more suitable is the definition taken in this script.

One can easily prove the following 

.. admonition:: Theorem 0.

    If one of the two vectors is zero, then the inner product vanishes:
   
   .. math::
      :label: zero
      
      (\,x=\theta\quad\lor\quad y=\theta\,)\qquad\Rightarrow\qquad \langle x,y\rangle\,=\,0\,.

Indeed, :math:`\,` if for example :math:`\ y=\theta,\ ` then :math:`\ y=0\cdot y\ ` 
and :math:`\ \,\langle x,y\rangle=\langle x,\,0\cdot y\rangle=0\cdot\langle x,y\rangle\,=\,0.`

.. admonition:: Remark:
   
   The converse of the theorem :eq:`zero` is not true: 
   an inner product of two non-zero vectors may be zero 
   (then we talk about *orthogonal* vectors).

An inner product defined on a real vector space :math:`\,V(R)\ `
is a map :math:`\,f:\ V\times V\rightarrow R\,,\ ` satisfying the conditions 1.- 4.
The postulate 1. becomes then a symmetry condition: 
:math:`\ \langle y,x\rangle=\langle x,y\rangle,\ \ x,y\in V,\ `
and thus an inner product is linear with respect to both variables 
(it may be then defined as a real positive definite symmetric bilinear functional).

.. admonition:: Definition.
   
   A *unitary space* :math:`\,` is a complex vector space with an inner product.

   A real vector space with an inner product is called a :math:`\,`
   *Euclidean space*.
   
**Examples.**

1.) A standard unitary space is a space of column vectors

.. math::
   
   C^n\ =\ \,\left\{\ 
   \left[\begin{array}{c} \alpha_1 \\ \alpha_2 \\ \dots \\ \alpha_n \end{array}\right]\,:\ \ 
   \alpha_1,\,\alpha_2,\,\dots,\,\alpha_n\in C\ \right\}\,,

where an inner product of vectors :math:`\quad 
\boldsymbol{x}\,=\,
\left[\begin{array}{c} \alpha_1 \\ \alpha_2 \\ \dots \\ \alpha_n \end{array}\right]\,,\quad
\boldsymbol{y}\,=\,
\left[\begin{array}{c} \beta_1 \\ \beta_2 \\ \dots \\ \beta_n \end{array}\right]\quad`
is given by a formula

.. math::
   
   \langle\boldsymbol{x},\boldsymbol{y}\rangle\,=\,\sum_{i\,=\,1}^n\ \alpha_i^*\,\beta_i
        \,=\;\alpha_1^*\,\beta_1\,+\;\alpha_2^*\,\beta_2\,+\;\dots\;+\;\alpha_n^*\,\beta_n
        \,=\;[\,\alpha_1^*,\,\alpha_2^*,\,\dots,\,\alpha_n^*\,]\ 
        \left[\begin{array}{c} \beta_1 \\ \beta_2 \\ \dots \\ \beta_n \end{array}\right]\,.

For example, if :math:`\ \ \boldsymbol{x}\,=\,
\left[\begin{array}{c} 1+i \\ -2 \\ 4\,i \end{array}\right]\,,\ \ 
\boldsymbol{y}\,=\,
\left[\begin{array}{c} -i \\ -1+2\,i \\ 0 \end{array}\right]\ \in\ C^3\quad` 
then

.. math::
   
   \langle\boldsymbol{x},\boldsymbol{y}\rangle\ =\ 
   (1-i)\,(-i)\,+\,(-2)\,(-1+2\,i)\,+\,(-4\,i)\,0\ =\ -i-1+2-4\,i\ =\ 1-5\,i\,.

2.) An example of a Euclidean space is a set of column vectors

.. math::
   
   R^n\ =\ \,\left\{\ 
   \left[\begin{array}{c} \alpha_1 \\ \alpha_2 \\ \dots \\ \alpha_n \end{array}\right]\,:\ \ 
   \alpha_1,\,\alpha_2,\,\dots,\,\alpha_n\in R\ \right\}\,,
             
where an inner product of vectors :math:`\quad 
\boldsymbol{x}\,=\,
\left[\begin{array}{c} \alpha_1 \\ \alpha_2 \\ \dots \\ \alpha_n \end{array}\right]\,,\quad
\boldsymbol{y}\,=\,
\left[\begin{array}{c} \beta_1 \\ \beta_2 \\ \dots \\ \beta_n \end{array}\right]\quad`
is given by a formula

.. math::
   
   \langle\boldsymbol{x},\boldsymbol{y}\rangle\,=\,\sum_{i\,=\,1}^n\ \alpha_i\,\beta_i
   \,=\;\alpha_1\,\beta_1\,+\;\alpha_2\,\beta_2\,+\;\dots\;+\;\alpha_n\,\beta_n
   \,=\;[\,\alpha_1,\,\alpha_2,\,\dots,\,\alpha_n\,]\ 
   \left[\begin{array}{c} \beta_1 \\ \beta_2 \\ \dots \\ \beta_n \end{array}\right]\,.

3.) A special application in quantum mechanics finds a unitary space :math:`\,L^2\ `
consisting of complex functions defined on a real line which are square integrable:

.. math::
   
   L^2\ \,=\ \,\left\{\ \varphi : R\rightarrow C\ \ :\ \ 
   \int_{-\infty}^{+\infty}\ |\,\varphi(x)\,|^2\,<\,\infty\ \right\}\,,

where an inner product of :math:`\quad\varphi,\,\psi\in L^2\quad` is given by 
:math:`\quad \langle\varphi,\psi\rangle\ =\ 
\displaystyle\int_{-\infty}^{+\infty}\ [\,\varphi(x)\,]^*\,\psi(x)\ dx\,.`

4.) An example of a Euclidean space is a (2- or 3-dimensional) vector space of geometric vectors
with an inner product given by
:math:`\ \ \vec{a}\cdot\vec{b}\,=\,|\vec{a}|\,|\vec{b}|\,\cos\phi\,,
\ ` where :math:`\,\phi=\angle(\vec{a},\vec{b})\,.`

In a Euclidean space of 2-dimensional geometric vectors an inner product of a vector :math:`\vec{v}` and a unit vector :math:`\vec{a}` represents the *scalar projection* of :math:`\vec{v}` onto :math:`\vec{a}`, that is, it is equal to the length of the segment :math:`AB`:

.. figure:: figures/vector_projection.png
    :scale: 80 %
    :align: center
       
Furthermore, the vector :math:`\ \vec{AB}:=\ (\vec{v}\cdot\vec{a} )\,\vec{a}\ ` 
is the *vector projection* of :math:`\vec{v}` onto :math:`\vec{a}`.
If :math:`\vec{a}` is not the unit vector, then the scalar projection and 
the vector projection of :math:`\vec{v}` onto :math:`\vec{a}` are given respectively by 
:math:`\ \vec{v}\cdot\frac{\vec{a}}{|\vec{a}|}\ ` and 
:math:`\ \frac{(\vec{v}\cdot\vec{a} )\,\vec{a}}{|\vec{a}|^2}\ `.

Having in mind applications, we wil mainly consider unitary (and so: complex) vector spaces. 
However, the introduced notions, properties and theorems are in general (with some exceptions) also true in Euclidean spaces.

.. Podstawową własność iloczynu skalarnego przedstawia

.. odnoszą się jednak również do przestrzeni euklidesowych (rzeczywistych).

The Schwarz Inequality
~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Theorem 1. :math:`\,` (Schwarz inequality)
   
   For any vectors :math:`\,x,y\ ` belonging to a unitary vector space :math:`\,V(C):`
      
   .. math::
      :label: Schwarz
      
      |\,\langle x,y\rangle\,|^2\ \ \leq\ \ 
      \langle x,x\rangle\,\langle y,y\rangle\,,\qquad x,y\in V(C)\,.

**Proof.** :math:`\,` If :math:`\,y=\theta,\ \,` the inequality :eq:`Schwarz` reads: :math:`\,0\,\leq 0\,.`

We may assume then that :math:`\ \,y\neq\theta\,.\ \,` 
Then, :math:`\,` for any :math:`\,\alpha\in C:`

.. math::
   
   \langle\,x-\alpha\,y,\;x-\alpha\,y\,\rangle\ \ \geq\ \ 0\,,

   \langle x,x\rangle\ -\ \langle x,\,\alpha\,y\rangle\ -\ 
   \langle\alpha\,y,\,x\rangle\ +\ \langle\alpha\,y,\,\alpha\,y\rangle\ \ \geq\ \ 0\,,

   \langle x,x\rangle\ -\ \alpha\,\langle x,y\rangle\ -\ 
   \alpha^*\,\langle x,y\rangle^*\ +\ \alpha^*\alpha\ \langle y,y\rangle\ \ \geq\ \ 0\,.

In particular, we may substitute :math:`\ \ \alpha\ =\ 
\displaystyle\frac{\langle x,y\rangle^*}{\langle y,y\rangle}\,:`

.. math::
   
   \langle x,x\rangle\ -\ \frac{\langle x,y\rangle^*}{\langle y,y\rangle}\ \langle x,y\rangle\ -\ 
   \frac{\langle x,y\rangle}{\langle y,y\rangle}\ \langle x,y\rangle^*\ +\ \,
   \frac{\langle x,y\rangle}{\langle y,y\rangle}\ \frac{\langle x,y\rangle^*}{\langle y,y\rangle}\ 
   \langle y,y\rangle\ \ \geq\ \ 0\,.

If we multilpy both sides of the inequality by :math:`\ \;\langle y,y\rangle>0,\ \;` we obtain

.. math::
   
   \langle x,x\rangle\,\langle y,y\rangle\ -\ |\,\langle x,y\rangle\,|^2\ -\ 
   |\,\langle x,y\rangle\,|^2\ +\ \,|\,\langle x,y\rangle\,|^2\ \ \geq\ \ 0\,,

   \langle x,x\rangle\,\langle y,y\rangle\ \ \geq\ \ |\,\langle x,y\rangle\,|^2\,.

One can prove that the inequality :eq:`Schwarz` turns into equality if and only if vectors
:math:`\,x,y\ ` are linearly independent. In a Euclidean space the inequality is of the form:

.. math::
   :label: Schwarz_real
   
   \langle x,y\rangle^2\ \ \leq\ \ \langle x,x\rangle\,\langle y,y\rangle\,,\qquad x,y\in V(R)\,.   

**Examples.**

1.) Schwarz Inequality applied to the space :math:`\,C^n\ ` states that
:math:`\\` for any two complex sequences 
:math:`\ \,(\alpha_1,\,\alpha_2,\,\dots,\,\alpha_n)\,,\ \ (\beta_1,\,\beta_2,\,\dots,\,\beta_n) :`

.. math::
   
   \left|\ \ \sum_{i\,=\,1}^n\ \alpha_i^*\ \beta_i\ \,\right|^{\ 2}
   \ \ \,\leq\quad
   \left(\ \sum_{i\,=\,1}^n\ |\,\alpha_i|^2\,\right)\ 
   \left(\ \sum_{i\,=\,1}^n\ |\,\beta_i\,|^2\,\right)\,.

2.) In a Euclidean space :math:`\,R^n,\ ` for any two real sequences 
:math:`\ \,(\alpha_1,\,\alpha_2,\,\dots,\,\alpha_n)\,,\ \ (\beta_1,\,\beta_2,\,\dots,\,\beta_n),\ `
the inequality :eq:`Schwarz_real` implies:

.. math::
   
   \left(\ \ \sum_{i\,=\,1}^n\ \alpha_i\ \beta_i\ \right)^2
   \ \ \,\leq\quad
   \left(\ \sum_{i\,=\,1}^n\ \alpha_i^2\,\right)\ 
   \left(\ \sum_{i\,=\,1}^n\ \beta_i^2\,\right)\,,

3.) In a unitary space :math:`\,L^2\ ` of square-inegrable functions, any functions
:math:`\,\varphi,\psi\ ` satisfy the inequality

.. math::
   
   \left|\ \ \int_{-\infty}^{+\infty}\ [\,\varphi(x)\,]^*\,\psi(x)\ dx\ \ \right|^{\,2}
   \ \ \ \leq\ \ \ 
   \int_{-\infty}^{+\infty}\ |\,\varphi(x)\,|^2\ dx\ \ \cdot\  
   \int_{-\infty}^{+\infty}\ |\,\psi(x)\,|^2\ dx\,.

4.) In a Euclidean space of geometric vectors with an inner product

.. math::
   
   \vec{a}\cdot\vec{b}\,=\,|\vec{a}|\,|\vec{b}|\,\cos\phi\,,

Schwarz Inequality gives: :math:`\quad (\vec{a}\cdot\vec{b})^2\ \,\leq\ \,|\vec{a}|^2\ |\vec{b}|^2\,,
\quad\text{that is}\quad |\,\vec{a}\cdot\vec{b}\,|\ \,\leq\ \,|\vec{a}|\ |\vec{b}|\,.`

.. (\vec{a}\cdot\vec{b})^2\ \,\leq\ \,|\vec{a}|^2\ |\vec{b}|^2\,,
   \qquad\text{czyli}\qquad
   |\,\vec{a}\cdot\vec{b}\,|\ \,\leq\ \,|\vec{a}|\ |\vec{b}|\,,

This condition though is quite obvious, :math:`\,` because :math:`\ \,|\cos\phi\,|\,\leq\,1\,.`























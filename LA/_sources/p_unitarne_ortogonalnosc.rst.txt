
Orthogonality of Vectors
------------------------

We assume that :math:`\,V\ ` is a unitary or Euclidean vector space.

.. Niech :math:`\,x,\,y\in V. ` 

If an inner product of vectors :math:`\,x,y\in V\ ` equals zero: 
:math:`\,\langle x,y\rangle=0\,,\ `
then we say that these vectors are :math:`\,` *orthogonal*. :math:`\,`
Orthogonality is thus the generalization of the notion of perpendicularity of geometric vectors.

Orthogonal Set of Vectors
~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Definition.
   
   A set :math:`\ (x_1,x_2,\dots,x_r)\ ` of pairwise orthogonal non-zero
   vectors from the space :math:`\, V`, i.e.
   
   .. math::
      
      x_i\neq \theta
      \qquad\text{and}\qquad
      \langle\,x_i,x_j\rangle=0\quad\text{for}\quad i\neq j\,,\qquad i,j=1,2,\dots,r\,,

   is called an :math:`\,` *orthogonal set*. :math:`\,` 
   An orthogonal set of unit vectors (that is, of the vectors having norm :math:`\,1`)
   :math:`\,` is an :math:`\,` *orthonormal set*.

Hence, an inner product of any two vectors from an orthonormal set :math:`\ (x_1,x_2,\dots,x_r)\ ` is given by

.. math::
   
   \langle\,x_i,x_j\rangle=\delta_{ij}\,,\quad\text{where}\quad\delta_{ij}\ \,=\ \,
   \left\{\ 
   \begin{array}{cc} 1 & \text{for}\ \ i=j, \\ 0 & \text{for}\ \ i\ne j; \end{array}
   \right.\quad
   i,j=1,2,\ldots,r\quad
   \text{(the Kronecker delta).}

A relation between othogonality and linear independence of vectors presents 

.. admonition:: Theorem 3.
   
   Every orthogonal set of vectors of the space :math:`\,V\ ` is linearly independent.

**Proof.** :math:`\,` Assume that the set :math:`\ (x_1,x_2,\dots,x_r)\ ` of vectors from the space :math:`\,V\ ` is orthogonal:

.. math::
   :label: assumpt
   
   \langle\,x_i,x_i\rangle>0\,,\qquad\quad
   \langle\,x_i,x_j\rangle=0\quad\text{for}\quad i\neq j\,,\qquad\quad i,j=1,2,\dots,r\,.

.. Dla wykazania liniowej niezależności tego układu przypuśćmy, że
   
   .. math::
   
   \alpha_1\,x_1\,+\;\alpha_2\,x_2\,+\,\dots\,+\,\alpha_r\,x_r\ =\ \theta\,.

Let :math:`\quad\alpha_1\,x_1\,+\;\alpha_2\,x_2\,+\,\dots\,+\,\alpha_r\,x_r\ =\ \theta\,.`

After applying an inner product to both sides of the above equality  
with the vectors :math:`\ x_1,\;x_2,\,\dots,\,x_r\ \,`
on the left hand side and :math:`\,` using linearity of an inner product with respect to the second variable, :math:`\,` we obtain

.. .. math::
   
   \alpha_1\,\langle x_1,x_1\rangle\ +\ \alpha_2\,\langle x_1,x_2\rangle\ +\ \ldots\ +\ \alpha_r\,\langle x_1,x_r\rangle\ =\ 0

   \alpha_1\,\langle x_2,x_1\rangle\ +\ \alpha_2\,\langle x_2,x_2\rangle\ +\ \ldots\ +\ \alpha_r\,\langle x_2,x_r\rangle\ =\ 0 

   \dots\qquad\dots\qquad\dots\qquad\dots

   \alpha_1\,\langle x_r,x_1\rangle\ +\ \alpha_2\,\langle x_r,x_2\rangle\ +\ \ldots\ +\ \alpha_r\,\langle x_r,x_r\rangle\ =\ 0  

.. math::
   :nowrap:
   
   \begin{alignat*}{5}
   \alpha_1\,\langle x_1,x_1\rangle & {\,} + {\ } & \alpha_2\,\langle x_1,x_2\rangle & {\,} + {\ } & \ldots   & {\ \ } + {\ } & \alpha_r\,\langle x_1,x_r\rangle & {\ } = {\ \,} & 0 \\
   \alpha_1\,\langle x_2,x_1\rangle & {\,} + {\ } & \alpha_2\,\langle x_2,x_2\rangle & {\,} + {\ } & \ldots   & {\ \ } + {\ } & \alpha_r\,\langle x_2,x_r\rangle & {\ } = {\ \,} & 0 \\
   \dots\quad\ \                    &             & \dots\quad\ \                    &             & \ \ldots &               & \dots\quad\ \                    &               &   \\
   \alpha_1\,\langle x_r,x_1\rangle & {\,} + {\ } & \alpha_2\,\langle x_r,x_2\rangle & {\,} + {\ } & \ldots   & {\ \ } + {\ } & \alpha_r\,\langle x_r,x_r\rangle & {\ } = {\ \,} & 0 
   \end{alignat*}

Conditions :eq:`assumpt` imply that
:math:`\quad\alpha_1\,=\;\alpha_2\,=\;\dots\;=\,\alpha_r\ =\ 0\,.`

Hence, the implication

.. math::
   
   \alpha_1\,x_1+\,\alpha_2\,x_2+\ldots+\,\alpha_r\,x_r\ =\ \theta
   \qquad\Rightarrow\qquad   
   \alpha_1=\,\alpha_2=\ldots=\,\alpha_r\,=\,0\,

is true, and thus the vectors :math:`\, x_1,\,x_2,\,\dots,\,x_r\,` are linearly independent.

.. admonition:: Corollary.
   
   In :math:`\,n`-dimensional unitary or Euclidean vector space:

   1. every orthogonal set of :math:`\,n\ ` vectors comprises a basis;

   2. an orthogonal set of vectors cannot contain more than :math:`\,n\ ` vectors.

Orthonormal Basis
~~~~~~~~~~~~~~~~~

.. admonition:: Definition.
   
   A basis of finite dimensional space :math:`\,V\ ` whose vectors
   comprise an orthogonal (orthonormal) set is called an *orthogonal basis*
   (resp. an *orthonormal basis*).

.. **Zależności w bazie ortonormalnej.**

Assume that a basis :math:`\,\mathcal{B}=(u_1,u_2,\dots,u_n)\ ` of the space :math:`\,V\ `
is orthonormal:

.. math::
   
   \langle\,u_i,u_j\rangle\,=\,\delta_{ij}\,,\qquad i,j=1,2,\dots,n.

1. Let :math:`\ \,v\,=\,\displaystyle\sum_{k\,=\,1}^n\ \alpha_k\,u_k\,.\ \,` 
  Then, by definition of an inner product:
   
   .. math::
      :label: ortho_1
   
      \begin{array}{l}
      \displaystyle   
      \langle\,u_i,v\,\rangle\ \,=\ \,
      \left\langle u_i\,,\ \sum_{k\,=\,1}^n\ \alpha_k\,u_k\right\rangle
             \ =\ \sum_{k\,=\,1}^n\ \alpha_k\,\langle u_i,u_k\rangle
             \ =\ \sum_{k\,=\,1}^n\ \alpha_k\,\delta_{ik}\ =\ \alpha_i\,;
      \\ \\
      \blacktriangleright\quad\alpha_i\ =\ \langle\,u_i,v\,\rangle\,,\qquad i=1,2,\dots,n.
      \end{array}

   The :math:`\,i`-th coordinate of the vector :math:`\,v\ ` in basis 
   :math:`\ \mathcal{B}\ ` is equal to an inner product of the :math:`\,i`-th
   vector from the basis :math:`\,\mathcal{B}\ ` 
   and the vector :math:`\,v\,,\quad i=1,2,\dots,n.`

2. Let :math:`\quad v\,=\,\displaystyle\sum_{i\,=\,1}^n\ \alpha_i\,u_i\,,\ \ 
   w\,=\,\displaystyle\sum_{j\,=\,1}^n\ \beta_j\,u_j\,:\quad
   I_{\mathcal{B}}(v)=
   \left[\begin{array}{c} \alpha_1 \\ \alpha_2 \\ \dots \\ \alpha_n \end{array}\right]\,,\ \ 
   I_{\mathcal{B}}(w)=
   \left[\begin{array}{c} \beta_1 \\ \beta_2 \\ \dots \\ \beta_n \end{array}\right]\,.`

   .. math::

      \begin{array}{rcl}
      \langle\,v,w\,\rangle & = & 
      \left\langle\ \displaystyle\sum_{i\,=\,1}^n\ \alpha_i\,u_i\,,
      \ \displaystyle\sum_{j\,=\,1}^n\ \beta_j\,u_j\right\rangle\ \ =\ 
      \ \displaystyle\sum_{i,j\,=\,1}^n\ \alpha_i^*\,\beta_j\ \langle\,u_i,u_j\rangle\ \ =\ \ 
      \\ \\ 
      & = & \displaystyle\sum_{i,j\,=\,1}^n\ \alpha_i^*\ \beta_j\ \delta_{ij}\ \ =\ \ 
                  \displaystyle\sum_{i\,=\,1}^n\ \alpha_i^*\,\beta_i\ \ =\ \ 
                  \langle\,I_{\mathcal{B}}(v),\,I_{\mathcal{B}}(w)\,\rangle\,;
      \\ \\
      \blacktriangleright\quad\langle\,v,w\,\rangle & = & \langle\,I_{\mathcal{B}}(v),
                                                             \,I_{\mathcal{B}}(w)\,\rangle\,.
      \end{array}

   An inner product of th vectors :math:`\,v\,` and :math:`\,w\,` 
   (in a unitary or Euclidean space :math:`\,V`) :math:`\,` 
   is equal to an inner product :math:`\,` (in the space :math:`\,C^n` 
   or :math:`\,R^n,\,` respectively) :math:`\,` of column vectors
   representing coordinates of the vectors
   :math:`\,v\,` and :math:`\,w\,` in the basis :math:`\,\mathcal{B}.`

3. Let :math:`\,F\in\text{End}(V)\,,\ \ M_{\mathcal{B}}(F)=[\,\varphi_{ij}\,]_{n\times n}\,.\ `
   By definition of matrix of a linear operator:

   .. math::
      :label: ortho_3
      
      \begin{array}{rcl}
      \langle\,u_i,Fu_j\rangle & = & 
      \left\langle u_i\,,\,\displaystyle\sum_{k\,=\,1}^n\ \varphi_{kj}\,u_k\right\rangle\ \ = 
                       \ \ \displaystyle\sum_{k\,=\,1}^n\ \varphi_{kj}\,\langle u_i,u_k\rangle\ \ =
      \\ \\      
                 & = & \displaystyle\sum_{k\,=\,1}^n\ \varphi_{kj}\ \delta_{ik}\ \ =\ \ 
                       \displaystyle\sum_{k\,=\,1}^n\ \delta_{ik}\ \varphi_{kj}\ \ =
                       \ \ \varphi_{ij}\ ;
      \\ \\
      \blacktriangleright\quad\varphi_{ij} & = & \langle\,u_i,Fu_j\rangle\,,\qquad i,j=1,2,\dots,n.
      \end{array}

   An element :math:`\,\varphi_{ij}\ ` of matrix of a linear operator :math:`\,F\,` 
   in basis :math:`\,\mathcal{B}\ ` is equal to an inner product of the  
   :math:`\,i`-th vector from the basis :math:`\,\mathcal{B}\ ` and the image :math:`\,` 
   (under the transformation :math:`F`) of the :math:`\ \,j`-th vector from this basis, 
   :math:`\ \ i,j=1,2,\dots,n.`

It is worth to notice that while in an arbitrary basis :math:`\,\mathcal{B}=(v_1,v_2,\dots,v_n)\ ` coordinates :math:`\,\alpha_i\ ` of a vector :math:`\,v\ ` and elements :math:`\,\varphi_{ij}\ ` of matrix of a linear operator
:math:`\,F\ ` are defined implicitely by relations

.. math::
   
   v\,=\,\sum_{i\,=\,1}^n\ \alpha_i\,v_i\,,\qquad Fv_j\,=\,\sum_{i\,=\,1}^n\ \varphi_{ij}\,v_i\,,
   \quad j=1,2,\dots,n\,,

then in an orthonormal basis these quantities are given *explicitely* 
by formulae :eq:`ortho_1` :math:`\,` and :math:`\,` :eq:`ortho_3`.

Moreover, the equation :eq:`ortho_1` implies that every vector :math:`\,v\in V\ ` may be written as

.. math::
   :label: coord
   
   v\ \,=\ \,\sum_{i\;\,=\ \,1}^n\ \alpha_i\,u_i\ =\ \sum_{i\,=\,1}^n\ \langle u_i,v\rangle\;u_i\,.

.. admonition:: Definition.
   
   Let :math:`\,u,v\in V\,.\ `
   If a vector :math:`\,u\ ` has norm :math:`\,1:\ \ \|u\|=1\,,\ \\`
   then an inner product :math:`\,\langle u,v\rangle\ ` is called 
   a *coordinate of vector* :math:`\,v\ ` *on the axis* :math:`\,` u.

The formula :eq:`coord` states that coordinates of vector :math:`\,v\ ` in 
an orthonormal basis :math:`\,\mathcal{B}=(u_1,u_2,\dots,u_n)\ ` 
are its coordinates on axes
:math:`\,\text{u}_1,\,\text{u}_2,\,\dots,\,\text{u}_n\,.`

**Example.**

1. An orthonormal basis of real 3-dimensional space of geometric vectors
   consists of three mutually perpendicular unit vectors
   :math:`\,\mathcal{E}=(\vec{e}_1,\vec{e}_2,\vec{e}_3).\ ` An inner product of vectors 
   :math:`\,\vec{a}=\alpha_1\,\vec{e}_1+\alpha_2\,\vec{e}_2+\alpha_3\,\vec{e}_3\,,\ 
   \vec{b}=\beta_1\,\vec{e}_1+\beta_2\,\vec{e}_2+\beta_3\,\vec{e}_3\ ` equals
   
   .. math::
      
      \vec{a}\cdot\vec{b}\ =\ 
      (\alpha_1\,\vec{e}_1+\alpha_2\,\vec{e}_2+\alpha_3\,\vec{e}_3)\cdot
      (\beta_1\,\vec{e}_1+\beta_2\,\vec{e}_2+\beta_3\,\vec{e}_3)\ =\ 
      \alpha_1\,\beta_1\,+\,\alpha_2\,\beta_2\,+\,\alpha_3\,\beta_3\,.

2. An example of an orthonormal basis of a unitary space :math:`\,C^n\ ` (and also Euclidean space :math:`\,R^n`) 
   is a canonical basis :math:`\,\mathcal{E}=(e_1,e_2,\dots,e_n),\ ` where the :math:`\,i`-th vector  equals
   
   .. math::
      
      e_i\ =\ \left[\begin{array}{c}  0 \\ \dots \\       1       \\ \dots \\ 0  \end{array}\right]
                    \begin{array}{c} \; \\  \;   \\ \leftarrow\ i \\   \;  \\ \; \end{array}\,,
      \qquad i=1,2,\dots,n\,.
   

    
















        



               
 































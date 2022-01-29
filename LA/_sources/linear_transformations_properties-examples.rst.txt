
Properties and Examples
-----------------------

Some simple yet important and often used properties of linear transformations
are collected in 

.. admonition:: Theorem 3. 
   
   | Let :math:`\ V\ ` and :math:`\ W\ ` be vector spaces 
     over the field :math:`\,K.\ `
   | If the map :math:`\ F:\,V\rightarrow W\ ` is a linear transformation,
     then

   1. :math:`\ F(\theta_V)\ =\ \theta_W\,;`

   2.  :math:`\ F(-\,v)\ =\ -\ F(v)\,,\qquad\forall\ v\in V\,;`

   3. :math:`\ F(v_1-\,v_2)\ =\ F(v_1)\,-\,F(v_2)\,,
      \qquad\forall\ \ v_1,\,v_2\in V\,.`

**Proof** :math:`\,` goes on the relations: 

.. math::
   
   \begin{array}{rcl}
   \theta_V\,=\ 0\cdot\theta_V\,, & \qquad & 0\cdot w\ =\ \theta_W\,, \\
   -\ v\ =\ (-1)\cdot v\,, & \qquad & (-1)\cdot w\ =\ -\ w\,,
   \end{array}
   \qquad\quad\forall\ v\in V,\ \ \forall\ w\in W.

Namely, making use of the linearity of the transformation :math:`\ F\ ` we get:
    
1. :math:`\ F(\theta_V)\ =\ F(0\cdot\theta_V)\ =\ 0\cdot F(\theta_V)\ =\ \theta_W\,;`

2. :math:`\ F(-\,v)\ =\ F\,[\,(-1)\cdot v\,]\ =\ (-1)\cdot F(v)\ =\ -\ F(v)\,;`

3. :math:`\ F(v_1-v_2)\ =\ F\,[\,v_1+(-1)\cdot v_2\,]\ =\ 
   F(v_1)+(-1)\cdot F(v_2)\ =\ F(v_1)-F(v_2)\ \bullet`

:math:`\;` 

Being a bijective mapping, an isomorphism is invertible. It is interesting,
yet not obvious, that such an inverse of an isomorphism is also a linear 
transformation, thus an isomorphism.

.. admonition:: Theorem 4.
   
   Let :math:`\ V\ ` and :math:`\ W\ ` be vector spaces 
   over the field :math:`\,K.` :math:`\\` If the linear transformation 
   :math:`\ F:\,V\rightarrow W\ ` is an isomorphism, then the inverse map
   :math:`\ F^{-1}:\ W\rightarrow V\ ` is also a linear transformation,
   hence it is also an isomorphism.

**Proof.** :math:`\,` 
The map :math:`\,F^{-1}\,` being obviously bijective, we only have to validate
its additivity and homogeneity.

Taking into account that the map :math:`\,F\ ` is linear and injective, we get

.. math::
   
   F[F^{-1}(w_1+w_2)]=w_1+w_2=F[F^{-1}(w_1)]+F[F^{-1}(w_2)]=
   F[F^{-1}(w_1)+F^{-1}(w_2)]\,,

   \text{hence}\qquad F^{-1}(w_1+w_2)\ =\ F^{-1}(w_1)+F^{-1}(w_2)\,;

   \text{}\qquad F[F^{-1}(a\,w)]=a\,w=a\,F[F^{-1}(w)]=F[a\,F^{-1}(w)]\,,

   \text{wherefrom}\qquad F^{-1}(a\,w)=
   a\,F^{-1}(w)\,,\qquad\forall\ \ w_1,w_2,w\in W,\ \ \forall\ a\in K.

.. admonition:: Corollary.
   
   The set :math:`\ \text{Aut}(V)\ ` is a group under composition of mappings.

Indeed, a composition of two automorphisms defined on a space :math:`\ V(K)\ `
is an automorphism on :math:`\ V.\ ` The composition itself, as a composition
of mappings, is associative. The neutral element is the identity automorphism
:math:`\,I(v)=v,\ \ \forall\ v\in V.\ ` Finally, in virtue of Theorem 4.,
the inverse of an automorphism is an automorphism. 
The group :math:`\ \text{Aut}(V)\ ` is in general non-commutative.

:math:`\,`

We still consider the two vector spaces, :math:`\ V\,` and :math:`\,W,\ `
over the field :math:`\,K.\ ` Assume that :math:`\ \text{dim}\,V=n\ ` and
that the set :math:`\,B = \{v_1,v_2,\dots,v_n\}\ ` is a basis of the space 
:math:`\,V.\ ` Then every vector :math:`\,v\in V\ ` is 
represented in a unique way by a linear combination of vectors from 
:math:`\,B:`

.. math::
   
   v\ =\ a_1\,v_1\,+\;a_2\,v_2\,+\ \dots\ +\;a_n\,v_n\,.

If :math:`\,F:\,V\rightarrow W\,` is a linear transformation,
then the image of the vector :math:`\,v\ ` is given by

.. math::
   :nowrap:

   \begin{eqnarray*}
   F(v) & = & F(a_1\,v_1\,+\;a_2\,v_2\,+\ \dots\ +\;a_n\,v_n) \\
        & = & a_1\,Fv_1\,+\;a_2\,Fv_2\,+\ \dots\ +\;a_n\,Fv_n\,.
   \end{eqnarray*}

The last formula reveals an interesting property of the transformation
:math:`\,F,\ ` resulting from the linearity.
To determine the image :math:`\,F(v)\,` of any from among infinitely many
vectors :math:`\,v\in V,\ ` it is sufficient to know the images of :math:`\,n\ ` 
vectors only (provided that these vectors form a basis).
This remark is complemented by   

.. admonition:: Theorem 5. :math:`\\`
   
   Let :math:`\ V\ ` and :math:`\ W\ ` be vector spaces 
   over the field :math:`\,K,\ ` while :math:`\ V\ ` is finite-dimensional one
   with a basis :math:`\,B = \{v_1,\,v_2,\,\dots,\,v_n\}.\ `
   If :math:`\,F,\,G\in\text{Hom}(V,W),\ ` then
   
   .. math::
      
      F\,=\,G\quad\Leftrightarrow\quad 
      F\,v_i\,=\,G\,v_i\,,\qquad i=1,2,\ldots,n.

**Proof.** :math:`\,` The implication :math:`\ \Rightarrow\ ` being obvious,
we shall prove the inference :math:`\ \Leftarrow\ ` only.

Let :math:`\ \displaystyle\,v\,=\,\sum_{i\,=\,1}^n\ a_i\,v_i\ ` 
be any vector in the space :math:`\,V.\ ` Then

.. math::
   
   F(v)\ =\ F\left(\,\sum_{i\,=\,1}^n\ a_i\,v_i\right)\ =\ 
   \sum_{i\,=\,1}^n\ a_i\,Fv_i\ =\ \sum_{i\,=\,1}^n\ a_i\,Gv_i\ =\ 
   G\left(\,\sum_{i\,=\,1}^n\ a_i\,v_i\right)\ =\ G(v)\,.\ \bullet

.. admonition:: Corollary.
   
   A linear transformation of a finite-dimensional vector space :math:`\,V\ ` 
   into any vector space :math:`\,W\,` (both over the same field :math:`\,K`)
   is completely determined by its values on vectors of any basis 
   of :math:`\,V.`

:math:`\,`

Now, we shall present a few examples of linear transformations.

**Example 0.** :math:`\,` 
Let :math:`\ V\ ` and :math:`\ W\ ` be vector spaces over the field 
:math:`\,K.\ ` The following mappings are linear transformations: 

1. The zero map :math:`\ \,\Theta:\,V\rightarrow W:\qquad 
   \Theta(v)\ =\ \theta_W\,,\quad\forall\ v\in V.`

2. The identity map :math:`\ \,I:\,V\rightarrow V:\qquad
   I(v)\ =\ v\,,\quad\forall\ v\in V.`

3. The map :math:`\ \,F_a:\,V\rightarrow V:\qquad
   F_a(v)\ =\ a\,v\,,\quad a\in K,\ \forall\ v\in V.`

The transformations :math:`\,I\ ` and :math:`\,F_a\ ` (for :math:`\,a\ne 0`) 
:math:`\,` are automorphisms of the space :math:`\,V.` 

**Example 1.** :math:`\,` 
The following maps :math:`\ \,F:\,K^n\rightarrow K^m\ ` 
are linear transformations

a. :math:`\quad F
   \left[\begin{array}{l}
   x_1 \\ \dots \\ x_m \\ x_{m+1} \\ \dots \\ x_n
   \end{array}\right]
   \ =\ 
   \left[\begin{array}{l}
   x_1 \\ \dots \\ x_m
   \end{array}\right]\,,\qquad (n\geq m).`

   In particular, for :math:`\,m=1,\ ` the transformation :math:`\ F\ ` 
   is a linear functional.

b. :math:`\quad F(\boldsymbol{x})\ =\ \boldsymbol{A}\,\boldsymbol{x}\,,\qquad`
   where :math:`\ \boldsymbol{A}\in M_{m\times n}(K)\ ` is a given matrix, 
   :math:`\ \,\boldsymbol{x}\in K^n.`

**Example 2.** :math:`\,` The matrix transpose operation

.. math::
   
   T(\boldsymbol{A})\ =\ 
   \boldsymbol{A}^{\,T}\,,\qquad\boldsymbol{A}\in M_{m\times n}(K)

defines the linear transformation
:math:`\ T:\,M_{m\times n}(K)\rightarrow M_{n\times m}(K).`

**Example 3.** :math:`\\` 
Given the matrices :math:`\ \boldsymbol{B}\in M_{k\times m}(K)\ ` and
:math:`\ \boldsymbol{C}\in M_{n\times l}(K),\ ` due to the properties
of matrix multiplication, the mapping 
:math:`\ F:\,M_{m\times n}(K)\rightarrow M_{k\times l}(K)\ ` 
defined as

.. math::
   
   F(\boldsymbol{A})\ =\ \boldsymbol{B}\boldsymbol{A}\boldsymbol{C}\,,
   \qquad\forall\ \boldsymbol{A}\in M_{m\times n}(K)\,,

is a linear transformation.

**Example 4.** :math:`\,` Let :math:`\ V\ ` be the 3-dimensional space of 
geometrical vectors, :math:`\ \vec{a}\in V.`

a. The map :math:`\ F:\,V\rightarrow V\ ` given by the cross product
   
   .. math::
   
      F(\vec{r})\ =\ \vec{a}\times\vec{r}\,,\qquad\forall\ \vec{r}\in V\,,
   
   is a (non-surjective) endomorphism of the space :math:`\ V.`

b. The map :math:`\ f:\,V\rightarrow R\ ` given by the dot product

   .. math::
   
      F(\vec{r})\ =\ \vec{a}\cdot\vec{r}\,,\qquad\forall\ \vec{r}\in V\,,
   
   is a linear functional defined on the space :math:`\ V.`

On the other hand, for a given number :math:`\,0\ne a\in R\ ` 
the transformation :math:`\ F:\,V\rightarrow V\ ` 

.. math::
   
   F(\vec{r})\ =\ a\,\vec{r}\,,\qquad\forall\ \vec{r}\in V\,,
   
is an automorphism of the space :math:`\,V\ ` (see Example 0., item 3.).

**Example 5.** :math:`\,` 
The mapping :math:`\,f:\,K^n\rightarrow K\ ` given by

.. math::
   
   f\left[\begin{array}{l} 
   x_1 \\ x_2 \\ \dots \\ x_n 
   \end{array}\right]\ \,:\,=\ \,
   x_1 + x_2 + \ \dots\ + x_n

is a linear functional.

**Example 6.** :math:`\,` 
We define the :math:`\,` *trace* :math:`\,`  of a square matrix
:math:`\ \boldsymbol{A}=[a_{ij}]_{n\times n}\in M_n(K)\ ` as the sum
of its diagonal elements:

.. math::
   
   \text{Tr}\,\boldsymbol{A}\ \,:\,=\ \,\sum_{i\,=\,1}^n\ a_{ii}\,.

The properties of the matrix operations imply that the map
:math:`\ \text{Tr}:\,M_n(K)\rightarrow K\ \,` is a linear functional defined
upon the algebra of square matrices of size :math:`\,n\,` 
over the field :math:`\,K.`

**Example 7.** :math:`\,` 
Let :math:`\,\mathcal{C}_{[\,0,1\,]}^{\,\infty}\ ` denote the vector space
of real functions defined on the interval :math:`\,[\,0,\,1\,]\ ` and having
derivatives of any order. The map which ascribes to each function from
:math:`\,\mathcal{C}_{[\,0,1\,]}^{\,\infty}\ ` its first derivative, is an
endomorphism, since the operation of differentiating is linear.

















   

.. -*- coding: utf-8 -*-

Algebraic Structures
--------------------

Definitions and Examples
~~~~~~~~~~~~~~~~~~~~~~~~

An *algebraic structure* :math:`\,` is by definition a collection 
of a finite number of sets and a finite number of mappings of Cartesian
products of these sets into these sets.

To phrase that in a more straightforward way, 
an algebraic structure consists of one or 
several sets and some operations 
(a set the operations are defined upon is named
an *underlying set* of the given structure).
The definition of a particular structure specifies the underlying set(s)
together with the operations
and gives a list of axioms to be fulfilled by these operations.

The most important algebraic structures are: 
:math:`\,` *group*, :math:`\,` *ring*, :math:`\,` *field*, :math:`\,` 
*vector space*, :math:`\,` *algebra*.

| A :math:`\ ` **Group** :math:`\ \,\mathbb{G}\ \,` consists of one set
  :math:`\ G\ ` and :math:`\,` one internal operation :math:`\ \bot:`
| :math:`\mathbb{G}\;=\;(G,\,\bot\,)\,,\ \ ` where
  :math:`\ \ \bot:\ \ G\times G \to G.`
|
| A group operation :math:`\ \bot\ ` satisfies the following conditions: [1]_

1. :math:`\,` is associative:
   
   .. math::
   
      (g_1\,\bot\;g_2)\ \bot\ g_3\ \ =\ \ g_1\ \bot\ (g_2\;\bot\;g_3)\qquad
      \forall\ \ g_1,\,g_2,\,g_3\in G\,; 

2. :math:`\,` there exists a neutral element :math:`\ e\in G\ \,` such that
   
   .. math::
      
      e\;\bot\;g\ \,=\ \,g\;\bot\;e\ \,=\ \,g \qquad
      \forall\ g\in G\,;

3. :math:`\,` each element :math:`\ g\in G\ ` has its inverse
   :math:`\ g^{-1}\in\,G\ ` such that

   .. math::
      
      g\;\bot\;g^{-1}\ \,=\ \,g^{-1}\;\bot\;g\ \,=\ \,e\,.

If additionally the operation :math:`\ \,\bot\,\ ` is commutative:

.. math::
   
   g_1\,\bot\;g_2 \ \,=\ \,g_2\;\bot\;g_1\qquad\forall\ \ g_1,\,g_2\,\in\,G\,, 

the group is called :math:`\,` *abelian*. In an abelian group
the operation is often symbolized by '+' :math:`\\`
and the term 'inverse' is replaced by 'opposite': 
:math:`\ \ g^{-1}\rightarrow (-g).`

.. :math:`\ `

**Examples** of abelian groups.

* Additive groups of numbers :math:`\,(X,\,+),\ `
  where :math:`\ X = Z,\,Q,\,R\ ` or :math:`\ C`.

* | The additive group of integers modulo :math:`\,n\in N:\ \ (Z_n,\,+_n)\,;`
  | here :math:`\,Z_n\,:=\{0,1,\ldots,n-1\}\ `
    and :math:`\,+_n\,` symbolizes the addition modulo :math:`n`.

* Multiplicative groups of nonzero numbers: 
  :math:`\,(K\!\smallsetminus\!\{0\},\,\cdot\,),\ ` where :math:`\ K=Q,\,R,\,C`.

* The additive group of geometric vectors in a plane or in the space: 
  :math:`\ (V,\,+\,)`.

**Examples** of non-abelian groups.

* | A group of permutations of an :math:`\,n`-element set 
    :math:`\,(S_n,\,\circ\,)`
  | (the group operation :math:`\,\circ\,` is the composition
    of permutations as functions);

* | The group of real nonsingular square matrices of size :math:`\,n`
  | (with matrix multiplication as the group operation).

* | A symmetry group of a figure in a plane 
    or of a solid figure in the space
  | (with composing the symmetry operations).

| A :math:`\ ` **Ring** :math:`\ \,\mathbb{P}\ \,` 
  consists of one set :math:`\,P\ ` and :math:`\,`
  two internal operations:
| :math:`\ \ \mathbb{P}\;=\;(P,\,+\,,\,\cdot\,)\,,\ \ `
  where :math:`\ \ \,+\,,\ \cdot\ :\ \,P\times P \to P\,`
| (the operations shall be henceforth called addition and multiplication, 
  respectively).
|
| Ring operations satisfy the following conditions:

1. | :math:`\ ` the structure :math:`\ (P,\,+)\ \ ` is an abelian group
   | :math:`\ ` (the *additive group* of the ring; 
     its neutral element is the *zero* of the ring);
   | :math:`\ `

2. :math:`\ ` multiplication is associative:
 
   .. math::
      
      (a_1\cdot a_2)\cdot a_3 \ =\ a_1\cdot (a_2\cdot a_3)\qquad 
      \forall\ \ a_1,\,a_2,\,a_3\,\in\,P\,;

3. :math:`\ ` multiplication is distributive over addition:
 
   .. math::
      
      a\cdot(b_1+b_2)\ =\ (a\cdot b_1)\ +\ (a\cdot b_2)\qquad
      \forall\ \ a,\,b_1,\,b_2\,\in\, P\,,

      (a_1+a_2)\cdot b\ =\ (a_1\cdot b)\ +\ (a_2\cdot b)\qquad
      \forall\ \ a_1,\,a_2,\,b\,\in\, P\,.

When, additionally, multiplication is commutative:

.. math::
   
   a_1\cdot\,a_2 \ =\ a_2\cdot\,a_1\qquad
   \forall\ \ a_1,\,a_2\,\in\,P,

the ring itself is said to be *commutative*.

Furthermore, if there exists in :math:`\,P\,` a multiplicative neutral element
:math:`\\` (named the *identity* of the ring and denoted by 1):

.. math::
   
   1\cdot a\ =\ a\cdot 1\ =\ a\qquad\forall\ a\in P\,,

then we are dealing with a *ring with identity*.

**Examples** of commutative rings with identity.

* The integer ring :math:`\ \mathbb{Z} \,=\, (Z,\ +\,,\ \cdot\,)\ `
  with the usual addition and multiplication of numbers.

* | The ring of integers modulo :math:`\,n>1:\,` 
    :math:`\ \mathbb{Z}_n = (Z_n,\ +_n\,,\ \cdot_n\,)\,,\ `
    where :math:`\ Z_n\,=\,\{0,1,\ldots,n-1\}\ ` 
  | and the operations :math:`\ \,+_n\ \ ` and :math:`\ \ \cdot_n\ \,` 
    are the addition and multiplication modulo :math:`\,n`.

* | The structure :math:`\,(X,\ \oplus,\ \odot\,)\,,\ ` 
    where :math:`\,X\,=\,Z,\,Q,\,R\ ` or :math:`\ C,\ `
    and the operations are  
  | defined as follows: :math:`\quad a\oplus b\,:\,=\,
    a+b+1,\quad a\odot b\,:\,=\,a+b+ab,\quad a,b\in X`.
  | Interestingly enough, the zero (additive neutral element) 
    is here the number :math:`\,-1,\,` 
  | whereas the identity (multiplicative neutral element) 
    is the number :math:`\,0`.

* | The set :math:`\,\mathcal{F}_{[\,0,\,1\,]}\,` 
    of all functions mapping the interval 
    :math:`\ [\,0,\,1\,]\ ` into :math:`\ R`, 
  | in conjunction with the operations of adding and multiplying functions, 
  | forms a ring in which the zero is the function 
    :math:`\ \,\theta(x)=0,\ \ x\in [\,0,\,1\,]\,,` 
  | and the identity is the function :math:`\ e(x)=1,\ \ x\in [\,0,\,1\,]\,.`

An example of noncommutative ring is given by the set of square matrices
of size :math:`\,n>1\,` over a ring with identity, considered together 
with the operations of matrix addition and multiplication. :math:`\\`

.. :math:`\ `

A :math:`\ ` **Field** :math:`\ \mathbb{K},\ ` just as a ring, 
is composed of one set :math:`\,K\ ` 
and two internal operations, :math:`\\` 
:math:`\ \,+\ \,` and :math:`\ \,\cdot\ \,,\ \ `
named respectively addition and multiplication:
:math:`\ \ \mathbb{K}\;=\;(K,\,+\,,\,\cdot\,)\,.`

By definition, the field operations are subject to the following conditions:

1. :math:`\ (K,\,+)\ \ ` is an abelian group with the neutral element 
   :math:`\, 0 \,` (zero of the field);

2. :math:`\ (K\!\smallsetminus\!\{0\},\ \cdot\;)\ \ ` is an abelian group 
   with the neutral element :math:`\, 1 \,` (identity of the field);

3. :math:`\ ` multiplication is distributive over addition:

   .. math::
      
      \alpha\cdot(\beta_1+\beta_2)\ =\ 
      (\alpha\cdot \beta_1)\ +\ (\alpha\cdot \beta_2)\qquad
      \forall\ \ \alpha,\,\beta_1,\,\beta_2\,\in\, K\,.

:math:`(K,\,+)\ ` and :math:`\ K\!\smallsetminus\!\{0\},\ \cdot\;)\ ` are the 
*additive group* and *multiplicative group* of the field, resp. :math:`\\`
It's easy to note that every field is a ring (though the reverse is not true).
More precisely: :math:`\\` 
a field is a commutative ring with identity, in which
each nonzero element has an inverse.

.. Podstawowe stwierdzenia:

   a. :math:`\ \ 1\neq 0\,;`
   b. :math:`\ \ 0\,\cdot\,\alpha\ =\ 0\,,\quad\alpha\in K\,;`
   c. :math:`\ \ (-1)\,\cdot\,\alpha\ =\ -\ \alpha\,,\quad\alpha\in K\,;`
   d. :math:`\ \ \alpha\,\cdot\,\beta\ =\ 0 \quad\Leftrightarrow\quad 
      (\alpha=0\ \ \lor\ \ \beta=0)\,,\qquad\alpha,\,\beta\in K\,.` :math:`\\`

**Examples** of fields.

* | Field of rational numbers: :math:`\ \mathbb{Q}\,=\,(Q,\,+\,,\;\cdot\;)\;;\ ` 
  | field of real numbers: :math:`\ \mathbb{R}\,=\,(R,\,+\,,\;\cdot\;)\;;\ `
  | field of complex numbers: :math:`\ \mathbb{C}\,=\,(C,\,+\,,\;\cdot\;)\,.`

* | The set :math:`\,Q(\sqrt{2})\,:\,=\,\{\,a+b\sqrt{2}\,:\ a,b\in Q\,\}`
  | forms a field with the usual operations on real numbers.

* | The structure :math:`\,(X,\ \oplus,\ \odot\,)\,,\ ` where 
    :math:`\,X\,=\,Q,\,R\ ` or :math:`\,C,\ ` and the operations are  
  | defined as follows: :math:`\quad a\oplus b\,:\,=\,
    a+b+1,\quad a\odot b\,:\,=\,a+b+ab,\quad a,b\in X`,
  | is a field :math:`\ ` (here the zero is the number :math:`\,-1\,` 
    and the identity is the number :math:`\,0\,`).

* | The ring :math:`\ \mathbb{Z}_n\ ` of integers modulo 
    :math:`\,n\ ` is :math:`\,` a (finite) field :math:`\,` 
    if and only if :math:`\,n\,` is a prime.

.. | :math:`\,`

Basic properties of fields are discussed in Appendix A1.

.. admonition:: Note. :math:`\;`

   In a less rigorous (yet widely used) language, an algebraic structure 
   is often identified with its underlying set. :math:`\\` 
   So one says :math:`\ ` 
   ":math:`\ \sigma\,` is an element of the permutation group :math:`\,S_n\,`"
   :math:`\ ` :math:`\\` or :math:`\,` "the set :math:`\,2Z\,` 
   of even integers is a commutative ring without identity".

.. :math:`\;`

| A :math:`\ ` **Vector Space** :math:`\,` over a field :math:`\,K\ \ `
  is the structure :math:`\ \ \mathbb{V}\,=
  \,(\,V,\,\oplus\,;\ \,K,\,+\,,\,\cdot\ \,;\ \;\boxdot\,)\,,\ ` 
| where :math:`\quad\oplus:\ V\times V\rightarrow V\,;
  \quad +\ ,\ \cdot\,:\ K\times K\rightarrow K\,;
  \quad\boxdot\,:\ K\times V\rightarrow V\,.`
| By definition, the operations satisfy the following requirements:

1. | :math:`\ (V,\,\oplus\,)\ \ ` is an abelian group
   | :math:`\ ` (the *additive group* of the vector space;
     its neutral element is the *zero vector* :math:`\,\theta`);

2. :math:`\ (K,\,+\,,\,\cdot\,)\ \ ` is a field;

3. | :math:`\ (\alpha + \beta)\,\boxdot\,v \ \,=\ \,
     (\alpha\,\boxdot\,v)\,\oplus\,(\beta\,\boxdot\,v),`
   | :math:`\ \ \alpha\,\boxdot\,(v\,\oplus\,w) \ \,=\ \,
     (\alpha\,\boxdot\,v)\ \oplus\ (\alpha\,\boxdot\,w);`

4. :math:`\ \ \alpha\,\boxdot\,(\beta\,\boxdot\,v) \ \,=
   \ \,(\alpha\cdot\beta)\,\boxdot\,v;`

5. :math:`\ \ 1\ \boxdot\ v \ \,=\ \,v.`

In the above expressions :math:`\ \alpha\ ` and :math:`\ \beta\ ` 
are arbitrary elements of the field :math:`\,K\ ` :math:`\\`  
(:math:`\,1\,` is the identity of that field), :math:`\ `
whereas :math:`\ v\ ` and :math:`\ w\ ` are arbitrary elements 
of the set :math:`\,V.`

.. Elements :math:`\,` of the set :math:`\,K\ ` :math:`\,` or :math:`\,` of 
   the set :math:`\,V\ ` are referred to as :math:`\,` *scalars* 
   :math:`\,` or :math:`\,` *vectors*, :math:`\,` respectively.

Elements of the set :math:`\,K\ ` are called *scalars*, :math:`\,` 
while those from the set :math:`\,V` are *vectors*.

.. The neutral element of the additive group is called  
   the *zero vector*  and is denoted by :math:`\,\theta`.

As mentioned in the Note above, in a practical mathematical language
the term "vector space" would refer to the set :math:`\,V\,`
rather than to the algebraic structure :math:`\ \mathbb{V}\,` as a whole.
Assuming this terminology, we may define a vector space in a less formal way 
as a collection :math:`\,V\,` of vectors, which may be added 
(to form an abelian group) and multiplied by scalars from a field, 
the multiplication being distributive over both addition of scalars 
and addition of vectors, being also compatible with the field multiplication 
and satisfying the trivial condition :math:`\,1\cdot v=v,\ v\in V`.

.. distributive over the addition operation of each parameter

A vector space over a field :math:`\,K\,` 
will be denoted shortly by :math:`\,V(K).` :math:`\\` 
Usually, the field :math:`\,K\,` is either 
the field of real numbers :math:`\,R\,` or 
the field of complex numbers :math:`\,C.` :math:`\\`
Accordingly, we talk about a real vector space :math:`\,V(R)\,` 
:math:`\,` or :math:`\,` of a complex one :math:`\,V(C).`

**Examples** of vector spaces.

* | Set of real numbers :math:`\,R\,` yields the vector space 
    :math:`\,R(Q)\,` over the field of rational numbers :math:`\,Q\,,\ ` 
    as well as the vector space :math:`\,R(R)\,` over the field of real 
    numbers :math:`\,R\,.` 
  | On an analogous basis, the set of complex numbers :math:`\,C\,` forms 
    the real space :math:`\,C(R)` and the complex space :math:`\,C(C)\,.`

* Set of geometric vectors in a plane or in the space is a real vector 
  space with respect to vector addition and multiplication by real numbers.

* Set :math:`\,K^n\,` of :math:`\,n`-tuples, represented by column vectors 
  of size :math:`\,n,\ ` is a vector space 
  under the vector addition and scalar multiplication.

* | Set :math:`\,M_{m\times n}(K)\,` of rectangular matrices over a field 
    :math:`\,K\ ` with :math:`\,m\,` rows and  :math:`\,n\,` columns 
  | is a vector space over the field :math:`\,K\ ` under the matrix addition 
    and scalar multiplication.

.. Assuming the generally accepted order of operations 
   (multiplication before addition) we shall apply henceforth 
   the simplified notation:

Assuming the usual order of operations we shall apply henceforth 
the simplified notation:

.. math::

   (\alpha\,\boxdot\,v)\ \oplus\ (\beta\,\boxdot\,w)\quad\rightarrow\quad
   \alpha\cdot v\,+\,\beta\cdot w\quad\rightarrow\quad
   \alpha\,v\,+\,\beta\,w\,.

Basic properties of vector spaces are described in Appendix A2. :math:`\\`
A vector space over the field :math:`\,R\ ` or :math:`\,C\ ` 
is a fundamental object of linear algebra. 
However, the computer algebraic system Sage is based on 
a more general concept of a module over a ring.

| A :math:`\ ` left **Module** :math:`\,` over a ring :math:`\,P\ \ `
  is the structure :math:`\ \ \mathbb{M}\,=\,
  (\,M,\,\oplus\,;\ \,P,\,+\,,\,\cdot\ \,;\ \;\boxdot\,)\,,\ `
| where :math:`\quad\oplus:\ M\times M\rightarrow M\,;
  \quad +\ ,\ \cdot\,:\ P\times P\rightarrow P\,;
  \quad\boxdot\,:\ P\times M\rightarrow M\,.`
| The operations are subject to the following axioms:

1. :math:`\ (M,\,\oplus\,)\ \ ` is an abelian group
   (called the *additive group* of the module);

2. :math:`\ (P,\,+\,,\,\cdot\,)\ \ ` is a ring with identity;

3. | :math:`\ (a + b)\,\boxdot\,m \ \,=\ \,
     (a\,\boxdot\,m)\,\oplus\,(b\,\boxdot\,m)\,,`
   | :math:`\ \ a\,\boxdot\,(m_1\,\oplus\,m_2) \ \,=\ \,
     (a\,\boxdot\,m_1)\ \oplus\ (a\,\boxdot\,m_2)\,;`

4. :math:`\ \ a\,\boxdot\,(b\,\boxdot\,m) \ \,=\ \,(a\cdot b)\,\boxdot\,m\,;`

5. :math:`\ \ 1\ \boxdot\ m \ \,=\ \,m\,;\qquad\quad 
   \forall\ \ a,b\in P\,,\quad\forall\ \ m,m_1,m_2\in M.`

A left module :math:`\,M\ ` over a ring :math:`\,P\ \ `
(in short: a left :math:`\,P`-module) is therefore an abelian group,
whose elements can be multiplied by scalars from :math:`\,P\,,\ `
the distributivity and compatibility conditions :math:`\,` 
3. :math:`-` 5. :math:`\,` being fulfilled.

Definition of a right :math:`\,P`-module differs from the above
by the fourth postulate:

4. :math:`\ \ a\,\boxdot\,(b\,\boxdot\,m) \ \,=\ \,
   (b\cdot a)\,\boxdot\,m\,;
   \qquad\forall\ \ a,b\in P\,,\quad\forall\ m\in M.`

Then a modified notation would be more natural:
:math:`\quad\boxdot\,:\ M\times P\rightarrow M\,,`

3. | :math:`\ m\,\boxdot\,(a + b)\ \,=\ \,
     (m\,\boxdot\,a)\,\oplus\,(m\,\boxdot\,b)\,,`
   | :math:`\ \ (m_1\,\oplus\,m_2)\,\boxdot\,a \ \,=\ \,
     (m_1\,\boxdot\,a)\ \oplus\ (m_2\,\boxdot\,a)\,;`

4. :math:`\ \ (m\,\boxdot\,a)\,\boxdot\,b \ \,=\ \,m\,\boxdot\,(a\cdot b)\,;`

5. :math:`\ \ m\ \boxdot\ 1 \ \,=\ \,m\,;\qquad\quad 
   \forall\ \ a,b\in P\,,\quad\forall\ \ m,m_1,m_2\in M.`

When a ring :math:`\,P\,` is commutative, the left and right 
:math:`\,P`-modules are identical, :math:`\\` and when 
:math:`\,P\,` is a field, the corresponding :math:`\,P`-module 
becomes a vector space.

**Examples** of modules.

* A ring :math:`\,P\ ` is a (both left and right) module over itself.

* Given a ring :math:`\,P,\ ` consider the set :math:`\,P^{\,n}\ ` 
  of :math:`\,n`-tuples written vertically as columns.
  The operation of addition of tuples and that of multiplicating them
  by scalars from :math:`\,P\ ` being defined in the natural way, 
  we obtain a left as well as a right module over :math:`\,P.` :math:`\\`
  An important example is the module :math:`\,Z^n\,,\ ` composed of 
  :math:`\,n`-element columns of integers. When :math:`\,P\ ` is a field,
  :math:`\,P=K,\ ` we get the vector space :math:`\,K^n.`

* On the same lines, the set :math:`\,M_{m\times n}(P)\ `
  of rectangular matrices over a ring :math:`\,P\ `
  is a (left as well as right) :math:`\,P`-module.
  In particular we get the module :math:`\,M_{m\times n}(Z)\ ` 
  of matrices with integer entries.

* The set :math:`\,M_n(P)\ ` of square matrices of size :math:`\,n\ ` 
  over a ring :math:`\,P\ ` is a noncommutative ring with identity 
  with respect to matrix addition and multiplication. 
  The left-multiplication of columns from :math:`\,P^{\,n}\ ` 
  by matrices from :math:`\,M_n(P)\ ` is an internal operation 
  in :math:`\,P^{\,n}\ ` satisfying the conditions :math:`\,` 3. - 5. :math:`\,` 
  in the definition of a module. Therefore :math:`\,P^{\,n}\ ` is a left 
  (and only left) module over the ring :math:`\,M_n(P).`

* Every abelian group :math:`\,G\ ` is a module over 
  the ring of integers :math:`\,Z.\ `  

.. :math:`\ `

| An :math:`\ ` **Algebra** :math:`\,` 
  over a field :math:`\,K\ \ ` is the structure
  :math:`\ \ \mathbb{A}\,=\,(\,A,\,\oplus,\,\odot\,;\ \,K,\,+\ ,\,
  \cdot\ \,;\ \boxdot\,)\,,\ `
| where :math:`\quad\oplus,\,\odot:\ A\times A\rightarrow A\,;
  \quad +\ ,\ \cdot\,:\ K\times K\rightarrow K\,;
  \quad\boxdot\,:\ K\times A\rightarrow A\,.`
| The operations are bound by the following conditions: 

1. :math:`\ (\,A,\ \oplus,\ \odot\,)\ \ ` is a ring;

2. :math:`\ (\,K,\ +\,,\ \cdot\ )\ \ ` is a field;

3. :math:`\ (\,A,\,\oplus\,;\ \,K,\,+\,,\,\cdot\ \,;\ \boxdot\,)\ ` 
   is a vector space (over the field :math:`\,K`); 

4. :math:`\ \ (\lambda\boxdot x)\,\odot\,y \ \,=
   \ \,x\,\odot\,(\lambda\boxdot y) \ \,=
   \ \,\lambda\,\boxdot\,(x\odot y)\,,\quad
   \forall\ \lambda\in K,\quad \forall\ \ x,y\in A\,.`

Thus an algebra over a field :math:`\,K\ ` is a vector space over that field,
wherein additionally vectors can be multiplied to yield a vector result.
The vector multiplication is associative and distributive over the vector 
addition as well as compatible with the scalar multiplication of vectors 
in the sense of the condition 4. above.

An algebra may be characterized both as a ring or as a vector space. 
Specifically,

* an algebra is commutative when the vector multiplication is commutative;

* an algebra with identity contains a multiplicative neutral element;

* | the basis and the dimension of an algebra refer to the respective features
  | of the vector space of the algebra.

**Examples** of algebras.

* An arbitrary field :math:`\,K\,` is a 1-dimensional 
  commutative algebra with identity over itself.

* The set :math:`\,M_n(K)\,` of square matrices of size :math:`\,n\,`
  over a field :math:`\,K\,` is a :math:`\,n^2`-dimensional noncommutative
  algebra with identity over :math:`\,K\,` under matrix addition, 
  multiplication and scalar multiplication.

* The set :math:`\ \text{End}(V)\ ` of linear operators 
  on an :math:`\,n`-dimensional vector space :math:`\,V(K)\,` 
  is a :math:`\,n^2`-dimensional noncommutative
  algebra with identity over :math:`\,K\,` under operator addition,
  composition and scalar multiplication.

Substructures
~~~~~~~~~~~~~
 
Suppose that the structure :math:`\,\mathbb{G} = (G,\,\,\bot\,)\,` is a group.
It may happen that :math:`\\` a subset :math:`\ H\,` of the set :math:`\ G\,` 
also forms a group under the (properly restricted) operation 
:math:`\,\bot\,\,.\ ` :math:`\\`  
Then we say that :math:`\,H\,` is a :math:`\,` *subgroup* :math:`\,` 
of the group :math:`\,G\,\ ` and write :math:`\ \,H\,<\,G\,.`

**Examples** of subgroups.

* The set :math:`\,2Z\,` of even integers is a subgroup 
  of the additive group :math:`\,Z\,` of all integers.

* The two-element set :math:`\ \{-1,\,1\}\ ` is a subgroup
  of the multiplicative group :math:`\\` of nonzero real numbers.

* The set of four rotations, :math:`\ O_0,\,O_1,\,O_2,\,O_3\,,\ ` is 
  a subgroup of the eight-element :math:`\\` 
  symmetry group :math:`\,D_4\,` of a square in a plane. 
  
Analogously are defined :math:`\,` *subrings*, :math:`\,` *subfields*, 
:math:`\,` *vector subspaces* :math:`\,` and :math:`\,` *subalgebras*.

A subset of the structure's underlying set can form a substructure only if 
the operations of the structure do not move elements out from this subset, 
that is when the subset is closed under these operations.
Also, all axioms concerning the operations 
should be satisfied in the subset.

Fortunately, there are practical compact criteria allowing to omit 
a detailed verification whether each axiom is fulfilled in a given subset.
For example, for groups one may easily prove (see Appendix A3) the following

.. admonition:: Criterion for a subgroup. :math:`\\` 
   
   Let :math:`\ \,\mathbb{G}\;=\;(G,\;\bot\,)\ \,` be a group,
   :math:`\ \,\emptyset\neq H\,\subset G\,.\ `    
   Then :math:`\ H<G\ ` if, and only if, 
   
   .. math::
      
      a,b\,\in\, H\quad \Rightarrow\quad
      \left(\ a\;\bot\;b\ \in\ H\ \ \land\ \ a^{-1}\,\in\,H \ \right)\,.
   
   (a subset :math:`\,H\,` of the group :math:`\,G\,` is 
   a subgroup iff it is closed under products and inverses).      

By referencing to the definition and basic properties of vector space, 
one may prove (see Appendix A3) the necessary and sufficient condition 
for a subset to be a subspace of a space.

.. admonition:: Criterion for a vector subspace. :math:`\\` 
   
   Let :math:`\ \,\emptyset\neq W \subset V\,,\ ` 
   where :math:`\,V\,` is a vector space over a field :math:`\,K.`
   :math:`\\` Then :math:`\ W < V\ ` if and only if
   :math:`\,` for all :math:`\ \alpha \in K\,,\ w_1,w_2 \in V` :
   
   .. math::
      :label: 01
      
      w_1,w_2\,\in\,W \quad\Rightarrow\quad
      \left(\ w_1+w_2\,\in\,W\ \ \land\ \ \alpha\,w_1\,\in\,W \ \right)\,,      
   
   that is, :math:`\,` equivalently, :math:`\,` if and only if,
   :math:`\,` for all :math:`\ \alpha_1,\alpha_2 \in K\,,\ w_1,w_2 \in V` :
   
   .. math::
      :label: 02
      
      w_1,w_2\,\in\,W \quad\Rightarrow\quad
      \alpha_1\,w_1 + \alpha_2\,w_2\,\in\,W
      
   (a subset :math:`\,W\,` of a vector space :math:`\,V(K)\,` is a vector subspace
   iff :math:`\,W\,` is closed under vector addition and scalar multiplication, 
   :math:`\,` that is :math:`\,` iff for any two vectors from :math:`\,W,\ ` 
   every linear combination of them also belongs to :math:`\,W`).  

Every vector space :math:`\,V\,` has two *improper* subspaces,
the whole space :math:`\,V\,` and the one-element set :math:`\,\{\theta\}\,,\ `
where :math:`\,\theta\,` is the zero vector. Other subspaces are *proper*. 

**Examples** of subspaces.

* | The set :math:`\,Q\,` of rational numbers is a vector space :math:`\,Q(Q)\,` 
    over itself under the usual operations on numbers. 
  | It is a subspace of the rational space of real numbers 
    :math:`\,R(Q)\,:\ \ Q(Q)<R(Q).`

* | Let :math:`\,V\,` denote the set of geometric vectors in the space,
  | :math:`\,V_x,\,V_y,\,V_z\ \,-\ \,` subsets of vectors lying along 
    the axes :math:`\,Ox,\,Oy,\,Oz\,,` respectively,
  | :math:`\,V_{xy},\,V_{yz},\,V_{xz}\ \,-\ \,` subsets of vectors lying
    in the planes :math:`\,Oxy,\,Oyz,\,Oxz\,,\ ` resp.
  | These subsets are subspaces of the space :math:`\,V:\ \ `
    :math:`\,V_x,\,V_y,\,V_z,\,V_{xy},\,V_{yz},\,V_{xz}\,< \,V.` 
  | Moreover, we note that: :math:`\quad V_x,\,V_y\,<\,V_{xy}\,,
    \quad V_y,\,V_z\,<\,V_{yz}\,,\quad V_x,\,V_z\,<\,V_{xz}\,.`

* Consider the space :math:`\,K^n\ ` of column vectors of size :math:`\,n\,` 
  over a field :math:`\,K\,:`

  .. math::
     
     K^n\ \ =
     \ \ \,\left\{\quad
     \left[\begin{array}{c}
     x_1 \\ \ldots \\ x_p \\ x_{p+1} \\ \ldots \\ x_n
     \end{array}\right]
     \ :\quad x_i\in K\,,\ \ i = 1,2,\ldots,n.\;\right\}\,,
                                                                                                    
  and the subset 
  :math:`\ W_p\ =
  \ \{\ \boldsymbol{x}\in K^n\,:\ \ x_{p+1}=\ldots = x_n = 0\,\}\,,\ `
  where :math:`\ 1 \leq p < n\,:`

  .. math::
    
     W_p\ \ :\,=
     \ \ \,\left\{\quad
     \left[\begin{array}{c}
     x_1 \\ \ldots \\ x_p \\ 0 \\ \ldots \\ 0
     \end{array}\right]
     \ :\quad x_i\in K\,,\ \ i = 1,2,\ldots,p.\;\right\}\,.

  Using the conditions :eq:`01` or :eq:`02` we easily conclude that

  .. math::
     
     W_p\,<\,K^n\,. 

* The set :math:`\,M_n(K)\,` of square matrices of size :math:`\,n\,` over 
  a field :math:`\,K\,` is a vector space over :math:`\,K\,` under matrix 
  addition and scalar multiplication: 

  .. math::

     M_n(K)\ \ =\ \ \left\{\quad\left[\ \begin{array}{cccc}
                                       a_{11} & a_{12} & \ldots & a_{1n} \\
                                       a_{21} & a_{22} & \ldots & a_{2n} \\
                                       \ldots & \ldots & \ldots & \ldots \\
                                       a_{n1} & a_{n2} & \ldots & a_{nn}
                                       \end{array}\ \right]
     \ :\quad a_{ij}\in K,\ \ i,j\,=\,1,2,\ldots,n.\;\right\}\,.

  The conditions :eq:`01` or :eq:`02` being satisfied,
  the subset composed of all diagonal matrices

  .. math::
     :label: diag 

     D_n(K)\ \ :\,=\ \ \left\{\quad\left[\ \begin{array}{cccc}
                                       a_{11} &   0    & \ldots &   0    \\
                                         0    & a_{22} & \ldots &   0    \\
                                       \ldots & \ldots & \ldots & \ldots \\
                                         0    &   0    & \ldots & a_{nn}
                                       \end{array}\ \right]\ :\quad
                               a_{ii}\in K,\ \ i\,=\,1,2,\ldots,n.\;\right\}\,.

  is a subspace: :math:`\quad D_n(K)<M_n(K)\,.`

The condition for a subalgebra is an extension of that for subspace.

.. admonition:: Criterion for a subalgebra. :math:`\\` 
   
   A subset :math:`\ B\ ` of the algebra :math:`\ A\ ` 
   over a field :math:`\ K\ ` is a subalgebra if and only if :math:`\,` 
   it is closed under vector addition and vector multiplication 
   as well as under scalar multiplication, that is :math:`\,` 
   iff for arbitrary 
   :math:`\ x_1,x_2\in A\ ` and :math:`\ \lambda\in K:` 

   .. math::
      
      x_1,x_2\,\in\,B \quad\Rightarrow\quad
      \left(\ x_1+x_2\,\in\,B\ \ \land\ \ x_1\,x_2\,\in B
      \,\ \ \land\ \ \lambda\,x_1\,\in\,B\ \right)\,.

On that basis the set of diagonal matrices in Eq. :eq:`diag` is a subalgebra:
:math:`\ \,D_n(K)<M_n(K)\,.`   

.. [1] a denotement :math:`\ \forall\ x\in X\ ` 
   means :math:`\,` "for all :math:`\,x\in X`".






 
                                       

 
    




 














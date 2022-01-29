
Fundamental Concepts in Linear Algebra
--------------------------------------

Linear Combination of Vectors
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Suppose that a vector :math:`\,x\in V(K)\,` can be expressed as

.. math::
   
   x\,=\,\alpha_1\,x_1\,+\,\alpha_2\,x_2\,+\,\ldots\,+\,\alpha_m\,x_m\,, 

.. \equiv\ \sum_{k=1}^m\ \alpha_k\,x_k\,,

where :math:`\ \ \alpha_1,\,\alpha_2,\,\ldots,\,\alpha_m\in K\,,\ \  
x_1,\,x_2,\,\ldots,\,x_m\in V\,.\ `

Then the vector :math:`\,x\,` is said to be a *linear combination* 
of vectors :math:`\ x_1,\,x_2,\,\ldots,\,x_m\ ` :math:`\\` 
with coefficients :math:`\ \alpha_1,\,\alpha_2,\,\ldots,\,\alpha_m\,.`

.. Mówimy też, że wektor :math:`\,x\,` *wyraża się liniowo*
   przez wektory :math:`\ x_1,\,x_2,\,\ldots,\,x_m\,.`

When all coefficients vanish, the combination is called *trivial*. :math:`\\` 
A trivial linear combination of any vectors equals the zero vector:

.. math::
   :label: triv

   \alpha_1=\alpha_2=\ldots=\alpha_r=0\qquad\Rightarrow\qquad
   \alpha_1\,x_1\,+\,\alpha_2\,x_2\,+\,\ldots\,+\,\alpha_r\,x_r\ =\ \theta\,.
 
.. Kombinację liniową :eq:`lin` można też napisać 
   używając skróconego zapisu sumy:

.. math:
   
   x\ =\ \sum_{k=1}^m\ \alpha_k\,x_k\,.

Let :math:`\ X\ ` be :math:`\,` a set :math:`\,` (possibly infinite) 
:math:`\,` of vectors from :math:`\,V(K)\,.\ ` :math:`\\`
A *span* of the set :math:`\ X\ ` is defined as the set of all finite 
linear combinations of elements in :math:`\,X:`

.. math::
   
   L(X)\ \ :\,=\ \ 
   \left\{\ \ \ \sum_{k=1}^n\ \alpha_k\,x_k\,:\ \ 
   n\in N,\ \ \alpha_k\in K,\ \ x_k\in X,\ \ k=1,2,\ldots,n.\ \right\}\,.

For a finite set :math:`\ X\ =\ \{x_1,x_2,\ldots,x_m\}\ `
we get simply:

.. math:: 

   L(X)\,\equiv\,L(x_1,x_2,\ldots,x_m)\ =\ 
   \left\{\,\alpha_1\,x_1 +\,\alpha_2\,x_2 +,\ldots\,+\,\alpha_m\,x_m:\ \ 
   \alpha_1,\alpha_2,\ldots,\alpha_m\in K\,\right\}\,.

It's easy to note that :math:`\,L(X)\,` is a subspace:
:math:`\,L(X) < V\,.\ ` Then it is said that

* the set :math:`\,X\,` *spans* (*generates*)
  the subspace :math:`\ L(X)\,;`

* the subspace :math:`\,L(X)\,` is *spanned*
  by the set :math:`\,X\ ` (or by the vectors 
  in :math:`\,X`) ;

* :math:`\,X\,` is a *spanning set*
  of the subspace :math:`\,L(X)\,.`

If :math:`\ L(X) = V\,,\ ` 
the set :math:`\,X\,` is a spanning set of the space :math:`\,V\ `
(generates the space :math:`\,V`).

**Example.**

Suppose that :math:`\ \vec{v}_1,\,\vec{v}_2,\,\vec{v}_3\ ` are three 
non-coplanar (not lying in the same plane) :math:`\\`
geometric vectors fixed at a given point :math:`\,O.\ \,` Then

1. :math:`L(\vec{v}_1)\,=\,
   \left\{\ \alpha\,\vec{v}_1 :\ \alpha\in R\ \right\}\ ` 
   is a set of vectors lying in the straight line :math:`\\`
   with the direction vector :math:`\,\vec{v}_1\ ` and passing 
   through the point :math:`\,O\,;`  

2. :math:`L(\vec{v}_1,\vec{v}_2)\,=\,
   \left\{\ \alpha_1\,\vec{v}_1 + \alpha_2\,\vec{v}_2 :\ 
   \alpha_1,\alpha_2\in R\ \right\}\ ` is a set of vectors :math:`\\`
   in the plane passing through the point :math:`\,O\ ` and determined 
   by the vectors :math:`\,\vec{v}_1,\,\vec{v}_2\,;`

3. :math:`L(\vec{v}_1,\vec{v}_2,\vec{v}_3)\,=\,
   \left\{\ \alpha_1\,\vec{v}_1+\alpha_2\,\vec{v}_2+\alpha_3\,\vec{v}_3 :\  
   \alpha_1,\alpha_2,\alpha_3\in R\ \right\}\ ` is the whole space :math:`\\`
   of vectors fixed at the point :math:`\,O.`

The subspaces are bound by the relations

.. math::
   
   L(\vec{v}_1)\,<\,
   L(\vec{v}_1,\vec{v}_2)\,<\,
   L(\vec{v}_1,\vec{v}_2,\vec{v}_3)\,.


Linear Dependence and Independence
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We shall consider sets of vectors :math:`\,x_1,x_2,\ldots,x_r\ ` 
from a vector space :math:`\,V\,` over a field :math:`\,K.`

By definition, :math:`\,` a set :math:`\,\{x_1,x_2,\ldots,x_r\}\ ` 
is *linearly dependent* :math:`\,` (or vectors :math:`\ x_1,x_2,\ldots,x_r\ ` 
are *linearly dependent*) :math:`\,` if, and only if, :math:`\,` there exists 
a non-trivial linear combination of these vectors equal to the zero vector
:math:`\,\theta`.

A set :math:`\ \{x_1,x_2,\ldots,x_r\}\ ` is 
:math:`\,` *linearly independent* :math:`\,` 
(or vectors :math:`\,x_1,x_2,\ldots,x_r\ ` are *linearly independent*) 
:math:`\,` if it is not linearly dependent, :math:`\,` that is when every 
non-trivial linear combination of these vectors is different 
from the zero vector :math:`\,\theta`.

Therefore, a set :math:`\,\{x_1,x_2,\ldots,x_r\}\,` is linearly dependent if, 
and only if, there exists a set 
:math:`\,\{\alpha_1,\alpha_2,\ldots,\alpha_r\}\,` of scalars, 
:math:`\,` not all zero, :math:`\,` such that

.. math::
   :label: lindep

   \alpha_1\,x_1\,+\,\alpha_2\,x_2\,+\,\ldots\,+\,\alpha_r\,x_r\ =\ \theta\,.

.. On the other hand, a set is linearly independent when the only linear 
   combination of its vectors, equal to zero vector, :math:`\,` 
   is the trivial combination:

On the other hand, a set is linearly independent when the trivial linear
combination of its vectors is the only one that equals the zero vector:

.. math::
   :label: linindep

   \alpha_1\,x_1\,+\,\alpha_2\,x_2\,+\,\ldots\,+\,\alpha_r\,x_r\ =\ \theta
   \qquad\Rightarrow\qquad
   \alpha_1=\alpha_2=\ldots=\alpha_r=0\,.

It's worthwhile to note that the condition :eq:`linindep` 
is a converse of :eq:`triv`.

More generally, a countably infinite set :math:`\,S\,` of vectors
is *linearly dependent*, when there exists a finite linearly dependent subset
of :math:`\,S\,;\ ` such a set :math:`\,S\,` is *linearly independent*, 
when each its finite subset is linearly independent.

.. To allow a set of vectors to be infinite, 

**Theorem 1.** :math:`\,` 
Vectors :math:`\ x_1,x_2,\ldots,x_r\,\ \ ` (:math:`r \geq 2`) :math:`\ `
are linearly dependent if, and only if, :math:`\\` 
at least one of them can be represented as a linear combination 
of the remaining ones: [2]_

.. math::
   :label: detach

   x_i\ =\ \beta_1\,x_1\,+\,\ldots\,+\,\beta_{i-1}\,x_{i-1}\,+\,
           \beta_{i+1}\,x_{i+1}\,+\,\ldots\,+\,\beta_r\,x_r\,,
   \quad\exists\ i\in\{1,2,\ldots,r\}.

**Note.** :math:`\ ` 'at least one' does not mean 'each'.

**Proof.**

:math:`\Rightarrow\,:\ ` 
We assume that the vectors :math:`\ x_1,x_2,\ldots,x_r\ ` 
are linearly dependent. Thus, let

.. math::
   :label: comb_zero
   
   \alpha_1\,x_1\,+\,\alpha_2\,x_2\,+\,\ldots\,+\,\alpha_r\,x_r\ =\ \theta\,,

and let :math:`\ i\in\{\,1,2,\ldots,r\,\}\ ` be an index for which 
:math:`\ \alpha_i\neq 0.\ ` 

The Eq. :eq:`comb_zero` can be rewritten as

.. math::
   :label: ith

   \alpha_i\,x_i\ =\ 
   -\,\alpha_1\,x_1\,-\,\ldots\,-\,\alpha_{i-1}\,x_{i-1}\,-\,
   \alpha_{i+1}\,x_{i+1}\,-\,\ldots\,-\,\alpha_r\,x_r\,.

The condition :math:`\,\alpha_i\neq 0\,` implies that there exists 
in :math:`\,K\,` an element :math:`\,\alpha_i^{-1}\,` such that
:math:`\,\alpha_i\cdot\,\alpha_i^{-1}=1.\ `
Multiplying both sides of :math:`\,` Eq. :eq:`ith` :math:`\,` by 
:math:`\ \,\alpha_i^{-1}\ \,` and using the denotement 
:math:`\ \beta_j\,=\,-\,\alpha_i^{-1}\,\alpha_j\,` :math:`\\` for
:math:`\ j\,=\,1,\ldots,i-1,\ i+1,\ldots,r\,,\ ` we come up to
Eq. :eq:`detach`.

:math:`\Leftarrow\,:\ ` Now we assume that the condition :eq:`detach` is true. 
Moving the term :math:`\,x_i\,` to the right-hand side and taking into account
the relation :math:`\ \,-\,x_i\,=\,(-1)\cdot x_i\,,\ ` we get

.. math::

   \beta_1\,x_1\,+\,\ldots\,+\,\beta_{i-1}\,x_{i-1}\,+\,(-1)\,x_i\,+\,
   \beta_{i+1}\,x_{i+1}\,+\,\ldots\,+\,\beta_r\,x_r\ = \theta\,.

Since :math:`\,-1\neq 0\,,\ ` the linear combination 
on the left-hand side above is non-trivial, hence vectors 
:math:`\ x_1,x_2,\ldots,x_r\ ` are linearly dependent. :math:`\quad\bullet`

**Corollary.** :math:`\,`
Vectors :math:`\ \,x_1,x_2,\ldots,x_r\ \,` are linearly independent
if, and only if, :math:`\\` none of them can be written 
as a linear combination of the remaining ones.

It's easy to justify the following useful statements :math:`\\`
(l.dp. = linearly dependent, :math:`\,` l.idp. = linearly independent).

* A set :math:`\,\{x\}\,` of a single vector :math:`\,x\ ` 
  is :math:`\,` l.dp. :math:`\,` if, and only if, :math:`\ x = \theta\,.`

* | If a subset of a given set is :math:`\,` l.dp.,
    :math:`\,` then the whole set is also :math:`\,` l.dp.
  | Conclusion 1.: :math:`\,` Every set containing 
    the zero vector is :math:`\,` l.dp.;
  | Conclusion 2.: :math:`\,` If any two vectors are proportional: 
    :math:`\ x_j = \alpha\,x_i\,,\ ` then the set is l.dp.

* | Every subset of a :math:`\,` l.idp. set :math:`\,` 
    is also :math:`\,` l.idp.
  | Conclusion 3.: :math:`\,` A :math:`\,` l.idp. set :math:`\,` 
    does not contain zero vector nor proportional vectors.

**Example 0.** :math:`\,` 
Consider the vector space :math:`\,C(R)\,` of complex numbers 
over the *real* field :math:`\,R\,.` 

The two vectors (actually numbers), :math:`\ 1\ ` and :math:`\ i\,,\ ` 
are :math:`\,` l.idp., :math:`\,` since for arbitrary 
:math:`\,\alpha,\beta\in R\,:`  

.. math::
   
   \alpha\cdot 1\,+\,\beta\cdot i\ =\ 0
   \qquad\Rightarrow\qquad
   \alpha = \beta = 0\,.

On the other hand, if we interpret  :math:`\ 1\ ` and :math:`\ i\ \,` 
as vectors from the *complex* space :math:`\,C(C)\,,\ ` :math:`\\`
they become :math:`\,` l.dp., :math:`\,` since a non-trivial combination 
thereof is equal to the zero vector: 

.. math::
   
   1\cdot 1\,+\,i\cdot i\ =\ 0\,.

**Example 1.** :math:`\ `
Let :math:`\quad 
x\ =\ \left[\begin{array}{c} 1 \\ 0 \\ 1 \end{array}\right]\,,\quad
y\ =\ \left[\begin{array}{c} 0 \\ 1 \\ 0 \end{array}\right]\,,\quad
z\ =\ \left[\begin{array}{c} 2 \\ 2 \\ 2 \end{array}\right]\quad\in\ R^3\,.`

The set :math:`\,\{x,y,z\}\,` is :math:`\,` l.dp., :math:`\,` because

* :math:`\,2\,x\,+\,2\,y\,-\,z\,=\,\theta\quad`
  (a non-trivial linear combination of the vectors equals :math:`\,\theta`);

* :math:`\,z\,=\,2\,x\,+\,2\,y\quad`
  (one of the vectors can be expressed linearly by the remaining two).

Both above conditions are mutually equivalent and it suffices to ascertain 
only one of them.

**Example 2.** :math:`\ `
Let :math:`\quad 
x\ =\ \left[\begin{array}{c} 2 \\ 2 \end{array}\right]\,,\quad
y\ =\ \left[\begin{array}{c} 1 \\ 0 \end{array}\right]\quad\in\ R^2\,.`

The set :math:`\,\{x,y\}\,` is :math:`\,` l.idp. :math:`\ ` 
Indeed, let us assume that

.. math::

   \alpha\,x\,+\,\beta\,y\,=\,\theta\,,\qquad\text{that is}\qquad
   \alpha\ \left[\begin{array}{c} 2 \\ 2 \end{array}\right]\ +\ 
   \beta\  \left[\begin{array}{c} 1 \\ 0 \end{array}\right]\ =\ 
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right]\,.

The operations on the left-hand side being performed,
we come to the system of equations

.. math::
   :nowrap:

   \begin{alignat*}{3}
   \ 2\,\alpha & {\,} + {\,} & \beta & {\;} = {\;} & 0 \\
     2\,\alpha & {\,}   {\,} &       & {\;} = {\;} & 0
   \end{alignat*}

which has only the zero solution: :math:`\ \alpha = \beta = 0\,.\ `
Thus the vectors :math:`\ x,y\ ` fulfil the condition 

.. math::

   \alpha\,x\,+\,\beta\,y\,=\,\theta\qquad\Rightarrow\qquad\alpha = \beta = 0\,,

wherefrom, :math:`\ ` according to :eq:`linindep`, :math:`\ ` 
they are :math:`\ ` l.idp.

Basis of a Vector Space
~~~~~~~~~~~~~~~~~~~~~~~

A set :math:`\,B\subset V\,` is by definition a *basis* of the vector space 
:math:`\,V(K)\,\ ` when every vector :math:`\,x\in V\,` can be represented
in a unique way as a linear combination of vectors from :math:`\,B\,:\ `

.. math::
   
   x\ \,=\ \,\displaystyle\sum_{v\,\in\,B}\,\alpha_v\ v\,,
   \qquad\text{where}\quad
   \alpha_v\in K,\, v\in B.

A scalar :math:`\,\alpha_v\,` is named a *coordinate* 
of the vector :math:`\,x,\,` corresponding to the basis vector 
:math:`\,v\in B.`

Thus every vector in a space :math:`\,V\,` is uniquely characterized 
by the family :math:`\,\left(\alpha_v\right)_{v\,\in\,B}\,`
of its coordinates.
In the present textbook we restrict ourselves to vector spaces 
with finite bases (finite-dimensional spaces).

.. Alternatively, both basis vectors and coordinates of a vector
   can be interpreted as values of a respective family indexed
   by :math:`\,B:` [1]_ 

.. math:
   
   \mathcal{B}\ =\ \left(v\right)_{v\in B}\,,\quad
   \mathcal{A}\ =\ \left(\alpha_v\right)_{v\in B}\,. 

To represent vectors by columns of their coordinates
and linear transformations by matrices, one has to impose an order
on basis vectors and, consequently, on coordinates.
This motivates the following modification of the definition of basis.

.. Given a basis :math:`\,B\,` in the above sense, 

Suppose a basis :math:`\,B\,` is a set of :math:`\,n\,` vectors.
We define a corresponding :math:`\,` *ordered basis* :math:`\ \mathcal{B}\ \,` 
as a family of vectors in :math:`\,B,\ ` indexed by the set 
:math:`\ \mathrm{n} = \{1,2,\ldots,n\}\ ` of first 
:math:`\,n\,` natural numbers:

.. math::
   
   \mathcal{B}\ =\ \left(v_i\right)_{i\,\in\,\mathrm{n}}\ =\ 
   \left(\,v_1,\,v_2\,\ldots,\,v_n\,\right)\,.

Accordingly, the coordinates form a family 
   
.. math::
   
   \mathcal{A}\ =\ \left(\alpha_i\right)_{i\,\in\,\mathrm{n}}\ =\ 
   \left(\,\alpha_1,\,\alpha_2\,\ldots,\,\alpha_n\,\right)\,,
   \quad\text{where}\quad\alpha_i:\,=\alpha_{v_i}\,,\ \ 
   \forall\ i\in\mathrm{n}\,. 
     
.. The term '*basis*' will henceforward denote an ordered basis, :math:`\,`  
   that is :math:`\,` a sequence :math:`\,\mathcal{B}\ ` (rather than a set 
   :math:`\,B`) :math:`\,` of vectors.

In the following we shall distinguish between a basis
:math:`\,B\,=\,\{v_i\}_{i\,\in\,\mathrm{n}}\,=\,\{v_1,v_2,\ldots,v_n\}\,` 
(a set) and :math:`\,` an ordered basis 
:math:`\ \mathcal{B}\,=\,(v_i)_{i\,\in\,\mathrm{n}}\,=\,(v_1,v_2,\ldots,v_n)\ `
(a sequence).
In either event, every vector :math:`\,x\in V\,` has a unique representation
as a linear combination of basis vectors:

.. math::
   :label: base

   x\ =\ \alpha_1\,v_1\,+\,\alpha_2\,v_2\,+\,\ldots\,+\,\alpha_n\,v_n\,.

.. Therefore, if :math:`\,\mathcal{B} = (v_1,v_2,\ldots,v_n)\,` is a basis
   of the vector space :math:`\,V(K),\ ` then for every vector :math:`\,x\in V\,`
   there exists in :math:`\,K\,` exactly one sequence of scalars 
   :math:`\,(\alpha_1,\alpha_2,\ldots,\alpha_n)\,` such that :math:`\,x\,` 
   is equal to the linear combination of vectors 
   :math:`\,v_1,\,v_2,\,\ldots,\,v_n\,` with coefficients
   :math:`\,\alpha_1,\,\alpha_2,\,\ldots,\,\alpha_n:`

.. math:
   :label: baza

   x\ =\ \alpha_1\,v_1\,+\,\alpha_2\,v_2\,+\,\ldots\,+\,\alpha_n\,v_n\,.

**Theorem 2.** :math:`\,` 
A set :math:`\,B\subset V\,` is a basis of the vector space :math:`\,V(K)\,`
if, and only if, :math:`\,B\,` is a linearly independent spanning set
of the space :math:`\,V.`

**Proof.** :math:`\,` Let :math:`\,B = \{v_1,v_2,\ldots,v_n\}\,.`

:math:`\Rightarrow\,:\ ` 
We assume that :math:`\,B\,` is a basis of :math:`\,V.`

The condition :eq:`base` implies that :math:`\ V \subset L(B)\,.\ `
On the other hand, :math:`\,` obviously :math:`\ L(B) \subset V.\ ` 
:math:`\\` 
Thus :math:`\ V = L(B)\,,\ ` that is :math:`\,B\,` is a spanning set 
of the space :math:`\,V.`

To demonstrate the linear independence of the set :math:`\,B\,,` 
we notice that the identity

.. math::
   
   0\cdot v_1\,+\,0\cdot v_2\,+\,\ldots\,+\,0\cdot v_n\ =\ \theta

can be interpreted as a representation of the zero vector :math:`\,\theta\,`
in the basis :math:`\,B\,.\ ` From the uniqueness of this representation,
we deduce that the trivial linear combination of vectors from :math:`\,B\,`
is the only combination that equals the zero vector. This means the linear 
independence of the set :math:`\,B.`

:math:`\Leftarrow\,:\ ` Now we assume that :math:`\,B\,` 
is a linearly independent set spanning the space :math:`\,V.`

Since the set :math:`\,B\,` spans the space :math:`\,V,\ ` every vector 
:math:`\,x\in V\,` has the form :eq:`base`. :math:`\\`
It remains to prove that such a representation is unique.

Let us suppose that, on the contrary, a vector :math:`\,x\ ` 
can be expressed in two different ways:

.. This assumption directly implies that every vector :math:`\,x\in V\,` 

.. math::
   
   \begin{array}{l}
   x\ =\ \alpha_1\,v_1\,+\,\alpha_2\,v_2\,+\,\ldots\,+\,\alpha_n\,v_n\,, \\
   x\ =\ \beta_1\,v_1\,+\,\beta_2\,v_2\,+\,\ldots\,+\,\beta_n\,v_n\,,
   \end{array}
   \qquad\text{while}\quad\beta_i\neq\alpha_i\,,\ \ \exists\ i\in\mathrm{n}.

.. math:
   
   v\ =\ \alpha_1\,v_1\,+\,\alpha_2\,v_2\,+\,\ldots\,+\,\alpha_n\,v_n\,,

   v\ =\ \beta_1\,v_1\,+\,\beta_2\,v_2\,+\,\ldots\,+\,\beta_n\,v_n\,,

By subtracting the second equation from the first we obtain

.. math::
   
   (\alpha_1-\beta_1)\ v_1\,+\,(\alpha_2-\beta_2)\ v_2\,+\,\ldots\,+\,
   (\alpha_n-\beta_n)\ v_n\ =\ \theta\,,
   \quad\alpha_i-\beta_i\neq 0\,,\ \exists\ i\in\mathrm{n}.

Thus we conclude that a non-trivial linear combination
of vectors :math:`\,v_1,\,v_2,\,\ldots,\,v_n\,` equals the zero vector.
This is in contradiction with the premise on the linear independence 
of the set :math:`\,B.\ `

The representation :eq:`base` is therefore unique and the set :math:`\,B\,`
is a basis of the space :math:`\,V.` :math:`\quad\bullet`

The necessary and sufficient condition claimed by Theorem 2.
is often cited as a definition of basis. Below we show yet another
approach to the notion of basis, built upon the following definition.

A linearly independent set :math:`\,M\,` of vectors is called 
a *maximal linearly independent* (m.l.idp.) set when no other 
linearly independent set contains :math:`\,M\,` as a proper subset.

.. if it is not a proper subset of another linearly independent set of vectors. 

In other words, :math:`\,` a set :math:`\,M\subset V\,` is 
:math:`\,` a :math:`\,` m.l.idp. set of vectors 
in a space :math:`\,V\ \,` if, and only if, :math:`\,` for every vector 
:math:`\ x\in V\ ` the set :math:`\ \,M'=\,\{x\}\cup M\ \,` 
is linearly dependent.

**Theorem 3.** :math:`\,` 
A set :math:`\,B\subset V\,` is a basis of the vector space :math:`\,V(K)\,`
:math:`\,` if, and only if, :math:`\ B\ `  is a maximal linearly 
independent set. 

**Proof.** :math:`\,` Let :math:`\,B = \{v_1,v_2,\ldots,v_n\}\,.`

:math:`\Rightarrow\,:\ ` 
We assume that :math:`\,B\,` is a basis of :math:`\,V.`

Then :math:`\,B\,` is a :math:`\,` l.idp. set, :math:`\,`  
and for every vector :math:`\,x\in V\,` 
there holds the expansion :eq:`base`. :math:`\\` 
This means that for every vector :math:`\,x\in V\,` 
the set :math:`\,\{x,\,v_1,v_2,\ldots,v_n\}\,` is :math:`\,` l.dp. 
:math:`\\` 
Therefore the set :math:`\,B = \{v_1,v_2,\ldots,v_n\}\,`
is :math:`\,` a :math:`\,` m.l.idp. set.

:math:`\Leftarrow\,:\ ` Now we assume that :math:`\,B\ `
is :math:`\,` a :math:`\,` m.l.idp. set of vectors in :math:`\,V.`

Then for every vector :math:`\,x\in V\,` the set 
:math:`\,\{x,\,v_1,v_2,\ldots,v_n\}\ ` is :math:`\,` l.dp.:

.. math::
   :label: ldep

   \alpha_0\ x\,+\,
   \alpha_1\,v_1\,+\,\alpha_2\,v_2\,+\,\ldots\,+\,\alpha_n\,v_n\,=\,
   \theta\,,

where the linear combination on the left-hand side is non-trivial, :math:`\\` 
that is not all coefficients 
:math:`\,\alpha_0,\,\alpha_1,\,\ldots,\,\alpha_n\,` are zeroes.

One may ask whether :math:`\,\alpha_0\,` can vanish. 
If that was the case, we would obtain the equation 

.. math::

   \alpha_1\,v_1\,+\,\alpha_2\,v_2\,+\,\ldots\,+\,\alpha_n\,v_n\,=\,\theta\,,

where not all :math:`\,\alpha_1,\,\ldots,\,\alpha_n\,` are zeroes. 
This would mean that the vectors :math:`\,v_1,v_2,\ldots,v_n\,` are 
linearly dependent, in contradiction with the assumption that :math:`\,B\ ` 
is linearly independent. :math:`\\`
Thus :math:`\ \alpha_0\neq 0\ \,` and we may rewrite Eq. :eq:`ldep`  as

.. math::

   x\ =\ \beta_1\,v_1\,+\,\beta_2\,v_2\,+\,\ldots\,+\,\beta_n\,v_n\,,

where :math:`\ \,\beta_i\,=\,-\,\alpha_0^{-1}\,\alpha_i\ \,` 
for :math:`\ i\,=\,1,\ldots,n\,.\ ` The above condition being fulfilled
for every :math:`\,x\in V,\ ` we infer that :math:`\,B\ ` is 
:math:`\,` a :math:`\,` l.idp. spanning set of the space :math:`\,V,\ ` 
hence is a basis of :math:`\,V.\ ` :math:`\ \ \bullet`

.. | **Uwagi i komentarze.**
   |
   | Każda baza przestrzeni wektorowej jest układem liniowo niezależnym.
   | Liniowa niezależność jest warunkiem koniecznym do tego, 
     aby układ był bazą:
   | żaden układ liniowo zależny nie jest bazą.
   | Jednak sama liniowa niezależność nie jest warunkiem wystarczającym.
   | Mówiąc obrazowo, liniowo niezależnych wektorów 
     musi być w bazie dostatecznie wiele,
   | aby generowały one całą przestrzeń, 
     a nie jakąś jej właściwą podprzestrzeń.

.. **Uwagi i komentarze.**

.. Każda baza przestrzeni wektorowej 
   jest układem liniowo niezależnym. :math:`\\`
   Liniowa niezależność jest warunkiem koniecznym do tego, 
   aby układ był bazą: :math:`\\`
   żaden układ liniowo zależny nie może być bazą. :math:`\\`
   Jednak sama liniowa niezależność nie jest 
   warunkiem wystarczającym. :math:`\\`
   Mówiąc obrazowo, liniowo niezależnych wektorów 
   musi być w bazie dostatecznie wiele, :math:`\\`
   aby generowały one całą przestrzeń, 
   a nie jakąś jej właściwą podprzestrzeń.

.. _`intro-dimension`:

Dimension of a Vector Space
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The concept of the dimension of a vector space is based on

**Theorem 4.** :math:`\ `
All bases of a given vector space have equal cardinality.
In particular, if a vector space :math:`\,V(K)\,` has 
an :math:`\,n`-element base :math:`\,B,\ ` then all its bases
have the same number :math:`\,n\,` of elements 
(a proof for the case of a finite base is given in the Appendix).

Therefore the following definition makes sense.
   
If a vector space :math:`\,V\,` has a finite base :math:`\,B,\ ` 
then the number of elements of :math:`\,B\ ` :math:`\\`
is called the *dimension* of the space :math:`\,V\,` 
and is denoted by :math:`\,\text{dim}\,V.`

Vector spaces having finite bases are named *finite-dimensional*,
and if specifically :math:`\,\text{dim}\,V = n\,,` then :math:`\,V\,` 
is an :math:`\,n`-dimensional vector space.
Additionally, we assume by convention that the dimension 
of the zero space (consisting of the zero vector only) equals zero: 
:math:`\ \text{dim}\,\{\theta\} = 0\,.`

In the Appendix A4 we prove the following useful

**Theorem 5.** :math:`\ ` 
In an :math:`\,n`-dimensional vector space:

1. every set consisting of more than :math:`\,n\,` vectors 
   is linearly dependent;

2. every linearly independent set of :math:`\,n\,` vectors is a basis.

**Examples.**

* In the real space :math:`\,R(R),\ ` 
  as well as in the complex space :math:`\,C(C),` 
  every one-element set containing a non-zero number, :math:`\,` 
  for example :math:`B = \{1\},\ ` may be a basis.
  Thus :math:`\ \text{dim}\,R(R) = \text{dim}\,C(C) = \,1\,.\ `
  On the other hand, :math:`\,` in the space :math:`\,C(R)\,` 
  of complex numbers over the real field, a natural basis is the set 
  :math:`\ B = \{1,\,i\},\ ` hence :math:`\ \text{dim}\,C(R) = 2\,.` 

* In the space :math:`\,V\,` of geometric (fixed or free) vectors a basis 
  may be any set of three non-coplanar vectors. The most convenient one is 
  a triplet of three mutually perpendicular unit vectors 
  :math:`\ B = \{\,\vec{e}_1,\,\vec{e}_2,\,\vec{e}_3\}.\ \,`
  So our 'physical' space is three-dimensional also in the algebraic sense:
  :math:`\ \text{dim}\,V = 3\,.`   

* In the vector space :math:`\,K^n\,` composed of :math:`\,n`-element
  column vectors with entries from the field :math:`\,K,\ ` the most handy
  is :math:`\,` the :math:`\,` *canonical basis* 
  :math:`\ E\,=\,\{\,e_1,\,e_2,\,\ldots,\,e_n\}\,,\ ` where

  .. math::
   
     e_1\ =\ \left[\begin{array}{c} 1 \\ 0 \\ \cdots \\ 0 \end{array}\right]\,,
     \quad
     e_2\ =\ \left[\begin{array}{c} 0 \\ 1 \\ \cdots \\ 0 \end{array}\right]\,,
     \quad\ldots,\quad
     e_n\ =\ \left[\begin{array}{c} 0 \\ 0 \\ \cdots \\ 1 \end{array}\right]\,.

  Consequently, :math:`\ \ \text{dim}\,K^n = n\,,\ \ \forall\ n\in N.`

* In the subspace
  :math:`\ \ W_p\ =\ \left\{\ \,\left[\begin{array}{c}
  x_1 \\ \ldots \\ x_p \\ 0 \\ \ldots \\ 0
  \end{array}\right]\ :\quad x_i\in K\,,\ \ 
  i = 1,2,\ldots,p.\;\right\}\ \ <\ \ K^n\,,\ `

  where :math:`\ 1 \leq p < n\,,\ `
  a basis may be e.g. :math:`\,E_p = \{\,e_1,\,e_2,\,\ldots,\,e_p\},\ \,`
  hence :math:`\ \text{dim}\,W_p = p.`

.. [2] a denotement :math:`\ \exists\ i\in I\ \,` means :math:`\ `
       "there exists :math:`\ i\in I`".

.. [3] A family :math:`(x_i)_{i\in I}` of elements :math:`x\in X` 
       indexed by :math:`I` is a map :math:`\,I\rightarrow X\,,\ ` 
       with emphasis on the collection :math:`X`. 





 






























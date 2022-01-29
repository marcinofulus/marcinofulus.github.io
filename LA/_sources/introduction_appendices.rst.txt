

Appendices
----------

.. Zakładamy, że dana jest przestrzeń wektorowa :math:`\,V\,` nad ciałem 
   :math:`\,K :\ V(K)\,,\,` gdzie :math:`\,K\,` jest ciałem liczb rzeczywistych :math:`\,R\,`
   bądź ciałem liczb zespolonych :math:`\,C\ ` (omawiane pojęcia i twierdzenia można jednak
   odnieść do dowolnego abstrakcyjnego ciała :math:`\,K).`
   
   Układ elementów pewnego zbioru jest z definicji ciągiem o wyrazach należących do tego zbioru.
   Inaczej niż w przypadku zbioru, kolejność elementów w układzie jest więc istotna.
   Wszystkie rozważane dalej układy skalarów bądź wektorów będą układami skończonymi.

   Dla odróżnienia od zera ciała :math:`\,K\,,\,` wektor zerowy przestrzeni :math:`\,V\,`
   będzie oznaczony :math:`\,\theta\,.`
   
   Odejmowanie w ciele bądź w przestrzeni wektorowej jest z definicji 
   dodawaniem elementu przeciwnego w odpowiedniej grupie addytywnej:

.. math:
   
   \alpha - \beta\ :\,=\ \alpha\,+\,(-\beta)\,,\qquad\alpha,\beta\in K\,;

   v - w\ :\,=\ v\,+\,(-w)\,,\qquad v,w\in V\,.

A1. Basic Properties of a Field
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. Podstawowe stwierdzenia:

   a. :math:`\ \ 1\neq 0\,;`
   b. :math:`\ \ 0\,\cdot\,\alpha\ =\ 0\,,\quad\alpha\in K\,;`
   c. :math:`\ \ (-1)\,\cdot\,\alpha\ =\ -\ \alpha\,,\quad\alpha\in K\,;`
   d. :math:`\ \ \alpha\,\cdot\,\beta\ =\ 0 \quad\Leftrightarrow\quad 
      (\alpha=0\ \ \lor\ \ \beta=0)\,,\qquad\alpha,\,\beta\in K\,.` :math:`\\`

Let the structure :math:`\ (K,\,+\,,\,\cdot\,)\ ` be a field. 
The additive neutral element (zero of the field) and the multiplicative
neutral element (identity of the field) are denoted by :math:`\ 0\ `
and :math:`\ 1,\ ` respectively.

.. admonition:: Proposition 0. 
   
   In a field the zero is always different from the identity:
   :math:`\quad 0\neq 1.`

**Proof.** :math:`\,`
According to the Axiom 2. of the definition of a field, 
the identity is a member of the multiplicative group 
of the field, wherefrom the zero is excluded: 
:math:`\ 1\in K\!\smallsetminus\!\{0\}.\quad\bullet`

.. admonition:: Proposition 1. 
   
   A product of zero and any scalar results in zero:

   .. math::
   
      0\,\cdot\,\alpha\ =\ \alpha\,\cdot\,0\ =\ 0\,,
      \quad\forall\ \alpha\in K\,.`

**Proof.** :math:`\,`
The multiplication being distributive over addition, we may write

.. math::
   
   0\,\cdot\,\alpha\ +\ 0\,\cdot\,\alpha\ =\ 
   (0\,+\,0)\,\cdot\,\alpha\ =\ 0\,\cdot\,\alpha\,.

We add to both sides of the above equation the scalar opposite to
:math:`\ 0\cdot\alpha` : 

.. math::
   
   [\ 0\cdot\alpha\,+\,0\cdot\alpha\,]\ +\ 
   [\,-(\,0\cdot\alpha)\,]\ =\ 0\cdot\alpha\ +\ [\,-(\,0\cdot\alpha)\,]\,,

and make use of the associativity of addition :

.. math::
   
   0\cdot\alpha\,+\,\{\,0\cdot\alpha\ +\ 
   [\,-(\,0\cdot\alpha)\,]\,\}\ =\ 0\cdot\alpha\ +\ [\,-(\,0\cdot\alpha)\,]\,.

A sum of two opposite elements being equal to zero, we get finally

.. math::
   
   0\cdot\alpha\ =\ 0\,.\qquad\bullet

.. admonition:: Proposition 2.
   
   Multiplying a scalar by the opposite of identity yields
   the opposite of that scalar:
   
   .. math::
      
      (-1)\,\cdot\,\alpha\ =\ -\ \alpha\,,\qquad\forall\ \alpha\in K\,. 

**Proof.** :math:`\\`
Due to the distributive property of multiplication 
and the above Proposition 1., we obtain

.. math::
   
   (-1)\cdot\,\alpha\ +\ \alpha\ =\ (-1)\cdot\alpha\ +\ 1\cdot\alpha\ =\ 
   [\,(-1)\,+\,1\,]\,\cdot\,\alpha\ =\ 0\,\cdot\,\alpha\ =\ 0\,.

Thus the scalars :math:`\ \ (-1)\cdot\,\alpha\ \ ` and :math:`\ \alpha\ `
are mutually opposite: 
:math:`\quad (-1)\cdot\,\alpha\ =\ -\,\alpha\,.\quad\bullet`

.. admonition:: Proposition 3.
   
   A product of two scalars is equal to zero if and only if
   at least one factor is zero:
   
   .. math::
      
      \alpha\,\cdot\,\beta\ =\ 0 \quad\Leftrightarrow\quad 
      (\alpha=0\ \ \lor\ \ \beta=0)\,,\qquad\forall\ \ \alpha,\,\beta\in K\,.

**Proof.** :math:`\,`
The implication

.. math::
      
   (\alpha=0\ \ \lor\ \ \beta=0)
   \quad\Rightarrow\quad
   \alpha\cdot\beta\ =\ 0  

is the contents of Proposition 1. validated above. To prove its converse

.. math::
   :label: converse
      
   \alpha\cdot\beta\ =\ 0
   \quad\Rightarrow\quad
   (\alpha=0\ \ \lor\ \ \beta=0) 

let's assume that :math:`\ \ \sim (\alpha=0\ \ \lor\ \ \beta=0)\,,\ `
that is :math:`\ \ (\alpha\neq 0\ \ \land\ \ \beta\neq 0)\,,\ ` 
that is :math:`\ \ \alpha,\beta \in K\!\smallsetminus\!\{0\}\,.`

The set :math:`\ K\!\smallsetminus\!\{0\}\ ` being a multiplicative group,
we infer that :math:`\ \alpha\cdot\beta \in K\!\smallsetminus\!\{0\}\,,\ `
that is :math:`\ \alpha\cdot\beta\neq 0\,.`

Thus we have proved the inference

.. math::

   (\alpha\neq 0\ \ \land\ \ \beta\neq 0)
   \quad\Rightarrow\quad
   \alpha\cdot\beta\neq 0\,,

which is equivalent, by contraposition, to :eq:`converse`. :math:`\quad\bullet` 

.. \begin{array}{lc}      
   & \sim (\alpha=0\ \ \lor\ \ \beta=0)\,, \\
   \text{that is} & \ \ (\alpha\neq 0\ \ \land\ \ \beta\neq 0)\,, \\
   \text{that is} & \alpha,\,\beta \in K\!\smallsetminus\!\{0\}\,.
   \end{array}

A2. Basic Properties of a Vector Space
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Subtraction in a field :math:`\,K\ ` or in a vector space :math:`\,V\,` 
is by definition the addition :math:`\\` 
of an opposite element within an appropriate additive group:

.. math::
   :label: subtract
   
   \alpha - \beta\ :\,=\ \alpha\,+\,(-\beta)\,,
   \qquad\forall\ \ \alpha,\beta\in K\,;

   v - w\ :\,=\ v\,+\,(-w)\,,\qquad\forall\ \ v,w\in V\,.

Suppose :math:`\,V\,` is a vector space over a field :math:`\,K.\ `
The symbols :math:`\ 0\ ` and :math:`\ \theta\ ` denote :math:`\\`
the zero scalar (usually the number :math:`\,0`) :math:`\,` and :math:`\,`
the zero vector, :math:`\,` respectively.

.. admonition:: Proposition 0. 
   
   A product of the zero scalar and any vector equals the zero vector, 
   :math:`\\`
   a product of any scalar and the zero vector results in the zero vector :

   .. math::
   
      0\cdot v\,=\,\theta\,,\quad\alpha\cdot\theta\,=\,\theta\,,
      \qquad\forall\ \alpha\in K,\ \ \forall\ v\in V.
   
**Proof.** :math:`\ ` 
The scalar multiplication being distributive over addition, we get

.. math::

   0\cdot v\,+\,0\cdot v\ \,=\ \,(0+0)\cdot v\ \,=\ \,0\cdot v\,.

Now we add to both sides of the above equation 
the vector opposite to :math:`\,0\cdot v\,`:

.. math::

   [\,0\cdot v\,+\,0\cdot v\,]\,+\,[\,-(0\cdot v)\,]\ \,=\ \,
   0\cdot v\,+\,[\,-(0\cdot v)\,]\,.

Using the definition :eq:`subtract` of vector subtraction 
and taking :math:`\\` into account 
the associativity of vector addition, we get

.. math::

   0\cdot v\,+\,[\,0\cdot v\,-\,0\cdot v\,]\ \,=\ \,0\cdot v\,-\,0\cdot v\,.

A difference of two identical vectors being the zero vector, we obtain

.. math::

   0\cdot v\,+\,\theta\ \,=\ \,\theta\,.

The vector :math:`\,\theta\,` is the additive neutral element, hence finally

.. math::

   0\cdot v\ =\ \theta\,.\qquad\bullet

The proof of the second part of the proposition goes along similar lines:

.. math::
   
   \alpha\cdot\theta\,+\,\alpha\cdot\theta\ \,=\ 
   \,\alpha\cdot(\theta+\theta)\ =\ \alpha\cdot\theta\,,
   
   \left[\,\alpha\cdot\theta\,+\,\alpha\cdot\theta\,\right]\,+\,\left[\,-(\alpha\cdot\theta)\,\right]\ \,=\ \,
   \alpha\cdot\theta\,+\,\left[\,-(\alpha\cdot\theta)\,\right]\,,

   \alpha\cdot\theta\,+\,\left[\,\alpha\cdot\theta\,-\,\alpha\cdot\theta\,\right]\ =\ 
   \alpha\cdot\theta\,-\,\alpha\cdot\theta\,,

   \alpha\cdot\theta\,+\,\theta\ =\ \theta\,,

   \alpha\cdot\theta\,=\,\theta\,.\qquad\bullet

.. admonition:: Proposition 1. 
   
   The product of a vector :math:`\,v\,` with a scalar opposite to 
   :math:`\,\alpha\,` equals :math:`\\` 
   the product of the vector opposite to 
   :math:`\,v\,` with the scalar :math:`\,\alpha\,` and equals :math:`\\` 
   the vector opposite to the product of :math:`\,\alpha\,` and :math:`\,v\,:`

   .. math::
         
      (-\alpha)\cdot v\ =\ \alpha\cdot (-v)\ =\,-\,(\alpha\cdot v)\,,
      \qquad\forall\ \alpha\in K,\ \ \forall\ v\in V.

**Proof.** :math:`\ `
Making use of the previous Proposition 0. we may write 

.. math::

   (-\alpha)\cdot v \,+\, \alpha\cdot v\ \,=\ \,[\,(-\alpha) + \alpha\,]\cdot v\ \,=\ \,
   0\cdot v\ =\ \theta\,;

   \alpha\cdot (-v)\,+\,\alpha\cdot v\ \,=\ \,\alpha\cdot[\,(-v)+v\,]\ \,=\ \,
   \alpha\cdot\theta\ =\ \theta\,.

Thus the vectors :math:`\ (-\alpha)\cdot v\ ` and :math:`\ \alpha\cdot v\,,\ `
as well as :math:`\ \alpha\cdot (-v)\ ` and :math:`\ \alpha\cdot v\,,\ ` 
are mutually opposite:

.. math::

   (-\alpha)\cdot v\ =\ 
   -\,(\alpha\cdot v)\,,\qquad\alpha\cdot (-v)\ =\ 
   -\,(\alpha\cdot v)\,.\qquad\bullet

**Corollary.** 
:math:`\ ` Inserting :math:`\,\alpha = 1\,` 
we get: :math:`\quad (-1)\,v\,=\,-\,v\,,\quad\forall\ v\in V.`

.. admonition:: Proposition 2.
   
   The scalar multiplication of vectors is distributive :math:`\\`
   both over the scalar and over the vector subtraction :

   .. math::
   
      (\alpha-\beta)\cdot v\ =\ \alpha\cdot v\,-\,\beta\cdot v\,,
      \qquad\forall\ \ \alpha,\beta\in K,\ \ \forall\ v\in V\,;

      \alpha\cdot (v-w)\ =\ \alpha\cdot v\,-\,\alpha\cdot w\,,
      \qquad\forall\ \ \alpha\in K,\ \ \forall\ \ v,w\in V\,.

**Proof.** :math:`\ ` 
The proposition results from the definition :eq:`subtract` of subtraction and
the distributivity of scalar multiplication over addition, as well as from 
the above Proposition 1.:

.. math::

   (\alpha-\beta)\cdot v\ =\ [\,\alpha + (-\beta)\,]\cdot v\,=\,
   \alpha\cdot v\,+\,[\,(-\beta)\cdot v\,]\,=\,
   \alpha\cdot v\,+\,[-(\beta\cdot v)\,]\,=\,
   \alpha\cdot v\,-\,\beta\cdot v\,;

   \alpha\cdot (v-w)\,=\,\alpha\cdot [\,v + (-w)\,]\,=\,
   \alpha\cdot v\,+\,[\,\alpha\cdot (-w)\,]\,=\,
   \alpha\cdot v\,+\,[-(\alpha\cdot w)\,]\,=\,
   \alpha\cdot v\,-\,\alpha\cdot w.

.. admonition:: Proposition 3.
   
   A product of a scalar and a vector is equal to the zero vector :math:`\\`
   if and only if
   the scalar is zero or the vector is the zero vector:

   .. math::
      :label: fourth
   
      \alpha\cdot v\,=\,\theta\quad\Leftrightarrow\quad\
      \left(\ \alpha\,=\,0\ \ \lor\ \ v\,=\,\theta\ \right)\,,
      \qquad\forall\ \alpha\in K,\ \ \forall\ v\in V.

**Proof.** :math:`\\`
The equivalence is decomposed into a conjunction of two implications 
to be proved separately.

:math:`\Rightarrow\ :\ \ ` 
We assume that :math:`\ \ \alpha\cdot v\,=\,\theta\ \ `
and have to show that :math:`\ \ \alpha\,=\,0\ \ ` 
or :math:`\ \ v\,=\,\theta\,.` 

Obviously :math:`\ \ \alpha = 0\ \ ` or :math:`\ \ \alpha\neq 0\,.`

If :math:`\ \,\alpha = 0\,,\ ` the disjunction on the right-hand side 
of :eq:`fourth` is true.

If :math:`\ \,\alpha\neq 0\,,\ \ ` then :math:`\ \,\alpha\ `
is invertible. Multiplying both sides of the assumption by  
:math:`\,\alpha^{-1}\ ` we get

.. math::
   
   \alpha^{-1}\cdot(\alpha\cdot v)\ =\ \alpha^{-1}\cdot\theta\,.

But :math:`\ \ \alpha^{-1}\cdot(\alpha\cdot v)\ =\ 
(\alpha^{-1}\,\alpha)\cdot v\ =\ 1\cdot v\ =\ v\,,\ \,`
and on the other hand :math:`\ \ \alpha^{-1}\cdot\theta\ =\ \theta\,.`

Thus :math:`\ \ v\,=\,\theta\ \ ` and the disjunction in :eq:`fourth` 
is again true.

:math:`\Leftarrow\ :\ \ ` Now we assume that 
:math:`\ \,\alpha\,=\,0\ \ ` or :math:`\ \ v\,=\,\theta\ \ `
and have to deduce that :math:`\ \,\alpha\cdot v\,=\,\theta\,.`

If :math:`\ \alpha\,=\,0\,,\ \,` 
then :math:`\ \alpha\cdot v\ =\ 0\cdot v\ =\ \theta\,,\ \ `
and if :math:`\ v\,=\,\theta\,,\ \,` 
then :math:`\ \,\alpha\cdot v\ =\ \alpha\cdot \theta\ =\ \theta\,.`

In both cases :math:`\ \,\alpha\cdot v\,=\,\theta\,.\qquad\bullet` 

A3. Criteria for substructures
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We shall here rewrite and prove in detail the (mentioned in a previous section)
criteria for subsets of the appropriate underlying sets to be subgroups 
or subspaces.

:math:`\ `

.. admonition:: Criterion for a subgroup. :math:`\\` 
   
   Let :math:`\ (G,\;\bot\,)\ \,` be a group,
   :math:`\ \,\emptyset\neq H\,\subset G\,.\ `    
   Then :math:`\ H<G\ ` if and only if 
   
   .. math::
      :label: crit_group
      
      a,b\,\in\, H\quad \Rightarrow\quad
      \left(\ a\;\bot\;b\ \in\ H\ \ \land\ \ a^{-1}\,\in\,H \ \right)
      \qquad\forall\ \ a,b \in G\,.

**Proof.** :math:`\\`
The condition :math:`\,` :eq:`crit_group` :math:`\,` is obviously 
a necessary condition for a subset :math:`\,H\,` of :math:`\,G\,` 
to be a subgroup.

To prove the sufficiency, we assume that the condition :math:`\,` 
:eq:`crit_group` :math:`\,` is true and  check whether the consecutive 
axioms from the definition of a group are satisfied for :math:`\,H\,.`

0. :math:`\,` The condition :eq:`crit_group` explicitly 
   asserts that the set :math:`\,H\,` is closed under the operation 
   :math:`\,\bot\,.`

1. :math:`\,` The operation :math:`\,\bot\,,\ ` associative in :math:`\,G\,,\ `
   is also associative in :math:`\,H\subset G\,.`

2. | :math:`\,` To ensure that the identity :math:`\ e\ ` belongs to 
     :math:`\,H,\,` we note that a (non-empty) set :math:`\,H\,` contains 
   | :math:`\,`  at least one element :math:`\,a\,.\ ` 
     Due to :eq:`crit_group`, also :math:`\,a^{-1}\ ` as well as 
     :math:`\,a\,\bot\,a^{-1}=\,e\ ` belong to :math:`\,H\,.`

3. :math:`\,` The condition :math:`\,` :eq:`crit_group` :math:`\,` explicitly 
   guarantees that :math:`\,H\,` contains inverses of all its elements. 

:math:`\ `

.. admonition:: Criterion for a vector subspace. :math:`\\` 
   
   Let :math:`\ \,\emptyset\neq W \subset V(K)\,.\ ` 
   Then :math:`\ W < V\ ` if and only if :math:`\,`
   for all :math:`\ \alpha\in K\,,\ w_1,\,w_2 \in V :`

   
   .. math::
      :label: crit_space
      
      w_1,w_2\,\in\,W \quad\Rightarrow\quad
      \left(\ w_1+w_2\,\in\,W\ \ \land\ \ \alpha\,w_1\,\in\,W \ \right)\,.

**Proof.** :math:`\,`
We assume that the condition :math:`\,` :eq:`crit_space` :math:`\,` 
is true and check whether the consecutive axioms from the definition 
of a vector space hold true for the set :math:`\,W`.

.. To prove that the condition :eq:`crit_space` is sufficient for :math:`\,W\,` 
   to be a subspace of :math:`\,V,\ ` we check the consecutive axioms from 
   the definition of a vector space.

0. | The condition :math:`\,` :eq:`crit_space` :math:`\,` explicitly affirms 
     the closure of :math:`\,W\ ` under vector addition 
   | and scalar multiplication.

1. | To show that :math:`\ (W,\ +\,)\ ` is a group (a subgroup of 
     :math:`\ (V,\ +\,)\,`), we rewrite the criterion 
   | :eq:`crit_group` :math:`\,` adapted to the present context. 
     Namely, the condition for :math:`\ W<V\ ` is:
   
   :math:`\ \,w_1,\,w_2\,\in\,W\quad \Rightarrow\quad
   \left(\ w_1 +\,w_2\ \in\ W\ \ \land\ \ -\,w_1\,\in\,W \ \right)\,,
   \qquad\forall\ \ w_1,w_2\in V.`

   Inserting :math:`\ \alpha = -1\ ` in :math:`\,` :eq:`crit_space` :math:`\,` 
   and taking into account that :math:`\ \,(-1)\,w = -w\,,` :math:`\\` 
   we see that the above condition is fulfilled.

.. 2. :math:`\,(K,\,+\,,\,\cdot\,)\ \ ` is a field.

3. 4. 5. The distributivity and compatibility laws, being satisfied 
   in the whole set :math:`\ V,\ ` obviously hold true also in 
   :math:`\ W\subset V.`

Thus we have proved that the condition :eq:`crit_space` is sufficient 
for :math:`\,W\,` to be a subspace of :math:`\,V.\ \bullet` 

.. :math:`\\` 
   Its necessity is evident and does not need detailed explanation. 

:math:`\ `

.. admonition:: Criterion for a subalgebra. :math:`\\` 
   
   A subset :math:`\ B\ ` of the algebra :math:`\ A\ ` 
   over a field :math:`\ K\ ` is a subalgebra if and only if :math:`\\` 
   for arbitrary 
   :math:`\ x_1,x_2\in A\ ` and :math:`\ \alpha\in K:` 

   .. math::
      :label: crit_alg
      
      x_1,x_2\,\in\,B \quad\Rightarrow\quad
      \left(\ x_1+x_2\,\in\,B\ \ \land\ \ x_1\,x_2\,\in B
      \,\ \ \land\ \ \alpha\,x_1\,\in\,B\ \right)\,.

**Proof** :math:`\,` is similar to that given above for a subspace
and we render it in short. 
Putting :math:`\,\alpha = -1\ ` in :eq:`crit_alg` we see that :math:`\ B\ `
is a subgroup of the additive group of the ring :math:`\ A\ ` 
and is a subgroup  of the additive group of the vector space :math:`\ A.\ ` 
The associativity, distributivity and compatibility conditions 
are in :math:`\ B\ `  trivially fulfilled, whereby the set :math:`\ B\ ` 
is a ring (subring of the ring :math:`\ A`) and vector space 
(subspace of the space :math:`\ A`), thus satisfying all axioms 
for an algebra. :math:`\quad\bullet`

A4. Basis and Dimension of a Vector Space
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Proposition 1.
   
   If a vector space has an :math:`\,n`-element basis, :math:`\\`
   then every set of more than :math:`\,n\,` vectors is linearly dependent.

**Proof.**

Let's assume that the set :math:`\ B\,=\,\{\,v_1,\,v_2,\,\ldots,\,v_n\}\ ` 
is a basis of the vector space :math:`\,V(K).\ `

We have to show that for :math:`\ p>n\ ` every set
:math:`\ C = \{\,w_1,\,w_2,\,\ldots,\,w_p\}\ ` is linearly dependent.

This condition states that there exists a non-trivial linear combination
of vectors :math:`\ w_1,\,w_2,\,\ldots,\,w_p\,,\ ` equal to the zero vector
:math:`\,\theta,\ \,` to wit, that the equation

.. math::
   :label: eqn_theta
   
   c_1\ w_1\ +\ c_2\ w_2\ +\ \ldots\ +\ c_p\ w_p\ =\ \theta

for the coefficients :math:`\ c_1,\,c_2,\,\ldots,\,c_p\in K\ \,` 
has non-zero solutions.

Each vector :math:`\ w_j\in C\ ` can be expressed as a linear combination 
of basic vectors from  :math:`\ B:`

.. math::
   :label: eqn_wj
   
   w_j\ =\ \sum_{i\,=\,1}^n\ a_{ij}\,v_i\,,\qquad j=1,2,\ldots,p.

Here :math:`\ a_{1j},\,a_{2j},\,\ldots,\,a_{nj}\ ` are coordinates
of the vector :math:`\ w_j\ ` in the basis :math:`\ B,\ \ j=1,2,\ldots,p.`

Now we insert :eq:`eqn_wj` into :eq:`eqn_theta` and write the left-hand side
of Eq. :eq:`eqn_theta` as a linear combination of basic vectors:

.. math::
   
   \sum_{j\,=\,1}^p\ c_j\,w_j\ \ =\ \ 
   \sum_{j\,=\,1}^p\ c_j\;\left(\ \sum_{i\,=\,1}^n\ a_{ij}\,v_i\right)\ \ =\ \  
   \sum_{i\,=\,1}^n\ \left(\ \sum_{j\,=\,1}^p\ a_{ij}\,c_j\right)\ v_i\ \ =

   \ \ =\ \ 
   \left(\ \sum_{j\,=\,1}^p\,a_{1j}\,c_j\right)\ v_1\ \ +\ \ 
   \left(\ \sum_{j\,=\,1}^p\,a_{2j}\,c_j\right)\ v_2\ \ +\ \ 
   \dots\ \ +\ \ 
   \left(\ \sum_{j\,=\,1}^p\,a_{nj}\,c_j\right)\ v_n\ \ =\ \ \theta\,. 
   
The vectors :math:`\ v_1,\,v_2,\,\ldots,\,v_n\ ` being linearly
independent, we come to the system of equations

.. math::
   
   \sum_{j\,=\,1}^p\ a_{ij}\ c_j\ \,=\ \,0\,,\qquad i=1,2,\ldots,n\,,

which has the expanded form

.. math::
   
   \begin{array}{l}
   a_{11}\ c_1\ +\ \,a_{12}\ c_2\ +\ \,\dots\ \,+\ \,a_{1p}\ c_p\ \,=\ \ 0 \\
   a_{21}\ c_1\ +\ \,a_{22}\ c_2\ +\ \,\dots\ \,+\ \,a_{2p}\ c_p\ \,=\ \ 0 \\
   \ \ \dots\qquad\quad\dots\qquad\,\dots\qquad\ \dots\qquad\ \dots\quad \\
   a_{n1}\ c_1\ +\ \,a_{n2}\ c_2\ +\ \,\dots\ \,+\ \,a_{np}\ c_p\ \,=\ \ 0
   \end{array}
   \,,

This is a homogeneous system of :math:`\,n\,` linear equations 
with :math:`\,p\,` unknowns :math:`\ c_1,\,c_2,\,\ldots,\,c_p\,,\ ` :math:`\\`
where the number of equations is less than the number of unknowns:
:math:`\ \,n<p.`

Such a system of linear equations has always non-zero solutions 
(see Chapter 8.). :math:`\quad\bullet`

.. Taki układ ma rozwiązania niezerowe.
   Rzeczywiście, rozwiązanie układu metodą eliminacji Gaussa polega na 
   zastosowaniu operacji elementarnych na wierszach macierzy współczynników 
   w celu doprowadzenia jej do zredukowanej postaci schodkowej.
   Następnie niewiadome, odpowiadające kolumnom bez jedynek wiodących 
   przyjmuje się za dowolne parametry, przez które wyrażają się pozostałe 
   niewiadome (odpowiadające kolumnom z jedynkami wiodącymi).
   Liczba parametrów jest różnicą liczby niewiadomych i liczby jedynek 
   wiodących, przy czym ta druga liczba (równa rzędowi macierzy współczynników) 
   jest nie większa od liczby równań. Jeżeli równań jest mniej niż niewiadomych, 
   to liczba parametrów jest dodatnia, a to właśnie oznacza istnienie 
   rozwiązań niezerowych. :math:`\\`

.. admonition:: Corollary 1.
   
   If an :math:`\,n`-element set :math:`\,B\subset V\,` is a basis
   of the vector space :math:`\,V,\ ` :math:`\\`
   then every basis of :math:`\,V\,` contains :math:`\,n\ ` elements.

.. If a vector space has an :math:`\,n`-element basis,
   then every its basis contains :math:`\,n\ ` elements.

**Proof.** :math:`\ `
Suppose that a space :math:`\,V\,` has two bases: :math:`\\`
a basis :math:`\,B\,` with :math:`\,n\,` elements, :math:`\,` and 
a basis :math:`\,C\,` with :math:`\,m\,` elements.

If :math:`\,n>m,\ ` the basis :math:`\,B\,` 
would be linearly dependent (contradiction). :math:`\,`  
Thus :math:`\ \,n \le m.`

If :math:`\,m>n,\ ` the basis :math:`\,C\,` 
would be linearly dependent (contradiction). :math:`\,` 
Thus :math:`\ \,m \le n.`

So simultaneously :math:`\ \,n\le m\ \,` and :math:`\ m\le n,\ ` 
hence :math:`\ \,m=n.` :math:`\quad\bullet`

.. Wniosek 1. pozwala na wprowadzenie pojęcia wymiaru przestrzeni wektorowej 
   jako liczby elementów dowolnej skończonej bazy przestrzeni 
   (o ile taka skończona baza istnieje). :math:`\\`

.. The corollary permits to define a dimension of a vector space
   as the number of vectors of any finite basis 
   (in the case when that such a finite basis exists).

A dimension of a vector space being defined,
the above Proposition 1. may be rephrased as

.. admonition:: Corollary 2.

   In an :math:`\,n`-dimensional vector space 
   any set of more than :math:`\,n\,` vectors is linearly dependent.
   
.. It's worth to write down the very useful

When we have to check whether a given set of vectors is a basis
of a vector space, it's worth to make use of the following

.. admonition:: Corollary 3.

   In an :math:`\,n`-dimensional vector space 
   every linearly independent set of :math:`\,n\,` vectors
   is a basis.
   
**Proof.** :math:`\,`
It's enough to note that, in view of Corollary 2., 
in an :math:`\,n`-dimensional vector space 
every linearly independent set of :math:`\,n\,` vectors
is a maximal linearly independent set. Furthermore, 
every maximal linearly independent set of vectors is a basis.
:math:`\quad\bullet`

A5. Parity of a Permutation
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Given a symmetric group :math:`\,S_n\,,\ n\geq 2,\ ` 
we define the auxiliary :math:`\\` 
function :math:`\,P\ ` that ascribes integer numbers to permutations:

.. math::
   
   P:\quad S_n\ni\,\sigma =\ 
   \left(\begin{array}{cccccc} 
                1 &   2 &   3 & \dots &   n \\
              s_1 & s_2 & s_3 & \dots & s_n 
                 \end{array}\right)
   \ \ \rightarrow\ \ 
   P(\sigma)\ :\,= \!\!\!\prod_{1\,\leq\,i\,<\,j\,\leq\,n} \!\!\!
   \left(s_j-\,s_i\right)\ \ \in\ \ Z\,.

For example, :math:`\,` if :math:`\,n=3,\ \ ` then
:math:`\ \ \{\,(i,j):\ \ 1 \leq i<j \leq 3\,\}\ =\ 
\{\,(1,2),\,(1,3),\,(2,3)\,\}\,,\ \ ` and 

.. math::
   
   P\left(\begin{array}{ccc} 
   1 & 2 & 3 \\ s_1 & s_2 & s_3 
   \end{array}\right)\ \ =\ \ 
   (s_2-\,s_1)(s_3-\,s_1)(s_3-\,s_2)\,.

In particular,
:math:`\quad P\left(\begin{array}{ccc} 
1 & 2 & 3 \\ 2 & 1 & 3 \end{array}\right)
\ =\ (1-2)(3-2)(3-1)\ =\ (-1)(+1)(+2)\ =\ -2\,.`

:math:`\ `

We notice at once two simple properties of the function :math:`\,P(\sigma).`

1. Permutations are bijections, whereby
   
   .. math::
      
      i<j\quad\Rightarrow\quad 
      s_i \neq s_j\,,\qquad\forall\ \ i,j\in\{\,1,\,2,\,\ldots,\,n\}.
   
   A product of non-zero factors being also non-zero, we infer that
   the function :math:`\,P(\sigma)\,` assumes only non-zero integer values:
   
   .. math::
      :label: neq_0
      
      \blacktriangleright\quad 
      P(\sigma) \neq 0\,,\qquad\forall\ \sigma\in S_n\,.

2. If :math:`\ \,\sigma\ =\ \text{id}\ =\ 
   \left(\begin{array}{cccc}
   1 & 2 & \ldots & n \\ 
   1 & 2 & \ldots & n 
   \end{array}\right),\ \ `
   then :math:`\ \,\sigma(i)\equiv s_i = i,\ \ i=1,2,\ldots,n.\ \,`
   Therefore
   
   .. math::
      :label: gt_0
   
      \blacktriangleright\quad 
      P(\text{id})\ \ =\ 
      \!\!\!\prod_{1\,\leq\,i\,<\,j\,\leq\,n} \!\!\! (j-i)
      \ \ >\ \ 0\,,
   
   since a product of positive integers is a positive integer, too.

The next property is more elaborate and we shall formulate it as 

.. admonition:: Lemma. :math:`\,`

   Let :math:`\ \sigma\in S_n\,,\ n\geq 2;\ \ ` 
   :math:`\ k,l\in\{1,2,\ldots,n\},\ \ k<l\,.\ `
   
   Then for any transposition :math:`\,\tau_{kl}\equiv (k,l)\,:\quad`
   :math:`\,P(\sigma\ \tau_{kl})\ =\ -\,P(\sigma)\,.`

**Proof.** :math:`\,`

.. Let 
   :math:`\ \sigma\ =\ \left(\begin{array}{cccc}
   1 & 2 & \ldots & n \\ s_1 & s_2 & \ldots & s_n 
   \end{array}\right).\ \ ` 

.. math:
   
   \sigma\,\tau_{kl}\ =\ 
   \left(\begin{array}{ccccccc}
     1 & \ldots &   k & \ldots &   l & \ldots &   n \\
   s_1 & \ldots & s_k & \ldots & s_l & \ldots & s_n
   \end{array}\right)
   \left(\begin{array}{ccccccc}
   1 & \ldots & k & \ldots & l & \ldots & n \\
   1 & \ldots & l & \ldots & k & \ldots & n
   \end{array}\right)\ =
   
   =\ \left(\begin{array}{ccccccc}
     1 & \ldots &   k & \ldots &   l & \ldots &   n \\
   s_1 & \ldots & s_l & \ldots & s_k & \ldots & s_n
   \end{array}\right)\,.

.. math:
   
   \begin{array}{rcl}
   \sigma\,\tau_{kl} & = & 
   \left(\begin{array}{ccccccc}
     1 & \ldots &   k & \ldots &   l & \ldots &   n \\
   s_1 & \ldots & s_k & \ldots & s_l & \ldots & s_n
   \end{array}\right)
   \left(\begin{array}{ccccccc}
   1 & \ldots & k & \ldots & l & \ldots & n \\
   1 & \ldots & l & \ldots & k & \ldots & n
   \end{array}\right)\ =
   \\[12pt]  
   & = & \left(\begin{array}{ccccccc}
     1 & \ldots &   k & \ldots &   l & \ldots &   n \\
   s_1 & \ldots & s_l & \ldots & s_k & \ldots & s_n
   \end{array}\right)\,.
   \end{array}

Let
:math:`\ \ \sigma\ =\ 
\left(\begin{array}{ccccccccc}
1 & 2 & \ldots & k & \ldots & l & \ldots & n-1 & n \\
s_1 & s_2 & \ldots & s_k & \ldots & s_l & \ldots & s_{n-1} & s_n
\end{array}\right)\,.`

Then
:math:`\ \ \sigma\ \tau_{kl}\ =\ 
\left(\begin{array}{ccccccccc}
1 & 2 & \ldots &   k & \ldots &   l & \ldots & n-1 &  n \\
s_1 & s_2 & \ldots & s_l & \ldots & s_k & \ldots & s_{n-1} & s_n
\end{array}\right)\,.`

First, let's assume that :math:`\ l=k+1.\ ` Thus

:math:`\sigma\ =\ 
\left(\begin{array}{cccccccc}
1 & 2 & \ldots & k & k+1 & \ldots & n-1 & n \\
s_1 & s_2 & \ldots & s_k & s_{k+1} & \ldots & s_{n-1} & s_n
\end{array}\right)\,,\ `

:math:`\ \sigma\ \tau_{\,k,\,k+1}\ =\ 
\left(\begin{array}{cccccccc}
1 & 2 & \ldots & k & k+1 & \ldots & n-1 & n \\
s_1 & s_2 & \ldots & s_{k+1} & s_k & \ldots & s_{n-1} & s_n
\end{array}\right)\,;\ `

:math:`\ P(\sigma)\ =\ 
(s_2-\,s_1)\,\ldots\,(s_{k+1}-\,s_k)\,\ldots\,(s_n-\,s_{n-1})\,,\ `

:math:`\ P(\sigma\ \tau_{\,k,\,k+1})\ =\ 
(s_2-\,s_1)\,\ldots\,(s_k-\,s_{k+1})\,\ldots\,(s_n-\,s_{n-1})\,.\ `

The two products, 
:math:`\,P(\sigma)\,` and :math:`\,P(\sigma\ \tau_{\,k,\,k+1})\,,\ `
differ only in one factor: :math:`\ (s_{k+1}-\,s_k)\ ` has been replaced
by :math:`\ (s_k-\,s_{k+1})\ \,=\ \,-\ (s_{k+1}-\,s_k)\,.\ `
This substitution results in change of sign of the whole expression.

That way we have proved the Lemma for an adjacent transposition
:math:`\,\tau_{\,k,\,k+1}\,.\ ` Since every transposition :math:`\,\tau_{kl}\,`
can be represented as a product of an odd number of adjacent ones, 
the Lemma holds true in general. :math:`\quad\bullet`

.. Lemma is proved in general.
   the proof has been done in general.

Now we are in position to write down and prove 
the main statement of this section.

.. admonition:: Theorem. :math:`\,`

   Suppose a permutation :math:`\ \sigma\in S_n\,,\ n\geq 2,\ \ ` 
   can be decomposed into a product of transpositions in two 
   different ways:
   :math:`\ \ \sigma\ =\ \tau_1\,\tau_2\,\dots\,\tau_r\ =\ 
   \tau'_1\ \tau'_2\ \dots\ \tau'_s\,.\ `


   .. math:
   
      \sigma\ =\ \tau_1\,\tau_2\,\dots\,\tau_r\ =\ 
      \tau'_1\,\tau'_2\,\dots\,\tau'_s\,.

   Then the numbers, :math:`\,r,s,\ ` of factors in the decompositions
   are either both odd, or both even (that is, they have the same parity):
   :math:`\ \,(-1)^r\ =\ \,(-1)^s\,.`

.. Then the parity of the number of factors is the same in both decompositions:
   :math:`\ \,(-1)^r\ =\ \,(-1)^s\,.`

**Proof.** :math:`\,`
Using the Lemma and Eq. :eq:`neq_0`, :math:`\,` we obtain

.. math::
   
   P(\sigma)\ =\ P(\text{id}\circ\tau_1\,\tau_2\,\dots\,\tau_r)\ =\ 
   (-1)^r\ P(\text{id})\,,

   P(\sigma)\ =\ P(\text{id}\circ\tau'_1\ \tau'_2\ \dots\ \tau'_s)\ =\ 
   (-1)^s\ P(\text{id})\,;

   (-1)^r\ P(\text{id})\ =\ (-1)^s\ P(\text{id})\,,\quad P(\text{id})\neq 0;

   (-1)^r\ =\ \,(-1)^s\,.\quad\bullet

The Theorem allows to define a sign of a permutation 
:math:`\,\sigma\,` as :math:`\ \text{sgn}\,\sigma = (-1)^r\,,\ ` where 
:math:`\,r\,` is the number of factors in any decomposition of 
:math:`\,\sigma\,`  into a product of transpositions.
Let's note that

.. Another remark stems from Eq. :eq:`gt_0`. :math:`\,` Since

.. math::
   
   P(\sigma)\ \,=\ \,(-1)^r\,P(\text{id})\ \,=\ \,
   \text{sgn}\,\sigma\,\cdot\,P(\text{id}),

where, according to Eq. :eq:`gt_0`, :math:`\ P(\text{id})>0.\ `

Thus the sign of a permutation :math:`\,\sigma\,` is the sign of 
the integer number :math:`\,P(\sigma):`

.. math::
   
   \text{sgn}\,\sigma = +1\qquad\Leftrightarrow\qquad P(\sigma) > 0\,,

   \text{sgn}\,\sigma = -1\qquad\Leftrightarrow\qquad P(\sigma) < 0\,.

.. :math:`\ \text{sgn}\,\sigma\ ` 






























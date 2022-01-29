
Definitions and Terminology
---------------------------

We start with a general definition of the homomorphism
of algebraic structures.

Suppose we have two sets, each with a binary operation:
:math:`\,(A,\,\bot\,)\ ` and  :math:`\,(A',\,\circ\,).`

A map :math:`\ f:\ A\,\rightarrow\,A'\ \,` is :math:`\,` 
a :math:`\,` *homomorphism*, when it preserves the operations
in the sense that the image of a composition of two elements of 
:math:`\,A\,` is equal to the composition (in the set :math:`\,A'\,`) 
of their images:

.. math::
   :label: hom
   
   f(a_1\,\bot\;a_2)\ =\ f(a_1)\,\circ\,f(a_2)\,,
   \qquad\forall\ a_1,a_2\in A\,.

In the case of several internal operations defined in the two sets,
the condition :eq:`hom` should be fulfilled for each pair of corresponding
operations. Homomorphisms and isomorphisms (i.e. bijective homomorphisms)
of groups, rings and fields are defined just that way.

A vector space contains the external operation of multiplying vectors by
scalars. The properly modified definition reads as follows.

.. admonition:: Definition.
   
   | Let :math:`\ V\ ` and :math:`\ W\ ` be two vector spaces over (the same) field
     :math:`\,K.` 
   | The map :math:`\ \,F:\ V\rightarrow W\ \,` is the 
     :math:`\,` *homomorphism* :math:`\,` 
     :math:`\,` (*linear transformation*) :math:`\,` 
   | of the space :math:`\ V\ ` into the space :math:`\ W,\ \ ` 
     when it is simultaneously:

   1. | additive: :math:`\quad F(v_1+v_2)\ =\ 
        F(v_1)+F(v_2)\,,\qquad\forall\ \ v_1,v_2\in V\ `
      | (the image of a sum of two vectors equals the sum of their images)
   2. | homogeneous: :math:`\quad F(a\,v)\,=\,a\,F(v)\,,
        \qquad\forall\ a\in K,\ \forall\ v\in V`
      | (multiplying a vector :math:`\,v\,` by a number :math:`\,\alpha\,`
        multiplies by :math:`\,\alpha\,` the image of :math:`\,v`).

The conditions of additivity and homogeneity can be encapsulated
in the single equation:

.. math::
   :label: hom_suc
   
   F(a_1\,v_1+a_1\,v_2)\ \,=\ \,a_1\,F(v_1)\,+\,a_2\,F(v_2)\,,\qquad 
   \forall\ \ a_1,a_2\in K,\ \forall\ \ v_1,v_2\in V\,.

(the image of a linear combination of two vectors equals the same combination
of their images).

By induction, one may generalize Eq. :eq:`hom_suc` to the case of a linear
combination of any finite number of vectors.

The addition and scalar multiplication of mappings being defined 
in a natural way, the set of all linear transformations of the vector space
:math:`\ V\ ` into the space :math:`\ W\ ` turns out to be a vector space 
itself. To deal with this matter in details, we use the following notation:

:math:`\text{Map}(V,W)\ ` - :math:`\,` the set of all maps 
from the vector space :math:`\,V\ ` to the vector space :math:`\,W;`

:math:`\text{Hom}(V,W)\ ` - :math:`\,` the set of all *linear* maps 
(homomorphisms) from :math:`\,V\ ` into :math:`\,W.`

Verifying the postulates in the definition of vector space, one may prove

.. admonition:: Lemma 1. :math:`\\`
   
   If :math:`\ V\ ` and :math:`\ W\ ` are vector spaces over the field
   :math:`\,K,\ ` then the set :math:`\ \text{Map}(V,W)\ ` :math:`\\`
   with the operations of addition and scalar multiplication:

   .. math::
      :label: oper_hom
   
      \begin{array}{lcl}
      (F_1+F_2)(v)\ :\,=\ F_1(v)\,+\,F_2(v) 
      & \qquad & 
      \forall\ F_1,F_2,F\in \text{Map}(V,W)\,, \\
      (a\,F)(v)\ :\,=\ a\,F(v)              
      & \qquad &
      \forall\ \,a\in K,\ \ \forall\ v\in V\,,
      \end{array}

   is also a vector space over the field :math:`\,K.`

(the statement remains true for a set :math:`\ \text{Map}(X,W),\ `
where :math:`\ X\ ` is any given set).

It's also easy to justify

.. admonition:: Lemma 2. :math:`\\`

   If :math:`\ V\ ` and :math:`\ W\ ` are vector spaces over the field
   :math:`\,K,\ ` then the set :math:`\text{Hom}(V,W)\ ` :math:`\\`
   is closed with respect to the addition and the scalar multiplication 
   of mappings. :math:`\\`
   Namely, for any :math:`\ F_1,F_2\in\text{Map}(V,W),\ a\in K:`
   
   .. math::
      
      F_1,\,F_2\in \text{Hom}(V,W)\quad\Rightarrow\quad
      \left[\ (F_1+F_2)\in\text{Hom}(V,W)
      \ \ \wedge\ \ 
      (a\,F_1)\in\text{Hom}(V,W)\ \right]\,.

Therefore, the criterion for a subset of a vector space to be a subspace 
leads to

.. admonition:: Theorem 1. :math:`\\`
   
   Let :math:`\ V\ ` and :math:`\ W\ ` be vector spaces over a field 
   :math:`\,K.\ ` Then the set :math:`\text{Hom}(V,W)\ ` of linear 
   transformations of the space :math:`\ V\ ` into :math:`\ W\ ` is also
   a vector space over :math:`\,K;\ ` moreover, it is a subspace of the
   vector space :math:`\text{Map}(V,W)\ ` of all transformations 
   of :math:`\ V\ ` into :math:`\ W:`

   .. math::
   
      \text{Hom}(V,W)\ <\ \text{Map}(V,W)\,.   

A bijective linear transformation of a space :math:`\ V\ ` 
into a space :math:`\ W\ ` is named an :math:`\,` *isomorphism* :math:`\,` 
of these vector spaces. The collection of all such isomorphisms is denoted
by :math:`\,\text{Iso}(V,W).\ ` :math:`\\`
When :math:`\ \text{Iso}(V,W)\ne\emptyset,\ ` one says that the vector spaces 
:math:`\ V\ ` and :math:`\ W\ ` are :math:`\,` *isomorphic*: 
:math:`\ V\simeq W.`

A linear transformation of the vector space :math:`\ V\ ` into itself
is called an :math:`\,` *endomorphism* :math:`\,` 
or a :math:`\,` *linear operator*. :math:`\,` 
Isomorphism of a space onto itself, i.e. a bijective endomorphism,
is called :math:`\,` *automorphism*. :math:`\,` 
The collections of such transformations are denoted by

.. math::
   
   \text{End}(V)\ :\,=\ \text{Hom}(V,V)\,,\qquad
   \text{Aut}(V)\ :\,=\ \text{Iso}(V,V)\,.

The relations between these notions can be charted by the following scheme,
in which the horizontal right-arrows symbolize the condition of bijectivity,
whereas the vertical down-arrows designate the substitution :math:`\ W=V:`

.. math::
   
   \left.\begin{array}{ccc}
   \text{homo-} & \longrightarrow & \text{iso-}  \\ \\
   \downarrow   &                 & \downarrow   \\ \\
   \text{endo-} & \longrightarrow & \text{auto-} 
   \end{array}\quad\right\}
   \quad\text{-morphism}\,.

In addition to be added and scalar multiplied (Eqs. :eq:`oper_hom`), :math:`\,`
the linear operators in :math:`\ \text{End}(V)\ ` can be composed
according to the rule

.. math::
   
   (F\circ G)(v)\ \,:\,=\ \,
   F\,[\,G(v)\,]\,,\qquad 
   F,\,G\in\text{End}(V),\ \ \forall\ v\in V\,. 

Checking up the postulates in the definition of algebra, one may validate

.. admonition:: Theorem 2.  :math:`\,`
   
   Let :math:`\ V\ ` be a linear space over the field :math:`\ K.`
   Then the set :math:`\ \text{End}(V)\ ` of all linear operators 
   defined on :math:`\ V,\ ` together with the operations of
   adding, scalar multiplying and composing the operators, :math:`\,`
   is a non-commutative algebra over the field :math:`\ K.`

.. Przekształcenie liniowe :math:`F: V\rightarrow W` nazywa się :math:`\,`
   *epimorfizmem liniowym*, :math:`\,` gdy jest surjekcją, 
   tj. odwzorowaniem przestrzeni :math:`V\,` *na* przestrzeń :math:`\,W\,`
   (zbiorem wartości jest cała przestrzeń :math:`\,W`). 
   Natomiast :math:`\,` *monomorfizm liniowy* :math:`\,` jest 
   z definicji przekształceniem liniowym różnowartościowym, 
   czyli injekcją (różnym argumentom odpowiadają różne obrazy).

.. Izomorfizm przestrzeni wektorowych, jako bijekcja, jest jednocześnie
   epimorfizmem i monomorfizmem.

If :math:`\ V\ ` is a vector space over the field :math:`\ K,\ ` 
then the linear transformation :math:`\ f:\ V\rightarrow K,\ ` 
where the field :math:`\ K\equiv K^1\ ` is considered as the one-dimensional
vector space over :math:`\,K,\ ` is called 
:math:`\,` the :math:`\,` *linear functional*.
The set :math:`\ V^\ast :\,=\ \text{Hom}(V,K)\ ` of all linear functionals
defined on the space :math:`\, V,\ \,` is the :math:`\,` *dual space* :math:`\,`
of :math:`\ \,V.\ `
















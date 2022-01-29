
Group of Permutations
---------------------

Definition and Notation
~~~~~~~~~~~~~~~~~~~~~~~

A :math:`\,` *permutation* :math:`\,` of a finite set 
:math:`\,X=\{1,2,\dots,n\}\,` is a (bijective) mapping from :math:`\,X\,` 
onto itself.

The set of all permutations of the set :math:`\,\{1,2,\dots,n\}\,` 
is denoted by :math:`\,S_n\,.`

A convenient way of representing a permutation is the two-line notation:

.. math::
   
   \sigma\ =\ \left(\begin{array}{cccc} 
                        1     &     2     & \dots &     n     \\
                    \sigma(1) & \sigma(2) & \dots & \sigma(n)
                    \end{array}\right)\,,

where in the upper row are listed arguments,
and in the lower row the corresponding images.

Arguments may appear in any order, provided that the respective images
are attached to them. For example, the following permutation can be 
written down in 24 equivalent forms:

.. math::
   
   \left(\begin{array}{cccc} 1 & 2 & 3 & 4 \\
                             3 & 1 & 2 & 4 \end{array}\right)\ =\
   \left(\begin{array}{cccc} 2 & 3 & 4 & 1 \\
                             1 & 2 & 4 & 3 \end{array}\right)\ =\ 
   \left(\begin{array}{cccc} 4 & 1 & 2 & 3 \\
                             4 & 3 & 1 & 2 \end{array}\right)\ =\ \dots

Permutations can be composed as mappings: :math:`\\` 
if :math:`\,\rho,\sigma\in S_n,\ \,` then  
the composition :math:`\,\rho\circ\sigma\,` 
is determined by

.. math::
   :label: compose
   
   (\rho\circ\sigma)(k)\ =\ \rho\,[\,\sigma(k)\,]\,,
   \qquad k\in\{1,2,\dots,n\}\,.

In the two-line notation the rule reads:

.. math::

   \rho\circ\sigma\ =\    
   \left(\begin{array}{cccc} 
      1    &    2    & \dots &    n    \\
   \rho(1) & \rho(2) & \dots & \rho(n)
   \end{array}\right)\ \circ\ 
   \left(\begin{array}{cccc} 
       1     &     2     & \dots &     n     \\
   \sigma(1) & \sigma(2) & \dots & \sigma(n)
   \end{array}\right)\ =

   =\ 
   \left(\begin{array}{cccc} 
                 1   &               2   & \dots &               n   \\
   \rho\,[\sigma(1)] & \rho\,[\sigma(2)] & \dots & \rho\,[\sigma(n)]
   \end{array}\right)\,.

It's worth pointing out the order of operations: :math:`\\`
for each number :math:`\,k\in\{1,2,\dots,n\}\,` 
we first determine the image of :math:`\,k\,` 
under permutation :math:`\,\sigma,\ ` :math:`\\` 
and then the image of the obtained result 
under permutation :math:`\,\rho.\ ` For example,
 
.. math::
   
   \left(\begin{array}{ccccc} 1 & 2 & 3 & 4 & 5 \\
                              4 & 1 & 3 & 5 & 2 \end{array}\right)\ \circ\ 
   \left(\begin{array}{ccccc} 1 & 2 & 3 & 4 & 5 \\
                              2 & 5 & 1 & 3 & 4 \end{array}\right)\ =\ 
   \left(\begin{array}{ccccc} 1 & 2 & 3 & 4 & 5 \\
                              1 & 2 & 4 & 3 & 5 \end{array}\right)\,.

   \;

**Theorem 1.** :math:`\,` 
The structure :math:`\ \left(\,S_n,\,\circ\,\right)\ ` is a group
:math:`\ (n\in N).`

**Proof.** :math:`\,` 
We shall check the consecutive axioms in the definition of a group.

0. | :math:`\,` A composition of two permutations in :math:`\,S_n\,` 
     is also a permutation belonging to :math:`\,S_n.\,`
   | :math:`\,` Therefore, the composition :math:`\ \circ\ ` 
     is an internal operation in the set :math:`\,S_n.`

1. | :math:`\,` The composition of permutations, as composition of mappings,
     is associative. 
   | :math:`\,` Indeed, :math:`\,` if :math:`\,\rho,\sigma,\tau\in S_n,\ ` 
     then for each :math:`\,k\in\{1,2,\dots,n\}:`

   .. math::
             
       \left[\,\rho\circ (\sigma\circ\tau )\,\right]\,(k)
       \ =\ 
       \rho\,\left[\, (\sigma\circ\tau )(k)\,\right]
       \ =\ 
       \rho\,\{\,\sigma\,\left[\,\tau(k)\,\right]\,\}\,,

       \left[\, (\rho\circ\sigma )\circ\tau\,\right]\,(k)
       \ =\ 
       (\rho\circ\sigma )\,\left[\,\tau(k)\,\right]
       \ =\ 
       \rho\,\{\,\sigma\,\left[\,\tau(k)\,\right]\,\}\,.

   :math:`\,` Consequently,
   :math:`\qquad\quad\rho\circ (\sigma\circ\tau )\ =\ 
   ( \rho\circ\sigma )\circ\tau\,,\qquad\forall\ \ \rho,\sigma,\tau\in S_n\,.`

2. | :math:`\,` The neutral element for composition 
     is the identity permutation id, 
   | :math:`\,` which maps every element of the set to itself:
   
   .. math::
      
      \text{id}\ =\ \left(\begin{array}{cccccc}
                    1 & 2 & 3 & \dots & n \\
                    1 & 2 & 3 & \dots & n \end{array}\right)\,.

   :math:`\,` Indeed, it's easy to verify that
   :math:`\quad\sigma\circ\text{id}\ =\ 
   \text{id}\circ\sigma\ =\ 
   \sigma\,,\quad\forall\ \sigma\in S_n.`

3. Every permutation :math:`\ \sigma\in S_n\ ` has an inverse 
   :math:`\ \sigma^{-1}\in S_n\ ` :math:`\\` 
   such that :math:`\ \ \sigma\circ\sigma^{-1}\ =\ 
   \,\sigma^{-1}\circ\,\sigma\ =\ 
   \text{id}\,.\ ` Expressly,

   .. math::
      
      \text{if}\quad
      \sigma\ =\ \left(\begin{array}{cccccc} 
                   1 &   2 &   3 & \dots &   n  \\
                 s_1 & s_2 & s_3 & \dots & s_n 
                 \end{array}\right)\,,
      \quad\text{then}\quad\ 
      \sigma^{-1}\ =\ \left(\begin{array}{cccccc} 
                      s_1 & s_2 & s_3 & \dots & s_n  \\
                        1 &   2 &   3 & \dots &   n 
                      \end{array}\right)\,.
      \quad\bullet

The group :math:`\ S_n\ ` of permutations is called the *symmetric group*.
:math:`\\` 
It has :math:`\,n!\,` elements, :math:`\,` 
and for :math:`\,n>2\,` is non-abelian.

In the following we shall omit the symbol :math:`\ \circ:` 
:math:`\ \ \rho\circ\sigma\ \rightarrow\ \rho\,\sigma\,,\ ` :math:`\\` 
and a composition of permutations shall be called a product of them.

Cyclic Permutations and Parity
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A permutation :math:`\ \sigma\in S_n\ ` is :math:`\,` a :math:`\,` 
*cycle of length* :math:`\,k\ ` (shortly: a :math:`\,k`-*cycle*) :math:`\,`  
when :math:`\\` there exists a subset :math:`\ Y=\{a_1,a_2,\dots,a_k\}\ ` 
of the set :math:`\,X=\{1,2,\dots,n\},\ ` such that 

.. math::
   
   \sigma(a_1)=a_2,\quad\sigma(a_2)=a_3,\quad\dots,\quad
   \sigma(a_{k-1})=a_k,\quad\sigma(a_k)=a_1,

   \text{and}\qquad\sigma(i)=i\qquad\text{for}\qquad i\notin Y\,.

The aforementioned subset :math:`\,Y\,` is called 
:math:`\,` the :math:`\,` *orbit* :math:`\,` of the cycle.

.. Such a cycle is written as :math:`\ \sigma=(a_1,a_2,\dots,a_k),\ `
   discarding elements which are mapped to themselves.
   Thus, in the full notation:

.. Discarding elements which are mapped to themselves,
   a a :math:`\,k`-cycle is written in the one-line fashion as
   :math:`\ \sigma=(a_1,a_2,\dots,a_k).\ ` Thus, in the full notation:

Elements mapped to themselves being omitted,
a :math:`\,k`-cycle is written in the one-line fashion as
:math:`\ \sigma=(a_1,a_2,\dots,a_k).\ ` 
Thus, using the two-line notation, a :math:`\,k`-cycle reads

.. math::
   
   S_n\,\ni\,(a_1,a_2,\dots,a_k)\ =\ 
   \left(\begin{array}{ccccccccc} 
   a_1 & a_2 & \dots & a_{k-1} & a_k & a_{k+1} & \dots & a_{n-1} & a_n \\
   a_2 & a_3 & \dots &   a_k   & a_1 & a_{k+1} & \dots & a_{n-1} & a_n
   \end{array}\right)\,.

Example: 
:math:`\quad
\left(\begin{array}{cccccc}
1 & 2 & 3 & 4 & 5 & 6 \\
1 & 6 & 4 & 2 & 5 & 3 \end{array}\right)\ =\ 
\left(\begin{array}{cccccc}
2 & 6 & 3 & 4 & 1 & 5 \\
6 & 3 & 4 & 2 & 1 & 5 \end{array}\right)\ =\ (2,6,3,4)\,.`

Instead, the permutation
:math:`\quad
\left(\begin{array}{ccccc}
1 & 2 & 3 & 4 & 5 \\
3 & 1 & 2 & 5 & 4 \end{array}\right)\ =\ 
\left(\begin{array}{ccccc}
1 & 3 & 2 & 4 & 5 \\
3 & 2 & 1 & 5 & 4 \end{array}\right)\quad`
is not a cycle.

The one-line cycle notation is not unique. A :math:`\,k`-cycle 
may be written in :math:`\,k\,` different ways,
depending on the choice of the initial element :math:`\,a_1\,:`

.. math::
   
   (2,6,3,4)\ =\ (6,3,4,2)\ =\ (3,4,2,6)\ =\ (4,2,6,3)\,.

A cycle of length 1 is the identity permutation:

.. math::
   
   S_n\,\ni\,\text{id}\ =\ (1)\ =\ (2)\ =\ \dots\ =\ (n)\,.

A cycle of length 2 (i.e. with a 2-element orbit) is called 
:math:`\,` a :math:`\,` *transposition*. :math:`\,` An example is

.. math::
   
   S_6\,\ni\,\tau_{25}\ =\ (2,5)\ =\ \left(\begin{array}{cccccc}
                                     1 & 2 & 3 & 4 & 5 & 6 \\
                                     1 & 5 & 3 & 4 & 2 & 6 \end{array}\right)\,.

Two cycles, :math:`\ \rho=(a_1,a_2,\dots,a_k),\ 
\sigma=(b_1,b_2,\dots,b_l)\in S_n\,,\ ` are *disjoint* 
when their orbits :math:`\ Y_{\rho}=\{a_1,a_2,\dots,a_k\},` 
:math:`\ Y_{\sigma}=\{b_1,b_2,\dots,b_l\}\ ` are disjoint sets: 
:math:`\ Y_{\rho}\cap Y_{\sigma}=\emptyset\,.\ \,`

For example, the cycles :math:`\ (3,6,2)\ ` and :math:`\ (1,7,4,5)\ ` 
in the group :math:`\ S_7\ ` are disjoint, whereas :math:`\ (4,2,5,1)\ `
and :math:`\ (3,1,6,2)\ ` are not. It's worth to notice that 
a product of two disjoint cycles is commutative: 
:math:`\ \rho\,\sigma=\sigma\,\rho\,.`

**Theorem 2.** :math:`\\`
Every permutation can be expressed as a product of disjoint cycles. :math:`\\`
The expression is unique up to the order of (commuting) factors. [3]_

Example:
:math:`\quad\left(\begin{array}{cccccccccc}
1 & 2 & 3 & 4 & 5 & 6 & 7 &  8 & 9 & 10 \\
6 & 2 & 4 & 3 & 5 & 9 & 8 & 10 & 1 &  7 \end{array}\right)\ =\ 
(1,6,9)(3,4)(7,8,10)\,.`

**Proposition 1.** :math:`\\`
A :math:`\,k`-cycle can be decomposed into the product of :math:`\ k-1\ ` 
transpositions :math:`\ (k\geq 2):`

.. math::
   
   (a_1,a_2,a_3,\dots,a_{k-1},a_k)\ \,=\ \,
   (a_1,a_k)(a_1,a_{k-1})\ \dots\ (a_1,a_3)(a_1,a_2)\,.

**Note:** :math:`\,` The order of factors on the right-hand side is relevant!

**Corollary 1.** :math:`\\`
Every permutation :math:`\ \sigma\in S_n,\ n\geq 2,\ `
can be represented as a product of transpositions :math:`\\`
(such representation is not unique). :math:`\ ` For example, 

.. math::
   
   \left(\begin{array}{ccccc}
   1 & 2 & 3 & 4 & 5 \\
   2 & 5 & 4 & 3 & 1 \end{array}\right)\ =\ (1,2,5)(3,4)\ =

   =\ (1,5)(1,2)(3,4)\ =\ (1,3)(3,4)(4,5)(2,4)(1,4)\,.

**Proposition 2.** :math:`\,`
Every transposition :math:`\,\tau\in S_n,\ n\geq 2,\ ` may be written 
as a product of an odd number of adjacent transpositions.
Namely, for :math:`\,i<j\,` we get:

.. math::
   
   \begin{array}{ccc}
   (i,j) & = & (i,i+1)\,(i+1,i+2)\,\dots\,(j-2,j-1)\,\circ \\
         &   & \circ\,(j-1,j)\,\circ                       \\
         &   & \circ\,(j-1,j-2)\,\dots\,\,(i+2,i+1)\,(i+1,i)\,,
   \end{array}

**Example.** :math:`\quad (1,4)\ =\ (1,2)\,(2,3)\,(3,4)\,(3,2)\,(2,1)\ =\ 
(1,2)\,(2,3)\,(3,4)\,(2,3)\,(1,2)\,.`

**Corollary 2.** :math:`\\`
Every permutation :math:`\,\sigma\in S_n\,,\ n\geq 2,\ ` 
may be represented as a product of adjacent transpositions 
(this representation is also not unique).

Proposition 1. and Proposition 2. can be validated by a direct
comparison of images of each :math:`\,k\in\{\,1,\,2,\,\ldots,\,n\}\,`
under permutations in left- and right-hand side of the equation.

.. Although a decomposition of a given permutation into a product
   of transpositions is not unique, the number of factors
   in every such representation is either always even or always odd. :math:`\\`
   In Appendix A5. we prove the following

As we have pointed out, a decomposition of a given permutation into a product
of transpositions is not unique. Nevertheless, the number of factors
in every such decomposition is either always even or always odd. 
In Appendix A5. we prove the following

.. is not unique, the parity of the number of factors is always the same.

**Theorem 3.** :math:`\\`
Suppose a permutation :math:`\,\sigma\in S_n\,` has two different 
representations as a product of transpositions:
:math:`\ \sigma\ =\ \tau_1\,\tau_2\,\dots\,\tau_r\ =\ 
\tau'_1\,\tau'_2\,\dots\,\tau'_s\,.\ `
Then both expressions yield the same parity of the number of factors:
:math:`\quad (-1)^r\,=\ (-1)^s\,.`

.. math:
   
   \sigma\ =\ \tau_1\,\tau_2\,\dots\,\tau_r\ =\ 
   \tau'_1\,\tau'_2\,\dots\,\tau'_s\,,

.. to :math:`\quad (-1)^r\,=\ (-1)^s\,.`

**Corollary 3.** :math:`\\`
The above theorem makes it possible to define a *sign* of a permutation
as follows:

.. math::
   
   \text{sgn}:\qquad S_n\,\ni\,\sigma\quad\rightarrow
   \quad\text{sgn}\,\sigma\ :\,=\ (-1)^r\,\in\,\{-1,1\}\,,

where :math:`\,r\,` is the number of factors in an arbitrary decomposition
of the permutation :math:`\,\sigma\,` into a product of transpositions.
Additionally, we assume that if :math:`\ \sigma\in S_1\ ` 
(then :math:`\,\sigma=\text{id}`), :math:`\,` then by convention
:math:`\,\text{sgn}\,\sigma = +1.`

A permutation :math:`\ \sigma\in S_n\ \,` is :math:`\,` *even* :math:`\,` 
when :math:`\,\text{sgn}\,\sigma = +1\,,\ \,` and is :math:`\,` *odd* :math:`\,` 
when :math:`\,\text{sgn}\,\sigma = -1\,.`

.. So, for instance, the permutation in Eq. :eq:`ex` is odd. 

.. _Permutations-in-Sage:

Permutations in Sage
~~~~~~~~~~~~~~~~~~~~

The Sage command ``Permutations(n)`` returns the class of permutations 
of :math:`\,n\,` numbers, written in a one-line notation: :math:`\\`

.. math::
   
   \left(\begin{array}{cccccc} 
     1 &   2 &   3 & \dots &   n  \\
   s_1 & s_2 & s_3 & \dots & s_n 
   \end{array}\right)\quad\sim\quad
   [\,s_1,\ s_2,\ s_3,\ \ldots,\ s_n\,]\,.

.. code-block:: python
   
   sage: P3 = Permutations(3)
   sage: print P3; P3.list()

   Standard permutations of 3
   [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

In general, the command :math:`\,` ``Permutations()``
yields the class of permutations of any set:

.. code-block:: python
   
   sage: P = Permutations(['a', 'b', 'c'])
   sage: print P; P.list()

   Permutations of the set ['a', 'b', 'c']
   [['a', 'b', 'c'],
    ['a', 'c', 'b'],
    ['b', 'a', 'c'],
    ['b', 'c', 'a'],
    ['c', 'a', 'b'],
    ['c', 'b', 'a']]

A particular permutation can be extracted by a direct indication or by indexing:

.. code-block:: python

   sage: P3 = Permutations(3)
   sage: L = P3.list()    
   sage: p0 = P3([1, 2, 3])
   sage: p1 = P3[1]
   sage: p2 = L[2]    
   sage: print L; p0, p1, p2

   [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
   ([1, 2, 3], [1, 3, 2], [2, 1, 3]) 

.. The function ``Permutation()`` converts a permutation written in a one-line 
   or a cyclic notation into an object of the permutation class:

Given a permutation :math:`\,p\,` written in one of the following ways:

* list of integers, viewed as one-line permutation notation,

* string of tuples of integers, expressing the permutation in cycle notation
  :math:`\\`
  (a 1-cycle may be used to set the size of permutation),

* list of tuples, representing the cycles in cycle notation 
  :math:`\\`
  (a 1-cycle with a comma may be used to set the size of permutation),

the function ``Permutation()`` returns :math:`\,p\,`  as an object
of the class of permutations.

.. code-block:: python
   
   sage: p1 = Permutation([4,1,3,5,2])
   sage: p2 = Permutation('(1,3)(5)')
   sage: p3 = Permutation([(1,4),(5,)])
   sage: p4 = Permutation(((1,3,4),(2,5)))

   sage: print p1.parent()
   sage: print p1
   sage: print p2
   sage: print p3
   sage: print p4    

   Standard permutations
   [4, 1, 3, 5, 2]
   [3, 2, 1, 4, 5]
   [4, 2, 3, 1, 5]
   [3, 5, 4, 1, 2]

.. :math:`\,`

There are two conventions, 
:math:`\,` right-to-left :math:`\,` and :math:`\,` left-to-right, :math:`\,` 
of composing (multiplying) :math:`\,` permutations.

A composition may be effectuated by means of the methods
``left_action_product()``, ``right_action_product()`` 
:math:`\,` or :math:`\,` by the binary
multiplication operator :math:`\,"\ast":`

* ``p1.left_action_product(p2)`` returns the product of :math:`\,p1\,`
  and :math:`\,p2,\ ` in which :math:`\,p2\ ` is applied first;
  this right-to-left convention reflects the principle :eq:`compose` 
  of composing permutations as mappings;

* ``p1.right_action_product(p2)`` returns the product of :math:`\,p1\,`
  and :math:`\,p2,\ ` in which :math:`\,p1\ ` is applied first;
  this left-to-right convention becomes natural if the image of a 
  number :math:`\,i\,` under a permutation :math:`\,p\,` 
  is written as :math:`\,i^p\,;` :math:`\,` 
  then :math:`\ i^{(pq)}=\left(i^p\right)^q\,.`

* ``p1*p2`` :math:`\,` by default yields a product of :math:`\,p1\,` and 
  :math:`\,p2\ ` calculated according to the latter (left-to-right) rule.

The above regulations are illustrated by the following Sage code:

.. sagecellserver::
   
   P5 = Permutations(5)
   p1 = P5.random_element()
   p2 = P5.random_element()

   p3 = p1.left_action_product(p2)
   p4 = p1.right_action_product(p2)
   p5 = p1*p2

   print p1, p2
   print p3, p4, p5

The class of permutations contains several other useful methods [4]_,
of which we shall mention here only a few.

.. sagecellserver::

   P5 = Permutations(5)
   p = P5.random_element()
   p.show()
   print "p =", p
   print "p reverse =", p.reverse()
   print "p inverse =", p.inverse()
   print "p in cycles =", p.to_cycles()
   print "p is even?", p.is_even()

.. Permutations can be multiplied (composed) by means of the binary operator 
   :math:`\ " \ast "\,`. :math:`\\`
   Unfortunately, Sage assumes by default the left-to-right convention 
   of multiplying them, :math:`\\` which does not reflect the principle
   of composing permutations as mappings (see Eq. :eq:`compose`).

.. is not what one might naturally expect and which is the reverse 
   of the rule used in most textbooks, including the present one.

.. code-block: python
   
   sage: p1 = Permutation([4,1,3,5,2])
   sage: p2 = Permutation('(1,3)(5)')

   sage: print p1
   sage: print p2
   sage: print p1*p2
   sage: print p2*p1

   [4, 1, 3, 5, 2]
   [3, 2, 1, 4, 5]
   [4, 3, 1, 5, 2]
   [3, 1, 4, 5, 2]
  
.. Admittedly, one has at disposal the method ``left_action_product()``
   that composes two permutations according to the right-to-left convention,
   as well as the method ``right_action_product()`` which acts exactly as 
   the multiplication operator :math:`\ " \ast "` , :math:`\,` i.e. according 
   to the left-to-right rule.

.. code-block: python

   sage: p1 = Permutation([4,1,3,5,2])
   sage: p2 = Permutation('(1,3)(5)')

   sage: print p1.left_action_product(p2)  == p2*p1
   sage: print p1.right_action_product(p2) == p1*p2

   True
   True

.. There is also the method ``right_action_product()`` which acts exactly as 
   the multiplication operator :math:`\ " \ast "` , :math:`\,` i.e. according 
   to the left-to-right rule.

.. code-block: python

   sage: p1 = Permutation([4,1,3,5,2])
   sage: p2 = Permutation('(1,3)(5)')
   sage: p1.right_action_product(p2) == p1*p2

   True

.. Permutations can be composed in three ways, using the methods
   ``left_action_product()``, ``right_action_product()`` or the 
   multiplication binary operator :math:`\,"\,\ast\,"\ `:


.. [3] See http://math.mit.edu/~mckernan/Teaching/12-13/Spring/18.703/l_5.pdf
   for a proof.
.. [4] http://doc.sagemath.org/html/en/reference/combinat/sage/combinat/permutation.html


















                                               

















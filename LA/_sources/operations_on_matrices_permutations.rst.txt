
Permutation Matrices
--------------------

Suppose we have a matrix 
:math:`\,\boldsymbol{A}=[a_{ij}]_{m\times n}\in M_{m\times n}(K)\,`
given in the row form

.. math::
   
   \boldsymbol{A}\ \ =\ \ 
   \left[\begin{array}{c} \boldsymbol{A}_1 \\
                          \boldsymbol{A}_2 \\
                          \ldots           \\
                          \boldsymbol{A}_m\end{array}\right],\qquad
   \text{where}\quad\boldsymbol{A}_i\ =\ 
   [\,a_{i1}\ \,a_{i2}\ \,\dots\ \,a_{in}\,]\,,\quad 
   i=1,2,\dots,m\,,

and a permutation 
:math:`\ \ \sigma\ =\ 
\left(\begin{array}{cccc}
1 & 2 & \ldots & m \\ \sigma(1) & \sigma(2) & \ldots & \sigma(m)
\end{array}\right)\ \in\ S_m.`

.. math:
   
   \sigma\ \ =\ \ \left(\begin{array}{cccc}
                      1     &     2     & \ldots &     m \\
                  \sigma(1) & \sigma(2) & \ldots & \sigma(m)
                  \end{array}\right)\,.

:math:`\;`

The permutation :math:`\,\sigma\,` determines an operation :math:`\,O_\sigma\,` 
which rearranges rows of matrix :math:`\,\boldsymbol{A}\,:`

.. math::
   :label: perm_verse
   
   O_\sigma\,\boldsymbol{A}\ :\,=\ 
   \left[\begin{array}{c} \boldsymbol{A}_{\,\sigma(1)} \\
                          \boldsymbol{A}_{\,\sigma(2)} \\
                          \ldots           \\
                          \boldsymbol{A}_{\,\sigma(m)}\end{array}\right]\,.

.. :math:`\;`

The operation :math:`\,O_\sigma\,` being applied to the identity matrix

.. math::
   
   \boldsymbol{I}_m\ \ =\ \ \left[\begin{array}{c}
                            \boldsymbol{e}_1 \\ 
                            \boldsymbol{e}_2 \\ 
                            \ldots \\ 
                            \boldsymbol{e}_m
                            \end{array}\right]\,,

(:math:`\,\boldsymbol{e}_i\,` is a row of length :math:`\,m\,` 
with unity in the :math:`\,i`-th position, zeroes elsewhere), we obtain 
:math:`\\` 
the matrix :math:`\,\boldsymbol{P}_\sigma\,` referred to as the 
:math:`\,` *permutation matrix* :math:`\,` 
(matrix of the permutation :math:`\,\sigma`):

.. math::
   
   \boldsymbol{P}_\sigma\ \ :\,=\ \ O_\sigma\,\boldsymbol{I}_m\ \ =\ \ 
                                    \left[\begin{array}{c}
                                    \boldsymbol{e}_{\,\sigma(1)} \\ 
                                    \boldsymbol{e}_{\,\sigma(2)} \\ 
                                    \ldots \\ 
                                    \boldsymbol{e}_{\,\sigma(m)}
                                    \end{array}\right]\,.


**Example.** :math:`\,` For
:math:`\quad\sigma\ =\ \left(\begin{array}{ccccc}
1 & 2 & 3 & 4 & 5 \\
4 & 3 & 5 & 1 & 2
\end{array}\right)\,\in S_5\quad`
the permutation matrix is 

.. :math:`\;`

.. math::
   
   \boldsymbol{P}_\sigma\ =\ 
   \left[\begin{array}{c} \boldsymbol{e}_{\,\sigma(1)} \\
                          \boldsymbol{e}_{\,\sigma(2)} \\
                          \boldsymbol{e}_{\,\sigma(3)} \\
                          \boldsymbol{e}_{\,\sigma(4)} \\
                          \boldsymbol{e}_{\,\sigma(5)}
   \end{array}\right]\ =\ 
   \left[\begin{array}{c} \boldsymbol{e}_4 \\
                          \boldsymbol{e}_3 \\
                          \boldsymbol{e}_5 \\
                          \boldsymbol{e}_1 \\
                          \boldsymbol{e}_2
   \end{array}\right]\ =\ 
   \left[\begin{array}{ccccc} 0 & 0 & 0 & 1 & 0 \\
                              0 & 0 & 1 & 0 & 0 \\
                              0 & 0 & 0 & 0 & 1 \\
                              1 & 0 & 0 & 0 & 0 \\
                              0 & 1 & 0 & 0 & 0
   \end{array}\right]\,.

.. Given a product of two matrices, :math:`\,\boldsymbol{A}\,` and 
   :math:`\,\boldsymbol{B},\,` a permutation of rows of the matrix 
   :math:`\,\boldsymbol{A}\,` is equivalent to the same permutation of rows 
   applied to the product :math:`\,\boldsymbol{A}\boldsymbol{B}\,` 
   as a whole. This may be formulated as

:math:`\;`

By analogy with elementary matrices, 
a permutation of rows of a product :math:`\,\boldsymbol{A}\boldsymbol{B}\,`
of two matrices is equivalent to the same permutation of rows of matrix 
:math:`\,\boldsymbol{A}\,` only. This may be formulated as

.. admonition:: Lemma.
   
   If :math:`\,\boldsymbol{A}\in M_{m\times p}(K),\ \boldsymbol{B}
   \in M_{p\times n}(K),\ \ \sigma\in S_m,\ \ ` 
   then :math:`\ \,O_\sigma\,(\boldsymbol{A}\boldsymbol{B})\ =
   \ (O_\sigma\boldsymbol{A})\,\boldsymbol{B}\,.` 

**Proof.** :math:`\,` Using the Row Rule of Matrix Multiplication:

.. math::

   \boldsymbol{A}\boldsymbol{B}\ \equiv\    
   \left[\begin{array}{c}
         \boldsymbol{A}_1 \\ 
         \boldsymbol{A}_2 \\
         \dots            \\
         \boldsymbol{A}_m \\ 
         \end{array}
   \right]\boldsymbol{B}\ \ =\ \   
   \left[\begin{array}{c}
         \boldsymbol{A}_1\,\boldsymbol{B} \\ 
         \boldsymbol{A}_2\,\boldsymbol{B} \\
         \dots                            \\
         \boldsymbol{A}_m\,\boldsymbol{B} \\ 
         \end{array}
   \right]\,.

we get

.. math::
   
   O_\sigma\,(\boldsymbol{A}\boldsymbol{B})\ =\ 
   O_\sigma
   \left[\begin{array}{c}
         \boldsymbol{A}_1\,\boldsymbol{B} \\ 
         \boldsymbol{A}_2\,\boldsymbol{B} \\
         \dots                            \\
         \boldsymbol{A}_m\,\boldsymbol{B} \\ 
         \end{array}
   \right]\ =
   \left[\begin{array}{c}
         \boldsymbol{A}_{\sigma(1)}\,\boldsymbol{B} \\ 
         \boldsymbol{A}_{\sigma(2)}\,\boldsymbol{B} \\
         \dots                                      \\
         \boldsymbol{A}_{\sigma(m)}\,\boldsymbol{B} \\ 
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{A}_{\sigma(1)} \\ 
         \boldsymbol{A}_{\sigma(2)} \\
         \dots                      \\
         \boldsymbol{A}_{\sigma(m)} \\ 
         \end{array}
   \right]\boldsymbol{B}\ =\ 
   (O_\sigma\boldsymbol{A})\,\boldsymbol{B}\,.\quad\bullet

:math:`\;`

Again by analogy with elementary matrices, pre-multiplying a given matrix 
by a permutation matrix simulates rearrangement of its rows according to 
that permutation. This is expressed as

.. admonition:: Theorem 4.

   If :math:`\,\boldsymbol{A}\in M_{m\times n}(K),\ \ \sigma\in S_m,\ \ ` 
   then :math:`\ \,O_\sigma\,\boldsymbol{A}\ =
   \ \boldsymbol{P}_\sigma\,\boldsymbol{A}\,,\ ` :math:`\\`
   where :math:`\ \ \boldsymbol{P}_\sigma\,=
   \,O_\sigma\,\boldsymbol{I}_m\in M_m(K)\,.`

**Proof.** :math:`\,` The thesis results immediately from the Lemma:

.. math::

   O_\sigma\,\boldsymbol{A}\ \ =\ \ 
   O_\sigma\,(\boldsymbol{I}_m\,\boldsymbol{A})\ \ =\ \    
   (O_\sigma\,\boldsymbol{I}_m)\,\boldsymbol{A}\ \ =\ \ 
   \boldsymbol{P}_\sigma\,\boldsymbol{A}\,,
   \qquad\sigma\in S_m\,.\quad\bullet

.. :math:`\;`

A product of two permutation matrices is also a permutation matrix, 
the multiplication rule being given by

.. admonition:: Proposition 4. :math:`\,`
   
   If
   :math:`\quad P_\rho = O_\rho\,\boldsymbol{I}_m,\ 
   \,P_\sigma = O_\sigma\,\boldsymbol{I}_m,\quad`
   then 
   :math:`\quad\boldsymbol{P}_\rho\,\boldsymbol{P}_\sigma\ =
   \ \boldsymbol{P}_{\sigma\,\circ\,\rho}\,,\quad\rho,\sigma\in S_m\ \ `
   :math:`\\`
   (note the reverse order of permutations on the right-hand side).

**Proof.**

.. math::
   
   \boldsymbol{P}_\sigma\,\boldsymbol{I}_m\ =\ 
   \boldsymbol{P}_\sigma\,
   \left[\begin{array}{c}
         \boldsymbol{e}_1 \\
         \boldsymbol{e}_2 \\
         \dots            \\
         \boldsymbol{e}_m \\
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{e}_{\sigma(1)} \\
         \boldsymbol{e}_{\sigma(2)} \\
         \dots                      \\
         \boldsymbol{e}_{\sigma(m)} \\
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{e}'_1 \\
         \boldsymbol{e}'_2 \\
         \dots             \\
         \boldsymbol{e}'_m \\
         \end{array}
   \right]\,,
   \quad\text{where}\quad
   \boldsymbol{e}'_i\ =\ \boldsymbol{e}_{\sigma(i)}\,,\ \ i=1,2,\ldots,m.

.. math::
   
   \boldsymbol{P}_\rho\,\boldsymbol{P}_\sigma\ =\ 
   (\boldsymbol{P}_\rho\,\boldsymbol{P}_\sigma)\,\boldsymbol{I}_m\ =\ 
   \boldsymbol{P}_\rho\,(\boldsymbol{P}_\sigma\,\boldsymbol{I}_m)\ =\ 
   \boldsymbol{P}_\rho\,
   \left[\begin{array}{c}
         \boldsymbol{e}'_1 \\
         \boldsymbol{e}'_2 \\
         \dots             \\
         \boldsymbol{e}'_m \\
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{e}'_{\rho(1)} \\
         \boldsymbol{e}'_{\rho(2)} \\
         \dots                     \\
         \boldsymbol{e}'_{\rho(m)} \\
         \end{array}
   \right]\,.

Substitution :math:`\ \ i\rightarrow\rho(i)\ \ ` in equation
:math:`\ \ \boldsymbol{e}'_i\ =\ \boldsymbol{e}_{\sigma(i)}\ \ ` results in

.. math::

   \boldsymbol{e}'_{\rho(i)}\ =\ \boldsymbol{e}_{\sigma[\rho(i)]}\ =\ 
   \boldsymbol{e}_{(\sigma\,\circ\,\rho)(i)}\,,\qquad i=1,2,\ldots,m.

Therefore

.. math::
   
   \boldsymbol{P}_\rho\,\boldsymbol{P}_\sigma\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{e}'_{\rho(1)} \\
         \boldsymbol{e}'_{\rho(2)} \\
         \dots                     \\
         \boldsymbol{e}'_{\rho(m)} \\
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{e}_{(\sigma\,\circ\,\rho)(1)} \\
         \boldsymbol{e}_{(\sigma\,\circ\,\rho)(2)} \\
         \dots                                     \\
         \boldsymbol{e}_{(\sigma\,\circ\,\rho)(m)} \\
         \end{array}
   \right]\ =\ 
   \boldsymbol{P}_{\sigma\,\circ\,\rho}
   \left[\begin{array}{c}
         \boldsymbol{e}_1 \\
         \boldsymbol{e}_2 \\
         \dots            \\
         \boldsymbol{e}_m \\
         \end{array}
   \right]\ =\ 
   \boldsymbol{P}_{\sigma\,\circ\,\rho}\ \boldsymbol{I}_m\ =\ 
   \boldsymbol{P}_{\sigma\,\circ\,\rho}\,.\quad\bullet
 
Since every permutation can be expressed as a product  of transpositions, 
every permutation matrix is a product of elementary matrices
of the first type (corresponding to transpositions of matrix rows).

Another property of permutation matrices is stated by the following

.. admonition:: Proposition 5. :math:`\,`
   
   Permutation matrices :math:`\ \boldsymbol{P}_\sigma\ \in M_m(K)\ `
   are orthogonal: :math:`\quad` :math:`\\`
   :math:`\boldsymbol{P}_\sigma^{\,T}\,\boldsymbol{P}_\sigma\ = \ \,
   \boldsymbol{P}_\sigma\,\boldsymbol{P}_\sigma^{\,T}\ = \ \, 
   \boldsymbol{I}_m\,,\quad\sigma\in S_m\,.`

**Proof.** 

In the framework of unitary spaces, it is enough to notice that 
rows of a permutation matrix form an orthonormal set of vectors in 
the space :math:`\,K^m,\ ` where :math:`\,K=Q,\,R\ ` or :math:`\,C.\ ` 
This is just a necessary and sufficient condition for a matrix to be orthogonal.

A direct proof is simple, too.
Each row of :math:`\boldsymbol{P}_\sigma\ ` consists of one unity and zeroes 
elsewhere, :math:`\\` the unities in different rows being in different 
positions. Thus for :math:`\ \boldsymbol{P}_\sigma = [p_{ij}]_{m \times m}\ `
we get 

.. math::
   
   \left(\boldsymbol{P}_\sigma\,\boldsymbol{P}_\sigma^{\,T}\right)_{ij}\ =\ \,
   \displaystyle\sum_{k=1}^m\,p_{ik}\,p_{kj}^T\ =\ \,
   \displaystyle\sum_{k=1}^m\,p_{ik}\,p_{jk}\ \,=\ \,
   \left\{\begin{array}{ll}
   1 & i=j \\ 0 & i \neq j 
   \end{array}\right.
   \quad i,j = 1,2,\ldots, m.

In this way
:math:`\quad\left(\boldsymbol{P}_\sigma\,
\boldsymbol{P}_\sigma^{\,T}\right)_{ij}\ =\ 
\left(\boldsymbol{I}_m\right)_{ij}\,,\ \ i,j = 1,2,\ldots, m,\quad`
hence 
:math:`\quad\boldsymbol{P}_\sigma\,\boldsymbol{P}_\sigma^{\,T}\ =\ 
\boldsymbol{I}_m\,.\quad\bullet`

.. :math:`\,`

Let :math:`\,P\,` denote the set of all permutation matrices
associated with the symmetric group :math:`\,S_m:`

.. math::
   
   P\ :\,=\ \left\{\,\boldsymbol{P}_\sigma\,:\ \ \sigma\in S_m\,\right\}\,. 

Collecting results of the foregoing discussion, we note that

0. | :math:`\,` product of two permutation matrices is a permutation matrix: 
   | :math:`\,` matrix multiplication is an internal operation in :math:`\,P;`

1. :math:`\,` multiplication of permutation matrices is associative;

2. | :math:`\,` the identity matrix :math:`\,\boldsymbol{I}_m\,` 
     is a permutation matrix 
   | :math:`\,` corresponding to the identity permutation id;

3. :math:`\,` permutation matrices are invertible, their inverses being also
   permutation matrices:

   .. math::
      
      \boldsymbol{P}_\sigma^{-1}\ =\ 
      \boldsymbol{P}_{\sigma^{-1}}\ =\ \,\boldsymbol{P}_\sigma^T\,,
      \qquad\sigma\in S_m\,.

These remarks lead to the

.. admonition:: Corollary. :math:`\,`
   
   The set of permutation matrices 
   :math:`\ \,\boldsymbol{P}_\sigma\ \in M_m(K)\,,\ \sigma\in S_m\,,\ `
   consttutes a group :math:`\\` with respect to matrix multiplication.
   For :math:`\ m>2\ ` the group is non-commutative.

In Sage, :math:`\,` the command :math:`\,` ``SymmetricGroup(n)`` :math:`\,` 
returns the group :math:`\ S_n\ ` of all permutations of :math:`\,n\,` 
elements. [3]_ :math:`\,` The members of :math:`\ S_n\ ` are displayed 
in the disjoint-cyclic form:

.. code-block:: python
   
   sage: G = SymmetricGroup(4)
   sage: L = G.list()
   sage: print G; L

   Symmetric group of order 4! as a permutation group
   [(), (3,4), (2,3), (2,3,4), (2,4,3), (2,4), (1,2), (1,2)(3,4), (1,2,3),
   (1,2,3,4), (1,2,4,3), (1,2,4), (1,3,2), (1,3,4,2), (1,3), (1,3,4),
   (1,3)(2,4), (1,3,2,4), (1,4,3,2), (1,4,2), (1,4,3), (1,4), (1,4,2,3),
   (1,4)(2,3)]

A specific permutation can be selected by indexing the list of permutations 
in :math:`\ S_n` :math:`\\` 
(remembering that counting of elements starts at zero). 

A permutation given in the disjoint-cycle form can be written 

.. in one of the two ways:

* as a text string (including quotes);
* as a list of tuples representing cycles.

Using this notation, a permutation may be put as an argument in a function call,
in particular when extracting an element from the permutation group. 
Examples are shown below:

.. The following code extracts some three permutations from the group 
   :math:`\,S_4\,` using the above-mentioned ways, and multiplies them 
   in two different orders of factors.

.. The following code uses the above-mentioned ways, 
   and multiplies the obtained permutations.

.. code-block:: python
   
   sage: G = SymmetricGroup(4)
   sage: L = G.list()
   
   sage: g0 = L[4]
   sage: g1 = G('(1,2)(3,4)')
   sage: g2 = G([(1,3),(2,4)])
   sage: g3 = G(((1,4),(2,3)))

   sage: print g0, g1, g2, g3

   (2,4,3) (1,2)(3,4) (1,3)(2,4) (1,4)(2,3)
       
.. sage: table([["$\\rho\\ast\\sigma\\ast\\tau\\quad = $", 
                 rho, "$\\ast$", sigma, "$\\ast$", tau, "=", 
                 rho*sigma*tau],
                ["$\\tau\\ast\\sigma\\ast\\rho\\quad = $", 
                 tau, "$\\ast$", sigma, "$\\ast$", rho, "=", 
                 tau*sigma*rho]])

.. As was to be expected, the displayed result depends on the order of factors:

.. math:
   
   \begin{array}{ccccccccc}
   \rho\ast\sigma\ast\tau & = & (1,3,4) & \ast & (1,2)(3,4) & \ast & (1,4)(2,3) & = & (2,4,3) \\
   \tau\ast\sigma\ast\rho & = & (1,4)(2,3) & \ast & (1,2)(3,4) & \ast & (1,3,4) & = & (1,4,2)
   \end{array}

.. (unfortunately, Sage assumes the left-to-right convention of composing 
   permutations, which is not what one might naturally expect and is 
   the reverse of the rule used in most textbooks).

.. (we recall that composing permutations using the binary operator 
   :math:`\,"\ast"\,` is performed in the left-to-right manner, 
   which is the reverse of the rule assumed in this textbook).

On the other hand, a particular permutation in a symmetric group 
can be created individually using the function ``PermutationGroupElement()``:


.. code-block:: python

   sage: p1 = PermutationGroupElement('(1,2)(3,4)')
   sage: p2 = PermutationGroupElement([(1,3),(2,4)])
   sage: p3 = PermutationGroupElement(((1,4),(2,3)))

   sage: print p1.parent(); print p1, p2, p3

   Symmetric group of order 4! as a permutation group
   (1,2)(3,4) (1,3)(2,4) (1,4)(2,3)

.. Several operations upon permutations are now available, 
   e.g. the (left-to-right) multiplication:

Multiplication of permutations is performed 
in accordance with the left-to-right convention:

.. code-block:: python
   
   sage: p1 = PermutationGroupElement('(1,2)(3,4)') 
   sage: p2 = PermutationGroupElement('(2,1,3)')
   sage: print p1*p2, p2*p1

   (2,3,4) (1,4,3) 

Now we shall apply the Sage tools to derive the matrix of the permutation

.. math::
   
   \sigma\ =\ (1,2,3)\ =\ \left(\begin{array}{cccc}
                             1 & 2 & 3 & 4 \\
                             2 & 3 & 1 & 4
                          \end{array}\right)\ \in S_4\,.    

.. The method :math:`\,` ``matrix()`` :math:`\,` applied to a member of 
   a permutation group returns the matrix of that permutation: 

To that end we apply the method :math:`\,` ``matrix()`` :math:`\,` 
to a member of the permutation group:

.. code-block: python
   
   sage: G = SymmetricGroup(4)
   sage: g = G('(1,2,3)')
   sage: g.matrix()

.. [0 1 0 0]
   [0 0 1 0]
   [1 0 0 0]
   [0 0 0 1]

.. sagecellserver:: 

   G = SymmetricGroup(4)
   sigma = G('(1,2,3)')
   P = sigma.matrix(); P

The result reads

.. math::
   :label: row
   
   P_{\sigma}\ \, = \ \ 
   \left[\begin{array}{rrrr}
   0 & 1 & 0 & 0 \\
   0 & 0 & 1 & 0 \\
   1 & 0 & 0 & 0 \\
   0 & 0 & 0 & 1
   \end{array}\right]
   \ \ = \ \ 
   \left[\begin{array}{c}
   \boldsymbol{e}_2 \\ \boldsymbol{e}_3 \\ 
   \boldsymbol{e}_1 \\ \boldsymbol{e}_4
   \end{array}\right]
   \ \ = \ \ 
   \left[\begin{array}{c}
   \boldsymbol{e}_{\sigma (1)} \\ \boldsymbol{e}_{\sigma (2)} \\ 
   \boldsymbol{e}_{\sigma (3)} \\ \boldsymbol{e}_{\sigma (4)} \\
   \end{array}\right]\,,

where :math:`\,\boldsymbol{e}_i\ ` is the :math:`\ i`-th :math:`\,` *row*
:math:`\,` of the identity matrix :math:`\,\boldsymbol{I}_4\,,`
:math:`\,i=1,2,3,4.`

.. :math:`\ `

In section :ref:`Permutations-in-Sage` we have described another approach to permutations in Sage, 
based on the class of permutations, created by the command ``Permutations()``. 
Specifically, ``Permutations(n)`` returns the class of permutations of 
:math:`\,n\,` initial natural numbers, given in a one-line notation. 
A particular permutation may be constructed by the function ``Permutation()``.

Following that approach, we shall derive the matrix of the permutation
:math:`\,p\,=\,[\,2,3,1,4\,]\sim\sigma\,,\ ` using the method 
:math:`\,` ``to_matrix()`` :math:`\,` from 
:math:`\,` ``Permutation_class``:

.. code-block: python
   
   sage: p = Permutation('(1,2,3)(4)')
   sage: p.to_matrix()

.. [0 0 1 0]
   [1 0 0 0]
   [0 1 0 0]
   [0 0 0 1]

.. sagecellserver:: 

   p = Permutation('(1,2,3)(4)')
   Q = p.to_matrix(); Q

Now the output is
   
.. math::
   :label: col

   Q_{\sigma}\ \, = \ \ 
   \left[\begin{array}{cccc}
   0 & 0 & 1 & 0 \\
   1 & 0 & 0 & 0 \\
   0 & 1 & 0 & 0 \\
   0 & 0 & 0 & 1
   \end{array}\right]
   \ \ = \ \ 
   \left[\ \boldsymbol{e}_2\,|\,\boldsymbol{e}_3\,|\,
   \boldsymbol{e}_1\,|\,\boldsymbol{e}_4\ \right]
   \ \ = \ \ 
   \left[\ 
   \boldsymbol{e}_{\sigma (1)}\,|\ \boldsymbol{e}_{\sigma (2)}\,|\ 
   \boldsymbol{e}_{\sigma (3)}\,|\ \boldsymbol{e}_{\sigma (4)}\ 
   \right]\,,

where :math:`\,\boldsymbol{e}_j\ ` is the :math:`\ j`-th :math:`\,` *column* 
:math:`\,` of the identity matrix :math:`\,\boldsymbol{I}_4\,,`
:math:`\,j=1,2,3,4.`

The matrix :math:`\,P_{\sigma}\ ` in :eq:`row` is obtained from the identity 
matrix by the permutation :math:`\,\sigma\ ` of rows, 
whereas :math:`\,Q_{\sigma}\ ` in :eq:`col` is obtained by the same 
permutation of columns. The two matrices are interrelated by transpose:
each one is the transpose of another. The Sage code below checks 
the equivalence of permutations used to construct :math:`\,P_{\sigma}\ ` 
and :math:`\,Q_{\sigma}\ ` as well as the relation 
:math:`\,Q_{\sigma}=P_{\sigma}^{\,T}:`

.. sagecellserver::

   try: print p == Permutation(sigma), Q == P.T
   except NameError: pretty_print(html(
   "Execute code in the two previous cells!"))

.. admonition:: Conclusion. :math:`\,`

   The method :math:`\,` ``matrix()``, :math:`\,` applicable to permutations 
   of a Symmetric group, refers to the matrix representation of permutations
   in the *row version*, :math:`\,` whereas the method 
   :math:`\,` ``to_matrix()`` :math:`\,` from the 
   :math:`\,` ``Permutation_class`` :math:`\,` pertains to :math:`\,` 
   the :math:`\,` *column version* :math:`\,` thereof.














.. [3] http://doc.sagemath.org/html/en/thematic_tutorials/group_theory.html#permutation-groups 




























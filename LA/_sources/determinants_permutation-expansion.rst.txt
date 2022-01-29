
The Permutation Expansion
-------------------------

.. admonition:: Theorem 0. :math:`\,` 
                Permutation Expansion of the Determinant. :math:`\\`
   
   There exists exactly one function :math:`\ \det: M_n(K)\to K\ ` 
   satisfying the Axioms 1. - 4. in the axiomatic definition
   of the determinant.
   Namely, for a matrix :math:`\,\boldsymbol{A}\ =\ [a_{ij}]_{n\times n}:`

   .. math::
      :label: perm_exp_col
      
      \det\,\boldsymbol{A}\ \ =\ \ 
      \sum_{\sigma\,\in\,S_n}\ \text{sgn}\,\sigma\,\cdot\,
      a_{\sigma(1),1}\ a_{\sigma(2),2}\ \ldots\ a_{\sigma(n),n}\,.

**Proof.** :math:`\,`

It may be checked by a direct calculation that the expression 
:eq:`perm_exp_col` fulfills Axioms 1. - 4. in the definition 
of the determinant.

.. On the other hand, Property IV results from the axiomatic definition. 

As regards the uniqueness, every function :math:`\,\det\,` 
defined by Axioms I. - 4. has the Property IV.
Putting there :math:`\,\boldsymbol{A}=\boldsymbol{I}_n\ ` and substtuting
:math:`\,\boldsymbol{B}\rightarrow\boldsymbol{A}\ ` we infer that
the function :eq:`perm_exp_col` is the only one to satisfy 
the requirements of the axiomatic definition. :math:`\quad\bullet`

**Notes and Comments.**

* A determinant of size :math:`\,n\ ` is a sum of :math:`\,n\,!\,` components
  corresponding to permutations of the set :math:`\,\{1,2,\ldots,n\}.`

* Even (odd) permutations contribute components with the sign
  plus (minus), respectively.
  The number of even permutations equals that of the odd ones.

* Every component is a product of :math:`\,n\,` matrix elements,
  among which there is exactly one element from each row and exactly 
  one element from each column.

:math:`\,` 

Using :eq:`perm_exp_col` we shall derive formulae for determinants
of size :math:`\,` 2 :math:`\,` and :math:`\,` 3.

The group :math:`\ S_2\ ` consists of two permutations:

.. math::
   
   S_2\ \ =\ \ 
   \left\{\ 
   \left(\begin{array}{cc} 1 & 2 \\ 1 & 2 \end{array}\right),\ 
   \left(\begin{array}{cc} 1 & 2 \\ 2 & 1 \end{array}\right)
   \ \right\}\ \ =\ \ 
   \{\;\text{id},\,(1,2)\,\}\,,

where :math:`\ \ \text{sgn}\ \text{id} = +1,\ \ \text{sgn}\,(1,2) = -1.\ \,`
Thus

.. math::
   
   \det
   \left[\begin{array}{cc}
         a_{11} & a_{12} \\ 
         a_{21} & a_{22}
         \end{array}
   \right]\ \ =\ \ 
   \sum_{\sigma\,\in\,S_2}\ 
   \text{sgn}\,\sigma\,\cdot\,a_{\sigma(1),\,1}\ a_{\sigma(2),\,2}\ \ =\ \ 
   a_{11}\,a_{22}\,-\ a_{21}\,a_{12}\,.

The group :math:`\ S_3\ ` contains six permutations:
:math:`\ \text{id},\ (1,2,3),\ (3,2,1),\ (1,2),\ (1,3),\ (2,3)\,.` :math:`\\`
The identity and both :math:`\,3`-cycles are even, 
whereas the transpositions are odd. Therefore

.. math::
   
   \det
   \left[\begin{array}{ccc}
         a_{11} & a_{12} & a_{13} \\ 
         a_{21} & a_{22} & a_{23} \\
         a_{31} & a_{32} & a_{33}
         \end{array}
   \right]\ \ =\ \ 
   \sum_{\sigma\,\in\,S_3}\ \text{sgn}\,\sigma\,\cdot\,
   a_{\sigma(1),1}\ a_{\sigma(2),2}\ a_{\sigma(3),3}\ \ =

.. math::

   =\ \ a_{11}\,a_{22}\,a_{33}\ +\ a_{21}\,a_{32}\,a_{13}\ +\ a_{31}\,a_{12}\,a_{23}\ \ +

   -\ \ a_{21}\,a_{12}\,a_{33}\ -\ a_{31}\,a_{22}\,a_{13}\ -\ a_{11}\,a_{32}\,a_{23}\,.

This formula results from the *Sarrus' Rule* of computing the determinant
of a :math:`\,3\times 3\,` matrix. The rule reads as follows. 
Augment the matrix by writing out the first two columns to the right 
of the third column.
Then add the three products along diagonals
determined by the upper arrows and subtract the three products along diagonals 
determined by the lower arrows.

.. math::
   
   \begin{array}{cccccc}
   \searrow & \searrow & \searrow &   &    &                 \\
            &  a_{11}  &  a_{12}  & a_{13} & a_{11} & a_{12} \\ 
            &  a_{21}  &  a_{22}  & a_{23} & a_{21} & a_{22} \\
            &  a_{31}  & a_{32}   & a_{33} & a_{31} & a_{32} \\
   \nearrow & \nearrow & \nearrow &        &        &
   \end{array}\quad :\quad 
   \begin{array}{r}
   +\ \ a_{11}\,a_{22}\,a_{33}\ +\ a_{12}\,a_{23}\,a_{31}\ +\ a_{13}\,a_{21}\,a_{32} \\
   -\ \ a_{31}\,a_{22}\,a_{13}\ -\ a_{32}\,a_{23}\,a_{11}\ -\ a_{33}\,a_{21}\,a_{12}
   \end{array}

.. warning:: 
   The Sarrus' Rule is applicable *only* to determinants of size 3 !

The Permutation Expansion is also a convenient starting point for deriving
the rule for the determinant of a triangular matrix.

.. admonition:: Theorem 1. :math:`\,` Determinant of a triangular matrix.
   
   The determinant of a triangular matrix (upper or lower)
   is given by the product of its diagonal elements.

**Proof.** :math:`\,` 
Let's consider an upper triangular matrix of size :math:`\,n:`

.. math::
   
   \boldsymbol{A}\ \ =\ \ 
   \left[\begin{array}{cccccc}
         a_{11} & a_{12} & a_{13} & \dots  & a_{1,n-1}   & a_{1n}    \\
           0    & a_{22} & a_{23} & \dots  & a_{2,n-1}   & a_{2n}    \\
           0    &   0    & a_{33} & \dots  & a_{3,n-1}   & a_{3n}    \\
         \dots  & \dots  & \dots  & \dots  & \dots       & \dots     \\
           0    &   0    &   0    & \dots  & a_{n-1,n-1} & a_{n-1,n} \\
           0    &   0    &   0    & \dots  &    0        & a_{nn} 
         \end{array}
   \right]\,.

:math:`\det{\boldsymbol{A}}\ ` is a sum of 
(taken with an appropriate sign) :math:`\ n\,!\ ` products.
Every product contains exactly one element from each column 
and exactly one element from each row:

.. math::
   
   \det{\boldsymbol{A}}\ =\ 
   \sum_{\sigma\,\in\,S_n}\ 
   \text{sgn}\,\sigma\,\cdot\,
   a_{\sigma(1),1}\ a_{\sigma(2),2}\ a_{\sigma(3),3}\
   \dots\ 
   a_{\sigma(n-1),n-1}\ a_{\sigma(n),n}\,.

A permutation :math:`\ \sigma\ ` yields a non-zero contribution only 
if all elements in the corresponding product are different from zero.
This condition is fulfilled only if

.. math::
   
   \sigma(1)=1,\quad\sigma(2)=2,\quad\sigma(3)=3,\quad\dots,\quad
   \sigma(n-1)=n-1,\quad\sigma(n)=n\,.

Thus the only non-zero component of the sum comes from the identity permutation.
:math:`\\`
Since :math:`\ \text{sgn}\,\text{id} = +1,\ ` we get finally:
:math:`\quad\det\boldsymbol{A}\ =\ 
a_{11}\ a_{22}\ a_{33}\ \dots\ a_{n-1,n-1}\ a_{nn}\,.` :math:`\quad\bullet`

The proof for a lower triangular matrix goes along analogous way. 

**Corollary.** :math:`\,` 
Determinant of a diagonal matrix is equal to 
the product of its diagonal elements:

.. math::
   
   \left|\,\begin{array}{cccccc}
         a_{11} &   0    &   0    & \dots  &   0         &   0    \\
           0    & a_{22} &   0    & \dots  &   0         &   0    \\
           0    &   0    & a_{33} & \dots  &   0         &   0    \\
         \dots  & \dots  & \dots  & \dots  & \dots       & \dots  \\
           0    &   0    &   0    & \dots  & a_{n-1,n-1} &   0    \\
           0    &   0    &   0    & \dots  &    0        & a_{nn} 
         \end{array}
   \right|\ \ =\ \ 
   a_{11}\ a_{22}\ a_{33}\ \dots\ a_{n-1,n-1}\ a_{nn}\,.

:math:`\\`

.. admonition:: Theorem 2. :math:`\,` Determinant of a matrix product.
   
   Determinant of a product of two matrices equals the product of their
   determinants:

   .. math::
      :label: det_prod
      
      \det{\,(\boldsymbol{A}\boldsymbol{B})}\ \,=\ 
      \,\det{\boldsymbol{A}}\,\cdot\,\det{\boldsymbol{B}}\,,
      \qquad\boldsymbol{A},\boldsymbol{B}\in M_n(K).

**Proof.** :math:`\,` 
Using the Property IV and the Permutation Expansion :eq:`perm_exp_col` we get

.. math::
   
   \det{\,(\boldsymbol{A}\boldsymbol{B})}\ \,=\ \,    
   \det{\boldsymbol{A}}\,\cdot\,\sum_{\sigma\,\in\,S_n}\,
   \text{sgn}\,\sigma\,\cdot\,
   b_{\sigma(1),1}\ b_{\sigma(2),2}\ \ldots,\ b_{\sigma(n),n}\ \ =\ \ 
   \det{\boldsymbol{A}}\,\cdot\,\det{\boldsymbol{B}}\,.
   \quad\bullet

Formula :eq:`det_prod` may be generalized to the case of several
matrix factors under the :math:`\,\det\,` symbol:

.. math::
   
   \det{\,\left(\boldsymbol{A}_1\,\boldsymbol{A}_2\,\ldots\,
   \boldsymbol{A}_k\,\right)}\ =\ 
   \det{\boldsymbol{A}_1}\ \cdot\ \det{\boldsymbol{A}_2}\ \cdot\  
   \ldots\ \cdot\ \det{\boldsymbol{A}_k}\,,
   \qquad
   \begin{array}{l}
   \boldsymbol{A}_i\in M_n(K), \\ 
   i=1,2,\ldots,k.
   \end{array}

.. admonition:: Theorem 3. :math:`\,` Determinant of a transposed matrix.
   
   Determinant is invariant under the matrix transpose:

   .. math::
      
      \det{\boldsymbol{A}^T}\ =\ \,
      \det{\boldsymbol{A}}\,,\qquad\boldsymbol{A}\in M_n(K).

**Corollary.** :math:`\,`
All true statements on determinants remain true, if the words "column" 
are exchanged for "row", and conversely. In particular, the Properties I.-IV.,
derived in the preceding section, pertain to rows as well. The definition of
determinant may be equivalently formulated in terms of rows, leading to
the row version of the Permutation Expansion:

.. math::
   :label: perm_exp_verse
      
   \det{\,\boldsymbol{A}}\ \ =\ \ 
   \sum_{\sigma\,\in\,S_n}\ \text{sgn}\,\sigma\,\cdot\,
   a_{1,\,\sigma(1)}\ a_{2,\,\sigma(2)}\ \ldots\ a_{n,\,\sigma(n)}\,.

The proof of Theorem 3. is preceded by three lemmas.

**Lemma 1.** :math:`\\` 
The set of inverses of all elements belonging to the group :math:`\,S_n\ ` 
is identical to the set :math:`\,S_n\,` itself:

.. math::
   
   \{\ \sigma^{-1}:\ \sigma\in S_n\ \}\ =\ 
   S_n\ =\ 
   \{\ \sigma:\ \sigma\in S_n\ \}\,.

This stems from the fact that the mapping
:math:`\ f :\ S_n\ni\sigma\ \rightarrow\ f(\sigma):\,=\sigma^{-1}\in S_n\ `
is bijective.

**Conclusion.** :math:`\,` 
If the addition of elements :math:`\,F(\sigma)\,` is commutative, :math:`\ ` 
then

.. math::
   :label: lem_1
   
   \sum_{\sigma\,\in\,S_n} F(\sigma)\ \,=\ \,
   \sum_{\sigma\,\in\,S_n} F(\sigma^{-1})\,.

.. :math:`\displaystyle\quad\sum_{\sigma\,\in\,S_n} F(\sigma)\ =\ 
   \sum_{\sigma\,\in\,S_n} F(\sigma^{-1})\,.`

.. math:
   
   \sum_{\sigma\,\in\,S_n} F(\sigma)\ =\ \sum_{\sigma\,\in\,S_n} F(\sigma^{-1})\,.

**Lemma 2.** :math:`\,` 
The set of values of a permutation :math:`\,\sigma\in S_n\,` is
the set :math:`\,\{\,1,2,\ldots,n\,\}\,:`

.. math::
   
   \left\{\;\sigma(i):\ i\in\{1,2,\ldots,n\,\}\,\right\}\ =\ \{1,2,\ldots,n\,\}\,.

.. This results from the definition of the permutation :math:`\,\sigma\in S_n\,`
 
This is a consequence of the definition of the permutation :math:`\,\sigma\in S_n\,` 
as a mapping of the set :math:`\,\{\,1,2,\ldots,n\,\}\,` *onto* itself.

**Conclusion.** :math:`\,`
If the multiplication of elements :math:`\,F(i)\,` is commutative, :math:`\,`
then for any :math:`\,\sigma\in S_n\,:`

.. math::
   :label: lem_2
   
   \prod_{i\,=\,1}^n\,F(i)\ \,=\ \,\prod_{i\,=\,1}^n\,F\,[\,\sigma(i)\,]\,.
 
.. :math:`\displaystyle\quad\prod_{i\,=\,
   1}^n F(i)\ =\ \prod_{i\,=\,1}^n F[\sigma(i)]\,.`

**Lemma 3.** :math:`\,` 
If :math:`\,\sigma\in S_n\,,\ \,` then the permutations :math:`\ \sigma\ ` and 
:math:`\ \sigma^{-1}\ ` have the same parity:

.. math::
   :label: lem_3
   
   \text{sgn}\,\sigma^{-1}\ =\ \,\text{sgn}\,\sigma\,,\qquad\sigma\in S_n\,.

**Proof** of the Lemma 3. :math:`\\` 
Suppose that the decomposition of :math:`\,\sigma\,` into a product of
transpositions reads

.. math::
   
   \sigma\ \,=\ \,\tau_1\ \tau_2\ \ldots\ \tau_{k-1}\ \tau_k\,.

Then :math:`\ \ \sigma^{-1}\ =\ 
(\tau_1\,\tau_2\,\ldots\,\tau_{k-1}\,\tau_k)^{-1}\ =\ \,
\tau_k^{-1}\ \tau_{k-1}^{-1}\ \ldots\,\tau_2^{-1}\ \tau_1^{-1}\ =\ \,
\tau_k\ \tau_{k-1}\ \ldots\ \tau_2\ \tau_1\,,`

.. math:
   
   \sigma^{-1}\ =\ (\tau_1\,\tau_2\,\ldots\,\tau_{k-1}\,\tau_k)^{-1}\ =\ 
   \tau_k^{-1}\,\tau_{k-1}^{-1}\,\ldots\,\tau_2^{-1}\,\tau_1^{-1}\ =\ 
   \tau_k\,\tau_{k-1}\,\ldots\,\tau_2\,\tau_1\,,

.. math::
   
   \text{sgn}\,\sigma^{-1}\ =\ (-1)^k\ =\ \text{sgn}\,\sigma\,.
   \quad\bullet

.. :math:`\ \ \text{sgn}\,\sigma^{-1}\ =\ (-1)^k\ =\ \text{sgn}\,\sigma\,.` 

.. math:
   
   \text{sgn}\,\sigma^{-1}\ =\ (-1)^k\ =\ \text{sgn}\,\sigma\,. 

**Proof** of the Theorem 3. :math:`\,` 
Let :math:`\,\boldsymbol{A}  = [a_{ij}]_{n\times n}\in M_n(K).\ \ `

Then :math:`\,\boldsymbol{A}^T= [\,a_{ij}^T\,]_{n\times n},\ \ `
where :math:`\ \ a_{ij}^T = a_{ji},\ \ i,j = 1,2,\ldots,n.`

Making use of Equations
:math:`\,` :eq:`lem_1`, :math:`\,` :eq:`lem_2` :math:`\,` 
and :math:`\,` :eq:`lem_3`, :math:`\,` we get

.. math::
   :nowrap:
   
   \begin{eqnarray*}
   \det{\boldsymbol{A}^T}\  
   & = & 
   \ \sum_{\sigma\,\in\,S_n}\ \text{sgn}\,\sigma\,\cdot\,
   a_{\,\sigma(1),\,1}^T\ \,a_{\,\sigma(2),\,2}^T\ \,
   \ldots\ \,a_{\,\sigma(n),\,n}^T \ \ = \\
   & = & 
   \ \sum_{\sigma\,\in\,S_n}\ \text{sgn}\,\sigma\,\cdot\,
   a_{\,1,\,\sigma(1)}\ \,a_{\,2,\,\sigma(2)}\ \,
   \ldots\ \,a_{\,n,\,\sigma(n)} \ \ = \\
   & = & 
   \ \sum_{\sigma\,\in\,S_n}\ \text{sgn}\,\sigma^{-1}\,\cdot\,
   a_{\,1,\,\sigma^{-1}(1)}\ \,a_{\,2,\,\sigma^{-1}(2)}\ \,
   \ldots\ \,a_{\,n,\,\sigma^{-1}(n)}\ \ = \\
   & = & 
   \ \sum_{\sigma\,\in\,S_n}\ \text{sgn}\,\sigma^{-1}\,\cdot\,
   a_{\,\sigma(1),\,\sigma^{-1}[\sigma(1)]}\ \,
   a_{\,\sigma(2),\,\sigma^{-1}[\sigma(2)]}\ \,\ldots\ \,
   a_{\,\sigma(n),\,\sigma^{-1}[\sigma(n)]} \ \ = \\
   & = & 
   \ \sum_{\sigma\,\in\,S_n}\ \text{sgn}\,\sigma\,\cdot\,
   a_{\,\sigma(1),1}\ \,a_{\,\sigma(2),2}\ \,
   \ldots\ \,a_{\,\sigma(n),n} \ \ = \\[5pt]
   & = &
   \ \det{\boldsymbol{A}}\;.\quad\bullet
   \end{eqnarray*}

.. math:
   
   \begin{array}{ccl}
   \det\boldsymbol{A}^T 
   & = & 
   \ \displaystyle\sum_{\sigma\,\in\,S_n}\ \text{sgn}\,\sigma\,\cdot\,
   a_{\sigma(1),1}^T\ a_{\sigma(2),2}^T\ \ldots\ a_{\sigma(n),n}^T\ \ = \\
   & = & 
   \ \displaystyle\sum_{\sigma\,\in\,S_n}\ \text{sgn}\,\sigma\,\cdot\,
   a_{1,\,\sigma(1)}\ a_{2,\,\sigma(2)}\ \ldots\ a_{n,\,\sigma(n)}\ \ = \\
   & = & 
   \ \displaystyle\sum_{\sigma\,\in\,S_n}\ \text{sgn}\,\sigma^{-1}\,\cdot\,
   a_{1,\,\sigma^{-1}(1)}\ a_{2,\,\sigma^{-1}(2)}\ 
   \ldots\ a_{n,\,\sigma^{-1}(n)}\ \ = \\
   & = & 
   \ \displaystyle\sum_{\sigma\,\in\,S_n}\ \text{sgn}\,\sigma^{-1}\,\cdot\,
   a_{\sigma(1),\,\sigma^{-1}[\sigma(1)]}\ 
   a_{\sigma(2),\,\sigma^{-1}[\sigma(2)]}\ \ldots\ 
   a_{\sigma(n),\,\sigma^{-1}[\sigma(n)]}\ \ = \\
   & = & 
   \ \displaystyle\sum_{\sigma\,\in\,S_n}\ \text{sgn}\,\sigma\,\cdot\,
   a_{\sigma(1),1}\ a_{\sigma(2),2}\ \ldots\ a_{\sigma(n),n}\ \ = \\
   & = &
   \ \ \det\boldsymbol{A}\;.
   \end{array}

   
.. Liczba składników w rozwinięciu permutacyjnym szybko rośnie ze stopniem 
   wyznacznika: :math:`\\`
   dla :math:`\,n=4\ ` mamy :math:`\,4!=24\ ` składniki w postaci iloczynu 
   czterech elementów macierzowych, dla :math:`\,n=5\ ` jest :math:`\,5!=120\ ` 
   iloczynów pięciu elementów  itd. Dla dużych :math:`\,n\ ` ta metoda 
   wyliczania wyznaczników jest więc nieefektywna.



















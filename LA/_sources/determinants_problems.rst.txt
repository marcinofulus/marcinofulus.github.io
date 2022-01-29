
Problems
--------

**Problem 1.** :math:`\ ` Let

.. math::
   
   \boldsymbol{C}\ \ =\ \ 
   \left[\begin{array}{cc}
   \boldsymbol{A} & \boldsymbol{0}\, \\[4pt]
   \cdots         & \boldsymbol{B}\,
   \end{array}\right]
   \ \ =\ \ 
   \left[\begin{array}{ccc|ccc}
   a_{11} & \ldots & a_{1p} &    0   & \ldots &    0   \\[4pt]
   \ldots & \ldots & \ldots & \ldots & \ldots & \ldots \\[4pt]
   a_{p1} & \ldots & a_{pp} &    0   & \ldots &    0   \\[4pt] \hline
   \ldots & \ldots & \ldots & b_{11} & \ldots & b_{1q} \\[4pt]
   \ldots & \ldots & \ldots & \ldots & \ldots & \ldots \\[4pt]
   \ldots & \ldots & \ldots & b_{q1} & \ldots & b_{qq}
   \end{array}\right]

where the lower left rectangle is filled with any elements. Prove that

.. math::
   
   \det{\boldsymbol{C}}\ \,=\ \,
   \det{\boldsymbol{A}}\,\cdot\,\det{\boldsymbol{B}}\,.

**Proof.** :math:`\ ` Induction with respect to :math:`\ q.`

**I.** :math:`\ ` We verify the statement for :math:`\ q = 1.\ ` 
Then :math:`\ \boldsymbol{B}\ =\ [b_{11}]_{1 \times 1}:`

.. math::
   
   \boldsymbol{C}\ \ =\ \ 
   \left[\begin{array}{ccc|c}
   a_{11} & \ldots & a_{1p} &    0   \\[4pt]
   \ldots & \ldots & \ldots & \ldots \\[4pt]
   a_{p1} & \ldots & a_{pp} &    0   \\[4pt] \hline
   \ldots & \ldots & \ldots & b_{11}
   \end{array}\right]

By the Laplace expansion along the last column we get

.. math::
   
   \det{\boldsymbol{C}}\ \,=\ \,
   b_{11}\,\cdot\:(-1)^{2\,(p+1)}\ \det{\boldsymbol{A}}\ \,=\ \,
   \det{\boldsymbol{A}}\,\cdot\:b_{11}\ \,=\ \,
   \det{\boldsymbol{A}}\,\cdot\,\det{\boldsymbol{B}}\,.

**II.** :math:`\ `
We assume that the statement is true for some :math:`\ q-1,\ \\` 
and have to prove that the statemant is then true for :math:`\ q.`

We shall use the following denotements (:math:`i=1,2,\ldots,q`):

:math:`M_{iq}\ -\ ` the minor of matrix :math:`\ \boldsymbol{B}\ `
obtained by removing the :math:`\ i`-th row and the :math:`\ q`-th column;

:math:`B_{iq}\ -\ ` the cofactor of the element :math:`\ b_{iq}\ `
in the matrix :math:`\ \boldsymbol{B};`

:math:`C_{iq}\ -\ ` the cofactor of the element  :math:`\ b_{iq}\ `
in the matrix  :math:`\ \boldsymbol{C}.`

In virtue of the induction hypothesis:

.. math::
   
   \begin{array}{rl}
   C_{iq} & =\ \ (-1)^{(p+i)+(p+q)}\ \cdot\ 
   \det{\boldsymbol{A}}\ \cdot\ M_{iq}\ \ = \\
   & =\ \ (-1)^{2p+(i+q)}\ \cdot\ \det{\boldsymbol{A}}\ \cdot\ M_{iq}\ \ = \\
   & =\ \ \det{\boldsymbol{A}}\ \cdot\ (-1)^{i+q}\ \cdot\ M_{iq}\ \ =\ \ 
   \det{\boldsymbol{A}}\ \cdot\ B_{iq}\,.
   \end{array}

The Laplace expansion along the last column of matrix 
:math:`\ \boldsymbol{C}\ ` yields

.. math::
   
   \det{\boldsymbol{C}}\ \,=\ \,
   \displaystyle\sum_{i=1}^q\ b_{iq}\,C_{iq}\ =\ 
   \det{\boldsymbol{A}}\ \cdot\ \displaystyle\sum_{i=1}^q\,b_{iq}\ B_{iq}\ =\ 
   \det{\boldsymbol{A}}\ \cdot\ \det{\boldsymbol{B}}\,.
   \quad\bullet

**Corollary.** :math:`\\` 
Suppose that 
:math:`\ \boldsymbol{A}_1,\,\boldsymbol{A}_2,\,\ldots,\,\boldsymbol{A}_k\ `
are square matrices, possibly of different sizes.
Once again by induction one may easily prove the formula for the
determinant of the block-diagonal matrix:

.. math::
   
   \left|\begin{array}{cccc}
   \boldsymbol{A}_1 & \boldsymbol{0}   & \ldots & \boldsymbol{0}   \\[4pt]
   \boldsymbol{0}   & \boldsymbol{A}_2 & \ldots & \boldsymbol{0}   \\[4pt]
   \cdots           & \cdots           & \cdots & \cdots           \\[4pt]
   \boldsymbol{0}   & \boldsymbol{0}   & \ldots & \boldsymbol{A}_k
   \end{array}\right|\ \ =\ \ 
   \det{\boldsymbol{A}_1}\ \cdot\ \det{\boldsymbol{A}_2}
   \ \cdot\ \ldots\ \cdot\ \det{\boldsymbol{A}_k}\,.

In particular, if :math:`\ \boldsymbol{I}_n\in M_n(K)\ `
is the identity matrix, :math:`\ \boldsymbol{A}\in M_m(K),\ ` then

.. math::
   
   \det{(\boldsymbol{I}_n\otimes\boldsymbol{A})}\ \ =\ \ 
   \underbrace{
   \left|\begin{array}{cccc}
   \boldsymbol{A} & \boldsymbol{0} & \cdots & \boldsymbol{0} \\[3pt]
   \boldsymbol{0} & \boldsymbol{A} & \cdots & \boldsymbol{0} \\[3pt]
   \cdots & \cdots & \cdots & \cdots                         \\[3pt]
   \boldsymbol{0} & \boldsymbol{0} & \cdots & \boldsymbol{A}
   \end{array}\right|}_{n\ \text{blocks}}\ \ =\ \ 
   \left(\det{\boldsymbol{A}}\right)^n.

**Problem 2.** :math:`\ `  

Prove that 
if :math:`\ \boldsymbol{P}_\sigma\in M_n(K)\ ` is the matrix
of a permutation :math:`\,\sigma\in S_n\,,\ ` 
then :math:`\ \det\boldsymbol{P}_\sigma\ =\ \text{sgn}\,\sigma\,.`

**Proof.**

Any permutation :math:`\,\sigma\in S_n\ ` may be represented 
as a product of transpositions:

.. math::
   
   \sigma\ =\ \tau_k\,\dots\,\tau_2\ \tau_1\,.

Accordingly, the matrix :math:`\ \boldsymbol{P}_\sigma\,` is a product
of matrices representing transpositions:

.. math::
   
   \boldsymbol{P}_\sigma\ =\ 
   \boldsymbol{P}_{\tau_k\,\dots\,\tau_2\ \tau_1}\ =\ 
   \boldsymbol{P}_{\tau_1}\ \boldsymbol{P}_{\tau_2}\ \ldots\ 
   \boldsymbol{P}_{\tau_k}\,.

Transpositions are represented by elementary matrices of the first kind
:math:`\\` 
(obtained from the identity matrix by a transposition of two rows).
So

.. math::
   
   \boldsymbol{P}_\sigma\ =\ 
   \boldsymbol{E}_1^{(1)}\,\boldsymbol{E}_1^{(2)}\,\ldots\ 
   \boldsymbol{E}_1^{(k)}\,.

Every elementary matrix of the first kind has determinant :math:`-1`:

.. math:: 
   
   \det{\boldsymbol{E}_1^{(i)}}\ =\ -1\,,\qquad i=1,2,\ldots\,k.

Determinant of a product of matrices being equal to the product of determinants:

.. math::

   \det{\left(\boldsymbol{E}_1^{(1)}\,\boldsymbol{E}_1^{(2)}\,\ldots\,
   \boldsymbol{E}_1^{(k)}\right)}\ \ =\ \ 
   \det{\boldsymbol{E}_1^{(1)}}\cdot\ \det{\boldsymbol{E}_1^{(2)}}\,
   \cdot\ \ldots\ \cdot\   
   \det{\boldsymbol{E}_1^{(k)}}\,,

we obtain
(:math:`\,k\,` is the number of factors in any representation
of :math:`\,\sigma\,` as a product of transpositions): 

.. math::
   
   \det{\boldsymbol{P}_{\sigma}}\ =\ (-1)^k\ =\ \text{sgn}\,\sigma\,.
   \quad\bullet

.. Thus we have come up with the thesis of the statement.








   


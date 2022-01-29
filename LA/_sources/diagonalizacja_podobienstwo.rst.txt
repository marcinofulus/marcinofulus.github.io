Similarity Transformation
~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Definition.
   
   Matrices :math:`\,\boldsymbol{A},\,\boldsymbol{B}\in M_n(C)\,`
   are *similar* if there exists a matrix 
   :math:`\ \boldsymbol{P}\in M_n(C)\ ` such that
   
   .. math::
      
      \boldsymbol{B}\ =\ \boldsymbol{P}^{-1} \boldsymbol{A}\,\boldsymbol{P}\,.
   
   Then the matrix :math:`\,\boldsymbol{B}\,` is related with 
   :math:`\,\boldsymbol{A}\,` by a *similarity transformation*.

**Theorem 4.** :math:`\ `
Characteristic polynomials of similar matrices are equal.

Namely, if :math:`\ \boldsymbol{B}\,=\,
\boldsymbol{P}^{-1} \boldsymbol{A}\,\boldsymbol{P},\ \ \ 
\boldsymbol{A},\boldsymbol{B},\boldsymbol{P}\in M_n(C),\ 
\det\boldsymbol{P}\neq 0\,,\ ` then
:math:`\ \ w_{\boldsymbol{B}}(\lambda) = w_{\boldsymbol{A}}(\lambda)\,,\ `
where :math:`\ w_{\boldsymbol{X}}(\lambda) = 
\det(\boldsymbol{X}-\lambda\,\boldsymbol{I}_n)\,` with
:math:`\ \boldsymbol{I}_n\ ` an identity matrix of size :math:`n`
denotes a characteristic polynomial
of matrix :math:`\boldsymbol{X} = \boldsymbol{A},\,\boldsymbol{B}\,.` 

**Proof** bases on Cauchy's theorem on determinant of a product of matrices:

.. math::
   
   \begin{array}{rl}
   w_{\boldsymbol{B}}(\lambda) \!\! & 
   =\ \ \det{(\boldsymbol{B}-\lambda\,\boldsymbol{I}_n)}\ = \\ 
   & =\ \ \det{(\boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P} - 
   \boldsymbol{P}^{-1}\lambda\,\boldsymbol{I}_n\ \boldsymbol{P})}\ = \\
   & =\ \ \det{[\,\boldsymbol{P}^{-1}
   (\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\,
   \boldsymbol{P}\,]}\ = \\
   & =\ \ \det{\boldsymbol{P}^{-1}}\cdot\ 
   \det{(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)}\ \cdot\ 
   \det{\boldsymbol{P}}\ = \\
   & =\ \ (\det{\boldsymbol{P}})^{-1}\cdot\ 
   \det{(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)}\,\cdot\,
   \det{\boldsymbol{P}}\ = \\
   & =\ \ \det{(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)}\ \ =\ \ 
   w_{\boldsymbol{A}}(\lambda)\,.
   \end{array}

.. **Wniosek.** Macierze podobne mają takie same wartości własne, 
   o takich samych krotnościach algebraicznych.

**Corollary.** Similar matrices have the same set of eigenvalues.
The corresponding eigenvalues have the same algebraic multiplicities.

**Theorem 5.** :math:`\\`
The corresponding eigenvalues of similar matrices have the same geometric multilplicity.

**Proof.** :math:`\\`
Let :math:`\ \lambda\in C\ ` be an eigenvalue of the matrix
:math:`\ \boldsymbol{A}\in M_n(C)\ ` with  geometric mutliplicity :math:`\,k`.
Then this eigenvalue is associated with :math:`\,k\,` linearly independent eigenvectors
:math:`\ \boldsymbol{x}_i\,` of the matrix :math:`\ \boldsymbol{A}:`

.. math::
   :label: condition
   
   \boldsymbol{A}\,\boldsymbol{x}_i\ =\ \lambda\,\boldsymbol{x}_i\,,
   \quad i=1,2,\ldots,k\,;
   
   \sum_{i=1}^k\,\alpha_i\,\boldsymbol{x}_i\ =\ \boldsymbol{0}
   \quad\Rightarrow\quad\alpha_i=0,\ \ i=1,2,\ldots,k\,.

Let :math:`\ \boldsymbol{B}\,=\,
\boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P},\ `
:math:`\ \boldsymbol{y}_i\,=\,\boldsymbol{P}^{-1}\,\boldsymbol{x}_i,\ \ 
i=1,2,\ldots,k\,,\ ` :math:`\ \boldsymbol{P}\in M_n(C),\,
\det{\boldsymbol{P}}\neq 0.\ ` Then

.. math::

   \boldsymbol{B}\,\boldsymbol{y}_i\ =\ 
   (\boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P})\,
   (\boldsymbol{P}^{-1}\boldsymbol{x}_i)\ =\ 
   \boldsymbol{P}^{-1}\boldsymbol{A}\,(\boldsymbol{P}\,
   \boldsymbol{P}^{-1})\ \boldsymbol{x}_i\ =

   \quad =\ 
   \boldsymbol{P}^{-1}(\boldsymbol{A}\,\boldsymbol{x}_i)\ =\ 
   \boldsymbol{P}^{-1}(\lambda\,\boldsymbol{x}_i)\ =\ 
   \lambda\,(\boldsymbol{P}^{-1}\boldsymbol{x}_i)\ =\ 
   \lambda\,\boldsymbol{y}_i\,,

   \sum_{i=1}^k\,\alpha_i\,\boldsymbol{y}_i\ =\ \boldsymbol{0}
   \quad\Leftrightarrow\quad
   \sum_{i=1}^k\,\alpha_i\,(\boldsymbol{P}^{-1}\,\boldsymbol{x}_i)\ =\ 
   \boldsymbol{0}
   \quad\Leftrightarrow\quad
   \boldsymbol{P}^{-1}\,\sum_{i=1}^k\,\alpha_i\,\boldsymbol{x}_i\ =\ 
   \boldsymbol{0}
   \quad\Leftrightarrow\quad
   
   \Leftrightarrow\qquad\sum_{i=1}^k\,\alpha_i\,\boldsymbol{x}_i\ =\ 
   \boldsymbol{0}
   \quad\Rightarrow\quad
   \alpha_i=0,\ \ i=1,2,\ldots,k.

Hence, the matrix :math:`\ \boldsymbol{B}\ ` satisfies the conditions 
analogous to :eq:`condition`:

.. math::
   
   \boldsymbol{B}\,\boldsymbol{y}_i\ =\ \lambda\,\boldsymbol{y}_i\,,
   \quad i=1,2,\ldots,k\,;
   
   \sum_{i=1}^k\,\alpha_i\,\boldsymbol{y}_i\ =\ \boldsymbol{0}
   \quad\Rightarrow\quad\alpha_i=0,\ \ i=1,2,\ldots,k\,,

which means that :math:`\ \lambda\ ` is an eigenvalue of the matrix
:math:`\ \boldsymbol{B}\ ` with the same 
(as the matrix :math:`\,\boldsymbol{A})` geometric multiplicity 
:math:`\,k`.

**Theorem 6.** :math:`\\`
Similar matrices have the same determinant and trace, and are of the same rank, 
i.e., if :math:`\ \boldsymbol{B}\,=\,
\boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P},\ `
:math:`\boldsymbol{A},\boldsymbol{B},\boldsymbol{P}\in M_n(C),
\ \det{\boldsymbol{P}}\neq 0,\ \ ` then

.. math::
   
   \det{\boldsymbol{B}}\,=\det{\boldsymbol{A}},\quad 
   \text{Tr}\,{\boldsymbol{B}}\,=\,\text{Tr}\,{\boldsymbol{A}},\quad
   \text{rk}\,{\boldsymbol{B}}\,=\,\text{rk}\,{\boldsymbol{A}}\,.
   
First two equalities follow from a previous theorem on equality of 
characteristic polynomials of similar matrices. 
Namely, :math:`\ \det{\boldsymbol{A}},\,\det{\boldsymbol{B}}\ `
are constant terms (coefficients of :math:`\ \lambda^0`), :math:`\ ` 
and :math:`\ \text{Tr}\,\boldsymbol{A},\,\text{Tr}\,\boldsymbol{B}\ ` 
are coefficients of the term :math:`\ \lambda^{(n-1)}\ ` in 
characteristic polynomials of matrices :math:`\ \boldsymbol{A},\,\boldsymbol{B}`.
Equality of polynomials implies equality of the coefficients of the 
terms having the same power :math:`\ \lambda.`

These relations may be also proved directly from properties of determinant and trace of a matrix.
Cauchy's theorem on determinant of a product of matrices implies that

.. math::
   
   \det{\boldsymbol{B}}\ =\ 
   \det{(\boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P})}\ =

   =\ 
   \det{\boldsymbol{P}^{-1}}\cdot\ 
   \det{\boldsymbol{A}}\ \cdot\ 
   \det{\boldsymbol{P}}\ =

   =\ 
   (\det{\boldsymbol{P}})^{-1}\cdot\ 
   \det{\boldsymbol{A}}\ \cdot\ 
   \det{\boldsymbol{P}}\ =\ \det{\boldsymbol{A}}\,,

and reordering cyclicly the factors under the trace symbol, we obtain 

.. math::
   
   \text{Tr}\,\boldsymbol{B}\ =\ 
   \text{Tr}\,(\boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P})\ =\ 
   \text{Tr}\,(\boldsymbol{A}\,\boldsymbol{P}\,\boldsymbol{P}^{-1})\ =\ 
   \text{Tr}\,\boldsymbol{A}\,.

Equality of ranks of similar matrices follows from the fact that multiplication
of a given matrix by a square non-degenerate matrix (on the left or on the right) 
does not change its rank:

.. math::
   \text{rk}\,\boldsymbol{A}\ =\ 
   \text{rk}\,(\boldsymbol{A}\,\boldsymbol{P})\ =\ 
   \text{rk}\,(\boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P})\ =\ 
   \text{rk}\,{\boldsymbol{B}}\,.

.. .. math::
   
      \text{rz}\,{\boldsymbol{B}}\,=\,
      \text{rz}\,(\boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P})\ =\ 
      \text{rz}\,(\boldsymbol{A}\,\boldsymbol{P})\ =\
      \text{rz}\,\boldsymbol{A}\,.


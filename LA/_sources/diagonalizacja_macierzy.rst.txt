Diagonalization by a Similarity Transformation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Definition.
   
   A matrix :math:`\ \boldsymbol{A}\in M_n(C)\ ` is diagonalizable by a similarity 
   transformation if there exists an invertible matrix
   :math:`\ \boldsymbol{P}\in M_n(C)\ ` such that
   
   .. math::
      :label: similarity
      
      \boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P}\ =\ \boldsymbol{D},
   
   where :math:`\ \boldsymbol{D}\in M_n(C)\ ` is a diagonal matrix.
   
   We say that :math:`\ \boldsymbol{P}\ ` is a diagonalizing matrix 
   or that it diagonalizes the matrix :math:`\ \boldsymbol{A}.`

**Lemma.** 

Consider matrices :math:`\ \boldsymbol{A},\,\boldsymbol{P}\in M_n(C).`
Columns 
:math:`\ \boldsymbol{X}_1,\ \boldsymbol{X}_2,\ldots, \boldsymbol{X}_n\ `
of the matrix :math:`\ \boldsymbol{P}\ ` are eigenvectors
of the matrix :math:`\ \boldsymbol{A}:`

.. math::
   :label: eigen
   
   \boldsymbol{A}\,\boldsymbol{X}_1\,=\,\lambda_1\,\boldsymbol{X}_1,\quad
   \boldsymbol{A}\,\boldsymbol{X}_2\,=\,\lambda_2\,\boldsymbol{X}_2,\quad
   \ldots\quad
   \boldsymbol{A}\,\boldsymbol{X}_n\,=\,\lambda_n\,\boldsymbol{X}_n

if and only if

.. math::
   :label: products
   
   \boldsymbol{A}\,\boldsymbol{P}\,=\,\boldsymbol{P}\,\boldsymbol{D},

where :math:`\ \boldsymbol{D}\,=\,
\text{diag}(\lambda_1,\lambda_2,\ldots,\lambda_n)\,.`

Indeed, according to the column rule of matrix multiplication:

.. math::
   
   \begin{array}{rl}
   \boldsymbol{A}\,\boldsymbol{P} \!\! & 
   =\ \ \boldsymbol{A}\ \,[\ \boldsymbol{X}_1\,|\ \boldsymbol{X}_2\,|
   \ \ldots\,|\ \boldsymbol{X}_n\,]\ \ = \\[6pt]
   & =\ \ [\ \boldsymbol{A}\,\boldsymbol{X}_1\,|\ 
   \boldsymbol{A}\,\boldsymbol{X}_2\,|\ \ldots\,|\ 
   \boldsymbol{A}\,\boldsymbol{X}_n\,]
   \\[10pt]
   \boldsymbol{P}\,\boldsymbol{D} \!\! & 
   =\ \ [\ \lambda_1\,\boldsymbol{X}_1\,|\ 
   \lambda_2\,\boldsymbol{X}_2\,|\  \ldots\,|\ 
   \lambda_n\,\boldsymbol{X}_n\,] ,
   \end{array}

.. .. math::
   
   \boldsymbol{A}\boldsymbol{P}\ =\ 
   \boldsymbol{A}\ [\ \boldsymbol{X}_1\,|\ \boldsymbol{X}_2\,|
   \ \ldots\,|\ \boldsymbol{X}_n\,]\ =\ 
   [\ \boldsymbol{A}\,\boldsymbol{X}_1\,|\ 
   \boldsymbol{A}\,\boldsymbol{X}_2\,|\ \ldots\,|\ 
   \boldsymbol{A}\,\boldsymbol{X}_n\,]
   
   \boldsymbol{P}\boldsymbol{D}\ =\ 
   [\ \lambda_1\,\boldsymbol{X}_1\,|\ 
   \lambda_2\,\boldsymbol{X}_2\,|\  \ldots\,|\ 
   \lambda_n\,\boldsymbol{X}_n\,]

and thus the conditions :eq:`eigen` and :eq:`products` equivalent.

**Theorem 7.**

A matrix :math:`\ \boldsymbol{A}\ ` is diagonalizable by a similarity 
transformation :eq:`similarity` if and only if the space
:math:`\,C^n\,` has a basis :math:`\,\mathcal{B} = (\boldsymbol{X}_1,\, 
\boldsymbol{X}_2,\,\ldots,\,\boldsymbol{X}_n)\ ` 
consisting of eigenvectors of the matrix :math:`\ \boldsymbol{A}:`

.. math::
   
   \boldsymbol{A}\,\boldsymbol{X}_1\,=\,\lambda_1\,\boldsymbol{X}_1,\quad
   \boldsymbol{A}\,\boldsymbol{X}_2\,=\,\lambda_2\,\boldsymbol{X}_2,\quad
   \ldots,\quad
   \boldsymbol{A}\,\boldsymbol{X}_n\,=\,\lambda_n\,\boldsymbol{X}_n\,,\quad
   \lambda_1,\lambda_2,\ldots,\lambda_n\in C\,.

Then the matrix :math:`\ \boldsymbol{P}\,=\,
[\ \boldsymbol{X}_1\,|\,\boldsymbol{X}_2\,|\,\ldots\,|\,\boldsymbol{X}_n\ ],\ `
whose columns are vectors from the basis :math:`\,\mathcal{B}\,,\ ` diagonalizes the matrix :math:`\,\boldsymbol{A}.`

.. złożona kolumnowo z wektorów bazy :math:`\ \mathcal{B}.`

**Proof.**

A matrix :math:`\ \boldsymbol{A}\ ` is diagonalizable by a similarity 
transformation if there exists an invertible matrix
:math:`\ \boldsymbol{P}\,\equiv\,
[\ \boldsymbol{X}_1\,|\ \boldsymbol{X}_2\,|\ \ldots\,|\ \boldsymbol{X}_n\,]\ `
such that

.. math::
   
   \boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P}\ =\ \boldsymbol{D},
   
where :math:`\ \boldsymbol{D}\ ` is a diagonal matrix: 
:math:`\ \boldsymbol{D}\,=\,\text{diag}(\lambda_1,\lambda_2,\ldots,\lambda_n).\ `
This is equivalent to the conditions

.. math::
   
   \boldsymbol{A}\,\boldsymbol{P}\,=\,\boldsymbol{P}\,\boldsymbol{D}
   \quad\text{and}\quad \det{\boldsymbol{P}}\neq 0.

The condition :math:`\ \det{\boldsymbol{P}}\neq 0\ ` means that 
:math:`\ \mathcal{B} = 
(\boldsymbol{X}_1,\, \boldsymbol{X}_2,\,\ldots,\,\boldsymbol{X}_n)\ `
comprises a linearly independent set of vectors of the space :math:`\ C^n.\ `
Moreover, by the above Lemma:

.. math::
   
   \boldsymbol{A}\,\boldsymbol{X}_1\,=\,\lambda_1\,\boldsymbol{X}_1,\quad
   \boldsymbol{A}\,\boldsymbol{X}_2\,=\,\lambda_2\,\boldsymbol{X}_2,\quad
   \ldots\quad
   \boldsymbol{A}\,\boldsymbol{X}_n\,=\,\lambda_n\,\boldsymbol{X}_n .

In an :math:`\ n`-dimensional vector space every set of :math:`\,n\,` linearly 
independent vectors is a basis. Therefore, since :math:`\ \dim{C^n}=n,\ ` so
:math:`\,\mathcal{B}\ ` is a basis of the space :math:`\ C^n;\ `
it is the basis consisting of eigenvectors of the matrix :math:`\,\boldsymbol{A}.`

On the other hand, if eigenvectors :math:`\ \boldsymbol{X}_1,\,\boldsymbol{X}_2,\,
\ldots,\,\boldsymbol{X}_n\ ` of the matrix :math:`\,\boldsymbol{A}\in M_n(C)\,`
span the space :math:`\,C^n,\ ` then the matrix :math:`\,\boldsymbol{P}\,` 
whose columns are the basis vectors diagonalizes the matrix 
:math:`\,\boldsymbol{A}.`
 
**Comments and corollaries.**

**1.)** Every matrix :math:`\,\boldsymbol{A}\in M_n(C)\,` has at least
one eigenvalue :math:`\,\lambda\,` and the associated eigenvector
:math:`\,\boldsymbol{X}.\ ` Hence, because the equation :eq:`eigen` does not 
require that the eigenvalues
:math:`\,\lambda_i\ ` and :math:`\,` the associated eigenvectors
:math:`\,\boldsymbol{X}_i\ ` are distinct, there always exists a matrix 
:math:`\,\boldsymbol{P}\ ` such that the equation :eq:`products` holds. 
In particular, one may take

.. math::
   
   \lambda_1\,=\,\lambda_2=\,\ldots\,\lambda_n\,=\lambda,\quad
   \boldsymbol{X}_1\,=\,\boldsymbol{X}_2\,=\,\ldots\boldsymbol{X}_n\,=\,
   \boldsymbol{X}.

Then :math:`\,\boldsymbol{A}\boldsymbol{P}=
\boldsymbol{P}\boldsymbol{D}=\lambda\,\boldsymbol{P},\ `
but the matrix :math:`\ \boldsymbol{P}\ ` is not invertible and thus
the relation does not hold :eq:`similarity`.

**2.)** The formula :math:`\ \boldsymbol{D}\,=\,
\boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P}\ ` may be interpreted
in terms of transformation of a matrix of a linear operator under a change of basis.
Consider the space :math:`\,C^n\ ` with the canonical basis 
:math:`\ \mathcal{E}\,=\,(\boldsymbol{e}_1,\boldsymbol{e}_2,\ldots\,
\boldsymbol{e}_n).\ ` Let :math:`\boldsymbol{A}\ ` be the matrix of a linear 
operator :math:`F\in \text{End}(C^n)\ ` defined by
:math:`\ F(\boldsymbol{x})\,:\,=\,\boldsymbol{A}\boldsymbol{x},\ `
:math:`\,\boldsymbol{x}\in C^n.\ ` If eigenvectors
:math:`\ \boldsymbol{X}_1,\boldsymbol{X}_2,\ldots,\boldsymbol{X}_n\ ` 
of the operator :math:`\,F\,` are linearly independent, then the matrix
:math:`\ \boldsymbol{P}\,=\,
[\ \boldsymbol{X}_1\,|\,\boldsymbol{X}_2\,|\,\ldots\,|\,\boldsymbol{X}_n\ ]\ ` 
is the transition matrix from the canonical basis
:math:`\,\mathcal{E}\,` to the basis :math:`\,\mathcal{B}\,=\,
(\boldsymbol{X}_1,\boldsymbol{X}_2,\ldots\,\boldsymbol{X}_n)\ ` consisting of the eigenvectors.

Hence, :math:`\boldsymbol{D}\ ` is a matrix of the operator :math:`\,F\ ` in the basis
:math:`\,\mathcal{B}\ ` consisting of its eigenvectors. As one should expect,  
this is a diagonal matrix with the eigenvalues of :math:`\,F\ ` on the diagonal.

**3.)** We know already that the eigenevectors of a linear operator which 
are associated to different eigenvalues are linearly independent.

**Corollary.** If a matrix :math:`\,\boldsymbol{A}\in M_n(C)\ ` has 
:math:`\,n\,` distinct eigenvalues, then there exists a similarity transformation
which diagonalizes this matrix.

Indeed, if columns of the matrix :math:`\,\boldsymbol{P}\,` are eigenvectors 
of the matrix :math:`\,\boldsymbol{A}\,` which are associated 
with distinct eigenvalues, then the matrix :math:`\,\boldsymbol{P}\,`
is non-degenerate: :math:`\,\det{\boldsymbol{P}}\neq 0,\ ` and thus invertible.

**4.)** Eigenvectors of a normal operator which are associated 
with distinct eigenvalues comprise an orthogonal system, and after normalization - an orthonormal system.
A matrix whose columns comprise an orthonormal system is unitary.

**Corollary.** Let :math:`\,\boldsymbol{A}\in M_n(C)\ ` be a 
normal (e.g. Hermitian or unitary) matrix. If :math:`\,\boldsymbol{A}\ `
has :math:`\,n\,` distinct eigenvalues, then there exists a unitary  
similarity transformation which diagonalizes this matrix (a diagonalizing 
matrix :math:`\,\boldsymbol{P}\ ` is unitary: 
:math:`\ \boldsymbol{P}^+\boldsymbol{P}=\boldsymbol{I}_n).`
   
**Remark.** A normal matrix does not have to have :math:`\,n\,` 
distinct eigenvectors to be diagonalizable. Namely, one can prove a more general

**Theorem 8.**

A matrix :math:`\,\boldsymbol{A}\in M_n(C)\ ` is diagonalizable by a unitary similarity transformation if and only if it is normal.

**Application to real matrices.**

For a real matrix :math:`\,\boldsymbol{A}:\ ` 
:math:`\,\boldsymbol{A}\in M_n(R),\ ` we have
:math:`\,\boldsymbol{A}^+=\boldsymbol{A}^T.\ ` Therefore

.. math::
   
   \boldsymbol{A}^+=\boldsymbol{A}
   \quad\Leftrightarrow\quad
   \boldsymbol{A}^T=\boldsymbol{A}

(a real Hermitian matrix is symmetric), and

.. math::
   
   \boldsymbol{A}^+\boldsymbol{A}=\boldsymbol{I}_n
   \quad\Leftrightarrow\quad
   \boldsymbol{A}^T\boldsymbol{A}=\boldsymbol{I}_n

(a real unitary matrix is orthogonal).

**Theorem 9.**

Every real symmetric or orthogonal matrix is 
diagonalizable by a unitary similarity transformation.

Eigenvalues, and thus also eigenvectors, of a real symmetric matrix
are real. Hence, a unitary diagonalizing matrix is a real orthogonal matrix.

**Corollary.** Every real symmetric matrix is 
diagonalizable by a real orthogonal similarity transformation.

In comparison to the previous case, eigenvalues of a real orthogonal matrix
(and thus also its eigenvectors) may be complex and not real.
Then the unitary diagonalizing matrix will be also
complex and not real.

**Theorem 10.**

If a matrix :math:`\ \boldsymbol{A}\ ` is diagonalizable by a similarity
transformation, then an algebraic multiplicity of every eigenvalue is equal
to the geometric multiplicity.

**Proof.** :math:`\ ` 
If a transformation :math:`\ \boldsymbol{A}\ \rightarrow\ 
\boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P}\ \equiv\boldsymbol{D}\ `
diagonalizes the matrix :math:`\ \boldsymbol{A},\ ` 
then :math:`\ \boldsymbol{D}\,=
\text{diag}(\lambda_1,\,\lambda_2,\,\ldots,\,\lambda_k),\ ` where
:math:`\ \lambda_1,\lambda_2,\ldots,\lambda_k\ ` are eigenvalues of the
matrix :math:`\,\boldsymbol{A}.\ `
The number with which :math:`\,\lambda_i\,` occurs on a diagonal of the matrix
:math:`\ \boldsymbol{D}\ ` is equal to both an algebraic and geometric multiplicity of this eigenvalue.






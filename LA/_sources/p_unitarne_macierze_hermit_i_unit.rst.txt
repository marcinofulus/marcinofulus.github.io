
Hermitian and Unitary Matrices
------------------------------

Hermitian Conjugation of a Matrix
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Definition.

   *Hermitian conjugate* of a rectangular complex matrix 
   :math:`\ \boldsymbol{A}\,=\,[\,\alpha_{ij}]_{m\times n}\ `
   is a matrix :math:`\ \boldsymbol{A}^+=\,[\,\alpha_{ij}^+\,]_{n\times m}\,,\ \,`
   where :math:`\ \alpha_{ij}^+\,:\,=\,\alpha_{ji}^*\,,\ ` :math:`i=1,2,\dots,n,\ \ j=1,2,\dots,m\,.`
   
   Operation of Hermitian conjugation is thus a composition of matrix transposition
   :math:`\\` and complex conjugation of its elements (the last two operations are
   commutative):
   
   .. math::
      :label: A_plus
      
      \boldsymbol{A}^+\,:\,=\ (\boldsymbol{A}^T)^*\,=\ (\boldsymbol{A}^*)^T\,.

The name comes from French mathematician Charles Hermite (1822-1901).

In analogy to complex conjugation, we will use the notion "Hermitian conjugation" also for  an operation whose result is Hermitian conjugate of a matrix.

.. W dalszym ciągu termin "sprzężenie hermitowskie" będzie oznaczać (zależnie do kontekstu)
   operację    sprzężenia bądź jej wynik.

**Example.**

.. math::
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{ccc}
   2-i & 3 & 1+i \\ 0 & -1+2\,i & 4\,i
   \end{array}\right]\in M_{2\times 3}(C)\,:\quad
   \boldsymbol{A}^+\,=\ 
   \left[\begin{array}{cc}
   2+i & 0 \\ 3 & -1-2\,i \\ 1-i & -4\,i
   \end{array}\right]\in M_{3\times 2}(C)\,.

**Properties of Hermitian conjugation.**

1. Hermitian conjugate of sum of matrices :math:`\ \boldsymbol{A},\boldsymbol{B}\in M_{m\times n}(C)\ ` is equal to sum of their Hermitian conjugates:

   .. math::
      
      (\boldsymbol{A}+\boldsymbol{B})^+\,=\ \boldsymbol{A}^+\,+\ \boldsymbol{B}^+\,.

2. Multiplication of a matrix by scalar :math:`\,\alpha\in C\ ` multiplies its Hermitian conjugate by :math:`\,\alpha^*:`
   
   .. math::
      
      (\alpha\boldsymbol{A})^+\,=\ \alpha^*\boldsymbol{A}^+\,,\qquad
      \alpha\in C\,,\ \ \boldsymbol{A}\in M_{m\times n}(C)\,.

3. Hermitian conjugate of product of matrices
   :math:`\ \boldsymbol{A}\in M_{m\times p}\ ` and :math:`\ \boldsymbol{B}\in M_{p\times n}\ ` is equal to product of Hermitian conjugates with reverse order of the factors:
   
   .. math::
      
      (\boldsymbol{A}\boldsymbol{B})^+\,=\ \boldsymbol{B}^+\boldsymbol{A}^+\,.

4. Double Hermitian conjugation returns the initial matrix:
   
   .. math::
      
      (\boldsymbol{A}^+)^+\,=\ \boldsymbol{A}\,,\qquad\boldsymbol{A}\in M_{m\times n}(C)\,.

.. admonition:: Corollary.
   
   Hermitian conjugation is an antilinear operation:
   
   .. math::
      
      (\alpha_1\boldsymbol{A}_1+\alpha_2\boldsymbol{A}_2)^+\,=\ 
      \alpha_1^*\,\boldsymbol{A}_1^+\,+\,\alpha_2^*\,\boldsymbol{A}_2^+\,,\quad
      \alpha_1,\alpha_2\in C\,,\ \ \boldsymbol{A}_1,\boldsymbol{A}_2\in M_{m\times n}(C)\,.

For a real matrix :math:`\,\boldsymbol{A}\in M_{m\times n}(R),\ `
Hermitian conjugate boils down to transpose: 
:math:`\,\boldsymbol{A}^+\,=\ \boldsymbol{A}^T\,.`

Now, an inner product of vectors :math:`\ \  
\boldsymbol{x}\,=\,
\left[\begin{array}{c} \alpha_1 \\ \alpha_2 \\ \dots \\ \alpha_n \end{array}\right]
\ \ \ ` and :math:`\quad
\boldsymbol{y}\,=\,
\left[\begin{array}{c} \beta_1 \\ \beta_2 \\ \dots \\ \beta_n \end{array}\right]`
in the space :math:`\,C^n\ ` may be concisely written in a form of a matrix product:

.. math::
   :label: x_y
   
   \langle \boldsymbol{x},\boldsymbol{y}\rangle\ \,=\ \,
   \sum_{i\,=\,1}^n\ \alpha_i^*\,\beta_i\ \,=\ \,
   [\,\alpha_1^*,\,\alpha_2^*,\,\dots,\,\alpha_n^*\,]\ 
   \left[\begin{array}{c} \beta_1 \\ \beta_2 \\ \dots \\ \beta_n \end{array}\right]\ \,=\ \,
   \boldsymbol{x}^+\,\boldsymbol{y}\,.

.. admonition:: Theorem 5.

   For a given matrix :math:`\,\boldsymbol{A}\in M_n(C),\ `
   :math:`\ \boldsymbol{A}^+\ ` is the only matrix satisfying the condition
   
   .. math::
      :label: x_A_y 
      
      \langle\,\boldsymbol{x},\boldsymbol{A}^+\boldsymbol{y}\,\rangle\ =\ 
      \langle\,\boldsymbol{A}\boldsymbol{x},\boldsymbol{y}\,\rangle\qquad
      \text{for every}\ \ \boldsymbol{x},\boldsymbol{y}\in C^n\,.

**Proof.**

.. Najpierw sprawdzimy, że macierz :math:`\,\boldsymbol{A}^+\ ` spełnia warunek :eq:`x_A_y`:

The property 3. of Hermitian conjugation and the formula :eq:`x_y` imply that

.. math::
   
   \langle\boldsymbol{x},\boldsymbol{A}^+\boldsymbol{y}\rangle\,=\,
   \boldsymbol{x}^+(\boldsymbol{A}^+\boldsymbol{y})\,=\, 
   (\boldsymbol{x}^+\boldsymbol{A}^+)\ \boldsymbol{y}\,=\,
   (\boldsymbol{A}\boldsymbol{x})^+\boldsymbol{y}\,=\,
   \langle\boldsymbol{A}\boldsymbol{x},\boldsymbol{y}\rangle\,.

Hence, the matrix :math:`\,\boldsymbol{A}^+\ ` satisfies the condition  :eq:`x_A_y`.
To show that this is the only matrix with such property :math:`\,`
denote :math:`\,\boldsymbol{A}=[\,\alpha_{ij}\,]_{n\times n}\ ` and :math:`\,` assume
that for certain matrix :math:`\,\boldsymbol{B}=[\,\beta_{ij}\,]_{n\times n}:`

.. math::

   \langle\,\boldsymbol{x},\boldsymbol{B}\boldsymbol{y}\,\rangle\ =\ 
   \langle\,\boldsymbol{A}\boldsymbol{x},\boldsymbol{y}\,\rangle\qquad
   \text{for every}\ \ \boldsymbol{x},\boldsymbol{y}\in C^n\,.

In particular, if 
:math:`\ \,\boldsymbol{x},\,\boldsymbol{y}\ \,` are the canonical basis vectors 
:math:`\ \,\boldsymbol{e}_i,\,\boldsymbol{e}_j\ ,\,` we obtain :math:`\,`
(:math:`\ i,j=1,2,\dots,n`) :

.. math::
   
   \beta_{ij}\,=\ \boldsymbol{e}_i^+\,\boldsymbol{B}\,\boldsymbol{e}_j\,=\ 
   \langle\,\boldsymbol{e}_i,\boldsymbol{B}\boldsymbol{e}_j\rangle\ =\ 
   \langle\,\boldsymbol{A}\boldsymbol{e}_i,\boldsymbol{e}_j\,\rangle\ =\ 
   \langle\,\boldsymbol{e}_j,\boldsymbol{A}\boldsymbol{e}_i\rangle^*\ =\ 
   (\boldsymbol{e}_j^+\boldsymbol{A}\;\boldsymbol{e}_i)^*\,=\ \alpha_{ji}^*\,=\ 
   \alpha_{ij}^+\,,

which gives the equality :math:`\ \boldsymbol{B}=\boldsymbol{A}^+\,.`

Hence, the condition :eq:`x_A_y` may be treated as an equivalent definition for Hermitian conjugate :math:`\ \boldsymbol{A}^+\,` of a *square* matrix :math:`\,\boldsymbol{A}.\ `
Further we will see that exactly in this way one defines Hermitian conjugation of a linear operator.

.. Tutaj raczej przyjęliśmy bardziej ogólne określenie :eq:`A_plus`, natomiast warunek analogiczny
   do :eq:`x_A_y` pojawi się w definicji sprzężenia hermitowskiego operatora liniowego.

.. admonition:: Theorem 6.
   
   Determinant of Hermitian conjugate of a square complex matrix 
   is equal to complex conjugate of its determinant:
   
   .. math::
      
      \det\boldsymbol{A}^+\ =\ (\det\boldsymbol{A})^*\,,\qquad\boldsymbol{A}\in M_n(C)\,.
 
**Proof.** :math:`\,` Let :math:`\,\boldsymbol{A}=[\,\alpha_{ij}\,]_{n\times n}\in M_n(C).`
By definition :eq:`A_plus`, we have 

.. math::
   
   \det\boldsymbol{A}^+\,=\ \det\,(\boldsymbol{A}^*)^T\,=\ \det\boldsymbol{A}^*\,,
   \qquad\text{where}\quad\boldsymbol{A}^*=[\,\alpha_{ij}^*\,]_{n\times n}\,.

Now it is easy to see from permutation expansion of the determinant that the determinant of complex conjugate of a matrix is equal to  complex conjugate of its determinant:
:math:`\ \,\det\boldsymbol{A}^*\equiv\det[\,\alpha_{ij}^*\,]\ =\ (\det\boldsymbol{A})^*\,,\ \,`
which leads directly to the hypothesis.

Hermitian Matrices
~~~~~~~~~~~~~~~~~~

.. admonition:: Definition.

   Matrix :math:`\,\boldsymbol{A}=[\,\alpha_{ij}\,]_{n\times n}\in M_n(C)\ `
   is a *Hermitian matrix* :math:`\,` if it is equal to its Hermitian conjugation:
   
   .. math::
      :label: A_hermit
      
      \boldsymbol{A}\,=\,\boldsymbol{A}^+\,,\qquad\text{that is}\quad
      \alpha_{ij}=\alpha_{ji}^*\,,\quad i,j=1,2,\dots,n.

**Example** of a Hermitian matrix:

.. math::
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{ccc}
   3 & 2-i & -4+3\,i \\ 2+i & -1 & -i \\ -4-3\,i & i & 5 
   \end{array}\right]\,.

The properties given below state that certain quantity related with a (complex)  
:math:`\,` Hermitian matrix is real. To show that a complex number is a real number, it is useful to have the following

**Lemma.** :math:`\,` Let :math:`\,z\in C.\ \,` 
Then :math:`\quad z\in R\quad\Leftrightarrow\quad z=z^*\,.`

Indeed, :math:`\,` if :math:`\ z=a+b\,i\,,\ ` then the condition :math:`\ \,z=z^*\ \,`
means that :math:`\ \,a+b\,i=a-b\,i\,,\ \,` :math:`\\`
which is equivalent to saying that :math:`\ \,b\equiv\text{im}\,z=0.`

**Properties** of Hermitian matrix.

1. Diagonal entries of a Hermitian matrix are real numbers. :math:`\\`
   Indeed, if we write the condition :eq:`A_hermit` for :math:`\,i=j\ ` we obtain
   :math:`\ \alpha_{ii}=\alpha_{ii}^*\,,\ ` :math:`\\`
   which means that :math:`\ \alpha_{ii}\in R\,,\ \ i=1,2,\dots,n\,.`
   

2. Trace and determinant of a Hermitian matrix are real:
   :math:`\ \text{tr}\,\boldsymbol{A},\,\det\boldsymbol{A}\,\in\,R\,.`
   This follows from the definition of trace as a sum of diagonal entries of the matrix 
   and from Theorem 6. about determinant of Hermitian conjugate of a matrix:
   
   .. math::
      
      \begin{array}{rclcl}
      \boldsymbol{A}=\boldsymbol{A}^+ & \Rightarrow & \det\boldsymbol{A}\ =\ \det\boldsymbol{A}^+   &                 &                           \\
                                      &             & \det\boldsymbol{A}\ =\ (\det\boldsymbol{A})^* & \Leftrightarrow & \det\boldsymbol{A}\in R\,. 
      \end{array}

3. If :math:`\,\boldsymbol{A}\in M_n(C)\ ` is a Hermitian matrix,
   then for every vector :math:`\ \boldsymbol{x}\in C^n\ ` an inner product
   :math:`\ \langle\,\boldsymbol{x},\boldsymbol{A}\boldsymbol{x}\,\rangle\ `
   is a real number:

   .. math::
      :label: xAx
      
      \langle\,\boldsymbol{x},\boldsymbol{A}\boldsymbol{x}\,\rangle\in R\,,\qquad
      \boldsymbol{x}\in C^n\,.
      
   
   **Proof.** :math:`\,` Substitution  
   :math:`\ \,\boldsymbol{A}^+=\boldsymbol{A},\ \ \boldsymbol{y}=\boldsymbol{x}\ `
   in equation :eq:`x_A_y` leads to
   
   .. math::
      :label: xAx_Axx

      \langle\,\boldsymbol{x},\boldsymbol{A}\boldsymbol{x}\,\rangle\ =\ 
      \langle\,\boldsymbol{A}\boldsymbol{x},\boldsymbol{x}\,\rangle\,,\qquad
      \boldsymbol{x}\in C^n\,.

   But since :math:`\ \,\langle\,\boldsymbol{A}\boldsymbol{x},\boldsymbol{x}\,\rangle=
   \langle\,\boldsymbol{x},\boldsymbol{A}\boldsymbol{x}\,\rangle^*\,,\ \,` we have 
   :math:`\ \,\langle\,\boldsymbol{x},\boldsymbol{A}\boldsymbol{x}\,\rangle=
   \langle\,\boldsymbol{x},\boldsymbol{A}\boldsymbol{x}\,\rangle^*\,,\ \,` and thus
   :math:`\ \,\langle\,\boldsymbol{x},\boldsymbol{A}\boldsymbol{x}\,\rangle\,\in R\,.`

   One can prove that the condition :eq:`xAx` is not only necessary, but also sufficient 
   for a complex matrix :math:`\,\boldsymbol{A}\ ` to be Hermitian. This implies

   .. admonition:: Corollary.
      
      If :math:`\ \boldsymbol{A}\in M_n(C)\,,\ ` then
      :math:`\qquad        
      \boldsymbol{A}\ =\ \boldsymbol{A}^+\quad\Leftrightarrow\quad
      \langle\,\boldsymbol{x},\boldsymbol{A}\boldsymbol{x}\,\rangle\in R\,,\quad
      \boldsymbol{x}\in C^n\,.`

4. For a Hermitian matrix :math:`\,\boldsymbol{A}\in M_n(C)\ `
   the roots of characteristic polynomial
   :math:`\,w(\lambda)=\det\,(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\ `
   are real numbers.
   
   **Proof.**
   
   If :math:`\ \det\,(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)=0\,,\ ` then
   homogeneous linear problem with matrix
   :math:`\,\boldsymbol{A}-\lambda\,\boldsymbol{I}_n\ ` :math:`\\` 
   has nonzero solutions. :math:`\,` 
   Hence, there exists a nonzero vector :math:`\,\boldsymbol{x}\in C^n\ \,` for which
   
   .. math::
      :nowrap:

      \begin{eqnarray*}
      (\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\ \boldsymbol{x} & \! = \! & \boldsymbol{0}\,,  \\
      \boldsymbol{A}\,\boldsymbol{x} & \! = \! & \lambda\,\boldsymbol{I}_n\,\boldsymbol{x}\,, \\
      \boldsymbol{A}\,\boldsymbol{x} & \! = \! & \lambda\,\boldsymbol{x}\,, 
      \quad\text{where}\quad\boldsymbol{x}\neq\boldsymbol{0}\,.
      \end{eqnarray*}

   If we substitute the last equality to the formula :eq:`xAx_Axx`, we obtain

   .. math::
      :nowrap:

      \begin{eqnarray*}
      \langle\,\boldsymbol{x},\boldsymbol{A}\,\boldsymbol{x}\,\rangle & \! = \! & 
      \langle\,\boldsymbol{A}\,\boldsymbol{x},\boldsymbol{x}\,\rangle\,,          \\
      \langle\,\boldsymbol{x},\,\lambda\,\boldsymbol{x}\,\rangle & \! = \! &        
      \langle\,\lambda\,\boldsymbol{x},\boldsymbol{x}\,\rangle\,,                 \\
      \lambda\ \langle\,\boldsymbol{x},\boldsymbol{x}\,\rangle & \! = \! &        
      \lambda^*\;\langle\,\boldsymbol{x},\boldsymbol{x}\,\rangle\,,
      \quad\text{where}\quad\langle\,\boldsymbol{x},\boldsymbol{x}\,\rangle>0\,;             \\
      \lambda & \! = \! & \lambda^*
      \quad\ \ \Leftrightarrow\quad\ \ \,\lambda\in R\,.
      \end{eqnarray*}

Real Hermitian matrix is a symmetrix matrix: :math:`\,`
for :math:`\ \boldsymbol{A}\in M_n(R)`,

.. math:: 
   
   \boldsymbol{A}=\boldsymbol{A}^+\quad\Leftrightarrow\quad\boldsymbol{A}=\boldsymbol{A}^T\,.

Unitary Matrices
~~~~~~~~~~~~~~~~

.. admonition:: Definition.
   
   Matrix :math:`\ \boldsymbol{B}\in M_n(C)\ \,` is :math:`\,` *unitary* :math:`\,` if
   a product of Hermitian conjugate of a :math:`\\`
   matrix :math:`\boldsymbol{B}\ ` 
   and :math:`\,` the matrix :math:`\boldsymbol{B}\ ` itself is an identity matrix:
 

   .. \,=\,[\,\boldsymbol{b}_1\,|\,\boldsymbol{b}_2\,|\,\dots\,|\,
      \boldsymbol{b}_n\,]\,=\,[\,\beta_{ij}\,]_{n\times n}
   
   .. math::
      :label: unitary
      
      \boldsymbol{B}^+\boldsymbol{B}\,=\,\boldsymbol{I}_n\,.

:math:`\;`

**Example.**
:math:`\qquad\boldsymbol{B}\ =\ \displaystyle\frac{1}{\sqrt{2}}\ 
\left[\begin{array}{rr} 1 & i \\ i & 1 \end{array}\right]\,;\qquad
\boldsymbol{B}^+\ =\ \displaystyle\frac{1}{\sqrt{2}}
\left[\begin{array}{rr} 1 & -i \\ -i & 1 \end{array}\right]\,;`

.. math::

   \boldsymbol{B}^+\boldsymbol{B}\ \ =\ \ \frac{1}{2}\ 
   \left[\begin{array}{rr} 1 & -i \\ -i & 1 \end{array}\right]\ 
   \left[\begin{array}{rr} 1 & i \\ i & 1 \end{array}\right]\ \ =\ \ \frac{1}{2}\ 
   \left[\begin{array}{rr} 2 & 0 \\ 0 & 2 \end{array}\right]\ \ =\ \ 
   \left[\begin{array}{rr} 1 & 0 \\ 0 & 1 \end{array}\right]\,. 

:math:`\;`

**Properties of unitary matrices.** :math:`\\`

0. The condition :eq:`unitary` means that :math:`\,\boldsymbol{B}^+=\boldsymbol{B}^{-1},\ `
   which futrher implies that :math:`\,\boldsymbol{B}\boldsymbol{B}^+\,=\,\boldsymbol{I}_n\,.\ `
   Hence, a unitary matrix :math:`\,\boldsymbol{B}\ ` satisfies identities
   
   .. math::
      
      \boldsymbol{B}^+\boldsymbol{B}\,=\,\boldsymbol{B}\boldsymbol{B}^+\,=\,\boldsymbol{I}_n\,.

1. The condition :math:`\ \boldsymbol{B}\boldsymbol{B}^+=\boldsymbol{I}_n\ ` may be 
   written as :math:`\ (\boldsymbol{B}^+)^+\boldsymbol{B}^+=\boldsymbol{I}_n\,,\ ` which means that
   if :math:`\ \boldsymbol{B}\in M_n(C)\ ` is a unitary matrix, then so are the 
   Hermitian conjugate :math:`\ \boldsymbol{B}^+\ ` and the inverse matrix
   :math:`\ \boldsymbol{B}^{-1}\,.`

2. Let :math:`\ \boldsymbol{B}_1,\boldsymbol{B}_2\in M_n(C)\ ` be unitary matrices:
   :math:`\ \ \boldsymbol{B}_1^+\,\boldsymbol{B}_1=\boldsymbol{B}_2^+\,\boldsymbol{B}_2=
   \boldsymbol{I}_n\,.\ ` 
   Then, by properties of Hermitian conjugation of matrices,
   
   .. math::
      
      (\boldsymbol{B}_1\boldsymbol{B}_2)^+(\boldsymbol{B}_1\boldsymbol{B}_2)\ =\ 
      \boldsymbol{B}_2^+\,(\boldsymbol{B}_1^+\boldsymbol{B}_1)\,\boldsymbol{B}_2\ =\ 
      \boldsymbol{B}_2^+\,\boldsymbol{I}_n\,\boldsymbol{B}_2\ =\ 
      \boldsymbol{B}_2^+\,\boldsymbol{B}_2\ =\ \boldsymbol{I}_n\,.
   
   Hence, a product of unitary matrices is also a unitary matrix. :math:`\\`
   In this way, because an identity matrix :math:`\ \boldsymbol{I}_n\ ` is unitary,
   we may write
   
   .. admonition:: Corollary 1.
      
      A set of unitary matrices of size :math:`\,n\ ` together with matrix 
      multiplication comprises a (nonabelian) group.

3. An inner product of the :math:`\,i`-th and the :math:`\,j`-th
   column of a unitary matrix :math:`\,\boldsymbol{B}\ ` is given by
   
   .. math::
      
      \langle\,\boldsymbol{b}_i,\boldsymbol{b}_j\rangle\ \,=\ \,
      \boldsymbol{b}_i^+\,\boldsymbol{b}_j\ \,=\ \,
      \left(\boldsymbol{B}^+\boldsymbol{B}\right)_{ij}\ \,=\ \,
      \left(\boldsymbol{I}_n\right)_{ij}\ \,=\ \,\delta_{ij}\,,\qquad i,j=1,2,\dots,n\,,

   because :math:`\,\boldsymbol{b}_i^+\ ` is the :math:`\,i`-th row of a matrix 
   :math:`\,\boldsymbol{B}^+,\ \ i=1,2,\dots,n.`
   
   Taking into account the fact that matrix :math:`\,\boldsymbol{B}^+,\ `
   whose columns are Hermitian conjugates of rows of matrix :math:`\,\boldsymbol{B},\ `
   is also unitary, we may write

   .. admonition:: Corollary 2.
      
      Matrix :math:`\ \boldsymbol{B}\in M_n(C)\ ` is unitary 
      if and only if its columns :math:`\\` 
      (and also rows) :math:`\,` 
      comprise an orthonormal system in the space :math:`\,C^n.`

4. Unitary matrix :math:`\,\boldsymbol{B}\in M_n(C)\ ` preserves 
   an inner product in the space :math:`\,C^n:`
   
   .. math::
      
      \langle\,\boldsymbol{B}\boldsymbol{x},\,\boldsymbol{B}\boldsymbol{y}\,\rangle\ \,=\ \,
      \langle\boldsymbol{x},\boldsymbol{y}\rangle\,,\qquad 
      \boldsymbol{x},\boldsymbol{y}\in C^n\,.

   Indeed, by definition  of an inner product in the space :math:`\,C^n,\ ` we have
   
   .. math::
      
      \langle\,\boldsymbol{B}\boldsymbol{x},\,\boldsymbol{B}\boldsymbol{y}\,\rangle\ =\ 
      (\boldsymbol{B}\boldsymbol{x})^+(\boldsymbol{B}\boldsymbol{y})\ =\ 
      (\boldsymbol{x}^+\boldsymbol{B}^+)(\boldsymbol{B}\boldsymbol{y})\ =

      \ =\   
      \boldsymbol{x}^+(\boldsymbol{B}^+\boldsymbol{B})\ \boldsymbol{y}\ =\ 
      \boldsymbol{x}^+\boldsymbol{I}_n\,\boldsymbol{y}\ =\ 
      \boldsymbol{x}^+\boldsymbol{y}\ =\ 
      \langle\boldsymbol{x},\boldsymbol{y}\rangle\,.

   In particular, if :math:`\,\boldsymbol{y}=\boldsymbol{x},\ ` we get an identity

   .. math::
      :label: Bx_Bx
      
      \langle\,\boldsymbol{B}\boldsymbol{x},\,\boldsymbol{B}\boldsymbol{x}\,\rangle\ \,=\ \,
      \langle\boldsymbol{x},\boldsymbol{x}\rangle\,,\qquad 
      \boldsymbol{x}\in C^n\,,

   which describes behaviour of the norm:  
   :math:`\quad\|\,\boldsymbol{B}\boldsymbol{x}\,\|=
   \|\boldsymbol{x}\|\,,\ \ \boldsymbol{x}\in C^n\,.`

   The last property allows to interpret multiplication (on the left hand side)
   of vector :math:`\,\boldsymbol{x}\in C^n\ ` by a unitary matrix
   :math:`\,\boldsymbol{B}\ ` as a generalised rotation of this vector.

5. Determinant of a unitary matrix :math:`\,\boldsymbol{B}\ ` is a complex number of modulus 1:
   :math:`\ \,|\det\boldsymbol{B}\,|=1\,.`

   Indeed, applying determinant on both sides of the equality :eq:`unitary`, we obtain
   
   .. math::
      
      \det\,(\boldsymbol{B}^+\boldsymbol{B})=   
      \det\boldsymbol{B}^+\cdot\,\det\boldsymbol{B}=
      (\det\boldsymbol{B})^*\cdot\,\det\boldsymbol{B}=
      |\det\boldsymbol{B}\,|^2\quad=\quad
      \det\boldsymbol{I}_n=1\,.

6. For a unitarny matrix :math:`\,\boldsymbol{B}\in M_n(C)\ `
   the roots of a characteristic polynomial 
   :math:`\,w(\lambda)=\det\,(\boldsymbol{B}-\lambda\,\boldsymbol{I}_n)\ `
   are complex numbers of modulus 1.
   
   **Proof.** :math:`\,` 
   If :math:`\ \det\,(\boldsymbol{B}-\lambda\,\boldsymbol{I}_n)=0\,,\ ` then 
   homogeneous linear problem with matrix
   :math:`\,\boldsymbol{B}-\lambda\,\boldsymbol{I}_n\ ` :math:`\\` 
   has nonzero solutions: :math:`\,` there exists a nonzero vector
   :math:`\,\boldsymbol{x}\in C^n\ \,` for which
   
   .. math::
      :nowrap:

      \begin{eqnarray*}
      (\boldsymbol{B}-\lambda\,\boldsymbol{I}_n)\;\boldsymbol{x} & \! = \! & \boldsymbol{0}\,,  \\
      \boldsymbol{B}\,\boldsymbol{x} & \! = \! & \lambda\,\boldsymbol{I}_n\,\boldsymbol{x}\,, \\
      \boldsymbol{B}\,\boldsymbol{x} & \! = \! & \lambda\,\boldsymbol{x}\,, 
      \quad\text{where}\quad\boldsymbol{x}\neq\boldsymbol{0}\,.
      \end{eqnarray*}

   If we substitute the last equality to the formula :eq:`Bx_Bx`, we obtain
 
   .. math::
      :nowrap:

      \begin{eqnarray*}
      \langle\,\boldsymbol{B}\boldsymbol{x},\,\boldsymbol{B}\boldsymbol{x}\,\rangle & \! = \! & 
      \langle\,\boldsymbol{x},\boldsymbol{x}\,\rangle\,, \\
      \langle\,\lambda\,\boldsymbol{x},\,\lambda\,\boldsymbol{x}\,\rangle & \! = \! & 
      \langle\,\boldsymbol{x},\boldsymbol{x}\,\rangle\,, \\
      \lambda^*\lambda\ \langle\,\boldsymbol{x},\boldsymbol{x}\,\rangle & \! = \! &        
      \langle\,\boldsymbol{x},\boldsymbol{x}\,\rangle\,, \\
      |\lambda|^2\ \langle\,\boldsymbol{x},\boldsymbol{x}\,\rangle & \! = \! &        
      \langle\,\boldsymbol{x},\boldsymbol{x}\,\rangle\,,
      \quad\text{where}\quad\langle\,\boldsymbol{x},\boldsymbol{x}\,\rangle>0\,; \\
      |\lambda|^2 & \! = \! & 1
      \quad\Rightarrow\quad|\lambda|=1\,.
      \end{eqnarray*}

Relation of a unitary matrix with a generalised rotation is also suggested by 

.. admonition:: Theorem 7.
   
   Let :math:`\,V(C)\ ` be a unitary finite dimensional vector space with an orhonormal basis 
   :math:`\,\mathcal{B}.` :math:`\\`
   Basis :math:`\,\mathcal{C}\ ` of this space is orthonormal if and only if 
   a transition matrix :math:`\,\boldsymbol{S}\ ` 
   from basis :math:`\,\mathcal{B}\ ` to :math:`\,\mathcal{C}\ ` is unitary.

**Proof.** :math:`\,`
Let :math:`\ \ \dim V=n\,,\ \ \mathcal{B}=(u_1,u_2,\dots,u_n)\,,\ \ 
\mathcal{C}=(w_1,w_2,\dots,w_n)\,,\ \ \boldsymbol{S}=[\,\sigma_{ij}\,]_{n\times n}\,.`

By assumption, basis :math:`\,\mathcal{B}\ ` is orthonormal: 
:math:`\quad\langle u_i,u_j\rangle\,=\,\delta_{ij}\,,\quad i,j=1,2,\dots,n.`

Definition of transition matrix implies the relations:
:math:`\quad w_j\ =\ \displaystyle\sum_{i\,=\,1}^n\ \sigma_{ij}\,u_i\,,\quad j=1,2,\dots,n.`

Consider an inner product of two vectors from basis :math:`\,\mathcal{C}\ \ (i,j=1,2,\dots,n):`

.. math::
   
   \begin{array}{ccccc}
   \langle w_i,w_j\rangle & = & 
   \left\langle\ \displaystyle\sum_{k\,=\,1}^n\ \sigma_{ki}\,u_k\,,\ 
   \sum_{l\,=\,1}^n\ \sigma_{lj}\,u_l\right\rangle\ \,=\ \,
   \displaystyle\sum_{k,\,l\,=\,1}^n \sigma_{ki}^*\,\sigma_{lj}\,\langle u_k,u_l\rangle & = & 
   \\
   & = & \displaystyle\sum_{k,\,l\,=\,1}^n\ \sigma_{ki}^*\ \sigma_{lj}\ \delta_{kl}\ \ \,=\ \ \,
   \displaystyle\sum_{k\,=\,1}^n\ \sigma_{ki}^*\ \sigma_{kj}\ \ \,=\ \ \,
   \displaystyle\sum_{k\,=\,1}^n\ \sigma_{ik}^+\ \sigma_{kj} & = & 
   \left(\,\boldsymbol{S}^+\boldsymbol{S}\,\right)_{ij}\ .
   \end{array}

This implies in particular that

.. math::
   
   \langle w_i,w_j\rangle\ =\ \delta_{ij}\qquad\Leftrightarrow\qquad
   \left(\,\boldsymbol{S}^+\boldsymbol{S}\,\right)_{ij}=\delta_{ij}=
   \left(\,\boldsymbol{I}_n\right)_{ij}\,,\qquad i,j=1,2,\dots,n,

that is, basis :math:`\,\mathcal{C}\ ` is orthonormal if and only if
:math:`\ \boldsymbol{S}^+\boldsymbol{S}=\boldsymbol{I}_n.` :math:`\\`

A real unitary matrix is an orthogonal matrix. Namely, for
:math:`\ \boldsymbol{B}\in M_n(R):`

.. math:: 
   
   \boldsymbol{B}^+\boldsymbol{B}=\boldsymbol{I}_n
   \quad\Leftrightarrow\quad
   \boldsymbol{B}^T\boldsymbol{B}=\boldsymbol{I}_n\,.































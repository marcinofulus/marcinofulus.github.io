
Gram-Schmidt Orthonormalization and QR Decomposition of a Matrix
----------------------------------------------------------------

.. admonition:: Theorem 4.
   
   In every finite dimensional unitary (Euclidean) vector space an orthonormal basis exists.

**Proof** of this theorem, which provides an effective method of construction of such a basis, poceeds in two parallel stages. One starts with an arbitrary basis, applies the *Gram-Schmidt orthogonalization* method to construct an orthogonal basis, and then by normalisation obtains an orthonormal basis.

Construction of the Orthonormal Basis
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Let :math:`\,\dim\,V=n.\ ` Proof proceeds according to the following diagram:

.. math::
   
   \begin{array}{cccccc}
                & \mathcal{B}=(v_1,v_2,\dots,v_n) & \longrightarrow & \mathcal{P}=(y_1,y_2,\dots,y_n) & \longrightarrow & \mathcal{Q}=(u_1,u_2,\dots,u_n) \\
   \text{Basis:} & \text{initial}                &                 & \text{orthogonal}              &                 & \text{orthonormal}
   \end{array}

We choose vectors for bases :math:`\ \mathcal{P}\ ` and :math:`\ \mathcal{Q}\ `
as follows:
   
:math:`\triangleright\quad y_1\,=\,v_1,\quad u_1\,=\,\displaystyle\frac{y_1}{\|y_1\|}\,;`

:math:`\triangleright\quad y_2\,=\,\alpha_1\,y_1+\,v_2\ =\ 
v_2\,-\ \displaystyle\frac{\langle\,y_1,v_2\rangle}{\|y_1\|^2}\ \ y_1\ =\ 
v_2-\,\langle\,u_1,v_2\rangle\ u_1\,,\qquad u_2\,=\,\displaystyle\frac{y_2}{\|y_2\|}\ ,`

where :math:`\ \alpha_1\ ` has been determined from the condition :math:`\ \langle\,y_1,y_2\rangle=0\,;`

:math:`\triangleright\quad y_3\,=\,\beta_1\,y_1+\,\beta_2\,y_2+\,v_3\ =\ 
v_3\,-\ \displaystyle\frac{\langle y_1,v_3\rangle}{\|y_1\|^2}\ \ y_1\,-\ 
\displaystyle\frac{\langle y_2,v_3\rangle}{\|y_2\|^2}\ \ y_2\ =\ 
v_3\,-\,\langle u_1,v_3\rangle\ u_1 - \langle u_2,v_3\rangle\ u_2\,,`

where :math:`\ \beta_1,\,\beta_2\ ` have been determined from the conditions 
:math:`\,\langle\,y_1,y_3\rangle = \langle\,y_2,y_3\rangle = 0\,;\qquad
u_3\,=\,\displaystyle\frac{y_3}{\|y_3\|}\,;`

Assume that in this way we have constructed an orthogonal set
:math:`\ (y_1,y_2,\dots,y_{j-1}),\ ` where, as follows from the construction,

.. math::
   :label: y_k
   
   y_k\,\in\,L(v_1,v_2,\dots,v_k)\qquad k=1,2,\dots,j-1\,,

that is, every :math:`\,k`-th vector of the set :math:`\,(y_1,y_2,\dots,y_{j-1})\ `
is a linear combination of only first :math:`\,k\ ` vectors from the basis :math:`\,\mathcal{B}.\ `
Next vectors of bases :math:`\ \mathcal{P}\ ` and :math:`\ \mathcal{Q}\ \,` are :math:`\\`

:math:`\begin{array}{rcl} \triangleright\quad y_j & = & 
\lambda_1\,y_1\,+\;\lambda_2\,y_2\,+\;\dots\,+\;\lambda_{j-1}\,y_{j-1}\,+\;v_j\ \ =
\\ \\
& = & v_j\ -\ \,
\displaystyle\frac{\langle\,y_1,v_j\rangle}{\|y_1\|^2}\ \ y_1\ \,-\ \, 
\displaystyle\frac{\langle\,y_2,v_j\rangle}{\|y_2\|^2}\ \ y_2\ \,-\ \, 
\ldots\ -\ \,
\displaystyle\frac{\langle\,y_{j-1},v_j\rangle}{\|y_{j-1}\|^2}\ \ y_{j-1}\ \ =
\\ \\
& = & v_j\,-\,\langle\,u_1,v_j\rangle\ u_1 - \langle\,u_2,v_j\rangle\ u_2
\ -\ \ldots\ -\ \langle\,u_{j-1},v_j\rangle\ u_{j-1}\,,
\qquad u_j\ =\ \displaystyle\frac{y_j}{\|y_j\|}\ ,
\end{array}`

where the coefficients :math:`\ \lambda_1,\,\lambda_2,\,\dots,\,\lambda_{j-1}\ \,`
have been determined from the orthogonality conditions

.. math::
   
   \langle\,y_1,y_j\rangle\ \ =\ \ \langle\,y_2,y_j\rangle\ \ =\ \ldots\ \ =\ \ 
   \langle\,y_{j-1},y_j\rangle\ \ =\ \ 0\,.

.. dane są przez 
   :math:`\quad\lambda_k\ =\ -\ \displaystyle\frac{\langle\,y_k,v_j\rangle}{\|y_k\|^2}\ ,
   \qquad k=1,2,\dots,j-1;\qquad j=2,3,\dots,n.`

.. Warunek :eq:`y_k` gwarantuje, że wektor :math:`\,y_j\neq\theta.\ `

The vector :math:`\,y_j\ ` is a combination of linearly independent vectors
:math:`\,v_1,\,v_2,\,\dots,\,v_j.\ `
The property :eq:`y_k` implies that it is a non-trivial combination, because the coefficient of the vector :math:`\,v_j\ ` equals :math:`\,+1.\,` This means that all the vectors :math:`\,y_j\ ` are non-zero: :math:`\,y_j\neq\theta,\ j=1,2,\dots,n.\ `
Hence, the set :math:`\,\mathcal{P}\ ` is orthogonal, and if we divide each vector
:math:`\,y_j\ ` by its norm, we obtain a unit vector :math:`\,u_j\,.`

Gram-Schmidt orthogonalization may be applied to any (not necessarily linearly independent set) of vectors. As a result we obtain a set :math:`\,\mathcal{Y},\ ` whose vectors are pairwise orthogonal, but :math:`\,\mathcal{Y}\ ` itself is not necessarily orthogonal as it may contain zero vectors.

After the last step of the procedure, where :math:`\,j=n,\ ` we obtain an
orthogonal basis :math:`\ \mathcal{P}\ \\`
and an orthonormal basis :math:`\ \mathcal{Q}\ ` of the space :math:`\,V.`

**Example:** Construction of Legendre polynomials.

Consider a Euclidean space :math:`\,P\ ` of real polynomials with an inner product

.. math::
   
   \langle\,p,q\,\rangle\ \,=\ \,\int_{-1}^{+1}\ p(x)\,q(x)\,dx\,,\qquad p,q\in P\,.

Taking :math:`\,\mathcal{B}\,=\,(1,\,x,\,x^2,\,x^3,\,\dots)\ ` as the initial basis,
we will construct an orthogonal basis :math:`\,\mathcal{P}\,=\,(p_0,\,p_1,\,p_2,\,p_3,\,\dots)\ \,` 
and :math:`\,` an orthonormal basis :math:`\,\mathcal{Q}\,=\,(q_0,\,q_1,\,q_2,\,q_3,\,\dots)\,.\\`

0. :math:`\ p_0(x)\,=\,1\,;\qquad
   \|\,p_0\|^2\,=\,\langle\,p_0,p_0\,\rangle\ =\ \int_{-1}^{+1}\ 1\cdot 1\ \ dx\ =\ 2\,;\qquad
   \|\,p_0\|\,=\,\sqrt{2}\,.`
   
   :math:`\blacktriangleright\quad q_0(x)\ \,=\ \,
   \displaystyle\frac{1}{\|\,p_0\|}\ \ p_0(x)\ \,=\ \,
   \frac{1}{\sqrt{2}}\ \ .\\`

1. :math:`\ p_1(x)\ =\ \alpha_0\cdot 1+x\,,\ \ ` 
   where :math:`\ \ \alpha_0\ ` is determined from the condition :math:`\ \ \langle\,p_0,p_1\rangle\ =\ 0\,.`
   
   :math:`\ \langle\,p_0,p_1\rangle\ =\ \int_{-1}^{+1}\ 1\cdot(\alpha_0+x)\ dx\ \ =\ \ 
   \int_{-1}^{+1}\ (\alpha_0+x)\,dx\ =\ 2\,\alpha_0\ =\ 0\,:\quad\alpha_0=0\,.`

   :math:`\ p_1(x)\,=\,x\,;\qquad \|p_1\|^2\,=\,\int_{-1}^{+1}\ x^2\;dx\ =\ 
   \left.\frac{1}{3}\ x^3\,\right|_{-1}^{+1}\ =\ \frac{2}{3}\ ;\qquad
   \|\,p_1\|\ =\ \sqrt{\frac{2}{3}}\ .` 

   :math:`\blacktriangleright\quad q_1(x)\ \,=\ \,
   \displaystyle\frac{1}{\|\,p_1\|}\ \ p_1(x)\ \,=\ \,
   \sqrt{\,\frac{3}{2}}\ \ x\ .\\`

2. :math:`\ p_2(x)\ =\ \beta_0\cdot 1+\beta_1\cdot x+x^2\,,\ \ `
   where :math:`\ \ \beta_0,\,\beta_1:\ \  
   \langle\,p_0,p_2\rangle\ =\ \langle\,p_1,p_2\rangle\ =\ 0\,.`

   :math:`\ \langle\,p_0,p_2\rangle\ =\ \int_{-1}^{+1}\ (\beta_0+\beta_1\,x+x^2)\,dx\ =\ 
   2\,\beta_0+\frac{2}{3}\ =\ 0\,:\quad\,\beta_0\,=\ -\ \frac{1}{3}\,;`

   :math:`\ \langle\,p_1,p_2\rangle\ =\ \int_{-1}^{+1}\ x\,(\beta_0+\beta_1\,x+x^2)\,dx\ =\ 
   \frac{2}{3}\,\beta_1\ =\ 0\,:\qquad\beta_1\,=\,0\,.`

   :math:`\ p_2(x)\,=\,x^2-\;\frac{1}{3}\ ;`

   :math:`\ \|\,p_2\|^2\,=\,\int_{-1}^{+1}\ (x^2-\,\frac{1}{3})^2\,dx\ =\ 
   \int_{-1}^{+1}\ (x^4-\frac{2}{3}\,x^2+\frac{1}{9})\,dx\ =\ \frac{8}{45}\ ;\quad
   \|\,p_2\|\ =\ \frac{2}{3}\ \sqrt{\frac{2}{5}}\,.`

   :math:`\blacktriangleright\quad q_2(x)\ \,=\ \,
   \displaystyle\frac{1}{\|\,p_2\|}\ \ p_2(x)\ \ =\ \ 
   \frac{3}{2}\ \ \sqrt{\,\frac{5}{2}}\ \ \left(x^2-\;\frac{1}{3}\right)\ \ =\ \ 
   \frac{1}{2}\ \ \sqrt{\,\frac{5}{2}}\ \ (3\,x^2-\,1)\,.\\`

3. :math:`\ p_3(x)\ =\ 
   \widetilde{\gamma_0}\cdot 1+\gamma_1\cdot x+\gamma_2\cdot(x^2-\;\frac{1}{3})+x^3\ =\ 
   \gamma_0+\,\gamma_1\,x\,+\,\gamma_2\,x^2\,+\,x^3\,,`

   where :math:`\quad\gamma_0,\,\gamma_1,\,\gamma_2:\quad
   \langle\,p_0,p_3\rangle\,=\,\langle\,p_1,p_3\rangle\,=\,\langle\,p_2,p_3\rangle\,=\,0\,.`
   
   :math:`\ \langle\,p_0,p_3\rangle\,=\,2\,\gamma_0+\frac{2}{3}\,\gamma_2\,=\,0\,;\quad
   \langle\,p_1,p_3\rangle\,=\,\frac{2}{3}\,\gamma_1+\frac{2}{5}\,=\,0\,;\quad
   \langle\,p_2,p_3\rangle\,=\,\frac{8}{45}\,\gamma_2\,=\,0\,;`
   
   hence :math:`\quad\gamma_0=\gamma_2=0\,,\quad\gamma_1=-\ \frac{3}{5}\,.`

   :math:`\ p_3(x)\,=\,x^3-\,\frac{3}{5}\,x\,;\qquad\|\,p_3\|\ =\ \frac{2}{5}\ \sqrt{\frac{2}{7}}\,.`

   :math:`\blacktriangleright\quad q_3(x)\ \,=\ \,
   \displaystyle\frac{1}{\|\,p_3\|}\ \ p_3(x)\ \ =\ \ 
   \frac{5}{2}\ \ \sqrt{\,\frac{7}{2}}\ \ \left(x^3-\,\frac{3}{5}\,x\right)\ =\ 
   \frac{1}{2}\ \ \sqrt{\,\frac{7}{2}}\ \ (5\,x^3-3\,x)\,.`

.. math::
   
   \mathcal{Q}\ \ =\ \ \left(\ \ \frac{1}{\sqrt{2}}\ ,\quad
                               \sqrt{\,\frac{3}{2}}\ \ x\ ,\quad
                               \frac{1}{2}\ \ \sqrt{\,\frac{5}{2}}\ \ (3\,x^2-\,1)\ ,\quad
                               \frac{1}{2}\ \ \sqrt{\,\frac{7}{2}}\ \ (5\,x^3-3\,x)\ ,\ \ 
                               \dots\ 
                       \right)

.. _`QRdecomposition`:

Orthogonal Matrices and the QR Decomposition
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Considerations of this section concern real domain, that is, real matrices :math:`\\` and :math:`\,` Euclidean spaces. Later we will translate the notions and theorems introduced below for complex domain.

.. Przeniesienie wprowadzonych tu pojęć i twierdzeń 
   do dziedziny zespolonej będzie dokonane później.

.. admonition:: Definition.
   
   Matrix :math:`\ \boldsymbol{B}\,=\,[\,\boldsymbol{b}_1\,|\,\boldsymbol{b}_2\,|\,\dots\,|\,
   \boldsymbol{b}_n\,]\,=\,[\,\beta_{ij}\,]_{n\times n}\in M_n(R)\ \,` is :math:`\,`  
   *orthogonal*, :math:`\,` if 
   
   .. math::
      :label: orthogonal
      
      \boldsymbol{B}^T\boldsymbol{B}\,=\,\boldsymbol{I}_n\,.
   
**Properties** of orthogonal matrices.

1. Taking determinant on both sides of the equation :eq:`orthogonal`, we obtain
   
   .. math::
      
      \det\,(\boldsymbol{B}^T\boldsymbol{B})=\det\boldsymbol{B}^T\cdot\,\det\boldsymbol{B}=
      (\det\boldsymbol{B})^2\quad=\quad\det\boldsymbol{I}_n=1\,,

   and thus :math:`\,\det\boldsymbol{B}=\pm 1.\ ` Hence, the orthogonal matrix is 
   nondegenerate, and thus invertible:
   :math:`\ \boldsymbol{B}^{-1}=\,\boldsymbol{B}^T\,.\ `
   After multilplying this equality on the left by :math:`\ \boldsymbol{B}\ ` we obtain
   :math:`\ \boldsymbol{B}\boldsymbol{B}^T=\boldsymbol{I}_n\,.\ ` This means that
   orthogonal matrices satisfy equalities
   :math:`\ \ \boldsymbol{B}^T\boldsymbol{B}\,=\,
   \boldsymbol{B}\boldsymbol{B}^T=\boldsymbol{I}_n\,.`

2. The condition :math:`\ \boldsymbol{B}\boldsymbol{B}^T=\boldsymbol{I}_n\ ` may be 
   written as :math:`\ (\boldsymbol{B}^T)^T\boldsymbol{B}^T=\boldsymbol{I}_n\,,\ ` 
   which implies that if :math:`\ \boldsymbol{B}\in M_n(R)\ ` is an orthogonal matrix, 
   then orthogonal are also the transposed matrix :math:`\ \boldsymbol{B}^T\ ` 
   and the inverse matrix :math:`\ \boldsymbol{B}^{-1}\,.`

3. Let :math:`\ \boldsymbol{B}_1,\boldsymbol{B}_2\in M_n(R)\ ` be orthogonal matrices:
   :math:`\ \ \boldsymbol{B}_1^T\,\boldsymbol{B}_1=\boldsymbol{B}_2^T\,\boldsymbol{B}_2=
   \boldsymbol{I}_n\,.\ ` 
   Then, by properties of the transpose of a matrix, we obtain
   
   .. math::
      
      (\boldsymbol{B}_1\boldsymbol{B}_2)^T(\boldsymbol{B}_1\boldsymbol{B}_2)\ =\ 
      \boldsymbol{B}_2^T\,(\boldsymbol{B}_1^T\boldsymbol{B}_1)\,\boldsymbol{B}_2\ =\ 
      \boldsymbol{B}_2^T\,\boldsymbol{I}_n\,\boldsymbol{B}_2\ =\ 
      \boldsymbol{B}_2^T\,\boldsymbol{B}_2\ =\ \boldsymbol{I}_n\,.
   
   Hence, product of orthogonal matrices is also an orthogonal matrix. 
   Since the identity matrix :math:`\ \boldsymbol{I}_n\ ` is orthogonal,
   we deduce
   
   .. admonition:: Corollary 1.
      
      A set of orthogonal matrices of size :math:`\,n\ ` together with matrix
      multiplication comprises a (nonabelian) group. 
      
4. The condition :eq:`orthogonal` may be rewritten in terms of matrix' entries as
   
   .. math::
      
      \sum_{k\,=\,1}^n\ \beta_{ik}^T\;\beta_{kj}\,=\ \sum_{k\,=\,1}^n\ \beta_{ki}\;\beta_{kj}\,=\ 
      \langle\,\boldsymbol{b}_i,\boldsymbol{b}_j\rangle\ =\ \delta_{ij}\,,\qquad
      i,j=1,2,\dots,n\,.
   
   This means that columns of the matrix :math:`\,\boldsymbol{B},\,` interpreted as vectors
   of the space :math:`\,R^n\,,\ \,` comprise an orthonormal system. 
   Since the matrix :math:`\ \boldsymbol{B}^T\ ` is also orthogonal, 
   this is also the case for rows of the matrix :math:`\ \boldsymbol{B}.`
   
   .. admonition:: Corollary 2.
      
      Matrix :math:`\ \boldsymbol{B}\in M_n(R)\ ` is orthogonal 
      if :math:`\,` and :math:`\,` only if
      its columns :math:`\,` (and also rows) :math:`\,` 
      comprise an orthonormal system in the space :math:`\,R^n`.

Consider a nondegenerate matrix :math:`\ \boldsymbol{A}\,=\,
[\,\boldsymbol{a}_1\,|\,\boldsymbol{a}_2\,|\,\dots\,|\,\boldsymbol{a}_n\,]\in M_n(R).\ `
Its columns are linearly independent and comprise a basis 
:math:`\,\mathcal{B}=(\boldsymbol{a}_1\,,\,\boldsymbol{a}_2\,,\,\dots,\,\boldsymbol{a}_n)\,`
of the space :math:`\,R^n`. We will apply to this basis Gram-Schmidt orthogonalization in order to obtain an orthogonal basis
:math:`\,\mathcal{P}=(\boldsymbol{y}_1\,,\,\boldsymbol{y}_2\,,\,\dots,\,\boldsymbol{y}_n)\ \ `
and :math:`\,` an orthonormal basis
:math:`\,\mathcal{Q}=(\boldsymbol{u}_1\,,\,\boldsymbol{u}_2\,,\,\dots,\,\boldsymbol{u}_n).\ `
Vectors of the bases :math:`\,\mathcal{P}\ ` and :math:`\ \mathcal{Q}\ ` are related by identities 

.. math::
   
   \boldsymbol{u}_i\ =\ \,\frac{1}{\|\,\boldsymbol{y}_i\|}\ \ \boldsymbol{y}_i\,,
   \qquad i=1,2,\dots,n.

Our goal is to write the matrix :math:`\ \boldsymbol{A}\ `  
as a product of an orthogonal matrix :math:`\\ \boldsymbol{Q}\,=\,
[\,\boldsymbol{u}_1\,|\,\boldsymbol{u}_2\,|\,\dots\,|\,\boldsymbol{u}_n\,]\ \,`
and :math:`\,` certain uppertriangular matrix :math:`\ \boldsymbol{R} :
\ \boldsymbol{A}=\boldsymbol{Q}\boldsymbol{R}\,.` 
Such a decomposition is called a *QR decomposition*.

.. W :math:`\,j`-tym kroku procedury Grama-Schmidta zastosowanej do bazy :math:`\,\mathcal{B}\ \,`
   (:math:`j=2,\dots,n`) :

The Gram-Schmidt process applied to the basis :math:`\,\mathcal{B}\ \,` gives (:math:`j=2,\dots,n`) :

.. math::
   
   \begin{array}{rcl}
   \boldsymbol{y}_1 & = & \boldsymbol{a}_1\,, \\
   \boldsymbol{y}_j & = &
   \lambda_1\,\boldsymbol{y}_1\;+\ \lambda_2\,\boldsymbol{y}_2\;+\ \ldots\ +\ 
   \lambda_{j-1}\,\boldsymbol{y}_{j-1}\;+\ \boldsymbol{a}_j\;\ = \\
   & = & \boldsymbol{a}_j
                   \;-\ \langle\,\boldsymbol{u}_1,\boldsymbol{a}_j\rangle\ \,\boldsymbol{u}_1
                   \;-\ \langle\,\boldsymbol{u}_2,\boldsymbol{a}_j\rangle\ \,\boldsymbol{u}_2
                   \;-\ \ldots
                   \;-\ \langle\,\boldsymbol{u}_{j-1},\boldsymbol{a}_j\rangle\ \,
                   \boldsymbol{u}_{j-1}\,;
   \end{array}

(:math:`\,\lambda_i\ ` have been computed from the orthogonality conditions
:math:`\,\langle\,\boldsymbol{y}_i,\boldsymbol{y}_j\rangle=0\,,\ \ i=1,2,\dots,j-1.`) 

Hence, vectors from the initial basis :math:`\,\mathcal{B}\,` may be represented 
by vectors from an orthonormal basis :math:`\,\mathcal{Q}\,` in the following way:

.. math::
   
   \begin{array}{rcl}
   \boldsymbol{a}_j & = & \langle\,\boldsymbol{u}_1,\boldsymbol{a}_j\rangle\ \,\boldsymbol{u}_1
                     \;+\ \langle\,\boldsymbol{u}_2,\boldsymbol{a}_j\rangle\ \,\boldsymbol{u}_2
                     \;+\ \ldots
                     \;+\ \langle\,\boldsymbol{u}_{j-1},\boldsymbol{a}_j\rangle\ \,
                                                        \boldsymbol{u}_{j-1}
                     \;+\ \,\boldsymbol{y}_j\ \,= \\
                    & = & \langle\,\boldsymbol{u}_1,\boldsymbol{a}_j\rangle\ \,\boldsymbol{u}_1
                     \;+\ \langle\,\boldsymbol{u}_2,\boldsymbol{a}_j\rangle\ \,\boldsymbol{u}_2
                     \;+\ \ldots
                     \;+\ \langle\,\boldsymbol{u}_{j-1},\boldsymbol{a}_j\rangle\ \,
                                                        \boldsymbol{u}_{j-1}
                     \;+\ \,\|\,y_j\|\ \,\boldsymbol{u}_j\ \,= \\
                    & = & \langle\,\boldsymbol{u}_1,\boldsymbol{a}_j\rangle\ \,\boldsymbol{u}_1
                     \;+\ \langle\,\boldsymbol{u}_2,\boldsymbol{a}_j\rangle\ \,\boldsymbol{u}_2
                     \;+\ \ldots
                     \;+\ \langle\,\boldsymbol{u}_{j-1},\boldsymbol{a}_j\rangle\ \,
                                                        \boldsymbol{u}_{j-1}
                     \;+\ \langle\,\boldsymbol{u}_j,\boldsymbol{a}_j\rangle\ \,
                                                    \boldsymbol{u}_j\,.
   \end{array}     

.. Definiujemy (górną trójkątną) macierz 
   :math:`\ \boldsymbol{R}\,=\,[\,\rho_{ij}\,]_{n\times n}\ ` następująco:

These relations may be written in terms of an (uppertriangular) matrix 
:math:`\ \boldsymbol{R}\,=\,[\,\rho_{ij}\,]_{n\times n}\,:`

.. math::
   
   \rho_{ij}\ \ :\,=\ \ 
   \left\{\ 
   \begin{array}{ccc}
   \langle\,\boldsymbol{u}_i,\boldsymbol{a}_j\rangle & \text{dla} & i\leq j \\
                            0                        & \text{dla} &  i > j 
   \end{array}
   \right.,\quad i,j=1,2,\dots,n\,.

   \boldsymbol{a}_j\ \;=\ \ 
   \sum_{i\,=\,1}^j\ \langle\,\boldsymbol{u}_i,\boldsymbol{a}_j\rangle\ \boldsymbol{u}_i\ \ =\ \ 
   \sum_{i\,=\,1}^n\ \rho_{ij}\;\boldsymbol{u}_i\,,\qquad j=1,2,\dots,n.

The last equality states that the :math:`\,j`-th column of the matrix :math:`\,\boldsymbol{A}\ ` is a linear combination of columns of the matrix
:math:`\,\boldsymbol{Q},\ ` with coefficients from the
:math:`\,j`-th column of the matrix :math:`\,\boldsymbol{R}.\ `
According to the column rule of matrix multiplication this is nothing else than the identity
:math:`\ \boldsymbol{A}=\boldsymbol{Q}\boldsymbol{R}\ ` we were looking for.

.. W całej okazałości macierz :math:`\ \boldsymbol{R}\ ` przedstawia się następująco:

   .. math::
   
   \boldsymbol{R}\ \ =\ \ 
   \left[
   \begin{array}{ccccc}
   \langle\,\boldsymbol{u}_1,\boldsymbol{a}_1\rangle &
   \langle\,\boldsymbol{u}_1,\boldsymbol{a}_2\rangle &
   \langle\,\boldsymbol{u}_1,\boldsymbol{a}_3\rangle &
   \dots &
   \langle\,\boldsymbol{u}_1,\boldsymbol{a}_n\rangle 
   \\   
    0                                                &
   \langle\,\boldsymbol{u}_2,\boldsymbol{a}_2\rangle &
   \langle\,\boldsymbol{u}_2,\boldsymbol{a}_3\rangle &
   \dots &
   \langle\,\boldsymbol{u}_2,\boldsymbol{a}_n\rangle 
   \\   
    0                                                &
    0                                                &
   \langle\,\boldsymbol{u}_3,\boldsymbol{a}_3\rangle &
   \dots &
   \langle\,\boldsymbol{u}_3,\boldsymbol{a}_n\rangle 
   \\
   \dots & \dots & \dots & \dots & \dots
   \\
   0 & 0 & 0 & \dots & \langle\,\boldsymbol{u}_n,\boldsymbol{a}_n\rangle
   \end{array}
   \right]\,.

**Application of the QR decomposition.** :math:`\ `

Consider a Cramer system of equations over a field :math:`\,R\ ` with the coefficient matrix
:math:`\,\boldsymbol{A}\in M_n(R)\ ` 
and a column vector of constants :math:`\,\boldsymbol{b}\in R^n\,.\ `
If :math:`\ \boldsymbol{A}=\boldsymbol{Q}\boldsymbol{R},\ ` 
then this system may be written as:

.. math::
   :nowrap:
   
   \begin{eqnarray*}
   \boldsymbol{A}\,\boldsymbol{x}                 &  =  & \boldsymbol{b}\,, \\
   (\boldsymbol{Q}\boldsymbol{R})\,\boldsymbol{x} &  =  & \boldsymbol{b}\,, \\   
   \boldsymbol{Q}(\boldsymbol{R}\boldsymbol{x})   &  =  & \boldsymbol{b}\,.
   \end{eqnarray*}

Orthogonality of matrix :math:`\,\boldsymbol{Q}\,` allows to replace an expensive operation of taking an inverse by a transpose: 
:math:`\ \ \boldsymbol{Q}^{-1}=\;\boldsymbol{Q}^T,\ \ ` and so

.. math::
   
   \boldsymbol{R}\,\boldsymbol{x}\ =\ \boldsymbol{Q}^T\,\boldsymbol{b}\,.

A system of equations with triangular matrix :math:`\,\boldsymbol{R}\ ` may be solved quickly by the "back-substitution" method.

For an illustration, we perform the QR decomposition for the matrix

.. math::
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{rrr}
   -2 &  8 &  19 \\
   -2 & 11 & -14 \\
    1 & -7 &  -8
   \end{array}\right]\,.

The Gram-Schmidt orthogonalization applied to columns of the matrix :math:`\,\boldsymbol{A}\ `
gives a matrix :math:`\,\boldsymbol{P}\ ` whose columns comprise an orthogonal system and 
further the target orthogonal matrix :math:`\,\boldsymbol{Q}.\ \\`
If one knows :math:`\,\boldsymbol{Q},\ ` the matrix :math:`\,\boldsymbol{R}\ `
may be easily computed from :math:`\ \boldsymbol{R}=\boldsymbol{Q}^T\boldsymbol{A}\,.`


.. code-block:: python

   sage: A = matrix(QQ,[[-2,  8,  19],
                        [-2, 11, -14],
                        [ 1, -7,  -8]])
   
   sage: P,Q = copy(A),copy(A)
   
   sage: P[:,0] = A[:,0]
   sage: Q[:,0] = P[:,0]/P[:,0].norm()
   
   sage: P[:,1] = A[:,1] - Q.column(0)*A.column(1)*Q[:,0]
   sage: Q[:,1] = P[:,1]/P[:,1].norm()
   
   sage: P[:,2] = A[:,2] - Q.column(0)*A.column(2)*Q[:,0]\
                         - Q.column(1)*A.column(2)*Q[:,1]
   
   sage: Q[:,2] = P[:,2]/P[:,2].norm()
   
   sage: R = Q.T*A
   
   sage: table([['$A$','','$Q$','','$R$'],[A,'=',Q,'*',R]])

.. math::
   
   \begin{array}{ccccc}
   A & & Q & & R \\ \\
   \left(\begin{array}{rrr} -2 & 8 & 19 \\ -2 & 11 & -14 \\ 1 & -7 & -8 \end{array}\right) & = &
   \left(\begin{array}{rrr}
   -\textstyle\frac{2}{3} & -\textstyle\frac{2}{3} & \textstyle\frac{1}{3} \\
   -\textstyle\frac{2}{3} & \textstyle\frac{1}{3} & -\textstyle\frac{2}{3} \\
    \textstyle\frac{1}{3} & -\textstyle\frac{2}{3} & -\textstyle\frac{2}{3} \end{array}\right) & * &
   \left(\begin{array}{rrr} 3 & -15 & -6 \\ 0 & 3 & -12 \\ 0 & 0 & 21 \end{array}\right)
   \end{array}

Sage contains a function (method) ``QR()``, which performs the QR decomposition for a given matrix :math:`\,\boldsymbol{A}\ ` and returns a pair of matrices :math:`\,(\boldsymbol{Q},\boldsymbol{R})\,.\ `
It requires a ring which contains square roots and rational numbers (for example a field of algebraic numbers ``QQbar``). Numerical computations should be done over a field ``RDF`` of real numbers with double precision.

.. code-block:: python 

   sage: B = A.change_ring(RDF)
   sage: (Q,R) = B.QR()
   sage: show((Q.round(2),R))

.. math::
   
   \left(\left( 
   \begin{array}{rrr}
   -0.67 & 0.67 & -0.33 \\
   -0.67 & -0.33 & 0.67 \\
    0.33 & 0.67 & 0.67
   \end{array}\right), 
   \left(\begin{array}{rrr}
    3.0 & -15.0 & -6.0 \\
    0.0 & -3.0 & 12.0 \\
   -0.0 & -0.0 & -21.0
   \end{array}\right)\right)

























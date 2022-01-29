
Eigenvalues and Eigenvectors
----------------------------

The set of eigenvalues of a linear operator is called the *spectrum* of this linear operator. We will show that eigenvectors of a linear operator associated with distinct eigenvalues are linearly independent.


.. admonition:: Theorem 1.
   
   Let :math:`\,F\in\text{End}(V)\,,\ \ V=V(K)\,,\ \ \dim V=n\geq 2.\ \,`
   If a spectrum of the operator :math:`\,F\ ` contains :math:`\,k\leq n\ ` 
   distinct eigenvalues :math:`\ \lambda_1,\,\lambda_2,\,\ldots,\,\lambda_k\,,\ `
   then the associated eigenvectors :math:`\,v_1,\,v_2,\,\ldots,\,v_k\ `
   are linearly independent.

**Proof** :math:`\,` (induction on :math:`\,k\,`).

I. :math:`\ k=2.\ \ ` Let :math:`\quad
   Fv_1=\lambda_1\,v_1\,,\quad Fv_2=\lambda_2\,v_2\,,\quad 
   v_1,v_2\in V\!\smallsetminus\!\{\theta\}\,.`

   Assume that vectors :math:`\ v_1,\,v_2\ ` are linearly dependent,
   that is, there exists a non-trivial linear combination of these vectors which 
   is equal to the zero vector:
   
   .. math::
       
      \alpha_1\,v_1\,+\;\alpha_2\,v_2\ =\ \theta\,,\qquad\alpha_1\neq 0\ \ \lor\ \ \alpha_2\neq 0\,.
   
   If :math:`\ \alpha_2 = 0\,,\ ` then :math:`\ \alpha_1\,v_1=\theta\ \,`
   with :math:`\ \alpha_1\neq 0\,,\ \,` which implies that :math:`\\`
   :math:`\ v_1=\theta.\ ` Hence :math:`\ \alpha_2\neq 0\,,\ ` and thus we can write:
   
   .. math::
      
      v_2\,=\;\beta\,v_1\,,\qquad\beta\ =\ -\ \frac{\alpha_1}{\alpha_2}\ \,\neq\ \,0\,.
   
   Computing in two ways the action of the operator :math:`\,F\ ` on a vector
   :math:`\,v_2 ,\ ` we obtain
   
   .. math::
      
      \begin{array}{l}
      Fv_2\ =\ \lambda_2\,v_2\ =\ \lambda_2\,(\beta\,v_1)\ =\ (\beta\,\lambda_2)\ v_1\,, \\
      Fv_2\ =\ F(\beta\,v_1)\ =\ \beta\ Fv_1
          \ =\ \beta\,(\lambda_1\,v_1)\ =\ (\beta\,\lambda_1)\ v_1\,.
      \end{array}
      
      \text{Hence}\qquad(\beta\,\lambda_2)\ v_1\ =\ (\beta\,\lambda_1)\ v_1\,,\qquad
      \text{and thus}\qquad\beta\,(\lambda_2-\lambda_1)\ v_1\ =\ \theta\,.
   
   Since :math:`\ \beta\neq 0\ ` and :math:`\ v_1\neq\theta ,\ ` we must have 
   :math:`\,\lambda_1=\lambda_2\,.\ `
   Linear independence of the eigenvectors :math:`\,v_1,\ v_2\ ` 
   implies then the equality of the associated eigenvalues
   :math:`\,\lambda_1,\,\lambda_2\,.` :math:`\\`
   By contraposition we deduce that if the eigenvalues :math:`\,\lambda_1,\,\lambda_2\ `
   are distinct, then :math:`\\`
   the associated eigenvectors :math:`\ v_1,\ v_2\ ` are linearly independent, 
   what was to be demonstrated.

II. | Assume that the theorem holds for certain :math:`\ k<n.\ `
    | We wil show that the hopothesis is true also for :math:`\ k+1\,.`

    Assume that the linear operator :math:`\,F\ ` has :math:`\,k+1\ ` distinct eigenvalues 
    :math:`\ \lambda_1,\,\ldots,\,\lambda_k,\,\lambda_{k+1}\,,` :math:`\\`
    with the associated eigenvectors :math:`\ v_1,\,\ldots,\,v_k,\,v_{k+1}\,.` :math:`\\` 
    By the inductive assumption, the vectors :math:`\ v_1,\ldots,v_k\ ` are linearly independent. :math:`\\` 
    We wil show that the whole set :math:`\ (v_1,\ldots,v_k,v_{k+1})\,` is linearly independent.
    
    Assume that the vectors :math:`\ v_1,\ldots,v_k,v_{k+1}\ ` are linearly dependent
    that is, :math:`\\` 
    there exists a non-trivial linear combination of these vectors which is equal to the zero vector:
    
    .. math::
       :label: lin_dep
       
       \alpha_1\,v_1\,+\,\ldots\,+\,\alpha_k\,v_k\,+\,\alpha_{k+1}\,v_{k+1}\ =\ \theta\,,
    
    but not all :math:`\ \,\alpha_i\,,\ \ i=1,\ldots,k,\,k+1\,,\ \,` are zero. :math:`\\`
    If :math:`\,\alpha_{k+1}=0\,,\ \,` 
    then :math:`\,` the equation :math:`\,` :eq:`lin_dep` :math:`\,` implies

    .. math::
       
       \alpha_1\,v_1\,+\,\ldots\,+\,\alpha_k\,v_k\ = \theta
    
    with not all :math:`\ \,\alpha_i\,,\ \ i=1,\ldots,k\,,\ \,` equal to zero. :math:`\\` 
    This contradicts the assumption that the vectors :math:`\ v_1,\ldots,v_k\,\ ` 
    are linearly independent.
    
    Hence, :math:`\ \alpha_{k+1}\neq 0\,,\ \,` 
    and thus the equality :eq:`lin_dep` may be written as:
    
    .. math::
          
       v_{k+1}\ =\ \beta_1\,v_1\,+\,\ldots\,+\,\beta_k\,v_k\,,\qquad
       \beta_i\ =\ -\ \frac{\alpha_i}{\alpha_{k+1}}\ ,\quad i=1,\ldots,k\,.

    Since :math:`\ v_{k+1}\neq\theta,\ \,` then not all the coefficients 
    :math:`\ \beta_i\ ` are equal to zero: :math:`\\` 
    there exists (at least one) index :math:`\ i_0\in\{\,1,\ldots,k\,\}\ ` 
    for which :math:`\ \beta_{i_0}\neq 0\,.`    

    We compute in two ways a result of the action of the operator :math:`\,F\ ` on the vector :math:`\,v_{k+1}:`
    
    .. math::
       
       \begin{array}{l}
       F\,v_{k+1}\ =\ \lambda_{k+1}\,v_{k+1}\ =\ 
       \lambda_{k+1}\ \displaystyle\sum_{i\,=\,1}^k\ \beta_i\,v_i\ =\ 
       \displaystyle\sum_{i\,=\,1}^k\ (\beta_i\,\lambda_{k+1})\ v_i\ , \\
       F\,v_{k+1}\ =\ F\,\left(\:\displaystyle\sum_{i\,=\,1}^k\ \beta_i\,v_i\right)\ =\ 
       \displaystyle\sum_{i\,=\,1}^k\ \beta_i\ Fv_i\ =\ 
       \displaystyle\sum_{i\,=\,1}^k\ (\beta_i\,\lambda_i)\ v_i\ .
       \end{array}

       \begin{array}{l}       
       \text{Hence}\qquad
       \displaystyle\sum_{i\,=\,1}^k\ (\beta_i\,\lambda_{k+1})\ v_i\ =\ 
       \displaystyle\sum_{i\,=\,1}^k\ (\beta_i\,\lambda_i)\ v_i\,, \\
       \text{so that}\qquad
       \displaystyle\sum_{i\,=\,1}^k\ \beta_i\ (\lambda_{k+1}-\lambda_i)\ v_i\ =\ \theta\,.
       \end{array}

    Linear indpendence of vectors :math:`\ v_1,\ldots,v_k\ ` implies vanishing of all 
    the coefficients of the above linear combination:
        
    .. math::
       
       \beta_i\ (\lambda_{k+1}-\lambda_i)\ =\ 0\qquad\text{for}\quad i=1,\ldots,k\,.

    In particular, :math:`\,` for :math:`\,i=i_0\ ` we obtain  
    :math:`\ \beta_{i_0}\ (\lambda_{k+1}-\lambda_{i_0})\ =\ 0\,,\ \,` :math:`\\`
    which means, :math:`\,` since :math:`\ \beta_{i_0}\neq 0\,,\ \,` that 
    :math:`\ \,\lambda_{k+1}=\lambda_{i_0}\,.`
    
    Hence, the assumption that the vectors :math:`\ v_1,\ldots,v_k,\,v_{k+1}\ ` 
    are linearly dependent leads to a contradiction with the assumption that
    all the eigenvalues
    :math:`\ \lambda_1,\,\ldots,\,\lambda_k,\,\lambda_{k+1}\ ` are distinct. 
    This means that the above vectors are linearly independent, which finishes 
    the proof.

As we showed earlier, in an :math:`\,n`-dimensional vector space 
every linearly independent set of :math:`\,n\ ` vectors comprises a basis.
Hence, if a linear operator :math:`\,F\in\text{End}(V),\ ` where :math:`\,\dim V=n,\ \,`
has :math:`\,n\ ` distinct eigenvalues, then the space :math:`\,V\ `
has a basis which consists of eigenvectors of :math:`\,F.\,` More precisely, we may write  

.. admonition:: Corollary.
   
   If a linear operator :math:`\,F\ ` defined on an :math:`\,n`-dimensional vector 
   space :math:`\,V(K)\ \,` has :math:`\ \,n\ \,` distinct eigenvalues
   :math:`\ \,\lambda_1,\,\lambda_2,\,\ldots,\,\lambda_n\,,\ \,` 
   and :math:`\ v_1,\,v_2,\,\ldots,\,v_n\,` are the asscoaieted eigenvectors:
   
   .. math::
      
      Fv_i\ =\ \lambda_i\,v_i\,,\quad v_i\neq\theta\,,\qquad i=1,2,\ldots,n\,,
   
   then :math:`\,` the set :math:`\ \,\mathcal{B}=(v_1,v_2,\ldots,v_n)\ \,` 
   is a basis of the space :math:`\,V.`

If :math:`\,V\ ` is a unitary or Euclidean vector space, 
and :math:`\ \,F\ ` a normal operator :math:`\\`
(e.g. Hermitian or unitary), :math:`\,`
then eigenvectors associated with distinct eigenvalues are orthogonal, and thus the set 
:math:`\,\mathcal{B}\ \,` is an orthogonal basis.

The above Corollary may be also proved  independently as the following 

.. admonition:: Theorem 2.
   
   If a linear operator :math:`\,F\ ` defined on an :math:`\,n`-dimensional vector 
   space :math:`\,V(K)\ \,` has :math:`\ \,n\ \,` distinct eigenvalues, then the
   associated eigenvectors are linearly independent and thus comprise a basis of 
   the space :math:`\ V.`

**Proof.** :math:`\,` Assume that :math:`\ \ F\in\text{End}(V)\,,\ \ ` 
where :math:`\ \ V=V(K)\,,\ \ \dim V=n\,,\ \ ` and :math:`\,` that
 
.. math::

   Fv_i=\lambda_i\,v_i\,,\ \ v_i\in V\!\smallsetminus\!\{\theta\}\,,\ \ \lambda_i\in K\,,\ \  
   \text{where}\ \ \lambda_i\neq\lambda_j\ \ \text{for}\ \ i\neq j,\quad i,j=1,2,\ldots,n.

To prove linear independence of the set of vectors :math:`\ (v_1,v_2,\ldots,v_n)\ `
we show that every linear combination of these vectors which gives the zero vector must be the trivial combination.

Assume that
:math:`\quad\alpha_1\,v_1+\alpha_2\,v_2+\ldots+\alpha_n\,v_n=\theta\,,\quad
\alpha_i\in K\,,\ \ i=1,2,\ldots,n\,.`

Applying :math:`\,n-1\ ` times the operator :math:`\,F\ ` to both sides of the equality,  :math:`\,` we obtain:

.. .. math::
   :nowrap:
   
   \begin{alignat*}{5}
   1\ \,(\alpha_1\,v_1)               & {\ \,} + {\ } & 1\ \,(\alpha_2\,v_2)               & {\ \,} + {\ \,} & \ldots & {\ \,} + {\ } & 1\ \,(\alpha_n\,v_n)               & {\ \ } = {\ } & \ \theta \\
   \lambda_1\ \,(\alpha_1\,v_1)       & {\ \,} + {\ } & \lambda_2\ \,(\alpha_2\,v_2)       & {\ \,} + {\ \,} & \ldots & {\ \,} + {\ } & \lambda_n\ \,(\alpha_n\,v_n)       & {\ \ } = {\ } & \ \theta \\
   \lambda_1^2\ \,(\alpha_1\,v_1)     & {\ \,} + {\ } & \lambda_2^2\ \,(\alpha_2\,v_2)     & {\ \,} + {\ \,} & \ldots & {\ \,} + {\ } & \lambda_n^2\ \,(\alpha_n\,v_n)     & {\ \ } = {\ } & \ \theta \\
   \ldots\quad                        & {\ \,}   {\ } & \ldots\quad                        & {\ \,}   {\ \,} & \ldots & {\ \,}   {\ } & \ldots\quad                        & {\ \ }   {\ } & \        \\
   \lambda_1^{n-1}\ \,(\alpha_1\,v_1) & {\ \,} + {\ } & \lambda_2^{n-1}\ \,(\alpha_2\,v_2) & {\ \,} + {\ \,} & \ldots & {\ \,} + {\ } & \lambda_n^{n-1}\ \,(\alpha_n\,v_n) & {\ \ } = {\ } & \ \theta
   \end{alignat*} 

.. math::
   :nowrap:
   
   \begin{alignat*}{5}
   1\ \,(\alpha_1\,v_1) & {\ \,} + {\ }   & 
   1\ \,(\alpha_2\,v_2) & {\ \,} + {\ \,} & 
   \ldots               & {\ \,} + {\ }   & 
   1\ \,(\alpha_n\,v_n) & {\ \ } = {\ }   & \ \theta\,, \\
   \lambda_1\ \,(\alpha_1\,v_1) & {\ \,} + {\ }   & 
   \lambda_2\ \,(\alpha_2\,v_2) & {\ \,} + {\ \,} & 
   \ldots                       & {\ \,} + {\ }   & 
   \lambda_n\ \,(\alpha_n\,v_n) & {\ \ } = {\ }   & \ \theta\,, \\
   \lambda_1^2\ \,(\alpha_1\,v_1) & {\ \,} + {\ }   & 
   \lambda_2^2\ \,(\alpha_2\,v_2) & {\ \,} + {\ \,} & 
   \ldots                         & {\ \,} + {\ }   & 
   \lambda_n^2\ \,(\alpha_n\,v_n) & {\ \ } = {\ }   & \ \theta\,, \\
   \ldots\quad & {\ \,}   {\ }   & 
   \ldots\quad & {\ \,}   {\ \,} & 
   \ldots      & {\ \,}   {\ }   & 
   \ldots\quad & {\ \ }   {\ }   & \ \\
   \lambda_1^{n-1}\ \,(\alpha_1\,v_1) & {\ \,} + {\ }   & 
   \lambda_2^{n-1}\ \,(\alpha_2\,v_2) & {\ \,} + {\ \,} & 
   \ldots                             & {\ \,} + {\ }   & 
   \lambda_n^{n-1}\ \,(\alpha_n\,v_n) & {\ \ } = {\ }   & \ \theta\,.
   \end{alignat*}

The resulting set of equalities may be written in a form of a matrix equation:

.. math::
   
   \left[\begin{array}{cccc} 1               & 1               & \dots & 1               \\
                             \lambda_1       & \lambda_2       & \dots & \lambda_n       \\
                             \lambda_1^2     & \lambda_2^2     & \dots & \lambda_n^2     \\
                             \cdots          & \cdots          &\cdots & \cdots          \\ 
                             \lambda_1^{n-1} & \lambda_2^{n-1} & \dots & \lambda_n^{n-1}
   \end{array}\right]
   \left[\begin{array}{c} 
   \alpha_1\,v_1 \\ \alpha_2\,v_2 \\ \alpha_3\,v_3 \\ \cdots \\ \alpha_n\,v_n
   \end{array}\right]
   \ \ =\ \ 
   \left[\begin{array}{c} 
   \theta \\ \theta \\ \theta \\ \cdots \\ \theta
   \end{array}\right]\,.

If the eigenvalues :math:`\ \lambda_1,\,\lambda_2,\,\dots,\lambda_n\ ` are distinct,
then the square matrix on the left hand side is nondegenerate, as follows from the formula for the Vandermonde determinant:

.. math::
    :label: Vandermonde
   
    \left|\begin{array}{cccc} 1               & 1               & \dots & 1               \\
                             \lambda_1       & \lambda_2       & \dots & \lambda_n       \\
                             \lambda_1^2     & \lambda_2^2     & \dots & \lambda_n^2     \\
                             \cdots          & \cdots          &\cdots & \cdots          \\ 
                             \lambda_1^{n-1} & \lambda_2^{n-1} & \dots & \lambda_n^{n-1}
    \end{array}\right|
    \quad =\ \ 
    \prod_{1\,\leq\,l\,<\,k\,\leq\,n}^n\ (\lambda_k-\lambda_l)\quad\neq\quad0\,.

Therefore, since the inverse matrix exists, we obtain

.. math::
   
   \left[\begin{array}{c} 
   \alpha_1\,v_1 \\ \alpha_2\,v_2 \\ \alpha_3\,v_3 \\ \cdots \\ \alpha_n\,v_n
   \end{array}\right]
   \ \ =\ \ 
   \left[\begin{array}{cccc} 1               & 1               & \dots & 1               \\
                             \lambda_1       & \lambda_2       & \dots & \lambda_n       \\
                             \lambda_1^2     & \lambda_2^2     & \dots & \lambda_n^2     \\
                             \cdots          & \cdots          &\cdots & \cdots          \\ 
                             \lambda_1^{n-1} & \lambda_2^{n-1} & \dots & \lambda_n^{n-1}
   \end{array}\right]^{-1}\ 
   \left[\begin{array}{c} 
   \theta \\ \theta \\ \theta \\ \cdots \\ \theta
   \end{array}\right]\  =\  
   \left[\begin{array}{c} 
   \theta \\ \theta \\ \theta \\ \cdots \\ \theta
   \end{array}\right]\,.

In this way :math:`\ \ \alpha_i\,v_i=\theta\,,\ \ `
and because :math:`\ \ v_i\neq\theta\,,\ \ `
it follows that :math:`\ \ \alpha_i=0\,,\quad i=1,2,\dots,n\,.\ \,`
That is, we proved the implication

.. math::
   
   \alpha_1\,v_1+\,\alpha_2\,v_2+\,\ldots\,+\,\alpha_n\,v_n\,=\,\theta
   \qquad\Rightarrow\qquad
   \alpha_1\,=\;\alpha_2\,=\;\ldots\;=\;\alpha_n\,=\;0

which states linear independence of the vectors :math:`\ v_1,\,v_2,\,\ldots,\,v_n\,.` 

   
    
































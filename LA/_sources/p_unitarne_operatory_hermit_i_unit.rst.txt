
Hermitian and Unitary Operators
-------------------------------

.. Rozważamy skończenie wymiarową przestrzeń unitarną :math:`\,V(C).\ `

We start with two lemmas which will be useful in further considerations. :math:`\\`

.. admonition:: Lemma 0.
   
   Let :math:`\ y\in V\,,\ ` where :math:`\ V\ ` is a unitary space.  
   Then   

   .. math::
      
      \langle x,y\rangle = 0 \quad\text{for all}\quad x\in V
      \qquad\Leftrightarrow\qquad y = \theta\,.

**Proof.**

:math:`\ \Rightarrow\ :\ `
If :math:`\ \ \langle x,y\rangle = 0\,,\ \ x\in V\,,\ `
then putting :math:`\ x=y\ ` we obtain :math:`\ \langle y,y\rangle = 0\,,\ `
and thus :math:`\ y=\theta.`

:math:`\ \Leftarrow\ :\ `
If :math:`\ y = \theta\,,\ ` then by properties of an inner product,
:math:`\ \langle x,y\rangle = \langle x,\theta\rangle = 0\,.`

.. admonition:: Corollary.
   
If :math:`\ \,y_1,\,y_2\,\in\,V\,,\ ` where :math:`\ V\ ` is a unitary space, :math:`\,` then

   .. math::
      
      \langle x,y_1\rangle = \langle x,y_2\rangle \quad\text{for all}\quad x\in V
      \qquad\Leftrightarrow\qquad y_1 = y_2\,.

Indeed, if the condition 
:math:`\ \langle x,y_1\rangle = \langle x,y_2\rangle\ ` holds for all :math:`\ x\in V\,,`
then

.. math::
   
   \langle\,x,\,y_1-y_2\,\rangle = 0\,,\quad x\in V
   \qquad\Leftrightarrow\qquad y_1-y_2=\theta \qquad\Leftrightarrow\qquad y_1=y_2\,.
   
   \;

The *zero operator* :math:`\ \mathcal{O}\ ` which occurs in the next 
lemma is defined by: :math:`\ \ \mathcal{O}(v)=\theta\,,\ \ v\in V. \\` 

.. admonition:: Lemma 1.
   
   Let :math:`\ F\ ` be a linear operator defined on a
   unitary space :math:`\,V.\ ` Then
   
   .. math::
      
      \langle\,x,Fy\,\rangle\,=\,0 \quad\text{for all}\quad x,y\in V
      \qquad\Leftrightarrow\qquad F=\mathcal{O}\,.

**Proof.**

:math:`\ \Rightarrow\ :\ ` 
If :math:`\ \ \langle x,Fy\rangle = 0 \ ` for all :math:`\ \ x,y\in V\,,\ `
then putting :math:`\ x=Fy\ ` we obtain:
 
 :math:`\ \langle Fy,Fy\rangle = 0\ \,`  
 and thus :math:`\ \,Fy=\theta\ \,` for every :math:`\ y\in V\,,\ \,` 
 which means that :math:`\ \,F=\mathcal{O}\,.` 

:math:`\ \Leftarrow\ :\ `
If :math:`\ \,F=\mathcal{O}\,,\ ` then for arbitrary :math:`\ x,y\in V:\ \ 
\langle x,Fy\rangle = \langle x,\mathcal{O}y\rangle = \langle x,\theta\rangle = 0\,.`

.. admonition:: Corollary.
   
   If :math:`\ F,\,G\ ` are linear operators defined on a unitary space
   :math:`\,V,\ \,` then
 
   .. math::
      
      \langle\,x,Fy\,\rangle\,=\,\langle\,x,G\,y\,\rangle
      \quad\text{for all}\quad x,y\in V
      \qquad\Leftrightarrow\qquad F=\,G\,.

Indeed, if the condition :math:`\ \langle\,x,Fy\,\rangle\,=\,\langle\,x,Gy\,\rangle\,` holds for every :math:`\ x,y\in V\,,` then

.. math::
   
   \langle\,x,(F-G)\,y\,\rangle\,=\,0\,,\quad x,y\in V\qquad\Leftrightarrow\qquad F-G=\mathcal{O}
   \qquad\Leftrightarrow\qquad F=G\,.   

.. :math:`\ \langle\,x,(F-G)\,y\,\rangle\,=\,0\,,\quad x,y\in V\qquad\Leftrightarrow\qquad F-G=0
   \qquad\Leftrightarrow\qquad F=G\,.`


Hermitian Conjugation of a Linear Operator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Definition.
   
   *Hermitian conjugation* :math:`\,` of a linear operator :math:`\ F\in\,\text{End}(V)` :math:`\\`
   is a linear operator :math:`\ F^+\in\,\text{End}(V)\ ` which satisfies the condition
   
   .. math::
      :label: F_plus_0
      
      \langle\,x,F^+y\,\rangle\,=\,\langle\,Fx,y\,\rangle
      \quad\text{for all}\quad x,y\in V\,.

Observe that if the condition :eq:`F_plus_0` holds, :math:`\,` then

.. math::
   :label: F_plus_1
   
   \langle\,F^+x,\,\,y\,\rangle\ =\ 
   \langle\,y,\,F^+x\,\rangle^*\ =\ \langle\,Fy,\,x\,\rangle^*\ =\ 
   \langle\,x,\,Fy\,\rangle\,.

The reverse implication is also true: the condition :eq:`F_plus_1` implies :eq:`F_plus_0`. We may write then

.. admonition:: Corollary.
   
   Hermitian conjugation :math:`\,F^+\,` of the operator 
   :math:`\,F\in\text{End}(V)\ ` :math:`\\`
   satisfies two equivalent conditions:
   
   .. math::
      :label: F_plus_2
      
      \begin{array}{l}
      \langle\,x,F^+y\,\rangle\,=\,\langle\,Fx,y\,\rangle\,,
      \\ \\     
      \langle\,F^+x,\,\,y\,\rangle\ =\ \langle\,x,\,Fy\,\rangle
      \end{array}      
      \qquad\text{for all}\quad x,y\in V\,.
   
We will explain the following issues that arise from using such a definition:

1. do the formulae :eq:`F_plus_2` define the operator :math:`\,F^+\,,\ ` i.e., 
   for a given operator :math:`F\,` is it possible to effectively determine 
   the image :math:`\,F^+y\ ` of any vector :math:`\,y\in V\,?`

2. is the operator :math:`\,F^+\ ` linear?

3. is the operator :math:`\,F^+\ ` uniquely defined?

For the sake of an answer, assume that :math:`\,\dim V=n\ ` and 
:math:`\ \mathcal{B}=(u_1,u_2,\ldots,u_n)\ ` is an orthonormal basis.

1. Substitution :math:`\ x=u_i\ ` in :eq:`F_plus_0` gives a formula
   for the :math:`\,i`-th coordinate of a vector :math:`\,F^+y\,` in terms of basis vectors:
   
   .. math::
      
      (F^+y)_{\,i}\ =\ \langle u_i,F^+y\rangle\ =\ \langle Fu_i,y\rangle\,,
      \qquad i=1,2,\dots,n.

   Hence, the vector :math:`\,F^+y\ ` is determined by its coordinates in basis 
   :math:`\ \mathcal{B}.`

2. Properties of an inner product imply that for arbitrary :math:`\,x\in V:`
   
   .. math::

      \begin{array}{rcl}
      \langle\,x,\,F^+(\alpha_1\,y_1+\alpha_2\,y_2)\,\rangle & = &      
      \langle\,Fx,\,\alpha_1\,y_1\,+\,\alpha_2\,y_2\,\rangle\,= \\ \\
      & = & \alpha_1\,\langle Fx,y_1\rangle\,+\,\alpha_2\:\langle Fx,y_2\,\rangle\,= \\ \\
      & = & \alpha_1\,\langle x,F^+y_1\rangle\,+\,\alpha_2\:\langle x,F^+y_2\,\rangle\,= \\ \\
      & = & \langle\,x,\,\alpha_1\,F^+y_1+\alpha_2\,F^+y_2\,\rangle\,.
      \end{array}

   Corollary to Lemma 0. implies linearity of the operator :math:`\,F^+:`
   
   .. math::
      
      F^+(\alpha_1\,y_1+\alpha_2\,y_2)\,=\ \alpha_1\,F^+y_1+\alpha_2\,F^+y_2\,,
      \qquad\alpha_1,\alpha_2\in C,\ \ y_1,y_2\in V\,.

3. In order to prove that the operator :math:`\,F^+\ ` is uniquely defined assume that 
   there exists an operator :math:`\,G\ ` which satisfies the condition :eq:`F_plus_0`:
   
   .. math::
      
      \langle\,x,F^+y\,\rangle\,=\,\langle\,Fx,y\,\rangle
      \quad\text{and}\quad
      \langle\,x,Gy\,\rangle\,=\,\langle\,Fx,y\,\rangle
      \quad\text{for all}\quad x,y\in V\,.

   This means that :math:`\ \langle\,x,F^+y\,\rangle\,=\,\langle\,x,Gy\,\rangle\ `
   for all :math:`\ x,y\in V\,.\ ` Lemma 1. implies that in this case :math:`\,G=F^+.\ `
   Hence, the conditions :eq:`F_plus_2` define the operator :math:`\,F^+\ ` uniquely.

   .. Istnieje więc dokładnie jeden operator liniowy :math:`\,F^+,\ `
      spełniający :eq:`F_plus_2`. :math:`\\`

The issue of existence and uniqueness of the operator :math:`\,F^+\ ` may be independently explained by

.. admonition:: Theorem 8.
   
   A linear operator :math:`\,\widetilde{F}\ ` is a Hermitian conjugation of the linear
   operator :math:`\,F\ ` :math:`\\`
   if and only if its matrix in an orthonormal basis :math:`\,\mathcal{B}\ ` :math:`\\` 
   is a Hermitian congujate of the matrix of the operator :math:`\,F\ ` in this basis:

   .. math::
      
      \widetilde{F}=F^+\quad\Leftrightarrow\quad 
      M_{\mathcal{B}}(\widetilde{F})\,=\,[\,M_{\mathcal{B}}(F)\,]^+\,,
      \qquad F,\,\widetilde{F}\,\in\,\text{End}(V)\,.

**Proof.** :math:`\,` Let :math:`\ \ \mathcal{B}=(u_1,u_2,\ldots,u_n),\ \ 
M_{\mathcal{B}}(F)=\boldsymbol{F}=[\,\varphi_{ij}\,]_{n\times n}\,,\ \ 
M_{\mathcal{B}}(\widetilde{F})=\widetilde{\boldsymbol{F}}=
[\,\widetilde{\varphi}_{ij}\,]_{n\times n}\,.`
   
.. .. math::
   
   M_{\mathcal{B}}(F)=\boldsymbol{F}=[\,\varphi_{ij}\,]_{n\times n}\,,\quad
   M_{\mathcal{B}}(F^+)=\widetilde{\boldsymbol{F}}=[\,\widetilde{\varphi}_{ij}\,]_{n\times n}\,.

:math:`\ \Rightarrow\ :\ `
Assume that :math:`\ \widetilde{F}=F^+,\ ` that is, the operator :math:`\ \widetilde{F}\ `
satisfies the condition :eq:`F_plus_0`:

.. math::
   :label: x_Ft_y
      
   \langle\,x,\widetilde{F}y\,\rangle\,=\,\langle\,Fx,y\,\rangle
   \quad\text{for all}\quad x,y\in V\,.

In particular, for :math:`\,x=u_i,\,y=u_j\ ` we obtain:

.. math::
   
   \widetilde{\varphi}_{ij}\,=\,
   \langle\,u_i\,,\widetilde{F}u_j\,\rangle\,=\,\langle\,Fu_i,u_j\,\rangle\,=\,
   \langle\,u_j,Fu_i\,\rangle^*\,=\,
   \varphi_{ji}^*\,=\,\varphi_{ij}^+\,,\qquad i,j=1,2,\ldots,n.

Equality of the corresponding matrix elements implies equality of matrices:
   
.. math::
      
   \widetilde{\boldsymbol{F}}=\boldsymbol{F}^+\,,
   \qquad\text{and thus}\qquad
   M_{\mathcal{B}}(\widetilde{F})\ =\ \left[\,M_{\mathcal{B}}(F)\,\right]^+.

:math:`\ \Leftarrow\ :\ `
Assume that :math:`\ M_{\mathcal{B}}(\widetilde{F})\ =\ 
\left[\,M_{\mathcal{B}}(F)\,\right]^+,\ \,`
that is, :math:`\ \widetilde{\boldsymbol{F}}=\boldsymbol{F}^+.`

We have to show that the operator :math:`\,\widetilde{F}\ ` satisfies the condition :eq:`x_Ft_y`, :math:`\,`
which will mean that :math:`\ \widetilde{F}=F^+.`

Let :math:`\ \ x\,=\,\displaystyle\sum_{i\,=\,1}^n\ \alpha_i\,u_i\,,\ \ 
y=\displaystyle\sum_{j\,=\,1}^n\ \beta_j\,u_j\,.\ ` Then

.. math::
      
   \begin{array}{rcl}
   \langle\,x,\widetilde{F}y\,\rangle & =\ & 
   \left\langle\ \;\displaystyle\sum_{i\,=\,1}^n\ \alpha_i\,u_i\,,\ \widetilde{F}
   \left(\:\sum_{j\,=\,1}^n\ \beta_j\,u_j\right)\;\right\rangle\ \ =
   \\ \\
   & =\ \ & \displaystyle\sum_{i,\,j=1}^n\,\alpha_i^*\,\beta_j\ 
   \langle\,u_i,\widetilde{F}u_j\,\rangle \ \,=\ \,
   \sum_{i,\,j=1}^n\,\alpha_i^*\,\beta_j\ \widetilde{\varphi}_{ij}\ \ =
   \\
   & =\ \ & \displaystyle\sum_{i,\,j=1}^n\,\alpha_i^*\,\beta_j\ \varphi_{ij}^+\ \,=\ \, 
   \sum_{i,\,j=1}^n\,\alpha_i^*\,\beta_j\ \varphi_{ji}^*\ \,=
   \\
   & =\ \ & \displaystyle\sum_{i,\,j=1}^n\,\alpha_i^*\,\beta_j\ 
   \langle\,u_j,Fu_i\,\rangle^*\ \,=\ \,
   \sum_{i,\,j=1}^n\,\alpha_i^*\,\beta_j\ \langle\,Fu_i,u_j\,\rangle\ \,=
   \\ \\
   & =\ \ & \left\langle\ F\,\left(\,\displaystyle\sum_{i\,=\,1}^n\ \alpha_i\,u_i\right)\,,\ \ 
   \displaystyle\sum_{j\,=\,1}^n\ \beta_j\,u_j\,\right\rangle\ \ =
   \ \ \langle\,Fx,y\,\rangle\,.
   \end{array}

If we use the notion of Hermitian conjugation also for the operation of Hermitian conjugation, we may write

.. Tezę twierdzenia 8. można powtórzyć bardziej konkretnie jako

.. admonition:: Corollary.
   
   Hermitian conjugation of a linear operator :math:`\,F\ ` is equivalent to 
   Hermitian conjugation of the matrix of this operator in every orthonormal 
   basis :math:`\,\mathcal{B}:`

   .. math::
      :label: M_B_F_plus
      
      M_{\mathcal{B}}(F^+)\ =\ \left[\,M_{\mathcal{B}}(F)\,\right]^+\,.

.. .. math::
      
      G=F^+\quad\Leftrightarrow\quad M_{\mathcal{B}}(G)\,=\,[\,M_{\mathcal{B}}(F)\,]^+\,,
      \qquad F,\,G\,\in\,\text{End}(V)\,.

:math:`\;`

**Properties of Hermitian conjugation.** :math:`\\`

1. Hermitian conjugation of sum of two operators is equal to sum of their Hermitian conjugations:
   
   .. math::
      
      (F+G)^+\,=\;F^++\:G^+\,,\qquad F,\,G\,\in\,\text{End}(V)\,.

2. Multiplication of an operator by a complex number :math:`\ \alpha\ ` multiplies its Hermitian conjugation 
   by :math:`\ \alpha^*:`
   
   .. math:: 
      
      (\alpha\,F)^+\ =\ \;\alpha^*\,F^+\,,\qquad\alpha\in C,\ \ F\in\text{End}(V)\,.

3. Hermitian conjugate of product (i.e., composition) of operators is equal to product 
   of Hermitian conjugations with reverse order of the factors:
   
   .. math::
      
      (F\,G)^+\ =\ \;G^+\,F^+\,,\qquad F,\,G\,\in\,\text{End}(V)\,.

4. Double Hermitian conjugation returns the initial operator :
   
   .. math::
      
      (F^+)^+\,=\ F\,,\qquad F\in\text{End}(V)\,.


**Proof of the properties** bases on Lemma 1. preceding this section. :math:`\\`

1. Definition of a sum of two linear operators implies the equalities:
   
   .. math::
      
      \begin{array}{lcl}
      \langle\,x,\,(F+G)^+\,y\,\rangle & \ = & \ \langle\,(F+G)\,x,\,y\,\rangle\ \ =
      \\ \\     
      & \ = & \ \langle\,Fx+Gx,\,y\,\rangle\ \ =
      \\ \\
      & \ = & \ \langle\,Fx,y\,\rangle + \langle\,Gx,\,y\,\rangle\ \ =
      \\ \\
      & \ = & \ \langle\,x,F^+y\,\rangle + \langle\,x,G^+y\,\rangle\ \ =
      \\ \\
      & \ = & \ \langle\,x,F^+y+G^+y\,\rangle\quad=\quad\langle\,x,(F^+\!+G^+)\,y\,\rangle\,;
      \\ & &
      \end{array}

      \langle\,x,\,(F+G)^+\,y\,\rangle = \langle\,x,(F^+\!+G^+)\,y\,\rangle, \ \ x,y\in V
      \quad\Rightarrow\quad (F+G)^+\ =\ F^++\,G^+ .

2. A proof of this property proceeds in a similar way as in the point 1.

3. By definition of composition of two linear operators:
   
   .. math::
      
      \begin{array}{rclcl}
      \langle\,x,\,(F\,G)^+\,y\,\rangle & = & 
      \langle\,(F\,G)\,x,\,y\,\rangle\ \ =\ \ \langle\,F(Gx),\,y\,\rangle & = &
      \\ \\
      & = & \langle\,Gx,F^+y\,\rangle\ \ =\ \ \langle\,x,G^+(F^+y)\,\rangle & = &
      \langle\,x,(G^+F^+)\,y\,\rangle\,;
      \\ & & & &
      \end{array}

      \langle\,x,\,(F\,G)^+\,y\,\rangle = \langle\,x,(G^+F^+)\,y\,\rangle,\ \ x,y\in V
      \qquad\Rightarrow\qquad
      (F\,G)^+\ =\ G^+F^+\,.

4. Formulae :eq:`F_plus_2` imply:
   
   .. math::
      
      \begin{array}{c}
      \langle\,x,\,(F^+)^+\,y\,\rangle\ =\ \langle\,F^+x,\,\,y\,\rangle\ =\ 
      \langle\,x,\,Fy\,\rangle\,; 
      \\ \\
      \langle\,x,\,(F^+)^+\,y\,\rangle\ =\ \langle\,x,\,Fy\,\rangle\,,\quad x,y\in V
      \qquad\Rightarrow\qquad 
      (F^+)^+\ =\ F\,.
      \end{array}

.. admonition:: Corollary.
   
   Hermitian conjugation is an antilinear operation:
   
   .. math::
      
      (\alpha\,F+\beta\,G)^+\ =\ \,
      \alpha^*\,F^+\,+\,\beta^*\,G^+\,,\qquad
      \alpha,\beta\in C\,,\quad F,\,G\in\,\text{End}(V)\,.

In view of Theorem 8. and its corollary, an anlogy between properties of Hermitian conjugation of matrices and linear operators is not coincidental. :math:`\\`


Hermitian Operators
~~~~~~~~~~~~~~~~~~~

.. admonition:: Definition.
   
   A linear operator :math:`\,F\in\text{End}(V)\ ` is a :math:`\,` 
   *Hermitian operator* :math:`\\`
   if it is equal to its Hermitian conjugation:
   
   .. math::
      
      F=F^+\qquad\text{that is}\qquad\langle\,x,Fy\,\rangle\ =\ \langle\,Fx,y\,\rangle\quad
      \text{for all}\quad x,y\in V\,.

In particular, for a Hermitian operator :math:`\,F\,:`

.. math::
   :label: x_F_x
   
   \langle\,x,Fx\,\rangle\ =\ \langle\,Fx,x\,\rangle\quad
   \text{for all}\quad x\in V\,.

A corollary to Theorem 8. implies immediately

.. admonition:: Theorem 9.
   
   A linear operator :math:`\,F\in\text{End}(V)\ ` is Hermitian
   if and only if in every orthonormal basis :math:`\,\mathcal{B}\ ` 
   of the space :math:`\ V\ ` its matrix is Hermitian:

   .. math::
      
      F=F^+\quad\Leftrightarrow\quad M_{\mathcal{B}}(F)\,=\,[\,M_{\mathcal{B}}(F)\,]^+\,,
      \qquad F\in\text{End}(V)\,.

In what follows we will make use of a criterion for a complex number :math:`\,z\,` to be real:

.. math::
   
   z\in R\quad\Leftrightarrow\quad z^*=\,z\,,\qquad z\in C\,.

**Properties of Hermitian operators.** :math:`\\`

Let :math:`\,F\in\text{End}(V)\ ` be a Hermitian operator. Then: :math:`\\`

1. For every :math:`\,x\in V\,` an expression :math:`\,\langle x,Fx\rangle\ ` is a real number.
   
   Indeed, according to the definition of an inner product and the formula 
   :eq:`x_F_x`, we have
 
   .. math::
      
      \langle\,x,Fx\,\rangle^*\ =\ \langle\,Fx,x\,\rangle\ =\ \langle\,x,Fx\,\rangle
      \qquad\Rightarrow\qquad\langle\,x,Fx\,\rangle\in R.

   One can prove that the condition :math:`\,\forall_{x\in V}\langle x,Fx\rangle\in R\,` 
   is not only necessary, but also sufficient for an operator :math:`\,F\ ` to be
   Hermitian. Hence,

   .. admonition:: Corollary.
      
      If :math:`\,F\in\text{End}(V)\,,\ ` then
      :math:`\qquad F\ =\ F^+\quad\Leftrightarrow\quad
      \langle\,x,Fx\,\rangle\in R\,,\quad x\in V\,.`

:math:`\;`

2. Eigenvalues of the operator :math:`\,F\ ` are real.
   
   **Proof.** :math:`\,` 
   Assume that :math:`\quad Fv\,=\,\lambda\,v\,,\quad v\in V\!\smallsetminus\!\{\theta\},\quad\lambda\in C\,.\ \ ` 
   By the formula :eq:`x_F_x`,
   
   .. math::
      :nowrap:

      \begin{eqnarray*}
      \langle\,v,Fv\,\rangle & \! = \! & \langle\,Fv,v\,\rangle\,,                   \\
      \langle\,v,\,\lambda\,v\,\rangle & \! = \! & \langle\,\lambda\,v,v\,\rangle\,, \\
      \lambda\ \langle v,v\rangle & \! = \! & \lambda^*\;\langle v,v\rangle\,,       
      \quad\text{where}\quad\langle v,v\rangle>0\,;                                  \\
      \lambda & \! = \! & \lambda^* \quad\ \ \Leftrightarrow\quad\ \ \,\lambda\in R\,.
      \end{eqnarray*}

3. Eigenvectors of the operator :math:`\,F\ ` associated with different eigenvalues are orthogonal.

   **Proof.** :math:`\,` 
   Assume that :math:`\quad Fv_1\,=\,\lambda_1\,v_1\,,\ \ Fv_2\,=\,\lambda_2\,v_2\,,\quad
   v_1,v_2\in V\!\smallsetminus\!\{\theta\}\,,\quad\lambda_1\neq\lambda_2\,.`
   
   Starting from a definition of the Hermitian operator, we obtain
   
   .. math::
      :nowrap:

      \begin{eqnarray*}      
      \langle\,v_1,Fv_2\,\rangle & = & \langle\,Fv_1,v_2\,\rangle \\
      \langle\,v_1,\lambda_2\,v_2\,\rangle & = & \langle\,\lambda_1\,v_1,v_2\,\rangle \\
      \lambda_2\ \langle v_1,v_2\rangle & = & \lambda_1^*\ \langle v_1,v_2\rangle \\      
      \lambda_2\ \langle v_1,v_2\rangle & = & \lambda_1\ \langle v_1,v_2\rangle \\
      (\lambda_2-\lambda_1)\ \langle v_1,v_2\rangle & = & 0\,.
      \end{eqnarray*}
   
   Since by an assumption :math:`\ \lambda_1\neq\lambda_2\,,\ ` 
   so we must have :math:`\ \langle v_1,v_2\rangle=0\,,\ ` as required. :math:`\\`

Hence, eigenvectors of the Hermitian operator :math:`\,F\ ` associated with different eigenvalues comprise an orthogonal system. Recall that one may normalise any
ortoghonal set of vectors and thus obtain an orthonormal system. This implies

.. admonition:: Corollary.
      
   If a Hermitian operator :math:`\,F\ ` defined on an :math:`\,n`-dimensional
   unitary space :math:`\,V\ ` has :math:`\,n\,` distinct eigenvalues,
   then one may choose an orthonormal basis for the space :math:`\,V\ ` 
   consisting of eigenvectors of this operator.

.. (faktycznie, warunek :math:`\,n\,` różnych wartości własnych 
   nie jest konieczny do istnienia takiej bazy)

Unitary Operators
~~~~~~~~~~~~~~~~~

.. admonition:: Definition.
   
   A linear operator :math:`\,U\ ` defined on a unitary space :math:`\,V\ `
   is *unitary* :math:`\,` if
   
   .. math::
      
      U^+U\ =\ I\,,
      
   where :math:`\,I\ ` is an identity operator defined by the condition: 
   :math:`\,I(v)=v\,,\ v\in V.`

Unitary operators are closely related with unitary matrices. Namely,

.. admonition:: Theorem 10.
   
   A linear operator :math:`\ U\ ` defined on an :math:`\,n`-dimensional
   unitary space :math:`\,V\ ` is unitary if and only if 
   in every orthonormal basis :math:`\ \mathcal{B}\ ` its matrix is unitary:
   
   .. math::
      
      U^+U\ =\ I\qquad\Leftrightarrow\qquad
      \boldsymbol{B}^+\boldsymbol{B}\ =\ \boldsymbol{I}_n\,,
   
   where :math:`\ \ \boldsymbol{B}\,=\,M_{\mathcal{B}}(U)\,,\ \ \boldsymbol{I}_n\ ` 
   - :math:`\,` an identity matrix of size :math:`\,n.`

**Proof.**

The mapping :math:`\,M_{\mathcal{B}}:\,\text{End}(V)\rightarrow M_n(C)\,`
which assigns matrices to linear operators is - as an algebra isomorphism - 
bijective and multiplicative. :math:`\\`
Hence, and also by the equation :eq:`M_B_F_plus`, the following equalities are equivalent:

.. math::
   :nowrap:
   
   \begin{eqnarray*}
   U^+U & = & I\,, \\
   M_{\mathcal{B}}(U^+U) & = & M_{\mathcal{B}}(I)\,, \\
   M_{\mathcal{B}}(U^+)\,M_{\mathcal{B}}(U) & = & M_{\mathcal{B}}(I)\,, \\ 
   \left[\,M_{\mathcal{B}}(U)\,\right]^+M_{\mathcal{B}}(U) & = & M_{\mathcal{B}}(I)\,, \\
   \boldsymbol{B}^+\boldsymbol{B} & = & \boldsymbol{I}_n\,.
   \end{eqnarray*} 

**Properties of unitary operators.**

Consider a unitary operator :math:`\ U\ ` defined on a unitary space :math:`\,V:`

.. math::
   :label: U0

   U^+U\ =\ I\,.

0. The condition :eq:`U0` implies existence of the inverse operator :math:`\ U^{-1}=U^+\ ` and an identity
   
   .. math::
      
      UU^+\ =\ \left(U^+\right)^+\,U^+\ =\ I\,,

   which means that if :math:`\ U\ ` is a unitary operator, 
   then both the conjugate operator :math:`\ U^+\ ` 
   and :math:`\,` the inverse operator :math:`\ U^{-1}\,` are unitary.

1. Product (i.e., composition) of two unitary operators is a unitary operator.
   
   Indeed, if :math:`\,U_1^+U_1=U_2^+U_2=I\,,\ \ ` then by properties of Hermitian
   conjugation :math:`\\` 
   of operators and by associativity of composition of operators, we obtain
   
   .. math::
      
      (U_1\,U_2)^+(U_1\,U_2)\ =\ 
      (U_2^+\,U_1^+)(U_1\,U_2)\ =\ 
      U_2^+\,(U_1^+U_1)\,U_2\ =\ 
      U_2^+\,I\ U_2\ =\ 
      U_2^+\,U_2\ =\ I\,.
   
   Hence, composition is an operation on the set of unitary operators. :math:`\\`
   Further, since the identity operator :math:`\,I\,` is unitary and so is an 
   inverse of a unitary operator, we may write
   
   .. admonition:: Corollary.
      
      Unitary operators defined on the space :math:`\,V\ ` together with their
      composition comprise a (nonabelian) group.

   :math:`\,`

2. The operator :math:`\ U\ ` preserves an inner product:
   
   .. math::
      :label: U1
      
      \langle\,Ux,\,Uy\,\rangle\ =\ \langle x,y\rangle\,,\qquad x,y\in V\,,
   
   since :math:`\quad\langle\,Ux,\,Uy\,\rangle\ =\ \langle\,U^+U\,x,\,y\,\rangle\ =\ 
   \langle\,Ix,y\,\rangle\ =\ \langle x,y\rangle\,.`
   
   In particular, :math:`\ U\ ` preserves a vector norm:
   
   .. math::
      :label: U2
      
      \|\,Ux\,\|\ =\ \|x\|\,,\qquad x\in V\,,

   because :math:`\quad\|\,Ux\,\|^{\,2}\ =\ \langle\,Ux,Ux\,\rangle\ =\ \langle\,U^+U\,x,\,x\,\rangle\ =\ 
   \langle x,x\rangle\,.`

   Preservation of a norm (which is a generalised length) of a vector by the operator :math:`\ U\ ` 
   allows to interpret its action as a generalised rotation of a vector in the space
   :math:`\ V.`
   
   One may prove that the conditions :math:`\,` :eq:`U0`, :math:`\,` :eq:`U1` :math:`\,` 
   and :math:`\,` :eq:`U2` :math:`\,` are equivalent, :math:`\\`
   and thus each of them may serve as a definition of a unitary operator. :math:`\\`

3. Eigenvalues of the operator :math:`\ U\ ` are complex numbers with modulus :math:`\,1.`
   
   **Proof.** :math:`\,`

   Assume that :math:`\ v\ ` is an eigenvector of the operator :math:`\ U\ ` 
   associated with an eigenvalue :math:`\ \lambda\in C.\ ` Then

   .. Niech :math:`\quad Uv=\lambda\,v\,,\quad\theta\neq v\in V\,,\quad\lambda\in C.\ ` Wtedy
   
   .. math::
      :nowrap:
      
      \begin{eqnarray*}
      Uv & = & \lambda\,v\,,\quad v\neq\theta\,, \\
      \|\,Uv\,\| & = & \|\,\lambda\,v\,\|\,, \\
      \|v\| & = & |\lambda|\ \|v\|\,, \\
      (|\lambda|-1)\ \|v\| & = & 0\,,\quad\|v\|\neq 0\,, \\
      |\lambda|-1 & = & 0\,, \\
      |\lambda| & = & 1\,.
      \end{eqnarray*}

4. Eigenvectors of the operator :math:`\ U\ ` associated with different eigenvalues are orthogonal.

   **Proof.** :math:`\,` 
   Assume that :math:`\quad Uv_1\,=\,\lambda_1\,v_1\,,\ \ Uv_2\,=\,\lambda_2\,v_2\,,\quad
   v_1,v_2\in V\!\smallsetminus\!\{\theta\}\,,\quad\lambda_1\neq\lambda_2\,.`

   We already know that :math:`\quad|\lambda_1|=|\lambda_2|=1\,,\quad`
   and thus :math:`\quad|\lambda_1|^2=\lambda_1^*\,\lambda_1=1\,,\quad\lambda_1^*=1/\lambda_1\,.\ `
   Hence,

   .. .. math::
      
      \begin{array}{rcccl}
      \langle v_1,v_2\rangle & = & \langle\,Uv_1,\,Uv_2\,\rangle & = & \\ 
      & = & \langle\,\lambda_1\,v_1,\,\lambda_2\,v_2\,\rangle & = & \\
      & = & \lambda_1^*\,\lambda_2\,\langle v_1,v_2\rangle & = & 
      \displaystyle\frac{\lambda_2}{\lambda_1}\ \ \langle v_1,v_2\rangle\,.
      \end{array}
   
   :math:`\langle v_1,v_2\rangle\ =\ \langle\,Uv_1,\,Uv_2\,\rangle\ =\ 
   \langle\,\lambda_1\,v_1,\,\lambda_2\,v_2\,\rangle\ =\ 
   \lambda_1^*\;\lambda_2\ \langle v_1,v_2\rangle\ =\ 
   \displaystyle\frac{\lambda_2}{\lambda_1}\ \ \langle v_1,v_2\rangle\,,`

   :math:`\left(\,1\ -\ \displaystyle\frac{\lambda_2}{\lambda_1}\;\right)\ 
   \langle v_1,v_2\rangle\ =\ 0\,,\quad\text{and}\ \ \text{so}\quad\lambda_1\neq\lambda_2\,,
   \quad\text{implies}\quad\langle v_1,v_2\rangle\ =\ 0\,.`


   


























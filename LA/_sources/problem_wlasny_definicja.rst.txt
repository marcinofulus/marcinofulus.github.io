
Formulation of the Eigenproblem
-------------------------------

.. admonition:: Definition.
   
   Let :math:`\,F\ ` be a linear operator defined on a vector space
   :math:`\,V(K)\,.\ \,`
   If a vector :math:`\,v\in V\!\smallsetminus\!\{\theta\}\ ` 
   and :math:`\,` a scalar :math:`\,\lambda\in K\ ` satisfy the equality
   
   .. math::
      :label: eigen_eq
      
      Fv=\lambda\, v\,,
   
   then :math:`\,\lambda\ ` is an *eigenvalue* of the operator :math:`\,F,\ `
   and :math:`\ \,v\,` - :math:`\,` an *eigenvector* of the operator :math:`\,F\ `
   associated with the eigenvalue :math:`\,\lambda\ `
   (an eigenvector for the value :math:`\,\lambda`).

   The formula :eq:`eigen_eq` presents an :math:`\,` *eigenequation* :math:`\,` (an *eigenproblem*) 
   :math:`\,` of the linear operator :math:`\,F\,.` 

**Remarks and comments.**

* The definition excludes the zero vector :math:`\,\theta\ ` from the set of eigenvectors
  even though it satisfies the condition :eq:`eigen_eq` with an arbitrary eigenvalue 
  :math:`\,\lambda.\ `
  On the other, hand the eigenvalue :math:`\,\lambda\ ` may be equal to :math:`\,0.\ `
  If :math:`\,0\ ` is an eigenvalue of the operator :math:`\,F,\ `
  then the set of all eigenvectors associated with this eigenvalue, together with the zero vector,
  is the kernel of the operator :math:`\,F.`
  
  .. W takim wypadku zbiór wszystkich wektorów własnych dla tej wartości, uzupełniony wektorem  
     zerowym, jest jądrem operatora :math:`\,F.`
  
  .. Zbiór wektorów własnych operatora :math:`\,F\ ` należących do wartości :math:`\,0,\ `
     uzupełniony wektorem zerowym, jest jądrem operatora :math:`\,F.`
  
  .. Jeżeli :math:`\,v\ ` jest wektorem własnym operatora :math:`\,F,\ `
  
* The action of the operator :math:`\,F\ ` on its eigenvector :math:`\,v\ `
  boils down to multiplication :math:`\,v\ ` by a scalar.
  If :math:`\,V\ ` is a space of the geometric vectors, then this means that the 
  operator :math:`\,F\ ` acting on the vector :math:`\,v\ `
  does not change its direction (it may change the length or the orientation).

* In quantum mechanics, physical quantities that are measurable in a quantum system (observables)
  are represented by Hermitian linear operators defined on a unitary space of states of the system.
  If the operator :math:`\,F\ ` represents an observable
  :math:`\,\mathcal{F},\ ` then its eigenvalues are possible measurement results of this observable. 
  The Hermitian property of the operator :math:`\,F\ ` guarantees that the measurement results
  obtained in such a way are real numbers. 

The solution of the eigenvalue problem :eq:`eigen_eq` for the operator :math:`\,F\ `
is to find all its eigenvalues :math:`\,\lambda\ `
and the eigenvectors :math:`\,v\ ` associated with these values.

Let :math:`\,\mathcal{B}\ ` be a basis of the :math:`\,n`-dimensional space :math:`\,V.\ `
Then the operator :math:`\,F\ ` correspods to the matrix
:math:`\,M_{\mathcal{B}}(F)=\boldsymbol{A}=[\alpha_{ij}]_{n\times n}\in M_n(K)\,,\ `
and a vector :math:`\,v\ ` - :math:`\,` to the column of its coefficients in the basis 
:math:`\,\mathcal{B}:\ \ I_{\mathcal{B}}(v)=\boldsymbol{x}\in K^n.\ `
The eigenequation may be rewritten as follows:

.. math::
   :nowrap:
   
   \begin{eqnarray*}   
   Fv & = & \lambda\,v\,, \\
   I_{\mathcal{B}}\,(Fv) & = & I_{\mathcal{B}}\,(\lambda\,v)\,, \\
   M_{\mathcal{B}}(F)\cdot I_{\mathcal{B}}(v) & = & \lambda\cdot I_{\mathcal{B}}(v)\,; \\ \\
   \boldsymbol{A}\,\boldsymbol{x} & = & \lambda\:\boldsymbol{x}\,, \\
   \boldsymbol{A}\,\boldsymbol{x} & = & \lambda\ \boldsymbol{I}_n\,\boldsymbol{x}\,, \\
   (\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\ \boldsymbol{x} & = & \boldsymbol{0}\,.
   \qquad\qquad(\clubsuit)
   \end{eqnarray*}

The last equation, where :math:`\,\boldsymbol{I}_n\,` 
denotes the identity matrix of size :math:`\,n,\ ` is a homogeneous linear problem with a matrix :math:`\ \boldsymbol{A}-\lambda\,\boldsymbol{I}_n\,.\ `
The theory of linear system of equations tells us that the non-zero solutions :math:`\,\boldsymbol{x}\,`
(and these are the one we are interested in here) exist if and only if

.. math::
   :label: char_eqn_1
   
   \det\,(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\ \ =\ \ 
   \left|
   \begin{array}{cccc}
   \alpha_{11}-\lambda & \alpha_{12} & \dots & \alpha_{1n} \\
   \alpha_{21} & \alpha_{22}-\lambda & \dots & \alpha_{2n} \\
   \dots & \dots & \dots & \dots \\
   \alpha_{n1} & \alpha_{n2} & \dots & \alpha_{nn}-\lambda 
   \end{array}
   \right|\ \ =\ \ 0\,.

.. Wielomian :math:`\,n`-tego stopnia 
   :math:`\,w(\lambda)=\det\,(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\ `
   jest *wielomianem charakterystycznym* macierzy :math:`\,\boldsymbol{A}\,.\ `
   Równanie :math:`\,w(\lambda)=\det\,(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)=0\ `
   jest *równaniem charakterystycznym*, a jego rozwiązania nazywają się
   *pierwiastkami charakterystycznymi* tej macierzy.

.. admonition:: Definition.
   
   Let :math:`\,\boldsymbol{A}\,\in\,M_n(K)\,,\ `
   and :math:`\,\boldsymbol{I}_n\ ` be the identity matrix of size :math:`\,n.\,`
   The degree :math:`\,n` polynomial 
   :math:`\,w(\lambda)=\det\,(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\ `
   is the *characteristic polynomial* of the matrix :math:`\,\boldsymbol{A}\,.\ `
   The equation :math:`\ w(\lambda)=0\ ` is the *characteristic equation*, :math:`\,`
   and its solutions are the :math:`\,` *characteristic roots* 
   of the matrix :math:`\,\boldsymbol{A}.`

We have deduced that the solutions :math:`\,v\neq\theta\ ` of the eigenvalue problem :eq:`eigen_eq` exist if and only if :math:`\,\lambda\ ` is a characteristic root of the matrix of the operator :math:`\,F\ ` in a certain basis :math:`\,\mathcal{B}\,.` 

However, in different bases the operator :math:`\,F\ ` is represented by different matrices. This leads to a question whether admissible values :math:`\,\lambda\ ` 
depend on the chosen basis. 

It turns out that even though a change of basis results in a change of the matrix of the linear operator, the characteristic polynomial and its roots remain the same.

Indeed, let :math:`\,\mathcal{B}'\ ` be another basis of the space
:math:`\,V\ \ \text{and}\ \ \ \text{let}\ M_{\mathcal{B}'}(F)=\boldsymbol{A}'\,.` :math:`\\`
Then :math:`\,\boldsymbol{A}'=\boldsymbol{S}^{-1}\boldsymbol{A}\,\boldsymbol{S}\,,\ `
where :math:`\,\boldsymbol{S}\ ` is the transformation matrix of the basis :math:`\,\mathcal{B}\ ` to the basis :math:`\,\mathcal{B}'\,.\ ` Moreover,

.. math::

   \begin{array}{rll}   
   \det\,(\boldsymbol{A}'-\lambda\,\boldsymbol{I}_n)
   & =\quad\det\,(\boldsymbol{S}^{-1}\boldsymbol{A}\,\boldsymbol{S}-
   \lambda\ \boldsymbol{S}^{-1}\boldsymbol{I}_n\,\boldsymbol{S})\ \ = & 
   \\ \\
   & =\quad\det\,\left[\,\boldsymbol{S}^{-1}\,
   (\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\ 
   \boldsymbol{S}\,\right]\ \ = &
   \\ \\
   & =\quad\det\,(\boldsymbol{S}^{-1})\,\cdot\,
   \det\,(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\,\cdot\,
   \det\,\boldsymbol{S}\ \ = &
   \\ \\
   & =\quad(\det\,\boldsymbol{S})^{-1}\,\cdot\,
   \det\,(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\,\cdot\,
   \det\,\boldsymbol{S}\ \ = &
   \det\,(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\,.
   \end{array}

The above considerations lead to 

.. .. admonition:: Wniosek.
   
   Wartości własne operatora liniowego :math:`\,F\in\text{End}(V)\,,\ `
   gdzie :math:`\,V\ ` jest skończenie wymiarową przestrzenią wektorową
   nad ciałem :math:`\,K\,,\ ` są pierwiastkami charakterystycznymi 
   macierzy tego operatora w dowolnej bazie przestrzeni :math:`\,V.`

.. admonition:: Corollary.
   
   If :math:`\,V\ ` is a finite dimensional vector space,
   then the eigenvalues of the linear operator :math:`\,F\in\text{End}(V)\ ` 
   are characteristic roots of the matrix of this operator 
   in any basis of the space :math:`\,V\,.`

The question of solvability of the eigenvalue problem is treated in 

.. admonition:: Theorem 1.
   
   Every linear operator defined on a finite dimensional complex vector space 
   has eigenvectors.

This follows from the *fundamental theorem of algebra*, which states that every polynomial 
of positive degree with complex coefficients has at least one complex root. 

Hence, if :math:`\,K=C\,,\ `
then the characteristic equation :eq:`char_eqn_1` has a complex root :math:`\,\lambda_0\ `
which substituted to the equation (:math:`\clubsuit`) determines a suitable eigenvector
(in fact: at least :math:`\,1`-dimensional subspace of eigenvectors).

Theorem 1. is not true for real vector spaces. For example, consider an
operator of rotation by an angle :math:`\,\phi\neq k\pi,\ k\in Z\,,\ ` which is
defined on the (real) vector space of geometric vectors with the initial point at the 
origin of the Cartesian coordinate system. This operator changes the direction of each non-zero vector, 
and thus does not have eigenvectors.

If :math:`\,V\ ` is an :math:`\,n`-dimensional complex vector space,
then the characteristic polynomial :math:`\,w(\lambda)\ ` 
of the linear operator :math:`\,F\in\text{End}(V)\ `
has :math:`\,n\ ` (not necessarily different) roots:

.. math::
   :label: prod
   
   w(\lambda)\,=\,\alpha_0\,(\lambda-\lambda_1)^{k_1}\,(\lambda-\lambda_2)^{k_2}\,\ldots\,
                  (\lambda-\lambda_r)^{k_r}\,,\qquad
   k_1+\,k_2\,+\ldots\,+k_r=\,n

(in case of a real vector space: :math:`\,K=R,\ ` 
the factorisation :eq:`prod` may contain quadratic polynomials
:math:`\,\lambda^2+p\,\lambda+q\ ` with negative discriminant :math:`\,\Delta`).
The power :math:`\,k_i\ ` is the multiplicity of the root :math:`\,\lambda_i\ `
of the polynomial :math:`\,w(\lambda)\ ` and at the same time the *algebraic  multiplicity* 
of the eigenvalue :math:`\,\lambda_i\ ` of the operator :math:`\,F\,.`
The *geometric  multiplicity* of the eigenvalue :math:`\,\lambda_i\ ` is, by definition, 
the number of linearly independent eigenvectors associated with this eigenvalue.

Note that if
:math:`\ \ Fv_1=\lambda\,v_1\,,\ \ Fv_2=\lambda\,v_2\,,\quad 
v_1,v_2\in V\!\smallsetminus\!\{\theta\}\,,\ \,` 
then for :math:`\ \ \alpha_1,\alpha_2\in K:`

.. math::

   \begin{array}{ccccc}
   F\,(\alpha_1\,v_1+\alpha_2\,v_2) & = & \alpha_1\,Fv_1+\alpha_2\,Fv_2 & = & \\
                               & = & \alpha_1\,\lambda\,v_1+\alpha_2\,\lambda\,v_2 & = & 
   \lambda\ (\alpha_1\,v_1+\alpha_2\,v_2)\,.
   \end{array}

Hence, each linear combination (which is not a zero vector) of eigenvectors :math:`\\` 
associated with the eigenvalue :math:`\,\lambda\ ` gives an eigenvector associated with the same eigenvalue.

Referring to the criterion for the space, we can formulate

.. admonition:: Corollary.
   
   The set of all eigenvectors associated with the eigenvalue :math:`\,\lambda\ `
   :math:`\\`
   of the linear operator :math:`\,F\in\text{End}(V),\,`  together with the zero vector
   :math:`\,\theta,\,` forms :math:`\\`
   a vector space (a subspace of the space :math:`\,V`)
   of dimension :math:`\\`
   equal to the geometric  multiplicity of the eigenvalue :math:`\,\lambda.`

Practical solution of the eigenvalue problem for the linear operator :math:`\,F\ ` acting :math:`\\`
on the :math:`\,n`-dimensional vector space :math:`\,V(K)\ `
consists of three stages:

0. Construction of the matrix 
   :math:`\,M_{\mathcal{B}}(F)\equiv\boldsymbol{A}=[\alpha_{ij}]_{n\times n}\in M_n(K)\ `
   of the operator :math:`\,F\ ` in a basis :math:`\,\mathcal{B}\ ` 
   of the space :math:`\,V\,.`

1. Calculation of the eigenvalues :math:`\,\lambda\ ` of the operator :math:`\,F\ ` as the roots of the characteristic equation :eq:`char_eqn_1` of the matrix  :math:`\,\boldsymbol{A}\,` and determination of it algebraic multiplicities.
  
   .. macierzy :math:`\,\boldsymbol{A}\,.`

2. Substitution of each eigenvalue :math:`\,\lambda\ ` to the equation (:math:`\clubsuit`), calculation of the associated eigenvectors (determined by their coordinates in the basis :math:`\,\mathcal{B}`) and determination of its geometric multiplicity. 



























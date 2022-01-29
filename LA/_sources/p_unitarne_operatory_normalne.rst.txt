
Normal Operators
----------------

Commutator and its Properties
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Let :math:`\,A,\,B\ ` be elements of a non-abelian algebra,
e.g. complex or real square matrices of size :math:`\,n\ ` 
or linear operators defined on a unitary or Euclidean space. 

.. admonition:: Definition.
   
   An expression :math:`\ \ [\,A,B\,]\ :\,=\ AB-BA\ \ ` is called the :math:`\,` *commutator* :math:`\,`
   of the elements :math:`\,A\ ` and :math:`\ B\,.`
   
   If :math:`\ [\,A,B\,]\,=\,0\,,\ ` that is :math:`\ AB=BA\,,\ \ `
   we say that the elements :math:`\,A\ ` and :math:`\ B\ ` *commute*.

**Properties of commutators:**

.. math::

   \begin{array}{cl}
   \left[\,A,A\,\right]\ =\ 0\,, & \\ \\
   \left[\,B,A\,\right]\ =\ -\ \left[\,A,B\,\right]\,, & \\ \\
   \left[\,A_1+A_2\,,\,B\,\right]\ =\ 
   \left[\,A_1\,,B\,\right]\ +\ \left[\,A_2\,,B\,\right]\,, & \\ \\
   \left[\,A,\,B_1+B_2\,\right]\ =\ \left[\,A,B_1\,\right]\ +\ \left[\,A,B_2\,\right]\,, & \\ \\
   \left[\,\lambda,A\,\right]\ =\ \left[\,A,\lambda\,\right]\ =\ 0\,, & 
   \lambda\equiv\lambda\,I,\ \ I\ \ \text{-}\ \ \text{the identity element,} \\ \\
   \left[\,\lambda\,A,\,B\,\right]\ =\ \left[\,A,\,\lambda\,B\,\right]\ =\ 
   \lambda\ \left[\,A,B\,\right]\,, & \lambda\ \ \text{-}\ \ \text{scalar factor.}
   \end{array}

The commutator :math:`\ [\,A,B\,]\ ` is thus linear with respect to both variables
:math:`\,A\ ` and :math:`\ B\,.`

One can use mathematical induction to show that:

.. math::

   \begin{array}{l}
   \left[\,A,\,B_1 B_2\ldots B_{n-1}B_n\,\right]\ \ = \\
   \left[A,B_1\right]\,B_2\ldots B_{n-1}B_n\ +\ 
   B_1\left[A,B_2\right]\ldots B_{n-1}B_n\ +\ \ldots\ +\ 
   B_1B_2\ldots B_{n-1}\left[A,B_n\right]\,; 
   \\ \\
   \left[\,A_1A_2\ldots A_{n-1}A_n\,,B\right]\ = \\
   \left[A_1\,,B\right]\,A_2\ldots A_{n-1}A_n\ +\ 
   A_1\left[A_2\,,B\right]\ldots A_{n-1}A_n\ +\ \ldots\ +\ 
   A_1A_2\ldots A_{n-1}\left[A_n\,,B\right]\,.
   \end{array}

In particular, for :math:`\,n=2\ ` one obtains often used formulae:

.. math::

   \begin{array}{cc}
   \left[\,A,B_1B_2\,\right]\ =\ 
   \left[\,A,B_1\,\right]\,B_2\ +\ B_1\,\left[\,A,B_2\,\right]\,. & \\ \\
   \left[\,A_1A_2\,,B\,\right]\ =\ 
   A_1\,\left[\,A_2\,,B\,\right]\ +\ \left[\,A_1\,,B\,\right]\,A_2\,, &
   \end{array}

If :math:`\ [A,B]=\lambda\,I\,,\ \lambda\in R,\,C,\ \ ` then 
putting :math:`\ B_1=\ldots=B_n=B\,,\ \ A_1=\ldots=A_n=A\,,\ ` we obtain:

.. :math:`\quad\left[\,A,B^n\,\right]\ =\ n\,\lambda\,B^{n-1},\quad
   \left[\,A^n,B\,\right]\ =\ n\,\lambda\,A^{n-1},\qquad n\in N.`

.. math::
   
   \left[\,A,B^n\right]\ =\ n\,\lambda\,B^{n-1},\qquad 
   \left[\,A^n,B\,\right]\ =\ n\,\lambda\,A^{n-1},\qquad n\in N.

For matrices :math:`\,A,\,B\,\in M_n(K)\,,\ \ K=R,\,C,\ \ ` we can list futher properties 
:math:`\\`
(the last identity also makes sense for linear operators on a unitary or Euclidean space):

.. math::
   
   [\,A,B\,]^{\,T}\ \,=\ \ [\,B^T,A^T\,]\,,\qquad
   [\,A,B\,]^{\,*}\ \,=\ \ [\,A^*,B^*\,]\,,\qquad
   [\,A,B\,]^{\,+}\ \,=\ \ [\,B^+,A^+\,]\,.

Normal Matrices and Normal Operators
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Definition.
   
   Let :math:`\ V\ ` be a unitary space, 
   :math:`\ \boldsymbol{A}\in M_n(C)\,,\ F\in\text{End}(V)\,.`
   
   We say that a matrix :math:`\ \boldsymbol{A}\ ` is *normal* :math:`\,` 
   if it commutes with its Hermitian conjugate:
   
   .. math::
      
      [\,\boldsymbol{A},\boldsymbol{A}^+\,]\ =\ 0\qquad\text{that is}\qquad
      \boldsymbol{A}\,\boldsymbol{A}^+\ =\ \boldsymbol{A}^+\boldsymbol{A}\,.
   
   An operator :math:`\,F\ ` is *normal* :math:`\,`
   if it commutes with its Hermitian conjugation:
   
   .. math::
      
      [\,F,F^+\,]\ =\ 0\qquad\text{that is}\qquad F\,F^+\ =\ F^+F\,.

Among complex matrices, normal are Hermitian and unitary matrices; and among real matrices:  
symmetric, antisymmetric and orthogonal.

Similarly, Hermitian and unitary operators are normal.
 
A relation between normal matrices and normal operators describes

.. admonition:: Theorem 11.
   
   A linear operator :math:`\,F\,` defined on a unitary space :math:`\,V\,` 
   is normal if and only if 
   in every orthonormal basis :math:`\,\mathcal{B}\ ` its matrix is normal:
   
   .. math::
      
      F\,F^+\;=\ F^+F\qquad\Leftrightarrow\qquad
      \boldsymbol{A}\,\boldsymbol{A}^+\;=\ \boldsymbol{A}^+\boldsymbol{A}\,,
   
   where :math:`\ \ \boldsymbol{A}\,=\,M_{\mathcal{B}}(F)\,.`

**Proof.**

This proof is similar to a proof of Theorem 10.: we will use bijectivity and multiplicativity 
of the mapping :math:`\ M_{\mathcal{B}}\ ` and the fact that in an orthonormal basis a matrix 
of Hermitian conjugation of an operator is equal to Hermitian conjugate of its matrix.

The following conditions are equivalent:

.. math::
   :nowrap:
   
   \begin{eqnarray*}
   F\,F^+ & = & F^+F\,, \\
   M_{\mathcal{B}}(FF^+) & = & M_{\mathcal{B}}(F^+F)\,, \\
   M_{\mathcal{B}}(F)\ M_{\mathcal{B}}(F^+) & = & M_{\mathcal{B}}(F^+)\ M_{\mathcal{B}}(F)\,, \\
   M_{\mathcal{B}}(F)\ [\,M_{\mathcal{B}}(F)\,]^+ & = & 
   [\,M_{\mathcal{B}}(F)\,]^+\ M_{\mathcal{B}}(F)\,, \\
   \boldsymbol{A}\,\boldsymbol{A}^+ & = & \boldsymbol{A}^+\boldsymbol{A}\,.
   \end{eqnarray*}

It turns out that orthogonality of eigenvectors asssociated with different eigenvalues 
is not only a property of Hermitian and unitary operators (as we proved in the previous section),
but is a feature of a wider class of normal operators. This is the statement of

.. admonition:: Theorem 12.
   
   Eigenvectors of a normal operator   
   asssociated with different eigenvalues  :math:`\\`
   are orthogonal.

.. :math:`\;`

**Lemma.** :math:`\,` For a normal operator :math:`\ F\in\text{End}(V):`

.. math::
   :label: Lemma
   
   Fx=\lambda\,x\quad\Leftrightarrow\quad F^+\,x=\lambda^*\,x\,,\qquad x\in V,\quad\lambda\in C.

**Proof of the lemma.** :math:`\,`
 
Note first that if :math:`\,F\ ` is a normal operator, then
for every :math:`\,x\in V:`

.. :math:`\ \|\,Fx\,\| = \|\,F^+x\,\|\,,\ x\in V.\ `
   Wynika to stąd, że

.. math::
   
   \|\,Fx\,\|^2\ =\ \langle Fx,Fx\rangle\ =\ \langle F^+F\,x,x\rangle\ =\ 
   \langle FF^+x,x\rangle\ =\ \langle F^+x,F^+x\rangle\ =\ \|\,F^+x\,\|^2\,,

which gives equality of the norms:

.. math::
   :label: norm_eq
   
   \|\,Fx\,\|\ =\ \|\,F^+x\,\|\,,\quad x\in V\,.

Further, if an operator :math:`\ F\ ` is normal,
then normal is also the operator :math:`\ F-\lambda\,I\,,\ ` where :math:`\ \,\lambda\in C,\ \ I\ ` the idenity operator:

.. to również operator :math:`\ F-\lambda\,I\ ` jest normalny:

.. math::

   \begin{array}{cl}   
   \quad\left[\,(F-\lambda\,I),\,(F-\lambda\,I)^+\,\right]\ = &
   \\ \\
   =\ \left[\,F-\lambda\,I,\,F^+-\lambda^*\,I\,\right]\ = & 
   \\ \\
   =\ \left[\,F,F^+\,\right]-\left[\,F,\,\lambda^*\,I\,\right]-
   \left[\,\lambda\,I,F^+\,\right]+\left[\,\lambda\,I,\,\lambda^*\,I\,\right]\ = & 
   \\ \\
   =\ \left[\,F,F^+\,\right]-\lambda^*\left[\,F,I\,\right]-
   \lambda\,\left[\,I,F^+\,\right]+\lambda\,\lambda^*\,\left[\,I,I\,\right]\ = & 
   \left[\,F,F^+\,\right]\ =\ 0\,.
   \end{array}

Substitution :math:`\ F\rightarrow F-\lambda\,I\ ` in the equation :eq:`norm_eq` leads to

.. math::
   
   \begin{array}{ccc}
   & \|\,(F-\lambda\,I)\,x\,\|\ =\ \|\,(F-\lambda\,I)^+\,x\,\| &
   \\ \\
   \text{that is} 
   & \|\,F x-\lambda\,x\,\|\ =\ \|\,F^+x-\lambda^*\,x\,\|\,, & \lambda\in C\,,\ \ x\in V\,.
   \end{array}

Now the following equalities finish the proof:

.. math::
   
   \begin{array}{ccc}
   Fx\ =\ \lambda\,x & & \\ \\
   Fx-\lambda\,x\,=\,\theta & & \\ \\
   \|\,Fx-\lambda\,x\,\|\,=\,0 & \quad\Leftrightarrow & \quad\|\,F^+x-\lambda^*\,x\,\|\,=\,0 \\ \\
   & & \quad F^+x-\lambda^*\,x\,=\,\theta \\ \\
   & & \quad F^+x\ =\ \lambda^*\,x\,.
   \end{array}

**Proof of theorem 12.** :math:`\,` Assume that :math:`\,F\ ` is a normal operator, and let
:math:`\quad Fx_1\,=\ \lambda_1\,x_1\,,\quad Fx_2\,=\ \lambda_2\,x_2\,,\quad
x_1,\,x_2\,\in\,V\!\smallsetminus\!\{\theta\}\,,\ \ \lambda_1\neq\lambda_2\,.\ \,` Then

.. math::
   
   \begin{array}{l}
   \langle\,x_1,Fx_2\rangle\ =\ 
   \langle\,x_1,\lambda_2\,x_2\rangle\ =\
   \lambda_2\ \langle\,x_1,x_2\rangle\,,
   \\ \\
   \langle\,x_1,Fx_2\rangle\ =\ 
   \langle\,F^+x_1,x_2\rangle\ =\ 
   \langle\,\lambda_1^*\,x_1,x_2\rangle\ =\ 
   \lambda_1\ \langle\,x_1,x_2\rangle\,.
   \end{array}

Hence,
:math:`\ \ (\lambda_2-\lambda_1)\,\langle\,
x_1,x_2\rangle = 0\,,\ `
and thus :math:`\ \langle\,x_1,x_2\rangle=0\ ` as required.



   
   
   
    


















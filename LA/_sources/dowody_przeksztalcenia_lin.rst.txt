
Linear Transformations
----------------------

.. admonition:: Theorem 1. :math:`\\`
   
   Let :math:`\,V\ ` and :math:`\,W\ ` be vector spaces over a field 
   :math:`\,K,\ \ F\in\text{Hom}(V,W).` :math:`\\`
   The transformation :math:`\,F\ ` is an injective mapping if and only if 
   
   .. math::
      
      \text{Ker}\,F\,=\,\{\,\theta_V\}\,,\qquad\text{that is}\qquad\text{def}\,F = 0\,.

**Proof and discussion.**

A tranformation :math:`\;F\;` is injective :math:`\,` 
if distinct arguments are mapped to distinct images:

.. math::
   
   v_1\neq v_2\qquad\Rightarrow\qquad F(v_1)\neq F(v_2)\,,\qquad v_1,v_2\in V\,.

.. Można je zobrazować następującym schematem: |Rys_7|

.. .. |Rys_7| image:: /figures/Rys_7.png
   :align: middle
   :scale: 68%

.. image:: /figures/Rys_7.png
   :align: center
   :scale: 70%

.. :math:`\;`

Image of the space :math:`\;V\;` under the transformation :math:`\;F\;` may be 
(as in the diagram above) a proper subset of the space 
:math:`\;W:\ \ \text{Im}\,F\equiv F(V)\subsetneq W\,,\ `
but each element :math:`\;w\in\text{Im}\,F\ ` corresponds to exactly 
one element :math:`\;v\in V,\ ` the one whose image is :math:`\;w.` 

.. W szczególności wektor zerowy :math:`\;\theta_W\ ` jest obrazem
   tylko wektora zerowego :math:`\;\theta_V.`

Kernel of the transformation :math:`\;F\in\text{Hom}(V,W)\ ` is by definition a set of those vectors of the space :math:`\;V,\ ` whose image is the zero vector of the space :math:`\;W,\ ` and the defect of :math:`\;F\ ` is equal to dimension of the kernel:

.. math::
   
   \text{Ker}\,F\,=\,\{\,v\in V:\ F(v)=\theta_W\}\,,\qquad\text{def}\,F\,=\,\dim\,\text{Ker}\,F\,.

:math:`\;\Rightarrow\,:\ ` Assume that :math:`\;F\ ` is injective.
Then the zero vector :math:`\;\theta_W\ ` of the space :math:`\;W\ ` 
is an image only of the zero wector :math:`\;\theta_V,\ ` which means 
that :math:`\ \,\text{Ker}\,F=\{\,\theta_V\}\ ` and :math:`\ \text{def}\,F=0\,.`

:math:`\;\Leftarrow\,:\ ` Assume that :math:`\;F\ ` is not injective. :math:`\\`
Then there are two disctinct vectors :math:`\;v_1\ \,` and :math:`\ v_2,\ ` 
which under the transformation :math:`\;F\ ` have the same image:

.. math::
   
   v_1\neq v_2\quad\land\quad F(v_1)\,=\,F(v_2)\,,

   \qquad\text{that is}\qquad
   v_1-v_2\neq\theta_V\quad\land\quad F(v_1)-F(v_2)=F(v_1-v_2)=\theta_W.\; 

Hence, :math:`\ \,\theta_V\neq v_1-v_2\in\text{Ker}\,F,\ \,` 
and thus :math:`\ \,\text{Ker}\,F\neq\{\,\theta_V\}\ ` and :math:`\ \text{def}\,F\neq 0\,.`

By contraposition we deduce that if :math:`\ \text{def}\,F=0,\ ` 
then :math:`\ F\ ` is injective.

.. admonition:: Theorem 2.
   
   Tranformation :math:`\,F\in\text{Hom}(V,W)\,` preserves linear 
   independence of any set of vectors of the space :math:`\,V\,` if 
   and only if it is injective

**Proof** bases on the :math:`\,` (previous) :math:`\,` theorem, which states that injectivity of the transformation :math:`\ F\ ` is equivalent to vanishing of the defect

:math:`\;\Rightarrow\,:\ ` Assume that :math:`\;F\ ` is not injective. 

Then :math:`\ \text{def}\,F=\dim\,\text{Ker}\,F=k>0.\ `
Let :math:`\,\mathcal{U}=(\,u_1,\,u_2,\,\dots,\,u_k)\ ` be a basis of :math:`\,\text{Ker}\,F.\ `
The set :math:`\,\mathcal{U}\ ` is linearly independent, but its image under the transformation :math:`\,F:`

.. math::
   
   F(\mathcal{U})\,=\,(\,Fu_1,\,Fu_2,\,\dots,\,Fu_k\,)\,=\,
                    (\,\theta_W,\,\theta_W,\,\dots,\,\theta_W)

is, of course, linearly dependent (actually, it is maximally linearly dependent).

Hence, if :math:`\,F\ ` is not injective, then there are sets of vectors whose linear independence is not preserved under the transformation  :math:`\,F.\,`  
On the other hand, if the transformation :math:`\,F\,` preserves linear independence of any set of vectors, then it is injective.

:math:`\;\Leftarrow\,:\ ` Assume that :math:`\;F\ ` is injective, :math:`\,` 
that is :math:`\;\text{Ker}\,F=\{\,\theta_V\}\,.`

Consider a linearly independent set :math:`\;(x_1,\,x_2,\,\dots,\,x_r)\ ` of vectors of the space :math:`\,V.\,` :math:`\\`
Then :math:`\,` for :math:`\,a_1,\,a_2,\,\dots,\,a_r\in K:`

.. math::
   
   \begin{array}{rcc}
   \text{if} & \qquad & a_1\,Fx_1\,+\,a_2\,Fx_2\,+\,\ldots\,+\,a_r\,Fx_r\,=\,\theta_W\,,
   \\ \\
   \text{then:}    & \qquad & F(a_1\,x_1+\,a_2\,x_2+\ldots+\,a_r\,x_r)\,=\,\theta_W\,,
   \\             
                 & \qquad & a_1\,x_1+a_2\,x_2+\ldots+a_r\,x_r\in\text{Ker}\,F\,,
   \\
                 & \qquad & a_1\,x_1\,+a_2\,x_2\,+\ldots+\,a_r\,x_r\,=\,\theta_V\,,
   \\   
                 & \qquad & a_1=\,a_2=\,\dots\,=\,a_r=0\,.
   \end{array}

Hence, the vectors :math:`\ Fx_1,\,Fx_2,\,\dots,\,Fx_r\ ` are also linearly independent.

In this way we proved that for any vectors :math:`\ \,x_1,\,x_2,\,\dots,\,x_r\,\in V\ `
we have the implication (l.i. = linearly independent):

.. math::
   
   (\,x_1,\,x_2,\,\dots,\,x_r)\ \ \ \ \text{l.i.}
   \qquad\Rightarrow\qquad
   (\,Fx_1,\,Fx_2,\,\dots,\,Fx_r)\ \ \ \ \text{l.i.}

which means precisely that :math:`\,F\ ` preserves linear independence of any set of vectors.

**Corollaries and discussion.** :math:`\,`
Consider an :math:`\,n`-dimensional vector space :math:`\,V(K)\ `
with basis :math:`\,\mathcal{B}=(v_1,\,v_2,\,\dots,\,v_n).\ ` The mapping

.. math::
   
   I_{\mathcal{B}}:\quad V\,\ni\, x\,=\,\sum_{i\,=\,1}^n\ a_i\,v_i
   \quad\rightarrow\quad
   I_{\mathcal{B}}(x)\,:\,=\,
   \left[\begin{array}{c} a_1 \\ a_2 \\ \dots \\ a_n \end{array}\right]
   \,\in\,K^n

which transforms a vector :math:`\,x\ ` into a column of coordinates of this vector in basis :math:`\,\mathcal{B}\ ` is an isomorphism of the space
:math:`\,V\ ` onto the space :math:`\,K^n,\ ` and thus it is injective. Hence,
:math:`\,I_{\mathcal{B}}\ ` preserves linear independence of vectors.
The same property holds for the inverse transformation, which is also an isomorphism. 

Consider a set :math:`\,(x_1,\,x_2,\,\dots,\,x_r)\ ` of vectors, where

.. math::
   
   x_j\,=\;\sum_{i\,=\,1}^n\ a_{ij}\,v_i\,,
   \qquad\text{so that}\qquad 
   I_{\mathcal{B}}(x_j)\,=\,
   \left[\begin{array}{c} a_{1j} \\ a_{2j} \\ \dots \\ a_{nj} \end{array}\right]
   \,,\quad j=1,2,\dots,r.

The aforementioned property of the isomorphisms
:math:`\ I_{\mathcal{B}}\ ` and :math:`\ I_{\mathcal{B}}^{-1}\ ` 
implies that :math:`\,` (l.i. = linearly independent):

.. math::
   
   (\,x_1,\,x_2,\,\dots,\,x_r)\ \ \ \ \text{l.i.}
   \qquad\Leftrightarrow\qquad
   \left(\;
   I_{\mathcal{B}}(x_1),\,I_{\mathcal{B}}(x_2),\,\dots,\,I_{\mathcal{B}}(x_r)\;
   \right) 
   \ \ \ \ \text{l.i.}


.. .. math::
   
   (\,x_1,\,x_2,\,\dots,\,x_r)\ \ -\ \ \text{l.n.}
   \qquad\Leftrightarrow\qquad
   \left(\ \  
   \left[\begin{array}{c} a_{11} \\ a_{21} \\ \dots \\ a_{n1} \end{array}\right],\ 
   \left[\begin{array}{c} a_{12} \\ a_{22} \\ \dots \\ a_{n2} \end{array}\right],\ 
   \dots,\ 
   \left[\begin{array}{c} a_{1r} \\ a_{2r} \\ \dots \\ a_{nr} \end{array}\right]\ \ 
   \right) 
   \ \ -\ \ \text{l.n.}

.. Można to zapisać jako

.. admonition:: Corollary 1a.
   
   Vectors from an :math:`\,n`-dimensional vector space :math:`\,V(K)\ ` are
   linearly independent if and only if columns of their coordinates :math:`\,`
   (as vectors of the space :math:`\,K^n`) :math:`\,` are linearly independent 
   in every basis of the space :math:`\,V.` 

Since linear dependence is a negation of linear independence, we may also write 
:math:`\,` (l.d. = linearly dependent):

.. math::
   
   (\,x_1,\,x_2,\,\dots,\,x_r)\ \ \ \ \text{l.d.}
   \qquad\Leftrightarrow\qquad
   \left(\;
   I_{\mathcal{B}}(x_1),\,I_{\mathcal{B}}(x_2),\,\dots,\,I_{\mathcal{B}}(x_r)\;
   \right) 
   \ \ \ \ \text{l.d.}

.. admonition:: Corollary 1b.
   
   Vectors from an :math:`\,n`-dimensional vector space :math:`\,V(K)\ ` are
   linearly dependent if and only if columns of their coordinates :math:`\,`
   (as vectors of the space :math:`\,K^n`) :math:`\,` are linearly dependent 
   in every basis of the space :math:`\,V.` 

If :math:`\,r=n,\ ` then the columns of coordinates form a square matrix

.. math::
   
   \boldsymbol{A}\ =\ [\,a_{ij}\,]_{n\times n}\ =\ 
   [\,I_{\mathcal{B}}(x_1)\,|\,I_{\mathcal{B}}(x_2)\,|\,\dots\,|\,I_{\mathcal{B}}(x_n)\,]\,.

An element :math:`\,a_{ij}\ ` of this matrix is the :math:`\,i`-th coordinate of the :math:`\,j`-th vector from the set :math:`\,(x_1,\,x_2,\,\dots,\,x_n).\ \\` 
Properties of determinant imply

.. math::
   
   (\,x_1,\,x_2,\,\dots,\,x_n)\ \ \ \ \text{l.i.}
   \qquad\Leftrightarrow\qquad
   \det\,\boldsymbol{A}\neq 0\,.

.. Biorąc pod uwagę fakt, że w :math:`\,n`-wymiarowej przestrzeni wektorowej
   każdy liniowo niezależny układ :math:`\,n\ ` wektorów jest bazą, 
   można sformułować

.. admonition:: Corollary 2.
   
   In an :math:`\,n`-dimensional vector space :math:`\,V(K)\ ` a set of 
   :math:`\,n\ ` vectors is linearly independent if and only if 
   the determinant of the matrix formed from the coordinates of these vectors
   is non-zero.   

Taking into account that in an :math:`\,n`-dimensional vector space every set of 
:math:`\,n\ ` linearly independent vectors comprises a basis, :math:`\,` 
we may formulate

.. admonition:: Corollary 3.
   
   In an :math:`\,n`-dimensional vector space :math:`\,V(K)\ ` a set of :math:`\,n\ ` 
   vectors compises a basis of this space if and only if 
   the determinant of the matrix formed from the coordinates of these vectors
   is non-zero.   
























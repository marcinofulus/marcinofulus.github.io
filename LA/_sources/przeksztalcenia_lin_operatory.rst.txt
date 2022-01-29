
Linear Operators
----------------

A linear operator is a linear transformation of a vector space into itself, that is, an endomorphism. All theorems proved for homomorphisms are also valid for endomorphisms.
However, because we will only deal with one vector space and one basis, some notation  may be simplified. 

Let :math:`\,F\ ` be a linear operator defined on an :math:`\,n`-dimensional vector space :math:`\,V\ ` over a field :math:`\,K.\ ` 
We denote a matrix of the operator :math:`\,F\ ` with respect to basis :math:`\ \mathcal{B}=(v_1,v_2,\dots,v_n)\ `
of the space :math:`\,V\ ` by any of: 
:math:`\ M_{\mathcal{B}}(F)=\boldsymbol{F}=[\,f_{ij}\,]_{n\times n}\in M_n(K).\ `
Its entries are defined by a system of equations which present images of consecutive vectors from the basis :math:`\ \mathcal{B}\ ` *in the same basis*:

.. math::
   
   \begin{array}{l}
   Fv_1\ =\ f_{11}\,v_1\,+\ f_{21}\,v_2\,+\ \dots\ +\ f_{n1}\,v_n \\
   Fv_2\ =\ f_{12}\,v_1\,+\ f_{22}\,v_2\,+\ \dots\ +\ f_{n2}\,v_n \\
   \ \dots \\
   Fv_n\ =\ f_{1n}\,v_1\,+\ f_{2n}\,v_2\,+\ \dots\ +\ f_{nn}\,v_n ,
   \end{array}
   
in short: 
:math:`\displaystyle\quad Fv_j\;=\;\sum_{i\,=\,1}^n\ f_{ij}\:v_i\,,\quad j=1,2,\dots,n.`

Therefore, in a column form:

.. math::
   
   M_{\mathcal{B}}(F)\ \,=\ \,
   \left[\;I_{\mathcal{B}}(Fv_1\,|\,I_{\mathcal{B}}(Fv_2\,|\ \dots\ |\,
   I_{\mathcal{B}}(Fv_n\,\right]\,,

where :math:`\ I_{\mathcal{B}}(v)\ ` is a column of coordinates 
:math:`\,` (in the basis :math:`\,\mathcal{B}\,`) :math:`\,` of a vector :math:`\,v\in V.`

Theorem 10. may be now stated as follows

.. math::
   :label: fund_end
      
   v'\,=\,F(v)\qquad\Rightarrow\qquad   
   I_{\mathcal{B}}(v')\ =\ M_{\mathcal{B}}(F)\,\cdot\,I_{\mathcal{B}}(v)\,,
   \qquad v,v'\in V.

The set :math:`\ \text{End}(V)\ ` of linear operators on the space :math:`\,V\ `
is equipped with operations of addition, multiplication by scalars from
the field :math:`\,K\ ` and composition
(with these operations :math:`\,\text{End}(V)\,` is an algebra over the field :math:`\,K`). :math:`\,`
Form of a matrix associated with composition of two operators is described in

.. admonition:: Theorem 12. :math:`\\`
   
   Let :math:`\,F,\,G\in\text{End}(V),\ ` where :math:`\,V\,` is a finite dimensional
   vector space with basis :math:`\,\mathcal{B}.\ `
   Then the matrix :math:`\,` (in basis :math:`\,\mathcal{B}`) :math:`\,`
   associated with composition of the operators :math:`\,F\ ` and  :math:`\,G\ ` 
   is equal to product of their matrices in this basis:
   
   .. math::
      :label: multi
      
      M_{\mathcal{B}}(F\circ G)\ =\ M_{\mathcal{B}}(F)\,\cdot\,M_{\mathcal{B}}(G)\,.

**Proof.** :math:`\,` 

Recall that composition of linear operators
:math:`\,F,\,G\in\text{End}(V)\,` is defined as

.. math::
   
   (F\circ G)(v)\ :\,=\ F\,[\,G(v)\,]\,,\qquad v\in V\,.

Denote:
:math:`\quad\dim\,V=n,\quad\mathcal{B}=(v_1,v_2,\dots,v_n)\quad` and

.. math::
   
   M_{\mathcal{B}}(F)=\boldsymbol{F}=[\,f_{ij}\,]_{n\times n}\,,\quad
   M_{\mathcal{B}}(G)=\boldsymbol{G}=[\,g_{ij}\,]_{n\times n}\,,\quad   
   M_{\mathcal{B}}(F\circ G)=\boldsymbol{H}=[\,h_{ij}\,]_{n\times n}\ \ \in\ M_n(K)\,.

Image of the :math:`\,j`-th vector from the basis :math:`\,\mathcal{B}\ ` under the mapping :math:`\,F\circ G\ `
may be written as a linear combination of vectors from the basis :math:`\,\mathcal{B}\,`
in two ways:

.. math::
   
   \triangleright\quad (F\circ G)(v_j)\ =\ \sum_{i\,=\,1}^n\ h_{ij}\:v_i\,;

   \triangleright\quad (F\circ G)(v_j)
   \ \,=\ \,F\,\left[\,G(v_j)\,\right]
   \ \,=\ \,F\,\left(\ \sum_{k\,=\,1}^n\ g_{kj}\:v_k\right)
   \ \ =\ \ \sum_{k\,=\,1}^n\ g_{kj}\:F(v_k)\ \ =
   
   \ \ =\ \ \sum_{k\,=\,1}^n\ g_{kj} \left(\ \sum_{i\,=\,1}^n\ f_{ik}\:v_i\right)
   \ \ =\ \ \sum_{i\,=\,1}^n\,\left(\ \sum_{k\,=\,1}^n\ f_{ik}\:g_{kj}\right)\,v_i\,,
   \qquad j=1,2,\dots,n.

The uniqueness of such representation implies 

.. math::
   
   h_{ij}\ \,=\ \ \sum_{k\,=\,1}^n\ f_{ik}\:g_{kj}\,,\qquad i,j=1,2,\dots,n,

which means that :math:`\quad\boldsymbol{H}=\boldsymbol{F}\boldsymbol{G},\quad`
and so :math:`\quad M_{\mathcal{B}}(F\circ G)\,=\,M_{\mathcal{B}}(F)\cdot M_{\mathcal{B}}(G)\,.`

Association of matrices (under a chosen basis) to linear operators
is not only additive and homogeneous (cf. proof of Theorem 11.), but also 
multiplicative in a sense of :eq:`multi`. This allows us to formulate

.. admonition:: Corollary. :math:`\\`

   If :math:`\,V\,` is a vector space over a field :math:`\,K\,` with basis
   :math:`\,\mathcal{B}=(v_1,\dots,v_n),\ ` then mapping
   
   .. math::
      
      M_{\mathcal{B}}:\quad
      \text{End}(V)\ni F\ \rightarrow\ M_{\mathcal{B}}(F):\,=
      \left[\;I_{\mathcal{B}}(Fv_1\,|\,\dots\,|\,
      I_{\mathcal{B}}(Fv_n\,\right]\in M_n(K)
      
   is an isomorphism of algebras
   :math:`\ \ \text{End}(V)\ ` and :math:`\ \ \,M_n(K).`

**Digression.**

One of the reasons why current definition of matrix multiplication has been adopted is because then the mapping :math:`\,M_{\mathcal{B}}\,` is multiplicative:
product (i.e. composition) of operators corresponds to product of matrices.
Another explanation of such definition is that then determinant of product of two matrices equals a product of determinants.

**Example.**

We discuss matrix representation of a linear operator :math:`\,F\,` defined on the real three dimensional space :math:`\,V\,` of geometric vectors by a formula

.. math::
   
   F(\vec{r})\ :\,=\,\vec{a}\times \vec{r}\,,\qquad\vec{r}\in V,

where :math:`\,\vec{a}\,` is a fixed vector. 
Linearity of :math:`\,F\,` follows from properties of the cross product.

As a basis of the space :math:`\,V\,` we choose a triple of mutually perpendicular unit vectors with right-handed coordinates: :math:`\ \mathcal{E}=(\vec{e}_1,\,\vec{e}_2,\,\vec{e}_3).\ ` Let 
:math:`\ \,\vec{a}=a_1\,\vec{e}_1+a_2\,\vec{e}_2+a_3\,\vec{e}_3,\ \,
\vec{r}=x_1\,\vec{e}_1+x_2\,\vec{e}_2+x_3\,\vec{e}_3.\ `
Writing cross product in a form of determinant, we obtain

.. math::
   :label: prod_det
   
   F(\vec{r})\ \,=\ \,
   \left|\begin{array}{ccc}
   \vec{e}_1 & \vec{e}_2 & \vec{e}_3 \\
     a_1     &   a_2     &   a_3     \\  
     x_1     &   x_2     &   x_3       
   \end{array}\right|\,.

In oder to find a matrix of the operator :math:`\,F\,` in the basis :math:`\ \mathcal{E},\ ` we compute images of the basis vectors:

.. math::

   \begin{array}{l}   
   F(\vec{e}_1)\ \,=\ \,\vec{a}\times\vec{e}_1\ \;=\ \ 
   \left|\begin{array}{ccc}
   \vec{e}_1 & \vec{e}_2 & \vec{e}_3 \\
     a_1     &   a_2     &   a_3     \\  
       1     &     0     &     0       
   \end{array}\right|\ \ \,=\ \ \,
   0\,\cdot\,\vec{e}_1\ \,+\ \,a_3\,\cdot\;\vec{e}_2\ \,-\ \,a_2\,\cdot\;\vec{e}_3\,, \\   
   F(\vec{e}_2)\ \,=\ \,\vec{a}\times\vec{e}_2\ \;=\ \ 
   \left|\begin{array}{ccc}
   \vec{e}_1 & \vec{e}_2 & \vec{e}_3 \\
     a_1     &   a_2     &   a_3     \\  
       0     &     1     &     0       
   \end{array}\right|\ \ \,=\ \ \,
   -\ a_3\,\cdot\,\vec{e}_1\ \,+\ \,0\,\cdot\;\vec{e}_2\ \,+\ \,a_1\,\cdot\;\vec{e}_3\,, \\  
   F(\vec{e}_3)\ \,=\ \,\vec{a}\times\vec{e}_3\ \;=\ \ 
   \left|\begin{array}{ccc}
   \vec{e}_1 & \vec{e}_2 & \vec{e}_3 \\
     a_1     &   a_2     &   a_3     \\  
       0     &     0     &     1       
   \end{array}\right|\ \ \,=\ \ \,
   a_2\,\cdot\,\vec{e}_1\ \,-\ \,a_1\,\cdot\;\vec{e}_2\ \,+\ \,0\,\cdot\;\vec{e}_3\,.
   \end{array}

Hence: 
:math:`\quad M_{\mathcal{E}}(F)\ =\ \left[\begin{array}{ccc}
0 & -\ a_3 & a_2 \\ a_3 & 0 & -\ a_1 \\ -\ a_2 & a_1 & 0
\end{array}\right]\,.`

(On a side, note that the matrix :math:`\ M_{\mathcal{E}}(F)\equiv\boldsymbol{F}\,`
is antisymmetric: :math:`\ \boldsymbol{F}^{\,T}=-\,\boldsymbol{F}.`)

If we put 
:math:`\ \,F(\vec{r})\,=\,\vec{r}\;'\,=\ x_1'\;\vec{e}_1+\,x_2'\;\vec{e}_2+\,x_3'\;\vec{e}_3\,,\ \,` 
then by equation :eq:`prod_det` :

.. math::
   
   \begin{array}{l}
   x_1'\ =\ a_2\;x_3\ -\ a_3\;x_2 \\
   x_2'\ =\ a_3\;x_1\ -\ a_1\;x_3 \\
   x_3'\ =\ a_1\;x_2\ -\ a_2\;x_1
   \end{array}
   \qquad\text{that is}\qquad
   \left[\begin{array}{c} x_1' \\ x_2' \\ x_3' \end{array}\right]
   \ =\ 
   \left[\begin{array}{ccc}
             0  & -\ a_3 &    a_2 \\
            a_3 &     0  & -\ a_1 \\
         -\ a_2 &    a_1 &     0
   \end{array}\right] 
   \left[\begin{array}{c} x_1 \\ x_2 \\ x_3 \end{array}\right]\,.

The last equality states, :math:`\,` in consonance with :eq:`fund_end`, :math:`\,` that 
:math:`\ \ I_{\mathcal{E}}(\vec{r}\;')\,=\,M_{\mathcal{E}}(F)\cdot I_{\mathcal{E}}(\vec{r})\,.`
































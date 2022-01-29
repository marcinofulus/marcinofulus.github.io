
Change of Basis
---------------

If we choose a basis in a vector space, then each vector is uniquely characterised by its coordinates, and each linear operator :math:`\,` - :math:`\,` by its matrix in this basis. However, in different bases one vector has different coordinates, and one linear operator :math:`\,` - :math:`\,` different matrices.

In this section we introduce formulae which describe a change of vector coordinates and matrices of linear operators under the change of basis.

Change-of-Basis Matrix
~~~~~~~~~~~~~~~~~~~~~~

Let :math:`\ \mathcal{B}\,=\,(v_1,\,v_2,\,\dots,\,v_n)\ ` 
and :math:`\ \,\mathcal{B'}\,=\,(v_1',\,v_2',\,\dots,\,v_n')\ ` be two bases of a vector space :math:`\,V\ ` over a field :math:`\,K.`

.. admonition:: Lemma.
   
   A linear transformation :math:`\ T:\,V\rightarrow V\ ` given by
   
   .. math::
   
      Tv_i\ :\,=\ v_i'\,,\qquad i=1,2,\dots,n,
   
   is an automorphism of the vector space :math:`\,V.\ \\`
   We call it an :math:`\,` *automorphism of transition* :math:`\,` 
   from basis :math:`\ \mathcal{B}\ ` to basis :math:`\ \mathcal{B'}.`

.. które przekształca wektory bazy :math:`\ \mathcal{B}\ ` w odpowiednie wektory
   bazy :math:`\ \mathcal{B}':`

**Proof.** :math:`\, \\` 
A linear transformation :math:`\,T\ ` is uniquely defined if we fix images of vectors
from basis :math:`\ \mathcal{B}\ ` (cf. Corollary to Theorem 5.).

For a vector :math:`\displaystyle\ \,v=\sum_{i\,=\,1}^n\ a_i\,v_i\,\in\,V\ \,` we have

.. math::
   
   T\,\left(\,\sum_{i\,=\,1}^n\ a_i\,v_i\right)\ \ =\ \ 
   \sum_{i\,=\,1}^n\ a_i\;Tv_i\ \ =\ \ \sum_{i\,=\,1}^n\ a_i\,v_i'\,.


Hence, a vector with coordinates :math:`\ \,\,a_1,\,a_2,\,\dots,\,a_n\,\ \,` in basis :math:`\ \mathcal{B}\ \,` is mapped to a vector with the same coordinates in basis :math:`\ \mathcal{B}'.\ `
Recall that in a vector space with a chosen basis the vector coordiates are determined uniquely.
Therefore the transformation :math:`\ T\ ` is a bijective endomorphism, or in other words, an automorphism.

.. admonition:: Definition.
   
   | A *transition matrix* :math:`\ \boldsymbol{S}\ ` 
     from basis :math:`\ \mathcal{B}\ ` to basis :math:`\ \mathcal{B}'\ `
     of a vector space :math:`\,V\,` 
   | is a matrix of an automorphism of transition :math:`\,T\ ` 
     in the basis :math:`\,\mathcal{B}:\quad\boldsymbol{S}\ :\,=\ M_{\mathcal{B}}(T)\,.`

Let :math:`\ \boldsymbol{S}\ =\ [\,s_{ij}\,]_{n\times n}\,.\ `
Definition of matrix of a linear operator implies the relations

.. math::
   :label: base_0

   \begin{array}{lcl}
   & & v_j'\;=\ Tv_j\;=\ \displaystyle\sum_{i\,=\,1}^n\ s_{ij}\:v_i\,,\qquad j=1,2,\dots,n\,, \\ \\
   \text{that is} & \qquad\quad &
   \begin{array}{l}
   v_1'\ =\ s_{11}\,v_1\,+\ s_{21}\,v_2\,+\ \dots\ +\ s_{n1}\,v_n \\
   v_2'\ =\ s_{12}\,v_1\,+\ s_{22}\,v_2\,+\ \dots\ +\ s_{n2}\,v_n \\
   \ \dots \\
   v_n'\ =\ s_{1n}\,v_1\,+\ s_{2n}\,v_2\,+\ \dots\ +\ s_{nn}\,v_n
   \end{array}
   \end{array}

which give us a practical method to construct transition matrix:

.. admonition:: Corollary 1. :math:`\\`
   
   The :math:`j`-th column of transition matrix :math:`\ \boldsymbol{S}\ `
   from basis :math:`\ \mathcal{B}\ ` to :math:`\ \mathcal{B}'\ ` of 
   vector space :math:`\,V\,` 
   is a column of coordinates :math:`\,` (in basis :math:`\ \mathcal{B}`) :math:`\,`
   of the :math:`j`-th vector from basis :math:`\ \mathcal{B}',\ \ j=1,2,\dots,n:`
   
   .. math::
      :label: S_col
      
      \boldsymbol{S}\ \,=\ \,\left[\,I_{\mathcal{B}}(v_1')\,|\,
                                     I_{\mathcal{B}}(v_2')\,|\,
                                     \dots\,|\,
                                     I_{\mathcal{B}}(v_n')\,\right]\,.

A crucial property of transition matrices states

.. admonition:: Corollary 2. 
   
   Transition matrix is nondegenerate: :math:`\ \ \det\,\boldsymbol{S}\neq 0\,.`

**Proof.** :math:`\,` The mapping :math:`\,I_{\mathcal{B}},\ ` being an isomorphism of the space :math:`\,V\ ` onto the space :math:`\,K^n,\ ` preserves linear independence of vectors. Linear independence of vectors :math:`\ v_1',\,v_2',\,\dots,\,v_n'\ ` 
from the basis :math:`\ \mathcal{B'}\ ` implies then linear independence of columns of the matrix :math:`\ \boldsymbol{S},\ \,` which further implies nonvanishing of its determinant.

**Example.**

Consider 3-dimensional vector space :math:`\,V\ ` with bases 
:math:`\ \mathcal{B}=(v_1,\,v_2,\,v_3)\ ` and :math:`\ \mathcal{B'}=(v_1',\,v_2',\,v_3'),\ \,`
where :math:`\ \ v_1'=\,v_1,` :math:`\ \ v_2'=\,v_1+\,v_2,` :math:`\ \ v_3'=\,v_1+\,v_2+\,v_3\,.`

Relations between vectors from the two bases may be written as

.. math::
   
   \begin{array}{l}
   v_1'\ =\ 1\cdot v_1\,+\;0\cdot v_2\,+\;0\cdot v_3 \\
   v_2'\ =\ 1\cdot v_1\,+\;1\cdot v_2\,+\;0\cdot v_3 \\
   v_3'\ =\ 1\cdot v_1\,+\;1\cdot v_2\,+\;1\cdot v_3\,,
   \end{array}
   \qquad\text{and thus the transition matrix}\qquad
   \boldsymbol{S}\ =\ 
   \left[\begin{array}{ccc} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{array}\right]\,. 

Change-of-Basis Transformation Formulae
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

From now on, the bases :math:`\ \mathcal{B}\,=\,(v_1,\,v_2,\,\dots,\,v_n)\ ` 
and :math:`\ \,\mathcal{B'}\,=\,(v_1',\,v_2',\,\dots,\,v_n')\ `
will be called the old and the new basis respectively.
The relations :eq:`base_0` between their vectors may be writtes as:

.. math::

   \begin{array}{lcl}
   & & v_i'\;=\ Tv_i\;=\ \displaystyle\sum_{j\,=\,1}^n\ s_{ij}^T\:v_j\,,\qquad i=1,2,\dots,n\,, \\ \\
   \text{and thus} & \qquad\quad &
   \begin{array}{l}
   v_1'\ =\ s_{11}^T\,v_1\,+\ s_{12}^T\,v_2\,+\ \dots\ +\ s_{1n}^T\,v_n \\
   v_2'\ =\ s_{21}^T\,v_1\,+\ s_{22}^T\,v_2\,+\ \dots\ +\ s_{2n}^T\,v_n \\
   \ \dots \\
   v_n'\ =\ s_{n1}^T\,v_1\,+\ s_{n2}^T\,v_2\,+\ \dots\ +\ s_{nn}^T\,v_n
   \end{array}
   \end{array}

This system of :math:`\,n\ ` equalities is equivalent to a matrix equation 

.. math::
   :label: trans_base

   \blacktriangleright\quad   
   \left[\begin{array}{c} v_1' \\ v_2' \\ \dots \\ v_n' \end{array}\right]\ \,=\ \,
   \boldsymbol{S}^{\,T}\,
   \left[\begin{array}{c} v_1 \\ v_2 \\ \dots \\ v_n \end{array}\right]\,.
   
.. admonition:: Rule 0. :math:`\,` Transformation of basis vectors.
   
   A column consisting of vectors from the new basis is equal to a product of
   transposed transition matrix and a column consisting of vectors from the old basis.

It is worth to notice that (contrary to matrix equations we have seen so far) the elements of columns on both sides are not *scalars* (numbers), but *vectors*.
However, the matrix in this equation is a standard numerical matrix.

To find out the transformation of vector coordinates under a change of basis, we write 
a vector :math:`\,v\in V\ ` with respect to the old and the new basis:

.. math::
   :nowrap:
   
   \begin{eqnarray*}
   \sum_{i\,=\,1}^n\ a_i\:v_i\  & = & \ \sum_{j\,=\,1}^n\ a_j'\ v_j' \ \ = \\
                                & = & \ \sum_{j\,=\,1}^n\ a_j'\ \left(\,
                                        \sum_{i\,=\,1}^n\ s_{ij}\:v_i\right) \ \ = \\
                                & = & \ \sum_{i\,=\,1}^n\ \left(\,
                                        \sum_{j\,=\,1}^n\ s_{ij}\:a_j'\right)\;v_i\,.
   \end{eqnarray*}

By uniqueness of representation of a vector in basis :math:`\, \mathcal{B},` 

.. math::
   
   \begin{array}{lcl}
   & & a_i\ =\ \displaystyle\sum_{j\,=\,1}^n\ s_{ij}\:a_j'\,,\qquad i=1,2,\dots,n\,, \\ \\
   \text{that is} & \qquad\quad &
   \begin{array}{l}
   a_1\ =\ s_{11}\,a_1'\,+\ s_{12}\,a_2'\,+\ \dots\ +\ s_{1n}\,a_n' \\
   a_2\ =\ s_{21}\,a_1'\,+\ s_{22}\,a_2'\,+\ \dots\ +\ s_{2n}\,a_n' \\
   \ \dots \\
   a_n\ =\ s_{n1}\,a_1'\,+\ s_{n2}\,a_2'\,+\ \dots\ +\ s_{nn}\,a_n'
   \end{array}
   \end{array}

If we write it in a matrix form, we obtain

.. math::
   :label: trans_coord
   
   \left[\begin{array}{c} a_1 \\ a_2 \\ \dots \\ a_n \end{array}\right]
   \ \,=\ \,\boldsymbol{S}\;
   \left[\begin{array}{c} a_1' \\ a_2' \\ \dots \\ a_n' \end{array}\right]\,,
   \qquad\qquad\blacktriangleright\quad
   \left[\begin{array}{c} a_1' \\ a_2' \\ \dots \\ a_n' \end{array}\right]
   \ \,=\ \,\boldsymbol{S}^{-1}\,
   \left[\begin{array}{c} a_1 \\ a_2 \\ \dots \\ a_n \end{array}\right]\,.

.. admonition:: Rule 1. :math:`\,` Transformation of vector coordinates.
   
   .. A column of vector coordinates in the new basis is equal to a product of 
      an inverse of transition matrix and a column of the coordinates in the old basis.
  
   .. math::
      
      I_{\mathcal{B}'}(v)\ \ =\ \ \boldsymbol{S}^{-1}\,\cdot\,I_{\mathcal{B}}(v)\,,\qquad
      v\in V.
      

We discuss now transformation of a matrix of a linear operator. 

Let :math:`\,F\in\text{End}(V),\quad 
M_{\mathcal{B}}(F)=\boldsymbol{F}=[\,f_{ij}\,]_{n\times n}\,,\quad
M_{\mathcal{B}'}(F)=\boldsymbol{F}'=[\,f_{ij}'\,]_{n\times n}\,.`

Starting from definition of a matrix of the opeartor :math:`\,F\ ` in basis :math:`\,\mathcal{B},\,` we obtain (:math:`j=1,2,\dots,n`):

.. math::
   :nowrap:
   
   \begin{eqnarray*}
   Fv_j' & = & \sum_{i\,=\,1}^n\ f_{ij}'\ v_i'\,, \\
   F\left(Tv_j\right) & = & \sum_{i\,=\,1}^n\ f_{ij}'\ Tv_i\,, \\
   T^{-1}\left[\,F\left(Tv_j\right)\,\right] & = & \sum_{i\,=\,1}^n\ f_{ij}'\ T^{-1}(Tv_i)\,, \\
   (T^{-1}\circ\,F\,\circ\,T)\ v_j & = & \sum_{i\,=\,1}^n\ f_{ij}'\ v_i\,.
   \end{eqnarray*}

The last equation states that :math:`\,\boldsymbol{F}\,` is a matrix 
:math:`\,` (in basis :math:`\,\mathcal{B}\,`) :math:`\,` of the operator
:math:`\ \,T^{-1}\circ\,F\,\circ\,T` :

.. math::
   
   \boldsymbol{F}'\ =\ M_{\mathcal{B}}\left(\,T^{-1}\circ\,F\,\circ\,T\,\right)\ \,=\ \,
   M_{\mathcal{B}}(T^{-1})\,\cdot\,M_{\mathcal{B}}(F)\,\cdot\,M_{\mathcal{B}}(T)\ =
   
   =\  
   [\,M_{\mathcal{B}}(T)\,]^{-1}\,\cdot\,M_{\mathcal{B}}(F)\,\cdot\,M_{\mathcal{B}}(T)\ \,=\ \,
   \boldsymbol{S}^{-1}\,\boldsymbol{F}\ \boldsymbol{S}\,.

In this way, the matrix :math:`\,\boldsymbol{F}'\ ` of the linear operator
:math:`\,F\ ` in basis :math:`\,\mathcal{B}'\ ` is given by

.. math::
   :label: F_prim
   
   \blacktriangleright\quad
   \boldsymbol{F}'\ =\ \boldsymbol{S}^{-1}\,\boldsymbol{F}\ \boldsymbol{S}\,.

   
.. .. math::

   \text{Ostatecznie}\qquad\blacktriangleright\quad
   \boldsymbol{F}'\ =\ \boldsymbol{S}^{-1}\,\boldsymbol{F}\ \boldsymbol{S}\,.

   Ostatecznie, macierz :math:`\,\boldsymbol{F}\ ` operatora liniowego :math:`\,F\ `
   przy zmianie bazy transformuje się następująco: 

   Ostatecznie, transformacja macierzy :math:`\,\boldsymbol{F}\ ` operatora liniowego :math:`\,F\ `
   wyraża się wzorem

   
.. admonition:: Rule 2. :math:`\,` Transformation of a matrix of a linear operator.
   
   Under a change of basis described by the transition matrix :math:`\,\boldsymbol{S},\ `
   a matrix of the linear operator :math:`\,F\ ` changes according to the formula:
   
   .. math::
      
      M_{\mathcal{B}'}(F)\ \,=\ \,
      \boldsymbol{S}^{-1}\,\cdot\,M_{\mathcal{B}}(F)\,\cdot\,\boldsymbol{S}\,.

.. .. math::

   \begin{array}{lcc}
   & & \boldsymbol{F}'\ =\ 
     \boldsymbol{S}^{-1}\,\boldsymbol{F}\ \boldsymbol{S}\,, \\ \\
   \blacktriangleright & \quad & M_{\mathcal{B}'}(F)\ \,=\ \,
   \boldsymbol{S}^{-1}\,\cdot\,M_{\mathcal{B}}(F)\,\cdot\,\boldsymbol{S}\,.
   \end{array}

   .. math::

   \begin{array}{cccc}
   & & & \boldsymbol{F}'\ =\ 
   \boldsymbol{S}^{-1}\,\boldsymbol{F}\ \boldsymbol{S}\,, \\ \\
   \text{czyli}\quad & \quad\blacktriangleright & \quad & M_{\mathcal{B}'}(F)\ \,=\ \,
   \boldsymbol{S}^{-1}\,\cdot\,M_{\mathcal{B}}(F)\,\cdot\,\boldsymbol{S}\,.
   \end{array}

**Remark.**

From comparison of the formulae :eq:`trans_base` and :eq:`trans_coord`, we see that 
under a change of basis the vector coordinates change differently than the basis vectors, :math:`\,` unless 

.. math::
   :label: orth_mat
   
   \boldsymbol{S}^{-1}\;=\ \boldsymbol{S}^{\,T}\,,
   \qquad\text{that is}\qquad
   \boldsymbol{S}^{\,T}\boldsymbol{S}\ =\ \boldsymbol{I}_n\,.

A matrix :math:`\,\boldsymbol{S}\in M_n(K)\ ` satisfying the condition :eq:`orth_mat` 
is called an :math:`\,` *orthogonal matrix*.

An example of an orthogonal matrix may be a matrix :math:`\,\boldsymbol{S}\,` 
representating rotation of the basis :math:`\,\mathcal{B}=(\vec{e}_1,\,\vec{e}_2,\,\vec{e}_3)\ ` 
of 3-dimensional space of geometric vectors, where :math:`\,(\vec{e}_1,\,\vec{e}_2,\,\vec{e}_3)\ ` 
is a triple of mutually perpendicular unit vectors with right-handed coordinates.
Matrices of permutation are also orthogonal.

.. Innym przykładem mogą być macierze permutacji.
  
**Exercise.**

1. Justify that transition matrix :math:`\ \boldsymbol{S}\ ` from basis
   :math:`\,\mathcal{B}\ ` to :math:`\,\mathcal{B}'\ ` may be equivalently defined 
   as a matrix of a transition automorphism :math:`\,T\ ` 
   in the new basis :math:`\,\mathcal{B}':`
   
   .. math::
      
      \boldsymbol{S}\ :\,=\ M_{\mathcal{B}}(T)\ =\ M_{\mathcal{B}'}(T)\,.

2. Complete discussion leading to a formula :eq:`F_prim` by proving that
   for :math:`\,T\in\text{Aut}(V),\ ` we have

   .. math::
      
      M_{\mathcal{B}}(T^{-1})\ \ =\ \ [\,M_{\mathcal{B}}(T)\,]^{-1}\,.

Examples
~~~~~~~~

**Example 0.**

In the space :math:`\,R^4\,` find a transition matrix :

a. | from the canonical basis :math:`\ \mathcal{E}\,=\,
     (\boldsymbol{e}_1,\,\boldsymbol{e}_2,\,\boldsymbol{e}_3,\,\boldsymbol{e}_4)\ =\ 
     \left(\ 
     \left[\begin{array}{c} 1 \\ 0 \\ 0 \\ 0 \end{array}\right]\,,  
     \left[\begin{array}{c} 0 \\ 1 \\ 0 \\ 0 \end{array}\right]\,,
     \left[\begin{array}{c} 0 \\ 0 \\ 1 \\ 0 \end{array}\right]\,,
     \left[\begin{array}{c} 0 \\ 0 \\ 0 \\ 1 \end{array}\right]
     \ \right)`
   |
   | to :math:`\ \mathcal{F}\,=\,
     (\boldsymbol{f}_1,\,\boldsymbol{f}_2,\,\boldsymbol{f}_3,\,\boldsymbol{f}_4)\ =\ 
     \left(\ 
     \left[\begin{array}{r}  1 \\  2 \\ -1 \\ 0 \end{array}\right]\,,  
     \left[\begin{array}{r}  1 \\ -1 \\  1 \\ 1 \end{array}\right]\,,
     \left[\begin{array}{r} -1 \\  2 \\  1 \\ 1 \end{array}\right]\,,
     \left[\begin{array}{r} -1 \\ -1 \\  0 \\ 1 \end{array}\right]
     \ \right)\,.`

b. | from basis :math:`\,\mathcal{F}\,=\,
     (\boldsymbol{f}_1,\,\boldsymbol{f}_2,\,\boldsymbol{f}_3,\,\boldsymbol{f}_4)`
   | to :math:`\,\mathcal{G}\,=\,
     (\boldsymbol{g}_1,\,\boldsymbol{g}_2,\,\boldsymbol{g}_3,\,\boldsymbol{g}_4)\,=\,
     \left(\ 
     \left[\begin{array}{r}  2 \\ 1 \\ 0 \\ 1 \end{array}\right],  
     \left[\begin{array}{r}  0 \\ 1 \\ 2 \\ 2 \end{array}\right],
     \left[\begin{array}{r} -2 \\ 1 \\ 1 \\ 2 \end{array}\right],
     \left[\begin{array}{r}  1 \\ 3 \\ 1 \\ 2 \end{array}\right]
     \ \right).`

**Solution.**

We start with a matrix :math:`\,\boldsymbol{F}\ ` whose columns consist of 
vectors from a basis :math:`\,\mathcal{F}:`

.. math::
   
   \boldsymbol{F}\ :\,=\ 
   [\,\boldsymbol{f}_1\,|\,\boldsymbol{f}_2\,|\,\boldsymbol{f}_3\,|\,\boldsymbol{f}_4\,]\ =\ 
   \left[\begin{array}{rrrr}
          1 &  1 & -1 & -1 \\
          2 & -1 &  2 & -1 \\
         -1 &  1 &  1 &  0 \\
          0 &  1 &  1 &  1 \end{array}\right]\,.

The columns of transition matrix from the basis :math:`\,\mathcal{E}\,` to :math:`\,\mathcal{F}\,` consist of coordinates of the vectors from basis 
:math:`\ \mathcal{F}\ \,` in basis :math:`\ \mathcal{E}:`

.. math::
   
   \boldsymbol{S}_{\mathcal{E}\rightarrow\mathcal{F}}\ =\ 
   [\,I_{\mathcal{E}}(\boldsymbol{f}_1)\,|\,
      I_{\mathcal{E}}(\boldsymbol{f}_2)\,|\,
      I_{\mathcal{E}}(\boldsymbol{f}_3)\,|\,
      I_{\mathcal{E}}(\boldsymbol{f}_4)\,]\,.

Now recall that in the space :math:`\,R^4\ ` every vector is actually a column of its coordinates in the canonical basis:

.. math::
   
   I_{\mathcal{E}}(\boldsymbol{x})\ =\ \boldsymbol{x}\,,\qquad \boldsymbol{x}\in R^4\,.

Hence, the transition matrix we are looking for is simply given by

.. math::
   :label: S_EF
   
   \blacktriangleright\quad
   \boldsymbol{S}_{\mathcal{E}\rightarrow\mathcal{F}}\ =\   
   [\,\boldsymbol{f}_1\,|\,\boldsymbol{f}_2\,|\,\boldsymbol{f}_3\,|\,\boldsymbol{f}_4\,]\,=\,
   \boldsymbol{F}\ =\ 
   \left[\begin{array}{rrrr}
          1 &  1 & -1 & -1 \\
          2 & -1 &  2 & -1 \\
         -1 &  1 &  1 &  0 \\
          0 &  1 &  1 &  1 \end{array}\right]\,.

**Corollary** (generalisation).

In the space :math:`\,K^n\,` transition matrix from the canonical basis :math:`\ \mathcal{E}\ ` to a basis :math:`\,\mathcal{B}\ ` is equal to a matrix :math:`\,\boldsymbol{B}\ ` whose columns are vectors from the basis  :math:`\,\mathcal{B}\ ` (taken in the same order).

.. [\,\boldsymbol{f}_1\,|\,\boldsymbol{f}_2\,|\,\boldsymbol{f}_3\,|\,\boldsymbol{f}_4\,]\,=\,
   [\,\boldsymbol{g}_1\,|\,\boldsymbol{g}_2\,|\,\boldsymbol{g}_3\,|\,\boldsymbol{g}_4\,]\,=\,
   \boldsymbol{G}\ =\ 
   \left[\begin{array}{rrrr}
          2 & 0 & -2 & 1 \\
          1 & 1 &  1 & 3 \\
          0 & 2 &  1 & 1 \\
          1 & 2 &  2 & 2 \end{array}\right]\,.

To describe a transition :math:`\ \mathcal{F}\rightarrow\mathcal{G}\ ` it will be useful to have, apart from a matrix :math:`\,\boldsymbol{F},\ ` also the matrix

.. math::
   
   \boldsymbol{G}\ :\,=\ 
   [\,\boldsymbol{g}_1\,|\,\boldsymbol{g}_2\,|\,\boldsymbol{g}_3\,|\,\boldsymbol{g}_4\,]\ =\ 
   \left[\begin{array}{rrrr}
          2 & 0 & -2 & 1 \\
          1 & 1 &  1 & 3 \\
          0 & 2 &  1 & 1 \\
          1 & 2 &  2 & 2 \end{array}\right]\,.

By definition (see formula :eq:`base_0`), the :math:`\,j`-th column of the transition matrix 
:math:`\,\boldsymbol{S}_{\mathcal{F}\rightarrow\mathcal{G}}\equiv\boldsymbol{S}=
[\,s_{ij}\,]_{4\times 4}(R)\ `
from basis :math:`\ \mathcal{F}\ ` to :math:`\ \mathcal{G}\ ` is
equal to a column of coordinates (in basis :math:`\ \mathcal{F}\ `) of the :math:`\,j`-th vector from the basis :math:`\ \mathcal{G}:`

.. math::
   :label: S_4
   
   \boldsymbol{g}_j\ =\ \sum_{i\,=\,1}^4\ s_{ij}\:\boldsymbol{f}_i\,,\qquad j=1,2,3,4.

The relation :eq:`S_4` may be interpreted by the column rule of matrix multiplication:
the :math:`\,j`-th column of the matrix  :math:`\,\boldsymbol{G}\ ` is a linear combination
of columns of matrix :math:`\,\boldsymbol{F}\ ` with coordinates from the :math:`\,j`-th column of the matrix  :math:`\,\boldsymbol{S},\ \ j=1,2,3,4.\ ` This means that 

.. math::
   
   \boldsymbol{G}\ =\ \boldsymbol{F}\boldsymbol{S}\,.

The matrix :math:`\,\boldsymbol{F},\ ` composed of linearly independent columns
:math:`\ \boldsymbol{f}_1\,,\,\boldsymbol{f}_2\,,\,\boldsymbol{f}_3\,,\,\boldsymbol{f}_4\,,\ `
is nondegenerate: :math:`\ \det\,\boldsymbol{F}\neq 0,\ \,` and thus invertible. 
Hence, the transition matrix

.. math::
   :label: S_FG

   \blacktriangleright\quad   
   \boldsymbol{S}_{\mathcal{F}\rightarrow\mathcal{G}}\ =\ 
   \boldsymbol{F}^{-1}\,\boldsymbol{G}\,.

**Variant of a solution.**

Let :math:`\ T\in\text{Aut}(R^4)\ ` be an automorphism of transition from 
basis :math:`\ \mathcal{F}\ ` to :math:`\ \mathcal{G}.\ ` Then
a transition matrix we are looking for is a matrix of the automorphism :math:`\,T\,` 
in basis :math:`\,\mathcal{F}:\ \boldsymbol{S}_{\mathcal{F}\rightarrow\mathcal{G}}\equiv\boldsymbol{S}=
M_{\mathcal{F}}(T).\ ` Moreover, 

.. math::
   
   \boldsymbol{g}_j\,=\,T\,\boldsymbol{f}_j\,,
   \qquad\text{and so}\qquad
   \boldsymbol{g}_j\,=\,\boldsymbol{T}\cdot\boldsymbol{f}_j\,,
   \qquad j=1,2,3,4\,,

where :math:`\ \,\boldsymbol{T}:\,=M_{\mathcal{E}}(T)\ \,` 
is a matrix of automorphism :math:`\,T\ ` in the canonical basis. 
By the column rule of matrix multiplication, we state that vector equalities

.. math::
   
   \boldsymbol{g}_1\,=\,\boldsymbol{T}\cdot\boldsymbol{f}_1\,,\quad
   \boldsymbol{g}_2\,=\,\boldsymbol{T}\cdot\boldsymbol{f}_2\,,\quad
   \boldsymbol{g}_3\,=\,\boldsymbol{T}\cdot\boldsymbol{f}_3\,,\quad
   \boldsymbol{g}_4\,=\,\boldsymbol{T}\cdot\boldsymbol{f}_4\,,

imply an equality of matrices

.. math::
   
   [\,\boldsymbol{g}_1\,|\,\boldsymbol{g}_2\,|\,\boldsymbol{g}_3\,|\,\boldsymbol{g}_4\,]\ =\ 
   \boldsymbol{T}\,\cdot\,
   [\,\boldsymbol{f}_1\,|\,\boldsymbol{f}_2\,|\,\boldsymbol{f}_3\,|\,\boldsymbol{f}_4\,]\,,
   \qquad\text{that is}\qquad
   \boldsymbol{G}\ =\ \boldsymbol{T}\boldsymbol{F}\,.

Hence, :math:`\ \,\boldsymbol{T}\equiv M_{\mathcal{E}}(T)\ =\ \boldsymbol{G}\boldsymbol{F}^{-1}.\ \,`
The necessary matrix :math:`\,\boldsymbol{S}\equiv M_{\mathcal{F}}(T)\ ` may be calculated from the formula 

.. math::
   
   M_{\mathcal{F}}(T)\ =\ \boldsymbol{S}_{\mathcal{E}\rightarrow\mathcal{F}}^{-1}\,\cdot\, 
                          M_{\mathcal{E}}(T)\,\cdot\,
                          \boldsymbol{S}_{\mathcal{E}\rightarrow\mathcal{F}}\,.

However, as we showed earlier (equation :eq:`S_EF`):
:math:`\ \,\boldsymbol{S}_{\mathcal{E}\rightarrow\mathcal{F}}=\boldsymbol{F},\ \,` and thus

.. math::
   
   \boldsymbol{S}_{\mathcal{F}\rightarrow\mathcal{G}}\ =\ 
   \boldsymbol{F}^{-1}\,(\boldsymbol{G}\boldsymbol{F}^{-1})\,\boldsymbol{F}\ =\ 
   \boldsymbol{F}^{-1}\,\boldsymbol{G}\,.

To check correctness of the solution :eq:`S_FG`, let us consider a particular case when the basis :math:`\ \mathcal{F}\ \,` is the canonical basis: :math:`\ \mathcal{F}=\mathcal{E}.\ \,`
Then :math:`\ \boldsymbol{F}=\boldsymbol{I}_4,\ \ ` and so we get a formula
:math:`\ \boldsymbol{S}_{\mathcal{E}\rightarrow\mathcal{G}}\ =\ \boldsymbol{G}\ `
which is consistent (under different notation) with a previous result :eq:`S_EF`.

.. .. math::
   
   \boldsymbol{S}_{\mathcal{E}\rightarrow\mathcal{G}}\ =\ \boldsymbol{G}\,,

Now, turning to calculations, we have to find product of matrices

.. math::
   
   \boldsymbol{F}^{-1}\,\boldsymbol{G}\ =\ 
      \left[\begin{array}{rrrr}
          1 &  1 & -1 & -1 \\
          2 & -1 &  2 & -1 \\
         -1 &  1 &  1 &  0 \\
          0 &  1 &  1 &  1 \end{array}\right]^{-1}
   \left[\begin{array}{rrrr}
          2 & 0 & -2 & 1 \\
          1 & 1 &  1 & 3 \\
          0 & 2 &  1 & 1 \\
          1 & 2 &  2 & 2 \end{array}\right]\,.

Computer calculations are the following:

.. code-block:: python

   sage: F = matrix(QQ,[[ 1, 1,-1,-1],
                        [ 2,-1, 2,-1],
                        [-1, 1, 1, 0],
                        [ 0, 1, 1, 1]])
   
   sage: G = matrix(QQ,[[ 2, 0,-2, 1],
                        [ 1, 1, 1, 3],
                        [ 0, 2, 1, 1],
                        [ 1, 2, 2, 2]])
   
   sage: F.I*G
   
   [1 0 0 1]
   [1 1 0 1]
   [0 1 1 1]
   [0 0 1 0]

**Example 1.**

In 4-dimensional space :math:`\,V(R)\ ` with basis :math:`\,\mathcal{B}=(v_1,\,v_2,\,v_3,\,v_4),\ ` the vector :math:`\,v\ ` has coordinates
:math:`\ 2,\ -3,\ 0,\ 4.\ ` What are its coordinates in basis :math:`\,\mathcal{B}'=(v_1',\,v_2',\,v_3',\,v_4'),\ `
where

.. math::
   
   v_1'\,=\,-\ v_1\,,\quad v_2'\,=\,2\,v_1-\,v_3\,,\quad v_3'\,=\,v_1+\,v_2-\,v_3-\,2\,v_4\,,\quad
   v_4'\,=\,v_2-\,v_3+\,v_4\quad ?

**Solution.** :math:`\,` 
The starting point is the Rule 1. which describes transformation of vector coordinates:

.. math::
   
   I_{\mathcal{B}'}(v)\ \ =\ \ \boldsymbol{S}^{-1}\,\cdot\,I_{\mathcal{B}}(v)\,.

The transition matrix :math:`\,\boldsymbol{S}\ ` may be determined from a relation between vectors from the old and the new basis:

.. math::
   :nowrap:

   \begin{alignat*}{5}
   v_1' & {\ } = {\ } & -\ v_1 &             &     &             &     &                      \\
   v_2' & {\ } = {\ } & 2\,v_1 &             &     & {\,} - {\;} & v_3 &                      \\
   v_3' & {\ } = {\ } &    v_1 & {\,} + {\;} & v_2 & {\,} - {\;} & v_3 & {\,} - {\;} & 2\,v_4 \\
   v_4' & {\ } = {\ } &        &             & v_2 & {\,} - {\;} & v_3 & {\,} + {\;} &    v_4
   \end{alignat*}

Namely, by Corollary 1. stated after definition of transition matrix 
(equation :eq:`S_col`) : 

.. math::
 
   \boldsymbol{S}
   \ \ =\ \ 
   \left[\begin{array}{rrrr} -1 &  2 &  1 &  0 \\
                              0 &  0 &  1 &  1 \\
                              0 & -1 & -1 & -1 \\
                              0 &  0 & -2 &  1 \end{array}\right]\,.

For our vector :math:`v`:
:math:`\quad I_{\mathcal{B}}(v)\ =\ \left[\begin{array}{r} 2 \\ -3 \\ 0 \\ 4 \end{array}\right]\, .\quad`
If we denote
:math:`\quad I_{\mathcal{B}'}(v)\ =\ \left[\begin{array}{r} a_1' \\ a_2' \\ a_3' \\ a_4' \end{array}\right] ,\quad`
then

.. math::
   :label: ex_1
   
   \left[\begin{array}{r} a_1' \\ a_2' \\ a_3' \\ a_4' \end{array}\right]\quad=\quad
   \left[\begin{array}{rrrr} -1 &  2 &  1 &  0 \\
                              0 &  0 &  1 &  1 \\
                              0 & -1 & -1 & -1 \\
                              0 &  0 & -2 &  1 \end{array}\right]^{-1}\cdot\quad
   \left[\begin{array}{r} 2 \\ -3 \\ 0 \\ 4 \end{array}\right]\,.

Further calculations may be done in two ways. :math:`\\`
 
**Method 1.** :math:`\,` By direct calculation of an inverse of the matrix :math:`\,\boldsymbol{S}.`

Matrix :math:`\,\boldsymbol{S}^{-1}\ ` may be calculated by hand from the formula 

.. math::
   
   (\boldsymbol{S}^{-1})_{ij}\ \,=\ \ \frac{1}{\det\boldsymbol{S}}\ \ S_{ji}\,,\qquad
   i,j=1,2,\dots,n\,,

where :math:`\,S_{ij}\,` is an algebraic complement of the element :math:`\,s_{ij}\,`
of the matrix :math:`\,\boldsymbol{S},\ \\`
or by a computer, using functions provided by Sage. :math:`\\`

In the second case, after computation of the matrix :math:`\,\boldsymbol{S}^{-1}\ `
we can perform matrix multipliction on the right hand side of the equation :eq:`ex_1` straight away. The result is a column of coordinates of the vector :math:`\,v\,`
in basis :math:`\,\mathcal{B}'.`

.. code-block:: python
   
   sage: S = matrix(QQ,[[-1, 2, 1, 0],
                        [ 0, 0, 1, 1],
                        [ 0,-1,-1,-1],
                        [ 0, 0,-2, 1]])
   
   # Inverse of the matrix S:
   sage: S_1 = S.I
   
   # Column of coordinates of the vector v in basis B:
   sage: I_B = vector(QQ,[2,-3,0,4]).column()
   
   sage: table([[S_1,'*',I_B,'=',S_1*I_B]])

.. math::
   :label: calc_comp
   
   \textstyle
   \left(\begin{array}{rrrr}
   -1 & -\frac{5}{3} & -2 & -\frac{1}{3} \\
    0 & -1           & -1 & 0            \\
    0 & \frac{1}{3}  &  0 & -\frac{1}{3} \\
    0 & \frac{2}{3}  &  0 & \frac{1}{3}
   \end{array}\right)
   \quad\ast\quad
   \left(\begin{array}{r} 2 \\ -3 \\ 0 \\ 4 \end{array}\right)
   \quad=\quad
   \left(\begin{array}{r} \frac{5}{3} \\ 3 \\ -\frac{7}{3} \\ -\frac{2}{3} \end{array}\right)

For clear presentation of vectors and numerical elements of the matrix, the calculations have been done in a field :math:`\,Q\,` of rational numbers.

**Answer.** :math:`\,` 
The coordinates of the vector :math:`\,v\ ` in basis :math:`\,\mathcal{B}'\ ` are:
:math:`\textstyle\quad\frac{5}{3}\,,\ \ \ 3\,,\ \ -\ \frac{7}{3}\,,\ \ -\ \frac{2}{3}\,. \\`

**Method 2.** :math:`\,` 
Instead of direct computation of the matrix :math:`\,\boldsymbol{S}^{-1},\ ` we may invert the relations

.. math::
   :nowrap:

   \begin{alignat*}{6}
   v_1' & {\ } = {\ } & Tv_1 & {\ \,} = {\ \,} & -\ v_1 &             &     &             &     &                      \\
   v_2' & {\ } = {\ } & Tv_2 & {\ \,} = {\ \,} & 2\ v_1 &             &     & {\,} - {\;} & v_3 &                      \\
   v_3' & {\ } = {\ } & Tv_3 & {\ \,} = {\ \,} &    v_1 & {\,} + {\;} & v_2 & {\,} - {\;} & v_3 & {\,} - {\;} & 2\ v_4 \\
   v_4' & {\ } = {\ } & Tv_4 & {\ \,} = {\ \,} &        &             & v_2 & {\,} - {\;} & v_3 & {\,} + {\;} &    v_4
   \end{alignat*}

After simple elementary calculations we obtain the formulae 

.. math::
   :nowrap:

   \begin{alignat*}{6}
   v_1 & {\ } = {\ } & T^{-1}\,v_1' & {\ \,} = {\ \,} & -\ v_1'                        &             &      &             &                             &                                           \\
   v_2 & {\ } = {\ } & T^{-1}\,v_2' & {\ \,} = {\ \,} & -\ \textstyle\frac{5}{3}\ v_1' & {\,} - {\;} & v_2' & {\,} + {\;} & \textstyle\frac{1}{3}\ v_3' & {\,} + {\;} & \textstyle\frac{2}{3}\ v_4' \\
   v_3 & {\ } = {\ } & T^{-1}\,v_3' & {\ \,} = {\ \,} & -\ 2\ v_1'                     & {\,} - {\;} & v_2' &             &                             &                                           \\
   v_4 & {\ } = {\ } & T^{-1}\,v_4' & {\ \,} = {\ \,} & -\ \textstyle\frac{1}{3}\ v_1' &             &      & {\,} - {\;} & \textstyle\frac{1}{3}\ v_3' & {\,} + {\;} & \textstyle\frac{1}{3}\ v_4'
   \end{alignat*}

which allow us to write down a matrix of the automorphism :math:`\,T^{-1}\ `
in basis :math:`\,\mathcal{B}':`

.. math::
   :label: MB_prim_T_1
   
   M_{\mathcal{B}'}(T^{-1})\ \ =\ \ \textstyle
   \left[\begin{array}{rrrr}
         -1 & -\frac{5}{3} & -2 & -\frac{1}{3} \\
          0 & -1           & -1 &   0          \\ 
          0 &  \frac{1}{3} &  0 & -\frac{1}{3} \\
          0 &  \frac{2}{3} &  0 &  \frac{1}{3}
         \end{array}\right]\,.

We are rather interested in matrix :math:`\ \boldsymbol{S}^{-1}=[\,M_{\mathcal{B}}(T)\,]^{-1},\ \,`
but according to the Rule 2.:

.. math::
   
   M_{\mathcal{B}'}(T^{-1})\ \,=\ \,
   \boldsymbol{S}^{-1}\cdot M_{\mathcal{B}}(T^{-1})\cdot\boldsymbol{S}\ \,=\ \,
   \boldsymbol{S}^{-1}\cdot [\,M_{\mathcal{B}}(T)\,]^{-1}\cdot\boldsymbol{S}\ \,=\ \,
   \boldsymbol{S}^{-1}\cdot\boldsymbol{S}^{-1}\cdot\boldsymbol{S}\ \,=\ \,\boldsymbol{S}^{-1}\,.

The equation :eq:`MB_prim_T_1` gives us then the matrix :math:`\ \boldsymbol{S}^{-1},\ `
which further leads to the result :eq:`calc_comp`.

.. a rozwiązanie przykładu daje wzór :eq:`calc_comp`.

**Variant of a solution.** :math:`\,`

The relation :eq:`trans_coord` between coordinates of a vector in the new and the old basis,
written in a form

.. math::
   
   \boldsymbol{S}\cdot I_{\mathcal{B}'}(v)\ =\  I_{\mathcal{B}}(v)
   \qquad\text{that is}\qquad
   \left[\begin{array}{rrrr} -1 &  2 &  1 &  0 \\
                              0 &  0 &  1 &  1 \\
                              0 & -1 & -1 & -1 \\
                              0 &  0 & -2 &  1 \end{array}\right]
   \left[\begin{array}{r} a_1' \\ a_2' \\ a_3' \\ a_4' \end{array}\right]\ =\ 
   \left[\begin{array}{r} 2 \\ -3 \\ 0 \\ 4 \end{array}\right]

gives Cramer system of equations

.. math::
   :nowrap:
   
   \begin{alignat*}{5}
   -\ a_1' & {\,} + {\,} & 2\,a_2' & {\,} + {\,} &    a_3' &             &      & {\;} = {} &  2 \\
           &             &         &             &    a_3' & {\,} + {\,} & a_4' & {\;} = {} & -3 \\
           & {\,} - {\,} &    a_2' & {\,} - {\,} &    a_3' & {\,} - {\,} & a_4' & {\;} = {} &  0 \\
           &             &         & {\,} - {\,} & 2\,a_3' & {\,} + {\,} & a_4' & {\;} = {} &  4
   \end{alignat*}

which may be solved by hand or by computer, using functions provided by Sage:

.. code-block:: python
   
   sage: S = matrix(QQ,[[-1, 2, 1, 0],
                        [ 0, 0, 1, 1],
                        [ 0,-1,-1,-1],
                        [ 0, 0,-2, 1]])

   sage: I_B = vector(QQ,[2,-3,0,4]) # vector of constants
   
   sage: S \ I_B

   (5/3, 3, -7/3, -2/3)

:math:`\;`

**Example 2.**

In basis :math:`\,\mathcal{B}=(v_1,\,v_2,\,v_3)\ ` of the vector space 
:math:`\,V(R)\ ` an operator :math:`\,F\in\text{End}(V)\ ` has a matrix

.. math::
   
   \boldsymbol{F}\ =\ 
   \left[\begin{array}{rrr}
         3 & -2 & -1 \\
         2 &  1 & -3 \\
         1 &  3 &  2 \end{array}\right]\,.

Find a matrix :math:`\,\boldsymbol{F}'\ ` of this operator in basis
:math:`\,\mathcal{B}'=(v_1',\,v_2',\,v_3'):\,=(v_3,\,v_2,\,v_1).`

**Solution.**

**Method 1.** (direct) :math:`\,` 

By definition of matrices :math:`\,\boldsymbol{F}=[\,f_{ij}\,]_{3\times 3}\ ` and
:math:`\,\boldsymbol{F}'=[\,f_{ij}'\,]_{3\times 3}\ ` of the operator :math:`\,F\ `
in bases :math:`\,\mathcal{B}\ ` and :math:`\,\mathcal{B}':`

.. math::
   
   Fv_j\,=\ f_{1j}\,v_1+\,f_{2j}\,v_2+\,f_{3j}\,v_3\,,
   \qquad
   Fv_j'\,=\ f_{1j}'\,v_1'+\,f_{2j}'\,v_2'+\,f_{3j}'\,v_3'\,,
   \qquad j=1,2,3,

and by relations :math:`\, v_1'=v_3,\, v_2'=v_2,\, v_3'=v_1,` 

.. math::
   
   \begin{array}{l}
   Fv_1\,=\quad 3\,v_1+\,2\,v_2+\,1\,v_3 \\
   Fv_2\,=\  -2\,v_1+\,1\,v_2+\,3\,v_3 \\
   Fv_3\,=\  -1\,v_1-\,3\,v_2+\,2\,v_3\,,
   \end{array}
   \qquad\qquad
   \begin{array}{l}
   Fv_1'\,=\ 2\,v_1'-\,3\,v_2'-\,1\,v_3' \\
   Fv_2'\,=\ 3\,v_1'+\,1\,v_2'-\,2\,v_3' \\
   Fv_3'\,=\ 1\,v_1'+\,2\,v_2'+\,3\,v_3'\,.
   \end{array}

The second system of equations provides:

.. math::
   
   \boldsymbol{F}'\ =\ 
   \left[\begin{array}{rrr}
          2 &  3 & 1 \\
         -3 &  1 & 2 \\
         -1 & -2 & 3 \end{array}\right]\,.

**Method 2.** (standard)

We use the Rule 2. describing transformation of a matrix of a linear operator (formula :eq:`F_prim`):

.. math::
   :label: F_prim_bis
   
   \boldsymbol{F}'\ =\ \boldsymbol{S}^{-1}\,\boldsymbol{F}\ \boldsymbol{S}\,,

where :math:`\,\boldsymbol{S}\ ` is a transition matrix
from basis :math:`\,\mathcal{B}=(v_1,\,v_2,\,v_3)\ `
to :math:`\,\mathcal{B}'=(v_3,\,v_2,\,v_1).`

Relations between vectors from the new and the old basis

.. math::
   
   \begin{array}{l}
   v_1'\,=\ 0\,v_1+\,0\,v_2+\,1\,v_3 \\
   v_2'\,=\ 0\,v_1+\,1\,v_2+\,0\,v_3 \\
   v_3'\,=\ 1\,v_1+\,0\,v_2+\,0\,v_3
   \end{array}
   \qquad\text{lead to}\qquad
   \boldsymbol{S}\ =\ 
   \left[\begin{array}{ccc} 0 & 0 & 1 \\ 
                            0 & 1 & 0 \\ 
                            1 & 0 & 0 \end{array}\right]\,.

Instead of direct computation of the matrix :math:`\,\boldsymbol{S}^{-1}\ `
note that the transition automorphism :math:`\,T,\ ` which maps 
vectors from basis :math:`\,\mathcal{B}\ ` to the corresponding vectors from the basis
:math:`\,\mathcal{B}':\ \ Tv_i=v_i',\ \ i=1,2,3,\ \ `
satisfies a condition :math:`\,T^2=I,\ ` where :math:`\,I\ ` is an identity mapping:

.. math::
   
   \begin{array}{l} Tv_1=v_3 \\ Tv_2=v_2 \\ Tv_3=v_1 \end{array}
   \qquad\Rightarrow\qquad
   \begin{array}{l}
   T^2\,v_1=\,Tv_3=\,v_1=\,I\,v_1 \\ T^2\,v_2=\,Tv_2=\,v_2=\,I\,v_2 \\ T^2\,v_3=\,Tv_1=\,v_3=\,I\,v_3
   \end{array}

By multiplicativity of matrix representation of linear operators, it follows taht the analogous property has transition matrix: :math:`\ \boldsymbol{S}^2\ =\ \boldsymbol{I}_3,\ \,` and thus :math:`\ \boldsymbol{S}^{-1}=\,\boldsymbol{S}.`

We substitute these matrices to the formula :eq:`F_prim_bis`. :math:`\\`

.. code-block:: python

   sage: F = matrix(QQ,[[3, -2, -1],
                        [2,  1, -3],
                        [1,  3,  2]])

   sage: S = matrix(QQ,[[0,  0,  1],
                        [0,  1,  0],
                        [1,  0,  0]])

   sage: F_1 = S*F*S
   
   sage: table([[S, '*', F, '*', S, '=', F_1]])

.. math::
   
   \left(\begin{array}{ccc} 0 & 0 & 1 \\ 
                            0 & 1 & 0 \\ 
                            1 & 0 & 0 \end{array}\right)
   \ \ast\ 
   \left(\begin{array}{rrr} 3 & -2 & -1 \\
                            2 &  1 & -3 \\
                            1 &  3 &  2 \end{array}\right)
   \ \ast\ 
   \left(\begin{array}{ccc} 0 & 0 & 1 \\ 
                            0 & 1 & 0 \\ 
                            1 & 0 & 0 \end{array}\right)
   \ =\ 
   \left(\begin{array}{rrr}
          2 &  3 & 1 \\
         -3 &  1 & 2 \\
         -1 & -2 & 3 \end{array}\right)\,.
   
:math:`\\`







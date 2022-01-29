
Matrix Representation of Linear Transformations
-----------------------------------------------

Before we develop a general theory, we employ a simple example to present 
a connection between linear transformations and matrices.

Introduction
~~~~~~~~~~~~

Consider a mapping :math:`\ F:\,R^3\rightarrow R^2\ ` given by the formula

.. math::
   :label: ex_0
   
   F\left[\begin{array}{c} a_1 \\ a_2 \\ a_3 \end{array}\right]\ :\,=\ 
   \left[\begin{array}{c} 2\,a_1+\,a_2-\,a_3 \\ 4\,a_1-\,2\,a_2+\,4\,a_3 \end{array}\right]\,.

To see that :math:`\,F\,` is a linear transformation, one can write the right 
hand side of the equation :eq:`ex_0` as a product of two matrices:

.. math::
   
   F\left[\begin{array}{c} a_1 \\ a_2 \\ a_3 \end{array}\right]\ =\ 
   \left[\begin{array}{rrr} 2 &  1 & -1 \\ 
                            4 & -2 &  4 \end{array}\right]
   \left[\begin{array}{c} a_1 \\ a_2 \\ a_3 \end{array}\right]\,.

Now additivity and homogenity of the mapping :math:`\,F\,` follows from 
the properties of matrix operations.

In this natural way, we associated the mapping :math:`\,F\in\text{Hom}(R^3,R^2)\ ` with the matrix

.. math::
   
   M(F)\ =\ 
   \left[\begin{array}{rrr} 2 &  1 & -1 \\ 
                            4 & -2 &  4 \end{array}\right]
   \in M_{2\times 3}(R)\,.

Thanks to this matrix, the problem of determination of the image of a vector 
:math:`\,\boldsymbol{x}\in R^3\ ` under transformation :math:`\,F\,` boils down to matrix multiplication:

.. math::
   
   F(\boldsymbol{x})\ =\ M(F)\cdot \boldsymbol{x}\,,\qquad \boldsymbol{x}\in R^3\,.

Let :math:`\ \boldsymbol{e}_1,\,\boldsymbol{e}_2,\,\boldsymbol{e}_3\ ` 
be vectors from the canonical basis of the space :math:`\,R^3.\ `
Note that :math:`\\`

.. math::

   \begin{array}{l}   
   F\boldsymbol{e}_1\ =\ F
   \left[\begin{array}{c} 1 \\ 0 \\ 0 \end{array}\right]\ =\ 
   \left[\begin{array}{rrr} 2 &  1 & -1 \\ 
                            4 & -2 &  4 \end{array}\right]
   \left[\begin{array}{c} 1 \\ 0 \\ 0 \end{array}\right]\ =\ 
   \left[\begin{array}{c} 2 \\ 4 \end{array}\right]\,,
   \\ \\
   F\boldsymbol{e}_2\ =\ F
   \left[\begin{array}{c} 0 \\ 1 \\ 0 \end{array}\right]\ =\ 
   \left[\begin{array}{rrr} 2 &  1 & -1 \\ 
                            4 & -2 &  4 \end{array}\right]
   \left[\begin{array}{c} 0 \\ 1 \\ 0 \end{array}\right]\ =\ 
   \left[\begin{array}{r} 1 \\ -2 \end{array}\right]\,,
   \\ \\
   F\boldsymbol{e}_3\ =\ F
   \left[\begin{array}{c} 0 \\ 0 \\ 1 \end{array}\right]\ =\ 
   \left[\begin{array}{rrr} 2 &  1 & -1 \\ 
                            4 & -2 &  4 \end{array}\right]
   \left[\begin{array}{c} 0 \\ 0 \\ 1 \end{array}\right]\ =\ 
   \left[\begin{array}{r} -1 \\ 4 \end{array}\right]\,.
   \end{array}

   \;

As one can see, the matrix :math:`\ M(F)\ ` consists of columns which are the images 
of suitable vectors of the canonical basis of the space :math:`\ R^3:\ ` 
:math:`\ M(F)\ =\ [\,F\boldsymbol{e}_1\,|\,F\boldsymbol{e}_2\,|\,F\boldsymbol{e}_3\,]\,.`

.. Uogólnienie tego przykładu opiera się na stwierdzeniu, że każde przekształcenie liniowe 
   przestrzeni :math:`\,K^n\ ` w przestrzeń :math:`\,K^m\ ` ma postać :eq:`ex_0`,
   to znaczy współrzędne obrazu są jednorodnymi liniowymi funkcjami współrzędnych argumentu.

More generally, one can associate a linear mapping :math:`\,F\in\text{Hom}(K^n,K^m)\ ` 
with the matrix whose :math:`\,j`-th column is the image of the :math:`\,j`-th vector 
from the canonical basis of the space :math:`\ K^n\,,\ \ j=1,2,\dots,n.\ `

Such defined mapping :math:`\,M\,` from the space of linear transformations 
:math:`\ \text{Hom}(K^n,K^m)\ ` into the space :math:`\ M_{m\times n}(K)\ ` of 
rectangular matrices may be written as follows:

.. math::
   :label: intro
   
   M:\quad \text{Hom}(K^n,K^m)\,\ni\,F
   \ \ \rightarrow\ \ 
   M(F)\,:\,=\,[\,F\boldsymbol{e}_1\,|\,\dots\,|\,F\boldsymbol{e}_n\,]\,\in\,M_{m\times n}(K)\,,

where :math:`\ \mathcal{E}=(\boldsymbol{e}_1,\,\dots,\,\boldsymbol{e}_n)\ \,` 
denotes the canonical basis of the space :math:`\,K^n.\ ` Then the image of any vector
:math:`\,\boldsymbol{x}\in K^n\ ` may be obtained by multiplication of this vector 
(on the left hand side) by the matrix :math:`\,M(F):`

.. math::
   
   \boldsymbol{y}\,=\,F(\boldsymbol{x})\quad\Rightarrow\quad \boldsymbol{y}\ =\ 
   M(F)\,\cdot\,\boldsymbol{x}\,,\qquad \boldsymbol{x}\in K^n\,,\ \ \boldsymbol{y}\in K^m\,.

.. W następnym uogólnieniu pokażemy, :math:`\,` jak przekształceniu liniowemu *dowolnych* 
   skończenie wymiarowych przestrzeni nad ciałem :math:`\,K,\ ` w których wybrano bazy, można
   przyporządkować macierz o elementach z :math:`\,K.`

We will generalise this further and define a matrix of linear transformation  
:math:`\ F:V\rightarrow W,\ ` where :math:`\ V\ ` and :math:`\ W\ ` 
are :math:`\,` *arbitrary* :math:`\,` finite dimensional vector spaces
over a field :math:`\ K\,,\ ` each with a chosen basis.

.. _`matrix_of_lin_trans`:

Matrix of a Linear Transformation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Consider two finite dimensional vector spaces over a field :math:`\,K:\ \\`
:math:`n`-dimensional space :math:`\,V\,` 
with a basis :math:`\ \mathcal{B}=(v_1,\,v_2,\,\dots,\,v_n)\,,\ \\`
:math:`m`-dimensional space :math:`\,W\,` 
with a basis :math:`\ \mathcal{C}=(w_1,\,w_2,\,\dots,\,w_m)\ \\`
and a linear transformation :math:`\,F\in\text{Hom}(V,W)\,.`

Images of the basis vectors from :math:`\ \mathcal{B}\ ` belong to the space :math:`\,W,\ `
and so may be written as linear combinations of vectors from the basis :math:`\ \mathcal{C}:`

.. .. math::
   :label: exps
   
   \begin{array}{l}
   Fv_1\ =\ a_{11}\,w_1\,+\ a_{21}\,w_2\,+\ \dots\ +\ a_{m1}\,w_m \\
   Fv_2\ =\ a_{12}\,w_1\,+\ a_{22}\,w_2\,+\ \dots\ +\ a_{m2}\,w_m \\
   \dots \\
   Fv_n\ =\ a_{1n}\,w_1\,+\ a_{2n}\,w_2\,+\ \dots\ +\ a_{mn}\,w_m
   \end{array}

.. math::
   :label: exps
   
   \begin{array}{l}
   Fv_1\ =\ f_{11}\,w_1\,+\ f_{21}\,w_2\,+\ \dots\ +\ f_{m1}\,w_m \\
   Fv_2\ =\ f_{12}\,w_1\,+\ f_{22}\,w_2\,+\ \dots\ +\ f_{m2}\,w_m \\
   \dots \\
   Fv_n\ =\ f_{1n}\,w_1\,+\ f_{2n}\,w_2\,+\ \dots\ +\ f_{mn}\,w_m
   \end{array}


A matrix :math:`\ \boldsymbol{F}=[\,f_{ij}\,]_{m\times n}(K)\ `
obtained in such a way is :math:`\,` *by definition* :math:`\,` a 
matrix :math:`\,M_{\mathcal{B}\mathcal{C}}(F)\ `
of a linear transformation :math:`\ F\ ` in bases 
:math:`\ \mathcal{B}\ \,` and :math:`\, \ \mathcal{C}:`

.. .. math::
   
   M_{\mathcal{B}\mathcal{C}}(F)\ :\,=\ 
   \left[
   \begin{array}{cccc}
   a_{11} & a_{12} & \dots & a_{1n} \\
   a_{21} & a_{22} & \dots & a_{2n} \\
   \dots  & \dots  & \dots & \dots  \\
   a_{m1} & a_{m2} & \dots & a_{mn}
   \end{array}
   \right]\,.

.. math::
   
   M_{\mathcal{B}\mathcal{C}}(F)\ :\,=\ 
   \left[
   \begin{array}{cccc}
   f_{11} & f_{12} & \dots & f_{1n} \\
   f_{21} & f_{22} & \dots & f_{2n} \\
   \dots  & \dots  & \dots & \dots  \\
   f_{m1} & f_{m2} & \dots & f_{mn}
   \end{array}
   \right]\,.


Moreover, the entries :math:`\ f_{1j},\,f_{2j},\,\dots,\,f_{mj}\,\ `
from the :math:`\,j`-th column of the matrix :math:`\\` are coordinates of the vector
:math:`\ Fv_j\ ` in the basis :math:`\ \mathcal{C},\ \ j=1,2,\dots,n.\ `

.. Wynika stąd następująca 

.. admonition:: Definition. :math:`\\`
   
   Let :math:`\ \,V\ \,` and :math:`\, \ W\ \,` be two finte dimensional vector spaces 
   over a field :math:`\,K,\ `  
   :math:`\ \mathcal{B}=(v_1,\,v_2,\,\dots,\,v_n)\ ` a basis of the space
   :math:`\ \,V,\ `
   and :math:`\ \mathcal{C}=(w_1,\,w_2,\,\dots,\,w_m)\,` a basis of the space 
   :math:`\ W.\ \,` 
   Then the :math:`\ j`-th column of the matrix :math:`\ M_{\mathcal{B}\mathcal{C}}(F)\ ` 
   of a linear transformation :math:`\,F\in\text{Hom}(V,W)\ ` in bases 
   :math:`\ \mathcal{B}\ ` and :math:`\ \mathcal{C}\ ` is a column of coordinates
   :math:`\,` (in the basis :math:`\ \mathcal{C}\,`)
   :math:`\,` of the image :math:`\,` - :math:`\,` under the transformation 
   :math:`\,F\ ` :math:`\,` - :math:`\,` of the 
   :math:`\ j`-th vector from the basis :math:`\ \mathcal{B}\quad (j=1,2,\dots,n).`

   Hence, :math:`\ \,M_{\mathcal{B}\mathcal{C}}(F)\ =\ \,[\,f_{ij}\,]_{m\times n}\,,\ \,`
   where the entries :math:`\ f_{ij}\ ` are defined by relations 
   
   .. math::
      
      Fv_j\;=\ \sum_{i\,=\,1}^m\ f_{ij}\ w_i\,,\qquad j=1,2,\dots,n\,.

**Example.**

We discuss an operation of differentiation defined on a set of real polynomials.

Let :math:`\,V\ ` be a vector space of polynomials in one variable :math:`\,x\ `
of degree (not greater than) :math:`\,n,\ \,` and :math:`\ \,W\ \ ` a space of 
such polynomials of degree (not greater than) :math:`\ n-1:`

.. math::
   
   V\ =\ \{\,a_0\,+\,a_1\,x\,+\,a_2\,x^2\,+\,a_3\,x^3\,+\,\ldots\,+\,a_n\,x^n:
   \quad a_i\in R\,,\quad i=0,1,\dots,n\,\}\,,

   
   W\ =\ \{\,b_0\,+\,b_1\,x\,+\,b_2\,x^2\,+\,\ldots\,+\,b_{n-1}\,x^{n-1}:
   \quad b_i\in R\,,\quad i=0,1,\dots,n-1\,\}\,.

:math:`\dim\,V=\,n+1\,,\ \ \mathcal{B}\,=\,(1,\,x,\,x^2,\,x^3,\,\dots,\,x^n)\,;\quad 
\dim\,W=\,n\,,\ \ \mathcal{C}\,=\,(1,\,x,\,x^2,\,\dots,\,x^{n-1})\,.`

.. \begin{array}{lcl}
   \dim\,V\,=\,n+1\,, & \qquad & \text{baza:}\quad 
                                 \mathcal{B}\,=\,(1,\,x,\,x^2,\,x^3,\,\dots,\,x^n)\,, \\
   \dim\,w\,=\,n\,,   & \qquad & \text{baza:}\quad 
                                 \mathcal{C}\,=\,(1,\,x,\,x^2,\,\dots,\,x^{n-1})\,.
   \end{array}

A differential operator :math:`\ D\equiv {d\over dx}\ ` transforms the space 
:math:`\,V\ ` linearly into the space :math:`\,W.` To determine a matrix of this operation 
in bases :math:`\,\mathcal{B}\,` and :math:`\,\mathcal{C} ,\,` we write decompositions 
:eq:`exps` of images of the consecutive vectors from the basis 
:math:`\,\mathcal{B}\,` in the basis :math:`\, \mathcal{C}:`

.. math::
   :nowrap:
   
   \begin{alignat*}{7}
   D\,1\:\  & {\,} = {\,} & 0          & {\quad} = {\quad} & 0\cdot 1 & {\ } + {\ } & 0\cdot x & {\ } + {\ } & 0\cdot x^2 & {\ } + {\ } & \dots & {\ } + {\ } & 0\cdot x^{n-1} \\ 
   D\,x\,\  & {\,} = {\,} & 1          & {\quad} = {\quad} & 1\cdot 1 & {\ } + {\ } & 0\cdot x & {\ } + {\ } & 0\cdot x^2 & {\ } + {\ } & \dots & {\ } + {\ } & 0\cdot x^{n-1} \\
   D\,x^2 & {\,} = {\,} & 2\,x       & {\quad} = {\quad} & 0\cdot 1 & {\ } + {\ } & 2\cdot x & {\ } + {\ } & 0\cdot x^2 & {\ } + {\ } & \dots & {\ } + {\ } & 0\cdot x^{n-1} \\
   D\,x^3 & {\,} = {\,} & 3\,x^2     & {\quad} = {\quad} & 0\cdot 1 & {\ } + {\ } & 0\cdot x & {\ } + {\ } & 3\cdot x^2 & {\ } + {\ } & \dots & {\ } + {\ } & 0\cdot x^{n-1} \\
   \dots  & {\,}   {\,} & \dots      & {\quad}   {\quad} & \dots    & {\ }   {\ } & \dots    & {\ }   {\ } & \dots      & {\ }   {\ } & \dots & {\ }   {\ } & \dots          \\   
   D\,x^n & {\,} = {\,} & n\,x^{n-1} & {\quad} = {\quad} & 0\cdot 1 & {\ } + {\ } & 0\cdot x & {\ } + {\ } & 0\cdot x^2 & {\ } + {\ } & \dots & {\ } + {\ } & n\cdot x^{n-1} 
   \end{alignat*}

.. math::
   :label: MBC_D

   M_{\mathcal{B}\mathcal{C}}(D)\ =\ 
   \left[
   \begin{array}{cccccc}
     0   &   1   &   0   &   0   & \dots &   0   \\
     0   &   0   &   2   &   0   & \dots &   0   \\
     0   &   0   &   0   &   3   & \dots &   0   \\ 
   \dots & \dots & \dots & \dots & \dots & \dots \\
     0   &   0   &   0   &   0   & \dots &   n
   \end{array}
   \right]\ 
   \in\,M_{n\times (n+1)}(R)\,.

   \;

We introduce further notation in order to write clearly a matrix 
:math:`\,M_{\mathcal{B}\mathcal{C}}(F)\,` in a column form.
Corollary to Theorem 8. implies that :math:`\,n`-dimensional space :math:`\,V\ `
is isomorphic to the space :math:`\,K^n,\,` and :math:`\, m`-dimensional space
:math:`\,W\ ` is isomorphic to the space :math:`\ K^m:\quad
V\,\simeq\,K^n\,,\qquad W\,\simeq\,K^m\,.`

.. .. math::

   V\,\simeq\,K^n\,,\qquad W\,\simeq\,K^m\,.

For the spaces :math:`\,V\,` and :math:`\, W\ ` we fixed the bases

.. math::
   
   \mathcal{B}=(v_1,\,v_2,\,\dots,\,v_n)
   \qquad\text{and}\qquad
   \mathcal{C}=(w_1,\,w_2,\,\dots,\,w_m)\,.

Let

.. math::
   
   \mathcal{E}\,=\,(e_1,\,e_2,\,\dots,\,e_n)
   \qquad\text{and}\qquad
   \mathcal{F}\,=\,(f_1,\,f_2,\,\dots,\,f_m)

be the canonical bases of the spaces :math:`\,K^n\ \,` and :math:`\, K^m.`

Then the mappings :math:`\ I_{\mathcal{B}}:\,V\rightarrow K^n \,` and :math:`\, 
I_{\mathcal{C}}:\,W\rightarrow K^m\,`
defined by fixing the images on the basis vectors (for the basis 
:math:`\,\mathcal{B}\ ` or :math:`\ \mathcal{C}\,` respectively):

.. określone wzorami

.. math::
   
   I_{\mathcal{B}}(v_j)\ :\,=\ e_j\,,\quad j=1,2,\dots,n\,,
   \qquad
   I_{\mathcal{C}}(w_i)\ :\,=\ f_i\,,\quad i=1,2,\dots,m\,,

are examples of isomorphisms: 
:math:`\ I_{\mathcal{B}}\in\text{Iso}(V,K^n)\,,\ \,I_{\mathcal{C}}\in\text{Iso}(W,K^m)\,.`

.. Odwzorowania :math:`\ I_{\mathcal{B}}\ \ \text{oraz}\ \ I_{\mathcal{C}}\ \,` 
   zostały określone poprzez zadanie obrazów wektorów bazy, odpowiednio 
   bazy :math:`\ \mathcal{B}\ \,` albo bazy :math:`\ \,\mathcal{C}.`

For any vectors :math:`\displaystyle\quad v\,=\,\sum_{j\,=\,1}^n\ a_j\,v_j\,\in V\,,\quad
w\,=\,\sum_{i\,=\,1}^m\ b_i\,w_i\,\in W\,:`

.. math::
   
   I_{\mathcal{B}}(v)\ =\ I_{\mathcal{B}}\,\left(\,\sum_{j\,=\,1}^n\ a_j\,v_j\right)\ =\ 
   \sum_{j\,=\,1}^n\ a_j\,I_{\mathcal{B}}(v_j)\ =\ 
   \sum_{j\,=\,1}^n\ a_j\,e_j\ =\ 
   \left[\begin{array}{c} a_1 \\ a_2 \\ \dots \\ a_n \end{array}\right]\,,

   I_{\mathcal{C}}(w)\ =\ I_{\mathcal{C}}\,\left(\,\sum_{i\,=\,1}^m\ b_i\,w_i\right)\ =\ 
   \sum_{i\,=\,1}^m\ b_i\,I_{\mathcal{C}}(w_i)\ =\ 
   \sum_{i\,=\,1}^m\ b_i\,f_i\ =\ 
   \left[\begin{array}{c} b_1 \\ b_2 \\ \dots \\ b_m \end{array}\right]\,.

Hence, the isomorphism :math:`\ I_{\mathcal{B}}\ `  transforms a vector :math:`\,v\in V\ `
into a column of the coordinates of this vector in a basis :math:`\ \mathcal{B},\ \,`
and :math:`\,` the isomorphism :math:`\ \,I_{\mathcal{C}}\ ` transforms a vector :math:`\,w\in W\ ` into a column of the coordinates of this vector in a basis
:math:`\ \mathcal{C}.\ ` A matrix of the linear transformation 
:math:`\ F\in\text{Hom}(V,W)\ ` in bases :math:`\ \mathcal{B}\ \,` and :math:`\,\mathcal{C}\ ` may be now written in a column form

.. math::
   
   M_{\mathcal{B}\mathcal{C}}(F)\ \,=\ \,
   \left[\;I_{\mathcal{C}}(Fv_1\,|\,I_{\mathcal{C}}(Fv_2\,|\ \dots\ |\,
   I_{\mathcal{C}}(Fv_n\,\right]\,.

Basic Theorems
~~~~~~~~~~~~~~

The purpose of introducing matrix representation of linear transformations explains 

.. admonition:: Theorem 10. :math:`\\`

   Let :math:`\ F\in\text{Hom}(V,W),\ ` where :math:`\,V \,` and :math:`\, W\,`
   are vector spaces over a field :math:`\,K\,` with bases :math:`\ \mathcal{B}\ \,`
   and :math:`\ \mathcal{C}.\ `
   If a vector :math:`\,w\in W\,` is an image of a vector :math:`\,v\in V\,`
   under the transformation :math:`\,F, \,` then the column of coordinates 
   (in a basis :math:`\,\mathcal{C}\,`)
   of the vector :math:`\ w\ ` is equal to a product of the transformation matrix of
   :math:`\,F\,` in bases :math:`\, \mathcal{B}\,` and :math:`\,\mathcal{C}\,` 
   and a column of coordinates (in a basis :math:`\,\mathcal{B}\,`) :math:`\,` 
   of the vector :math:`\,v:`
   
   .. math::
      :label: fund
      
      w\,=\,F(v)\qquad\Rightarrow\qquad   
      I_{\mathcal{C}}(w)\ =\ M_{\mathcal{B}\mathcal{C}}(F)\,\cdot\,I_{\mathcal{B}}(v)\,.

In this way, an abstract issue of finding an image of a vector :math:`\,v\ `
under a transformation :math:`\,F\ ` boils down to concrete calculation on matrices.

**Proof.** :math:`\,` We keep the above notation:

.. math::
   
   \mathcal{B}\,=\,(v_1,\,v_2,\,\dots,\,v_n)\,,\qquad\mathcal{C}\,=\,(w_1,\,w_2,\,\dots,\,w_m)\,,
   
   v\,=\,\sum_{j\,=\,1}^n\ a_j\,v_j\,,\quad
   w\,=\,\sum_{i\,=\,1}^m\ b_i\,w_i\,,\quad
   M_{\mathcal{B}\mathcal{C}}(F)\,=\,[\,f_{ij}\,]_{m\times n}\,.
   
Then

.. math::
   w\ =\ F(v)\ =\ F\,\left(\,\sum_{j\,=\,1}^n\ a_j\,v_j\right)\ \ =\ \ 
                             \sum_{j\,=\,1}^n\ a_j\,F(v_j)\ \ =

   =\ \  
   \sum_{j\,=\,1}^n\ a_j\,\left(\,\sum_{i\,=\,1}^m\ f_{ij}\ w_i\right)\ \ =\ \ 
   \sum_{i\,=\,1}^m\,\left(\,\sum_{j\,=\,1}^n\ f_{ij}\ a_j\right)\ w_i\,.

By uniqueness of representation of a vector :math:`\,w\ ` in the basis :math:`\,\mathcal{C},`

.. math::
   :label: bfa
   
   b_i\ =\ \sum_{j\,=\,1}^n\ f_{ij}\ a_j\,,\qquad i=1,2,\dots,m\,.
   
The relations :eq:`bfa` describe equality of matrices :math:`\\`

.. math::
   
   \left[\begin{array}{c} b_1 \\ b_2 \\ \dots \\ b_m \end{array}\right]\ =\ 
   \left[\begin{array}{cccc}
         f_{11} & f_{12} & \dots & f_{1n} \\
         f_{21} & f_{22} & \dots & f_{2n} \\
          \dots &  \dots & \dots &  \dots \\ 
         f_{m1} & f_{m2} & \dots & f_{mn}
         \end{array}
   \right]
   \left[\begin{array}{c} a_1 \\ a_2 \\ \dots \\ a_n \end{array}\right]\,,

   \;

   \text{that is}\qquad 
   I_{\mathcal{C}}(w)\ =\ M_{\mathcal{B}\mathcal{C}}(F)\,\cdot\,I_{\mathcal{B}}(v)\,.

**Example.**

Let us come back to a differential operator :math:`\ D = {d\over dx}\ \,` viewed as a linear transformation of the space :math:`\,V\ ` of real polynomials of degree :math:`\,n\ ` into the space :math:`\,W\ ` of polynomials of degree :math:`\,n-1.\ ` 
The matrix associated with this operation in natural bases of spaces
:math:`\ V\ \,` and :math:`\, W\ ` is given by :eq:`MBC_D`.

If :math:`\ v\,=\,a_0\,+\,a_1\,x\,+\,a_2\,x^2\,+\,a_3\,x^3\,+\,\ldots\,+\,a_n\,x^n\,\in V,`

then :math:`\quad w\,\equiv D(v)\,=\,a_1\,+\,2\,a_2\,x\,+\,3\,a_3\,x^2\ +\ \ldots\ +n\,a_n\,x^{n-1}\,.`

Matrix relation between the coordinates of the polynomials :math:`\,v\ \,` and 
:math:`\, w:`

.. math::
   
   \left[
   \begin{array}{c} a_1 \\ 2\,a_2 \\ 3\,a_3 \\ \dots \\ n\,a_n \end{array}
   \right]\ \ =\ \ 
   \left[
   \begin{array}{cccccc}
     0   &   1   &   0   &   0   & \dots &   0   \\
     0   &   0   &   2   &   0   & \dots &   0   \\
     0   &   0   &   0   &   3   & \dots &   0   \\ 
   \dots & \dots & \dots & \dots & \dots & \dots \\
     0   &   0   &   0   &   0   & \dots &   n
   \end{array}
   \right]\ 
   \left[
   \begin{array}{c} a_0 \\ a_1 \\ a_2 \\ a_3 \\ \dots \\ a_n \end{array}
   \right]

is precisely the relation :eq:`fund` in Theorem 10.

:math:`\;`

Let us explain nature of the relation between linear transformations 
and matrices more precisely. So far we considered the following vector spaces
(all of them over the same field :math:`\,K\,`):

* | :math:`n`-dimensional space :math:`\,V\,` 
    with basis :math:`\ \mathcal{B}=(v_1,\,v_2,\,\dots,\,v_n)\,,\ `
  | :math:`m`-dimensional space :math:`\,W\,` 
    with basis :math:`\ \mathcal{C}=(w_1,\,w_2,\,\dots,\,w_m)\,;`

* | space :math:`\ \text{Hom}(V,W)\ ` of linear transformations of the 
    space :math:`\ V\ ` into the space :math:`\ W;`

* | space :math:`\ M_{m\times n}(K)\ ` of rectangular matrices 
    with the entries from the field :math:`\ K. \,`

.. Istotę przyporządkowania przekształceniom z :math:`\,\text{Hom}(V,W)\,`
   macierzy z :math:`\,M_{m\times n}(K)\,` przedstawia

:math:`\;`

.. admonition:: Theorem 11. :math:`\\`
   
   The mapping
   
   .. math::
      
      M_{\mathcal{B}\mathcal{C}}:\quad
      \text{Hom}(V,W)\ni F\ \rightarrow\ M_{\mathcal{B}\mathcal{C}}(F):\,=
      \left[\;I_{\mathcal{C}}(Fv_1\,|\,\dots\,|\,
      I_{\mathcal{C}}(Fv_n\,\right]\in M_{m\times n}(K)
      
   is an isomorphism of the vector spaces 
   :math:`\ \text{Hom}(V,W)\,` and :math:`\, M_{m\times n}(K).`

:math:`\;`

**Proof** is preceded with a reminder of definitions of operations on linear 
transformations which make :math:`\,\text{Hom}(V,W)\,` a vector space. 
If :math:`\,F_1,F_2,F\in\text{Hom}(V,W),\ a\in K,\,` then

.. math::
   :nowrap:
   
   \begin{eqnarray*}
   (F_1+F_2)(v) & :\;= & F_1(v)\,+\,F_2(v) \\
      (a\,F)(v) & :\;= & a\cdot F(v)\,,\qquad v\in V\,.
   \end{eqnarray*}

To show that :math:`\,M_{\mathcal{B}\mathcal{C}}\ ` is an isomorphism, 
we have to prove its additivity, homogenity and bijectivity.

a. Additivity. :math:`\,`
   
   Let :math:`\,F_1,F_2\,\in\,\text{Hom}(V,W).\ ` Then he :math:`\,j`-th column of the 
   matrix :math:`\,M_{\mathcal{B}\mathcal{C}}(F_1+F_2)`
   
   .. math::
      
      I_{\mathcal{C}}\,[\,(F_1+F_2)(v_j)\,]\ =\ I_{\mathcal{C}}\,[\,F_1(v_j)+F_2(v_j)\,]\ =\ 
      I_{\mathcal{C}}\,[\,F_1(v_j)\,]+I_{\mathcal{C}}\,[\,F_2(v_j)\,]

   is a sum of the :math:`\,j`-th columns of the matrices
   :math:`\ M_{\mathcal{B}\mathcal{C}}(F_1)\ ` 
   and :math:`\ \,M_{\mathcal{B}\mathcal{C}}(F_2)\,,\ \ j=1,2,\dots,n.\ \,` Hence,
   
   .. math::
   
      M_{\mathcal{B}\mathcal{C}}(F_1+F_2)\ =\ M_{\mathcal{B}\mathcal{C}}(F_1)
                                         \,+\,M_{\mathcal{B}\mathcal{C}}(F_2)\,.

b. Homogenity.
   
   Let :math:`\,F\in\text{Hom}(V,W),\ \ a\in K.\ \,` Then the :math:`\,j`-th column 
   of the matrix :math:`\,M_{\mathcal{B}\mathcal{C}}(aF)`
   
   .. math::

      I_{\mathcal{C}}\,[\,(aF)(v_j)\,]\ =\ I_{\mathcal{C}}\,[\,a\cdot F(v_j)\,]\ =\ 
      a\cdot I_{\mathcal{C}}\,[\,F(v_j)\,]
      
   is the :math:`\, j`-th column of the matrix 
   :math:`\,M_{\mathcal{B}\mathcal{C}}(F)\,,\ \ j=1,2,\dots,n, \,` multiplied by
   :math:`\,a.\,` Hence,
   
   .. math::
      
      M_{\mathcal{B}\mathcal{C}}(a\,F)\ =\ a\,M_{\mathcal{B}\mathcal{C}}(F)\,.

c. Bijectivity.
   
   We have to show that every matrix :math:`\,\boldsymbol{F}\in M_{m\times n}(K)\,` 
   is associated with exactly one mapping :math:`\,F\in\text{Hom}(V,W).\,`
   Indeed, columns of the matrix :math:`\boldsymbol{F}\,` determine (by the 
   coordinates in the basis :math:`\, \mathcal{C}\,`) :math:`\,` images :math:`\, Fv_j\,`
   of basis vectors :math:`\,v_j\in\mathcal{B},\,` and thus (cf. Corollary to 
   Theorem 5.) :math:`\,` the transformation :math:`\ F\ ` is uniquely defined.

:math:`\;`

On the basis of Theorem 8. we may now write 

.. admonition:: Corollary.
   
   If :math:`\,V\ \,` and :math:`\, W\ ` are finite dimensional vector spaces over 
   a field :math:`\,K,\ \,` then
   
   .. math::
      
      \dim\,\text{Hom}(V,W)\ =\ \dim\,V\,\cdot\,\dim\,W\,.

:math:`\;`

We consider one more case: :math:`\,V=K^n\,` 
with the canonical basis :math:`\,\mathcal{E}=(\boldsymbol{e}_1,\boldsymbol{e}_2,\dots,\boldsymbol{e}_n)\,,`
:math:`\,W=K^m\,` with the canonical basis
:math:`\, \mathcal{F}=(\boldsymbol{f}_1,\boldsymbol{f}_2,\dots,\boldsymbol{f}_m),\,`
and :math:`\, F\in\text{Hom}(K^n,K^m).`

A matrix of the transformation :math:`\,F\,` in the canonical bases 
:math:`\, \mathcal{E}\,` and :math:`\, \mathcal{F}\,` is of the form

.. math::
   
   M_{\mathcal{E}\mathcal{F}}(F)\ =\ 
   [\,I_{\mathcal{F}}(F\boldsymbol{e}_1)\,|\,I_{\mathcal{F}}(F\boldsymbol{e}_2)\,|\,\dots\,
   |\,I_{\mathcal{F}}(F\boldsymbol{e}_n)\,]\,.

However, in the space :math:`\,K^m\ ` each vector is a column of its coordinates in the canonical basis: 
:math:`\ \ I_{\mathcal{F}}(\boldsymbol{w})=\boldsymbol{w},\ \ \boldsymbol{w}\in K^m.\ `
If we denote the matrix of the transformation :math:`\,F\ ` in the canonical basis
simply by :math:`\,M(F),\ ` we obtain a simplified formula:

.. math::
   
   M(F)\ =\ [\,F\boldsymbol{e}_1\,|\,F\boldsymbol{e}_2\,|\,\dots\,|\,F\boldsymbol{e}_n\,]\,,

which has been introduced earlier in the equation :eq:`intro`. 
The formula :eq:`fund` in Theorem 10. takes now the form

.. math::
   
   \boldsymbol{y}\,=\,F(\boldsymbol{x})\quad\Rightarrow\quad \boldsymbol{y}\ =\ 
   M(F)\,\cdot\,\boldsymbol{x}\,,\qquad \boldsymbol{x}\in K^n\,,\ \ \boldsymbol{y}\in K^m\,.












































Vectorization of Matrices
-------------------------

The term :math:`\,` *vectorization of a matrix* :math:`\,` denotes a linear 
transformation which converts a matrix with :math:`\,m\,` rows :math:`\,` 
and :math:`\,n\,` columns into a column vector of size :math:`\,mn.\ ` 

Consider a matrix 
:math:`\,\boldsymbol{A}=[\,a_{ij}\,]_{m\times n}\in M_{m\times n}(K),\ `
where :math:`\,M_{m\times n}(K)\ ` is the vector space of 
:math:`\,m \times n\ ` matrices over a field :math:`\,K.\ ` 
Let :math:`\,E_{\,m\times n}\,=\,\{\,\boldsymbol{E}_{ij}:\ \ 
i=1,\ldots,m;\ j=1,\ldots,n\,\}\ `
be the standard basis of :math:`\,M_{m\times n}(K),\ ` 
composed of matrices :math:`\,\boldsymbol{E}_{ij}\ ` 
with exactly one non-zero entry, :math:`\,` equal to unity, :math:`\,` 
in the :math:`\,i`-th row and :math:`\,j`-th column:

.. math::
 
   \left(\boldsymbol{E}_{ij}\right)_{\,|\,kl}\ =\ \ 
   \delta_{ik}\ \delta_{jl}\,,
   \qquad
   \begin{array}{l}
   i,k=1,2,\ldots,m, \\
   j,l=1,2,\ldots,n.
   \end{array}

The matrix :math:`\,\boldsymbol{A}\ ` may be vectorized in two ways:

* by juxtaposing the consecutive *rows* 
  of the matrix next to each other :math:`\\`
  and taking the transpose of the obtained long "multi-row":
  
  .. math::
     
     \boldsymbol{\Lambda}^{mn}(\boldsymbol{A})\ \,:\,=\ \,
     [\,a_{11}\ \,a_{12}\ \,\ldots\ \,a_{1n}\ \ \,
        a_{21}\ \,a_{22}\ \,\ldots\ \,a_{2n}\ \ \,\ldots\ \ \,
        a_{m1}\ \,a_{m2}\ \,\ldots\ \,a_{mn}\,]^{\,T} .

  The vector :math:`\,\boldsymbol{\Lambda}^{mn}(\boldsymbol{A})\ ` 
  is the column of coordinates of matrix :math:`\,\boldsymbol{A}\ ` 
  in the ordered basis 

  .. math::
   
     \mathcal{E}^{\,row}_{m\times n}\ =\ 
     \left(\ \boldsymbol{E}_{11},\ \boldsymbol{E}_{12},\ 
     \ldots,\ \boldsymbol{E}_{1n},\ \ 
     \boldsymbol{E}_{21},\ \boldsymbol{E}_{22},\ 
     \ldots,\ \boldsymbol{E}_{2n},\ \ 
     \ldots,\ \ \boldsymbol{E}_{m1},\ \boldsymbol{E}_{m2},\ 
     \ldots,\ \boldsymbol{E}_{mn}\,\right)\,.

* by stacking the *columns* of the matrix on top of one another:

  .. math::
     
     \boldsymbol{\mathrm{V}}^{mn}(\boldsymbol{A})\ \,:\,=\ \,
     [\,a_{11}\ \,a_{21}\ \,\ldots\ \,a_{m1}\ \ \,
        a_{12}\ \,a_{22}\ \,\ldots\ \,a_{m2}\ \ \,\ldots\ \ \,
        a_{1n}\ \,a_{2n}\ \,\ldots\ \,a_{mn}\,]^{\,T} .

  The vector :math:`\,\boldsymbol{\mathrm{V}}^{mn}(\boldsymbol{A})\ ` 
  is the column of coordinates of matrix :math:`\,\boldsymbol{A}\ ` 
  in the ordered basis 

  .. math::
   
     \mathcal{E}^{\,col}_{m\times n}\ =\ 
     \left(\ \boldsymbol{E}_{11},\ \boldsymbol{E}_{21},\ 
     \ldots,\ \boldsymbol{E}_{m1},\ \ 
     \boldsymbol{E}_{12},\ \boldsymbol{E}_{22},\ 
     \ldots,\ \boldsymbol{E}_{m2},\ \ 
     \ldots,\ \ \boldsymbol{E}_{1n},\ \boldsymbol{E}_{2n},\ 
     \ldots,\ \boldsymbol{E}_{mn}\,\right)\,.

  In literature [1]_ :math:`\ ` the vector 
  :math:`\,\boldsymbol{\mathrm{V}}^{mn}(\boldsymbol{A})\ `
  is also denoted by :math:`\,\text{vec}(\boldsymbol{A}).`

.. **Example.** :math:`\\`
   The space :math:`\ M_{2\times 3}(Q)\ ` has the standard basis
   :math:`\ \mathcal{E}_{2\times 3}\ =\ 
   \left(\,\boldsymbol{E}_{11},\ \boldsymbol{E}_{12},\ \boldsymbol{E}_{13},\ 
   \boldsymbol{E}_{21},\ \boldsymbol{E}_{22},\ \boldsymbol{E}_{23}\,\right)`:

**Example.** :math:`\,`
The standard basis of the vector space :math:`\ M_{2\times 3}(R)\ ` 
is composed of the matrices

.. math::
   
   \begin{array}{lll}
   \boldsymbol{E}_{11}\ =\ 
   \left[\begin{array}{ccc} 
   1 & 0 & 0 \\ 0 & 0 & 0
   \end{array}\right], 
   &
   \boldsymbol{E}_{12}\ =\ 
   \left[\begin{array}{ccc} 
   0 & 1 & 0 \\ 0 & 0 & 0
   \end{array}\right],
   &
   \boldsymbol{E}_{13}\ =\ 
   \left[\begin{array}{ccc} 
   0 & 0 & 1 \\ 0 & 0 & 0
   \end{array}\right],
   \\[12pt]
   \boldsymbol{E}_{21}\ =\ 
   \left[\begin{array}{ccc} 
   0 & 0 & 0 \\ 1 & 0 & 0
   \end{array}\right],
   &
   \boldsymbol{E}_{22}\ =\ 
   \left[\begin{array}{ccc} 
   0 & 0 & 0 \\ 0 & 1 & 0
   \end{array}\right],
   &
   \boldsymbol{E}_{23}\ =\ 
   \left[\begin{array}{ccc} 
   0 & 0 & 0 \\ 0 & 0 & 1
   \end{array}\right],
   \end{array}

hence the ordered bases are:

.. math::
   
   \mathcal{E}^{\,row}_{2\times 3}\ =\ 
   \left(\ 
   \boldsymbol{E}_{11},\ 
   \boldsymbol{E}_{12},\ 
   \boldsymbol{E}_{13},\ \ 
   \boldsymbol{E}_{21},\ 
   \boldsymbol{E}_{22},\ 
   \boldsymbol{E}_{23}\ 
   \right)\,,

   \mathcal{E}^{\,col}_{2\times 3}\ =\ 
   \left(\ 
   \boldsymbol{E}_{11},\ 
   \boldsymbol{E}_{21},\ 
   \boldsymbol{E}_{12},\ \ 
   \boldsymbol{E}_{22},\ 
   \boldsymbol{E}_{13},\ 
   \boldsymbol{E}_{23}\ 
   \right)\,.

For the matrix :math:`\ \boldsymbol{A}\ =\ 
\left[\begin{array}{ccc} 1 & 2 & 3 \\ 4 & 5 & 6 \end{array}\right]\ \ `
we get
:math:`\ \ \boldsymbol{\Lambda}^{23}(\boldsymbol{A})\ =\ 
\left[\begin{array}{c} 1 \\ 2 \\ 3 \\ 4 \\ 5 \\ 6 \end{array}\right],\ \ 
\boldsymbol{\mathrm{V}}^{23}(\boldsymbol{A})\ =\ 
\left[\begin{array}{c} 1 \\ 4 \\ 2 \\ 5 \\ 3 \\ 6 \end{array}\right]\,.`

For :math:`\ \boldsymbol{A}\in M_{m\times n}(K)\ ` obviously 
:math:`\ \boldsymbol{\mathrm{V}}^{mn}(\boldsymbol{A})\ =\ 
\boldsymbol{\Lambda}^{nm}(\boldsymbol{A}^T)\,,\quad` 
:math:`\ \boldsymbol{\Lambda}^{mn}(\boldsymbol{A})\ =\ 
\boldsymbol{\mathrm{V}}^{nm}(\boldsymbol{A}^T)\,.`

Using the Kronecker product, matrix multiplication can be expressed 
as a linear transformation of vectorized matrices.
With this end in view, assume that 
:math:`\ \boldsymbol{A}=[a_{ij}]_{m\times p},\ ` 
:math:`\ \boldsymbol{B}=[b_{ij}]_{p\times n}\ ` and
:math:`\ \boldsymbol{C}\equiv\boldsymbol{A}\boldsymbol{B}=
[c_{ij}]_{m\times n}\ ` are matrices over a field :math:`\ K.\ ` Then

.. math::
   :label: product
   
   c_{ij}\ =\ \,\sum_{k=1}^p\ a_{ik}\ b_{kj}\,,\qquad
   i=1,2,\ldots,m;\ j=1,2,\ldots,n.

Equation :eq:`product` may be rewritten as

.. math:
   
   \begin{array}{rl}
   c_{ij} & =\ \displaystyle\sum_{v=1}^p\ a_{iv}\ b_{vj}\ 
            =\ \displaystyle\sum_{v=1}^p\sum_{w=1}^n\ a_{iv}\ \delta_{jw}\ b_{vw}\ = \\
          & =\ \displaystyle\sum_{v=1}^p\sum_{w=1}^n\ 
               \left(\,\boldsymbol{A}\otimes\boldsymbol{I}_n\right)_{ij,vw}\ b_{vw}
   \end{array}  

.. math::
   
   c_{ij}\ = \ \displaystyle\sum_{v=1}^p\ a_{iv}\ b_{vj}
         \ = \ \displaystyle\sum_{v=1}^p\sum_{w=1}^n\ a_{iv}\ \delta_{jw}\ b_{vw}
         \ = \ \displaystyle\sum_{v=1}^p\sum_{w=1}^n\ 
             \left(\boldsymbol{A}\otimes\boldsymbol{I}_n\right)_{ij,\,vw}\ b_{vw}

   i=1,2,\ldots,m;\ j=1,2,\ldots,n.

which is equivalent to the matrix equation

.. math::

   \blacktriangleright\quad
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{A}\boldsymbol{B})\ \,=\ \,
   \left(\,\boldsymbol{A}\otimes\boldsymbol{I}_n\,\right)\ \cdot\ 
   \boldsymbol{\Lambda}^{pn}(\boldsymbol{B})

On the other hand, Eq. :eq:`product` yields also

.. math::
   
   c_{ij}\ = \ \displaystyle\sum_{w=1}^p\ b_{wj}\ a_{iw}
         \ = \ \displaystyle\sum_{v=1}^m\sum_{w=1}^p\ \delta_{iv}\ b_{jw}^{\,T}\ a_{vw}
         \ = \ \displaystyle\sum_{v=1}^m\sum_{w=1}^p\ 
               \left(\boldsymbol{I}_m\otimes\boldsymbol{B}^T\right)_{ij,\,vw}\ a_{vw}

wherefrom we obtain an alternative relation for the matrix product
:math:`\ \boldsymbol{A}\boldsymbol{B}\,:`

.. math::

   \blacktriangleright\quad
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{A}\boldsymbol{B})\ \,=\ \,
   \left(\,\boldsymbol{I}_m\otimes\boldsymbol{B^{\,T}}\,\right)\ \cdot\ 
   \boldsymbol{\Lambda}^{mp}(\boldsymbol{A})


.. [1] see, e.g. https://en.wikipedia.org/wiki/Vectorization_(mathematics)













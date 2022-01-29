
Kronecker Product as a Transformation Matrix
--------------------------------------------

.. The set :math:`\ M_{m\times n}(K)\ ` of rectangular matrices 
   having :math:`\,m\ ` rows and :math:`\,n\ ` columns 
   over a field :math:`\,K\ ` is an :math:`\ mn`-dimensional vector space
   over that field. The most natural and convenient (henceforth: *standard*)
   basis consists of matrices with exactly one non-zero entry equal unity: 

.. math:
   
   \mathcal{E}_{m\times n}\ =\ 
   \left(\ \boldsymbol{E}_{11},\ \boldsymbol{E}_{12},\ 
   \ldots,\ \boldsymbol{E}_{1n},\ \ 
   \boldsymbol{E}_{21},\ \boldsymbol{E}_{22},\ 
   \ldots,\ \boldsymbol{E}_{2n},\ \ 
   \ldots,\ \ \boldsymbol{E}_{m1},\ \boldsymbol{E}_{m2},\ 
   \ldots,\ \boldsymbol{E}_{mn}\,\right)

   \left(\boldsymbol{E}_{ij}\right)_{\,|\,kl}\ =\ \ 
   \delta_{ik}\ \delta_{jl}\,,
   \qquad
   \begin{array}{l}
   i,k=1,2,\ldots,m, \\
   j,l=1,2,\ldots,n.
   \end{array}

.. Now every matrix :math:`\ \boldsymbol{A} \in M_{m\times n}(K)\ ` 
   may be expressed in the basis :math:`\ \mathcal{E}_{m\times n}:`

.. math:
   :label: matrix
   
   \boldsymbol{A}\ =\ [a_{ij}]_{m\times n}\ =\ \,
   \displaystyle\sum_{i=1}^m \displaystyle\sum_{j=1}^n\ 
   a_{ij}\ \boldsymbol{E}_{ij}\,.

.. Let :math:`\ \boldsymbol{\Lambda}^{mn}(\boldsymbol{A})\ ` denote 
   the column vector obtained by juxtaposing the consecutive rows 
   of matrix :math:`\ \boldsymbol{A}\ =\ [a_{ij}]_{m\times n}\ `
   next to each other and taking the transpose: 

.. math:
   
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{A})\ :\,=\ 
   \left[\ a_{11}\ a_{12}\ \ldots\ a_{1n}\ \ a_{21}\ a_{22}\ \ldots\ a_{2n}\ \ 
   \ldots\ \ a_{m1}\ a_{m2}\ \ldots\ a_{mn}\,\right]^{\,T}\ 
   \in\ K^{mn}.

.. That is to say, :math:`\ \boldsymbol{\Lambda}^{mn}(\boldsymbol{A})\ `
   is a column of coordinates of the matrix :math:`\ \boldsymbol{A}\ ` 
   in the basis :math:`\ \mathcal{E}_{m\times n}\,.`

.. **Example.** :math:`\\` 
   The space :math:`\ M_{2\times 3}(Q)\ ` has the standard basis
   :math:`\ \mathcal{E}_{2\times 3}\ =\ 
   \left(\,\boldsymbol{E}_{11},\ \boldsymbol{E}_{12},\ \boldsymbol{E}_{13},\ 
   \boldsymbol{E}_{21},\ \boldsymbol{E}_{22},\ \boldsymbol{E}_{23}\,\right)`:

.. math:
   
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
   \end{array}\right]
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
   \end{array}\right]
   \end{array}

.. For the matrix :math:`\ \boldsymbol{A}\ =\ 
   \left[\begin{array}{ccc} 1 & 2 & 3 \\ 4 & 5 & 6 \end{array}\right]\ `
   we get
   :math:`\ \boldsymbol{\Lambda}^{23}(\boldsymbol{A})\ =\ 
   \left[\begin{array}{c} 1 \\ 2 \\ 3 \\ 4 \\ 5 \\ 6 \end{array}\right].`

Suppose we are given matrices 
:math:`\ \boldsymbol{A} = [a_{ij}]_{m\times n}\in M_{m\times n}(K)\ ` and
:math:`\ \boldsymbol{B} = [b_{ij}]_{p\times q}\in M_{p\times q}(K).\ ` 
:math:`\\`
Then :math:`\,` for every 
:math:`\ \boldsymbol{G} = [g_{ij}]_{n\times q}\in M_{n\times q}(K)\ ` 
there exists the product
:math:`\ \boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}^T\in M_{m\times p}(K).`

Due to the properties of matrix multiplication, the mapping

.. math::
   :label: homo
   
   F_{AB}\,:\qquad 
   M_{n\times q}(K)\ni\boldsymbol{G}\ \ \mapsto\ \ F_{AB}(\boldsymbol{G}) :\,=
   \boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}^T\in M_{m\times p}(K)

is linear, :math:`\,` i.e. :math:`\,` :math:`\,F_{AB}\,` 
is a homomorphism of vector spaces :math:`\,M_{n\times q}(K)\ ` and
:math:`\ M_{m\times p}(K) :`

.. math::
   
   F_{AB}\ \in\ \text{Hom}\left(M_{n\times q}(K),\,M_{m\times p}(K)\right).

Accepting the notation :math:`\,` 
:math:`\boldsymbol{H}\,\equiv\,[h_{ij}]_{m\times p}\ :\,=\ 
\boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}^T,\ ` we obtain

.. math::
   
   h_{ij}
   \ =\ \displaystyle\sum_{v=1}^n\sum_{w=1}^q a_{iv}\ g_{vw}\ b^T_{wj}
   \ =\ \displaystyle\sum_{v=1}^n\sum_{w=1}^q (a_{iv}\,b_{jw})\ g_{vw}
   \ =\ \displaystyle\sum_{v=1}^n\sum_{w=1}^q 
   (\boldsymbol{A}\otimes\boldsymbol{B})_{\,|\,ij,\,vw}\ g_{vw}
   
   \text{where}\quad i=1,2,\ldots,m;\ j=1,2,\ldots,p.

Thus, for arbitrary matrices 
:math:`\ \boldsymbol{G}\in M_{n\times q}(K),\,`
:math:`\,\boldsymbol{H}\in M_{m\times p}(K):`

.. math::
   :label: conclusion
   
   \boldsymbol{H}\ =\ F_{AB}(\boldsymbol{G})
   \quad\Leftrightarrow\quad
   \boldsymbol{\Lambda}^{mp}(\boldsymbol{H})\ \,=\ \,
   (\boldsymbol{A}\otimes\boldsymbol{B})\ \cdot\ 
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G}),

.. **Conclusion.** :math:`\,`

.. A tensor product :math:`\ \boldsymbol{A}\otimes\boldsymbol{B}\ `
   is a matrix of the homomorphism :math:`\ F_{AB}\ ` 
   in Eq. :eq:`homo`, :math:`\,` in standard bases 
   :math:`\ \mathcal{E}_{n\times q}\ ` and :math:`\ \mathcal{E}_{m\times p}\ `
   of spaces :math:`\ M_{n\times q}(K)\ ` and :math:`\ M_{m\times p}(K),\ `
   respectively.

.. Collecting these results, we come up with the following

Relation :eq:`conclusion` means that 
:math:`\ \boldsymbol{A}\otimes\boldsymbol{B}\ `
is the matrix of the homomorphism :math:`\ F_{AB}\ ` 
in the standard bases of the spaces of matrices.
The resulting Theorem stated below shall be afterwards used 
for independent proofs of some properties of the Kronecker product.

.. This is formulated more precisely as

.. admonition:: Theorem. :math:`\\`

   Let :math:`\ \boldsymbol{A}\in M_{m\times n}(K),`
   :math:`\ \boldsymbol{B}\in M_{p\times q}(K).\ ` 
   Then the tensor product :math:`\ \boldsymbol{A}\otimes\boldsymbol{B}\ `
   is the matrix of the homomorphism
   
   .. math::
   
      F_{AB}\,:\qquad 
      M_{n\times q}(K)\ni\boldsymbol{G}
      \ \ \mapsto\ \ 
      F_{AB}(\boldsymbol{G}) :\,=
      \boldsymbol{A}\,\boldsymbol{G}\boldsymbol{B}^{\,T}\in M_{m\times p}(K)
   
   in the standard bases
   :math:`\ \mathcal{E}_{n\times q}\ ` and :math:`\ \ \mathcal{E}_{m\times p}\ `
   of vector spaces :math:`\ M_{n\times q}(K)\ ` and 
   :math:`\ M_{m\times p}(K).\ ` Consequently
   
   .. math::

      \boldsymbol{\Lambda}^{mp}
      (\boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}^{\,T})
      \ \,=\ \,
      (\boldsymbol{A}\otimes\boldsymbol{B})\,\cdot\,
      \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})\,,
      \qquad\forall\ \ \boldsymbol{G}\in M_{n\times q}(K)\,.
   
   Here :math:`\ \boldsymbol{\Lambda}^{rs}(\boldsymbol{X})\ `
   is a column of coordinates of matrix
   :math:`\ \boldsymbol{X}\in M_{r\times s}(K)\ `
   in the basis :math:`\ \mathcal{E}_{r\times s}\,.`

   .. math:

      \begin{array}{c}   
      \boldsymbol{A}\otimes\boldsymbol{B}\ =\ 
      M_{\mathcal{E}_{n\times q},\ \mathcal{E}_{m\times p}}(F_{AB})\,,
      \\[7pt]
      \boldsymbol{\Lambda}^{mp}
      (\boldsymbol{A}\,\boldsymbol{G}\boldsymbol{B}^{\,T})
      \ \,=\ \,
      (\boldsymbol{A}\otimes\boldsymbol{B})\,\cdot\,
      \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})\,,
      \qquad\forall\ \ \boldsymbol{G}\in M_{n\times q}(K)\,.
      \end{array}
    
.. We shall now make use of the derived relations to prove again

.. The above assertion being at disposal, we shall now return to some properties
   of the Kronecker product, which previously have been acknowledged as obvious
   or have been already proved.

.. may be rephrased as follows:

.. :math:`\,`

.. Equation :eq:`conclusion` states that if we are 

Let :math:`\ \boldsymbol{A}\in M_{m\times n}(K),\ ` 
:math:`\ \boldsymbol{B}\in M_{p\times q}(K).\ \ `
Equation :eq:`conclusion` can be rewritten as

.. math::
   :label: main
   
   \blacktriangleright\quad
   (\boldsymbol{A}\otimes\boldsymbol{B})\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})\ \,=\ \,
   \boldsymbol{\Lambda}^{mp}
   (\boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}^T)
   \qquad\forall\ \ \boldsymbol{G}\in M_{n\times q}(K).

.. for arbitrary matrix :math:`\ \boldsymbol{G}\in M_{n\times q}(K)\ `
   the following relation holds true:  


Substituting in :eq:`main` 
:math:`\ \boldsymbol{A}\to\boldsymbol{A}_1 + \boldsymbol{A}_2\,,\ ` where 
:math:`\ \boldsymbol{A}_1,\ \boldsymbol{A}_2 \in M_{m\times n}(K),\ `
we get

.. math::
   
   \begin{array}{ll}
   \left[\,(\boldsymbol{A}_1 + \boldsymbol{A}_2)\otimes\boldsymbol{B}\,\right]
   \,\cdot\,\boldsymbol{\Lambda}^{nq}(\boldsymbol{G}) & 
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left[\,(\boldsymbol{A}_1 + \boldsymbol{A}_2)\ 
   \boldsymbol{G}\,\boldsymbol{B}^T\,\right]\ =
   \\[6pt] &
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left(\boldsymbol{A}_1\,\boldsymbol{G}\,\boldsymbol{B}^T + \,
   \boldsymbol{A}_2\,\boldsymbol{G}\,\boldsymbol{B}^T\right)\ =
   \\[6pt] &
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left(\boldsymbol{A}_1\,\boldsymbol{G}\,\boldsymbol{B}^T\right)\ +\ 
   \boldsymbol{\Lambda}^{mp}
   \left(\boldsymbol{A}_2\,\boldsymbol{G}\,\boldsymbol{B}^T\right)\ =
   \\[6pt] &
   =\ \ (\boldsymbol{A}_1\otimes\boldsymbol{B})\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})\ +\ 
   (\boldsymbol{A}_2\otimes\boldsymbol{B})\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})\ =
   \\[6pt] &
   =\ \ \left[\,(\boldsymbol{A}_1\otimes\boldsymbol{B})\ +\ 
   (\boldsymbol{A}_2\otimes\boldsymbol{B})\,\right]\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})
   \end{array}

for arbitrary matrix :math:`\ \boldsymbol{G}\in M_{n\times q}(K).\ `
Inserting, in place of :math:`\ \boldsymbol{G},\ ` the consecutive elements 
of the standard basis :math:`\ \mathcal{E}_{n\times q}:\ `
:math:`\ \boldsymbol{G} = \boldsymbol{E}_{11},\ 
\boldsymbol{E}_{12},\ \ldots,\ \boldsymbol{E}_{nq}\,,\ ` 
we ascertain the equality of the corresponding columns of matrices
:math:`\ (\boldsymbol{A}_1 + \boldsymbol{A}_2)\otimes\boldsymbol{B}\ \,`
and :math:`\ \,(\boldsymbol{A}_1\otimes\boldsymbol{B})\ +\ 
(\boldsymbol{A}_2\otimes\boldsymbol{B})\,,\ ` which is equivalent to 
the equality of the matrices themselves:

.. math::
   
   (\boldsymbol{A}_1 + \boldsymbol{A}_2)\otimes\boldsymbol{B}\ \,=\ \,
   (\boldsymbol{A}_1\otimes\boldsymbol{B})\ +\ 
   (\boldsymbol{A}_2\otimes\boldsymbol{B})\,.\quad\bullet

.. Proceeding along similar lines, one may prove the distributivity
   of the Kronecker product over addition in the second matrix factor
   as well as the compatibility with the scalar multiplication:

.. math:
   
   \boldsymbol{A}\otimes(\boldsymbol{B}_1 +\,\boldsymbol{B}_2)\ \,=\ \,
   (\boldsymbol{A}\otimes\boldsymbol{B}_1)\ +\ 
   (\boldsymbol{A}\otimes\boldsymbol{B}_2)\,,

   (\gamma\,\boldsymbol{A})\otimes\boldsymbol{B}\ =\
   \boldsymbol{A}\otimes(\gamma\,\boldsymbol{B})\ =\ 
   \gamma\ (\boldsymbol{A}\otimes\boldsymbol{B}),\quad\gamma\in K.
   
To prove the :math:`\,` "*mixed-product property*" of the Kronecker product,
we substitute in Eq. :eq:`main`:

.. math::
   
   \begin{array}{lr}
   \boldsymbol{A}\to\boldsymbol{A}\,\boldsymbol{C},\ \ &
   \begin{array}{r}
   \boldsymbol{A}\ :\ m \times r \\
   \boldsymbol{C}\ :\ r \times n
   \end{array};
   \end{array}
   \qquad
   \begin{array}{ll}
   \boldsymbol{B}\to\boldsymbol{B}\,\boldsymbol{D},\ \ &
   \begin{array}{l}
   \boldsymbol{B}\ :\ p \times s \\
   \boldsymbol{D}\ :\ s \times q
   \end{array}:
   \end{array}
   \\[8pt]
   \begin{array}{ll}
   \left[\,(\boldsymbol{A}\boldsymbol{C})\otimes
   (\boldsymbol{B}\boldsymbol{D})\,\right]\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G}) & 
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left[\,(\boldsymbol{A}\boldsymbol{C})\ \boldsymbol{G}\ 
   (\boldsymbol{B}\boldsymbol{D})^T\,\right]\ \ =\ 
   \\[6pt] &
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left[\,\boldsymbol{A}\ 
   (\boldsymbol{C}\boldsymbol{G}\boldsymbol{D}^T)\ 
   \boldsymbol{B}^T\,\right]\ \ =
   \\[6pt] &
   =\ \ (\boldsymbol{A}\otimes\boldsymbol{B})\,\cdot\,
   \boldsymbol{\Lambda}^{rs}
   (\boldsymbol{C}\boldsymbol{G}\boldsymbol{D}^T)\ \ =
   \\[6pt] &
   =\ \ (\boldsymbol{A}\otimes\boldsymbol{B})\,\cdot\,
   \left[\,(\boldsymbol{C}\otimes\boldsymbol{D})\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})\,\right]\ \ =
   \\[6pt] &
   =\ \ \left[\,(\boldsymbol{A}\otimes\boldsymbol{B})\cdot
   (\boldsymbol{C}\otimes\boldsymbol{D})\,\right]\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G}).
   \end{array}

The matrix :math:`\ \boldsymbol{G}\in M_{n\times q}(K)\ ` being arbitrary,
we come up with the matrix equality to be proved:

.. math::
   
   (\boldsymbol{A}\boldsymbol{C})\otimes
   (\boldsymbol{B}\boldsymbol{D})\ =\ 
   (\boldsymbol{A}\otimes\boldsymbol{B})\ 
   (\boldsymbol{C}\otimes\boldsymbol{D})\,.\quad\bullet






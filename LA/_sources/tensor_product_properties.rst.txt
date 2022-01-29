Definition and Properties
-------------------------

Definition and Example
~~~~~~~~~~~~~~~~~~~~~~

Let :math:`\,\boldsymbol{A}\ \text{and}\,\boldsymbol{B}\,` 
be arbitrary matrices over a field :math:`\,K:` 
:math:`\,\boldsymbol{A}\,=\,[a_{ij}]_{m\times n}\,,`
:math:`\,\boldsymbol{B}\,=\,[b_{ij}]_{p\times q}\in M(K).`
Their :math:`\,` *tensor product* :math:`\,` (*Kronecker product*) 
written in the block notation reads

.. :math:`\ \boldsymbol{A}\otimes\boldsymbol{B}\ ` is the block matrix 

.. math::
   
   \boldsymbol{A}\otimes\boldsymbol{B}\ :\,=\ 
   \left[\begin{array}{cccc}
   a_{11}\,\boldsymbol{B} & a_{12}\,\boldsymbol{B} & 
           \ldots         & a_{1n}\,\boldsymbol{B} \\
   a_{21}\,\boldsymbol{B} & a_{22}\,\boldsymbol{B} & 
           \ldots         & a_{2n}\,\boldsymbol{B} \\  
           \ldots         &         \ldots         &
           \ldots         &         \ldots         \\
   a_{m1}\,\boldsymbol{B} & a_{m2}\,\boldsymbol{B} & 
           \ldots         & a_{mn}\,\boldsymbol{B} 
   \end{array}\right]\ \in\ M_{mp\times nq}(K). 

For instance, :math:`\,` if
:math:`\ \,\boldsymbol{A}\,=\,\left[\begin{array}{rc}
3 & 2 \\ -1 & 1 \\ -2 & 0 \end{array}\right],\ `
:math:`\ \boldsymbol{B}\,=\,\left[\begin{array}{rc}
2 & -1 \\ 0 & 4 \end{array}\right]\,,\ \,` then

.. math::
   
   \boldsymbol{A}\otimes\boldsymbol{B}\,=\,
   \left[\begin{array}{rr}
    3\ \left[\begin{array}{rr} 2 & -1 \\ 0 & 4 \end{array}\right] &
    2\ \left[\begin{array}{rr} 2 & -1 \\ 0 & 4 \end{array}\right] \\[8pt]
   -1\ \left[\begin{array}{rr} 2 & -1 \\ 0 & 4 \end{array}\right] &
    1\ \left[\begin{array}{rr} 2 & -1 \\ 0 & 4 \end{array}\right] \\[10pt]
   -2\ \left[\begin{array}{rr} 2 & -1 \\ 0 & 4 \end{array}\right] &
    0\ \left[\begin{array}{rr} 2 & -1 \\ 0 & 4 \end{array}\right]
   \end{array}\right]\ =\ 
   \left[\begin{array}{rrrr}
    6 & -3 & 4 & -2 \\ 0 & 12 & 0 & 8 \\
   -2 &  1 & 2 & -1 \\ 0 & -4 & 0 & 4 \\
   -4 &  2 & 0 &  0 \\ 0 & -8 & 0 & 0 
   \end{array}\right],

.. math::
   
   \boldsymbol{B}\otimes\boldsymbol{A}\,=\,
   \left[\begin{array}{rr}   
    2\ \left[\begin{array}{rr} 3 & 2 \\ -1 & 1 \\ -2 & 0 \end{array}\right] &
   -1\ \left[\begin{array}{rr} 3 & 2 \\ -1 & 1 \\ -2 & 0 \end{array}\right] 
   \\[16pt]
    0\ \left[\begin{array}{rr} 3 & 2 \\ -1 & 1 \\ -2 & 0 \end{array}\right] &
    4\ \left[\begin{array}{rr} 3 & 2 \\ -1 & 1 \\ -2 & 0 \end{array}\right]
   \end{array}\right]\ =\ 
   \left[\begin{array}{rrrr}
    6 & 4 & -3 & -2 \\
   -2 & 2 &  1 & -1 \\
   -4 & 0 &  2 &  0 \\
    0 & 0 & 12 &  8 \\
    0 & 0 & -4 &  4 \\
    0 & 0 & -8 &  0
   \end{array}\right].

The entries of a Kronecker product may be numbered by double indices
:math:`\ ij\,` and :math:`\,kl\,:`

.. math:
   
   \begin{array}{lr}
   (\boldsymbol{A}\otimes\boldsymbol{B})_{ij,kl}\,=\ 
   a_{ik}\,b_{jl}, &
   \begin{array}{ll}
   i=1,2,\ldots,m; & k=1,2,\ldots,n; \\
   j=1,2,\ldots,p; & l=1,2,\ldots,q.
   \end{array}
   \end{array}

.. math::
   
   \begin{array}{lr}
   (\boldsymbol{A}\otimes\boldsymbol{B})_{\,ij,\,kl}\,:\,=\ 
   (\boldsymbol{A}\otimes\boldsymbol{B})_{\ (i-1)\,p\,+\,j,\ (k-1)\,q\,+\,l}\ =\ 
   a_{ik}\,b_{jl}, &
   \begin{array}{ll}
   i=1,\ldots,m; & k=1,\ldots,n; \\
   j=1,\ldots,p; & l=1,\ldots,q.
   \end{array}
   \end{array}

The indices :math:`\ i\ ` and :math:`\ k\ ` relate to block rows 
and block columns, whereas :math:`\\` 
the indices :math:`\ j\ ` and :math:`\ l\ ` designate elementary 
rows and columns, respectively.

Properties of the Kronecker Product
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**0.)** :math:`\,` The tensor product of matrices is non-commutative:
:math:`\ \boldsymbol{A}\otimes\boldsymbol{B}
\neq\boldsymbol{B}\otimes\boldsymbol{A}.`

However, matrices :math:`\ \boldsymbol{A}\otimes\boldsymbol{B}\ ` and
:math:`\ \boldsymbol{B}\otimes\boldsymbol{A}\ ` are permutation equivalent,
meaning that :math:`\\` 
there exist permutation matrices :math:`\ \boldsymbol{P}\ ` and  
:math:`\ \boldsymbol{Q}\ ` such that 
:math:`\ \boldsymbol{B}\otimes\boldsymbol{A} \ =\ 
\boldsymbol{P}\,(\boldsymbol{A}\otimes\boldsymbol{B})\,\boldsymbol{Q}.`

If :math:`\ \boldsymbol{A}\ ` and :math:`\ \boldsymbol{B}\ ` are square
matrices, then the products :math:`\ \boldsymbol{A}\otimes\boldsymbol{B}\ ` 
and :math:`\ \boldsymbol{B}\otimes\boldsymbol{A}\ ` are even permutation 
similar: :math:`\ \boldsymbol{Q}\,=\,\boldsymbol{P}^{\,T}=\,
\boldsymbol{P}^{-1}.\ ` That is to say, the product 
:math:`\ \boldsymbol{A}\otimes\boldsymbol{B}\ ` can be transformed into 
:math:`\ \boldsymbol{B}\otimes\boldsymbol{A}\ ` by means of a permutation 
of rows followed by the same permutation of columns. [1]_

**1.)** :math:`\,` The Kronecker product is associative and 
distributive over addition of matrices: 

.. math::

   (\boldsymbol{A}\otimes\boldsymbol{B})\otimes\boldsymbol{C}\ =\ 
   \boldsymbol{A}\otimes(\boldsymbol{B}\otimes\boldsymbol{C})   

   (\boldsymbol{A}_1\pm\boldsymbol{A}_2)\otimes\boldsymbol{B}\ =\ 
   (\boldsymbol{A}_1\otimes\boldsymbol{B})\pm
   (\boldsymbol{A}_2\otimes\boldsymbol{B})

   \boldsymbol{A}\otimes(\boldsymbol{B}_1\pm\boldsymbol{B}_2)\ =\ 
   (\boldsymbol{A}\otimes\boldsymbol{B}_1)\pm
   (\boldsymbol{A}\otimes\boldsymbol{B}_2)

and is compatible with the scalar multiplication of matrices:
   
.. math::
   
   (\gamma\,\boldsymbol{A})\otimes\boldsymbol{B}\ =\
   \boldsymbol{A}\otimes(\gamma\,\boldsymbol{B})\ =\ 
   \gamma\ (\boldsymbol{A}\otimes\boldsymbol{B}),\quad\gamma\in K.

**2.)** :math:`\,` If sizes of matrices 
:math:`\ \boldsymbol{A},\boldsymbol{B},\boldsymbol{C},\boldsymbol{D}\ `
are such that there exist products :math:`\ \boldsymbol{A}\boldsymbol{C}\ ` 
and :math:`\ \boldsymbol{B}\boldsymbol{D},\ ` then

.. math::
   :label: mixed-product
   
   \blacktriangleright\quad
   (\boldsymbol{A}\otimes\boldsymbol{B})\,(\boldsymbol{C}\otimes\boldsymbol{D})
   \ =\ (\boldsymbol{A}\boldsymbol{C})\otimes(\boldsymbol{B}\boldsymbol{D}).

**Proof.** :math:`\ ` Suppose the matrices 
:math:`\ \boldsymbol{A},\,\boldsymbol{B},\,\boldsymbol{C},\,\boldsymbol{D}\,`
are given by

.. math::
   
   \begin{array}{lr}
   \boldsymbol{A}\,=\,[a_{ij}]_{m\times r}\,, & \quad
   \boldsymbol{B}\,=\,[b_{ij}]_{p\times s}\,, \\
   \boldsymbol{C}\,=\,[c_{ij}]_{r\times n}\,, & \quad
   \boldsymbol{D}\,=\,[d_{ij}]_{s\times q}\,.
   \end{array}

We shall verify that matrices on both sides of Eq. :eq:`mixed-product`
have equal dimensions and are composed of the same elements.

a.) :math:`\ ` comparison of dimensions of matrices:

.. math::
   
   \begin{array}{rr}
   \begin{array}{rr}
   \boldsymbol{A}\otimes\boldsymbol{B}\ : & mp\times rs \\[4pt]
   \boldsymbol{C}\otimes\boldsymbol{D}\ : & rs\times nq \\[4pt]
   (\boldsymbol{A}\otimes\boldsymbol{B})
   (\boldsymbol{C}\otimes\boldsymbol{D})\ : & mp\times nq 
   \end{array} &
   \begin{array}{rr}
   \boldsymbol{A}\boldsymbol{C}\ : & m\times n \\[4pt]
   \boldsymbol{B}\boldsymbol{D}\ : & p\times q \\[4pt]
   \qquad (\boldsymbol{A}\boldsymbol{C})\otimes
   (\boldsymbol{B}\boldsymbol{D})\ : & mp\times nq 
   \end{array}
   \end{array}

b.) :math:`\ ` comparison of corresponding elements:

.. math::
   
   \begin{array}{l}
   (\boldsymbol{A}\otimes\boldsymbol{B})
   (\boldsymbol{C}\otimes\boldsymbol{D})_{\ |\ ij,\,kl}\ \ = \ 
   \displaystyle\sum_{v=1}^r\ \sum_{w=1}^s\ 
   (\boldsymbol{A}\otimes\boldsymbol{B})_{\ |\ ij,\,vw}\ 
   (\boldsymbol{C}\otimes\boldsymbol{D})_{\ |\ vw,\,kl}\ \ = \\[16pt]
   =\ \ \displaystyle\sum_{v=1}^r\ \sum_{w=1}^s\ 
   a_{iv}\ b_{jw}\ c_{vk}\ d_{wl}\ \ = \ 
   \left(\displaystyle\sum_{v=1}^r\ a_{iv}\ c_{vk}\ \right)
   \left(\displaystyle\sum_{w=1}^s\ b_{jw}\ d_{wl}\ \right)\ \ = \\[26pt]
   =\ \ (\boldsymbol{A}\boldsymbol{C})_{\,|\,ik}\ \cdot\ 
   (\boldsymbol{B}\boldsymbol{D})_{\,|\,jl}\ \ = \ 
   (\boldsymbol{A}\boldsymbol{C})\otimes
   (\boldsymbol{B}\boldsymbol{D})_{\ |\ ij,\,kl}\,;
   \end{array}
   \\[8pt]
   \begin{array}{ll}
   \text{where} &
   \begin{array}{ll}
   i=1,2,\ldots,m; & j=1,2,\ldots,p; \\
   k=1,2,\ldots,n; & l=1,2,\ldots,q.
   \end{array}
   \end{array}\quad\bullet

It's worthwhile to write down a special case of Eq. :eq:`mixed-product`, 
with :math:`\,\boldsymbol{A}\in M_m(C),\ ` :math:`\,\boldsymbol{B}\in M_p(C),\ `
:math:`\,\boldsymbol{x}\in C^m\sim M_{m\times 1}(C),\ `
:math:`\,\boldsymbol{y}\in C^p\sim M_{p\times 1}(C)\,:`

.. math:
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{ccc} 
   a_{11} & \ldots & a_{1m} \\ 
   \ldots & \ldots & \ldots \\ 
   a_{m1} & \ldots & a_{mm}
   \end{array}\right],\quad
   \boldsymbol{B}\ =\ 
   \left[\begin{array}{ccc} 
   b_{11} & \ldots & b_{1p} \\ 
   \ldots & \ldots & \ldots \\ 
   b_{p1} & \ldots & b_{pp}
   \end{array}\right],\quad
   \boldsymbol{x}\ =\ 
   \left[\begin{array}{c}
   x_1 \\ \ldots \\ x_m
   \end{array}\right],\quad
   \boldsymbol{y}\ =\ 
   \left[\begin{array}{c}
   y_1 \\ \ldots \\ y_p
   \end{array}\right]:

.. math::

   (\boldsymbol{A}\otimes\boldsymbol{B})
   (\boldsymbol{x}\otimes\boldsymbol{y})\ =\ 
   \boldsymbol{A}\boldsymbol{x}\otimes\boldsymbol{B}\boldsymbol{y}.

This formula is useful for a mathematical description 
of a bipartite quantum system. :math:`\\`

**3.)** :math:`\,` If
:math:`\ \boldsymbol{A}\,=\,[a_{ij}]_{m\times m}\in M_m(K),\   
\boldsymbol{B}\,=\,[b_{ij}]_{n\times n}\in M_n(K),\ ` then

*i*.) :math:`\quad\text{Tr}\ (\boldsymbol{A}\otimes\boldsymbol{B})\ =\ 
\text{Tr}\,\boldsymbol{A}\ \cdot\ \text{Tr}\,\boldsymbol{B}.`

*ii*.) :math:`\quad\det{(\boldsymbol{A}\otimes\boldsymbol{B})}\ =\ 
(\det{\boldsymbol{A}})^n\ \cdot\ (\det{\boldsymbol{B}})^m.`

*iii*.) :math:`\ \ ` If additionally :math:`\ \det{\boldsymbol{A}}\neq 0,\ `
:math:`\ \det{\boldsymbol{B}}\neq 0,\quad` then
:math:`\quad (\boldsymbol{A}\otimes\boldsymbol{B})^{-1}\ =\ \,
\boldsymbol{A}^{-1}\otimes\,\boldsymbol{B}^{-1}.`

**Proof.**

.. math:
   
   \blacktriangleright\quad
   \text{Tr}\ (\boldsymbol{A}\otimes\boldsymbol{B})\ =\ 
   \text{Tr}\,\boldsymbol{A}\ \cdot\ \text{Tr}\,\boldsymbol{B}.

.. math:
   
   \begin{array}{lll}
   i.) \quad\text{Tr}\ (\boldsymbol{A}\otimes\boldsymbol{B}) &
   = \ \ \displaystyle\sum_{i=1}^m\displaystyle\sum_{j=1}^n\ 
   (\boldsymbol{A}\otimes\boldsymbol{B})_{\ |\ ij,\,ij}\ \ = & \\
   & = \ \ \displaystyle\sum_{i=1}^m
   \displaystyle\sum_{j=1}^n\ a_{ii}\ b_{jj}\ \ = & \\
   & = \ \ \left(\displaystyle\sum_{i=1}^m a_{ii}\right)\ 
   \left(\displaystyle\sum_{j=1}^n b_{jj}\right)\ \ = \ \ &
   \text{Tr}\,\boldsymbol{A}\ \cdot\ \text{Tr}\,\boldsymbol{B}.   
   \end{array}

.. math:

   \begin{array}{rl}
   \text{Tr}\ (\boldsymbol{A}\otimes\boldsymbol{B}) & 
   =\ \ \displaystyle\sum_{i=1}^m\sum_{j=1}^n\ 
   (\boldsymbol{A}\otimes\boldsymbol{B})_{\ |\ ij,\,ij}\ \ =\  
   \displaystyle\sum_{i=1}^m\sum_{j=1}^n\ a_{ii}\ b_{jj}\ \ = \\
   & =\ \ \left(\displaystyle\sum_{i=1}^m a_{ii}\right)\ 
   \left(\displaystyle\sum_{j=1}^n b_{jj}\right)\ \ =\ \ 
   \text{Tr}\,\boldsymbol{A}\ \cdot\ \text{Tr}\,\boldsymbol{B}.
   \end{array}

   \begin{array}{rll}
   \text{bo}\quad\text{Tr}\ (\boldsymbol{A}\otimes\boldsymbol{B}) & 
   =\ \ \displaystyle\sum_{i=1}^m\sum_{j=1}^n\ 
   (\boldsymbol{A}\otimes\boldsymbol{B})_{\ |\ ij,\,ij}\ \ = & \\[16pt]
   & =\ \ \displaystyle\sum_{i=1}^m\sum_{j=1}^n\ a_{ii}\ b_{jj}\ \ = & \\[20pt]
   & =\ \ \left(\displaystyle\sum_{i=1}^m a_{ii}\right)\ 
   \left(\displaystyle\sum_{j=1}^n b_{jj}\right)\ \ =\ \ 
   \text{Tr}\,\boldsymbol{A}\ \cdot\ \text{Tr}\,\boldsymbol{B}.
   \end{array}

.. :math:`\begin{array}{lll}
   i.) \quad\text{Tr}\ (\boldsymbol{A}\otimes\boldsymbol{B}) &
   = \ \ \displaystyle\sum_{i=1}^m\displaystyle\sum_{j=1}^n\ 
   (\boldsymbol{A}\otimes\boldsymbol{B})_{\ |\ ij,\,ij}\ \ = & \\
   & = \ \ \displaystyle\sum_{i=1}^m
   \displaystyle\sum_{j=1}^n\ a_{ii}\ b_{jj}\ \ = & \\
   & = \ \ \left(\displaystyle\sum_{i=1}^m a_{ii}\right)\ 
   \left(\displaystyle\sum_{j=1}^n b_{jj}\right)\ \ = \ \ &
   \text{Tr}\,\boldsymbol{A}\ \cdot\ \text{Tr}\,\boldsymbol{B}.   
   \end{array}`

:math:`\begin{array}{ll}
i.) \quad\text{Tr}\ (\boldsymbol{A}\otimes\boldsymbol{B}) &
= \ \ \displaystyle\sum_{i=1}^m\displaystyle\sum_{j=1}^n\ 
(\boldsymbol{A}\otimes\boldsymbol{B})_{\ |\ ij,\,ij}\ \ = \ \ 
\displaystyle\sum_{i=1}^m \displaystyle\sum_{j=1}^n\ a_{ii}\ b_{jj}\ \ = \\
& = \ \ \left(\displaystyle\sum_{i=1}^m a_{ii}\right)\ 
\left(\displaystyle\sum_{j=1}^n b_{jj}\right)\ \ = \ \ 
\text{Tr}\,\boldsymbol{A}\ \cdot\ \text{Tr}\,\boldsymbol{B}\,.\quad\bullet   
\end{array}`

*ii*.) :math:`\,` We shall use Eq. :eq:`mixed-product`
and the remarks to the item **0.)** of the present discussion.

.. math::
   
   \boldsymbol{A}\otimes\boldsymbol{B}\ =\ 
   (\boldsymbol{A}\,\boldsymbol{I}_m)\otimes
   (\boldsymbol{I}_n\,\boldsymbol{B})\ =\ 
   (\boldsymbol{A}\otimes\boldsymbol{I}_n)\,
   (\boldsymbol{I}_m\otimes\boldsymbol{B})\,;
   
   \boldsymbol{A}\otimes\boldsymbol{I}_n\ \, = \ \,
   \boldsymbol{P}\ (\boldsymbol{I}_n\otimes
   \boldsymbol{A})\,\boldsymbol{P}^{-1}.

:math:`\ \boldsymbol{I}_m\ ` and   :math:`\ \boldsymbol{I}_n\ `
are identity matrices of size :math:`\,m\,` and :math:`\,n,\ ` 
whereas :math:`\ \boldsymbol{P}\ ` is a permutation matrix.
Using the theorem on a determinant of a product of matrices, we get

.. math:
   
   \det{(\boldsymbol{A}\otimes\boldsymbol{B})}\ =\ 
   \det{(\boldsymbol{A}\otimes\boldsymbol{I}_n)}\,\cdot\,
   \det{(\boldsymbol{I}_m\otimes\boldsymbol{B})},
   
   \det{(\boldsymbol{A}\otimes\boldsymbol{I}_n)}\ =\ 
   \det{\left(\boldsymbol{P}^{-1}(\boldsymbol{I}_n\otimes\boldsymbol{A})\,
   \boldsymbol{P}\right)}\ =\ 
   \det{(\boldsymbol{P}^{-1})}\cdot\,\
   \det{(\boldsymbol{I}_n\otimes\boldsymbol{A})}\,\cdot\,
   \det{\boldsymbol{P}}\ =

   =\ 
   (\det{\boldsymbol{P}})^{-1}\cdot\,\
   \det{(\boldsymbol{I}_n\otimes\boldsymbol{A})}\,\cdot\,
   \det{\boldsymbol{P}}\ =\ 
   \det{(\boldsymbol{I}_n\otimes\boldsymbol{A})}\,.

.. math::
   
   \det{(\boldsymbol{A}\otimes\boldsymbol{B})}\ =\ 
   \det{(\boldsymbol{A}\otimes\boldsymbol{I}_n)}\,\cdot\,
   \det{(\boldsymbol{I}_m\otimes\boldsymbol{B})},
   
   \begin{array}{lll}
   \det{(\boldsymbol{A}\otimes\boldsymbol{I}_n)} & 
   =\ \ \det{\left[\,\boldsymbol{P}\,
   (\boldsymbol{I}_n\otimes\boldsymbol{A})\,
   \boldsymbol{P}^{-1}\right]}\ \ = & \\
   & =\ \ \det{\boldsymbol{P}}\,\cdot\,
   \det{(\boldsymbol{I}_n\otimes\boldsymbol{A})}\,\cdot\,
   \det{(\boldsymbol{P}^{-1})}\ \ = & \\
   & =\ \ \det{\boldsymbol{P}}\,\cdot\,\
   \det{(\boldsymbol{I}_n\otimes\boldsymbol{A})}\,\cdot\,
   (\det{\boldsymbol{P}})^{-1}\ \ = & 
   \det{(\boldsymbol{I}_n\otimes\boldsymbol{A})}\,.
   \end{array}

Therefore the determinant of a tensor product of two matrices, 
:math:`\,\boldsymbol{A}\,` and :math:`\,\boldsymbol{B},\ `
is given by 

.. math::
   :label: det_AxB
   
   \qquad\det{(\boldsymbol{A}\otimes\boldsymbol{B})}\ =\ 
   \det{(\boldsymbol{I}_n\otimes\boldsymbol{A})}\,\cdot\,
   \det{(\boldsymbol{I}_m\otimes\boldsymbol{B})}\,.

The matrices :math:`\ \boldsymbol{I}_n\otimes\boldsymbol{A}\ ` and
:math:`\ \boldsymbol{I}_m\otimes\boldsymbol{B}\ ` have block-diagonal 
structure:

.. math::
   
   \boldsymbol{I}_n\otimes\boldsymbol{A}\ =\ 
   \underbrace{
   \left[\begin{array}{cccc}
   \boldsymbol{A} & \boldsymbol{0} & \cdots & \boldsymbol{0} \\
   \boldsymbol{0} & \boldsymbol{A} & \cdots & \boldsymbol{0} \\
   \cdots & \cdots & \cdots & \cdots \\
   \boldsymbol{0} & \boldsymbol{0} & \cdots & \boldsymbol{A}
   \end{array}\right]}_{n\ \text{blocks}}\,,
   \qquad
   \boldsymbol{I}_m\otimes\boldsymbol{B}\ =\ 
   \underbrace{
   \left[\begin{array}{cccc}
   \boldsymbol{B} & \boldsymbol{0} & \cdots & \boldsymbol{0} \\
   \boldsymbol{0} & \boldsymbol{B} & \cdots & \boldsymbol{0} \\
   \cdots & \cdots & \cdots & \cdots \\
   \boldsymbol{0} & \boldsymbol{0} & \cdots & \boldsymbol{B}
   \end{array}\right]}_{m\ \text{blocks}} \,,

whereby their determinants read

.. math::
   :label: I_AB

   \begin{array}{ll}
   \det{(\boldsymbol{I}_n\otimes\boldsymbol{A})}\ =\ 
   (\det{\boldsymbol{A}})^n \,, & \qquad
   \det{(\boldsymbol{I}_m\otimes\boldsymbol{B})}\ =\ 
   (\det{\boldsymbol{B}})^m\,.
   \end{array}

Inserting :eq:`I_AB` to :eq:`det_AxB` yields the desired relation:
:math:`\ \det{(\boldsymbol{A}\otimes\boldsymbol{B})}\,=\,
(\det{\boldsymbol{A}})^n\,\cdot\,(\det{\boldsymbol{B}})^m\,.\ \ \bullet`

*iii*.) :math:`\,` 
First, we note that the tensor product of two invertible matrices
is invertible as well:

.. math::
   
   \left(\ \det{\boldsymbol{A}}\neq 0\,,\ \det{\boldsymbol{B}}\neq 0\ \right)
   \quad\Rightarrow\quad
   \det{(\boldsymbol{A}\otimes\boldsymbol{B})}\ \equiv\ 
   (\det{\boldsymbol{A}})^n\,\cdot\,(\det{\boldsymbol{B}})^m\ \neq\ 0\,.

Next, making use of Eq. :eq:`mixed-product`, we obtain

.. math::
   
   (\boldsymbol{A}\otimes\boldsymbol{B})\,
   (\boldsymbol{A}^{-1}\otimes\,\boldsymbol{B}^{-1})\ =\ 
   (\boldsymbol{A}\boldsymbol{A}^{-1})\otimes
   (\boldsymbol{B}\boldsymbol{B}^{-1})\ =\ 
   \boldsymbol{I}_m\otimes\boldsymbol{I}_n\ =\ 
   \boldsymbol{I}_{mn}\,,
   
   (\boldsymbol{A}^{-1}\otimes\,\boldsymbol{B}^{-1})\,
   (\boldsymbol{A}\otimes\boldsymbol{B})\ =\ 
   (\boldsymbol{A}^{-1}\boldsymbol{A})\otimes
   (\boldsymbol{B}^{-1}\boldsymbol{B})\ =\ 
   \boldsymbol{I}_m\otimes\boldsymbol{I}_n\ =\ 
   \boldsymbol{I}_{mn}\,.

This means that :math:`\quad (\boldsymbol{A}\otimes\boldsymbol{B})^{-1}\,=\ 
\boldsymbol{A}^{-1}\otimes\,\boldsymbol{B}^{-1}\,.\quad\bullet` 

**4.)** :math:`\,` If 
:math:`\ \boldsymbol{A}\,=\,[a_{ij}]_{m\times n}\in M_{m\times n}(K),\   
\boldsymbol{B}\,=\,[b_{ij}]_{p\times q}\in M_{p\times q}(K),\ ` then

*i*.) :math:`\quad(\boldsymbol{A}\otimes\boldsymbol{B})^T\ =\ 
\boldsymbol{A}^T\ \otimes\ \boldsymbol{B}^{\,T}.`

For complex matrices (:math:`K=C`) 
the rules for complex or Hermitian conjugate are:

.. the two additional relations hold:

*ii*.) :math:`\quad(\boldsymbol{A}\otimes\boldsymbol{B})^{\,\ast}\ =\ 
\boldsymbol{A}^{\ast}\otimes\ \boldsymbol{B}^{\,\ast}.`

*iii*.) :math:`\quad(\boldsymbol{A}\otimes\boldsymbol{B})^+\ =\ 
\boldsymbol{A}^+\otimes\ \boldsymbol{B}^+.`

**Proof.**

*i*.) :math:`\,` 
To be equal, two matrices should have the same sizes 
and the same corresponding entries.

a.) :math:`\ ` comparison of dimensions of matrices:

.. math::
   
   \begin{array}{lcr}
   \begin{array}{rr}
   \boldsymbol{A}                          \ : & m\times n   \\[4pt]
   \boldsymbol{B}                          \ : & p\times q   \\[4pt]
   \boldsymbol{A}\otimes\boldsymbol{B}     \ : & mp\times nq \\[4pt]
   (\boldsymbol{A}\otimes\boldsymbol{B})^T \ : & nq\times mp
   \end{array} 
   & 
   \begin{array}{c}
   \qquad
   \end{array}
   &
   \begin{array}{rr}
   \boldsymbol{A}^T                        \ : & n\times m \\[4pt]
   \boldsymbol{B}^T                        \ : & q\times p \\[4pt]
   \boldsymbol{A}^T\otimes\boldsymbol{B}^T \ : & nq\times mp 
   \end{array}
   \end{array}

b.) :math:`\ ` comparison of corresponding elements:

.. math::
   
   \begin{array}{l}
   (\boldsymbol{A}\otimes\boldsymbol{B})^T_{\ |\ ij,\,kl}\ \ =\ \ 
   (\boldsymbol{A}\otimes\boldsymbol{B})_{\ |\ kl,\,ij}\ \ =\ \ 
   a_{ki}\,b_{lj}
   \\[4pt]   
   (\boldsymbol{A}^T\otimes\boldsymbol{B}^T)_{\ |\ ij,\,kl}\ \ =\ \ 
   a^T_{ik}\,b^T_{jl}\ =\ a_{ki}\,b_{lj}
   \end{array}
   \\[8pt]
   \begin{array}{ll}
   \text{where} & \quad
   \begin{array}{ll}
   i=1,2,\ldots,n; & j=1,2,\ldots,q; \\
   k=1,2,\ldots,m; & l=1,2,\ldots,p.\qquad\bullet
   \end{array}
   \end{array}

Therefore, the transpose of a tensor product of two matrices
is equal to the tensor product of the transposed matrices, 
the order of factors being preserved.

*ii*.) :math:`\,`
Matrices :math:`\ (\boldsymbol{A}\otimes\boldsymbol{B})^*\ ` and
:math:`\ \boldsymbol{A}^*\otimes\boldsymbol{B}^*\ ` are of the same size
and have the same entries:

.. Furthermore,

.. math::
   
   (\boldsymbol{A}\otimes\boldsymbol{B})^{*}_{\ |\ ij,\,kl}\ \ =\ \ 
   (a_{ik}\,b_{jl})^*\,=\ \,a^*_{ik}\ b^*_{jl}\ \,=\ \,
   (\boldsymbol{A}^*\otimes\,\boldsymbol{B}^*)_{\ |\ ij,\,kl}\,,
   \\[8pt]
   \begin{array}{ll}
   \text{where} & \quad
   \begin{array}{ll}
   i=1,2,\ldots,m; & j=1,2,\ldots,p; \\
   k=1,2,\ldots,n; & l=1,2,\ldots,q.\qquad\bullet
   \end{array}
   \end{array}

*iii*.) :math:`\,`
The Hermitian conjugate being composed of complex conjugate and transpose,
we obtain

.. math::
   
   (\boldsymbol{A}\otimes\boldsymbol{B})^+\,=\ 
   \left[\,(\boldsymbol{A}\otimes\boldsymbol{B})^T\right]^* =\ \,
   \left(\boldsymbol{A}^T\otimes\,\boldsymbol{B}^T\right)^*\ =\ \,
   (\boldsymbol{A}^T)^*\otimes\,(\boldsymbol{B}^T)^*\ =\ \,
   \boldsymbol{A}^+\otimes\,\boldsymbol{B}^+.\ \bullet

So the complex or Hermitian conjugate of a tensor product of two matrices
is equal to the tensor product of the conjugated matrices, the order of factors
being preserved.


.. [1] H. V. Henderson; S. R. Searle (1980). "The vec-permutation matrix, 
   the vec operator and Kronecker products: a review". 
   LINEAR AND MULTILINEAR ALGEBRA. 9 (4): 271–288.
   https://dx.doi.org/10.1080%2F03081088108817379




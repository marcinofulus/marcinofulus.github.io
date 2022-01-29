
Problems
--------

**Exercise 1.** :math:`\,`

Let :math:`\,V\ ` be a unitary space, 
and :math:`\ \,Y\ ` its subspace: :math:`\ Y<V\,.\ ` :math:`\\`
The *orthogonal complement* of a subspace :math:`\,Y\,` is the set 
:math:`\,Y^\perp\,` of all vectors in the space :math:`\,V\,`
that are orthogonal to every vector in the space :math:`\,Y:`

.. math::
   
   Y^\perp\ :\,=\ \,\{\,x\in V:\ \ \langle x,y\rangle = 0\quad
   \text{for every}\ \ y\in Y\,\}\,.

Prove that :math:`\ Y^\perp\ ` is a subspace: :math:`\ \,Y^\perp<V\,.`
   
**Exercise 2.**

The method ``gram_schmidt()`` of Sage orthogonalizes a set of *rows*
of a given matrix :math:`\,\boldsymbol{A}.\ `
 
The method returns a pair of matrices :math:`\,(\boldsymbol{G},\boldsymbol{M}).\ `
The rows of matrix :math:`\,\boldsymbol{G}\ ` comprise an orthogonal set
(but, in general, not orthonormal) obtained by application of the Gram-Schmidt process
to the rows of matrix :math:`\boldsymbol{A},\ `
and a lower triangular matrix :math:`\boldsymbol{M}` satisfies the condition
:math:`\,\boldsymbol{A}=\boldsymbol{M}\boldsymbol{G}\ `
(in an older version of Sage one had to add an identity matrix :math:`\,\boldsymbol{I}\ ` to :math:`\,\boldsymbol{M}`).

If :math:`\,\boldsymbol{A}\ ` is a square matrix of size :math:`\,n,\ ` then 
according to the row matrix multiplication rule, the entries of the :math:`\,i`-th row
of the matrix :math:`\,\boldsymbol{M}\ ` are coefficients of a linear combination
of rows of the matrix :math:`\,\boldsymbol{G},\ ` which is equal to the 
:math:`\,i`-th row of the matrix :math:`\,\boldsymbol{A},\ \ i=1,2,\dots,n.` 

Run the following code and check whether

* the condition
  :math:`\,\boldsymbol{A}=\boldsymbol{M}\boldsymbol{G}\ ` holds?

* the product :math:`\,\boldsymbol{G}\boldsymbol{G}^{\,T}\ ` is a diagonal matrix :math:`\\`
  (which is equivalent to orthogonality of the set of *rows* of matrix :math:`\,\boldsymbol{G}`) ?

* the product :math:`\,\boldsymbol{G}^{\,T}\boldsymbol{G}\ ` is a diagonal matrix :math:`\\`
  (which is equivalent to orthogonality of the set of *columns* of matrix :math:`\,\boldsymbol{G}`) ?

.. sagecellserver::
   
   A = matrix(QQ,[[-2, -2, 1],
                  [ 8, 11,-7],
                  [19,-14,-8]])
   G,M = A.gram_schmidt()
   show((G,M))

Let :math:`\,\boldsymbol{Q}\ ` be a matrix obtained from the matrix :math:`\,\boldsymbol{G}\ `
after normalization of its rows.

Compute the products 
:math:`\,\boldsymbol{Q}\boldsymbol{Q}^{\,T}\ ` and 
:math:`\,\boldsymbol{Q}^{\,T}\boldsymbol{Q}\,:`

.. sagecellserver::
   
   Q = copy(G)
   Q.rescale_row(0, 1/norm(G.row(0)))
   Q.rescale_row(1, 1/norm(G.row(1)))
   Q.rescale_row(2, 1/norm(G.row(2)))
   show(Q)

:math:`\;`

.. admonition:: Corollary. 

   Orthogonality of rows of matrix :math:`\,\boldsymbol{G}\in M_n(R)\ ` does not imply  
   orthogonality of its columns and vice versa: in general
   :math:`\,\boldsymbol{G}\,\boldsymbol{G}^{\,T}\neq\boldsymbol{G}^{\,T}\boldsymbol{G},\,`
   unless :math:`\,\boldsymbol{G}=\lambda\,\boldsymbol{Q},\ \lambda\in R,` where 
   :math:`\,\boldsymbol{Q}\ ` is an orthogonal matrix; :math:`\,` then
   :math:`\,\boldsymbol{G}\,\boldsymbol{G}^{\,T}=\,\boldsymbol{G}^{\,T}\boldsymbol{G}\,=\,
   \lambda^2\,\boldsymbol{I}_n\,.`

**Discussion**

The above corollary is related to a property of diagonal matrices which is described in 

.. admonition:: Lemma.
   
   In algebra :math:`\,M_n(R)\ ` of real square matrices of size :math:`\,n\,,\,`
   a diagonal matrix :math:`\,\boldsymbol{D}\ ` commutes with every matrix
   :math:`\,\boldsymbol{A}\ ` of this algebra if and only if it is proportional to the idenity matrix:   
   
   .. math::
      
      [\,\boldsymbol{A},\boldsymbol{D}\,]\equiv
      \boldsymbol{A}\boldsymbol{D}-\boldsymbol{D}\boldsymbol{A}=
      \boldsymbol{0}\quad
      \text{for every matrix}\ \boldsymbol{A}
      \quad\ \ \Leftrightarrow\quad\ \ 
      \boldsymbol{D}=\alpha\,\boldsymbol{I}_n\,,\ \alpha\in R\,. 

We will denote a diagonal matrix with entries
:math:`\ \alpha_1,\,\alpha_2,\,\ldots,\,\alpha_n\ ` by:

.. math::
   
   \text{diag}\,(\alpha_1,\alpha_2,\ldots,\alpha_n)\ :\,=\ 
   \left[\begin{array}{cccc}
   \alpha_1  &     0     & \ldots &     0   \\
       0     & \alpha_2  & \ldots &     0   \\
    \ldots   &  \ldots   & \ldots &  \ldots \\
       0     &     0     & \ldots & \alpha_n
   \end{array}\right]\,.

.. Jeżeli przez :math:`\ \boldsymbol{R}_1,\,\boldsymbol{R}_2,\,\ldots,\,\boldsymbol{R}_n\ `
   oznaczymy wiersze, a przez 
   :math:`\ \boldsymbol{C}_1,\,\boldsymbol{C}_2,\,\ldots,\,\boldsymbol{C}_n\ ` - :math:`\,`
   kolumny dowolnej macierzy, to wierszowa i kolumnowa reguła mnożenia macierzowego daje odpowiednio

Consider a matrix :math:`\ \boldsymbol{A}\in M_n(R)\ ` with columns
:math:`\ \boldsymbol{C}_1,\,\boldsymbol{C}_2,\,\ldots,\,\boldsymbol{C}_n\ `
and rows :math:`\ \boldsymbol{R}_1,\,\boldsymbol{R}_2,\,\ldots,\,\boldsymbol{R}_n\,.\ `
The above lemma allows us to write the column and row rule of matrix multilplication 
for a product of matrix :math:`\ \boldsymbol{A}\ ` and a diagonal matrix:

.. Jeżeli przez :math:`\ \boldsymbol{C}_1,\,\boldsymbol{C}_2,\,\ldots,\,\boldsymbol{C}_n\ `
   oznaczymy kolumny, a przez 
   :math:`\ \boldsymbol{R}_1,\,\boldsymbol{R}_2,\,\ldots,\,\boldsymbol{R}_n\ ` - :math:`\,`
   wiersze macierzy, :math:`\,` to :math:`\,` 
   kolumnowa :math:`\,` i :math:`\,` wierszowa reguła mnożenia macierzowego daje odpowiednio

.. math::

   [\,\boldsymbol{C}_1\,|\,\boldsymbol{C}_2\,|\,\ldots\,|\,
   \boldsymbol{C}_n\,]\,\cdot\ 
   \text{diag}\,(\alpha_1,\alpha_2,\ldots,\alpha_n)\ \ =\ \ 
   [\,\alpha_1\,\boldsymbol{C}_1\,|\,\alpha_2\,\boldsymbol{C}_2\,|\,\ldots\,|\,
   \alpha_n\,\boldsymbol{C}_n\,]\,,

   \text{diag}\,(\alpha_1,\alpha_2,\ldots,\alpha_n)\ \cdot\ 
   \left[\begin{array}{c}
   \boldsymbol{R}_1 \\ \boldsymbol{R}_2 \\ \ldots \\ \boldsymbol{R}_n
   \end{array}\right]\ \ =\ \ 
   \left[\begin{array}{c}
   \alpha_1\,\boldsymbol{R}_1 \\ \alpha_2\,\boldsymbol{R}_2 \\ \ldots \\ \alpha_n\,\boldsymbol{R}_n
   \end{array}\right]\,.

**Proof of the lemma.**

:math:`\ \Rightarrow\ :\ ` We will show that if 
:math:`\ \boldsymbol{D}\neq\alpha\,\boldsymbol{I}_n\,,\ `
then there exists a matrix :math:`\,\boldsymbol{A}\ `
such that :math:`\,\boldsymbol{A}\boldsymbol{D}\neq\boldsymbol{D}\boldsymbol{A}\,.`

If :math:`\ \boldsymbol{D}=\text{diag}\,(\alpha_1,\alpha_2,\dots,\alpha_n)\,,\ `
where :math:`\ \alpha_p\neq\alpha_q\,,\quad 1\leq p<q \leq n\,,\ `
then we may choose :math:`\ \boldsymbol{A}\ ` to be the matrix whose only non-zero element, equal to 1, say, is in the :math:`\,p`-th row and :math:`\,` in the :math:`\,q`-th column:

.. Niech :math:`\ \boldsymbol{A}\ ` będzie macierzą, której jedyny niezerowy element jest jedynką
   w :math:`\,p`-tym wierszu :math:`\\`
   i :math:`\,` w :math:`\,q`-tej kolumnie, :math:`\,` a 
   :math:`\ \boldsymbol{D}=\text{diag}\,(\alpha_1,\alpha_2,\dots,\alpha_n)\,,\ `
   gdzie :math:`\ \alpha_p\neq\alpha_q\,,\quad 1\leq p<q \leq n\,:`

.. math::
   
   \boldsymbol{A}=[\,a_{ij}\,]_{n\times n}\,,\ \ a_{ij}=\delta_{ip}\,\delta_{jq}\,;\quad
   \boldsymbol{D}=[\,d_{ij}\,]_{n\times n}\,,\ \ d_{ij}=\alpha_i\,\delta_{ij}\,;\quad\ \ 
   i,j=1,2,\dots,n\,.

Denote: 
:math:`\ \boldsymbol{A}\boldsymbol{D}=[\,b_{ij}\,]_{n\times n}\,,\ 
\boldsymbol{D}\boldsymbol{A}=[\,c_{ij}\,]_{n\times n}\,.\ ` 

Matrix multiplication rules and direct computation:

.. math::
   
   b_{ij}\ =\ \sum_{k\,=\,1}^n\ a_{ik}\;d_{kj}\ =\ 
              \sum_{k\,=\,1}^n\ \delta_{ip}\;\delta_{kq}\;\alpha_k\,\delta_{kj}\ =\ 
              \alpha_q\;\delta_{ip}\;\delta_{jq}\,,

   c_{ij}\ =\ \sum_{k\,=\,1}^n\ d_{ik}\;a_{kj}\ =\ 
               \sum_{k\,=\,1}^n\ \alpha_i\;\delta_{ik}\;\delta_{kp}\;\delta_{jq}\ =\ 
               \alpha_p\;\delta_{ip}\;\delta_{jq}\,,

state that
:math:`\,\boldsymbol{A}\boldsymbol{D}\neq\boldsymbol{D}\boldsymbol{A}\,,\ `
because the only non-zero element of both matrices is in the same place and has a different value:
:math:`\ \ b_{pq}=\alpha_q\ \neq\ \alpha_p=c_{pq}\,.`

:math:`\ \Leftarrow\ :\ ` If :math:`\ \boldsymbol{D}=\alpha\,\boldsymbol{I}_n\,,\ ` 
then properties of operations on matrices imply immediately that

.. math::
   
   \boldsymbol{A}\boldsymbol{D}\ =\ \boldsymbol{A}\,(\alpha\,\boldsymbol{I}_n)\ =\ 
   \alpha\,(\boldsymbol{A}\,\boldsymbol{I}_n)\ =\ \alpha\,\boldsymbol{A}\ =\ 
   \alpha\,(\boldsymbol{I}_n\boldsymbol{A})\ =\ (\alpha\,\boldsymbol{I}_n)\,\boldsymbol{A}\ =\  
   \boldsymbol{D}\boldsymbol{A}\,.

Now we can explain a relation between the above :math:`\,`
Corollary :math:`\,` and :math:`\,` Lemma.

Assume that rows :math:`\ \boldsymbol{R}_1,\,\boldsymbol{R}_2,\,\ldots,\,\boldsymbol{R}_n\ `
of matrix :math:`\,\boldsymbol{G}\in M_n(R)\ ` comprise an orthogonal set:

.. math::
   
   \langle\,\boldsymbol{R}_i,\boldsymbol{R}_j\,\rangle\ =\ \alpha_i\;\delta_{ij}\,,\quad
   \alpha_i\neq 0\,,\qquad i,j=1,2,\dots,n\,.

Then the matrix :math:`\ \boldsymbol{G}\,\boldsymbol{G}^{\,T}\ ` is diagonal:
:math:`\ \ \boldsymbol{G}\,\boldsymbol{G}^{\,T}\ =\ \boldsymbol{D}\ =\ 
\text{diag}\,(\alpha_1,\alpha_2,\dots,\alpha_n)\,,\ ` :math:`\\`
where :math:`\ \alpha_i=\|\,\boldsymbol{R}_i\,\|^2\,,\quad i=1,2,\dots,n\,.`

If additionally the norms of all the rows are equal:

.. math::
   :label: equal
   
   \alpha_1=\alpha_2=\dots=\alpha_n=\alpha\,,

then :math:`\ \boldsymbol{D}=\alpha\,\boldsymbol{I}_n\ \,` and :math:`\,` 
the matrix :math:`\ \boldsymbol{D}\ ` commutes with all the matrices 
:math:`\ \boldsymbol{A}\in M_n(R)\,.\ ` Then

.. math::
   :label: verse_col
   
   \boldsymbol{G}\,\boldsymbol{G}^{\,T}=\boldsymbol{D}
   \quad\Leftrightarrow\quad
   \boldsymbol{G}^{\,T}=\boldsymbol{G}^{-1}\boldsymbol{D}
   \quad\Leftrightarrow\quad
   \boldsymbol{G}^{\,T}=\boldsymbol{D}\,\boldsymbol{G}^{-1}
   \quad\Leftrightarrow\quad
   \boldsymbol{G}^{\,T}\boldsymbol{G}=\boldsymbol{D}

and so orthogonality of rows is equivalent to orthogonality of columns of matrix
:math:`\ \boldsymbol{G}\,.\ ` 
Moreover, :math:`\ \,\boldsymbol{G}=\lambda\,\boldsymbol{Q}\,;\ \,`
and if :math:`\ \,\lambda=\sqrt{\alpha}\,, \,` the matrix :math:`\ \,\boldsymbol{Q}\ \,` 
is orthogonal:

.. math::
   
   \boldsymbol{Q}\,\boldsymbol{Q}^{\,T}\ =\ \,
   \boldsymbol{Q}^{\,T}\boldsymbol{Q}\ =\ \boldsymbol{I}_n\,.

However, if the norms of the rows are not equal, that is, the condition :eq:`equal` does not hold,
then :math:`\ \boldsymbol{D}\neq\alpha\,\boldsymbol{I}_n\ \,` and so :math:`\,` 
the matrix :math:`\ \boldsymbol{D}\ ` does not have to commute with
:math:`\ \boldsymbol{G}^{-1}.` Therefore the equivalences :eq:`verse_col` may not hold,  
and thus orthogonality of rows does not imply orthogonality of columns of matrix :math:`\ \boldsymbol{G}\,.`



**Exercise 3.**

A linear operator :math:`\,F\ ` defined on a unitary space :math:`\,V(C)\ `
is *anti-Hermitian* if :math:`\,F^+=-F.`

Show that eigenvalues of such an operator are purely imaginary numbers :math:`\\`
(a complex number :math:`\,z\ ` is *purely imaginary* if :math:`\,\text{re}\,z=0,\ `
that is, if :math:`\,z=i\,\alpha,\ \alpha\in R.`)

**Exercise 4.**

Prove that a product of two Hermitian operators :math:`\,F_1,\,F_2\ ` is Hermitian 
:math:`\\` 
if and only if these operators commute: :math:`\ [F_1,F_2]=0.`

For a comparison, a product of unitary operators is always unitary.






























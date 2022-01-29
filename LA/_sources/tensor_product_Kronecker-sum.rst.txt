
Kronecker Sum of Discrete Laplacians
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We consider a two-dimensional grid of :math:`\,m\times n\,` points 
with a spacing :math:`\,h.\ ` :math:`\\`
Application of the finite difference method with the five-point stencil [1]_

.. math::
   
   \begin{array}{ccc}
   & (x-h,y) & 
   \\ 
   & | &
   \\ 
   (x,y-h) & -\quad (x,y)\quad - & (x,y+h) 
   \\ 
   & | &
   \\
   & (x+h,y) & 
   \end{array}

leads to the approximate expression for the Laplacian of a function
:math:`\,f(x,y)\,` defined on the grid:

.. math::
   
   \Delta f(x,y)\ \approx\ 
   \frac{1}{h^2}\ \ 
   [\,f(x-h,y)+f(x,y-h)+f(x,y+h)+f(x+h,y)-4\,f(x,y)\,].

We shall put henceforth :math:`\,h=1.\ ` 
Thus :math:`\,x=1,2,\ldots,m,\ y=1,2,\ldots,n,\ ` and

.. math::

   \Delta f(x,y)\ =\ 
   \Delta^{(xx)} f(x,y)\ +\ \Delta^{(yy)} f(x,y)

where the 2nd order partial derivatives correspond to the three-point
stencil in one dimension:

.. math::
   :label: deltas

   \Delta^{(xx)} f(x,y)\ \equiv\ 
   \frac{\partial^{\,2}}{\partial x^2}\ f(x,y) \approx\
   f(x-1,y)\ - \ 2\,f(x,y)\ + \ f(x+1,y),   

   \Delta^{(yy)} f(x,y)\ \equiv\ 
   \frac{\partial^{\,2}}{\partial y^2}\ f(x,y) \approx\
   f(x,y-1)\ - \ 2\,f(x,y)\ +\ f(x,y+1).

To write these relations in a matrix form, we use the matrix notation:

.. math::
   
   \begin{array}{rl}
   f(x,y) \rightarrow f_{xy}\,, & 
   \boldsymbol{f}\ :\,=\ [\,f_{xy}\,]_{\,m \times n}\,;
   \\
   \Delta f(x,y) \rightarrow (\Delta f)_{xy}\,, &
   \boldsymbol{\Delta} f\ :\,=\ [\,(\Delta f)_{xy}\,]_{\,m \times n}\,;
   \\ \\
   \Delta^{(xx)} f(x,y) \rightarrow (\Delta^{(xx)} f)_{xy}\,, &
   \boldsymbol{\Delta}^{(xx)} f\ :\,=\ [\,\Delta^{(xx)} f)_{xy}\,]_{\,m \times n}\,;
   \\
   \Delta^{(yy)} f(x,y) \rightarrow (\Delta^{(yy)} f)_{xy}\,, &
   \boldsymbol{\Delta}^{(yy)} f\ :\,=\ [\,\Delta^{(yy)} f)_{xy}\,]_{\,m \times n}\,;
   \\ \\
   \boldsymbol{D}^{(xx)}\ =\ [\,d^{(xx)}_{vw}\,]_{m\times m}\,, &
   \boldsymbol{D}^{(yy)}\ =\ [\,d^{(yy)}_{vw}\,]_{n\times n}\,.
   \end{array}

The index :math:`\,y\in\{1,2,\ldots,n\}\,` being fixed, 
the first of Eqs. :eq:`deltas` can be rewritten as

.. math:: 
   
   (\Delta^{(xx)} f)_{xy}\ \ =\ \ 
   \displaystyle\sum_{w=1}^m\ d^{(xx)}_{xw}\ f_{wy}\,,
   \qquad \forall\ x = 1,2,\ldots,m;

   \boldsymbol{\Delta}^{(xx)} f\ \ =\ \ 
   \boldsymbol{D}^{(xx)}\cdot\,\boldsymbol{f}\,,

   \boldsymbol{\Lambda}^{mn}(\boldsymbol{\Delta}^{(xx)}f)\ =\ 
   (\boldsymbol{D}^{(xx)}\otimes\boldsymbol{I}_n)\ \cdot\ 
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{f})\,.

Here :math:`\,\boldsymbol{\Lambda}^{mn}(\boldsymbol{A})\,` is the column
of coordinates of a :math:`\,m\times n\,` matrix :math:`\,\boldsymbol{A}\,` 
in the standard basis of the vector space :math:`\,M_{m\times n}(K).\ `
The last formula above is the vectorized form of the preceding matrix equation
(see the section 'Vectorization of Matrices' in this chapter).

On the other hand, for a fixed :math:`\,x\in\{1,2,\ldots,m\},\ ` 
the second equation in :eq:`deltas` yields

.. math::
   
   (\Delta^{(yy)} f)_{xy}\ \ =\ \ 
   \displaystyle\sum_{v=1}^n\ d^{(yy)}_{yv}\ f_{xv}\ \ =\ \ 
   \displaystyle\sum_{v=1}^n\ f_{xv}\ \left[\,d^{(yy)}\,\right]_{vy}^{\,T}\,,
   \qquad \forall\ y = 1,2,\ldots,n;

   \boldsymbol{\Delta}^{(yy)} f\ \ =\ \ 
   \boldsymbol{f}\,\cdot\,\left[\,\boldsymbol{D}^{(yy)}\,\right]^{\,T}\,,

   \boldsymbol{\Lambda}^{mn}(\boldsymbol{\Delta}^{(yy)}f)\ =\ 
   (\boldsymbol{I}_m\otimes\boldsymbol{D}^{(yy)})\ \cdot\ 
    \boldsymbol{\Lambda}^{mn}(\boldsymbol{f})

(once again we used vectorization formulas for a matrix product 
from a preceding section).

.. math: 
   
   (\Delta^{(xx)} f)_{xy}\ =\ 
   \displaystyle\sum_{w=1}^m\ d^{(xx)}_{xw}\,f_{wy}\ =\ 
   \displaystyle\sum_{w=1}^m\sum_{v=1}^n\ 
   d^{(xx)}_{xw}\,\delta_{yv}\,f_{wv}\ =\ 
   \displaystyle\sum_{w=1}^m\sum_{v=1}^n\ 
   (\boldsymbol{D}^{(xx)}\otimes\boldsymbol{I}_n)_{xy,wv}\ f_{wv}

Gathering together the partial results for :math:`\ \,\boldsymbol{\Delta}f\,=\,
\boldsymbol{\Delta}^{(xx)}f\ + \ \boldsymbol{\Delta}^{(yy)}f\,,\ \ `
we obtain

.. math::
   
   \blacktriangleright\quad
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{\Delta}f)\ =\ 
   \left(\boldsymbol{D}^{(xx)}\oplus\,\boldsymbol{D}^{(yy)}\right)\ \cdot\ 
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{f})\,,   

where the :math:`\,` *Kronecker sum* :math:`\,` of matrices 
:math:`\,\boldsymbol{D}^{(xx)}\in M_m(K)\ ` and 
:math:`\,\boldsymbol{D}^{(yy)}\in M_n(K)\ ` is defined as

.. math::
   
   \triangleright\quad
   \boldsymbol{D}^{(xx)}\oplus\,\boldsymbol{D}^{(yy)}\ :\,=\ \,
   \boldsymbol{D}^{(xx)}\otimes\,\boldsymbol{I}_n\ +\ 
   \boldsymbol{I}_m\otimes\,\boldsymbol{D}^{(yy)}\,.

To get some idea how the matrices :math:`\,\boldsymbol{D}^{(xx)}\ `
and :math:`\,\boldsymbol{D}^{(yy)}\ ` look, we shall use the tools of Sage.
The function ``ML(n)`` ('Minus Laplacian') returns the matrix
:math:`\,\boldsymbol{D}^{(xx)}\ ` or :math:`\,\boldsymbol{D}^{(yy)}\ ` 
of a given size :math:`\,n:`

.. sagecellserver::
   
   def ML(n):
    
       M = matrix(QQ,n)
       M[0,0],M[0,1] = -1,1
       M[n-1,n-2],M[n-1,n-1] = 1,-1
       for i in range(1,n-1): M[i,i-1],M[i,i],M[i,i+1] =  1,-2,1
    
       return M
    
   ML(4)    

For example, for a :math:`\,3\times 5\ ` grid of 15 points :math:`\,` 
(:math:`m=3,\ n=5`) :math:`\,` the matrices read:

.. math::
   
   \boldsymbol{D}^{(xx)}\ =\ 
   \left[\begin{array}{rrr}
   -1 &  1 &  0 \\
    1 & -2 &  1 \\
    0 &  1 & -1 
   \end{array}\right]
   \,,\qquad
   \boldsymbol{D}^{(yy)}\ =\ 
   \left[\begin{array}{rrrrr}
   -1 &  1 &  0 &  0 &  0 \\
    1 & -2 &  1 &  0 &  0 \\
    0 &  1 & -2 &  1 &  0 \\
    0 &  0 &  1 & -2 &  1 \\
    0 &  0 &  0 &  1 & -1
   \end{array}\right]\,.

Unlike the internal rows, the first and the last rows of these matrices 
do not result from :eq:`deltas`.
Instead, they have been chosen so that :math:`\,\boldsymbol{D}^{(xx)}\ ` 
or :math:`\,\boldsymbol{D}^{(yy)}\ ` are the negative Laplacian matrix [2]_
of a one-dimensional grid with :math:`\,m\,` or :math:`\,n\,` points, 
respectively.

The code below shows the matrix 
:math:`\,\boldsymbol{D}^{(xx)}\oplus\,\boldsymbol{D}^{(yy)}\ `
for a :math:`\,3\times 5\ ` grid of 15 points :math:`\,` 
(:math:`m=3,n=5`):

.. sagecellserver::

   try: 
       D3 = ML(3); D5 = ML(5)
       I3 = identity_matrix(QQ,3); I5 = identity_matrix(QQ,5)
       DD = D3.tensor_product(I5) + I3.tensor_product(D5)
       DD.subdivide([5,10],[5,10]); show(DD)
   except NameError: print "Execute the code in the previous cell!"









.. [1] https://en.wikipedia.org/wiki/Five-point_stencil

.. [2] https://en.wikipedia.org/wiki/Laplacian_matrix





































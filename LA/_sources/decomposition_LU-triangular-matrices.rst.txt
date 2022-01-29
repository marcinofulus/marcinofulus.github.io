
Triangular Matrices
-------------------

If in a matrix :math:`\,\boldsymbol{L}=[l_{ij}]_{n\times n}\in M_n(K)\,`
all elements located above the main diagonal do vanish: 
:math:`\ l_{ij}=0\ ` for :math:`\ i<j,\ ` :math:`\ i,j=1,2,\dots,n\,,\ `
then :math:`\,\boldsymbol{L}\,` is named :math:`\,` a :math:`\,` 
*lower triangular* :math:`\,` matrix.

Correspondingly, :math:`\,` in :math:`\,` an :math:`\,`  *upper triangular* 
:math:`\,` matrix :math:`\,\boldsymbol{U}=[u_{ij}]_{n\times n}\in M_n(K)\,`
vanishing are all elements below the main diagonal: 
:math:`\,u_{ij}=0\ \ \text{for}\ \ i>j,\ \ i,j=1,2,\dots,n\,.`

For instance, triangular matrices of size :math:`\,4\,` have the 
following general form:

.. math::
   :label: MLU
   
   \boldsymbol{L}\ =\ 
   \left[\begin{array}{cccc} l_{11} &    0   &    0   &    0   \\
                             l_{21} & l_{22} &    0   &    0   \\
                             l_{31} & l_{32} & l_{33} &    0   \\
                             l_{41} & l_{42} & l_{43} & l_{44} 
   \end{array}\right]\,,
   \qquad
   \boldsymbol{U}\ =\ 
   \left[\begin{array}{cccc} u_{11} & u_{12} & u_{13} & u_{14} \\
                                0   & u_{22} & u_{23} & u_{24} \\
                                0   &    0   & u_{33} & u_{34} \\
                                0   &    0   &    0   & u_{44} 
   \end{array}\right]\,.

**Properties of triangular matrices.**

* The sum of two lower triangular matrices is a lower triangular matrix.
* The product of a lower triangular matrix by a scalar 
  is a lower triangular matrix.
* The product  of two lower triangular matrices is a lower triangular matrix.
* The inverse of a non-singular lower triangular matrix is also lower triangular.

The set of all lower triangular matrices of size :math:`\,n\,` over a field
:math:`\,K\,` is therefore a subalgebra of the algebra :math:`\,M_n(K).\ `
The same holds for upper triangular matrices.

A system of linear equations with a square coefficient matrix 
:math:`\boldsymbol{A}\,` is easy to solve, when :math:`\,\boldsymbol{A}\,` 
is a lower or upper triangular matrix. For example, let's consider a system
with the matrix :math:`\,\boldsymbol{L}\,` in Eq. :eq:`MLU`, assuming that
:math:`\ l_{ii}\neq 0,\ \ i=1,2,3,4\,:`

.. math::
   :nowrap:
   
   \begin{alignat*}{5}
   l_{11}\,x_1 & {\,}   {\,} &             & {\,}   {\,} &             & {\,}   {\,} &             & {\ \ } = {\ \ } & b_1 \\
   l_{21}\,x_1 & {\,} + {\,} & l_{22}\,x_2 & {\,}   {\,} &             & {\,}   {\,} &             & {\ \ } = {\ \ } & b_2 \\
   l_{31}\,x_1 & {\,} + {\,} & l_{32}\,x_2 & {\,} + {\,} & l_{33}\,x_3 & {\,}   {\,} &             & {\ \ } = {\ \ } & b_3 \\
   l_{41}\,x_1 & {\,} + {\,} & l_{42}\,x_2 & {\,} + {\,} & l_{43}\,x_3 & {\,} + {\,} & l_{44}\,x_4 & {\ \ } = {\ \ } & b_4 
   \end{alignat*}

The solution is readily obtained :math:`\,` by :math:`\,` 
*forward substitution*:

.. math::
   :nowrap:
   
   \begin{eqnarray*}
   x_1 & = & l_{11}^{-1}\ b_1 \\
   x_2 & = & l_{22}^{-1}\ (b_2-l_{21}\,x_1) \\
   x_3 & = & l_{33}^{-1}\ (b_3-l_{31}\,x_1-l_{32}\,x_2) \\
   x_4 & = & l_{44}^{-1}\ (b_4-l_{41}\,x_1-l_{42}\,x_2-l_{43}\,x_3)
   \end{eqnarray*}

In general, 
if the coefficient matrix is a lower triangular one of size :math:`\,n\,`
with non-zero diagonal elements (the latter assures the existence 
of a unique solution), then

.. math::
   
   x_k\ \,=\ \,l_{kk}^{-1}\ 
   \left(\,b_k\ -\ \sum_{i=1}^{k-1}\ l_{ki}\,x_i\,\right)\,,\qquad
   k=1,2,\dots,n\,.

An analogous procedure, viz. the *backward substitution*, :math:`\,` 
yields the solution of a linear system with an upper triangular 
coefficient matrix.













.. _`proofs-fund`:

Fundamental Concepts in Linear Algebra
--------------------------------------

.. admonition:: Theorem.
   
   If a vector space has an :math:`\,n`-element basis, then every set  
   consisting of more than :math:`\,n\,` vectors is linearly dependent.

**Proof.**

Let :math:`\ \mathcal{B}\,=\,(v_1,v_2,\ldots,v_n)\ ` 
be a basis of the space :math:`\,V(K).\ `

We have to show that every set :math:`\ \mathcal{C}=(w_1,w_2,\ldots,w_p)\ `
with :math:`\ p>n\ ` is linearly dependent.

This condition means that there exists a non-trivial linear combination of vectors
:math:`\ w_1,w_2,\ldots,w_p\ ` which is equal to a zero vector :math:`\,\theta,\ ` that is, 
the equation

.. math::
   :label: eqn_theta
   
   c_1\ w_1\ +\ c_2\ w_2\ +\ \ldots\ +\ c_p\ w_p\ =\ \theta

with coefficients :math:`\ c_1,\,c_2,\,\ldots,\,c_p\in K\ \,` has a non-zero solution.

Each of the vectors :math:`\ w_j\ ` may be written as a  
linear combination of the basis vectors:

.. math::
   :label: eqn_wj
   
   w_j\ =\ \sum_{i\,=\,1}^n\ a_{ij}\,v_i\,,\qquad j=1,2,\ldots,p.

Here :math:`\ a_{1j},\,a_{2j},\,\ldots,\,a_{nj}\ ` are coefficients of a vector :math:`\ w_j\ `
in basis :math:`\ \mathcal{B},\quad j=1,2,\ldots,p.`

We substitute :eq:`eqn_wj` into :eq:`eqn_theta` and write the left hand side of the equation
:eq:`eqn_theta` as a linear combination of the basis vectors:

.. math::
   
   \sum_{j\,=\,1}^p\ c_j\,w_j\ \ =\ \ 
   \sum_{j\,=\,1}^p\ c_j\;\left(\ \sum_{i\,=\,1}^n\ a_{ij}\,v_i\right)\ \ =\ \  
   \sum_{i\,=\,1}^n\ \left(\ \sum_{j\,=\,1}^p\ a_{ij}\,c_j\right)\ v_i\ \ =

   \ \ =\ \ 
   \left(\ \sum_{j\,=\,1}^p\,a_{1j}\,c_j\right)\ v_1\ \ +\ \ 
   \left(\ \sum_{j\,=\,1}^p\,a_{2j}\,c_j\right)\ v_2\ \ +\ \ 
   \dots\ \ +\ \ 
   \left(\ \sum_{j\,=\,1}^p\,a_{nj}\,c_j\right)\ v_n\ \ =\ \ \theta\,. 
   
The basis vectors :math:`\ v_1,\,v_2,\,\ldots,\,v_n\ ` are linearly independent. 
Hence, if their linear combination gives a zero vector :math:`\,\theta ,\,`  
then the coefficients must be equal to zero:

.. math::
   
   \sum_{j\,=\,1}^p\ a_{ij}\ c_j\ \,=\ \,0\,,\qquad i=1,2,\ldots,n.

Unfolding these equalities we obtain

.. math::
   
   \begin{array}{l}
   a_{11}\ c_1\ +\ \,a_{12}\ c_2\ +\ \,\dots\ \,+\ \,a_{1p}\ c_p\ \,=\ \ 0 \\
   a_{21}\ c_1\ +\ \,a_{22}\ c_2\ +\ \,\dots\ \,+\ \,a_{2p}\ c_p\ \,=\ \ 0 \\
   \ \ \dots\qquad\quad\dots\qquad\,\dots\qquad\ \dots\qquad\ \dots\quad         \\
   a_{n1}\ c_1\ +\ \,a_{n2}\ c_2\ +\ \,\dots\ \,+\ \,a_{np}\ c_p\ \,=\ \ 0
   \end{array}

a homogeneous system of :math:`\,n\,` linear equations 
with :math:`\,p\,` unknowns :math:`\ c_1,\,c_2,\,\ldots,\,c_p\,,\ `
where the number of equations is smaller than the number of unknowns.

Such a system has non-zero solutions. Indeed, if we solve this system
by the Gauss elimination method, we perform elementary operations on
rows of the coefficient matrix in order to bring it to the reduced row
echelon form. Then the unknowns corresponding to the columns without
leading unities are taken as parameters on which the other
(i.e. corresponding to the columns with leading unities) unknowns
depend.

The number of parameters is equal to a difference between the number
of unknowns and the number of leading unities, and the second number
(equal to the rank of the coefficient matrix) is not greater than the
number of equations. If there are more unknowns than the number of
equations, then the number of parameters is positive, and that is
equivalent to the existence of non-zero solutions. 

.. admonition:: Corollary 1.
   
   If a vector space has an :math:`\,n`-element basis,
   then each basis of this space has :math:`\,n\ ` elements.

Suppose the space :math:`\,V(K)\,` has two bases:
basis :math:`\ \mathcal{B}\ ` with :math:`\,n\,` elements and 
basis :math:`\ \mathcal{C}\ ` with :math:`\,m\,` elements.

If :math:`\,n>m,\ ` then the set :math:`\ \mathcal{B}\ ` is linearly dependent (contradiction).
:math:`\,` Hence :math:`\ \,n\le m.`

If :math:`\,m>n,\ ` then the set :math:`\ \mathcal{C}\ ` is linearly dependent (contradiction).
:math:`\,` Hence :math:`\ \,m\le n.`

In this way :math:`\ \,n\le m\ ` and :math:`\ m\le n,\ \,` and thus :math:`\ \,m=n.` 

Corollary 1. allows to introduce a notion of dimension for a vector space as the number of elements of any finite basis of this space (if such a finite basis exists). :math:`\\`

.. admonition:: Corollary 2.
   
   In an :math:`\,n`-dimensional vector space each set containing more than :math:`\,n\,` 
   vectors is linearly dependent.

.. admonition:: Corollary 3.
   
   In an :math:`\,n`-dimensional vector space each linarly independent set  :math:`\,n\,` 
   of vectors comprises a basis.

Indeed, Corollary 2. implies that such a linearly independent set of :math:`\,n\,` vectors is a maximal linearly independent set, and thus a basis.



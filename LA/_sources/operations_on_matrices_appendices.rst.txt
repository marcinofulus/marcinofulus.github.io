Appendices
----------

A1. :math:`\,` Elementary Operations and Elementary Matrices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We shall prove here some assertions formulated in previous sections 
of this Chapter.

**A.)** To perform a (row) elementary operation :math:`\,O\,` on the product 
:math:`\,\boldsymbol{A}\boldsymbol{B}\ ` of two matrices, it is enough
to apply :math:`\,O\,` to the first factor only: 
:math:`\ O(\boldsymbol{A}\boldsymbol{B}) = (O\boldsymbol{A})\,\boldsymbol{B}.\ `
This can be expressed as

.. admonition:: Lemma. :math:`\,`
   
   If 
   :math:`\,\boldsymbol{A}\in M_{m\times p}(K),\ 
   \boldsymbol{B}\in M_{p\times n}(K),\ ` 
   then :math:`\,` for :math:`\ i,j=1,\ldots,m:`
   
   #. :math:`\ O_1(i,j)\,(\boldsymbol{A}\boldsymbol{B})\ \ =\ \ 
      [\,O_1(i,j)\,\boldsymbol{A}\,]\ \boldsymbol{B}\,,`

   #. :math:`\ O_2(i,a)\,(\boldsymbol{A}\boldsymbol{B})\ \ =\ \ 
      [\,O_2(i,a)\,\boldsymbol{A}\,]\ \boldsymbol{B}\,,\qquad (a\ne 0)`

   #. :math:`\ O_3(i,j,a)\,(\boldsymbol{A}\boldsymbol{B})\ \ =\ \ 
      [\,O_3(i,j,a)\,\boldsymbol{A}\,]\ \boldsymbol{B}\,.`

**Proof.**

We shall make use of the Row Rule of Matrix Multiplication:

.. math::

   \boldsymbol{A}\boldsymbol{B}\ \equiv\    
   \left[\begin{array}{c}
         \boldsymbol{A}_1 \\ 
         \boldsymbol{A}_2 \\
         \dots            \\
         \boldsymbol{A}_m \end{array}\right]\boldsymbol{B}
   \ \ =\ \   
   \left[\begin{array}{c}
         \boldsymbol{A}_1\,\boldsymbol{B} \\ 
         \boldsymbol{A}_2\,\boldsymbol{B} \\
         \dots            \\
         \boldsymbol{A}_m\,\boldsymbol{B} \end{array}\right]\,.

Thus the relations 
:math:`\,` 1., :math:`\,` 2., :math:`\,` and :math:`\,` 3. :math:`\,`
in the Lemma are derived as follows:

.. math::
   
   O_1(i,j)\,(\boldsymbol{A}\boldsymbol{B})\ =\ 
   O_1(i,j)\,
   \left[\begin{array}{c}
         \dots                            \\ 
         \boldsymbol{A}_i\,\boldsymbol{B} \\ 
         \dots                            \\ 
         \boldsymbol{A}_j\,\boldsymbol{B} \\
         \dots                            \\
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \dots                            \\ 
         \boldsymbol{A}_j\,\boldsymbol{B} \\ 
         \dots                            \\ 
         \boldsymbol{A}_i\,\boldsymbol{B} \\
         \dots                            \\
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \dots            \\ 
         \boldsymbol{A}_j \\ 
         \dots            \\ 
         \boldsymbol{A}_i \\
         \dots            \\   
         \end{array}
   \right]\,\boldsymbol{B}\ =\ 
   [\,O_1(i,j)\,\boldsymbol{A}\,]\,\boldsymbol{B}\ ;

   O_2(i,a)\,(\boldsymbol{A}\boldsymbol{B})\ =\ 
   O_2(i,a)\,
   \left[\begin{array}{c}
         \boldsymbol{A}_1\,\boldsymbol{B} \\ 
         \dots                            \\ 
         \boldsymbol{A}_i\,\boldsymbol{B} \\ 
         \dots                            \\ 
         \boldsymbol{A}_m\,\boldsymbol{B} \\
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{A}_1\,\boldsymbol{B}    \\ 
         \dots                               \\ 
         a\,\boldsymbol{A}_i\,\boldsymbol{B} \\ 
         \dots                               \\ 
         \boldsymbol{A}_m\,\boldsymbol{B}    \\
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{A}_1    \\ 
         \dots               \\ 
         a\,\boldsymbol{A}_i \\ 
         \dots               \\ 
         \boldsymbol{A}_m    \\
         \end{array}
   \right]\boldsymbol{B}\ =\ 
   [\,O_2(i,a)\,\boldsymbol{A}\,]\ \boldsymbol{B}\,;

.. math::

   O_3(i,j,a)\,(\boldsymbol{A}\boldsymbol{B})\ \ =\ \  
   O_3(i,j,a)\,
   \left[\begin{array}{c}
         \dots                            \\ 
         \boldsymbol{A}_i\,\boldsymbol{B} \\ 
         \dots                            \\ 
         \boldsymbol{A}_j\,\boldsymbol{B} \\
         \dots                            \\
         \end{array}
   \right]\ \ =\ \ 
   \left[\begin{array}{c}
         \dots                                      \\ 
         \boldsymbol{A}_i\,\boldsymbol{B}\, +\, a\,
         \boldsymbol{A}_j\,\boldsymbol{B}           \\ 
         \dots                                      \\ 
         \boldsymbol{A}_j\,\boldsymbol{B}           \\
         \dots                                      \\
         \end{array}
   \right]\ \ =
               
   =\ \ \ 
   \left[\begin{array}{c}
         \dots                                                      \\ 
         (\boldsymbol{A}_i\ + \, a\boldsymbol{A}_j)\,\boldsymbol{B} \\ 
         \dots                                                      \\ 
         \boldsymbol{A}_j\,\boldsymbol{B}                           \\
         \dots                                                      \\
         \end{array}
   \right]\ \ \ =\ \ \ 
   \left[\begin{array}{c}
         \dots                                 \\ 
         \boldsymbol{A}_i\ + a\boldsymbol{A}_j \\ 
         \dots                                 \\ 
         \boldsymbol{A}_j                      \\
         \dots                                 \\    
         \end{array}
   \right]\,\boldsymbol{B}\ \ \ =\ \ \ 
   [\,O_3(i,j,a)\,\boldsymbol{A}\,]\ \boldsymbol{B}\,.\quad\bullet

**B.)** Application of a (row) elementary operation to a rectangulara matrix 
:math:`\,\boldsymbol{A}\ ` is equivalent to left-multiplying 
:math:`\,\boldsymbol{A}\ ` by the corresponding elementary matrix. 
This has been stated as 

.. admonition:: Theorem 2. :math:`\,` 

   Let :math:`\,\boldsymbol{A}\in M_{m\times n}(K).\ ` 
   Then :math:`\,` for :math:`\ i,j=1,\ldots,m:`

   #. :math:`\ O_1(i,j)\,\boldsymbol{A}\ =
      \ \boldsymbol{E}_1(i,j)\,\boldsymbol{A}\,,`
   #. :math:`\ O_2(i,a)\,\boldsymbol{A}\ =
      \ \boldsymbol{E}_2(i,a)\,\boldsymbol{A}\,,\qquad (a\ne 0)`
   #. :math:`\ O_3(i,j,a)\,\boldsymbol{A}\ =
      \ \boldsymbol{E}_3(i,j,a)\,\boldsymbol{A}\,,`

   where
   :math:`\ \ \boldsymbol{E}_1(i,j),\ 
   \boldsymbol{E}_2(i,a),\ \boldsymbol{E}_3(i,j,a)\in M_m(K).`

**Proof.** :math:`\ ` Taking into account that 
:math:`\,\boldsymbol{A} = \boldsymbol{I}_m\boldsymbol{A}\ ` 
and using the Lemma as well as the definition of elementary matrices, 
we get

:math:`\ O_1(i,j)\,\boldsymbol{A}\ =
\ O_1(i,j)\,(\boldsymbol{I}_m\boldsymbol{A})\ =
\ [\,O_1(i,j)\,\boldsymbol{I}_m\,]\,\boldsymbol{A}\ =
\ \boldsymbol{E}_1(i,j)\,\boldsymbol{A}\,,`

:math:`\ O_2(i,a)\,\boldsymbol{A}\ =
\ O_2(i,a)\,(\boldsymbol{I}_m\boldsymbol{A})\ =
\ [\,O_2(i,a)\,\boldsymbol{I}_m\,]\,\boldsymbol{A}\ =
\ \boldsymbol{E}_2(i,a)\,\boldsymbol{A}\,,`

:math:`\ O_3(i,j,a)\,\boldsymbol{A}\ =
\ O_3(i,j,a)\,(\boldsymbol{I}_m\boldsymbol{A})\ =
\ [\,O_3(i,j,a)\,\boldsymbol{I}_m\,]\,\boldsymbol{A}\ =
\ \boldsymbol{E}_3(i,j,a)\,\boldsymbol{A}\,.\quad\bullet`

In passing we note that composing elementary operations 
:math:`\,O_k,\ O_l\ ` results in multiplying their matrices
:math:`\,\boldsymbol{E}_k = O_k\,\boldsymbol{I}_m,\ 
\boldsymbol{E}_l = O_l\,\boldsymbol{I}_m\,.\ `

Indeed, due to the associativity of matrix multiplication, we get

.. math::
   
   (O_l\circ O_k)\,\boldsymbol{A}\ =\ O_l\ (O_k\,\boldsymbol{A})\ =\ 
   O_l\,(\boldsymbol{E}_k\,\boldsymbol{A})\ =\ 
   \boldsymbol{E}_l\,(\boldsymbol{E}_k\,\boldsymbol{A})\ =\ 
   (\boldsymbol{E}_l\cdot\boldsymbol{E}_k)\,\boldsymbol{A}\,.

**C.)** Elementary matrices are invertible, the inverse 
of an elementary matrix being also an elementary matrix. 
This has been  enunciated in more detail as

.. admonition:: Proposition 2. :math:`\,`
   
   Let :math:`\ \boldsymbol{E}_1(i,j),\ \boldsymbol{E}_2(i,a),\ 
   \boldsymbol{E}_3(i,j,a)\in M_m(K),\ \,
   i,j=1,\ldots,m;\ \,i \neq j\,.\ ` Then
   
   #. :math:`\ [\boldsymbol{E}_1(i,j)]^{-1}\,=\ \boldsymbol{E}_1(i,j),`
   #. :math:`\ [\boldsymbol{E}_2(i,a)]^{-1}\,=
      \ \boldsymbol{E}_2(i,a^{-1}),\qquad (a\ne 0)`
   #. :math:`\ [\boldsymbol{E}_3(i,j,a)]^{-1}\,=\ \boldsymbol{E}_3(i,j,-a).`

**Proof.**

1.) :math:`\:`\ A twofold transposition of any :math:`i`-th and :math:`j`-th
rows is the identity operation:

.. math::
   
   [\,O_1(i,j)\,\circ\,O_1(i,j)\,]\ \ \boldsymbol{I}_m\ \ =
   \ \ \boldsymbol{I}_m\,.

The left-hand side may be transformed as follows:

.. math:
   
   [\,O_1(i,j)\,\circ\,O_1(i,j)\,]\ \,\boldsymbol{I}_m\ =\ 
   O_1(i,j)\ [\,O_1(i,j)\,\boldsymbol{I}_m\,]\ =\ 
   O_1(i,j)\,\boldsymbol{E}_1(i,j)\ =
   
   =\ O_1(i,j)\ [\,\boldsymbol{I}_m\,\boldsymbol{E}_1(i,j)\,]\ =\ 
   [\,O_1(i,j)\ \boldsymbol{I}_m\,]\ \boldsymbol{E}_1(i,j)\ =\ 
   \boldsymbol{E}_1(i,j) \cdot \boldsymbol{E}_1(i,j)

.. math::
   
   [\,O_1(i,j)\,\circ\,O_1(i,j)\,]\ \,\boldsymbol{I}_m\ =\ 
   [\,\boldsymbol{E}_1(i,j) \cdot \boldsymbol{E}_1(i,j)\,]\,
   \boldsymbol{I}_m\ =\ 
   \boldsymbol{E}_1(i,j) \cdot \boldsymbol{E}_1(i,j)\,.

Thus
:math:`\ \ \boldsymbol{E}_1(i,j) \cdot \boldsymbol{E}_1(i,j)\ =
\ \boldsymbol{I}_m\,,\ ` wherefrom
:math:`\ [\,\boldsymbol{E}_1(i,j)\,]^{-1} =\ \boldsymbol{E}_1(i,j)\,.`

2.) :math:`\:` Composing :math:`\,O_2(i,a)\ \,` with 
:math:`\ \ O_2(i,a^{-1})\,` results in the identity operation:

.. math::
   
   \left[\,O_2(i,a^{-1})\,\circ\,O_2(i,a)\,\right]\ \ \boldsymbol{I}_m\ \ =
   \ \ \boldsymbol{I}_m\,,

   \left[\,O_2(i,a^{-1})\,\circ\,O_2(i,a)\,\right]\ \,\boldsymbol{I}_m\ =\ 
   \left[\,\boldsymbol{E}_2(i,a^{-1})\cdot\boldsymbol{E}_2(i,a)\,\right]\,
   \boldsymbol{I}_m\ =\ 
   \boldsymbol{E}_2(i,a^{-1})\cdot\boldsymbol{E}_2(i,a)\,.


.. The left-hand side may be rewritten as

.. math:
   
   [\,O_2(i,a^{-1})\,\circ\,O_2(i,a)\,]\ \,\boldsymbol{I}_m\ =\ 
   O_2(i,a^{-1})\ [\,O_2(i,a)\,\boldsymbol{I}_m\,]\ =\ 
   O_2(i,a^{-1})\,\boldsymbol{E}_2(i,a)\ =
   
   =\ O_2(i,a^{-1})\ [\,\boldsymbol{I}_m\,\boldsymbol{E}_2(i,a)\,]\ =\ 
   [\,O_2(i,a^{-1})\ \boldsymbol{I}_m\,]\ \boldsymbol{E}_2(i,a)\ =\ 
   \boldsymbol{E}_2(i,a^{-1}) \cdot \boldsymbol{E}_2(i,a)

.. math:
   
   [\,O_2(i,a^{-1})\,\circ\,O_2(i,a)\,]\ \,\boldsymbol{I}_m\ =\ 
   [\,\boldsymbol{E}_2(i,a^{-1})\cdot\boldsymbol{E}_2(i,a)\,]\,
   \boldsymbol{I}_m\ =\ 
   \boldsymbol{E}_2(i,a^{-1})\cdot\boldsymbol{E}_2(i,a)\,.

Thus
:math:`\ \ \boldsymbol{E}_2(i,a^{-1}) \cdot \boldsymbol{E}_2(i,a)\ =
\ \boldsymbol{I}_m\,,\ ` wherefrom
:math:`\ [\,\boldsymbol{E}_2(i,a)\,]^{-1} =\ \boldsymbol{E}_2(i,a^{-1})\,.`

3.) :math:`\ ` Composition of  :math:`\,O_3(i,j,a)\ \,` with 
:math:`\ \ O_3(i,j,-a)\,` yields the identity operation:

.. math::
   
   [\,O_3(i,j,-a)\,\circ\,O_3(i,j,a)\,]\ \ \boldsymbol{I}_m\ \ =
   \ \ \boldsymbol{I}_m\,.

.. Now the left-hand side reads
   
.. math:
   
   [\,O_3(i,j,-a)\,\circ\,O_3(i,j,a)\,]\ \,\boldsymbol{I}_m\ =\ 
   O_3(i,j,-a)\ [\,O_3(i,j,a)\,\boldsymbol{I}_m\,]\ =\ 
   O_3(i,j,-a)\,\boldsymbol{E}_3(i,j,a)\ =
   
   =\ O_3(i,j,-a)\ [\,\boldsymbol{I}_m\,\boldsymbol{E}_3(i,j,a)\,]\ =\ 
   [\,O_3(i,j,-a)\ \boldsymbol{I}_m\,]\ \boldsymbol{E}_3(i,j,a)\ =\ 
   \boldsymbol{E}_3(i,j,-a) \cdot \boldsymbol{E}_3(i,j,a)
   
Thus
:math:`\ \ \boldsymbol{E}_3(i,j,-a) \cdot \boldsymbol{E}_3(i,j,a)\ =
\ \boldsymbol{I}_m\,\ ` wherefrom
:math:`\ \,[\,\boldsymbol{E}_3(i,j,a)\,]^{-1} =\ \boldsymbol{E}_3(i,j,-a)\,.
\quad\bullet`

A2. :math:`\,` Extended (reduced row) Echelon Form of a Matrix
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. The method ``extended_echelon_form()`` appends the identity matrix 
   :math:`\,\boldsymbol{I}_m\in M_m(K)\ ` to the right of a given 
   rectangular matrix :math:`\,\boldsymbol{A}\in M_{m\times n}(K)\ `
   and converts the obtained matrix with :math:`\,m\,` rows and :math:`\,n+m\,`
   columns into the reduced row echelon (rre) form. [4]_ 

.. Then the final :math:`\,m\,` columns of the result yield a square matrix 
   :math:`\,\boldsymbol{D}\ ` that transforms :math:`\,\boldsymbol{A}\ ` 
   to the rre form when it multiplies :math:`\,\boldsymbol{A}\,` from the left.
   Obviously, for a non-singular square matrix :math:`\,\boldsymbol{A}\,` 
   we get :math:`\,\boldsymbol{D}=\boldsymbol{A}^{-1}.\ ` On the other hand, 
   if :math:`\,\boldsymbol{A}\ ` is a matrix over a ring that is not a field, 
   the returned echelon matrix may be non-reduced, i.e. its leading entries 
   may be non-unital (unlike ``rref()``, :math:`\,` ``extended_echelon_form()`` 
   does not automatically move to the rational field).

The method ``extended_echelon_form()`` appends the identity matrix 
:math:`\,\boldsymbol{I}_m\in M_m(K)\ ` to the right of a given 
rectangular matrix :math:`\,\boldsymbol{A}\in M_{m\times n}(K).\ `
The obtained matrix with :math:`\,m\,` rows and :math:`\,n+m\,`
columns is afterwards converted into the row echelon form. When the base 
ring of the matrix is a field, this is the reduced row echelon (rre)  form.
Otherwise, if :math:`\,\boldsymbol{A}\ ` is built over a ring that is 
not a field, the returned echelon matrix will be non-reduced, 
i.e. its leading entries may be non-unital (unlike ``rref()``, :math:`\,`  
``extended_echelon_form()`` does not automatically move 
to the rational field). [4]_

The final :math:`\,m\,` columns of the matrix returned by 
``extended_echelon_form()`` provide a square matrix 
:math:`\,\boldsymbol{D}\ ` that transforms :math:`\,\boldsymbol{A}\ ` 
to the echelon form when it multiplies :math:`\,\boldsymbol{A}\,` 
from the left. Obviously, for a non-singular square matrix 
:math:`\,\boldsymbol{A}\,` we get :math:`\,\boldsymbol{D}=
\boldsymbol{A}^{-1}.\ ` :math:`\\`

**Example.**
Given the matrix :math:`\ \ \boldsymbol{A}\ =\ 
\left[\begin{array}{rrrrr}
1 & 0 & 2 & -1 & 2 \\ -1 & 1 & -2 & 3 & -3 \\ 2 & 0 & 4 & -2 & 4 
\end{array}\right]\,\in\,M_{3\times 5}(Q)\,,` :math:`\\`

we shall find its rre form and the matrix 
:math:`\,\boldsymbol{D}\,` such that the product 
:math:`\,\boldsymbol{D}\boldsymbol{A}\,` is the rre form
of :math:`\,\boldsymbol{A}\,.` :math:`\\`

.. This task shall be accomplished in two ways.

**1.)** :math:`\,` Basic approach.
The rre form of :math:`\,\boldsymbol{A}\ ` may be achieved
by two elementary operations:

* :math:`\,` to the second row add the first row,
* :math:`\,` from the third row subtract the doubled first row.

.. Therefore the rre form of :math:`\,\boldsymbol{A}\ ` is given by

The row operations being represented by elementary matrices, we get

.. math::

   O_3(2,0,-2)\,O_3(1,0,1)\,\boldsymbol{A}\ =\ 
   \boldsymbol{E}_3(2,0,-2)\,\boldsymbol{E}_3(1,0,1)\,\boldsymbol{A}\ =  

   \\ =\    
   \left[\begin{array}{rrr} 
       1 & 0 & 0 \\ 0 & 1 & 0 \\ -2 & 0 & 1 
   \end{array}\right]\ 
   \left[\begin{array}{rrr} 
       1 & 0 & 0 \\ 1 & 1 & 0 \\  0 & 0 & 1 
   \end{array}\right]\ 
   \left[\begin{array}{rrrrr}
       1 & 0 & 2 & -1 & 2 \\ -1 & 1 & -2 & 3 & -3 \\ 2 & 0 & 4 & -2 & 4 
   \end{array}\right]\ =
 
   \\ =\ 
   \left[\begin{array}{rrr} 
       1 & 0 & 0 \\ 1 & 1 & 0 \\ -2 & 0 & 1 
   \end{array}\right]\ 
   \left[\begin{array}{rrrrr}
   1 & 0 & 2 & -1 & 2 \\ -1 & 1 & -2 & 3 & -3 \\ 2 & 0 & 4 & -2 & 4 
   \end{array}\right]\ =\ 
   \left[\begin{array}{rrrrr}
   1 & 0 & 2 & -1 & 2 \\  0 & 1 &  0 & 2 & -1 \\ 0 & 0 & 0 & 0 & 0 
   \end{array}\right]\,.
   
.. math:

   \begin{array}{c}
   O_3(2,0,-2)\,O_3(1,0,1)\,\boldsymbol{A}\ =\ 
   \boldsymbol{E}_3(2,0,-2)\,\boldsymbol{E}_3(1,0,1)\,\boldsymbol{A}\ =  
   \\[10 pt] 
   =\ 
   \left[\begin{array}{rrr} 
       1 & 0 & 0 \\ 0 & 1 & 0 \\ -2 & 0 & 1 
   \end{array}\right]\ 
   \left[\begin{array}{rrr} 
       1 & 0 & 0 \\ 1 & 1 & 0 \\  0 & 0 & 1 
   \end{array}\right]\ 
   \left[\begin{array}{rrrrr}
       1 & 0 & 2 & -1 & 2 \\ -1 & 1 & -2 & 3 & -3 \\ 2 & 0 & 4 & -2 & 4 
   \end{array}\right]\ =
   \\[16 pt]
   =\ 
   \left[\begin{array}{rrr} 
       1 & 0 & 0 \\ 1 & 1 & 0 \\ -2 & 0 & 1 
   \end{array}\right]\ 
   \left[\begin{array}{rrrrr}
   1 & 0 & 2 & -1 & 2 \\ -1 & 1 & -2 & 3 & -3 \\ 2 & 0 & 4 & -2 & 4 
   \end{array}\right]\ =\ 
   \left[\begin{array}{rrrrr}
   1 & 0 & 2 & -1 & 2 \\  0 & 1 &  0 & 2 & -1 \\ 0 & 0 & 0 & 0 & 0 
   \end{array}\right]\,.
   \end{array}


The matrix :math:`\,\boldsymbol{D}\,` in demand is given by

.. math::
   
   \boldsymbol{D}_1\ =\ 
   \left[\begin{array}{rrr} 
    1 & 0 & 0 \\ 
    1 & 1 & 0 \\ 
   -2 & 0 & 1 
   \end{array}\right]\,.
   
.. :math:`\,`

**2.)** :math:`\,` Application of the method 
:math:`\,` ``extended_echelon_form()``. 

.. This is implemented by the following Sage code:

.. code-block:: python

   sage: A = matrix(QQ,[[ 1, 0, 2,-1, 2],
                        [-1, 1,-2, 3,-3],
                        [ 2, 0, 4,-2, 4]])

   # Create a 2-block Ae_D composed of matrices Ae and D
   # (here Ae := A in the reduced row echelon form); 
   # display the result divided into the Ae and D parts:
   
   sage: Ae_D = A.extended_echelon_form(subdivide=True)
   sage: Ae_D

   [   1    0    2   -1    2|   0    0  1/2]
   [   0    1    0    2   -1|   0    1  1/2]
   [------------------------+--------------]
   [   0    0    0    0    0|   1    0 -1/2]

.. :math:`\,`

.. That approach provides a different value of :math:`\,\boldsymbol{D}\,:`

Thus we come up with another value of :math:`\,\boldsymbol{D}\,:`

.. math::
   
   \boldsymbol{D}_2\ \,=\ \,
   \frac{1}{2}\ \,
   \left[\begin{array}{rrr} 
   0 & 0 &  1 \\ 
   0 & 2 &  1 \\  
   2 & 0 & -1 
   \end{array}\right]\,.

.. :math:`\,`

Both matrices, :math:`\,\boldsymbol{D}_1\ ` and :math:`\,\boldsymbol{D}_2\,,\ `
transform the matrix :math:`\,\boldsymbol{A}\ ` to the same (unique) rre form
by multiplying it from the left:

.. code-block:: python

   sage: A = matrix(QQ,[[ 1, 0, 2,-1, 2],
                        [-1, 1,-2, 3,-3],
                        [ 2, 0, 4,-2, 4]])
    
   sage: D1 = matrix(QQ,[[ 1, 0, 0],
                         [ 1, 1, 0],
                         [-2, 0, 1]]) 

   sage: D2 = matrix(QQ,[[0, 0, 1],
                         [0, 2, 1],
                         [2, 0,-1]])/2
   sage: D1*A == D2*A
   
   True


.. [4] http://doc.sagemath.org/html/en/reference/matrices/sage/matrix/matrix2.html








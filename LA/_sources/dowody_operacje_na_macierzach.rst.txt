
Operations upon Matrices
------------------------

Elementary Operations and Elementary Matrices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To perform an elementary operation :math:`\,O\,` on a product of two matrices
:math:`\,\boldsymbol{A}\ ` and :math:`\ \boldsymbol{B},\ ` :math:`\\` 
one has to apply it to the first factor of the product:
:math:`\ O(\boldsymbol{A}\boldsymbol{B}) = (O\boldsymbol{A})\,\boldsymbol{B}.\ ` :math:`\\`
A more precise description is given by

.. admonition:: Lemma. :math:`\,`
   
   If :math:`\,\boldsymbol{A}\in M_{m\times p}(K),\ \boldsymbol{B}\in M_{p\times n}(K),\ ` 
   then :math:`\,` for :math:`\ i,j=0,1,\ldots,m-1:`
   
   #. :math:`\ O_1(i,j)\,(\boldsymbol{A}\boldsymbol{B})\ \ =\ \ 
      [\,O_1(i,j)\,\boldsymbol{A}\,]\ \boldsymbol{B}\,,`

   #. :math:`\ O_2(i,a)\,(\boldsymbol{A}\boldsymbol{B})\ \ =\ \ 
      [\,O_2(i,a)\,\boldsymbol{A}\,]\ \boldsymbol{B}\,,\qquad (a\ne 0)`

   #. :math:`\ O_3(i,j,a)\,(\boldsymbol{A}\boldsymbol{B})\ \ =\ \ 
      [\,O_3(i,j,a)\,\boldsymbol{A}\,]\ \boldsymbol{B}\,.`

**Proof** makes use of the row matrix multiplication rule:

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

Hence, the identities :math:`\,` 1., :math:`\,` 2. :math:`\,` and :math:`\,` 3. :math:`\,`
may be derived as follows:

.. math::
   
   O_1(i,j)\,(\boldsymbol{A}\boldsymbol{B})\ =\ 
   O_1(i,j)\,
   \left[\begin{array}{c}
         \dots                            \\ 
         \boldsymbol{A}_i\,\boldsymbol{B} \\ 
         \dots                            \\ 
         \boldsymbol{A}_j\,\boldsymbol{B} \\
         \dots
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \dots                            \\ 
         \boldsymbol{A}_j\,\boldsymbol{B} \\ 
         \dots                            \\ 
         \boldsymbol{A}_i\,\boldsymbol{B} \\
         \dots
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \dots            \\ 
         \boldsymbol{A}_j \\ 
         \dots            \\ 
         \boldsymbol{A}_i \\
         \dots
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
         \dots
         \end{array}
   \right]\ \ =\ \ 
   \left[\begin{array}{c}
         \dots                                                                      \\ 
         \boldsymbol{A}_i\,\boldsymbol{B}\, +\, a\,\boldsymbol{A}_j\,\boldsymbol{B} \\ 
         \dots                                                                      \\ 
         \boldsymbol{A}_j\,\boldsymbol{B}                                           \\
         \dots
         \end{array}
   \right]\ \ =
               
   =\ \ \ 
   \left[\begin{array}{c}
         \dots                                                     \\ 
         (\boldsymbol{A}_i\ + \, a\boldsymbol{A}_j)\,\boldsymbol{B} \\ 
         \dots                                                     \\ 
         \boldsymbol{A}_j\,\boldsymbol{B}                          \\
         \dots
         \end{array}
   \right]\ \ \ =\ \ \ 
   \left[\begin{array}{c}
         \dots                                 \\ 
         \boldsymbol{A}_i\ + a\boldsymbol{A}_j \\ 
         \dots                                 \\ 
         \boldsymbol{A}_j                      \\
         \dots
         \end{array}
   \right]\,\boldsymbol{B}\ \ \ =\ \ \ 
   [\,O_3(i,j,a)\,\boldsymbol{A}\,]\ \boldsymbol{B}\,.


Applying an elementary operation on a matrix 
:math:`\,\boldsymbol{A}\ ` is equivalent to mutliplication of this matrix 
(on the left) by a suitable elementary matrix. We state this as

.. admonition:: Theorem. :math:`\,` 

   Let :math:`\,\boldsymbol{A}\in M_{m\times n}(K).\ ` 
   Then :math:`\,` for :math:`\ i,j=0,1,\ldots,m-1:`

   #. :math:`\,O_1(i,j)\,\boldsymbol{A}\ =\ \boldsymbol{E}_1(i,j)\,\boldsymbol{A}\,,`
   #. :math:`\,O_2(i,a)\,\boldsymbol{A}\ =\ \boldsymbol{E}_2(i,a)\,\boldsymbol{A}\,,\qquad (a\ne 0)`
   #. :math:`\,O_3(i,j,a)\,\boldsymbol{A}\ = \boldsymbol{E}_3(i,j,a)\,\boldsymbol{A}\,,`

   where 
   :math:`\ \boldsymbol{E}_1(i,j),\ \boldsymbol{E}_2(i,a),\ \boldsymbol{E}_3(i,j,a)\in M_m(K).`

**Proof.** Taking into account that :math:`\,\boldsymbol{A} = \boldsymbol{I}_m\boldsymbol{A},\ `
the above Lemma and the definition of elementary matrices imply:

:math:`\ 
O_1(i,j)\,\boldsymbol{A}\ =\ O_1(i,j)\,(\boldsymbol{I}_m\boldsymbol{A})\ =\ 
[\,O_1(i,j)\,\boldsymbol{I}_m\,]\,\boldsymbol{A}\ =\ \boldsymbol{E}_1(i,j)\,\boldsymbol{A}\,,`

:math:`\ 
O_2(i,a)\,\boldsymbol{A}\ =\ O_2(i,a)\,(\boldsymbol{I}_m\boldsymbol{A})\ =\ 
[\,O_2(i,a)\,\boldsymbol{I}_m\,]\,\boldsymbol{A}\ =\ \boldsymbol{E}_2(i,a)\,\boldsymbol{A}\,,`

:math:`\ 
O_3(i,j,a)\,\boldsymbol{A}\ =\ O_3(i,j,a)\,(\boldsymbol{I}_m\boldsymbol{A})\ =\ 
[\,O_3(i,j,a)\,\boldsymbol{I}_m\,]\,\boldsymbol{A}\ =\ \boldsymbol{E}_3(i,j,a)\,\boldsymbol{A}\,.`


Permutation Matrices
~~~~~~~~~~~~~~~~~~~~

To perform an operation :math:`\,O_{\sigma}\,` of row permutation on a product of two matrices
:math:`\,\boldsymbol{A}\ \ \text{i}\ \ \boldsymbol{B},\ ` :math:`\\` 
one has to apply it only to the first factor of the product.

Applying the row permutation :math:`\,O_{\sigma}\,` on a rectangular matrix
:math:`\,\boldsymbol{A}\ ` is equivalent to mutliplication of this matrix 
(on the left) by a suitable permutation matrix.

It is described more precisely in the following

.. admonition:: Theorem. :math:`\,`
   
   If 
   :math:`\,\boldsymbol{A}\in M_{m\times p}(K),\ \boldsymbol{B}\in M_{p\times n}(K),\ \ 
   \sigma\in S_m,\ \ ` then: 

   1. :math:`\ \,O_\sigma\,(\boldsymbol{A}\boldsymbol{B})\ =\ 
      (O_\sigma\boldsymbol{A})\,\boldsymbol{B}\,;`
   2. :math:`\ \,O_\sigma\,\boldsymbol{A}\ =\ \boldsymbol{P}_\sigma\,\boldsymbol{A}\,,\qquad
      \text{where}\quad\boldsymbol{P}_\sigma\,=\,O_\sigma\,\boldsymbol{I}_m\in M_m(K)\,.`

**Proof** bases on the row matrix multiplication rule:

.. math::

   \boldsymbol{A}\boldsymbol{B}\ \equiv\    
   \left[\begin{array}{c}
         \boldsymbol{A}_1 \\ 
         \boldsymbol{A}_2 \\
         \dots            \\
         \boldsymbol{A}_m 
         \end{array}
   \right]\boldsymbol{B}\ \ =\ \   
   \left[\begin{array}{c}
         \boldsymbol{A}_1\,\boldsymbol{B} \\ 
         \boldsymbol{A}_2\,\boldsymbol{B} \\
         \dots                            \\
         \boldsymbol{A}_m\,\boldsymbol{B} 
         \end{array}
   \right]\,.

In this way we obtain the 1. part of the thesis:

.. math::
   
   O_\sigma\,(\boldsymbol{A}\boldsymbol{B})\ =\ 
   O_\sigma
   \left[\begin{array}{c}
         \boldsymbol{A}_1\,\boldsymbol{B} \\ 
         \boldsymbol{A}_2\,\boldsymbol{B} \\
         \dots                            \\
         \boldsymbol{A}_m\,\boldsymbol{B} 
         \end{array}
   \right]\ =
   \left[\begin{array}{c}
         \boldsymbol{A}_{\sigma(1)}\,\boldsymbol{B} \\ 
         \boldsymbol{A}_{\sigma(2)}\,\boldsymbol{B} \\
         \dots                                      \\
         \boldsymbol{A}_{\sigma(m)}\,\boldsymbol{B} 
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{A}_{\sigma(1)} \\ 
         \boldsymbol{A}_{\sigma(2)} \\
         \dots                      \\
         \boldsymbol{A}_{\sigma(m)} \end{array}
   \right]\boldsymbol{B}\ =\ 
   (O_\sigma\boldsymbol{A})\,\boldsymbol{B}\,.

This easily implies the 2. part of the theorem:

.. math::

   O_\sigma\,\boldsymbol{A}\ \ =\ \ 
   O_\sigma\,(\boldsymbol{I}_m\,\boldsymbol{A})\ \ =\ \    
   (O_\sigma\,\boldsymbol{I}_m)\,\boldsymbol{A}\ \ =\ \ 
   \boldsymbol{P}_\sigma\,\boldsymbol{A}\,,
   \qquad\sigma\in S_m\,.

:math:`\;`

A product of two permutation matrices is a permutation matrix. It is formulated more precisely by

.. admonition:: Theorem. :math:`\,`
   
   If
   :math:`\quad P_\rho = O_\rho\,\boldsymbol{I}_m,\ \,P_\sigma = O_\sigma\,\boldsymbol{I}_m,\quad`
   then
   :math:`\quad\boldsymbol{P}_\rho\,\boldsymbol{P}_\sigma\ =\ \boldsymbol{P}_{\sigma\,\circ\,\rho}\,,
   \qquad\rho,\sigma\in S_m\,.`

**Proof.**

Assume first that

.. :math:`\boldsymbol{P}_\rho\,\boldsymbol{P}_\sigma\ =\ 
   (\boldsymbol{P}_\rho\,\boldsymbol{P}_\sigma)\,\boldsymbol{I}_n\ =\ 
   \boldsymbol{P}_\rho\,(\boldsymbol{P}_\sigma\,\boldsymbol{I}_n)\,;`

.. math::
   
   \boldsymbol{P}_\sigma\,\boldsymbol{I}_m\ =\ 
   \boldsymbol{P}_\sigma\,
   \left[\begin{array}{c}
         \boldsymbol{e}_1 \\
         \boldsymbol{e}_2 \\
         \dots            \\
         \boldsymbol{e}_m
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{e}_{\sigma(1)} \\
         \boldsymbol{e}_{\sigma(2)} \\
         \dots                      \\
         \boldsymbol{e}_{\sigma(m)}
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{e}'_1 \\
         \boldsymbol{e}'_2 \\
         \dots             \\
         \boldsymbol{e}'_m
         \end{array}
   \right]\,,
   \quad\text{where}\quad\boldsymbol{e}'_i\ =\ \boldsymbol{e}_{\sigma(i)}\,,\quad i=1,2,\ldots,m.

Hence, a product of two permutation matrices may be written as

.. math::
   
   \boldsymbol{P}_\rho\,\boldsymbol{P}_\sigma\ =\ 
   (\boldsymbol{P}_\rho\,\boldsymbol{P}_\sigma)\,\boldsymbol{I}_m\ =\ 
   \boldsymbol{P}_\rho\,(\boldsymbol{P}_\sigma\,\boldsymbol{I}_m)\ =\ 
   \boldsymbol{P}_\rho\,
   \left[\begin{array}{c}
         \boldsymbol{e}'_1 \\
         \boldsymbol{e}'_2 \\
         \dots             \\
         \boldsymbol{e}'_m
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{e}'_{\rho(1)} \\
         \boldsymbol{e}'_{\rho(2)} \\
         \dots                     \\
         \boldsymbol{e}'_{\rho(m)}
         \end{array}
   \right]\,.

Substitution :math:`\ \ i\rightarrow\rho(i)\ \ ` 
in the equation :math:`\ \ \boldsymbol{e}'_i\ =\ \boldsymbol{e}_{\sigma(i)}\ \ ` gives

.. math::

   \boldsymbol{e}'_{\rho(i)}\ =\ \boldsymbol{e}_{\sigma[\rho(i)]}\ =\ 
   \boldsymbol{e}_{(\sigma\,\circ\,\rho)(i)}\,,\qquad i=1,2,\ldots,m.

Hence,

.. math::
   
   \boldsymbol{P}_\rho\,\boldsymbol{P}_\sigma\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{e}'_{\rho(1)} \\
         \boldsymbol{e}'_{\rho(2)} \\
         \dots                     \\
         \boldsymbol{e}'_{\rho(m)}
         \end{array}
   \right]\ =\ 
   \left[\begin{array}{c}
         \boldsymbol{e}_{(\sigma\,\circ\,\rho)(1)} \\
         \boldsymbol{e}_{(\sigma\,\circ\,\rho)(2)} \\
         \dots                                     \\
         \boldsymbol{e}_{(\sigma\,\circ\,\rho)(m)}
         \end{array}
   \right]\ =\ 
   \boldsymbol{P}_{\sigma\,\circ\,\rho}
   \left[\begin{array}{c}
         \boldsymbol{e}_1 \\
         \boldsymbol{e}_2 \\
         \dots            \\
         \boldsymbol{e}_m
         \end{array}
   \right]\ =\ 
   \boldsymbol{P}_{\sigma\,\circ\,\rho}\ \boldsymbol{I}_m\ =\ 
   \boldsymbol{P}_{\sigma\,\circ\,\rho}\,.

   



   

   
   

   






























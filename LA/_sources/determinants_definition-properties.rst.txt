
Definition and Properties of the Deteminant
-------------------------------------------

In the following the column notation of matrices is being used:
 
.. Matrices shall be given in the column notation:

.. math::
   
   M_n(K)\ni\boldsymbol{A}\ =\ [a_{ij}]_{n\times n}\ =\ 
   \left[\,\boldsymbol{A}_1\,|\;\boldsymbol{A}_2\,|\,
   \dots\,|\,\boldsymbol{A}_n\,\right]\,,\quad
   \text{where}\quad
   \boldsymbol{A}_j\ =\ 
   \left[\begin{array}{c}
   a_{1j} \\ a_{2j} \\ \dots \\ a_{nj}
   \end{array}\right]\,,\quad j=1,2,\ldots,n.

We shall accept an axiomatic definition, which establishes in advance 
the basic properties of determinants.
   
.. admonition:: Definition. :math:`\\`

   The determinant of size :math:`\ n\ ` is a function 
   :math:`\ \det : M_n(K)\to K\ ` :math:`\\` satisfying 
   the following Axioms (:math:`j\;-` any column number, 
   :math:`\ \lambda\in K`) : :math:`\\`

   1. :math:`\ \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,
      \boldsymbol{A}_j+\boldsymbol{A}'_j\,|\,\dots\,|\,
      \boldsymbol{A}_n\,]\ \ = \\
      \ \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}_j\,|\,
      \dots\,|\,\boldsymbol{A}_n\,]\ +\  
      \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}'_j\,|\,
      \dots\,|\,\boldsymbol{A}_n\,]\,; \\`
      
   2. :math:`\ \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,
      \lambda\,\boldsymbol{A}_j\,|\,\dots\,|\,\boldsymbol{A}_n\,]\ \ =\ \ 
      \lambda\,\cdot\,\det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,
      \boldsymbol{A}_j\,|\,\dots\,|\,\boldsymbol{A}_n\,]\,;\\`

   3. :math:`\ \boldsymbol{A}_j\ =\ \boldsymbol{A}_{j+1}
      \quad\Rightarrow\quad
      \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}_j\,|\,
      \boldsymbol{A}_{j+1}\,|\,\dots\,|\,\boldsymbol{A}_n\,]\ =\ 0\,;\\`

   4. :math:`\ \det\ \boldsymbol{I}_n\ =\ 1\,,\qquad
      \boldsymbol{I}_n\ -\ \text{identity matrix.}`

:math:`\ `

The determinant of a matrix :math:`\,\boldsymbol{A}\,` is denoted as

.. math::
   
   \det\boldsymbol{A}\ =\ 
   \det\ [a_{ij}]_{n\times n}\ =\ 
   \det
   \left[\begin{array}{cccc}
         a_{11} & a_{12} & \dots & a_{1n} \\
         a_{21} & a_{22} & \dots & a_{2n} \\
          \dots &  \dots & \dots &  \dots \\
         a_{n1} & a_{n2} & \dots & a_{nn}
         \end{array}
   \right]\ \ =\ \ 
   \left|\begin{array}{cccc}
         a_{11} & a_{12} & \dots & a_{1n} \\
         a_{21} & a_{22} & \dots & a_{2n} \\
          \dots &  \dots & \dots &  \dots \\
         a_{n1} & a_{n2} & \dots & a_{nn}
         \end{array}
   \right|\,.

:math:`\\`

**Notes and Comments.**

* Determinant is a function that ascribes numbers to square matrices.
  
  Axioms :math:`\,` 1. :math:`\,` and :math:`\ ` 2. :math:`\,` assert
  that this function is linear with respect to each column of matrix
  :math:`\,\boldsymbol{A}\ ` *taken apart*. :math:`\,`
  However, :math:`\,\det\boldsymbol{A}\ ` *is not* :math:`\,` linear 
  with respect to matrix :math:`\,\boldsymbol{A}\ ` itself:
  
  .. math::
      
     \det\ (\boldsymbol{A} + \boldsymbol{B})\ \ne\ 
     \det\ \boldsymbol{A} + \det\ \boldsymbol{B}\,,\quad
     \det\ (\lambda\,\boldsymbol{A})\ \ne\ \lambda\cdot\boldsymbol{A}\,,
     \quad\boldsymbol{A},\boldsymbol{B}\in M_n(K).

  Namely, the Axiom :math:`\,` 2. :math:`\,` implies that
  :math:`\ \ \det\ (\lambda\,\boldsymbol{A})\ =\ 
  \lambda^n\cdot\boldsymbol{A},\quad n=1,2,\ldots`
  
  Axiom :math:`\,` 3. :math:`\,` means that if any two 
  :math:`\,` *adjacent* :math:`\,` columns of matrix :math:`\,\boldsymbol{A}\ ` 
  are identical, :math:`\,` then the determinant of that matrix vanishes.   
  
  Axiom :math:`\,` 4. :math:`\,` postulates that the determinant 
  of an identity matrix equals unity.

* Determinant is definite only for square matrices:
  there does not exist a determinant of any rectangular non-square matrix.

* Determinant of a matrix is something else than the matrix itself.
  This is expressed by the notation (square brackets or parentheses
  for matrices, vertical bars for determinants).

Postponing the question of existence of the function :math:`\,\det,\ `
we shall derive its further properties. :math:`\\`  

.. admonition:: Property :math:`\,` I. :math:`\,` 
   
   If any column of matrix :math:`\,\boldsymbol{A}\ ` contains zeros only,
   :math:`\,` then :math:`\ \det{\boldsymbol{A}}=0.`

**Proof.** :math:`\,` Let 
:math:`\ \ d\,:\,=\,\det{\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,
\boldsymbol{A}_j\,|\,\dots\,|\,\boldsymbol{A}_n\,]}\,,\quad 
j\in\{1,2,\ldots,n\}\,.\ \ \\`
If :math:`\ \boldsymbol{A}_j=\boldsymbol{0},\ \,` 
then :math:`\ \boldsymbol{A}_j=0\cdot\boldsymbol{A}_j\,.\ `
From Axiom 2. we get :math:`\ \,d = 0\cdot d = 0\,.\quad\bullet` :math:`\\` 

.. admonition:: Property :math:`\,` IIa. :math:`\,`

   A transposition of two :math:`\,` *adjacent* :math:`\,`
   columns changes the sign of the determinant.    

**Proof.** :math:`\,` 
In virtue of Axioms :math:`\,` 1. :math:`\,` and :math:`\,` 3. :math:`\,`  
we may write

.. math::
   
   \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}' + 
   \boldsymbol{A}''\,|\,\boldsymbol{A}' + 
   \boldsymbol{A}''\,|\,\dots\,|\,\boldsymbol{A}_n\,]\ \ =

   =\ \ 
   \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}'\,|\,
   \boldsymbol{A}'\,|\,\dots\,|\,\boldsymbol{A}_n\,]\ +\ 
   \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}'\,|\,
   \boldsymbol{A}''\,|\,\dots\,|\,\boldsymbol{A}_n\,]\ \ +

   \ \ +\ \ 
   \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}''\,|\,
   \boldsymbol{A}'\,|\,\dots\,|\,\boldsymbol{A}_n\,]\ +\ 
   \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}''\,|\,
   \boldsymbol{A}''\,|\,\dots\,|\,\boldsymbol{A}_n\,]\ \ =

   =\ \ 
   \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}'\,|\,
   \boldsymbol{A}''\,|\,\dots\,|\,\boldsymbol{A}_n\,]\ +\ 
   \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}''\,|\,
   \boldsymbol{A}'\,|\,\dots\,|\,\boldsymbol{A}_n\,]\ \ =\ \ 0\,.

.. math::

   \text{Therefore}\quad\det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,
   \boldsymbol{A}''\,|\,\boldsymbol{A}'\,|\,\dots\,|\,\boldsymbol{A}_n\,]
   \ \ =\ \ -\ 
   \det\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}'\,|\,
   \boldsymbol{A}''\,|\,\dots\,|\,\boldsymbol{A}_n\,]\,.\quad\bullet

.. :math:`\ \det\ [\,\boldsymbol{A}_1,\,\dots,\,\boldsymbol{A}' + 
   \boldsymbol{A}'',\,\boldsymbol{A}' + 
   \boldsymbol{A}'',\,\dots,\,\boldsymbol{A}_n\,]\ \ =`
   
   :math:`\ \det\ [\,\boldsymbol{A}_1,\,\dots,\,\boldsymbol{A}',\,
   \boldsymbol{A}',\,\dots,\,\boldsymbol{A}_n\,]\ +\ 
   \det\ [\,\boldsymbol{A}_1,\,\dots,\,\boldsymbol{A}',\,
   \boldsymbol{A}'',\,\dots,\,\boldsymbol{A}_n\,]\ \ +`
   
   :math:`\ \det\ [\,\boldsymbol{A}_1,\,\dots,\,\boldsymbol{A}'',\,
   \boldsymbol{A}',\,\dots,\,\boldsymbol{A}_n\,]\ +\ 
   \det\ [\,\boldsymbol{A}_1,\,\dots,\,\boldsymbol{A}'',\,
   \boldsymbol{A}'',\,\dots,\,\boldsymbol{A}_n\,]\ \ =`
   
   :math:`\ \det\ [\,\boldsymbol{A}_1,\,\dots,\,\boldsymbol{A}',\,
   \boldsymbol{A}'',\,\dots,\,\boldsymbol{A}_n\,]\ +\ 
   \det\ [\,\boldsymbol{A}_1,\,\dots,\,\boldsymbol{A}'',\,
   \boldsymbol{A}',\,\dots,\,\boldsymbol{A}_n\,]\ \ =\ \ 0\,.`

   Stąd :math:`\quad\det\ [\,\boldsymbol{A}_1,\,\dots,\,\boldsymbol{A}'',\,
   \boldsymbol{A}',\,\dots,\,\boldsymbol{A}_n\,]\ \ =\ \ -\ 
   \det\ [\,\boldsymbol{A}_1,\,\dots,\,\boldsymbol{A}',\,
   \boldsymbol{A}'',\,\dots,\,\boldsymbol{A}_n\,]\,.`

.. admonition:: Property :math:`\,` IIb. :math:`\,`

   A transposition of :math:`\,` *any*  :math:`\,` two columns
   changes the sign of the determinant.    

**Proof.** :math:`\,` 
A transposition of any two columns is composed of an odd number 
of transpositions of adjacent columns. :math:`\quad\bullet`

:math:`\;`

.. admonition:: Property :math:`\,` IIc. :math:`\\` 
   
   For any permutation :math:`\,\sigma\in S_n:`

   .. math::
   
      \det\ [\,
      \boldsymbol{A}_{\sigma(1)}\,|\;\boldsymbol{A}_{\sigma(2)}\,|\,\dots\,|\,
      \boldsymbol{A}_{\sigma(n)}\,]
      \ \ =\ \ 
      \text{sgn}\,\sigma\,\cdot\,
      \det\ [\,\boldsymbol{A}_1\,|\;\boldsymbol{A}_2\,|\,
               \dots\,|\,\boldsymbol{A}_n\,]\,,

**Proof.** :math:`\\` 
Reordering of columns into the layout corresponding 
to permutation :math:`\,\sigma\ ` can be achieved by an even 
(when :math:`\,\text{sgn}\,\sigma=+1`) or odd 
(when :math:`\,\text{sgn}\,\sigma=-1`) number of transpositions,
each of which changes sign of the determinant.
As a result, the sign of the determinant remains unchanged or 
turns into the opposite, respectively. :math:`\quad\bullet`  

**Practical conclusion.** :math:`\\` 
Reordering of columns of a matrix yields 
at most change of sign of its determinant.

:math:`\;`

.. admonition:: Property :math:`\,` IIIa. :math:`\,`
   
   When :math:`\,` *any* :math:`\,` two columns of a matrix are identical, 
   :math:`\,` then its determinant vanishes.

**Proof.** :math:`\\` 
Let :math:`\ d\,:\,=\,\det{\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,
\boldsymbol{A}_j\,|\,\dots\,|\,\boldsymbol{A}_k\,|\,
\dots\,|\,\boldsymbol{A}_n\,]}\,,\quad j<k\in\{1,2,\dots,n\}\,.`

If :math:`\ \boldsymbol{A}_j = \boldsymbol{A}_k\,,\ `
then according to Property IIb.: :math:`\ \,d = -\ d,\ \,` 
wherefrom :math:`\ \,d = 0.` :math:`\quad\bullet`  

:math:`\;`

.. admonition:: Property :math:`\,` IIIb. :math:`\,`
   
   If any two columns of a matrix are proportional, 
   then its determinant vanishes.

**Proof.** :math:`\\` 
Indeed, :math:`\,` from :math:`\,` Axiom 2. :math:`\,` and :math:`\,` 
Property :math:`\,` IIIa. :math:`\,` we infer 
that for :math:`\,\lambda\in K :`

.. math::
   
   \det{\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}'\,|\,\dots\,|\,
   \lambda\,\boldsymbol{A}'\,|\,\dots\,|\,\boldsymbol{A}_n\,]}\ \ =\ \ 
   \lambda\,\cdot\,\det{\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,
   \boldsymbol{A}'\,|\,\dots\,|\,\boldsymbol{A}'\,|\,\dots\,|\,
   \boldsymbol{A}_n\,]}\ =\ 0\,.

:math:`\;`

.. admonition:: Property :math:`\,` IIIc. :math:`\,`   

   Adding to a column of a matrix a scalar multiple of another column 
   does not influence the determinant of the matrix.

**Proof.** :math:`\\` 
This property stems from the :math:`\,` 1.  and  2. :math:`\,` Axioms 
as well as from the Property IIIb.:

.. math::
   
   \det{\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}_j\,|\,\dots\,|\,
   \boldsymbol{A}_k + \lambda\,\boldsymbol{A}_j\,|\,\dots\,|\,
   \boldsymbol{A}_n\,]}\ \ =

   =\ \ 
   \det{\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}_j\,|\,\dots\,|\,
   \boldsymbol{A}_k\,|\,\dots\,|\,\boldsymbol{A}_n\,]}\ +\ 
   \lambda\ 
   \det{\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}_j\,|\,\dots\,|\,
   \boldsymbol{A}_j\,|\,\dots\,|\,\boldsymbol{A}_n\,]}\ \ =

   =\ \ 
   \det{\ [\,\boldsymbol{A}_1\,|\,\dots\,|\,\boldsymbol{A}_j\,|\,\dots\,|\,
   \boldsymbol{A}_k\,|\,\dots\,|\,\boldsymbol{A}_n\,]}\,.
   \quad\bullet

.. :math:`\;`

.. admonition:: Property :math:`\,` IV. :math:`\\`   
   
   For any two matrices 
   :math:`\ \boldsymbol{A},\boldsymbol{B}\in M_n(K),\ ` where
   :math:`\ \boldsymbol{B} = [b_{ij}]_{n\times n}:`
   
   .. math::
      
      \det\,(\boldsymbol{A}\boldsymbol{B})\ \,=\ \,
      \det\boldsymbol{A}\ \cdot \sum_{\sigma\,\in\,S_n}\,
      \text{sgn}\,\sigma\,\cdot\,
      b_{\sigma(1),1}\ b_{\sigma(2),2}\ \ldots,\ b_{\sigma(n),\,n}\,.

**Proof.**

Let 
:math:`\ \boldsymbol{A}\ =\ 
[\,\boldsymbol{A}_1\,|\;\boldsymbol{A}_2\,|\,\dots\,|\,\boldsymbol{A}_n\,]\,,
\quad
\boldsymbol{B}\ =\ [b_{ij}]_{n\times n}\,,\quad
\boldsymbol{A}\boldsymbol{B}\ =\ 
[\,\boldsymbol{C}_1\,|\;\boldsymbol{C}_2\,|\,\dots\,|\,\boldsymbol{C}_n\,]\,.`

According to the Column Rule of Matrix Multiplication,
the :math:`\,j`-th column of the product :math:`\boldsymbol{A}\boldsymbol{B}\ ` 
is a linear combination of columns of matrix :math:`\boldsymbol{A}\ ` with
coefficients equal to the consecutive elements of the :math:`\,j`-th column of 
matrix :math:`\boldsymbol{B}:`

.. math::
   
   \boldsymbol{C}_j\ \ =\ \ \sum_{p\,=\,1}^n\ b_{pj}\ \boldsymbol{A}_p\,, 
   \qquad j=1,2,\dots,n\,.

The determinant being linear with respect to each column, we obtain

.. math::

   \det{\,(\boldsymbol{A}\boldsymbol{B})}\ \,=\ \,
   \det{\,[\,
   \boldsymbol{C}_1\,|\;\boldsymbol{C}_2\,|\,\dots\,|\,\boldsymbol{C}_n\,]}
   \ \ =

   =\ \ 
   \det{\,
   \left[\left.\ \   \sum_{r\,=\,1}^n\ \,b_{r1}\,\boldsymbol{A}_r\ \ \right| 
   \left.\ \ \sum_{s\,=\,1}^n\ \,b_{s2}\,\boldsymbol{A}_s\ \ \right|
   \ \ \dots\ \ 
   \left|\ \ \,\sum_{t\,=\,1}^n\ \,b_{tn}\,\boldsymbol{A}_t\ \,\right.
   \right]}\ \ =

   =\ \ 
   \sum_{r\,=\,1}^n\ \sum_{s\,=\,1}^n\ \ldots\ \sum_{t\,=\,1}^n\ \ 
   b_{r1}\ b_{s2}\ \ldots\ b_{tn}\ 
   \det{\,[\,
   \boldsymbol{A}_r\,|\;\boldsymbol{A}_s\,|\,\dots\,|\,\boldsymbol{A}_t\,]}\,.

By the Property IIIa of determinants, in this multiple sum 
only the components in which the columns
:math:`\ \boldsymbol{A}_r,\,\boldsymbol{A}_s,\,\ldots,\,\boldsymbol{A}_t\ ` 
have different indices may not vanish. Thus the sum actually runs over
all permutations of the set :math:`\ \{1,2,\dots,n\},\ ` that is over
permutations :math:`\,\sigma\in S_n\,.`   

Using the Property IIc. we get finally

.. math::
   
   \det{\,(\boldsymbol{A}\boldsymbol{B})}\ \,=\ \,    
   \sum_{\sigma\,\in\,S_n}\ 
   b_{\sigma(1),1}\ b_{\sigma(2),2}\ \ldots,\ b_{\sigma(n),n}\ 
   \det{\,[\,
   \boldsymbol{A}_{\sigma(1)}\,|\;\boldsymbol{A}_{\sigma(2)}\,|\,\ldots\,|\,
   \boldsymbol{A}_{\sigma(n)}\,]}\ \ =
   
   =\ \ 
   \det{\boldsymbol{A}}\,\cdot\,\sum_{\sigma\,\in\,S_n}\ 
   \text{sgn}\,\sigma\,\cdot\,
   b_{\sigma(1),1}\ b_{\sigma(2),2}\ \ldots,\ b_{\sigma(n),n}\,.
   \quad\bullet





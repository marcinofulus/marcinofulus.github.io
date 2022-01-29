
Problems with Solutions
-----------------------

**Problem 1.** :math:`\,`
Let :math:`\ \boldsymbol{A}\,=\,[\,a_{ij}\,]_{\,2\times 2}\ ` 
be an arbitrary square matrix of size two over a field :math:`\ K.\ ` 
For :math:`\ n=2\ ` and :math:`\ 3\ ` show directly, that the matrix 
:math:`\ \boldsymbol{A}\otimes\boldsymbol{I}_n\ ` 
may be converted into :math:`\,\boldsymbol{I}_n\otimes\boldsymbol{A}\ `
by means of some transpositions of rows :math:`\ R_i\ ` associated with
the same transpositions of columns :math:`\ C_j\quad (i,j=1,\ldots,n).\ `
Determine the permutation matrices :math:`\ \boldsymbol{P}\ ` and 
:math:`\ \boldsymbol{Q}\ ` in the relation

.. math::
   
   \boldsymbol{I}_n\otimes\boldsymbol{A}\ \, = \ \,
   \boldsymbol{P}\ 
   (\boldsymbol{A}\otimes\boldsymbol{I}_n)\ 
   \boldsymbol{Q}\,.

Verify that :math:`\,\boldsymbol{Q} = \boldsymbol{P}^T =
\boldsymbol{P}^{-1},\ ` meaning that :math:`\,\boldsymbol{P}\ ` and
:math:`\,\boldsymbol{Q}\ ` are, :math:`\,` respectively, :math:`\,` 
the row and column permutation matrices of the same permutation 
:math:`\,\sigma.\ ` Write down :math:`\,\sigma\,` in a two-line form.

.. if :math:`\,\boldsymbol{P}\,` is the matrix of a permutation 
   :math:`\,\sigma\,` of rows, then :math:`\,\boldsymbol{Q}\,` 
   is the matrix of the same permutation of columns. 

**Solution** :math:`\,` for :math:`\,` :math:`n=2.\ ` 

.. math::
   
   \begin{array}{rrr}
   \boldsymbol{A}\otimes\boldsymbol{I}_2 & =\ \ 
   \left[\begin{array}{cc}
   a_{11}\ \boldsymbol{I}_2 & a_{12}\ \boldsymbol{I}_2 \\
   a_{21}\ \boldsymbol{I}_2 & a_{22}\ \boldsymbol{I}_2
   \end{array}\right]\ \ =\ \ 
   \left[\begin{array}{cc|cc}
   a_{11} &   0    & a_{12} &   0    \\
     0    & a_{11} &   0    & a_{12} \\ \hline
   a_{21} &   0    & a_{22} &   0    \\
     0    & a_{21} &   0    & a_{22}
   \end{array}\right]\ \ \rightarrow &
   \end{array}
   \\[7pt] 
   \begin{array}{rcl}
   & \ \ R_2\leftrightarrow R_3:
   \qquad\qquad\qquad\qquad 
   C_2\leftrightarrow C_3: &
   \\[3pt]
   & \rightarrow\ \ 
   \left[\begin{array}{cccc}
   a_{11} &   0    & a_{12} &   0    \\
   a_{21} &   0    & a_{22} &   0    \\
     0    & a_{11} &   0    & a_{12} \\
     0    & a_{21} &   0    & a_{22}
   \end{array}\right]\ \ \rightarrow\ \ 
   \left[\begin{array}{cc|cc}
   a_{11} & a_{12} &   0    &   0    \\
   a_{21} & a_{22} &   0    &   0    \\ \hline
     0    &   0    & a_{11} & a_{12} \\
     0    &   0    & a_{21} & a_{22}
   \end{array}\right]\ \ =\  
   & \boldsymbol{I}_2\otimes\boldsymbol{A}\,.
   \end{array}
   \\[4pt]

The transformation of matrix :math:`\ \boldsymbol{A}\otimes\boldsymbol{I}_2\ `
into :math:`\ \boldsymbol{I}_2\otimes\boldsymbol{A}\ ` proceeds in one
double step:

.. math::
   :label: trans-2
   
   \boldsymbol{I}_2\otimes\boldsymbol{A}\ \, =\ \,
   \boldsymbol{P}_{23}\ 
   (\boldsymbol{A}\otimes\boldsymbol{I}_2)\ 
   \boldsymbol{Q}_{23}\,,

where :math:`\ \boldsymbol{P}_{23}\ ` is the matrix of transposition of rows
(the second and the third), :math:`\\` 
whilst :math:`\ \,\boldsymbol{Q}_{23}\ ` is the matrix of transposition 
of columns (the second and the third). :math:`\\` 
These operations are performed by the following Sage code:

.. code-block:: python
   
   sage: A = matrix([[var("a%d%d" % (k,l)) for l in [1,2]]
                                           for k in [1,2]])
   sage: I2 = identity_matrix(2)
   
   sage: AxI2 = A.tensor_product(I2)
   
   sage: P23 = elementary_matrix(4, row1=1, row2=2)
   sage: Q23 = elementary_matrix(4, col1=1, col2=2)
   
   sage: I2xA = P23 * AxI2 * Q23
   sage: I2xA.subdivide(2,2)  
 
   sage: (AxI2, I2xA)
   
   (
   [a11   0|a12   0]  [a11 a12|  0   0]
   [  0 a11|  0 a12]  [a21 a22|  0   0]
   [-------+-------]  [-------+-------]
   [a21   0|a22   0]  [  0   0|a11 a12]
   [  0 a21|  0 a22], [  0   0|a21 a22]
   )

**Solution** :math:`\,` for :math:`\,` :math:`n=3\ ` 

.. (wersja wierszowo-kolumnowa):

.. math::

   \begin{array}{llll}   
   \boldsymbol{A}\otimes\boldsymbol{I}_3 & 
   \ =\ \ \ 
   \left[\begin{array}{cc}
   a_{11}\ \boldsymbol{I}_3 & a_{12}\ \boldsymbol{I}_3 \\
   a_{21}\ \boldsymbol{I}_3 & a_{22}\ \boldsymbol{I}_3
   \end{array}\right]\ \ =\ \ &
   \left[\begin{array}{ccc|ccc}
   a_{11} &    0   &    0   & a_{12} &    0   &    0   \\
      0   & a_{11} &    0   &    0   & a_{12} &    0   \\
      0   &    0   & a_{11} &    0   &    0   & a_{12} \\ \hline
   a_{21} &    0   &    0   & a_{22} &    0   &    0   \\
      0   & a_{21} &    0   &    0   & a_{22} &    0   \\
      0   &    0   & a_{21} &    0   &    0   & a_{22} 
   \end{array}\right]\ \ \rightarrow & \qquad\quad
   \end{array}
   \\[10pt]
   \begin{array}{ccc}
   R_2\leftrightarrow R_4: & C_2\leftrightarrow C_4: \\[5pt]
   \rightarrow\ \ 
   \left[\begin{array}{cccccc}
   a_{11} &    0   &    0   & a_{12} &    0   &    0   \\
   a_{21} &    0   &    0   & a_{22} &    0   &    0   \\
      0   &    0   & a_{11} &    0   &    0   & a_{12} \\
      0   & a_{11} &    0   &    0   & a_{12} &    0   \\
      0   & a_{21} &    0   &    0   & a_{22} &    0   \\
      0   &    0   & a_{21} &    0   &    0   & a_{22} 
   \end{array}\right] & 
   \rightarrow\ \ 
   \left[\begin{array}{cccccc}
   a_{11} & a_{12} &    0   &    0   &    0   &    0   \\
   a_{21} & a_{22} &    0   &    0   &    0   &    0   \\
      0   &    0   & a_{11} &    0   &    0   & a_{12} \\
      0   &    0   &    0   & a_{11} & a_{12} &    0   \\
      0   &    0   &    0   & a_{21} & a_{22} &    0   \\
      0   &    0   & a_{21} &    0   &    0   & a_{22} 
   \end{array}\right]\ \ \rightarrow & 
   \end{array}
   \\[10pt]
   \begin{array}{ccc}
   R_4\leftrightarrow R_6: & C_4\leftrightarrow C_6: \\[5pt]
   \rightarrow\ \ 
   \left[\begin{array}{cccccc}
   a_{11} & a_{12} &    0   &    0   &    0   &    0   \\
   a_{21} & a_{22} &    0   &    0   &    0   &    0   \\
      0   &    0   & a_{11} &    0   &    0   & a_{12} \\
      0   &    0   & a_{21} &    0   &    0   & a_{22} \\
      0   &    0   &    0   & a_{21} & a_{22} &    0   \\
      0   &    0   &    0   & a_{11} & a_{12} &    0
   \end{array}\right] & 
   \rightarrow\ \ 
   \left[\begin{array}{cccccc}
   a_{11} & a_{12} &    0   &    0   &    0   &    0   \\
   a_{21} & a_{22} &    0   &    0   &    0   &    0   \\
      0   &    0   & a_{11} & a_{12} &    0   &    0   \\
      0   &    0   & a_{21} & a_{22} &    0   &    0   \\
      0   &    0   &    0   &    0   & a_{22} & a_{21} \\
      0   &    0   &    0   &    0   & a_{12} & a_{11}
   \end{array}\right] \ \ \rightarrow &
   \end{array}
   \\[10pt]
   \begin{array}{ccc}
   R_5\leftrightarrow R_6: & C_5\leftrightarrow C_6: \\[5pt]
   \rightarrow\ \ 
   \left[\begin{array}{cccccc}
   a_{11} & a_{12} &    0   &    0   &    0   &    0   \\
   a_{21} & a_{22} &    0   &    0   &    0   &    0   \\
      0   &    0   & a_{11} & a_{12} &    0   &    0   \\
      0   &    0   & a_{21} & a_{22} &    0   &    0   \\
      0   &    0   &    0   &    0   & a_{12} & a_{11} \\
      0   &    0   &    0   &    0   & a_{22} & a_{21}
   \end{array}\right] & 
   \rightarrow\ \ 
   \left[\begin{array}{cc|cc|cc}
   a_{11} & a_{12} &    0   &    0   &    0   &    0   \\
   a_{21} & a_{22} &    0   &    0   &    0   &    0   \\ \hline
      0   &    0   & a_{11} & a_{12} &    0   &    0   \\ 
      0   &    0   & a_{21} & a_{22} &    0   &    0   \\ \hline
      0   &    0   &    0   &    0   & a_{11} & a_{12} \\
      0   &    0   &    0   &    0   & a_{21} & a_{22}
   \end{array}\right] \ \ = & 
   \boldsymbol{I}_3\otimes\boldsymbol{A}\,.
   \end{array}
   \\[10pt]

The operations performed on rows and columns of the matrix 
:math:`\ \boldsymbol{A}\otimes\boldsymbol{I}_3\ ` may be written as

.. math::
   :label: trans-3
   
   \begin{array}{lll}
   \boldsymbol{I}_3\otimes\boldsymbol{A} &
   =\ \boldsymbol{P}_{56}\,\{\,\boldsymbol{P}_{46}\,[\,\boldsymbol{P}_{24}\,
   (\boldsymbol{A}\otimes\boldsymbol{I}_3)\,
   \boldsymbol{Q}_{24}\,]\,\boldsymbol{Q}_{46}\,\}\,\boldsymbol{Q}_{56}
   \ = & \\[7pt]
   & =\ \ (\boldsymbol{P}_{56}\,\boldsymbol{P}_{46}\,\boldsymbol{P}_{24})\ 
   (\boldsymbol{A}\otimes\boldsymbol{I}_3)\ 
   (\boldsymbol{Q}_{24}\,\boldsymbol{Q}_{46}\,\boldsymbol{Q}_{56})\ \ \equiv 
   & \boldsymbol{P}\ 
   (\boldsymbol{A}\otimes\boldsymbol{I}_3)\ 
   \boldsymbol{Q}.
   \end{array}
   
Thus :math:`\ \boldsymbol{P} = 
\boldsymbol{P}_{56}\ \boldsymbol{P}_{46}\ \boldsymbol{P}_{24}\,,\ `
:math:`\ \boldsymbol{Q} = 
\boldsymbol{Q}_{24}\ \boldsymbol{Q}_{46}\ \boldsymbol{Q}_{56}\,,\ `
where :math:`\ \boldsymbol{P}_{ij}\ ` is a matrix of transposition of rows
:math:`\ i,j\,,\ \,` and :math:`\ \, \boldsymbol{Q}_{ij}\ ` :math:`\ -\ \ `
a matrix of transposition of columns :math:`\ i,j\,,\ ` 
:math:`\ (i<j=1,2,\ldots,6.)`

In view of the relations 
:math:`\ \boldsymbol{Q}_{ij} = \boldsymbol{P}_{ij}^{\,T} =
\boldsymbol{P}_{ij}^{-1}\,,\ \ i<j=1,2,\ldots,6\,,\ `
we obtain 

.. math::

   \begin{array}{ll}   
   \boldsymbol{Q}\ =\ 
   \boldsymbol{Q}_{24}\ \boldsymbol{Q}_{46}\ \boldsymbol{Q}_{56} &
   =\ 
   \boldsymbol{P}_{24}^{\,T}\ 
   \boldsymbol{P}_{46}^{\,T}\ 
   \boldsymbol{P}_{56}^{\,T}\ =\ 
   \left(\boldsymbol{P}_{56}\ \boldsymbol{P}_{46}\ 
   \boldsymbol{P}_{24}\right)^T\ =\ 
   \boldsymbol{P}^{\,T}, \\[7pt]
   &
   =\ 
   \boldsymbol{P}_{24}^{-1}\ 
   \boldsymbol{P}_{46}^{-1}\ 
   \boldsymbol{P}_{56}^{-1}\ =\ 
   \left(\boldsymbol{P}_{56}\ \boldsymbol{P}_{46}\ 
   \boldsymbol{P}_{24}\right)^{-1}\ =\ 
   \boldsymbol{P}^{-1},
   \end{array}

hence :math:`\ \ \boldsymbol{Q}\ \,=\ \,\boldsymbol{P}^{\,T}\ =\ \,
\boldsymbol{P}^{-1},\ \ ` which was to be verified.

**A practical conclusion:** :math:`\quad 
\det{(\boldsymbol{A}\otimes\boldsymbol{I}_3)}\,=\,
\det{(\boldsymbol{I}_3\otimes\boldsymbol{A})}\,=\,(\det{\boldsymbol{A}})^3.`

The matrices :math:`\ \boldsymbol{P}\ ` and :math:`\ \boldsymbol{Q}\ `
shall be determined numerically, remembering that in Sage:

* the numbering of rows and columns starts at zero;

* | the matrix :math:`\ \boldsymbol{P}_{ij}\ ` 
    of transposition of rows is an elementary matrix,
  | obtained from the identity matrix by swapping 
    :math:`\ i`-th and :math:`\ j`-th rows; 
  | :math:`\ \boldsymbol{P}_{ij}\ ` transforms any given matrix
    by multiplying it from the left;    

* | the matrix :math:`\ \boldsymbol{Q}_{ij}\ ` 
    of transposition of columns is an elementary matrix,
  | obtained from the identity matrix by swapping  
    :math:`\ i`-th and :math:`\ j`-th columns; 
  | :math:`\ \boldsymbol{Q}_{ij}\ ` transforms any given matrix
    by multiplying it from the right.

.. code-block:: python
   
   sage: P24 = elementary_matrix(6, row1=1, row2=3)
   sage: P46 = elementary_matrix(6, row1=3, row2=5)
   sage: P56 = elementary_matrix(6, row1=4, row2=5)
   sage: P = P56*P46*P24
   
   sage: Q24 = elementary_matrix(6, col1=1, col2=3)
   sage: Q46 = elementary_matrix(6, col1=3, col2=5)
   sage: Q56 = elementary_matrix(6, col1=4, col2=5)
   sage: Q = Q24*Q46*Q56
   
   sage: (P,Q)

   (
   [1 0 0 0 0 0]  [1 0 0 0 0 0]
   [0 0 0 1 0 0]  [0 0 0 0 1 0]
   [0 0 1 0 0 0]  [0 0 1 0 0 0]
   [0 0 0 0 0 1]  [0 1 0 0 0 0]
   [0 1 0 0 0 0]  [0 0 0 0 0 1]
   [0 0 0 0 1 0], [0 0 0 1 0 0]
   )

Now we shall verify numerically the relation :eq:`trans-3`: 

.. code-block:: python
   
   sage: A = matrix([[var("a%d%d" % (k,l)) for l in [1,2]]
                                           for k in [1,2]])
   sage: I3 = identity_matrix(3)
   
   sage: AxI3 = A.tensor_product(I3)
   sage: I3xA = P * AxI3 * Q
   sage: I3xA.subdivide([2,4],[2,4])

   sage: (AxI3, I3xA)
   
   (
                              [a11 a12|  0   0|  0   0]
   [a11   0   0|a12   0   0]  [a21 a22|  0   0|  0   0]
   [  0 a11   0|  0 a12   0]  [-------+-------+-------]
   [  0   0 a11|  0   0 a12]  [  0   0|a11 a12|  0   0]
   [-----------+-----------]  [  0   0|a21 a22|  0   0]
   [a21   0   0|a22   0   0]  [-------+-------+-------]
   [  0 a21   0|  0 a22   0]  [  0   0|  0   0|a11 a12]
   [  0   0 a21|  0   0 a22], [  0   0|  0   0|a21 a22]
   )

Let :math:`\ \sigma\in S_6\ ` be the permutation of rows and columns,
which converts the matrix :math:`\ \boldsymbol{A}\otimes\boldsymbol{I}_3\ `
into :math:`\ \boldsymbol{I}_3\otimes\boldsymbol{A}.\ `
Remembering the definitions of permutation matrices in row and column 
version, the permutation :math:`\ \sigma\ ` may be easily determined from 
the matrix :math:`\ \boldsymbol{P}\ ` or :math:`\ \boldsymbol{Q}\ ` 
calculated above.

To obtain :math:`\ \sigma\ ` in a standard two-line notation, 
we note that if the arguments in the first line are naturally ordered:
:math:`\ \boldsymbol{r}_1\,=\,(1,\,2,\,3,\,4,\,5,\,6),\ ` 
then the second line of corresponding values is given by 
:math:`\ \boldsymbol{r}_2\ =\ 
\boldsymbol{r}_1\cdot\,\boldsymbol{Q}\,.\ `
The Sage code returns :math:`\ \sigma\,` calculated in this way:

.. code-block:: python
   
   sage: r1 = vector([1,2,3,4,5,6])
   sage: r2 = r1 * Q
   sage: sigma = matrix([r1,r2])
   sage: sigma
   
   [1 2 3 4 5 6]
   [1 4 3 6 2 5]

.. :math:`\,`

The permutation in demand is therefore
:math:`\ \,\sigma\ = \ 
\left(\begin{array}{cccccc}
1 & 2 & 3 & 4 & 5 & 6 \\
1 & 4 & 3 & 6 & 2 & 5
\end{array}\right)\,.`

The permutation :math:`\sigma` may also be calculated by composing
the transpositions corresponding to row permutation matrices 
:math:`\ \boldsymbol{P}_{ij}\ ` or column permutation matrices
:math:`\ \boldsymbol{Q}_{ij}\,,\ \ ` taking into account :math:`\\`
the rules of their multiplication:  

.. math::
   
   \boldsymbol{P}_{\rho}\,\cdot\,
   \boldsymbol{P}_{\sigma}\,\cdot\,
   \boldsymbol{P}_{\tau}\, = \ 
   \boldsymbol{P}_{\tau\ \circ\ \sigma\ \circ\ \rho}
   \,,\qquad
   \boldsymbol{Q}_{\rho}\ \cdot\ 
   \boldsymbol{Q}_{\sigma}\ \cdot\ 
   \boldsymbol{Q}_{\tau}\, =\ 
   \boldsymbol{Q}_{\rho\ \circ\ \sigma\ \circ\ \tau}
   \,,\qquad
   \forall\ \rho,\,\sigma,\,\tau\in S_6\,.

That way both products of matrices, 
:math:`\ \boldsymbol{P}_{56}\ \boldsymbol{P}_{46}\ \boldsymbol{P}_{24}\ `
and
:math:`\ \boldsymbol{Q}_{24}\ \boldsymbol{Q}_{46}\ \boldsymbol{Q}_{56}\,,\ `
correspond to the same product of transpositions 
:math:`\ \tau_{24}\ \tau_{46}\ \tau_{56}\,.\ ` 
This yields again the permutation :math:`\ \sigma:`

.. math::
   
   \begin{array}{ll}
   \sigma & = \ \ \tau_{24}\ \tau_{46}\ \tau_{56}\ \ = 
   \\[9pt] 
   & =\ \ \left(\begin{array}{cccccc}
   1 & 2 & 3 & 4 & 5 & 6 \\
   1 & 4 & 3 & 2 & 5 & 6
   \end{array}\right)\ 
   \left(\begin{array}{cccccc}
   1 & 2 & 3 & 4 & 5 & 6 \\
   1 & 2 & 3 & 6 & 5 & 4
   \end{array}\right)\ 
   \left(\begin{array}{cccccc}
   1 & 2 & 3 & 4 & 5 & 6 \\
   1 & 2 & 3 & 4 & 6 & 5
   \end{array}\right)\ \ = 
   \\[10pt] 
   & = \ \ \left(\begin{array}{cccccc}
   1 & 2 & 3 & 4 & 5 & 6 \\
   1 & 4 & 3 & 6 & 2 & 5
   \end{array}\right).
   \end{array}

.. **Rozwiązanie** :math:`\,` dla :math:`\,` :math:`n=3\ ` 
   (wersja kolumnowo-wierszowa):

.. math:

   \begin{array}{llll}   
   \boldsymbol{A}\otimes\boldsymbol{I}_3 & 
   \ =\ \ \ 
   \left[\begin{array}{cc}
   a_{11}\ \boldsymbol{I}_3 & a_{12}\ \boldsymbol{I}_3 \\
   a_{21}\ \boldsymbol{I}_3 & a_{22}\ \boldsymbol{I}_3
   \end{array}\right]\ \ =\ \ &
   \left[\begin{array}{ccc|ccc}
   a_{11} &    0   &    0   & a_{12} &    0   &    0   \\
      0   & a_{11} &    0   &    0   & a_{12} &    0   \\
      0   &    0   & a_{11} &    0   &    0   & a_{12} \\ \hline
   a_{21} &    0   &    0   & a_{22} &    0   &    0   \\
      0   & a_{21} &    0   &    0   & a_{22} &    0   \\
      0   &    0   & a_{21} &    0   &    0   & a_{22} 
   \end{array}\right]\ \ \rightarrow & \qquad\quad
   \end{array}
   \\[10pt]
   \begin{array}{ccc}
   \ \ C_2\leftrightarrow C_4: & R_2\leftrightarrow R_4: \\[5pt]
   \rightarrow\ \ 
   \left[\begin{array}{cccccc}
   a_{11} & a_{12} &    0   &    0   &    0   &    0   \\
      0   &    0   &    0   & a_{11} & a_{12} &    0   \\
      0   &    0   & a_{11} &    0   &    0   & a_{12} \\ 
   a_{21} & a_{22} &    0   &    0   &    0   &    0   \\
      0   &    0   &    0   & a_{21} & a_{22} &    0   \\
      0   &    0   & a_{21} &    0   &    0   & a_{22} 
   \end{array}\right] & 
   \rightarrow\ \ 
   \left[\begin{array}{cccccc}
   a_{11} & a_{12} &    0   &    0   &    0   &    0   \\
   a_{21} & a_{22} &    0   &    0   &    0   &    0   \\
      0   &    0   & a_{11} &    0   &    0   & a_{12} \\
      0   &    0   &    0   & a_{11} & a_{12} &    0   \\ 
      0   &    0   &    0   & a_{21} & a_{22} &    0   \\
      0   &    0   & a_{21} &    0   &    0   & a_{22} 
   \end{array}\right]\ \ \rightarrow & 
   \end{array}
   \\[10pt]
   \begin{array}{ccc}
   C_4\leftrightarrow C_6: & R_4\leftrightarrow R_6: \\[5pt]
   \rightarrow\ \ 
   \left[\begin{array}{cccccc}
   a_{11} & a_{12} &    0   &    0   &    0   &    0   \\
   a_{21} & a_{22} &    0   &    0   &    0   &    0   \\
      0   &    0   & a_{11} & a_{12} &    0   &    0   \\
      0   &    0   &    0   &    0   & a_{12} & a_{11} \\ 
      0   &    0   &    0   &    0   & a_{22} & a_{21} \\
      0   &    0   & a_{21} & a_{22} &    0   &    0  
   \end{array}\right] & 
   \rightarrow\ \ 
   \left[\begin{array}{cccccc}
   a_{11} & a_{12} &    0   &    0   &    0   &    0   \\
   a_{21} & a_{22} &    0   &    0   &    0   &    0   \\
      0   &    0   & a_{11} & a_{12} &    0   &    0   \\
      0   &    0   & a_{21} & a_{22} &    0   &    0   \\
      0   &    0   &    0   &    0   & a_{22} & a_{21} \\
      0   &    0   &    0   &    0   & a_{12} & a_{11}
   \end{array}\right] \ \ \rightarrow &
   \end{array}
   \\[10pt]
   \begin{array}{ccc}
   C_5\leftrightarrow C_6: & R_5\leftrightarrow R_6: \\[5pt]
   \rightarrow\ \ 
   \left[\begin{array}{cccccc}
   a_{11} & a_{12} &    0   &    0   &    0   &    0   \\
   a_{21} & a_{22} &    0   &    0   &    0   &    0   \\
      0   &    0   & a_{11} & a_{12} &    0   &    0   \\
      0   &    0   & a_{21} & a_{22} &    0   &    0   \\
      0   &    0   &    0   &    0   & a_{21} & a_{22} \\
      0   &    0   &    0   &    0   & a_{11} & a_{12}
   \end{array}\right] & 
   \rightarrow\ \ 
   \left[\begin{array}{cc|cc|cc}
   a_{11} & a_{12} &    0   &    0   &    0   &    0   \\
   a_{21} & a_{22} &    0   &    0   &    0   &    0   \\ \hline
      0   &    0   & a_{11} & a_{12} &    0   &    0   \\
      0   &    0   & a_{21} & a_{22} &    0   &    0   \\ \hline
      0   &    0   &    0   &    0   & a_{11} & a_{12} \\
      0   &    0   &    0   &    0   & a_{21} & a_{22}
   \end{array}\right] \ \ = & 
   \boldsymbol{I}_3\otimes\boldsymbol{A}\,.
   \end{array}

.. **Rozwiązanie** :math:`\,` dla :math:`\,` :math:`n=2\ ` 
   (wersja kolumnowo-wierszowa):

.. math:
   
   \begin{array}{rrr}
   \boldsymbol{A}\otimes\boldsymbol{I}_2 & =\ \ 
   \left[\begin{array}{cc}
   a_{11}\ \boldsymbol{I}_2 & a_{12}\ \boldsymbol{I}_2 \\
   a_{21}\ \boldsymbol{I}_2 & a_{22}\ \boldsymbol{I}_2
   \end{array}\right]\ \ =\ \ 
   \left[\begin{array}{cc|cc}
   a_{11} &   0    & a_{12} &   0    \\
     0    & a_{11} &   0    & a_{12} \\ \hline
   a_{21} &   0    & a_{22} &   0    \\
     0    & a_{21} &   0    & a_{22}
   \end{array}\right]\ \ \rightarrow &
   \end{array}
   \\[10pt] 
   \begin{array}{rcl}
   & \ \ C_2\leftrightarrow C_3:
   \qquad\qquad\qquad\qquad 
   R_2\leftrightarrow R_3: &
   \\[5pt]
   & \rightarrow\ \ 
   \left[\begin{array}{cccc}
   a_{11} & a_{12} &   0    &   0    \\
     0    &   0    & a_{11} & a_{12} \\
   a_{21} & a_{22} &   0    &   0    \\
     0    &   0    & a_{21} & a_{22}
   \end{array}\right]\ \ \rightarrow\ \ 
   \left[\begin{array}{cc|cc}
   a_{11} & a_{12} &   0    &   0    \\
   a_{21} & a_{22} &   0    &   0    \\ \hline
     0    &   0    & a_{11} & a_{12} \\
     0    &   0    & a_{21} & a_{22}
   \end{array}\right]\ \ =\  
   & \boldsymbol{I}_2\otimes\boldsymbol{A}\,.
   \end{array}

:math:`\,`

**Problem 2.** :math:`\,`
Let :math:`\ \,\boldsymbol{A}\in M_{m\times n}(K),\ `
:math:`\ \boldsymbol{B},\,\boldsymbol{B}_1,\boldsymbol{B}_2
\in M_{p\times q}(K).\ ` Using the relation

.. math::
   :label: main-1

   (\boldsymbol{A}\otimes\boldsymbol{B})\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})
   \ \,=\ \,
   \boldsymbol{\Lambda}^{mp}
   (\boldsymbol{A}\,\boldsymbol{G}\boldsymbol{B}^T)\,,
   \qquad\forall\ \ \boldsymbol{G}\in M_{n\times q}(K)\,,

where :math:`\ \boldsymbol{\Lambda}^{rs}(\boldsymbol{X})\ `
is a column of coordinates of the matrix
:math:`\ \boldsymbol{X}\in M_{r\times s}(K)\ `
in the basis :math:`\ \mathcal{E}_{r\times s}\,,`

prove the following properties of the tensor product of matrices:

.. math::
   
   \boldsymbol{A}\otimes(\boldsymbol{B}_1 +\,\boldsymbol{B}_2)\ \,=\ \,
   (\boldsymbol{A}\otimes\boldsymbol{B}_1)\ +\ 
   (\boldsymbol{A}\otimes\boldsymbol{B}_2)\,,

   (\gamma\,\boldsymbol{A})\otimes\boldsymbol{B}\ =\
   \boldsymbol{A}\otimes(\gamma\,\boldsymbol{B})\ =\ 
   \gamma\ (\boldsymbol{A}\otimes\boldsymbol{B}),\quad\gamma\in K.

**Solution.** :math:`\,`
Substituting in :eq:`main-1` 
:math:`\ \,\boldsymbol{B}\to\boldsymbol{B}_1 + \boldsymbol{B}_2\,,\ ` where 
:math:`\ \boldsymbol{B}_1,\ \boldsymbol{B}_2 \in M_{p\times q}(K),\ `
we get

.. math::
   
   \begin{array}{ll}
   \left[\,\boldsymbol{A}\otimes\,
   (\boldsymbol{B}_1 + \boldsymbol{B}_2)\,\right]
   \,\cdot\,\boldsymbol{\Lambda}^{nq}(\boldsymbol{G}) & 
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left[\,\boldsymbol{A}\ \boldsymbol{G}\ 
   (\boldsymbol{B}_1 + \boldsymbol{B}_2)^T\,\right]\ =
   \\[6pt] &
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left[\,\boldsymbol{A}\ \boldsymbol{G}\ 
   (\boldsymbol{B}_1^T + \boldsymbol{B}_2^T)\,\right]\ =
   \\[6pt] &
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left(\boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}_1^T + \,
   \boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}_2^T\right)\ =
   \\[6pt] &
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left(\boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}_1^T\right)\ +\ 
   \boldsymbol{\Lambda}^{mp}
   \left(\boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}_2^T\right)\ =
   \\[6pt] &
   =\ \ (\boldsymbol{A}\otimes\boldsymbol{B}_1)\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})\ +\ 
   (\boldsymbol{A}\otimes\boldsymbol{B}_2)\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})\ =
   \\[6pt] &
   =\ \ \left[\,(\boldsymbol{A}\otimes\boldsymbol{B}_1)\ +\ 
   (\boldsymbol{A}\otimes\boldsymbol{B}_2)\,\right]\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})
   \end{array}

for arbitrary matrix :math:`\ \boldsymbol{G}\in M_{n\times q}(K).\ `
Inserting, in place of :math:`\ \boldsymbol{G},\ ` the consecutive matrices 
of the standard basis :math:`\ \mathcal{E}_{n\times q}:\ `
:math:`\ \boldsymbol{G} = \boldsymbol{E}_{11},\ 
\boldsymbol{E}_{12},\ \ldots,\ \boldsymbol{E}_{nq}\,,\ ` 
we come up with equality of the corresponding columns of matrices
:math:`\ \boldsymbol{A}\otimes(\boldsymbol{B}_1 +\,\boldsymbol{B}_2)\ \,`
and :math:`\ (\boldsymbol{A}\otimes\boldsymbol{B}_1)\ +\ 
(\boldsymbol{A}\otimes\boldsymbol{B}_2)\,,\ ` which is equivalent to 
the matrix equality in demand:

.. math::
   
   \boldsymbol{A}\otimes(\boldsymbol{B}_1 +\,\boldsymbol{B}_2)\ \,=\ \,
   (\boldsymbol{A}\otimes\boldsymbol{B}_1)\ +\ 
   (\boldsymbol{A}\otimes\boldsymbol{B}_2)\,.\quad\bullet

Substituting in :eq:`main-1` 
:math:`\ \,\boldsymbol{A}\to\gamma\,\boldsymbol{A}\,,\ ` 
where :math:`\ \gamma\in K,\ ` we get

.. math::
   
   \begin{array}{ll}
   \left[\,(\gamma\,\boldsymbol{A})\otimes\boldsymbol{B}\,\right]
   \,\cdot\,\boldsymbol{\Lambda}^{nq}(\boldsymbol{G}) & 
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left[\,(\gamma\,\boldsymbol{A})\ 
   \boldsymbol{G}\,\boldsymbol{B}^T\,\right]\ =
   \\[6pt] &
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left[\,
   \gamma\ (\boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}^T)
   \right]\ =
   \\[6pt] &
   =\ \ \gamma\,\cdot\,\boldsymbol{\Lambda}^{mp}
   \left(\,\boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}^T\,\right)\ =
   \\[6pt] &
   =\ \ \gamma\,\cdot\,
   \left[\,(\boldsymbol{A}\otimes\boldsymbol{B})\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})\,\right]\ =
   \\[6pt] &
   =\ \ \left[\,
   \gamma\,\cdot\,(\boldsymbol{A}\otimes\boldsymbol{B})\,
   \right]\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})
   \end{array}

for arbitrary matrix :math:`\ \boldsymbol{G}\in M_{n\times q}(K).\ `
This is equivalent to the matrix equality

.. math::
   
   (\gamma\,\boldsymbol{A})\otimes\boldsymbol{B}\ \,=\ \,
   \gamma\ \,(\boldsymbol{A}\otimes\boldsymbol{B}),\quad\gamma\in K.
   \quad\bullet

On the other hand, substituting in :eq:`main-1` 
:math:`\ \boldsymbol{B}\to\gamma\,\boldsymbol{B}\,,\ ` 
where :math:`\ \gamma\in K,\ ` we obtain

.. math::
   
   \begin{array}{ll}
   \left[\,\boldsymbol{A}\otimes(\gamma\,\boldsymbol{B})\,\right]
   \,\cdot\,\boldsymbol{\Lambda}^{nq}(\boldsymbol{G}) & 
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left[\,\boldsymbol{A}\ 
   \boldsymbol{G}\ (\gamma\,\boldsymbol{B})^T\,\right]\ =
   \\[6pt] &
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left[\,\boldsymbol{A}\ 
   \boldsymbol{G}\ (\gamma\,\boldsymbol{B}^T)\,\right]\ =
   \\[6pt] &
   =\ \ \boldsymbol{\Lambda}^{mp}
   \left[\,
   \gamma\ (\boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}^T)\,
   \right]\ =
   \\[6pt] &
   =\ \ \gamma\,\cdot\,\boldsymbol{\Lambda}^{mp}
   \left(\,\boldsymbol{A}\,\boldsymbol{G}\,\boldsymbol{B}^T\,\right)\ =
   \\[6pt] &
   =\ \ \gamma\,\cdot\,
   \left[\,(\boldsymbol{A}\otimes\boldsymbol{B})\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})\,\right]\ =
   \\[6pt] &
   =\ \ \left[\,
   \gamma\,\cdot\,(\boldsymbol{A}\otimes\boldsymbol{B})\,
   \right]\,\cdot\,
   \boldsymbol{\Lambda}^{nq}(\boldsymbol{G})
   \end{array}

for arbitrary matrix :math:`\ \boldsymbol{G}\in M_{n\times q}(K),\ ` whereby

.. math::
   
   \boldsymbol{A}\otimes(\gamma\,\boldsymbol{B})\ =\ 
   \gamma\ (\boldsymbol{A}\otimes\boldsymbol{B}),
   \quad\gamma\in K.\quad\bullet

**Problem 3.** :math:`\\`
Given the matrices :math:`\,\boldsymbol{A}=[a_{ij}]_{m\times m}\,,\ `
:math:`\,\boldsymbol{B}=[b_{ij}]_{n\times n}\ ` and
:math:`\,\boldsymbol{C}=[c_{ij}]_{m\times n}\ ` over a field :math:`\,K,\ `
consider a matrix equation

.. math::
   :label: mat_eqn
   
   \boldsymbol{A}\,\boldsymbol{X}\,\boldsymbol{B}\ =\ \boldsymbol{C}

with the unknown matrix :math:`\,\boldsymbol{X}=[x_{ij}]_{m\times n}\,.\ `
Prove that Equation :eq:`mat_eqn` has a unique solution if, and only if,
the matrices :math:`\,\boldsymbol{A}\ ` and :math:`\,\boldsymbol{B}\ `
are non-singular.

**Solution.** :math:`\,`
Equation :eq:`mat_eqn` implies that

.. math::
   
   c_{ij}\ = \ 
   \displaystyle\sum_{k=1}^m\sum_{l=1}^n\ a_{ik}\ x_{kl}\ b_{lj}\ = \  
   \displaystyle\sum_{k=1}^m\sum_{l=1}^n\ a_{ik}\ b_{jl}^{\,T}\ x_{kl}\ = \ 
   \displaystyle\sum_{k=1}^m\sum_{l=1}^n\ 
   \left(\boldsymbol{A}\otimes\boldsymbol{B}^{\,T}\right)_{ij,\,kl}\ x_{kl}\,,
   
   i=1,2,\ldots,m;\ j=1,2,\ldots,n.

The above :math:`\,mn\,` equations  may be rewritten in a compact matrix form:

.. math::
   :label: vec_eqn
   
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{C})\ =\ 
   (\boldsymbol{A}\otimes\boldsymbol{B}^{\,T})\ \cdot\ 
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{X})\,.

That way, the matrix equation :eq:`mat_eqn` has been converted
into a standard linear system with the square coefficient matrix
:math:`\,\boldsymbol{A}\otimes\boldsymbol{B}^{\,T}\in M_{mn\times mn}(K)\,,\ ` 
the column of unknowns :math:`\,\boldsymbol{\Lambda}^{mn}(\boldsymbol{X})\ `
and the column of constants :math:`\,\boldsymbol{\Lambda}^{mn}(\boldsymbol{C}):`

.. math::
   
   (\boldsymbol{A}\otimes\boldsymbol{B}^{\,T})\ \cdot\ 
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{X})\ =\ 
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{C})\,.

The theory of linear systems says that such a system has a unique solution
if, and only if, the coefficient matrix is non-singular. Here

.. math::
   
   \det{(\boldsymbol{A}\otimes\boldsymbol{B}^{\,T})}\ =\ 
   (\det{\boldsymbol{A})}^n \cdot\ (\det{\boldsymbol{B}^{\,T}})^m\ =\ 
   (\det{\boldsymbol{A})}^n \cdot\ (\det{\boldsymbol{B})}^m\,;

   \det{(\boldsymbol{A}\otimes\boldsymbol{B}^{\,T})}\neq 0
   \quad\Leftrightarrow\quad
   \left(\ \det{\boldsymbol{A}}\neq 0\ \land\ \det{\boldsymbol{B}}\neq 0\ \right)
   \,.

Thus we have proved that the linear system :eq:`vec_eqn`, as well as
the equivalent matrix equation :eq:`mat_eqn`, :math:`\,` have a unique solution
:math:`\,` if and only if :math:`\,` both matrices, :math:`\,\boldsymbol{A}\ ` 
and :math:`\ \boldsymbol{B},\ ` are non-singular. :math:`\\`
The aforesaid unique solution then reads: :math:`\ \boldsymbol{X}\ =\ 
\boldsymbol{A}^{-1}\boldsymbol{C}\,\boldsymbol{B}^{-1}\,.`
:math:`\quad\bullet`

.. math:
   
   \boldsymbol{X}\ =\ 
   \boldsymbol{A}^{-1}\boldsymbol{C}\,\boldsymbol{B}^{-1}\,.

**Problem 4.** :math:`\,`

Given the matrices :math:`\,\boldsymbol{A}\in M_{m\times p}(K)\,` and
:math:`\,\boldsymbol{B}\in M_{p\times n}(K),\ ` the product  
:math:`\,\boldsymbol{A}\boldsymbol{B}\ ` can be expressed 
in the vectorized form as

.. math::
   :label: prod_vect

   \boldsymbol{\Lambda}^{mn}(\boldsymbol{A}\boldsymbol{B})\ \,=\ \,
   \left(\,\boldsymbol{A}\otimes\boldsymbol{I}_n\,\right)\ \cdot\ 
   \boldsymbol{\Lambda}^{pn}(\boldsymbol{B})\ =\ 
   \left(\,\boldsymbol{I}_m\otimes\boldsymbol{B^{\,T}}\,\right)\ \cdot\ 
   \boldsymbol{\Lambda}^{mp}(\boldsymbol{A})\,.

Using the relation between vectors representing a given matrix 
:math:`\,\boldsymbol{C}\in M_{m\times n}(K)\,:`

.. math::
   :label: rel
   
   \boldsymbol{\Lambda}^{nm}(\boldsymbol{C^{\,T}})\ =\ 
   \boldsymbol{\mathrm{V}}^{mn}(\boldsymbol{C})

derive the relations analogous to :eq:`prod_vect` for 
:math:`\,\boldsymbol{\mathrm{V}}^{mn}(\boldsymbol{A}\boldsymbol{B})\,.`

**Solution.** :math:`\,`

.. For :math:`\quad\begin{array}{l}
   \boldsymbol{A}\,:\ m\times p\,,\\ \boldsymbol{B}\,:\ p\times n\,,\end{array}
   \quad\text{we start from}\quad
   \vartriangleright\quad
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{A}\boldsymbol{B})\ \,=\ \,
   \left(\,\boldsymbol{I}_m\otimes\boldsymbol{B^{\,T}}\,\right)\ \cdot\ 
   \boldsymbol{\Lambda}^{mp}(\boldsymbol{A})\,.`

Assume that the dimensions of the matrices are: 
:math:`\ \ \left\{\ \begin{array}{l}
\boldsymbol{A}\,:\ m\times p\,,\\ \boldsymbol{B}\,:\ p\times n\,.\end{array}
\right.\quad` We start from

.. math:: 
   
   \vartriangleright\quad
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{A}\boldsymbol{B})\ \,=\ \,
   \left(\,\boldsymbol{I}_m\otimes\boldsymbol{B^{\,T}}\,\right)\ \cdot\ 
   \boldsymbol{\Lambda}^{mp}(\boldsymbol{A})\,.

The substitution
:math:`\quad\left\{\ \begin{array}{ll}
\boldsymbol{A}\rightarrow\boldsymbol{B}^{\,T}\ :\ m\times p\,; &
\boldsymbol{B}\ :\ p\times m \\
\boldsymbol{B}\rightarrow\boldsymbol{A}^{\,T}\ :\ p\times n\,; &
\boldsymbol{A}\ :\ n\times p 
\end{array}\right.\quad`
yields

.. math:
   
   \begin{array}{ll}
   \boldsymbol{A}\rightarrow\boldsymbol{B}^{\,T}\ :\ m\times p\,; &
   \boldsymbol{B}\ :\ p\times m \\
   \boldsymbol{B}\rightarrow\boldsymbol{A}^{\,T}\ :\ p\times n\,; &
   \boldsymbol{A}\ :\ n\times p 
   \end{array}

.. math::
   
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{B}^T\boldsymbol{A}^T)\ \,=\ \,
   \left(\,\boldsymbol{I}_m\otimes\boldsymbol{A}\,\right)\ \cdot\ 
   \boldsymbol{\Lambda}^{mp}(\boldsymbol{B}^T)\,,

   \boldsymbol{\Lambda}^{mn}
   \left[\,\left(\boldsymbol{A}\boldsymbol{B}\right)^T\,\right]
   \ \,=\ \,
   \left(\,\boldsymbol{I}_m\otimes\boldsymbol{A}\,\right)\ \cdot\ 
   \boldsymbol{\Lambda}^{mp}(\boldsymbol{B}^T)\,.

Making use of relation :eq:`rel` we get

.. math::
   
   \boldsymbol{\mathrm{V}}^{nm}(\boldsymbol{A}\boldsymbol{B})\ =\ 
   \left(\,\boldsymbol{I}_m\otimes\boldsymbol{A}\,\right)\ \cdot\ 
   \boldsymbol{\mathrm{V}}^{pm}(\boldsymbol{B})\,.

To obtain the result for
:math:`\ \ \left\{\ \begin{array}{l}
\boldsymbol{A}\,:\ m\times p\,,\\ \boldsymbol{B}\,:\ p\times n\,,\end{array}
\right.\ \ ` we exchange the denotements :math:`\ m\leftrightarrows n\,:`

.. math::
   
   \blacktriangleright\quad
   \boldsymbol{\mathrm{V}}^{mn}(\boldsymbol{A}\boldsymbol{B})\ =\ 
   \left(\,\boldsymbol{I}_n\otimes\boldsymbol{A}\,\right)\ \cdot\ 
   \boldsymbol{\mathrm{V}}^{pn}(\boldsymbol{B})\,.
   
On the other hand, starting from
 
.. math:: 
   
   \vartriangleright\quad
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{A}\boldsymbol{B})\ \,=\ \,
   \left(\,\boldsymbol{A}\otimes\boldsymbol{I}_n\,\right)\ \cdot\ 
   \boldsymbol{\Lambda}^{pn}(\boldsymbol{B})

and making the substitution 
:math:`\quad\left\{\ \begin{array}{ll}
\boldsymbol{A}\rightarrow\boldsymbol{B}^{\,T}\ :\ m\times p\,; &
\boldsymbol{B}\ :\ p\times m \\
\boldsymbol{B}\rightarrow\boldsymbol{A}^{\,T}\ :\ p\times n\,; &
\boldsymbol{A}\ :\ n\times p 
\end{array}\right.\quad` we get

.. math::
   
   \boldsymbol{\Lambda}^{mn}(\boldsymbol{B}^T\boldsymbol{A}^T)\ \,=\ \,
   \left(\,\boldsymbol{B}^T\otimes\boldsymbol{I}_n\,\right)\ \cdot\ 
   \boldsymbol{\Lambda}^{pn}(\boldsymbol{A}^T)\,,

   \boldsymbol{\Lambda}^{mn}
   \left[\,\left(\boldsymbol{A}\boldsymbol{B}\right)^T\,\right]
   \ \,=\ \,
   \left(\,\boldsymbol{B}^T\otimes\boldsymbol{I}_n\,\right)\ \cdot\ 
   \boldsymbol{\Lambda}^{pn}(\boldsymbol{A}^T)\,.

Using once again the relation :eq:`rel` we obtain

.. math::
   
   \boldsymbol{\mathrm{V}}^{nm}(\boldsymbol{A}\boldsymbol{B})\ =\ 
   \left(\,\boldsymbol{B}^T\otimes\boldsymbol{I}_n\,\right)\ \cdot\ 
   \boldsymbol{\mathrm{V}}^{np}(\boldsymbol{A})\,.

By exchange of the denotements :math:`\ m\leftrightarrows n\ `
we get the relation for :math:`\ \ \left\{\ \begin{array}{l}
\boldsymbol{A}\,:\ m\times p\,,\\ \boldsymbol{B}\,:\ p\times n\,:
\end{array}\right.`

.. math::
   
   \blacktriangleright\quad
   \boldsymbol{\mathrm{V}}^{mn}(\boldsymbol{A}\boldsymbol{B})\ =\ 
   \left(\,\boldsymbol{B}^T\otimes\boldsymbol{I}_m\,\right)\ \cdot\ 
   \boldsymbol{\mathrm{V}}^{mp}(\boldsymbol{A})\,.

Collecting the results, we come up with the formula

.. math::
   
   \boldsymbol{\mathrm{V}}^{mn}(\boldsymbol{A}\boldsymbol{B})\ =\ 
   \left(\,\boldsymbol{I}_n\otimes\boldsymbol{A}\,\right)\ \cdot\ 
   \boldsymbol{\mathrm{V}}^{pn}(\boldsymbol{B})\ =\ 
   \left(\,\boldsymbol{B}^T\otimes\boldsymbol{I}_m\,\right)\ \cdot\ 
   \boldsymbol{\mathrm{V}}^{mp}(\boldsymbol{A})

valid for any matrices :math:`\,\boldsymbol{A}\in M_{m\times p}(K)\ `
and :math:`\,\boldsymbol{B}\in M_{p\times n}(K).` :math:`\quad\bullet`

**Problem 5.** :math:`\,`

Consider a one-dimensional motion along the :math:`\,x`-axis:
:math:`\,x=x(t),\ t\in[\,0,T\,].\ `
Given a vector of position data from a uniform division of the interval
:math:`\,[\,0,T\,]\ ` into :math:`\,N\ ` segments, derive the corresponding acceleration vector by means of the one-dimensional discrete Laplacian. 
Compare illustratively the exact and approximate results. 

**Solution.** :math:`\,`

The function ``ML(N)`` ('Minus Laplacian') returns the :math:`\,N\times N\ ` 
matrix performing the discrete two-fold differentiation of a function 
defined on a one-dimensional grid of :math:`\,N\,` points.

.. sagecellserver::

   def ML(N):
       
       D = matrix(QQ,N)
       D[0,0],D[0,1] = -1,1
       D[N-1,N-2],D[N-1,N-1] = 1,-1
       for i in range(1,N-1): D[i,i-1],D[i,i],D[i,i+1] =  1,-2,1
       
       return D

As an equation of motion, we choose a fourth-order polynomial of time,
:math:`\ x(t),\ t \in [\,0,N\,],\ ` such that :math:`\,x(0)=x(N)=0.\ `
The position is sampled in :math:`\,N+1\,` time points
:math:`\,0,\,1,\,\ldots,\,N,\ ` but the acceleration is evaluated only in
:math:`\,n=N-1\ ` internal time points :math:`\,1,\,\ldots,\,N-1.` 

.. sagecellserver::
   
   def x(N,t):
       x = 10^(-4)*t^2*(N^2-t^2)
       return x

To compare the approximate vs exact results, 
the exact acceleration is given:

.. sagecellserver::

   def a(N,t):
       a = 10^(-4)*2*(N^2-6*t^2)
       return a

Before execution of the code below, 
:math:`\,` **activate** :math:`\,` the three above functions **!**

.. sagecellserver::

   # Number of internal points in which 
   # acceleration shall be calculated:
   n = 20 

   var ('t')
   
   Plt_x = plot(x(n+1,t),(t,0,n+1),color='blue') # plot of x(t)
   Plt_a = plot(a(n+1,t),(t,0,n+1),color='red')  # plot of a(t)
   #show(Plt_x, axes_labels=['$t$','$x$'])
   
   # Vector of position data initialized and actualized:
   X = vector(QQ,n+2) 
   for t in range(n+2): X[t] = x(n+1,t)

   # Two-fold differentiation by matrix multiplication:
   D = ML(n+2) 
   A = D * X   # approximate acceleration raw data
   
   # Actually only the internal points are meaningful:
   APT = [(t,A[t]) for t in range(1,n+1)]
 
   # Discrete plot of acceleration data:
   Pnt_A = points(APT,color='black',size=15) 

   # Display the exact and approximate results together:
   show(Plt_a + Pnt_A, axes_labels=['$t$','$A,a$']) 
   
   # List of exact accelerations:
   ac = [a(n+1,t) for t in range(n+2)]

   print('%6s %11s %10s %13s \n' % ('t', 'A', 'a', '% diff:'))
   
   # For each internal time t prints the approximate (A)
   # and exact (a) acceleration and the relative divergence:
   for t in range(1,n+1):
       print('%6d. %12.4f %10.4f %10.2f' 
       % (t, A[t], ac[t], 100*(A[t]-ac[t])/A[t]))    

**Output.** :math:`\,`
On the background of the exact acceleration plot, the program displays
the discrete values of acceleration calculated by the discrete two-fold
differentiation. 
Additionally, for each internal time :math:`\,t\in \{1,2,\ldots,n\}\ ` 
the approximate (A) and exact (a) values of acceleration as well as
the relative divergence thereof are listed in a table.
By uncommenting a proper command, 
the plot of :math:`\ x=x(t),\ t\in [0,N],\ ` may also be shown.



























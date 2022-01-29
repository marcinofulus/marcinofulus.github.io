
Matrix Inverse by the Elimination Method
----------------------------------------

Given two square matrices of the same size, 
:math:`\ \boldsymbol{A}=[\,a_{ij}\,]_{n\times n}\ \,\text{and}\ \,
\boldsymbol{B}=[\,b_{ij}\,]_{n\times n}\ \,\text{in}\ \,M_n(K)\,,\ ` 
:math:`\\` we shall use the term *2-block* for the matrix formed by 
appending :math:`\,\boldsymbol{B}\,` onto 
the right side of :math:`\ \boldsymbol{A}:`

.. we shall call the *2-block* the matrix formed by 
   appending :math:`\,\boldsymbol{B}\,` onto 
   the right side of :math:`\ \boldsymbol{A}:`

.. math::
   
   \left[\,\boldsymbol{A}\,|\,\boldsymbol{B}\,\right]\ \,:\,=\ \,
   \left[\begin{array}{cccccc}
      a_{11} & \ldots & a_{1n} & b_{11} & \ldots & b_{1n} \\
      a_{21} & \ldots & a_{2n} & b_{21} & \ldots & b_{2n} \\
      \ldots & \ldots & \ldots & \ldots & \ldots & \ldots \\
      a_{n1} & \ldots & a_{nn} & b_{n1} & \ldots & b_{nn}
   \end{array}\right]\,\in\,M_{n\times 2n}(K)\,.

.. admonition:: Lemma. :math:`\,` 

   We assume, as above, that 
   :math:`\ \boldsymbol{A},\boldsymbol{B}\in M_n(K)\,.` 

   1. :math:`\,` If :math:`\ O\ ` is a row elementary operation, :math:`\,` 
      then :math:`\ \,O\,\left[\,\boldsymbol{A}\,|\,\boldsymbol{B}\,\right]\ =\ 
      \left[\,O\boldsymbol{A}\,|\,O\boldsymbol{B}\,\right]\,.`
   
   2. :math:`\,` Let :math:`\ \boldsymbol{C}\in M_n(K)\,.\ \,` 
      Then :math:`\ \,\boldsymbol{C}\,
      \left[\,\boldsymbol{A}\,|\,\boldsymbol{B}\,\right]\,=\,
      \left[\;\boldsymbol{C}\boldsymbol{A}\,|\,
      \boldsymbol{C}\boldsymbol{B}\;\right]\,.`

Whereas the first statement of the Lemma is obvious, the second one may 
be easily validated on the grounds of the Column Rule of Matrix Multiplication.

.. math:
   
   \boldsymbol{A}\ =\ 
   \left[\;\boldsymbol{A}_1\,|\;\boldsymbol{A}_2\,|\;\dots\,|\,
   \boldsymbol{A}_n\;\right]\,, \qquad
   \boldsymbol{B}\ =\ 
   \left[\;\boldsymbol{B}_1\,|\;\boldsymbol{B}_2\,|\;\dots\,|\,
   \boldsymbol{B}_n\;\right]\,.

.. Wykorzystując kolumnową regułę mnożenia macierzowego można zapisać:

.. math:
   
   \boldsymbol{C}\boldsymbol{A}\ \ =\ \ 
   \boldsymbol{C}\,
   \left[\,\boldsymbol{A}_1\,|\;
           \boldsymbol{A}_2\,|\;\dots\,|\,
           \boldsymbol{A}_n\;
   \right]\ \ =\ \  
   \left[\ \boldsymbol{C}\boldsymbol{A}_1\,|\;
           \boldsymbol{C}\boldsymbol{A}_2\,|\;\dots\,|\,
           \boldsymbol{C}\boldsymbol{A}_n\,
   \right]\,;

   \boldsymbol{C}\boldsymbol{B}\ \ =\ \ 
   \boldsymbol{C}\,
   \left[\,\boldsymbol{B}_1\,|\;
           \boldsymbol{B}_2\,|\;\dots\,|\,
           \boldsymbol{B}_n\,
   \right]\ \ =\ \ 
   \left[\ \boldsymbol{C}\boldsymbol{B}_1\,|\;
           \boldsymbol{C}\boldsymbol{B}_2\,|\;\dots\,|\;
           \boldsymbol{C}\boldsymbol{B}_n\;\right]\,;

   \boldsymbol{C}\,\left[\,\boldsymbol{A}\,|\,\boldsymbol{B}\,\right]\ \ =\ \ 
   \left[\ \boldsymbol{C}\boldsymbol{A}_1\,|\;
           \boldsymbol{C}\boldsymbol{A}_2\,|\;\dots\,|\,
           \boldsymbol{C}\boldsymbol{A}_n\;|\  
           \boldsymbol{C}\boldsymbol{B}_1\,|\;
           \boldsymbol{C}\boldsymbol{B}_2\,|\;\dots\,|\,
           \boldsymbol{C}\boldsymbol{B}_n\;\right]\ \ =\ \ 
   \left[\;\boldsymbol{C}\boldsymbol{A}\;|\;
   \boldsymbol{C}\boldsymbol{B}\;\right]\,. 

.. \;

Now suppose that :math:`\,\boldsymbol{A}\in M_n(K)\,` is an invertible matrix,
and that the consecutive elementary operations 
:math:`\,O_1\,,O_2,\,\dots,\,O_k\,,\ ` represented by elementary matrices
:math:`\,\boldsymbol{E}_1,\boldsymbol{E}_2,\dots,\boldsymbol{E}_k\in M_n(K),\,`
transform :math:`\,\boldsymbol{A}\,` into the reduced row echelon form 
(the latter is the identity matrix):

.. math::
   :label: id
   
   O_k\dots O_2\,O_1\ \boldsymbol{A}\ =\ 
   \boldsymbol{E}_k\dots\boldsymbol{E}_2\,\boldsymbol{E}_1\,\boldsymbol{A}\ =\ 
   \boldsymbol{I}_n\,.

We note immediately that

.. math::
   :label: rec
   
   \boldsymbol{E}_k\dots\boldsymbol{E}_2\,\boldsymbol{E}_1\ =\ 
   \boldsymbol{A}^{-1}\,.

Let's apply the operations :math:`\,O_1\,,O_2,\,\dots,\,O_k\ ` to the 2-block
:math:`\,\left[\,\boldsymbol{A}\,|\,\boldsymbol{I}_n\,\right].\,` :math:`\\`
Using the Lemma, Theorem 2. as well as Eqs :eq:`id` and :eq:`rec`, we get

.. math::

   O_k\dots O_2\,O_1\ \left[\,
   \boldsymbol{A}\,|\,\boldsymbol{I}_n\,\right]\ \,=\ \,
   \left[\ O_k\dots O_2\,O_1\ \boldsymbol{A}\ |\ 
   O_k\dots O_2\,O_1\ \boldsymbol{I}_n\ \right]\ \,=

   =\ \,
   \left[\ \boldsymbol{E}_k\dots
   \boldsymbol{E}_2\,
   \boldsymbol{E}_1\ \boldsymbol{A}\ |\  
   \boldsymbol{E}_k\dots
   \boldsymbol{E}_2\,
   \boldsymbol{E}_1\ \boldsymbol{I}_n\ \right]\ \,=\ \,
   \left[\ \boldsymbol{A}^{-1}\boldsymbol{A}\ |\ 
   \boldsymbol{A}^{-1}\boldsymbol{I}_n\ \right]\ =\ 
   \left[\,\boldsymbol{I}_n\;|\;\boldsymbol{A}^{-1}\,\right]\,.

That way we have come up with a practical recipe
to obtain the inverse of a matrix.

.. admonition:: Proposition 3. :math:`\,` 
   Matrix Inversion Algorithm  :math:`\,`

   Let :math:`\,\boldsymbol{A}\in M_n(K)\,` be an invertible matrix. :math:`\\`
   To find its inverse, create the 2-block 
   :math:`\,\left[\,\boldsymbol{A}\,|\,\boldsymbol{I}_n\,\right]\,`
   and perform elementary row operations which transform 
   the first segment of the 2-block into the identity matrix.
   Then the second segment turns out to be :math:`\,\boldsymbol{A}^{-1}\,.`

**Example.** :math:`\,` Find the inverse of
:math:`\ \boldsymbol{A}\ =\ 
\left[\begin{array}{rrrr}
2 &  0 & -1 & 1 \\ 
1 &  1 & -1 & 0 \\ 
-1 &  0 &  6 & 1 \\ 
1 &  0 &  1 & 1 
\end{array}\right]\,.` :math:`\\`

.. math:
   
   \boldsymbol{A}\ =\ \left[\begin{array}{rrrr}
       2 &  0 & -1 & 1 \\
       1 &  1 & -1 & 0 \\
      -1 &  0 &  6 & 1 \\
       1 &  0 &  1 & 1 \end{array}\right]\,.

The Sage code calculates :math:`\,\boldsymbol{A}^{-1}\,` and checks the result:

.. code-block:: python

   sage: A = matrix(QQ,[[ 2, 0,-1, 1],
                        [ 1, 1,-1, 0],
                        [-1, 0, 6, 1],
                        [ 1, 0, 1, 1]])

   # Create the 2-block [A|I]:
   sage: AI = A.augment(identity_matrix(QQ,4))

   # Transform [A|I] into [I|A^(-1)]:
   sage: IA_1 = AI.rref()

   # Select the second segment of the 2-block
   # (columns starting from 4. to the last):
   sage: A_1 = IA_1[:,4:]

   # Display the product of the original matrix 
   # and its inverse:
   sage: table([[A, '*', A_1, '=', A * A_1]])

The output reads:

.. math::
   
   \left[\begin{array}{rrrr}
          2 & 0 & -1 & 1 \\
          1 & 1 & -1 & 0 \\
         -1 & 0 &  6 & 1 \\
          1 & 0 &  1 & 1
         \end{array}\right]\ \ *\ \ \left[\begin{array}{rrrr}
                                           5 & 0 &  2 & -7 \\
                                          -3 & 1 & -1 &  4 \\
                                           2 & 0 &  1 & -3 \\
                                          -7 & 0 & -3 & 11
                                          \end{array}\right]
   \quad = \quad\left[\begin{array}{rrrr}
                      1 & 0 & 0 & 0 \\
                      0 & 1 & 0 & 0 \\
                      0 & 0 & 1 & 0 \\
                      0 & 0 & 0 & 1
                      \end{array}\right]

The matrix :math:`\,\boldsymbol{A}^{-1}\,` in question is given 
as the second factor on the left-hand side.
 

  






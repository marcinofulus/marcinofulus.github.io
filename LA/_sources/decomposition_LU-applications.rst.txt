
Applications of the LU Decomposition
------------------------------------

Solving Systems of Linear Equations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. Rozważmy układ :math:`\,m\,` równań liniowych o :math:`\,n\,` 
   niewiadomych nad ciałem :math:`\,K,\,`
   z macierzą współczynników :math:`\,\boldsymbol{A}\in M_{m\times n}(K)\ `
   i kolumną wolnych wyrazów :math:`\,\boldsymbol{b}\in K^m.`

Consider a system of :math:`\,m\,` linear equations in :math:`\,n\,` 
variables over a field :math:`\,K,` :math:`\\`
with a coefficient matrix 
:math:`\,\boldsymbol{A}\in M_{m\times n}(K)\ ` and :math:`\,` 
a column of constants :math:`\,\boldsymbol{b}\in K^m.`

.. Jeżeli rozkład :math:`\,\boldsymbol{L}\boldsymbol{U}\,` 
   dla macierzy :math:`\,\boldsymbol{A}\ `
   przyjmiemy w postaci :eq:`PA_LU`, to opisany układ równań 
   można przekształcić jak następuje:

Assuming the decomposition 
:math:`\,\boldsymbol{P}\,\boldsymbol{A}=\boldsymbol{L}\,\boldsymbol{U},\ `
the system may be transformed as follows: 

.. math:
   
   (\boldsymbol{P}\boldsymbol{A})\,\boldsymbol{x}\ =\ \boldsymbol{P}\,\boldsymbol{b}
   \qquad\text{czyli}\qquad
   (\boldsymbol{L}\boldsymbol{U})\,\boldsymbol{x}\ =\ \boldsymbol{P}\,\boldsymbol{b}
   \qquad\text{czyli}\qquad
   \boldsymbol{L}(\boldsymbol{U}\boldsymbol{x})\ =\ \boldsymbol{P}\,\boldsymbol{b}\,.

.. math::
   
   \begin{array}{c}
   \boldsymbol{A}\boldsymbol{x}\ =\ \boldsymbol{b}\,,
   \\ \\ 
   (\boldsymbol{P}\,\boldsymbol{A})\,\boldsymbol{x}\ =\ 
   \boldsymbol{P}\,\boldsymbol{b}\,,
   \\ \\
   (\boldsymbol{L}\,\boldsymbol{U})\,\boldsymbol{x}\ =\ 
   \boldsymbol{P}\,\boldsymbol{b}\,,
   \\ \\
   \boldsymbol{L}(\boldsymbol{U}\boldsymbol{x})\ =\ 
   \boldsymbol{P}\,\boldsymbol{b}\,.
   \end{array}

.. Przy oznaczeniu :math:`\,\boldsymbol{y}\ =\ \boldsymbol{U}\boldsymbol{x}\,`
   otrzymujemy układ :math:`\,2m\,` równań o :math:`\,m+n\,` niewiadomych:

Denoting :math:`\,\boldsymbol{y}\ =\ \boldsymbol{U}\boldsymbol{x}\,` we get 
a system of :math:`\,2m\,` equations in :math:`\,m+n\,` unknowns, :math:`\\` 
separated into two subsystems with triangular coefficient matrices:

.. math::
   :label: set_xy
   
   \left\{\ \ \begin{array}{ll}
   \boldsymbol{L}\,\boldsymbol{y}\ =\ \boldsymbol{P}\,\boldsymbol{b}\,, 
   \qquad\qquad & 
   \boldsymbol{L}\in M_m(K),\ \ \boldsymbol{y}\in K^m \\
   \boldsymbol{U}\,\boldsymbol{x}\ =\ \boldsymbol{y}\,, 
   \qquad\qquad & 
   \boldsymbol{U}\in M_{m\times n}(K),\ \ \boldsymbol{x}\in K^n\,.
   \end{array}\right.

.. W trakcie rozwiązywania każdego z dwóch podukładów 
   można korzystać z ułatwień wynikających z    trójkątnej postaci macierzy 
   :math:`\,\boldsymbol{L}\ \ \text{i}\ \ \boldsymbol{U}.\ `

The resulting subsystems are easily solved by forward or backward substitution.
This approach is especially efficient in the case of several systems
with the same matrix :math:`\,\boldsymbol{A},\ ` but with different columns
:math:`\,\boldsymbol{b},\ ` since the decomposition
:math:`\,\boldsymbol{P}\boldsymbol{A}=\boldsymbol{L}\,\boldsymbol{U}\ `
is then performed only once. 

.. Przedstawiona metoda jest szczególnie efektywna, gdy trzeba rozwiązać wiele 
   układów równań z tą samą macierzą :math:`\,\boldsymbol{A}\,,\ ` ale różnymi 
   kolumnami :math:`\,\boldsymbol{b}:\ ` rozkład 
   :math:`\,\boldsymbol{L}\boldsymbol{U}\,` dla macierzy :math:`\,\boldsymbol{A}\ `
   wystarczy wtedy przeprowadzić tylko raz.

.. Rozwiążemy w ten sposób układ równań nad ciałem liczb wymiernych :math:`\,Q:`

As an example, we shall solve the following system 
over the rational field :math:`\,Q:`

.. math::
   :nowrap:

   \begin{alignat*}{4}
    2\,x_1 & {\,} + {\,} &    x_2 & {\,} + {\,} &    x_3 & {\;} = {} &  6 \\
    4\,x_1 & {\,} - {\,} & 6\,x_2 &             &        & {\;} = {} & 14 \\
   -2\,x_1 & {\,} + {\,} & 7\,x_2 & {\,} + {\,} & 2\,x_3 & {\;} = {} & -5 
   \end{alignat*}

.. Rozkład :math:`\,\boldsymbol{L}\boldsymbol{U}\,` 
   dla macierzy :math:`\,\boldsymbol{A}\ `
   współczynników tego układu już znamy :eq:`A_LU_ex`:

The decomposition :math:`\,\boldsymbol{A}=\boldsymbol{L}\,\boldsymbol{U}\ `
for the coefficient matrix has been done in the previous section: 

.. math::
   
   \left[\begin{array}{rrr} 2 &  1 & 1 \\
                            4 & -6 & 0 \\
                           -2 &  7 & 2\end{array}\right]\ =\ 
   \left[\begin{array}{rrr}  1 &  0 & 0 \\ 
                             2 &  1 & 0 \\ 
                            -1 & -1 & 1\end{array}\right]
   \left[\begin{array}{rrr} 2 &  1 &  1 \\
                            0 & -8 & -2 \\
                            0 &  0 &  1\end{array}\right]\,.

.. Wzory :eq:`set_xy` dają dwa powiązane ze sobą układy równań 
   o trójkątnych macierzach współczynników:

Eqs. :eq:`set_xy` give two interconnected linear systems with triangular
coefficient matrices:

.. math::
   :nowrap:

   \begin{alignat*}{4}
       y_1 & {\,}   {\,} &        & {\,}   {\,} &        & {\;} = {} &  6 \\
    2\,y_1 & {\,} + {\,} &    y_2 &             &        & {\;} = {} & 14 \\
      -y_1 & {\,} - {\,} &    y_2 & {\,} + {\,} &    y_3 & {\;} = {} & -5 
   \end{alignat*}

.. math::
   :nowrap:

   \begin{alignat*}{4}
    2\,x_1 & {\,} + {\,} &    x_2 & {\,} + {\,} &    x_3 & {\;} = {\ } & y_1 \\
           & {\,} - {\,} & 8\,x_2 & {\,} - {\,} & 2\,x_3 & {\;} = {\ } & y_2 \\
           & {\,}   {\,} &        & {\,}   {\,} &    x_3 & {\;} = {\ } & y_3
   \end{alignat*}

.. Pierwszy układ rozwiązujemy podstawianiem "w przód", :math:`\ `
   a drugi :math:`\ ` - :math:`\ ` podstawianiem "wstecz":

The forward and backward substitution 
in the first and second system, respectively, yields

.. math:: 
   
   \textstyle
   \begin{array}{l}
   y_1\ =\ 6 \\ y_2\ =\ 14\ -\ 2\,y_1\ =\ 2 \\ 
   y_3\ =\ -5\ +\ y_1\ +\ y_2\ =\ 3\,,
   \end{array}
   \qquad
   \begin{array}{l}
   x_3\ =\ y_3\ =\ 3 \\ 
   x_2\ =\ -{1\over 8}\ (y_2+2\,x_3)\ =\ -1 \\
   x_1\ =\ {1\over 2}\ (y_1-x_2-x_3)\ =\ 2\,.
   \end{array}

.. Ostatecznie, :math:`\,` rozwiązaniem układu jest:
 
Finally, the solution reads: :math:`\ x_1=2,\ x_2=-1,\ x_3=3\,.` 

Inversion of a Matrix
~~~~~~~~~~~~~~~~~~~~~

.. Niech :math:`\,\boldsymbol{A}\in M_n(K)\,` będzie macierzą odwracalną.
   Zadanie wyznaczenia jej odwrotności sprowadza się do 
   rozwiązania równania macierzowego

Let :math:`\,\boldsymbol{A}\in M_n(K)\,` be an invertible matrix. :math:`\\`
The problem of finding its inverse consists in solving the matrix equation 

.. math::
   
   \boldsymbol{A}\,\boldsymbol{X}\ =\ \boldsymbol{I}_n\,,

where :math:`\,\boldsymbol{I}_n\ ` is the identity matrix of size :math:`\,n.\ `

.. Zapisując macierze :math:`\,\boldsymbol{X}\ \ \text{i}\ \ \boldsymbol{I}_n\,`
   w postaci kolumnowej:

Using the column form of matrices

.. math::
   
   \boldsymbol{X}\ =\ 
   \left[\,
   \boldsymbol{x}_1\,|\,
   \boldsymbol{x}_2\,|\,
   \ldots\,|\,
   \boldsymbol{x}_n\,
   \right]\,,
   \qquad
   \boldsymbol{I}_n\ =\ 
   \left[\,
   \boldsymbol{e}_1\,|\,
   \boldsymbol{e}_2\,|\,
   \ldots\,|\,
   \boldsymbol{e}_n\,
   \right]\,,

.. i odwołując się do definicji (a dokładnie: do kolumnowej reguły) 
   mnożenia macierzowego, otrzymujemy :math:`\,n\,` układów równań, 
   każdy o :math:`\,n\,` niewiadomych:

and recalling the Column Rule of Matrix Multiplication, :math:`\\` 
we obtain the set of :math:`\,n\,` systems of linear equations, :math:`\,`
each in :math:`\,n\,` unknowns:

.. math::

   \boldsymbol{A}\ 
   \left[\,\boldsymbol{x}_1\,|\,\boldsymbol{x}_2\,|\,\ldots\,|\,
   \boldsymbol{x}_n\,\right]\ =\ 
   \left[\,\boldsymbol{e}_1\,|\,\boldsymbol{e}_2\,|\,\ldots\,|\,
   \boldsymbol{e}_n\,\right]\,,

   \left[\,
   \boldsymbol{A}\boldsymbol{x}_1\,|\,
   \boldsymbol{A}\boldsymbol{x}_2\,|\,\ldots\,|\,
   \boldsymbol{A}\boldsymbol{x}_n\,\right]\ =\ 
   \left[\,\boldsymbol{e}_1\,|\,\boldsymbol{e}_2\,|\,\ldots\,|\,
   \boldsymbol{e}_n\,\right]\,,

   \boldsymbol{A}\,\boldsymbol{x}_j\ =\ \boldsymbol{e}_j\,,
   \qquad j=1,2,\ldots,n.

.. Wszystkie układy mają tę samą macierz współczynników :math:`\,\boldsymbol{A},\,`
   różnią się tylko wolnymi wyrazami. Jak zauważyliśmy już wcześniej, 
   jest to sytuacja dogodna dla użycia metody rozwiązania opartej na rozkładzie 
   :math:`\,\boldsymbol{L}\boldsymbol{U}.`

All systems have the same coefficient matrix :math:`\,\boldsymbol{A},\ `
but differ in columns of constants. 
As remarked in the previous subsection,
in such a situation the (presented therein) method of solution 
based on the *LU* decomposition may be a convenient one.

.. Under these circumstances 

Calculation of Determinants
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. Niech teraz będzie dana macierz :math:`\,\boldsymbol{A}\in M_n(K)\,` 
   w rozkładzie :eq:`A_PLU`:

Suppose we have to calculate the determinant of a matrix 
:math:`\,\boldsymbol{A}\in M_n(K)\,` given in the form:

.. math::
   :label: A_PLU
   
   \boldsymbol{A}\ =\ \boldsymbol{P}\,\boldsymbol{L}\,\boldsymbol{U}\,,

where 
:math:`\ \ \boldsymbol{P}=\boldsymbol{P}_\sigma\,,\ \ \sigma\in S_n\,,\quad
\boldsymbol{L}=[l_{ij}]_{n\times n}\,,\quad
\boldsymbol{U}=[u_{ij}]_{n\times n}\,.`

.. Zgodnie z twierdzeniem Cauchy'ego o wyznaczniku iloczynu macierzy mamy

According to the Cauchy's Theorem on the determinant of a product of matrices,
we get

.. math::
   
   \det\boldsymbol{A}\ \,=\ \,
   \det\boldsymbol{P}_\sigma\,\cdot\,\det\boldsymbol{L}\,\cdot\,\det\boldsymbol{U}\,.

.. Z lematu wiadomo, że 
   :math:`\ \det\boldsymbol{P}_\sigma\,=\,\text{sgn}\,\sigma\,.` :math:`\\`
   Wyznaczniki macierzy trójkątnych 
   :math:`\ \boldsymbol{L}\ \ \text{i}\ \ \boldsymbol{U}\ `
   są równe iloczynom elementów diagonalnych:

Representing the permutation :math:`\,\sigma\,` as a product of transpositions, 
it's easy to show that

.. math::
   
   \det\boldsymbol{P}_\sigma\,=\,\text{sgn}\,\sigma\,.

The determinant of a triangular matrix is equal to 
the product of its diagonal elements:

.. math::
   
   \det\boldsymbol{L}\ =\ l_{11}\,l_{22}\,\dots\,l_{nn}\,,\qquad
   \det\boldsymbol{U}\ =\ u_{11}\,u_{22}\,\dots\,u_{nn}\,.

.. Ostatecznie otrzymujemy prosty wzór dla wyznacznika 
   macierzy :math:`\,\boldsymbol{A}:`

Hence the formula for the determinant of a *LU*-decomposed matrix
:math:`\,\boldsymbol{A}\ ` given by :eq:`A_PLU` is

.. math::
   :label: det_A
   
   \det\boldsymbol{A}\ =\ 
   \text{sgn}\,\sigma\,\cdot\,
   l_{11}\,l_{22}\,\dots\,l_{nn}\,\cdot\,
   u_{11}\,u_{22}\,\dots\,u_{nn}\,.

.. Dla przykładu weźmy macierz

As an example, let's take the matrix
:math:`\ \ \boldsymbol{A}\ =\ 
\left[\begin{array}{rrr}
2 &  1 & 1 \\
4 & -6 & 0 \\
-2 &  7 & 2
\end{array}\right],\ ` :math:`\\`:math:`\\`  
for which two decompositions have been already derived:

.. math::
   
   \begin{array}{rl}
   \left[\begin{array}{rrr}
       2 &  1 & 1 \\
       4 & -6 & 0 \\
      -2 &  7 & 2
   \end{array}\right]
   & =\ \ \ 
   \left[\begin{array}{rrr}
       0 & 1 & 0 \\
       1 & 0 & 0 \\
       0 & 0 & 1
   \end{array}\right]\ \cdot\ 
   \left[\begin{array}{rrr}
       1 & 0 & 0 \\
       \textstyle{1\over 2} & 1 & 0 \\
      -\textstyle{1\over 2} & 1 & 1
   \end{array}\right]\ \cdot\  
   \left[\begin{array}{rrr}
      4 & -6 & 0 \\
      0 &  4 & 1 \\
      0 &  0 & 1
   \end{array}\right]\,,
   \\ \\
   & =\ \ \ 
   \left[\begin{array}{rrr}
       1 & 0 & 0 \\
       0 & 1 & 0 \\
       0 & 0 & 1
   \end{array}\right]\ \cdot\ 
   \left[\begin{array}{rrr}
          1 &  0 & 0 \\
          2 &  1 & 0 \\
         -1 & -1 & 1
   \end{array}\right]\ \cdot\  
   \left[\begin{array}{rrr}
         2 &  1 &  1 \\
         0 & -8 & -2 \\
         0 &  0 &  1
   \end{array}\right]\,.
   \end{array}

In both cases the formula :eq:`det_A` yields the same result:
:math:`\ \det{\boldsymbol{A}}=-16.`
















Application to Homogeneous Systems of Equations
-----------------------------------------------

We will now apply a theory of linear transformations of vector spaces   to describe 
the set of solutions of homogeneous system of linear equations over a field 
:math:`\,K`:

.. math::
   :label: set_eqn_0

   \begin{array}{r}
      a_{11}\,x_1\; + \ \,a_{12}\,x_2\; + \ \,\ldots\  + \ \;a_{1n}\,x_n \ \, = \ \ 0  \\
      a_{21}\,x_1\; + \ \,a_{22}\,x_2\; + \ \,\ldots\  + \ \;a_{2n}\,x_n \ \, = \ \ 0  \\
      \qquad\qquad\,\ldots\qquad\quad\ldots\qquad\quad\ldots\qquad\ldots\qquad\ \ \,\ldots   \\
      a_{m1}\,x_1\; + \ \,a_{m2}\,x_2\; + \ \,\ldots\  + \ \;a_{mn}\,x_n \ \, = \ \ 0
   \end{array}

The system has a matrix form
:math:`\quad\boldsymbol{A}\boldsymbol{X}\,=\,\boldsymbol{0}\,,\quad` where 

.. math::

   \boldsymbol{A}\ =\ \left[\begin{array}{cccc}
                            a_{11} & a_{12} & \ldots & a_{1n} \\
                            a_{21} & a_{22} & \ldots & a_{2n} \\
                            \ldots & \ldots & \ldots & \ldots \\
                            a_{m1} & a_{m2} & \ldots & a_{mn}
                            \end{array}
                      \right]\,,\quad
   \boldsymbol{X}\ =\ 
   \left[\begin{array}{c} x_1 \\ x_2 \\ \dots \\ x_n \end{array}\right]\,,\quad
   \boldsymbol{0}\ =\ 
   \left[\begin{array}{c} 0 \\ 0 \\ \dots \\ 0 \end{array}\right]\in K^m\,.

We define the set of solutions of the system :eq:`set_eqn_0` as
 
.. math::
   
   S_0\ :\,=\ \{\,\boldsymbol{X}\in K^n:\ \boldsymbol{A}\boldsymbol{X}=\boldsymbol{0}\,\}\,.

Of course, :math:`\ \,S_0\subset K^n.\ \,` The properties of the set :math:`\ S_0\ ` are better described in

.. admonition:: Theorem 9. :math:`\\`

   The set of solutions of homogeneous system of linear equations :eq:`set_eqn_0` 
   is a vector space over a field :math:`\,K\ ` 
   (subspace of the space :math:`\,K^n`), :math:`\,` whose dimension equals 
   the difference of the number of unknowns and the rank of the coefficient matrix
   :math:`\boldsymbol{A}:`
   
   .. math::
      :label: sol_0
      
      S_0\,<\,K^n,\qquad\dim\,S_0\,=\,n-\text{rk}\,\boldsymbol{A}\,.
   
.. gdzie :math:`\,r\ ` jest rzędem macierzy :math:`\,\boldsymbol{A}.`

**Proof.**

The subset :math:`\ S_0\ ` of the space :math:`\,K^n\ ` is a subspace
because it is closed under addition of vectors and their multiplications by scalars from the field :math:`\,K.\ `
Indeed,

if :math:`\qquad\boldsymbol{X}_1,\,\boldsymbol{X}_2\,\in\,S_0:
\qquad\boldsymbol{A}\boldsymbol{X}_1=\,\boldsymbol{0}\,, 
\quad\boldsymbol{A}\boldsymbol{X}_2=\,\boldsymbol{0}\,,`

then
:math:`\qquad
\boldsymbol{A}\,(\boldsymbol{X}_1+\boldsymbol{X}_2)\ =\ 
\boldsymbol{A}\boldsymbol{X}_1+\boldsymbol{A}\boldsymbol{X}_2\ =\ 
\boldsymbol{0}\,,
\qquad
\boldsymbol{A}\,(c\,\boldsymbol{X}_1)\ =\ c\,(\boldsymbol{A}\boldsymbol{X}_1)\ =\ 
\boldsymbol{0}\,,`

so :math:`\qquad 
\boldsymbol{X}_1+\boldsymbol{X}_2\,\in\,S_0\,,\qquad 
c\,\boldsymbol{X}_1\in S_0\,,\quad c\in K\,.`

.. Podzbiór :math:`\,S_0\ ` przestrzeni :math:`\,K^n\ ` jest domknięty ze względu na dodawanie
   wektorów i mnożenie ich przez liczby z ciała :math:`\,K\ `

For the proof of the second part of the hypothesis, denote :math:`\ r\,:\,=\,\text{rk}\,\boldsymbol{A}\,.\ `
Of course, :math:`\ r\le m,n\,.`

The matrix :math:`\boldsymbol{A}\ ` has :math:`\ r\ ` linearly independent rows and
the same number of linearly independent columns. Without loss of generality, we may assume that the linearly independent set is determined by 
first :math:`\ r\ ` rows, :math:`\,` 
and also by first :math:`\ r\ ` columns.

If :math:`\ m>r,\ ` then we discard last :math:`\ m-r\ ` equations because each of them is a linear combination of the first :math:`\ r\ ` equations.

.. Mamy więc do czynienia z układem :math:`\ r\ ` liniowo niezależnych równań o :math:`\,n\ `
   niewiadomych.

As a starting point of the further discussion we may take a set of
:math:`\ r\ ` equations with :math:`\ n\ ` unknowns, :math:`\,` where :math:`\ r\le n.\ ` In this situation there are two possibilities. 

I.) :math:`\,` If :math:`\ r=n,\ ` we have a system with a square non-degenerate matix 
:math:`\boldsymbol{A}.\ ` This is a Cramer system which has only a zero solution:
:math:`\ S_0=\{\boldsymbol{0}\}.\ ` In this case the equation :eq:`sol_0` is fulfilled:
:math:`\ 0=\dim\,S_0=n-r.`

II.) :math:`\,` Let :math:`\ r<n.\ ` We treat the unknowns indexed by numbers greater than  :math:`\ r\ ` as parameters: :math:`\ x_k\rightarrow s_k,\ k=r+1,\dots,n,\ \,` 
and then solve a Cramer system with the unknowns :math:`\ \,x_1,\,\dots,\,x_r:`

.. .. math::
   :label: set_eqn_r
   
   \begin{array}{c}
      a_{11}\,x_1\; + \ \,a_{12}\,x_2\; + \ \,\ldots\ \, + \ \;a_{1r}\,x_r \ \, = \ \ 
      -\ a_{1,r+1}\,s_{r+1}\; - \ \,\ldots\ \, -\ a_{1n}\,s_n   \\
      a_{21}\,x_1\; + \ \,a_{22}\,x_2\; + \ \,\ldots\ \, + \ \;a_{2r}\,x_r \ \, = \ \ 
      -\ a_{2,r+1}\,s_{r+1}\; - \ \,\ldots\ \, -\ a_{2n}\,s_n   \\
      \ldots\qquad\quad\ldots\qquad\,\ldots\qquad\ \ \ldots\qquad\ \ \,
      \qquad\,\ldots\qquad\qquad\ldots\qquad\,\ldots           \\
      a_{r1}\,x_1\; + \ \,a_{r2}\,x_2\; + \ \,\ldots\ \, + \ \;a_{rr}\,x_r \ \, = \ \ 
      -\ a_{r,r+1}\,s_{r+1}\; - \ \,\ldots\ \, -\ a_{rn}\,s_n
   \end{array}

.. math::
   :label: set_eqn_r
   
   \begin{array}{c}
      a_{11}\,x_1\; + \ \,\ldots\ \, + \ \;a_{1r}\,x_r \ \, = \ \ 
      -\ a_{1,r+1}\,s_{r+1}\; - \ \,\ldots\ \, -\ a_{1n}\,s_n   \\
      a_{21}\,x_1\; + \ \,\ldots\ \, + \ \;a_{2r}\,x_r \ \, = \ \ 
      -\ a_{2,r+1}\,s_{r+1}\; - \ \,\ldots\ \, -\ a_{2n}\,s_n   \\
      \qquad
      \ldots\qquad\quad\ldots\qquad\quad\ldots\qquad\quad
      \ldots\qquad\quad\ldots\qquad\quad\ldots\qquad\quad           \\
      a_{r1}\,x_1\; + \ \,\ldots\ \, + \ \;a_{rr}\,x_r \ \, = \ \ 
      -\ a_{r,r+1}\,s_{r+1}\; - \ \,\ldots\ \, -\ a_{rn}\,s_n
   \end{array}


Let :math:`\ (c_1,\dots,c_r)\ ` be a tuple of the values of the unknowns 
:math:`\ x_1,\,\dots,\,x_r\,,\ ` 
corresponding to fixed values of the parameters :math:`\ s_{r+1},\,\dots,\,s_n.\\` 
Then the tuple :math:`\ (c_1,\dots,c_r,\,s_{r+1},\dots,\,s_n)\ `
is one of solutions of the sytem fo equations :eq:`set_eqn_0`.

Define a mapping :math:`\ \Phi:\ S_0\rightarrow K^{n-r}\ ` as follows:

.. math::
   
   \Phi:\qquad S_0\,\ni\,
   \left[
   \begin{array}{c} c_1 \\ \dots \\ c_r \\ s_{r+1} \\ \dots \\ s_n \end{array}
   \right]
   \quad\rightarrow\quad
   \Phi
   \left[
   \begin{array}{c} c_1 \\ \dots \\ c_r \\ s_{r+1} \\ \dots \\ s_n \end{array}
   \right]
   \ :\,=\ 
   \left[
   \begin{array}{c} s_{r+1} \\ \dots \\ s_n \end{array}
   \right]
   \,\in\,K^{n-r}\,.

It is easy to check that :math:`\ \Phi\ ` is a linear mapping. Moreover, because each tuple of the values of the parameters :math:`\ s_{r+1},\,\dots,\,s_n\ `
corresponds to exactly one solution :math:`\ (c_1,\dots,c_r)\ ` of the Cramer system :eq:`set_eqn_r`, :math:`\ \Phi\ ` is also a bijection.

Hence, the mapping :math:`\ \Phi,\ ` as a bijective homomorphism, is an isomorphism
of the solution space :math:`\ S_0\ ` onto the space :math:`\ K^{n-r}.\ ` 
By Theorem 8. we obtain the hypothesis :eq:`sol_0`:

.. math::
   
   \dim\,S_0\,=\,\dim\,K^{n-r}\,=\,n-r\,.

























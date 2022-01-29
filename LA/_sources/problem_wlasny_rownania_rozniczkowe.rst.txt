
Application to Systems of Linear Differential Equations
-------------------------------------------------------

Consider a system of linear differential equations of degree 1 with constant coefficients:

.. .. math::
   :label: set_diff
   
   \dot{x}_1\ =\ a_{11}\,x_1\,+\,a_{12}\,x_2\,+\,\ldots\,+\,a_{1n}\,x_n
   
   \dot{x}_2\ =\ a_{21}\,x_1\,+\,a_{22}\,x_2\,+\,\ldots\,+\,a_{2n}\,x_n
   
   \quad\ \ \ldots\qquad\ldots\qquad\ \ \ldots\qquad\ldots\qquad\ldots\qquad
   
   \dot{x}_n\ =\ a_{n1}\,x_1\,+\,a_{n2}\,x_2\,+\,\ldots\,+\,a_{nn}\,x_n

.. math::
   :label: set_diff
   
   \begin{array}{l}
   \dot{x}_1\ =\ a_{11}\,x_1\,+\,a_{12}\,x_2\,+\,\ldots\,+\,a_{1n}\,x_n \\
   \dot{x}_2\ =\ a_{21}\,x_1\,+\,a_{22}\,x_2\,+\,\ldots\,+\,a_{2n}\,x_n \\
   \ \ldots\qquad\ldots\qquad\ \ \ldots\qquad\ldots\qquad\ldots\qquad \\
   \dot{x}_n\ =\ a_{n1}\,x_1\,+\,a_{n2}\,x_2\,+\,\ldots\,+\,a_{nn}\,x_n 
   \end{array}

where :math:`\ \ x_i=x_i(t)\,,\ \ \dot{x}_i\,=\,\frac{d}{dt}\ x_i(t)\,,\ \ 
a_{ij}\in R\,,\ \ i,j=1,2,\ldots,n.\ `
By introducing the notation

.. math::
   
   \boldsymbol{A}\ =\ 
   \left[\begin{array}{cccc} 
   a_{11} & a_{12} & \dots & a_{1n} \\
   a_{21} & a_{22} & \dots & a_{2n} \\
   \dots & \dots & \dots & \dots \\
   a_{n1} & a_{n2} & \dots & a_{nn}
   \end{array}\right]\,,\qquad
   \boldsymbol{x}\ =\ 
   \left[\begin{array}{c} x_1 \\ x_2 \\ \ldots \\ x_n \end{array}\right]\,,\qquad
   \boldsymbol{\dot{x}}\ =\ 
   \left[\begin{array}{c} \dot{x}_1 \\ \dot{x}_2 \\ \ldots \\ \dot{x}_n \end{array}\right]\,,


we can write the system :eq:`set_diff` in a compact matrix form:
 
.. math::
   :label: mat_eqn
   
   \boldsymbol{\dot{x}}\ =\ \boldsymbol{A}\,\boldsymbol{x}\,.

We look for the solutions of the form 

.. math::
   :label: exp_soln
   
   \boldsymbol{x}(t)\,=\,\boldsymbol{v}\,e^{\,\lambda\,t}\,,\qquad
   \lambda\in C\,,\quad\boldsymbol{v}=[\,\beta_i\,]_n\in C^n\,.

Then :math:`\ \,\boldsymbol{\dot{x}}(t)=\lambda\,\boldsymbol{v}\,e^{\,\lambda\,t}\ `
and substitution into :eq:`mat_eqn` gives

.. math::
   
   \lambda\,\boldsymbol{v}\,e^{\,\lambda\,t}\ =\ 
   \boldsymbol{A}\,\boldsymbol{v}\,e^{\,\lambda\,t}\,,

which, after dividing by :math:`\ e^{\,\lambda\,t}\neq 0\,,\ ` reads

.. math::
   :label: eigen_eqn
   
   \boldsymbol{A}\,\boldsymbol{v}\ =\ \lambda\,\boldsymbol{v}\,.

The equation :eq:`eigen_eqn` is an eigenproblem of the matrix :math:`\,\boldsymbol{A}\ `
viewed as a linear operator in the space :math:`\,C^n\ `
(the action of this operator on a vector :math:`\,\boldsymbol{x}\in C^n\,`
is to multiply this vector on the left by :math:`\boldsymbol{A}`).

.. (działając na wektor :math:`\,\boldsymbol{x}\in C^n\,` operator 
   mnoży go z lewej strony przez :math:`\boldsymbol{A}`).

Hence, the function :eq:`exp_soln` is a solution of the equation :eq:`mat_eqn` if and only if :math:`\lambda\ ` is an eigenvalue of the matrix :math:`\,\boldsymbol{A}\,,\ ` 
and :math:`\ \,\boldsymbol{v}\ ` - :math:`\,` 
an eigenvector associated to this eigenvalue.

We compute the eigenvalues :math:`\ \lambda\ ` from the characteristic equation

.. .. math::
   :label: char_eqn
   
   \det\,(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\ =\ 0\,,

.. math::
   :label: char_eqn
   
   \det\,(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\ \ =\ \ 
   \left|
   \begin{array}{cccc}
   \alpha_{11}-\lambda & \alpha_{12} & \dots & \alpha_{1n} \\
   \alpha_{21} & \alpha_{22}-\lambda & \dots & \alpha_{2n} \\
   \dots & \dots & \dots & \dots \\
   \alpha_{n1} & \alpha_{n2} & \dots & \alpha_{nn}-\lambda 
   \end{array}
   \right|\ \ =\ \ 0\,,

and the associated eigenvectors :math:`\,` - :math:`\,` by solving a linear problem :eq:`eigen_eqn` for a given eigenvalue :math:`\,\lambda:`

.. .. math::
   :label: hom_set
   
   (a_{11}-\lambda)\ \beta_1\,+\,a_{12}\ \beta_2\,+\,\ldots\,+\,a_{1n}\ \beta_n\ =\ 0

   a_{21}\ \beta_1\,+\,(a_{22}-\lambda)\ \beta_2\,+\,\ldots\,+\,a_{2n}\ \beta_n\ =\ 0

   \quad\ldots\qquad\ldots\qquad\ldots\qquad\ldots\qquad\ldots

   a_{n1}\ \beta_1\,+\,a_{n2}\ \beta_2\,+\,\ldots\,+\,(a_{nn}-\lambda)\ \beta_n\ =\ 0

.. math::
   :label: hom_set
   
   \begin{array}{l}
   (a_{11}-\lambda)\ \beta_1\,+\,a_{12}\ \beta_2\,+\,\ldots\,+\,a_{1n}\ \beta_n\ =\ 0 \\
   a_{21}\ \beta_1\,+\,(a_{22}-\lambda)\ \beta_2\,+\,\ldots\,+\,a_{2n}\ \beta_n\ =\ 0 \\
   \ \ \ldots\qquad\ldots\qquad\ldots\qquad\ldots\qquad\ldots \\
   a_{n1}\ \beta_1\,+\,a_{n2}\ \beta_2\,+\,\ldots\,+\,(a_{nn}-\lambda)\ \beta_n\ =\ 0
   \end{array}

Because the system :eq:`set_diff`, and so also the associated matrix equation :eq:`mat_eqn` are homogeneous, each linear combination of solutions is also a solution of the system. We discuss now different situations that may occur depending on possible solutions of the characteristic equation.

:math:`\;`

**Case 1.** :math:`\,`
 
The equation :eq:`char_eqn` has :math:`\,n\ ` different real roots
:math:`\ \lambda_1,\,\lambda_2,\,\ldots,\,\lambda_n\,.\ `

Then the real eigenvectors :math:`\ \boldsymbol{v}_1,\,\boldsymbol{v}_2,\,\ldots,\,\boldsymbol{v}_n\,` associated to these eigenvalues and also the corresponding particular solution

.. math::
   :label: spec_sols

   \boldsymbol{x}^1(t)=e^{\,\lambda_1\,t}\,\boldsymbol{v}_1\,,\quad
   \boldsymbol{x}^2(t)=e^{\,\lambda_2\,t}\,\boldsymbol{v}_2\,,\quad\ldots\,,\quad
   \boldsymbol{x}^n(t)=e^{\,\lambda_n\,t}\,\boldsymbol{v}_n    
    
.. :math:`\ \boldsymbol{x}^1(t)=e^{\,\lambda_1\,t}\,\boldsymbol{v}_1\,,\ \,
   \boldsymbol{x}^2(t)=e^{\,\lambda_2\,t}\,\boldsymbol{v}_2\,,\,\ldots\,,\,
   \boldsymbol{x}^n(t)=e^{\,\lambda_n\,t}\,\boldsymbol{v}_n\ \,`

are linearly independent.
 
The general solution is a linear combination of the particular solutions:

.. math::
   :label: gen_sol
   
   \boldsymbol{x}(t)\ =\ c_1\ \boldsymbol{x}^1(t)\,+\,c_2\ \boldsymbol{x}^2(t)\,+\,\ldots\,+\,
                      c_n\ \boldsymbol{x}^n(t)\,,\qquad c_1,\,c_2,\,\ldots,\,c_n\in R\,.

**Example 1.** :math:`\,` We determine the general solution of the system of equations 

.. math::
   :nowrap:
   
   \begin{alignat*}{3}
   \dot{x}_1 & {\ } = {\ } & 2\,x_1 & {\ } - {\ } &    x_2 \\
   \dot{x}_2 & {\ } = {\ } & 4\,x_1 & {\ } - {\ } & 3\,x_2
   \end{alignat*}

The characteristic equation :eq:`char_eqn` for the matrix :math:`\,\boldsymbol{A}\ =\ 
\left[\begin{array}{rr} 2 & -1 \\ 4 & -3 \end{array}\right]:`

.. math::
   
   \left|\begin{array}{cc} 2-\lambda & -1 \\ 4 & -3-\lambda \end{array}\right|\ \,=\ \,
   \lambda^2+\lambda-2\ \,=\ \,
   (\lambda-1)(\lambda+2)\ \,=\ \,0

has two different real roots: :math:`\ \,\lambda_1=1\,,\ \,\lambda_2=-2\,.`

The eigenvectors :math:`\ \boldsymbol{v}_1\,,\ \boldsymbol{v}_2\ \,`
associated with the eigenvalues :math:`\ \lambda_1\,,\ \,\lambda_2\ \,`
may be determined from the equations :eq:`hom_set`:

.. math::
   
   \begin{array}{llll}
   \left[\begin{array}{cc} 1 & -1 \\ 4 & -4 \end{array}\right]\   
   \left[\begin{array}{c} \beta_1 \\ \beta_2 \end{array}\right]\ =\  
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right]\,: &
   \beta_1=\beta_2=\beta\,, &
   \boldsymbol{v}_1\,=\,\beta\ \left[\begin{array}{c} 1 \\ 1 \end{array}\right]\,, &
   \beta\in R\!\smallsetminus\!\{0\}\,;
   \\ \\
   \left[\begin{array}{cc} 4 & -1 \\ 4 & -1 \end{array}\right]\   
   \left[\begin{array}{c} \beta_1 \\ \beta_2 \end{array}\right]\ =\  
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right]\,: &
   \beta_2=4\,\beta_1=4\,\beta\,, &
   \boldsymbol{v}_2\,=\,\beta\ \left[\begin{array}{c} 1 \\ 4 \end{array}\right]\,, &
   \beta\in R\!\smallsetminus\!\{0\}\,.
   \end{array}

Taking :math:`\,\beta=1\ ` we obtain two linearly independent particular solutions:

.. math::
   
   \boldsymbol{x}^1(t)\ \,=\ \,
   e^{\;t}\ \boldsymbol{v}_1\ \,=\ \,
   e^{\;t}\ \left[\begin{array}{c} 1 \\ 1 \end{array}\right]\,,\qquad
   \boldsymbol{x}^2(t)\ \,=\ \,
   e^{\,-2\,t}\ \,\boldsymbol{v}_2\ \,=\ \,
   e^{\,-2\,t}\ \left[\begin{array}{c} 1 \\ 4 \end{array}\right]\,,

which comprise the general solution:

.. math::
   
   \begin{array}{c}
   \boldsymbol{x}(t)\,=\,c_1\ \boldsymbol{x}^1(t)\,+\,c_2\ \boldsymbol{x}^2(t)\ :
   \\ \\
   \left[\begin{array}{c} x_1(t) \\ x_2(t) \end{array}\right]\ =\ 
   c_1\ e^{\;t}\ \left[\begin{array}{c} 1 \\ 1 \end{array}\right]\ +\ 
   c_2\ e^{\,-2\,t}\ \left[\begin{array}{c} 1 \\ 4 \end{array}\right]\,,
   \\ \\
   \qquad
   \begin{cases}\ \begin{array}{l}
   x_1(t)\ =\ c_1\ e^{\;t}\,+\,c_2\ e^{\,-2\,t} \\
   x_2(t)\ =\ c_1\ e^{\;t}\,+\,4\,c_2\ e^{\,-2\,t}
   \end{array}\end{cases}
   \qquad c_1,c_2\in R\,.
   \end{array}
   
   \;

**Case 2.**

The equation :eq:`char_eqn` has :math:`\,n\ ` different roots 
:math:`\ \lambda_1,\,\lambda_2,\,\ldots,\,\lambda_n\,,` :math:`\\`
including complex non-real roots.

Discussion and the formulae :eq:`spec_sols` and :eq:`gen_sol` 
from Case 1. are still valid, but now the particular solutions corresponding to the non-real roots are also non-real. However, by suitable composition of these solutions one may obtain the system of :math:`\,n\,` linearly independent real solutions.

First note that since the matrix :math:`\,\boldsymbol{A}\ ` is real,
so the complex non-real roots of the characteristic equation go in pairs:
if :math:`\,\lambda\in C\!\smallsetminus\! R\ ` is in the set of roots
then so is :math:`\,\lambda^*\,,\ `
and if :math:`\,\boldsymbol{v}\in C^n\ ` is an eigenvector of the matrix 
:math:`\,\boldsymbol{A}\ ` for the eigenvalue :math:`\ \lambda,\ \,`
then :math:`\ \boldsymbol{v}^*\ ` is an eigenvector for the eigenvalue :math:`\ \lambda^*:`

.. math::
      
   \boldsymbol{A}\,\boldsymbol{v}\ =\ \lambda\,\boldsymbol{v}
   \qquad\Leftrightarrow\qquad
   \boldsymbol{A}\,\boldsymbol{v}^*\ =\ \lambda^*\,\boldsymbol{v}^*\,.

The particular solutions corresponding to the roots
:math:`\ \lambda\ \,` and  :math:`\ \,\lambda^*\ ` are conjugate to each other:

.. math::
   
   e^{\,\lambda^*\,t}\;\boldsymbol{v}^*\ =\ \left[\,e^{\,\lambda\,t}\;\boldsymbol{v}\,\right]^*\,.

We write the solution :math:`\ \,\boldsymbol{x}(t)\,=\,e^{\,\lambda\,t}\,\boldsymbol{v}\,\ `
corresponding to the root :math:`\,\lambda\,\ ` as

.. math::
   
   \boldsymbol{x}(t)\,=\,\boldsymbol{x}_1(t)+i\ \boldsymbol{x}_2(t)\,,

where :math:`\ \,\boldsymbol{x}_1(t)\,=\,\text{re}\ \,\boldsymbol{x}(t)\,,\ \,
\boldsymbol{x}_2(t)\,=\,\text{im}\ \,\boldsymbol{x}(t)\ \,`
are functions with values in  :math:`\,R^n\,.`

Then the solution :math:`\ \,\boldsymbol{x}^*(t)\,=\,e^{\,\lambda^*\,t}\,\boldsymbol{v}^*\,\ `
corresponding to the root :math:`\,\lambda^*\,\ ` is given by

.. math::
   
   \boldsymbol{x}^*(t)\,=\,\boldsymbol{x}_1(t)-i\ \boldsymbol{x}_2(t)\,.
 

.. Niech :math:`\ \ e^{\,\lambda\,t}\,\boldsymbol{v}\,=\,\boldsymbol{x}(t)\,=\,
   \boldsymbol{x}_1(t)+i\ \boldsymbol{x}_2(t)\,,\ \ ` 
   gdzie :math:`\ \ \boldsymbol{x}_1(t)\,=\,\text{re}\ \boldsymbol{x}(t)\,,\ \ 
   \boldsymbol{x}_2(t)\,=\,\text{im}\ \boldsymbol{x}(t)` :math:`\\` 
   są funkcjami o wartościach w :math:`\,R^n\,.\ `
   Wtedy :math:`\ \,e^{\,\lambda^*\,t}\;\boldsymbol{v}^*\,=\,
   \boldsymbol{x}_1(t)-i\ \boldsymbol{x}_2(t)\,.\ `

In fact, the real part :math:`\ \boldsymbol{x}_1(t)\ \,` and :math:`\,` the imaginary part :math:`\ \boldsymbol{x}_2(t)\ \,` of the solution :math:`\ \boldsymbol{x}(t)\ \,`
are also solutions of the equation :eq:`mat_eqn`. :math:`\,` Indeed, 

.. math::
   
   \boldsymbol{\dot{x}}_1(t)+i\ \boldsymbol{\dot{x}}_2(t)\ =\ 
   \boldsymbol{\dot{x}}(t)\ =\ 
   \boldsymbol{A}\ \boldsymbol{x}(t)\ =\ 
   \boldsymbol{A}\ [\,\boldsymbol{x}_1(t)+i\ \boldsymbol{x}_2(t)\,]\ =\
   \boldsymbol{A}\ \boldsymbol{x}_1(t)+i\ \boldsymbol{A}\ \boldsymbol{x}_2(t)

and comparing the real and the imaginary parts of the side expressions gives

.. math::
   
   \boldsymbol{\dot{x}}_1(t)\ =\ \boldsymbol{A}\ \boldsymbol{x}_1(t)\,,\qquad
   \boldsymbol{\dot{x}}_2(t)\ =\ \boldsymbol{A}\ \boldsymbol{x}_2(t)\,.

Note also that linear independence of the solutions
:math:`\ \boldsymbol{x}(t)\,,\ \boldsymbol{x}^*(t)\ `
is equivalent to the linear independence of the solutions
:math:`\ \boldsymbol{x}_1(t)\,,\ \boldsymbol{x}_2(t)\,.\ `
Hence, describing the general solution of the system :eq:`set_diff` in the expression :eq:`gen_sol`, we can replace a linear combination of complex solutions
:math:`\ \boldsymbol{x}(t)\,,\ \boldsymbol{x}^*(t)\ `
by a linear combination of real solutions
:math:`\ \boldsymbol{x}_1(t)\,,\ \boldsymbol{x}_2(t)\,,\ `
so that the general solution is real.

**Exercise.** :math:`\,`
To complete a discussion of Cases :math:`\,` 1. :math:`\,` and :math:`\,` 2. :math:`\,` prove that:

1. If the vectors :math:`\ \boldsymbol{v}_1,\,\boldsymbol{v}_2,\,\ldots,\,\boldsymbol{v}_n\in C^n\ `
   are linearly independent, then for :math:`\ \alpha_i\in C\!\smallsetminus\!\{0\}\,,\ `
   :math:`i=1,2,\ldots,n\,,\ \,` the vectors 
   :math:`\ \ \alpha_1\,\boldsymbol{v}_1,\ \ \alpha_2\,\boldsymbol{v}_2,\ \ldots,\ 
   \alpha_n\,\boldsymbol{v}_n` are also linearly independent (in the expressions
   :eq:`spec_sols` for particular solutions
   :math:`\ \alpha_i=\exp{(\lambda_i\,t)}\,,\ i=1,2,\ldots,n`).

2. If the vector :math:`\ \boldsymbol{x}\in C^n\ ` is of the form
   :math:`\ \boldsymbol{x}=\boldsymbol{x}_1+i\ \boldsymbol{x}_2\,,\` where :math:`\ \, 
   \boldsymbol{x}_1,\boldsymbol{x}_2\in R^n\,,\ ` then the linear independence of the
   vectors :math:`\ \boldsymbol{x},\,\boldsymbol{x}^*\ ` is equivalent to the linear
   independence of the vectors  :math:`\ \boldsymbol{x}_1,\boldsymbol{x}_2\,.`

**Example 2.** :math:`\,` We solve a linear system of equations:

.. math::
   :nowrap:
   
   \begin{alignat*}{3}
   \dot{x}_1 & {\ } = {\ } & 3\,x_1 & {\ } - {\ } &    x_2 \\
   \dot{x}_2 & {\ } = {\ } &    x_1 & {\ } + {\ } & 3\,x_2
   \end{alignat*}

The characteristic equation :eq:`char_eqn` of the matrix :math:`\ \,\boldsymbol{A}\ =\ 
\left[\begin{array}{rr} 3 & -1 \\ 1 & 3 \end{array}\right]:`

.. math::
   
   \left|\begin{array}{cc} 3-\lambda & -1 \\ 1 & 3-\lambda \end{array}\right|\ \,=\ \,
   \lambda^2-6\,\lambda+10\ \,=\ \,0

has two different complex roots, conjugate to each other:

.. math::
   
   \lambda_1\,=\,3+i\,,\qquad\lambda_2\,=\,3-i\,. 

The eigenvectors :math:`\ \boldsymbol{v}_1\ ` associated with the eigenvalues :math:`\ \lambda_1\ ` may be determined from the equation :eq:`hom_set`:

.. math::
   
   \left[\begin{array}{rr} -i & -1 \\ 1 & -i \end{array}\right]
   \left[\begin{array}{c} \beta_1 \\ \beta_2 \end{array}\right]
   \ =\ 
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right]\,,
   \quad\text{so}\quad\ 
   \begin{cases}\begin{array}{r}
   -i\ \beta_1 - \beta_2 = 0 \\ \beta_1 - i\ \beta_2 = 0 
   \end{array}\end{cases}:\quad
   \beta_2=-i\ \beta_1\,.

The solution is :math:`\ \ \beta_1=\beta\,,\ \ \beta_2=-i\ \beta\,,\ \ \beta\in C\,,\ \ ` so :math:`\ \ \boldsymbol{v}_1=\beta\ \left[\begin{array}{r} 1 \\ -i \end{array}\right]\,,\ \ \beta\in C\!\smallsetminus\!\{0\}\,.`

The eigenvectors associated with the eigenvalue :math:`\,\lambda_2=\lambda_1^*\ \ ` are
:math:`\ \ \boldsymbol{v}_2=\beta\ \left[\begin{array}{r} 1 \\ -i \end{array}\right]^* =
\beta\ \left[\begin{array}{r} 1 \\ i \end{array}\right]\,,\ \ 
\beta\in C\!\smallsetminus\!\{0\}\,.` :math:`\\`

If :math:`\,\beta=1\,,\ ` a particular solution associated with the eigenvalue :math:`\ \lambda_1\,:`

.. math::
   
   \begin{array}{rcl}
   \boldsymbol{x}^1(t) & = & e^{\,\lambda_1\,t}\ \boldsymbol{v}_1\ =\ 
   e^{\,(3+i)\,t}\ \left[\begin{array}{r} 1 \\ -i \end{array}\right]\ =\ 
   e^{\,3\,t}\ e^{\,i\,t}\ \left[\begin{array}{r} 1 \\ -i \end{array}\right]\ =
   \\ \\
   & = &
   e^{\,3\,t}\ (\cos{t}+i\ \sin{t})\ \left[\begin{array}{r} 1 \\ -i \end{array}\right]\ =\ 
   e^{\,3\,t}\ \left[\begin{array}{c} \cos{t}+i\ \sin{t} \\
                                      \sin{t}-i\ \cos{t} \end{array}\right]\ =
   \\ \\
   & = &
   e^{\,3\,t}\ \left[\begin{array}{c} \cos{t} \\ \sin{t} \end{array}\right]\ +\ 
   i\ e^{\,3\,t}\ \left[\begin{array}{r} \sin{t} \\ -\cos{t} \end{array}\right]
   \end{array}

is of the form :math:`\ \boldsymbol{x}^1(t)=\boldsymbol{x}_1(t)+i\ \boldsymbol{x}_2(t)\,,\ `
where :math:`\ \boldsymbol{x}_1(t)\,,\ \boldsymbol{x}_2(t)\ ` 
are functions with values in :math:`\ R^2\,.` :math:`\\`

Because both the real and the complex part of the complex solution are solutions of the system, so the general solution is given by their arbitary linear combination:

.. math::
   
   \begin{array}{c}
   \boldsymbol{x}(t)\ =\ c_1\ \boldsymbol{x}_1(t)\ +\ c_2\ \boldsymbol{x}_2(t)\ :
   \\ \\
   \left[\begin{array}{c} x_1(t) \\ x_2(t) \end{array}\right]\ \ =\ \ 
   e^{\,3\,t}\ \left(\ 
   c_1\ \left[\begin{array}{c} \cos{t} \\ \sin{t} \end{array}\right]\ \,+\ \,
   c_2\ \left[\begin{array}{r} \sin{t} \\ -\cos{t} \end{array}\right]\ \,\right)
   \\ \\
   \begin{cases}\begin{array}{c}
   \ x_1(t)\ \,=\ \,e^{\,3\,t}\ (c_1\,\cos{t}\,+\,c_2\,\sin{t}) \\
   \ x_2(t)\ \,=\ \,e^{\,3\,t}\ (c_1\,\sin{t}\,-\,c_2\,\cos{t})
   \end{array}\end{cases}\qquad c_1,c_2\in R\,.
   \end{array}

**Case 3.**

Some of the eigenvalues of the matrix :math:`\,\boldsymbol{A}\ ` are multiple roots of the characteristic polynomial but their geometric and algebraic multiplicities are equal.
This means that for each root of the characteristic polynomial with multilplicity :math:`\,k` there are :math:`\,k\ ` linearly independent eigenvectors of the matrix :math:`\,\boldsymbol{A}\,.`

.. Sytuacja ta nie wymaga wprowadzania nowych elementów do postępowania opisanego
   w przypadkach 1. i 2.

In this situation we can apply the method described in Cases :math:`\,` 1. :math:`\,` and :math:`\,` 2 :math:`\,` without any change.

**Example 3.** :math:`\,` 
We determine the general solution of the system

.. math::
   :nowrap:
   
   \begin{alignat*}{4}
   \dot{x}_1 & {\ } = {\ } & -8\ x_1 & {\ } + {\ } &  18\ x_2 & {\ } + {\ } &  9\ x_3 \\
   \dot{x}_1 & {\ } = {\ } & -9\ x_1 & {\ } + {\ } &  19\ x_2 & {\ } + {\ } &  9\ x_3 \\
   \dot{x}_1 & {\ } = {\ } & 12\ x_1 & {\ } - {\ } &  24\ x_2 & {\ } - {\ } & 11\ x_3 
   \end{alignat*}

The characteristic equation of the matrix :math:`\,\boldsymbol{A}:`

.. math::
   
   \left|\begin{array}{ccc}
   -8-\lambda & 18 & 9 \\
   -9 & 19-\lambda & 9 \\
   12 & -24 & -11-\lambda
   \end{array}\right|\ =\ 
   \lambda^3-3\,\lambda+2\ =\ 
   (\lambda-1)^2\,(\lambda+2)\ =\ 0

has a double root :math:`\,\lambda_{1,2}=1\ `
and a single root :math:`\,\lambda_3=-2\,.`

For the eigenvalue :math:`\,\lambda_{1,2}\ ` the system of equations :eq:`hom_set` reduces to

.. math::
   
   \beta_1-2\,\beta_2-\beta_3\ =\ 0\,,\qquad\text{so that}\qquad
   \beta_3\ =\ \beta_1-2\,\beta_2\,,\quad\beta_1,\beta_2\in R\,. 

The geometric multiplicity of the eigenvalue :math:`\,\lambda_{1,2}\ ` is the same as the
algebraic multiplicity and equals 2, because its associated eigenvectors of the form

.. math::
   
   \boldsymbol{v}_{1,2}\ =\ 
   \left[\begin{array}{c} \beta_1 \\ \beta_2 \\ \beta_1-2\,\beta_2 \end{array}\right]\ =\ 
   \beta_1\ \left[\begin{array}{r} 1 \\ 0 \\ 1 \end{array}\right]\ +\ 
   \beta_2\ \left[\begin{array}{r} 0 \\ 1 \\ -2 \end{array}\right]\,,\qquad
   \begin{array}{c} \beta_1,\,\beta_2\in R\,, \\ \beta_1^2+\beta_2^2>0 \end{array}

comprise (together with the zero vector) a 2-dimensional subspace.

Hence, the eigenvalue :math:`\,\lambda_{1,2}=1\ ` gives rise to two linearly independent particular solutions:

.. math::
   :label: sol_12
   
   \boldsymbol{x}^1(t)\ \,=\ \,e^{\,t}\ \left[\begin{array}{r} 1 \\ 0 \\ 1 \end{array}\right]
   \qquad\text{and}\qquad
   \boldsymbol{x}^2(t)\ \,=\ \,e^{\,t}\ \left[\begin{array}{r} 0 \\ 1 \\ -2 \end{array}\right]\,.

The eigenvectors of the matrix :math:`\,\boldsymbol{A}\ ` associated with the eigenvalue :math:`\,\lambda_3=-2\ ` are of the form

.. math::
   :label: sol_3
   
   \boldsymbol{v}_3\ =\ 
   \beta\ \left[\begin{array}{r} 3 \\ 3 \\ -4 \end{array}\right]\,,\quad
   \beta\in R\!\smallsetminus\!\{0\}\,,
   \qquad\text{so that}\qquad
   \boldsymbol{x}^3(t)\ \,=\ \,e^{\,-2\,t}\ \left[\begin{array}{r} 3 \\ 3 \\ -4 \end{array}\right]\,.
   
The general solution of the system is an arbitrary linear combination of the solutions :math:`\,` :eq:`sol_12` :math:`\,` and :math:`\,` :eq:`sol_3`:

.. math::
   
   \begin{array}{l}
   \boldsymbol{x}(t)\ \,=\ \,c_1\ \boldsymbol{x}^1(t)\ +\ 
                             c_2\ \boldsymbol{x}^2(t)\ +\ 
                             c_3\ \boldsymbol{x}^3(t)\,:
   \\ \\
   \begin{cases}\ \ \begin{array}{l}
   x_1(t)\ =\ c_1\ e^{\,t}\,+\,3\ c_3\ e^{\,-2\,t} \\
   x_2(t)\ =\ c_2\ e^{\,t}\,+\,3\ c_3\ e^{\,-2\,t} \\
   x_3(t)\ =\ (c_1-2\,c_2)\ e^{\,t}\,-\,4\ c_3\ e^{\,-2\,t}
   \end{array}\end{cases}\qquad
   c_1,\,c_2,\,c_3\,\in R\,.
   \end{array}

**Case 4.**

For some of the eigenvalues of the matrix :math:`\,\boldsymbol{A}\ ` the geometric multilplicty is different (smaller) from the algebraic multilplicity.

.. Chociaż nie istnieje wtedy baza przestrzeni :math:`\,R^n\ ` złożona z wektorów własnych
   macierzy :math:`\,\boldsymbol{A},\ ` to można skonstruować *bazę Jordana* tej przestrzeni.
   Wykorzystując wektory tej bazy można utworzyć zbiór :math:`\,n\ ` liniowo niezależnych
   rzeczywistych rozwiązań układu :eq:`set_diff`.

In this case a basis of the space :math:`\,R^n\ ` cannot be formed exclusively from the eigenvectors of the matrix :math:`\,\boldsymbol{A}.\ `
However, one can use vectors of a *Jordan basis* of this space to form a set consisting of :math:`\,n\ ` linearly independent real solutions of the system :eq:`set_diff`.
We will show on an example, without developping a general theory, that such a construction is possible.

**Example 4.** :math:`\,` 
We solve a system of linear differential equations

.. math::
   :nowrap:
   
   \begin{alignat*}{4}
   \dot{x}_1 & {\ } = {\ } & 4\ x_1 & {\ } + {\ } &    x_2 & {\ } + {\ } &    x_3 \\
   \dot{x}_1 & {\ } = {\ } & 2\ x_1 & {\ } + {\ } & 4\ x_2 & {\ } + {\ } &    x_3 \\
   \dot{x}_1 & {\ } = {\ } &        &             &    x_2 & {\ } + {\ } & 4\ x_3 
   \end{alignat*}

The characteristic equation of the matrix 
:math:`\ \ \boldsymbol{A}\ =\ \left[\begin{array}{ccc}
4 & 1 & 1 \\ 2 & 4 & 1 \\ 0 & 1 & 4 \end{array}\right]:`

.. math::
   
   \left|\begin{array}{ccc}
   4-\lambda & 1  & 1 \\
   2 &  4-\lambda & 1 \\
   0 &   1 &   4-\lambda
   \end{array}\right|\ =\ 
   \lambda^3-12\,\lambda^2+45\,\lambda-54\ =\ 
   (\lambda-3)^2\,(\lambda-6)\ =\ 0

has a double root :math:`\,\lambda_{1,2}=3\ `
and a single root :math:`\,\lambda_3=6\,.` :math:`\\`

The coordinates :math:`\ \beta_1,\beta_2,\beta_3\ ` 
of the eigenvectors associated with the eigenvalue :math:`\,\lambda_{1,2}\ ` 
may be determined from the equation

.. math::
   
   \left[\begin{array}{ccc}
   1 & 1 & 1 \\ 2 & 1 & 1 \\ 0 & 1 & 1 
   \end{array}\right]\ 
   \left[\begin{array}{c} \beta_1 \\ \beta_2 \\ \beta_3 \end{array}\right]\ =\    
   \left[\begin{array}{c} 0 \\ 0 \\ 0 \end{array}\right]\,,
   \quad\text{so}\quad
   \begin{cases}\begin{array}{r}
   \beta_1+\beta_2+\beta_3=0 \\ 2\,\beta_1+\beta_2+\beta_3=0 \\ \beta_2+\beta_3=0
   \end{array}\end{cases}:\quad
   \begin{cases}\begin{array}{l}
   \beta_1=0 \\ \beta_3=-\beta_2
   \end{array}\end{cases}

Te solution is given by
:math:`\ \ \beta_1=0\,,\ \  \beta_2=\beta\,,\ \ \beta_3=-\beta\,,\ \ 
\beta\in R\,,\ ` so the eigenvectors

.. math::
   :label: v1
   
   \boldsymbol{v}_1\ =\ 
   \beta\ \left[\begin{array}{r} 0 \\ 1 \\ -1 \end{array}\right]\,,\quad
   \beta\in R\!\smallsetminus\!\{0\}

comprise (together with the zero vector) a 1-dimensional subspace:
the geometric multiplicity of the eigenvalue :math:`\,\lambda_{1,2}\ ` is equal to 1.
Hence we obtain a solution of the system of linear differential equations:

.. math::
   :label: x1
   
   \boldsymbol{x}^1(t)\ \,=\ \,
   e^{\,3\,t}\ \left[\begin{array}{r} 0 \\ 1 \\ -1 \end{array}\right]\,.

The second solution associated with the eigenvalue :math:`\,\lambda_{1,2}\ `
may be obtained from the construction of *Jordan basis* 
:math:`\,\mathcal{B}_{1,2}=(\boldsymbol{w}_1,\boldsymbol{w}_2)\,.\ `
The vectors :math:`\,\boldsymbol{w}_1,\boldsymbol{w}_2\in R^3\!\smallsetminus\!\{\boldsymbol{0}\}\ ` 
are defined by the conditions

.. math::
   :label: w1_w2
   
   \begin{cases}\ \begin{array}{l}
   (\boldsymbol{A}-\lambda_{1,2}\ \boldsymbol{I}_3)\ \boldsymbol{w}_1\ =\ \boldsymbol{0} \\
   (\boldsymbol{A}-\lambda_{1,2}\ \boldsymbol{I}_3)\ \boldsymbol{w}_2\ =\ \boldsymbol{w}_1
   \end{array}\end{cases}
   \quad\text{so}\qquad\ 
   \begin{cases}\ \begin{array}{l}
   \boldsymbol{A}\,\boldsymbol{w}_1\ =\ \lambda_{1,2}\ \boldsymbol{w}_1 \\
   \boldsymbol{A}\,\boldsymbol{w}_2\ =\ \boldsymbol{w}_1+\lambda_{1,2}\ \boldsymbol{w}_2
   \end{array}\end{cases}

We will show that :math:`\ \,\boldsymbol{w}_1\,` and :math:`\boldsymbol{w}_2\ \,` are linearly independent. Indeed, let 

.. math::
   
   \alpha_1\ \boldsymbol{w}_1\ +\ \alpha_2\ \boldsymbol{w}_2\ \,=\ \,\boldsymbol{0}\,,\qquad
   \alpha_1,\,\alpha_2\in R\,.

Multiply this equality on both sides from the left by the matrix 
:math:`\,\boldsymbol{A}-\lambda_{1,2}\ \boldsymbol{I}_3\ .` :math:`\\`
The conditions :eq:`w1_w2` imply

.. math::
   :nowrap:
   
   \begin{eqnarray*}
   \alpha_1\ (\boldsymbol{A}-\lambda_{1,2}\ \boldsymbol{I}_3)\ \boldsymbol{w}_1\ +\ 
   \alpha_2\ (\boldsymbol{A}-\lambda_{1,2}\ \boldsymbol{I}_3)\ \boldsymbol{w}_2 & = & \boldsymbol{0}
   \\ 
   \text{so}\quad\alpha_2\ \boldsymbol{w}_1 & = & \boldsymbol{0}\,,\quad
   \text{and thus}\quad\alpha_2=0\,,
   \\
   \text{but then}\quad\alpha_1\ \boldsymbol{w}_1 & = & \boldsymbol{0}\,,
   \quad\text{so}\quad\alpha_1=0\,.
   \end{eqnarray*}

We check now that the function

.. math::
   :label: x2_compact
   
   \boldsymbol{x}^2(t)\ \,=\ \,
   \exp{(\lambda_{1,2}\;t)}\,\cdot\,(t\,\boldsymbol{w}_1\,+\,\boldsymbol{w}_2)

is a solution to the considered system of differential equations. Indeed, by the equations :eq:`w1_w2` we have

.. math::
   :nowrap:

   \begin{eqnarray*}   
   \boldsymbol{\dot{x}}^2(t) & = &
   \lambda_{1,2}\ \exp{(\lambda_{1,2}\;t)}\,\cdot\,(t\,\boldsymbol{w}_1\,+\,\boldsymbol{w}_2)\ +\ 
   \exp{(\lambda_{1,2}\;t)}\,\cdot\,\boldsymbol{w}_1\ =
   \\
   & = & \exp{(\lambda_{1,2}\;t)}\,\cdot\, 
   \left[\ \,t\,\cdot\,\lambda_{1,2}\;\boldsymbol{w}_1\,+\,
   (\boldsymbol{w}_1+\lambda_{1,2}\,\boldsymbol{w}_2)\ \right]\ =
   \\
   & = & \exp{(\lambda_{1,2}\;t)}\,\cdot\, 
   (\ t\,\cdot\,\boldsymbol{A}\,\boldsymbol{w}_1\,+\,\boldsymbol{A}\,\boldsymbol{w}_2\ )\ =
   \\
   & = & \boldsymbol{A}\ \,[\ \,\exp{(\lambda_{1,2}\;t)}\,\cdot\, 
   (t\,\boldsymbol{w}_1\,+\,\boldsymbol{w}_2)\ ]\ =
   \\
   & = & \boldsymbol{A}\ \boldsymbol{x}^2(t)\,.
   \end{eqnarray*}

We now determine the vectors :math:`\,\boldsymbol{w}_1\ \ \text{and}\ \ \boldsymbol{w}_2\,.\ `
Since :math:`\,\boldsymbol{w}_1\ ` is an eigenvector of the matrix 
:math:`\,\boldsymbol{A}\ ` associated with the eigenvalue :math:`\,\lambda_{1,2}\,,\ `
we may assume :math:`\ \,\boldsymbol{w}_1=\boldsymbol{v}_1\,.\ `
Taking :math:`\ \beta=1\ ` in the equation :eq:`v1`, we obtain:

.. math::
   
   \boldsymbol{w}_1\ =\ 
   \left[\begin{array}{r} 0 \\ 1 \\ -1 \end{array}\right]\,.

The vector :math:`\ \,\boldsymbol{w}_2=[\,\gamma_i\,]_3\ \,` may be calculated from the equation:
:math:`\ \ (\boldsymbol{A}-\lambda_{1,2}\,\boldsymbol{I}_3)\,\boldsymbol{w}_2=\boldsymbol{w}_1\,,\ \ `
that is

.. math::
   
   \left[\begin{array}{ccc}
   1 & 1 & 1 \\ 2 & 1 & 1 \\ 0 & 1 & 1 
   \end{array}\right]\ 
   \left[\begin{array}{c} \gamma_1 \\ \gamma_2 \\ \gamma_3 \end{array}\right]\ =\    
   \left[\begin{array}{r} 0 \\ 1 \\ -1 \end{array}\right]\,,
   \quad\text{and so}\quad
   \begin{cases}\begin{array}{r}
   \gamma_1+\gamma_2+\gamma_3\,=\,0 \\ 2\,\gamma_1+\gamma_2+\gamma_3\,=\,1 \\ \gamma_2+\gamma_3\,=\,-1
   \end{array}\end{cases}

The solution is: 
:math:`\ \ \gamma_1=1,\ \ \gamma_2=\gamma,\ \ \gamma_3=-1-\gamma,\quad\gamma\in R.\ \,`
For :math:`\ \gamma=0\ ` we obtain

.. math::
   
   \boldsymbol{w}_2\ =\ \left[\begin{array}{r} 1 \\ 0 \\ -1 \end{array}\right]\,.

The solution :eq:`x2_compact` of the system of differential equations takes now an explicit form:

.. math::
   :label: x2
   
   \boldsymbol{x}^2(t)\ \,=\ \,
   e^{\,3\,t}\ \left[\begin{array}{c} 1 \\ t \\ -1-t \end{array}\right]\,.

In this way we have two linearly independent solutions,
:math:`\ \boldsymbol{x}^1(t)\ ` and :math:`\ \boldsymbol{x}^2(t)\,,\ `
associated with the eigenvalue :math:`\ \lambda_{1,2}=3\ ` of the matrix :math:`\,\boldsymbol{A}\,.`

It remains to determine the solution associated with the (single) eigenvalue :math:`\ \lambda_3=6.\ ` :math:`\\`
The associated eigenvectors :math:`\,\boldsymbol{v}_3=[\,\beta_i\,]_3\ ` are computed from the equation

.. math::
   
   \left[\begin{array}{rrr}
   -2 & 1 & 1 \\ 2 & -2 & 1 \\ 0 & 1 & -2
   \end{array}\right]\ 
   \left[\begin{array}{c}
   \beta_1 \\ \beta_2 \\ \beta_3
   \end{array}\right]\ =\ 
   \left[\begin{array}{c}
   0 \\ 0 \\ 0
   \end{array}\right]\,,
   \quad\text{so}\quad
   \begin{cases}\ \begin{array}{r}
   -\,2\,\beta_1\,+\,\beta_2\,+\,\beta_3\,=\,0 \\
   2\,\beta_1\,-\,2\,\beta_2\,+\,\beta_3\,=\,0 \\
   \beta_2\,-\,2\,\beta_3\,=\,0
   \end{array}\end{cases}.

Hence:
:math:`\quad\beta_1=3\,\beta\,,\ \ \beta_2=4\,\beta\,,\ \ \beta_3=2\,\beta\,,\ \ \beta\in R\,,\quad`
and thus 
:math:`\quad\boldsymbol{v}_3\ =\ \beta\ \left[\begin{array}{c} 3 \\ 4 \\ 2 \end{array}\right]\,,
\ \ \beta\in R\!\smallsetminus\!\{0\}\,,`

and the solution of the system of differential equations for this eigenvalue is given by

.. math::
   :label: x3
   
   \boldsymbol{x}^3(t)\ \,=\ \,
   e^{\,6\,t}\ \left[\begin{array}{r} 3 \\ 4 \\ 2 \end{array}\right]\,.

The vector :math:`\,\boldsymbol{v}_3\ ` (eg. for :math:`\,\beta=1`) may be taken as the third vector :math:`\,\boldsymbol{w}_3\ ` of the Jordan basis in :math:`\,R^3\,,\ `
corresponding to the matrix :math:`\,\boldsymbol{A}:`

.. math::
   
   \mathcal{B}\ =\ (\boldsymbol{w}_1,\boldsymbol{w}_2,\boldsymbol{w}_3)\ \ =\ \ 
   \left(\ \ 
   \left[\begin{array}{r} 0 \\ 1 \\ -1 \end{array}\right]\,,\ 
   \left[\begin{array}{r} 1 \\ 0 \\ -1 \end{array}\right]\,,\ 
   \left[\begin{array}{r} 3 \\ 4 \\ 2 \end{array}\right]
   \ \ \right)\,.


The general solution of the system of differential equations is an arbitrary linear combination of the particular solutions :math:`\,` :eq:`x1`, :math:`\,` :eq:`x2` :math:`\,` and :math:`\,` :eq:`x3` :

.. math::
   
   \begin{array}{c}
   \boldsymbol{x}(t)\ \,=\ \,c_1\ \boldsymbol{x}^1(t)\ +\ 
                             c_2\ \boldsymbol{x}^2(t)\ +\ 
                             c_3\ \boldsymbol{x}^3(t) :
   \\ \\
   \left[\begin{array}{c} x_1(t) \\ x_2(t) \\ x_3(t) \end{array}\right]\ =\ 
   e^{\,3\,t}\ 
   \left[\begin{array}{c}
   c_2 \\ c_1\,+\,c_2\,t \\ -\,c_1\,-\,c_2\,(1+t)
   \end{array}\right]\ +\ 
   c_3\ e^{\,6\,t}\ 
   \left[\begin{array}{c} 3 \\ 4 \\ 2 \end{array}\right]
   \\ \\
   \qquad\ \ 
   \begin{cases}\ \ \begin{array}{l}
   x_1(t)\ \,=\ \,c_2\ e^{\,3\,t}\ +\ 3\,c_3\ e^{\,6\,t} \\
   x_2(t)\ \,=\ \,(c_1+c_2\;t)\ e^{\,3\,t}\ +\ 4\,c_3\ e^{\,6\,t} \\
   x_3(t)\ \,=\ \,-\ [\,c_1+c_2\,(1+t)\,]\ e^{\,3\,t}\ +\ 2\,c_3\ \ e^{\,6\,t}
   \end{array}\end{cases}
   c_1,\,c_2,\,c_3\in R\,.
   \end{array}
   





    


   

  







   
   






































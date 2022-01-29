Matrix Diagonalization - Examples
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Example 0.**

Show that the matrix :math:`\ \boldsymbol{A}\ =\ 
\left[\begin{array}{cc} 1 & a \\ 0 & 1 \end{array}\right]
\in M_2(R),\quad a\neq 0,\ ` is not diagonalizable by a similarity
transformation, :math:`\ ` that is, 
there is no non-degenerate matrix :math:`\ \boldsymbol{P}\ ` such that

.. math::
   :label: simil
   
   \boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P}\ =\ \boldsymbol{D},

where :math:`\ \boldsymbol{D}\ ` is diagonal.

**Proof.**

**I.** :math:`\,` The matrix :math:`\,\boldsymbol{A}\in M_n(K)\,` 
is diagonalizable by a similarity transformation :eq:`simil` 
if and only if its eigenvectors span the space
:math:`\,K^n,\ ` that is, eigenvectors of the matrix :math:`\,\boldsymbol{A}` 
comprise a basis of the space :math:`\,K^n.` 

The characteristic equation of the matrix :math:`\,\boldsymbol{A}:`

.. math::
   
   \det{(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)}\ =\ 
   \left|\begin{array}{cc} 1-\lambda &a \\ 0 & 1-\lambda \end{array}\right|\ =\ 
   (1-\lambda)^2 =\,0

provides one eigenvalue :math:`\,\lambda=1\,` whose algebraic multiplicity is equal to 2.

Eigenvectors :math:`\,\boldsymbol{x}\,` associated with this eigenvalue may be determined from the equation
:math:`\ (\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\,\boldsymbol{x}\,=\,
\boldsymbol{0},\ ` that is

.. math::
   
   \left[\begin{array}{cc} 0 & a \\ 0 & 0 \end{array}\right]
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right]\ =\ 
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right]
   \quad : \quad
   \begin{cases} 
   \ \ x_1 \text{  arbitrary,} \\ \ \ a\,x_2=0\,;  
   \end{cases}
   \ : \quad
   \begin{cases} 
   \ \ x_1 \text{  arbitrary,} \\ \ \ x_2=0\,.  
   \end{cases}
   \,,

Hence, the eigenvectors are of the form

.. math::
   
   \boldsymbol{x}\,=\,
   \left[\begin{array}{c} \beta \\ 0 \end{array}\right]\ =\ 
   \beta\ \left[\begin{array}{c} 1 \\ 0 \end{array}\right],\quad
   \beta\in R\setminus\{0\}

and comprise (together with a zero vector) 1-dimensional subspace: 
geometric multiplicity of the eigenvalue :math:`\,\lambda=1\,` 
is 1 :math:`\,` and thus :math:`\,` it is different from the algebraic multiplicity.

Hence, since any two eigenvectors of the matrix :math:`\,\boldsymbol{A}\ ` are linearly dependent,
they do not form a basis of the space :math:`\,R^2.\ ` This means that it is not possible 
to diagonalize the matrix :math:`\,\boldsymbol{A}\ ` by a non-degenerate matrix 
:math:`\,\boldsymbol{P}.`  

**II.** :math:`\,` Similar matrices have the same chracteristic polynomial,
and thus also the same set of eigenvalues with the same corresponding algebraic multiplicities.

It is easy to see that the matrix :math:`\,\boldsymbol{A}\,` has an eigenvalue
:math:`\,\lambda=1\,` with algebraic multiplicity 2.

If there exists a matrix :math:`\,\boldsymbol{P}\,` 
satisfying the condition :eq:`simil`, :math:`\,` then the matrix 
:math:`\,\boldsymbol{D}\,` in that equation is a diagonal matrix of size 2 
having an eigenvalue :math:`\,\lambda=1\ ` with algebraic multiplicity 2.
These conditions uniquely determine an identity matrix: 
:math:`\ \boldsymbol{D}\,=\,\boldsymbol{I}_2.` 

Therefore we would have
:math:`\ \boldsymbol{P}^{-1}\boldsymbol{A}\,\boldsymbol{P}\ =\ 
\boldsymbol{I}_2,\ ` and thus :math:`\ \boldsymbol{A}\,=\,
\boldsymbol{P}\,\boldsymbol{I}_2\boldsymbol{P}^{-1}\ =\ 
\boldsymbol{P}\boldsymbol{P}^{-1}\ =\ \boldsymbol{I}_2.`

This gives a contradiction as :math:`\ \boldsymbol{A}\neq\boldsymbol{I}_2.\ `
Hence, there is no matrix :math:`\,\boldsymbol{P}\,` for which 
the equation :eq:`simil` would hold.

**Example 1.**

The matrix :math:`\ \boldsymbol{\sigma}_x\,=\,
\left[\begin{array}{cc} 0 & 1 \\ 1 & 0 \end{array}\right]\in M_2(C)\ `
is real and symmetric, and thus Hermitian.

We will verify that:

* its eigenvalues are real,
* eigenvectors associated with distinct eigenvalues are orthogonal,
* algebraic multiplicity of every eigenvalue is equal to its geometric multiplicity,
* eigenvectors of the matrix :math:`\ \boldsymbol{\sigma}_x\ ` comprise an orthonormal
  basis of the space :math:`\,C^2,` 
* the matrix :math:`\ \boldsymbol{\sigma}_x\ ` is diagonalizable by a real orthogonal similarity transformation.

The characteristic equation of the matrix :math:`\,\boldsymbol{\sigma}_x\,:`

.. math::
   
   w(\lambda)\,=\,
   \left|\begin{array}{cc}
   -\lambda & 1 \\ 1 & -\lambda
   \end{array}\ \right|\ =\ 
   (-\lambda)^2-1\ =\ \lambda^2-1\ =\ (\lambda-1)(\lambda+1)\ =\ 0

provides two eigenvalues with their algebraic multiplicities:

.. math::
   
   \lambda_1\,=\ 1\quad(1)\,,\qquad\lambda_2\,=\ -1\quad(1)\,.

We substitute them to the equation

.. math::
   
   (\boldsymbol{\sigma}_x -\lambda\,\boldsymbol{I}_2)\,\boldsymbol{x}\ =
   \ \boldsymbol{0}

to determine the associated eigenvectors :math:`\ \boldsymbol{x}.`

Eigenvectors associated with the eigenvalue :math:`\,\lambda_1=\,1:`

.. math::
   
   \begin{array}{l}
   \left[\begin{array}{rr} -1 & 1 \\ 1 & -1 \end{array}\ \right]
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right] \ =\ 
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right]
   \quad : \quad
   \begin{cases}\ 
   \begin{array}{r} -x_1+x_2=0 \\ x_1-x_2=0 \end{array}
   \end{cases}
   : \quad
   x_1=x_2=\alpha,\ \ \alpha\in C.
   \\ \\
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right] \ =\ 
   \left[\begin{array}{c} \alpha \\ \alpha \end{array}\right]\ =\ 
   \alpha\ \left[\begin{array}{c} 1 \\ 1 \end{array}\right]\,,
   \quad\alpha\in C\setminus\{0\}.
   \end{array}

Eigenvectors associated with the eigenvalue :math:`\,\lambda_2=\,-1:`

.. math::
   
   \begin{array}{l}
   \left[\begin{array}{rr} 1 & 1 \\ 1 & 1 \end{array}\right]
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right] \ =\ 
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right]
   \quad : \quad
   \begin{cases}\ 
   \begin{array}{r} x_1+x_2=0 \\ x_1+x_2=0 \end{array}
   \end{cases}
   : \quad
   x_1=-x_2=\beta,\ \ \beta\in C.
   \\ \\
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right] \ =\ 
   \left[\begin{array}{c} \beta \\ -\beta \end{array}\right]\ =\ 
   \beta\ \left[\begin{array}{r} 1 \\ -1 \end{array}\right]\,,
   \quad\beta\in C\setminus\{0\}.
   \end{array}

Geometric multiplicity of the two eigenvalues is equal to  1 
and agrees with the algebraic multiplicity. Moreover, every two eigenvectors  
associated with distinct eigenvalues are orthogonal:

.. math::
   
   \left\langle\ 
   \left[\begin{array}{c} \alpha \\ \alpha \end{array}\right],\ 
   \left[\begin{array}{c}  \beta \\ -\beta \end{array}\right]\ 
   \right\rangle\ =\ 
   \alpha^*\beta\,+\,\alpha^*(-\beta)\ =\ 
   \alpha^*\beta\,-\,\alpha^*\beta\ =\ 0.

Hence, normalised eigenvectors of the matrix :math:`\ \boldsymbol{\sigma}_x\,`
comprise an orthonormal basis :math:`\ \mathcal{F}\ ` of the space :math:`\,C^2\,:` 

.. math::
   
   \mathcal{F}\ =\ \,(\,\boldsymbol{f}_1,\,\boldsymbol{f}_2\,)\,,
   \quad\text{where}\quad
   \boldsymbol{f}_1\ =\ \textstyle{\frac{1}{\sqrt{2}}}\,
   \left[\begin{array}{c} 1 \\ 1 \end{array}\right]\,,\quad
   \boldsymbol{f}_2\ =\ \textstyle{\frac{1}{\sqrt{2}}}\,
   \left[\begin{array}{c} 1 \\ -1 \end{array}\right]\,.

The basis vectors form a matrix :math:`\,\boldsymbol{P}\ `
which diagonalizes the matrix :math:`\,\boldsymbol{\sigma}_x:`

.. math::
   
   \boldsymbol{P}\,=\ 
   [\ \boldsymbol{f}_1\ |\ \boldsymbol{f}_2\ ]\ =\ 
   \textstyle{\frac{1}{\sqrt{2}}}\,
   \left[\begin{array}{rr} 1 & 1 \\ 1 & -1 \end{array}\right]\,.

Note that :math:`\,\boldsymbol{P}\,` is a real matrix which is both :math:`\ ` 
Hermitian (symmetric) :math:`\ ` and :math:`\ ` unitary 
(orthogonal):

.. math::
   
   \boldsymbol{P}^+\ =\ \,\boldsymbol{P}^T\ =\ \,\boldsymbol{P}
   \,,\qquad
   \boldsymbol{P}^+\boldsymbol{P}\ =\ 
   \boldsymbol{P}^T\boldsymbol{P}\ =\ 
   \boldsymbol{I}_2\,;

   \text{moreover:}\qquad
   \boldsymbol{P}^2\ =\ \boldsymbol{I}_2,\quad
   \boldsymbol{P}^{-1}\ =\ \boldsymbol{P}^+\ =\ \boldsymbol{P}\,.

Numerical diagonalization of the matrix :math:`\,\boldsymbol{\sigma}_x:`

.. code-block:: python
   
   sage: P = (1/sqrt(2))*matrix(RR,[[1, 1],
                              [1,-1]])
   sage: P*P

   [ 1.00000000000000  0.000000000000000]
   [ 0.000000000000000 1.00000000000000 ]

.. code-block:: python
   
   sage: S_x = matrix(RR,[[0, 1],
                          [1, 0]])
   
   sage: P = (1/sqrt(2))*matrix(RR,[[1, 1],
                              [1,-1]])
   sage: P*S_x*P

   [ 1.00000000000000   0.000000000000000]
   [ 0.000000000000000 -1.00000000000000 ]

.. :math:`\\[14pt]`

**Example 2.**

The matrix :math:`\ \boldsymbol{R}_\phi\ =\ 
\left[\begin{array}{cc}
\cos{\phi} & -\sin{\phi} \\ \sin{\phi} & \cos{\phi}
\end{array}\right] \in M_2(C)\ `
is real orthogonal, and thus unitary:

.. math::
   
   \boldsymbol{R}_\phi^+\,\boldsymbol{R}_\phi\ =\
   \boldsymbol{R}_\phi^T\,\boldsymbol{R}_\phi\ =\ 
   \boldsymbol{I}_2.
   
We will verify that:

* its eigenvalues are complex numbers of modulus 1,

* eigenvectors associated with distinct eigenvalues are orthogonal,

* algebraic multiplicity of every eigenvalue is equal to its geometric multiplicity,

* eigenvectors of the matrix :math:`\ \boldsymbol{R}_\phi\ ` comprise an orthonormal
  basis of the space :math:`\,C^2,` 
  
* the matrix :math:`\ \boldsymbol{R}_\phi\ ` is diagonalizable by a unitary similarity transformation.

If :math:`\,\phi=0\ ` or :math:`\,\phi=\pi,\ ` 
then the matrix :math:`\ \boldsymbol{R}_\phi\ ` is diagonal and equals
:math:`\,\boldsymbol{I}_2\ ` or :math:`\ -\,\boldsymbol{I}_2,\ ` correspondingly.
We will assume then that :math:`\ \phi\neq 0,\,\pi.`

A unitary matrix diagonalizing the matrix :math:`\ \boldsymbol{R}_\phi\ `
is a transition matrix from the canonical basis :math:`\,\mathcal{E}\,=\,
(\boldsymbol{e}_1,\, \boldsymbol{e}_2)\ ` of the space :math:`\,C^2\ ` 
to an orthonormal basis :math:`\,\mathcal{F}\,=\,
(\boldsymbol{f}_1,\boldsymbol{f}_2)\ ` consisting of normalised eigenvectors 
of the matrix :math:`\ \boldsymbol{R}_\phi.`

We solve an eigenproblem of the matrix :math:`\ \boldsymbol{R}_\phi\ `
and :math:`\,` construct the basis :math:`\,\mathcal{F}.`

The characteristic polynomial :math:`\,w(\lambda)\,=\,
\det(\boldsymbol{R}_\phi -\,\lambda\,\boldsymbol{I}_2)\ `
is given by

.. math::
   
   \begin{array}{rl}
   w(\lambda) \!\! & =\ \ \left|\begin{array}{cc}
   \cos{\phi}-\lambda & -\sin{\phi} \\ \sin{\phi} & \cos{\phi}-\lambda
   \end{array}\right| \ =\ (\cos{\phi}-\lambda)^2\,+\ {\sin}^2\phi\ = 
   \\[12pt]
   & =\ \, {\cos}^2\phi - 2\,\lambda\,\cos{\phi}\ + \lambda^2 +\ {\sin}^2\phi\  
   =\ 1\, -\, 2\,\lambda\,\cos{\phi}\ +\,\lambda^2.
   \end{array}

Eigenvalues of the matrix :math:`\ \boldsymbol{R}_\phi\ `
are roots of the characteristic equation :math:`\,w(\lambda)=0:`

.. math::
   
   \begin{array}{rl}
   \vartriangleright 
   & \lambda^2\,-\ 2\,\cos{\phi}\cdot\lambda\ +\ 1\ =\ 0 \\[8pt]
   & \Delta\ =\ 4\,{\cos}^2\phi\ -\ 4\ 
            =\ -\ 4\,(1-{\cos}^2\phi)\ 
            =\ -\ 4\,{\sin}^2\phi\,<\,0\,; \\[8pt]
   & \sqrt{\Delta}\ =\ \pm\,2\,i\,\sin{\phi}; \\[8pt]
   & \lambda_{1,2}\ =\ \frac{1}{2}\ (2\,\cos{\phi}\,\pm\,2i\sin{\phi})\ 
                    =\ \cos{\phi}\,\pm\,i\,\sin{\phi}\ 
                    =\ e^{\ \pm\,i\,\phi}\,.                       
   \end{array}

We obtained two eigenvalues with algebraic multiplicities equal to 1:

.. math::
   
   \blacktriangleright\quad
   \lambda_1\,=\ e^{\ +\,i\,\phi}\,,\qquad
   \lambda_2\,=\ e^{\ -\,i\,\phi}\,.

We substitute these values to the equation

.. math::
   
   (\boldsymbol{R}_\phi-\lambda\,\boldsymbol{I}_2)\ \boldsymbol{x}\ =
   \ \boldsymbol{0}

in order to determine the associated eigenvectors :math:`\ \boldsymbol{x}.`

For an eigenvalue :math:`\ \lambda_1 =\,
e^{\ +\,i\,\phi}\,=\,\cos{\phi}\,+\,i\,\sin{\phi}\ :` 

.. math::
   
   \left[\begin{array}{cc}
   -i\,\sin{\phi} & -\sin{\phi} \\ \sin{\phi} & -i\,\sin{\phi}
   \end{array}\right]
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right] \ =\ 
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right]\,;

   \sin{\phi}\,\cdot\,
   \left[\begin{array}{cc} -i & -1 \\ 1 & -i \end{array}\right]
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right] \ =\ 
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right],\quad
   \text{where  }\sin{\phi}\neq 0\,;

   \left[\begin{array}{cc} -i & -1 \\ 1 & -i \end{array}\right]
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right] \ =\ 
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right]
   \quad : \quad
   \begin{cases}\ 
   \begin{array}{r} -i\,x_1 - x_2 = 0 \\ x_1 - i\,x_2 = 0 \end{array}
   \end{cases}
   : \quad
   x_1=i\,x_2 
   
   \blacktriangleright\quad
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right]\ =\  
   \left[\begin{array}{r} i\,\alpha \\ \alpha \end{array}\right]\ =\ 
   \alpha\,\left[\begin{array}{r} i \\ 1 \end{array}\right],
   \quad\alpha\in C\setminus\{0\}.

For an eigenvalue :math:`\ \lambda_2 =\,
e^{\ -\,i\,\phi}\,=\,\cos{\phi}\,-\,i\,\sin{\phi}\ :`

.. math::
   
   \left[\begin{array}{cc}
   i\,\sin{\phi} & -\sin{\phi} \\ \sin{\phi} & i\,\sin{\phi}
   \end{array}\right]
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right] \ =\ 
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right]\,;

   \sin{\phi}\,\cdot\,
   \left[\begin{array}{cc} i & -1 \\ 1 & i \end{array}\right]
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right] \ =\ 
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right],\quad
   \text{where  }\sin{\phi}\neq 0\,;

   \left[\begin{array}{cc} i & -1 \\ 1 & i \end{array}\right]
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right] \ =\ 
   \left[\begin{array}{c} 0 \\ 0 \end{array}\right]
   \quad : \quad
   \begin{cases}\ 
   \begin{array}{r} i\,x_1 - x_2 = 0 \\ x_1 + i\,x_2 = 0 \end{array}
   \end{cases}
   : \quad
   x_2=i\,x_1 
   
   \blacktriangleright\quad
   \left[\begin{array}{c} x_1 \\ x_2 \end{array}\right]\ =\  
   \left[\begin{array}{r} \beta \\ i\,\beta \end{array}\right]\ =\ 
   \beta\,\left[\begin{array}{r} 1 \\ i \end{array}\right],
   \quad\beta\in C\setminus\{0\}.

Note that the eigenvectors do not depend on the angle :math:`\,\phi.\ `
Geometric multiplicities of the eigenvalues
:math:`\ \lambda_1,\,\lambda_2\ ` are equal to 1 
and agree with the algebraic multiplicities. 

Furthermore, any two vectors associated with distinct eigenvalues are orthogonal:

.. math::
   
   \left\langle\ 
   \left[\begin{array}{c} i\,\alpha \\ \alpha \end{array}\right],\ 
   \left[\begin{array}{c} \beta \\ i\,\beta \end{array}\right]\ 
   \right\rangle\ =\ 
   -i\,\alpha^*\beta\,+\,\alpha^*\,i\,\beta\ =\ 0.

Hence, we may now construct an orthonormal basis :math:`\ \mathcal{F}\ ` 
of the space :math:`\,C^2\ ` consisting of normalized eigenvectors 
of the matrix :math:`\ \boldsymbol{R}_\phi\ ` 
associated with distinct eigenvalues:

.. math::
   
   \mathcal{F}\ =\ (\,\boldsymbol{f}_1,\,\boldsymbol{f}_2\,),
   \quad\text{where}\quad
   \boldsymbol{f}_1\ =\ 
   \textstyle{\frac{1}{\sqrt{2}}}\,
   \left[\begin{array}{c} i \\ 1 \end{array}\right],\quad
   \boldsymbol{f}_2\ =\ 
   \textstyle{\frac{1}{\sqrt{2}}}\,
   \left[\begin{array}{c} 1 \\ i \end{array}\right]\,.

The transition matrix :math:`\ \boldsymbol{P}\ ` 
from the canonical basis :math:`\ \mathcal{E}\ ` to the basis :math:`\ \mathcal{F}\ `,
which we form from the columns :math:`\ \boldsymbol{f}_1,\,\boldsymbol{f}_2:`

.. math::

   \boldsymbol{P}\ =\ [\ \boldsymbol{f}_1\ |\ \boldsymbol{f}_2\ ]\ =
   \textstyle{\frac{1}{\sqrt{2}}}\,\left[\begin{array}{cc}
   i & 1 \\ 1 & i \end{array}\right]   
   
is unitary and diagonalizes the matrix :math:`\ \boldsymbol{R}_\phi:`

.. math::
   
   \boldsymbol{P}^+\boldsymbol{P}\ =\ \boldsymbol{I}_2,\qquad
   \boldsymbol{P}^{-1}\boldsymbol{R}_\phi\,\boldsymbol{P}\ =\ 
   \text{diag}(e^{\ +\,i\,\phi},\,e^{\ -\,i\,\phi})\,.

.. Sprawdzenie numeryczne:

.. .. code-block:: python
   
   sage: P = (1/sqrt(2))*matrix(CC,[[I, 1],
                                    [1, I]])
   sage: P.H*P

   [1.00000000000000  0.000000000000000]
   [0.000000000000000 1.00000000000000 ]

.. .. code-block:: python
   
   sage: var 'phi'

   sage: R = matrix(CC,[[cos(phi), -sin(phi)],
                        [sin(phi), cos(phi)]]

   sage: P = (1/sqrt(2))*matrix(CC,[[I, 1],
                                    [1, I]])
   sage: P.I*R*P

The matrix :math:`\ \boldsymbol{R}_\phi\ ` represents an operation of rotation 
of a vector on a plane by the angle :math:`\,\phi.\ ` This interpretation explains why, 
apart from the cases when :math:`\,\phi=0,\,\pi\,,` the eigenvalues are imaginary and not real: 
a vector rotated by an angle :math:`\,\phi\ `
is not parallel to the initial vector. In this situation diagonalization 
of a real matrix :math:`\ \boldsymbol{R}_\phi\ ` requires a unitary non-real matrix 
:math:`\ \boldsymbol{P}.`

.. , chyba że właśnie 
   :math:`\,\phi=0,\,\pi\ ` (w tych dwóch przypadkach wartość własna wynosi 
   odpowiednio +1, -1.)

.. Rzeczywista ortogonalna macierz :math:`\ \boldsymbol{R}_\phi\ `
   ma (dla :math:`\,\phi\neq 0, \pi`) zespolone nierzeczywiste wartości własne.

.. W konsekwencji diagonalizacja tej macierzy wymaga zastosowania zespolonej
   nierzeczywistej unitarnej macierzy diagonalizującej :math:`\ \boldsymbol{P}.`

.. :math:`\ `

**Example 3.**

The matrix :math:`\ \boldsymbol{A}\ =\ 
\left[\begin{array}{ccc} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{array}\right]
\in M_3(R)\ ` is real and symmetric, and thus Hermitian.

We will verify that:

* its eigenvalues are real,
* eigenvectors associated with distinct eigenvalues are orthogonal,
* algebraic multiplicity of every eigenvalue is equal to its geometric multiplicity,
* eigenvectors of the matrix :math:`\ \boldsymbol{A}\ ` comprise an orthonormal
  basis of the space :math:`\,R^3,` 
* the matrix :math:`\ \boldsymbol{A}\ ` is diagonalizable by a real orthogonal similarity transformation.

An orthogonal matrix which diagonalizes the matrix :math:`\ \boldsymbol{A}\ `
is a transition matrix from the canonical basis :math:`\,\mathcal{E}\,`
of the space :math:`\,R^3\,` to an orthonormal basis :math:`\,\mathcal{F}^0\,`
consisting of normalized eigenvectors of this matrix.
Hence, we have to solve an eigenproblem of the matrix :math:`\ \boldsymbol{A}\ `
and then construct an orthonormal basis consisting of its eigenvectors.

The characteristic equation:

.. math::
   
   \det{(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)}\ =
   \ \left|\begin{array}{ccc}
   -\lambda & 1 & 1 \\ 1 & -\lambda & 1 \\ 1 & 1 & -\lambda
   \end{array}\ \,\right|\ =
   \ -\lambda^3+3\,\lambda + 2\ =
   -(\lambda-2)(\lambda+1)^2\ =\ 0

provides the eigenvalues with their algebraic multiplicities:

.. math::
   
   \lambda_1=\,2 \quad (1)\,,\qquad \lambda_2=\,-1 \quad (2)\,.

In general, vectors :math:`\,\boldsymbol{x}\,` 
associated with an eigenvalue :math:`\,\lambda\,` may be determined from the equation

.. math::
   :label: eigen_vector
   
   (\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\ \boldsymbol{x}\ =
   \ \boldsymbol{0}.

For :math:`\ \lambda\,=\,\lambda_1=\,2\ ` the equation :eq:`eigen_vector` 
is of the form

.. math::
   
   \left[\begin{array}{ccc}
   -2 & 1 & 1 \\ 1 & -2 & 1 \\ 1 & 1 & -2
   \end{array}\right]
   \left[\begin{array}{c} x_1 \\ x_2 \\ x_3 \end{array}\right]
   \ =\ 
   \left[\begin{array}{c} 0 \\ 0 \\ 0 \end{array}\right]\,.

The method ``rref()`` of Sage transforms matrix of this homogeneous linear problem
to reduced row echelon form:

.. code-block:: python
   
   sage: A = matrix(QQ,[[-2, 1, 1],
                        [ 1,-2, 1],
                        [ 1, 1,-2]])
   sage: A.rref()

   [ 1  0 -1]
   [ 0  1 -1]
   [ 0  0  0]
   
We obtain an equivalent linear problem

.. math::
   
   \left[\begin{array}{ccc}
   1 & 0 & -1 \\ 0 & 1 & -1 \\ 0 & 0 & 0
   \end{array}\right]
   \left[\begin{array}{c} x_1 \\ x_2 \\ x_3 \end{array}\right]
   \ =\ 
   \left[\begin{array}{c} 0 \\ 0 \\ 0 \end{array}\right]

corresponding to a system of equations

.. math::
   :nowrap:
   
   \begin{alignat*}{7}
   x_1 & \  \ &     & \  - \ \ & x_3 & \  = \ \ & 0 \\
       & \  \ & x_2 & \  - \ \ & x_3 & \  = \ \ & 0
   \end{alignat*}

whose general solution is 
:math:`\ x_1=x_2=x_3=\alpha, \ \ \alpha\in R.\ ` :math:`\\`
Hence, the eigenvectors associated with the eigenvalue :math:`\,\lambda_1=2\,` are of the form

.. math::
   
   \boldsymbol{x}\ =\ 
   \left[\begin{array}{c}
   \alpha \\ \alpha \\ \alpha
   \end{array}\right]
   \ =\ 
   \alpha\ \left[\begin{array}{c} 1 \\ 1 \\ 1 \end{array}\right],
   \quad\alpha\in R\setminus\{0\}.

Geometric multiplicity of this eigenvalue is 1 
and agrees with the algebraic multiplicity.

Substitution of :math:`\ \lambda\,=\,\lambda_2=\,-1\ ` 
to the equation :eq:`eigen_vector` gives 

.. math::
   
   \left[\begin{array}{ccc}
   1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 
   \end{array}\right]
   \left[\begin{array}{c} x_1 \\ x_2 \\ x_3 \end{array}\right]
   \ =\ 
   \left[\begin{array}{c} 0 \\ 0 \\ 0 \end{array}\right]\,.

The function ``right_kernel_matrix()`` of Sage returns a matrix 
whose rows comprise a basis for the solution space of a  
homogeneous linear problem. In our case we obtain

.. code-block:: python
   
   sage: A = matrix(QQ,[[1, 1, 1],
                        [1, 1, 1],
                        [1, 1, 1]])

   sage: A.right_kernel_matrix()

   [ 1  0 -1]
   [ 0  1 -1]
   
Hence, the eigenvectors associated with the eigenvalue :math:`\ \lambda_2\,=-1\ ` are of the form

.. math::
   
   \boldsymbol{x}\ =\ 
   \alpha\ \,\left[\begin{array}{r} 1 \\ 0 \\ -1 \end{array}\right]\ +\ 
   \beta \ \,\left[\begin{array}{r} 0 \\ 1 \\ -1 \end{array}\right]\ =\ 
   \left[\begin{array}{c} 
   \alpha \\ \beta \\ -\alpha-\beta 
   \end{array}\right]\,,
   \quad\alpha,\beta\in R,\ \ \alpha^2+\,\beta^2>0.

Geometric multiplicity of this eigenvalue is 2 
and agrees with the algebraic multiplicity.

Note that eigenvectors associated with distinct eigenvalues are orthogonal:

.. math::
   
   \left\langle\ \ 
   \left[\begin{array}{c} \alpha \\ \alpha \\ \alpha \end{array}\right],\ 
   \left[\begin{array}{c} 
   \beta \\ \gamma \\ -\,\beta-\gamma 
   \end{array}\right]\ \ 
   \right\rangle\ \ =\ \ 
   \alpha\beta\,+\,\alpha\gamma\,+\,\alpha\,(-\,\beta-\gamma)\ =\ 0\,.

Denote three linearly independent eigenvectors of the matrix 
:math:`\ \boldsymbol{A}\ ` as:

.. math::
   
   \boldsymbol{g}_1\,=\ 
   \left[\begin{array}{c} 1 \\ 1 \\ 1 \end{array}\right],\quad
   \boldsymbol{g}_2\,=\ 
   \left[\begin{array}{r} 1 \\ 0 \\ -1 \end{array}\right],\quad
   \boldsymbol{g}_3\,=\ 
   \left[\begin{array}{r} 0 \\ 1 \\ -1 \end{array}\right],

so that :math:`\,\mathcal{G}=
(\boldsymbol{g}_1,\boldsymbol{g}_2,\boldsymbol{g}_3)\ ` is a basis of the space
:math:`\,R^3.\ ` 

Matrix :math:`\ \boldsymbol{P}\,=\,
[\ \boldsymbol{g}_1\,|\,\boldsymbol{g}_2\,|\,\boldsymbol{g}_3\ ]\ =\ 
\left[\begin{array}{rrr} 
1 & 1 & 0 \\ 1 & 0 & 1 \\ 1 & -1 & -1 
\end{array}\right]\ ` diagonalizes the matrix :math:`\ \boldsymbol{A}:`

.. code-block:: python
   
   sage: A = matrix(QQ,[[0, 1, 1],
                        [1, 0, 1],
                        [1, 1, 0]])

   sage: P = matrix(QQ,[[1, 1, 0],
                        [1, 0, 1],
                        [1,-1,-1]])
   sage: P.I*A*P  

   [ 2  0  0]
   [ 0 -1  0]
   [ 0  0 -1]
   
The matrix :math:`\ \boldsymbol{P}\ ` is not orthogonal because the inner product
:math:`\ \langle\boldsymbol{g}_2,\boldsymbol{g}_3\rangle = 1 \neq 0.`  
To construct an orthogonal basis 
:math:`\ \mathcal{F}=(\boldsymbol{f}_1,\boldsymbol{f}_2,\boldsymbol{f}_3)`, 
and later an orthonormal basis :math:`\ \mathcal{F}^0=
(\boldsymbol{f}_1^0,\boldsymbol{f}_2^0,\boldsymbol{f}_3^0)`, we have to apply the Gram-Schmidt ortogonalization process. Put 

.. math::
   
   \boldsymbol{f}_1=\,\boldsymbol{g}_1=\,
   \left[\begin{array}{c} 1 \\ 1 \\ 1 \end{array}\right],\quad  
   \boldsymbol{f}_2=\,\boldsymbol{g}_2=\,
   \left[\begin{array}{r} 1 \\ 0 \\ -1 \end{array}\right],\quad
   \boldsymbol{f}_3=\,\boldsymbol{g}_3+\eta\,\boldsymbol{f}_2=\,
   \left[\begin{array}{c} \eta \\ 1 \\ -1-\eta \end{array}\right],

where :math:`\,\eta\,` may be determined from the orthogonality condition
:math:`\ \langle\boldsymbol{f}_2,\boldsymbol{f}_3\rangle\,=\,2\eta+1\,=\,0,\ ` 
so that

.. math::
   
   \eta = - \textstyle\frac{1}{2}\,,\qquad
   \boldsymbol{f}_3\ =\ 
   \left[\begin{array}{r} -\frac{1}{2} \\ 1 \\ -\frac{1}{2} \end{array}\right]
   \ =\ -\frac{1}{2}\ \left[\begin{array}{r} 1 \\ -2 \\ 1 \end{array}\right]
   \ \ \sim\ \ \left[\begin{array}{r} 1 \\ -2 \\ 1 \end{array}\right]\,.

Hence, the orthogonal basis :math:`\ \mathcal{F}\ ` consists of eigenvectors

.. math::
   
   \boldsymbol{f}_1\,=\ 
   \left[\begin{array}{c} 1 \\ 1 \\ 1 \end{array}\right],\quad
   \boldsymbol{f}_2\,=\ 
   \left[\begin{array}{r} 1 \\ 0 \\ -1 \end{array}\right],\quad
   \boldsymbol{f}_3\,=\ 
   \left[\begin{array}{r} 1 \\ -2 \\ 1 \end{array}\right]\,,

and the orthonormal basis :math:`\ \mathcal{F}^0\ ` may be obtained by dividing
each vector by its norm:

.. math::
   
   \boldsymbol{f}_1^0\,=\ \textstyle{\frac{1}{\sqrt{3}}}
   \left[\begin{array}{c} 1 \\ 1 \\ 1 \end{array}\right],\quad
   \boldsymbol{f}_2\,=\ \textstyle{\frac{1}{\sqrt{2}}}
   \left[\begin{array}{r} 1 \\ 0 \\ -1 \end{array}\right],\quad
   \boldsymbol{f}_3\,=\ \textstyle{\frac{1}{\sqrt{6}}}
   \left[\begin{array}{r} 1 \\ -2 \\ 1 \end{array}\right]\,.

The column vectors 
:math:`\ \boldsymbol{f}_1^0,\,\boldsymbol{f}_2^0,\boldsymbol{f}_3^0\ `
comprise an orthogonal transition matrix :math:`\ \boldsymbol{P}^0\ `
from the canonical basis :math:`\,\mathcal{E}\,` to the basis :math:`\ \mathcal{F}^0\ `
of the space :math:`\,R^3.\ ` This is the matrix which diagonalizes the matrix
:math:`\,\boldsymbol{A}\,` by an orthogonal similarity transformation:

.. math::
   
   \boldsymbol{P}^0\ =\ \,\textstyle
   \left[\begin{array}{rrr}
   \frac{1}{\sqrt{3}} &  \frac{1}{\sqrt{2}}   &    \frac{1}{\sqrt{6}} \\ \\
   \frac{1}{\sqrt{3}} &  0                    & -\,\frac{2}{\sqrt{6}} \\ \\
   \frac{1}{\sqrt{3}} & -\,\frac{1}{\sqrt{2}} &    \frac{1}{\sqrt{6}}
   \end{array}\right]\,.

Numerical verification:

.. code-block:: python
   
   sage: P0 = matrix(RR,[[1/sqrt(3), 1/sqrt(2), 1/sqrt(6)],
                         [1/sqrt(3), 0,        -2/sqrt(6)],
                         [1/sqrt(3),-1/sqrt(2), 1/sqrt(6)]])
    
   sage: P0.T*P0.n(digits=4)

   [1.000  0.0000 0.0000]
   [0.0000 1.000  0.0000]
   [0.0000 0.0000 1.000 ]

.. code-block:: python

   sage: A = matrix(RR,[[0, 1, 1],
                        [1, 0, 1],
                        [1, 1, 0]])
    
   sage: P0 = matrix(RR,[[1/sqrt(3), 1/sqrt(2), 1/sqrt(6)],
                         [1/sqrt(3), 0,        -2/sqrt(6)],
                         [1/sqrt(3),-1/sqrt(2), 1/sqrt(6)]])    

   sage: P0.I*A*P0.n(digits=4)

   [2.000   0.0000  0.0000]
   [0.0000 -1.000   0.0000]
   [0.0000  0.0000 -1.000 ]  





















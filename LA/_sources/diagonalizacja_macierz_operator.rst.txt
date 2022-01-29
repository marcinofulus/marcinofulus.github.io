Square Matrix as a Linear Operator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For a given matrix :math:`\,\boldsymbol{A}\,\in M_n(C)\,` 
we define a mapping

.. math::
   :label: transf
   
   F:\quad C^n \ni \,\boldsymbol{x} \ \,\to\ \, F(\boldsymbol{x})\,:\,=\,
   \boldsymbol{A}\,\boldsymbol{x} \,\in\, C^n\,.

More precisely, :math:`\,` if :math:`\ \ \boldsymbol{A}=
[\,\boldsymbol{A}_1\,|\,\boldsymbol{A}_2\,|\,\ldots\,|\,\boldsymbol{A}_n\,]=
[a_{ij}]_{n\times n}\,,\ \ \boldsymbol{x}\ =\ [x_{i}]_n\,,\ ` then

.. math::
   
   F\ \left[\begin{array}{c} 
            x_{1} \\ x_{2} \\ \ldots \\ x_{n} 
            \end{array}\right]\ =
   \ \left[\begin{array}{cccc}
           a_{11} & a_{12} & \ldots & a_{1n} \\
           a_{21} & a_{22} & \ldots & a_{2n} \\
           \ldots & \ldots & \ldots & \ldots \\
           a_{n1} & a_{n2} & \ldots & a_{nn}
           \end{array}\right]\ 
   \left[\begin{array}{c} 
         x_{1} \\ x_{2} \\ \ldots \\ x_{n} 
         \end{array}\right]\,.

We take a simplified notation for an image of a vector
:math:`\,\boldsymbol{x}\,` under the mapping :math:`\,F`:

.. math::
   
   F(\boldsymbol{x})\rightarrow F\boldsymbol{x}\,.

**Theorem 0.** :math:`\\ \ `
The mapping :eq:`transf` is a linear operator on the space 
:math:`\,C^n\,`: :math:`\ \ F\in\text{End}\,(C^n)`.

**Proof.** :math:`\\`
Linearity of the mapping :math:`F` is a consequence of matrix multiplication:

.. math::
   
   F(\boldsymbol{x}+\boldsymbol{y})\ =\  
   \boldsymbol{A}\,(\boldsymbol{x}+\boldsymbol{y})\ =\  
   \boldsymbol{A}\,\boldsymbol{x}\ +\ \boldsymbol{A}\,\boldsymbol{y}\ =\ 
   F(\boldsymbol{x})\, +\, F(\boldsymbol{y})\,,

   F(\lambda\,\boldsymbol{x})\ =\ 
   \boldsymbol{A}\,(\lambda\,\boldsymbol{x})\ =\ 
   \lambda\ (\boldsymbol{A}\,\boldsymbol{x})\ =\ 
   \lambda\ F(\boldsymbol{x})\,,
   \quad \boldsymbol{x},\boldsymbol{y}\,\in C^n,\ \ \lambda \in C.

**Theorem 1.** :math:`\\ \ `
:math:`\boldsymbol{A}\,` is a matrix of the operator :math:`\,F\,`
in the canonical basis :math:`\,\mathcal{E}\,` of the space :math:`\,C^n :`
:math:`\ \boldsymbol{A}\,=\,M_{\mathcal{E}}(F)`.

**Proof.** :math:`\\`
Let :math:`\,\mathcal{E}\,=\,(\boldsymbol{e}_1,\,
\boldsymbol{e}_2,\,\dots,\,\boldsymbol{e}_n)\,` be the canonical basis
of the space :math:`\,C^n.\ ` Then

.. math::

   \begin{array}{rl}
   M_{\mathcal{E}}(F) \!\!\! 
   & =\ \ [\ F(\boldsymbol{e}_1)\ |\ F(\boldsymbol{e}_2)\ |
   \ \ldots\,|\ F(\boldsymbol{e}_n)\,]\ \ = \\ 
   & =\ \ [\ \boldsymbol{A}\boldsymbol{e}_1\,|
   \ \boldsymbol{A}\boldsymbol{e}_2\,|
   \,\ldots\,|\ \boldsymbol{A}\boldsymbol{e}_n\,]\ \ = \\
   & = \ \ [\ \boldsymbol{A}_1\,|\ \boldsymbol{A}_2\,|
   \ \ldots\,|\ \boldsymbol{A}_n\,]\ \ =\ \ \boldsymbol{A}\,.
   \end{array}

**Theorem 2.** :math:`\\ \ `
Eigenvalues of the operator :math:`\,F\,` are roots of the characteristic 
equation of the matrix :math:`\boldsymbol{A}.`

**Proof.** :math:`\\`
A vector :math:`\,\boldsymbol{x} \in C^n\setminus\{\boldsymbol{0}\}\,` 
is an eigenvector of the operator :math:`\,F\,` associated with the eigenvalue 
:math:`\,\lambda \in C` :math:`\,` if 

.. :math:`\ F(\boldsymbol{x})\,=\,\lambda\,\boldsymbol{x},\ `
   czyli gdy :math:`\boldsymbol{A}\,\boldsymbol{x} = \lambda\,\boldsymbol{x}`,

.. math::
   :label: eigen_1
   
   \begin{array}{rc}
   & F(\boldsymbol{x})\,=\,\lambda\,\boldsymbol{x}, \\
   \text{that is} & \boldsymbol{A}\,\boldsymbol{x} = \lambda\,\boldsymbol{x}\,,
   \end{array}

   (\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)\ \boldsymbol{x}\ =\ 
   \boldsymbol{0}\,.

The homogeneous linear problem :eq:`eigen_1` has a non-zero solution 
:math:`\,\boldsymbol{x}\,` if and only if :math:`\\` 
:math:`\ \det{(\boldsymbol{A}-\lambda\,\boldsymbol{I}_n)}\ =\ 0\,,\ `
that is, if :math:`\,\lambda\,` is a characteristic root of the matrix :math:`\,\boldsymbol{A}`.

Numbers :math:`\,\lambda\,` and the associated non-zero vectors 
:math:`\,\boldsymbol{x}\,` determined by the equation :eq:`eigen_1`
will be called eigenvalues and eigenvectors of the matrix
:math:`\,\boldsymbol{A}`.

Hence, a vector :math:`\,\boldsymbol{x} \in C^n\,` is an eigenvector 
of the matrix :math:`\,\boldsymbol{A} \in M_n(C)\ ` associated with an eigenvalue
:math:`\,\lambda \in C\ ` if :math:`\,\boldsymbol{x}\neq\boldsymbol{0}\ \ ` 
and :math:`\ \ \boldsymbol{A}\,\boldsymbol{x} = \lambda\,\boldsymbol{x}`.

**Theorem 3.** 

1. :math:`\ ` If :math:`\boldsymbol{A}\,` is a Hermitian matrix,
   :math:`\ ` then :math:`\,F\,` is a Hermitian operator:

   .. math::
   
      \boldsymbol{A}^+=\ \boldsymbol{A}\quad\Rightarrow\quad F^+=\ F\,.

2. :math:`\ ` If :math:`\boldsymbol{A}\,` is a unitary matrix, 
   :math:`\ ` then :math:`\,F\,` is a unitary operator:
   
   .. math::
      
      \boldsymbol{A}^+\boldsymbol{A}\,=\,\boldsymbol{I}_n
      \quad\Rightarrow\quad F^+F\,=\,I\,,
   
   (:math:`I\ ` the identity operator on the space :math:`\ C^n`).

3. :math:`\ ` If :math:`\boldsymbol{A}\,` is a normal matrix, 
   :math:`\ ` then :math:`\,F\,` is a normal operator:
   
   .. math::
      
      \boldsymbol{A}^+\boldsymbol{A}\,=\,\boldsymbol{A}\,\boldsymbol{A}^+
      \quad\Rightarrow\quad F^+F\,=\,F\,F^+\,.

Hence, all the theorems about eigenvalues and eigenvectors of Hermitian (unitary, normal)
operators may be applied to eigenvalues and eigenvectors of
Hermitian (unitary, normal) matrices.

.. **Dowód Twierdzenia 3.** opiera się na poniższych przesłankach.

**Introduction to a proof of Theorem 3.**

Hermitian conjugate of a matrix :math:`\boldsymbol{A} \in M_n(C)`:

.. math::
   
   \boldsymbol{A}^+:\,=\,(\boldsymbol{A}^T)^* =\,(\boldsymbol{A}^*)^T\,.

Hermitian conjugation of an operator
:math:`\ F\in\text{End}(V)\ ` on a unitary space :math:`\ V=V(C)\ `:

.. math::
   
   \langle\boldsymbol{x},F^+\boldsymbol{y}\rangle:\,=\,
   \langle F\boldsymbol{x},\boldsymbol{y}\rangle\,,\quad
   \boldsymbol{x},\boldsymbol{y}\in V\,.

A necessary and sufficient condition for equality of two vectors:

    Let :math:`\ \boldsymbol{x},\boldsymbol{y} \in V\,,\ `
    where :math:`\ V=V(C)\ ` unitary. Then

    .. math::
   
       \boldsymbol{x} = \boldsymbol{y} \quad \Leftrightarrow \quad 
       \langle \boldsymbol{z}, \boldsymbol{x} \rangle =
       \langle \boldsymbol{z}, \boldsymbol{y} \rangle \quad
       \text{for all } \boldsymbol{z} \in V\,.
  
A necessary and sufficient condition for equality of two linear operators: 

    Let :math:`\ F,G\in\text{End}(V)\,,\ ` 
    where :math:`\ V=V(C)\ ` unitary. Then

    .. math::
   
       F = G \quad \Leftrightarrow \quad 
       \langle \boldsymbol{x}, F \boldsymbol{y} \rangle =
       \langle \boldsymbol{x}, G \boldsymbol{y} \rangle \quad
       \text{for all } \boldsymbol{x},\boldsymbol{y} \in V\,.

An inner product on the space :math:`C^n`:

    For :math:`\ \ \boldsymbol{x}\ =\ 
    \left[\begin{array}{c} x_1 \\ x_2 \\ \ldots \\ x_n \end{array}\right],\ \  
    \boldsymbol{y}\ =\ 
    \left[\begin{array}{c} y_1 \\ y_2 \\ \ldots \\ y_n \end{array}\right] 
    \in C^n\,,`

.. iloczyn skalarny dany jest przez \sum_{i\,=\,1}^n\ x_i^*\,y_i\,=\;

.. math::
   
   \langle \boldsymbol{x},\boldsymbol{y} \rangle \ =\ 
   x_1^*\,y_1\,+\;x_2^*\,y_2\,+\;\dots\;+\;x_n^*\,y_n
   \,=\;[\,x_1^*,\,x_2^*,\,\dots,\,x_n^*\,]\ 
   \left[\begin{array}{c} 
   y_1 \\ y_2 \\ \dots \\ y_n 
   \end{array}\right]\ =\ 
   \boldsymbol{x}^+\boldsymbol{y}\,.

.. **Lemat** :math:`\,` określa sprzężenie hermitowskie :math:`\ F^+\ ` 
   operatora :math:`\ F\ ` danego przez :eq:`transf`:

Hermitian conjuagation :math:`\ F^+\ ` of the operator :math:`\ F\ ` 
given by :eq:`transf` describes 

**Lemma**.

.. math::
   :label: lemma
   
   \begin{array}{lc}
   & F(\boldsymbol{x})=\boldsymbol{A}\,\boldsymbol{x}\quad\Rightarrow\quad
   F^+(\boldsymbol{x})=\boldsymbol{A}^+\boldsymbol{x}, \\
   \text{that is,}
   & F\,\boldsymbol{x}=\boldsymbol{A}\,\boldsymbol{x}\quad\Rightarrow\quad
   F^+\,\boldsymbol{x}=\boldsymbol{A}^+\boldsymbol{x}.
   \end{array}

**Proof** of the lemma. 
For every vector :math:`\ \boldsymbol{y}\in C^n:`

.. math::
   
   \begin{array}{rcl}
   \langle\boldsymbol{y},F^+\boldsymbol{x}\rangle \!\! &
   =\ \ \ \langle F\boldsymbol{y},\boldsymbol{x}\rangle
   \ =\ \langle \boldsymbol{A}\,\boldsymbol{y},\boldsymbol{x}\rangle\ = & \\
   & =\ (\boldsymbol{A}\,\boldsymbol{y})^+\,\boldsymbol{x}\ =\ \ 
   \boldsymbol{y}^+\boldsymbol{A}^+\boldsymbol{x}\ = & \!\!
   \langle\boldsymbol{y},\boldsymbol{A}^+\boldsymbol{x}\rangle\,,
   \end{array}

and thus
:math:`\ F^+\boldsymbol{x}=\boldsymbol{A}^+\boldsymbol{x},
\ \ \boldsymbol{x}\in C^n`.

**Proof** of the Theorem 3.

1. :math:`\ ` Assume that :math:`\ \boldsymbol{A}^+=\,\boldsymbol{A}.\ ` 
   Then for arbitrary :math:`\,\boldsymbol{x},\boldsymbol{y}\in C^n`:
   
   .. math::

      \begin{array}{rll}
      \langle\boldsymbol{x},F^+\boldsymbol{y}\rangle \!\! &
      =\ \ \langle F\boldsymbol{x},\boldsymbol{y}\rangle\ \ =\ \ 
      \langle\boldsymbol{A}\,\boldsymbol{x},\boldsymbol{y}\rangle\ \ =\ \ 
      (\boldsymbol{A}\,\boldsymbol{x})^+\boldsymbol{y}\ \ =
      & \\
      & =\ \ \boldsymbol{x}^+\boldsymbol{A}^+\boldsymbol{y}\ \ =\ \ \ 
      \boldsymbol{x}^+\boldsymbol{A}\,\boldsymbol{y}\ \ \ =\ \ 
      \langle\boldsymbol{x},\boldsymbol{A}\,\boldsymbol{y}\rangle\ \ =
      & \!\! \langle\boldsymbol{x},F\boldsymbol{y}\rangle ,
      \end{array}

   so that :math:`\ F^+=\ F`.

2. :math:`\ ` Assume that :math:`\ \boldsymbol{A}^+\boldsymbol{A}=\boldsymbol{I}_n.\ ` 
   Then for arbitrary :math:`\,\boldsymbol{x},\boldsymbol{y}\in C^n`:

   .. math::

      \begin{array}{rll}
      \langle\boldsymbol{x},(F^+F)\,\boldsymbol{y}\rangle \!\! &
      =\ \ \langle\boldsymbol{x},F^+(F\boldsymbol{y})\rangle\ \ =\ \ 
      \langle F\boldsymbol{x}\,,F\boldsymbol{y}\rangle\ \ =\ \ 
      \langle\boldsymbol{A}\,\boldsymbol{x},
      \boldsymbol{A}\,\boldsymbol{y}\rangle\ \ =
      & \\
      & =\ \ (\boldsymbol{A}\boldsymbol{x})^+\,
      (\boldsymbol{A}\boldsymbol{x})\ \ =\ \ 
      \boldsymbol{x}^+\boldsymbol{A}^+
      \boldsymbol{A}\,\boldsymbol{y}\ \ \, = \quad
      \boldsymbol{x}^+\boldsymbol{I}_n\,\boldsymbol{y}\quad\ =
      & \langle\boldsymbol{x},I\,\boldsymbol{y}\rangle ,
      \end{array}

   so that :math:`\ F^+F=I`.

3. :math:`\ ` Assume that :math:`\ \boldsymbol{A}^+\boldsymbol{A}=
   \boldsymbol{A}\boldsymbol{A}^+.\ ` 
   By Lemma :eq:`lemma`,   


   .. Then for arbitrary :math:`\,\boldsymbol{x},\boldsymbol{y}\in C^n`:

   .. math::

      \begin{array}{rl}
      \langle\boldsymbol{x},(F^+F)\,\boldsymbol{y}\rangle \!\! &
      =\ \ \langle\boldsymbol{x},F^+(F\boldsymbol{y})\rangle\ \ =\ \ 
      \langle F\boldsymbol{x}\,,F\boldsymbol{y}\rangle\ \ =\ \ 
      \langle\boldsymbol{A}\,\boldsymbol{x},
      \boldsymbol{A}\,\boldsymbol{y}\rangle\ \ = \\
      & =\ (\boldsymbol{A}\,\boldsymbol{x})^+
      (\boldsymbol{A}\,\boldsymbol{y})\ \ =\ \ 
      \boldsymbol{x}^+(\boldsymbol{A}^+\boldsymbol{A})\,\boldsymbol{y}\ \ =\ \ 
      \boldsymbol{x}^+(\boldsymbol{A}\boldsymbol{A}^+)\,\boldsymbol{y}\ = \\
      & =\ (\boldsymbol{A}^+\boldsymbol{x})^+
      (\boldsymbol{A}^+\boldsymbol{y})\ =\ 
      \langle\boldsymbol{A}^+\boldsymbol{x},
      \boldsymbol{A}^+\boldsymbol{y}\rangle\ =\ 
      \langle F^+\boldsymbol{x},F^+\boldsymbol{y}\rangle\ = \\
      \langle\boldsymbol{x},(FF^+)\,\boldsymbol{y}\rangle ,
      \end{array}

   for every :math:`\,\boldsymbol{x},\boldsymbol{y}\in C^n,\ `
   and thus :math:`\ F^+F=FF^+`.



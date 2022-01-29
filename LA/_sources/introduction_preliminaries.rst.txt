
Preliminaries and Notation
--------------------------

Rudiments of Logic
~~~~~~~~~~~~~~~~~~

In logic, :math:`\,` a :math:`\,` *sentence* :math:`\,` is a statement 
that is (on the grounds of a science or a theory) either true or false.
The 'true' and 'false' being :math:`\,` *logical values* , :math:`\,`
a sentence may be said to have a definite logical value. :math:`\,` 
Sentences are here symbolized with letters :math:`\,p,\,q,\,r,\,\dots`

The *logical connectives* : :math:`\quad
\begin{array}{ccccc}
\qquad\sim\qquad & \qquad\lor\qquad & \qquad\land\qquad & 
\quad\Rightarrow\qquad & \Leftrightarrow \\
\qquad\text{not}\qquad & \qquad\text{or}\qquad & \qquad\text{and}\qquad & 
\ \ \ \text{implies}\quad & \ \ \ \text{is equivalent}
\end{array}`

.. math:
   
   \begin{array}{ccccc}
   \qquad\sim\qquad & \qquad\lor\qquad & \qquad\land\qquad & 
   \quad\Rightarrow\qquad & \Leftrightarrow \\
   \qquad\text{nie}\qquad & \qquad\text{lub}\qquad & \qquad\ \text{i}\qquad & 
   \quad\text{implikuje}\quad & \ \ \text{jest równoważne}
   \end{array}

.. math:
   
   \begin{array}{ccccc}
   \qquad\sim\qquad & \qquad\lor\qquad & \qquad\land\qquad & 
   \quad\Rightarrow\qquad & \Leftrightarrow \\
   \qquad\text{not}\qquad & \qquad\text{or}\qquad & \qquad\ \text{and}\qquad & 
   \quad\text{implies}\quad & \ \ \text{is equivalent}
   \end{array}

can be used to join component sentences into more complex ones. :math:`\\`
The most important complex sentences are:

*negation*: :math:`\quad\sim p\quad` (not :math:`\,p\,;\ \ ` 
it is not the case that :math:`\,p\,`) ;

*disjunction*: :math:`\quad p\lor q\quad` (:math:`\,p\ ` or :math:`\ q`) ;

*conjunction*: :math:`\quad p\land q\quad` (:math:`\,p\ ` and :math:`\ q`) ;

*implication*: :math:`\quad p\Rightarrow q\quad` 
(if :math:`\ p\ ` then :math:`\ q\,;\ \ ` 
:math:`\ p\ ` implies :math:`\ q\,;\ \ `
:math:`\ p\ ` only if :math:`\ q\,`) ;

*equivalence*: :math:`\quad p\Leftrightarrow q\quad` 
(:math:`\ p\ ` if and only if :math:`\ q,\ \,` 
in short: :math:`\ p\ ` iff :math:`\ q\,`) .

If a theorem is formulated as an implication :math:`\ p\Rightarrow q\,,\ `
the following terminology is used:

* :math:`\ p\ ` is the premise (hypothesis) of the theorem 
  (a sufficient condition for :math:`\ q`) 
* :math:`\ q\ ` is the conclusion of the theorem 
  (a necessary condition for :math:`\ p`). 

*Tautologies* :math:`\,` are expressions (composed of sentence letters, 
connectives and parentheses) which become always true, regardless of 
logical values of their constituents. Examples thereof are:

.. math::
   
   \begin{array}{ccl}
   (p\Leftrightarrow q)\ \ \Leftrightarrow\ \ [\,(p\Rightarrow q)
   \land(q\Rightarrow p)\,] & \quad & \text{(equivalence is biconditional)} 
   \\ \\
   (p\Rightarrow q)\ \Leftrightarrow\ [\,(\sim q)\Rightarrow (\sim p)\,] & 
   \quad & \text{(the contraposition law)}
   \\ \\
   \sim (p\lor q)\ \Leftrightarrow\ [\,(\sim p) \land (\sim q)\,] & 
   \quad & \text{(the negation of disjunction law)}
   \\
   \sim (p\land q)\ \Leftrightarrow\ [\,(\sim p) \lor (\sim q)\,] & 
   \quad & \text{(the negation of conjunction law)}
   \end{array}
 
Notation of the Set Theory
~~~~~~~~~~~~~~~~~~~~~~~~~~

| Sets are usually denoted by capital letters: 
  :math:`\ A,\,B,\,\dots,\,X,\,Y,\,Z,\,\dots`
| whereas their elements are symbolized with small ones: 
  :math:`\ a,\,b,\,c,\,\dots,\,x,\,y,\,z,\,\dots`
|
| The set membership is denoted as follows:
| :math:`\,a\in A\ \ ` - :math:`\ \ a\,` is an element of the set :math:`\,A\,` 
  (:math:`a\,` belongs to :math:`\,A`) ;
| :math:`\,a\notin A\ \ ` - :math:`\ \ a\,` 
  is not an element of the set :math:`\,A\,` 
  (:math:`a\,` does not belong to :math:`\,A`) .
| The symbol :math:`\ \emptyset\ ` denotes :math:`\,` the *empty set* : 
  :math:`\,` the unique set having no elements.
|
| When we specify a set by enumerating its elements, 
  we use curly brackets {braces}:
| :math:`\,\{a_1,a_2,\dots,a_k\}` :math:`\,` - :math:`\,` 
  set composed of elements :math:`\,a_1,a_2,\dots,a_k\ ` 
  (their order is undefined).
| On the other hand, the round brackets (parentheses) denote a sequence:
| :math:`\,(a_1,a_2,\dots,a_k)` :math:`\,` - :math:`\,` 
  sequence of elements :math:`\,a_1,a_2,\dots,a_k\ ` 
  (their order is relevant).
| A sequence of :math:`\,n\,` elements is also called :math:`\,n`-*tuple*,
  :math:`\ ` and a 2-tuple is named an *ordered pair*. 
|
| A denotement :math:`\ \{\,x\in X:\ \phi(x)\,\}\ \,` represents 
  the collection of elements :math:`\,x\,` from the set :math:`\,X,\ ` 
  which fulfill the condition :math:`\,\phi.\ ` 
| So, the record 
  :math:`\ \{\,x\in R:\ x^2+x-2=0\,\}\,=\,\{-2,\,1\,\}\ `
  asserts that the set of real numbers :math:`\,x,\ ` 
| for which :math:`\,x^2+x-2=0,\ ` is the 2-element set composed of numbers
  :math:`\,-2\ ` and :math:`\,1.`
|
| Suppose :math:`\,A\,` and :math:`\,B\,` are two sets. Then

* the *union* :math:`\,A \cup B\ ` is the set of all elements 
  that are members of either :math:`\,A\,` or :math:`\,B:`
  
  .. math::
     
     A \cup B\ :\,=\ \{\,x:\ \ x\in A \ \lor\ x\in B\,\}\,;

* the *intersection* :math:`\,A \cap B\ ` is the set of all elements 
  that are members of both :math:`\,A\,` and :math:`\,B:`
  
  .. math:: 
     
     A \cap B\ :\,=\ \{\,x:\ \ x\in A \ \land\ x\in B\,\}\,;

* the *difference* :math:`\,A \!\smallsetminus\! B\ ` is the set of elements 
  that belong to :math:`\,A\,` and don't belong to :math:`\,B:`  

  .. math::
     
     A \!\smallsetminus\! B\ :\,=\ \{\,x:\ \ x\in A \ \land\ x\notin B\,\}\,;

* | :math:`\,A\ \,` is a *subset* of :math:`\,` (or is *included* in) 
    :math:`\ \,B\,:\ ` :math:`\ A\subset B,\ \ ` when 
  | each element of :math:`\,A\,` is also an element of :math:`\,B\,:\ \ `
    for all :math:`\,x,\ \ x\in A\ \Rightarrow\ x\in B\,.` 
 
We adopt the following notation for the basic numerical sets:

* :math:`\ N\ ` - :math:`\,` set of natural numbers; 
  :math:`\ N\,=\,\{1,2,\ldots\}\,`;
* :math:`\ Z\ ` - :math:`\,` set of integer numbers; 
  :math:`\ Z\,=\,\{0,\pm 1,\pm 2,\ldots\}\,`;
* :math:`\ Q\ ` - :math:`\,` set of rational numbers;
* :math:`\ R\ ` - :math:`\,` set of real numbers;
* :math:`\ C\ ` - :math:`\,` set of complex numbers.

.. A sequence of two elements, :math:`\,(a_1,a_2),\,` is named 
   an *ordered pair*. 

Mappings and Operations
~~~~~~~~~~~~~~~~~~~~~~~

A *mapping* :math:`\ f:\, X\to Y\ ` from :math:`\,X\,` to :math:`\,Y\,`
is a relation between the two sets with the property that 
each :math:`\,x\in X\ ` is related to exactly one :math:`\,y\in Y.\ `
If an element :math:`\,x\in X\,` is related to :math:`\,y\in Y,\ ` 
one says that :math:`\,y\,` is the *image*
of :math:`\,x\,` under the mapping :math:`\,f:\ \ y=f(x).`

The set :math:`\,X\,` is called :math:`\,` the *domain* :math:`\,`
(or *set of arguments*) :math:`\,` of the mapping :math:`\,f,\ \,`  
the set :math:`\,Y\,` is :math:`\,` the *codomain*, :math:`\,` 
and :math:`\,` the set :math:`\,f(X)\,:\,=\,\{\,f(x)\,:\,x\in X\}\ ` 
is named :math:`\,` the *image* :math:`\,` 
(or *set of values*) :math:`\,` of the mapping.

A mapping :math:`\ f: X\to Y\ ` is: 

* | *Surjective* :math:`\,` (:math:`\,f\,` maps :math:`\,X\,` onto
    :math:`\,Y\,`) :math:`\,` when :math:`\ f(X)=Y\,.\ `
  | Then every :math:`\,y\in Y\,` has :math:`\,` *at least one*
    :math:`\,` matching :math:`\,x\in X.`

* | *Injective* :math:`\,` (:math:`\,f\,` is a one-to-one mapping), :math:`\,` 
    when :math:`\ \ x_1\neq x_2\ \Rightarrow\ f(x_1)\neq f(x_2)\ `
  | (if arguments :math:`\ x_1,\,x_2\ ` are different, 
    so are their images :math:`\ f(x_1),\,f(x_2)\,`).
  | Then every :math:`\,y\in Y\,` has :math:`\,` *at most one* :math:`\,` 
    matching :math:`\,x\in X.`   

* | *Bijective* :math:`\,` (one-to-one correspondence) :math:`\,`
    when it is both surjective and injective.
  | Then each :math:`\,y\in Y\,` is associated with 
    :math:`\,` *exactly one* :math:`\,x\in X.`

The *Cartesian product* of two sets :math:`\,A\,` and :math:`\,B\,` is by 
definition :math:`\,` the set of all ordered pairs :math:`\,(a,b)\,` such that 
:math:`\,a\,` belongs to :math:`\,A\,` and :math:`\,b\,` belongs to :math:`\,B:`     

.. math::
   
   A\times B\ :\,=\ \{\,(a,b):\ a\in A \,\land\, b\in B\,\}\,.

This definition can be extended to the case of more than two sets.
Given sets :math:`\,A_1,A_2,\ldots,\,A_n\,,\ ` the Cartesian product
:math:`\ A_1\times A_2\times \ldots\times A_n\ ` is defined as the set of 
all :math:`\,n`-tuples whose consecutive components belong to the
respective sets:

.. math::
   
   A_1\times A_2\times \ldots\times A_n\ :\,=\ 
   \{\,(a_1,a_2,\ldots,a_n)\,:\ \ \ a_i\in A_i,\ \ i=1,2,\ldots,n.\,\}.

In particular, an :math:`\,n`-th Cartesian power of a set :math:`\,A\ ` 
is given by

.. math::
   
   A^n\,\equiv\ \underbrace{A \times A \times \ldots \times A}_{n}\ =\ 
   \{\,(a_1,a_2,\ldots,a_n)\,:\ \ \ a_i\in A,\ \ i=1,2,\ldots,n.\,\}.

An *internal* (binary) *operation* :math:`\,\odot\,` defined in the set 
:math:`\,A\,` is a mapping :math:`\,\odot:\, A\times A\to A.\ ` :math:`\\`
If :math:`\,\odot\,(a_1,a_2)=a_3\ ` for some :math:`\,a_1,a_2,a_3\in A,\,` 
then we say that :math:`\,a_3\,` is the result of the operation 
:math:`\,\odot\,` on the elements :math:`\,a_1\ ` and :math:`\,a_2\,:\ ` 
:math:`\ a_3=a_1\odot a_2.\ `
Examples are: addition of natural numbers, subtraction of inegers, 
addition and cross-multiplying (but not dot-multiplying) of geometric vectors. 
In these examples each ordered pair of elements of a set :math:`\,A\,` 
is mapped on an element of the same set :math:`\,A`.

An *external operation* :math:`\,\boxdot\,` (precisely: 
left external binary operation) defined in the set :math:`\,A\,` :math:`\\`
is a mapping :math:`\,\boxdot:\, K\times A\to A,\ ` where :math:`\,K\,` 
is another set. :math:`\\`
The result :math:`\ \boxdot\,(\lambda,a)\ ` of the operation
:math:`\,\boxdot\,` on elements :math:`\,\lambda\in K\ ` and :math:`\,a\in A\,` 
is written as :math:`\,\lambda\boxdot a.\ `
Examples are: multiplication of geometric vectors by real numbers, 
multiplication of matrices by scalars, multiplication of functions by numbers.
Now each ordered pair of elements of sets :math:`\,K\,` and :math:`\,A\,` 
is mapped on an element of the set :math:`\,A.`

.. To illustrate these concepts we recall the set operations.
   Suppose :math:`\,A\,` and :math:`\,B\,` are two sets. Then

   * the *union* :math:`\,A \cup B\ ` is the set of all elements 
     that are members of either :math:`\,A\,` or :math:`\,B;`
   * the *intersection* :math:`\,A \cap B\ ` is the set of all elements 
     that are members of both :math:`\,A\,` and :math:`\,B;`
   * the *difference* :math:`\,A \!\smallsetminus\! B\ ` is the set of elements 
     that belong to :math:`\,A\,` and don't belong to :math:`\,B:`  

.. math:
     
   A \cup B\ :\,=\ \{\,x:\ \ x\in A \ \lor\ x\in B\,\}\,;

   A \cap B\ :\,=\ \{\,x:\ \ x\in A \ \land\ x\in B\,\}\,;

   A \!\smallsetminus\! B\ :\,=\ \{\,x:\ \ x\in A \ \land\ x\notin B\,\}\,.

























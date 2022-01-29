Application to Hill Cipher
--------------------------

This cipher was constructed in 1929 by a mathematician Lester Hill. To describe it concisely, it will be useful to introduce
two basic notions from cryptography:


.. admonition:: Definition.

   | *Plaintext* :math:`\,` is an original message (or other data) that forms an input of an encryption algorithm.
   | *Ciphertext* :math:`\,` is a message obtained from a plaintext after applying an encryption algorithm.
   
We also assign to each letter of an alphabet a numerical value:

.. math::
     
     \begin{array}{cccccccccccccccccccccccccc} 
      A & B & C & D & E & F & G & H & I & J & K & L & M & N & O & P & Q & R & S & T & U & V & W & X & Y & Z
      
      0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 & 21 & 22 & 23 & 24 & 25
     \end{array}
 
This alphabet can be, of course, extended by other symbols.

One of the parameters in Hill's encryption algorithm is a choice of the length :math:`\, m\,` of a plaintext which will be encrypted in each step. The algorithm treats a plaintext consisting of :math:`\, m\,` letters as a vector and multiplies it on the right by a certain :math:`\, m\times m\,` matrix :math:`\, K\,` with entries in :math:`\, Z\,` whose determinant is not divisible neither by :math:`2` nor by :math:`13` (later it will be clear why). This matrix is called the *secret key* of the algorithm.

It will be easiest to describe the procedures of Hill's algorithm on an example.


Example
~~~~~~~

:math:`\,` Let :math:`\, m=3\,` and 
:math:`\, K =\left[\begin{array}{rrr} 
18 & 25 & 13 \\ 11 & 7 & 19 \\ 21 & 18 & 23
\end{array}\right]\,.`
We want to encrypt the message :math:`\ {\tt ATTACK\ TOMORROW}` .

First we remove the spaces and write the message in terms of numbers. Next, because :math:`m=3,` we divide it into vectors of size :math:`3:`

.. math::

    \begin{array}{ccccccccccccccc}
    {\tt A} & {\tt T} & {\tt T} & & {\tt A} & {\tt C} & {\tt K} & & {\tt T} & {\tt O} & {\tt M} & & {\tt O} & {\tt R} & {\tt R} & & {\tt O} & {\tt W} &
    
    0 & 19 & 19 & & 0 & 2 & 10 & & 19 & 14 & 12 & & 14 & 17 & 17 & & 14 & 22 & 0
    \end{array}
    
If the number of letters in the plaintext is not divisible by :math:`m,` we complete the last vector with arbitrary numbers, e.g. with :math:`0` as above. 

If the plaintext is long, doing the above substitution by hand may be time consumming and lead to mistakes. It may be better to use Sage for this purpose:

.. code-block:: python

   sage: S=AlphabeticStrings() # provides an alphabet from A to Z
   sage: A=list(S.alphabet())  # the above alphabet in form of a list
   sage: Plt="ATTACKTOMORROW"  # plaintext has to be written in capital letters and without spaces 
   sage: print A, "\n", list(Plt), "\n", len(Plt)
   
   ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
   
   ['A', 'T', 'T', 'A', 'C', 'K', 'T', 'O', 'M', 'O', 'R', 'R', 'O', 'W']  # Plt in form of a list
   
   14 # length of Plt
   
.. code-block:: python

    # Now we create a list of numerical values corresponding to the letters in Plt
    sage: P=list()   # P is an empty list of an unspecified length
    sage: for i in range(len(Plt)):
    sage:     for j in range(S.ngens()):  # S.ngens() returns the number of characters in S
    sage:         if Plt[i]==A[j]: P.insert(i,j)  # if the i-th element of Plt is equal to the j-th element of A, insert at the i-th place of P the number j
    sage:         else: j=j+1
    sage: print P
    
    [0, 19, 19, 0, 2, 10, 19, 14, 12, 14, 17, 17, 14, 22]
    
.. code-block:: python

    # It remains to include the missing numbers and divide P into sequences of length m=3
    sage: m=3
    sage: r=len(P) % m     # remainder after division of len(P) by m
    sage: R=list(0 for i in range(m-r))   # a list of m-r zeros
    sage: if r>0: P.extend(R)    # if r>0, we extend P by the list R
    sage: Pn=list()
    sage: for i in range(ceil(len(P)/3)):   # ceil(x) returns smallest integer greater or equal x
    sage:     k=3*i
    sage:     Pn.insert(i,P[k:k+3])
    sage: print P, "\n", Pn, "\n", Pn[0], "\n", Pn[1][1]
    
    [0, 19, 19, 0, 2, 10, 19, 14, 12, 14, 17, 17, 14, 22, 0]
    [[0, 19, 19], [0, 2, 10], [19, 14, 12], [14, 17, 17], [14, 22, 0]]
    [0, 19, 19]   
    2
    
Now we multiply the above vectors by the matrix :math:`\, K\,` on the right:

.. math::

    \left[\begin{array}{ccc}   
    0 & 19 & 19
    \end{array}\right]
    \left[\begin{array}{rrr} 
    18 & 25 & 13 \\ 11 & 7 & 19 \\ 21 & 18 & 23
    \end{array}\right]
    =\left[\begin{array}{ccc}   
    608 & 475 & 798
    \end{array}\right]\\
    
    \left[\begin{array}{ccc}   
    0 & 3 & 10
    \end{array}\right]
    \left[\begin{array}{rrr} 
    18 & 25 & 13 \\ 11 & 7 & 19 \\ 21 & 18 & 23
    \end{array}\right]
    =\left[\begin{array}{ccc}   
    232 & 194 & 268
    \end{array}\right]\\
    
    \left[\begin{array}{ccc}   
    19 & 14 & 12
    \end{array}\right]
    \left[\begin{array}{rrr} 
    18 & 25 & 13 \\ 11 & 7 & 19 \\ 21 & 18 & 23
    \end{array}\right]
    =\left[\begin{array}{ccc}   
    748 & 789 & 789
    \end{array}\right]\\
    
    \left[\begin{array}{ccc}   
    14 & 17 & 17
    \end{array}\right]
    \left[\begin{array}{rrr} 
    18 & 25 & 13 \\ 11 & 7 & 19 \\ 21 & 18 & 23
    \end{array}\right]
    =\left[\begin{array}{ccc}   
    796 & 775 & 896
    \end{array}\right]\\
    
    \left[\begin{array}{ccc}   
    12 & 22 & 0
    \end{array}\right]
    \left[\begin{array}{rrr} 
    18 & 25 & 13 \\ 11 & 7 & 19 \\ 21 & 18 & 23
    \end{array}\right]
    =\left[\begin{array}{ccc}   
    494 & 504 & 600
    \end{array}\right]
    
Or in Sage:

.. code-block:: python

    sage: K=Matrix([[18,25,13],[11,7,19],[21,18,23]])
    sage: Cn=list(vector(Pn[i])*K for i in range(len(Pn)))   # in order to multiply Pn[i] by a matrix K, we must change the form of Pn[i] from a list to a vector
    sage: print Cn
    
    [(608, 475, 798), (232, 194, 268), (748, 789, 789), (796, 775, 896), (494, 504, 600)]

To interpret the above vectors again as a text we have to replace each entry with its remainder after division by :math:`26,` and read off the unique letter it corresponds to:

.. math::

    \begin{array}{lcccccccccccccccr}
    {\tt A\ T\ T } & & \to & & \left[\right. 608 & 475 & 798 \left.\right] & & \to & & \left[\right. 10 & 7 & 18 \left.\right] & & \to & & {\tt K \ H \ S }\\
    {\tt A\ C\ K } & & \to & & \left[\right. 232 & 194 & 268 \left.\right] & & \to & & \left[\right. 24 & 12 & 8\,\left.\right] & & \to & & {\tt Y \ M \ I }\\
    {\tt T\ O\ M } & & \to & & \left[\right. 748 & 789 & 789 \left.\right] & & \to & & \left[\right. 20 & 9 & 9 \,\left.\right] & & \to & & {\tt U \ J \ J }\\
    {\tt O\ R\ R } & & \to & & \left[\right. 796 & 775 & 896 \left.\right] & & \to & & \left[\right. 16 & 21 & 12 \left.\right] & & \to & & {\tt Q \ V \ M }\\
    {\tt O\ W\ \ } & & \to & & \left[\right. 494 & 504 & 600 \left.\right] & & \to & & \left[\right.\, 0 & 10 & 20 \left.\right] & &\to & & {\tt A\ K \ C }\\
    \end{array}
    
Or better in Sage:

.. code-block:: python

    sage: C=list(Cn[i] % 26 for i in range(len(Pn)))
    sage: print C, "\n", C[3], "\n", C[3][0]
    
    [(10, 7, 18), (24, 12, 8), (20, 9, 9), (16, 21, 12), (0, 10, 20)]
    (16, 21, 12)   
    16

.. code-block:: python

    sage: Cit=list()
    sage: for i in range(len(Pn)):
    sage:     for k in range(3):
    sage:         Cit.insert(3*i+k,A[C[i][k]])
    sage: print Cit
    
    ['K', 'H', 'S', 'Y', 'M', 'I', 'U', 'J', 'J', 'Q', 'V', 'M', 'A', 'K', 'C']
    
In this way we obtain the ciphertext :math:`\ {\tt KHSYMIUJJQVMAKC}` (where the last letter :math:`{\tt C}` can be omitted as it corresponds to the artificially added number). 

Note that if our alphabet consisted of :math:`\ N\neq 26\ ` letters, we would have to adjust the above computations accordingly: we would have to replace each entry with its remainder after division by :math:`N.` This approach also explains why we enumerated the letters starting with :math:`0:` the remainder is always one of the numbers :math:`\, 0, 1, 2, \ldots, 25.`

In order to decrypt this text and obtain the plaintext, a recipient of the message has to write it numerically (and so know the alphabet that was used), know the inverse of the matrix :math:`\, K\,` (and so also its size) and regroup the ciphertext appropriately - in our case to vectors of length :math:`3.`
    
In our example 

.. math::

    K^{-1} =\left[\begin{array}{rrr} 7 & 5 & 10 \\ 8 & 25 & 11 \\ 19 & 3 & 23 \end{array}\right]\,.
    
The reader will immediately notice that the product :math:`\ KK^{-1}\ ` is not equal to the usual identity matrix, but rather

.. math::

    KK^{-1} =\left[\begin{array}{rrr} 
    18 & 25 & 13 \\ 11 & 7 & 19 \\ 21 & 18 & 23 \end{array}\right]
    \left[\begin{array}{rrr} 7 & 5 & 10 \\ 8 & 25 & 11 \\ 19 & 3 & 23 \end{array}\right]
    =\left[\begin{array}{rrr} 573 & 754 & 754 \\ 494 & 287 & 624 \\ 728 & 624 & 937 \end{array}\right]\,.
    
However, all the off-diagonal entries are divisible by :math:`26,` and the ones on the diagonal are multiplicities of :math:`26` plus :math:`1.` Hence, if we replace each entry with its remainder after division by :math:`26,` we obtain the identity matrix 
:math:`\ \left[\begin{array}{rrr} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{array}\right]\ `. We explain this situation in the next section. First let us see that the matrix :math:`\ K^{-1}\ ` proposed above allows us to decrypt the ciphertext. We follow exactly the same steps as in the encryption process. 

For example, :math:`\ {\tt K \ H \ S }\ ` corresponds to a vector
:math:`\ \left[\begin{array}{rrr} 10 & 7 & 18 \end{array}\right] ,\,` and 

.. math::

    \left[\begin{array}{rrr} 10 & 7 & 18 \end{array}\right]K^{-1} =
    \left[\begin{array}{rrr} 10 & 7 & 18 \end{array}\right]
    \left[\begin{array}{rrr} 7 & 5 & 10 \\ 8 & 25 & 11 \\ 19 & 3 & 23 \end{array}\right]
    =\left[\begin{array}{rrr} 468 & 279 & 591 \end{array}\right] .

Now because :math:`\,\left[\begin{array}{rrr} 468 & 279 & 591 \end{array}\right] = \left[\begin{array}{rrr} 26\cdot 18 & 26\cdot 10 +19 & 26\cdot 22 +19 \end{array}\right]\,,` the vector :math:`\,\left[\begin{array}{rrr} 468 & 279 & 591 \end{array}\right]\,` corresponds to 
:math:`\,\left[\begin{array}{rrr} 0 & 19 & 19 \end{array}\right] ,\,` and thus to :math:`\ {\tt A \ T \ T }\ ` as expected. 


Modular arithmetic
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Because we chose to use an alphabet that consists of :math:`26` letters (and we enumerated them by :math:`0, 1, 2, \ldots, 25`), the result of our computations has to be a number from this range. This is the reason why we take remainders after division by :math:`26`. In fact, to make the computations easier and faster we can take the remainder after division by :math:`26` every time we add or multiply two numbers. We call such operations in short an :math:`\,` *arithmetic modulo* :math:`\, 26\,` and we say that we take a :math:`\,` *remainder modulo* :math:`\ 26\ `; the number :math:`26` is in this case called the :math:`\,` *modulus*. :math:`\,` Further, as long as numbers :math:`a\in Z` and :math:`26` do not have common divisors, it is possible to :math:`\,` *divide* :math:`\,` by :math:`a` modulo :math:`26`: by definition, :math:`\ \frac1a\ ` (or :math:`a^{-1}`) is taken to be such a number from :math:`1, 2, \ldots, 25\ ` that :math:`a` times this number gives :math:`1` modulo :math:`26`. :math:`\,` For example, 

.. math::

    3^{-1} = 9\, (\text{mod}\, 26)\quad\text{because}\quad 3\cdot 9=27=26+1
    
    5^{-1} = 21\, (\text{mod}\, 26)\quad\text{because}\quad 5\cdot 21=105=26\cdot 4+1
    
    29^{-1} = (26+3)^{-1}=(0+3)^{-1}=3^{-1} = 9\, (\text{mod}\, 26)\quad\text{because}\quad 26=0\, (\text{mod}\, 26)
    
    2^{-1}, 4^{-1}, \ldots, 13^{-1},\, \text{etc.}\quad\text{do not exist.} 
    
These operations can be made easily in Sage: 

.. sagecellserver:: 

    N = 26 
    print 1/3 % N, 1/5 % N, 6*7 % N
    
.. sagecellserver:: 

    N = 26 
    print 1/2 % N
    
In fact,

.. admonition:: Proposition.

    For any natural number :math:`N>1`, the set :math:`\ \left\{ 0,1,2,\ldots ,N-1\right\}\ ` together with addition and multiplication
    modulo :math:`N` is a commutative ring with identity, we denote it by :math:`\ \mathbb{Z}_N = (Z_N,\ +_N\,,\ \cdot_N\,)\ ` 
    and call a *ring of integers modulo* :math:`N`. It is a field if and only if :math:`N` is a prime number.
    
The ring of integers modulo :math:`N` is implemented in Sage under the name ``Integers(N)``. If we define a matrix over this ring,   all the operations will be naturally made over :math:`\ Z_N\,`. :math:`\,` For example,

.. code-block:: python

    sage: N=26
    sage: R=Integers(N)
    sage: K=Matrix(R, [[18,25,13],[11,7,19],[21,18,23]])
    sage: print K.parent(), "\n", det(K), "\n", K.inverse()
    
    Full MatrixSpace of 3 by 3 dense matrices over Ring of integers modulo 26
    15
    [ 7  5 10]
    [ 8 25 11]
    [19  3 23]
    
.. note:: 

    We saw in Theorem 7 from the previous section that a matrix defined over a *field* :math:`\,` is invertible if and only if its 
    determinant is not equal to zero. In general,
    a matrix defined over a *ring* :math:`\ R` is invertible if and only if its determinant is invertible over :math:`R`. This fact may 
    be proven along the same lines as the aforementioned theorem (try it!).
    The invertible elements in :math:`\ R=\mathbb{Z}_N\ ` are exactly those numbers whose greatest common divisor with :math:`N` 
    is equal to :math:`1`.
    

Security
~~~~~~~~

Security of Hill's cipher bases on the fact that a given letter of the alphabet may be encrypted in a few ways. Already in the above example we saw that :math:`\ {\tt T}\ ` was encrypted as :math:`\ {\tt H},\ {\tt S},\ {\tt U}\,,` while :math:`\ {\tt J}\ ` in the ciphertext represented both :math:`\ {\tt O}\ ` and :math:`\ {\tt M}` . In this way the algorithm masks frequency distribution of letters in a text, and thus prevents usage of *frequency analysis*; in fact, the bigger the secret key, the better masking properties.

However, if one knows sufficiently many pairs (plaintext, ciphertext), it is possible to find the secret key which was used. Assume that somehow you know that the alphabet consists of :math:`26` letters, the secret key matrix :math:`K` is of size :math:`m,` and the ciphertexts :math:`\ C_1,\ldots , C_m\ ` were obtained from the plaintexts :math:`\ P_1,\ldots , P_m\ ` via Hill's encryption algorithm, that is:

.. math::
    :label: Hill1

    K\in M_m(Z_{26})\, ,\quad\qquad C_i=P_iK\, (\text{mod}\, 26)\quad\text{for}\quad i=1,\ldots ,m.
    
(Note that if one knows :math:`\ C_i\ ` and :math:`\ K^{-1},\ ` then the procedure described in the example above always returns :math:`\ P_i\ `:

.. math::

    C_iK^{-1}=(P_iK)K^{-1}=P_i(KK^{-1})=P_i\quad (\text{mod}\, 26).\quad )
    
We can write the relations :eq:`Hill1` in a form of matrix equation

.. math::

   C=PK\quad (\text{mod}\, 26)\,,
   
where :math:`\ C,P\in M_m(Z_{26})\ ` and their rows are formed from  :math:`\ C_i` 's and :math:`\ P_i` 's respectively. If the matrix :math:`\ P\ ` is invertible (over the ring :math:`\ Z_{26}\ `), then we find that :math:`\ K=P^{-1}C\, (\text{mod}\, 26).\ ` If :math:`\ P\ ` is not invertible, one has to find more pairs (plaintext, ciphertext) and replace the ones that are linearly dependent with others.

**Example.**

Assume that we encrypted the text :math:`\ {\tt NOTHINGNEW}\ ` via Hill's cipher with a secret key of size :math:`2` and obtained ciphertext :math:`\ {\tt DFTMGRYDEI}.` The pairs :math:`\ ({\tt NO}, {\tt DF}),\, ({\tt TH}, {\tt TM})\ ` correspond to pairs of vectors :math:`\ ([13\; 14],\; [3\; 5])\;, ([19\; 7],\; [19\; 12])\,.` Hence, we obtain a matrix equation

.. math::

    \left[\begin{array}{rr} 3 & 5\\ 19 & 12 \end{array}\right] = 
    \left[\begin{array}{rr} 13 & 14\\ 19 & 7 \end{array}\right] K \quad (\text{mod}\, 26).
    
We compute:
 
.. code-block:: python

    sage: N=26
    sage: R=Integers(N)
    sage: C=Matrix(R, [[3,5],[19,12]])
    sage: P=Matrix(R, [[13,14],[19,7]])
    sage: print "det(P) =", det(P),"\n", "K = P^{-1}C =","\n", P.inverse()*C
    
    det(P) = 7
    
    K = P^{-1}C = 
    [17  7]
    [16  5]
    
The result may be verified by checking remaining pairs (plaintext, ciphertext). Do it yourself in the cell below using the commands presented in this section.

.. sagecellserver:: 
    
    N = 26
    
    
.. Exercises
.. ~~~~~~~~~

**Exercise.**

You intercepted the message that was encrypted via Hill's cipher with the key matrix of size :math:`3.` Most probably the plaintext starts with :math:`\ {\tt TOGENERAL}\ ` . Find the key matrix and decrypt the rest of the ciphertext: 

:math:`\ {\tt AVQLPGSNJJLYMLQYCTQCUHIQZNTRDJPTPSAJOKDKXTSGZGFPIUANHFDNIHROMZEKKFUMNZDIACYVZHMSSKJRQEW }` .


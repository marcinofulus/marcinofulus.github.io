
Kernel, Image and the Rank-Nullity Theorem
------------------------------------------

Let :math:`\,V\,` and :math:`\,W\,` be vector spaces over the field :math:`\,K.`

.. admonition:: Definition. :math:`\\`

   The *kernel* of a linear transformation :math:`\,F\in\text{Hom}(V,W)\ ` 
   is the set of all elements of the space :math:`\,V,\ ` which are mapped
   into the zero vector of the space :math:`\,W:`
   
   .. math::
      
      \text{Ker}\,F\ :\,=\ \{\,v\in V:\ F(v)=\theta_W\}\,.

.. Equivalently, the kernel of a homomorphism :math:`\,F\in\text{Hom}(V,W)\ ` 
   may be defined as the preimage (inverse image) of the one-element set
   consisting of the zero vector of the space :math:`\,W:` :math:`\\`
   :math:`\,\ \text{Ker}\,F\,=\,F^{-1}\{\,\theta_W\}.`

In other words, the kernel of a homomorphism :math:`\,F\in\text{Hom}(V,W)\ ` 
is the preimage (inverse image) of the one-element set
consisting of the zero vector of the space 
:math:`\,W: \,\text{Ker}\,F\,=\,F^{-1}\{\,\theta_W\}.`

.. admonition:: Definition. :math:`\\`
   
   The *image* of a linear transformation :math:`\,F\in\text{Hom}(V,W)\ ` 
   is the image of the space :math:`\,V\ ` under the map :math:`\,F,\ \ ` 
   i.e. :math:`\,` it is the set of values of the map :math:`\,F:`
   
   .. math::
      
      \text{Im}\,F\ :\,=\ F(V)\ \equiv\ \{\,F(v):\ v\in V\,\}\,.

Obviously, :math:`\ \,\text{Ker}\,F\subset V,\ \,\text{Im}\,F\subset W.\ ` 
:math:`\,` Moreover

.. admonition:: Theorem 6. :math:`\\`
   
   The kernel of a linear transformation :math:`\,F\in\text{Hom}(V,W)\ `
   is a subspace of the vector space :math:`\,V,\ ` whereas the image 
   of :math:`\,F\,` is a subspace of the vector space :math:`\,W:` 
   
   .. math::
      
      \text{Ker}\,F < V,\qquad\text{Im}\,F < W.

The **Proof** 
is based on the following criterion for a subspace (see Chapter 1.).
A subset :math:`\,X\,` of the vector space :math:`\,V\,` 
is a subspace of :math:`\,V\,` if, and only if, :math:`\,X\,` is closed
under vector addition and scalar multiplication, that is iff
for any two vectors from :math:`\,X,\,` every linear combination of these 
vectors also belongs to :math:`\,X.`

So let's assume that :math:`\ v_1,\,v_2\in\text{Ker}\,F:\ `
:math:`\ F(v_1)=F(v_2)=\theta_W\,.`

Then :math:`\ \ F(a_1\,v_1+a_2\,v_2)\ =\ 
a_1\,F(v_1)+a_2\,F(v_2)\ =\ \theta_W\,,` :math:`\\`
meaning that :math:`\ \,a_1\,v_1+a_2\,v_2\in\text{Ker}\,F\ \,` 
:math:`\ \forall\ \ a_1,a_2\in K.` :math:`\,`
Thus we have proved that :math:`\ \text{Ker}\,F < V.`

Now let :math:`\,\ w_1,\,w_2\in\text{Im}\,F.\ \ `
Then :math:`\ \ w_1=F(v_1),\ \,w_2=F(v_2)\,,\ \,`
:math:`\ \exists\ v_1,\ \exists\ v_2\in V.`

Then for :math:`\ \forall\ \  b_1,b_2\in K:\ `
:math:`\ b_1\,w_1+\,b_2\,w_2\ =\ b_1\,F(v_1)\,+\,b_2\,F(v_2)\ =\ 
F(b_1\,v_1+\,b_2\,v_2)\in\text{Im}\,F.\ `
This proves that :math:`\ \ \text{Im}\,F < W.\quad\bullet`

The :math:`\,\text{Ker}\,F\ ` and :math:`\,\text{Im}\,F\ ` being
vector (sub)spaces, the following two definitions are sensible:

.. math::
   
   \begin{array}{rclcl}
   \text{nul}\ F & :\,= & 
   \dim\,\text{Ker}\,F  & \qquad\quad & \text{nullity of the homomorphism}\ F 
   \\
   \text{rk}\ F  & :\,= & 
   \dim\,\text{Im}\,F   & \qquad\quad & \text{rank of the homomorphism}\ F
   \end{array}

.. admonition:: Theorem 7. :math:`\ ` The Rank-Nullity Theorem. :math:`\\`

   If :math:`\,F\ ` is a linear transformation from the vector 
   space :math:`\,V\ ` to the vector space :math:`\,W,\ ` then
   
   .. math::
      :label: Rk_Nul
      
      \text{nul}\ F\ +\ \text{rk}\ F\ =\ \dim\,V\,.

**Proof.** :math:`\,` Assume that :math:`\ \text{nul}\,F = k,\ ` 
while :math:`\ U = \{u_1,\,u_2,\,\dots,\,u_k\}\ ` 
is a basis of :math:`\ \text{Ker}\,F.\ ` :math:`\\`
Since :math:`\,\text{Ker}\,F < V,\ \,` the set :math:`\,U\,` can be extended
to the basis :math:`\,B\,` of the whole space :math:`\,V:`

.. math::
   
   B\ \,=\ \,U\,\cup\,Y\ \,=\ \,
   \{\,u_1,\,u_2,\,\dots,\,u_k,\ y_1,\,y_2,\,\dots,\,y_r\,\}\,.

Within this notation :math:`\ \dim\,V=\,k+r,\ ` where 
:math:`\,k = \text{nul}\,F.\ ` To prove the thesis :eq:`Rk_Nul`,
it is enough to show that :math:`\, r = \text{rk}\ F.\ ` 
For that purpose we shall demonstrate that the image of the set :math:`\,Y:`

.. math::
   :label: set_FY
   
   F(Y)\ :\,=\ \{\,Fy_1,\,Fy_2,\,\dots,\,Fy_r\,\}

is a basis of :math:`\,\text{Im}\,F.\ \,` 
This shall be accomplished in two steps. 

1.) To show that the set :eq:`set_FY` is linearly independent, we assume that 

.. math::
      
   c_1\,Fy_1\,+\;c_2\,Fy_2\,+\;\ldots\;+\;c_r\,Fy_r\ =\ \theta_W\,,\qquad
   c_1,\,c_2,\,\ldots,\,c_r\,\in\,K.

Due to linear independence of vectors in the basis :math:`\,B,\,` we obtain
       
.. math::
      
   F\left(c_1\,y_1\,+\;c_2\,y_2\,+\;\ldots\;+\;c_r\,y_r\right)\ =\ \theta_W\,, 

   c_1\,y_1\,+\;c_2\,y_2\,+\;\ldots\;+\;c_r\,y_r\ \in\ \text{Ker}\,F\,,
      
   c_1\,y_1\,+\;c_2\,y_2\,+\;\ldots\;+\;c_r\,y_r\ =\ 
   -\ b_1\,u_1\,-\;b_2\,u_2\,+\;\ldots\;-\ b_k\,u_k\,,

   b_1\,u_1\,+\;b_2\,u_2\,+\;\ldots\;+\;b_k\,u_k\ +\ 
   c_1\,y_1\,+\;c_2\,y_2\,+\;\ldots\;+\;c_r\,y_r\ =\ \theta_V\,,

   b_1=\,b_2=\;\ldots\;=\;b_k\,=\;c_1=\,c_2=\;\ldots\;=\;c_r\ =\ 0\,.

Thus we have evidenced the implication
   
.. math::

   c_1\,Fy_1\,+\;c_2\,Fy_2\,+\;\ldots\;+\;c_r\,Fy_r\ =\ \theta_W
   \quad\Rightarrow\quad
   c_1\,=\,c_2\,=\,\ldots\,=\,c_r\ =\ 0\,,

which expresses the linear independence of the set 
:math:`\ F(Y)`.

2.) To show that the set :math:`\ F(Y)\ ` spans :math:`\,\text{Im}\,F,\ `
we consider an arbitrary vector :math:`\,w\in \text{Im}\,F:`

.. math::
      
   w\ =\ F(v),\quad 
   v=b_1\,u_1+\;\ldots\;+\;b_k\,u_k\;+\ c_1\,y_1+\;\ldots\;+\;c_r\,y_r\,.

Taking into account that :math:`\ \,Fu_i=\theta_W,\ \,i=1,2,\dots,k,\ \,` 
we get

.. math::
   :nowrap:
      
   \begin{eqnarray*}
   w & = & F\,(b_1\,u_1+\;\ldots\;+\;b_k\,u_k\;+\ c_1\,y_1+\;\ldots\;+\;c_r\,y_r)  \\
     & = & b_1\,Fu_1+\;\ldots\;+\;b_k\,Fu_k\;+\ c_1\,Fy_1+\;\ldots\;+\;c_r\,Fy_r \\
     & = & c_1\,Fy_1+\;\ldots\;+\;c_r\,Fy_r\,\in\,L(Fy_1,\dots,Fy_r)\,.
   \end{eqnarray*}

Thus :math:`\ \text{Im}\,F\subset L(Fy_1,\dots,Fy_r).\ `
On the other hand, :math:`\ \text{Im}\,F\supset L(Fy_1,\dots,Fy_r),\ ` 
:math:`\\`
whereby :math:`\ \text{Im}\,F=L(Fy_1,\dots,Fy_r)=L\left(F(Y)\right).` 

As a linearly independent spanning set, :math:`\ F(Y)\ ` 
is a basis of :math:`\ \text{Im}\,F,\ \ ` and :math:`\ r\,=\,\text{rk}\ F.`
:math:`\ \ \bullet` 

The following Criterion for the Isomorphism of Vector Spaces is based
on the above-mentioned Theorem 7.:

.. admonition:: Theorem 8. :math:`\\`
   
   Any two finite-dimensional vector spaces over a field :math:`\,K\ `
   are isomorphic :math:`\\` if, and only if, they are of the same dimension:
   
   .. math::
      
      V\,\simeq\,W\qquad\Leftrightarrow\qquad\dim\,V\,=\ \dim\,W\,.

**Proof.**

:math:`\Rightarrow\ :\ ` We assume that the spaces 
:math:`\ V\ ` and :math:`\ W\ ` are isomorphic:
:math:`\ V\simeq W,\ \,` that is :math:`\ \text{Iso}(V,W)\neq\emptyset.`

Let :math:`\ F\ ` be an isomorphism of the space :math:`\,V\,` onto
the space :math:`\,W.\ ` The map :math:`\ F\ ` being bijective, :math:`\\`
the preimage of each element of :math:`\,W\,` is a set containing exactly 
one element of :math:`\ V.\ ` :math:`\\` In particular, the zero vector 
:math:`\ \theta_W\ ` is the image of the zero vector :math:`\ \theta_V\ ` 
only, :math:`\,` meaning that :math:`\ \text{nul}\,F=\,\dim\,\text{Ker}\,F=0.`

But :math:`\ F\ ` is also surjective: 
:math:`\ F(V)=\text{Im}\,F=W,\ \,` wherefrom 
:math:`\ \,\text{rk}\ F=\dim\,\text{Im}\,F=\,\dim\,W.\ `

Using Theorem 7., :math:`\,` we obtain

.. math::
   
   \dim\,V\ =\ \,\text{nul}\,F\ +\ \,\text{rk}\,F\ =\ 
   0\ +\ \dim\,W\ =\ \dim\,W.

:math:`\Leftarrow\ :\ ` Let :math:`\ \,\dim\,V=\,\dim\,W=n.`

Then every basis of :math:`\,V,\,` as well as every basis of :math:`\,W,\,` 
has :math:`\,n\ ` elements. Suppose that the set 
:math:`\ B = \{\,v_1,v_2,\,\dots,\,v_n\,\}\ ` is a basis of the space
:math:`\,V,\ ` whereas :math:`\ C = \{\,w_1,w_2,\,\dots,\,w_n\,\}\ ` 
is a basis of the space :math:`\,W.\ ` 
On the grounds of the Corollary of Theorem 5., 
we define the linear transformation :math:`\,F:\,V\rightarrow W\ ` 
by giving its values on vectors in :math:`\ B:`

.. math::
   :label: iso

   F(v_i)\ :\,=\ w_i\,,\qquad i=1,2,\dots,n.

Then the image of an arbitrary vector
:math:`\ \,v = \displaystyle\sum_{i\,=\,1}^n\ a_i\,v_i \in V\ \,` 
is given by

.. math::
   :label: iso_1

   F\left(\,\sum_{i\,=\,1}^n\ a_i\,v_i\right)\ \ =\ \ 
   \sum_{i\,=\,1}^n\ a_i\,Fv_i\ \ =\ \ 
   \sum_{i\,=\,1}^n\ a_i\,w_i\,.

If :math:`\,w=F(v),\ ` where :math:`\ v\in V,\ w\in W,\ ` 
then the coordinates of :math:`\,w\,` in the basis :math:`\,C\,` are equal 
to the respective coordinates of :math:`\,v\,` in the basis :math:`\,B.` 

Given a basis, the vectors are in a one-to-one correspondence with
the families of their coordinates. Consequently, the linear transformation
:math:`\,F\,` defined by Eqs. :eq:`iso` or :eq:`iso_1` is a bijection, 
hence an isomorphism. So :math:`\,\text{Iso}(V,W)\neq\emptyset,\ ` 
and :math:`\,V\simeq W.` :math:`\ \ \bullet`

Isomorphic vector spaces may consist of objects of different kinds.
Having the same structure, they are however mathematically equivalent.

.. admonition:: Corollary.

   All :math:`\,n`-dimensional vector spaces over a field :math:`\,K\ `
   are isomorphic to the space :math:`\,K^n.`


















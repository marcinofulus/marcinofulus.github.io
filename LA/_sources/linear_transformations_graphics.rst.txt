Application to Computer Graphics   
--------------------------------
.. Some general introduction on computer graphics and use of maths
Every 2- or 3-dimensional space can be endowed with a coordinate system at a chosen origin. In this way every object in such a space, e.g. every pixel on a computer screen, acquires coordinates which determine its position in time. Of course, at every moment of a computer game there are millions of pixels that have to be handled by a graphic card. This is possible because graphic cards may perform thousands of parallel linear computations, and - luckily - it is the compositions of linear transformations which describe many movements. Among them are rotation, scaling, shear, reflection and translation [1]_. We describe them and their implementation in the following sections. First try yourself if you can find a transformation which moves a single point to a desired location:

.. In fact, many movements may be described as compositions of basic transformations: rotation, scaling, shear, translation [1]_. In considerations below we will often make use of the fact that if the object is determined by a position of a few points, it is enough to know the action of the corresponding matrix on the coordinates of these points.

.. admonition:: Experiment with Sage!

    .. figure:: figures/grafika1.png
       :scale: 70 %
       :align: right
    
    The picture on the right presents a point :math:`\ (1,0)\ `. 
        
    Try to find entries :math:`\ a, b, c, d\ ` of the matrix :math:`\ A\ ` in the code below which transforms 
    this point to the point :math:`\ (0,1)\ `. 
    You will see the effect on the picture which will be generated. 
    
    Can you find a matrix which sends the point :math:`\ (1,0)\ ` to :math:`\ (\frac12,0)\ `, 
    :math:`\ (5,0)\ ` or :math:`\ (\frac{\sqrt{2}}{2},\frac{\sqrt{2}}{2})\ `?
    
    :math:`\text{}`
    
.. sagecellserver::

    a=
    b=
    c=
    d=
    A=Matrix([[a,b],[c,d]])
    p=point((1,0), color='red', size=20)
    q=point(A*vector(p[0][0]), size=20)
    (p+q).show(figsize=4) # in order to treat a few graphics objects as one it suffices to 'add' them 



2-dimensional Graphics
~~~~~~~~~~~~~~~~~~~~~~

.. Recall (:ref:`matrix_of_lin_trans`) that every linear transformation between finite dimensional vector spaces can be represented by a matrix. In fact, as a consequence of a QR decomposition (see :ref:`QRdecomposition`), in dimensions :math:`2` and :math:`3` every real square matrix can be written as a composition of rotation, scaling, shear, reflection and projection.

We start with presenting explicit forms of basic linear transformations. 
We will extend the idea hidden behind the exercise above to objects which are determined by a few coordinates: triangles, rectangles, circles, ... 

Rotation
````````
    
The anti-clockwise rotation by the angle :math:`t` about the origin of the coordinate system is given by the matrix

.. math::

    R=\left[\begin{matrix} \cos t & -\sin t\\ \sin t & \cos t\end{matrix}\right]
    

An explanation of this fact can be found in [Cam]_, section 5.6.3. 

For example, rotation of a triangle with vertices :math:`\ (0, 0),\, (3, 0),\, (1,1.5)\ ` can be implemented by the following code (we marked the vertex :math:`\ (0, 0)\ ` for better clarity):

.. sagecellserver::

    @interact
    def _(t=slider(0,2*pi,pi/36)):
        R=Matrix([[cos(t), -sin(t)],[sin(t),cos(t)]])
        P=polygon2d([(0, 0), (3, 0), (1,1.5)]) # defines a polygon with specified vertices
        V=list(R*vector(P[0][i]) for i in range(3)) # a list which collects vertices after rotation 
        p=point(R*vector(P[0][0]), color='red', size=80) # marked vertex after rotation
        RP=polygon([V[0],V[1],V[2]])+p
        RP.show(figsize=4)

The first two lines are included so that you can experiment with various angles: 
:math:`\ t\in\left[ 0, \pi/36, 2\pi/36, \ldots, 2\pi\right]\ `.
Note also that in order to access the :math:`i`-th vertex of the polygon :math:`\ P\ ` one has to write :math:`\ P[0][i]\ `. 
Moreover, since :math:`\ P[0][i]\ ` is not seen as a vector, one has to use the constructor ``vector()`` before being able to multiply it by a matrix. 

.. admonition:: Experiment with Sage! 

    See what happens if in the above code you replace the vertex :math:`\ (0, 0)\ ` of a polygon with another point, 
    e.g. with :math:`\ (1, 0)\ `.
    
    Does the triangle rotate the way you expected it?
    
As we said at the beginning, the rotation matrix represents the rotation about the origin. In order to rotate an object about a chosen point, 
one has to translate this point (and everything else) to the origin, apply the rotation matrix and translate back to the starting place.

Translation
```````````

In order to translate a point :math:`\ (a_1,a_2)\ ` to a point :math:`\ (b_1,b_2)\ `,
or in other words: in order to translate a vector :math:`\ [a_1,a_2]\ ` to a vector :math:`\ [b_1,b_2]\ `,
one has to add a suitable vector :math:`\ [t_x,t_y]\ `:

.. math::

    \left[\begin{matrix} b_1 \\ b_2 \end{matrix}\right]= 
    \left[\begin{matrix} a_1 \\ a_2 \end{matrix}\right] + 
    \left[\begin{matrix} t_x \\ t_y \end{matrix}\right]


For example, if we want to shift the point :math:`\ (a_1,a_2)\ ` to the origin :math:`\ (0,0)\ `, 
we should shift it by the vector :math:`\ \left[-a_1,-a_2\right]\ `.
However,

.. note:: Operation of addition of a fixed :math:`n`-dimensional constant vector cannot be expressed by a matrix of size :math:`n`.

On the other hand,

.. math::

    \left[\begin{matrix} 1 & 0 & t_1\\ 0 & 1 & t_2\\  0 & 0 & 1\end{matrix}\right] 
    \left[\begin{matrix} a_1 \\ a_2 \\ 1\end{matrix}\right] 
    = \left[\begin{matrix} a_1 + t_1 \\ a_2 + t_2 \\ 1\end{matrix}\right] .
    
In general, if we view the points in dimension greater by one (or if we write them in :math:`\,` *projective*  or  *homogeneous* :math:`\,` coordinates, see [Cam]_, section 6.5),
then translation becomes a linear operation. This means in particular that it can be easily composed with other linear transformations.
Therefore from now on all the (:math:`2`-dimensional) points will have coordinates :math:`\ (x,y,1)\ `, and linear transformations will be given by :math:`\ 3\times 3\ ` matrices. In particular, the rotation matrix takes the form

.. math::

    R=\left[\begin{matrix} \cos t & -\sin t & 0\\ \sin t & \cos t & 0\\ 0 & 0 & 1 \end{matrix}\right]
    
and the translation by a vector :math:`\ [t_1,t_2]\ ` is given by 

.. math::

    T=\left[\begin{matrix} 1 & 0 & t_1\\ 0 & 1 & t_2\\  0 & 0 & 1 \end{matrix}\right] .
    
.. admonition:: Experiment with Sage!

    In order to translate a circle one only needs to know its center and radius. Run the code below and find the values of 
    :math:`\ [t_1,t_2]\ ` so that the center of the circle changes from :math:`\ (1, 0)\ ` to :math:`\ (-1, 2)\ `.
    
.. sagecellserver::

    @interact
    def _(t_x=slider(-5,5,0.5), t_y=slider(-5,5,0.5)):
        p=(1,0)
        c=circle(p,1)
        T=Matrix([[1,0,t_x],[0,1,t_y],[0,0,1]])
        Tp=list(T*vector(list(p)+[1]))
        del Tp[2]
        circle(vector(Tp),1).show(figsize=4)


**Example 1.**

We will rotate a triangle with vertices :math:`\ (1, 0),\, (3, 0),\, (1,1.5)\ ` by the angle :math:`t`. 
As before, we write the code in such a way that one can easily vary this angle.

.. sagecellserver::

    @interact
    def _(t=slider(0,2*pi,pi/36)):
        R=Matrix([[cos(t),-sin(t),0],[sin(t),cos(t),0],[0,0,1]])
        P=polygon2d([(1, 0), (3, 0), (1,1.5)], rgbcolor=(0.6,0.96,0.92))
        Pl=[list(P[0][i])+[1] for i in range(3)]
        tr=[-P[0][0][i] for i in range(2)] # translation vector, equal to (-1,0)
        T=Matrix([[1,0,tr[0]],[0,1,tr[1]],[0,0,1]])
        V=list(T.inverse()*R*T*vector(Pl[i]) for i in range(3))
        p=point(T.inverse()*R*T*vector(Pl[0]), color='red', size=20) # marked vertex after rotation and translations
        P1=P.plot3d(z=1) # original polygon plotted on a plane z=1
        RP=polygon([V[0],V[1],V[2]])+p+P1
        print V
        RP.show()

We obtain a 3-dimensional picture because we lifted the vertices to :math:`\ R^3\ `. In order to present everything on a plane, we need to get rid of the last coordinate ( which will be always equal to :math:`1`):

.. sagecellserver::

    @interact
    def _(t=slider(0,2*pi,pi/36)):
        R=Matrix([[cos(t),-sin(t),0],[sin(t),cos(t),0],[0,0,1]])
        P=polygon2d([(1, 0), (3, 0), (1,1.5)], rgbcolor=(0.6,0.96,0.92))
        Pl=[list(P[0][i])+[1] for i in range(3)]
        tr=[-P[0][0][i] for i in range(2)]
        T=Matrix([[1,0,tr[0]],[0,1,tr[1]],[0,0,1]])
        V=list(T.inverse()*R*T*vector(Pl[i]) for i in range(3))
        p=point((V[0][0],V[0][1]), color='red', size=20)
        RP=polygon([(V[i][0],V[i][1]) for i in range(3)])+p+P # we create polygon RP out of first two coordinates of each vector in V
        RP.show(figsize=6)
        

Scaling
```````

Scaling may be done separately for each axis direction:

    - with respect to the :math:`x`-axis: :math:`\ \ S_x=\left[\begin{matrix} k & 0\\ 0 & 1 \end{matrix}\right]\ \ ,\ k\in R\ `,
    
    - with respect to the :math:`y`-axis: :math:`\ \ S_y=\left[\begin{matrix} 1 & 0\\ 0 & l \end{matrix}\right]\ \ ,\ l\in R\ `,

or in both directions at the same time, which is a result of composition of these two transformations:

.. math::

    \left[\begin{matrix} k & 0\\ 0 & 1 \end{matrix}\right]\left[\begin{matrix} 1 & 0\\ 0 & l \end{matrix}\right] 
    =\left[\begin{matrix} k & 0\\ 0 & l \end{matrix}\right]

**Example 2.**

Press **Evaluate** to check the effect of choice of various scales on a triangle. 
The original triangle is filled with light blue colour.

.. sagecellserver::

    @interact
    def _(k=slider(-5,5,0.2), l=slider(-5,5,0.2)):
        S=Matrix([[k,0],[0,l]])
        P=polygon2d([(0, 0), (3, 1), (1,1.5)], rgbcolor=(0.6,0.96,0.92))
        V=list(S*vector(P[0][i]) for i in range(3))
        SP=polygon([V[0],V[1],V[2]], fill=False)
        (P+SP).show() # see what happens if instead of P+SP you write SP+P

.. admonition:: Experiment with Sage!

    See what happens if in the code above you replace the vertex :math:`\ (0, 0)\ ` of the polygon :math:`\ P\ ` with other points,
    e.g. :math:`\ (1, 0),\, (0, 1)\ ` or :math:`\ (2, 2)\ `.
    
    How does the coordinate which is equal to zero influence the result?
        
The reason for the above phenomenon is that scaling scales the whole axis, not just the object. Therefore, as it was the case with rotation, 
if one wants to scale an object and keep one of the vertices at the same place, one has to translate the chosen vertex to the origin, apply scaling and translate everything back. 

Now that we need to use translation, we go back to homogeneous coordinates. In particular, the scaling matrix takes the form

.. math::

    S=\left[\begin{matrix} k & 0 & 0\\ 0 & l & 0\\  0 & 0 & 1 \end{matrix}\right]

.. sagecellserver::

    @interact
    def _(k=slider(-5,5,0.25), l=slider(-5,5,0.25)):
        S=Matrix([[k,0,0],[0,l,0],[0,0,1]])
        P=polygon2d([(2, 2), (3, 1), (1,1.5)], rgbcolor=(0.6,0.96,0.92))
        Pl=[list(P[0][i])+[1] for i in range(3)]
        tr=[-P[0][0][i] for i in range(2)]
        T=Matrix([[1,0,tr[0]],[0,1,tr[1]],[0,0,1]])
        V=list(T.inverse()*S*T*vector(Pl[i]) for i in range(3))
        SP=polygon([(V[i][0],V[i][1]) for i in range(3)], fill=False)
        (P+SP).show() 
        
It is easy to see that in general scaling changes the volume and shape of an object. 
The only case when volume is preserved is when the scales :math:`\ k,l\ ` satisfy 
:math:`\ k=\frac1l\ ` (this defines a *squeeze mapping* :math:`\,`). The shape is preserved if and only if :math:`\ k=l\ `.
Try some of such values in the code above!


Shear
`````

As it was the case for scaling, we distinguish two types of shearing mappings:

- horizontal shear (parallel to the :math:`x`-axis): :math:`\ \ Sh_x=\left[\begin{matrix} 1 & a\\ 0 & 1 \end{matrix}\right]\ ,\ a\in R\ `,

- vertical shear (parallel to the :math:`y`-axis): :math:`\ \ Sh_y=\left[\begin{matrix} 1 & 0\\ b & 1 \end{matrix}\right]\ ,\ b\in R\ `.

Observe their effect by running the code below and changing the values of parameters :math:`\ a\ ` and :math:`\ b\ `.
Start with setting one of them to be equal to zero.

.. sagecellserver::

    @interact
    def _(a=slider(-5,5,0.25), b=slider(-5,5,0.25)):
        Sh=Matrix([[1,a],[b,1]])
        P=polygon2d([(0, 1), (2, 1), (2,2), (0,2)], rgbcolor=(0.6,0.96,0.92))
        V=list(Sh*vector(P[0][i]) for i in range(4))
        ShP=polygon2d([V[i] for i in range(4)], fill=False)
        (ShP+P).show(figsize=6) 

As you could see, varying :math:`\ a\ ` ( which is responsible for shear parallel to the :math:`x`-axis) resulted in shifting the parallelogram away from the :math:`y`-axis. As you might have guessed by now, the reason is that none of :math:`y`-coordinates of the parallelogram is equal to zero. Indeed, for a point :math:`\ p=(x_p,y_p)\ `:

.. math::

    Sh_xp=\left[\begin{matrix} 1 & a\\ 0 & 1 \end{matrix}\right]
    \left[\begin{matrix} x_p\\ y_p\end{matrix}\right]
    = x_p+a y_p\, ,
    
which means that for any :math:`\ a\neq 0\ `, :math:`\ x_p+a y_p\neq x_p\ ` whenever :math:`\ y_p\neq 0\ `, that is: 
if :math:`\ y_p\neq 0\ `, then the :math:`x`-coordinate of the point :math:`\ p\ ` will always change.

In order to produce the shear effect and keep it attached to the chosen vertex, we have to move to projective coordinates and apply the translation trick. In this setting shear matrices are of the form

.. math::

    Sh_x=\left[\begin{matrix} 1 & a & 0\\ 0 & 1 & 0\\ 0 & 0 & 1\end{matrix}\right]\qquad\text{and}\qquad
    Sh_y=\left[\begin{matrix} 1 & 0 & 0\\ b & 1 & 0\\ 0 & 0 & 1\end{matrix}\right]\, .


**Exercise.**

Produce the shear effect with parameters :math:`\ a = 3,\, b=0\ ` for the parallelogram from the code above 
so that the resulting parallelogram remains attached to the vertex :math:`\ (0,1)\ `.
Write suitable code in the window below.

.. sagecellserver::

    
   
Reflection
``````````

In order to find reflection of the point :math:`\ p\ ` with respect to the line :math:`\ l\ `, one has to construct the line :math:`\ l'\ ` which is orthogonal to :math:`\ l\ ` and passes throught the point :math:`\ p\ `, and then mark the point on :math:`\ l'\ ` whose distance from :math:`\ l\ ` is the same as distance of :math:`\ p\ ` from :math:`\ l\ `. 

If we want to find a reflection with respect to the :math:`y`-axis, that is :math:`\ l:\ x=0\ `, 
then the reflection :math:`\ q\ ` of the point :math:`\ p=(x_p,y_p)\ ` has coordinates :math:`\ q=(-x_p,y_p)\ `, e.g.

.. figure:: figures/grafika2.png
    :scale: 70 %
    :align: center

This corresponds to a linear transformation given by matrix 
:math:`\ R_{\infty}=\left[\begin{matrix} -1 & 0 \\ 0 & 1\end{matrix}\right]\ `
as

.. math::

        R_{\infty}p=\left[\begin{matrix} -1 & 0 \\ 0 & 1\end{matrix}\right]
        \left[\begin{matrix} x_p\\ y_p\end{matrix}\right]
        =\left[\begin{matrix} -x_p\\ y_p\end{matrix}\right]\, .

In general, reflection :math:`\ q\ ` of the point :math:`\ p=(x_p,y_p)\ ` with respect to the line passing through the origin:
:math:`\ l:\ y=ax\, ,\, a\in R\ ` is given by the formula 
:math:`\ q=((-1+\frac{2}{1+a^2})x_p+ \frac{2a}{1+a^2} y_p, \frac{2a}{1+a^2} x_p+(1-\frac{2}{1+a^2})y_p)\ `, 
which is described by the matrix

.. math::

    R_a=\left[\begin{matrix} -1+\frac{2}{1+a^2} & \frac{2a}{1+a^2} \\ 
    \frac{2a}{1+a^2} & 1-\frac{2}{1+a^2}\end{matrix}\right]\, .


**Example 3.**

The following code describes reflection of a triangle with respect to a line 
:math:`\ l:\ y=ax\, ,\, a\in [-5,5]\ `. 
Observe that again it suffices to determine the action on the vertices of the triangle.
Press **Evaluate** to observe the effect for various values of :math:`\ a\ `. 
How does the picture change when :math:`\ a\ ` increases or decreases? 
How is this related to reflection defined by :math:`\ R_{\infty}\ `?

.. sagecellserver::

    @interact
    def _(a=slider(-5,5,0.2)):
        var('x')
        l=plot(a*x, (x,-2.5,2.5), color='green', linestyle="--")
        Ra=Matrix([[-1+2/(1+a^2), 2*a/(1+a^2)],[2*a/(1+a^2),1-2/(1+a^2)]])
        P=polygon2d([(1,1),(1.5,4),(3,2)], rgbcolor=(0.6,0.96,0.92), fill=False)
        V=list(Ra*vector(P[0][i]) for i in range(3))
        RaP=polygon2d([V[i] for i in range(3)], fill=False)
        (RaP+P+l).show(figsize=6)

Projection
``````````

We distinguish projections to the :math:`x`-axis and to the :math:`y`-axis:

.. figure:: figures/proj_to_x-and-y.png
    :scale: 80 %
    :align: center
    
    Projection to the :math:`x`-axis. :math:`\ \qquad\qquad\ ` Projection to the :math:`y`-axis.

They are given by projection matrices which neglect the input of the :math:`y`- or :math:`x`-coordinate, correspondingly:

.. math::

    Pr_x=\left[\begin{matrix} 1 & 0\\ 0 & 0\end{matrix}\right]\, ,\qquad\qquad
    Pr_y=\left[\begin{matrix} 0 & 0\\ 0 & 1\end{matrix}\right]\, .

.. figure:: figures/graf_vector_projection.png
    :scale: 80 %
    :align: right 

These projections are very natural, because we often choose the coordinate system whose axes agree with the standard (orthogonal) basis vectors:
:math:`x`-axis with :math:`\ e_1=[1,0]\ ` and :math:`y`-axis with :math:`\ e_2=[0,1]\ `. In this way every point :math:`\ (a,b)\ ` on a plane determines a vector :math:`\ [a,b]=ae_1+be_2\ `. If we project to the :math:`x`-axis, then since the vectors :math:`\ e_1\ ` and :math:`\ e_2\ ` are orthogonal, the contribution  from the second vector vanishes (for more details look at the chapter :ref:`Unitary-Spaces`). However, if we change the basis from :math:`\ e_1,\, e_2\ ` to an (orthonormal) basis :math:`\ v,\, w\ ` [2]_, then it is equaly easy to find :math:`\ \alpha ,\,\beta\ ` so that :math:`\ [a,b]=\alpha v+\beta w\ `. Then the projection of the point :math:`\ (a,b)\ ` to the axis determined by the vector :math:`\ v\ ` will be equal to :math:`\ \alpha\ `. In fact, we know the precise formulae for :math:`\ \alpha\ ` (see Example 4). in :ref:`inner-product`), which allows us to give a matrix representation of projection onto the vector :math:`\ v=[v_1,v_2]\ `:

.. math::

    Pr_v=\left[\begin{matrix} v_1^2 & v_1v_2\\ v_1v_2 & v_2^2\end{matrix}\right]\, ;

if :math:`v` is not of length :math:`1`, one has to normalise the matrix by dividing each entry by :math:`\ v_1^2\, +\,v_2^2\ `.

**Example 4**

Press **Evaluate** to observe the effect of projecting the figure from example above onto various vectors :math:`v`. 
The code also returns coordinates of a vector and projection matrix that were used.

.. sagecellserver::

    col=["black","blue","red"]
    e1vec=[vector([0.3+.2*cos(x),1+0.2+.2*sin(x)]) for x in srange(0,2*pi,0.1)]
    eye1=points(e1vec,color=col[0])
    e2vec=[vector([-0.3+.1*cos(x),1+0.2+.1*sin(x)]) for x in srange(0,2*pi,0.1)]
    eye2=points(e2vec,color=col[1])
    smvec=[vector([.5*cos(x),1+.5*sin(x)]) for x in srange(pi+.5,2*pi-.5,0.04)]
    smile=points(smvec,color=col[2])
    face=eye1+eye2+smile
    v=random_vector(QQ,2) # not necessarily of length 1
    Pr=matrix([[v[0]^2,v[0]*v[1]],[v[0]*v[1],v[1]^2]])/(v[0]^2+v[1]^2) # matrix representation of projection onto vector v
    Pre1vec=[Pr*e1vec[i] for i in range(len(e1vec))]
    Pre2vec=[Pr*e2vec[i] for i in range(len(e2vec))]
    Prsmvec=[Pr*smvec[i] for i in range(len(smvec))]
    Prface=points(Pre1vec,color=col[0])+points(Pre2vec,color=col[1])+points(Prsmvec,color=col[2])
    (Prface+face).show(figsize=4, aspect_ratio=1)
    print "v =", v, "\n"
    print "Projection matrix:"; Pr



Functional programming
``````````````````````

In this section we briefly introduce a concise way of transforming big lists of 
points at the same time. We limit ourselves to one example; the interested reader 
will find a more detailed treatment of this topic at 

http://doc.sagemath.org/html/en/thematic_tutorials/functional_programming.html .

Consider a picture given by a set of points defined by the following code:

.. code-block:: python

    sage: pic=[vector([cos(x),1+sin(x)]) for x in srange(0,2*pi,0.03)]
    sage: pic+=[vector([0.3+.2*cos(x),1+0.2+.2*sin(x)]) for x in srange(0,2*pi,0.1)]
    sage: pic+=[vector([-0.3+.1*cos(x),1+0.2+.1*sin(x)]) for x in srange(0,2*pi,0.1)]
    sage: pic+=[vector([.5*cos(x),1+.5*sin(x)]) for x in srange(pi+.5,2*pi-.5,0.04)]
    sage: points(pic).show(aspect_ratio=1,figsize=4) # points() transforms a list of pairs to a set of points
    
.. figure:: figures/grafika-face.png
       :align: center
       
In order to apply a linear transformation to such a big set we could proceed as previously, 
that is, to create long lists of points and use a loop to apply an action of the 
matrix on each of the points. This may be written in a cleaner way by 
applying the Python built-in function ``map()``, which applies one 
function (provided as the first argument) to each element of the chosen 
domain (provided as the consecutive arguments). In our case, the function takes one argument 
and multiplies it by a fixed matrix :math:`\ A\ `; 
such function may be defined shortly using ``lambda`` statement as below. 
For example, to transform the above picture by the matrix 
:math:`\ A=\left[\begin{matrix} 2 & -2 \\ 0 & -1 \end{matrix}\right]\ `, we write:

.. code-block:: python

    sage: A=matrix([[2,-2],[0,-1]])
    sage: Apic=map(lambda w: A*w,pic) 
    # lambda w: A*w defines a function "multiply w by A on the left" 
    # second argument pic provides a set on which this function is defined 
    sage: newpic=points(pic)+points(Apic,color='green')
    sage: newpic.show(aspect_ratio=1,figsize=(6,6))
    
.. figure:: figures/grafika-Aface.png
       :scale: 90 %
       :align: center    
 
.. admonition:: Experiment with Sage!

    The code below transforms the picture introduced above by a randomly chosen :math:`\ 2\times 2\ ` matrix. 
    Can you find a decomposition of this matrix to linear transformations that were introduced above? 
    
.. sagecellserver::

    A=random_matrix(QQ,2)
    pic=[vector([cos(x),1+sin(x)]) for x in srange(0,2*pi,0.03)]
    pic+=[vector([0.3+.2*cos(x),1+0.2+.2*sin(x)]) for x in srange(0,2*pi,0.1)]
    pic+=[vector([-0.3+.1*cos(x),1+0.2+.1*sin(x)]) for x in srange(0,2*pi,0.1)]
    pic+=[vector([.5*cos(x),1+.5*sin(x)]) for x in srange(pi+.5,2*pi-.5,0.04)]
    Apic=map(lambda w:A*w,pic)
    newpic=points(pic)+points(Apic,color='green')
    newpic.show(aspect_ratio=1,figsize=(6,6))
    print A

In order to transform a colorful picture and preserve the colour under every transformation, one may create a list which stores information on colours in RGB format (with values between :math:`0` and :math:`1`) and assign them to points/figures/etc. in a desirable manner. This was done on a small scale in Example 4. above. To introduce more complicated colouring (and with use of ``lambda`` and ``map()``) one can proceed as follows:

.. sagecellserver::

    colors = [(1, 0, 0), (1, 0.25, 0), (1, 0.5, 0), (1, 0.75, 0), (1, 1, 0), (0.75, 1, 0), (0.5, 1, 0), (0.25, 1, 0),
    (0, 1, 0), (0, 1, 0.25), (0, 1, 0.5), (0, 1, 0.75), (0, 1, 1), (0, 0.75, 1), (0, 0.5, 1), (0, 0.25, 1),
    (0, 0, 1), (0.25, 0, 1), (0.5, 0, 1), (0.75, 0, 1), (1, 0, 1), (1, 0, 0.75), (1, 0, 0.5), (1, 0, 0.25)] # a list of colors
    pic=[vector([cos(x),1+sin(x)]) for x in srange(0,2*pi,0.03)]
    pic+=[vector([0.3+.2*cos(x),1+0.2+.2*sin(x)]) for x in srange(0,2*pi,0.1)]
    pic+=[vector([-0.3+.1*cos(x),1+0.2+.1*sin(x)]) for x in srange(0,2*pi,0.1)]
    pic+=[vector([.5*cos(x),1+.5*sin(x)]) for x in srange(pi+.5,2*pi-.5,0.04)]
    face=point(pic[0],rgbcolor=colors[0])
    for i in range(len(pic)): # assigns colors to points stored in pic; len(pic)=length of the list 'pic'
        j=i%len(colors) 
        # this means that the colors of points: point(pic[i]) and point(pic[i+len(colors)]) are the same
        face=face+point(pic[i],rgbcolor=colors[j])
    A=random_matrix(QQ,2)
    Apic=map(lambda w: A*w,pic)
    Aface=point(Apic[0],rgbcolor=colors[0])
    for i in range(len(pic)):  
    # assigns colors to points stored in Apic so that the color of a point before and after multiplication by A is the same
        j=i%len(colors)
        Aface=Aface+point(Apic[i],rgbcolor=colors[j])
    (face+Aface).show()

Note that ``Apic`` which is defined via ``map(lambda w: A*w,pic)`` is a list of vectors ``A*w``, where ``w`` runs over the consecutive elements of the list ``pic``. Therefore the order of colouring of the initial points and the points after multiplication by ``A`` will be the same.

.. admonition:: Experiment with Sage!

    Change the code above so that the eyes of the figure are all blue and they remain blue after a transformation.

Modelling of movement
`````````````````````

We finish discussion on fundamentals of 2d graphics with an example of modelling of movement of a simple object along a given curve.

**Example 5.**

If we ignore air resistance, then position of a ball shot from the cannon with velocity :math:`\ v_0\ ` at an angle of :math:`\ \alpha\ ` degrees is described by the equation

.. math::
    :label: rzut-ukosny

    y=x\tan\alpha -\frac{g}{2v_0^2\cos^2\alpha}x^2,
    
where :math:`\ g=9.80665 \frac{m}{s^2}\ ` denotes standard gravity and the coordinate system 
is chosen so that the cannon is placed at the origin.
In order to model the movement of this ball it suffices to know the position of its centre, which
at the :math:`i`-th moment will be denoted by :math:`\ (x_i,y_i)\ `.
The consecutive positions of the centre may be viewed as an effect of its translations along the curve 
:math:`\ f(x)=x\tan\alpha -\frac{g}{2v_0^2\cos^2\alpha}x^2\ `, that is (in projective coordinates),

.. math::

    \left[\begin{matrix} x_{i+1} \\ y_{i+1} \\ 1 \end{matrix}\right] =
    \left[\begin{matrix} 1 & 0 & a\\ 0 & 1 & b\\  0 & 0 & 1 \end{matrix}\right]
    \left[\begin{matrix} x_i \\ y_i \\ 1 \end{matrix}\right]\, .

for some :math:`\ a,\, b>0\ `. From here we see that 

.. math::

    a=x_{i+1}-x_i\qquad\text{and}\qquad b=y_{i+1}-y_i=f(x_{i+1})-f(x_i)\, .

After the time :math:`\ t\ `, the ball covers the horizontal distance (i.e. along the :math:`x`-axis) described by
:math:`\ x(t)=v_0t\cos\alpha\ `. Hence, if :math:`\ i\ ` describes the unit of time, then
:math:`\ a=x_{i+1}-x_i=v_0\cos\alpha\ ` and 

.. math::

    b=f(x_i+v_0\cos\alpha)-f(x_i)
    =(x_i+a)\tan\alpha -\frac{g}{2a^2}(x_i+a)^2-(x_i\tan\alpha -\frac{g}{2a^2}x_i^2)
    =a\tan\alpha-\frac{gx_i}{a}-\frac{g}{2}\, .
    
If we let :math:`\ A=-\frac{g}{a}\ `, :math:`\ B=a\tan\alpha-\frac{g}{2}\ `, 
then the translation matrix takes the form

.. math::

    T=\left[\begin{matrix} 1 & 0 & a\\ 0 & 1 & Ax_i+B\\  0 & 0 & 1 \end{matrix}\right]\, .
    
The above considerations can be implemented in Sage as follows:

.. sagecellserver::

    v0=100
    al=pi/3
    a=v0*cos(al)
    g=9.80665
    A=-g/a
    B=a*tan(al)-g/2
    x=0
    y=0
    P=list()   # P is an empty list of an unspecified length
    P.insert(0,(0,0)) # we set the zero (the first) element of P to be the point (0,0)
    t=1
    while y>0 or y==0:
        T=Matrix([[1,0,a],[0,1,A*x+B],[0,0,1]])
        y=(T*vector([x,y,1]))[1]
        x=a*t
        P.insert(t,(x,y))
        t=t+1 # note constant change of time!
    del P[t-1] # y-coordinate of P[t-1] is negative, so we remove this point
    points(P).show(figsize=6)

.. admonition:: Experiment with Sage!

    Change the values of the initial velocity ``v0`` and the angle ``al`` 
    in the code above to observe how these values affect the range of movement and the 
    time before the ball hits the ground. 
    Observe how the distance covered within the same amount of time (gaps between the consecutive dots on the picture) 
    varies depending on the position of the ball. 

Now it is very easy to adjust the code written above to produce an animation:

.. sagecellserver::

    v0=200
    al=pi/3
    a=v0*cos(al)
    g=9.80665
    A=-g/a
    B=a*tan(al)-g/2
    x=0
    y=0
    P=list()   # P is an empty list of an unspecified length
    P.insert(0,(0,0))
    t=1
    while y>0 or y==0:
        T=Matrix([[1,0,a],[0,1,A*x+B],[0,0,1]])
        y=(T*vector([x,y,1]))[1]
        x=a*t
        P.insert(t,(x,y))
        t=t+1
    del P[t-1]
    tm=floor((t-1)/2) # the moment when the ball is highest
    anim=animate([point(P[i]) for i in range(t-1)], xmin=0, xmax=P[t-2][0], ymin=0, ymax=P[tm][1])
    anim.show()

Note that at the second to the last line we fixed the minimal and maximal points on the :math:`x`- and :math:`y`-axes.
Thanks to this the axes stay fixed during the animation.

.. admonition:: Experiment with Sage!

    Produce an animation for various values of ``v0`` and the angle ``al`` (the greater ``v0``, the longer the animation).
    To obtain more refined movement, shorten the time unit in which the position of the ball is computed:
    replace  ``t=1``  and  ``t=t+1``  with  ``t=0.5``  and  ``t=t+0.5``  or with smaller values.
    
In a similar way we can adjust previously created code to produce an animation:

    1). Create a list which stores the points that define an object.

    2). Define a number of frames for an animation (the range).

    3). Animate an object (provide bounds for the axes).

**Example 6.**

The code below generates a rotating triangle. Observe minor changes that had to be applied to the code from Example 1.

.. code-block:: python

    sage: L=list()
    sage: t=0
    sage: for j in range(72):
    sage:     R=Matrix([[cos(t),-sin(t),0],[sin(t),cos(t),0],[0,0,1]])
    sage:     P=polygon2d([(1, 0), (3, 0), (1,1.5)])
    sage:     Pl=[list(P[0][i])+[1] for i in range(3)]
    sage:     tr=[-P[0][0][i] for i in range(2)]
    sage:     T=Matrix([[1,0,tr[0]],[0,1,tr[1]],[0,0,1]])
    sage:     V=list(T.inverse()*R*T*vector(Pl[i]) for i in range(3))
    sage:     L.insert(j,[(V[i][0],V[i][1]) for i in range(3)])
    sage:     t=t+pi/36
    sage: rotatetriangle=animate([polygon(L[t]) for t in range (72)], xmin=-3, xmax=3, ymin=-3, ymax=3)
    sage: rotatetriangle.show()

.. figure:: figures/rotatetriangle.gif
       :scale: 70 %
       :align: center



.. 3-dimensional Graphics
.. ~~~~~~~~~~~~~~~~~~~~~~



Exercises
~~~~~~~~~

The exercises can be downloaded in a form of a notebook from `here <http://visual.icse.us.edu.pl/LA/Notebooks/Graphics-exercises.ipynb>`_ .

**Exercise 1.**

Define a polygon on vertices :math:`\ (3,3),\, (2,3+\sqrt{3}),\, (3,3+\frac{2\sqrt{3}}{3}),\, (4,3+\sqrt{3})\ ` 
and find its reflection with respect to a line :math:`\ l: y=2x-1\ `.

.. sagecellserver::

    

(Hint: Use the translation with ``t_1=0, t_2=1``.)

**Exercise 2.**

Produce an animation which rotates the polygon from Exercise 1. 

a). around the origin :math:`\ (0,0)\ `,

.. sagecellserver::

    


b). around the point :math:`\ (3,3)\ `.

.. sagecellserver::

    


c). Fill in the code below to produce the following effect (each part should be done in a separate window; the commands written at the bottom verify whether the third vertex of the polygon is translated to a correct position):

- first :math:`\ 60^{\circ}\ ` of rotation is around the point :math:`\ (3,3)\ `,

.. sagecellserver::
        
    import numpy.testing as npt
    P=   # define the initial polygon: order the points in the same way as in the statement of the exercise
        
    V=  # define the list of points of the polygon after rotation by 60 degrees    
        
    npt.assert_almost_equal(V[2],(2,3.57735026918963, 1))

- next :math:`\ 120^{\circ}\ ` of rotation is around the point :math:`\ (1,3)\ ` 
    (this is where the vertex :math:`\ (2,3+\sqrt{3})\ ` lands after rotation by :math:`\ 60^{\circ}\ `),

.. sagecellserver::

     #write the code here 
     
     
     RV=  # define the list of points of the polygon after rotation by 120 degrees

     npt.assert_almost_equal(RV[2],(0, 3.57735026918962, 1))

- next :math:`\ 120^{\circ}\ ` of rotation is around the point :math:`\ (-1,3)\ `,

.. sagecellserver::

    #write the code here 
     
     
    RRV=  # define the list of points of the polygon after rotation by next 120 degrees

    npt.assert_almost_equal(RRV[2],(-2, 3.57735026918962, 1))

- last :math:`\ 60^{\circ}\ ` of rotation is around the point :math:`\ (-3,3)\ `.

.. sagecellserver::

    #write the code here 
     
     
    RRRV=  # define the list of points of the polygon after rotation by last 60 degrees

    npt.assert_almost_equal(RRRV[2],(-2, 2.42264973081038, 1))
    
d). Use the code produced in point c). to obtain an animation.

.. sagecellserver::

    

e). Mark a thick red point on the vertex :math:`\ (3,3)\ `. 
Imagine that this is a ball which rolls along the edge of the polygon while 
the polygon is rotating. Include the movement of this ball inside the polygon.

.. sagecellserver::

    

.. **Exercise 3.**



.. [1] As we explain in the subsequent part of this section, translation of a 2-dimensional object becomes a linear transformation when it is viewed in a 3-dimensional space (but not 2-dimensional!).

.. [2] The basis :math:`\ \left\{ \left[v_1,v_2\right],\, \left[w_1,w_2\right]\right\}\ ` is orthonormal if the basis vectors are orthogonal (perpendicular) and are of length :math:`1`, that is, :math:`\ v_1w_1+v_2w_2=0\ ` and :math:`\ v_1^2+v_2^2=1\ `, :math:`\ w_1^2+w_2^2=1\ `. (For details consult chapter :ref:`Unitary-Spaces`.)

.. [Cam] Jonathan G. Campbell, Notes  on  Mathematics  for  2D  and  3D  Graphics. Available at http://www.multiresolutions.com/strule/jon/www-jgcampbell-com/bscgp1/grmaths.pdf

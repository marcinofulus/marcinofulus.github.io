Models of interacting populations: prey-predator
================================================

The Lotka-Volterra model
------------------------

In this model we consider two populations: the population of prey and
the population of predators. Prey and predators can be reproduced by the
birth process. Population of prey is described by the function
:math:`N=N(t)` and population of predators - by :math:`P=P(t)`. As in
the Malthus model the rate of change of populations is the birth and
death process:

.. math:: \frac{dN}{dt} = a N - b N

.. math:: \frac{dP}{dt} = c P - e P

where the parameter :math:`a` characterizes the birth of prey, :math:`b`
corresponds to the death process of prey, :math:`c` describes the birth
process of predators and finally :math:`e` corresponds to the death
process of predators.

We assume that the death rate :math:`b` of prey depends upon the
population of predators: If there is a greater number of predators
:math:`P` then :math:`b` should be greater. In the simplest modeling we
assume that it is a linear function, i.e.,

.. math:: b \to  b_0 P

where :math:`b_0\gt 0` is a new parameter related to the death rate of
prey. Next, we assume that :math:`C` depends on the population :math:`N`
of prey: If there is a greater number of prey then the birth rate of
predators is greater, i.e.,

.. math:: c  \to  c_0 N

where :math:`c_0 \gt 0` characterizes the birth rate of predators. Under
these assumptions, the model reads

.. math:: \frac{dN}{dt} = a N - b_0 P N

.. math:: \frac{dP}{dt} = c_0 N P - e P

All parameters in this model are positive. This model was introduced by
V. Volterra in 1926 to describe population of fish. In 1920 A. J. Lotka
considered a similar equation to describe kinetics of some chemical
reactions. Therefore this model is called the Lotka-Volterra one. There
are 4 parameters. Haw many relevant parameters are in this model? To
answer this questions we have tp transform the set of two equations to
the dimensionles form. We introduce the following new resclaed variables
for populations: b

.. math:: x=\frac{c_0}{e} N, \quad y =\frac{b_0}{a} P

and dimensionless time (similarly as in the Verhulst model):

.. math:: \tau = a t

In the new variables the Lotka-Volterra set of equations is transformed
to the form

.. math:: \dot x= x- x y

.. math:: \dot y = \alpha (xy-y)

We note that only 1 relevant parameter occurs, i.e.,
:math:`\alpha = e/a \gt 0`. It is the ratio of the death rate of
predators :math:`e` to the birth rate of prey :math:`a`. The scaling
procedure allowed to eliminate irrelevant parameters of the model. There
is only one relevant parameter :math:`\alpha`. In consequence, solutions
of the Lotka-Volterra system depens on this parameter and initial
conditions :math:`[x(0), y(0)]`.

Stationary states of the system
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Stationary states of the system are determined by a set of 2 algebraic
equations:

.. math:: f(x, y) = x- x y =0,  \quad g(x,y) = \alpha (xy - y) =0,

Hence we obtain two pairs of states:

.. math:: (x_1=0, y_1=0) \quad \mbox{or} \quad (x_2=1, y_2 =1)

Stability of the stationary states
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A. In the first step we have to calculate the Jacobi matrix:

.. math::

   \begin{aligned}
   J = \begin{bmatrix}\frac{ \partial f}{\partial x}&  \frac{\partial f}{\partial y}\\ \frac{\partial g}{\partial x}&  \frac{\partial g}{\partial y}  \end{bmatrix}
   \end{aligned}

B. Next, we calculate it for the stationary points:

.. math::

   \begin{aligned}
   J_1= J(0, 0) = \begin{bmatrix}1& 0\\ 0& -\alpha \end{bmatrix}, \quad \quad  J_2= J(1, 1) = \begin{bmatrix}0& -1\\ \alpha& 0 \end{bmatrix}
   \end{aligned}

C. We have to calculate the eigenvalues of the Jacobi matrix
   :math:`|J-\lambda I|=0`:

C1. For :math:`(0, 0)` we get:

:math:`\lambda_{01} = 1,\quad \lambda_{02} =- \alpha`.

This state is unstable because one of the eigenvalues is positive
:math:`\lambda_{01} \gt 0`. An arbitrary small perturbation causes the
escape from this state.

C2. For :math:`(1, 1)` we get:

:math:`\lambda_{11} = i \sqrt{\alpha}, \quad \lambda_{12} = -i\sqrt{\alpha}`.

Two eigenvalues are imaginary. Therefore this state is stable but not
asymptotically stable. An arbitrary small perturbation causes the
creation of a new time-dependent asymptotic state which is in the
vicinity of :math:`(1, 1)` but does not tends to :math:`(1, 1)`.

Phase curves
~~~~~~~~~~~~

We will obtain the phase trajectories or phase curves, i.e. the curves
on the plane :math:`(x, y)`. The phase curves are given by the
parametric relation :math:`(x(t), y(t))`. To get its form, we devide the
second equation by the first equation in the set of two Lotka-Volterra
equations. As a result, one has:

.. math:: \frac{dy}{dx}= \frac{\alpha y (x-1)}{x(1-y)}

It is a differential equation of the first order. It can be solved by
the method of variables separation:

.. math:: \left(\frac{1}{y} - 1\right) \; dy = \alpha \left(1-\frac{1}{x}\right)\; dx

The integration of both sides of this equation yields:

.. math:: \mbox{ln} y -y = \alpha (x- \mbox{ln} x) - H_0

where :math:`H_0` is the integration constant. Its value is determined
by initial conditions :math:`(x(0), y(0)`. The minimal value is for the
initial conditions :math:`(x(0)=1, y(0)=1)`> we insert these value to
the above equation and get :math:`H_0 = 1+\alpha`. 
The explicit dependence of the integration constant on initial condition reads:

.. math::

    H_0 = \alpha x_{0} - \alpha \log\left(x_{0}\right) + y_{0} -  
      \log\left(y_{0}\right)

In a figure we present few phase curves for selected  :math:`H_0`  corresponding to  different
initial conditions shown as red dot. . Because the relation between :math:`y` and
:math:`x` is an implicit equation its graphical realization can be
obtained by using of SAGE in the following way:


.. figure:: figs/lotka_phase.png
   :scale: 100
   :align: center
   
   Phase curves of the Lotka-Volterra system. Red dots denote initial
   condition. Integration constant
   :math:`H_0=2.31,2.61,3.21,3.92,4.70`.

.. admonition:: Experiment with Sage!

    Investigate how parameters: initial condition :math:`x_0,y_0` and
    :math:`\alpha` change phase curves of the Lotka-Volterra system.
    
.. sagecellserver::
    :linked: false
    
    var('x z a x0 y0')
    phase_curve = -z + log(z) == a*x - a*x0 - a*log(x) + a*log(x0) - y0 + log(y0)
    @interact
    def _(a_=slider(1e-2,2,0.1,default=1.0),
          x0_=slider(1e-3,4,0.04,default=1),
          y0_=slider(1e-3,5,0.04,default=1.2)):
        p = implicit_plot(phase_curve.subs(a==a_,x0==x0_,y0==y0_),(x,0,5),(z,0,5))
        p += point((x0_,y0_),color='red',size=15,legend_label='ic')
        p += point( (1,1),color='green',size=20,legend_label='fix point')
        p.show(figsize=4)



First, we note that the phase curves are closed. It means that the
solutions are periodic (oscillatory) functions of time. Secondly, the
increase of :math:`H_0` causes the increase of amplitude of
oscillations. Below we demonstrate it solving numerically the set of
Lotka-Volterra equations.

Time evolution in Lotka-Volterra systems
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The time dependence of :math:`x(t)` and :math:`y(t)` can easily be
obtained using the SAGE:



.. figure:: figs/lotka_voltera_t.png
   :alt: image
   :figclass: align-center

   Time evolution in Lotka-Volterra system



Let us note that maxima of :math:`y(t)` (population of predators) are
delayed to maxima of :math:`x(t)` (population of prey). It seems to be
obvious: if predators have much food their birth rate grows but in turn
it leads to the decrease of the prey number. In consequence the access
to food is limited for predators. It causes the lower birth rate for
predators and larger growth rate for prey. In turn, food resorces for
predators are greater and their growth rate increases. The cycle starts
to repeat.

   
 

What is the relation between :math:`H_0` and the period of oscillations?
Below we show the influence of initial conditions (i.e. :math:`H_0`) on
the oscillations period. We can plot several timeseries with Sage and draw some conclusions. 



.. admonition:: Experiment with Sage!

    Investigate how the initial condition (i.e. integration constant)  change phase the frequency of oscillations.
    
.. sagecellserver::
    :linked: false    
    
    a_ = 1.0
    y0_ = 1.
    T = srange(0,31,0.2)
    var('x a y', domain='real') 
    rhs =  vector([x-x*y, a*(x*y-y)])
    @interact
    def plot_time_x0(x0_=slider(1.01,6,0.1,default=2.)):
        sol = desolve_odeint(rhs.subs([a==a_]), [x0_, y0_],T,[x,y])
        p =  line( zip(T,sol[:,0]),color='green',ymin=0,ymax=6,legend_label='prey')
        p += line( zip(T,sol[:,1]),color='black',ymin=0,ymax=6,legend_label='predator')
        p.show(figsize=(8,3))
   

However, it is better to determine the period numerically from the solution and 

.. figure:: figs/Lotka_T_x0.png
   :alt: image
   :figclass: align-center

   The dependence of oscillation period on initial condition aor a fiven dimensionless paramter.



We conclude that if the phase curve is boarder i.e. :math:`H_0`
increases, then amplitude and the oscillations period is growssmaller
as well.



More realistic: the May model
-----------------------------

In the Lotka-Volterra model there is one stable (but not asymptotically)
stationary state. When at the intial time :math:`(x(0)=1, y(0)=1)` then
at any time :math:`x(t)=1` and :math:`y(t)=1` is a solution of the
Lotka-Volterra equations. The small perturbations destroy this state and
small oscillations appear. Frequently another behavior is observed: If
the system is perturbed from sthe stationary state it returns to the
previous state. Then we say that the system is structurally stable. This
feature is absent in the Lotka-Volterra system. We remind that this
system is a modification of the 2-dimenional Malthus model:

.. math:: \frac{dN}{dt} = a N - b N

.. math:: \frac{dP}{dt} = c P - e P

in which the birth and death processes are modeled in the simplest way.
From our experience with other models presented hitherto we can modify
the above model in the following way:

(A) In the equation for :math:`N` we add the part from the Verhulst
    model and add saturation effects from predations like in the Ludwig
    model with the Hill function:

.. math:: a=r\left(1-\frac{N}{K}\right), \quad \quad bN = b_0 \,\frac{N}{D+N} \;P

(B) In the equation for :math:`P` we include the Verhulst term:

.. math:: c  = c_0 \left(1-\frac{P}{K_0} \right)

Therefore in the second equation we obtain

.. math:: c P - e P  = c_0 \left(1-\frac{P}{K_0} \right)\;P - e P = (c_0 - e) P - c_0 \frac{P^2}{K_0} = s P \left(1- \frac{P}{K_1} \right)

We assume that :math:`s=c_0-e \gt 0`. The re-scaled parameter
:math:`K_1 = K_0 (1-e/c_0).`

The parameter :math:`K_1` modeling the carrying capacity for predators
is proportional to a number of prey :math:`K_1=h_0 N` (:math:`h_0 \gt 0`
is a proportional constant). Finally we get

.. math:: c = s \left(1- h \frac{P}{N}\right)

where the new parameter :math:`h=1/h_0`.

Taking into account the above considerations we arrive at the following
set of equations ( (R. May, Models for two interacting populations, in
Theoretical Ecology. Principles and Applications, 2nd edition (ed. R.
May), 1981, 78-104).

.. math:: \frac{dN}{dt} = r \left(1-\frac{N}{K}\right) \; N- b_0 \frac{N}{D+N} \; P

.. math:: \frac{dP}{dt} = s\left(1-h\frac{P}{N}\right)\; P

There are 6 parameters: :math:`r, K, b_0, D, s, h`. All parameters are
positive. How many relevant parameters are in this model? Again, to
answer this question we have to transform the set of equations to the
dimensionless form. How to do this? We have experience with previous
models and therefore we define new variables:

.. math:: x= \frac{N}{K}

We insert :math:`N=K x` to the expression for :math:`P`. We see that the
second variable can be scaled as:

.. math:: y= h\frac{P}{K}

Then we obtain:

.. math:: \frac{dx}{d\tau} = (1-x)\, x - \alpha  \frac{x y}{d+x}

.. math:: \frac{dy}{d\tau} = \beta \left(1- \frac{y}{x}\right) y

where we have defined the following dimensionless parameters:

.. math:: \tau = r t, \quad \alpha = \frac{b_0}{h r}, \quad d = \frac{D}{K} , \quad \beta = \frac{s}{r}

This scaling procedure leads to a set of two differential equations with
only three parameters. The dimensionless time is scaled to the
reproducing rate :math:`r` of prey. The parameter :math:`\beta` is the
relation of the reproducing rate of predators :math:`s` to the
reproducing rate of prey :math:`r`. If :math:`\beta \lt 1` then the
reproducting tempo of predators is smaller than prey and therefore the
prey population can survive. On the other hand, f :math:`\beta \gt 1`
then the reproducting tempo of predators is greater than for prey and
therefore the prey population can become extinct (can fail to survive).
But because the set of two equations is nonlinear, such simplified
considerations cannot be fully true. We have to use precise mathematical
methods to check this.

Stationary states
~~~~~~~~~~~~~~~~~

Stationary states are determined by a set of two algebraic equations:

.. math:: (1-x)\, x - \alpha  \frac{x y}{d+x} = 0

.. math:: \beta \left(1- \frac{y}{x}\right) y = 0

One stationary state can easily be found:

.. math:: x_1=1, \quad y_1 =0

In theis state there are no predators and the state of prey is the same
as in the Verhulst system. We should check whether this stse is stable.

From the second equation we find that :math:`y=x` solves this equation.
We put it in the first equation and then the other stationary states are
determined by the equations:

.. math:: y=x , \quad \quad  (1-x)   - \alpha  \frac{ y}{d+x} = 0

From the second equation we obtain the condition:

.. math:: x^2 + (\alpha + d -1) x -d =0

It is a trinomial square and we take into account only non-negative
solutions of this equation, :math:`x \ge 0`. Discriminant is always
positive, namely,

.. math:: \Delta = (\alpha + d -1)^2 + 4d \gt  0

So, the second stationary state is

.. math:: x_2=  y_2 = \frac{1}{2} \left[- (\alpha + d -1) + \sqrt{\Delta}\right]

Let us note that this state does not depend on the parameter
:math:`\beta`, i.e. on the birth rate of prey and predators.

Stability of stationary states
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A. In the first step, we calculate the Jacobi matrix:

.. math::

   \begin{aligned}
   \quad \quad \quad  J = \begin{bmatrix}\frac{ \partial  f}{\partial x}&  \frac{\partial  f}{\partial y}\\ \frac{\partial  g}{\partial x}&  \frac{\partial  g}{\partial y}  \end{bmatrix}  = \begin{bmatrix}1-2x-\alpha y \frac{d}{(x+d)^2}&  -\alpha \frac{x}{x+d} \\ \frac{\beta y^2}{x^2}&  \beta - \frac{2\beta y}{x}  \end{bmatrix}
   \end{aligned}

B. In the second step, we determine the eigenvalues of the Jacobi matrix
:math:`|J -\lambda I|=0`:

.. raw:: html

   <!-- -->

(a) For the stationary state :math:`(1, 0)` one gets:

.. math::

   \begin{aligned}
   \quad \quad \quad  J(1, 0)  =  \begin{bmatrix}-1&  -  \frac{\alpha}{1+d} \\ 0&  \beta \end{bmatrix}
   \end{aligned}

and the eigenvalues are:
:math:`\lambda_{1} = -1, \quad \lambda_{2} = \beta > 0`. So, this state
is not stable because one eigenvalue is positive,
:math:`\lambda_{2} \gt 0`. A small perturbation will displace the system
from this state.

(b) For the second stationary state the problem of stability is more
    complicated because the Jacobi matrix takes the form

.. math::

   \begin{aligned}
   \quad \quad \quad  J(x_2, y_2)  =  \begin{bmatrix}x_2\left[ \frac{\alpha x_2}{(x_2+d)^2} -1\right]&  -  \frac{\alpha x_2}{x_2+d} \\ \beta &  -\beta \end{bmatrix}
   \end{aligned}

We used the equation for the stationary state to transform the term
:math:`J_{11}` to the form as in this matrix. One can try to determine
the eigenvalues of this matrix. But it is not good way. What we want to
know is the sign of a real part (positive or negative) of both
eigenvalues :math:`(\lambda_1, \lambda_2)`. Because this matrix is
:math:`2 \times 2`, we get a trinomial square for :math:`\lambda`. The
conditions for its negative part reads:

.. math:: \lambda_1 + \lambda_2 \lt 0  \quad \mbox{and} \quad \lambda_1 \; \lambda_2 \gt  0, \quad \quad \mbox{it means that} \quad \mbox{Tr} \, J \lt  0, \quad \quad \mbox{det} \,J \gt  0

.. admonition:: Exercise

    Show that for arbitrary (positive) values of parameters
    :math:`\alpha, \beta, d`, the second condition
    :math:`\mbox{det} \,J \gt 0` is always fulfiled.

The first condition for the stability of the state :math:`(x_2, y_2)`
takes the form:

.. math:: b \gt  x_2\left[ \frac{\alpha x_2}{(x_1+d)^2} -1\right] = \phi (\alpha, d)

Because :math:`x_2` depends on 2 parameters :math:`\alpha` and
:math:`d`, the right-hand side defines the surface in the 3-dimensional
space. This surface is a boundary between two qualitatively different behaviours of the system:

  - below the surface the system has a limit cycle
  - above the urface the system has a fixpoint (see figure)



.. figure:: figs/May_parameters3d.png
   :alt: image
   :figclass: align-center

   The surface in the parameters space :math:`(\alpha,d,\beta)`. Below
   this surface the system has a limit cycle and above it a fixpoint.



.. raw:: html

    <iframe src="_static/May_k3d.html" height="500" width="100%"></iframe>
   


Time evolution of the system
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We can analyze the system for particular choice of parameters. There
are two important examples:


**Solutions which tend to the limit cycle:**

If once chooses the parameters :math:`\alpha = 1,\; \beta =t 0.1,\; d
= 0.1 0` then the system has a unstable fix point inside the first
quadrant, at
:math:`x_0=y_0=\newcommand{\Bold}[1]{\mathbf{#1}}\frac{1}{20} \,
\sqrt{41} - \frac{1}{20}`. Both eigenvalues of Jacobian in this posit
have positive real parts, thus the point is unstable.  On the other
hand the inspection of the vector field indicates that the flow in the
phase space is transporting into the :math:`(0,1)\times(0,1)`
region. It suggests that the system can have at least limit cycle. 

.. figure:: figs/May_limit_cycle.png
   :alt: image
   :figclass: align-center

   The phase portrait of a system and the location of the
   :math:`\mathrm{Tr}J` and :math:`\det J` respective to critical
   curve.

Alternatively, one can figure out the stablity of the fix point from
the sign of trace and determinant of the Jacobian in that point. 


.. admonition:: Experiment with Sage!

   Check the sign of trace and determinant of the Jacobian of the fix
   point for parameters :math:`\alpha = 1,\; \beta =t 0.1,\; d=
   0.1`. Calculate eigenvalues and compare if the same conclusions on
   the stablility of the fix point can be drawn. Use:

     - :code:`J.trace()`
     - :code:`J.det()`
     - :code:`J.eigenvalues()`

         
.. sagecellserver::

   var('a,d,b,x,y,t')
   ode_lotka = vector([x*(1-x)-(a*x*y)/(x+d),b*y*(1-y/x)]);
   p = {a:1.0, d:0.1, b:0.1}
   sol = solve(list(ode_lotka.subs(p)),[x,y])[4]
   J = jacobian(ode_lotka.subs(p),[x,y]).subs(sol).n()
   show(J)


.. admonition:: Experiment with Sage!

   Draw time solution to the system for parameters
   point :math:`\alpha = 1,\; \beta =0.1,\; d= 0.1`. 



.. sagecellserver::

   var('a,d,b,x,y,t')
   ode_lotka = vector([x*(1-x)-(a*x*y)/(x+d),b*y*(1-y/x)]);
   p = {a:1.0, d:0.1, b:0.1}
   T = srange(0,250,0.4)
   sol = desolve_odeint(ode_lotka.subs(p),[0.4,0.2],T,[x,y])
   p =  line( zip(T,sol[:,0]),color='green',ymin=0,ymax=1,legend_label='prey')
   p += line( zip(T,sol[:,1]),color='black',ymin=0,ymax=1,legend_label='predator')
   show(p,figsize=(10,3))

   

**Solutions which tend to the stable spiral**

If once chooses the parameters :math:`\alpha = 1,\; \beta =t 0.1,\; d
= 1.` then the system has a unstable fix point inside the first
quadrant, at
:math:`x_0=y_0=\newcommand{\Bold}[1]{\mathbf{#1}}\frac{1}{20} \,
\sqrt{41} - \frac{1}{20}`. Both eigenvalues of Jacobian in this posit
have positive real parts, thus the point is unstable.  On the other
hand the inspection of the vector field indicates that the flow in the
phase space is transporting into the :math:`(0,1)\times(0,1)`
region. It suggests that the system can have at least limit cycle. 


.. figure:: figs/May_stable_node.png
   :alt: image
   :figclass: align-center

   The phase portrait of a system and the location of the
   :math:`\mathrm{Tr}J` and :math:`\det J` respective to critical
   curve.

 
.. admonition:: Experiment with Sage!

   Draw time solution to the system for parameters
   point :math:`\alpha = 1,\; \beta =0.1,\; d= 1`. 

   

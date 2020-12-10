Introduction to the kinetics of chemical reactions
==================================================

| Kinetics deals with the prediction of time-changes of concentrations
  of substracts and products during chemical reactions, analysis of
  rates , influence of various elements on the rate of reactions, and so
  on.
| In chemical reactions, one can observe the change of one or several
  substances (substrats, reactants) into one or several other substances
  (products). In modeling of kinetics of reactions one has to construct
  differential equations for change of concetrations of reaction
  components (compounds). The construction of evolution equations is
  based on the Law of Mass Action:

(i)  the rate of a chemical reaction depends on the product of
     concentrations of the reactants

(ii) when a chemical reaction reaches equilibrium, the concentrations of
     the chemicals involved bear a constant relation to each other,
     which is described by an equilibrium constant.

It is also called **the law of Guldberg and Waage** - introduced in 1864
by Norwegian chemist and mathematician, respectively.

It is a fundamental law for chemical kinetics. Based on this, the
Swedish chemist Svante Arrhenius deduced a formula for the effect of
temperature on the reaction rate constant. The Law of Mass Action
describes how the velocity of a reaction depends on the molecular
concentrations of the reactants and states that when a chemical reaction
reaches equilibrium, the concentrations of the chemicals involved bear a
constant relation to each other, which is described by an equilibrium
constant.

How to construct equations for kinetics of chemical reactions? Let us
note that during the reaction, some substances disappear and some
substances appear. It resembles the birth and death process known in
population dynamics. Therefore we can use methods we have learned
previously. To show it, let us consider the reaction:

.. math:: A  + X \overset{ k_1} {\underset {k_2} \longleftrightarrow}  B

There are two molecules, :math:`A` and :math:`X`, which associate with
the rate :math:`k_1` forming the molecule :math:`B`. The molecule
:math:`B` can dissociate with the rate :math:`k_2` into two molecules
:math:`A` and :math:`X`. We denote the concentrations of substances by
small letters:

.. math:: [A]=a, \quad [X]=x, \quad [B]=b

where i.e. :math:`[A]` denotes concentration of the molecules :math:`A`.
In the population dynamics, it correponds to the function
:math:`N=N(t)`. The rate of change of some function is determined by its
derivative. We remind that:

(i)  if the function increases its derivative is positive

(ii) if the function decreases its derivative is negative.

In this way, the concentration change of :math:`A` is characterized by
the derivative:

.. math:: \frac{d a}{dt}

According to the Law of Mass Action, it is proportional to the product
of concentrations of substances participated in the reaction. If the
concentration of a given substance grows then the product is with the
sign :math:`"+"` and if it decreases then it is with the sign
:math:`"-"`. Accordingly,

.. math:: \frac{d a}{dt} = -k_1 a x + k_2 b, \quad \quad \frac{d x}{dt} = -k_1 a x + k_2 b, \quad \quad \frac{d b}{dt} = k_1 a x  - k_2 b

From the form of these equations we note that in the left hand sides the
unit is :math:`[1/second]` because of the derivative with respect to
time :math:`t`. In the right hand sides, the rates must have the same
unit :math:`[1/second]`.

Let us consider in detail the first equation. The change of
concentration of :math:`A` is caused by two processes:

A1. In the left side, for the forward reaction :math:`A+X`, the
substance :math:`A` dissapears with the rate :math:`k_1`. Because there
are two substances :math:`A` and :math:`X` therefore there is a product
:math:`a \cdot x` of two cencentractions :math:`a` and :math:`x` which
is multiplied by the rate :math:`k_1`. The expression is with the sign
:math:`"-"` because :math:`A` disappears. Finally, the derivative is
negative, i.e. we write:

.. math:: -k_1 a x

A2. In the rigt side, for the backward reaction, there is only one
substance :math:`B` which dissociates into two molecules :math:`A` and
:math:`X`. The new molecule :math:`A` appears with the rate :math:`k_2`.
Because :math:`A` is created, the sign is :math:`"+"` and we write:

.. math:: k_2 b

In a similar way, we obtain two other equations.

Autocatalytic reactions
=======================

In autocatalytic reaction one of the substrat functions as a catalyst
and is also a product. In other words, autocatalytic reactions are those
in which at least one of the products is a reactant. Autocatalysis plays
an important role in many living processes, e.g. in transcription of
rRNA.

Example 1
~~~~~~~~~

A simple example of such a reaction is:

.. math:: A  + Y \overset{ k_1} {\underset {k_2} \longleftrightarrow}  2Y

or equivalently

.. math:: A  + Y \overset{ k_1} {\underset {k_2} \longleftrightarrow}  Y+Y

with reaction rates :math:`k_1` i :math:`k_2`. Let us assume that the
concentration :math:`a` of the substance :math:`A` is fixed at the
constant value. It means that :math:`da/dt=0`. In turn, the
concentration :math:`y` of the reactant :math:`Y` changes in time. Under
these conditions the evolution equation reads

.. math:: \frac{dy}{dt}= k_1 a \cdot  y - k_2 y \cdot y = k_1 a y - k_2 y^2

Lat us attention that there is a product :math:`y \cdot y` because in
the backward reaction we have two “substances” :math:`Y+Y`.

We rewrite it to the form

.. math:: \frac{dy}{dt}= k_1 a  y [1 - \frac{k_2}{k_1 a}  y]

In this equation, all parameters are positive. Note that it is similar
to the Verhulst equation. Indeed, if we introduce new variables:

.. math:: x= \frac{k_2}{k_1 a}  y, \quad \quad s= k_1 a t

then in these new variables the differential equation transforms to the
form:

.. math:: \frac{dx}{ds}=  x [1 - x], \quad x=x(s), \quad  x(0) = x_0

It is exactly the rescaled Verhulst equation! Therefore it has exacly
the same properties as the Verhulst equation.



.. admonition::   Experiment with Sage!

   Scaling can be done wit the help of Sage. The most straightforward
   possibility is to define derivative as independent symbolic
   variables and scale them appropriately.
   

.. sagecellserver::

   var('k1,k2,a,y,x')
   var('dy_dt',latex_name=r'\frac{dy}{dt}')
   var('dx_dt',latex_name=r'\frac{dx}{dt}')

   unscaled = dy_dt==k1*a*y*(1-k2/(k1*a)*y)
   scaled = unscaled.subs([y==k1*a/k2*x,dy_dt==(k1*a)^2/k2*dx_dt]).solve(dx_dt)[0]
   show(scaled)
                  

       

   
   
.. figure:: figs/autocatalytic_ex1.png
   :scale: 50%
   :align: center
   
   Time evolution of autocatalytic model for different initial conditions.



In the above figure, we depict time evolution of the rescaled
concentration :math:`x = x(s)` for three selected initial conditions. As
it follows from the analysisi for the Verhulst model, there is one
stable stationary state d :math:`x=1` and one unstable state
:math:`x=0`. The shape of :math:`x(s)` for the initial concentration
:math:`x_0=0.01` is sigmoid. We observe that the speed of the reaction
increases with time and the concentration of the product increases and
next it decreases because of smaller concentration of substrat. For long
time, there is a saturation in concentration of :math:`Y`.

.. admonition::   Experiment with Sage!

   Interact with the code to see how does the concentration behaviour
   depends on initial condition:

.. sagecellserver::

   var('x0, t') 
   f(t,x0) = x0*e^t/(x0*(e^t - 1) + 1)
   @interact
   def _(x0_=slider(0.01,2,0.01)):
       p = plot(f(t,x0_),(t,0,10),color='green',\
                legend_label="$x_0=%0.3f$"%x0_,\
                gridlines=[[],[1]])
       show(p,figsize=5,ymin=0,ymax=2.0)




Example 2
~~~~~~~~~

Let us consider the second example of the autocatalytic reaction:

.. math:: A  + Y \overset{ k_1} {\underset {k_2} \longleftrightarrow}  2Y

.. math:: B  + Y \overset{ k_3} { \rightarrow} C

We assume that the concentrations of substances :math:`A` and :math:`B`
is kept constant and it means that :math:`da/dt = db/dt = 0`. The
concentration of :math:`Y` changes according to the equation:

.. math:: \frac{dy}{dt} = k_1  a  y -k_2  y  y  - k_3  b  y  = r  y - k_2  y^2

where

.. math:: r = k_1 a - k_3 b

The form of this equation is similar to the equation for the previous
autocatalytic reaction. However, one can note an essential difference,
namely, the parameter :math:`r` can take positive or negative values!

(a) If

.. math:: k_1 a  \gt  k_3 b \quad \quad \mbox{i.e.} \quad \quad r \gt 0

then it is the same case as for the provious reaction (the Verhulst
model).

(b) If

.. math::

   k_1 a  \lt   k_3 b
   \quad \quad \mbox{i.e. } \quad \quad r \lt 0

then the parameter :math:`r` takes negative values and we can rewrite
the differential equation as:

.. math::
   :label: auto_ex2
           
   \frac{dy}{dt}  =  - r_0 y - k_2 y^2 = f(y), \quad \quad r_0 =
   |k_1 a - k_3 b|
   \gt  0, \quad k_2  \gt  0

This equation exhibits a radically different solution than the Verhulst
one. There is only one stationary state :math:`f(y) = 0` and hence
:math:`y=0`. In order to determine its stability, we calculate the
derivative :math:`f'(y) = -r_0 -2k_2 y` and for the state :math:`y=0`
one gets :math:`\lambda = f'(0) = -r_0 < 0`. It follows that :math:`y=0`
is an asymptotically stable stationary state. So, the substance
dissapers and the reason is the relation (b): the rate of the first
reaction is too slow in order to compensate decay of :math:`Y` caused by
the second reaction.

Without loosing generality we can assume that in eq :eq:`auto_ex2`
:math:`k_2=1`. Then we can solve the ODE:

.. math::
   :label: auto_ex2_r
   
   \frac{dy}{dt}  =   r y - y^2

   

.. admonition::   Experiment with Sage!

   Use Sage to solve analytically ODE :eq:`auto_ex2_r`
   

.. sagecellserver::
      
      var('x0,r,t')
      X = function('X')(t)

      sol = desolve(X.diff(t)==X*(r-X),X,ics=[0,x0],ivar=t)
      show( sol.simplify_log().solve(X(t=t))[0])

      
This ODE has a solution for initial condition :math:`y(0)=y_0`:


.. math::


   y\left(t\right) = \frac{r y_{0} e^{r t}}{y_{0} {\left(e^{r t} - 1\right)} + r}

   


.. admonition::   Experiment with Sage!

   
   Now we can investigate how solutions for different initial
   concentrations depend on the parameter :math:`r\in(-1,1)`.

       - start with :math:`r=1` - there will be a Vehulst solution again.
       - decrease  :math:`r` to some positive value, the stable solution will change but still will be positive.
       - go  with :math:`r` below zero - the only stable state will be :math:`x=0`


.. sagecellserver::

   
   var('x0, t') 
   f(t,x0,r) = r*x0*e^(r*t)/(x0*(e^(r*t) - 1) + r)
   @interact
   def _(r_=slider(-1,1,0.1,default=1.0)):
       if r_==0:
           r_ += 1e-5
       if r_>0:
           g = r_
       else:
           g = 0
       p = sum( plot(f(t,x0_,r_),(t,0,9),color='green',gridlines=[[],[g]]) for x0_ in srange(0,2,0.1))
       show(p,figsize=5,ymin=0,ymax=2.0,xmax=10)



Enzyme reactions
================

Enzymes are catalysts and increase the speed of a chemical reaction
without themselves undergoing any permanent chemical change. They are
neither used up in the reaction nor do they appear as reaction products.
Enzymes are responsible for bringing about almost all of the chemical
reactions in living organisms. Without enzymes, these reactions take
place at a rate far too slow for the pace of metabolism. Catalysis is
the acceleration of a chemical reaction by some substance which itself
undergoes no permanent chemical change.

The basic enzymatic reaction is

.. math:: E + S \, \overset{k_f}{\underset{k_r}\Longleftrightarrow} \, ES \, \overset{k_3} {\Longrightarrow} \, E + P

where :math:`E` represents the enzyme catalyzing the reaction, :math:`S`
is the substrate being changed, :math:`ES` is the complex and :math:`P`
the product of the reaction.

In 1913, the German biochemist Leonor Michaelis and Canadian physician
Maud Menten proposed this model and now it is a basic model of the
enzyme kinetics. Applying the Law of Mass Action one obtains the
following set of four equations:

.. math::
   :label: MM_kin
          
   \begin{aligned}
   \begin{array}{cccccccc} \displaystyle\frac{ds}{dt} &  = &  - &  k_f  e  s &  + &  k_r  c &  \\
    \displaystyle\frac{de}{dt} &  = &  - &  k_f  e  s &  + &  k_r  c &  + &  k_3  c \\
    \displaystyle\frac{dc}{dt} &  = &  + &  k_f  e  s  &  - &  k_r  c &  - &  k_3  c \\
    \displaystyle\frac{dp}{dt} &  = &  &  &  + &  k_3 c
    \end{array}
   \end{aligned}

where the small leters denote concentrations of the corresponding
substances :math:`s=s(t), e=e(t), p=p(t)` and :math:`c=c(t)` is the
concentration of the comples :math:`ES`.

Let us impose initial conditions:

.. math:: s(0)= s_0, \quad \quad e(0)=e_0, \quad \quad c(0)=0, \quad \quad p(0)=0

These conditions should be obvious: at some initial time, there is
non-zero concentration of the substrat :math:`S` and enzyme :math:`E`.
There is no complex :math:`ES` and there is no product :math:`P`. They
appear in the later time as a result of the reaction.

Below we present a computer program which solves this set of 4
differential equations. Without a computer, it would be difficult to
visualise the solutions.

We can use Sage to solve numerically the system :eq:`MM_min`

.. code:: ipython2

    var('s e c p') ## it is numerical solution of the above set of 4 differential equations 
    kf,kr,k3 = 5,0.5,1 
    T = srange(0,5,0.01)
    sol = desolve_odeint(\
     vector([-kf*e*s+kr*c,-kf*e*s+kr*c+k3*c, kf*e*s-kr*c-k3*c,k3*c]),\
     [1,0.8,0,0],T,[s,e,c,p])



.. figure:: figs/MM_kinetics.png
   :scale: 50%
   :align: center
   
   Time evolution of the substrate, the enzyme, the complex [ES], and the product.


   
Theoretical analysis a’la Michaelis-Menten
===========================================

The set of 4 non-linear differential equations seems to be very
complicated. However, its specific structure allows to perform analysis
to obtain relevant information of the reaction

(1) Let us note that the last differential equation can be integrated:

.. math:: p(t) = p(0) + k_3 \int_{0}^t c(\tau) d\tau =  k_3 \int_{ 0}^t c(\tau) d\tau

If we know time evolution of the complex :math:`ES`, i.e. :math:`c(t)`,
from this equation we know how the concentration :math:`p(t)` of the
product :math:`P` evolves.

(2) Enzyme is a catalyst and therefore its total concentration is
    constant in time. It is seen when we add both sides of the second
    and third eqautions:

.. math:: \frac{de}{dt} + \frac{dc}{dt} =0, \quad \quad \mbox{hence it follows that} \quad \quad e(t) + c(t) = const. = e(0) + c(0) = e_0

From this relation we get:

.. math:: e(t) = e_0 - c(t)

(3) From the above considerations in (1) and (2) it follows that it is
    sufficient to consider only two eqautions:

.. math::

   \begin{aligned}
   \begin{array}{cccccccc} \displaystyle\frac{ds}{dt} &  = &  - &  k_f  s   [e_0 - c]  &  + &  k_r  c &\\
    \displaystyle\frac{dc}{dt} &  = &  +  &  k_f  s [e_0-c]   &  - & ( k_r +  k_3) c   \end{array}
   \end{aligned}

Let us now rescale these equations to reduce a number of parameters
:math:`k_f, k_r, k_3, e_0`. We define new variables and rescaled
parameters:

.. math:: x= \frac{s}{s_0}, \quad y=\frac{c}{e_0}, \quad \tau = k_f  e_0  t,  \quad \lambda = \frac{k_3}{k_f  s_0}, \quad K= \frac{k_r +  k_3}{k_f  s_0}, \quad \epsilon =\frac{e_0}{s_0}

In the new variables, the set of two differential equations assumes the
form :

.. math::

   \begin{aligned}
   \begin{array}{cccccccc} \frac{dx}{d\tau} & =&   - x +  (x+K-\lambda)  y, \quad \quad x(0)   =  1 \\ \epsilon  \frac{dy}{d\tau}  & =&  x - (x+K)  y, \quad \quad y(0) = 0   \end{array}
   \end{aligned}

Let us note that :math:`K - \lambda = k_r/k_f s_0 \gt 0`.

The time behavior of the substrat :math:`x(\tau)` and complex
:math:`y(\tau)`, which is presented above as a result of numerical
solution, can also be obtained by heuristic considerations. Let us do
it:

A. For short time :math:`\tau`, the concentration :math:`y(\tau)
   \approx 0` because :math:`y(0)=0`. In turn, :math:`dx/d\tau
   \approx -x \lt 0` because the second term with :math:`y` can be
   neglected. If :math:`dx/d\tau \lt 0` then it means that
   :math:`x(\tau)` decreases from the initial value :math:`x(0)=1`.

B. For small values of :math:`\tau`, the term
   :math:`\epsilon dy/d\tau \approx x \gt 0` because the second term
   (this with :math:`y`) can be neglected. It means that :math:`y(\tau)`
   increases from the initial value :math:`y(0)=0`. The concentration of
   the complex increases as long as the right hand side of the equation
   for :math:`y` is positive. It is zero for such time :math:`\tau_1`
   for which

.. math:: x(\tau_1) - [x(\tau_1) + K] y(\tau_1)=0

or if

.. math:: y(\tau_1) = \frac{x(\tau_1)}{x(\tau_1) + K}

C. For this instant :math:`\tau_1`, the derivative
   :math:`dy/ d \tau =0`. In turn,
   :math:`dx/ d \tau = -\lambda x/[x+K] \lt 0` (we inserted
   :math:`y(\tau_1)` to the first equation for :math:`x`). It means that
   :math:`x(\tau)` decreases and is smaller and smaller approaching zero.
   For time :math:`\tau>\tau_1` the derivative
   of :math:`y` changes the sign, :math:`dy/ d\tau \lt 0`, and the
   function :math:`y(\tau)` starts to decrease to zero. It is seen in
   the equation for :math:`y` :

.. math:: \epsilon \frac{dy}{d\tau} \approx -K y   \lt  0 \quad \mbox{because } \quad x(\tau) \to 0  \quad \mbox{for long time}.

In this way, one can obtain qualitative properties of the system of two
equations for :math:`s(t) \propto x(\tau)` and
:math:`c(t) \propto y(\tau)`. Using the conservation law
:math:`e(t) + c(t) = const. = e(0) + c(0) = e_0`, we can reconstruct
evloution of the enzyme concentration :math:`e(t)`. In turn, the time
dependence of the product can be obtained from the equation

.. math:: p(t) =  k_3 \int_{ 0}^t c(\tau) d\tau

Let us remember about the geometric interpretation of the integral: it
is area between the function :math:`c(t)` and the horizontal axis.
Bacause :math:`c(t) > 0`, this area increases when the upper limit of
integration increases. So, we conclude that the function :math:`p(t)`
increases when :math:`t` increases. Bacuse :math:`c(t)` tends to zero
when :math:`t \to \infty`, the area :math:`p(t)` tends to a constant
value as :math:`t \to \infty`. Summing up, :math:`p(t)` is a
monotonically increasing function from 0 for :math:`t=0` to a constant
value for :math:`t \to \infty`.

The quasi-steady state approximation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It seems that the simplest case for analysis is when the parameter
:math:`\epsilon = e_0/s_0 \lt \lt 1`. Then in the left hand side of the
second equation we can put zero, i.e.,

.. math::

   \begin{aligned}
   \begin{array}{cccccccc}\displaystyle\frac{dx}{d\tau} & =&   - x +   (x+K-\lambda)  y,  \\  0   & =&  x - (x+K)  y   \quad \quad \mbox{hence} \quad \quad  y \approx \frac{x}{x+K} \end{array}
   \end{aligned}

Inserting the expression :math:`y` to the first eqaution we obtain the
equation for :math:`x`, i.e. for substrate:

.. math:: \frac{dx}{d\tau} =  - \frac{\lambda x}{x+K}

Let us not that the right hand side of this equation is always negative.
Therefore :math:`x=x(\tau)` is decreasing function of time. It is fully
in agrement with the exact numerical solution depicted above. From the
mathematical point of view, the used approxamation
:math:`\epsilon = e_0/s_0 \lt \lt 1` belongs to non-trivial problems of
derivative with a small parameter. We leave improved version of analysis
for mathematicans and and we will proceed as non-mathematicians. If
:math:`\epsilon = e_0/s_0 \lt \lt 1` it means that changes of
:math:`y(\tau)` are slow because its derivative is small. In other
words, this degree of freedom is close to the stationary state (which is
approached for :math:`t \to \infty`). This regime is called the
quasi-steady state hypothesis.




.. figure:: figs/MM_steady_state_0.2.png
   :scale: 50%
   :align: center
   :label: MM_ss_1   

   Time evolution of the substrate, the enzyme, the complex [ES], and
   the product. Dashed lines denote the quasi-stationary state
   approximation. The discrepancy is clearly visible (
   :math:`\epsilon=0.2` - at the beginning of the time evolution.


.. figure:: figs/MM_steady_state_0.02.png
   :scale: 50%
   :align: center
   :label: MM_ss_2
           
   Time evolution of the substrate, the enzyme, the complex [ES], and
   the product. Dashed lines denote the quasi-stationary state
   approximation. The discrepancy is small as we have taken
   :math:`\epsilon=0.02`.



         
Excercises
----------

A1. Find statinary state of the system :math:`(x(\tau), y(\tau))` and
thirs stability.

A2. Check numerically for what values of :math:`\epsilon` the
quasi-seady state hypothesis is acceptable.

A3. Evaluate the relation for the initial concentration of enzyme and
substrate for the coretness of quasisteady state approximation.

Rate of the enzymatic reaction
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Finally, let us investigate the rate of formation of the product
:math:`p`. It is determined by the forth equation for the kinetics:

.. math:: \frac{dp}{dt}= k_3 c 

We assume that the concentration :math:`c` of the complex is given
within the steady-state hypothesis:

.. math:: c= e_0 y = e_0 \frac{x}{x+K} = e_0 \frac{s/s_0}{s/s_0 +K}

So, the rate for formation of the product takes the form

.. math:: v= \frac{dp}{dt} = V_{max} \frac{s}{s+K_m}

where

.. math:: V_{max} = k_3 e_0, \quad \quad \quad K_m=\frac{k_r +k_3}{k_f}

The parameter :math:`K_m` is called the Michaelis constant. The
dependence of :math:`v` on :math:`s` is shown below. When
:math:`s \to \infty` the rate :math:`p \to V_{max}`. So, the parametr
:math:`V_{max}` is the maximal rate achieved by the system. Now, let us
calculate the concentration of the substrate :math:`s=s_h` at which the
rate :math:`v` is at half-maximum:

.. math::  \frac{1}{2} V_{max} = V_{max} \frac{s_h}{s_h+K_m} \quad \quad \mbox{hence} \quad \quad s_h = K_m

In this way we can identify the meaning of the Michaelis constant: >
:math:`K_m` is the concentration of substracte :math:`s` at which the
reaction rate :math:`v` takes its half of the maximal value.


.. figure:: figs/MM_Km.png
   :scale: 50%
   :align: center
   
   The rate of production of the product in Michaelis-Menten kinetics
   as a function of a substrate concentration.


On can conclude that given en enzyme concentration there is a
saturation effect, where adding mode substrate will not give better
product growth rate. For parameters as in figures :fig:`MM_ss_1` and
:fig:`MM_ss_2` the production was at 75% of its maximum value at the
beginning of the reaction course, as we has :math:`K_m=0.3` and
initial concentration of the substrate equal to one. However, if we
start with higher concentration of substrate, then it will stay for
relatively long time in the regime of maximum production rate. We
depict this situation in figure below.
   

 .. figure:: figs/MM_steady_state_Vmax_conditions2.png
   :scale: 50%
   :align: center
   
   Enzymatic reaction in conditions of maximum enzyme production. 

   

.. admonition::   Experiment with Sage!

   Below you can find code solving both 4 dimensional kinetic
   equations as well as the quasi-steaty approximation.

                  
.. sagecellserver::
                  
      var('s e c p kf kr k3')
      var('s0,l,K,epsilon,x,y')
      var('e0 t')

      back_scaling  = {K: k3/(kf*s0) + kr/(kf*s0),l:k3/(kf*s0),epsilon:e0/s0,x:s/s0,y:c/e0}
      params1 = {kf:5,kr:0.5,k3:1,s0:1,e0:.05}
      ic = vector([s0,e0,0,0]).subs(params1)

      rhs = [-kf*e*s+kr*c,-kf*e*s+kr*c+k3*c, kf*e*s-kr*c-k3*c, k3*c]
      rhs2_scaled = [(x + K-l)*y - x, 1/epsilon*( -(x + K)*y + x) ]

      steady_rhs = (kf*s0*e0*rhs2_scaled[0]).subs(y==x/(K+x)).full_simplify().subs(back_scaling).simplify()
      K_num = K.subs(back_scaling).subs(params1)

      T = srange(0.,83,0.02)
      sol = desolve_odeint(\
       vector(rhs).subs(params1),\
       ic,T,[s,e,c,p])

      steady_sol = desolve_odeint(steady_rhs.subs(params1),s0.subs(params1),T,s)

      p = line( zip ( T,sol[:,0]) ,figsize=(6,3),legend_label="s (substrate)") 
      p += line( zip ( T,10*sol[:,1]) ,color='red',legend_label="e (enzyme)")
      p += line( zip ( T,10*sol[:,2]) ,color='green',legend_label="c (complex)")
      p += line( zip ( T,sol[:,3]) ,color='black',legend_label="p (product)") 

      p += line( zip ( T,steady_sol) ,linestyle='dashed',legend_label="s - steady state") 
      p += line( zip ( T,10*(e0/s0).subs(params1)*steady_sol/(steady_sol+K_num) ) ,linestyle='dashed',\
                color='green',legend_label="c - steady state") 
      p += plot((k3*e0).subs(params1)*t,(t,0,20),color='gray' ,linestyle='dashed',legend_label="max theoretical production")
      p.set_legend_options(loc='right')
      p.show(title=r'$\epsilon=%0.2f$'%params1[e0])

      


   
   
Excercises
----------

I. There is a sequence of chemical reactions:

.. math:: X \overset{ k_1} {\underset {k_2} \longleftrightarrow}  A, \quad \quad B   \overset{ k_3} { \rightarrow} Y,   \quad \quad 2X + Y    \overset{ k_4} { \rightarrow}3X

B1. Write differential equations for the change of concentrations for
:math:`X` oraz :math:`Y`. Assume that the concentrations of :math:`A`
and :math:`B` are constant.

B2. Write equations in the dimensionless form.

B3. Determine stationary states and their stability.


II. There is a sequence of chemical reactions:

.. math:: A \overset{ k_1} {\rightarrow}  X, \quad  \quad B  + X \overset{ k_2} { \rightarrow} Y + D,   \quad \quad 2X + Y     \overset{ k_3} { \rightarrow}3X,  \quad \quad X      \overset{ k_4} { \rightarrow} E

Assume that the concentrations of :math:`A, B, D` and :math:`E` are
fixed and do not change in time. Do the same as in the previous problem
I.

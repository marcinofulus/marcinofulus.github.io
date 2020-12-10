Continuous models for single species
====================================

Malthus model
-------------

In Nature there are many groups of individuals of various species
occupying a specific area at a specific time. A population is a group
of individuals (all members of a single species) who live together in
the same habitat and are likely to interbreed. Each population has a
unique physical distribution in time and space. It may contain
individuals of different ages and its size (density) is likely to
change over time, growing or shrinking according to the reproductive
success of its members. The study of population dynamics focuses on
these changes – how, when, and why they occur. Understanding of
population dynamics is useful for interpreting survey data, predicting
pest outbreaks, and evaluating the effectiveness of control tactics.
We will present a series of population models, each of which is
applicable to different environmental circumstances. We start with the
simplest models: one population. Next, we can complicate models by
adding influence of various factors from environment.

Mathematical modeling is based on properties of functions and their
derivatives. The quantity that determines the change rate of the
function N(t) is its derivative :math:`\displaystyle\frac{dN(t)}{dt}`. If
:math:`\displaystyle\frac{dN(t)}{dt}> 0`, the function :math:`N(t)` increases if the
argument :math:`t` increases. On contrary, if :math:`\displaystyle\frac{dN(t)}{dt}<0`, the
function :math:`N(t)` decreases if :math:`t`, increases. It is sufficient information to
start the modeling.

The first step of modeling: why the number N(t) of individuals in the
population changes in time? One can consider three primary processes:
birth of the individual, death of somebody or migration: somobdy leaves
the population, somebody comes in. In mathematical language it means
that the rate of changes is determined by three elements:

.. math:: \frac{dN(t)}{dt}= +\text{gain (birth)} - \text{loss (death)}  \pm  \text{migration}

(i)  The left side describes the rate of changes of population :
     :math:`\displaystyle\frac{dN(t)}{dt}`

(ii) the sign + : the growth of population caused by birth of new
     individuals is an increassing function :math:`f(N)` of the number
     :math:`N` of individuals in the population: Much more individuals
     are born in the population of 1 mln individuals than in the
     population of 50 thousands of individuals (it is a rule and in many
     cases it can be accepted but there are cases when it is not a true
     assumption). The simplest function is the linear function:

.. math:: f(N) = a N

where the coefficient :math:`a \gt 0` is the birth rate of the
population.

(iii) the sign - : the loss of population caused by death of individuals
      is an increasing function :math:`g(N)` of :math:`N`: In the
      population 1 mln more individuals pass away than in the population
      of 50 thousands. Again, the simples function is a linear one,

.. math:: g(N) = b N

where the coefficient :math:`b \gt 0` jest the death rate.

At this stage of modleing, we neglect the migration processes. From the
above considerations it follows that the simplest model which describe
time changes in population can take the form

.. math:: \frac{dN(t)}{dt}= a N(t) - b N(t)  = (a-b) N(t) = k N(t), \quad \quad  k=a-b

It is a linear ordinary differential equation of the first order. From
the theory of differential equations we know that the initial condition
has to be imposed:

.. math:: N(0) = N_0

It is a simple differential equation which can be solved by the method
of variable separations:

.. math:: N(t)= N_0  e^{kt}

From this solution one can infer that:

1. if the growth rate is the same as the death rate, i.e., :math:`k=0`
   or :math:`a=b`, then :math:`N(t) = N(0)` and the population is stable
   with fixed number of individuals.
2. if the birth rate is greater than the death rate :math:`k\gt 0` or
   :math:`a \gt b`, then the population grows: :math:`N(t) \gt N(0)`.
3. if the birth rate is less than the death :
   :math:`k\lt 0` czyli :math:`a \lt b`, then the population is smaller
   and smaller and can dissappear: :math:`N(t) \lt N(0)`.

The above model was proposed by Malthus in 1798. The main feature of
this model is exponential growth (for a > b) or exponential decay (for a
< b) of population. There are examples for which this model is quite
good but only in some limited interval of time (e.g. the growth of
bacteria colony under favorable conditions)

Applying Sage for analysis of the Malthus model
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Analytical solution**

In SAGE it is easily to obtain an analytical form of the solution of
this differential equation.


.. admonition:: Experiment with Sage!

	Run the code cell below and obtain  analytical solution of the Mathus model. 


.. sagecellserver::
    :linked: false

    var('t k')
    assume(t>0)
    N = function('N')(t)
    eq = N.diff()== k*N
    sol = desolve(eq,N,ivar = t)
    show(sol)

.. experiment_verhulst:

.. admonition:: Experiment with Sage!

    Run the code cell below and obtain plot solutions of Mathus model for various parameters. 
    The plot depicts the growth, lack of changes and decay of population 
    dependening on value of the parameter k=a-b.
	


.. sagecellserver::
    :linked: false

    var('t k')
    assume(t>0)
    N = function('N')(t)
    eq = N.diff()== k*N
    sol = desolve(eq,N,ivar = t,ics=[0,5.0])

    plot(sol.subs(k==-1),(t,0,3),figsize=(5, 3),legend_label="k=-1")+\
        plot(sol.subs(k==0),(t,0,3),legend_label="k=0",color='red')+\
        plot(sol.subs(k==0.5),(t,0,3),legend_label="k=0.5",color='green')


.. admonition:: Experiment with Sage!

    Rerun the above example with:

        - different positive  the growth rates :math:`k=a-b>0`
        - different negative  the growth rates :math:`k=a-b<0`

    How does the evolution of population behave?




The Verhulst (logistic) model
-----------------------------

Let us assume that in the Malthus model we take into account only birth
process and neglect the death process, i.e. :math:`b=0`. Then the
population grows exponentially:

.. math:: N(t)= N_0 e^{at}

and it is visualized in the above figure for the case :math:`k=a >0`.
Such a fast rate of growth can be observed in some specific systems and
only in a limited interval of time. Generally a rapid growth can lead to
an imbalance in nature. Moreover, food resources are limited in the
finite regions where the population lives. It means that the birth rate
:math:`a` starts to slow down and self-regulation is observed. The first
model which take into account this effect was proposed by Verhulst in
1838. In this model, the coefficient :math:`a` is not fixed but it
depends on a number of individuals :math:`N` in the population:

.. math:: a \to  a(N)

and the evolution equation assumes the form:

.. math:: \frac{dN}{dt} = a(N) \; N, \quad N(0)=N_0

The dependence of the function :math:`a(N)` upon :math:`N` should have
the following feature: If the population increases then the growth rate
should decrease because the more difficult is access to food and the
amount of food available is smaller if :math:`N` grows. Of course there
are many functions which fulfil this property: all decreasing function
of :math:`N`. Verhulst proposed the following function:

.. math:: a(N)= r \left[1- \frac{N}{K}\right]

where :math:`r \gt 0` is a parameter whic has similar interpretation as
the parameter :math:`a` in the Malthus model (it characterizes the
growth rate). The parameter :math:`K \gt 0` characterizes resources of
food and is named carrying capacity of the environment. Let us note that
the constant :math:`K` is in the quotient and :math:`N/K` is
dimensionless. It means that :math:`K=N_s` is a characteristic number of
population. If :math:`N \gt K` then :math:`a(N) \lt 0` and population
decreases. In turn, if :math:`N \lt K` then :math:`a(N) \gt 0` and
population grows.

In what a way K influences of the growth rate? We note that when K
increases (more food) then N/K decrease and in consequence 1-N/K
increase. It means that a(N) increases or the growth rate increases and
the population grows. Hence the conclusion is:

.. note:: 

   When K increases the growth rate increases

From the above consideration we obtain the evolution equation in the
form

.. math:: 

    \frac{dN}{dt} = r \left[1- \frac{N}{K}\right]  N, \quad \quad N(0)=N_0

Thie equation is called the Verhulst equation or the logistic equation.
There are two parameters: r and K. There is the question: how many
relevant parameters are in the Verhuls model. To answer this question we
should scale this equation to the dimensionless form.To this aim, let us
define the relative number of individuals in the population:

.. math:: 

    x= \frac{N}{K}

The dimensionless time is defined as

.. math:: s=r t

In the new variables the Verhulst equation takes the form:

.. math:: 

    \frac{dx}{ds} = f(x) = x[1-x], \quad x = x(s), \quad \quad x(0) = x_0 = \frac{1}{K} N(0)

We see that in this equation, there are no parameteres. We can conclude that:


.. important::
    
 	Relevant properties of the system do not depend on
	values of r oraz K. The dependence is only quantitative, not
	qualitative.


Worked example - stationary states of Verhulst model
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We want to find stationary states of the system and determine their stability.

(i) we have to solve the algebraic equation :math:`f(x) =0`, i.e.
    :math:`x(1-x)=0`,

Hence, we find two stationary states :math:`x_1=0` and :math:`x_2=1`

(ii) to determine their stability we have to calculate the derivative:
     :math:`\lambda = f'(x) = 1- 2 x`

and find the exponent :math:`\lambda_1= f'(x_1) = 1 \gt 0` (i.e. it is
unstable), :math:`\lambda_2= f'(x_2) =-1 \lt 0` (asymptotically stable)

Because there is only one stable stationaryy state :math:`x=1`, all
solutions of the Verhulst equation :math:`x(s)` with the initial
condition :math:`x_0 \gt 0` tends to this state :math:`x=1`.

If the initial condition is :math:`x_0=0` the solution is
:math:`x(s)=0`. Howver, an arbitrary small perturbation throws out the
system from this state and the next the system starts to evlove to the
stable state :math:`x=1`.

The verhulst equation can be solved analytically by the methos of the
variable separation in the following way:

.. math:: 

	\frac{dx}{x(1-x)} = ds  \quad \quad \mbox{or equivalently} \quad \quad \left[ \frac{1}{x}-\frac{1}{x-1}\right] dx = ds

Alternatively we can use Sage to obtain indefinite integral:

.. sagecellserver::
    :linked: false
	
	integrate(1/(x*(x-1)),x).show()
	

Next we integrate both sides:

.. math:: \int_{x_0}^{ x(s)} \left[\frac{1}{x} -\frac{1}{x-1}\right] dx =  \int_0^{ s} ds

The final result is

.. math:: x(s) = \frac{x_0 e^s}{1+ x_0(e^s -1)} = \frac{x_0}{x_0 + e^{-s}(1-x_0)}



If :math:`x_0=0` then we see that :math:`x(s)=0`. If :math:`x_0 \gt 0`
then it is seen that :math:`x(s)` tends to the stationary state
:math:`x_2=1`.

Now, we want to return to the “old” variables :math:`N=N(t)` and time
:math:`t`. We insert :math:`x=N/K` and :math:`s=rt` to the solution for
:math:`x(t)` and obtain

.. math:: N(t) = \frac{K N_0}{N_0 +(K-N_0)e^{-rt}}

The stable state is :math:`x = N/K=1`, i.e., :math:`N=K`. So, :math:`K`
is a characteristic number of individuals which is found in the
stationary state. In the Verhuls model, the evolution is not exponential
but the **saturation effect** is observed: at the fixed carrying
capacity of the environment the population is stable at he value
:math:`K`, i.e. it is equal to the paramtere :math:`K` in the model.
Therefore in many case it seems to be more realistic than the Malthus
model.

In the Figure we depict 3 characteristic solution in dependence on
initial conditions:

:math:`(A) \quad N_0 \in(0, K/2), \quad \quad N(t) \quad\mbox{is an increasing function of time and tends to the saturated values wartości K}`

:math:`(B) \quad N_0 \in [K/2, K), \quad \quad N(t) \quad\mbox{is also an increasing to K}`

:math:`(C) \quad N_0 \gt K, \quad \quad \quad \quad N(t) \quad \mbox{is a decreasing function of time and tends to the value K}`

In the case (A), the solution has a shape of the capital letter S and
therefore is sometimes called the sigmoid function, which is popular in
the problems of artificial intelligence and neuron networks.


.. admonition:: Experiment with Sage!

    A solution of the Velhulst equation can be obtained using the system of
    computer algebra. Sage can have some problems to get an explicit result
    (i.e., :math:`x(t)=...`). However, if we apply the simplification -
    :code:`full_simplify()` then the result is as below.

.. sagecellserver::
    :linked: false

    var('t x0')
    x = function('x')(t)
    sol_verhulst = desolve(diff(x,t) == x*(1-x),x,ics=[0,x0],ivar=t)
    show(sol_verhulst)
    print("Explicit form reads:")
    show( sol_verhulst.simplify_log().solve(x(t=t)) )




Time evolution of the population in the Verhulst model 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We want to plot for  the time evolution of the population for selected initial conditions. If can be easily done with Sage. 


.. admonition:: Experiment with Sage!

	Run code below to obtain time evolution of the Verhulst model with different initial conditions.
	How the future of the population depend on the current population?
	
	
.. sagecellserver::
    :linked: false

    var('x')
    T0 = srange(0,8,0.01)
    g = x*(1-x)
    solv = [desolve_odeint( g, ic,T0,x) for ic in [0.01,0.6,1.5,1]]
    line( zip ( T0,solv[0][:,0]) ,figsize=(7, 4)) +\
        line( zip ( T0,solv[1][:,0]) ,color='red')+\
        line( zip ( T0,solv[2][:,0]) ,color='green') +\
        line( zip ( T0,solv[3][:,0]) ,color='gray',legend_label="$K=1$") 




Generalizations and modifications of the Verhulst model
-------------------------------------------------------

The model with predation (the Ludwig-Jones-Holling model)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

In the Verhulst model, the death process can be implicitly contained in
the parameter :math:`r \gt 0`: If :math:`r` is smaller, the grow process
is smaller because the death process increases. It corresponds to the
regime when in the Malthus model :math:`a \gt b`. In other words the
growth rate is greater than the death rate. The Verhulst model can be
generalized to the case of presence of predators which kill individuals
in the Verhulst model. Because in the presence of predators, a number of
preys decreases and according to the rules of modelling, we should add
the negative term to the Verhulst equation. So, we postulate the
following equation:

.. math:: \frac{dN}{dt} = r \left[1- \frac{N}{K}\right]  N -F(N), \quad \quad N(0)=N_0

The function :math:`F(N)` describes the influence of predators and
should exhibit the following properties:

(i)  :math:`F(N=0) =0` - it means that when there are no preys then
     there is no influence of predators.

(ii) For large values of N, the function :math:`F(N)` should saturate,
     i.e. for :math:`N\to  \infty` the finction :math:`F(N)` tends to a
     constant finite value. It means that the predator can consume only
     a limited amount of preys.

If population is too small the predator preferes to change the region of
hunting. In this modeling one can apply the Hill function exploited in
biochemistry, namely,

.. math:: F(N)= F_n(N)= \frac {BN^n}{A^n + N^n}, \quad n\gt 0

Below we present the shape of this function for 3 values of the
exponents :math:`n=2, 4, 6.` The case :math:`n=2` was applied to
description of ecological systems, in particular the spruce
budworm-forest interaction in the eastern North America (D. Ludwig, D.
D. Jones and C. S. Holling, “Qualitative Analysis of Insect Outbreak
Systems: The Spruce Budworm and Forest”, The Journal of Animal Ecology,
Vol. 47, p. 315, 1978). This model is determined by the equation

.. math:: \frac{dN}{dt} = r  \left[1- \frac{N}{K}\right] \, N -  \frac {BN^2}{A^2 + N^2}, \quad n \gt 0

This model and its modifications have been applied for description of
various phenomena and processes. It is the first model which exhibits
non-trivial properties. With this respect, the Malthus and Verhulst
models can be treated as trivial for analysis.


.. admonition:: Experiment with Sage!

	Investigate how the **The Hill function** depens on value the the expenent. For this purpose plot the function for exponent :math:`n=2,3,4`. Try yourself also different  values.


.. sagecellserver::
    :linked: false
    
    var('N')
    plts = []
    c = ['red','blue','green']
    for i,n in enumerate([2,4,6]):
        F1 = N^n/(1+N^n)
        plts.append( plot(F1,(N,0,2),figsize=(5,2),color=c[i%3], legend_label="$n=%d$"%n) ) 
    show(sum(plts))




Example of a model which describes Allee effect
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Simplifying, we can say that the Allee effect (1931) occur in small or
sparse populations (where group size is important for both reproduction
and survival) that can result in critical population thresholds below
which populations crash to extinction. There are a variety of mechanisms
that can create Allee effects, including mate finding, predation,
environmental modification, social interactions, reproductive
mechanisms, including fertilization efficiency in broadcast spawners,
pollen limitation, sperm limitation, reproductive facilitation by
conspecifics, and female choice. According to Allee, it should be a
threshold of population below which the population will die out. An
example of modeling of such an effect is the modified Verhulst equation

.. math:: \frac{dN}{dt} = G(N) = r (N- N_c) \left[1- \frac{N}{K}\right] \;N

where :math:`0 \lt N_c \lt K` is the next stationary state from the
Allee prediction. It is an example of modification. One can construct
many other models but this is the simplest. We observe that in this
model there are 3 stationary states:

.. math::

   \begin{aligned}
   G(N)= r (N- N_c) \left[1- \frac{N}{K}\right] \;N  =\frac{r}{K}  (N- N_c) (K- N) \;N = 0, \\ \mbox{ hence} \quad  N_1=0, \quad N_2=N_c, \quad N_3=K
   \end{aligned}

Stability analysis:

.. math:: G'(N)= \frac{r}{K} \left[(K-N) N -(N-N_c) N + (N-N_c) (K-N)\right]

.. math::

   \begin{aligned}
   \lambda_1= G'(N_1) =G'(0) = -K N_c \lt 0 \quad \mbox{(stable  state)}, \\ \lambda_2= G'(N_2) =G'(N_c) = (K-N_c)N_c \gt 0 \quad \mbox{(unstable state)}, \\ \lambda_3= G'(N_3) =G'(K) = -K(K- N_c) \lt 0 \quad  \mbox{(stable state)}
   \end{aligned}

There are 2 stable stationary states: :math:`N=0` oraz :math:`N=K`. The
stationary state :math:`N=N_c` is unstable. The stationary state
:math:`N=K` is the same as in the Verhulst model and the statble state
:math:`N=0` describes the Alee effect: the population can dissapear when
initially it is not enough large.

**Time evolution of population in the Allee model in dependence of
initial conditions** (for :math:`K=1` and :math:`N_c=0.5`)

.. sagecellserver::
    :linked: false

    var('x')
    T0 = srange(0,15,0.01)
    f = x*(x-0.5)*(1-x)   
    sols = [desolve_odeint( f, ic,T0,x) for ic in [0.45,0.55,1.5,0.5,1]] 
    line( zip ( T0,sols[0][:,0]) ,figsize=(7, 4)) +\
        line( zip ( T0,sols[1][:,0]) ,color='red')+\
        line( zip ( T0,sols[2][:,0]) ,color='green') +\
        line( zip ( T0,sols[3][:,0]) ,color='gray',legend_label="$K=1$") +\
        line( zip ( T0,sols[4][:,0]) ,color='violet',legend_label="$N_c=0.5$")




The green and red curves present change on population for sufficiently
large initial population (like in the Verhulst model). The blue curve
presents the Allee effect: if initially the population is not large, it
diminishes in time and finally ceases to exist.

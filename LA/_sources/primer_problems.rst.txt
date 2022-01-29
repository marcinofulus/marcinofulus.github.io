
Exercises and Problems
----------------------

The following Sage code generates a system of  :math:`\,n\,` linear equations
in :math:`\,n\,` variables :math:`\\` 
(initially :math:`\,n=3`) :math:`\,` with a unique single solution 
and displays that solution.

**Exercise.** :math:`\,`
Apply the elimination method to solve by hand and/or by computer 
an obtained system of three or four equations. Check your result
by comparing it with the solution provided by the program.

.. sagecellserver::

   n = 3
   
   A = random_matrix(ZZ, n, algorithm='echelonizable', rank=n, upper_bound=6)
   b = random_vector(ZZ, n, x=-5, y=6)
   
   X = vector([var('x%d'%i) for i in range(1,n+1)])
   t = ["\ " + latex(l) + " & \!\! = & \!\! " + latex(r) for (l,r) in zip(A*X,b)]
   pretty_print(html("<center>$\\left\{\\begin{array}{rcr} %s \\end{array}\\right.$"
   % " \\\ ".join(t)))
   
   show(A\b)

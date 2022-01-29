
.. Algebra Liniowa documentation master file, created by
   sphinx-quickstart on Mon May  6 21:02:54 2013.

==========================
Lectures on Linear Algebra
==========================

Introduction
============

.. toctree::
   :maxdepth: 2

   introduction_preliminaries
   introduction_algebraic-structures
   introduction_fundamental-concepts
   introduction_permutations
   introduction_references
..   introduction_appendices
   

A Primer on Linear Systems
==========================

| *Space of the column vectors over a field.*
| *Geometric interpretation of consistent 
  and inconsistent systems of equations.*
| *Transformation of a system of equations 
  to the echelon form by elementary operations.*

.. toctree::
   :maxdepth: 2

   primer_column-vectors
   primer_geometry-of-eqns-stat
   primer_elimination-for-eqns 
   primer_problems

Algebra of Matrices
===================

| *Matrix as a rectangular layout of elements from a field.*
| *Matrix addition and scalar multiplication.*
| *The* :math:`\,m\times n\,` *matrices over a field* :math:`K` 
  *form the vector space over* :math:`K`.
| *Row and column rules defining product of two matrices.*
| *Practical vector and matrix operations in Sage.*

.. toctree::
   :maxdepth: 2

   algebra_of_matrices_operations
   algebra_of_matrices_properties
   algebra_of_matrices_Sage
   algebra_of_matrices_problems

Operations upon Matrices
========================

| *Row-echelon and reduced row-echelon form of a matrix.*
| *Elimination method applied to the augmented matrix 
  of a system of linear equations.*
| *Transpose of a matrix and its properties. 
  Symmetric and skew-symmetric matrices.*
| *Inverse of a matrix. Elementary matrices. 
  Permutation matrices.*
| *A practical algorithm for the matrix inversion 
  by Gauss-Jordan elimination.*

.. toctree::
   :maxdepth: 3

   operations_on_matrices_elimination
   operations_on_matrices_transpose
   operations_on_matrices_inverse
   operations_on_matrices_elementary
   operations_on_matrices_inverse-elimination
   operations_on_matrices_permutations
   operations_on_matrices_appendices
   operations_on_matrices_problems

Determinants
============

.. | *Axiomatic definition and permutation expansion of the determinant.*
   | *The Laplace expansion as a practical method of calculation.*

.. | *Properties and applications of determinants.*

.. toctree::
   :maxdepth: 2
   
   determinants_definition-properties
   determinants_permutation-expansion
   determinants_practical-calculation
   determinants_applications
   operations_app_Hill_cipher
   determinants_problems

Matrix Decompositions
=====================

| *LU decomposition of a matrix 
  into the product of lower- and upper-triangular factors.*

.. toctree::
   :maxdepth: 2

   decomposition_LU-triangular-matrices
   decomposition_LU-factorization
   decomposition_LU-applications
   decomposition_problems

.. _ch_kronecker:

Tensor (Kronecker) Product of Matrices
======================================

.. toctree::
   :maxdepth: 2

   tensor_product_properties
   tensor_product_vectorization
   tensor_product_transformation-matrix
   tensor_product_Kronecker-sum
   tensor_product_problems

Systems of Linear Equations: Theory and Practice
================================================

| *Rank of a matrix and the Kronecker-Capelli consistency condition.*
| *Practical implementation of the general theorems 
  on systems of linear equations.*
| *An instructive example with comprehensive discussion.*
| *Application to mechanics: Equilibrium of a set of masses on springs.* 
| *Solving systems of linear equations in Sage.*

.. toctree::
   :maxdepth: 2

   teoria_ukladow_rownan
   przyklad_z_dyskusja
   przyklad_ze_statyki
   regression
   linear_programming
   teoria_i_praktyka_ukladow_zadania

Linear Transformations
======================

| *Properties of linear transformations.*
| *Isomorphic vector spaces.*
| *Matrices of linear transformations.*
| *Change of basis and related formulae.*

.. toctree::
   :maxdepth: 2
   
   linear_transformations_definitions
   linear_transformations_properties-examples
   linear_transformations_kernel-image
   przeksztalcenia_lin_uklady_rownan
   przeksztalcenia_lin_macierze
   przeksztalcenia_lin_operatory
   przeksztalcenia_lin_zmiana_bazy
   linear_transformations_graphics
   przeksztalcenia_lin_zadania

Eigenvalues and Eigenvectors
============================

| *General solution of the eigenproblem in finite-dimensional vector spaces.*
| *Application to the theory of systems 
  of ordinary 1st order differential equations.*
| *Similarity and diagonalization of matrices.*

.. toctree::
   :maxdepth: 2

   problem_wlasny_definicja
   problem_wlasny_przyklady
   problem_wlasny_rownania_rozniczkowe
   problem_wlasny_Google
   problem_wlasny_zadania

.. _`Unitary-Spaces`:

Unitary Spaces
==============

| *Inner (scalar) product in complex and real spaces.*
| *Definition and examples of unitary (complex) and Euclidean (real) spaces.*
| *Schwarz inequality and its specific implementations.*
| *Orthogonality of vectors. Orthogonal complement of a subspace.*
| *Orthogonal and orthonormal basis of a unitary space.* 
| *Gram-Schmidt method for orthonormalizing 
  a set of vectors and the QR decomposition.*
| *Hermitian and unitary matrices vs Hermitian and unitary operators.*
| *Properties of normal matrices and operators.*

.. toctree::
   :maxdepth: 2
   
   p_unitarne_iloczyn_skalarny
   p_unitarne_norma
   p_unitarne_ortogonalnosc
   p_unitarne_Gram-Schmidt_QR
   p_unitarne_macierze_hermit_i_unit
   p_unitarne_Sage
   p_unitarne_operatory_hermit_i_unit
   p_unitarne_operatory_normalne
   p_unitarne_zadania

Diagonalization of Matrices
===========================

.. toctree::
   
   diagonalizacja_macierz_operator
   diagonalizacja_podobienstwo
   diagonalizacja_macierzy
   diagonalizacja_przyklady
   diagonalizacja_zadania

Proofs of Selected Theorems
===========================

.. toctree::
   :maxdepth: 2

   dowody_podstawy_algebry_liniowej
   dowody_operacje_na_macierzach
   dowody_przeksztalcenia_lin
   dowody_problem_wlasny
   dowody_p_unitarne

Problems in Linear Algebra
==========================

*Problems from this Chapter (or similar ones) may occur on the Exam.*

.. toctree::
   :maxdepth: 2
   
   zadania_1
   zadania_2

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
 
















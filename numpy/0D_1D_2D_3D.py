import numpy as np

A=np.array(10)
B=np.array([1,2,3])
C=np.array([[1,2,3],[4,5,6]])
D=np.array([[[1,2,3],[4,5,6]],[[7,8,9],[9,10,11]]])
print(A.ndim)
print(B.ndim)
print(C.ndim)
print(D.ndim)

X=np.array([45,3,4,2,3],ndmin=7)
print(X)

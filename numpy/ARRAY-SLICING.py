import numpy as np

B=np.array([1,2,3])
C=np.array([[1,2,3],[4,5,6]])
D=np.array([[[1,2,3],[4,5,6]],[[7,8,9],[9,10,11]]])

print(B[:])
print(C[1,:])
print(C[0:2,1])
print(D[0:2,0,2])
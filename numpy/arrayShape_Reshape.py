import numpy as np

B=np.array([1,2,3,4,5,6,7,8])
C=np.array([[1,2,3],[4,5,6]])
D=np.array([[[1,2,3],[4,5,6]],[[7,8,9],[9,10,11]]])

print(B.reshape(2,2,2))
print(D.shape)
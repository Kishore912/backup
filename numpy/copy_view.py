import numpy as np

B=np.array([1,2,3])
C=B.copy()
V=B.view()
B[0]=12
print(C)
print(V)
print(C.base)
print(V.base)
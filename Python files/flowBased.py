from __future__ import division
import math
import pandas as pd


def norm(value):
	min = -1.9502253
	max = 0.87085065
	result = (value - min)/(max-min)
	return result


linestartx = []
linestarty = []
lineendx = []
lineendy = []
df = pd.read_csv("Updatedsmall.csv")
radius = 12
derivative = []
afterNorm = []
sum=[0]*45
min = -1.9502253
max = 0.87085065
delta = 2
pointOne = [[0,0]]*44
pointTwo = [[0,0]]*44
for i in range(0,44):
	print("FOR THE TEMP")
	print(df['Temperature'][i])
	N = 0
	insideRadius = []
	sumNumerator = 0
	sumDenomenator = 0
	for j in range(0,44):
		distance = math.sqrt(((df['Temperature'][j] - df['Temperature'][i])**2) + ((df['Humidity'][j] - df['Humidity'][i])**2))
		if distance <= radius:
			N = N + 1
			insideRadius.append(j)
	for k in range(0, N):
		# print(df['Humidity'][insideRadius[k]])
		sumNumerator = sumNumerator + ((df['Humidity'][insideRadius[k]] - df['Humidity'][i]) * (df['Temperature'][insideRadius[k]] - df['Temperature'][i]))
	for l in range(0, N):
		sumDenomenator = sumDenomenator + ((df['Temperature'][insideRadius[l]] - df['Temperature'][i])**2)
	num = sumNumerator / sumDenomenator
	derivative.append(num)
	# Normalization between 0 and 1
	afterNrm = norm(num)
	afterNorm.append(afterNrm)
	linestartx.append(df['Temperature'][i] - delta * afterNrm)
	linestarty.append(df['Humidity'][i] - delta * afterNrm)
	lineendx.append(df['Temperature'][i] + delta * afterNrm)
	lineendy.append(df['Humidity'][i] + delta * afterNrm)
	pointOne[i] = [df['Temperature'][i] - delta * afterNrm, df['Humidity'][i] - delta * afterNrm]
 	pointTwo[i] = [df['Temperature'][i] + delta * afterNrm, df['Humidity'][i] + delta * afterNrm]






print(pointOne)

df.insert(4,'Derivative',derivative)
df.insert(5,'After Normalization',afterNorm)
df.insert(6,'Line Start',pointOne)
df.insert(7,'Line End',pointTwo)
df.to_csv("new.csv", index=False)


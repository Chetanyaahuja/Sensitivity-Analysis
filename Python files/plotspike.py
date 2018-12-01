import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv('toPlotspike.csv')
x1 = list(df['Line Start'])
y1 = list(df['Line End'])
m1 = list(df['Temperature'])
m2 = list(df['Humidity'])

# print(x1)
# print(y1)
for i in range(len(x1)):
	# print([x1[i].split(",")[0],y1[i].split(",")[0]],[x1[i].split(",")[1],y1[i].split(",")[1]])
	plt.plot([float(x1[i].split(",")[0]),float(y1[i].split(",")[0])],[float(x1[i].split(",")[1]),float(y1[i].split(",")[1])], 'r-')
	# plt.plot.scatter(x='m1',y='m2')
plt.scatter(df.Temperature, df.Humidity)
plt.savefig("spike2.pdf")
df.plot(kind='scatter', x='Temperature', y='Humidity' )
plt.savefig("spike1.pdf")
plt.axis('equal')
plt.savefig("spike.pdf")
plt.show()
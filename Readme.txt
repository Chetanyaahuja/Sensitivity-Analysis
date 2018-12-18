Installing
Copy the Folder in your computer and run the following commands on the terminal:
1)	Change Directory to the folder where the project is present. “ cd …”.
2)	Type the command “python -m SimpleHTTPServer 8888 &.”
3)	Open your browser (Preferable Google Chrome) and type http://localhost:8888/ and run the index.html file.
# Contributers:
>
- Chetanya Ahuja  
- Drishty Kapoor
- Raghav Jeevendra
>
## Running Project Two - Team 01 Client and Server Application
### Use the below process to run the project, must be in the Project Folder:
>

*Windows Machine:*
```
javac -cp ".;./lib/jcommon-1.0.23.jar;./lib/jfreechart-1.0.19.jar;./lib/jgoodies-forms-1.4.0.jar;./lib/json.jar" util/*.java client/gui/*.java client/sys/*.java  server/gui/*.java server/sys/*.java org/eclipse/wb/swing/*.java
```
*Linux or Mac OSx:*
```
javac -cp ".:./lib/jcommon-1.0.23.jar:./lib/jfreechart-1.0.19.jar:./lib/jgoodies-forms-1.4.0.jar:./lib/json.jar" util/*.java client/gui/*.java client/sys/*.java  server/gui/*.java server/sys/*.java org/eclipse/wb/swing/*.java
```
>
### Once compiled, issue the below command for the Client:
>

*Windows Machine:*
```
java -cp ".;./server;./client;./util;./lib/jcommon-1.0.23.jar;./lib/jfreechart-1.0.19.jar;./lib/jgoodies-forms-1.4.0.jar;./lib/json.jar" client.gui.ClientMainWindow
```

*Linux or Mac OSx:*
```
java -cp ".:./server:./client:./util:./lib/jcommon-1.0.23.jar:./lib/jfreechart-1.0.19.jar:./lib/jgoodies-forms-1.4.0.jar:./lib/json.jar" client.gui.ClientMainWindow
```
>
### Once compiled, issue the below command for the Server:
>

*Windows Machine:*
```
java -cp ".;./server;./client;./util;./lib/jcommon-1.0.23.jar;./lib/jfreechart-1.0.19.jar;./lib/jgoodies-forms-1.4.0.jar;./lib/json.jar" server.gui.ServerMainWindow
```

*Linux or Mac OSx:*
```
java -cp ".:./server:./client:./util:./lib/jcommon-1.0.23.jar:./lib/jfreechart-1.0.19.jar:./lib/jgoodies-forms-1.4.0.jar:./lib/json.jar" server.gui.ServerMainWindow
```

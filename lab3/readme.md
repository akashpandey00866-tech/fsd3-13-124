ocalhost-URL
127.0.0.1 -IP aadress
ctrll+c -stop the server 


every request from client has a pair of {request,response}



##full form off npm node pacakging manager
used to install ,run ,unsitall,any program, /projects and package
-npm install <packageName>
-npm unistalll <packagename>
 to use npm the project must be npm object ,
 to create npm  project we can use 

 -npm intit -y
 -it creates a package.json file aurtomatically 
 package.json holdes all thr information related tom install 
 package from npm 
 update package,json ,set type ="module"
 -it also create a folder node_modules automatically
 -node_modules holds  the package /library files 
 -generally we ignore the node_modules by.gitignore

Nodemon -it restart the server automatically when file chnanges ,to instll
>npm i nodeemon -D

Note:-D Flag will install this package as devloper  dependency 

-to execute any program ,update the package.json file then start the server as 
<b>npm run dev </b>
-start -> it will execute the app on deployement 
-dev -> it will start server  in deployement phase (only fro developer)

-res : it will return containes (json/html/plain)to the user /client 
-req :it will retrive the infofrmation 
from  client to the server 
-server send  also statusCodes to the  client ,that indicates the error /success message
## status codes 
-200->ok
-201->Created
-400->BAd request
-402->Undauthorized
-403-> forbidden
-404->not found
-500->internal server error
#context type
-text /plain 
-text /html
-application /json
-text /css


teh content type and status code can be send  back to client by two ways 
1.res.writeHead
2.res.setHolder
3.res.statusCode
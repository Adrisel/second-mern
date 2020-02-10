# second-mern
this is a beta software about Scrum Pocker to prepare myself for my test! 

#backend 
I will work with Visual Studio Code and the most import thing to get a good software It is the structure, how will we organize all our files.
So the structure goes:
--->second-mern
    |--->backend 
         |--->src
             |--->controllers
             |--->models
             |--->routes
             |--->app.kj
             |--->database.js
             |--->index.js
into backend we run in terminal npm init --yes to install package.jason
into backend we will need more modules:  npm i express mongoose cores dotenv
into backend we will install dev modules npm i nodemon -D

lets start in app.js: const express=require('express') 
                      const app= express()
                      module.exports = app
 index.js is in charge to initialize our server, so we will require app from app.js

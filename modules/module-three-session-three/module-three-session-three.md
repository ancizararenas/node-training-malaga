# MODULE 3 - Session 2 - TASK BREAKDOWN

Last week we began trying to correctly structure our application and began to modularize our api so far. We introduced the concept of :
1. Module exports
2. Require
3. Express Router
4. Registering routes and exporting them using Module exports
5. Environment variables - how to use and declare

<!-- We also had homework set where you were to carry out simple implementations of the following : -->
1. Using built in 'os' module in Node.js
2. Using built in 'fs' module in Node.js
3. Using built in 'path' module in Node.js
4. Using built in 'util' module in Node.js

In this session we will look to implement our own custom logger and to begin separating our server logic further from our application logic. We will also begin integration our api with mongodb.

### TASK ONE - 5 mins

1. Discuss as a group what we have learnt so far (Share with team)
2. Explain understanding of what module exports is and how it works
3. Explain how require uses exported modules and the required structure internally

### TASK TWO - ? mins

For this task, we want to use the "bunyan" library for logging more adequately throughout our application.

1. Add bunyan version 1.8.1 as a dependancy in our application
2. Follow steps to create our own custom logger util/middleware
3. Add required changes to allow our bunyan logger to print out application name by default  
4. Change all of our console.log statements to use our new custom logger

### TASK THREE - ? mins

For this task, we want to use the "bunyan" library for logging more adequately throughout our application.

1. Add bunyan version 1.8.1 as a dependancy in our application
2. Follow steps to create our own custom logger util/middleware
3. Add required changes to allow our bunyan logger to print out application name by default  


### TASK FOUR - 10 mins

For this simple task we want to use our newly customised middleware logger that we created
and start to log the following into our process.stdout stream

1. We want to log when we are about to connect to our DB

2. We want to log when server has started and print out which port we are listening on.

### TASK FIVE - 10 mins

For this second task, still simple with just a little more complexity, we want to improve upon
the logging from the previous task by carrying out the following tasks :

1. We want to log when we successfully make a connection to the DB on application startup

2. We want to log when we encounter an error connecting to our DB when starting our server

### TASK SIX - 15 mins

For this task, we want to be a bit more protective of our application. We want to configure our server in such a way that will allow us to not allow the server to start if a DB connection error fails.

### TASK SEVEN - 15 mins

For this task, we want to be a bit more protective of our application. We want to configure our server in such a way that will allow us to not allow the server to start if a DB connection error fails.

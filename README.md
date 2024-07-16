# Warning

This app should not be deployed because it lacks authentication and other 
security measures. Deploying it as-is would be irresponsible for your users!

# Project Overview

This RESTful API written with TypeScript uses Express.js and MySQL + Prisma.
It demonstrates the following steps and concepts:

- **Express Server Setup**: We start by setting up a basic Express server with 
  general routes, including `getTasks`, `getTask`, `createTask`, `updateTask`, 
  and `deleteTask`.

- **API Testing with Postman**: We configure Postman to test our API endpoints.

- **REST Principles**: The project adheres to RESTful principles for API design.

- **MySQL Integration**: We use MySQL as our database and establish the 
  connection logic thanks to Prisma client.

- **Prisma**: We create a Prisma schema for our task model.

- **App Architecture**: We explore different app architecture concepts such as 
  the server file, routes, controllers, database, models, middlewares, and error 
  handling.

## App Architecture

This project is structured to follow a modular and organized architecture. Below 
are the key components and their roles:

### Server File
The main server file (`app.ts`) initializes the Express application, sets up 
middleware, and connects to the database. It also defines the routes and error 
handling middleware.

### Routes
Routes are defined in the `routes` directory. The `tasks.ts` file contains the 
routes for task-related operations, mapping HTTP methods to controller functions.

### Controllers
Controllers in the `controllers` directory handle the logic for each route. The 
`tasks.ts` file includes functions for creating, reading, updating, and deleting 
tasks.

### Database
The database connection logic is encapsulated in the `prisma` directory. The 
`schema.prisma` file defines the schema for tasks and the connection to MySQL.

### Models
Models define the structure of the data. The `Task` model in `schema.prisma` 
defines the schema for tasks, including validation rules.

### Middlewares
Middlewares are used for various purposes such as error and misroute handling. 
The `middlewares` directory contains custom middlewares like `route-not-found.ts` 
and `error-handler.ts`.

### Error Handling
Custom error handling is implemented in the `errors/custom-error.ts` file. This 
file defines a custom error class and a function to create custom errors.
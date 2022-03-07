# E-commerce Back-End

## Description
This application provides the back-end functionality to an ecommerce site. Online shopping is the norm these days and internet retailers want to ensure that they can provide a competitive online service for their customers. 

This application follows the MVC paradigm in code organization, to increase code readability and mantainance for future developers. Database tables are created through Sequelize models. 

Upon starting the server, users will be able to GET, POST, UPDATE, and DELETE categories, products, and descriptive tags through API routes. The API routes can be accessed using a third-party application, such as Insomnia or Postman.

## Technologies
- Javascript
- Node.js (using the express, mysql2, dotenv, and sequelize packages)

## Installation
This steps to invoke the application are:
1.  Initialize the MySQL Shell from the command line and create the database with the `source db/schema.sql` command. Exit of out the MySQL shell.
2. Seed the tables with information with the `npm run seed` command. 
3. Sync the Sequelize models to the database and start the server with the `npm start` command.

## Demonstration
The database information will be return to the user in JSON format. Below is an example of the information that would be returned for a GET request of all the categories (and the products that are associated with said category) in the database. 
<img width="616" alt="image" src="<img width="1550" alt="image" src="https://user-images.githubusercontent.com/86696492/156983667-3b34ce73-458e-41d3-a7e4-1ff953fae1f7.png">">

For a more detailed walkthrough of the application's functionality, see the video below.
[![Demonstration Video](https://user-images.githubusercontent.com/86696492/156980551-7ba9246b-4c5d-42ee-b7f0-a7441c292488.png)](https://bootcampspot.instructuremedia.com/embed/b1d3ed99-d45e-4d8b-b702-58ba183b90b1 "Walkthrough Video")

## Questions
[Repository💗] (http://gtihub.com/https://github.com/nicolalenee/ecomm)
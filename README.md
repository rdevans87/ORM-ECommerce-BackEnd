# ORM-ECommerce-BackEnd

## Description 

This is a back-end application for an e-commerce site that uses [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect an `Express.js` API to a MySQL database, which utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to store sensitive environmental variables such as: `username`, `password`, and `database name`. 

The `schema.sql` file in the `db` folder was run in `MySQL Workbench` to create the `ecommerce_db` and establish a connection with the `Insomnia Core` server through the command line interface or integrated terminal in VS code. Once the database is created, the specific `NPM packages` are installed using `npm i` and the `npm run seed` command migrates the data to MYSQL. Object-Relational Mappin can then   GET, POST, PUT, and DELETE, data from the database,  


A table is generated from the js files in the models folder. 


combiles into a table from the js files in the models  Oband 


using Object-Relational Mapping to create the database infrastucture by mapping objects into  object-relational mapping API to GET, POST, PUT, DELETE 




## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

```


## Usage



## Mock-Up
The following animation shows the application's GET, POST, PUT, and DELETE routes for `TAGS` being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tags,” “GET tag by ID" ,and “PUT update Tag" , "DELETE Tag by ID" , "POST create New Tag”.](./assets/categories.gif)

The following animation shows the application's GET, POST, PUT, and DELETE routes for `CATEGORIES` being tested in Insomnia Core:

![In Insomnia Core, the user tests "GET Categories", “GET Categories by ID”, “PUT update Category", "DELETE category by ID", "POST create category".](./assets/categories.gif)

The following animation shows the application's GET, POST, PUT, and DELETE routes for `PRODUCTS` being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET product", "GET products", “CREATE product,” and “UPDATE product.”](./assets/product.gif)



## Grading Requirements

```md

Deliverables: 10%
Walkthrough Video: 37%

* A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.

* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how to create the schema from the MySQL shell.

* The walkthrough video must demonstrate how to seed the database from the command line.

* The walkthrough video must demonstrate how to start the application’s server.

* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia Core.

* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.

* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Connects to a MySQL database using the [MySQL2](https://www.npmjs.com/package/mysql) and [Sequelize](https://www.npmjs.com/package/sequelize) packages.

  * Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the [dotenv](https://www.npmjs.com/package/dotenv) package.

  * Syncs Sequelize models to a MySQL database on the server start.

  * Includes column definitions for all four models outlined in the homework instructions. 

  * Includes model associations outlined in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme with description and a link to a walkthrough video.

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

---



##### This is a base backend Node.js (Express.js) project template that anyone can use. It has been designed with essential coding principles and project management recommendations for best practices in mind. The structure is designed to be ORM-agnostic, meaning you can use any ORM such as Sequelize, Prisma, Mongoose, or TypeORM or any other ORM. In this case, the project is configured with Sequelize by default. Feel free to modify it as needed.

`src/` -> Inside the src folder, all the actual source code regarding the project will reside.

Lets take a look inside the `src` folder

- `index.js` This is the entry point of the application where the Express server is initialized and started. It is responsible for example: Importing necessary modules and configurations, Setting up middleware (such as cors, body-parser, and custom middlewares), Listening for incoming requests on the specified port. etc.
- `settings/` -> This folder contains all configuration settings and library/module setups. For example, setting up `dotenv` to manage environment variables efficiently is handled in `serverConfig.js`. Another example is configuring a logging library to generate meaningful logs.
- `routes/` -> This folder defines the application's routes and associates them with their respective middleware and controllers.
- `middlewares/` -> Middleware functions intercept incoming requests. Here, you can implement validators, authentication mechanisms, and other request-handling logic.
- `controllers/` -> In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.
- `repositories/` -> This folder contains database interaction logic, including raw queries or ORM-based queries.
- `services/` -> Services handle business logic and interact with repositories to retrieve or update data in the database.
- `utils/` -> This folder includes utility functions, custom error classes, and other reusable helper methods.
- `docs/` -> API documentation.
- `tests/` -> Contains unit and integration tests.
- `database/` -> This folder organizes all database-related files in one place. It helps maintain a structured and scalable database management approach. Lets take a look inside the `database` folder

  - `config/` -> Contains Sequelize database configuration files, such as config.json or you can modify it like config.js, which define database connection settings for different environments.
  - `models/` -> This folder contains Sequelize models, which define the structure of database tables and relationships between them. Each model corresponds to a database table and is used to interact with the database programmatically.
  - `migrations/` -> This folder contains migration files, which help manage changes to the database schema over time. Migrations allow you to create, update, or delete tables while keeping track of changes in a version-controlled manner.
  - `seeders/` -> This folder contains seed files used to insert initial data into the database. This is useful for testing or populating the database with default values.

  Other Files in the Root Directory
  `.github/workflows/` -> For GitHub Actions CI/CD pipelines.

#### SETUP

`git clone https://github.com/dimsmukhtar/Base_Express_JS_Project_Template.git`

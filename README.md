# ExpressJS-Sqlite-API

# Item Management System Docs

## Introduction

The Item Management System is a web application that allows users to manage items in a database. It provides functionalities for adding, updating, retrieving, and deleting items.
Project Structure

The project follows the MVC (Model-View-Controller) architecture to separate concerns and maintain a clean and organized codebase.

- app.js: The entry point of the application, responsible for setting up the server and middleware.
- controllers/: Contains controller classes that handle business logic.
- models/: Contains the model class responsible for interacting with the database.
- routes/: Contains route definitions that connect URLs to controller methods.
- database.db: SQLite database file.

## Installation


git clone https://github.com/yourusername/item-management-system.git](https://github.com/ivangrana/ExpressJS-Sqlite-API.git

Navigate to the project directory:

bash

cd item-management-system

- Install dependencies using npm or yarn:

bash

    npm install
    # or
    yarn install

    Create an SQLite database file named database.db.

Usage

    Start the server:

    bash

    npm start

    Access the application in your browser or API client at http://localhost:3000.

## API Endpoints
1. Get All Items

    URL: /api/items
    Method: GET
    Description: Retrieve a list of all items.
    Response:



    [
       {
        "category": "Category 1",
        "client": "Client 1",
        "quantity": 5
      },
      {
        "category": "Category 2",
        "client": "Client 2",
        "quantity": 3
      }
      // ...
    ]

2. Add Item

    URL: /api/items
    Method: POST
    Description: Add a new item.
    Request Body:

  

       {
       "category": "New Category",
       "client": "New Client",
       "quantity": 10
       }

Response:

    {
      "message": "Item added successfully"
    }

3. Update Item

    URL: /api/items/:id
    Method: PUT
    Description: Update an existing item by ID.
    Request Body:

  

        {
           "category": "Updated Category",
           "client": "Updated Client",
           "quantity": 7
        }

Response:



    {
      "message": "Item updated successfully"
    }

4. Delete Item

    URL: /api/items/:id
    Method: DELETE
    Description: Delete an item by ID.
    Response:



       {
       "message": "Item deleted successfully"
       }

Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

    Fork the repository.
    Create a new branch for your feature/bugfix: git checkout -b feature-name.
    Make your changes and commit them: git commit -m "Add feature".
    Push to your forked repository: git push origin feature-name.
    Create a pull request on GitHub.

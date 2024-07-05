# ExpressJS-Sqlite-API

# About:

### **Project Structure**

The project follows the MVC (Model-View-Controller) architecture to separate concerns and maintain a clean and organized codebase.

- app.js: The entry point of the application, responsible for setting up the server and middleware.
- controllers/: Contains controller classes that handle business logic.
- models/: Contains the model class responsible for interacting with the database.
- routes/: Contains route definitions that connect URLs to controller methods.
- database.db: SQLite database file.

## Database diagram:

### Relationships:

- **User Table (`user`)**:
    - Contains `id` (primary key) and `name`.
- **Tasks Table (`tasks`)**:
    - Contains `id` (primary key), `title`, and `description`.
- **Teams Table (`teams`)**:
    - Contains `id` (primary key) and `name`.
- **UserTeam Table (`UserTeam`)**:
    - Represents the many-to-many relationship between `user` and `teams`.
    - Contains `id` (primary key), `user_id` (foreign key referencing `user.id`), and `team_id` (foreign key referencing `teams.id`).
- **UserTask Table (`UserTask`)**:
    - Represents the many-to-many relationship between `user` and `tasks`.
    - Contains `id` (primary key), `user_id` (foreign key referencing `user.id`), and `task_id` (foreign key referencing `tasks.id`).

## Architecture:
![Sem_ttulo-2024-06-19-1231](https://github.com/ivangrana/ExpressJS-Sqlite-API/assets/89265428/fe52c384-f7b8-4365-94df-559ee692a09f)
# REST HTTP methods:

### Tasks:

---

### 1. `getAllTasks`

**Route**: `GET /api/tasks`

**Description**:

- Fetches all tasks from the database or data source.

**Response**:

- **200 OK**: Returns an array of task objects.
- **500 Internal Server Error**: If there's an error in fetching the tasks.

**Example Response**:

```json
[
    {
        "id": 1,
        "title": "Task 1",
        "description": "This is task 1",
        "completed": false
    },
    {
        "id": 2,
        "title": "Task 2",
        "description": "This is task 2",
        "completed": true
    }
]

```

### 2. `getTask`

**Route**: `GET /api/tasks/:id`

**Description**: 

- fetches a single task from the database based on its id.

**Response:**

- **200 OK:** returns a JSON object.
- **500 Internal Server Error**: If there's an error in fetching the tasks.

**Example Response**:

```json

  {"title": "Do the crud",
  "description": "you know what",
  "completed": false}
```

### 3. `addTask`

**Route**: `POST /api/tasks/`

**Description**: 

- inserts a single task into the database.

**Parameters:**

- `:id` (Path parameter): ID of the task to update.
- `title` (Request Body): Updated title of the task.
- `description` (Request Body): Updated description of the task.

**Response:**

- **200 OK:** returns a JSON object.
- **500 Internal Server Error**: If there's an error in fetching the tasks.

**Example Response**:

```json

  {"title": "Do the crud",
  "description": "you know what",
  "completed": false}
```

### 4. `updateTask`

**Route:**`/api/tasks/:id`

- **Description**:  Updates an existing task based on its ID.
- **Parameters:**
    - `:id` (Path parameter): ID of the task to update.
    - `title` (Request Body): Updated title of the task.
    - `description` (Request Body): Updated description of the task.
- **Use Cases:**
    - Modifying existing task details such as title or description.
    - Handling form submissions to update tasks.
- **Example Request Body:**
    
    ```json
    jsonCopiar código
    {
      "title": "Write documentation",
      "description": "Create documentation for API routes and methods."
    }
    
    ```
    

### 5. `deleteTask`

**Route:**`/api/tasks/:id`

- **Description**:  Deletes a specific task from the database based on its ID.
- **Parameters:**
    - `:id` (Path parameter): ID of the task to delete.
- **Use Cases:**
    - Removing tasks that are no longer needed.
    - Implementing a delete functionality in a task management system.
- **Example Response:**
    
    ```json
    jsonCopiar código
    {
      "message": "Task deleted successfully."
    }
    ```

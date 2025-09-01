<<<<<<< HEAD
# Framework and NoSQL Technologies - Laboratory Repository

**Student Name:** MARK JHON GUILLERMO  

**Course & Section:** BSIS 3A  

**Professor:** Red Guillermo Jr. V.  

**Email:** mjmg2023-8189-45492@bicol-u.edu.ph  

---

## Repository Purpose
This repository contains all laboratory outputs from Week 1 to Week 9, progressively building toward a full-stack midterm project.

---

## Lab Timeline
| Week | Description |
|------|-------------|
| 1    | Environment Setup & GitHub Integration |
| 2–7  | Backend, Frontend, and NoSQL Development |
| 8    | Project Polish & Local Output |
| 9    | Deployment to Render & Atlas |

---
## Week 3 – Users API (CRUD + Error Handling)

### Endpoints

- **Create User**  
  `POST /api/users`  
  Body: `{ "id": 1, "name": "Alice", "email": "alice@example.com" }`  
  Status: `201 Created` | Errors: `400 Bad Request`, `409 Conflict`

- **Get All Users**  
  `GET /api/users`  
  Status: `200 OK`

- **Get Single User**  
  `GET /api/users/:id`  
  Status: `200 OK` | Errors: `404 Not Found`

- **Update User**  
  `PUT /api/users/:id`  
  Body: `{ "name": "Alice Updated" }`  
  Status: `200 OK` | Errors: `400 Bad Request`, `404 Not Found`

- **Delete User**  
  `DELETE /api/users/:id`  
  Status: `200 OK` | Errors: `404 Not Found`
## Thunder Client Testing (Screenshots)

### 1. Start Server
![Start Server](./screenshots/start-server.png)

### 2. Create User (POST)
![Create User](./screenshots/create-user.png)

### 3. Get All Users (GET)
![Get All Users](./screenshots/get-all-users.png)

### 4. Get Single User (GET by ID)
![Get User by ID](./screenshots/get-user-by-id.png)

### 5. Update User (PUT)
![Update User](./screenshots/update-user.png)

### 6. Delete User (DELETE)
![Delete User](./screenshots/delete-user.png)

### 7. Get Users (Empty Response)
![Get Users Empty](./screenshots/get-users-empty.png)

# Week 4 – MongoDB Atlas & CRUD Testing

This week integrates *MongoDB Atlas* with the Users API.
The database connection is moved from *local memory* to *MongoDB Atlas*, ensuring data persistence.

---

## MongoDB Atlas Setup Steps

1. Create a free cluster on *MongoDB Atlas*.
2. Whitelist your IP address in *Network Access*.
3. Create a database user (username & password).
4. Copy the connection string and update .env:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydb


---

## CRUD Endpoints with MongoDB Atlas

| *Operation*  | *Method & Endpoint*   | *Request Body (JSON)*                                              | *Response Example*                                                        |
| -------------- | ----------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Create User    | POST /api/users       | json {"name":"Guillermo","email":"guillermo@example.com"}           | { "_id": "...", "name": "Guillermo", "email": "guillermo@example.com", "__v": 0 } |
| Get All Users  | GET /api/users        | –                                                                    | Array of users                                                              |
| Get User by ID | GET /api/users/:id    | –                                                                    | Single user object                                                          |
| Update User    | PUT /api/users/:id    | json {"name":"Guillermo Updated","email":"guillermo.updated@example.com"} | Updated user object                                                         |
| Delete User    | DELETE /api/users/:id | –                                                                    | Deleted user confirmation                                                   |

---

## Sample JSON Response with MongoDB _id

{
  "_id": "68b5be9be4df145765655c07",
  "name": "Guillermo Updated",
  "email": "guillermo.updated@example.com",
  "__v": 0
}

---

## Thunder Client Tests (Week 4)

| *Test*           | *Screenshot*                          |
| ---------------- | ------------------------------------- |
| POST Create User | ![POST](./Screenshots/POST.png)       |
| PUT Update User  | ![PUT](./Screenshots/PUT.png)         |
| DELETE User      | ![DELETE](./Screenshots/DELETE.png)   |
| GET All Users    | ![GET](./Screenshots/GET.png)         |
| GET User by ID 2 | ![GET(2)](./Screenshots/GET(2).png)   |

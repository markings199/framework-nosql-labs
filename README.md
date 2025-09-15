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

## Sample JSON Response with MongoDB _id

```json
{
  "_id": "68b5be9be4df145765655c07",
  "name": "Guillermo Updated",
  "email": "guillermo.updated@example.com",
  "__v": 0
}
```
---

## Thunder Client Tests (Week 4)

| *Test*           | *Screenshot*                          |
| ---------------- | ------------------------------------- |
| POST Create User | ![POST](./screenshots/POST.png)       |
| PUT Update User  | ![PUT](./screenshots/PUT.png)         |
| DELETE User      | ![DELETE](./screenshots/DELETE.png)   |
| GET All Users    | ![GET](./screenshots/GET.png)         |
| GET User by ID 2 | ![GET_2](./screenshots/GET(2).png) |

## 📌 Week 5 – Authentication & Protected Routes

### 🔑 New Endpoints

- *POST* /api/auth/signup → Create a new account

  - Request body:  
    json
    {
    "name": "Mark",
    "email": "mark@example.com",
    "password": "123456"
    }
  - Response:  
    json
    {
    "message": "User created successfully",
    "userId": "68bed8939573fa0f921ef274"
    }

- *POST* /api/auth/login → Log in and receive a JWT token
  - Request body:  
    json
    {
    "email": "mark@example.com",
    "password": "123456"
    }
  - Response:  
     json
    {
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YmVkODkzOTU3M2ZhMGY5MjFlZjI3NCIsImVtYWlsIjoibWFya0BleGFtcGxlLmNvbSIsImlhdCI6MTc1NzMzNzgwOCwiZXhwIjoxNzU3MzQxNDA4fQ.QY_CIeOcA-sxsZArJAPwX8Ex63DNaP9J8w0OXQx-VBc"
    }

How to call protected routes with

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YmVmMWM4NjM4NzU0NjU4YjAzMmU5NSIsImVtYWlsIjoiZ3VpbGxlcm1vQGV4YW1wbGUuY29tIiwiaWF0IjoxNzU3MzQ0Mjg3LCJleHAiOjE3NTczNDc4ODd9.N9gcvQMIWBNoyw33NWnE3ITvi6tgIfuWbPzs5d_DAc0

# Thunder Client Tests (Week 5 – JWT Authentication)

| *Test*                     | *Endpoint & Method*       | *Screenshot*                      |
| --------------------------- | ------------------------ | --------------------------------- |
| Sign Up                     | POST /api/auth/signup    | ![signup](./screenshots/signup.png) |
| Login                       | POST /api/auth/login     | ![login](./screenshots/login.png)   |
| Access Protected (No Token) | GET /api/users/profile   | ![notoken](./screenshots/notoken.png) |
| Access Protected (With Token)| GET /api/users/profile  | ![withtoken](./screenshots/withtoken.png) |

Introduction — Week 6 Day 1: Basic Aggregation

Today, you will learn how to use MongoDB’s aggregation pipeline to analyze and transform data. You will practice:

Filtering documents with $match

Unwinding arrays and grouping values with $unwind + $group

Deriving new fields using $project

Sorting results with $sort

These operations help you generate insights from your data beyond simple queries.

DAY 1 (Screenshots)

Step 1: Filtering documents with $match

![match](./screenshots/1.png)

Step 2: $unwind + $group — Count of users by age
![unwind](./screenshots/2.png)

Step 3: $project — Add a new field
![project](./screenshots/3.png)

Step 4: $sort — Sort by age
![sort](./screenshots/4.png)


# Thunder Client Tests (Week 6 – Aggregation)

| *Test*           | *Screenshot*                          |
Introduction — Week 6 Day 2: Advanced Aggregation
Today, you will learn how to use MongoDB’s aggregation pipeline to analyze and transform data. You will practice:
DAY 2 (Screenshots)

Step 1: $lookup — Join data from different collections
![lookup](./screenshots/day2(1).png)

Step 2: $group + $sort + $limit — Identify top customers by total spend
![group](./screenshots/day2(2).png)

Step 3: Tracking monthly signups using date operators
![date](./screenshots/day2(3).png)

Step 4: Creating indexes to improve query performance
![index](./screenshots/day2(4).png)

![index](./screenshots/day2(5).png)

These exercises showed how aggregation can combine, summarize, and optimize data, while indexing makes queries faster and more efficient.

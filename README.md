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


Introduction — Week 7: Full-Stack ShopHub MVP  
This week, you will build an e-commerce application (backend + frontend). You will practice:  
- Implementing REST API endpoints for products, categories, sellers, and admins  
- Using MongoDB aggregation for analytics  
- Integrating the backend with a React + Tailwind frontend 


### Part 1: Backend API Development

#### Public Endpoints (No Login Required)
Step 1: **GET /api/products** → Returns product list  
![products](./screenshots/backend-products-api.png)

Step 2: **GET /api/categories** → Returns categories  
![categories](./screenshots/backend-categories-api.png)

---

#### Seller Authentication & Product Management
Step 3: **POST /api/auth/login** with seller credentials  
![seller login](./screenshots/backend-seller-login.png)

Step 4: **POST /api/products** (create product with seller token)  
![seller create](./screenshots/backend-seller-create-product.png)

Step 5: **PUT /api/products/:id** (update product with seller token)  
![seller update](./screenshots/backend-seller-update-product.png)

Step 6: **DELETE /api/products/:id** (delete product with seller token)  
![seller delete](./screenshots/backend-seller-delete-product.png)

---

#### Admin Endpoints
Step 7: **POST /api/auth/login** with admin credentials  
![admin login](./screenshots/backend-admin-login.png)

Step 8: **GET /api/admin/users** → List users  
![admin users](./screenshots/backend-admin-users.png)

Step 9: **GET /api/admin/product-stats** → Product statistics  
![admin stats](./screenshots/backend-admin-product-stats.png)

---

#### Analytics Endpoints
Step 10: **GET /api/stats/signups-by-month**  
![signups](./screenshots/backend-stats-signups.png)

Step 11: **GET /api/stats/top-spenders**  
![top spenders](./screenshots/backend-stats-top-spenders.png)

Step 12: **GET /api/stats/hobbies**  
![hobbies](./screenshots/backend-stats-hobbies.png)



### Part 2: Frontend Development

#### Day 1: Basic Frontend Setup
Step 13: **Landing Page**  
![landing](./screenshots/w7-day1-landing-page.png)

Step 14: **Login Page**  
![login](./screenshots/w7-day1-login-page.png)

Step 15: **Dashboard after login**  
![dashboard](./screenshots/w7-day1-dashboard-after-login.png)


#### Day 2: E-Commerce Features
Step 16: **Catalog - All Products**  
![catalog all](./screenshots/catalog-all.png)

Step 17: **Catalog - Filtered by Category (Phone)**  
![catalog filtered](./screenshots/catalog-filtered-phone.png)

Step 18: **Seller - Create Product**  
![seller create](./screenshots/seller-create.png)

Step 19: **Seller - Edit Product**  
![seller edit](./screenshots/seller-edit.png)

Step 20: **Seller - Delete Product**  
![seller delete](./screenshots/seller-delete.png)

Step 21: **Reports - All Charts**  
![reports](./screenshots/reports-charts.png)

Step 22: **Admin - Users Table**  
![admin users](./screenshots/admin-users1.png)

Step 23: **Admin - Categories Chart**  
![admin categories](./screenshots/admin-categories.png)

Week 7 – Conclusion

In Week 7, we wrapped up our e-commerce MVP ShopHub by combining everything we’ve learned:

Backend (Express + MongoDB) → APIs for products, categories, sellers, admins, and analytics.

Frontend (React + Tailwind) → Catalog browsing, login/dashboard, seller product management, and admin views.

Analytics powered by MongoDB aggregation for insights like top spenders, signups, and hobbies.

 This week was all about integration — taking the separate features we built in earlier weeks and connecting them into one complete, usable application.



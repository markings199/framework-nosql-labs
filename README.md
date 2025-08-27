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

## Week 3 – Users API
This week we implemented a **Users Controller** with full CRUD operations using Express.js.  

### Endpoints
- **Create User**  
  `POST /api/users`  
  Status: `201 Created` | Errors: `400 Bad Request`, `409 Conflict`

- **Get All Users**  
  `GET /api/users`  
  Status: `200 OK`

- **Get Single User**  
  `GET /api/users/:id`  
  Status: `200 OK` | Errors: `404 Not Found`

- **Update User**  
  `PUT /api/users/:id`  
  Status: `200 OK` | Errors: `400 Bad Request`, `404 Not Found`

- **Delete User**  
  `DELETE /api/users/:id`  
  Status: `200 OK` | Errors: `404 Not Found`

---

## Thunder Client Testing (Screenshots)

### 1. Start Server  
![Start Server](./screenshots/Start%20Server.png)

### 2. Create User (POST)  
![Create User](./screenshots/Create%20User(POST%20apiusers).png)

### 3. Get All Users (GET)  
![Get All Users](./screenshots/Get%20All%20Users(GET%20apiusers).png)

### 4. Get Single User (GET by ID)  
![Get Single User](./screenshots/3-get-user-by-id.png.png)

### 5. Update User (PUT)  
![Update User](./screenshots/4-update-user.png.png)

### 6. Delete User (DELETE)  
![Delete User](./screenshots/5-delete-user.png.png)

### 7. Get Users (Empty Response)  
![Get Users Empty](./screenshots/7-get-users-empty.png.png)

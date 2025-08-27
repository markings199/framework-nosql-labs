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

### 1. Create User  
![Create User](./screenshots/create-user.png)

### 2. Get All Users  
![Get All Users](./screenshots/get-all-users.png)

### 3. Get Single User  
![Get Single User](./screenshots/get-single-user.png)

### 4. Update User  
![Update User](./screenshots/update-user.png)

### 5. Delete User  
![Delete User](./screenshots/delete-user.png)

---

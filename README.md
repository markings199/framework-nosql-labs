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

### Thunder Client Testing (screenshots)
- Start Server → `start-server.png`  
- Create User → `create-user.png`  
- Get All Users → `get-all-users.png`  
- Get User by ID → `get-user-by-id.png`  
- Update User → `update-user.png`  
- Delete User → `delete-user.png`  
- Get Users (Empty) → `get-users-empty.png`

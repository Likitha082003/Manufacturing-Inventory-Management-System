

---

# Manufacturing Inventory Management System

## 📖 Overview
A full‑stack web application for tracking raw materials and finished goods in a manufacturing firm. The system provides CRUD operations, a summary dashboard, and dynamic alerts when stock falls below thresholds.

---

## 🚀 Features
- Add, update, delete, and view inventory items.  
- Separate tracking for raw materials and finished goods.  
- Real‑time alerts when stock < threshold.  
- Dashboard summary cards for quick insights.  
- Clean, responsive UI built with React + Material‑UI.  
- RESTful backend with Node.js + Express.  
- MongoDB database with Mongoose schema validation.  

---

## 🛠 Technology Stack
- **Backend**: Node.js + Express  
- **Frontend**: React + Material‑UI  
- **Database**: MongoDB  
- **ORM**: Mongoose  
- **Build Tool**: npm  

---

## ⚙️ Installation & Setup
### Backend
```bash
cd backend
npm install
node app.js
```
Runs on `http://localhost:5000`.

### Frontend
```bash
cd frontend
npm install
npm start
```
Runs on `http://localhost:3000`.

### Database
Ensure MongoDB is running locally:  
`mongodb://localhost:27017/inventoryDB`

---

## 📡 API Endpoints
| Method | URL            | Description              |
|--------|----------------|--------------------------|
| GET    | /inventory     | Fetch all items          |
| POST   | /inventory     | Add new item             |
| PUT    | /inventory/:id | Update item by ID        |
| DELETE | /inventory/:id | Delete item by ID        |
| GET    | /alerts        | Fetch items below threshold |

---

## 📊 Screenshots
<img width="1583" height="873" alt="image" src="https://github.com/user-attachments/assets/d2b40c21-f54d-4a2f-81d7-30827541e443" />
<img width="1735" height="791" alt="Screenshot 2026-02-20 121222" src="https://github.com/user-attachments/assets/0459e176-3339-4e05-86c0-6a3cb7cba266" />
<img width="1695" height="957" alt="Screenshot 2026-02-20 105453" src="https://github.com/user-attachments/assets/c47e581a-92fc-4d47-9534-3313b9f59081" />


---



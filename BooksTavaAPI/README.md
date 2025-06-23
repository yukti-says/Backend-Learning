# 📚 Books API

A simple RESTful API to manage books using **Node.js**, **Express**, and **MongoDB**.

---

## 📌 Features

- Add new books
- Fetch all books
- Get book by ID
- Update book by ID
- Delete book by ID

---

## 🛠 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- Postman (for API testing & documentation)

---

## 🔗 API Documentation

Access full live documentation here:  
👉 [BooksAPI Postman Docs](https://documenter.getpostman.com/view/44634770/2sB2xCh93K)

---

## 🔧 Setup Instructions

```bash
git clone https://github.com/yukti-says/Backend-Learning/tree/main/BooksTavaAPI
cd BooksTavaAPI
npm install
```

## ✅ Set environment variables in .env

PORT=3000
MONGODB_URI=mongodb://localhost:27017/books

## ▶ Start the server

```bash

npm start
```

## 🧪 Testing API

Use Postman or run these endpoints:

| Method | Endpoint                | Description       |
| ------ | ----------------------- | ----------------- |
| GET    | `/api/books/get`        | Get all books     |
| GET    | `/api/books/get/:id`    | Get a single book |
| POST   | `/api/books/add`        | Add new book      |
| PUT    | `/api/books/update/:id` | Update book by ID |
| DELETE | `/api/books/delete/:id` | Delete book by ID |


## 🤝 Contributing

Feel free to fork the project and suggest improvements. PRs welcome!

## 📬 Contact

Created by Yukti Sahu
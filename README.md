# URL Shortener

A minimal URL shortening service built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**.  
This app takes long URLs and generates short, shareable links that redirect to the original URLs.

---

## 🚀 Features

✔ Shorten long URLs  
✔ Redirect to original URL using short code  
✔ Keeps record of URL mappings  
✔ Lightweight & easy to extend  
✔ No frontend — API and backend logic only (can add UI)

---

## 🧠 Tech Stack

- **Node.js & Express** – Server and routing  
- **MongoDB & Mongoose** – Database and models  
- **JavaScript** – Core language  
- **dotenv** – Environment config

---

## 📁 Project Structure


url-shortner/
├── controllers/ # Business logic  
├── models/ # Mongoose schemas  
├── routes/ # Express routes  
├── app.js # App entry point  
├── package.json # Dependencies  
└── .env # Environment variables  


---

## 🔧 Installation

### 1. Clone the repo
```bash
git clone https://github.com/kdsirax/url-shortner.git
2. Install dependencies
cd url-shortner
npm install
3. Create .env

Add a .env file in the root:

PORT=3000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000

Replace with your own values.

4. Run the App
npm start

Your server will run at http://localhost:3000

🛠️ API Endpoints
Method	Endpoint	Description
POST	/api/shorten	Create a new short URL
GET	/:shortId	Redirect to original URL
GET	/api/stats/:shortId	Stats for a short URL

(Update routes based on how they’re implemented)

📌 Usage Example
Shorten a URL
POST /api/shorten
Content-Type: application/json

{
  "longUrl": "https://example.com"
}
Response
{
  "shortUrl": "http://localhost:3000/abc123"
}
🧪 Notes

URLs are stored in MongoDB with a generated short key.

Redirects are handled via Express routes.

Can be extended with analytics or a UI.

🤝 Contributing

Fork the repository

Create your feature branch (git checkout -b feature-name)

Commit your changes

Push and open a Pull Request

📜 License

This project is open-source and free to use.


---

## 🔑 GitHub Topics (suggested)

Use these in **Topics** on your repo:


nodejs
express
mongodb
mongoose
javascript
url-shortener
api
rest-api
backend
web-development

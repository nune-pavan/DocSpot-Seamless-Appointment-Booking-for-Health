# 🩺 DocSpot – Seamless Appointment Booking for Health

**DocSpot** is a full-stack web application that simplifies doctor-patient interactions. Patients can register, view nearby doctors, book appointments, and manage profiles. Doctors can apply, manage appointments, and admins can review doctor applications.

---

## 🚀 Features

- 🔐 Patient & Doctor Authentication
- 🩺 Doctor Registration + Admin Approval
- 📅 Patient Appointment Booking
- 💬 Doctor Dashboard for Appointments
- 🛡️ Admin Panel for Application Review
- 🌐 MongoDB Atlas Integration

---

## 🏗️ Project Structure

project files/
├── Client/ # React Frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── redux/
│ ├── assets/
│ └── App.js
├── Server/ # Node.js + Express Backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── server.js
└── .gitignore


---
project demo video and document linK:
https://drive.google.com/drive/folders/1ri8dJv5FLHfZQPdZFIbB8RrRmJh2jcVl


## 🔐 Environment Variables

Create a `.env` file in the **`Server/`** directory and include:

```env
PORT=9000
DB_URI=mongodb+srv://DocSpot:Docspot#143@cluster0.rklb1sq.mongodb.net/DocSpotDB?retryWrites=true&w=majority
JWT_SECRET=yourSecretKey

## 🌐 Frontend Environment Variables (Create `.env` inside `project_files/Client`)
REACT_APP_API_BASE_URL=http://localhost:9000/api
This value points your React frontend to the backend API.



🛠️ Run Locally
1. Clone the Repository
git clone https://github.com/nune-pavan/DocSpot-Seamless-Appointment-Booking-for-Health.git
cd DocSpot-Seamless-Appointment-Booking-for-Health/project\ files


2. Set Up the Backend
cd Server
npm install
npm run dev

3. Set Up the Frontend
Open a new terminal:
cd Client
npm install
npm start

Open your browser and visit: http://localhost:3000

🤝 Acknowledgements
MongoDB Atlas

React.js

Express.js

Material UI + Tailwind CSS

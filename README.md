# Online Doctor Appointment System

This web-based project allows users to conveniently make appointments with doctors in their vicinity. Users can register as either a doctor or a patient. Upon registration, the browser will access the user's location and display a list of available doctors nearby. Users can also filter doctors based on specific fields of expertise. Doctors who are signed in will be marked as currently available.

## Technologies Used
- MongoDB
- Express
- React

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:
   git clone https://github.com/yourusername/online-doctor-appointment.git
2. Navigate to the project directory:
   cd online-doctor-appointment   
3. Install server dependencies:
   cd Server
   npm install
4. Install client dependencies:
   cd Client
   npm install
5. Start the server:
   cd Server
   node express.js
6. Start the client:
   cd client
   npm start

7. Open a web browser and go to `http://localhost:9000` to access the application.

-  <a href="https://f3bb9b0d.hackodisha-3-o.pages.dev/"> Live Demo of Client </a>

## Features

- User authentication and registration
- Doctor authentication and registration
- Geolocation-based doctor search
- Filter doctors by specialty
- Real-time availability status for doctors
- Appointment scheduling with token system

## Usage

1. Create an account or sign in as a user or doctor.
2. Based on your location, view a list of available doctors.
3. Filter doctors by specialty if desired.
4. Schedule an appointment with your chosen doctor.
5. Receive a token number and appointment time.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Acknowledgements
- Built with MongoDB, Express, and React
- Special thanks to the contributors and the open-source community

---

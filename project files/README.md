<p align="center">
  <img src="Screenshot 2023-09-10 182231.png" alt="Project Logo">
</p>

<h1 align="center">Online Doctor Appointment System</h1>

<p align="center">
  A web-based platform for scheduling appointments with doctors available in your city
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Online Doctor Appointment System is a web-based platform that allows users to easily schedule appointments with doctors in their vicinity. Whether you're a patient looking for medical assistance or a doctor looking to manage your appointments, this system simplifies the process for both.

Key features include:

- User and doctor registration
- Location-based doctor search
- Real-time availability status for doctors
- Appointment scheduling with token numbers
- Automatic token number reset after each time slot

## Features

- **User Authentication**: Users can create accounts and log in as either patients or doctors.

- **Location-Based Search**: The system utilizes the user's location to display nearby doctors. Users can also filter doctors by specific medical fields.

- **Real-Time Availability**: Doctors who are currently signed in to the website are shown as available, making it easy for patients to find a doctor who can see them immediately.

- **Appointment Scheduling**: Patients can schedule appointments with doctors by selecting available time slots. They receive a token number along with the scheduled time.

- **Time Slot Management**: The system automatically resets the available token numbers after each time slot, ensuring accurate appointment scheduling.

## Demo

| SignUp Page | Login Page |
| ------- | ------- |
| ![Image 1](Signup.png) | ![Image 2](Login.png) |

| Patient Profile | Doctor Profile |
| ------- | ------- |
| ![Image 3](PatientProfile.png) | ![Image 4](DoctorProfile.png) |


You can access a live demo of the project <a href = "#">here</a>.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Gaurav23V/HackOdisha_3.O.git

   ```

2. Install dependencies in the client and server directories:

   cd HACKODISHA_3.O/Client

   npm install

   cd ../Server

   npm install

3. Create a MongoDB database and update the configuration in server/config.js.

4. Start the server:
   cd Server
   node server.js

5. Access the web application at http://localhost:9000.

## Usage

- Patient Registration: Patients can sign up for an account by providing their details and selecting "Patient" during registration.

- Doctor Registration: Doctors can sign up by providing their information and selecting "Doctor" during registration. They can set their availability status.

- Searching for Doctors: Users can search for doctors based on their location and medical field.

- Appointment Booking: Patients can book appointments with available doctors by selecting a time slot. They receive a token number for their appointment.

- Doctor Availability: Doctors can update their availability status by signing in or signing out of the website.

Technologies

    MongoDB: Database management
    Express: Backend server framework
    React: Frontend user interface
    Node.js: Backend runtime environment

Contributing


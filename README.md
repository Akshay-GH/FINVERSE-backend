Paytm Backend (Express + MongoDB)

This is a backend project that mimics the core features of Paytm.
Built with Express.js, MongoDB, and Zod for validation, it provides APIs for user authentication, authorization, searching users, and handling transactions.

🚀 Features

User Authentication & Authorization

Secure sign-up & login

JWT-based authentication

Role-based access (if implemented)

User Search

Search users by name, email, or phone number

Transactions

Send money to other users

View transaction history

Validation

Strong schema validation using Zod

🛠️ Tech Stack

Backend Framework: Express.js

Database: MongoDB (Mongoose ODM)

Validation: Zod

Authentication: JWT + bcrypt



⚙️ Setup Instructions

Clone the repository

git clone https://github.com/<your-username>/<your-repo>.git
cd paytm-backend


Install dependencies

npm install
add your mongoDB connecting string in dbSchema.js file 
add your server SECRET_KEY in confing.js
Run the server
npm run dev

📌 API Endpoints


Users
POST /api/v1/users//signup → Create new user

POST /api/v1/users/login → Login & get JWT

PUT /api/v1/users/--> update user password or firstname or lastname

GET /api/v1/users/bulk --> to search other users 


Accounts
GET /api/v1/accounts/balance --> to get the user balance 

POST /api/v1/accounts/transfer --> transfer money from one user to other 



🔒 Security

Passwords hashed with bcrypt

JWT used for secure authentication

Input validation with Zod

🚧 Future Improvements

Add support for UPI IDs

Implement notifications

Integrate payment gateway simulation


📦 Lost & Found Portal
A full-stack MERN (MongoDB, Express, React, Node.js) web application built to help users report and recover lost or found items efficiently.

🚀 Project Overview
The Lost & Found Portal is designed to simplify the process of posting lost items, reporting found items, and connecting users to recover them. It includes user registration with email verification, secure login, and a user-friendly interface for managing lost/found posts.

🛠️ Technologies Used
🌐 Frontend (React)
    1. React.js
    2. React Router
    3. Axios
    4. Material UI

🔧 Backend (Node.js + Express)
  1. Express.js
  2. MongoDB with Mongoose
  3. JWT for authentication
  4. Bcrypt for password hashing
  5. Nodemailer for email verification and password reset
  6. Dotenv for environment variables

⚙️ Setup Instructions
🖥️ Prerequisites
  1. Node.js and npm
  2. MongoDB (local or cloud like MongoDB Atlas)

🔌 API Usage
👤 Auth Routes
  1. POST /api/auth/signup – User registration (with email verification)
  2. POST /api/auth/login – Login with JWT
  3. GET /api/auth/verify-email/:token – Verify email
  4. POST /api/auth/forgot-password – Request password reset
  5. POST /api/auth/reset-password/:token – Reset password

📄 Post Routes
  1. GET /api/posts – View all posts
  2. POST /api/posts – Create a lost or found post
  3. PUT /api/posts/:id – Edit a post
  4. DELETE /api/posts/:id – Delete a post


👥 Team Member Contributions
Name	Role
Nethindu Chandula	    - Developer Head
Akindu Samarasinghe 	- Backend Developer
Akila Benaragama	    - Backend Developer, Deployment & Hosting
Thenul Minjaya	      - Frontend Developer
Pasindu Jayasekara	  - Frontend Developer

📬 Contact & Feedback
Feel free to open issues or pull requests if you'd like to contribute or suggest improvements.




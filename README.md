# MERN Chat Application

## Overview

This is a Full Stack MERN (MongoDB, Express.js, React, Node.js) chat application that allows users to communicate in real-time. The application features user authentication, image uploads, and a responsive chat interface.

## Features

- **Real-time Chat:** Users can send and receive messages in real-time.
- **User Authentication:** Secure user authentication using JWT (JSON Web Tokens).
- **Image Uploads:** Users can upload and share images in the chat.
- **Responsive Design:** The application is designed to work seamlessly on various devices.

## Tech Stack

- **Frontend:** React.js, Axios
- **Backend:** Node.js, Express.js, Socket.io
- **Database:** MongoDB
- **Image Storage:** Cloudinary
- **Authentication:** JSON Web Tokens (JWT)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-chat-app.git
   ```

2. Install dependencies:

   ```bash
   cd mern-chat-app
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables:

     ```env
     REACT_APP_API_URL=http://localhost:5000/api
     REACT_APP_SOCKET_URL=http://localhost:5000
     REACT_APP_CLOUDINARY_API_KEY=your-cloudinary-api-key
     REACT_APP_CLOUDINARY_API_SECRET=your-cloudinary-api-secret
     REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name
     ```

4. Run the application:

   ```bash
   npm start
   ```

   The frontend will be running at `http://localhost:3000`.

5. Set up the backend:

   - Navigate to the `backend` directory:

     ```bash
     cd backend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Run the backend server:

     ```bash
     npm start
     ```

   The backend will be running at `http://localhost:5000`.

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Sign up or log in to start using the chat application.
3. Start chatting with other users in real-time.

## Screenshots

![image](https://github.com/Birajj2189/talkey-chat-app/assets/93638316/4bbac975-621e-425d-853f-88313ccd9334)
![Uploading React App - Brave 2023-11-12 11-59-36.gif…]()




## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please [open an issue](https://github.com/your-username/mern-chat-app/issues) or [create a pull request](https://github.com/your-username/mern-chat-app/pulls).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

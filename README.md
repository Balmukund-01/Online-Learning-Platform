# Online-Learning-Platform
Online Learning Platform with GPT Intergration in Mern Stack (Full-stack Project)

# MERN Stack Project

This project is an Online Learning Platform using full-stack MERN application, consisting of a React frontend and a Node.js backend with Express.

## Table of Contents
1. [Frontend Setup](#frontend-setup)
2. [Backend Setup](#backend-setup)
3. [Deployment](#deployment)
4. [Contributing](#contributing)

## Frontend Setup

The frontend of this project is built with React and can be hosted on platforms like GitHub Pages, Netlify, or Vercel.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Shahana-rifkhan/Online-Learning-Platform.git
   cd Online-Learning-Platform

## Frontend Setup

1. **Navigate to the Frontend Directory:**
    ``` 
    cd client
    ```

2. **Install Dependencies:**
    ``` 
    npm install
    ```

3. **Set Up Environment Variables:**
    - Create a `.env` file in the `client` directory.
    - Add any necessary environment variables (e.g., API endpoints).

4. **Start the Development Server:**
    ``` 
    npm start
    ```
    The React app will be available at [http://localhost:3000](http://localhost:3000).

### Deployment

- **GitHub Pages:**
  - Ensure `gh-pages` is installed and configured.
  - Deploy with:
    ``` 
    npm run deploy
    ```

- **Netlify / Vercel:**
  - Connect your GitHub repository and follow their deployment guides.

## Backend Setup

The backend of this project is built with Node.js and Express.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (local or cloud)

### Installation

1. **Navigate to the Backend Directory:**
    ``` 
    cd server
    ```

2. **Install Dependencies:**
    ``` 
    npm install
    ```

3. **Set Up Environment Variables:**
    - Create a `.env` file in the `server` directory.
    - Add the necessary environment variables:
      ``` 
      MONGODB_URI=your_mongodb_uri
      PORT=5000
      ```

4. **Start the Server:**
    ``` 
    npm start
    ```
    The Node.js server will be available at [http://localhost:5000](http://localhost:5000).

### Deployment

- **Glitch:**
  - Create a new Glitch project and upload your server files.
  - Configure environment variables using Glitch’s settings.

- **Heroku / Render:**
  - Follow their guides for deploying Node.js applications.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch:
    ``` 
    git checkout -b feature/YourFeature
    ```
3. Commit your changes:
    ``` 
    git commit -am 'Add new feature'
    ```
4. Push to the branch:
    ``` 
    git push origin feature/YourFeature
    ```
5. Create a new Pull Request.

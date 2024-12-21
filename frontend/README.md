```markdown
# Setup Instructions to Set Up and Test the Project

## Prerequisites
- Install **Node.js** (latest LTS version recommended).
- Install **Git** (if needed).
- *(Optional)* Install a code editor like **VS Code**.

## Steps

### 1. Extract the ZIP File
- Unzip the project folder into a directory of your choice.

### 2. Set Up the Backend
- Open a terminal and navigate to the `backend` folder:
  ```
  cd backend
  ```
- Install dependencies:
  ```
  npm install
  ```
- Create a `.env` file and fill it with the necessary values:
  ```
  MONGODB_URI=mongodb://localhost:27017/yourdbname
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
  CLOUDINARY_NAME=your_cloudinary_name
  JWT_SECRET=your_jwt_secret_key
  ADMIN_EMAIL=admin@admin.com
  ADMIN_PW=pwadminpw
  ```
  Replace the placeholders with your actual values, such as the MongoDB URI, Cloudinary credentials, JWT secret, and admin credentials.
- Start the backend server:
  ```
  npm run server
  ```
- Ensure the backend is running and note the URL (e.g., `http://localhost:4000`).

### 3. Set Up the Frontend
- Open another terminal and navigate to the `frontend` folder:
  ```
  cd frontend
  ```
- Install dependencies:
  ```
  npm install
  ```
- Create a `.env` file and fill it with the necessary values:
  ```
  VITE_BACKEND_URL=http://localhost:4000
  ```
- Start the frontend server:
  ```
  npm run dev
  ```
- Open the provided local URL (e.g., `http://localhost:5173`) in a browser.

### 4. Set Up the Admin Panel (If Applicable)
- Navigate to the `admin` folder:
  ```
  cd admin
  ```
- Install dependencies:
  ```
  npm install
  ```
- Create a `.env` file and fill it with the necessary values:
  ```
  VITE_BACKEND_URL=http://localhost:4000
  ```
- Start the admin panel:
  ```
  npm run dev
  ```
- Open the provided local URL (e.g., `http://localhost:5174`) in a browser.

### 5. Testing the Application
- Access the frontend and admin panel URLs in the browser.
- Use the credentials provided for admin login or create new users via the frontend.
- Test various features like:
  - Product listing  
  - Cart  
  - Checkout  
  - Admin management  

### 6. Common Issues and Troubleshooting

#### Error: Port Already in Use  
- Stop any process running on the same port or use a different port.

#### Database Connection Issues  
- Ensure MongoDB is running and the URI in `.env` is correct.

#### Environment Variables Not Working  
- Double-check the `.env` file and restart the server.
```


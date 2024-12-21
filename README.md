
# Setup Instructions to Set Up and Test the Project Locally

## Prerequisites
- Install **Node.js** (latest LTS version recommended).
- Install **Git** (if needed).
- *(Optional)* Install a code editor like **VS Code**.
- Sign Up for MongoDB and connect

### Steps to Sign Up for MongoDB and Get the Connection String

### 1. **Sign Up for MongoDB Atlas**
MongoDB Atlas is a cloud service that provides MongoDB databases.

- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Click **Sign Up** (or **Start Free**).

### 2. **Create a Cluster**
- After logging in, you'll see a prompt to **Build a Cluster**.
- Choose the **Free Tier** option (which is free for development purposes).
- Select a **Cloud Provider** (AWS, Google Cloud, or Azure) and a **Region** closest to you.
- Click **Create Cluster**. The cluster creation will take a few minutes.

### 3. **Create a Database User**
- Once your cluster is ready, go to the **Database Access** tab.
- Click **Add New Database User**.
- Set a **username** and **password** for your MongoDB user.
- Choose the **Database User Privileges**. For basic use, you can select **Read and write to any database**.
- Click **Add User**.

### 4. **Get Your Connection String**
- Go to the **Clusters** tab and click on **Connect** next to your cluster.
- Select **Connect Your Application**.
- Choose the **Node.js** driver version that matches your project (you can select the latest version).
- MongoDB will provide a connection string in the following format:

  ```
  mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<dbname>?retryWrites=true&w=majority
  ```

  Replace the following placeholders:
  - `<username>`: Your MongoDB user username.
  - `<password>`: Your MongoDB user password.
  - `<cluster-name>`: The name of your MongoDB Atlas cluster.
  - `<dbname>`: The name of the database you want to connect to (you can use any database name, or `test` as a default).

### 5. Save the Connection String for Later


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
- Ensure the backend is running and note the URL (`http://localhost:4000`).

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
- Open the provided local URL (`http://localhost:5173`) in a browser. Make sure your port is not in use.

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
- Open the provided local URL (`http://localhost:5174`) in a browser. Make sure your port is not in use.

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






# Instructions to Test Online

### 1. Links to Frontend & Admin

  https://4413pj-front.vercel.app/

  https://4413pj-admin.vercel.app/

### 2. Network error -> Refresh the page
### 3. Admin credentials
- Use admin credentials to login as admin on admin page
  ```
  admin email :
  ```
  admin@admin.com
  admiinn password :
  ```
  pwadminpw
  ```

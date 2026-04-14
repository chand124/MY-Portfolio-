# MERN Portfolio

This workspace contains a MERN portfolio application converted from a static HTML portfolio.

## Structure

- `frontend/` - React frontend application
- `backend/` - Express + MongoDB API backend
- `my-portfolio.html` - original static portfolio file preserved as backup

## Setup

1. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## Run

1. Create a `.env` file in `backend/` using `backend/.env.example`.
2. Start the backend:
   ```bash
   cd backend
   npm run dev
   ```
3. Start the frontend:
   ```bash
   cd ../frontend
   npm start
   ```

The React app will run at `http://localhost:3000` and proxy API requests to `http://localhost:5000`.

## Production build

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Start the backend in production mode:
   ```bash
   cd ../backend
   NODE_ENV=production npm start
   ```

## Deploying to Heroku (or similar platform)

1. Install the Heroku CLI if you don't already have it:
   ```bash
   curl https://cli-assets.heroku.com/install.sh | sh
   ```
2. Log in to Heroku:
   ```bash
   heroku login
   ```
3. From the project root (`my-portfolio`), create a new app:
   ```bash
   cd c:\Users\DELL\Desktop\my-portfolio
   heroku create your-app-name
   ```
4. Set your MongoDB connection string:
   ```bash
   heroku config:set MONGO_URI="your-mongodb-uri"
   ```
5. Commit your changes if needed:
   ```bash
   git add .
   git commit -m "Prepare MERN portfolio for Heroku deployment"
   ```
6. Push to Heroku:
   ```bash
   git push heroku main
   ```
7. Open the deployed app:
   ```bash
   heroku open
   ```

Heroku will install the backend dependencies, install and build the frontend from `frontend/`, and serve the React app through the Express server.

## Notes

- The contact form posts to `POST /api/contact` and saves messages to MongoDB.
- Use MongoDB locally or a cloud MongoDB connection string in `.env`.

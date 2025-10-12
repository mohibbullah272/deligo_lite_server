# Deligo Lite - Backend

## Project Overview
Deligo Lite's backend powers a food order and ride-sharing platform, enabling users to order food, manage carts, view order confirmations, and book rides between locations. It provides a robust API to handle authentication, restaurant management, order processing, and ride-sharing services, ensuring a seamless experience for the frontend application.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mohibbullah272/deligo-lite-backend.git
   cd deligo-lite-backend
   ```

2. **Install Dependencies**:
   Ensure Node.js is installed, then run:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the root directory and add the necessary environment variables. Example:
   ```env
   PORT=5000
   DATABASE_URL=your_database_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000` (or the specified port).

5. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

## Technologies Used
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for storing user, order, restaurant, and ride data.
- **JWT**: JSON Web Tokens for secure user authentication.
- **TypeScript**: Adds static types for improved code reliability.
- **Mongoose**: ODM for MongoDB to manage database schemas and queries.

## API Documentation (Summary)
The backend provides RESTful API endpoints for managing authentication, restaurants, orders, and rides. Below is a summary of the main routes:

- **Authentication (`/auth`)**:
  - `POST /signup`: Create a new user account.
  - `POST /login`: Authenticate a user and return a JWT token.

- **Restaurants (`/restaurants`)**:
  - `POST /add`: Add a new restaurant.
  - `GET /`: Retrieve all restaurants.
  - `GET /:id`: Get details of a specific restaurant.
  - `PATCH /:id`: Update a restaurant's details.
  - `DELETE /`: Delete a restaurant.

- **Orders (`/orders`)**:
  - `POST /`: Create a new food order.
  - `GET /:id`: Retrieve order details by ID.
  - `GET /user-order/:email`: Fetch all orders for a specific user by email.

- **Rides (`/rides`)**:
  - `POST /`: Book a new ride.
  - `GET /user-ride/:email`: Retrieve all rides for a specific user by email.
  - `GET /rider/:vehicleType`: Find available riders by vehicle type.
  - `GET /:id`: Get details of a specific ride.
  - `POST /rider`: Create a new rider profile.

## Demo Link
The backend is deployed and integrated with the frontend at: [https://deligo-lite-server.onrender.com/](https://deligo-lite-server.onrender.com/)

© 2025 Deligo Lite. All rights reserved.

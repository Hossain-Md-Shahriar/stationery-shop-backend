# Stationery Shop Server

An Express application with TypeScript, integrating MongoDB with Mongoose to manage a Stationery Shop.

---

## Features

- CRUD operations for products and orders
- Mongoose is used for shema definition and data operation
- Error is properly handled for scenarios like invalid input, missing data, and insufficient stock.
- Schema validation is applied to maintain data integrity
- This application also uses mongoose hooks/middleware.

---

## Tech Stack

- TypeScript
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. Create a **\`.env\`** file in the root directory and add the following environment variables:

   ```env
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/your-database-name
   ```

---

## Running the Project

**Run the development server**

```sh
npm run start:dev
```

The server should start at `http://localhost:5000`

---

## Linting and Formatting

This project uses ESLint and Prettier for code quality and formatting.

- To check for linting errors:
  ```sh
  npm run lint
  ```
- To fix linting issues automatically:
  ```sh
  npm run lint:fix
  ```
- To format code using Prettier:
  ```sh
  npm run format
  ```

---

## API Endpoints

### Product Routes

- `POST /api/products` - Create a new product
- `GET /api/products` - Retrieve all products
- `GET /api/products/:productId` - Retrieve a single product
- `PUT /api/products/:productId` - Update a product
- `DELETE /api/products/:productId` - Delete a product

### Order Routes

- `POST /api/orders` - Create a new order
- `GET /api/orders` - Retrieve all orders
- `GET /api/orders/revenue` - Calculate Revenue from Orders

---

## Scripts

- `npm run start:dev` - Run the server in development mode
- `npm start:prod` - Run the server in production mode
- `npm run build` - Compile TypeScript to JavaScript
- `npm run lint` - Run ESLint checks
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code using Prettier

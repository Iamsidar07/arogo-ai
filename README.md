# Backend 

A simple blog API built with **Express**, **TypeScript**, and **MongoDB**. This API allows you to manage blog posts and provides an AI-powered blog summary feature.

---

## Features

- **CRUD Operations**: Create, read, update, and delete blog posts.
- **AI Summary**: Generate a summary of a blog post using the `/v1/summary/:id` endpoint.
- **TypeScript**: Ensures type safety and better development experience.
- **MongoDB**: A NoSQL database for storing blog post data.

---

## Endpoints

### **Posts Management** (`/v1/posts`)

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| `GET`  | `/v1/posts`       | Get all blog posts       |
| `POST` | `/v1/posts`       | Create a new blog post   |
| `PUT`  | `/v1/posts/:id`   | Update an existing post  |
| `DELETE` | `/v1/posts/:id` | Delete a blog post       |
| `GET`  | `/v1/posts/:id`   | Get a single blog post   |

### **AI Summary** (`/v1/summary/:id`)

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| `GET`  | `/v1/summary/:id`  | Get AI-generated summary of a blog post |

---

## Technologies Used

- **Backend**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **Environment Variables**: Managed using `dotenv`
- **CORS**: Configured for cross-origin requests
- **AI SDK**: Integrated for blog post summaries

---

## Setup Instructions

### 1. Prerequisites

- Node.js (>= 14.x)
- MongoDB (local or cloud, e.g., MongoDB Atlas)

### 2. Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iamsidar07/arogo-ai.git
   cd arogo-ai/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
4. Copy `.env.example` to `.env` and add your MongoDB connection string and AI API key.
```bash
cp .env.example .env
```

3. Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=<your_mongodb_connection_string>
   PORT=3000
   GENERATIVE_AI_API_KEY=<your_ai_api_key>
   FRONTEND_URL=http://localhost:5173
   ```

4. Build the project:
   ```bash
   npm run build
   ```

5. Start the application:
   ```bash
   npm start
   ```

6. For development:
   ```bash
   npm run dev
   ```

---

## API Examples
[You can find all postman examples here](https://documenter.getpostman.com/view/23767535/2sAYJ3F2Nc)


# Frontend

A simple blog frontend built with **React** and **TypeScript**. This frontend allows you to create, read, update, and delete blog posts, as well as view the AI-generated summary of a blog post.

---

## Features

- **CRUD Operations**: Create, read, update, and delete blog posts.
- **AI Summary**: Generate a summary of a blog post using the `/v1/summary/:id` endpoint.
- **TypeScript**: Ensures type safety and better development experience.
- **React**: A popular JavaScript library for building user interfaces.
- **Tanstack router**: A routing library for React.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Query**: A powerful data fetching and caching library for React.
-- **Axios**: A popular HTTP client for making API requests.

---

## Setup Instructions

### 1. Prerequisites

- Node.js (>= 14.x)
- MongoDB (local or cloud, e.g., MongoDB Atlas)

### 2. Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iamsidar07/arogo-ai.git
   cd arogo-ai/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```
4. Start the application:
   ```bash
   npm start
   ```
5. For development:
   ```bash
   npm run dev
   ```


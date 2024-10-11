<img width="1318" alt="Screenshot 2024-10-11 at 11 48 08 AM" src="https://github.com/user-attachments/assets/7c9ab6e1-8bfb-4bc2-a5df-4da57fc28eaf">

# Responsive Chat Interface

This project implements a responsive chat interface using **React**, **Redux**, and **TypeScript** on the front-end, with a **Node.js** mock API backend. The project simulates a chat interaction between a user and an AI, which responds with predefined messages based on the user's input.

## Features
- **Responsive Chat UI**: Mobile-friendly chat interface with user and AI chat bubbles.
- **Redux State Management**: Manages chat history and messages.
- **Node.js Mock API**: Simulates predefined AI responses.
- **Axios Integration**: Handles asynchronous API requests to interact with the mock backend.
- **Loading Indicator**: Displays a loading indicator while waiting for the AI response.
- **Tailwind CSS**: For simple and responsive styling.
  
---

## Getting Started

### Prerequisites

- Node.js installed on your system
- A package manager like `npm` or `yarn`

### Steps to Run the Project Locally

#### 1. Clone the Repository

```bash
git clone https://github.com/Bhanupratap02/chat_app_exercise.git
cd responsive-chat-interface
```

#### 2. Install Dependencies
##### Back-End:
Navigate to the backend directory , install dependencies and run the mock API server:

```bash
cd backend
npm install
```

```bash
npm start
```

By default, the API will run on http://localhost:4000.



##### Front-End:
Navigate to the frontend directory , install dependencies and run the the React development server:

```bash
cd ../frontend
npm install
```


```bash
npm run dev
```
The React app will run on http://localhost:5173/.

---

### Challenges
- **Responsiveness**: Designing a layout that works seamlessly on both desktop and mobile screens. Tailwind CSS made this easier but ensuring consistent behavior across devices required extra attention.
- **TypeScript Setup**: Setting up types for Redux actions, state, and dispatch required careful type-checking to avoid runtime errors and ensure the correct flow of data.

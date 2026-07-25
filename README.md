# 🤖 vue-fastapi-jwt-ai-agent

Last updated: 25-07-2026

A Vue 3 Single Page Application (SPA) using Pinia for state management and JWT authentication, designed to interact with a FastAPI AI Agent backend.

This project demonstrates a complete AI agent frontend architecture:

SPA architecture → authentication → API integration → AI agent → tool execution → agent response display → local development → production build

The application provides an interface where users can ask questions and receive:

- AI-generated answers
- Tools Used
- Steps
- Error handling feedback

## FastAPI Backend

https://github.com/persteenolsen/fastapi-jwt-auth-ai-agent-two

The backend API using FastAPI, JWT authentication, LLM integration, and agent tools such as Wikipedia search, Wikidata and Calculator

The backend provides:

- JWT authentication
- Protected chat endpoint
- AI agent orchestration
- Tool execution
- Structured JSON responses

---

# 🔐 Features

- Vue 3 SPA
- Pinia state management
- JWT authentication
- Automatic Bearer token handling
- Protected API communication
- AI chat interface
- Displays AI responses
- Displays tools used by the agent
- Displays agent execution steps
- Error handling
- Environment-based API configuration
- Vite development server
- Production-ready build

---

# 🧱 Tech Stack

- Node.js 18.19.1
- Vue 3
- Pinia
- Vue Router
- Vite
- Fetch API
- ESLint

---

# 📁 Project Structure

    .
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── src
    │   ├── main.js
    │   ├── App.vue
    │   ├── components
    │   ├── views
    │   ├── stores
    │   │   ├── auth.store.js
    │   │   └── agent.store.js
    │   ├── helpers
    │   │   └── fetch-wrapper-agent.js
    │   └── router
    ├── public
    └── .env

---

# ⚙️ Installation

Clone the repository

    git clone https://github.com/persteenolsen/vue-fastapi-jwt-auth-ai-agent-two.git

Enter the project directory

    cd vue-fastapi-jwt-ai-agent-two

Install dependencies

    npm install

Start the development server

    npm run dev

Open

    http://localhost:3000

---

# 🚀 Development

Run

    npm run dev

Default address

    http://localhost:3000

---

# 📦 Production Build

Create a production build

    npm run build

Preview the production build

    npm run preview

Default preview address

    http://localhost:5050

---

# 🔐 Environment Variables

Create a `.env` file

    VITE_API_URL=http://127.0.0.1:8000

---

# 🧪 Usage

1. Start the FastAPI backend
2. Start the Vue application

       npm run dev

3. Login
4. Ask a question
5. View

   - AI response
   - Tools used
   - Agent execution steps

---

# 📡 API Integration

## Authentication

POST `/login-spa`

Example response

    {
      "access_token": "token-value",
      "token_type": "bearer",
      "username": "admin"
    }

The JWT is stored in the authentication store and automatically included in all protected API requests.

---

## Chat

POST `/chat`

Example request

    {
      "message": "What is Python?"
    }

Example response

    {
      "response": "Python is a high-level, general-purpose programming language...",
      "tools_used": [
        {
          "tool": "wikipedia",
          "query": "Python programming language",
          "success": true
        }
      ],
      "steps": [
        "plan=[{'name': 'wikipedia', 'query': 'Python programming language'}]"
      ],
      "error_id": null
    }

---

# 🧠 Application Flow

    User
      |
      v
    Vue SPA
      |
      v
    JWT Authentication
      |
      v
    FastAPI Backend
      |
      v
    AI Agent
      |
      +---- Select Tool
      |
      +---- Execute Tool
      |
      +---- Generate Response
      |
      v
    Structured JSON Response
      |
      v
    Vue UI

---

# 📋 Displayed Information

After each question the frontend displays

- AI-generated answer
- Tools used
- Execution steps
- Error messages (if any)

Example

Answer

    Python is a high-level, general-purpose programming language...

Tools Used

    ✅ wikipedia
    Query: Python programming language

Steps

    plan=[{'name': 'wikipedia', 'query': 'Python programming language'}]

---

# 🏗️ Design

The project keeps frontend and backend responsibilities clearly separated.

Frontend responsibilities

- Authentication
- State management
- API communication
- Rendering responses
- Error handling

Backend responsibilities

- JWT validation
- Agent orchestration
- Tool execution
- Response generation

This separation makes it easy to replace or extend backend tools without changing the frontend architecture.

---

# 💡 Use Cases

This frontend can serve as a starting point for many authenticated AI applications.

Examples include

- AI assistants
- Knowledge assistants
- Research assistants
- Internal company chatbots
- Documentation assistants
- Customer support assistants
- Enterprise AI portals
- Tool-augmented LLM applications

---

# 👨‍💻 Author

Built as a Vue 3 SPA demonstrating JWT authentication, Pinia state management, and integration with a FastAPI AI Agent backend that returns structured responses including answers, tool usage, and execution steps.

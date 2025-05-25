# Dcycle Tech Challenge

<p align="center">
  <img src="https://img.shields.io/badge/Dcycle-Frontend-22C55E?style=for-the-badge" alt="Dcycle Frontend" />
</p>

A modern web application that analyzes names to predict age, gender, and nationality, while providing AI-powered insights and COVID-19 information.

## 🚀 Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript 5.8
- **Build Tool:** Vite 6
- **Styling:** TailwindCSS 4
- **UI Components:**
  - Shadcn
  - Custom components with TailwindCSS
- **State Management & Data Fetching:** TanStack React Query
- **Routing:** React Router DOM 7
- **HTTP Client:** Axios
- **Charts:** Recharts
- **Date Handling:** date-fns
- **Icons:** Lucide React
- **AI Integration:** Google Generative AI

## 📁 Project Structure

```
src/
├── assets/        # Static assets (images, fonts, etc.)
├── components/    # Reusable UI components
├── config/        # Application configuration
├── consts/        # Constants and enums
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── routes/        # Route definitions
├── services/      # API services and external integrations
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── App.tsx        # Root component
```

## 🛠️ Installation

### Frontend Setup

1. Clone the repository:

```bash
git clone https://github.com/jaddesuarez/dcycle-tech-challenge.git
cd dcycle-tech-challenge
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

### Backend Setup

The backend setup and instructions can be found at [backend-repo](https://github.com/Dacuna97/test-backend-app.git).

## 🔧 Environment Variables

Create a `.env` file in the frontend directory with the following variables:

```env
VITE_BASE_URL=backend_api_url
VITE_GEMINI_API_KEY=your_google_ai_api_key
VITE_GEMINI_API_URL=google_ai_base_url

```

## 🧩 Project Features

- Modern React with TypeScript
- Fast Refresh with Vite
- Type-safe development environment
- Component library with Shadcn
- Responsive design with TailwindCSS
- Data visualization with Recharts
- AI-powered features with Google Generative AI
- Comprehensive ESLint configuration
- Clean and maintainable architecture

<hr/>
<p align="center">
  Made with ❤️ for Dcycle team
</p>

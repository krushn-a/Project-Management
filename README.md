# 🚀 Project Management System

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-06B6D4?logo=tailwindcss)

**A modern, full-stack project management platform for teams to collaborate, track tasks, and manage projects efficiently.**

[Features](#✨-features) • [Tech Stack](#🛠️-tech-stack) • [Getting Started](#🚀-getting-started) • [Project Structure](#📁-project-structure) • [API Documentation](#📚-api-documentation)

</div>

---

## ✨ Features

### 🏢 Workspace Management
- **Multi-workspace Support** - Create and manage multiple workspaces
- **Role-based Access Control** - Admin and Member roles with different permissions
- **Team Collaboration** - Invite members via email with custom messages
- **Workspace Settings** - Customizable workspace configurations

### 📊 Project Management
- **Complete Project Lifecycle** - Track projects from planning to completion
- **Project Status Tracking** - Active, Planning, Completed, On Hold, Cancelled
- **Priority Levels** - Low, Medium, High priority classification
- **Progress Monitoring** - Visual progress indicators and completion tracking
- **Advanced Filtering** - Search and filter by status, priority, and keywords
- **Team Assignment** - Add project members and assign team leads
- **Project Analytics** - Comprehensive analytics and reporting

### ✅ Task Management
- **Task Organization** - Create, assign, and track tasks within projects
- **Task Types** - Task, Bug, Feature, Improvement, Other
- **Status Workflow** - Todo, In Progress, Done
- **Due Date Tracking** - Set and monitor task deadlines
- **Task Assignment** - Assign tasks to team members
- **Comments & Collaboration** - Add comments and discussions on tasks

### 📈 Dashboard & Analytics
- **Real-time Stats** - Live project and task statistics
- **Project Overview** - Visual representation of all projects
- **Recent Activity Feed** - Track team activities and updates
- **Tasks Summary** - Personal task overview and My Tasks sidebar
- **Calendar View** - Project timeline visualization
- **Data Visualization** - Charts and graphs using Recharts

### 🔐 Authentication & Security
- **Clerk Authentication** - Secure user authentication and management
- **Protected Routes** - Middleware-based route protection
- **User Sync** - Automatic user synchronization via webhooks

### 📧 Notifications
- **Email Integration** - Automated email notifications via Nodemailer
- **Background Jobs** - Event-driven tasks using Inngest
- **Real-time Updates** - Toast notifications for user feedback

### 🎨 User Experience
- **Dark Mode Support** - Toggle between light and dark themes
- **Responsive Design** - Mobile-first, fully responsive interface
- **Modern UI Components** - Clean, intuitive interface with Lucide icons
- **Smooth Animations** - Enhanced user interactions

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| ⚛️ **React 19** | Modern UI library with latest features |
| 🎨 **TailwindCSS 4** | Utility-first CSS framework |
| 🔄 **Redux Toolkit** | State management |
| 🛣️ **React Router v7** | Client-side routing |
| 📊 **Recharts** | Data visualization |
| 🎭 **Lucide React** | Beautiful icon library |
| 🔥 **React Hot Toast** | Elegant notifications |
| 🔒 **Clerk React** | Authentication SDK |
| ⚡ **Vite 7** | Lightning-fast build tool |

### Backend
| Technology | Purpose |
|------------|---------|
| 🟢 **Node.js** | JavaScript runtime |
| 🚂 **Express 5** | Web application framework |
| 🔷 **Prisma 7** | Next-generation ORM |
| 🐘 **PostgreSQL** | Relational database (Neon serverless) |
| 🔐 **Clerk Express** | Backend authentication |
| 📧 **Nodemailer** | Email service integration |
| ⚡ **Inngest** | Background job processing |
| 🌐 **CORS** | Cross-origin resource sharing |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **PostgreSQL** database (or Neon serverless account)
- **Clerk** account for authentication
- **SMTP** credentials for email (e.g., Brevo)
- **npm** or **yarn** package manager

### Installation

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/project-management.git
cd project-management
```

#### 2️⃣ Backend Setup
```bash
cd server

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
```

Create a `.env` file in the `server` directory:
```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database"

# Clerk
CLERK_SECRET_KEY="your_clerk_secret_key"
CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"

# Email (Brevo/Sendinblue)
SMTP_USER="your_smtp_user"
SMTP_PASS="your_smtp_password"
SENDER_EMAIL="your_sender_email@example.com"

# Inngest
INNGEST_EVENT_KEY="your_inngest_event_key"
INNGEST_SIGNING_KEY="your_inngest_signing_key"

# Server
PORT=5000
```

```bash
# Generate Prisma client and run migrations
npx prisma generate
npx prisma migrate dev

# Start the server
npm run server
```

#### 3️⃣ Frontend Setup
```bash
cd ../client

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
```

Create a `.env` file in the `client` directory:
```env
VITE_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
VITE_API_URL="http://localhost:5000"
```

```bash
# Start the development server
npm run dev
```

#### 4️⃣ Access the Application
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000
- **Inngest Dev Server**: http://localhost:5000/api/inngest

---

## 📁 Project Structure

```
project-management/
├── client/                          # Frontend React application
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── app/
│   │   │   └── store.js            # Redux store configuration
│   │   ├── components/             # Reusable UI components
│   │   │   ├── AddProjectMember.jsx
│   │   │   ├── CreateProjectDialog.jsx
│   │   │   ├── CreateTaskDialog.jsx
│   │   │   ├── InviteMemberDialog.jsx
│   │   │   ├── MyTasksSidebar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectAnalytics.jsx
│   │   │   ├── ProjectCalendar.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectOverview.jsx
│   │   │   ├── ProjectSettings.jsx
│   │   │   ├── ProjectsSidebar.jsx
│   │   │   ├── ProjectTasks.jsx
│   │   │   ├── RecentActivity.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StatsGrid.jsx
│   │   │   ├── TasksSummary.jsx
│   │   │   └── WorkspaceDropdown.jsx
│   │   ├── configs/
│   │   │   └── api.js              # Axios configuration
│   │   ├── features/               # Redux slices
│   │   │   ├── themeSlice.js
│   │   │   └── workspaceSlice.js
│   │   ├── pages/                  # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── ProjectDetails.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── TaskDetails.jsx
│   │   │   └── Team.jsx
│   │   ├── App.jsx                 # Main App component
│   │   ├── main.jsx               # Application entry point
│   │   └── index.css              # Global styles
│   ├── eslint.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                          # Backend Express application
│   ├── config/
│   │   ├── nodemailer.js           # Email configuration
│   │   └── prisma.js              # Prisma client instance
│   ├── controllers/
│   │   ├── commentController.js    # Comment CRUD operations
│   │   ├── projectController.js    # Project management logic
│   │   ├── taskController.js       # Task management logic
│   │   └── workSpaceController.js  # Workspace operations
│   ├── middlewares/
│   │   └── authMiddleware.js       # Authentication middleware
│   ├── inngest/
│   │   └── index.js               # Background jobs & webhooks
│   ├── prisma/
│   │   └── schema.prisma          # Database schema
│   ├── routes/
│   │   ├── commentRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── taskRoutes.js
│   │   └── workSpaceRoute.js
│   ├── server.js                   # Express server entry point
│   └── package.json
│
└── README.md
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
All API routes (except Inngest webhooks) require authentication via Clerk. Include the Clerk session token in your requests.

### Endpoints

#### 🏢 Workspaces

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/workspaces` | Get all workspaces for authenticated user |
| `POST` | `/workspaces` | Create a new workspace |
| `POST` | `/workspaces/add-member` | Add member to workspace |
| `PUT` | `/workspaces/:id` | Update workspace |
| `DELETE` | `/workspaces/:id` | Delete workspace |

#### 📊 Projects

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/projects/:workspaceId` | Get all projects in workspace |
| `GET` | `/projects/detail/:projectId` | Get project details |
| `POST` | `/projects` | Create a new project |
| `PUT` | `/projects/:id` | Update project |
| `DELETE` | `/projects/:id` | Delete project |
| `POST` | `/projects/add-member` | Add member to project |

#### ✅ Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/tasks/:projectId` | Get all tasks in project |
| `GET` | `/tasks/detail/:taskId` | Get task details |
| `POST` | `/tasks` | Create a new task |
| `PUT` | `/tasks/:id` | Update task |
| `DELETE` | `/tasks/:id` | Delete task |

#### 💬 Comments

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/comments/:taskId` | Get all comments for task |
| `POST` | `/comments` | Add comment to task |
| `PUT` | `/comments/:id` | Update comment |
| `DELETE` | `/comments/:id` | Delete comment |

### Example Request

```javascript
// Create a new project
const response = await axios.post('/api/projects', {
  workspaceId: 'workspace_id',
  name: 'New Project',
  description: 'Project description',
  status: 'ACTIVE',
  priority: 'HIGH',
  team_lead: 'teamlead@example.com',
  team_members: ['member1@example.com', 'member2@example.com'],
  start_date: '2024-01-01',
  end_date: '2024-12-31',
  progress: 0
}, {
  headers: {
    'Authorization': `Bearer ${clerkToken}`
  }
});
```

---

## 🗄️ Database Schema

The application uses Prisma ORM with PostgreSQL. Key models include:

- **User** - User accounts and authentication
- **Workspace** - Team workspaces
- **WorkspaceMember** - Workspace membership with roles
- **Project** - Projects within workspaces
- **ProjectMember** - Project team members
- **Task** - Tasks within projects
- **Comment** - Task comments and discussions

### Enums
- **WorkspaceRole**: `ADMIN`, `MEMBER`
- **TaskStatus**: `TODO`, `IN_PROGRESS`, `DONE`
- **TaskType**: `TASK`, `BUG`, `FEATURE`, `IMPROVEMENT`, `OTHER`
- **ProjectStatus**: `ACTIVE`, `PLANNING`, `COMPLETED`, `ON_HOLD`, `CANCELLED`
- **Priority**: `LOW`, `MEDIUM`, `HIGH`

---

## 🔄 Background Jobs (Inngest)

The application uses Inngest for handling background jobs and webhook events:

### Clerk Webhooks
- **User Creation** - Automatically creates user in database when registered via Clerk
- **User Update** - Syncs user profile updates from Clerk
- **User Deletion** - Removes user data when account is deleted

### Email Notifications
- **Task Assignment** - Notifies users when assigned to tasks
- **Project Invitations** - Sends invitation emails to workspace members
- **Due Date Reminders** - Automated reminders for upcoming deadlines

---

## 🎨 Theming

The application supports light and dark modes with theme persistence. Toggle theme using the theme switcher in the navigation bar.

Theme state is managed via Redux and stored in localStorage.

---

## 🚀 Deployment

### Recommended Platforms

#### Frontend (Vercel)
```bash
cd client
vercel deploy
```

Configuration is already set in `client/vercel.json`

#### Backend (Vercel/Railway/Render)
```bash
cd server
vercel deploy
```

Configuration is already set in `server/vercel.json`

### Environment Variables
Ensure all environment variables are configured in your deployment platform.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

Built with ❤️ by your development team

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI Library
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [Prisma](https://www.prisma.io/) - Database ORM
- [Clerk](https://clerk.com/) - Authentication
- [Inngest](https://www.inngest.com/) - Background Jobs
- [Vercel](https://vercel.com/) - Deployment Platform
- [Lucide](https://lucide.dev/) - Icon Library

---

<div align="center">

**If you find this project useful, please consider giving it a ⭐!**

[Report Bug](https://github.com/yourusername/project-management/issues) • [Request Feature](https://github.com/yourusername/project-management/issues)

</div>

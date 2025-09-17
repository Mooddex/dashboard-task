# Business Dashboard Application

A modern, responsive business management dashboard built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.
It provides client management, product tracking, analytics, and secure authentication — optimized for both developers and businesses.

---

## ✨ Features

### 🔐 Authentication

- Secure login with **NextAuth.js** (Google OAuth integration)
- Mock JWT/local storage authentication for testing

### 👥 Business Management

- Complete **CRUD** for client and products data
- Product inventory & administration tools

### 📊 Insights & Reports

- Analytics dashboard with **Recharts**
- Real-time updates with optimistic UI + error handling

### 🎨 UI & UX

- Responsive design for mobile → desktop
- Dark/Light theme with system preference detection
- Notifications with **React Toastify**
- Built with **shadcn/ui** for consistent, elegant design

---

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Forms:** [React Hook Form](https://react-hook-form.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 🏗️ Why This Stack?

- **Next.js 14 (App Router)** → Modern React + server components
- **TypeScript** → Type safety for maintainability
- **shadcn/ui + Tailwind** → Fast, consistent styling system
- **NextAuth.js** → Secure, production-ready authentication
- **Recharts** → Clean, interactive data visualizations

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── dashboard/          # Dashboard pages
│   │   ├── client/         # Client management
│   │   ├── product/        # Product management
│   │   └── reports/        # Analytics & reports
│   ├── actions/            # Server actions
│   └── api/                # API routes
├── components/             # Reusable components
│   ├── ui/                 # Base UI components (shadcn/ui)
│   ├── main/               # Layout components
│   ├── _clients/           # Client-specific components
│   ├── _products/          # Product-specific components
│   └── charts/             # Chart components
├── lib/                    # Utilities and configurations
├── types/                  # TypeScript type definitions
└── hooks/                  # Custom React hooks
```

---

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dashboard-task
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

1.**Run the development server**

```bash

npm run dev

```

1. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔧 Environment Variables

| Variable               | Description                         | Required |
| ---------------------- | ----------------------------------- | -------- |
| `NEXTAUTH_SECRET`      | Secret key for NextAuth.js sessions | Yes      |
| `NEXTAUTH_URL`         | Base URL of your application        | Yes      |
| `GOOGLE_CLIENT_ID`     | Google OAuth client ID              | Yes      |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret          | Yes      |

### Setting up Google OAuth

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:

   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

---

## 📊 Data Sources & API Integration

### External APIs

- **JSONPlaceholder**: Primary data source for users/clients

  - Users: `https://api.mockae.com/fakeapi/users`
  - Products: `https://api.mockae.com/fakeapi/products`

### Internal API Routes

- `/api/auth/[...nextauth]` → Authentication endpoints
- `app/actions/` → Server actions for data mutations

### Data Management

- **Clients**: Fetched from mockae users API 
- **Products**: Mock data with local state management
- **Real-time Updates**: Optimistic UI with error handling

---

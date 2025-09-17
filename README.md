# 🚀 Business Dashboard - Modern Admin Panel

<div align="center">

![Dashboard Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**A powerful, responsive business management dashboard built with cutting-edge technologies**

[🔥 Live Demo](https://dashboard-task-murex.vercel.app) • [📚 Documentation](./docs/overview.md)
 • [🐛 Report Bug](https://github.com/Mooddex/dashboard-task/issues)

</div>

---

## ✨ Features

### 🎯 Core Functionality
- 📊 **Real-time Analytics Dashboard** - Interactive charts and KPI metrics
- 👥 **Client Management** - Complete CRUD operations with advanced filtering
- 📦 **Product Inventory** - Stock tracking and product administration
- 📈 **Sales Reports** - Comprehensive business insights and analytics
- 🔍 **Advanced Search & Filtering** - Quick data discovery across all modules

### 🔐 Authentication & Security
- 🔑 **NextAuth.js Integration** - Secure Google OAuth authentication
- 🛡️ **Protected Routes** - Role-based access control
- 🔐 **Session Management** - Secure user sessions with JWT

### 🎨 User Experience
- 📱 **Fully Responsive** - Mobile-first design approach
- 🌙 **Dark/Light Mode** - System preference detection
- 🎯 **Intuitive Navigation** - Sidebar with breadcrumb navigation
- ⚡ **Real-time Updates** - Optimistic UI with error handling
- 🔔 **Smart Notifications** - Toast notifications for user feedback

### 🛠️ Developer Experience
- 🏗️ **Modular Architecture** - Clean component separation
- 📝 **TypeScript** - Full type safety and IntelliSense
- 🎨 **Consistent Styling** - shadcn/ui + Tailwind CSS
- 📊 **Interactive Charts** - Recharts integration
- 🔄 **Form Validation** - React Hook Form with Zod schemas

---

## 🖼️ Screenshots

### Dashboard Overview
```
┌─────────────────────────────────────────────────────────────┐
│ 📊 Analytics Dashboard                                      │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐           │
│ │ Clients │ │Products │ │ Sales   │ │ Revenue │           │
│ │  1,234  │ │  5,678  │ │ $45.2K  │ │ $123.4K │           │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘           │
│                                                             │
│ ┌─────────────────────────┐ ┌─────────────────────────────┐ │
│ │     Sales Trends        │ │    Top Products             │ │
│ │  📈 Interactive Chart   │ │  📦 Product Categories     │ │
│ └─────────────────────────┘ └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Client Management
```
┌─────────────────────────────────────────────────────────────┐
│ 👥 Client Management                          ➕ Add Client │
├─────────────────────────────────────────────────────────────┤
│ 🔍 Search: [____________]  🏷️ Filter: [All Countries ▼]   │
├─────────────────────────────────────────────────────────────┤
│ Name          │ Email              │ Country    │ Actions   │
├─────────────────────────────────────────────────────────────┤
│ John Doe      │ john@example.com   │ 🇺🇸 USA     │ ✏️ 🗑️     │
│ Jane Smith    │ jane@company.co    │ 🇬🇧 UK      │ ✏️ 🗑️     │
│ Ahmed Hassan  │ ahmed@tech.io      │ 🇪🇬 Egypt   │ ✏️ 🗑️     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Tech Stack

### Frontend Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://typescriptlang.org/)** - Type-safe development
- **[React 18](https://react.dev/)** - UI library with concurrent features

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components
- **[Lucide React](https://lucide.dev/)** - Beautiful SVG icons
- **[Recharts](https://recharts.org/)** - Composable charting library

### Authentication & Forms
- **[NextAuth.js](https://next-auth.js.org/)** - Complete auth solution
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[Prettier](https://prettier.io/)** - Code formatter
- **[Husky](https://typicode.github.io/husky/)** - Git hooks

---

## 📁 Project Structure

```
dashboard-task/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── 📂 actions/            # Server Actions
│   │   │   ├── authActions.ts     # Authentication logic
│   │   │   ├── client.ts          # Client management
│   │   │   └── product.ts         # Product management
│   │   ├── 📂 api/               # API Routes
│   │   │   └── auth/              # NextAuth endpoints
│   │   ├── 📂 dashboard/         # Protected dashboard pages
│   │   │   ├── 📂 client/        # Client management pages
│   │   │   ├── 📂 product/       # Product management pages
│   │   │   ├── 📂 reports/       # Analytics & reports
│   │   │   ├── layout.tsx        # Dashboard layout
│   │   │   └── page.tsx          # Dashboard home
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Landing page
│   │   └── not-found.tsx         # 404 page
│   ├── 📂 components/            # Reusable components
│   │   ├── 📂 ui/               # Base UI components (shadcn/ui)
│   │   ├── 📂 main/             # Layout components
│   │   ├── 📂 charts/           # Chart components
│   │   ├── 📂 _clients/         # Client-specific components
│   │   ├── 📂 _products/        # Product-specific components
│   │   ├── 📂 _buttons/         # Action buttons
│   │   └── 📂 _cards/           # Dashboard cards
│   ├── 📂 lib/                  # Utilities & configurations
│   │   ├── auth.ts              # NextAuth configuration
│   │   ├── utils.ts             # Utility functions
│   │   └── validators.ts        # Zod schemas
│   ├── 📂 hooks/               # Custom React hooks
│   ├── 📂 types/               # TypeScript definitions
│   └── middleware.ts           # Next.js middleware
├── 📂 public/                  # Static assets
├── components.json            # shadcn/ui configuration
├── tailwind.config.js         # Tailwind configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies & scripts
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or later
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mooddex/dashboard-task.git
   cd dashboard-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure environment variables**
   ```env
   # Authentication
   NEXTAUTH_SECRET=your-super-secret-key
   NEXTAUTH_URL=http://localhost:3000
   
   # Google OAuth (Optional)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) 🎉

---

## 🔧 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXTAUTH_SECRET` | Secret for NextAuth.js sessions | ✅ Yes | - |
| `NEXTAUTH_URL` | Base URL of your application | ✅ Yes | `http://localhost:3000` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | ❌ Optional | - |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | ❌ Optional | - |

### 🔐 Setting up Google OAuth

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable the **Google+ API**
4. Create **OAuth 2.0 credentials**
5. Add authorized redirect URIs:
   - Development: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://yourdomain.com/api/auth/callback/google`

---

## 📊 API Integration

### External APIs

| Service | Endpoint | Purpose |
|---------|----------|---------|
| **MockAPI** | `https://api.mockae.com/fakeapi/users` | Client data |
| **Products API** | `https://api.mockae.com/fakeapi/products` | Product inventory |

### Internal API Routes

```typescript
// Authentication
POST   /api/auth/signin
POST   /api/auth/signout
GET    /api/auth/session

// Server Actions (App Router)
// clients
GET    app/actions/client.ts       # Fetch clients
POST   app/actions/client.ts       # Create client
PUT    app/actions/client.ts       # Update client
DELETE app/actions/client.ts       # Delete client

// products
GET    app/actions/product.ts      # Fetch products
POST   app/actions/product.ts      # Create product
PUT    app/actions/product.ts      # Update products
DELETE app/actions/product.ts      # Delete products
```

---

## 🎨 UI Components

### Component Categories

1. **Layout Components** (`/components/main/`)
   - `NavBar.tsx` - Top navigation
   - `SideBar.tsx` - Navigation sidebar
   - `Main.tsx` - Main content wrapper

2. **Data Display** (`/components/_cards/`)
   - `DashboardCard.tsx` - KPI metric cards
   - `TotalClients.tsx` - Client statistics
   - `TotalProducts.tsx` - Product statistics
   - `TotalSalesCard.tsx` - Sales metrics

3. **Interactive Charts** (`/components/charts/`)
   - `ChartLine.tsx` - Line charts
   - `CircleChart.tsx` - Pie charts
   - `ChartsCard.tsx` - Chart containers

4. **Forms & Actions** (`/components/_buttons/`)
   - `AddClientButton.tsx` - Client creation
   - `AddProductButton.tsx` - Product creation
   - `ActionButton.tsx` - Generic actions

### Styling System

```typescript
// Tailwind + shadcn/ui classes
const cardStyles = "rounded-lg border bg-card text-card-foreground shadow-sm"
const buttonStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium"
const inputStyles = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
sm:   640px   /* Small devices */
md:   768px   /* Medium devices */
lg:   1024px  /* Large devices */
xl:   1280px  /* Extra large devices */
2xl:  1536px  /* 2X Extra large devices */
```

### Mobile Navigation
- Collapsible sidebar on mobile
- Bottom navigation for quick actions
- Touch-friendly button sizes (min 44px)
- Swipe gestures for table navigation

---

## 🧪 Testing & Quality

### Code Quality Tools
```bash
# Linting
npm run lint

# Type checking
npm run type-check

# Format code
npm run format

# Build for production
npm run build
```

### Testing Commands
```bash
# Unit tests (if implemented)
npm run test

# E2E tests (if implemented)
npm run test:e2e

# Coverage report
npm run test:coverage
```

---

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push

```bash
# Manual deployment
vercel --prod
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment-specific Builds
```bash
# Development
npm run dev

# Production build
npm run build && npm start

# Static export (if needed)
npm run build && npm run export
```

---

## 🔍 Performance Optimization

### Core Web Vitals
- ⚡ **LCP**: < 2.5s (Large Contentful Paint)
- 🎯 **FID**: < 100ms (First Input Delay)
- 📏 **CLS**: < 0.1 (Cumulative Layout Shift)

### Optimization Techniques
- **Code Splitting**: Dynamic imports for heavy components
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: `npm run analyze`
- **Lazy Loading**: React.lazy() for non-critical components

---

## 🤝 Contributing

We welcome contributions! .

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use conventional commit messages
- Add tests for new features
- Update documentation

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[Next.js Team](https://nextjs.org/)** - Amazing React framework
- **[shadcn](https://ui.shadcn.com/)** - Beautiful UI components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vercel](https://vercel.com/)** - Seamless deployment platform

---

## 📞 Support & Contact

- 📧 **Email**: mailto:msalama027@gmail.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/Mooddex/dashboard-task/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Mooddex/dashboard-task/discussions)
- 🌟 **Star this repo** if you found it helpful!

---

<div align="center">

**Built with ❤️ by [Mahmoud](https://github.com/Mooddex)**

[⬆️ Back to Top](#-business-dashboard---modern-admin-panel)

</div>

---

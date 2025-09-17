# 📚 Business Dashboard Documentation

## 📖 Business Context

A lightweight dashboard for managing clients and products.
It lets users browse, add, edit, and track data entries.
This is the foundation for larger platform modules.

---

## 🛠️ Tasks

* **Layout & Components**

  * Sidebar + main content
  * Reusable UI (buttons, modals, tables)

* **Data Integration**

  * Fetch and display data from APIs
  * Paginated and searchable tables

* **Forms & State**

  * Add/edit entries with forms
  * Manage state with React hooks

* **Notifications & Errors**

  * Show loading and error states
  * Success/error notifications

* **Bonus**

  * Basic authentication (NextAuth)
  * Clean Tailwind styling

---

## 🧰 Tech Stack

* **Frontend:** Next.js (React + TypeScript)
* **UI:** Tailwind CSS + Shadcn UI
* **State Management:** React Hooks
* **API:** REST endpoints (clients, products, auth)
* **Version Control:** GitHub

---

## 📑 Features

* Secure login/signup with NextAuth
* Manage clients (CRUD)
* Manage products (CRUD)
* Reports and analytics with charts
* Notifications for success/errors
* Responsive design

---

## 🔌 API Endpoints & Actions

### Auth
* `POST /api/auth/register` – Create a new user account  
* `POST /api/auth/login` – Log in with credentials  
* `POST /api/auth/logout` – Log out the current session  

**Actions**  
- `signUpAction(data)` → Registers a new user  
- `signInAction(data)` → Logs in with credentials  
- `signOutAction()` → Logs out the current user  

---

### Clients
* `GET /api/clients` – Get all clients  
* `GET /api/clients/:id` – Get a specific client by ID  
* `POST /api/clients` – Add a new client  
* `PUT /api/clients/:id` – Update a client’s details  
* `DELETE /api/clients/:id` – Remove a client  

**Actions**  
- `fetchClients()` → Fetches all clients from the API  
- `addClientAction(data)` → Adds a new client  
- `updateClientAction(id, data)` → Updates client info  
- `deleteClientAction(id)` → Deletes a client  

---

### Products
* `GET /api/products` – Get all products  
* `GET /api/products/:id` – Get a specific product by ID  
* `POST /api/products` – Add a new product  
* `PUT /api/products/:id` – Update a product’s details  
* `DELETE /api/products/:id` – Remove a product  

**Actions**  
- `fetchProducts()` → Fetches all products  
- `addProductAction(data)` → Adds a new product  
- `updateProductAction(id, data)` → Updates product details  
- `deleteProductAction(id)` → Deletes a product  

---

## 🏗️ Architecture Overview

* **App Router (`/app`)** – Pages and layouts
* **Actions (`/app/actions`)** – Server actions for clients/products/auth
* **Components (`/src/components`)** – UI elements, charts, tables, forms
* **Lib (`/src/lib`)** – Auth, utils, validators
* **Docs (`/docs/overview.md`)** – Documentation

---

## 📊 State Management

* React hooks (`useState`, `useEffect`)
* `react-hook-form` + `zod` for validation
* Transitions for smooth updates

---

## 🐛 Error Handling

* Toast notifications for errors
* Skeleton loaders during fetch
* Graceful fallback for not-found

---

## 🎨 Styling

* Tailwind CSS utilities
* Shadcn UI components
* Responsive layout

---

## 📱 Mobile

* Responsive sidebar + main content
* Works on mobile, tablet, desktop

---

## ⚡ Performance

* Client-side caching with hooks
* Pagination for large data
* Lazy-loaded components

---

## 📝 Setup

```bash
git clone https://github.com/Mooddex/dashboard-task
cd dashboard-task
npm install
npm run dev
```

---

## 🌐 Demo

[🔥 Live Demo](https://dashboard-task-murex.vercel.app)

---


## 🚀 How to Use

1. **Login or Sign Up**

   * Go to the landing page
   * Create an account or log in with your credentials

2. **Dashboard Overview**

   * Sidebar navigation for Clients, Products, Reports
   * Quick stats cards on the main page

3. **Manage Clients**

   * Add new clients
   * Edit existing client info
   * Search, filter, and paginate client list

4. **Manage Products**

   * Add new products
   * Edit product details
   * Track inventory and stock

5. **Reports**

   * View charts and analytics
   * Track sales, categories, and client data

6. **Notifications**

   * Success and error messages show for every action
   * Errors handled gracefully with fallback screens

---

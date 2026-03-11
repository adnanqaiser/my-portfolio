# Adnan Qaiser - Portfolio

This is a modern, high-performance portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

To get this project running locally on your machine, follow these steps:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Installation
Open your terminal in the project folder and run:
```bash
npm install
```

### 3. Development
Start the local development server:
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### 4. Build
To create a production-ready build:
```bash
npm run build
```

## 🛠️ Tech Stack
- **Framework:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Vite

## 🌐 WordPress Integration
Since this is a React app, you can't install it as a standard `.zip` theme. Here are the best ways to use it with WordPress:

1. **Static Subdomain (Recommended):** Build the project (`npm run build`) and upload the `dist` folder to a subdomain like `portfolio.yourdomain.com`.
2. **Headless CMS:** Use WordPress as a backend via the **REST API** or **WPGraphQL**. You can fetch your WordPress posts and display them inside this React interface.
3. **Iframe Embedding:** Host this app separately and use an `<iframe>` tag inside a WordPress Custom HTML widget to show it on a specific page.

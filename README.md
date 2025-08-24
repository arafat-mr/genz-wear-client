# GenzWear Next.js E-Commerce

A modern e-commerce web application built with Next.js, MongoDB, and NextAuth for authentication. Users can browse products, view details, post reviews, and make purchases. Admins can manage products, approvals, and users.

## Features
- User registration and login (email/password & Google OAuth)
- Product listing with images, sizes, colors, stock, and prices
- Add new products 
- View latest products
- Responsive design with Tailwind CSS
- Review system per product
- Loading spinners & toast notifications
- Protected routes for admin actions

## Setup & Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/genzwear-nextjs.git
   cd genzwear-nextjs
2. Install dependencies:

npm install

3. Set environment variables in .env.local:

MONGO_DB_URI=your_mongo_db_connection_string
DB_NAME=GenzWearDB
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

4. Run the development server:

 npm run dev

 Visit http://localhost:3000

Route Summary

Public Routes: /, /products, /products/:id, /Login, /Register
API Routes: /api/products (POST), /api/products/:id (GET), /api/users/:email/role (GET), /api/auth/*
Protected/Admin Routes: /dashboard, /dashboard/add-product, /dashboard/users, /dashboard/products

Technologies Used

Next.js, MongoDB, NextAuth.js, Tailwind CSS & DaisyUI, React Hook Form, React Spinners & Lottie Animations, React Toastify
# 🛒 QuickCart – Full Stack E-Commerce Platform

QuickCart is a **modern full-stack e-commerce application** built with **Next.js, MongoDB, Tailwind CSS, Clerk, and Inngest**.  
It demonstrates how to build a scalable online store with authentication, product management, cart functionality, and order handling.

The project focuses on **clean architecture, modern UI design, and real-world production tools**.

---

## ✨ Features

### 🔐 Authentication
- Secure user authentication powered by Clerk
- Easy sign up, sign in, and account management

### 🛍️ Product Management
- Admin dashboard for managing products
- Upload products with images
- Update or remove products easily

### 🛒 Shopping Experience
- Add products to cart
- Place orders seamlessly
- View order history

### ⚙️ Background Jobs
- Event-driven workflows using Inngest
- Handles background tasks and webhooks efficiently

### 🗄️ Database
- Product, order, and user data stored in MongoDB

### 🖼️ Image Storage
- Product images managed via Cloudinary

### 🎨 Modern UI
- Fully responsive interface built with Tailwind CSS

### 🚀 Deployment
- Easily deployed using Vercel "https://quick-cart-gray-xi.vercel.app"

---

# 🧰 Tech Stack

| Category | Technology |
|--------|--------|
| Frontend | Next.js, Tailwind CSS |
| Backend | Next.js API Routes |
| Authentication | Clerk |
| Database | MongoDB |
| Image Hosting | Cloudinary |
| Background Jobs | Inngest |
| Deployment | Vercel |

---

# ⚡ Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/mdsojibmiah/QuickCart.git
cd QuickCart
```
## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Environment Variables
Create a .env file in the root directory and add the following:

```bash
# Public Environment Variables
NEXT_PUBLIC_CURRENCY=$
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

# Private Environment Variables
CLERK_SECRET_KEY=
MONGODB_URI=''
INNGEST_SIGNING_KEY=''
INNGEST_EVENT_KEY=''

# Cloudinary
CLOUDINARY_CLOUD_NAME =''
CLOUDINARY_API_KEY =''
CLOUDINARY_API_SECRET =''
```

## 4️⃣ Run the Development Server

```bash
npm run dev
```

Your application will start at:

```bash
http://localhost:3000
```

---

# 📦 Project Structure

QuickCart
│
├── app
├── assets
├── components
├── config
├── context
├── lib
├── models
├── public
└── .env

---

# 🎯 Future Improvements

- Payment gateway integration (Stripe / Razorpay)
- Product reviews and ratings
- Wishlist functionality
- Advanced search and filters
- Email notifications

---

<p align="center">
  <strong>Built with passion by Aaditya Chhatraliya 🚀</strong>
</p>
# QuickCart Ecommerce

A **Full Stack E-Commerce Website** built using **Next.js**, **MongoDB**, **Tailwind CSS**, **Clerk**, and **Inngest**. This project demonstrates how to build a fully functional e-commerce website with authentication, cart functionality, admin panel, and deployment.!!!

---

## Features

- **User Authentication**: Secure and seamless login/signup using [Clerk](https://clerk.com/).  
- **Background Tasks**: Manage background jobs and webhooks using [Inngest](https://inngest.com/).  
- **Admin Panel**:  
  - Upload and manage products  
  - View orders placed by customers  
- **Cart Functionality**: Users can add products to their cart and place orders.  
- **Database**: Store products, orders, and user data in **MongoDB**.  
- **Image Storage**: Product images are stored in **Cloudinary**.  
- **Frontend Styling**: Responsive and modern UI using **Tailwind CSS**.  
- **Deployment**: Hosted on **Vercel** for free and easy access online.  

---

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS  
- **Backend**: Next.js API routes, Inngest functions  
- **Authentication**: Clerk  
- **Database**: MongoDB  
- **Image Storage**: Cloudinary  
- **Hosting/Deployment**: Vercel  

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mdsojibmiah/QuickCart
cd QuickCart


npm install

.env
MONGO_URI=your_mongodb_connection_string
CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
INNGEST_API_KEY=your_inngest_api_key


npm run dev

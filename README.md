#  Modern eCommerce Web Application

A fully responsive and modern eCommerce web application built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Redux Toolkit**. It provides a smooth and interactive product browsing experience powered by the [DummyJSON API](https://dummyjson.com/).

## 🔗 Live Demo

[View Live](https://ecommerce-shop-project-five.vercel.app/) <!-- Replace with your actual deployed URL -->

---

## 🔧 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **State Management:** Redux Toolkit
- **API:** [DummyJSON](https://dummyjson.com/)
- **HTTP Client:** Axios
---

## ✨ Features

### 🏠 Homepage (`/`)
- **Responsive Navbar** with:
  - Link to **Favorites** page
  - Link to **Create Product**
  - **Dark/Light Mode** toggle
- **Search Bar** to filter products in real-time
- **Product Listing** with:
  - On-scroll Pagination (`?limit=10&skip=10`)
  - Product Card view
  - Favorite/Unfavorite toggle with heart icon
  - Clickable cards to view detailed product info

### 💖 Favorites (`/favourite`)
- View a list of all favorited products
- Easily unfavorite any product

### 🔍 Product Details (`/product/[id]`)
- Each product opens in a **dynamic route**
- View complete product details
- **Edit** product using a modal dialog
- **Delete** product with a confirmation popup
- **Toast notifications** for feedback

### ➕ Create Product (`/create-product`)
- Add a new product through a form
- Toast notification upon successful creation



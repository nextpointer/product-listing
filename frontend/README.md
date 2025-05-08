# 🛍️ E-Commerce Frontend

Frontend for the Product Listing built with **React** and **Bun**.

---

## ✨ Features

### 🔎 Landing Page (Product Search Page)

* Search input field to filter products.
* Displays product cards in a responsive grid layout.

  * Product Card includes:

    * Image
    * Name
    * Price
    * Brand
    * Category
* Clicking a product navigates to its details page.

### 📄 Product Details Page

* Displays:

  * Large product image
  * Product name
  * Price
  * Description
  * Brand
  * Category
* Includes a "Back to Search" button/link.

---

## ⚙️ Functionality

* Products are fetched from the backend API based on search input.
* Clicking on a product routes to a dedicated details page using React Router.
* Uses `Axios` or `Fetch` for making API calls.

---

## 💅 UI/UX Design

* Simple, clean, and responsive interface using grid layout.
* Loading spinners displayed during API calls.
* Toast notifications for API errors or failed requests.

---

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/nextpointer/product-listing.git
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Run the development server**

   ```bash
   bun run dev
   ```

4. **Navigate to the app**

   * [http://localhost:5173](http://localhost:5173)

---

---

## 📦 Dependencies

* React
* React Router
* Axios
* Shadcn
* Bun

---

Made with ❤️ using Bun and React.

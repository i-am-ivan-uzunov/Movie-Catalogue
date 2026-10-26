# FlickHub — Movie Catalogue & Portfolio

> **Live Demo URL:** [https://movie-catalogue-weld.vercel.app](https://movie-catalogue-weld.vercel.app)

FlickHub is a modern movie catalog web application built with **React**, **Vite**, **Bootstrap**, and **Supabase**. The project allows users to browse movies, create their own listings, edit them, and delete them with built-in ownership authorization.

---

## 🚀 Key Features

- **Home Page:** Welcoming overview and introduction to the platform.
- **Catalogue:** Comprehensive list of all added movies with real-time browsing.
- **Movie Details:** Dedicated view showing complete movie information (title, year, genre, poster, description).
- **CRUD Operations:**
  - Registered users can add new movies (`Add Movie`).
  - Only the creator (owner) of the movie has access to the edit (`Edit`) and delete (`Delete`) buttons.
- **Authentication:**
  - **Login & Register:** Clean forms with client-side validation and error handling.
  - **Logout:** Secure session termination.
- **Route Guards:**
  - `AuthGuard` – restricts access to adding and editing pages for logged-in users only.
  - `GuestGuard` – prevents authenticated users from accessing login and registration pages.

---

## 📋 Functional Guide

| Page / View       | Route              | Access Level | Description                                                 |
| :---------------- | :----------------- | :----------- | :---------------------------------------------------------- |
| **Home**          | `/`                | Public (All) | Welcoming overview and introduction to the platform.        |
| **Catalogue**     | `/movies`          | Public (All) | List of all added movies with real-time browsing.           |
| **Movie Details** | `/movies/:id`      | Public (All) | Detailed view of a specific movie. Authors can edit/delete. |
| **Login**         | `/login`           | Guests Only  | User login form with client-side validation.                |
| **Register**      | `/register`        | Guests Only  | User registration form with validation.                     |
| **Add Movie**     | `/add-movie`       | Users Only   | Form to create a new movie entry in the database.           |
| **Edit Movie**    | `/movies/:id/edit` | Owner Only   | Form to update an existing movie created by the user.       |

---

## 🛠️ Tech Stack

- **Frontend Library:** React (v19)
- **Routing:** React Router DOM
- **Build Tool:** Vite
- **Styling:** Bootstrap (with a custom IMDb-style dark theme)
- **Backend & Database:** Supabase (PostgreSQL & Auth)

---

## 🧪 Test Accounts for Evaluation

You can use the following pre-created accounts to test the application features (login, adding movies, editing, and deleting):

- **User 1:** `user1.test.example@gmail.com` / `user111`
- **User 2:** `user2.test.example@gmail.com` / `user222`
- **User 3:** `user3.test.example@gmail.com` / `user333`

---

## 📦 Installation and Local Setup

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   `git clone [https://github.com/i-am-ivan-uzunov/movie-catalogue.git](https://github.com/i-am-ivan-uzunov/movie-catalogue.git)`

2. **Navigate to the project directory:**
   `cd movie-catalogue`

3. **Install dependencies:**
   `npm install`

4. **Create a `.env` file in the root directory of the project and add your Supabase credentials:**
   - `VITE_SUPABASE_URL=your_supabase_url`
   - `VITE_SUPABASE_ANON_KEY=your_supabase_anon_key`

5. **Start the development server:**
   `npm run dev`

---

## 📂 Project Structure

- `src/components/` – Main view components (Header, Footer, Home, MovieCatalogue, MovieDetails, AddMovie, EditMovie, Login, Register)
- `src/contexts/` – Global authentication context (`AuthContext`)
- `src/guards/` – Route protection guards (`AuthGuard`, `GuestGuard`)
- `src/assets/` – Styles and assets (Bootstrap CSS overrides)
- `src/supabaseClient.js` – Supabase configuration and client initialization

---

## 👤 Author

Ivan Uzunov

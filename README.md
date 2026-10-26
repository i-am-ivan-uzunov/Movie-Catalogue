# FlickHub — Movie Catalogue & Portfolio

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

## 📦 Installation and Local Setup

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/i-am-ivan-uzunov/movie-catalogue.git](https://github.com/i-am-ivan-uzunov/movie-catalogue.git)
   ```

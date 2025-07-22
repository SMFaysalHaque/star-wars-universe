# 🌌 **_Star Wars Universe Web App_**

**_Live Website:_** [Star Wars Universe](https://star-wars-universe-silk.vercel.app/)

A visually appealing and interactive web application to explore the vast **Star Wars Universe**, including **People, Films, Species, Starships, Vehicles, and Planets** — with powerful search and filtering functionality.

---

## 📘 **Technical Documentation**

### 🔧 **Tech Stack**

- **Frontend Framework:** React.js (with Vite)
- **CSS Framework:** Tailwind CSS
- **Routing:** React Router
- **HTTP Requests:** Axios
- **Global State:** React Context API
- **Build Tool:** Vite
- **Icons & Assets:** Custom SVG and PNG

### 📂 **Folder Structure**

star-wars/ <br/>
│<br/>
├── public/ # Static assets<br/>
│ └── assets/images/<br/>
├── src/<br/>
│ ├── components/ # Reusable UI components<br/>
│ │ ├── cards/ # PeopleCard & FilmCard<br/>
│ │ └── svgs/ # Custom SVG icons<br/>
│ ├── App.jsx # App shell with routing<br/>
│ ├── main.jsx # Entry point<br/>
│ └── index.css # TailwindCSS styles<br/>
├── package.json<br/>
├── vite.config.js<br/>
└── README.md<br/>


### ⚙️ **Features**

- Dynamic character search with real-time suggestions
- View detailed information for each character
- Paginated lists of Star Wars characters
- Responsive layout with mobile-first design
- Reusable components with clean state management


## 🛠️ **Installation Guide**

### ✅ **Prerequisites**

- Node.js (v18 or later recommended)
- npm or yarn

### 📦 **Steps to Run Locally**

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/star-wars.git
cd star-wars
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Visit the app:**

Open your browser at `http://localhost:5173`

## 💡 **Design Decisions & Rationale**

### 🔍 **Why React + Vite?**

React provides a component-based architecture ideal for managing dynamic UI with reusable logic. Vite ensures a lightning-fast dev server and optimized build process.

### 🎨 **TailwindCSS for Styling**

Tailwind allows utility-first styling for rapid prototyping and production-grade responsiveness — reducing CSS bloat.

### 🌐 **Axios + React Context**

Axios is used for efficient data fetching from the SWAPI (Star Wars API). React Context ensures global accessibility of search results without prop drilling.

### 🧠 **Component-Based Design**

Component modularization (e.g., PeopleCard, FilmCard, SearchResult) enhances reusability and maintainability.

### 💻 **Developer Experience**

1. ESLint configured for clean code practices

2. Git-enabled for version control

3. Minimal yet powerful project structure





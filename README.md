
<div align="center">

  <h1 align="center">GetMoreClients</h1>

  <p align="center">
    <strong>The Operating System for Modern Agency Growth</strong>
  </p>

  <p align="center">
    <a href="https://reactjs.org/">
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://vitejs.dev/">
      <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    </a>
    <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    </a>
    <a href="https://supabase.com/">
      <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    </a>
  </p>

</div>

<br />

---

## 🚀 Overview

**GetMoreClients** is a high-performance, visually immersive web application designed for modern digital agencies. Built with cutting-edge web technologies, it delivers a premium user experience through smooth animations, 3D elements, and a sleek glassmorphic aesthetics.

This platform serves as a conversion engine, helping businesses attract, convert, and retain high-value clients through data-driven marketing strategies and AI-powered automation.

---

## ✨ Key Features

- **🌌 Immersive UI/UX**: 
  - Dynamic **StarField** background with parallax depth.
  - Premium **Glassmorphism** cards and container styles.
  - Interactive **Flickering Text** and **Neon Glow** effects.
  - **Lenis Smooth Scroll** for a fluid navigation experience.

- **⚡ High Performance**:
  - Optimized with **Vite** for lightning-fast HMR and builds.
  - Hardware-accelerated animations using **Framer Motion**.
  - Efficient canvas rendering for complex visual effects.

- **🔧 Functional Integrations**:
  - **Supabase** backend for seamless contact form submissions and data handling.
  - **Cal.com** integration for instant meeting scheduling.
  - Dynamic Service Detail pages with custom routing.

- **📱 Responsive Design**:
  - Fully responsive layout adapting seamlessly from Desktop to Mobile.
  - Touch-optimized interactions and gestures.

---

## 🛠️ Tech Stack

| Category          | Technologies                                                                 |
|-------------------|------------------------------------------------------------------------------|
| **Core**          | React 18, TypeScript                                                         |
| **Build Tool**    | Vite                                                                         |
| **Styling**       | Tailwind CSS, Lucide React (Icons)                                           |
| **Animations**    | Framer Motion, Lenis (Scroll), Canvas API                                    |
| **Backend / DB**  | Supabase                                                                     |
| **Routing**       | React Router DOM                                                             |

---

## 📂 Project Structure

```bash
src/
├── components/         # Reusable UI components
│   ├── ui/             # Atomic design elements (Buttons, Cards, Effects)
│   ├── service-detail/ # Specific sections for Service pages
│   └── ...             # Feature-specific components (Hero, Navbar, Footer)
├── pages/              # Main route pages (Home, Services, Contact, etc.)
├── lib/                # Utilities and clients (Supabase client)
├── data/               # Static content data
└── assets/             # Images and media
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/getmoreclients.git
   cd getnew
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

---

## 🎨 Design System

The application uses a custom design system built on top of Tailwind CSS, featuring:
- **Color Palette**: Deep cosmic purples (`#0a0118`) and vibrant accents.
- **Typography**: Inter (Google Fonts) for clean, modern readability.
- **Effects**: Custom backdrop blurs, gradients, and mesh overlays.

---

<div align="center">
  <p>Built with ❤️ by the GetMoreClients Team</p>
</div>

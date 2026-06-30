# Crack The Campus

A modern, responsive React landing page for an AI-powered placement preparation platform. Built with reusable components, smooth animations, and a clean SaaS-inspired UI to help students prepare for placements through coding practice, mock interviews, aptitude training, and structured learning paths.

---

## Live Demo

https://your-vercel-link.vercel.app

---

## GitHub Repository

https://github.com/poojarajegowda/crack-the-campus-landing-page

---

# Project Preview

Example:

./public/preview/crack-the-campus-landing-page.png

---

# 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS v4
- Lucide React
- Framer Motion
- React CountUp

---

# Technical Approach

The project follows a component-driven architecture where every UI section is developed as an independent and reusable component. The primary goal was to build a scalable landing page that is easy to maintain and extend.

### Component-Based Development

The application is divided into reusable UI components such as:

- Button
- Container
- Section Heading
- Feature Card
- Course Card
- Testimonial Card

These reusable components reduce code duplication and improve maintainability.

### Data-Driven Rendering

Instead of hardcoding content directly inside components, data such as features, courses, testimonials, statistics, and company information is stored in separate JavaScript files inside the `data` folder.

This approach makes updating the content easier without modifying component logic.

### Responsive Design

The UI is fully responsive using Tailwind CSS utility classes.

Breakpoints are used to provide an optimized experience across:

- Mobile
- Tablet
- Desktop

### Theme Management

Dark and Light mode are implemented using React Context API.

The selected theme is:

- stored in Local Storage
- restored on page refresh
- initialized using the user's system preference

### Animations

Framer Motion is used for section entrance animations.

Additional animations include:

- Animated company logo marquee
- Infinite scrolling courses
- Animated testimonial columns
- Count-up statistics animation
- Smooth hover interactions

---

# Folder Structure

src
│
├── assets
│   ├── images
│   └── logos
│
├── components
│   ├── layout
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Companies.jsx
│   │   ├── Courses.jsx
│   │   ├── Statistics.jsx
│   │   ├── Testimonials.jsx
│   │
│   └── ui
│       ├── Button.jsx
│       ├── Container.jsx
│       ├── SectionHeading.jsx
│       ├── FeatureCard.jsx
│       ├── CourseCard.jsx
│       └── ThemeToggle.jsx
│
├── context
│   └── ThemeContext.jsx
│
├── data
│   ├── features.js
│   ├── companies.js
│   ├── courses.js
│   ├── testimonials.js
│   └── statistics.js
│
├── App.jsx
├── main.jsx
└── index.css

---

# Developer Assumptions

The following assumptions were made while developing this assignment:

- The project represents a marketing landing page for an AI-powered placement preparation platform.
- Authentication, backend APIs, and payment integration are outside the scope of this assignment.
- Statistics, testimonials, and company placement data are static sample data used for demonstration purposes.
- Company logos are used only to visually represent potential hiring partners.
- The primary objective is to demonstrate frontend architecture, responsiveness, accessibility, and UI development skills.

---

# Extra Features Implemented

In addition to the assignment requirements, the following features were implemented:

- ✅ Dark / Light Theme with Local Storage persistence
- ✅ Automatic System Theme Detection
- ✅ Smooth Theme Toggle Animation
- ✅ Animated Company Logo Marquee
- ✅ Infinite Scrolling Courses
- ✅ Animated Testimonial Columns
- ✅ Count-Up Statistics Animation
- ✅ Framer Motion Section Animations
- ✅ Fully Responsive Layout
- ✅ Reusable Component Architecture
- ✅ Data-Driven Rendering
- ✅ Smooth Hover Effects
- ✅ Modern SaaS-Inspired UI Design

---

# Installation

Clone the repository
git clone https://github.com/poojarajegowda/crack-the-campus-landing-page.git

Install dependencies
npm install

Run locally
npm run dev

Build for production
npm run build

---

# Contact

**Pooja R**

LinkedIn

https://www.linkedin.com/in/pooja-rajegowda/

GitHub

https://github.com/poojarajegowda
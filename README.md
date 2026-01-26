Edusity, University Landing Page

Overview  
Edusity is a responsive university landing page built with React and Vite. You use this project to demonstrate component architecture, accessibility practices, UI structure, and production-style frontend patterns.

Features

- Smooth section scrolling navigation
- Responsive layout for desktop and mobile
- Accessible video modal with keyboard support
- Data-driven content sections
- Contact form integration using Web3Forms API
- Mobile menu with focus handling

Tech stack

- React 18
- Vite
- CSS
- ESLint
- Prettier

Project structure

src  
 components, reusable UI components  
 pages, page-level layouts  
 assets, static images and media

Getting started

1. Clone repository

2. Install dependencies  
   npm install

3. Setup environment variables  
   Create .env file in project root  
   Add:  
   VITE_WEB3FORMS_ACCESS_KEY=your_key_here

4. Start development server  
   npm run dev

Available scripts

- npm run dev, start local development server
- npm run build, create production build
- npm run preview, preview production build
- npm run lint, run ESLint checks
- npm run format, format code with Prettier

Accessibility improvements

- Keyboard navigation support
- ARIA attributes for interactive elements
- Focus-visible styles for accessibility
- Semantic HTML structure

Performance optimizations

- Component-based rendering
- Lightweight modal rendering
- Optimized asset usage

Roadmap

- Add backend integration
- Add authentication flow
- Add gallery modal view
- Add unit tests

Author  
Dinesh Shrestha

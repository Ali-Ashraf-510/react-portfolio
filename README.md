# Ali Ashraf Portfolio

A modern, responsive portfolio for Ali Ashraf (Machine Learning & Deep Learning Engineer) built with React, Vite, and custom CSS.

## Features
- Animated, glassmorphic navigation bar with active pill
- Light/Dark mode toggle
- Responsive design (mobile-friendly)
- Modal for certificates
- Sections: Home, About, Projects, Certificates, Contact
- Accessibility and keyboard navigation
- Strict Content Security Policy (CSP) for security

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (v8+) or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
- Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
- Output is in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## Content Security Policy (CSP)
- The app uses a strict CSP to prevent XSS and unsafe script/style loading.
- All styles (Bootstrap, Font Awesome) are loaded via npm, not CDN.
- If you need to allow additional external resources, update `public/_headers` (for Netlify) or your server config.

## Customization
- Edit content in `src/routes/` for each section.
- Navbar and theme logic: `src/components/Navbar.jsx`, `src/App.jsx`
- Global styles: `src/styles/globals.css`

## Troubleshooting
- If you see CSP errors in the browser console, ensure you are not loading CSS/JS from a CDN. Use local npm packages.
- For local development, the Vite dev server sets a relaxed CSP for HMR and workers.

## License
MIT

---
Crafted with ❤️ by Ali Ashraf

# Ali Ashraf Portfolio - AI Coding Assistant Instructions

## Project Overview
A modern React portfolio for a Machine Learning Engineer built with Vite, React Router, and a comprehensive glassmorphism design system. The project emphasizes security (strict CSP), accessibility, and responsive design.

## Architecture & Structure

### Core Stack
- **React 19** with React Router for SPA navigation
- **Vite** as build tool with React plugin
- **Bootstrap 5.3.8** + custom glassmorphism CSS design system
- **FontAwesome 7** icons loaded locally (not CDN for CSP compliance)
- **ESLint 9** with React hooks and refresh plugins

### Key Components
- `App.jsx`: Theme management + route wrapper with page transitions
- `Navbar.jsx`: Animated glassmorphic navigation with active pill indicator
- `CertificateModal.jsx`: Reusable modal for certificates and projects
- Route components in `src/routes/`: Home, About, Projects, Certificates, Contact

### Asset Organization
```
src/assets/
├── Profile/profile.jpeg
├── Certifications/*.{png,jpg}
└── Projects/*.png
```

## Security & Content Policies

### Critical CSP Requirements
- **NO CDN dependencies** - all CSS/JS must be npm packages
- Vite dev server uses relaxed CSP for HMR; production uses strict CSP
- Update `public/_headers` for Netlify or server config for other hosts
- FontAwesome and Bootstrap are local packages, not CDN links

### CSP Violation Debugging
If seeing CSP errors: ensure all external resources are loaded via npm packages, not `<link>` or `<script>` tags to CDNs.

## Development Patterns

### Component Conventions
- Functional components with hooks (no class components)
- React Router `NavLink` for navigation with `end` prop on home route
- `useRef` + `useLayoutEffect` for DOM measurements (see Navbar pill animation)
- Event cleanup in `useEffect` return functions
- Conditional rendering instead of CSS classes for modals

### Styling Architecture
- **Design system**: CSS custom properties in `:root` of `globals.css`
- **Glassmorphism theme**: `--glass-*` variables for consistent glass effects
- **Color tokens**: Semantic tokens like `--text-primary`, `--bg-secondary`
- **Spacing scale**: `--space-*` variables (4px increments)
- **Theme switching**: `data-theme` attribute on `<body>` with CSS transitions

### State Management
- Local component state with `useState`
- Theme state in App.jsx with localStorage persistence
- Modal state lifted to App.jsx, passed down via props
- No external state management library

### Animation Patterns
- CSS transitions with custom easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- ResizeObserver for responsive animations (Navbar pill)
- `requestAnimationFrame` for layout measurements
- Page transitions via React Router location key

## Development Workflow

### Essential Commands
```bash
npm run dev     # Vite dev server on localhost:5173
npm run build   # Production build to dist/
npm run preview # Preview production build
npm run lint    # ESLint check
```

### File Editing Guidelines
- Add new routes in `src/routes/` and register in `App.jsx`
- Update navigation links in `Navbar.jsx` links array
- Add new assets to appropriate `src/assets/` subdirectory
- Extend design system in `globals.css` `:root` section

### CSS Architecture Rules
- Use CSS custom properties for all colors, spacing, typography
- Follow BEM-like naming for components (`.component-element--modifier`)
- Mobile-first responsive design with Bootstrap grid
- Glassmorphism effects via `--glass-*` variables

### Accessibility Requirements
- All interactive elements need `aria-label` or visible text
- Modal focus management and keyboard navigation
- Semantic HTML (`<nav>`, `<main>`, `<section>`, etc.)
- Icons marked with `aria-hidden="true"`

## Integration Points

### React Router Setup
- `BrowserRouter` wraps entire app in `App.jsx`
- `AppContent` component uses `useLocation` for page transitions
- Route-based CSS animations via `location.pathname` key

### Asset Loading
- Static assets imported as ES modules: `import profileImage from '../assets/Profile/profile.jpeg'`
- Bootstrap/FontAwesome imported in `main.jsx`
- CSS order: Bootstrap → FontAwesome → globals.css

### Modal System
- Single `CertificateModal` component handles both certificates and projects
- Modal data structure: `{title, image, description, type}`
- Modal state managed in App.jsx, opened via prop functions

## Common Patterns

### Adding New Pages
1. Create component in `src/routes/NewPage.jsx`
2. Add route to `App.jsx` Routes
3. Add navigation link to `Navbar.jsx` links array
4. Update mobile nav icons object if needed

### Styling New Components
1. Use existing CSS custom properties
2. Follow glassmorphism pattern: `.glass-card` base class
3. Add responsive breakpoints following Bootstrap conventions
4. Test with both light/dark themes

### Adding Interactive Elements
1. Use `useRef` for DOM access, `useLayoutEffect` for measurements
2. Clean up event listeners in `useEffect` return
3. Include proper ARIA attributes for accessibility
4. Test keyboard navigation

Remember: This project prioritizes security (CSP), accessibility, performance, and maintainable code over quick solutions.
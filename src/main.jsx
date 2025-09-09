// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Use local packages instead of CDN
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
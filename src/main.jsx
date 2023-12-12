import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import './index.css'
import { ProviderContext } from './Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ProviderContext>
    <HashRouter>
      <App />
    </HashRouter>
  </ProviderContext>,
)

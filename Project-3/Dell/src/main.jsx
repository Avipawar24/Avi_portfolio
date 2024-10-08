import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-db05dxjjsej5haww.us.auth0.com"
    clientId="STqC0rwmcPEcoqc5SLrqPlwrnOxR9r5c"
    authorizationParams={{
      redirect_uri: window.location.origin}}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth0Provider>
)


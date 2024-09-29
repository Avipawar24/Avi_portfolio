import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Context from './assets/context/Context.jsx'
import './index.css'



createRoot(document.getElementById('root')).render(
<Context>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>,
    </BrowserRouter>
    </Context>
)

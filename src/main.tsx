import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/authContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ItemsContextProvider } from './context/itemsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ItemsContextProvider>
          <App />
        </ItemsContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,

)

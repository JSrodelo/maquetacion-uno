import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Maquetacion } from './maquetacion'
import './maquetacion.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Maquetacion />
  </StrictMode>,
)

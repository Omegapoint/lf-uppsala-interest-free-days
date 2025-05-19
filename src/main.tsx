import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InterestFreeDays from './InterestFreeDays'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InterestFreeDays />
  </StrictMode>,
)

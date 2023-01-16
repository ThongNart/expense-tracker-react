import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'


//import { ContextProvider } from './AppContext'
import {ContextProvider } from "./AppContext-useReducer"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider> 
  </React.StrictMode>,
)

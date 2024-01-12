import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'

function App() {

  return (
    <BrowserRouter>
    <Layout>
      <AppRouter />
    </Layout>
    
    
      {/* <Card />
      <Card /> */}
    </BrowserRouter>
  )
}

export default App

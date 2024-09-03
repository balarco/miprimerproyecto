import { useState } from 'react'
import './App.css'
import Store from './components/WebStore/StorePage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Store />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Store from './components/WebStore/StorePage.jsx'
import Footer from "./components/Footer/Footer.jsx";
import MyHeader from "./components/Header/Header.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
        <MyHeader/>
        <Store />
        <Footer />
    </div>
  )
}

export default App

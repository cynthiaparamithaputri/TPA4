import { useState } from 'react'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default App

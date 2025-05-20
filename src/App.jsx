import { Blog } from "./pages/blog"

import Navbar from "./pages/navbar"
import { Contact } from "./pages/contact"
import { data } from "react-router-dom"
import Home from "./pages/home"


function App() {
 

  return (
    <>
    <Navbar/>
     <Home/>
  <Blog/>
  <Contact/>

    
    </>
  )
}

export default App

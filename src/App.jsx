import { BrowserRouter,Routes,Route } from "react-router"
import { Home } from "./Pages/Home"
import { ShowOut } from "./Components/ShowOut"
import { AboutI } from "./Pages/AboutI"
import { Projects } from "./Pages/Projects"
import { Services } from "./Pages/Services"



function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowOut/>}>
      <Route index element={<Home/>} />
        <Route path="about" element={<AboutI/>}/>
       <Route path="projects" element={<Projects />} />
       <Route path="services" element={<Services />} />
        </Route>
        
        
      </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App

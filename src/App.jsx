import { BrowserRouter,Routes,Route } from "react-router"
import { Home } from "./Pages/Home"
import { ShowOut } from "./Components/ShowOut"
import About from "./Components/About"



function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowOut/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>}/>
        </Route>
      </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App

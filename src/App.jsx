import { BrowserRouter,Routes,Route } from "react-router"
import { Home } from "./Pages/Home"
import { ShowOut } from "./Components/ShowOut"


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowOut/>}>
        <Route index element={<Home/>} />
        </Route>
      </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App

import Navbar from "./components/Navbar/Navbar"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"

import Resturent from "./pages/Resturent/Resturent"
import MenuPage from "./pages/Resturent/Section2/MenuPage/MenuPage"
import Cart from "./pages/Cart/Cart"
function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resturent" element={<Resturent/>} />
          <Route path="/menu" element={<MenuPage/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </>
  )
}

export default App

import { Routes,Route } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
import { Contact } from "./components/Contact/Contact";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Cart } from "./components/Cart/Cart";

import { AuthProvider } from "./contexts/AuthContext";

function App() {

  return (
    <AuthProvider>
      <Header />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/about-us' element={<About/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contact-us' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
     <Footer />
    </AuthProvider>
  )
}

export default App

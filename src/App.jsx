import { Routes, Route } from "react-router-dom"
import { Header } from "../src/components/Header"
import { Cart } from "../src/components/Cart"
import { Footer } from "../src/components/Footer"
import { Home } from "../src/pages/Home"
import { Reviews } from "../src/pages/Reviews"
import { Contact } from "../src/pages/Contact"
import { ProductDetail } from "../src/components/ProductDetail"

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-detail/:index" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

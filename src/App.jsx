import { useContext } from "react"
import { useSelector } from "react-redux"
import { Routes, Route, Navigate } from "react-router-dom"
// import from internal source
import { AuthContext } from "./context/AuthContext"
import { Header } from "../src/components/Header"
import { Footer } from "../src/components/Footer"
import { Home } from "../src/pages/Home"
import { Reviews } from "../src/pages/Reviews"
import { Contact } from "../src/pages/Contact"
import { Register } from "../src/components/Register"
import { Login } from "../src/components/Login"
import { Cart } from "../src/components/Cart"
import { ProductDetail } from "../src/components/ProductDetail"
import { UserInfos } from "./components/UserInfos"
import { Toast } from "../src/components/Toast"

function App() {
  const { status } = useSelector((state) => state.toastMess)
  const { currentUser } = useContext(AuthContext)
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  return (
    <div className="app-wrapper">
      <Header />
      {status && <Toast />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/userInfos"
          element={
            <ProtectedRoute>
              <UserInfos />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-detail/:index" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

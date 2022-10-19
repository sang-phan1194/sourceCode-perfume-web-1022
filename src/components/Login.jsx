import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../style/form.scss"

export const Login = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    try {
      await signInWithEmailAndPassword(auth, email, password).then((res) =>
        console.log(res.user)
      )
      navigate("/userInfos")
    } catch (error) {
      setErr(true)
      console.log(error)
    }
  }
  return (
    <div className="form-wrapper">
      <h2>
        <span>
          <i className="bi bi-box-arrow-in-right"></i>
        </span>{" "}
        ĐĂNG NHẬP
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nhập email đăng kí" required />
        <input type="password" placeholder="Nhập mật khẩu" required />
        <button type="submit">Đăng Nhập</button>
      </form>
      <span>
        Bạn chưa có tài khoản? Bấm vào đây để{" "}
        <Link to="/register"> đăng kí</Link>
      </span>
    </div>
  )
}

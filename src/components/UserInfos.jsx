import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import "../style/userInfos.scss"

export const UserInfos = () => {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
    <div className="userInfos">
      <div className="img-group">
        <span>Ảnh đại diện</span>
        <img src={currentUser.photoURL} alt="userAvatar" />
      </div>
      <div className="main-info">
        <span>Name: {currentUser.displayName}</span>
        <span>Email: {currentUser.email}</span>
        <button onClick={() => signOut(auth)}>Đăng xuất</button>
      </div>
    </div>
  )
}

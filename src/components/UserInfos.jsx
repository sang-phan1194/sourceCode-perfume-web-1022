import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import "../style/userInfos.scss"

export const UserInfos = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className="userInfos">
      <div className="img-group">
        <span>Ảnh đại diện</span>
        <img src={currentUser.photoURL} alt="userAvatar" />
      </div>
      <div className="main-info">
        <span>Tên: {currentUser.displayName}</span>
        <span>Email: {currentUser.email}</span>
        <span>
          Số điện thoại:{" "}
          <small> {currentUser.phoneNumber || `Chưa cập nhật`}</small>
        </span>
        <small>
          Là thành viên từ:{" "}
          {currentUser.metadata["creationTime"].substring(0, 16)}
        </small>
        <small>
          Đăng nhật lần cuối:{" "}
          {currentUser.metadata["lastSignInTime"].substring(0)}
        </small>
        <div className="btn-group">
          <button onClick={() => signOut(auth)}>
            {" "}
            <i className="bi bi-box-arrow-left"></i> Đăng xuất
          </button>
          <button id="edit-info">
            <i className="bi bi-pencil-square"></i>
            <span> Chỉnh sửa thông tin</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// import from firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { setDoc, doc } from "firebase/firestore"
import { auth, storage, db } from "../firebase"
// import from React and others
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import internal files
import "../style/form.scss"

export const Register = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, file.name)
      uploadBytesResumable(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (downloadURL) => {
          try {
            // update profile with image URL
            await updateProfile(res.user, {
              displayName: name,
              photoURL: downloadURL,
            })
            // create a user collection
            await setDoc(doc(db, "userInfos", res.user.uid), {
              name,
              email,
              photoURL: downloadURL,
              favoriteList: [],
              cart: [],
            })
            alert("Đăng kí tài khoản thành công, nhấn OK để tiếp tục!")
            navigate("/login")
          } catch (error) {
            setErr(true)
          }
        })
      })
    } catch (error) {
      setErr(true)
    }
  }
  return (
    <div className="form-wrapper">
      <h2>
        <span>
          <i className="bi bi-person-fill"></i>
        </span>{" "}
        ĐĂNG KÍ TÀI KHOẢN
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tên của bạn" required />
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input id="file" type="file" required />
        <label htmlFor="file">
          <i className="bi bi-card-image"></i> Thêm ảnh đại diện
        </label>
        <button type="submit">Đăng Kí</button>
      </form>
      <span>
        Bạn đã có tài khoản? Bấm vào đây để <Link to="/login"> đăng nhập</Link>
      </span>
      {err && (
        <small style={{ color: "red", opacity: 1 }}>
          Có lỗi xảy ra, vui lòng kiểm tra lại thông tin đã nhập!
        </small>
      )}
    </div>
  )
}

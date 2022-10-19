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
            // create a user collecttion, every document will be the user.uid with two field: favList and saved cart
            await setDoc(doc(db, "userInfos", res.user.uid), {
              name,
              email,
              phottoURL: downloadURL,
              favoriteList: [],
              cart: [],
            })
            alert("Đăng kí tài khoản thành công!")
            navigate("/login")
          } catch (error) {
            console.log(error)
            setErr(true)
          }
        })
      })
    } catch (error) {
      setErr(true)
      console.log(error)
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
        <label htmlFor="file">Thêm ảnh đại diện</label>
        <button type="submit">Đăng Kí</button>
      </form>
      <span>
        Bạn đã có tài khoản? Bấm vào đây để <Link to="/login"> đăng nhập</Link>
      </span>
      {err && <span>Something went wrong!</span>}
    </div>
  )
}

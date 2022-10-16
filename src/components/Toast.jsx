import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { autoHide } from "../redux/toastMessSlice"
import "../style/toast.scss"

export const Toast = () => {
  const dispatch = useDispatch()
  const { status, type } = useSelector((state) => state.toastMess)

  useEffect(() => {
    const countDown = setTimeout(() => dispatch(autoHide()), 1000)

    return () => {
      clearTimeout(countDown)
    }
  }, [status, type])

  return (
    <>
      {type === "addToCart" && (
        <>
          <div className="toast-wrapper addToCart">
            <span>
              <i className="bi bi-bag-check"></i>
            </span>
            <p>Đã thêm sản phẩm vào giỏ hàng</p>
          </div>
        </>
      )}
      {type === "like" && (
        <>
          <div className="toast-wrapper like">
            <span>
              <i className="bi bi-heart"></i>
            </span>
            <p>Đã thêm sản phẩm vào yêu thích</p>
          </div>
        </>
      )}
      {type === "deleteFromCart" && (
        <>
          <div className="toast-wrapper delete">
            <span>
              <i className="bi bi-cart-x"></i>
            </span>
            <p>Đã xóa sản phẩm khỏi giỏ hàng</p>
          </div>
        </>
      )}
    </>
  )
}

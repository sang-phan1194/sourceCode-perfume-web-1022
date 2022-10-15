import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { add_item } from "../redux/cartSlice"
import { Toast } from "./Toast"
import "../style/product.scss"

export const Product = ({ index, productData }) => {
  const { productName, brandName, productPrice, productPhoto } = productData
  const [toast, setToast] = useState({
    status: false,
    type: "",
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const countDown = setTimeout(
      () => setToast({ status: false, type: "" }),
      900
    )

    return () => {
      clearTimeout(countDown)
    }
  }, [toast.status])

  return (
    <div className="product">
      {/* Show toast message when add product to cart */}
      {toast.status && <Toast type={toast.type} />}
      <img src={productPhoto} alt="" loading="lazy" />
      {/* view product details btn */}
      <div className="btn-group">
        <span onClick={() => navigate(`/product-detail/${index}`)}>
          <small>View product</small>
          <i className="bi bi-three-dots"></i>
        </span>
        {/* add to cart btn */}
        <span
          onClick={(e) => {
            e.stopPropagation()
            dispatch(
              add_item({
                itemCount: 1,
                productName: productName,
                brandName: brandName,
                productPrice: productPrice,
                productPhoto: productPhoto,
              })
            )
            setToast({ status: true, type: "addToCart" })
          }}
        >
          <small>Add to cart</small>
          <i className="bi bi-cart-plus"></i>
        </span>
        {/* add to favorites btn */}
        <span
          onClick={(e) => {
            e.stopPropagation()
            setToast({ status: true, type: "like" })
          }}
        >
          <small>Favorite</small>
          <i className="bi bi-heart"></i>
        </span>
      </div>
      <Link to={`/product-detail/${index}`}>
        <span className="product-name">{productName}</span>
      </Link>
      <span className="product-price">{`${new Intl.NumberFormat().format(
        productPrice
      )} VND`}</span>
    </div>
  )
}

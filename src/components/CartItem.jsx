import { useState } from "react"
import { useDispatch } from "react-redux"
import { add_item, remove_item, minus_item } from "../redux/cartSlice"
import "../style/cartItem.scss"

export const CartItem = ({ id, data }) => {
  const [count, setCount] = useState(data.itemCount)
  const dispatch = useDispatch()
  const handleAdd = () => {
    dispatch(add_item({ ...data, itemCount: 1 }))
    setCount(data.itemCount + 1)
  }
  const handleMinus = () => {
    if (count > 1) {
      setCount(data.itemCount - 1)
      dispatch(minus_item(id))
    }
  }
  const handleRemove = () => {
    dispatch(remove_item(data.productName))
  }

  return (
    <div className="cartItem">
      <div className="itemInfo">
        <img src={data.productPhoto} alt="" />
        <span className="product-name">{data.productName}</span>
      </div>
      <div className="quantity">
        <div className="btn-group">
          <button onClick={handleMinus} className="minus-btn">
            <i className="bi bi-dash-lg"></i>
          </button>
          <span>{data.itemCount}</span>
          <button onClick={handleAdd} className="add-btn">
            <i className="bi bi-plus-lg"></i>
          </button>
          <button onClick={handleRemove} className="delete-btn">
            <i className="bi bi-trash"></i>
          </button>
        </div>
        <span>Tình trạng: Còn hàng</span>
        <span className="product-price">{`Tổng tiền: ${new Intl.NumberFormat().format(
          data.productPrice * data.itemCount
        )} VND`}</span>
      </div>
    </div>
  )
}

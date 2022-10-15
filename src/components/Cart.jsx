import { useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import "../style/cartItem.scss"

export const Cart = () => {
  const { itemList } = useSelector((state) => state.cart)
  const totalPurchase = [...itemList].reduce(
    (total, cur) => total + cur.itemCount * cur.productPrice,
    0
  )
  return (
    <div className="cart">
      {itemList.length !== 0 ? (
        <div className="cartItem-wrapper">
          {itemList.map((item, idx) => (
            <CartItem key={idx} id={idx} data={item} />
          ))}
        </div>
      ) : (
        <p>Bạn chưa có sản phẩm nào trong giỏ hàng!</p>
      )}
      {itemList.length !== 0 ? (
        <div className="purchase-info">
          <span>Phí vận chuyển: 0 VND</span>
          <span>{`Phí sản phẩm: ${new Intl.NumberFormat().format(
            totalPurchase
          )} VND`}</span>
          <span>Mã giảm giá: - 0 VND</span>
          <div className="line"></div>
          <span>{`Tổng thanh toán: ${new Intl.NumberFormat().format(
            totalPurchase
          )} VND`}</span>
          <button className="checkout-btn">
            <i className="bi bi-cart4"></i> Thanh Toán
          </button>
        </div>
      ) : null}
    </div>
  )
}

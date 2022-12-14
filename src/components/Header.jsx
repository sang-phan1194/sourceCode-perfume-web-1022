import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import "../style/header.scss"

export const Header = () => {
  const [isToggleOn, setToggleOn] = useState(false)
  const itemList = useSelector((state) => state.cart.itemList)
  const totalCount = itemList.reduce((total, cur) => total + cur.itemCount, 0)

  return (
    <div className="header">
      <button className="toggle-btn" onClick={() => setToggleOn(!isToggleOn)}>
        <i className="bi bi-list"></i>
      </button>
      <Link to="/">
        <img src={logo} alt="page-logo" />
      </Link>
      <div className={!isToggleOn ? "vertical-menu" : "horizontal-menu"}>
        <div className="pages-group">
          <button
            className="toggle-btn"
            onClick={() => setToggleOn(!isToggleOn)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/reviews">Reviews</Link>
          </span>
          <span>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
        <div className="icon-group">
          <span>
            <i className="bi bi-bookmark-heart"></i>
          </span>
          <span>
            <Link to="/userInfos">
              <i className="bi bi-person"></i>
            </Link>
          </span>
          <span className="cart-icon">
            <Link to="/cart">
              <i className="bi bi-cart"></i>
              <small>{totalCount}</small>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

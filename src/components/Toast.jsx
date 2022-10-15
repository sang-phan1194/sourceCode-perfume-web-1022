import "../style/toast.scss"
export const Toast = ({ type }) => {
  return (
    <>
      {type === "addToCart" && (
        <>
          <div className="toast-wrapper addToCart">
            <span>
              <i className="bi bi-bag-check"></i>
            </span>
            <p>Added product to cart</p>
          </div>
        </>
      )}
      {type === "like" && (
        <>
          <div className="toast-wrapper like">
            <span>
              <i className="bi bi-heart"></i>
            </span>
            <p>Added product to favorite list</p>
          </div>
        </>
      )}
    </>
  )
}

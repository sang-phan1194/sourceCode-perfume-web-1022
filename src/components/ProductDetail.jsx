import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import Skeleton from "react-loading-skeleton"
import { Banner } from "./Banner"
import { add_item } from "../redux/cartSlice"
import { addToCart } from "../redux/toastMessSlice"
import "../style/productDetail.scss"

export const ProductDetail = () => {
  const { index } = useParams()
  const [product, setProduct] = useState({})
  const [count, setCount] = useState(1)
  const [isLoading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const handleAdd = () => {
    dispatch(
      add_item({
        itemCount: count,
        ...product,
      })
    )
    dispatch(addToCart())
  }

  useEffect(() => {
    let isQuery = true
    const getStoreData = async () => {
      const docRef = doc(db, "products", index)
      const docSnap = await getDoc(docRef)
      let output = {}
      if (docSnap.exists()) {
        output = { ...docSnap.data() }
        setProduct(output)
        setLoading(false)
      } else {
        console.log("No such product!")
      }
    }
    getStoreData()

    return () => {
      isQuery = false
    }
  }, [])
  return (
    <div className="product-detail-wrapper">
      <Banner />
      <div className="product-detail">
        <div className="quantity">
          {!isLoading ? (
            <img src={product.productPhoto} loading="lazy" />
          ) : (
            <Skeleton style={{ width: "30rem", height: "30rem" }} />
          )}
          <div className="btn-group">
            <button
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1)
                }
              }}
              className="minus-btn"
            >
              <i className="bi bi-dash-lg"></i>
            </button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)} className="add-btn">
              <i className="bi bi-plus-lg"></i>
            </button>
            <button onClick={handleAdd} className="addToCart-btn">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="product-info">
          {!isLoading ? (
            <p>{product.productName}</p>
          ) : (
            <Skeleton
              style={{ width: "25rem", height: "2rem", borderRadius: "7px" }}
            />
          )}
          {!isLoading ? (
            <span>H??ng s???n xu???t: {product.brandName}</span>
          ) : (
            <Skeleton
              style={{ width: "12rem", height: "2rem", borderRadius: "7px" }}
            />
          )}
          <span>Lo???i: N?????c hoa nam</span>
          <span>T??nh tr???ng: C??n h??ng</span>
          <hr />
          {!isLoading ? (
            <>
              <span className="price">
                Gi??:
                {` ${new Intl.NumberFormat().format(product.productPrice)} VND`}
              </span>
              <span className="price">
                T???ng c???ng:
                {` ${new Intl.NumberFormat().format(
                  product.productPrice * count
                )} VND`}
              </span>
            </>
          ) : (
            <>
              <Skeleton
                style={{ width: "12rem", height: "2rem", borderRadius: "7px" }}
              />
              <Skeleton
                style={{ width: "15rem", height: "2rem", borderRadius: "7px" }}
              />
            </>
          )}

          <span>Mi???n ph?? v???n chuy???n cho ????n h??n gi?? tr??? tr??n 750.000VN??</span>
          <small>Dung t??ch</small>
          <span className="volume">100ML</span>
          <span>M?? t??? s???n ph???m:</span>
          <p className="desc">{product.productDesc}</p>
          <hr />
          <h5>CAM K???T KHI MUA S???M</h5>
          <span>
            <i className="bi bi-award"></i> T?? v???n nhi???t t??nh v?? t???n t??m.{" "}
          </span>
          <span>
            <i className="bi bi-award"></i> ?????m b???o ngu???n g???c v?? ch???t l?????ng s???n
            ph???m.{" "}
          </span>
          <span>
            <i className="bi bi-award"></i> Mi???n ph?? ?????i tr??? n???u s???n ph???m c?? v???n
            ?????.{" "}
          </span>
        </div>
      </div>
    </div>
  )
}

import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import { Banner } from "../components/Banner"
import { Product } from "../components/Product"
import { GetDatas } from "../components/GetDatas"
import { ProductSkeleton } from "../components/ProductSkeleton"
import { useState } from "react"

export const Home = () => {
  const { isLoading, datas, setDatas } = GetDatas("products")
  const [isSearchingMode, setSearchingMode] = useState(false)
  // const [myQuery, setQuery] = useState("")
  const handleSearch = async (myQuery) => {
    const output = []
    const querySnapshot = await getDocs(collection(db, "products"))
    querySnapshot.forEach((doc) => {
      output.push({
        id: doc.id,
        productData: doc.data(),
      })
    })
    if (myQuery.length > 1) {
      setDatas(
        [...output].filter((item) =>
          item.productData.productName
            .toLowerCase()
            .includes(myQuery.toLocaleLowerCase())
        )
      )
    } else {
      setDatas(output)
    }
  }

  return (
    <>
      <Banner bannerNum={1} />
      <div className="homepage">
        {/* sorting button group */}
        <div className="sort-btn-group">
          <button
            onClick={() =>
              setDatas(
                [...datas].sort((a, b) =>
                  a.productData.productName.localeCompare(
                    b.productData.productName
                  )
                )
              )
            }
          >
            <i className="bi bi-sort-alpha-down"></i>Tên sản phẩm
          </button>
          <button
            onClick={() =>
              setDatas(
                [...datas].sort((a, b) =>
                  b.productData.productName.localeCompare(
                    a.productData.productName
                  )
                )
              )
            }
          >
            <i className="bi bi-sort-alpha-up"></i>Tên sản phẩm
          </button>
          <button
            onClick={() =>
              setDatas(
                [...datas].sort(
                  (a, b) =>
                    a.productData.productPrice - b.productData.productPrice
                )
              )
            }
          >
            <i className="bi bi-sort-alpha-down"></i>Giá sản phẩm
          </button>
          <button
            onClick={() =>
              setDatas(
                [...datas].sort(
                  (a, b) =>
                    b.productData.productPrice - a.productData.productPrice
                )
              )
            }
          >
            <i className="bi bi-sort-alpha-up"></i>Giá sản phẩm
          </button>
          <button
            className="search-btn"
            onClick={() => setSearchingMode(!isSearchingMode)}
          >
            <i className="bi bi-search"></i>
          </button>
          {isSearchingMode && (
            <input
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Nhập nội dung tìm kiếm..."
              autoFocus
            />
          )}
        </div>

        {/* render Products by category */}
        <h2>
          NƯỚC HOA DESIGNER NAM{" "}
          <small>
            Có{" "}
            {
              [...datas].filter(
                (item) => item.productData.productCategory === "Designer Nam"
              ).length
            }{" "}
            sản phẩm
          </small>{" "}
        </h2>
        <div className="products-container">
          {isLoading ? (
            <ProductSkeleton count={9} />
          ) : (
            [...datas]
              .filter(
                (item) => item.productData.productCategory === "Designer Nam"
              )
              .map((item) => (
                <Product
                  key={item.id}
                  index={item.id}
                  productData={item.productData}
                />
              ))
          )}
        </div>
        <h2>
          NƯỚC HOA NICHE NAM{" "}
          <small>
            Có{" "}
            {
              [...datas].filter(
                (item) => item.productData.productCategory === "Niche Nam"
              ).length
            }{" "}
            sản phẩm
          </small>
        </h2>
        <div className="products-container">
          {isLoading ? (
            <ProductSkeleton count={9} />
          ) : (
            [...datas]
              .filter(
                (item) => item.productData.productCategory === "Niche Nam"
              )
              .map((item) => (
                <Product
                  key={item.id}
                  index={item.id}
                  productData={item.productData}
                />
              ))
          )}
        </div>
      </div>
    </>
  )
}

import { Banner } from "../components/Banner"
import { Product } from "../components/Product"
import { GetDatas } from "../components/GetDatas"
import { ProductSkeleton } from "../components/ProductSkeleton"
// import { useState } from "react"

export const Home = () => {
  const { isLoading, datas, setDatas } = GetDatas("products")
  // const [isSearchingMode, setSearchingMode] = useState(false)
  // const [query, setQuery] = useState("")
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(query)
  //   setDatas(
  //     [...datas].filter((item) =>
  //       item.productData.productName
  //         .toLocaleLowerCase()
  //         .includes(query.toLocaleLowerCase())
  //     )
  //   )
  // }

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
          {/* <button onClick={() => setSearchingMode(!isSearchingMode)}>
            <i className="bi bi-search"></i>
          </button> */}
        </div>
        {/* {isSearchingMode && (
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={(e) => setQuery(e.target.value)} />
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        )} */}

        {/* render Products by category */}
        <h2>NƯỚC HOA DESIGNER NAM</h2>
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
        <h2>NƯỚC HOA NICHE NAM</h2>
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

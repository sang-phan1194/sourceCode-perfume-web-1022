import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { add_item } from "../redux/cartSlice";
import "./product.scss";

export const Product = ({ index, productData }) => {
  const { productName, brandName, productPrice, productPhoto } = productData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="product">
      {/* Show toast message when add product to cart */}
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
            e.stopPropagation();
            dispatch(
              add_item({
                itemCount: 1,
                productName: productName,
                brandName: brandName,
                productPrice: productPrice,
                productPhoto: productPhoto,
              })
            );
          }}
        >
          <small>Add to cart</small>
          <i className="bi bi-cart-plus"></i>
        </span>
        {/* add to favorites btn */}
        <span>
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
  );
};

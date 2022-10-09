import Skeleton from "react-loading-skeleton";
import "../style/product.scss";

export const ProductSkeleton = ({ count }) => {
  return Array(count)
    .fill(0)
    .map((_, i) => (
      <div className="product-skeleton" key={i}>
        <Skeleton style={{ width: "16rem", height: "16rem" }} />
        <span>
          <Skeleton style={{ width: "12rem", height: "1.5rem" }} />
        </span>
        <span>
          <Skeleton style={{ width: "10rem", height: "1.5rem" }} />
        </span>
      </div>
    ));
};

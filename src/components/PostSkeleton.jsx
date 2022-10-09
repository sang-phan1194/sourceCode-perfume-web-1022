import Skeleton from "react-loading-skeleton";
import "../style/reviews.scss";

export const PostSkeleton = ({ count }) => {
  return Array(count)
    .fill(0)
    .map((_, i) => (
      <div className="post-skeleton" key={i}>
        <div className="post-info">
          <Skeleton height={"19rem"} />
        </div>
        <div className="post-detail">
          <Skeleton width={"100%"} height={"2.5rem"} />
          <Skeleton width={"30%"} style={{ marginTop: "1rem" }} />
          <p>
            <Skeleton height={"10rem"} />
          </p>
        </div>
      </div>
    ));
};

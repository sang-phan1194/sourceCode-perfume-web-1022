import { GetDatas } from "../components/GetDatas";
import { Banner } from "../components/Banner";
import { ReviewPost } from "../components/ReviewPost";
import { PostSkeleton } from "../components/PostSkeleton";
import "./reviews.scss";

export const Reviews = () => {
  const { isLoading, datas } = GetDatas("posts");

  return (
    <div className="reviews-page">
      <Banner bannerNum={3} />
      <div className="reviews-container">
        {!isLoading ? (
          [...datas].map((data) => (
            <ReviewPost
              key={data.id}
              id={data.id}
              postData={data.productData}
            />
          ))
        ) : (
          <PostSkeleton count={8} />
        )}
      </div>
    </div>
  );
};

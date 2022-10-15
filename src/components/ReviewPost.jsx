export const ReviewPost = ({ id, postData }) => {
  return (
    <div className="review-post">
      <div className="post-info">
        <img src={postData.postPhoto} loading="lazy" />
      </div>
      <div className="post-detail">
        <p>{postData.title}</p>
        <span>
          <small>Ngày viết: {new Date(+id).toString()} </small>
          <div className="yLine"></div>
          <small>Viết bởi: SS'Scent</small>
        </span>
        <p>
          {postData.desc + "..."} <a>Xem tiếp</a>{" "}
        </p>
      </div>
    </div>
  )
}

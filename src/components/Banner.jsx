import slide1 from "../assets/slide-1.jpg"
import slide2 from "../assets/slide-2.jpg"
import slide3 from "../assets/slide-3.png"

export const Banner = ({ bannerNum }) => {
  return (
    <div className="carousel">
      {bannerNum === 1 && (
        <div>
          <img src={slide1} loading="lazy" />
        </div>
      )}
      {bannerNum === 2 && (
        <div>
          <img src={slide2} loading="lazy" />
        </div>
      )}
      {bannerNum === 3 && (
        <div>
          <img src={slide3} loading="lazy" />
        </div>
      )}
    </div>
  )
}

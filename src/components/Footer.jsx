import logo from "../assets/logo.png"
import fblink from "../assets/facebookLink.png"
import "../style/footer.scss"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="main-info">
        <div className="info">
          <img src={logo} alt="page-logo" />
          <h3>HỘ KINH DOANH SSS'cent</h3>
          <p>GPKD số: 58A8087124</p>
          <p>Ngày cấp: 02/10/2022</p>
          <p>Cấp bởi: UBND TP XYZ</p>
          <ul>
            <li>
              <span>
                <i className="bi bi-geo-alt"></i>
              </span>
              <span className="text">77 Điện Biên Phủ, P.7, Quảng Nam</span>
            </li>
            <li>
              <span>
                <i className="bi bi-telephone"></i>
              </span>
              <span className="text">0966445267</span>
            </li>
            <li>
              <span>
                <i className="bi bi-envelope"></i>
              </span>
              <span className="text">support@mail.com.vn</span>
            </li>
          </ul>
        </div>
        <div className="customer-policy">
          <h3>HỖ TRỢ KHÁCH HÀNG</h3>
          <ul>
            <li>
              <span>
                <i className="bi bi-chevron-right"></i>
              </span>
              <span className="text">Chính sách bảo mật</span>
            </li>
            <li>
              <span>
                <i className="bi bi-chevron-right"></i>
              </span>
              <span className="text">Chính sách vận chuyển</span>
            </li>
            <li>
              <span>
                <i className="bi bi-chevron-right"></i>
              </span>
              <span className="text">Chính sách đổi trả</span>
            </li>
            <li>
              <span>
                <i className="bi bi-chevron-right"></i>
              </span>
              <span className="text">Hình thức thanh toán</span>
            </li>
          </ul>
        </div>
        <div className="customer-policy">
          <h3>HƯỚNG DẪN</h3>
          <ul>
            <li>
              <span>
                <i className="bi bi-chevron-right"></i>
              </span>
              <span className="text">Hướng dẫn mua hàng</span>
            </li>
            <li>
              <span>
                <i className="bi bi-chevron-right"></i>
              </span>
              <span className="text">Hướng dẫn thanh toán</span>
            </li>
            <li>
              <span>
                <i className="bi bi-chevron-right"></i>
              </span>
              <span className="text">Hướng dẫn giao nhận</span>
            </li>
            <li>
              <span>
                <i className="bi bi-chevron-right"></i>
              </span>
              <span className="text">Điều khoản dịch vụ</span>
            </li>
          </ul>
        </div>
        <div className="fblink">
          <h3>KẾT NỐI TRÊN FACEBOOK</h3>
          <a href="https://www.facebook.com/" target={"_blank"}>
            <img src={fblink} alt="fblink" />
          </a>
        </div>
      </div>
      <div className="line"></div>
      <div className="other-info">
        <p>
          2020 - Bản quyền thuộc về Chiết Nước Hoa Chuyên Nước Hoa Chiết Chính
          Hãng - Cung cấp bởi ABCD
        </p>
        <div className="social-media">
          <span>
            <i className="bi bi-facebook"></i>
          </span>
          <span>
            <i className="bi bi-chat"></i>
          </span>
          <span>
            <i className="bi bi-telephone"></i>
          </span>
        </div>
      </div>
    </div>
  )
}

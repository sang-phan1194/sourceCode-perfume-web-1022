import { Banner } from "../components/Banner";
import "./contact.scss";

export const Contact = () => {
  return (
    <>
      <Banner bannerNum={2} />
      <div className="contact-wrapper">
        <div className="contact-info">
          <p>SSS'cent</p>
          <p>
            SSS'cent được thành lập vào năm 2017, hiện đang là nhà phân phối
            chính hãng của các nhãn hàng lớn như Versace, Creed, Salvatore
            Ferragamo, Carolina Herrera, Jean Paul Gaultier v..v Tại SSS'cent,
            tất cả sản phẩm đều là hàng chính hãng và khách hàng sẽ được hậu mãi
            ở mức cao nhất.
          </p>
          <p>CỬA HÀNG CHÍNH</p>
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
          <div className="line"></div>
          <h4>GỬI PHẢN HỒI CHO CHÚNG TÔI</h4>
          <form className="contact-form">
            <input type="text" placeholder="Tên của bạn" />
            <input type="email" placeholder="Email của bạn" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              placeholder="Nhập nội dung"
            ></textarea>
            <button type="submit">Gửi phản hồi</button>
          </form>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.074102839984!2d106.71713771452045!3d10.728767963005986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f894320f91b%3A0xb6c098e537ce0abe!2sCrescent%20Mall!5e0!3m2!1svi!2s!4v1664773119904!5m2!1svi!2s"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

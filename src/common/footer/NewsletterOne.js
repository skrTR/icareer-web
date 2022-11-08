import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
const NewsletterOne = ({ extraClass, newsletetrStyle }) => {
  const Result = () => {
    return (
      <p className="success-message">
        Таны илгээсэн мэйл амжилттай явлаа. Бид тун удахгүй холбогдох болно.
      </p>
    );
  };
  const [result, showresult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5avwnqw",
        "template_isxchmt",
        form.current,
        "user_1CHFMfhYae6Ak6Vb4nSby"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };
  setTimeout(() => {
    showresult(false);
  }, 5000);
  return (
    <div className={`newsletter-area ${newsletetrStyle}`}>
      <div className="container">
        <div
          className={`row row--0 newsletter-wrapper align-items-center ${extraClass}`}
        >
          <div className="col-lg-4">
            <div className="newsletter-section-title">
              <h3 className="title">Захиалга өгөх</h3>
              <p className="description">
                Та доорх утасны дугаараар холбогдон захиалга өгөх эсвэл бидэнрүү
                утасны дугаараа илгээнэ үү.
                <br />
                <br />
                Утас: 7755-5255, 9949-3663, 9929-6600
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <form
              className="rn-newsletter mt_md--20 mt_sm--20"
              action=""
              onSubmit={sendEmail}
              ref={form}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Утасны дугаар"
                />
              </div>
              <div className="form-group">
                <button className="btn-default" type="submit" value="Send">
                  Илгээх
                </button>
              </div>
              <div className="form-group">{result ? <Result /> : null}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsletterOne;

import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { FiMail } from "react-icons/fi";

const AboutOne = ({ serviceStyle, textAlign }) => {
  return (
    <div className="rwt-about-area rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-6 mt_md--40 mt_sm--40 ">
            <div className="content" style={{ paddingLeft: 13 }}>
              <div className="section-title">
                <h2 className="title">Уншигч танд зориулав</h2>
                <h2 className="title" style={{ color: "#059dff" }}>
                  /Newsletter/
                </h2>
              </div>
            </div>
            <div className="col-lg-10 col-md-9 col-sm-9 col-18">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <div className={`service ${serviceStyle} ${textAlign}`}>
                  <div className="inner pb-xl-4">
                    <div className="content" style={{ paddingTop: 25 }}>
                      <p
                        className="description b1 color-gray "
                        dangerouslySetInnerHTML={{
                          __html:
                            "Өөрийгөө хөгжүүлэх хэрэгцээт, цаг үеийн чанартай мэдээллүүдийг тогтмол хүлээн аваарай",
                        }}
                      ></p>
                      <form
                        className="blog-search"
                        action="#"
                        // onSubmit={handleAddMagazineSubs}
                      >
                        <input
                          type="text"
                          name="name"
                          // onChange={handleAddMagazineSubmit}
                          placeholder="И-мэйл хаягаа бичнэ үү  "
                        />
                        <button className="search-button " type="submit">
                          <FiMail />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="thumbnail">
              <img
                className="w-100"
                src="./images/ihelp/131313.png"
                alt="About Images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;

import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FiCheck } from "react-icons/fi";

const About3 = () => {
  return (
    <div className="rn-splite-style pt--100  pb--100">
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img
                src="/images/ihelp/bg1.jpg"
                alt="banner123"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h4 className="title">
                  Хамгийн анхны өөрийн гар утасны
                  <strong style={{ color: "#059dff" }}>
                    {" "}
                    аппликейшнтэй сэтгүүл
                  </strong>{" "}
                  - Монголд
                </h4>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p className="description">
                  <ul className="list-icon">
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Сар бүр гарах сэтгүүлүүдийг бүтнээр нь унших
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>{" "}
                      Онцлох нийтлэлүүдийг сонгон унших
                    </li>

                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Булангуудаас сонгон унших
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Онцлох зочдын ярилцлагуудаас сонгон унших
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Нээлттэй ажлын байрнуудын лист үзэх
                    </li>
                  </ul>
                </p>
                <div style={{ paddingTop: 50 }}>
                  <h4>Яг одоо тат – үнэ төлбөргүй!</h4>
                  <div className="button-group mt--30 ">
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=mn.ihelp.career.developer"
                      style={{
                        background: "transparent",
                      }}
                    >
                      <img
                        src="/images/ihelp/ios.png"
                        style={{ width: 200, height: 110 }}
                        alt="ios"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://apps.apple.com/mn/app/career-developer/id1613815634"
                      style={{
                        background: "transparent",
                      }}
                    >
                      <img
                        src="/images/ihelp/and.png"
                        style={{ width: 200, height: 110 }}
                        alt="android"
                      />
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;

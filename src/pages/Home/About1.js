import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FiCheck } from "react-icons/fi";

const About1 = () => {
  return (
    <div className="rn-splite-style pt--100  pb--100">
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img
                src="/images/ihelp/sideeffect3.jpg"
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
                  Яагаад
                  <strong style={{ color: "#059dff" }}>
                    {" "}
                    CAREER developer
                  </strong>{" "}
                  сэтгүүл гэж?
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
                      Монголын медиа зах зээлд хувь хүн болон карьер хөгжлийн
                      чиглэлээр анхлан нэвтрүүлсэн
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>{" "}
                      Олон улсын стандартад нийцүүлэн бэлтгэн гаргадаг
                    </li>

                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Хамгийн сайн шүүлтүүрээр анализ хийгдсэн баттай эх
                      сурвалжийн мэдээллүүд
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Дижитал хувилбарыг гар утсандаа суулган хаанаас ч, хэзээ
                      ч, хүссэн үедээ үнэ төлбөргүй унших боломжтой
                    </li>
                    <li>
                      <span
                        className="icon"
                        style={{ backgroundColor: "#059dff", color: "white" }}
                      >
                        <FiCheck />
                      </span>
                      Манай контент баг бүрэлдэхүүн туршлагатай, чадварлаг,
                      салбарын шилдэгүүдээс бүрдсэн
                    </li>
                  </ul>
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;

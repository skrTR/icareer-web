import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import DarkLogo from "./DarkLogo";
const ServiceThree = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      <div className="col-lg-6 col-md-9 col-sm-9 col-18">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`service ${serviceStyle} ${textAlign}`}>
            <div className="inner pb-xl-4">
              <div className="image" style={{ alignSelf: "center" }}>
                <DarkLogo
                  image={`${process.env.PUBLIC_URL}/images/ihelp/magazineWhite.png`}
                  image2={`${process.env.PUBLIC_URL}/images/ihelp/magazineBlack.png`}
                />
              </div>
              <div className="content" style={{ paddingTop: 25 }}>
                {/* <h4 className="title">
                  <Link
                    to="#service"
                    dangerouslySetInnerHTML={{ __html: "Төсөл" }}
                  ></Link>
                </h4> */}
                <p
                  className="description b1 color-gray "
                  dangerouslySetInnerHTML={{
                    __html:
                      "Бид нийгэм дэх залуучуудын оролцоо тэдний хөдөлмөр эрхлэлт, өөрийн хүсэл сонирхолын дагуу ур чадвараа хөгжүүлэн карьераа өсгөх боломж зэргийг хамгийн дээд хэмжээгээр нь дэмжих, хамтарч ажиллах, зөвлөх зорилготойгоор анх 2021 онд ihelp magazine төслийг хэрэгжүүлж эхэлсэн юм.",
                  }}
                ></p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="col-lg-6 col-md-9 col-sm-9 col-18">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <div className={`service ${serviceStyle} ${textAlign}`}>
            <div className="inner">
              <div
                className="image align-content-center"
                style={{
                  alignSelf: "center",
                  // padding: 88,
                }}
              >
                <DarkLogo
                  image={`${process.env.PUBLIC_URL}/images/ihelp/careerWhite.png`}
                  image2={`${process.env.PUBLIC_URL}/images/ihelp/careerBlack.png`}
                />
              </div>
              <div className="content">
                {/* <h4 className="title">
                  <Link
                    to="#service"
                    dangerouslySetInnerHTML={{ __html: "Сэтгүүл" }}
                  ></Link>
                </h4> */}
                <p
                  className="description b1 color-gray pb--0 "
                  dangerouslySetInnerHTML={{
                    __html:
                      "<br/> Энэхүү зорилгын хүрээнд хэрэгжүүлж буй эхний ажил болох CAREER developer сэтгүүл нь цаашид сар бүр шинэ дугаараа та бүгдэд дижитал болон хэвлэмэл хувилбараар хүргэх болно.",
                  }}
                ></p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};
export default ServiceThree;

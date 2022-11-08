import React from "react";
import SEO from "../../common/SEO";
import HeaderOne from "../../common/header/HeaderOne";
import Separator from "../../elements/separator/Separator";
import SectionTitle1 from "./SectionTitle1";
import About from "./About";
import About1 from "./About1";
import ServiceThree from "./ServiceThree";
import About3 from "./About3";
import AboutOne from "./AboutOne";
import Footer from "../Footer/Footer";
import Layout from "../../common/Layout";
import SectionTitle from "../News/SectionTitle";
import NewsData from "./NewsData";
const HomeScreen = () => {
  return (
    <>
      <SEO title="Нүүр хуудас" />
      <main className="page-wrapper">
        <HeaderOne
          btnStyle="btn-small btn-icon round"
          HeaderSTyle="header-transparent"
        />

        <div className="single-slide">
          <div
            className="bg_image fullscreen "
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/ihelp/121212.jpg)`,
            }}
            // data-black-overlay="1"
          >
            <div className="container">
              <div className="row row--30 align-items-center">
                <div className="col-lg-12">
                  <div
                    className="inner text-center"
                    style={{ marginTop: "150px" }}
                  >
                    <h1
                      className="title"
                      dangerouslySetInnerHTML={{
                        __html: "Хувь хүн болон Kaрьер <br /> хөгжлийн сэтгүүл",
                      }}
                    ></h1>

                    <p style={{ color: "black", fontSize: 20 }}>
                      #CAREER developer
                    </p>
                    <div className="button-group ">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Slider Area  */}

        <Separator />
        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle1
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Бидний тухай?"
                  // title="Бидний тухай"
                />
              </div>
              <ServiceThree
                serviceStyle="service__style--2"
                textAlign="text-center"
              />
            </div>
          </div>
        </div>
        <Separator />
        <About1 />
        <Separator />
        <About />
        <Separator />
        <About3 />
        <Separator />
        <Layout>
          <div className="main-content">
            <div className="rwt-portfolio-area rn-section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <SectionTitle
                      textAlign="text-center"
                      title="Мэдээ"
                      description=""
                    />
                  </div>
                </div>
                <NewsData Column="col-lg-4 col-md-6 mt--30 portfolio" />
              </div>
            </div>
          </div>
        </Layout>
        <Separator />
        <AboutOne />

        <Separator />
        <Footer />
      </main>
    </>
  );
};

export default HomeScreen;

import React from "react";
import NewsletterOne from "../../common/footer/NewsletterOne";
import Layout from "../../common/Layout";
import SEO from "../../common/SEO";
import Footer from "../Footer/Footer";
import SectionTitle from "./SectionTitle";
const Pricing = () => {
  return (
    <>
      <SEO title="Захиалга" />
      <Layout>
        <div className="main-content">
          <div className="rwt-portfolio-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Portfolio Three Column"
                    title="You can customize everything!"
                    description=""
                  />
                </div>
              </div>
              <div className="row row--0">
                {/* Start PRicing Table Area  */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="rn-pricing style-4">
                    <div className="pricing-table-inner">
                      <div className="pricing-header">
                        <h4 className="title">1 сар / 1 дугаар </h4>
                        <div className="pricing">
                          <div className="price-wrapper">
                            <span className="currency">₮</span>
                            <span className="price">
                              20<strong style={{ fontSize: 30 }}>.000</strong>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* <div className="pricing-footer">
                        <a className="btn-default btn-border" href="#pricing">
                          Purchase Now
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* End PRicing Table Area  */}

                {/* Start PRicing Table Area  */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="rn-pricing style-4 active">
                    <div className="pricing-table-inner">
                      <div className="pricing-header">
                        <h4 className="title">3 сар / 3 дугаар </h4>
                        <div className="pricing">
                          <div className="price-wrapper">
                            <span className="currency">₮</span>
                            <span className="price">
                              55<strong style={{ fontSize: 30 }}>.000</strong>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* <div className="pricing-footer">
                        <a className="btn-default" href="#pricing">
                          Purchase Now
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* End PRicing Table Area  */}

                {/* Start PRicing Table Area  */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="rn-pricing style-4">
                    <div className="pricing-table-inner">
                      <div className="pricing-header">
                        <h4 className="title">6 сар / 6 дугаар </h4>
                        <div className="pricing">
                          <div className="price-wrapper">
                            <span className="currency">₮</span>
                            <span className="price">
                              95<strong style={{ fontSize: 30 }}>.000</strong>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* <div className="pricing-footer">
                        <a className="btn-default btn-border" href="#pricing">
                          Purchase Now
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* End PRicing Table Area  */}

                {/* Start PRicing Table Area  */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="rn-pricing style-4">
                    <div className="pricing-table-inner">
                      <div className="pricing-header">
                        <h4 className="title">1 жил / 12 дугаар </h4>
                        <div className="pricing">
                          <div className="price-wrapper">
                            <span className="currency">₮</span>
                            <span className="price">
                              180<strong style={{ fontSize: 30 }}>.000</strong>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* <div className="pricing-footer">
                        <a className="btn-default btn-border" href="#pricing">
                          Purchase Now
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* End PRicing Table Area  */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <NewsletterOne />
      <Footer />
    </>
  );
};
export default Pricing;

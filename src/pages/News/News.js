import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "./SectionTitle";
import NewsData from "./NewsData";

const News = () => {
  return (
    <>
      <SEO title="career developer medee" />
      <Layout>
        <div className="main-content">
          <div className="rwt-portfolio-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle textAlign="text-center" title="Мэдээ" />
                </div>
              </div>
              <NewsData Column="col-lg-4 col-md-6 mt--30 portfolio" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default News;

import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import ContactOne from "./ContactOne";
import Separator from "../../elements/separator/Separator";
import ContactData from "./ContactData";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <>
      <SEO title="Холбоо барих" />
      <Layout>
        <div className="main-content">
          {/* Start Contact Area  */}
          <div className="rwt-contact-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb--40">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Холбоо барих мэдээлэл"
                    title="Бидэнтэй хамтран ажиллахыг урьж байна"
                    description=""
                  />
                </div>
              </div>
              <ContactOne />
            </div>
          </div>
          <ContactData />
          <Separator />
        </div>
      </Layout>
      <Footer />
    </>
  );
};
export default Contact;

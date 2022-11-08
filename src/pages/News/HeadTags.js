import React from "react";
import { Helmet } from "react-helmet";
const HeadTags = (props) => {
  const {
    title = "News",
    metaDescription = "Hi Test",
    image = "gs25.png",
  } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" key="description" content={metaDescription} />
      <meta name="title" key="title" content={title} />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content={metaDescription}
      />
      <meta
        property="og:image"
        key="og:image"
        content={`https://novelistgroup.com/upload/${image}`}
      />
      {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" key="description" content={metaDescription} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta
        property="og:image"
        content="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/275108575_146425327834077_8880499007624615396_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LPzHxomCSpYAX_9meP0&_nc_ht=scontent.fuln6-1.fna&oh=00_AT-rDMVqiTeK8fnbGMLZI4NgGn48rZQrjX_yEx-MY3WaKg&oe=626D6458"
      />
      <meta property="fb:app_id" content="662546334827488" /> */}
    </Helmet>
  );
};

export default HeadTags;

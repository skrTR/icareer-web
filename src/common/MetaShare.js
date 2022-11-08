import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
const MetaShare = ({ title, ogTitle, ogDescrtiption, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" key="description" content={ogDescrtiption} />
      <meta name="title" key="title" content={title} />
      <meta property="og:title" key="og:title" content={ogTitle} />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content={ogDescrtiption}
      />
      <meta
        property="og:image"
        key="og:image"
        content={`https://novelistgroup.com/upload/${image}`}
      />
    </Helmet>
  );
};
MetaShare.propTypes = {
  title: PropTypes.string.isRequired,
  ogTitle: PropTypes.string.isRequired,
  ogDescrtiption: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MetaShare;

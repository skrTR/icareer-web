import React, { useEffect, useState } from "react";
import NewsDetailsContent from "./NewsDetailsContent";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import axios from "../../axios";

const NewsDetails = (props) => {
  // const { id } = props.match.params.id;
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(`/articles/${props.match.params.id}`)
      .then((result) => {
        setData(result.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {/* <SEO title="Мэдээ" /> */}
      <Layout>
        <NewsDetailsContent data={data} />
      </Layout>
    </>
  );
};

export default NewsDetails;

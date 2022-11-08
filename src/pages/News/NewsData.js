import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import axios from "../../axios";
import NewsItem from "./NewsItem";

const PortfolioOne = ({ Column }) => {
  const [getAllItems, setGetAllItems] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [noMorePost, setNoMorePost] = useState(false);
  const [pagination, setPagination] = useState();
  useEffect(() => {
    axios
      .get(`/articles?limit=6&sort=-createdAt&page=${pageCurrent}`)
      .then((result) => {
        setGetAllItems([...getAllItems, ...result.data.data]);
        setPagination(result.data.pagination);
      })
      .catch((err) => console.log(err));
  }, [pageCurrent]);
  const handleMore = () => {
    if (pageCurrent >= pagination.pageCount) {
      setNoMorePost(true);
    } else {
      setPageCurrent(pageCurrent + 1);
    }
    // setIsLoading(true);
  };
  return (
    <>
      <div className="row row--15">
        {getAllItems.map((item) => (
          <div key={item.id} className={Column}>
            <NewsItem data={item} />
          </div>
        ))}
      </div>

      <div className="row row--15">
        <div className="col-lg-12">
          <div className="rwt-load-more text-center mt--50">
            <button
              className="btn btn-default btn-large btn-icon"
              onClick={handleMore}
              disabled={noMorePost ? "disabled" : null}
            >
              {noMorePost ? (
                "Өөр мэдээ байхгүй"
              ) : (
                <span>
                  Үргэлжлүүлэх
                  <span className="icon">
                    <FaSpinner />
                  </span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioOne;

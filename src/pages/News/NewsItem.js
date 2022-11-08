import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
const NewsItem = ({ data }) => {
  return (
    <div className="rwt-card">
      <div className="inner">
        <div className="thumbnail">
          <figure className="card-image">
            <Link to={process.env.PUBLIC_URL + `/news/${data.id}`}>
              <img
                className="img-fluid"
                src={`https://novelistgroup.com/upload/${data.image}`}
                alt="Portfolio-01"
              />
            </Link>
          </figure>
          <Link
            to={process.env.PUBLIC_URL + `/news/${data.id}`}
            className="rwt-overlay"
          ></Link>
        </div>
        <div className="content">
          <h5 className="title mb--10">
            <Link to={process.env.PUBLIC_URL + `/news/${data.id}`}>
              {data.title}
            </Link>
          </h5>
          <p className="description">
            <Link to={process.env.PUBLIC_URL + `/news/${data.id}`}>
              {moment(data.createdAt).format("L")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;

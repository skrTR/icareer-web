import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";
import moment from "moment";
import MetaShare from "../../common/MetaShare";
const NewsDetailsContent = (props) => {
  const { data } = props;
  return (
    <>
      <MetaShare
        title="Мэдээ мэдээлэл"
        ogTitle={data.title}
        ogDescrtiption={data.title}
        image={data.image}
      />
      <div className="post-page-banner rn-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="content text-center">
                <div className="page-title">
                  <h1 className="theme-gradient">{data.title}</h1>
                </div>

                <ul className="rn-meta-list">
                  <li>
                    {data.createUser && (
                      <>
                        <img
                          src={`https://novelistgroup.com/upload/${data.createUser.profile}`}
                          alt="profile-pic"
                          style={{ width: 50, height: 50, borderRadius: 50 }}
                        />
                        <Link>{data.createUser.firstName}</Link>
                      </>
                    )}
                  </li>
                  <li>
                    <FiCalendar />
                    {moment(data.createdAt).format("L")}
                  </li>
                </ul>

                <iframe
                  src={`https://www.facebook.com/plugins/like.php?href=https://icareer.mn/news/${data._id}&width=174&layout=button_count&action=like&size=large&share=true&height=46&appId=662546334827488`}
                  width={174}
                  height={46}
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
                <div className="thumbnail alignwide mt--60">
                  <img
                    className="w-100 radius"
                    src={`https://novelistgroup.com/upload/${data.image}`}
                    alt="Blog Images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-details-content pt--60 rn-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="content">
                {data.body &&
                  data.body.map((value, i) => {
                    return (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    );
                  })}
                {data.body1 &&
                  data.body1.map((value, i) => {
                    return (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    );
                  })}
                {data.body2 &&
                  data.body2.map((value, i) => {
                    return (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetailsContent;

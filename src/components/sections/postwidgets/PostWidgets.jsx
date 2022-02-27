import React, { useState, useEffect } from "react";
import moment from "moment";
import { getSimilarPosts, getRecentPosts } from "../../../services";
import "./PostWidgets.scss";
import { Link } from "react-router-dom";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="postwidget">
      <h3 className="recentpost">{slug ? "Related Posts" : "Recent Posts"}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="img_title">
          <div className="img_container">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              src={post.featuredImage.url}
            />
          </div>
          <div className="date_title">
            <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>

            <Link to={`/post/${post.slug}`} className="link">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;

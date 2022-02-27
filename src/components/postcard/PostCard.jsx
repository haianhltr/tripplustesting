import React from "react";
import "./PostCard.scss";
import { Link } from "react-router-dom";
import moment from 'moment';

const PostCard = ({ post }) => (
  <div className="postcard">
        <div className="imgcontainer">
    <img src={post.featuredImage.url} alt="" />
     </div>

     <h1 className="postTitle">
      <Link to={`/post/${post.slug}`} className="link">
     {post.title}
      </Link>
      </h1>
   





 

    <div className="info">
      <div className="authorname_img">
        <img
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          src={post.author.photo?.url}
        />
        <p>
          {post.author.name}
        </p>
      </div>
      <div className="datecontainer">
        <span className="date">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </div>

    <p className="excerpt">{post.excerpt}</p>



    <div className="button-center">
    <Link to={`/post/${post.slug}`} className="link">
        <button className="button">Continue Reading</button>
      </Link>
    </div>
  </div>
);

export default PostCard;

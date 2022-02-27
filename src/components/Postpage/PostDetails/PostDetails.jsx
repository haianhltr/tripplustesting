import React from 'react';
import moment from 'moment';
import "./PostDetails.scss";

const PostDetails = ({post}) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="h3_case">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="p_case">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="h4_case">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
    <div className="postdetails">
      <div className="imgcontainer">
        <img src={post?.featuredImage.url} alt="" />
      </div>
      <div className="articlecontainer">
          <div className="header">
            <div className="image_author_container">
              <img
                alt={post?.author.name}
                height="30px"
                width="30px"
                src={post?.author.photo.url}
              />
              <p>{post?.author.name}</p>
            </div>
            <div className="datecontainer">
              <svg xmlns="http://www.w3.org/2000/svg" className="dateimage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="datetext">{moment(post?.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1>{post?.title}</h1>
          {post?.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
    </div>

  </>
  );
};

export default PostDetails;

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import "./Post.scss";
import { getPostDetails } from "../../services";
import { useLocation } from "react-router-dom";
import PostDetails from "../../components/Postpage/PostDetails/PostDetails";
import PostWidget from "../../components/sections/postwidgets/PostWidgets";
import postcss from "postcss";

const Post = () => {
  const [posts, setPost] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  console.log(id);

  useEffect(() => {
    const getProduct = async () => {
      const res = await getPostDetails(id);
      setPost(res);
    };
    getProduct();
  }, [id]);



  return (
    <div className="postindividual">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="middle" onClick={()=>setMenuOpen(false)} >
        <div className="grid">
          <div className="postcontainer">
          <PostDetails post={posts} />
            
            {/* <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
           
          </div>
          <div className="sidebar">
            <div className="sidebarcontainer">
            <PostWidget />
              {/* <Categories /> */}
            </div>
          </div>
        </div>
      </div>

    
     

      <div className="sections" onClick={()=>setMenuOpen(false)} >
        <Footer />
      </div>
    </div>
  );
};

export default Post;

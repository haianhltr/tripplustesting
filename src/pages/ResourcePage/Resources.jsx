import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import "./Resources.scss";
import { getPosts, getPostDetails } from "../../services";
import PostCard from "../../components/postcard/PostCard";
import { useLocation } from "react-router";
import PostWidget from "../../components/sections/postwidgets/PostWidgets";

export default function Resources() {
  const {search}  = useLocation();
  
  const [posts, setPost] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      const res = (await getPosts()) || [];

      setPost(res);
      
    };
    getProduct();
  }, [search]);
 
  return (
    <div className="resourceindividual">
      <div className="top">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>


      <h2 className="title">Resources</h2>

      <div className="middle" onClick={()=>setMenuOpen(false)} >
        <div className="container">
          <div className="grid">
            <div className="postcard_container">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
            <div className="postwidget_container">
    <div className="postwidget_wrapper">
     <PostWidget />
    </div>
  </div>
            
          </div>
        </div>
      </div>
      <div className="sections" onClick={()=>setMenuOpen(false)} > 
        <Footer />
      </div>
    </div>
  );
}

// // Fetch data at build time
// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   return {
//     props: { posts },
//   };
// }

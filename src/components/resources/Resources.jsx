import "./resources.scss";
import { posts } from "../../data";
import NewsItem from "./news/NewsItem";
export default function Resources({ menuOpen, setMenuOpen }) {
    return (
        <div className ="parents">
       <h2 className = "title">Resources</h2>
        <div className = "resourcespage">
     
        {posts.map((item) =>(

<NewsItem item = {item} key = {item.id}/>
))}
   
      
        </div>
        </div>
    );
  }

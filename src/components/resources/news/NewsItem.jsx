
import "./NewsItem.scss";
export default function NewsItem({item}) {

    return (
        <div className = "NewsItem">

            <img  src = {item.img}></img>
           
            <div className = "item">
                <h1>{item.title}</h1>
                <p className = "date">{item.label}</p>
            <p>{item.desc}</p>
            
            </div>
      </div>


    )


}

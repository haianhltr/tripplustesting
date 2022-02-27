
import "./categoryItem.scss";
export default function CategoryItem({item}) {

    return (
        <div className = "categoryItem">
            <img src = {item.img}></img>
            <div className ="info">
                <h1>{item.title}</h1>
            </div>


      </div>


    )


}


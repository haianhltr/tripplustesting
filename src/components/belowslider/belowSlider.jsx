import "./belowSlider.scss";
import { categories } from "../../data";
import CategoryItem from "../categoryItem/categoryItem";

export default function belowSlider() {
  return (
    <div className="belowslider">
      <div className="container">
        <div className="title">WHY TRIPPLUS?</div>
        <div className="desc">
          Do you know the COVID-19 pandemic has reshaped the travel insurance in
          unexpected way? We are the Canadian-based start-up company who are
          developing the solution for post-pandemic travel BOOM.
        </div>
      </div>

      <div className="itemcontainer">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

import "./slider.scss";
import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../../data";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slide = styled.div`

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  @media (max-width: 1024px) { 
    flex-direction : column;
    height: 100%;
   
   }
`;

const Image = styled.img`
  width: 100%;
  

  border-radius: 2.5rem;
`;

export default function Intro() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider">
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <div className="imgContainer">
              <Image src={item.img} />
            </div>
            <div className="infoContainer">
              <div className = "titlecontainer">
              <h1 className="title1">{item.title}</h1>
              <h1 className="title2">TRIPPLUS.CA</h1>
              </div>
              <p className="desc">{item.desc}</p>
              <button className="button">GET STARTED</button>
              <button className="button">MORE DETAILS</button>
            </div>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </div>
  );
}

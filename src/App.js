import "./styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          variableWidth: false,
          centerMode: false
        }
      }
    ]
  };

  return (
    <div className="container">
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div style={{ width: 600 }}>
          <div style={{ height: 400, background: "red" }}>1</div>
        </div>
        <div style={{ width: 600 }}>
          <div style={{ height: 400, background: "blue" }}>2</div>
        </div>
        <div style={{ width: 600 }}>
          <div style={{ height: 400, background: "yellow" }}>3</div>
        </div>
        <div style={{ width: 600 }}>
          <div style={{ height: 400, background: "green" }}>4</div>
        </div>
        <div style={{ width: 600 }}>
          <div style={{ height: 400, background: "brown" }}>5</div>
        </div>
        <div style={{ width: 600 }}>
          <div style={{ height: 400, background: "pink" }}>6</div>
        </div>
      </Slider>
    </div>
  );
}

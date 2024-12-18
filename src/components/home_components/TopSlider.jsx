import React, { useState } from "react";
import sliderAPI from "../../APIs/sliderAPI";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import ComingSoonResult from "../../animations/coming_soon.json";

const TopSlider = () => {
  const [image] = useState(sliderAPI);
  return (
    <>
      {/* <div className="margin-top-max">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {image.map((item) => {
              return (
                <>
                  <div className={item.classes} key={item.id}>
                    <NavLink to={item.link}>
                      <img
                        src={item.imagePath}
                        className="d-block w-100"
                        alt="Card"
                      />
                    </NavLink>
                  </div>
                </>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}

      <section className="coming-soon">
        <Lottie
          loop={true}
          animationData={ComingSoonResult}
          className="lottie-animation w-100"
          style={{ height: "300px" }} // Adjust the height as needed
        />
      </section>
    </>
  );
};

export default TopSlider;

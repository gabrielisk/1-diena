import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];

  const [currentImgIndex, setImgIndex] = useState(0);

  const prevImage = () => {
    if (currentImgIndex > 0) {
      setImgIndex(currentImgIndex - 1);
    } else if (currentImgIndex === 0) {
      setImgIndex(images.length - 1);
    }
  };

  const nextImage = () => {
    if (currentImgIndex < images.length - 1) {
      setImgIndex(currentImgIndex + 1);
    } else if (currentImgIndex === images.length - 1) {
      setImgIndex(0);
    }
  };

  return (
    <div className="gallery">
      <div className="main-photo">
        {images[currentImgIndex] ? (
          <img src={"./src/assets/images/" + images[currentImgIndex]}></img>
        ) : (
          <div className="no-photo">"Tokios nuotraukos nėra"</div>
        )}

        <div className="buttons">
          <button className="prev" onClick={prevImage}>
            <svg
              width="41"
              height="39"
              viewBox="0 0 41 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="20"
                cy="19.1667"
                rx="20"
                ry="19.1667"
                transform="matrix(-1 0 0 1 40.9851 0)"
                fill="#F4BF03"
              />
              <g clip-path="url(#clip0_0_1)">
                <path
                  d="M23.4851 12.75L17.2351 19L23.4851 25.25"
                  stroke="#252525"
                  stroke-opacity="0.8"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_1">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(-1 0 0 1 30.9851 9)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="next" onClick={nextImage}>
            <svg
              width="41"
              height="39"
              viewBox="0 0 41 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="20.015"
                cy="19.1667"
                rx="20"
                ry="19.1667"
                fill="#F4BF03"
              />
              <g clip-path="url(#clip0_0_1)">
                <path
                  d="M17.515 12.75L23.765 19L17.515 25.25"
                  stroke="#252525"
                  stroke-opacity="0.8"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_1">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(10.015 9)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className="navigation">
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={"./src/assets/images/" + img}
              className={index === currentImgIndex ? "active" : ""}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

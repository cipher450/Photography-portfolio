import { useEffect } from "react";

export default function Carousel({ images }) {
  let i = 0;
  
 
 
 
 
  return (
    <div class="carousel">
      <ul class="slides">
        {images.map((img) => (
          <div>
            <input type="radio" name="radio-buttons" id={img.imgId} />
            <li class="slide-container">
              <div class="slide-image">
                <img src={img.imgLink}></img>
              </div>
            </li>
          </div>
        ))}
        <div class="carousel-dots">
          {images.map((img) => (
            <label
              for={img.imgId}
              class="carousel-dot"
              id={img.imgDotId}
            ></label>
          ))}
        </div>
      </ul>
    </div>
  );
}

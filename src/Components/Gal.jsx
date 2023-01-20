import PhotoViewer from "./PhotoViewer";
import {Link } from "react-router-dom";
import { useEffect } from "react";

export default function Gal({
  frontImage,
  Titel,
  images,
  ViewerState,
  ViewerStateFunc,
  imgLinkFunc,
  isCollections,
}) {
  function ViewerToggler() {
    ViewerStateFunc(!ViewerState);
  }
  
  function Getsrc(e) {
    imgLinkFunc(e.currentTarget.src);
  }
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
 
  return (
    <div>
      <div className="Galerie--Titel">
        {isCollections ? (
            <a  class="material-symbols-outlined" href="/Collections">arrow_back</a>
          
        ) : (
          ""
        )}

        <h1>{Titel}</h1>
        <img src={frontImage} alt="" />
      </div>

      <div class="gallery">
        {images.map((img) => (
          <a class="gallery__link" onClick={ViewerToggler}>
            <figure class="gallery__thumb">
              <img
                src={img}
                alt="Portrait by Oladimeji Odunsi"
                class="gallery__image"
                onClick={Getsrc}
              />
            </figure>
          </a>
        ))}
        ;
      </div>
    </div>
  );
}

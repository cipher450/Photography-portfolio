import PhotoViewer from "./PhotoViewer";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import Router from "next/router";
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
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  function reload(){
    Router.reload();
  }
  return (
    <div>
      <div className="Galerie--Titel">
        {isCollections ? (
          <a class="arrow" onClick={reload}>
            ➜
          </a>
        ) : (
          ""
        )}

        <h1>{Titel}</h1>
        <img src={frontImage} alt=""   />
      </div>

      <div class="gallery">
        {images.map((img, index) => (
          <a class="gallery__link" onClick={ViewerToggler} key={index}>
            <figure class="gallery__thumb">
              <img
                src={img}
                alt="Portrait by Oladimeji Odunsi"
                class="gallery__image"
                onClick={Getsrc}
                width={1000}
                height={1000}
              />
            </figure>
          </a>
        ))}
        ;
      </div>
    </div>
  );
}

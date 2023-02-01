import { useState } from "react";
import Gal from "../Components/Gal";
import PhotoViewer from "../Components/PhotoViewer";

//Images collections
import { cars, nature, Urban, Beach, Animals } from "../Data/Pictures";
export default function Collections() {
  const [ShowCol, SetShowCol] = useState(true);
  const [GalerieProps, SetGalerieProps] = useState({
    frontimage: "",
    Titel: "",
    Images: [],
  });
  const [ViewerOn, SetViewerOn] = useState(false);
  const [imageLink, SetimageLink] = useState("");

  function ShowGalerie(e) {
    // here we are taking the clicked elments text to chose which gallery should be shown
    let gal_text = e.currentTarget.textContent;

    switch (gal_text) {
      case "Cars":
        SetGalerieProps({
          frontimage: cars[1],
          Titel: gal_text,
          Images: cars,
        });
        break;
      case "Nature":
        SetGalerieProps({
          frontimage: nature[1],
          Titel: gal_text,
          Images: nature,
        });
        break;
      case "Animals":
        SetGalerieProps({
          frontimage: Animals[3],
          Titel: gal_text,
          Images: Animals,
        });
        break;
      case "Outdoors":
        SetGalerieProps({
          frontimage: Urban[5],
          Titel: gal_text,
          Images: Urban,
        });
        break;
      case "Beach":
        SetGalerieProps({
          frontimage: Beach[1],
          Titel: gal_text,
          Images: Beach,
        });
        break;

      default:
        break;
    }
    SetShowCol(false);
  }

  return (
    <>
      {ViewerOn ? (
        <PhotoViewer imageLink={imageLink} ViewerOn={SetViewerOn} />
      ) : (
        ""
      )}
      {ShowCol ? (
        <div className="colections">
          <div className="col-1">
            <div className="image-col">
              <img
                className="hex-cell"
                src={cars[5]}
                alt=""
              />
              <img
                className="hex-cell"
                src={cars[10]}
                alt=""
              />
              <img
                className="hex-cell"
                src={cars[2]}
                alt=""
              />
              <img
                className="hex-cell"
                src={cars[6]}
                alt=""
              />
            </div>

           <div className="waves">
            
           </div>
            <h1 onClick={ShowGalerie}>Cars</h1>
          </div>

          <div className="col-1">
            <h1 onClick={ShowGalerie}>Nature</h1>
            <div className="image-col">
              <img className="hex-cell" src={nature[0]} alt="" />
              <img className="hex-cell" src={nature[1]} alt="" />
              <img className="hex-cell" src={nature[2]} alt="" />
              <img className="hex-cell" src={nature[3]} alt="" />
            </div>
          </div>

          <div className="col-1">
            <div className="image-col">
              <img className="hex-cell" src={Animals[0]} alt="" />
              <img className="hex-cell" src={Animals[1]} alt="" />
              <img className="hex-cell" src={Animals[2]} alt="" />
              <img className="hex-cell" src={Animals[3]} alt="" />
            </div>
            <h1 onClick={ShowGalerie}>Animals</h1>
          </div>

          <div className="col-1">
            <h1 onClick={ShowGalerie}>Outdoors</h1>
            <div className="image-col">
              <img className="hex-cell" src={Urban[5]} alt="" />
              <img className="hex-cell" src={Urban[6]} alt="" />
              <img className="hex-cell" src={Urban[2]} alt="" />
              <img className="hex-cell" src={Urban[3]} alt="" />
            </div>
          </div>

          <div className="col-1">
            <div className="image-col">
              <img className="hex-cell" src={Beach[0]} alt="" />
              <img className="hex-cell" src={Beach[1]} alt="" />
              <img className="hex-cell" src={Beach[2]} alt="" />
              <img className="hex-cell" src={Beach[3]} alt="" />
            </div>
            <h1 onClick={ShowGalerie}>Beach</h1>
          </div>
        </div>
      ) : (
        <Gal
          frontImage={GalerieProps.frontimage}
          Titel={GalerieProps.Titel}
          images={GalerieProps.Images}
          ViewerState={ViewerOn}
          ViewerStateFunc={SetViewerOn}
          imgLinkFunc={SetimageLink}
          isCollections={true}
        />
      )}
    </>
  );
}

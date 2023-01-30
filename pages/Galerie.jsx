import { useState } from "react";
import Gal from "../Components/Gal";
import PhotoViewer from "../Components/PhotoViewer";
import { cars, nature, Urban, Beach, Animals } from "../Data/Pictures";
//import ScrollToTop from "react-scroll-to-top";

export default function Galerie() {
  let pics = cars.concat(nature, Urban, Beach, Animals);
  const [ViewerOn, SetViewerOn] = useState(false);
  const [imageLink, SetimageLink] = useState("");

  return (
    <div className="GaleriePage">
      {ViewerOn ? (
        <PhotoViewer imageLink={imageLink} ViewerOn={SetViewerOn} />
      ) : (
        ""
      )}
      <Gal
        Titel="Galerie"
        frontImage={cars[22]}
        images={pics}
        ViewerState={ViewerOn}
        ViewerStateFunc={SetViewerOn}
        imgLinkFunc={SetimageLink}
        isCollections={false}
      />
     { //<ScrollToTop smooth />
     }
     
    </div>
  );
}

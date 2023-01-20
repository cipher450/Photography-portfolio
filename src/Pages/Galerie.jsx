import { useState } from "react";
import Gal from "../Components/Gal";
import PhotoViewer from "../Components/PhotoViewer";
import { cars, nature, Urban, Beach, Animals } from "../Data/Pictures";
import ScrollToTop from "react-scroll-to-top";

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
        frontImage="https://scontent.falg5-2.fna.fbcdn.net/v/t31.18172-8/14207849_335755850100944_6925046916568869681_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeFu3FqCWTR8m8j_hODXkdHlZTPUQGm1ELRlM9RAabUQtBvyXCSXm-TthcKzZIfXignJ9MvEeY2zxx1oYcp6Znin&_nc_ohc=U4egMuLvbBAAX86jRm3&_nc_ht=scontent.falg5-2.fna&oh=00_AfD8X1jaSADcCHyqJytH00v8KezG1qPviFKoYRS0kIezHw&oe=63ED4825"
        images={pics}
        ViewerState={ViewerOn}
        ViewerStateFunc={SetViewerOn}
        imgLinkFunc={SetimageLink}
        isCollections={false}
      />
      <ScrollToTop smooth />
     
    </div>
  );
}

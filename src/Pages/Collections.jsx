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
      case "Urban":
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
                src="https://scontent.falg5-1.fna.fbcdn.net/v/t31.18172-8/16300151_409113639431831_2704381912837435314_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeF6APfLmvc4xrtGpcpdoh09mCzxfm8HC86YLPF-bwcLztPkEp3M6XIvae3tEH70Zfw3v-gkpu0C-CjD_rvTXHaB&_nc_ohc=Vohau6FG2bcAX-SlSDg&_nc_ht=scontent.falg5-1.fna&oh=00_AfDooGWCnH5W6O24yL5E2Oi-qXI1oIHK80KSXMP8BFO3HA&oe=63ED7A79"
                alt=""
              />
              <img
                className="hex-cell"
                src="https://scontent.falg5-1.fna.fbcdn.net/v/t31.18172-8/16178953_409113856098476_5514573660214053392_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeHtNYsKi3ZPV1GFwBg7WV1tm2H4NQT1MS6bYfg1BPUxLq8sS368IhyRC12_W-b6oIWp9qQb52ZOY4g01oZz1nyB&_nc_ohc=iafJlbH09VAAX-8_MBs&_nc_ht=scontent.falg5-1.fna&oh=00_AfAXPjfdTh9cyv-jlTvVKeQv4Es7f_KFduUD2Emog41UJA&oe=63ED8CA0"
                alt=""
              />
              <img
                className="hex-cell"
                src="https://scontent.falg5-1.fna.fbcdn.net/v/t31.18172-8/16300338_409114059431789_643968163499589663_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeFaTLGdqFQY2TFjUF7BLbCRjDYaeKUATcyMNhp4pQBNzOKOMlvtTb8KqrsLgMNq63maPY4ozTuCeKdj_tOoGx_C&_nc_ohc=5EsUsUUrgyoAX9cNo-c&_nc_ht=scontent.falg5-1.fna&oh=00_AfBrygBTZO5ULNY54rBvFqwS9Zpp0y4DHnB11yqemW3KIw&oe=63ED59C6"
                alt=""
              />
              <img
                className="hex-cell"
                src="https://scontent.falg5-1.fna.fbcdn.net/v/t31.18172-8/16177755_409114379431757_2005402622221357695_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeG3R5Xl_iYDQ8svrh_KHp-u6C0DqrBmRz3oLQOqsGZHPdssB7BQuUHJ9QMoFURnG4AB-jO3ZIN3NJB583gNWN5B&_nc_ohc=ekE-6-zFQWAAX99Nwjy&_nc_ht=scontent.falg5-1.fna&oh=00_AfBbhsqDJ7KVJEuX2BmOqE8im7_9IIvvg_ZxxEm_GuQSpg&oe=63ED8113"
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
            <h1 onClick={ShowGalerie}>Urban</h1>
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

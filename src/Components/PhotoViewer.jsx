import { useState } from "react";

export default function PhotoViewer({ imageLink, ViewerOn }) {
  const [imgLink, setimag] = useState(imageLink);

  console.log(imageLink);
  function Close() {
    ViewerOn(false);
  }
  return (
    <div className="Viewer">
      <span onClick={Close} className="material-symbols-outlined">close</span>
     
      <img src={imageLink} alt="" />
    </div>
  );
}

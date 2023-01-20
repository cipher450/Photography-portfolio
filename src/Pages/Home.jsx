
import Carousel from "../Components/Carousel";
import Section from "../Components/Section";
import { useEffect, useRef, useState } from "react";
import { all, sectionImages } from "../Data/Pictures";
export default function Home() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === all.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <>
    
      <div className="hero-image">
        <img src={all[index]}></img>
      </div>
      <Section titel="Galerie" image={sectionImages[0]} />
      <Section titel="Collections" image={sectionImages[1]} />
      <Section titel="Contact" image={sectionImages[2]} />
     
    </>
  );
}

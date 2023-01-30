
 
import Section from "../Components/Section";
import { useEffect, useRef, useState } from "react";
import { cars,  Beach,all } from "../Data/Pictures";
 
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
      <Section titel="Galerie" image={Beach[3]} />
      <Section titel="Collections" image={cars[10]} />
      <Section titel="Contact" image={require('../Data/contact.jpg')} />
     
    </>
  );
}

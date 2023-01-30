
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import Section from "../Components/Section";
import { cars, Beach, all } from "../Data/Pictures";
import React from "react";

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
    <div className="index">
    
      <div className="hero-image">
        <Image src={all[index]} fill={true}></Image>
      </div>
      <Section titel="Galerie" image={Beach[3]} />
      <Section titel="Collections" image={cars[10]} />
      <Section titel="Contact" image={"./images/contact.jpg"} />
    </div>
  );
}

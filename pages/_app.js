import "../styles/globals.css";
import Navbar from "../Components/Navbar";

import { photographer } from "../Data/Profile";
export default function App({ Component, pageProps }) {
  return (
    <>
      
      <Navbar />
      <Component {...pageProps} />
      <footer>
        <h1>
          Coded & Designed by{" "}
          <a href="https://cipher450.github.io/Personal-website/" target="_blank">Mustapha</a>
        </h1>
      </footer>
    </>
  );
}

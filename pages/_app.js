import "../styles/globals.css";
import Navbar from "../Components/Navbar";

import { photographer } from "../Data/Profile";
export default function App({ Component, pageProps }) {
  return (
    <>
      
      <Navbar />
      <Component {...pageProps} />
     
    </>
  );
}

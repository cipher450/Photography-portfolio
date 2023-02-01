import { photographer } from "../Data/Profile";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="nav">
      <Head>
        <title> {photographer.name}</title>
      </Head>
      <div className="nav-header">
     <div className="d">
      <img src='/images/camera.png' width={70} />
     <Link className="nav-title" href="/">
          {photographer.name}
        </Link>
     </div>
       
        <div className="nav-links">
          <Link href="/Galerie">Galerie</Link>
          <Link href="/Collections">Collections</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

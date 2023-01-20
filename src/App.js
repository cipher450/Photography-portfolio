import "./App.css";
//compoenets
import Home from "./Pages/Home";
import Galerie from "./Pages/Galerie";
import Layout from "./Pages/Layout";
import Collections from "./Pages/Collections";
//Data files  <Carousel images={fron} />

// React & packages

import { CSSTransition } from "react-transition-group";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="Galerie" element={<Galerie />} />
          <Route path="Collections" element={<Collections />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

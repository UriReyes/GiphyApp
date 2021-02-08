import React, { useState } from "react";
import { GifFooter } from "./components/GifFooter";

import { GifGrid } from "./components/GifGrid";
import { GifHeader } from "./components/GifHeader";

const GifExpertApp = ({ defaultCategory = [] }) => {
  // const [categories, setCategories] = useState(["DOOM Eternal"]);
  const [categories, setCategories] = useState(defaultCategory);
  return (
    <>
      <GifHeader setCategories={setCategories} />
      <div>
        {categories.length === 0 ? (
          <div className="title-app text-center p-5">
            Aún no has buscado ningún Gif...
          </div>
        ) : (
          categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))
        )}
      </div>
      <GifFooter />
    </>
  );
};

export default GifExpertApp;

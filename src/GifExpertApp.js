import React, { useState } from "react";
import { GifFooter } from "./components/GifFooter";

import { GifGrid } from "./components/GifGrid";
import { GifHeader } from "./components/GifHeader";

const GifExpertApp = () => {
  //const categories = ["Naruto", "Dragon Ball", "Pokémon"];
  const [categories, setCategories] = useState(["DOOM Eternal"]);

  //   const handleAdd = (e) => setCategories([...categories, "Baki"]);

  return (
    <>
      <GifHeader setCategories={setCategories} />
      <div>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
      <GifFooter />
    </>
  );
};

export default GifExpertApp;

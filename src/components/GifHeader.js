import React from "react";
import PropTypes from "prop-types";

import { AddCategory } from "./AddCategory";

export const GifHeader = ({ setCategories }) => {
  return (
    <div className="nav d-flex align-items-center">
      <img
        src="https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif"
        alt="img-header"
      />
      <div className="d-flex justify-content-center w-100">
        <AddCategory setCategories={setCategories} />
      </div>
    </div>
  );
};

GifHeader.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

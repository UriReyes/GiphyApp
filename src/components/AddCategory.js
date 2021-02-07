import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    if (inputValue !== undefined) {
      if (inputValue.trim().length > 2) {
        setCategories((cats) => [inputValue, ...cats]);
        setInputValue("");
      } else {
        alert("No has escrito nada");
      }
    }
  };

  return (
    <>
      <form className="formulario" onSubmit={handleSubmint}>
        <div className="d-flex-row">
          <input
            type="text"
            placeholder="Buscar"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="d-flex-row align-items-center btn btn-search"
            onClick={handleSubmint}
          >
            <p>🔎</p>
          </button>
        </div>
      </form>
      <br />
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

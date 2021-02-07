import React from "react";

export const GifFooter = () => {
  return (
    <div className="footer">
      <div className="d-flex-row align-items-center justify-content-center">
        <h4 className="footer-app">Designed by UriCode &copy;</h4>
        <img
          className="img-footer"
          src={process.env.PUBLIC_URL + "helmet.svg"}
          alt="img_footer"
        />
      </div>
      <p className="text-center">
        <small>
          Este es un proyecto construido con el API de Giphy, todos los Gifs que
          aquí aparecen son pertenecientes a Giphy.
        </small>
      </p>
    </div>
  );
};

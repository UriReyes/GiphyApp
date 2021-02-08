import React from "react";
import PropTypes from "prop-types";

import { useLoadingGif } from "../hooks/useLoadingGif";

export const GifGridItem = ({ title, url }) => {
  const gifData = useLoadingGif(url);

  const {
    event: imageLoaded,
    data: { gif, loaded },
  } = gifData;

  const showInformationHandler = (e) => {
    const cardInfo = e.currentTarget.firstChild;
    const cardInfoClasses = cardInfo.classList;

    if (cardInfoClasses.contains("d-none")) {
      cardInfoClasses.remove("d-none");
    }
  };

  const hideInformationHandler = (e) => {
    const cardInfo = e.currentTarget.firstChild;
    const cardInfoClasses = cardInfo.classList;

    if (!cardInfoClasses.contains("d-none")) {
      cardInfoClasses.add("d-none");
    }
  };

  return (
    <div
      className="d-flex justify-content-center flex-wrap card animate__animated animate__fadeIn n-father"
      onMouseOver={showInformationHandler}
      onMouseLeave={hideInformationHandler}
    >
      <div className="n-child d-none d-flex-row align-items-bottom justify-content-between">
        <p className="text-capitalize text-title card-info">{title}</p>
        <a
          href={url}
          className="btn card-info"
          target="_blank"
          rel="noreferrer"
        >
          🔗
        </a>
      </div>
      <img
        src={url}
        alt={title}
        onLoad={imageLoaded}
        srcSet={loaded ? gif : process.env.PUBLIC_URL + "loading.gif"}
      />
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

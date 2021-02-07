import { useState } from "react";

export const useLoadingGif = (url) => {
  const [state, setstate] = useState({
    gif: "",
    loaded: false,
  });

  const imageLoaded = (e) => {
    setstate({
      gif: url,
      loaded: true,
    });
  };

  return {
    event: imageLoaded,
    data: state,
  };
};

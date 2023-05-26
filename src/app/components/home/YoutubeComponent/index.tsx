import React from "react";

const YoutubeComponent = () => {
  return (
    <iframe
      width="100%"
      height="500px"
      src="https://www.youtube.com/embed/DcuweZAWS_g?controls=0"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};

export default YoutubeComponent;

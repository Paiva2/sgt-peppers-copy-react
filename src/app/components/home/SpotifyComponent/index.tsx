import React from "react";

const SpotifyComponent = () => {
  return (
    <div>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/album/6QaVfG1pHYl1z15ZxkvVDW?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

export default SpotifyComponent;

import React from "react";

const StaticMap = () => {
  return (
    <div style={{ width: "100%", height: "400px", margin: "4rem 0" }}>
      <iframe
        title="Static Map of London"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.14653205871582034%2C51.50318607646653%2C-0.08743286132812501%2C51.53335841271311&layer=mapnik&marker=51.5155,-0.12"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          pointerEvents: "none",
        }}
        loading="lazy"
      />
    </div>
  );
};

export default StaticMap;

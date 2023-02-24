import React from "react";
import SchemeColor from "../SchemeColor/SchemeColor";
import "./Palette.css";

const Palette = (paletteData) => {

  const direction =
    paletteData.paletteData.direction === "horizontal"
      ? "palette-scheme palette-scheme--horizontal"
      : "palette-scheme palette-scheme--vertical";

  return (
    <div className="palette">
      <div className={direction}>
        <img
          className="scheme-image"
          src={paletteData.paletteData.image}
          alt="Mimosa Retreat"
        />
        <div className="scheme-colors">
          {paletteData.paletteData.colors.map((item) => (
            <SchemeColor key={item} colors={item} />
          ))}
        </div>
      </div>
      <div className="palette-info">
        <h2>{paletteData.paletteData.name}</h2>
        <p> {paletteData.paletteData.description}</p>
        <p>
          Photo by{" "}
          <a href={paletteData.paletteData.attribution.url} target="_blank">
            {paletteData.paletteData.attribution.name}
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Palette;

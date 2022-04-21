import React from "react";
import ShapeButton from "./ShapeButton.js";
import CanvasButton from "./CanvasButton.js";

export function Palette() {
  return (
    <aside className="palette">
      <h2>Items</h2>
      <CanvasButton />
      <ShapeButton />
    </aside>
  );
}

import React, { useRef } from "react";
import { Layer, Stage } from "react-konva";

import {
  useShapes,
  clearSelection,
  saveDiagram,
  reset,
} from "./state";
import { Shape } from "./Shape";

const handleDragOver = (event) => event.preventDefault();

export function Canvas() {
  const shapes = useShapes((state) => Object.entries(state.shapes));

  const stageRef = useRef();

  return (
    <main className="canvas" onDragOver={handleDragOver}>
      <div className="buttons">
        <button onClick={saveDiagram}>Save</button>
        <button onClick={reset}>Reset</button>
      </div>
      <Stage
        ref={stageRef}
        width={window.innerWidth - 400}
        height={window.innerHeight}
        onClick={clearSelection}
      >
        <Layer>
          {shapes.map(([key, shape]) => (
            <Shape key={key} shape={{ ...shape, id: key }} />
          ))}
          
        </Layer>
      </Stage>
    </main>
  );
}

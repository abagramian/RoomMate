// This Rectangle differs from Rectangle in that it is not draggable

import React from "react";
import { Rect, Group } from "react-konva";
import { DEFAULTS } from "./constants";


export function CanvasRectangle({ id, isSelected, type, ...shapeProps }) {

  return (
    <Group>
      <Rect
      width= {500} //TODO: replace with specified width
      height= {500} //TODO: replace with specified height
      fill= '#C1C1C1'
      stroke= {DEFAULTS.RECT.STROKE}
      rotation= {DEFAULTS.RECT.ROTATION}
      x={0}
      y={0}
        
      />
      </Group>
  );
}

import React, { useRef, useCallback } from "react";
import { Rect, Text, Group } from "react-konva";

import { moveShape, resizeShape } from "./state";

export function Rectangle({ id, isSelected, type, ...shapeProps }) {
  var shapeRef = useRef();
  const handleClick = useCallback(
    (event) => {
      const nrwidth = prompt("Enter new width: ")
      const nrheight = prompt("Enter new height: ")

      resizeShape(id, nrwidth, nrheight);

    },
    [id]
  );


  const handleDrag = useCallback(
    (event) => {
      moveShape(id, event.target.x(), event.target.y());
    },
    [id]
  );

  return (
    <Group
      draggable
      onClick={handleClick}
      ref={shapeRef}
      width={shapeProps.width}
      height={shapeProps.height}
      x={shapeProps.x}
      y={shapeProps.y}
 
      onDragEnd={handleDrag}
        dragBoundFunc = {(pos) => {
        
          return {
            // limit drag bounds for rectangles
            //TODO: replace instances of 500 with dynamic canvas size
            x: ((pos.x + Number(shapeProps.width) < shapeProps.cbw && pos.x > 0) ? pos.x : ((pos.x + Number(shapeProps.width)  > shapeProps.cbw) ? Math.min(pos.x, shapeProps.cbw - Number(shapeProps.width)) : Math.max(pos.x, 0))),
            y: ((pos.y  + Number(shapeProps.height) < shapeProps.cbh && pos.y > 0) ? pos.y : ((pos.y + Number(shapeProps.height) > shapeProps.cbh) ? Math.min(pos.y, shapeProps.cbh - Number(shapeProps.height)) : Math.max(pos.y, 0))),
          };
        }}>
      <Rect
       fill={shapeProps.fill}
       stroke={shapeProps.stroke}

       rotation={shapeProps.rotation}
       width={shapeProps.width}
      height={shapeProps.height}
      ref={shapeRef}
      
      />
   
      <Text text={"Item name"} fill="#00000" wrap="char" align="center" x={30} y={20}/>
      <Text text={"Item size"} fill="#00000" wrap="char" align="center" x={30} y={35}/>
    </Group>
  );
}

import React, { useRef, useCallback } from "react";
import { Rect, Text, Group } from "react-konva";

import { moveShape } from "./state";

export function Rectangle({ id, isSelected, type, ...shapeProps }) {
  const shapeRef = useRef();
  const handleSelect = useCallback(
    (event) => {
      event.cancelBubble = true;

      // TODO: provide popup to change size (delete rectangle and replace it with new size?)
      // alert(id);

      alert(shapeRef.current.width());
    },
    [id]
  );

  const handleDrag = useCallback(
    (event) => {
      moveShape(id, event);
    },
    [id]
  );

  return (
    <Group
      draggable
      onClick={handleSelect}
      onTap={handleSelect}
      ref={shapeRef}
      width={shapeProps.width}
      height={shapeProps.height}
 
      onDragEnd={handleDrag}
        dragBoundFunc = {(pos) => {
          return {
            // limit drag bounds for rectangles
            //TODO: replace instances of 500 with dynamic canvas size
            x: ((pos.x + shapeRef.current.width() < 500 && pos.x > 0) ? pos.x : ((pos.x + shapeRef.current.width()  > 500) ? Math.min(pos.x, 500 - shapeRef.current.width()) : Math.max(pos.x, 0))),
            y: ((pos.y  + shapeRef.current.height() < 500 && pos.y > 0) ? pos.y : ((pos.y + shapeRef.current.height() > 500) ? Math.min(pos.y, 500 - shapeRef.current.height()) : Math.max(pos.y, 0))),
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
   
      <Text text={"Item name"} fill="#00000" wrap="char" align="center" x={10} y={20}/>
      <Text text={"Item size"} fill="#00000" wrap="char" align="center" x={10} y={30}/>
    </Group>
  );
}

import React, { useRef, useEffect, useCallback } from "react";
import { Rect as KonvaRectangle, Transformer, Text, Group } from "react-konva";

import { LIMITS } from "./constants";
import { selectShape, transformRectangleShape, moveShape } from "./state";

const boundBoxCallbackForRectangle = (oldBox, newBox) => {
  // limit resize
  if (
    newBox.width < LIMITS.RECT.MIN ||
    newBox.height < LIMITS.RECT.MIN ||
    newBox.width > LIMITS.RECT.MAX ||
    newBox.height > LIMITS.RECT.MAX
  ) {
    return oldBox;
  }
  return newBox;
};

export function Rectangle({ id, isSelected, type, ...shapeProps }) {
  const shapeRef = useRef();
  const transformerRef = useRef();

  useEffect(() => {
    if (isSelected) {
      transformerRef.current.nodes([shapeRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const handleSelect = useCallback(
    (event) => {
      event.cancelBubble = true;

      selectShape(id);
    },
    [id]
  );

  const handleDrag = useCallback(
    (event) => {
      moveShape(id, event);
    },
    [id]
  );

  const handleTransform = useCallback(
    (event) => {
      transformRectangleShape(shapeRef.current, id, event);
    },
    [id]
  );

  return (
    <Group
      draggable
        dragBoundFunc = {(pos) => {
          return {
            // limit drag bounds for rectangles
            x: ((pos.x < 500 && pos.x > 0) ? pos.x : ((pos.x > 500) ? Math.min(pos.x, 500) : Math.max(pos.x, 0))),
            y: ((pos.y < 500 && pos.y > 0) ? pos.y : ((pos.y > 500) ? Math.min(pos.y, 500) : Math.max(pos.y, 0))),
          };
        }}>
      <KonvaRectangle
        onClick={handleSelect}
        onTap={handleSelect}
        onDragStart={handleSelect}
        ref={shapeRef}
        {...shapeProps}
        
        onDragEnd={handleDrag}
        onTransformEnd={handleTransform}
      />
      {isSelected && (
        <Transformer
          anchorSize={5}
          borderDash={[6, 2]}
          ref={transformerRef}
          boundBoxFunc={boundBoxCallbackForRectangle}
        />
      )}
      <Text text={"dsfsd"} fill="#00000" wrap="char" align="center" x={100} y={140} width={150} height={10}/>
      <Text text={"dsfsd"} fill="#00000" wrap="char" align="center" x={100} y={160} width={150} height={10}/>
    </Group>
  );
}

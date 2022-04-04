import React from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Group } from 'react-konva';

function generateShapes() {
  return [...Array(5)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * 500,
    y: Math.random() * 500,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

const App = () => {
  const [stars, setStars] = React.useState(INITIAL_STATE);

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  return (
    <Stage width={600 + 100} height={600 + 100} x={100} y={100}>
      <Layer>
        <Text text="Try to drag a star" />
        {stars.map((star) => (
          <Group>
            x={star.x}
            y={star.y}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            dragBoundFunc = {(pos) => {
              return {
                x: ((pos.x < 500 + 100 && pos.x > 0 + 100) ? pos.x : ((pos.x > 500 + 100) ? Math.min(pos.x, 500 + 100) : Math.max(pos.x, 0 + 100))),
                y: ((pos.y < 500 + 100 && pos.y > 0 + 100) ? pos.y : ((pos.y > 500 + 100) ? Math.min(pos.y, 500 + 100) : Math.max(pos.y, 0 + 100))),
              };
            }}
           <Text>Hello</Text>
          <Rect
            key={star.id}
            id={star.id}
            height={50}
            width={80}
            fill="#89b717"
            opacity={0.8}
            draggable
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={star.isDragging ? 10 : 5}
            shadowOffsetY={star.isDragging ? 10 : 5}
            scaleX={star.isDragging ? 1.2 : 1}
            scaleY={star.isDragging ? 1.2 : 1}
            
          />
         </Group>
        ))}
      </Layer>
    </Stage>
  );
};

render(<App />, document.getElementById('root'));

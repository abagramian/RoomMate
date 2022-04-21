// This Rectangle differs from Rectangle in that it is not draggable

import React from "react";
import { Rect, Group } from "react-konva";
import { DEFAULTS } from "./constants";

class CanvasRectangle extends React.Component {

  render() {
    return (
      <Group>
      <Rect
      width={this.props.width}
      height={this.props.height}
      fill= '#C1C1C1'
      stroke= {DEFAULTS.RECT.STROKE}
      rotation= {DEFAULTS.RECT.ROTATION}
      x={0}
      y={0}
        
      />
      </Group>
    )
  }
}

export default CanvasRectangle;
import { createStore } from "@halka/state";
import produce from "immer";
import { nanoid } from "nanoid";
import { shape } from "prop-types";

import { SHAPE_TYPES, DEFAULTS } from "./constants";

const APP_NAMESPACE = "RoomMate";

const baseState = {
  selected: null,
  shapes: {},
};

export const useShapes = createStore(() => {
  const initialState = JSON.parse(localStorage.getItem(APP_NAMESPACE));

  return { ...baseState, shapes: initialState ?? {} };
});
const setState = (fn) => useShapes.set(produce(fn));

export const saveDiagram = () => {
  const state = useShapes.get();
  localStorage.setItem(APP_NAMESPACE, JSON.stringify(state.shapes));
};

export const reset = () => {
  localStorage.removeItem(APP_NAMESPACE);

  useShapes.set(baseState);
};

export const createRectangle = ({ x, y, w, h }) => {
  setState((state) => {
    state.shapes[nanoid()] = {
      type: SHAPE_TYPES.RECT,
      width: w,
      height: h,
      fill: "#FFFFFF",
      stroke: DEFAULTS.RECT.STROKE,
      rotation: DEFAULTS.RECT.ROTATION,
      x,
      y,
      cbw: Number(JSON.parse(localStorage.getItem(APP_NAMESPACE + "CanvasBorder"))["canvasBorderW"]),
      cbh: Number(JSON.parse(localStorage.getItem(APP_NAMESPACE + "CanvasBorder"))["canvasBorderH"]),
    };
  });
  const state = useShapes.get();
  localStorage.setItem(APP_NAMESPACE, JSON.stringify(state.shapes));
};

export const createCanvasRectangle = ({ x, y, width, height }) => {
  setState((state) => {
    state.shapes["CANVASID"] = {
      type: "CANVAS",
      width: width, 
      height: height, 
      fill: '#C1C1C1',
      stroke: DEFAULTS.RECT.STROKE,
      rotation: DEFAULTS.RECT.ROTATION,
      x,
      y
    }; 
  });

  var state = useShapes.get();
  // Get most recent version of shapes array and update localStorage
  localStorage.setItem(APP_NAMESPACE, JSON.stringify(state.shapes));
  localStorage.setItem(APP_NAMESPACE + "CanvasBorder", JSON.stringify({canvasBorderW: width, canvasBorderH: height}))
};


export const selectShape = (id) => {
  setState((state) => {
    state.selected = id;
  });
};

export const clearSelection = () => {
  setState((state) => {
    state.selected = null;
  });
};

// TODO: WHY ISNT THIS SAVING SHAPE LOCATIONS
export const moveShape = (id, x, y) => {

  setState((state) => {
    const shape = state.shapes[id];

    if (shape) {
      shape.x = x;
      shape.y = y;
    }
  });
};

export const resizeShape = (id, w, h) => {

  setState((state) => {
    const shape = state.shapes[id];

    if (shape) {
      shape.width = w;
      shape.height = h;
    }
  })
}

export const resizeCanvas = (w, h) => {
  setState((state) => {
    const shape = state.shapes["CANVASID"];

    if (shape) {
      shape.width = w;
      shape.height = h;
    }
  })

  var state = useShapes.get();
  // Get most recent version of shapes array and update localStorage
  localStorage.setItem(APP_NAMESPACE, JSON.stringify(state.shapes));
  localStorage.setItem(APP_NAMESPACE + "CanvasBorder", JSON.stringify({canvasBorderW: w, canvasBorderH: h}))

  // Need to update all rectangles with new bounds
  resetRectBounds(w, h);
}

function resetRectBounds(w, h) {
  // Update all rectangles with canvas border size to prevent going off canvas
  var state = useShapes.get();

  for (const shapeID in state.shapes) {
    console.log(state.shapes[shape])
    if (shapeID !== "CANVASID") {
      setState((state) => {
        const shape = state.shapes[shapeID]

        if (shape) {
          shape["cbw"] = Number(JSON.parse(localStorage.getItem(APP_NAMESPACE+ "CanvasBorder"))["canvasBorderW"]);
          shape["cbh"] = Number(JSON.parse(localStorage.getItem(APP_NAMESPACE+ "CanvasBorder"))["canvasBorderH"]);
        }
      })

    }
  }

}

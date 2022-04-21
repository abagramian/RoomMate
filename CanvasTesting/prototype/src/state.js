import { createStore } from "@halka/state";
import produce from "immer";
import { nanoid } from "nanoid";

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
    };
  });
};

export const createCanvasRectangle = ({ x, y, width, height }) => {
  setState((state) => {
    state.shapes["CANVASID"] = {
      type: "CANVAS",
      width: width, //TODO: replace with user specified width
      height: height, //TODO: replace with user specified height
      fill: '#C1C1C1',
      stroke: DEFAULTS.RECT.STROKE,
      rotation: DEFAULTS.RECT.ROTATION,
      x,
      y,
    }; 
  });
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
export const moveShape = (id, event) => {
  // alert(event.target.x());
  // alert(id);

  setState((state) => {
    const shape = state.shapes[id];

    if (shape) {
      shape.x = event.target.x();
      shape.y = event.target.y();
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
}



export const updateAttribute = (attr, value) => {
  setState((state) => {
    const shape = state.shapes[state.selected];

    if (shape) {
      shape[attr] = value;
    }
  });
};
import React from "react";

import {createCanvasRectangle} from "./state";

class CanvasButton extends React.Component {
   constructor(props) {
     super(props);
     this.state = {pressed: false};
 
     // This binding is necessary to make `this` work in the callback
     this.handleClick = this.handleClick.bind(this);
   }
 
   handleClick() {

      if (!this.state.pressed) {
      createCanvasRectangle({
        // TODO: Create unmovable canvas of specified size
         x: 100,
         y: 100,
       });
      } else {
        // TODO: Resize canvas
      }

       // Present popup to enter canvas measurements and set stage to 
     // these measurements
     //  * If pressed, keep pressed true show option to resize canvas
     //  * If not pressed, set pressed to true and create canvas
      this.setState(prevState => ({
        pressed: (!prevState.pressed ? true : true)
     }));
   }
 
   render() {
     return (
       <button onClick={this.handleClick}>
         Create Canvas
       </button>
     );
   }
 }
 
 export default CanvasButton;
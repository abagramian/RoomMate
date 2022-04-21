import React from "react";

import {createCanvasRectangle, resizeCanvas} from "./state";

class CanvasButton extends React.Component {
   constructor(props) {
     super(props);
     this.state = {pressed: false};
 
     // This binding is necessary to make `this` work in the callback
     this.handleClick = this.handleClick.bind(this);
   }
 
   handleClick() {

      if (!this.state.pressed) {

        const cwidth = prompt('Enter width:');
        this.setState({cwidth: cwidth})

        const cheight = prompt('Enter width:');
        this.setState({cwidth: cheight})

      createCanvasRectangle({
         x: 100,
         y: 100,
         width: cwidth,
         height: cheight

       });

      } else {
        // TODO: Resize canvas
        const newcwidth = prompt("Enter new canvas width:")
        const newcheight = prompt("Enter new canvas height:")
        resizeCanvas(newcwidth, newcheight);
        
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
       <button className={"palette-button"} onClick={this.handleClick}>
         {!this.state.pressed ? "Create Canvas" : "Resize Canvas"}
       </button>
     );
   }
 }
 
 export default CanvasButton;
 
 
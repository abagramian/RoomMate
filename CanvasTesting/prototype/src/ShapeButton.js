import React from "react";

import {createRectangle} from "./state";

class ShapeButton extends React.Component {
   constructor(props) {
     super(props);
   //   this.state = {isToggleOn: true};
 
     // This binding is necessary to make `this` work in the callback
     this.handleClick = this.handleClick.bind(this);
   }
 
   handleClick() {
      this.setState(prevState => ({
         // isToggleOn: !prevState.isToggleOn
      }));

      const nrwidth = prompt("Enter new width: ")
      const nrheight = prompt("Enter new height: ")

      createRectangle({
         x: 100,
         y: 100,
         w: nrwidth,
         h: nrheight
       });
   }
 
   render() {
     return (
       <button className={"palette-button"} onClick={this.handleClick}>
         Rectangle
       </button>
     );
   }
 }
 
 export default ShapeButton;
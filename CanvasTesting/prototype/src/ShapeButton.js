import React from "react";

import {

   createRectangle

 } from "./state";

class ShapeButton extends React.Component {
   constructor(props) {
     super(props);
     this.state = {isToggleOn: true};
 
     // This binding is necessary to make `this` work in the callback
     this.handleClick = this.handleClick.bind(this);
   }
 
   handleClick() {

      this.setState(prevState => ({
         isToggleOn: !prevState.isToggleOn
      }));



      createRectangle({
         x: 100,
         y: 100,
       });
   }
 
   render() {
     return (
       <button onClick={this.handleClick}>
         {this.state.isToggleOn ? 'ON' : 'OFF'}
       </button>
     );
   }
 }
 
 export default ShapeButton;
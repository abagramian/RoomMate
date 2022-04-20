CANVAS TESTING

UPDATE 4/4:
The React DnD library does not provide the capabilities required for this application. Instead, I (Alexis) have been exploring Konva.js and konva-react as an option.

Code in non-react and test-react-app folders are tutorials taken from the resource below in an effort to explore functionalities and capabilities of the library. 

https://konvajs.org/docs/react/index.html

UPDATE 4/19:

https://www.integrtr.com/building-diagram-tool-with-canvas-react/

The above link provides a tutorial on working with a Canvas in React. This can be found in the `prototype` folder. I have been using this as a sort of starting point/initial skeleton for the canvas functionality of RoomMate. Some changes I am working on:

* Provide a popup upon page load to allow user to specify canvas size, which represents a scaled version of the room they will be laying out. Unfortuantely given the timeframe of this project, I will only be able to support square/rectangular rooms.
* Modify the left Palette to use buttons instead of draggable shapes with some preset room items (bed, desk, etc)
* Display scaled informationa about shapes the canvas (for example, a shape on the canvas would display the name of the item it represents and its size in ft'in''

UPDATE 4/20 ~12PM:

Achieved from yesterday:
* Left pallette uses button instead of draggable shapes. Working on dynamically creating buttons that insert rectangles with different labels and sizes based on what the rectangle is supposed to represent.

In Progress:
* Figuring out how to properly align text so that it stays centered when a shape is resized. Also need to figure out how to dynamically generate text to represent current size of its parent shape.
* Also figuring out how to transfer information from a popup to the drag bound functions (functions that bar shapes from going "off grid") to effectively create a canvas of a specified size. 





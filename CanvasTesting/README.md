CANVAS TESTING

UPDATE 4/4:
The React DnD library does not provide the capabilities required for this application. Instead, I (Alexis) have been exploring Konva.js and konva-react as an option.

Code in non-react and test-react-app folders are tutorials taken from the resource below in an effort to explore functionalities and capabilities of the library. 

https://konvajs.org/docs/react/index.html

UPDATE 4/19:

https://www.integrtr.com/building-diagram-tool-with-canvas-react/

The above link provides a tutorial on working with a Canvas in React. This can be found in the `prototype` folder. I have been using this as a sort of starting point/initial skeleton for the canvas functionality of RoomMate. I spent a while understanding how this example works and specific functions of JavaScript/React that were used, such as states/events/hooks etc, as well as the `konva` library. After gaining some understanding, I began work on reworking this example into a canvas that fits the needs of RoomMate. Some changes I am working on:

* Provide a popup upon page load to allow user to specify canvas size, which represents a scaled version of the room they will be laying out. Unfortuantely given the timeframe of this project, I will only be able to support square/rectangular rooms.
* Modify the left Palette to use buttons instead of draggable shapes with some preset room items (bed, desk, etc)
* Display scaled informationa about shapes the canvas (for example, a shape on the canvas would display the name of the item it represents and its size in ft'in''

Roadblocks I hit so far:
* Learning React/more advanced JS was a struggle. It took way more time to familiarize myself with everything than I expected, and I was unable to produce anything worth comitting/pushing for longer than I would have hoped. 
* Grouping text with shapes proved to be very difficult, I spent a lot of time on it. I solved the issue by reading more documentation and examples and learned that my method of implentation was problematic. I am still unsure of how I will be able to maintain a consistent location for the text when rectangles resize.


UPDATE 4/20 ~12PM:

Achieved from yesterday:
* Left pallette uses button instead of draggable shapes. Working on dynamically creating buttons that insert rectangles with different labels and sizes based on what the rectangle is supposed to represent.

In Progress:
* Figuring out how to properly align text so that it stays centered when a shape is resized. Also need to figure out how to dynamically generate text to represent current size of its parent shape.
* Also figuring out how to transfer information from a popup to the drag bound functions (functions that bar shapes from going "off grid") to effectively create a canvas of a specified size. 


UPDATE 4/21:

While working on the above items, I ran into some roadblocks. 
* In order to implement the canvas popup, I decided that instead od providing a popup on page load, I created a "create canvas" button that the user can select to create a "canvas" on their page. Going forward, I would like to change the display text of this button to "Resize Canvas" once it has been pressed for the first time. 
* The "dragging" method of resizing elements within the canvas was very problematic when combined with the canvas borders. Instead of using this method of resizing, I remove the option to transform via drag and instead plan to provide a popup upon clicking an element that allows the user to enter specific dimensions. 
* The "save" option works to some extent in that it saves the elements on a canvas, but it does not save their positions. I suspect that this is a result of how I am initializing elements on the canavs when the "rectangle" button is clicked, but have not confirmed yet. I did have the ability to save positions at one point, but during that time rectangles would not display - only the text grouped with the rectangles. I am also not sure if we will be able to connect the database to the extent of saving canvas layouts for individual users, as all of our group members are very unfamiiar with connecting Firebase to React/JS.





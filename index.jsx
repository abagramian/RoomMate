import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        //define the array of JSON
        this.data = [
            { text: 'Table', id: '1' },
            { text: 'Bed', id: '2' },
            { text: 'Closet', id: '3' },
            { text: 'Dresser', id: '4' },
        ];
    }
    render() {
        return (
        // specifies the tag to render the ListView component
        <ListViewComponent id='list' dataSource={this.data} showCheckBox={true} headerTitle='TO DO LIst' showHeader={true}></ListViewComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('element'));
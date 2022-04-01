// import * as React from 'react';
// import * as ReactDOM from "react-dom";
// //import {}
// export default class App extends React.Component
// {
//     constructor()
//     {
//         super(...arguments);
//         this.data = 
//         [
//             { text: 'test1', id:'1'}

//         ];
//     }
//     render()
//     {
//         //return (
//         //)
//     }
// }

const App = () => 
{
    const [checked, setChecked] = React.useState(false);

    const handleChange = () =>
    {
        setChecked(!checked);
    };

    return(
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                My Value
            </label>
            <p>Is "My Value" checked? {checked.toString()}</p>
        </div>
    );
};
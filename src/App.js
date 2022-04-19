import './App.scss';
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  // created by following tutorial: https://contactmentor.com/checkbox-list-react-js-example/
  const [checked, setChecked] = useState([]);
  const checkList = ["Table", "Bed", "Closet", "Dresser"];

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if(event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked.length
  ? checked.reduce((total, item) => {
    return total + ", " + item;
  })
  : "";

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    // <>
    // <Routes>
    //   <ListViewComponent id='list' dataSource={this.data} showCheckBox={true} headerTitle='TO GET list' showHeader={true}></ListViewComponent>);
    //   <Route path="/" element={<Layout />} />
    // </Routes>
    // </>
    <div className="app">
      <div className="checkList">
        <div className="title">Your CheckList:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        {`Items checked are: ${checkedItems}`}
      </div>

    </div>
  );
}

export default App

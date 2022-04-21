import './App.scss';
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
//import ToGet from './components/ToGet'

function App() {
  // created by following tutorial: https://contactmentor.com/checkbox-list-react-js-example/
  // const [checked, setChecked] = useState([]);
  // const checkList = ["Table", "Bed", "Closet", "Dresser"];

  // const handleCheck = (event) => {
  //   var updatedList = [...checked];
  //   if(event.target.checked) {
  //     updatedList = [...checked, event.target.value];
  //   } else {
  //     updatedList.splice(checked.indexOf(event.target.value), 1);
  //   }
  //   setChecked(updatedList);
  // };

  // const checkedItems = checked.length
  // ? checked.reduce((total, item) => {
  //   return total + ", " + item;
  // })
  // : "";

  // var isChecked = (item) =>
  //   checked.includes(item) ? "checked-item" : "not-checked-item";

  //<Route path="/" element={<ToGet />} />

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
    </>
  );
}

export default App

import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import Sidebar from '../Sidebar'
import Header from './Header';
import ToGetList from './ToGetList';
import InputToGet from './InputToGet';
import styles from './ToGetItem.module.css';
import './ToGetItem.module.css';

class ToGetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togets: [],
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => (
      {
        togets: prevState.togets.map((toget) => {
          if (toget.id === id) {
            return {
              ...toget,
              completed: !toget.completed,
            };
          }
          return toget;
        }),
      }
    ));
  };

  delToGet = (id) => {
    this.setState((prevState) => (
      {
        togets: [
          ...prevState.togets.filter((toget) => toget.id !== id),
        ],
      }
    ));
  };

  addToGetItem = (title) => {
    const newToGet = {
      id: uuidv4(),
      title,
      completed: false,
    };

    this.setState((prevState) => (
      {
        togets: [
          ...prevState.togets, newToGet,
        ],
      }
    ));
  };

  render() {
    const myState = this.state;
    return (
      <>
      <Sidebar />
      <div id="page-wrap">
        <div className={styles.container}>
          <div className={styles.inner}>
            <Header />
            <InputToGet addToGetProps={this.addToGetItem} />
            <ToGetList
              togets={myState.togets}
              handleChangeProps={this.handleChange}
              deleteToGetProps={this.delToGet}
            />
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default ToGetContainer;
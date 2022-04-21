import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import ToGetList from './ToGetList';
import Header from './Header';
import InputToGet from './InputToGet';

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
      <div className="container">
        <div className="inner">
          <Header />
          <InputToGet addToGetProps={this.addToGetItem} />
          <ToGetList
            togets={myState.togets}
            handleChangeProps={this.handleChange}
            deleteToGetProps={this.delToGet}
          />
        </div>
      </div>
    );
  }
}

export default ToGetContainer;
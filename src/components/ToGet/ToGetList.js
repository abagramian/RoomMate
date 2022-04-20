import React from 'react';
import PropTypes from 'prop-types';
import ToGetItem from './ToGetItem';

class ToGetList extends React.PureComponent {
  render() {
    const { togets, handleChangeProps, deleteToGetProps } = this.props;
    return (
      <ul>
        {togets.map((toget) => (
          <ToGetItem
            key={toget.id}
            toget={toget}
            handleChangeProps={handleChangeProps}
            deleteToGetProps={deleteToGetProps}
          />
        ))}
      </ul>
    );
  }
}

ToGetList.propTypes = {
  togets: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteToGetProps: PropTypes.func.isRequired,
};

export default ToGetList;
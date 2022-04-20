import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styles from './ToGetItem.module.css';

function ToGetItem({ toget, handleChangeProps, deleteToGetProps }) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#5e2929', //color: '#595959',
    opacity: 0.5,
    textDecoration: 'line-through',
  };

  //issue: trash icon does not show up ----------------------------
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={toget.completed}
        onChange={() => handleChangeProps(toget.id)}
      />
      <button type="button" onClick={() => deleteToGetProps(toget.id)}>
      <i class="fa-solid fa-trash"></i> Delete
      </button>
      <span style={toget.completed ? completedStyle : null}>
        {toget.title}
      </span>
    </li>
  );
}

ToGetItem.propTypes = {
  toget: PropTypes.shape({
    id: ExtraPropTypes.uuid.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteToGetProps: PropTypes.func.isRequired,
};

export default ToGetItem;
import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ addColor }) {
  return (
    <form onSubmit={addColor}>
      <span>Change font color </span>
      <input type="color" />
      <span>Change background color</span>
      <input type="color" />
      <button>Click</button>
    </form>
  );
}

ColorSelector.propTypes = {
  addColor: PropTypes.func.isRequired
};

export default ColorSelector;

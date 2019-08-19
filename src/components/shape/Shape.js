import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backgroundColor }) {
  return (
    <section style={{ backgroundColor, height: '100px', width: '100px' }} >
      <p style={{ color }} >{text}</p>
    </section>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default Shape;

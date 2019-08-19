import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, textHandler }) {
  return (
    <section>
      <input 
        value={text}
        placeholder="Full Name" 
        onChange={textHandler}/>
    </section>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  textHandler: PropTypes.func.isRequired
};

export default TextSelector;

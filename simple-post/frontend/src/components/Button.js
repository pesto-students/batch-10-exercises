import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
    <button {...props}>
        {props.text}
    </button>
)

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
  
export default Button;

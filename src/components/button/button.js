import React from 'react';
import './button.css';

const Button = (props) => {
    const { type, onClick, className, disabled } = props;
    return (
        <button disabled={ disabled } onClick={ onClick }
                type={ type } className={ `btn btn-lg btn__color ${ className }` }>
            { props.children }
        </button>
    );
};

export default Button;
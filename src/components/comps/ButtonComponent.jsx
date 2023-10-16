import React from 'react';

const buttonCSS = {
    display: 'block',
    padding: '10px 14px 12px',
    borderRadius: '6px',
    backgroundColor: '#B0F347',
    cursor: 'pointer',
    marginleft: '10px'
}

const ButtonComponent = ({  onClick, children }) => {
    return (
            <button style={buttonCSS} onClick={onClick} >{children}</button>
    );
};

export default ButtonComponent;
import React from 'react';
import css from '../../styles/form';


const { Input } = css

const InputComponent = ({placeholder, maxlength, action, inputValue}) => {

    
    return (
        <>
           <Input 
            value={inputValue}
            type={'text'}
            placeholder={placeholder}
            maxlength={maxlength}
            onChange={e => {
                const newValue = e.target.value
                action(newValue)
            }}
           /> 
        </>
    );
};

export default InputComponent;
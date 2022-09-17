import React, { useState } from 'react';

const useFormInp = () => {

    const [value, setValue] = useState('');

    const setInputVal = (inputVal) => {
        setValue(inputVal);
    }

    const resetInputVal = () => {
        setValue("");
    }
    
    return [value, setInputVal, resetInputVal];
}

export default useFormInp;
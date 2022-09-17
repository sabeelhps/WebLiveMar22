import {useState} from 'react'

const useToggle = (initialVal=true) => {

    const [toggle, setToggle] = useState(initialVal);
    
    const changeToggle=()=>{
        setToggle(!toggle);
    }

    return [toggle, changeToggle];
}

export default useToggle;
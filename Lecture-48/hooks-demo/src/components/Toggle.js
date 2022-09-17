import React,{useState} from 'react'
import useToggle from '../hooks/useToggle';

const Toggle = () => {

    const [isHappy, setIsHappy] = useToggle(false);

    return (
        <div>
            <h1 onClick={()=>setIsHappy()}>{ isHappy ? '😁' : '🙁' }</h1>
      </div>
    )
}

export default Toggle;
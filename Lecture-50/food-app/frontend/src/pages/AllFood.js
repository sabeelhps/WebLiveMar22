import React, { useEffect, useState } from 'react';

const AllFood = () => {
    
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        // This will run for each component re render
        console.log('use effect');
    });

    useEffect(() => {
        console.log('use effect with empty dependency array');
    }, []);


  return (
      <h1 onClick={()=>setCount(count+1)}>Food Count : { count}</h1>
  )
}

export default AllFood;
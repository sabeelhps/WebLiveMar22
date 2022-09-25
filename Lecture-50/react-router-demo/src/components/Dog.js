import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Dog = () => {
    const params = useParams();
    console.log(params.dogId);

    useEffect(() => {
        // network call 
    })
  return (
    <h1>Wooof Woooof</h1>
  )
}

export default Dog;
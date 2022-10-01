import React, { Fragment, useEffect, useState } from 'react';
import FoodList from '../components/FoodList/FoodList';
import axios from 'axios';

const AllFood = () => {
    
    const [foods, setFoods] = useState([]);

    useEffect(() => {
       
        async function getFoods() {
            try {
                const res = await axios.get('http://localhost:8000/allfoods');
                if (res.status !== 200) {
                    throw new Error('something went wrong');
                }
                setFoods(() => res.data);
            }
            catch (err) {
                console.log(err);
            }
        }

        getFoods();
    },[]);
   
    return (
        <Fragment>
            <FoodList foods={foods} />
        </Fragment>
    )
}

export default AllFood;
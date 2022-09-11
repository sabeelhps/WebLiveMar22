import React,{useState} from 'react';
import "./Product.css";


const Product = (props) => {

    const [price, setPrice] = useState(props.price);
    
    // let price = props.price;

    const cardClickHanlder = () => {
        // console.log('clicked');
        // price = 100;
        // console.log(price);

        setPrice(100);
    }

    return (
        <figure onClick={cardClickHanlder} className="product">
            <img src={props.imgUrl} alt={props.name} />
            <h2>Name : {props.name}</h2>
            <h3>Price : ${price}</h3>
      </figure>
    )
}

export default Product;
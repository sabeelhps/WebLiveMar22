import React,{useState} from 'react';
import "./Form.css";

const Form = (props) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState('');


    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setPrice(event.target.value)
    }

    const imgChangeHandler = (event) => {
        setImg(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        // console.log(name);
        // console.log(price);
        // console.log(img);

        // adding a new product
        props.addProduct({ name, price, imgUrl: img });
        
        setName('');
        setPrice(0);
        setImg('');
    }


  return (
      <form onSubmit={formSubmitHandler} className="form">
          <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" onChange={nameChangeHandler} placeholder="Product Name" value={name}/>
          </div>
          <div>
              <label htmlFor="name">Price</label>
              <input type="number" id="name" onChange={priceChangeHandler} placeholder="Price" value={price} />
          </div>
          <div>
              <label htmlFor="img">Image Url</label>
              <input type="text" id="img" onChange={imgChangeHandler} placeholder="Image Url" value={img}/>
          </div>
          <button>Create</button>
    </form>
  )
}

export default Form;
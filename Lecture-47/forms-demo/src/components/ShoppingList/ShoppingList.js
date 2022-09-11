import React,{useState} from 'react';
import Form from '../Form/Form';
import Product from '../Product/Product';

const ShoppingList = () => {


    const DUMMY_PRODUCTS = [
        {
            name: 'Iphone 14',
            price: 235667,
            imgUrl:"https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: 'Iphone 13',
            price: 32657273,
            imgUrl:"https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: 'Macbook Pro',
            price: 3165727,
            imgUrl:"https://images.unsplash.com/photo-1512844484773-b3412be25763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hY2Jvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
    ]

    const [products, setProducts] = useState(DUMMY_PRODUCTS);

    const addProduct = (product) => {
        setProducts([...products, product]);
    }

    return (
        <section>
            <Form addProduct={addProduct} />
            {products.map((product,idx) => {
                return <Product
                    key={idx}
                    name={product.name}
                    price={product.price}
                    imgUrl={product.imgUrl}
                />
            })}
      </section>
    )
}

export default ShoppingList;
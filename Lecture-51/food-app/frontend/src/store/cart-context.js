import React, { createContext,useEffect,useState } from 'react';

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addToCart: () => { },
    clearCart:()=>{}
})

export const CartContextProvider = (props) => {

    const intialCart = JSON.parse(window.localStorage.getItem('cart') || '[]');
    const [cart, setCart] = useState(intialCart);

    const addToCart = (item) => {

        const isPresent = cart.some((food) => food.id === item.id);

        if (isPresent) {
            setCart(() => {
                return cart.map((food) => food.id === item.id ? { ...food, qty: food.qty + 1 } : food);
            })   
        } else {
            setCart((prevState) => {
                return [...prevState, item];
            })
        }
    }

    const clearCart = () => {
        setCart(() => []);
    }

    const context = {
        cart: cart,
        cartLength: cart.length,
        addToCart: addToCart,
        clearCart:clearCart
    }

    useEffect(() => {
        window.localStorage.setItem('cart',JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={context}>
            {props.children}
      </CartContext.Provider>
    )
}

export default CartContext;
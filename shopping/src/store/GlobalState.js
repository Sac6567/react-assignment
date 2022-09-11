import React, { useReducer } from 'react';

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from './types';
import Context from './Context';
import Reducer from './Reducer';

export default function GlobalState(props) {
  const products = [
    {
      id: '1a',
      title: 'Ducky One 2',
      price: 100,
      currency: 'USD',
      delivery: false,
      imageURL:
        'https://mechanicalkeyboards.com/shop/images/products/large_DKME1961ST-USPDZZT1_10.jpg',
      inStock: true,
      categoryId: 'fgsa2142fa',
    },
    {
      id: '2a',
      title: 'Varmilo Sakura',
      price: 140,
      currency: 'USD',
      delivery: true,
      imageURL:
        'https://mechanicalkeyboards.com/shop/images/products/large_2790_SakuraTKL_1.jpg',
      inStock: true,
      categoryId: 'fgsa2142fa',
    },
    {
      id: '3a',
      title: 'MK Disco',
      price: 80,
      currency: 'USD',
      delivery: true,
      imageURL:
        'https://mechanicalkeyboards.com/shop/images/products/large_2017_Disco_White_Caps_1.png',
      inStock: false,
      categoryId: 'fgsa2142fa',
    },
    {
      id: '4b',
      title: 'Razer Kraken',
      price: 60,
      currency: 'USD',
      delivery: false,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/71BKQhFzDmL._AC_SY355_.jpg',
      inStock: false,
      categoryId: 'xasgy42fa',
    },
    {
      id: '5b',
      title: 'HyperX Cloud II',
      price: 115,
      currency: 'USD',
      delivery: false,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/719KtJ-RAFL._AC_SL1417_.jpg',
      inStock: true,
      categoryId: 'xasgy42fa',
    },
    {
      id: '6b',
      title: 'Sennheiser PC 3 Chat',
      price: 60,
      currency: 'USD',
      delivery: false,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/61kIoNSe3VL._SL1500_.jpg',
      inStock: true,
      categoryId: 'xasgy42fa',
    },
  ];

  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  // # add product to cart
  const addProductToCart = product => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  // # remove product from cart
  const removeProductFromCart = productID => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    });
  };

  // # clear all product from cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_ALL_FROM_CART,
    });
  };

  return (
    <Context.Provider
      value={{
        products: products,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

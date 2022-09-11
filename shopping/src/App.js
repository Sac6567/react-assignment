import React, { useState, useContext, useEffect } from 'react';

import GlobalStyles from './GlobalStyles';
import { NavBar, OverLay, MainContainer, ProductList } from './AppStyles';

import Context from './store/Context';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Product from './components/Product';

export default function App() {
  const [isToggle, setToggle] = useState(false);

  const [isFilterToggle, setFilterToggle] = useState(false);
  const [isKeyboard, setKeyboard] = useState(false);
  const [isHeadphone, setHeadphone] = useState(false);
  const context = useContext(Context);

  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <>
      <GlobalStyles />
      <NavBar>
        <Filter
          isFilterToggle={isFilterToggle}
          setFilterToggle={setFilterToggle}
          isKeyboard={isKeyboard}
          isHeadphone={isHeadphone}
          setKeyboard={setKeyboard}
          setHeadphone={setHeadphone}
        />
        <Cart
          isToggle={isToggle}
          setToggle={setToggle}
          carts={context.carts}
          removeProductFromCart={context.removeProductFromCart}
          clearCart={context.clearCart}
        />
      </NavBar>

      <MainContainer>
        {isToggle && <OverLay />}
        <ProductList>
          {context.products.map(p => (
            <Product
              key={p.id}
              id={p.id}
              imageURL={p.imageURL}
              price={p.price}
              title={p.title}
              categoryId={p.categoryId}
              delivery={p.delivery}
              inStock={p.inStock}
              addProductToCart={context.addProductToCart}
            />
          ))}
        </ProductList>
      </MainContainer>
    </>
  );
}

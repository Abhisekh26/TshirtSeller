import React, { useState } from "react";
import Form from "./Component/Form";
import TotalSum from "./Component/TotalSum";
import CartDisplay from "./Component/CartDisplay";
import CartButton from "./Component/CartButton";
import DisplayProduct from "./Component/DisplayProduct";
function App() {
  const [arr, setArr] = useState([]);
  const [cart, setCart] = useState([]);
  const [showcart,setShowcart]=useState(false)

  function getData(tshirt, description, price, l, m, s) {
    var newarr = [
      ...arr,
      {
        tshirt: tshirt,
        description: description,
        price: price,
        l: l,
        m: m,
        s: s,
      },
    ];
    setArr(newarr);
  }

  function addl(itemm) {
    if(itemm.l>0){
    var newcart = cart.find((item) => item.tshirt === itemm.tshirt);
    if (newcart) {
      setCart(
        cart.map((item) =>
          item.tshirt === itemm.tshirt ? { ...item, l: item.l + 1 }
           : item
        )
      );
      setArr(
        arr.map((item) =>
          item.tshirt === itemm.tshirt ? { ...item, l: item.l - 1 }
           : item
        )
      );
    } else {
      setCart([...cart, { ...itemm, l: 1,m:0,s:0 }]);
      setArr(
        arr.map((item) =>
          item.tshirt === itemm.tshirt ? { ...item, l: item.l - 1 } 
          : item
        )
      );
    }
  }
  }

    function addm(itemm) {
      if(itemm.m>0){
    var newcart = cart.find((item) => item.tshirt === itemm.tshirt);
    if (newcart) {
      setCart(
        cart.map((item) =>
          item.tshirt === itemm.tshirt ? { ...item, m: item.m + 1 } : item
        )
      );
      setArr(
        arr.map((item) =>
          item.tshirt === itemm.tshirt ? { ...item, m: item.m - 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...itemm, l:0,m: 1,s:0 }]);
      setArr(
        arr.map((item) =>
          item.tshirt === itemm.tshirt? { ...item, m: item.m - 1 } : item
        )
      );
    }
  }
  }


 function adds(itemm) {
  if(itemm.s>0){
    var newcart = cart.find((item) => item.tshirt === itemm.tshirt );
    if (newcart) {
      setCart(
        cart.map((item) =>
          item.tshirt === itemm.tshirt ? { ...item, s: item.s + 1 } : item
        )
      );
      setArr(
        arr.map((item) =>
          item.tshirt === itemm.tshirt ? { ...item, s: item.s - 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...itemm, l:0,m:0,s: 1 }]);
      setArr(
        arr.map((item) =>
          item.tshirt === itemm.tshirt ? { ...item, s: item.s - 1 } : item
        )
      );
    }
     }
  }


  function openCart(){
    console.log(cart);
    setShowcart(true)
  }
  function buy(){
    setCart([])
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      localStorage.removeItem(key)
    } 
  }
  function close(){
    setShowcart(false)
  }
  
  return (
    <>
      <Form data={getData}></Form>
      <DisplayProduct
        display={arr}
        addl={addl}
        addm={addm}
         adds={adds}
      ></DisplayProduct>
      <CartButton 
        cart={cart}
         openCart={openCart}
        ></CartButton>
      {showcart    &&    <CartDisplay cartdisplay={cart}
       buy={buy}
      close={close}
        ></CartDisplay> }
        
    </>
  );
}

export default App;

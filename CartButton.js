function CartButton({ cart,openCart }) {
  return (
    <>
      <button onClick={openCart}>
        Cart({cart.reduce((total,item)=>
        total+item.l+item.m+item.s,0)})
        
    
     
    
      </button>
    </>
  );
}
export default CartButton;

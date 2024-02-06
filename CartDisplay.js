import CartDisplayItem from "./CartDisplayItem";
import "./Div.css"
import TotalSum from "./TotalSum";
function CartDisplay({ cartdisplay,buy ,close}) {
  return (
    <div>
      <h2>Cart</h2>
      <div className="cart-container">
      <ul>
        {cartdisplay.map((item) => (
          <CartDisplayItem item={item}></CartDisplayItem>
        ))}
      </ul>
      <TotalSum prop={cartdisplay}
      buy={buy}
      close={close}></TotalSum>
      </div>
      
    </div>
  );
}
export default CartDisplay;

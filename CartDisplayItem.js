import "./Div.css"
function CartDisplayItem({ item }) {
var total = (item.l + item.m + item.s) * item.price 
localStorage.setItem(item.tshirt,JSON.stringify(total))
  return (
    <div className="cart">
      
        {item.tshirt}-{item.description}-Large{item.l}-Medium{item.m}-Small
        {item.s}-price{total}
        
    
      
      
    </div>
  );
}
export default CartDisplayItem;

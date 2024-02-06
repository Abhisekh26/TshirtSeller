function DisplayProductItem({ items ,addl,addm,adds}) {
   

    return (
      <div className="product-details">
        {items.tshirt}-{items.description}-{items.price}- 
      <button onClick={()=>addl(items)}>BuyLarge{items.l}</button>  
      <button onClick={()=>addm(items)}>BuyMedium{items.m}</button> 
      <button onClick={()=>adds(items)}>BuySmall{items.s}</button> 
        {}
       
       
      
      </div>
    );
  }
  export default DisplayProductItem;
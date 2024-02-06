import { useState } from "react";
function Form({data}) {
  const [tshirt, setTshirt] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [l, setL] = useState();
  const [m, setM] = useState();
  const [s, setS] = useState();
  function getTshirt(event) {
    setTshirt(event.target.value);
  }

  function getDescription(event) {
    setDescription(event.target.value);
  }
  function getPrice(event) {
    setPrice(event.target.value);
  }

  function getL(event) {
    setL(event.target.value);
  }

  function getM(event) {
    setM(event.target.value);
  }

  function getS(event) {
    setS(event.target.value);
  }
  function Display(){
    data(tshirt,description,price,l,m,s)
    setTshirt("")
    setDescription("")
    setPrice("")
    setL("")
    setM("")
    setS("")

  }

  return (
    <div className=".form-container">
      <label>Tshirt</label>
      <input type="text" value={tshirt} onChange={getTshirt}></input>

      <label>Description</label>
      <input type="text" value={description} onChange={getDescription}></input>

      <label>Price</label>
      <input type="number" value={price} onChange={getPrice}></input>

      <label>Large</label>
      <input type="number" value={l} onChange={getL}></input>
      <label>Medium</label>
      <input type="number" value={m} onChange={getM}></input>
      <label>Small</label>
      <input type="number" value={s} onChange={getS}></input>
      <button className="cart-button" onClick={Display}>Add Product</button>
    </div>
  );
}
export default Form;

import DisplayProductItem from "./DisplayProductItem";
function DisplayProduct({ display, addl, addm, adds }) {
  return (
    <>
      {display.map((item, index) => (
        <DisplayProductItem
          items={item}
          addl={addl}
          addm={addm}
          adds={adds}
        ></DisplayProductItem>
      ))}
    </>
  );
}
export default DisplayProduct;

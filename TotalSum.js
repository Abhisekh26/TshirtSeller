function TotalSum({ cartee, buy ,close}) {
  let count = 0;
  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    const value = localStorage.getItem(key);
    const a = Number(value);
    // console.log(typeof(value))
    count = count + a;
  }

  return (
    <>
      <h3> Total Bill:{count}</h3>
      <button onClick={buy}>Buy Item</button>
      <button onClick={close}>Close Cart</button>
    </>
  );
}
export default TotalSum;

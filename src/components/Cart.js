// export default function ShoppingCart({ShoppingCartData , DeleteItemFromCartHandler , QuantityIncrementHandler , QuantityDecrementHandler  })
export default function Cart() {
  const CartTable = ShoppingCartData.map((ele) => {
    return (
      <tr key={ele.id}>
        <td>{ele.id}</td>
        <td><img width="60" src={ele.image} alt="img" /> </td>
        <td>{ele.title}</td>
        <td><button id={ele.id} onClick={QuantityIncrementHandler} className="btn btn-success"> {" "} +1{" "}</button>
        <div className="text-center">{ele.quantity}</div>
        <button id={ele.id} onClick={QuantityDecrementHandler} className="btn btn-success">{" "} -1 {" "}</button></td>
        <td>{ele.price} $</td>
        <td>{ele.price * ele.quantity} $</td>
        <td><button id={ele.id} onClick={DeleteItemFromCartHandler} className="btn btn-danger">{" "} delete </button></td>
      </tr>
    );
  });

  let Total = 0;

  ShoppingCartData.forEach((ele) => {
    Total += ele.price * ele.quantity;
  });

  return (
    <div className="mx-auto px-2 container  py-2">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">image</th>
            <th scope="col">title</th>
            <th scope="col">quantity</th>
            <th scope="col">price</th>
            <th scope="col">subtotal</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          <tr> {CartTable} </tr>
        </tbody>
      </table>
      <h4 className="text-white text-center"> Total </h4>
      <button className="mx-auto d-block"> {Total} $ </button>
    </div>
  );
}
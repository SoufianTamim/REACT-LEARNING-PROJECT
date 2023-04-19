// export default function ShoppingCart({ShoppingCartData , DeleteItemFromCartHandler , QuantityIncrementHandler , QuantityDecrementHandler  })
export default function Cart({ ShoppingCartData, DeleteItemFromCartHandler, QuantityIncrementHandler, QuantityDecrementHandler }) {
  const CartTable = ShoppingCartData.map((ele) => {
    return (
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ele.images[0]} className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex flex-row g-3">
                <h5 className="card-title">{ele.title}</h5>
              </div>
              <table>
                <tr>
                  <th className="text-center">PRICE</th>
                  <th className="text-center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th className="text-center">SUB-TOTAL</th>
                </tr>
                <tr>
                  <td className="text-center">{ele.price} $</td>
                  <td className="text-center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td className="text-center">{ele.price * ele.quantity}$</td>
                </tr>
              </table>
              <div className="d-flex flex-row justify-content-center">
                <button id={ele.id} onClick={QuantityIncrementHandler} className="btn btn-success m-1">&#43;</button>
                <input className="form-control w-25 m-1" value={ele.quantity} />
                <button id={ele.id} onClick={QuantityDecrementHandler} className="btn btn-success m-1">&#8722;</button>
                <img id={ele.id} onClick={DeleteItemFromCartHandler} src="https://img.icons8.com/pastel-glyph/32/ff0000/trash.png" alt="trash icon" width="32" height="32" className="mt-2 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  let TOTAL = 0;
  ShoppingCartData.forEach((ele) => {
    TOTAL += ele.price * ele.quantity;
  });
  return (
    <div className="mx-auto px-2 container  py-2">
      {CartTable}
      <h4 className="text-white text-center"> TOTAL </h4>
      <input className="mx-auto d-block w-50 text-center" readOnly value= {TOTAL + " $"} /> 
    </div>
  );
}

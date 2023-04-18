// export default function ShoppingCart({ShoppingCartData , DeleteItemFromCartHandler , QuantityIncrementHandler , QuantityDecrementHandler  })
export default function Cart({ShoppingCartData , DeleteItemFromCartHandler , QuantityIncrementHandler , QuantityDecrementHandler  }) {
  const CartTable = ShoppingCartData.map((ele) => {
    return (
      
      // <tr key={ele.id}>\
      // <div>
      //   <img width="60" src={ele.images[0]} alt="img" /> 
      //   <span>ID : {ele.id}</span>
      //   <span>TITLE : {ele.title}</span>
      //   <span>QUANTITY : {ele.quantity}</span>
      //   <span>PRICE : {ele.price}</span>
      // </div>

      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ele.images[0]} className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex flex-row g-3">
              <h5 className="card-title">{ele.title}</h5>
              <img id={ele.id} onClick={DeleteItemFromCartHandler} src="https://img.icons8.com/pastel-glyph/32/ff0000/trash.png" alt="trash icon"/>
              </div> 
             <p className="card-text">{ele.id}</p>
              <div className="d-flex flex-row g-3">
                <button id={ele.id} onClick={QuantityIncrementHandler} className="btn btn-success g-1">{" "} +1 {" "}</button>
                <input className="form-control w-25 g-1" value={ele.quantity}/>
                <button id={ele.id} onClick={QuantityDecrementHandler} className="btn btn-success g-1">{" "} -1 {" "}</button>
              </div>

              <p className="card-text">PRICE : {ele.price} $</p>
              <p className="card-text">SUB-PRICE : {ele.price * ele.quantity} $</p>

              <p className="card-text">
                {/* <img id={ele.id} onClick={DeleteItemFromCartHandler} src="https://img.icons8.com/pastel-glyph/32/ff0000/trash.png"/> */}
              </p>
            </div>
          </div>
        </div>
      </div>


        
          /* <td>{ele.id}</td>
        <td><img width="60" src={ele.images[0]} alt="img" /> </td>
        <td>{ele.title}</td>
        <td>
          <button id={ele.id} onClick={QuantityIncrementHandler} className="btn btn-success"> {" "} +1{" "}</button>
          <div className="text-center">{ele.quantity}</div>
          <button id={ele.id} onClick={QuantityDecrementHandler} className="btn btn-success">{" "} -1 {" "}</button>
        </td>
        <td>{ele.price} $</td>
        <td>{ele.price * ele.quantity} $</td>
        <td><button id={ele.id} onClick={DeleteItemFromCartHandler} className="btn btn-danger">{" "} delete </button></td>
      </tr> */
    
    );
  });

  let Total = 0;

  ShoppingCartData.forEach((ele) => {
    Total += ele.price * ele.quantity;
  });

  return (
    <div className="mx-auto px-2 container  py-2">
    {/* //   <table className="table">
    //     <thead>
    //       <tr>
    //         <th scope="col">id</th>
    //         <th scope="col">image</th>
    //         <th scope="col">title</th>
    //         <th scope="col">quantity</th>
    //         <th scope="col">price</th>
    //         <th scope="col">subtotal</th>
    //         <th scope="col">delete</th>
    //       </tr>
    //     </thead>
    //     <tbody> */}
        {CartTable} 

        {/* </tbody>
      </table> */}
      <h4 className="text-white text-center"> Total </h4>
      <button className="mx-auto d-block"> {Total} $ </button>
    </div>
  );
}
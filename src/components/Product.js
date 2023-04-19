import { useState } from "react";

export default function Product({ image, title, description, id, price, category, OnclickHandler }) {
  const [showMore, SetShowMore] = useState(false);
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a onClick={() => {SetShowMore(!showMore);}}className="text-info">{showMore ? "Show less..." : " Show more..."}</a>
          <p className="card-text">{showMore && description}</p>
          <div className="row">
            <div className="col-md-6 text-center">{price} $</div>
            <div className="col-md-6 text-center">{category}</div>
          </div>
          <button id={id} onClick={OnclickHandler} className="btn my-1 w-75 d-block mx-auto btn-primary">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

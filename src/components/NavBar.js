import { useState } from "react";

export default function NavBar({ children }) {
  const [ShowCart, SetShowCart] = useState(false);
  return (
    <div className=" col-md-4 bg-dark " data-bs-theme="dark">
      <button className="btn btn-primary mt-5 w-50 d-block mx-auto" onClick={() => {SetShowCart(!ShowCart);}} >{ShowCart ? "HIDE CART" : "  SHOW CART"}</button>
      {ShowCart && children}
    </div>
  );
}

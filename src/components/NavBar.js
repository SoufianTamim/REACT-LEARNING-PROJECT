import { useState } from "react";

export default function NavBar({ children }) {
  const [ShowCart, SetShowCart] = useState(false);

  return (
    <div className=" col-md-4  bg-dark" data-bs-theme="dark">
      <h4 className="text-white d-block mx-auto">The Cart</h4>
      <button className="btn btn-primary w-50 d-block mx-auto" onClick={() => {SetShowCart(!ShowCart);}} > {" "}{ShowCart ? "HIDE CART :D" : "  SHOW CART :D"}{" "} </button>
      {ShowCart && children}
    </div>
  );
}

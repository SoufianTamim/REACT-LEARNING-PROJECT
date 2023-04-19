import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";
import { Products } from "./Data/Products";
import { useImmer } from "use-immer";

function App() {
  const [CartData, SetCartData] = useImmer([]);
  function AddToCart(e) {
    const ClickedItem = Products.filter((item) => item.id == e.target.id)[0];
    const ProductToInsert = {};
    const theNewArray = [];
    if (!CartData.some((i) => i.id == ClickedItem.id)) {
      const ProductToInsert = { ...Products.filter((item) => item.id == e.target.id)[0], quantity: 1 };
      SetCartData([...CartData, ProductToInsert]);
    } else {
      SetCartData((draft) => {
        const thearray = draft.find((a) => a.id == ClickedItem.id);
        thearray.quantity += 1;
      });
    }
  }
  function DeleteItemFromCart(ele) {
    let ItemToDelete = ele.target.id;
    SetCartData((draft) => {
      draft.splice(
        draft.findIndex((x) => x.id == ItemToDelete),
        1
      );
    });
  }
  function QuantityIncrement(ele) {
    let ItemToIncrement = ele.target.id;
    SetCartData((draft) => {
      const thearray = draft.find((a) => a.id == ItemToIncrement);
      thearray.quantity += 1;
    });
  }
  function QuantityDecrement(ele) {
    let ItemToDecrement = ele.target.id;
    SetCartData((draft) => {
      const thearray = draft.find((a) => a.id == ItemToDecrement);
      if (thearray.quantity == 1) {
        draft.splice(
          draft.findIndex((x) => x.id == ItemToDecrement),
          1
        );
      } else {
        thearray.quantity -= 1;
      }
    });
  }
  return (
    <div className="container-fluid row">
      <NavBar>
        <Cart ShoppingCartData={CartData} DeleteItemFromCartHandler={DeleteItemFromCart} QuantityIncrementHandler={QuantityIncrement} QuantityDecrementHandler={QuantityDecrement} />
      </NavBar>
      <ProductsList OnclickHandler={AddToCart} />
    </div>
  );
}
export default App;
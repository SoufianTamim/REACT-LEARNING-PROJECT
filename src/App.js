import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";
import Products  from './Data/Products';


export default function App() {
  return (
    <div className="row">
    <NavBar>
      <Cart />
    </NavBar>
    
    <ProductsList />
    </div>

  );
}
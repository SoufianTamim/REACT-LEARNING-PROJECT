import { Products } from '../Data/Products';
import Product from './Product';

export default function ProductsList({OnclickHandler}) {
  const TheProductsList = Products.map((TheProduct) =>
   <Product OnclickHandler={OnclickHandler} key={TheProduct.id} 
   image={TheProduct.images[0]} 
   title={TheProduct.title} 
   price={TheProduct.price} 
   description={TheProduct.description} 
   category={TheProduct.category.name} 
   id={TheProduct.id} />);

  return <div className="row col-md-8 row-cols-1 row-cols-md-3 g-1">{TheProductsList}</div>;
}
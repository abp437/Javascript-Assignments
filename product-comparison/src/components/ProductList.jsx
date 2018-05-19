import ProductItem from 'Components/ProductItem';
import { productsData } from 'Constants/constants';

const ProductList = props => {
  return (
    <ul className='list-unstyled d-flex justify-content-center mb-5'>
      {
        productsData.map(item => {
          return <ProductItem item={item} compareCounter={item => props.compareCounter(item)} />
        })
      }
    </ul>
  );
};

export default ProductList;

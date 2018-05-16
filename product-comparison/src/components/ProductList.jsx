import ProductItem from 'Components/ProductItem';
import { productsData } from 'Constants/constants';

class ProductList extends React.Component {
  render() {
    return (
      <ul className='list-unstyled d-flex justify-content-center mb-5'>
        {
          productsData.map(item => {
            return <ProductItem item={item} compareCounter={item => this.props.compareCounter(item)} />
          })
        }
      </ul>
    );
  }
}

export default ProductList;

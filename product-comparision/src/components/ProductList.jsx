import ProductItem from 'Components/ProductItem';
import { productsData } from 'Constants/constants';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='list-unstyled d-flex'>
        {
          productsData.map(item => {
            return <ProductItem item={item} />
          })
        }
      </ul>
    );
  }
}

export default ProductList;

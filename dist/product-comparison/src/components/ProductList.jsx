import ProductItem from 'Components/ProductItem';

const ProductList = props => (
  <ul className='list-unstyled d-flex flex-wrap flex-md-nowrap justify-content-center mb-5'>
    {
      props.products.map(item => {
        return <ProductItem item={item} itemCompareStatus={props.compareCount} updateProductTitle={props.updateProductTitle} />
      })
    }
  </ul>
);

ProductList.defaultProps = {
  products: [],
  compareCount: () => { },
  updateProductTitle: () => { },
};

ProductList.propTypes = {
  products: PropTypes.array,
  compareCount: PropTypes.func,
  updateProductTitle: PropTypes.func,
};

export default ProductList;

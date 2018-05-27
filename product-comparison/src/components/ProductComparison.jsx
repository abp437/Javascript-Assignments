import ProductColors from 'Components/ProductColors';

const ProductComparison = props => (
  <ul className='list-unstyled d-flex'>
    {
      props.comparisonList.map(item => {
        return (
          <li className='col-xs-6 col-md-3'>
            <div className='card'>
              <div className='card-body text-center'>
                <h5 className='card-title'>{item.name}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>${item.price}</h6>
                <ProductColors availableColors={item.colors} />
                <button type='button' disabled='disabled' className='btn btn-outline-primary btn-lg btn-block text-capitalize'>{item.condition}</button>
              </div>
            </div>
          </li>
        )
      })
    }
  </ul>
);

ProductComparison.defaultProps = {
  comparisonList: [],
};

ProductComparison.propTypes = {
  comparisonList: PropTypes.array,
};

export default ProductComparison;

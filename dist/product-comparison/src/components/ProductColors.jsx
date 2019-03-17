const ProductColors = props => (
  <div className='available-colors mb-4 d-flex justify-content-center'>
    {
      props.availableColors.map(item => {
        return <span className={`bg-${item}`}></span>
      })
    }
  </div>
);

ProductColors.defaultProps = {
  availableColors: [],
};

ProductColors.propTypes = {
  availableColors: PropTypes.array,
};

export default ProductColors;

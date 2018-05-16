class ProductColors extends React.Component {
  render() {
    return (
      <div className='available-colors mb-4 d-flex'>
        {
          this.props.availableColors.map(item => {
            return <span className={`bg-${item}`}></span>
          })
        }
      </div>
    );
  }
}

export default ProductColors;

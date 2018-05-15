class ProductColors extends React.Component {
  render() {
    return (
      <div className='available-colors d-flex'>
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

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.item,
      compareStatus: 'Compare'
    }
    this.compareButtonClick = this.compareButtonClick.bind(this);
  }

  compareButtonClick() {
    this.setState({
      compareStatus: 'Remove'
    });
  }

  render() {
    return (
      <li className='col-md-3' key={this.state.product.name}>
        <div className='product-item'>
          <img className='img-responsive' src={require(`Images/${this.state.product.image}`)} />
          <div className='product-description'>
            <h5>{this.state.product.name}</h5>
            <div className='d-flex justify-content-between'>
              <label>{this.state.product.description}</label>
              <span>${this.state.product.price}</span>
            </div>
            <button className='btn btn-success' onClick={this.compareButtonClick}>{this.state.compareStatus}</button>
          </div>
        </div>
      </li>
    );
  }
}

export default ProductItem;

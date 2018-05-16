class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compareStatus: true
    };
    this.compareButtonClick = this.compareButtonClick.bind(this);
  }

  compareButtonClick() {
    this.setState({
      compareStatus: !this.state.compareStatus
    }, this.props.compareCounter(this.props.item));
  }

  render() {
    const product = this.props.item || {};
    return (
      <li className='col-xs-6 col-md-3'>
        <div className='card'>
          <img className='card-img-top' src={require(`Images/${product.image}`)} alt={`${product.image}`} />
          <div className='card-body'>
            <h5 className='card-title'>{product.name}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>${product.price}</h6>
            <p>{product.description}</p>
            <button className='btn btn-success' onClick={this.compareButtonClick}>{this.state.compareStatus ? 'Compare' : 'Remove'}</button>
          </div>
        </div>
      </li>
    );
  }
}

export default ProductItem;

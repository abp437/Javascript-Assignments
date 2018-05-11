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
        <div className='card'>
          <img className='card-img-top' src={require(`Images/${this.state.product.image}`)} alt={`${this.state.product.image}`} />
            <div className='card-body'>
              <h5 className='card-title'>{this.state.product.name}</h5>
              <h6 className='card-subtitle mb-2 text-muted'>${this.state.product.price}</h6>
              <p>{this.state.product.description}</p>
            <button className='btn btn-success' onClick={this.compareButtonClick}>{this.state.compareStatus}</button>
            </div>
        </div>
      </li>
    );
  }
}

export default ProductItem;

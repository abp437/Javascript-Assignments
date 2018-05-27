import { EditIcon, TickIcon, CloseIcon } from 'Components/SVG';

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToComparison: false,
      ongoingEdit: false,
    };
    this.productTitle = React.createRef();
  }

  startEdit(productId) {
    if (this.productTitle.current.textContent !== '') {
      this.setState({
        ongoingEdit: !this.state.ongoingEdit
      }, this.updatedProductTitle.bind(this, productId));
    } else {
      alert("Product title can't be Blank.");
      this.productTitle.current.focus();
    }
  }

  updatedProductTitle(productId) {
    if (this.state.ongoingEdit) {
      this.productTitle.current.focus();
    } else {
      this.productTitle.current.blur();
      this.props.updateProductTitle(this.productTitle.current.textContent, productId);
    }
  }

  toggleCompareStatus(productId) {
    this.setState({
      addedToComparison: !this.state.addedToComparison
    }, this.props.itemCompareStatus(productId));
  }

  render() {
    const product = this.props.item || {};
    return (
      <li className='col-xs-6 col-md-3 list-item'>
        <div className='card'>
          <img className='card-img-top' src={require(`Images/${product.image}`)} alt={`${product.image}`} />
          <div className='card-body'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <h5 className='card-title m-0' ref={this.productTitle} contentEditable={this.state.ongoingEdit}>{product.name}</h5>
              {
                this.state.ongoingEdit ? (
                  <TickIcon editStatus={this.startEdit.bind(this, product.id)} />
                ) : (
                    <EditIcon editStatus={this.startEdit.bind(this, product.id)} />
                  )
              }
            </div>
            <h6 className='card-subtitle mb-2 text-muted'>${product.price}</h6>
            <p>{product.description}</p>
            <button className='btn btn-success' onClick={this.toggleCompareStatus.bind(this, product)}>{this.state.addedToComparison ? 'Remove' : 'Compare'}</button>
          </div>
        </div>
      </li>
    );
  }
}

ProductItem.defaultProps = {
  item: {},
  itemCompareStatus: () => { },
  updateProductTitle: () => { },
};

ProductItem.propTypes = {
  item: PropTypes.object,
  itemCompareStatus: PropTypes.func,
  updateProductTitle: PropTypes.func,
};

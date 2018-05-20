import { EditIcon, TickIcon, CloseIcon } from 'Components/SVG';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compareStatus: true,
      editable: false
    };
    this.editableDiv = React.createRef();
    this.compareButtonClick = this.compareButtonClick.bind(this);
    this.closeButtonClick = this.closeButtonClick.bind(this);
    this.editStatus = this.editStatus.bind(this);
  }

  compareButtonClick() {
    this.setState({
      compareStatus: !this.state.compareStatus
    }, this.props.compareCounter(this.props.item));
  }

  closeButtonClick(itemId) {
    this.props.itemRemoval(itemId);
  }

  editStatus(productId) {
    this.setState({
      editable: !this.state.editable
    }, () => {
      if (this.state.editable) {
        this.editableDiv.current.focus();
      } else {
        this.editableDiv.current.blur();
        this.props.someValue(this.editableDiv.current.innerHTML, productId);
      }
    });
  }

  render() {
    const product = this.props.item || {};
    return (
      <li className='col-xs-6 col-md-3 list-item'>
        <CloseIcon itemRemoval={() => this.closeButtonClick(product.id)} />
        <div className='card'>
          <img className='card-img-top' src={require(`Images/${product.image}`)} alt={`${product.image}`} />
          <div className='card-body'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <h5 className='card-title mb-0' ref={this.editableDiv} contentEditable={this.state.editable}>{product.name}</h5>
              {
                this.state.editable ? (
                  <TickIcon editStatus={() => this.editStatus(product.id)} />
                ) : (
                  <EditIcon editStatus={this.editStatus} />
                )
              }
            </div>
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

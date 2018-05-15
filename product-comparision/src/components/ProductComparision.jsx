import { productsData } from 'Constants/constants';

class ProductComparision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsToBeCompared: this.props.productsCompared
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.productsToBeCompared !== nextProps.productsCompared) {
      console.log(prevState.productsToBeCompared);
      console.log(nextProps.productsCompared);
      return {
        productsToBeCompared: nextProps.productsCompared
      };
    }
    return null;
  }

  render() {
    return (
      <ul className='list-unstyled d-flex'>
        {
          this.state.productsToBeCompared.map(item => {
            return (
              <li className='col-xs-6 col-md-3'>
                <div className='card'>
                  <img className='card-img-top' src={require(`Images/${item.image}`)} alt={`${item.image}`} />
                  <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>${item.price}</h6>
                    <p>{item.description}</p>
                    <button className='btn btn-success'>Compare</button>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default ProductComparision;

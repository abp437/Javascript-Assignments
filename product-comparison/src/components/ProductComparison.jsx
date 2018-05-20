import ProductColors from 'Components/ProductColors';
import { productsData } from 'Constants/constants';

export default class ProductComparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsCompared: this.props.productsCompared
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.productsCompared);
    if (nextProps.productsCompared !== prevState.productsCompared) {
      return {
        productsCompared: nextProps.productsCompared
      };
    }
    return null;
  }

  render() {
    return (
      <ul className='list-unstyled d-flex'>
        {
          this.state.productsCompared.map(item => {
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
  }
};

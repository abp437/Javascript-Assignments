import ProductItem from 'Components/ProductItem';
import { productsData } from 'Constants/constants';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [...productsData]
    }
    this.someFunction = this.someFunction.bind(this);
  }

  someFunction(valuePassed, productID) {
    let tempState = [...this.state.productsList];
    let something = tempState.filter(item => {
      if (item.id === productID) {
        item.name = valuePassed;
      }
      return item;
    });
    this.setState({
      productsList: something
    });
  }

  render() {
    return (
      <ul className='list-unstyled d-flex flex-wrap flex-md-nowrap justify-content-center mb-5'>
        {
          this.state.productsList.map(item => {
            return <ProductItem item={item} compareCounter={item => this.props.compareCounter(item)} someValue={this.someFunction} />
          })
        }
      </ul>
    );
  }
};
import ReactDOM from 'react-dom';
import ProductList from 'Components/ProductList';
import ProductComparison from 'Components/ProductComparison';

class CompareApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compareItemIds: [],
    };
    this.compareCounter = this.compareCounter.bind(this);
  }

  compareCounter(product) {
    const compareItemIds = [...this.state.compareItemIds];
    let itemIndex = compareItemIds.findIndex(item => item.id === product.id);
    if (itemIndex >= 0) {
      compareItemIds.splice(itemIndex, 1);
    } else {
      compareItemIds.push(product);
    }
    this.setState({
      compareItemIds
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center display-3 mb-5'>Product Comparison</h1>
        <ProductList compareCounter={this.compareCounter} />
        {
          this.state.compareItemIds.length >= 2 &&
          <div>
            <h2 className='text-center mb-4'>Comparison</h2>
            <ProductComparison productsCompared={this.state.compareItemIds} />
          </div>
        }
      </div>
    );
  }
}

ReactDOM.render(
  <CompareApp />,
  document.getElementById('compareApp')
);

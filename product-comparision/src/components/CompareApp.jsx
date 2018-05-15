import ReactDOM from 'react-dom';
import ProductList from 'Components/ProductList';
import ProductComparision from 'Components/ProductComparision';

class CompareApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compareItemIds: [],
    }
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
        <h1 className='text-center display-3 mb-5'>Product Comparision</h1>
        <ProductList compareCounter={this.compareCounter} />
        <ProductComparision productsCompared={this.state.compareItemIds} />
      </div>
    );
  }
}

ReactDOM.render(
  <CompareApp />,
  document.getElementById('compareApp')
);

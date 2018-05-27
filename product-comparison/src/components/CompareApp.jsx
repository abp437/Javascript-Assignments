import ReactDOM from 'react-dom';
import ProductList from 'Components/ProductList';
import ProductComparison from 'Components/ProductComparison';
import { productsData } from 'Constants/constants';

class CompareApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compareItems: [],
      products: [...productsData]
    };
    this.comparisonStatus = this.comparisonStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  comparisonStatus(product) {
    let compareItems = [...this.state.compareItems];
    let productsCopy = [...this.state.products];
    let itemIndex = compareItems.map(item => item.id).indexOf(product.id);
    let productIndex = productsCopy.map(item => item.id).indexOf(product.id);
    itemIndex !== -1 || itemIndex == product.id ? compareItems.splice(itemIndex, 1) : compareItems.push(productsCopy[productIndex]);
    this.setState({
      compareItems
    });
  }

  updateTitle(updatedTitle, productId) {
    let products = this.state.products.map(item => {
      if (item.id == productId) {
        item.name = updatedTitle;
      }
      return item;
    });
    this.setState({
      products
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center display-3 mb-5'>Product Comparison</h1>
        <ProductList products={this.state.products} compareCount={this.comparisonStatus} updateProductTitle={this.updateTitle} />
        <div>
          {
            this.state.compareItems.length >= 2 &&
            <div>
              <h2 className='text-center mb-4'>Comparison</h2>
              <ProductComparison comparisonList={this.state.compareItems} />
            </div>
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <CompareApp />,
  document.getElementById('compareApp')
);

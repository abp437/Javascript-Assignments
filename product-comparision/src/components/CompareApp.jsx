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

  compareCounter(itemId) {
    const compareItemIds = [...this.state.compareItemIds];
    if (compareItemIds.indexOf(itemId) === -1) {
      compareItemIds.push(itemId)
      this.setState({
        compareItemIds
      });
    } else {
      compareItemIds.splice(itemId)
      this.setState({
        compareItemIds
      });
    }
    console.log(compareItemIds);
  }
  

  render() {
    return (
      <div className='container'>
        <h1 className='text-center display-3 mb-5'>Product Comparision</h1>
        <ProductList compareCounter={this.compareCounter} />
        <ProductComparision />
      </div>
    );
  }
}

ReactDOM.render(
  <CompareApp />,
  document.getElementById('compareApp')
);

import ReactDOM from 'react-dom';
import ProductList from 'Components/ProductList';
import ProductComparision from 'Components/ProductComparision';

class CompareApp extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Product Comparision</h1>
        <ProductList />
        <ProductComparision />
      </div>
    );
  }
}

ReactDOM.render(
  <CompareApp />,
  document.getElementById('compareApp')
);

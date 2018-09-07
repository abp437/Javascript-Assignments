import ReactDOM from 'react-dom';

class HelloComponent extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloComponent />,
  document.getElementById('reduxBasics')
);

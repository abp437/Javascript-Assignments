import { Component } from 'react';
import ReactDOM from 'react-dom';
import ListIterator from 'Components/ListIterator';
import FormComponent from 'Components/FormComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleDelete(elementToBeDeleted) {
    let items = this.state.items.filter(item => {
      if (item.key !== elementToBeDeleted) {
        return item;
      }
      return null;
    });
    this.setState({
      items
    });
  }

  handleUserInput(valueOfUserInput) {
    let duplicateInput = false;
    let items = [...this.state.items];
    items.forEach(item => {
      if (Object.values(item).indexOf(valueOfUserInput) > -1) {
        duplicateInput = true;
      }
    });
    if (!duplicateInput) {
      items.push({
        key: new Date().valueOf(),
        text: valueOfUserInput
      });
      this.setState({
        items
      });
    } else {
      alert('Duplicate Input');
    }
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>To Do App</h1>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <FormComponent validateUserInput={this.handleUserInput} />
            <ListIterator listItems={this.state.items} deleteItem={this.handleDelete} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('todoApp'));

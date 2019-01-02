import { Component } from 'react';
import ReactDOM from 'react-dom';
import ListIterator from 'Components/ListIterator';
import FormComponent from 'Components/FormComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/todos')
      .then((response) => {
        this.setState({
          items: response.data,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleDelete(elementToBeDeleted) {
    const items = this.state.items.filter((item) => {
      if (item.key !== elementToBeDeleted) {
        return item;
      }
      return null;
    });
    this.setState({
      items,
    });
  }

  handleUserInput(valueOfUserInput) {
    const items = [...this.state.items];
    let duplicateInput = false;
    items.forEach((item) => {
      if (Object.values(item).indexOf(valueOfUserInput) > -1) {
        duplicateInput = true;
      }
    });
    if (!duplicateInput) {
      axios.post('http://localhost:3000/todo', {
        description: valueOfUserInput,
      })
        .then((response) => {
          items.push({
            key: response.data,
            description: valueOfUserInput,
          });
          this.setState({
            items,
          });
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('Duplicate Input');
    }
  }

  render() {
    const { items } = this.state;
    return (
      <div className="container">
        <h1 className="text-center">To Do App</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <FormComponent validateUserInput={this.handleUserInput} />
            <ListIterator listItems={items} deleteItem={this.handleDelete} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('todoApp'));

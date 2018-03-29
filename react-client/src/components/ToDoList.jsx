var axios = require('axios');
import { PropTypes, Component } from 'react';
var uniqid = require('uniqid');
import { TaskItem } from './TaskItem';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listitem: []
    }
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem() {
    let user_input = ReactDOM.findDOMNode(this.refs.userInput).value;
    let updatedState =  this.state.listitem;
    if(user_input !== '') {
      updatedState.unshift({
        text: user_input,
        key: uniqid.time()
      });
      this.setState({
        listitem: updatedState
      });
    }
    let something = {};
    something.name = ReactDOM.findDOMNode(this.refs.userInput).value;
    axios.post('http://localhost:3000/tasks', something)
    .then(res => {
      console.log('Posted');
      return res;
    });
    ReactDOM.findDOMNode(this.refs.userInput).value = '';
  }

  deleteItem(itemID) {
    let residueArray = this.state.listitem.filter((item) => {
      return item.key !== itemID;
    });
    this.setState({
      listitem: residueArray
    });
    axios.delete('http://localhost:3000/tasks/')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  seeItems() {
    axios.get('http://localhost:3000/tasks')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>To Do App</h1>
        <form>
          <div className='form-group row justify-content-md-center'>
            <input
              type='text'
              placeholder='Enter Task'
              ref='userInput'
              className='col-6 form-control'
              />
            <button type='button' className='btn btn-primary col-1' onClick={() => this.addItem()}>Add</button>
          </div>
        </form>
        <TaskItem taskitem={this.state.listitem} delete={this.deleteItem}/>
        <button onClick={() => this.seeItems()}>Retrieve On Console</button>
      </div>
    );
  }
};

ReactDOM.render(
  <ToDoList />,
  document.getElementById('app')
);

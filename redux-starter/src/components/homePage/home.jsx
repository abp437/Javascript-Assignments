import AddToDo from './addToDo';
import Todos from './todos';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  deleteTodo(id) {
    const { todos, } = this.state,
      filteredTodos = todos.filter(todo => todo.id !== id);
    this.setState({
      todos: filteredTodos,
    });
  }

  addTodo(todo) {
    const receivedTodo = todo,
      { todos, } = this.state;
    let setTodos = [];
    receivedTodo.id = Math.random() * 10;
    setTodos = [...todos, receivedTodo];
    this.setState({
      todos: setTodos,
    });
  }

  render() {
    const { todos, } = this.state;
    return (
      <div className="container">
        <h1 className="center blue-text">Todos</h1>
        <AddToDo addTodo={this.addTodo} />
        <Todos todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Home;

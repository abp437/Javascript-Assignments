import Todos from './todos';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: 'Buy some Milk', },
        { id: 2, content: 'Play Mario Kart', }
      ],
    };
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(id) {
    const { todos, } = this.state,
      filteredTodos = todos.filter(todo => todo.id !== id);
    this.setState({
      todos: filteredTodos,
    });
  }

  render() {
    const { todos, } = this.state;
    return (
      <div className="container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Home;

import PropTypes from 'prop-types';

const Todos = ({ todos, deleteTodo, }) => {
  const todoList = todos.length ? (
    todos.map(todo => (
      <div className="collection-item d-flex justify-content-between align-items-center" key={todo.id}>
        <span>{todo.content}</span>
        <button className="waves-effect waves-light btn-small" type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    ))
  ) : (
    <p className="center">You have no Todos left. Yay!</p>
  );

  return (
    <div className="collection">
      {todoList}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  deleteTodo: PropTypes.func,
};

Todos.defaultProps = {
  todos: [],
  deleteTodo: () => {},
};

export default Todos;

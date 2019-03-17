class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleSubmit(event) {
    const { addTodo, } = this.props;
    event.preventDefault();
    addTodo(this.state);
    this.setState({
      content: '',
    });
  }

  render() {
    const { content, } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="user-input">
            Add new Todo:
            <input type="text" name="user-input" id="user-input" value={content} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

AddToDo.propTypes = {
  addTodo: PropTypes.func,
};

AddToDo.defaultProps = {
  addTodo: () => {},
};

export default AddToDo;

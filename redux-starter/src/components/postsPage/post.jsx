import TextColor from '../higherOrderComponents/textColor';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    const { match, } = this.props,
      { id, } = match.params;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        this.setState({
          post: response.data,
        });
      });
  }

  render() {
    const { generatedClass, } = this.props,
      { post, } = this.state,
      renderPost = post ? (
        <div className="post">
          <h4 className="center">{post.title}</h4>
          <p className="center">{post.body}</p>
        </div>
      ) : (
        <h4 className="center">Loading Post...</h4>
      );
    return (
      <div className={`container ${generatedClass}`}>
        {renderPost}
      </div>
    );
  }
}

Post.propTypes = {
  generatedClass: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

Post.defaultProps = {
  generatedClass: '',
  match: {},
};

export default TextColor(Post);

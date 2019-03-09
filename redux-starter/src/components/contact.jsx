import axios from 'axios';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({
          posts: response.data.slice(0, 10),
        });
      });
  }

  render() {
    const { posts, } = this.state,
      postList = posts.length ? (
        posts.map(post => (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="center">No posts yet</div>
      );
    return (
      <div>
        <h4 className="center">Axios</h4>
        <div className="container">
          {postList}
        </div>
      </div>
    );
  }
}

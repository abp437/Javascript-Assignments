import axios from 'axios';
import { Link } from 'react-router-dom';

export default class PostsList extends React.Component {
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
              <Link to={`posts/${post.id}`} className="card-title c-pointer">{post.title}</Link>
              <p>{post.body}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="center">No posts yet</p>
      );
    return (
      <div className="container">
        <h4 className="center">Posts List</h4>
        {postList}
      </div>
    );
  }
}

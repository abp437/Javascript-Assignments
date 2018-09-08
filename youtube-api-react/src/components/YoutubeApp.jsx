import ReactDOM from 'react-dom';
const API_KEY = 'AIzaSyDK-2MBSVcDsFRlSOQw_KsaFaXa18wIkRQ';

class YoutubeApp extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <YoutubeApp />,
  document.getElementById('youtubeApp')
);

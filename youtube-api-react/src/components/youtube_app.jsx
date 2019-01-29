import ReactDOM from 'react-dom';
import SearchBar from 'Components/search_bar';
import VideoList from 'Components/video_list';
import VideoDetail from 'Components/video_detail';
import API_KEY from 'Components/api_key';
import YTSearch from 'youtube-api-search';

class YoutubeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  videoSearch = term => {
    YTSearch({
      key: API_KEY,
      term
    },
      videos => {
        this.setState({
          videos,
          selectedVideo: videos[0]
        });
      }
    )
  }

  render() {
    return [
      <h1 key="1" className="text-center mb-4">Youtube Video Search</h1>,
      <div key="2" className="d-flex flex-wrap container">
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    ];
  }
}

ReactDOM.render(
  <YoutubeApp />,
  document.getElementById('youtubeApp')
);

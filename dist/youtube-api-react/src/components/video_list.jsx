import VideoListItem from 'Components/video_list_item';

const VideoList = props => {
  return (
    <ul className="col-md-4 list-group">
      {
        props.videos.length > 0 &&
        props.videos.map(video => (
          <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} />
        ))
      }
    </ul>
  );
};

export default VideoList;

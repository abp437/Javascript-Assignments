const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url,
    title = video.snippet.title;
  return (
    <li onClick={() => onVideoSelect(video)} className="d-flex cursor-pointer list-group-item video-list-media">
      <div className="media-left">
        <img className="media-object"
          src={imageUrl}
        />
      </div>
      <div className="ml-3 media-body">
        <div className="media-heading">{title}</div>
      </div>
    </li>
  );
};

export default VideoListItem;

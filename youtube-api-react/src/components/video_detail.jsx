const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>
  }

  const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9 mb-3">
        <iframe className="embed-responsive-item" src={embedUrl}></iframe>
      </div>
      <div className="details">
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

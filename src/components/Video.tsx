import { useState } from "react";
import "../assets/styles/video.css";

type VideoItem = {
  name: string;
  embedUrl: string;
};

const videos: VideoItem[] = [
  {
    name: "Trailer 1",
    embedUrl: "https://www.youtube.com/embed/PoogGcJjsFU",
  },
  {
    name: "Trailer 2",
    embedUrl:
      "https://platform.twitter.com/embed/Tweet.html?id=2089979414549278973",
  },
  {
    name: "Gameplay",
    embedUrl:
      "https://platform.twitter.com/embed/Tweet.html?id=2089980524404064308",
  },
];

function Video() {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const activeVideo = videos[selectedVideo];

  return (
    <section id="videos" className="video-section">
      <div className="video-content">
        <div className="video-menu">
          {videos.map((video, index) => (
            <button
              key={video.name}
              type="button"
              className={selectedVideo === index ? "active" : ""}
              onClick={() => setSelectedVideo(index)}
            >
              {video.name}
            </button>
          ))}
        </div>

        <div className="video-player">
          <iframe
            key={activeVideo.embedUrl}
            src={activeVideo.embedUrl}
            title={activeVideo.name}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default Video;
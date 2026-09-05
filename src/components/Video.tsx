import { useState } from "react";
import "../assets/styles/video.css";

type VideoItem = {
  name: string;
  embedUrl: string;
  aspectRatio: string;
};

const videos: VideoItem[] = [
  {
    name: "Trailer",
    embedUrl: "https://www.youtube.com/embed/PoogGcJjsFU",
    aspectRatio: "16 / 9",
  },
  {
    name: "Showcase 1",
    embedUrl:
      "https://www.youtube.com/embed/eMfT7XUNKOQ?",
    aspectRatio: "16 / 9",
  },
  {
    name: "Showcase 2",
    embedUrl:
      "https://www.youtube.com/embed/O9hgENQ_E9E?si=wHsKSnhjYeZESeBM",
    aspectRatio: "16 / 9",
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

        <div
          className="video-player"
          style={{ aspectRatio: activeVideo.aspectRatio }}
        >
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
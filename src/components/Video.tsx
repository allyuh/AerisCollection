import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import "../assets/styles/video.css";
import "swiper/css";

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
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  const menuX = useTransform(scrollYProgress, [0, 1], [-160, 0]);
  const playerX = useTransform(scrollYProgress, [0, 1], [160, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  return (
    <motion.section
      ref={sectionRef}
      id="videos"
      className="video-section"
      style={{ opacity: contentOpacity }}
    >
      <div className="video-content">
        <motion.div className="video-menu" style={{ x: menuX }}>
          {videos.map((video, index) => (
            <button
              key={video.name}
              type="button"
              className={selectedVideo === index ? "active" : ""}
              onClick={() => {
                setSelectedVideo(index);
                swiperRef.current?.slideTo(index);
              }}
            >
              {video.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="video-player"
          style={{ x: playerX }}
        >
          <Swiper
            className="video-swiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setSelectedVideo(swiper.activeIndex)}
            speed={750}
          >
            {videos.map((video) => (
              <SwiperSlide key={video.name}>
                <div
                  className="video-frame"
                  style={{ aspectRatio: video.aspectRatio }}
                >
                  <iframe
                    src={video.embedUrl}
                    title={video.name}
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Video;
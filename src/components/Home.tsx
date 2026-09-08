import { useScroll, useTransform, motion } from "motion/react";

import "../assets/styles/home.css";

function Home() {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 250]);
  const cutoutY = useTransform(scrollY, [0, 1000], [0, -600]);
  const textY = useTransform(scrollY, [0, 1000], [0, -100]);
  const cardY = useTransform(scrollY, [0, 1000], [0, -350]);

  const sparkles = [
    { left: "8%", top: "18%", size: 8, delay: "0s", duration: "2.8s" },
    { left: "17%", top: "42%", size: 5, delay: "1.2s", duration: "3.5s" },
    { left: "25%", top: "12%", size: 6, delay: "2s", duration: "3s" },
    { left: "32%", top: "68%", size: 9, delay: "0.7s", duration: "3.8s" },
    { left: "41%", top: "27%", size: 5, delay: "2.5s", duration: "2.7s" },
    { left: "49%", top: "75%", size: 7, delay: "1.5s", duration: "3.2s" },
    { left: "58%", top: "15%", size: 5, delay: "0.3s", duration: "3.6s" },
    { left: "67%", top: "38%", size: 8, delay: "2.2s", duration: "2.9s" },
    { left: "75%", top: "72%", size: 5, delay: "1s", duration: "3.4s" },
    { left: "83%", top: "22%", size: 9, delay: "2.8s", duration: "3s" },
    { left: "91%", top: "48%", size: 6, delay: "0.5s", duration: "3.7s" },
    { left: "12%", top: "82%", size: 6, delay: "1.8s", duration: "3.1s" },
    { left: "22%", top: "55%", size: 4, delay: "2.6s", duration: "2.8s" },
    { left: "72%", top: "10%", size: 5, delay: "0.9s", duration: "3.3s" },
    { left: "87%", top: "78%", size: 7, delay: "1.4s", duration: "3.9s" },
  ];

  return (
    <motion.section id="home" className="home">
      <motion.img
        className="home-background"
        src="/images/bg/aerisbg.jpg"
        style={{ y: backgroundY }}
        alt=""
      />

      <div className="home-sparkles" aria-hidden="true">
        {sparkles.map((sparkle, index) => (
          <span
            key={index}
            className="sparkle"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              animationDelay: sparkle.delay,
              animationDuration: sparkle.duration,
            }}
          />
        ))}
      </div>

      <motion.img
        className="home-cutout"
        src="/images/bg/aeris_cut3.png"
        style={{ y: cutoutY }}
        alt=""
      />

      <motion.h1 className="home-title" style={{ y: textY }}>
        AERIS
      </motion.h1>

      <motion.img
        className="home-card"
        src="/images/bg/aeriscard1.png"
        style={{ y: cardY }}
        alt=""
      />
    </motion.section>
  );
}

export default Home;
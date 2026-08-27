import { useScroll, useTransform, motion } from "motion/react";
import "../assets/styles/home.css";

function Home() {
  const { scrollY } = useScroll();

  // Background moves slowly
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 150]);

  // Cutout moves faster
  const cutoutY = useTransform(scrollY, [0, 1000], [0, -600]);

  // Text moves at another speed
  const textY = useTransform(scrollY, [0, 1000], [0, -100]);
  const cardY = useTransform(scrollY,[0, 1000],[0, -350]);

  return (
    <section id="home" className="home">

      {/* Background */}
      <motion.img
        className="home-background"
        src="/images/bg/aerisbg.jpg"
        style={{ y: backgroundY }}
        alt=""
      />

      {/* Parallax cutout */}
      <motion.img
        className="home-cutout"
        src="/images/bg/aeris_cut3.png"
        style={{ y: cutoutY }}
        alt=""
      />

      {/* Title */}
      <motion.h1
        className="home-title"
        style={{ y: textY }}
      >
        AERIS
      </motion.h1>
      {/* Aeris Card */}
      <motion.img
        className="home-card"
        src="/images/bg/aeriscard1.png"
        style={{ y: cardY }}
        alt=""
      />
    </section>
  );
}

export default Home;
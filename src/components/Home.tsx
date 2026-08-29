import { useScroll, useTransform, motion } from "motion/react";
import "../assets/styles/home.css";

function Home() {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 250]);
  const cutoutY = useTransform(scrollY, [0, 1000], [0, -600]);
  const textY = useTransform(scrollY, [0, 1000], [0, -100]);
  const cardY = useTransform(scrollY, [0, 1000], [0, -350]);

  const homeOpacity = useTransform(scrollY, [0, 300, 520], [1, 0.8, 0]);
  const homeY = useTransform(scrollY, [0, 520], [0, -80]);

  return (
    <motion.section
      id="home"
      className="home"
      style={{ y: homeY, opacity: homeOpacity }}
    >
      <motion.img
        className="home-background"
        src="/images/bg/aerisbg.jpg"
        style={{ y: backgroundY }}
        alt=""
      />

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
        style={{ y: cardY, opacity: homeOpacity }}
        alt=""
      />
    </motion.section>
  );
}

export default Home;
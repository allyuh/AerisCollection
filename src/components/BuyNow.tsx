import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { motion, useScroll, useTransform } from "motion/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "../assets/styles/buy.css";

const collectionImages = [
  "AerisBuddy.png",
  "aeriscard.jpg",
  "AerisFlex.png",
  "Aeris_Bandit.png",
  "Aeris_Guardian.png",
  "Aeris_Marshal.png",
  "Aeris_Melee.png",
  "Aeris_Vandal.png",
];

const carouselImages = [...collectionImages, ...collectionImages];

function BuyNow() {
  const buySectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: buySectionRef,
    offset: ["start end", "center center"],
  });

  const leftPriceX = useTransform(
    scrollYProgress,
    [0, 1],
    [-500, 0]
  );

  const rightPriceX = useTransform(
    scrollYProgress,
    [0, 1],
    [500, 0]
  );

  const priceOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [0, 0.5, 1]
  );

  return (
    <section id="buy" className="buy-section" ref={buySectionRef}>
      <h2 className="buy-title">Buy Now!</h2>

      <div className="buy-carousel">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          loop
          loopAdditionalSlides={collectionImages.length}
          loopPreventsSliding={false}
          watchOverflow={false}
          slidesPerView="auto"
          spaceBetween={24}
          speed={950}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
            waitForTransition: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: false,
          }}
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={`${image}-${index}`}>
              <img
                src={`/images/collections/${image}`}
                alt="Aeris collection item"
                loading="eager"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="buy-prices">
        <motion.div
          className="buy-option"
          style={{
            x: leftPriceX,
            opacity: priceOpacity,
          }}
        >
          <div className="buy-price">
            <img src="/images/bg/vp.png" alt="Valorant Points" />
            <span>2,375</span>
          </div>
          <span className="buy-label">Per weapon</span>
        </motion.div>

        <motion.div
          className="buy-option"
          style={{
            x: rightPriceX,
            opacity: priceOpacity,
          }}
        >
          <div className="buy-price">
            <img src="/images/bg/vp.png" alt="Valorant Points" />
            <span>9,500</span>
          </div>
          <span className="buy-label">Bundle</span>
        </motion.div>
      </div>
    </section>
  );
}

export default BuyNow;
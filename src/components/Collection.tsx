import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import "swiper/css/effect-creative";
import "../assets/styles/collection.css";

type Weapon = {
  name: string;
  image: string;
};

const weapons: Weapon[] = [
  { name: "Melee", image: "/images/collections/Aeris_Melee.png" },
  { name: "Bandit", image: "/images/collections/Aeris_Bandit.png" },
  { name: "Guardian", image: "/images/collections/Aeris_Guardian.png" },
  { name: "Marshal", image: "/images/collections/Aeris_Marshal.png" },
  { name: "Vandal", image: "/images/collections/Aeris_Vandal.png" },
];

const getWeaponButtonClass = (name: string) => {
  return ["Guardian", "Marshal", "Vandal"].includes(name)
    ? "weapon-button weapon-button-large"
    : "weapon-button";
};

const getWeaponSizeClass = (name: string) => {
  if (["Guardian", "Marshal", "Vandal"].includes(name)) return "gun-large";
  if (["Melee", "Bandit"].includes(name)) return "gun-small";
  return "gun-medium";
};


function Collection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const [selectedWeapon, setSelectedWeapon] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState("blue");
  const [cardFlipKey, setCardFlipKey] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);


  const activeWeapon = weapons[selectedWeapon];

  return (
    <div className="collection-content">


      <div className="collection-left">
      <h2>
        <span className="aeris-word">Aeris</span>{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={activeWeapon.name}
            className={
              ["Guardian", "Marshal"].includes(activeWeapon.name)
                ? "weapon-name weapon-name-small"
                : "weapon-name"
            }
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {activeWeapon.name}
          </motion.span>
        </AnimatePresence>
      </h2>

        <div className="vp-price">
          <img src="/images/bg/vp1.png" alt="Valorant Points" />
          <span>2,375</span>
        </div>

        <div className="weapon-buttons">
          {weapons.map((weapon, index) => (
            <button
              key={weapon.name}
              className={`${getWeaponButtonClass(weapon.name)} ${
                selectedWeapon === index ? "active" : ""
              }`}
              onClick={() => {
                swiperRef.current?.slideTo(index);
                setCardFlipKey((currentKey) => currentKey + 1);
              }}
              aria-label={weapon.name}
            >
              <img src={weapon.image} alt={weapon.name} />
            </button>
          ))}
        </div>

        <div className="square-buttons">
          {["blue", "red", "pink", "purp"].map((variant) => (
            <button
              key={variant}
              type="button"
              className={`variant-button ${variant} ${
                selectedVariant === variant ? "selected" : ""
              }`}
              onClick={() => {
                console.log("Selected variant:", variant);
                setSelectedVariant(variant);
              }}
              aria-label={`${variant} variant`}
            />
          ))}
        </div>
      </div>

      <div className="collection-right">
        <div className="carousel-half-circle"></div>
        <div className="collection-card-scene" aria-label="Aeris card">
          <motion.div
            key={cardFlipKey}
            className="collection-card-flip"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 180 }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="collection-card">
              <div className="card-face card-front">
                <div className="card-diamond" />
              </div>

              <div className="card-face card-back">
                <div className="card-diamond" />
              </div>
            </div>
          </motion.div>
        </div>

        <Swiper
          className="weapon-carousel"
          modules={[EffectCreative]}
          effect="creative"
          initialSlide={selectedWeapon}
          speed={650}
          allowTouchMove={isMobile}
          grabCursor={isMobile}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setSelectedWeapon(swiper.realIndex);
          }}
          creativeEffect={{
            limitProgress: 3,

            prev: {
              translate: ["60%", "-55%", 0],
              rotate: [0, 0, 35],
              scale: 0.8,
              opacity: 0,
            },

            next: {
              translate: ["-60%", "55%", 0],
              rotate: [0, 0, -35],
              scale: 0.8,
              opacity: 0,
            },
          }}
        >
          {weapons.map((weapon) => (
            <SwiperSlide key={weapon.name}>
              <img
                className={`selected-gun ${getWeaponSizeClass(weapon.name)}`}
                src={weapon.image}
                alt={weapon.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Collection;
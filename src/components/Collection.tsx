import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
  const [selectedWeapon, setSelectedWeapon] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState("blue");

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
              onClick={() => setSelectedWeapon(index)}
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

        <motion.img
          key={selectedWeapon}
          className={`selected-gun ${getWeaponSizeClass(activeWeapon.name)}`}
          src={activeWeapon.image}
          alt={activeWeapon.name}
          initial={{
            opacity: 0,
            x: -120,
            y: 90,
            rotate: 16,
            scale: 0.88,
          }}
          animate={{
            opacity: 1,
            x: 30,
            y: 0,
            rotate: 10,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}

export default Collection;
import { useState } from "react";
import { motion } from "motion/react";
import "../assets/styles/collection.css";

type Weapon = {
  name: string;
  image: string;
};

const weapons: Weapon[] = [
  {
    name: "Melee",
    image: "/images/collections/Aeris_Melee.png",
  },
  {
    name: "Bandit",
    image: "/images/collections/Aeris_Bandit.png",
  },
  {
    name: "Guardian",
    image: "/images/collections/Aeris_Guardian.png",
  },
  {
    name: "Marshal",
    image: "/images/collections/Aeris_Marshal.png",
  },
  {
    name: "Vandal",
    image: "/images/collections/Aeris_Vandal.png",
  },
];


function Collection() {
  const [selectedWeapon, setSelectedWeapon] = useState(0);

  return (
    <div className="collection-content">

      {/* LEFT SIDE */}
      <div className="collection-left">

        <h2>Aeris {weapons[selectedWeapon].name}</h2>

        <div className="vp-price">
          <img
            src="/images/bg/vp.png"
            alt="Valorant Points"
          />

          <span>2,375</span>
        </div>

        <div className="weapon-buttons">
          {weapons.map((weapon, index) => (
            <button
              key={weapon.name}
              className={`weapon-button ${
                selectedWeapon === index ? "active" : ""
              }`}
              onClick={() => setSelectedWeapon(index)}
              aria-label={weapon.name}
            >
              <img
                src={weapon.image}
                alt={weapon.name}
              />
            </button>
          ))}
        </div>

        <div className="square-buttons">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="collection-right">

        <div className="carousel-half-circle"></div>

        <motion.img
          key={selectedWeapon}
          className="selected-gun"
          src={weapons[selectedWeapon].image}
          alt={weapons[selectedWeapon].name}
          initial={{
            opacity: 0,
            x: 180,
            y: 100,
            rotate: 20,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
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
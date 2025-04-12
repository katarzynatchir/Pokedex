import React from 'react';
import Modal from './Modal';
import PokemonFeatures from './PokemonFeatures';
import heart from '../../icons/heart-white.webp';
import heartRed from '../../icons/heart-red.webp';
import sword from '../../icons/sword.webp';

const PokemonModal = ({
  handleCloseModal,
  name,
  imgUrl,
  height,
  weight,
  experience,
  abilities,
  isOpen,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div className="p-3 flex flex-col sm:flex-row items-center">
        <img src={imgUrl} alt={name} className="w-24 object-contain" />
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">{name}</h2>
          <PokemonFeatures
            height={height}
            weight={weight}
            experience={experience}
            ability={abilities}
          />
        </div>
      </div>

      <div className="absolute top-2 left-2 flex gap-1">
        <img src={heart} className="cursor-pointer w-6 h-6" />
        <img src={heartRed} className="cursor-pointer  w-6 h-6" />
        <img src={sword} className="cursor-pointer w-6 h-6" />
        <span>(0/2)</span>
      </div>

      <button
        onClick={handleCloseModal}
        className="absolute top-1.5 right-1.5 cursor-pointer"
      >
        ❌
      </button>
    </Modal>
  );
};

export default PokemonModal;

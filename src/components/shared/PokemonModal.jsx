import React from 'react';
import Modal from './Modal';
import PokemonFeatures from './PokemonFeatures';
import { useUserData } from '../../hooks/useUserData';
import { LoginContext } from '../../context/LoginContext';
import { useContext } from 'react';
import { RiHeartFill, RiSwordFill } from '@remixicon/react';

const PokemonModal = ({
  handleCloseModal,
  id,
  name,
  imgUrl,
  height,
  weight,
  experience,
  abilities,
  isOpen,
}) => {
  const { userLoggedIn } = useContext(LoginContext);
  const userId = userLoggedIn?.id;
  const { isFavourite, addFavourite, removeFavourite } = useUserData(userId);

  const handleFavouriteClick = () => {
    if (!userId) return;

    if (isFavourite(id)) {
      removeFavourite(id);
    } else {
      addFavourite(id);
    }
  };

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
        {userId &&
          (isFavourite(id) ? (
            <RiHeartFill
              className="cursor-pointer"
              size={24}
              color="red"
              stroke="black"
              onClick={handleFavouriteClick}
            />
          ) : (
            <RiHeartFill
              className="cursor-pointer"
              size={24}
              color="white"
              stroke="black"
              onClick={handleFavouriteClick}
            />
          ))}
        {userId && (
          <>
            <RiSwordFill
              className="cursor-pointer"
              size={24}
              color="white"
              stroke="black"
            />
            <span className="text-sm text-neutral-800 dark:text-neutral-200">
              (0/2)
            </span>
          </>
        )}
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

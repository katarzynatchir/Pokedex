import React, { useState } from 'react';
import PokemonModal from './PokemonModal';
import PokemonFeatures from './PokemonFeatures';
import { capitalize, formatAbilities } from '../../utils/format';

const PokemonCard = ({ pokemon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Nazwa z dużej litery - sprawdź czy jest inny sposób??
  //jeżeli będzie w innych komponentach to wyodrębnić -> utils? - chyba OK

  const pokemonData = {
    id: pokemon.id,
    name: capitalize(pokemon.name),
    imgUrl: pokemon.sprites.front_default,
    height: pokemon.height,
    weight: pokemon.weight,
    experience: pokemon.base_experience,
    abilities: formatAbilities(pokemon.abilities),
  };

  return (
    <>
      {/* Pokemon card */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-white dark:bg-neutral-800 w-[300px] rounded-2xl border border-gray-200 shadow-lg p-4 transition-transform hover:scale-105 cursor-pointer flex flex-col items-center"
      >
        <img
          src={pokemonData.imgUrl}
          alt={pokemonData.name}
          className="w-24 object-contain"
        />
        <h2 className="text-3xl font-bold mb-2">{pokemonData.name}</h2>
        <p>{pokemonData.id}</p>

        <PokemonFeatures
          height={pokemonData.height}
          weight={pokemonData.weight}
          experience={pokemonData.experience}
          ability={pokemonData.abilities}
        />
      </div>

      {/* Pokemon Modal */}
      {/* {isModalOpen && (
        <PokemonModal
          isOpen={isModalOpen}
          handleCloseModal={() => setIsModalOpen(false)}
          {...pokemonData}
        />
      )} TO JEST ŹLE , bo  PokemonModal tworzy się dopiero wtedy, kiedy isModalOpen === true

czyli: jak zamknię modal ( isModalOpen na false) → komponent zostaje odmontowany
i następnym razem znowu tworzy się od zera więc mam problem z modalem zamykanym przy obsłudze np. favourities*/}

      <PokemonModal
        isOpen={isModalOpen}
        handleCloseModal={() => setIsModalOpen(false)}
        {...pokemonData}
      />
    </>
  );
};

export default PokemonCard;

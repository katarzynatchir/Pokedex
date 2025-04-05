import React from 'react';
import { useFetch } from '../../hooks/useFetch';

const PokemonCard = ({ pokemonUrl }) => {
  const { data, isLoading, error } = useFetch(pokemonUrl);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null; // Na wypadek, gdyby data była nadal null

  //Nazwa z dużej litery - sprawdź czy jest inny sposób??
  const capitalizedName =
    data.name.charAt(0).toUpperCase() + data.name.slice(1);

  return (
    <div className="bg-white w-[300px] rounded-2xl border border-gray-200 shadow-lg p-4 transition-transform hover:scale-105 cursor-pointer flex flex-col items-center">
      <img
        src={data.sprites.front_default}
        alt={data.name}
        className="w-24 object-contain"
      />
      <h2 className="text-3xl font-bold mb-2">{capitalizedName}</h2>

      <div className="grid grid-cols-2 gap-2 mt-4 w-full text-center text-sm">
        {/* Kolumna 1 */}
        <div>
          <p className="text-sm text-gray-500">{data.height}</p>
          <p className="font-semibold">Height</p>

          <p className="text-sm text-gray-500 mt-4">{data.weight}</p>
          <p className="font-semibold">Weight</p>
        </div>

        {/* Kolumna 2 */}
        <div>
          <p className="text-sm text-gray-500">{data.base_experience}</p>
          <p className="font-semibold">Base experience</p>

          <p className="text-sm text-gray-500 mt-4">
            {data.abilities.map((ability, idx) => (
              <span key={idx}>
                {ability.ability.name}
                {idx < data.abilities.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
          <p className="font-semibold">Ability</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

import React from 'react';

const PokemonFeatures = ({ height, weight, experience, ability }) => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-4 w-full text-center text-sm">
      {/* Kolumna 1 */}
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{height}</p>
        <p className="font-semibold">Height</p>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          {weight}
        </p>
        <p className="font-semibold">Weight</p>
      </div>

      {/* Kolumna 2 */}
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{experience}</p>
        <p className="font-semibold">Base experience</p>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          {ability}
        </p>
        <p className="font-semibold">Ability</p>
      </div>
    </div>
  );
};

export default PokemonFeatures;

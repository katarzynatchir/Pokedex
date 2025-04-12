import React, { useEffect, useState } from 'react';
const API_URL = 'http://localhost:3000/users';

export const useUserData = userId => {
  //userData – będzie przechowywać dane użytkownika z JSON Servera (czyli całą strukturę: favourites, arena, customPokemons, itd.)
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //Pobieram wszystkie dane użytkownika
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/${userId}`);
        if (!response.ok)
          throw new Error('Nie udało się pobrać danych użytkownika');

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    userId && fetchUserData();
  }, [userId]);

  //tablica z Id ulubionych pokemonów
  const getFavourites = () => {
    return userData?.favourites || [];
  };

  //sprawdzenie czy Pokemon jest już w ulubionych
  const isFavourite = pokemonId => {
    const favs = getFavourites();
    return favs.includes(pokemonId);
    //dostanę odpowiedź true lub false
  };

  //dodawanie pokemona do ulubionych
  const addFavourite = async pokemonId => {
    try {
      if (!userData) return;

      const updatedFavourites = [...(userData.favourites || []), pokemonId];

      const response = await fetch(`${API_URL}/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favourites: updatedFavourites }),
      });

      if (!response.ok) throw new Error('Nie udało się dodać do ulubionych');

      //stan lokalny:
      setUserData(prev => ({ ...prev, favourites: updatedFavourites }));
    } catch (err) {
      console.error('Błąd przy dodawaniu do ulubionych:', err.message);
    }
  };

  return {
    userData,
    isLoading,
    error,
    getFavourites,
    isFavourite,
    addFavourite,
  };
};

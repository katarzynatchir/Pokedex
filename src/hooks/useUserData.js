import React, { useEffect, useState } from 'react';
const API_URL = 'http://localhost:3000/users';

export const useUserData = userId => {
  //userData – będzie przechowywać dane użytkownika z JSON Servera (czyli całą strukturę: favourites, arena, customPokemons, itd.)
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const getFavourites = () => {
    return userData?.favourites || [];
  };

  return { userData, isLoading, error, getFavourites };
};

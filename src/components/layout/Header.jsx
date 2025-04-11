import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import { useSnackbar } from 'notistack';
import ToggleThemeMode from '../shared/ToggleThemeMode';

const Header = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(LoginContext);
  const { enqueueSnackbar } = useSnackbar();

  return (
    <header className="bg-white dark:bg-neutral-800 text-black dark:text-neutral-100 px-12 py-6  shadow-md ">
      <div className="flex justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-pokeblue-500 dark:text-neutral-200 mr-8"
        >
          Pokedex
        </Link>
        <div className="flex justify-end items-center space-x-6 mb-4">
          {userLoggedIn ? (
            <p>Witaj, {userLoggedIn.name}!</p>
          ) : (
            <p>Witaj, nieznajomy!</p>
          )}

          <ToggleThemeMode />
        </div>
      </div>

      {/* TODO: na mobile powinien być hamburger */}
      {/* TODO 2: wynieść NAV do osobnego komponentu, bo zobił się bałagan!! */}
      <nav className="flex flex-wrap gap-3 justify-end">
        <Link
          to="/favourites"
          className="text-white bg-pokeblue-500 hover:bg-pokeblue-700 transition-colors duration-300 px-4 py-2 rounded-sm"
        >
          Ulubione
        </Link>
        <Link
          to="/arena"
          className="text-white bg-pokeblue-500 hover:bg-pokeblue-700 transition-colors duration-300 px-4 py-2 rounded-sm"
        >
          Arena
        </Link>
        <Link
          to="/ranking"
          className="text-white bg-pokeblue-500 hover:bg-pokeblue-700 transition-colors duration-300 px-4 py-2 rounded-sm"
        >
          Ranking
        </Link>
        <Link
          to="/edition"
          className="text-white bg-pokeblue-500 hover:bg-pokeblue-700 transition-colors duration-300 px-4 py-2 rounded-sm"
        >
          Edycja
        </Link>
        <Link
          to="/arena"
          className="text-white bg-pokeblue-500 hover:bg-pokeblue-700 transition-colors duration-300 px-4 py-2 rounded-sm"
        >
          Arena
        </Link>
        {userLoggedIn ? (
          <Link
            to="/"
            className="text-white bg-pokeblue-500 hover:bg-pokeblue-700 transition-colors duration-300 px-4 py-2 rounded-sm"
            onClick={() => {
              setUserLoggedIn(null);
              localStorage.removeItem('loggedUser');
              enqueueSnackbar('Wylogowano pomyślnie', { variant: 'info' });
            }}
          >
            Wyloguj
          </Link>
        ) : (
          <>
            <Link
              to="/register"
              className="text-white bg-pokeblue-500 hover:bg-pokeblue-700 transition-colors duration-300 px-4 py-2 rounded-sm"
            >
              Rejestracja
            </Link>
            <Link
              to="/login"
              className="text-white bg-pokeblue-500 hover:bg-pokeblue-700 transition-colors duration-300 px-4 py-2 rounded-sm"
            >
              Logowanie
            </Link>
          </>
        )}

        {/* PAMIĘTAJ o zablokowaniu przejścia pod adresy dla nizalogowanego użytkownika: Ulubione, Arena, Ranking, Edycja */}
      </nav>
    </header>
  );
};

export default Header;

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-neutral-800 text-black dark:text-neutral-100 px-12 py-6 flex justify-between items-center shadow-md ">
      <Link
        to="/"
        className="text-2xl font-bold text-pokeblue-500 dark:text-neutral-200"
      >
        Pokedex
      </Link>
      <div className="flex flex-col items-end">
        <div className="flex justify-end items-center space-x-6 mb-4">
          {/* tutaj dodać jak zrobię Logowanie: */}
          <p>Witaj, Stefan!</p>
          {/* wynieść do nowego komponentu przełącznik toggleDarkMode i dodać ikony!! */}
          <button
            onClick={toggleDarkMode}
            className="w-12 h-12 bg-neutral-900 dark:bg-white  rounded-full text-white dark:text-black font-semibold text-sm cursor-pointer"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
        <nav className="flex space-x-3">
          <Link
            to="/favourites"
            className="text-white bg-pokeblue-500 px-4 py-2 rounded-sm"
          >
            Ulubione
          </Link>
          <Link
            to="/arena"
            className="text-white bg-pokeblue-500 px-4 py-2 rounded-sm"
          >
            Arena
          </Link>

          {/* tutaj dodać więcej jak zrobię logowanie */}
          {/* Rejestracja, Logowanie -> gdy niezalogowany
          WYloguj -> Gdy zalogowany */}

          {/* PAMIĘTAJ o zablokowaniu przejścia pod adresy dla nizalogowanego użytkownika: Ulubione, Arena, Ranking, Edycja */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

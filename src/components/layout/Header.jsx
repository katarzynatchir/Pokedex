import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-black px-12 py-6 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-pokeblue-500">
        Pokedex
      </Link>

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
      </nav>
    </header>
  );
};

export default Header;

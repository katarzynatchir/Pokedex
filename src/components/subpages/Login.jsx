import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { setUserLoggedIn } = useContext(LoginContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    try {
      const url = `http://localhost:3000/users?email=${data.email}`;
      console.log('data', data);
      const response = await fetch(url);
      const users = await response.json();
      console.log('users', users);

      //dostaję tablicę z obiektem i muszę wyciągnąć pierwszy obiekt do porównania:
      const user = users[0];

      console.log('user', user);
      if (!user) {
        enqueueSnackbar('Użytkownik nie istnieje.', { variant: 'error' });
        return;
      }

      if (user.password !== data.password) {
        enqueueSnackbar('Podano nieprawidłowe hasło.', {
          variant: 'error',
        });
        return;
      }

      enqueueSnackbar(`Witaj ponownie, ${user.name}!`, { variant: 'success' });

      setUserLoggedIn(user); //zapisuję usera do contextu - dzięki temu pobiorę jego imię do headera
      console.log(user);

      localStorage.setItem('loggedUser', JSON.stringify(user));

      navigate('/');
    } catch (error) {
      console.log(error);
      enqueueSnackbar('Coś poszło nie tak.', { variant: 'error' });
    }
  };

  return (
    <>
      <h1 className="text-xl font-bold text-pokeblue-500 dark:text-neutral-300 uppercase mb-4">
        Logowanie
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-2xs max-w-9/12">
        <div className="w-full my-4">
          <input
            {...register('email')}
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2"
          />
        </div>
        <div className="w-full my-4">
          <input
            {...register('password')}
            type="password"
            placeholder="Hasło"
            className="w-full border rounded p-2"
          />
        </div>
        <button
          type="submit"
          className=" text-white p-2 rounded w-full bg-pokeblue-500 hover:bg-pokeblue-700 transition-colors duration-300 cursor-pointer"
        >
          Zaloguj
        </button>
      </form>
    </>
  );
};

export default Login;

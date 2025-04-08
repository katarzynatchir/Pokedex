import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

// TODO zrobić nowy folder validate i tam przeniść schema
const schema = z
  .object({
    name: z.string().min(3, 'Imię musi mieć minimum 3 znaki'),
    email: z.string().email('Niepoprawny adres email'),
    password: z
      .string()
      .min(8, 'Hasło musi mieć co najmniej 8 znaków')
      .regex(/[A-Z]/, 'Hasło musi zawierać wielką literę')
      .regex(/\d/, 'Hasło musi zawierać cyfrę')
      .regex(/[^a-zA-Z0-9]/, 'Hasło musi zawierać znak specjalny'),
    repeatPassword: z.string(),
  })
  .refine(data => data.password === data.repeatPassword, {
    message: 'Hasła się nie zgadzają',
    path: ['repeatPassword'],
  });

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async data => {
    try {
      //czy użytknik istnieje?
      const response = await fetch(
        `http://localhost:3000/users?email=${data.email}`
      );
      const existingUsers = await response.json();
      console.log('existingUsers', existingUsers);

      if (existingUsers.length > 0) {
        enqueueSnackbar('Użytkownik o podanym emailu już istnieje', {
          variant: 'error',
        });
        return;
      }

      const newUser = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const createUser = await fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (!createUser.ok) {
        throw new Error('Błąd przy rejestracji użytkownika');
      }

      enqueueSnackbar('Zarejestrowano pomyślnie!', { variant: 'success' });

      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Coś poszło nie tak 😓', { variant: 'error' });
    }
  };

  return (
    <>
      <h1 className="text-xl font-bold text-pokeblue-500 dark:text-neutral-300 uppercase mb-4">
        Rejestracja
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2xs max-w-9/12 mx-auto mt-8 space-y-4"
      >
        <div className="w-full">
          <input
            {...register('name')}
            type="text"
            placeholder="Imię"
            className="w-full border p-2 rounded"
          />
          {errors.name?.message && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="w-full">
          <input
            {...register('email')}
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          {errors.email?.message && (
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          )}
        </div>
        <div className="w-full">
          <input
            {...register('password')}
            type="password"
            placeholder="Hasło"
            className="w-full border p-2 rounded"
          />
          {errors.password?.message && (
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          )}
        </div>
        <div className="w-full">
          <input
            {...register('repeatPassword')}
            type="password"
            placeholder="Powtórz hasło"
            className="w-full border p-2 rounded"
          />
          {errors.repeatPassword?.message && (
            <p className="text-red-500 text-sm">
              {errors.repeatPassword?.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className=" text-white p-2 rounded w-full bg-pokeblue-500 hover:bg-pokeblue-700 transition-colors duration-300 cursor-pointer"
        >
          Zarejestruj się
        </button>
      </form>
    </>
  );
};
export default Register;

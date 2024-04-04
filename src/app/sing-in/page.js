'use client'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState('jose@jose.com');
  const [password, setPassword] = useState('123456');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter()
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem('user', true);
      //setEmail('');
     // setPassword('');
      if (res.user) {
        router.push('/usuario');
      } else {
        setError('Usuario no registrado');
      }
    } catch (error) {
      console.error('Usuario no registrado');
      setError('Usuario no registrado');
    }
  };

  return (
    <main className="background-image flex min-h-screen flex-col items-center justify-center p-12 bg-gray-100 dark:bg-gray-700">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg neumorphism">
        <h2 className="titulo">
          <span className="orange">Iniciar</span>
          <span className="blue">Sesion</span>
        </h2>
        {error && (
          <div className="advertencia">
            {error}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input:focus w-full"
                placeholder="Email address"
              />
            </div>
            <div className=" pt-4">

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input:focus w-full"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex justify-evenly items-center">
            <Link href="/" legacyBehavior>
              <a className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 hover:text-white bg-indigo-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 neumorphism">
                Atras
              </a>
            </Link>
            <button
              type="submit"
              className=" flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 hover:text-white bg-indigo-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 neumorphism"
            >
              Iniciar
            </button>

          </div>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
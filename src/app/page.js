


import Link from "next/link";

export default function Home() {
  return (
    <main className="background-image flex min-h-screen flex-col items-center justify-center p-12 bg-gray-100 dark:bg-gray-700">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg neumorphism">
        <h2 className="titulo">
          <span className="orange">My</span>
          <span className="blue">Company</span>
        </h2>
        <div className="flex justify-center">
          <div className="neumorphism rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
            <Link href="/sing-in" legacyBehavior>
              <a className="dark:text-gray-800 dark:hover:text-gray-200 text-center block py-2 px-6 text-sm bg-gray-300 hover:bg-gray-400 text-white font-semibold transition duration-300 ease-in-out">
              Iniciar Sesion
              </a>
            </Link>
            <Link href="/sing-up" legacyBehavior>
              <a className="block py-2 px-6 text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-500 dark:hover:text-gray-800 dark:text-gray-200 font-semibold transition duration-300 ease-in-out">
              Crear Cuenta
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center text-black dark:text-black py-4">
        Hecho por JOSE CHIRINOS
      </div>
    </main>
  );
}
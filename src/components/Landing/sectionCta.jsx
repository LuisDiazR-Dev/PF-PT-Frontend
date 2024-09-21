import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DetailPlansPanel from "../DashboardAdmin/Suscriptions/DetailPlansPanel";

const SectionCta = () => {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [rute, setRute] = useState("/login");

  // Verificar si el usuario está logueado y su rol según el email al cargar el componente
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") === "true"; // Verifica si el usuario está logueado
    const email = localStorage.getItem("email"); // Obtiene el email desde localStorage

    if (loggedIn && email) {
      if (email.endsWith("@radmin.com")) {
        setRute("/tenant"); // Si el email contiene @radmin.com, redirige a /tenant
      } else {
        setRute("/dashboard-admin"); // De lo contrario, redirige a /dashboard-admin
      }
    } else {
      setRute("/login"); // Si no está logueado, redirige a /login
    }
  }, []);

  const handleOpenPanel = () => {
    setPanelOpen(true);
  };

  const handleClosePanel = () => {
    setPanelOpen(false);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Nos enfocamos en el potencial de la administración moderna de
            condominios.
          </h2>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            En nuestra app, proporcionamos a los administradores las
            herramientas necesarias para gestionar de manera eficiente la base
            de datos de propietarios, enviar notificaciones, cobros y mucho más,
            impulsando así la organización y el bienestar comunitario.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
            <Link
              to={rute}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 "
            >
              Empieza a Administrar
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>

            <div>
              <button
                onClick={handleOpenPanel}
                className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Mostrar Planes
              </button>
              {isPanelOpen && (
                <DetailPlansPanel
                  isOpen={isPanelOpen}
                  onClose={handleClosePanel}
                />
              )}
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl border-none"
            src="https://www.youtube.com/embed/BJIBdEl9pIE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SectionCta;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import DetailPlansPanel from "../DashboardAdmin/Suscriptions/DetailPlansPanel";

// const SectionCta = () => {
//   const [isPanelOpen, setPanelOpen] = useState(false);
//   const [rute, setRute] = useState("/login");

//   // Verificar si el usuario está logueado al cargar el componente
//   useEffect(() => {
//     const loggedIn = localStorage.getItem("loggedIn") === "true"; // Verifica si el usuario está logueado
//     if (loggedIn) {
//       setRute("/dashboard-admin"); // Cambia la ruta a /dashboard-admin si está logueado
//     } else {
//       setRute("/login"); // De lo contrario, establece la ruta a /login
//     }
//   }, []);

//   const handleOpenPanel = () => {
//     setPanelOpen(true);
//   };

//   const handleClosePanel = () => {
//     setPanelOpen(false);
//   };

//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
//         <div className="flex flex-col justify-center">
//           <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//             Nos enfocamos en el potencial de la administración moderna de
//             condominios.
//           </h2>
//           <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
//             En nuestra app, proporcionamos a los administradores las
//             herramientas necesarias para gestionar de manera eficiente la base
//             de datos de propietarios, enviar notificaciones, cobros y mucho más,
//             impulsando así la organización y el bienestar comunitario.
//           </p>
//           <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
//             <Link
//               to={rute}
//               className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 "
//             >
//               Empiezas a Administrar
//               <svg
//                 className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 5h12m0 0L9 1m4 4L9 9"
//                 />
//               </svg>
//             </Link>

//             <div>
//               <button
//                 onClick={handleOpenPanel}
//                 className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//               >
//                 Mostrar Planes
//               </button>
//               {isPanelOpen && (
//                 <DetailPlansPanel
//                   isOpen={isPanelOpen}
//                   onClose={handleClosePanel}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//         <div>
//           <iframe
//             className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl border-none"
//             src="https://www.youtube.com/embed/BJIBdEl9pIE"
//             title="YouTube video player"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionCta;

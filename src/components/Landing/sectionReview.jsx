import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCondominiums } from "../../Redux/features/getCondominium/condominiumSlice";

const SectionReview = () => {
  const dispatch = useDispatch();
  const condominiums = useSelector((state) => state.condominiums.condominiums);
  const status = useSelector((state) => state.condominiums.status);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCondominiums());
    }
  }, [dispatch, status]);

  const activeCondominiums = condominiums.filter((condo) => condo.isActive);
  const cardsPerPage = 1; // Mostrar un solo condominio por página
  const totalPages = Math.ceil(activeCondominiums.length / cardsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  if (activeCondominiums.length === 0) {
    return <div>No hay condominios activos para mostrar.</div>;
  }

  return (
    <div className="relative w-full bg-white dark:bg-gray-900">
      {/* Descripción */}
      <p className="p-10 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-5xl dark:text-white text-center">
        Descubre los condominios que se gestionan desde nuestra aplicación web.
      </p>

      <div className="relative flex items-center justify-center overflow-hidden rounded-lg shadow-xl bg-gray-100 dark:bg-gray-800 max-h-96 min-h-[24rem]">
        {/* Elementos del carrusel */}
        {activeCondominiums
          .slice(currentIndex * cardsPerPage, (currentIndex + 1) * cardsPerPage)
          .map((condo) => (
            <div
              key={condo.id}
              className="relative w-full h-full flex items-center justify-center"
              data-carousel-item
            >
              <img
                src={condo.imageUrl}
                alt={condo.condominium_name}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
                <img
                  src={condo.condominium_logo || "/default-logo.png"}
                  alt="logo"
                  className="w-36 h-36 mb-4 object-contain"
                />
                <h2 className="text-2xl font-semibold text-white">
                  {condo.condominium_name}
                </h2>
                <p className="text-xl text-gray-300">
                  {condo.condominium_country}
                </p>
              </div>
            </div>
          ))}

        {/* Número de página */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-4">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center mr-80 h-20 w-20 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Previous"
          >
            {currentIndex > 0 ? (
              <span className="text-xl">{currentIndex}</span>
            ) : (
              <span className="text-xl">1</span>
            )}
          </button>

          <button
            onClick={handleNext}
            className="flex items-center justify-center h-20 w-20 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Next"
          >
            {currentIndex < totalPages - 1 ? (
              <span className="text-xl">{currentIndex + 2}</span>
            ) : (
              <span className="text-xl">{totalPages}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionReview;

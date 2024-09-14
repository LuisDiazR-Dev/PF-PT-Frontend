import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartments } from "../../Redux/features/getApartments/apartmentsSlice";

const ViewApartmentsTenant = ({ setActiveOption }) => {
  const dispatch = useDispatch();
  const { apartments, status, error } = useSelector(
    (state) => state.apartments
  );
  const condominiums = useSelector((state) => state.condominiums.condominiums);

  const [localApartments, setLocalApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const apartmentsPerPage = 10; // Mostramos 10 apartamentos por página

  useEffect(() => {
    dispatch(fetchApartments());
    setActiveOption("ViewApartmentsTenant");
  }, [dispatch, setActiveOption]);

  useEffect(() => {
    setLocalApartments(apartments.filter((apt) => apt.isActive));
  }, [apartments]);

  // Paginación: Calculamos los índices para la página actual
  const indexOfLastApartment = currentPage * apartmentsPerPage;
  const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage;
  const currentApartments = localApartments.slice(
    indexOfFirstApartment,
    indexOfLastApartment
  );

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (status === "loading") {
    return <p>Cargando apartamentos...</p>;
  }

  if (status === "failed") {
    return <p>Error al cargar apartamentos: {error}</p>;
  }

  return (
    <section className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <h2 className="text-lg font-bold mb-4">Apartamentos Activos</h2>

      {currentApartments.length === 0 ? (
        <p>No hay apartamentos activos disponibles.</p>
      ) : (
        <>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Condominio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Número de la Puerta
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Tamaño (m²)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentApartments.map((apartment) => {
                const condo = condominiums.find(
                  (condo) => condo.id === apartment.CondominiumId
                );
                const condoName = condo
                  ? condo.condominium_name
                  : "No encontrado";

                return (
                  <tr key={apartment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{condoName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {apartment.numberApartment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {apartment.size} m²
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {apartment.status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Paginación */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 text-white"
              } rounded`}
            >
              Anterior
            </button>
            <span>Página {currentPage}</span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastApartment >= localApartments.length}
              className={`px-4 py-2 ${
                indexOfLastApartment >= localApartments.length
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 text-white"
              } rounded`}
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </section>
  );
};

ViewApartmentsTenant.propTypes = {
  setActiveOption: PropTypes.func.isRequired,
};

export default ViewApartmentsTenant;

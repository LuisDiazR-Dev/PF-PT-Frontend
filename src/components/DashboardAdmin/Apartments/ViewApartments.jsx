import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartments } from "../../../Redux/features/getApartments/apartmentsSlice";

const ViewApartments = ({ setActiveOption }) => {
  const dispatch = useDispatch();
  const selectedCondoId = useSelector(
    (state) => state.setCondoToAdmin.selectedCondoId
  );

  useEffect(() => {
    dispatch(fetchApartments());
    setActiveOption("ViewApartments");
  }, [dispatch, setActiveOption]);

  const { apartments, status, error } = useSelector(
    (state) => state.apartments
  );

  console.log("Selected Condo ID:", selectedCondoId);
  console.log("Apartments:", apartments);

  if (status === "loading") {
    return <p>Cargando apartamentos...</p>;
  }

  if (status === "failed") {
    return <p>Error al cargar apartamentos: {error}</p>;
  }

  const filteredApartments = apartments.filter(
    (apartment) => Number(apartment.CondominiumId) === Number(selectedCondoId)
  );

  return (
    <section className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <h2 className="text-lg font-bold mb-4">Lista de Apartamentos</h2>

      {filteredApartments.length === 0 ? (
        <p>No hay apartamentos disponibles para este condominio.</p>
      ) : (
        <ul className="space-y-2">
          {filteredApartments.map((apartment) => (
            <li key={apartment.id} className="p-2 bg-white rounded shadow">
              <h3 className="text-md font-semibold">
                {apartment.numberApartment}
                <img
                  src={apartment.imageUrl}
                  alt={`Imagen de ${apartment.numberApartment}`}
                  className="w-32 h-32 mt-2"
                />
              </h3>
              <p>Tamaño: {apartment.size} m²</p>
              <p>Estado: {apartment.status}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

ViewApartments.propTypes = {
  setActiveOption: PropTypes.func.isRequired,
};

export default ViewApartments;

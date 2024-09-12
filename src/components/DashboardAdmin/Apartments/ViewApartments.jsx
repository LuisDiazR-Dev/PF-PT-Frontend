import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartments } from "../../../Redux/features/getApartments/apartmentsSlice";
import { updateApartment } from "../../../Redux/features/getApartments/updateApartmentSlice";
import { deleteApartment } from "../../../Redux/features/getApartments/deleteApartmentSlice";

const ViewApartments = ({ setActiveOption }) => {
  const dispatch = useDispatch();
  const selectedCondoId = useSelector(
    (state) => state.setCondoToAdmin.selectedCondoId
  );
  const condominiums = useSelector((state) => state.condominiums.condominiums);
  const { apartments, status, error } = useSelector(
    (state) => state.apartments
  );
  const [filter, setFilter] = useState("");
  const [localApartments, setLocalApartments] = useState([]);

  const selectedCondo = condominiums.find(
    (condo) => condo.id === selectedCondoId
  );
  const condoName = selectedCondo
    ? selectedCondo.condominium_name
    : "Condominio no encontrado";

  useEffect(() => {
    dispatch(fetchApartments());
    setActiveOption("ViewApartments");
  }, [dispatch, setActiveOption]);

  useEffect(() => {
    setLocalApartments(apartments);
  }, [apartments]);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteApartment(id)).unwrap();
      dispatch(fetchApartments());
    } catch (error) {
      console.error("Error al eliminar el apartamento:", error);
    }
  };

  const handleUpdate = (id, status) => {
    const apartment = localApartments.find((apt) => apt.id === id);
    const updatedApartment = {
      ...apartment,
      status,
    };

    setLocalApartments(
      localApartments.map((apt) => (apt.id === id ? { ...apt, status } : apt))
    );
    dispatch(updateApartment({ id, apartmentData: updatedApartment }))
      .then(() => {
        console.log("Apartamento actualizado con éxito");
      })
      .catch((error) => {
        console.error("Error al actualizar el apartamento:", error);
      });
  };

  const filteredApartments = localApartments
    .filter(
      (apartment) => Number(apartment.CondominiumId) === Number(selectedCondoId)
    )
    .filter((apartment) =>
      apartment.numberApartment.toLowerCase().includes(filter.toLowerCase())
    );

  if (status === "loading") {
    return <p>Cargando apartamentos...</p>;
  }

  if (status === "failed") {
    return <p>Error al cargar apartamentos: {error}</p>;
  }

  return (
    <section className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <h2 className="text-lg font-bold mb-4">
        Apartamentos del Condominio {condoName}
      </h2>

      <input
        type="text"
        placeholder="Buscar por número de puerta"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      {filteredApartments.length === 0 ? (
        <p>No hay apartamentos disponibles para este condominio.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Número de la Puerta
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tamaño (m²)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Disponibilidad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredApartments.map((apartment) => (
              <tr key={apartment.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {apartment.numberApartment}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {apartment.size} m²
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={apartment.status}
                    onChange={(e) => handleUpdate(apartment.id, e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="Ocupado">Ocupado</option>
                    <option value="Reservado">Reservado</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(apartment.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

ViewApartments.propTypes = {
  setActiveOption: PropTypes.func.isRequired,
};

export default ViewApartments;

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCondominium } from "../../../Redux/features/getCondominium/updateCondominiumSlice";
import { deactivateCondominium } from "../../../Redux/features/getCondominium/deleteCondoSlice";
import { getCondoById } from "../../../Redux/features/getCondominium/getCondoById";

const DetailCondominium = ({ selectedCondoId }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    condominium_name: "",
    condominium_country: "",
    condominium_state: "",
    condominium_logo: "",
    condominiums_apartments_number: "",
    imageUrl: "",
  });

  const {
    condominium,
    loading: condoLoading,
    error: condoError,
  } = useSelector((state) => state.getCondoById);
  const { loading: updateLoading, error: updateError } = useSelector(
    (state) => state.updateCondominium
  );
  const { loading: deactivateLoading, error: deactivateError } = useSelector(
    (state) => state.deactivateCondominium
  );

  useEffect(() => {
    // Disparar la acción para obtener los detalles del condominio por ID
    if (selectedCondoId) {
      dispatch(getCondoById(selectedCondoId));
    } else {
      console.error("ID del condominio no disponible");
    }
  }, [dispatch, selectedCondoId]);

  useEffect(() => {
    if (condominium) {
      setFormData({
        condominium_name: condominium.condominium_name,
        condominium_country: condominium.condominium_country,
        condominium_state: condominium.condominium_state,
        condominium_logo: condominium.condominium_logo,
        condominiums_apartments_number:
          condominium.condominiums_apartments_number,
        imageUrl: condominium.imageUrl,
      });
    }
  }, [condominium]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (selectedCondoId) {
      try {
        await dispatch(
          updateCondominium({ id: selectedCondoId, updatedData: formData })
        ).unwrap();
        setIsEditing(false);
      } catch (error) {
        console.error("Error en la actualización del condominio:", error);
      }
    }
  };

  const handleDeactivate = async () => {
    if (selectedCondoId) {
      try {
        await dispatch(deactivateCondominium(selectedCondoId)).unwrap();
      } catch (error) {
        console.error("Error al desactivar el condominio:", error);
      }
    }
  };

  if (condoLoading) {
    return <div>Cargando...</div>;
  }

  if (condoError || !condominium) {
    return <div>Error al obtener la información del condominio</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <div className="bg-gray-800 p-4 text-white flex justify-between items-center"></div>
      <div className="flex items-center mb-6">
        <img
          src={condominium.condominium_logo}
          alt="Logo del Condominio"
          className="w-20 h-20 object-cover rounded-full mr-4"
        />
        <h2 className="text-3xl font-bold">{condominium.condominium_name}</h2>
      </div>
      <div className="mb-6">
        <img
          src={condominium.imageUrl}
          alt="Imagen del Condominio"
          className="w-full h-60 object-cover rounded-lg"
        />
      </div>
      <div className="space-y-4">
        {!isEditing ? (
          <div>
            <p>
              <strong>País del Condominio:</strong>{" "}
              {condominium.condominium_country}
            </p>
            <p>
              <strong>Estado del Condominio:</strong>{" "}
              {condominium.condominium_state}
            </p>
            <p>
              <strong>Número de Apartamentos:</strong>{" "}
              {condominium.condominiums_apartments_number}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Actualizar Condominio
            </button>
            <button
              onClick={handleDeactivate}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4"
            >
              Desactivar Condominio
            </button>
            {deactivateLoading && <p>Desactivando...</p>}
            {deactivateError && (
              <p className="text-red-500">Error: {deactivateError}</p>
            )}
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <label className="block">
              Nombre del Condominio
              <input
                type="text"
                name="condominium_name"
                value={formData.condominium_name}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              />
            </label>
            <label className="block">
              País
              <input
                type="text"
                name="condominium_country"
                value={formData.condominium_country}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              />
            </label>
            <label className="block">
              Estado
              <input
                type="text"
                name="condominium_state"
                value={formData.condominium_state}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              />
            </label>
            <label className="block">
              Logo del Condominio
              <input
                type="text"
                name="condominium_logo"
                value={formData.condominium_logo}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              />
            </label>
            <label className="block">
              Imagen del Condominio
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              />
            </label>
            <label className="block">
              Número de Apartamentos
              <input
                type="number"
                name="condominiums_apartments_number"
                value={formData.condominiums_apartments_number}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-400 rounded-md w-full"
              />
            </label>
            <button
              onClick={handleUpdate}
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Guardar Cambios
            </button>
            {updateLoading && <p>Cargando...</p>}
            {updateError && (
              <p className="text-red-500">Error: {updateError}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
DetailCondominium.propTypes = {
  selectedCondoId: PropTypes.number.isRequired,
};

export default DetailCondominium;

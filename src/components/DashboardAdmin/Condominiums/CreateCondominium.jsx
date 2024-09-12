import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCondominium } from "../../../Redux/features/getCondominium/createCondominiumSlice";
import { fetchCondominiums } from "../../../Redux/features/getCondominium/condominiumSlice";

const CreateCondominium = ({ handleItemClick }) => {
  const dispatch = useDispatch();
  const { condominiums } = useSelector((state) => state.condominiums);

  const [formData, setFormData] = useState({
    isActive: true,
    condominium_name: "",
    condominium_country: "",
    condominium_state: "",
    condominium_logo: "",
    condominiums_apartments_number: "",
    imageUrl: "",
    AdminId: localStorage.getItem("id"),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(fetchCondominiums());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError(null);
    const nameExists = condominiums.some(
      (condominium) =>
        condominium.condominium_name === formData.condominium_name
    );

    if (nameExists) {
      setError("El nombre del condominio ya existe.");
      setIsSubmitting(false);
      return;
    }

    try {
      await dispatch(createCondominium(formData)).unwrap();
      handleItemClick("ViewCondominiums");
    } catch (error) {
      console.error("Error en la creación del condominio:", error);
      setError("Hubo un error al crear el condominio.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Crear Condominio</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-100 text-red-800 p-2 rounded-md">{error}</div>
        )}
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
          Número de Apartamentos
          <input
            type="number"
            name="condominiums_apartments_number"
            value={formData.condominiums_apartments_number}
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
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
        >
          Crear Condominio
        </button>
      </form>
    </div>
  );
};

CreateCondominium.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
};

export default CreateCondominium;

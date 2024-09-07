//
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCondominium } from "../../Redux/features/getCondominium/createCondominiumSlice";

const CreateCondominium = ({ handleItemClick }) => {
  const dispatch = useDispatch();

  const AdminId = localStorage.getItem("id");

  const [formData, setFormData] = useState({
    isActive: true,
    condominium_name: "",
    condominium_country: "",
    condominium_state: "",
    condominium_logo: "",
    condominiums_apartments_number: "",
    imageUrl: "",
    AdminId,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const action = await dispatch(createCondominium(formData)).unwrap();
      // Guardar datos en localStorage
      localStorage.setItem("createdCondominium", JSON.stringify(action));
      console.log("Datos guardados en localStorage:", action);
      // Redirigir a la lista de condominios
      window.alert("condominio creado");
      handleItemClick("ViewCondominiums");
    } catch (error) {
      console.error("Error en la creación del condominio:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto  p-6 bg-gray-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Crear Condominio</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        >
          Crear Condominio
        </button>
      </form>
    </div>
  );
};

export default CreateCondominium;

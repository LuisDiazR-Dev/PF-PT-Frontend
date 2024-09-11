import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      return ""; // No hay imagen seleccionada, devolver cadena vacía
    }

    setUploading(true); // Mostrar estado de carga
    const formDataImage = new FormData();
    formDataImage.append("file", selectedImage);
    formDataImage.append("upload_preset", "proyectofinal"); // Nombre del upload_preset de Cloudinary

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dcyr5qkhg/image/upload", // URL de Cloudinary
        formDataImage
      );
      return response.data.secure_url; // Devolver la URL de la imagen subida
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      return ""; // Devolver cadena vacía en caso de error
    } finally {
      setUploading(false); // Finalizar estado de carga
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Subir la imagen si se ha seleccionado
    let imageUrl = formData.imageUrl;
    if (selectedImage) {
      imageUrl = await uploadImage(); // Obtener la URL de la imagen subida
    }

    // Actualizar formData con la URL de la imagen subida
    const updatedFormData = { ...formData, imageUrl };

    try {
      const action = await dispatch(createCondominium(updatedFormData)).unwrap();
      // Guardar los datos en localStorage
      localStorage.setItem("createdCondominium", JSON.stringify(action));
      console.log("Datos guardados en localStorage:", action);
      window.alert("Condominio creado");
      handleItemClick("ViewCondominiums");
    } catch (error) {
      console.error("Error en la creación del condominio:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-300 shadow-lg rounded-lg">
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
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-2 border border-gray-400 rounded-md w-full"
          />
        </label>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {uploading ? "Subiendo..." : "Crear Condominio"}
        </button>
      </form>
    </div>
  );
};

export default CreateCondominium;

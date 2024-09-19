import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCondominium } from "../../../Redux/features/getCondominium/createCondominiumSlice";
import axios from "axios"; // Para manejar la subida de imágenes

const CreateCondominium = ({ handleItemClick }) => {
  const dispatch = useDispatch();
  const adminId = localStorage.getItem("id");

  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    isActive: true,
    condominium_name: "",
    condominium_country: "",
    condominium_state: "",
    condominium_logo: "", // URL del logo del condominio
    condominiums_apartments_number: "",
    imageUrl: "", // URL de la imagen del condominio
    AdminId: adminId,
  });

  // Estado para manejar las imágenes seleccionadas y el proceso de subida
  const [selectedImage, setSelectedImage] = useState(null); // Imagen del condominio
  const [selectedLogo, setSelectedLogo] = useState(null); // Logo del condominio
  const [uploading, setUploading] = useState(false);

  // Maneja los cambios en los campos del formulario
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Maneja la selección de la imagen del condominio
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // Maneja la selección del logo del condominio
  const handleLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedLogo(e.target.files[0]);
    }
  };

  // Función para subir una imagen a Cloudinary
  const uploadImage = async (image) => {
    if (!image) {
      return ""; // No hay imagen seleccionada, devuelve cadena vacía
    }

    setUploading(true);
    const formDataImage = new FormData();
    formDataImage.append("file", image);
    formDataImage.append("upload_preset", "proyectofinal"); // Nombre del preset en Cloudinary

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dr7os81tx/image/upload`, // URL de Cloudinary
        formDataImage
      );
      return response.data.secure_url; // Retorna la URL segura de la imagen
    } catch (error) {
      console.error("Error uploading image:", error);
      return ""; // Devuelve cadena vacía en caso de error
    } finally {
      setUploading(false);
    }
  };

  // Maneja la creación del condominio
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Subir el logo si se ha seleccionado
    let condominium_logo = formData.condominium_logo;
    if (selectedLogo) {
      condominium_logo = await uploadImage(selectedLogo);
    }

    // Subir la imagen del condominio si se ha seleccionado
    let imageUrl = formData.imageUrl;
    if (selectedImage) {
      imageUrl = await uploadImage(selectedImage);
    }

    // Actualiza los datos del formulario con las URLs de las imágenes
    const updatedFormData = { ...formData, condominium_logo, imageUrl };

    try {
      const action = await dispatch(
        createCondominium(updatedFormData)
      ).unwrap();
      console.log("Datos guardados en localStorage:", action);
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
        {/* Campo para subir el logo del condominio */}
        <label className="block">
          Logo del Condominio
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoChange} // Manejador de cambio para seleccionar el logo
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
        {/* Campo para subir la imagen del condominio */}
        <label className="block">
          Imagen del Condominio
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange} // Manejador de cambio para seleccionar la imagen
            className="mt-1 p-2 border border-gray-400 rounded-md w-full"
          />
        </label>
        {uploading && <p>Subiendo imágenes...</p>}
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

CreateCondominium.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
};

export default CreateCondominium;

// import PropTypes from "prop-types";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createCondominium } from "../../../Redux/features/getCondominium/createCondominiumSlice";

// const CreateCondominium = ({ handleItemClick }) => {
//   const dispatch = useDispatch();

//   const adminId = localStorage.getItem("id");

//   const [formData, setFormData] = useState({
//     isActive: true,
//     condominium_name: "",
//     condominium_country: "",
//     condominium_state: "",
//     condominium_logo: "",
//     condominiums_apartments_number: "",
//     imageUrl: "",
//     AdminId: adminId,
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const action = await dispatch(createCondominium(formData)).unwrap();
//       console.log("Datos guardados en localStorage:", action);
//       handleItemClick("ViewCondominiums");
//     } catch (error) {
//       console.error("Error en la creación del condominio:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto  p-6 bg-gray-300 shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center">Crear Condominio</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <label className="block">
//           Nombre del Condominio
//           <input
//             type="text"
//             name="condominium_name"
//             value={formData.condominium_name}
//             onChange={handleInputChange}
//             className="mt-1 p-2 border border-gray-400 rounded-md w-full"
//           />
//         </label>
//         <label className="block">
//           País
//           <input
//             type="text"
//             name="condominium_country"
//             value={formData.condominium_country}
//             onChange={handleInputChange}
//             className="mt-1 p-2 border border-gray-400 rounded-md w-full"
//           />
//         </label>
//         <label className="block">
//           Estado
//           <input
//             type="text"
//             name="condominium_state"
//             value={formData.condominium_state}
//             onChange={handleInputChange}
//             className="mt-1 p-2 border border-gray-400 rounded-md w-full"
//           />
//         </label>
//         <label className="block">
//           Logo del Condominio
//           <input
//             type="text"
//             name="condominium_logo"
//             value={formData.condominium_logo}
//             onChange={handleInputChange}
//             className="mt-1 p-2 border border-gray-400 rounded-md w-full"
//           />
//         </label>
//         <label className="block">
//           Número de Apartamentos
//           <input
//             type="number"
//             name="condominiums_apartments_number"
//             value={formData.condominiums_apartments_number}
//             onChange={handleInputChange}
//             className="mt-1 p-2 border border-gray-400 rounded-md w-full"
//           />
//         </label>
//         <label className="block">
//           Imagen del Condominio
//           <input
//             type="text"
//             name="imageUrl"
//             value={formData.imageUrl}
//             onChange={handleInputChange}
//             className="mt-1 p-2 border border-gray-400 rounded-md w-full"
//           />
//         </label>
//         <button
//           type="submit"
//           className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Crear Condominio
//         </button>
//       </form>
//     </div>
//   );
// };

// CreateCondominium.propTypes = {
//   handleItemClick: PropTypes.func.isRequired,
// };

// export default CreateCondominium;

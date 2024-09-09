import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { registerAdmin } from "../Redux/features/register/createAdminSlice";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.createAdmin);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    imageUrl: "",
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
      return ""; // No image selected, return empty string
    }

    setUploading(true);
    const formDataImage = new FormData();
    formDataImage.append('file', selectedImage);
    formDataImage.append('upload_preset', 'proyectofinal'); // nombre del upload_preset

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dcyr5qkhg/image/upload`, // nombre de cloudinary
        formDataImage
      );
      return response.data.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      return ""; // Return empty string on error
    } finally {
      setUploading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    let imageUrl = formData.imageUrl;
    if (selectedImage) {
      // If a new image is selected, upload it and get the URL
      imageUrl = await uploadImage();
    }

    // Update the formData with the new image URL
    const updatedFormData = { ...formData, imageUrl };

    try {
      const response = await dispatch(registerAdmin(updatedFormData)).unwrap();
      localStorage.setItem("username", response.username || "");
      localStorage.setItem("email", response.email || "");
      localStorage.setItem("imageUrl", response.imageUrl || "");
      localStorage.setItem(
        "isActive",
        response.isActive ? response.isActive.toString() : "false"
      );
      localStorage.setItem(
        "SuscriptionId",
        response.SuscriptionId ? response.SuscriptionId.toString() : ""
      );
      navigate("/dashboard-admin");
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-700">
            Nombre de Administrador:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-gray-700">
            Seleccionar Imagen:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {uploading ? 'Uploading...' : 'Registrarse'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAdmin } from "../../../Redux/features/register/updateAdminSlice";

const AdminUpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    imageUrl: "",
    password: "",
    isActive: true,
    SuscriptionId: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    const storedUsername = localStorage.getItem("username") || "";
    const storedEmail = localStorage.getItem("email") || "";
    const storedImageUrl = localStorage.getItem("imageUrl") || "";
    const storedIsActive = localStorage.getItem("isActive") === "true";
    const storedSuscriptionId = localStorage.getItem("SuscriptionId") || "";

    console.log("storedId:", storedId);
    console.log("storedUsername:", storedUsername);
    console.log("storedEmail:", storedEmail);
    console.log("storedImageUrl:", storedImageUrl);
    console.log("storedIsActive:", storedIsActive);
    console.log("storedSuscriptionId:", storedSuscriptionId);

    if (storedId) {
      setFormData({
        id: storedId,
        username: storedUsername,
        email: storedEmail,
        imageUrl: storedImageUrl,
        isActive: storedIsActive,
        SuscriptionId: storedSuscriptionId,
        password: "",
      });
    } else {
      console.error(
        "No se encontraron datos del administrador en el localStorage"
      );
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value || "",
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const adminId = localStorage.getItem("id");

    if (!adminId || adminId === "null") {
      setError("No se encontró un ID válido del administrador.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await dispatch(
        updateAdmin({ id: adminId, updatedData: formData })
      ).unwrap();

      localStorage.setItem("username", formData.username);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("imageUrl", formData.imageUrl);
      localStorage.setItem("isActive", formData.isActive ? "true" : "false");
      localStorage.setItem("SuscriptionId", formData.SuscriptionId || "");

      navigate("/profile");
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      setError("Hubo un error al actualizar el perfil.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Actualizar Perfil</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleUpdate} className="space-y-4">
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
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-gray-700">
            URL de Imagen:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default AdminUpdateProfile;

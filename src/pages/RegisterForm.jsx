//
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAdmin } from "../Redux/features/register/createAdminSlice";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.registerAdmin);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(registerAdmin(formData)).unwrap();

      if (response && response.admin) {
        localStorage.setItem("id", response.admin.id);
        localStorage.setItem("username", response.admin.username || "");
        localStorage.setItem("email", response.admin.email || "");
        localStorage.setItem("imageUrl", response.admin.imageUrl || "");
        localStorage.setItem(
          "isActive",
          response.admin.isActive ? "true" : "false"
        );
        if (response.admin.SuscriptionId != null) {
          localStorage.setItem(
            "SuscriptionId",
            response.admin.SuscriptionId.toString()
          );
        } else {
          localStorage.setItem("SuscriptionId", "");
        }

        localStorage.setItem("token", response.token || "");

        navigate("/login");
      } else {
        console.error("Respuesta inesperada:", response);
      }
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  //

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
          Registrarse
        </button>
        <button className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md bg-red-500 hover:bg-red-600">
          <a href="http://localhost:3001/api/auth/google">
            Registrarse con Google
          </a>
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

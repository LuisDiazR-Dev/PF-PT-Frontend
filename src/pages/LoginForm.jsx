import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../Redux/features/register/loginAdminSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.loginAdmin);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(loginAdmin(formData)).unwrap();
      console.log(response);

      if (response && response.admin) {
        localStorage.setItem("id", response.admin.id || "");
        localStorage.setItem("username", response.admin.username || "");
        localStorage.setItem("email", response.admin.email || "");
        localStorage.setItem("imageUrl", response.admin.imageUrl || "");
        localStorage.setItem(
          "isActive",
          response.admin.isActive ? "true" : "false"
        );
        localStorage.setItem(
          "registration_date",
          response.admin.registration_date || ""
        );

        localStorage.setItem(
          "SuscriptionId",
          response.admin.SuscriptionId || ""
        );

        // Guardar token
        localStorage.setItem("token", response.token || "");

        navigate("/dashboard-admin");
      } else {
        console.error("Respuesta inesperada:", response);
      }
    } catch (error) {
      console.error("Error en el login:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-40 p-6 bg-gray-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
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
        <button
          type="submit"
          className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

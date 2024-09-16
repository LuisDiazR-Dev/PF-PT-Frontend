import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../Redux/features/register/loginAdminSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isAccountDisabled, setIsAccountDisabled] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsAccountDisabled(false);
    setLoginError(null);
    try {
      const response = await dispatch(loginAdmin(formData)).unwrap();

      if (response && response.admin) {
        if (!response.admin.isActive) {
          setIsAccountDisabled(true);
          return;
        }

        localStorage.setItem("id", response.admin.id || "");
        localStorage.setItem("username", response.admin.username || "");
        localStorage.setItem("email", response.admin.email || "");
        localStorage.setItem("imageUrl", response.admin.imageUrl || "");
        localStorage.setItem(
          "isActive",
          response.admin.isActive ? "true" : "false"
        );
        localStorage.setItem(
          "SuscriptionId",
          response.admin.SuscriptionId != null
            ? response.admin.SuscriptionId.toString()
            : ""
        );
        localStorage.setItem("token", response.token || "");

        navigate(
          formData.email === "masteradmin@radmin.com" &&
            formData.password === "rAdmin123"
            ? "/tenant"
            : "/dashboard-admin"
        );
      } else {
        console.error("Respuesta inesperada:", response);
        setLoginError("Respuesta inesperada del servidor");
      }
    } catch (err) {
      console.error("Error en el login:", err);
      if (err?.error === "Administrador no encontrado") {
        setIsAccountDisabled(true);
      } else {
        setLoginError("Error en el inicio de sesión. Inténtalo de nuevo.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-40 p-6 bg-gray-300 shadow-lg rounded-lg">
      {isAccountDisabled ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="max-w-md p-6 bg-gray-300 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-6">
              Administrador Desactivado
            </h2>
            <p className="mb-4">
              Tu cuenta está desactivada. Contacta al administrador para más
              información.
            </p>
            <button
              onClick={() => alert("Funcionalidad pendiente")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-4"
            >
              Contáctenos
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Volver
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Iniciar Sesión
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="bg-red-100 text-red-700 p-2 rounded-md">
                {loginError}
              </div>
            )}
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
            <button class="w-full mt-4 p-2 bg-blue-500 text-white rounded-md bg-red-500 hover:bg-red-600">
              <a href="http://localhost:3001/api/auth/google">
                iniciar sesion con Google
              </a>
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginForm;

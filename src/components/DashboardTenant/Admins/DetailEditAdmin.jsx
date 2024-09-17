import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAdmin } from "../../../Redux/features/tenants/deleteAdminSlice";
import { activateAdmin } from "../../../Redux/features/tenants/updateAdminSlice";
import { fetchAdmins } from "../../../Redux/features/tenants/getAdminsUsersSlice";

const DetailAdmin = ({ admin, setActiveOption }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleActivate = () => {
    dispatch(activateAdmin(admin.id)).then(() => {
      dispatch(fetchAdmins());
      setActiveOption("ViewAdministradores");
      navigate("/tenant");
    });
  };

  const handleDelete = () => {
    if (admin && admin.id) {
      dispatch(deleteAdmin(admin.id)).then(() => {
        dispatch(fetchAdmins());
        setActiveOption("ViewAdministradores");
        navigate("/tenant");
      });
    }
  };

  const handleClose = () => {
    dispatch(activateAdmin(admin.id)).then(() => {
      dispatch(fetchAdmins());
      setActiveOption("ViewAdministradores");
      navigate("/tenant");
    });
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Detalle del Administrador
      </h2>

      {admin.imageUrl && (
        <div className="mb-6 flex justify-center">
          <img
            src={admin.imageUrl}
            alt={`Imagen de ${admin.username}`}
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        </div>
      )}

      <p className="text-gray-700 dark:text-gray-300 mb-2">
        <strong>Nombre de Usuario:</strong> {admin.username}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        <strong>Email:</strong> {admin.email}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        <strong>Fecha de Registro:</strong> {admin.registration_date}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        <strong>Condominio:</strong> {admin.CondominiumName}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        <strong>Suscripción:</strong> {admin.SuscriptionId || "No disponible"}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        <strong>Estado:</strong> {admin.isActive ? "Activo" : "Inactivo"}
      </p>

      <div className="flex justify-end gap-4">
        {!admin.isActive && (
          <button
            onClick={handleActivate}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Activar Administrador
          </button>
        )}
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Eliminar Administrador
        </button>
        <button
          onClick={handleClose}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

DetailAdmin.propTypes = {
  admin: PropTypes.object,
  setActiveOption: PropTypes.func.isRequired,
};

export default DetailAdmin;

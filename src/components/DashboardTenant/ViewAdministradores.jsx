import { useState } from "react";
import PropTypes from "prop-types";
import CardsAdmins from "../DashboardTenant/CardsAdmins/CardsAdmins";
import DetailAdmin from "./Admins/DetailEditAdmin";
import { useSelector } from "react-redux";

const ViewAdministradores = ({ setActiveOption }) => {
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [showActive, setShowActive] = useState(true); // Estado para alternar entre activos e inactivos
  const admins = useSelector((state) => state.admins.admins);

  // Filtrar administradores activos o inactivos
  const filteredAdmins = showActive
    ? admins.filter((admin) => admin.isActive === true) // Mostrar activos
    : admins.filter((admin) => admin.isActive === false); // Mostrar inactivos

  return (
    <div>
      <div className="mb-4">
        {/* Botón para mostrar administradores activos */}
        <button
          onClick={() => setShowActive(true)}
          className={`p-2 border border-gray-300 rounded mr-2 ${
            showActive ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Mostrar Administradores Activos
        </button>

        {/* Botón para mostrar administradores inactivos */}
        <button
          onClick={() => setShowActive(false)}
          className={`p-2 border border-gray-300 rounded ${
            !showActive ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Mostrar Administradores Inactivos
        </button>
      </div>

      {/* Mostrar lista de administradores filtrados o el detalle de un administrador */}
      {!selectedAdmin ? (
        <CardsAdmins
          admins={filteredAdmins} // Pasar administradores filtrados
          setSelectedAdmin={setSelectedAdmin}
        />
      ) : (
        <DetailAdmin setActiveOption={setActiveOption} admin={selectedAdmin} />
      )}
    </div>
  );
};

ViewAdministradores.propTypes = {
  setActiveOption: PropTypes.func.isRequired,
};

export default ViewAdministradores;

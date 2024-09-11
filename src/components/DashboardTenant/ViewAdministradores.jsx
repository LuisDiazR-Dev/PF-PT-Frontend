import { useState } from "react";
import PropTypes from "prop-types";
import CardsAdmins from "../DashboardTenant/CardsAdmins/CardsAdmins";
import DetailAdmin from "./Admins/DetailEditAdmin";

const ViewAdministradores = ({ setActiveOption }) => {
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  return (
    <div>
      {!selectedAdmin ? (
        <CardsAdmins
          setActiveOption={setActiveOption}
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

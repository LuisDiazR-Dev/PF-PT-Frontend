import PropTypes from "prop-types";
import CardsAdmins from "../DashboardTenant/CardsAdmins/CardsAdmins";

const ViewAdministradores = ({ setActiveOption }) => {
  return (
    <div>
      <CardsAdmins setActiveOption={setActiveOption} />
    </div>
  );
};

ViewAdministradores.propTypes = {
  setActiveOption: PropTypes.func.isRequired,
};

export default ViewAdministradores;

import PropTypes from "prop-types";
import CondoCards from "./CardCondos/CondoCards";

const ViewCondominiums = ({ setActiveOption }) => {
  return (
    <div>
      <CondoCards setActiveOption={setActiveOption} />
    </div>
  );
};

ViewCondominiums.propTypes = {
  setActiveOption: PropTypes.func.isRequired,
};

export default ViewCondominiums;

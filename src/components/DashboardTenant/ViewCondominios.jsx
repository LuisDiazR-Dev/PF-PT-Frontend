import PropTypes from "prop-types";
import CardsCondominiums from "./CardsCondominiums/CardsCondominiums";

const ViewCondominiums = ({ setActiveOption }) => {
  return (
    <div>
      <CardsCondominiums setActiveOption={setActiveOption} />
    </div>
  );
};

ViewCondominiums.propTypes = {
  setActiveOption: PropTypes.func.isRequired,
};

export default ViewCondominiums;

import PropTypes from "prop-types";

export const SuscriptionCard = ({
  name,
  plan_price,
  isActive,
  onCardClick,
}) => {
  return (
    <div
      onClick={onCardClick}
      className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow ${
        isActive ? "opacity-50" : ""
      } dark:bg-gray-800 dark:border-gray-700 cursor-pointer`}
    >
      <div className="flex flex-col items-center text-center pt-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 pb-4">
          Precio: $ {plan_price}
        </p>
      </div>
    </div>
  );
};

SuscriptionCard.propTypes = {
  name: PropTypes.string.isRequired,
  plan_price: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  onCardClick: PropTypes.func.isRequired,
};

export default SuscriptionCard;

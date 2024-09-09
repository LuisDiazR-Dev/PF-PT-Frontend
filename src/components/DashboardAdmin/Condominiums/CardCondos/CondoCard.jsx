import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getCondoById } from "../../../../Redux/features/getCondominium/getCondoById";

const CondoCard = ({
  id,
  condominium_name,
  condominium_country,
  condominium_state,
  condominium_logo,
  condominiums_apartments_number,
  imageUrl,
  isActive,
  setActiveOption,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getCondoById(id));
    setActiveOption("DetailCondominium");
  };

  return (
    <div
      onClick={handleClick}
      className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer ${
        !isActive ? "opacity-50" : ""
      }`}
    >
      <div className="flex justify-center p-4">
        <img
          src={condominium_logo}
          alt={`Logo de ${condominium_name}`}
          className="h-16 w-16 object-cover rounded-full"
        />
      </div>

      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {condominium_name}
      </h5>

      <img
        src={imageUrl}
        alt={`Condominio ${condominium_name}`}
        className="rounded-t-lg w-full"
      />

      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          País: {condominium_country}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Estado: {condominium_state || "No especificado"}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Número de Apartamentos:{" "}
          {condominiums_apartments_number || "No especificado"}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          CondominiumId: {id}
        </p>
      </div>
    </div>
  );
};

CondoCard.propTypes = {
  id: PropTypes.number.isRequired,
  condominium_name: PropTypes.string.isRequired,
  condominium_country: PropTypes.string.isRequired,
  condominium_state: PropTypes.string,
  condominiums_apartments_number: PropTypes.number,
  imageUrl: PropTypes.string.isRequired,
  condominium_logo: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  setActiveOption: PropTypes.func.isRequired,
};

export default CondoCard;

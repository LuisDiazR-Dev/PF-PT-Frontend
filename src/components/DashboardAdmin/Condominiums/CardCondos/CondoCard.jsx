import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getCondoById } from "../../../../Redux/features/getCondominium/getCondoById";
import { setSelectCondoToAdmin } from "../../../../Redux/features/ToggleSwitchSelectCondo/setCondoToAdminSlice";
import { ToggleSwitch } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

const CondoCard = ({
  id,
  condominium_name,
  condominium_country,
  condominium_state,
  condominium_logo,
  condominiums_apartments_number,
  setActiveOption,
}) => {
  const dispatch = useDispatch();

  // Obtén el estado específico del condominio por id
  const { selectedCondoId, isSelected } = useSelector(
    (state) => state.setCondoToAdmin
  );
  console.log(selectedCondoId, isSelected);

  const isActive = selectedCondoId === id && isSelected;

  const handleOnChangeStatus = () => {
    dispatch(setSelectCondoToAdmin({ id, status: !isSelected }));
  };

  const handleClick = () => {
    dispatch(getCondoById(id));
    setActiveOption("DetailCondominium");
  };

  return (
    <div>
      <a className="gap-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={condominium_logo}
          alt={`Logo de ${condominium_name}`}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {condominium_name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {condominium_country
              ? `País:  ${condominium_country}`
              : `sin definir`}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {condominiums_apartments_number
              ? `Aptos: ${condominiums_apartments_number}`
              : `sin definir`}
          </p>

          <div className="flex mt-4 justify-between items-center gap-4 flex-wrap">
            <ToggleSwitch
              className="font-mono text-gray-700 dark:text-gray-400"
              // checked={isSelected || false} // Si no hay valor, usa false por defecto
              checked={isActive}
              label="Administrar"
              onChange={handleOnChangeStatus}
            />
            <Button onClick={handleClick}>
              Editar
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </a>
    </div>
  );
};

CondoCard.propTypes = {
  id: PropTypes.number.isRequired,
  condominium_name: PropTypes.string.isRequired,
  condominium_country: PropTypes.string.isRequired,
  condominium_state: PropTypes.string,
  condominiums_apartments_number: PropTypes.number,
  condominium_logo: PropTypes.string.isRequired,
  setActiveOption: PropTypes.func.isRequired,
};

export default CondoCard;

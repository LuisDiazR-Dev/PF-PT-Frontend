import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCondominiums } from "../../../../Redux/features/getCondominium/condominiumSlice";
import CondoCard from "./CondoCard";

const CondoCards = ({ setActiveOption }) => {
  const dispatch = useDispatch();
  const AdminId = localStorage.getItem("id")?.trim();

  const { condominiums, status, error } = useSelector(
    (state) => state.condominiums.condominiums
  );

  useEffect(() => {
    dispatch(fetchCondominiums());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Cargando Condominios...</p>;
  }

  if (status === "failed") {
    return <p>Error al cargar los condominios: {error}</p>;
  }

  const filteredCondominiums = condominiums.filter((condominium) => {
    return condominium.AdminId?.trim() === AdminId;
  });

  if (!filteredCondominiums.length) {
    return <p>No hay condominios asociados a este administrador</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredCondominiums.map((condominium) => (
        <CondoCard
          key={condominium.id}
          id={condominium.id}
          isActive={condominium.isActive}
          condominium_logo={condominium.condominium_logo}
          condominium_name={condominium.condominium_name}
          condominium_country={condominium.condominium_country}
          condominium_state={condominium.condominium_state}
          condominiums_apartments_number={
            condominium.condominiums_apartments_number
          }
          imageUrl={condominium.imageUrl}
          setActiveOption={setActiveOption} // Asegúrate de pasar esta prop
        />
      ))}
    </div>
  );
};

CondoCards.propTypes = {
  setActiveOption: PropTypes.func.isRequired,
};

export default CondoCards;

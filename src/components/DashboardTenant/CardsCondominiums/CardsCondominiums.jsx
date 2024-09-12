import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCondominiums } from "../../../Redux/features/getCondominium/condominiumSlice";
import CondominiumCard from "./cardCondominium";

const CardsCondominiums = () => {
  const dispatch = useDispatch();

  const condominiums = useSelector((state) => state.condominiums.condominiums);
  const status = useSelector((state) => state.condominiums.status);
  const error = useSelector((state) => state.condominiums.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCondominiums());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {condominiums.map((condo) => (
        <CondominiumCard
          key={condo.id}
          id={condo.id}
          condominium_name={condo.condominium_name}
          condominium_country={condo.condominium_country}
          condominium_state={condo.condominium_state}
          condominium_logo={condo.condominium_logo}
          condominiums_apartments_number={condo.condominiums_apartments_number}
          imageUrl={condo.imageUrl}
          isActive={condo.isActive}
        />
      ))}
    </div>
  );
};

export default CardsCondominiums;

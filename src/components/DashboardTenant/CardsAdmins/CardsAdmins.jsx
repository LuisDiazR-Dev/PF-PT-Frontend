// CardsAdmins.jsx
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdmins } from "../../../Redux/features/tenants/getAdminsUsersSlice";
import { fetchCondominiums } from "../../../Redux/features/getCondominium/condominiumSlice";
import AdminCard from "./cardAdmin";

const CardsAdmins = () => {
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.admins.admins); // Corregido selector
  const condominiums = useSelector((state) => state.condominiums.condominiums); // Corregido selector
  const [filteredAdmins, setFilteredAdmins] = useState([]);

  useEffect(() => {
    if (admins.length === 0) {
      dispatch(fetchAdmins());
    }
  }, [admins, dispatch]);

  useEffect(() => {
    if (condominiums.length === 0) {
      dispatch(fetchCondominiums());
    }
  }, [condominiums, dispatch]);

  useEffect(() => {
    if (admins.length > 0 && condominiums.length > 0) {
      const filtered = admins.map((admin) => {
        const adminCondominiums = condominiums.filter(
          (condo) => condo.AdminId === admin.id
        );
        return {
          ...admin,
          CondominiumName:
            adminCondominiums
              .map((condo) => condo.condominium_name)
              .join(", ") || "no asignado",
        };
      });
      setFilteredAdmins(filtered);
    }
  }, [admins, condominiums]);

  return (
    <div className="p-4">
      {admins.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredAdmins.length > 0 ? (
            filteredAdmins.map((admin) => (
              <AdminCard
                key={admin.id}
                id={admin.id}
                username={admin.username}
                email={admin.email}
                registration_date={admin.registration_date}
                isActive={admin.isActive}
                imageUrl={admin.imageUrl}
                SuscriptionId={admin.SuscriptionId}
                CondominiumName={admin.CondominiumName}
              />
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              No hay administradores disponibles.
            </p>
          )}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">
          Cargando administradores...
        </p>
      )}
    </div>
  );
};

export default CardsAdmins;

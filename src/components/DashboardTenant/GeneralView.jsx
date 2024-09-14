import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdmins } from "../../Redux/features/tenants/getAdminsUsersSlice";
import { fetchCondominiums } from "../../Redux/features/getCondominium/condominiumSlice";
import { fetchApartments } from "../../Redux/features/getApartments/apartmentsSlice";
const GeneralView = () => {
  const dispatch = useDispatch();
  const [numberOfAdmins, setNumberOfAdmins] = useState(0);
  const [numberOfCondominiums, setNumberOfCondominiums] = useState(0);
  const [numberOfApartments, setNumberOfApartments] = useState(0);

  const admins = useSelector((state) => state.admins.admins);
  const condominiums = useSelector((state) => state.condominiums.condominiums);
  const apartments = useSelector((state) => state.apartments.apartments);

  useEffect(() => {
    dispatch(fetchAdmins());
    dispatch(fetchCondominiums());
    dispatch(fetchApartments());
  }, [dispatch]);

  useEffect(() => {
    if (admins) setNumberOfAdmins(admins.length);
  }, [admins]);

  useEffect(() => {
    if (condominiums) setNumberOfCondominiums(condominiums.length);
  }, [condominiums]);

  useEffect(() => {
    if (apartments) setNumberOfApartments(apartments.length);
  }, [apartments]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-black">
        Rendimiento de R-admin
      </h2>
      <div className="flex flex-wrap gap-4 justify-around">
        <div
          className="flex-1 min-w-[250px] bg-white dark:bg-gray-900 border-0 rounded-lg shadow-light dark:shadow-dark text-center p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800"
          onClick={() => {
            /* Acción para mostrar detalles de admins */
          }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Administradores
          </h3>
          <p className="text-3xl font-bold text-gray-800 dark:text-gray-300">
            {numberOfAdmins}
          </p>
        </div>
        <div
          className="flex-1 min-w-[250px] bg-white dark:bg-gray-900 border-0 rounded-lg shadow-light dark:shadow-dark text-center p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800"
          onClick={() => {
            /* Acción para mostrar detalles de condominios */
          }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Condominios
          </h3>
          <p className="text-3xl font-bold text-gray-800 dark:text-gray-300">
            {numberOfCondominiums}
          </p>
        </div>
        <div
          className="flex-1 min-w-[250px] bg-white dark:bg-gray-900 border-0 rounded-lg shadow-light dark:shadow-dark text-center p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800"
          onClick={() => {
            /* Acción para mostrar detalles de departamentos */
          }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Departamentos
          </h3>
          <p className="text-3xl font-bold text-gray-800 dark:text-gray-300">
            {numberOfApartments}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralView;

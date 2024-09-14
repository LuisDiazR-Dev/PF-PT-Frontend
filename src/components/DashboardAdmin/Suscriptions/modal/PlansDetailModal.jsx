import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Plans from "../modal/plans";

const PlanDetailsModal = ({ isOpen, onClose, plan }) => {
  const { name, plan_price } = useSelector(
    (state) =>
      state.suscriptions.suscriptions.find((sus) => sus.name === plan.name) ||
      {}
  );
  const planDetails = Plans.find((p) => p.name === name);

  if (!isOpen || !name || !plan_price || !planDetails) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Detalles del plan {name}</h2>
        <p className="text-lg mb-4">Precio: ${plan_price}</p>
        <ul className="list-disc pl-5 mb-4">
          {planDetails.caracteristicas.map((caracteristica, index) => (
            <li key={index} className="text-gray-700">
              {caracteristica}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => alert("Funcionalidad pendiente")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Elegir Plan
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

PlanDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    plan_price: PropTypes.number.isRequired,
    caracteristicas: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default PlanDetailsModal;

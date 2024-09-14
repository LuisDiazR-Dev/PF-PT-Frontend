import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import plans from "../Suscriptions/modal/plans";

const DetailPlansPanel = ({ isOpen, onClose }) => {
  const suscriptions = useSelector((state) => state.suscriptions.suscriptions);

  if (!isOpen || suscriptions.length === 0) return null;

  const planDetails = plans.filter((plan) =>
    suscriptions.some((sub) => sub.name === plan.name)
  );

  const maxFeatures = Math.max(
    ...planDetails.map((plan) => plan.caracteristicas.length)
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative">
        <div className="flex items-center mb-4">
          <a href="/" className="flex items-center">
            <img
              src="/Residential Logo favicon sin fondo2.png"
              alt="Logo"
              className="w-8 h-8 text-gray-700 mr-4"
            />
          </a>
          <h2 className="text-2xl font-bold text-center flex-1">
            Comparación de Planes
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-white bg-[#282c34] hover:bg-[#1e3a8a] focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-lg w-8 h-8 flex items-center justify-center"
            style={{ position: "absolute", top: "16px", right: "16px" }}
          >
            ×
          </button>
        </div>

        <table className="min-w-full table-auto border-collapse rounded-lg shadow-md">
          <thead>
            <tr>
              {suscriptions.map((suscription) => (
                <th
                  key={suscription.id}
                  className="px-4 py-2 bg-[#282c34] text-white text-center hover:bg-blue-700"
                  style={{
                    borderRight: "1px solid #e5e7eb",
                    borderRadius: "0.5rem", // Redondea las esquinas
                  }}
                >
                  {suscription.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: maxFeatures }).map((_, featureIndex) => (
              <tr key={featureIndex}>
                {planDetails.map((plan) => (
                  <td
                    key={plan.id}
                    className="px-4 py-2 text-center"
                    style={{
                      borderRight: "1px solid #e5e7eb",
                      borderRadius: "0.5rem", // Redondea las esquinas
                    }}
                  >
                    {plan.caracteristicas[featureIndex] || "-"}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              {planDetails.map((plan) => (
                <td
                  key={plan.id}
                  className="px-4 py-2 text-center"
                  style={{
                    borderRight: "1px solid #e5e7eb",
                    borderRadius: "0.5rem", // Redondea las esquinas
                  }}
                >
                  <button
                    type="button"
                    onClick={() => alert("Funcionalidad pendiente")}
                    className="bg-[#282c34] text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
                  >
                    Elegir Plan
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

DetailPlansPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DetailPlansPanel;

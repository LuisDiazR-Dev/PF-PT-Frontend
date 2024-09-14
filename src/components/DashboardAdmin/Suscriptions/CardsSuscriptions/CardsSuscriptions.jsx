import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSuscriptions } from "../../../../Redux/features/suscriptions/getSuscriotionsSlice.js";
import SuscriptionCard from "../CardsSuscriptions/suscriptionCard.jsx";
import PlanDetailsModal from "../modal/PlansDetailModal.jsx";
import Plans from "../modal/plans.jsx";

const CardsSuscriptions = () => {
  const dispatch = useDispatch();
  const suscriptions = useSelector((state) => state.suscriptions.suscriptions);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (suscriptions.length < 1) {
      dispatch(getSuscriptions());
    }
  }, [suscriptions, dispatch]);

  const handleCardClick = (suscriptions) => {
    const planDetails = Plans.find((plan) => plan.name === suscriptions.name);
    setSelectedPlan({
      name: suscriptions.name,
      plan_price: suscriptions.plan_price,
      caracteristicas: planDetails ? planDetails.caracteristicas : [],
    });
  };

  const closeModal = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {suscriptions.length > 0 ? (
          suscriptions.map((suscription) => (
            <SuscriptionCard
              key={suscription.id}
              name={suscription.name}
              plan_price={suscription.plan_price}
              onCardClick={() => handleCardClick(suscription)}
            />
          ))
        ) : (
          <p>No hay suscripciones disponibles.</p>
        )}
      </div>

      {selectedPlan && (
        <PlanDetailsModal
          isOpen={!!selectedPlan}
          onClose={closeModal}
          plan={selectedPlan}
        />
      )}
    </div>
  );
};

export default CardsSuscriptions;

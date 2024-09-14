import CardsSuscriptions from "../DashboardAdmin/Suscriptions/CardsSuscriptions/CardsSuscriptions";

const SectionPricing = () => {
  return (
    <section className="p-4 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Nuestros Planes</h2>
      <p className="mb-4">
        Explora nuestros diferentes planes y elige el que mejor se adapte a tus
        necesidades.
      </p>
      <CardsSuscriptions />
    </section>
  );
};

export default SectionPricing;

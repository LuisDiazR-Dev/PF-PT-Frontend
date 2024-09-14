import CardsSuscriptions from "../DashboardAdmin/Suscriptions/CardsSuscriptions/CardsSuscriptions";

const SectionPricing = () => {
  return (
    <section className="p-4 bg-gray-50 dark:bg-gray-900 transition duration-300 ease-in-out text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Nuestros Planes
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Explora nuestros diferentes planes y elige el que mejor se adapte a tus
        necesidades.
      </p>
      <CardsSuscriptions />
    </section>
  );
};

export default SectionPricing;

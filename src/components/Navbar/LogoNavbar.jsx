import { Link } from "react-router-dom";

const LogoNavbar = () => {
  return (
    <Link className="flex ms-2 md:me-24" to="/">
      <img
        src="/Residential Logo favicon sin fondo2.png"
        className="mr-3 h-6 sm:h-9"
        alt="R-admin Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        R-admin
      </span>
    </Link>
  );
};

export default LogoNavbar;

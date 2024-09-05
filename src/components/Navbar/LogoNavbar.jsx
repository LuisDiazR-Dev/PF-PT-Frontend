import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const LogoNavbar = () => {
  return (
    <Link to="/">
      <Navbar.Brand>
        <img
          src="/public/Residential Logo favicon sin fondo2.png"
          className="mr-3 h-6 sm:h-9"
          alt="R-admin Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          R-admin
        </span>
      </Navbar.Brand>
    </Link>
  );
};

export default LogoNavbar;

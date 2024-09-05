import ButtonSetTheme from "../SetTheme/ButtonSetTheme";

import { Navbar, Dropdown } from "flowbite-react";

import LogoNavbar from "./LogoNavbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar fluid>
      <LogoNavbar />

      <div className="flex md:order-2">
        {/* Empieza */}
        <Dropdown label="Empieza" dismissOnClick={false}>
          <Dropdown.Item>
            <Link to="login">Inicia Sesión</Link>
            {/* Inicia Sesión */}
          </Dropdown.Item>

          <Dropdown.Item>Regístrate</Dropdown.Item>
        </Dropdown>
        {/* ----end */}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Testimonios
        </Navbar.Link>
        <Navbar.Link href="#">Precios</Navbar.Link>
        <Navbar.Link href="#">Contacto</Navbar.Link>
        <ButtonSetTheme />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

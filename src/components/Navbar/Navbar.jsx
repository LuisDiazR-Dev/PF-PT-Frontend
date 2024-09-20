import ButtonSetTheme from "../SetTheme/ButtonSetTheme";
import { Navbar, Dropdown } from "flowbite-react";
import LogoNavbar from "./LogoNavbar";
import { Link } from "react-router-dom";
import UserProfile from "../DashboardAdmin/Admins/AdminProfileMenu";

const NavBar = () => {
  // Verifica si el usuario está logueado (puedes usar localStorage, Redux, etc.)
  const isUserLoggedIn = localStorage.getItem("loggedIn") !== null;

  return (
    <Navbar fluid>
      <LogoNavbar />

      <div className="flex md:order-2">
        {isUserLoggedIn ? (
          <UserProfile />
        ) : (
          <Dropdown label="Empieza" dismissOnClick={false}>
            <Dropdown.Item>
              <Link to="/login">Inicia Sesión</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/register">Regístrate</Link>
            </Dropdown.Item>
          </Dropdown>
        )}

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

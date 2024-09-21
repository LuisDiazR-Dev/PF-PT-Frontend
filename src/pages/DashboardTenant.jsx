"use client";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
} from "react-icons/hi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogoNavbar from "../components/Navbar/LogoNavbar";
import ButtonSetTheme from "../components/SetTheme/ButtonSetTheme";
import SearchTenant from "../components/DashboardTenant/SeacrhTenant";
import ViewAdministradores from "../components/DashboardTenant/ViewAdministradores";
import ViewCondominios from "../components/DashboardTenant/ViewCondominios";
import ViewApartmentsTenant from "../components/DashboardTenant/ViewApartmentsTenant";
import GeneralView from "../components/DashboardTenant/GeneralView";
import { logOut } from "../Redux/features/register/loginAdminSlice";

const DashboardTenant = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState("Inicial");
  const handleItemClick = (item) => {
    setActiveOption(item);
  };

  // renderizado según opción activa
  const componentMap = {
    Inicial: () => (
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <GeneralView />
      </div>
    ),

    ViewAdministradores: () => (
      <ViewAdministradores setActiveOption={setActiveOption} />
    ),

    ViewCondominios: () => (
      <ViewCondominios setActiveOption={setActiveOption} />
    ),

    ViewApartmentsTenant: () => (
      <ViewApartmentsTenant setActiveOption={setActiveOption} />
    ),

    Notificaciones: () => (
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        Notificaciones - Próximamente
      </div>
    ),

    Estadísticas: () => (
      <div className="p-80 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        Estadísticas - Próximamente
      </div>
    ),
  };

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  const ActiveComponent = componentMap[activeOption];

  //   const hiddenSearchBar = ["CreateCondominium", "DetailCondominium"];

  return (
    <div className="">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <LogoNavbar />
              <ButtonSetTheme />
            </div>
            {/* <AdminProfileMenu /> */}
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiInbox}>
                Bienvenido Master
              </Sidebar.Item>
              <Sidebar.Collapse icon={HiShoppingBag} label="Registros">
                <Sidebar.Item
                  href="#"
                  className={
                    activeOption === "ViewAdministradores" ? "bg-gray-200" : ""
                  }
                  onClick={() => handleItemClick("ViewAdministradores")}
                >
                  Administradores
                </Sidebar.Item>

                <Sidebar.Item
                  href="#"
                  className={
                    activeOption === "ViewCondominios" ? "bg-gray-200" : ""
                  }
                  onClick={() => handleItemClick("ViewCondominios")}
                >
                  Condominios
                </Sidebar.Item>
                {/* <Sidebar.Item
                  href="#"
                  className={
                    activeOption === "ViewApartmentsTenant" ? "bg-gray-200" : ""
                  }
                  onClick={() => handleItemClick("ViewApartmentsTenant")}
                >
                  Departamentos
                </Sidebar.Item> */}
              </Sidebar.Collapse>

              <Sidebar.Item href="#" icon={HiInbox} label="3">
                Notificaciones
              </Sidebar.Item>

              <Sidebar.Item href="#" icon={HiChartPie}>
                Estadísticas
              </Sidebar.Item>
            </Sidebar.ItemGroup>

            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="#"
                onClick={handleLogout}
                icon={HiArrowSmLeft}
              >
                Salir
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </aside>

      <div className="p-4 sm:ml-64">
        <section className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <SearchTenant />
          <ActiveComponent handleItemClick={handleItemClick} />
        </section>
      </div>
    </div>
  );
};

export default DashboardTenant;

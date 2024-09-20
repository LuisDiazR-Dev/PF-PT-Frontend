import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logOut } from "../../../Redux/features/register/loginAdminSlice";

import { Avatar, Dropdown } from "flowbite-react";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedImageUrl = localStorage.getItem("imageUrl");

    if (storedUsername) setUsername(storedUsername);
    if (storedImageUrl) setImageUrl(storedImageUrl);
  }, []);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <section>
      <div className="menu 2">
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="img Profile" img={imageUrl} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm"> Hola, {username}</span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link
                to="/profile"
                className="block py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Mi Perfil
              </Link>
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>
              <svg
                className="me-2 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              Salir
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/features/setTheme/Reducer-themeSlice";

const ButtonSetTheme = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);
  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <label className="inline-flex items-center  cursor-pointer">
          <span className=" me-2 text-sm  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            {theme === "light" ? "Light" : "Dark "}
          </span>

          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={changeTheme}
          />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </a>
    </>
  );
};

export default ButtonSetTheme;

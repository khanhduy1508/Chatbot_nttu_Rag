import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    try {
      if (theme === "dark") {
        root.classList.add("dark");
        root.setAttribute("data-theme", "dark");
      } else {
        root.classList.remove("dark");
        root.setAttribute("data-theme", "light");
      }
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Trò chuyện", path: "/chat" },
    { name: "FAQs", path: "/faq" },
    { name: "Báo lỗi/ Góp ý", path: "/issue" },
  ];

  return (
    <div className="navbar bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-slate-200 dark:border-neutral-700 w-[95%] mx-auto my-4 rounded-3xl shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-lg bg-base-100 dark:bg-neutral-800 rounded-xl w-56"
          >
            {menuItems.map((item) => (
              <li key={item.path}>
                <button
                  className={`w-full text-left p-2 rounded-lg ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white shadow-md"
                      : "hover:bg-gray-200 dark:hover:bg-neutral-700"
                  }`}
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="btn btn-ghost normal-case font-extrabold text-2xl px-2"
        >
          <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            NTTU Chatbot
          </span>
        </button>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => navigate(item.path)}
                className={`relative font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive(item.path)
                    ? "text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-lg scale-105"
                    : "text-gray-700 dark:text-gray-300 hover:text-white hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:via-indigo-500 hover:to-purple-500"
                }`}
              >
                {item.name}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isActive(item.path) ? "w-full" : "group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End (Theme toggle) */}
      <div className="navbar-end flex items-center space-x-3">
        <button
          title="Chế độ sáng"
          className={`btn btn-ghost btn-lg rounded-full transition-all duration-200 ${
            theme === "light"
              ? "text-yellow-400 scale-110 shadow-lg"
              : "text-gray-400 hover:text-yellow-400"
          }`}
          onClick={() => setTheme("light")}
        >
          <FontAwesomeIcon icon={faSun} size="lg" />
        </button>
        <button
          title="Chế độ tối"
          className={`btn btn-ghost btn-lg rounded-full transition-all duration-200 ${
            theme === "dark"
              ? "text-indigo-300 scale-110 shadow-lg"
              : "text-gray-400 hover:text-indigo-300"
          }`}
          onClick={() => setTheme("dark")}
        >
          <FontAwesomeIcon icon={faMoon} size="lg" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;

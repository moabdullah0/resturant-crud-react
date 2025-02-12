import { FaLanguage, FaBars } from "react-icons/fa6";
import { useState } from "react";

const Navbar = ({ setNav }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full  px-5   ">
      <div className="flex justify-between items-center px-6 lg:px-10 py-4">
        <div className=" ">
          <img src="/assets/Logo.svg" alt="Logo" className="h-16" />
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 text-2xl"
          >
            <FaBars />
          </button>
        </div>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-md lg:shadow-none lg:flex lg:static lg:w-auto lg:gap-10 text-gray-700 text-lg font-semibold rtl:text-right transition`}
        >
          <li className="p-4 lg:p-0">
            <a
              onClick={() => setNav("home")}
              href="#"
              className="hover:text-primary transition-colors"
            >
              الرئيسية
            </a>
          </li>
          <li className="p-4 lg:p-0">
            <a
              onClick={() => setNav("dashboard")}
              href="#"
              className="hover:text-primary transition-colors"
            >
              الادارة
            </a>
          </li>
          <li className="p-4 lg:p-0">
            <a href="#" className="hover:text-primary transition-colors">
              عن مشوار
            </a>
          </li>
          <li className="p-4 lg:p-0">
            <a href="#" className="hover:text-primary transition-colors">
              الفروع
            </a>
          </li>
          <li className="p-4 lg:p-0">
            <a href="#" className="hover:text-primary transition-colors">
              تواصل معنا
            </a>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 px-4 py-1 rounded-md hover:bg-gray-100 transition"
          >
            اللغة <FaLanguage />
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition">
            اتصل بنا
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center gap-4 lg:hidden mt-4 pb-4 border-t">
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 px-4 py-1 rounded-md hover:bg-gray-100 transition"
          >
            اللغة <FaLanguage />
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition">
            اتصل بنا
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

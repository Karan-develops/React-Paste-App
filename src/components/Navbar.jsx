import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-[10vh] flex items-center p-4 bg-gray-800 gap-x-5">
      <p className="text-white text-2xl ml-4 mr-[33vw]">PasteApp</p>
      {NavbarData.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-xl bg-emerald-500 p-2 rounded-lg text-white"
              : "text-white font-medium text-xl"
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

const navItems = [
  { label: "Shop", path: ROUTES.HOME, icon: "🏪" },
  { label: "Explore", path: ROUTES.EXPLORE, icon: "🔎" },
  { label: "Cart", path: ROUTES.CART, icon: "🛒" },
  { label: "Favourite", path: ROUTES.FAVORITES, icon: "♡" },
];

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 rounded-t-[18px] border border-[#E2E2E2] bg-white px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-xs font-semibold ${
                isActive ? "text-[#53B175]" : "text-[#181725]"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;

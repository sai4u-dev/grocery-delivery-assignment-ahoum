import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

const DesktopHeader = () => {
  return (
    <header className="sticky top-0 z-40 hidden border-b border-[#E2E2E2] bg-white/90 backdrop-blur lg:block">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <NavLink to={ROUTES.HOME} className="flex items-center gap-3">
          <span className="text-3xl">🥕</span>
          <span className="text-2xl font-bold text-[#181725]">nectar</span>
        </NavLink>

        <nav className="flex items-center gap-8 text-sm font-semibold text-[#7C7C7C]">
          <NavLink to={ROUTES.HOME} className="hover:text-[#53B175]">
            Shop
          </NavLink>
          <NavLink to={ROUTES.EXPLORE} className="hover:text-[#53B175]">
            Explore
          </NavLink>
          <NavLink to={ROUTES.FAVORITES} className="hover:text-[#53B175]">
            Favorites
          </NavLink>
          <NavLink to={ROUTES.CART} className="hover:text-[#53B175]">
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default DesktopHeader;

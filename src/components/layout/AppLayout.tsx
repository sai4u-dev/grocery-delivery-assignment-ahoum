import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";
import DesktopHeader from "./DesktopHeader";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-white lg:bg-[#F8FAFB]">
      <DesktopHeader />

      <main className="pb-24 lg:pb-0">
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
};

export default AppLayout;

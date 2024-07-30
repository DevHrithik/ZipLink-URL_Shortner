import { Outlet } from "react-router-dom";
import Header from "../components/header";

const AppLayout = () => {
  return (
    <div>
      <main className=" min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="pt-10 bg-gray-800 p-10 text-center">
        Made with ❤️ by DevHrithik
      </div>
    </div>
  );
};

export default AppLayout;

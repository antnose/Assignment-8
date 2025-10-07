import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50">
        <div className="container mx-auto text-center pt-10">
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Root;

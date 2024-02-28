import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function Root() {
  return (
    <div className={`font-roboto bg-light min-h-screen `}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;

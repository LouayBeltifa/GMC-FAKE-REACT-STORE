import { Outlet } from "react-router";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

function MainLayout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default MainLayout;

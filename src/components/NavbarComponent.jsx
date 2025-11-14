import { NavLink } from "react-router";
import { useSelector } from "react-redux";

function NavbarComponent() {
  const itemCount = useSelector((state) => state.cart?.items?.length || 0);

  return (
    <nav className="flex p-5 gap-5 bg-emerald-400">
      <div>
        <h2>LOGO GOES HERE</h2>
      </div>
      <div className="flex gap-2">
        <NavLink
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Contact
        </NavLink>
        <NavLink
          to="/browse"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Browse
        </NavLink>
      </div>
      <div className="ml-auto flex gap-5">
        <NavLink
          to="/cart"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <span className="relative inline-flex">
            <i className="fa-solid fa-cart-shopping"></i>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </span>
        </NavLink>
        <NavLink
          to="/favourites"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <i className="fa-solid fa-heart"></i>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavbarComponent;

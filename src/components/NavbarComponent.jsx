import { NavLink } from "react-router";

function NavbarComponent() {
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
          <i className="fa-solid fa-cart-shopping"></i>
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

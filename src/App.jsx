import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BrowsePage from "./pages/BrowsePage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/browse",
        element: <BrowsePage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/favourites",
        element: <FavouritesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

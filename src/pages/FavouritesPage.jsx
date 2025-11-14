import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { removeFromFavourites } from "../store/favouriteSlice";
import { formatPrice } from "../utils/stringUtils";

function FavouritesPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.favourite?.items || []);

  if (!items || items.length === 0) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-2">Favourites</h1>
        <p className="text-gray-600">You haven't favorited any products yet.</p>
        <Link
          to="/browse"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Your favourites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded p-4 bg-white"
          >
            <Link to={"/product/" + item.id} className="block mb-3">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded"
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                  No image
                </div>
              )}
            </Link>
            <h3 className="font-semibold">{item.name}</h3>
            <p>{item.description}</p>
            <p className="text-gray-600 mt-1">{formatPrice(item.price)}</p>
            <div className="mt-3 flex gap-2">
              <Link
                to={"/product/" + item.id}
                className="bg-gray-100 px-3 py-1 rounded"
              >
                View
              </Link>
              <button
                onClick={() => dispatch(removeFromFavourites(item.id))}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavouritesPage;

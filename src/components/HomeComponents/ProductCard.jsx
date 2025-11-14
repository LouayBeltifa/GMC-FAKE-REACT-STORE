import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../store/favouriteSlice";
import { formatPrice } from "../../utils/stringUtils";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourite?.items || []);
  const isFavourite = favourites.some((f) => f.id === product.id);

  const onAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added to cart!");
  };

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFromFavourites(product.id));
      toast.success("Product removed from favourites!");
    } else {
      dispatch(addToFavourites(product));
      toast.success("Product added to favourites!");
    }
  };

  return (
    <div className="bg-white border-1 rounded-xl overflow-hidden w-[250px] shadow-md hover:shadow-xl cursor-pointer transition-all">
      <Link to={"/product/" + product.id}>
        <img src={product.image} />
      </Link>
      <h3 className="font-bold px-2 mt-4">{product.name}</h3>
      <p className="text-xs px-2">{product.description}</p>
      <div className="p-2 flex justify-between mt-4">
        <p>{formatPrice(product.price)}</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={toggleFavourite}
            className="cursor-pointer"
          >
            <i
              className={
                "fa-solid fa-heart " + (isFavourite ? "text-red-500" : "")
              }
            ></i>
          </button>
          <button
            type="button"
            onClick={onAddToCart}
            className="cursor-pointer"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../store/cartSlice";
import { formatPrice } from "../utils/stringUtils";

function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items || []);

  const updateQty = (id, delta) => {
    if (delta > 0) dispatch(increaseQty(id));
    else dispatch(decreaseQty(id));
  };

  const removeItem = (id) => dispatch(removeFromCart(id));
  const clearAll = () => dispatch(clearCart());

  const subtotal = items.reduce(
    (s, it) => s + (it.price || 0) * (it.quantity || 1),
    0
  );
  const shipping = items.length > 0 ? 5.0 : 0;
  const total = subtotal + shipping;

  if (!items || items.length === 0) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-gray-600 mb-6">
          Looks like you haven't added any products yet.
        </p>
        <div className="flex items-center gap-3">
          <Link
            to="/browse"
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="flex gap-6 items-start flex-wrap">
        <div className="flex-1 min-w-[320px]">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 p-3 border border-gray-200 rounded-md mb-3 items-center bg-white"
            >
              <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full"
                  />
                ) : (
                  <div className="text-gray-400 text-sm">No image</div>
                )}
              </div>

              <div className="flex-1">
                <div className="font-semibold">{item.name}</div>
                <div className="text-gray-600 mt-1">
                  {formatPrice(item.price)}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="w-10 h-10 bg-blue-400 text-white rounded"
                  >
                    -
                  </button>
                  <div className="min-w-[28px] text-center">
                    {item.quantity}
                  </div>
                  <button
                    onClick={() => updateQty(item.id, +1)}
                    className="w-10 h-10 bg-blue-400 text-white rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-3 text-sm text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="min-w-[110px] text-right font-semibold">
                {formatPrice((item.price || 0) * (item.quantity || 1))}
              </div>
            </div>
          ))}

          <div className="flex gap-3 mt-4">
            <button
              onClick={clearAll}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Clear cart
            </button>
          </div>
        </div>

        <aside className="w-80 border border-gray-200 p-4 rounded bg-white">
          <h3 className="text-lg font-semibold">Order summary</h3>
          <div className="flex justify-between mt-3">
            <div>Subtotal</div>
            <div>{formatPrice(subtotal)}</div>
          </div>
          <div className="flex justify-between mt-2">
            <div>Shipping</div>
            <div>{formatPrice(shipping)}</div>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between font-bold">
            <div>Total</div>
            <div>{formatPrice(total)}</div>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/checkout"
              className="bg-blue-500 text-white py-2 rounded text-center"
            >
              Checkout
            </Link>
            <Link to="/browse" className="bg-gray-100 py-2 rounded text-center">
              Continue shopping
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CartPage;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setStep,
  updateUserField,
  updateCardField,
  setStatus,
  setOrderId,
  clearCheckout,
} from "../store/checkoutSlice";
import { clearCart } from "../store/cartSlice";

function CheckoutPage() {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.cart);
  const checkout = useSelector((s) => s.checkout);

  const currency = (v) =>
    new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD",
    }).format(v || 0);

  const handleUserChange = (field) => (e) => {
    dispatch(updateUserField({ field, value: e.target.value }));
  };

  const handleCardChange = (field) => (e) => {
    dispatch(updateCardField({ field, value: e.target.value }));
  };

  const validateUser = () => {
    const { name, email, phone, address } = checkout.userInfo;
    return name.trim() && email.trim() && phone.trim() && address.trim();
  };

  const validateCard = () => {
    const { nameOnCard, cardNumber, expiry, cvv } = checkout.cardInfo;
    return (
      nameOnCard.trim() &&
      cardNumber.replace(/\s/g, "").length >= 12 &&
      expiry.trim() &&
      cvv.trim()
    );
  };

  const handleNext = () => {
    if (!validateUser())
      return alert("Please fill in all your contact details.");
    dispatch(setStep(2));
  };

  const handleBack = () => dispatch(setStep(1));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCard()) return alert("Please fill valid card details.");

    dispatch(setStatus("processing"));

    // Mock payment processing and order creation
    setTimeout(() => {
      const fakeOrderId = `ORD-${Date.now().toString().slice(-6)}`;
      dispatch(setOrderId(fakeOrderId));
      dispatch(setStatus("succeeded"));
      // clear cart and checkout data after successful order
      dispatch(clearCart());
      // Keep checkout data for showing confirmation, but reset form state if desired
      // dispatch(clearCheckout());
    }, 1200);
  };

  // Clear checkout confirmation if user navigates away from this page
  useEffect(() => {
    return () => {
      dispatch(clearCheckout());
    };
  }, [dispatch]);

  return (
    <div className="min-h-[80vh] container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

            <div className="mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    checkout.step === 1
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  1
                </div>
                <div>Customer Info</div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center ml-4 ${checkout.step === 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}">
                  2
                </div>
                <div>Payment</div>
              </div>
            </div>

            {checkout.status === "succeeded" ? (
              <div className="p-6 border rounded bg-green-50">
                <h3 className="text-lg font-medium text-green-800">
                  Order Confirmed
                </h3>
                <p className="text-sm mt-2 text-green-700">
                  Your order id is <strong>{checkout.orderId}</strong>.
                </p>
                <p className="text-sm mt-2">
                  A confirmation was sent to{" "}
                  <strong>{checkout.userInfo.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {checkout.step === 1 && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Full name
                        </label>
                        <input
                          value={checkout.userInfo.name}
                          onChange={handleUserChange("name")}
                          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                          placeholder="Jane Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          value={checkout.userInfo.email}
                          onChange={handleUserChange("email")}
                          type="email"
                          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <input
                          value={checkout.userInfo.phone}
                          onChange={handleUserChange("phone")}
                          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                          placeholder="(555) 555-5555"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <input
                          value={checkout.userInfo.address}
                          onChange={handleUserChange("address")}
                          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                          placeholder="Street, city, zip"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                      >
                        Continue to payment
                      </button>
                    </div>
                  </div>
                )}

                {checkout.step === 2 && (
                  <div>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Name on card
                        </label>
                        <input
                          value={checkout.cardInfo.nameOnCard}
                          onChange={handleCardChange("nameOnCard")}
                          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                          placeholder="Jane Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Card number
                        </label>
                        <input
                          value={checkout.cardInfo.cardNumber}
                          onChange={handleCardChange("cardNumber")}
                          inputMode="numeric"
                          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                          placeholder="4111 1111 1111 1111"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Expiry
                          </label>
                          <input
                            value={checkout.cardInfo.expiry}
                            onChange={handleCardChange("expiry")}
                            placeholder="MM/YY"
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            CVV
                          </label>
                          <input
                            value={checkout.cardInfo.cvv}
                            onChange={handleCardChange("cvv")}
                            inputMode="numeric"
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between gap-3 mt-6">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-4 py-2 rounded border border-gray-300 bg-white"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={checkout.status === "processing"}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-60"
                      >
                        {checkout.status === "processing"
                          ? "Processing..."
                          : `Pay ${currency(cart.totalPrice)}`}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        <aside className="bg-white shadow rounded p-6">
          <h3 className="text-lg font-medium mb-4">Order Summary</h3>
          <div className="space-y-3">
            {cart.items.length === 0 ? (
              <div className="text-sm text-gray-500">Your cart is empty.</div>
            ) : (
              cart.items.map((it) => (
                <div key={it.id} className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium">{it.title}</div>
                    <div className="text-xs text-gray-500">
                      Qty: {it.quantity}
                    </div>
                  </div>
                  <div className="text-sm">
                    {currency(it.price * it.quantity)}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between font-medium">
              Total <span>{currency(cart.totalPrice)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CheckoutPage;

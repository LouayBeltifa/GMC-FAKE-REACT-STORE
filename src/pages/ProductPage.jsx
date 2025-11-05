import { useParams } from "react-router";
import ButtonComponent from "../components/ButtonComponent";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({
    id: 0,
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
    rating: 0,
    image: "",
  });
  const [quantite, setQuantite] = useState(1);

  const handleChangeQuantite = (type) => {
    if (type == "increment") {
      setQuantite(quantite + 1);
    } else {
      if (quantite > 1) {
        setQuantite(quantite - 1);
      }
    }
  };

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description:
        "Noise-cancelling over-ear Bluetooth headphones with 30-hour battery life.",
      price: 199.99,
      category: "Electronics",
      stock: 45,
      rating: 4.5,
      image: "https://placehold.co/400",
    },
    {
      id: 2,
      name: "Smartwatch Pro X",
      description:
        "Water-resistant smartwatch with heart rate monitor and GPS tracking.",
      price: 249.99,
      category: "Wearables",
      stock: 30,
      rating: 4.2,
      image: "https://placehold.co/400",
    },
    {
      id: 3,
      name: "Ergonomic Office Chair",
      description:
        "Adjustable mesh chair with lumbar support and 360° rotation.",
      price: 149.99,
      category: "Furniture",
      stock: 20,
      rating: 4.7,
      image: "https://placehold.co/400",
    },
    {
      id: 4,
      name: "Mechanical Keyboard RGB",
      description: "Customizable RGB mechanical keyboard with blue switches.",
      price: 89.99,
      category: "Accessories",
      stock: 60,
      rating: 4.3,
      image: "https://placehold.co/400",
    },
    {
      id: 5,
      name: "4K Ultra HD Monitor",
      description:
        "27-inch 4K IPS monitor with HDR support and 144Hz refresh rate.",
      price: 329.99,
      category: "Electronics",
      stock: 15,
      rating: 4.8,
      image: "https://placehold.co/400",
    },
    {
      id: 6,
      name: "Running Shoes AirFlex",
      description:
        "Lightweight breathable running shoes designed for maximum comfort.",
      price: 89.99,
      category: "Fashion",
      stock: 75,
      rating: 4.1,
      image: "https://placehold.co/400",
    },
    {
      id: 7,
      name: "Portable Bluetooth Speaker",
      description:
        "Compact waterproof speaker with deep bass and 12-hour playtime.",
      price: 59.99,
      category: "Audio",
      stock: 100,
      rating: 4.4,
      image: "https://placehold.co/400",
    },
    {
      id: 8,
      name: "Smart LED Bulb",
      description:
        "Color-changing LED bulb compatible with Alexa and Google Home.",
      price: 24.99,
      category: "Home",
      stock: 150,
      rating: 4.6,
      image: "https://placehold.co/400",
    },
    {
      id: 9,
      name: "Gaming Mouse GX200",
      description:
        "High-precision 16000 DPI gaming mouse with customizable buttons.",
      price: 69.99,
      category: "Gaming",
      stock: 40,
      rating: 4.5,
      image: "https://placehold.co/400",
    },
    {
      id: 10,
      name: "Coffee Maker Deluxe",
      description:
        "Programmable coffee machine with built-in grinder and thermal carafe.",
      price: 179.99,
      category: "Appliances",
      stock: 25,
      rating: 4.7,
      image: "https://placehold.co/400",
    },
  ];

  useEffect(() => {
    const product = products.find((p) => p.id.toString() === id);

    setCurrentProduct(product);
  }, []);

  return (
    <main className="flex bg-white p-10">
      <div className="w-1/2 flex justify-center items-center">
        <img src={currentProduct.image} />
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <h2 className="text-xl font-bold">{currentProduct.name}</h2>
        <p>Price : {currentProduct.price} $</p>
        <p>Description : {currentProduct.description}</p>
        <div className="flex w-full gap-5 mt-10">
          <div className="flex gap-5">
            <button
              className="w-12 h-12 bg-blue-400 cursor-pointer text-white rounded"
              onClick={() => handleChangeQuantite("decrement")}
            >
              -
            </button>
            <p className="w-12 h-12 flex justify-center items-center">
              {quantite}
            </p>
            <button
              className="w-12 h-12 bg-blue-400 cursor-pointer text-white rounded"
              onClick={() => handleChangeQuantite("increment")}
            >
              +
            </button>
          </div>
          <ButtonComponent title="Add to cart" />
          <button className="text-xl cursor-pointer">
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;

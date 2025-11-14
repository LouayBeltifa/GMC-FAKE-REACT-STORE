import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import ProductCard from "../components/HomeComponents/ProductCard";
import { formatPrice } from "../utils/stringUtils";

function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  const filteredProducts = products.filter((product) => {
    const SearchQueryMatch =
      product.name
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase()) ||
      product.description
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase());

    const PriceMatch = product.price <= Number(maxPrice);

    const CategoriesMatch =
      selectedCategories.length > 0
        ? selectedCategories.includes(product.category)
        : true;

    return SearchQueryMatch && PriceMatch && CategoriesMatch;
  });

  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Wearables" },
    { id: 3, name: "Furniture" },
    { id: 4, name: "Accessories" },
    { id: 5, name: "Fashion" },
  ];

  return (
    <>
      <HeaderComponent
        title="Browse Products"
        description="Explore our wide range of products across various categories."
      />
      <div className="flex gap-5 p-10">
        <aside className="border-r px-2">
          <h2 className="text-xl font-bold mb-5">Browse Page</h2>
          <div className="flex flex-col mb-4 gap-1">
            <label htmlFor="searchTerm">Search :</label>
            <input
              type="text"
              id="searchTerm"
              name="searchTerm"
              className="border rounded pl-1"
              value={searchQuery}
              onChange={(elem) => setSearchQuery(elem.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4 gap-1">
            <label htmlFor="price">
              Price : ({formatPrice(0)} - {formatPrice(maxPrice)})
            </label>
            <input
              type="range"
              min="0"
              max="9999"
              className="cursor-pointer"
              step="50"
              id="price"
              name="price"
              value={maxPrice}
              onChange={(elem) => setMaxPrice(elem.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4 gap-1">
            <label htmlFor="category">Categories : </label>
            {categories.map((category) => (
              <div key={category.id} className="flex gap-2 ">
                <input
                  type="checkbox"
                  id={category.id}
                  name="category"
                  className="cursor-pointer"
                  value={category.name}
                  checked={selectedCategories.includes(category.name)}
                  onChange={(elem) => {
                    const { checked, value } = elem.target;
                    setSelectedCategories((prev) =>
                      checked
                        ? [...prev, value]
                        : prev.filter((cat) => cat !== value)
                    );
                  }}
                />
                <label htmlFor={category.id} className="cursor-pointer">
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </aside>
        <div>
          <h2 className="text-xl font-bold mb-5">Products List</h2>
          <div className="flex flex-wrap gap-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BrowsePage;

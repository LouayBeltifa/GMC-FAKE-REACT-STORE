import { Link } from "react-router";

function ProductCard({ product }) {
  return (
    <div className="bg-white border-1 rounded-xl overflow-hidden w-[250px] shadow-md hover:shadow-xl cursor-pointer transition-all">
      <Link to={"/product/" + product.id}>
        <img src={product.image} />
      </Link>
      <h3 className="font-bold px-2 mt-4">{product.name}</h3>
      <p className="text-xs px-2">{product.description}</p>
      <div className="p-2 flex justify-between mt-4">
        <p>$ {product.price}</p>
        <div className="flex gap-2">
          <button className="cursor-pointer">
            <i className="fa-solid fa-heart"></i>
          </button>
          <button className="cursor-pointer">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

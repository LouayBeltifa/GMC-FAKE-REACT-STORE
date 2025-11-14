import ProductCard from "./ProductCard";

function ProductsList({ title, description, products }) {
  return (
    <div className="px-10 py-5 bg-teal-50">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-emerald-600 mb-5">{description}</p>
      <div className="flex gap-5 w-full flex-wrap justify-between">
        {products.map((product) => {
          return <ProductCard product={product} key={product.name} />;
        })}
      </div>
    </div>
  );
}

export default ProductsList;

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ products }) => {
  return (
    <section className="container mx-auto grid grid-cols-6 gap-4">
      {products.map((product) => (
        <div
          className="border border-solid rounded align-item-center"
          key={product.id}
        >
          <img className="w-full p-4 h-4/6 text-center" src={product.image} />
          <h2 className="text-center">{product.title}</h2>
          <span>
            <p>{product.price}</p>
            <faShoppingCart></faShoppingCart>
          </span>
        </div>
      ))}
    </section>
  );
};

export default Product;

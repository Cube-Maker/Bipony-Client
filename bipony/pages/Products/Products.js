import Product from "../../src/view/HomePage/component/Product/Product";

const Products = ({ products }) => {
  return (
    <div className="container mx-auto grid grid-cols-6">
      {products.map((product) => (
        <Product product={product} key="product.id"></Product>
      ))}
    </div>
  );
};

export default Products;

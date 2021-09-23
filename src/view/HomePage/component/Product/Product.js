const Product = ({ products }) => {
  return (
    <div className="container mx-auto grid grid-cols-6">
      {products.map((product) => (
        // <Product product={product} key="product.id"></Product>
        <div key={product.id}>
          <img src={product.image} />
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Product;

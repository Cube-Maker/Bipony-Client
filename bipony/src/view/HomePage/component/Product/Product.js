const Product = ({ product }) => {
  return (
    <div>
      <img className="w-8/12" src={product.image} alt="product Photo" />
      <h5>{product.title}</h5>
    </div>
  );
};

export default Product;

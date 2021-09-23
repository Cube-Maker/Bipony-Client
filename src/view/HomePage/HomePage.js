import Product from "./component/Product/Product";

const HomePage = ({ products }) => {
  return (
    <>
      <Product products={products} />
    </>
  );
};

export default HomePage;

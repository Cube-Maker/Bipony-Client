import Products from "../../../pages/Products/Products";

const HomePage = ({ products }) => {
  console.log(products, "Hello from HomePage");
  return (
    <>
      <h3>This is Home Page</h3>
      <Products products={products} />
    </>
  );
};

export default HomePage;

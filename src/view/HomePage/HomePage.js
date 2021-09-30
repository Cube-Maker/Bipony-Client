import Banner from "./component/Banner/Banner";
import Product from "./component/Product/Product";


const HomePage = ({ products }) => {
  return (
    <>
      <Banner />
      <Product products={products} />
    </>
  );
};

export default HomePage;

import Product from "./component/Product/Product";
import Banner from "./component/Banner/Banner";


const HomePage = ({ products }) => {
  return (
    <>
      <Banner />
      <Product products={products} />
    </>
  );
};

export default HomePage;

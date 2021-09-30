import Banner from "./component/Banner/Banner";
import Product from "./component/Product/Product";


const HomePage = ({ products }) => {
  return (
    <>
      <Banner />
      <Product/>
    </>
  );
};

export default HomePage;

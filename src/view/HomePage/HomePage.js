import Product from "./component/Product/Product";
import Banner from "./component/Banner/Banner";
import SubNavigation from "./component/SubNavigation/SubNavigation";


const HomePage = ({ products }) => {
  return (
    <>
      <SubNavigation />
      <Banner />
      <Product products={products} />
    </>
  );
};

export default HomePage;

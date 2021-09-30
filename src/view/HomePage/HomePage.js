import Product from "./component/Product/Product";
import Banner from "./component/Banner/Banner";
import ShopCards from "./component/ShopCards/ShopCards";
import SubNavigation from "./component/SubNavigation/SubNavigation";


const HomePage = ({ products }) => {
  return (
    <>
      <SubNavigation />
      <Banner />
      {/* <Product products={products} />
      <ShopCards /> */}
    </>
  );
};

export default HomePage;

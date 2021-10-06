import Banner from "./component/Banner/Banner";
import ShopCards from "./component/ShopCards/ShopCards";
import SubNavigation from "./component/SubNavigation/SubNavigation";
import Product from "./component/Product/Product";


const HomePage = ({ products }) => {
  return (
    <>
      <SubNavigation />
      <Banner />
      <Product />
      <ShopCards />
    </>
  );
};

export default HomePage;

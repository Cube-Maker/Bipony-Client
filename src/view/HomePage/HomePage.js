import Banner from "./component/Banner/Banner";
import Product from "./component/Product/Product";
import ShopCards from "./component/ShopCards/ShopCards";
import SubNavigation from "./component/SubNavigation/SubNavigation";


const HomePage = ({ products }) => {
  return (
    <>
      <SubNavigation />
      <Banner />
      <Product/>
      <ShopCards />
    </>
  );
};

export default HomePage;

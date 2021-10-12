import Banner from "./component/Banner/Banner";
import ShopCards from "./component/ShopCards/ShopCards";
import SubNavigation from "./component/SubNavigation/SubNavigation";
import Product from "./component/Product/Product";


const HomePage = ({ products, data }) => {
  return (
    <>
      <SubNavigation />
      <Banner />
      <Product data={data} />
      <ShopCards />
    </>
  );
};

export default HomePage;

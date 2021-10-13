import Banner from "./component/Banner/Banner";
import ShopCards from "./component/ShopCards/ShopCards";
import Product from "./component/Product/Product";


const HomePage = ({ products, data }) => {
  return (
    <>
      <Banner />
      <Product data={data} />
      <ShopCards />
    </>
  );
};

export default HomePage;

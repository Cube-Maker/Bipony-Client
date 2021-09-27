import Product from "./component/Product/Product";
import Banner from "./component/Banner/Banner";
import ShopCards from "./component/ShopCards/ShopCards";


const HomePage = ({ products }) => {
  return (
    <>
      <Banner />
      <Product products={products} />
      <ShopCards />
    </>
  );
};

export default HomePage;

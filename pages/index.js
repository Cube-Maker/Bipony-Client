import Header from "../src/layout/Header";
import Banner from "../src/view/HomePage/component/Banner/Banner";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  return {
    props: { products: data },
  };
};

export default function Home({ products }) {
  return (
    <div>
      <Header />
      <Banner />
      <HomePage products={products} />
    </div>
  );
}

import HomePage from "../src/view/HomePage/HomePage";

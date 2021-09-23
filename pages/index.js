import Header from "../src/layout/Header";
<<<<<<< HEAD
=======
import Banner from "../src/view/HomePage/component/Banner/Banner";
>>>>>>> Backup

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { products: data },
  };
};

export default function Home({ products }) {
  return (
    <div>
      <Header />
<<<<<<< HEAD
      <HomePage products={products} />
=======
      <Banner />
      <HomePage products={products} />

>>>>>>> Backup
    </div>
  );
}

import HomePage from "../src/view/HomePage/HomePage";

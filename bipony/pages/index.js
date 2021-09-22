import Header from "../src/layout/Header";

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
      <HomePage products={products} />
    </div>
  );
}

import HomePage from "../src/view/HomePage/HomePage";

import Layout from "../src/layout/Layout";
import HomePage from "../src/view/HomePage/HomePage";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { products: data },
  };
};

export default function Home({ products }) {
  return (
    <Layout>
      <HomePage products={products} />
    </Layout>
  );
}


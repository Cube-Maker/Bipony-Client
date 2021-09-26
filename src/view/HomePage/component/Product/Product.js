import style from "./product.module.css";
const Product = ({ products }) => {
  return (
    <section className="container mx-auto">
      <div className="my-32">
        <h3 className="mb-8 text-bold text-2xl">Mobile</h3>
        <div className={style.productScroll}>
          {products
            .filter((product) => product.category === "mobile")
            .map((product) => (
              <div key="product.id" className={style.singleProduct}>
                <img className={style.img} src={product.image} />
                <h4>{product.title}</h4>
                <span className="flex">
                  <div>
                    <p>{product.price}</p>
                  </div>
                  <div>
                    <p>cart</p>
                  </div>
                </span>
              </div>
            ))}
        </div>
      </div>
      <div className="my-32">
        <h3 className="mb-8 text-bold text-2xl">Laptop</h3>
        <div className={style.productScroll}>
          {products
            .filter((product) => product.category === "laptop")
            .map((product) => (
              <div key="product.id" className={style.singleProduct}>
                <img className="w-full object-center" src={product.image} />
                <h4>{product.title}</h4>
              </div>
            ))}
        </div>
      </div>

      <div className="my-32">
        <h3 className="mb-8 text-bold text-2xl">Grocery</h3>
        <div className={style.productScroll}>
          {products
            .filter((product) => product.category === "grocery")
            .map((product) => (
              <div key="product.id" className={style.singleProduct}>
                <img className="w-48 object-center" src={product.image} />
                <h4>{product.title}</h4>
              </div>
            ))}
        </div>
      </div>

      <div className="my-32">
        <h3 className="mb-8 text-bold text-2xl">Motor Cycle</h3>
        <div className={style.productScroll}>
          {products
            .filter((product) => product.category === "bike")
            .map((product) => (
              <div key="product.id" className={style.singleProduct}>
                <img className="w-48 object-center" src={product.image} />
                <h4>{product.title}</h4>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

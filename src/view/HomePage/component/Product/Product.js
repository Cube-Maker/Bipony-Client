import style from "./product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUserCircle } from "@fortawesome/free-solid-svg-icons";
const Product = ({ products }) => {
  return (
    <section className="bg-gray-100">
      {/* Mobile category Product */}
      <div className="py-16 container mx-auto">
        <h3 className="mb-8 text-bold text-3xl">Mobile</h3>
        {/* Single Product */}
        <div className="grid grid-cols-6">
          {products
            .filter((product) => product.category === "mobile")
            .map((product) => (
              <div
                key="product.id"
                className="text-center border-solid border-black m-2  rounded bg-white"
              >
                <img width="300" className="p-6" src={product.image} />
                <div className="bg-gray-200 p-2">
                  <h4 className="text-bold text-xl">{product.title}</h4>
                  <span className="flex justify-evenly">
                    <div>
                      <h4>{product.price} &#2547;</h4>
                    </div>
                    <div>
                      <a href="#">
                        <FontAwesomeIcon
                          className={style.icon}
                          icon={faCartPlus}
                        />
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Laptop category Product */}
      <div className="py-16 container mx-auto">
        <h3 className="mb-8 text-bold text-3xl">Laptop</h3>
        {/* Single Product */}
        <div className="grid grid-cols-6">
          {products
            .filter((product) => product.category === "laptop")
            .map((product) => (
              <div
                key="product.id"
                className="text-center border-solid border-black m-2  rounded bg-white"
              >
                <img width="300" className="p-6" src={product.image} />
                <div className="bg-gray-200 p-2">
                  <h4 className="text-bold text-xl">{product.title}</h4>
                  <span className="flex justify-evenly">
                    <div>
                      <h4>{product.price} &#2547;</h4>
                    </div>
                    <div>
                      <a href="#">
                        <FontAwesomeIcon
                          className={style.icon}
                          icon={faCartPlus}
                        />
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Grocery category Product */}
      <div className="py-16 container mx-auto">
        <h3 className="mb-8 text-bold text-3xl">grocery</h3>
        {/* Single Product */}
        <div className="grid grid-cols-6">
          {products
            .filter((product) => product.category === "grocery")
            .map((product) => (
              <div
                key="product.id"
                className="text-center border-solid border-black m-2  rounded bg-white"
              >
                <img width="300" className="p-6" src={product.image} />
                <div className="bg-gray-200 p-2">
                  <h4 className="text-bold text-xl">{product.title}</h4>
                  <span className="flex justify-evenly">
                    <div>
                      <h4>{product.price} &#2547;</h4>
                    </div>
                    <div>
                      <a href="#">
                        <FontAwesomeIcon
                          className={style.icon}
                          icon={faCartPlus}
                        />
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Bike category Product */}
      <div className="py-16 container mx-auto">
        <h3 className="mb-8 text-bold text-3xl">Motor Cycle</h3>
        {/* Single Product */}
        <div className="grid grid-cols-6">
          {products
            .filter((product) => product.category === "bike")
            .map((product) => (
              <div
                key="product.id"
                className="text-center border-solid border-black m-2  rounded bg-white"
              >
                <img width="300" className="p-6" src={product.image} />
                <div className="bg-gray-200 p-2">
                  <h4 className="text-bold text-xl">{product.title}</h4>
                  <span className="flex justify-evenly">
                    <div>
                      <h4>{product.price} &#2547;</h4>
                    </div>
                    <div>
                      <a href="#">
                        <FontAwesomeIcon
                          className={style.icon}
                          icon={faCartPlus}
                        />
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Product;

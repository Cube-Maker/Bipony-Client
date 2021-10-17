import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./product.module.css";
import Link from 'next/link'


const Product = ({ data }) => {
  console.log(data);
  return (
    <section className="bg-gray-100">
      {/* Mobiles */}
      <div className={`${style.maxWidth} pt-16 mx-auto`}>
        <h3 className="mb-8 ml-8 text-bold text-3xl sm:text-center md:text-left">
          Mobile
        </h3>
        {/* Mobile cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data
            .filter((product) => product.category === "mobile")
            .map((product) => (
              <>
                <Link href={`/${product.id}`} >
                  <div
                    key="product.id"
                    className="
                      text-center
                      border-solid
                      border-black
                      m-2
                      rounded 
                      bg-white">
                    {/* Image */}
                    <img className="p-6" src={product.image} />
                    {/* Content */}
                    <div className="bg-gray-200 p-2">
                      <h4 className="text-bold text-xl">{product.title}</h4>
                      <section className="grid grid-cols-3 mt-5">
                        <p className="font-bold text-lg text-gray-700">${product.price}</p>
                        <p className={style.ProductDiscount}>-35%</p>
                        <FontAwesomeIcon className={style.AddtoCartIcon} icon={faCartPlus} />
                      </section>
                    </div>
                  </div>
                </Link>
              </>
            ))}
        </div>
      </div>
      {/* Laptops */}
      <div className={`${style.maxWidth} pt-16 mx-auto`}>
        <h3 className="mb-8 ml-8 text-bold text-3xl sm:text-center md:text-left">
          Laptop
        </h3>
        {/* Laptop Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data
            .filter((product) => product.category === "laptop")
            .map((product) => (
              <>
                <Link href={`/${product.id}`} >
                  <div
                    key="product.id"
                    className="
                text-center 
                border-solid 
                border-black 
                m-2  
                rounded 
                bg-white">
                    <img width="300" className="p-6" src={product.image} />
                    <div className="bg-gray-200 p-2">
                      <h4 className="text-bold text-xl">{product.title}</h4>
                      <section className="grid grid-cols-3 mt-5">
                        <p className="font-bold text-lg text-gray-700">${product.price}</p>
                        <p className={style.ProductDiscount}>-35%</p>
                        <FontAwesomeIcon className={style.AddtoCartIcon} icon={faCartPlus} />
                      </section>
                    </div>
                  </div>
                </Link>
              </>
            ))}
        </div>
      </div>
      {/* Groceries */}
      <div className={`${style.maxWidth} pt-16 mx-auto`}>
        <h3 className="mb-8 ml-8 text-bold text-3xl sm:text-center md:text-left">
          Grocery
        </h3>
        {/* Grocery Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data
            .filter((product) => product.category === "grocery")
            .map((product) => (
              <>
                <Link href={`/${product.id}`} >
                  <div key="product.id" className="text-center border-solid border-black m-2  rounded bg-white">
                    <img width="300" className="p-6" src={product.image} />
                    <div className="bg-gray-200 p-2">
                      <h4 className="text-bold text-xl">{product.title}</h4>
                      <section className="grid grid-cols-3 mt-5">
                        <p className="font-bold text-lg text-gray-700">${product.price}</p>
                        <p className={style.ProductDiscount}>-35%</p>
                        <FontAwesomeIcon className={style.AddtoCartIcon} icon={faCartPlus} />
                      </section>
                    </div>
                  </div>
                </Link>
              </>
            ))}
        </div>
      </div>
      {/* Bike & Scooters */}
      <div className={`${style.maxWidth} pt-16 mx-auto`}>
        <h3 className="mb-8 ml-8 text-bold text-3xl sm:text-center md:text-left">
          Motor Cycle
        </h3>
        {/* Bike Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data
            .filter((product) => product.category === "bike")
            .map((product) => (
              <>
                <Link href={`/${product.id}`} >
                  <div
                    key="product.id"
                    className="
                    text-center 
                    border-solid 
                    border-black 
                    m-2  
                    rounded 
                    bg-white">
                    <img width="300" className="p-6" src={product.image} />
                    <div className="bg-gray-200 p-2">
                      <h4 className="text-bold text-xl">{product.title}</h4>
                      <section className="grid grid-cols-3 mt-5">
                        <p className="font-bold text-lg text-gray-700">${product.price}</p>
                        <p className={style.ProductDiscount}>-35%</p>
                        <FontAwesomeIcon className={style.AddtoCartIcon} icon={faCartPlus} />
                      </section>
                    </div>
                  </div>
                </Link>
              </>
            ))}
        </div>
      </div>
    </section >
  );
};

export default Product;

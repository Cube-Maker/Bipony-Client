import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./product.module.css";

const data = [
  {
    "id": 1,
    "title": "A5 Pro",
    "description": "Umidigi A5 Pro - 6.3 inches FHD - Android 9 Pie - 4GB RAM - 32GB ROM - Triple Camera",
    "category": "mobile",
    "price": 9999,
    "image": "https://i.ibb.co/545DGyT/20.jpg"
  },
  {
    "id": 2,
    "title": "Mi 8 pro",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "mobile",
    "price": 19999,
    "image": "https://i.ibb.co/601Jz06/18.jpg"
  },
  {
    "id": 3,
    "title": "Realme Narzo",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "mobile",
    "price": 22999,
    "image": "https://i.ibb.co/4RWVBpN/19.jpg"
  },
  {
    "id": 4,
    "title": "Narzo 30",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "mobile",
    "price": 21999,
    "image": "https://i.ibb.co/xhHdWgK/17.jpg"
  },
  {
    "id": 5,
    "title": "Galaxy M21",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "mobile",
    "price": 19799,
    "image": "https://i.ibb.co/LtZq8LB/14.jpg"
  },
  {
    "id": 6,
    "title": "Realme 8 Pro",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "mobile",
    "price": 18799,
    "image": "https://i.ibb.co/9p329bk/15.jpg"
  },
  {
    "id": 7,
    "title": "Realme 2 Pro",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "mobile",
    "price": 21200,

    "image": "https://i.ibb.co/VSXWGQP/9.jpg"
  },
  {
    "id": 8,
    "title": "OUKITEL WP8",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "mobile",
    "price": 14999,
    "image": "https://i.ibb.co/pdqFQ6t/13.jpg"
  },
  {
    "id": 9,
    "title": "Realme C21",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "mobile",
    "price": 10686,
    "image": "https://i.ibb.co/9c7cM7c/12.jpg"
  },
  {
    "id": 10,
    "title": "Motorola G30",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "mobile",
    "price": 19299,
    "image": "https://i.ibb.co/jTVSd08/11.jpg"
  },
  {
    "id": 13,
    "title": "Dell Laptop",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/mqL8ZNm/Lg-laptop.jpg"
  },
  {
    "id": 13,
    "title": "lenevo",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/R7L0b0K/msi-Gaming.jpg"
  },
  {
    "id": 14,
    "title": "lenevo 320",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/ZMgLmSb/Lenovo-pavillion320.jpg"
  },
  {
    "id": 15,
    "title": "Dell Vsostro",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/8PVw7nW/Lenevo-ideabook.png"
  },
  {
    "id": 16,
    "title": "Dell inspiron",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/98ppVj8/Lenevo-15nrq.jpg"
  },
  {
    "id": 18,
    "title": "Lenvo ideapad",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/nBnXQMs/hp-pavillion-15.jpg"
  },
  {
    "id": 19,
    "title": "Sony laptop",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/JRmMQ9j/hp-alite.jpg"
  },
  {
    "id": 29,
    "title": "Lenvo ideapad",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/PtdQ8Zs/Dell-vostro.png"
  },
  {
    "id": 30,
    "title": "Dell pavilion",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/TMXCWnh/dell-pavillion.png"
  },
  {
    "id": 31,
    "title": "Chuwi",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/6vFsRCn/chuwi.jpg"
  },
  {
    "id": 37,
    "title": "Mosur dal",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/4mxwDFF/20.webp"
  },
  {
    "id": 38,
    "title": "Chicken Masal",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/zsjt0xp/19.webp"
  },
  {
    "id": 37,
    "title": "Deshi Dal",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/4mxwDFF/20.webp"
  },
  {
    "id": 39,
    "title": "Mustard Oil",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/THHy0MG/18.webp"
  },
  {
    "id": 40,
    "title": "Milk powder",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/THHy0MG/18.webp"
  },
  {
    "id": 38,
    "title": "Mutton Curry",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/zsjt0xp/19.webp"
  },
  {
    "id": 41,
    "title": "Swift",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/fktvsKK/17.webp"
  },
  {
    "id": 42,
    "title": "Pran ghee",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/fdwrYHp/16.webp"
  },
  {
    "id": 41,
    "title": "Beef Spice",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/fktvsKK/17.webp"
  },

  {
    "id": 42,
    "title": "Pran ghee",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/fdwrYHp/16.webp"
  },
  {
    "id": 54,
    "title": "Suzuki gsx",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/2yL3dCx/XSR155cc.jpg"
  },
  {
    "id": 55,
    "title": "Tvs radeon",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/GdVKdyK/TVSradeon.jpg"
  },
  {
    "id": 56,
    "title": "Apache",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/Rc7XpPh/TVSapache-RTR.jpg"
  },
  {
    "id": 57,
    "title": "Apache",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/xF1mzLP/suzuki-gsx125.jpg"
  },
  {
    "id": 58,
    "title": "Runner Xstreet",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/X76x9j7/Runner-Xtreet.jpg"
  },
  {
    "id": 59,
    "title": "Runner Xstreet",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/44g82LK/Runner-Moto-Turbo.jpg"
  },
  {
    "id": 60,
    "title": "Runner Turbo",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/44g82LK/Runner-Moto-Turbo.jpg"
  },
  {
    "id": 61,
    "title": "Hunk",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/GMkSNZS/Hunk150.jpg"
  },
  {
    "id": 62,
    "title": "Hunk 150",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/GMkSNZS/Hunk150.jpg"
  },
  {
    "id": 63,
    "title": "Honda CBR150",
    "description": "Realme Narzo 30 - 6GB RAM/128GB ROM - 5000mAH Battery",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/KzYkgH1/honda-CBR150.jpg"
  }
]

const Product = () => {
  return (
    <section className="bg-gray-100">
      {/* Mobiles */}
      <div className={`${style.maxWidth} pt-16 mx-auto`}>
        <h3 className="mb-8 ml-8 text-bold text-3xl sm:text-center md:text-left">
          Mobile
        </h3>
        {/* Mobile Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {
            data.filter((products) => products.category === "mobile")
              .map((product) => (
                <div key="product.id" className="text-center border-solid border-black m-2  rounded bg-white">
                  <img src={product.image} />
                  <p className="font-bold text-lg text-center mt-5">{product.title}</p>
                </div>
              ))
          }
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
              <div
                key="product.id"
                className="
                text-center 
                border-solid 
                border-black 
                m-2  
                rounded 
                bg-white">
                <img
                  width="300"
                  className="p-6"
                  src={product.image} />
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

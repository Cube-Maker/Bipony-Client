import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactImageMagnify from 'react-image-magnify';
import style from "../src/view/HomePage/component/Product/productDetails.module.css";
const data =[
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
    
]
const productDetails = () => {
    return ( 
        <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://i.ibb.co/545DGyT/20.jpg"/> */}

            <ReactImageMagnify className="lg:w-1/2 w-full rounded border border-gray-200" {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    // isFluidWidth: true,
                    width: 400,
                    height: 400,
                    src: "https://i.ibb.co/545DGyT/20.jpg",
                },
                largeImage: {
                    src: "https://i.ibb.co/545DGyT/20.jpg",
                    width: 1000,
                    height: 500
                }
            }} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                <div className="flex mb-4">
                <span className="flex items-center">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                </span> 
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    </a>
                </span>
                </div>
                <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                        </svg>
                    </span>
                    </div>
                </div>
                </div>
                <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg> 
                </button>
                </div>
            </div>
            </div>
        </div>
        {/* Related Product Area Start Here */}
        <div className="Related product">
        <div className={`${style.maxWidth} pt-16 mx-auto`}>
        <h3 className="mb-8 ml-8 text-bold text-3xl sm:text-center md:text-left">
          Related Product
        </h3>
        {/* Laptop Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data
            .filter((product) => product.category === "mobile")
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
        </div>
        </section>
     );
}
 
export default productDetails;
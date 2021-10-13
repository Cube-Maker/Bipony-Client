import { faCartPlus, faHeart, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Makeup from "../ProductDetails/productDetails.module.css";
import Image from 'next/image'
import Image1 from './1.jpg'

import ReactImageZoom from 'react-image-zoom';
const props = { width: 500, height: 400, zoomWidth: 500, };

const data = [
  {
    "id": 1,
    "title": "A5 Pro",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "mobile",
    "price": 9999,
    "image": "https://i.ibb.co/545DGyT/20.jpg"
  },
  {
    "id": 2,
    "title": "Mi 8 pro",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "mobile",
    "price": 19999,
    "image": "https://i.ibb.co/601Jz06/18.jpg"
  },
  {
    "id": 3,
    "title": "Realme Narzo",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "mobile",
    "price": 22999,
    "image": "https://i.ibb.co/4RWVBpN/19.jpg"
  },
  {
    "id": 4,
    "title": "Narzo 30",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "mobile",
    "price": 21999,
    "image": "https://i.ibb.co/xhHdWgK/17.jpg"
  },
  {
    "id": 5,
    "title": "Galaxy M21",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "mobile",
    "price": 19799,
    "image": "https://i.ibb.co/LtZq8LB/14.jpg"
  },
  {
    "id": 6,
    "title": "Realme 8 Pro",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "mobile",
    "price": 18799,
    "image": "https://i.ibb.co/9p329bk/15.jpg"
  },
  {
    "id": 7,
    "title": "Realme 2 Pro",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "mobile",
    "price": 21200,

    "image": "https://i.ibb.co/VSXWGQP/9.jpg"
  },
  {
    "id": 8,
    "title": "OUKITEL WP8",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "mobile",
    "price": 14999,
    "image": "https://i.ibb.co/pdqFQ6t/13.jpg"
  },
  {
    "id": 9,
    "title": "Realme C21",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "mobile",
    "price": 10686,
    "image": "https://i.ibb.co/9c7cM7c/12.jpg"
  },
  {
    "id": 10,
    "title": "Motorola G30",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "mobile",
    "price": 19299,
    "image": "https://i.ibb.co/jTVSd08/11.jpg"
  },
  {
    "id": 13,
    "title": "Dell Laptop",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/mqL8ZNm/Lg-laptop.jpg"
  },
  {
    "id": 13,
    "title": "lenevo",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/R7L0b0K/msi-Gaming.jpg"
  },
  {
    "id": 14,
    "title": "lenevo 320",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/ZMgLmSb/Lenovo-pavillion320.jpg"
  },
  {
    "id": 15,
    "title": "Dell Vsostro",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/8PVw7nW/Lenevo-ideabook.png"
  },
  {
    "id": 16,
    "title": "Dell inspiron",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/98ppVj8/Lenevo-15nrq.jpg"
  },
  {
    "id": 18,
    "title": "Lenvo ideapad",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/nBnXQMs/hp-pavillion-15.jpg"
  },
  {
    "id": 19,
    "title": "Sony laptop",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/JRmMQ9j/hp-alite.jpg"
  },
  {
    "id": 29,
    "title": "Lenvo ideapad",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/PtdQ8Zs/Dell-vostro.png"
  },
  {
    "id": 30,
    "title": "Dell pavilion",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/TMXCWnh/dell-pavillion.png"
  },
  {
    "id": 31,
    "title": "Chuwi",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "laptop",
    "price": 14700,
    "image": "https://i.ibb.co/6vFsRCn/chuwi.jpg"
  },
  {
    "id": 37,
    "title": "Mosur dal",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/4mxwDFF/20.webp"
  },
  {
    "id": 38,
    "title": "Chicken Masal",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/zsjt0xp/19.webp"
  },
  {
    "id": 37,
    "title": "Deshi Dal",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/4mxwDFF/20.webp"
  },
  {
    "id": 39,
    "title": "Mustard Oil",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/THHy0MG/18.webp"
  },
  {
    "id": 40,
    "title": "Milk powder",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/THHy0MG/18.webp"
  },
  {
    "id": 38,
    "title": "Mutton Curry",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/zsjt0xp/19.webp"
  },
  {
    "id": 41,
    "title": "Swift",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/fktvsKK/17.webp"
  },
  {
    "id": 42,
    "title": "Pran ghee",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/fdwrYHp/16.webp"
  },
  {
    "id": 41,
    "title": "Beef Spice",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/fktvsKK/17.webp"
  },

  {
    "id": 42,
    "title": "Pran ghee",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "grocery",
    "price": 14700,
    "image": "https://i.ibb.co/fdwrYHp/16.webp"
  },
  {
    "id": 54,
    "title": "Suzuki gsx",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/2yL3dCx/XSR155cc.jpg"
  },
  {
    "id": 55,
    "title": "Tvs radeon",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/GdVKdyK/TVSradeon.jpg"
  },
  {
    "id": 56,
    "title": "Apache",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/Rc7XpPh/TVSapache-RTR.jpg"
  },
  {
    "id": 57,
    "title": "Apache",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/xF1mzLP/suzuki-gsx125.jpg"
  },
  {
    "id": 58,
    "title": "Runner Xstreet",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/X76x9j7/Runner-Xtreet.jpg"
  },
  {
    "id": 59,
    "title": "Runner Xstreet",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/44g82LK/Runner-Moto-Turbo.jpg"
  },
  {
    "id": 60,
    "title": "Runner Turbo",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/44g82LK/Runner-Moto-Turbo.jpg"
  },
  {
    "id": 61,
    "title": "Hunk",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/GMkSNZS/Hunk150.jpg"
  },
  {
    "id": 62,
    "title": "Hunk 150",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/GMkSNZS/Hunk150.jpg"
  },
  {
    "id": 63,
    "title": "Honda CBR150",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.",
    "category": "bike",
    "price": 14700,
    "image": "https://i.ibb.co/KzYkgH1/honda-CBR150.jpg"
  }
]

const ProductDetails = ({ productId }) => {
  const product = data.find(pd => pd.id == productId)
  return (
    <section className={Makeup.ProductDetails}>
      {/* <p>{p.description}</p> */}
      {/* ...Top Section start... */}
      <section className="grid md:grid-cols-2 p-10">
        {/* Product Image */}
        <div className={Makeup.Image}>
          <ReactImageZoom {...props} img={product.image} />
        </div>
        {/* ...Product Content Start... */}
        <div className={Makeup.ProductContent}>
          {/* Title */}
          <p className="font-bold text-2xl mb-2">{product.title}</p>
          {/* Shop Name */}
          <p className="mb-1">Bipony shop</p>
          {/* Review */}
          <div className="flex">
            <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
            <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
            <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
            <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
            <FontAwesomeIcon icon={faStarHalf} className={Makeup.Icon} />
            <p className="-mt-1 text-red-400 ml-2">177+ Review</p>
          </div>
          {/* About this item */}
          <p className="font-bold mb-0">About this item:</p>
          <p>{product.description}</p>
          {/* Comment & Report */}
          <div className="flex">
            <p className="text-yellow-600 mr-5">Comment</p>
            <p className="text-yellow-600">Report</p>
          </div>
          {/* Price */}
          <p className="font-bold text-xl text-green-700">${product.price}</p>
          {/* Buttons */}
          <div className="flex">
            <button className={Makeup.AddToCartButton}><FontAwesomeIcon icon={faCartPlus} /> Add to cart</button>
            <button className={Makeup.AddToWishList}><FontAwesomeIcon icon={faHeart} /> Add to Wishlist</button>
          </div>
        </div>
        {/* ...Product Content End... */}
      </section>
      {/* ...Top section end... */}

      {/* ...Review section start... */}
      <section className="p-10">
        <div className="grid md:grid-cols-2">
          {/* Ttile */}
          <p className="font-bold text-xl">Reviews</p>
          {/* All review link*/}
          <p className="font-bold text-blue-500 ml-auto">All Reviews</p>
        </div>
        {/* ...Reviews... */}
        <div className="grid md:grid-cols-3 mt-5">
          {/* Review1 */}
          <div className="flex">
            {/* Profile Pic */}
            <div>
              <Image className={Makeup.ReviewImage} src={Image1} width="100%" height="100%" alt="" />
            </div>
            {/* Content */}
            <div>
              <div className="flex ml-3 mb-0">
                {/* name */}
                <p className="font-bold">Rahul</p>
                {/* Review stars */}
                <div className="flex mt-1 ml-5">
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                </div>
              </div>
              {/* Review text */}
              <p className="ml-3 -mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit velit quos sunt blanditiis quae, quod consectetur.</p>
            </div>
          </div>
          {/* Review2 */}
          <div className="flex">
            {/* Profile Pic */}
            <div>
              <Image className={Makeup.ReviewImage} src={Image1} width="100%" height="100%" alt="" />
            </div>
            {/* Content */}
            <div>
              <div className="flex ml-3 mb-0">
                {/* name */}
                <p className="font-bold">Malik</p>
                {/* Review stars */}
                <div className="flex mt-1 ml-5">
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                </div>
              </div>
              {/* Review text */}
              <p className="ml-3 -mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit velit quos sunt blanditiis quae, quod consectetur.</p>
            </div>
          </div>
          {/* Review3 */}
          <div className="flex">
            {/* Profile Pic */}
            <div>
              <Image className={Makeup.ReviewImage} src={Image1} width="100%" height="100%" alt="" />
            </div>
            {/* Content */}
            <div>
              <div className="flex ml-3 mb-0">
                {/* name */}
                <p className="font-bold">Noyon</p>
                {/* Review stars */}
                <div className="flex mt-1 ml-5">
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                </div>
              </div>
              {/* Review text */}
              <p className="ml-3 -mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit velit quos sunt blanditiis quae, quod consectetur.</p>
            </div>
          </div>
          {/* Review4 */}
          <div className="flex">
            {/* Profile Pic */}
            <div>
              <Image className={Makeup.ReviewImage} src={Image1} width="100%" height="100%" alt="" />
            </div>
            {/* Content */}
            <div>
              <div className="flex ml-3 mb-0">
                {/* name */}
                <p className="font-bold">Badhon</p>
                {/* Review stars */}
                <div className="flex mt-1 ml-5">
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                </div>
              </div>
              {/* Review text */}
              <p className="ml-3 -mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit velit quos sunt blanditiis quae, quod consectetur.</p>
            </div>
          </div>
          {/* Review5 */}
          <div className="flex">
            {/* Profile Pic */}
            <div>
              <Image className={Makeup.ReviewImage} src={Image1} width="100%" height="100%" alt="" />
            </div>
            {/* Content */}
            <div>
              <div className="flex ml-3 mb-0">
                {/* name */}
                <p className="font-bold">Sumit</p>
                {/* Review stars */}
                <div className="flex mt-1 ml-5">
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                </div>
              </div>
              {/* Review text */}
              <p className="ml-3 -mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit velit quos sunt blanditiis quae, quod consectetur.</p>
            </div>
          </div>
          {/* Review6 */}
          <div className="flex">
            {/* Profile Pic */}
            <div>
              <Image className={Makeup.ReviewImage} src={Image1} width="100%" height="100%" alt="" />
            </div>
            {/* Content */}
            <div>
              <div className="flex ml-3 mb-0">
                {/* name */}
                <p className="font-bold">Jhankar</p>
                {/* Review stars */}
                <div className="flex mt-1 ml-5">
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                  <FontAwesomeIcon icon={faStar} className={Makeup.Icon} />
                </div>
              </div>
              {/* Review text */}
              <p className="ml-3 -mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit velit quos sunt blanditiis quae, quod consectetur.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ...Review Section end... */}
    </section>
  );
}

export default ProductDetails;
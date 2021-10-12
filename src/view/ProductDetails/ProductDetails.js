import { faCartPlus, faHeart, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Makeup from "../ProductDetails/productDetails.module.css";

import ReactImageZoom from 'react-image-zoom';
const props = { width: 400, height: 400, zoomWidth: 500, img: "https://i.ibb.co/xhHdWgK/17.jpg" };

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

]
const ProductDetails = () => {
  return (
    <section className={Makeup.ProductDetails}>
      {/* ...Top Section start... */}
      <section className="grid md:grid-cols-2 py-5 px-20">
        {/* Product Image */}
        <div className={Makeup.Image}>
          <ReactImageZoom {...props} />
        </div>
        {/* ...Product Content Start... */}
        <div>
          {/* Title */}
          <p className="font-bold text-2xl mb-2 mt-5">Realme 3 pro</p>
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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officia hic dignissimos. Earum a eos iure repellat, fugiat molestias architecto voluptatum repellendus aliquam incidunt saepe officiis beatae quod corrupti numquam id quisquam sequi rerum sed quam doloribus consequuntur nostrum. Architecto.</p>
          {/* Comment & Report */}
          <div className="flex">
            <p className="text-yellow-600 mr-5">Comment</p>
            <p className="text-yellow-600">Report</p>
          </div>
          {/* Price */}
          <p className="font-bold text-xl text-green-700">$199</p>
          {/* Buttons */}
          <div className="flex">
            <button className={Makeup.AddToCartButton}><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
            <button className={Makeup.AddToWishList}><FontAwesomeIcon icon={faHeart} /> Add to Wishlist</button>
          </div>
        </div>
        {/* ...Product Content End... */}
      </section>
      {/* ...Top section end... */}
    </section>
  );
}

export default ProductDetails;
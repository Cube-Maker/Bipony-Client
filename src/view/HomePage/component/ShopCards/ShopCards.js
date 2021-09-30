import React from 'react';

let shops = [
    {
        id: 1,
        name: 'Tech Valley',
        background_image: "https://i.pinimg.com/originals/1d/c8/f4/1dc8f4657afcdbe6a2930fb15a55fbec.jpg",
        description: 'Lorem ipsum dolor sit amet',
        logo: "https://www.logopik.com/wp-content/uploads/edd/2018/10/Letter-T-Logo-Vector.png",

    },
    {
        id: 2,
        name: 'Gadget Gang',
        background_image: "https://metropolismag.com/wp-content/uploads/2021/07/FAMILY_COLOR_1.jpg",
        description: 'Lorem ipsum dolor sit amet',
        logo: "https://st.depositphotos.com/1001311/3432/i/600/depositphotos_34328159-stock-photo-golden-matt-letter-g-jewellery.jpg",

    },
    {
        id: 3,
        name: 'FootWare',
        background_image: "https://cdn.luxe.digital/media/2021/06/18093702/most-comfortable-men-sneakers-adidas-ultraboost-21-review-luxe-digital%402x.jpg",
        description: 'Lorem ipsum dolor sit amet',
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiL77iAGOh8e7sG17FB3Ut3exOy5-mI4f8WQ&usqp=CAU",

    },
    {
        id: 4,
        name: 'Furniture Mart',
        background_image: "https://www.sherrillfurniture.com/sites/sherrillfurniture.com/files/static/Sherrill-Furniture_3325_Slide.jpg",
        description: 'Lorem ipsum dolor sit amet',
        logo: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7bb92109070469.5fcb7c69c7265.jpg",

    },
    {
        id: 5,
        name: 'Grocery Palace',
        background_image: "https://i.pinimg.com/originals/21/5e/31/215e31a98cb6fd49cf29b70d8af45d6c.png",
        description: 'Lorem ipsum dolor sit amet',
        logo: "https://t3.ftcdn.net/jpg/03/20/95/60/360_F_320956059_3R6M6nt4VtgNqKGnSSRV73CytZDfsCsm.jpg",
    },
];

const ShopCards = () => {
    return (
        <section className="pt-16">
            <h3 className="mb-8 text-bold text-3xl">Trending Shops</h3>
            <div className="flex flex-row justify-center my-10">
                <div style={{ width: '90%' }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8" >
                    {
                        shops.map((shop) =>
                            <div className="relative col-span-1 border-2 p-1 border-gray-200 rounded-lg cursor-pointer hover:shadow-xl" key={shop.id}>
                                <div className="flex flex-col justify-between">
                                    <div className="border-b-2 flex flex-col justify-center items-center w-full h-28">
                                        <img src={shop.background_image} alt="" className="w-full h-full" />
                                    </div>
                                    <div className="bg-white flex flex-col justify-center items-center">
                                        <div className="mt-12">
                                            <h4 className="text-xl font-bold text-center">{shop.name}</h4>
                                            <h5 className="text-gray-400">{shop.description}</h5>
                                        </div>
                                    </div>
                                    <div style={{ top: "48%" }} className="bg-white shadow p-1 h-16 w-16 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <img src={shop.logo} alt="" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );

};

export default ShopCards;
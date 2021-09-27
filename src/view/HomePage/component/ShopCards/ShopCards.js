import React from 'react';

let shops = [
    {
        id: 1,
        name: 'Tech Shop Bd',
        background_image: "https://www.elegantthemes.com/blog/wp-content/uploads/2020/12/online-shopping-products.png",
        description: 'Lorem ipsum dolor sit amet',
        logo: "https://play-lh.googleusercontent.com/VBzSnpA80QE2YSoPBlt3kEIjo197qqJDpEKOeb_UPvkrdcsbJGTLWCNw4GisDegXQW6S",

    },
    {
        id: 2,
        name: 'Tech Shop Bd',
        background_image: "https://www.elegantthemes.com/blog/wp-content/uploads/2020/12/online-shopping-products.png",
        description: 'Lorem ipsum dolor sit amet',
        logo: "https://play-lh.googleusercontent.com/VBzSnpA80QE2YSoPBlt3kEIjo197qqJDpEKOeb_UPvkrdcsbJGTLWCNw4GisDegXQW6S",

    },
    {
        id: 3,
        name: 'Tech Shop Bd',
        background_image: "https://www.elegantthemes.com/blog/wp-content/uploads/2020/12/online-shopping-products.png",
        description: 'Lorem ipsum dolor sit amet',
        logo: "https://play-lh.googleusercontent.com/VBzSnpA80QE2YSoPBlt3kEIjo197qqJDpEKOeb_UPvkrdcsbJGTLWCNw4GisDegXQW6S",

    },
    {
        id: 4,
        name: 'Tech Shop Bd',
        background_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1200px-Football_%28soccer_ball%29.svg.png",
        description: 'Lorem ipsum dolor sit amet',
        logo: "https://play-lh.googleusercontent.com/VBzSnpA80QE2YSoPBlt3kEIjo197qqJDpEKOeb_UPvkrdcsbJGTLWCNw4GisDegXQW6S",

    },
    {
        id: 5,
        name: 'Tech Shop Bd',
        background_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1200px-Football_%28soccer_ball%29.svg.png",
        description: 'Lorem ipsum dolor sit amet',
        logo: "https://play-lh.googleusercontent.com/VBzSnpA80QE2YSoPBlt3kEIjo197qqJDpEKOeb_UPvkrdcsbJGTLWCNw4GisDegXQW6S",
    },
];

const ShopCards = () => {
    return (
        <section className="flex flex-row justify-center my-10">
            <div style={{width: '90%'}} className="grid grid-cols-5 gap-8" >
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
        </section>
    );

};

export default ShopCards;
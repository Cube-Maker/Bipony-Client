import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingBag, faStoreSlash, faStoreAltSlash, faStore, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const SideNavigationBar = ({component, setComponent}) => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0  md:relative md:h-screen z-10 w-full md:w-48">
                
                <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                    <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                        <li onClick={() => setComponent("ApprovedShops")} className="mr-3 flex-1 cursor-pointer">
                            <div className="flex items-center block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 border-gray-800 hover:border-pink-500">
                                <div><FontAwesomeIcon icon={faStore} className="text-white mr-2" /></div>
                                <div><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 hover:text-white md:text-gray-400 block md:inline-block">Approved Shop</span></div>
                            </div>
                        </li>
                        <li onClick={() => setComponent("PendingShops")} className="mr-3 flex-1 cursor-pointer">
                            <div className="flex items-center block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 border-gray-800 hover:border-purple-500">
                                <div><FontAwesomeIcon icon={faStoreAltSlash} className="text-white mr-2" /> </div>
                                <div>
                                    <span className="pb-1 md:pb-0 text-xs md:text-base hover:text-white md:text-gray-400 block md:inline-block">Pending shops</span>
                                </div>
                            </div>
                        </li>
                        <li onClick={() => setComponent("ProductApproval")} className="mr-3 flex-1 cursor-pointer">
                            <div className="flex items-center block py-1 md:py-3 pl-1 align-middle  no-underline border-gray-800 border-b-2 hover:border-blue-600">
                                <div><FontAwesomeIcon icon={faShoppingBag} className="text-white mr-3" /></div>
                                <div>
                                    <span className="pb-1 md:pb-0 text-xs md:text-base hover:text-white md:text-gray-400 block md:inline-block">Product Approval</span>
                                </div>
                            </div>
                        </li>
                        <li onClick={() => setComponent("Reports")} className="mr-3 flex-1 cursor-pointer">
                            <div className="block py-1 md:py-3 pl-0 md:pl-1 align-middle no-underline border-b-2 border-gray-800 hover:border-red-500">
                                <FontAwesomeIcon icon={faExclamationTriangle} className="text-white mr-2" /> <span className="pb-1 md:pb-0 text-xs md:text-base hover:text-white md:text-gray-400 block md:inline-block">Reports</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideNavigationBar;
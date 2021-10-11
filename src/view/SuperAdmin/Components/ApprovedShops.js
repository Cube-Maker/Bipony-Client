import React from 'react';
import { shops } from '../../HomePage/component/ShopCards/ShopCards';
import axios from 'axios';
import { Spin } from 'antd';
const ApprovedShops = () => {
    const [approvedShops, setApprovedShops] = React.useState([]);
    React.useEffect(() => {
        axios.get('http://localhost:5000/api/shops').then(res => {
            setApprovedShops(res.data);
        });
    }, []);
    return (
        <div className="w-full">
            <h1 className="text-2xl text-center border-b-2 border-gray-800 p-2">Approved Shops</h1>
            <div className="flex flex-col w-full">
                <div className="w-full">
                    <div className="border-b border-gray-200 shadow w-full">
                        <table className="divide-y divide-gray-300 w-full table-auto">
                            <thead className="bg-gray-50 w-full">
                                <tr>
                                    <th className="px-6 py-2 text-lg text-gray-500">
                                        ID
                                    </th>
                                    <th className="px-6 py-2 text-lg text-gray-500">
                                        Name
                                    </th>
                                    <th className="px-6 py-2 text-lg text-gray-500">
                                        Total Products
                                    </th>
                                    <th className="px-6 py-2 text-lg text-gray-500">
                                        Creation Date
                                    </th>
                                    <th className="px-6 py-2 text-lg text-gray-500">
                                        Hold
                                    </th>
                                    <th className="px-6 py-2 text-lg text-gray-500">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-300">
                                {
                                    approvedShops.length > 1 ?
                                        approvedShops.map(shop => {
                                            return <tr key={shop.id} className="whitespace-nowrap text-center">
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {shop.id}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                        {shop.name}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">3</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    02-10-2021
                                                </td>
                                                <td className="px-6 py-4">
                                                    <a href="#" className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Hold</a>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <a href="#" className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</a>
                                                </td>
                                            </tr>
                                        })
                                        :
                                        <tr className="w-full whitespace-nowrap text-center">
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                <Spin size="middle" />
                                            </td>
                                            <td className="px-6 py-4">
                                                <Spin size="middle" />
                                            </td>
                                            <td className="px-6 py-4">
                                                <Spin size="middle" />
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                <Spin size="middle" />
                                            </td>
                                            <td className="px-6 py-4">
                                                <Spin size="middle" />
                                            </td>
                                            <td className="px-6 py-4">
                                                <Spin size="middle" />
                                            </td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovedShops;
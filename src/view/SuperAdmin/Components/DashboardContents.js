import React from 'react';
import ApprovedShops from './ApprovedShops';
import PendingShops from './PendingShops';
import ProductApproval from './ProductApproval';
import Reports from './Reports';

const DashboardContents = ({component}) => {
    return (
        <div style={{ "marginTop": "66px"}} className="w-full bg-gray-200">
            {component === "ApprovedShops" && <ApprovedShops />}
            {component === "PendingShops" && <PendingShops />}
            {component === "ProductApproval" && <ProductApproval />}
            {component === "Reports" && <Reports />}
        </div>
    );
};

export default DashboardContents;
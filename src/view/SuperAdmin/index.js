import React from 'react';
import AdminNavbar from './Components/AdminNavbar'
import DashboardContents from './Components/DashboardContents';
import SideNavigationBar from './Components/SideNavigationBar';

const SuperAdmin = () => {
    const [component, setComponent] = React.useState('ApprovedShops');
    return (
        <div className="relative bg-gray-200 font-sans leading-normal tracking-normal">
            <AdminNavbar />
            <div className="flex">
                <SideNavigationBar component={component} setComponent={setComponent}/>
                <DashboardContents component={component} setComponent={setComponent}/>
            </div>
        </div>
    );
};

export default SuperAdmin;
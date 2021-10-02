import Link from 'next/link'
import React, { useEffect } from 'react';

const AdminNavbar = () => {
    /*Toggle dropdown list*/

    function toggleDD(myDropMenu) {
        document.getElementById(myDropMenu).classList.toggle("invisible");
    }
    /*Filter dropdown options*/
    function filterDD(myDropMenu, myDropMenuSearch) {
        var input, filter, ul, li, a, i;
        input = document.getElementById(myDropMenuSearch);
        filter = input.value.toUpperCase();
        div = document.getElementById(myDropMenu);
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
            if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }
    // Close the dropdown menu if the user clicks outside of it
   
    if (typeof window !== "undefined") {
        window.onclick = function(event) {
            if (!event.target.matches('.drop-button') && !event.target.matches('.drop-search')) {
                var dropdowns = document.getElementsByClassName("dropdownlist");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (!openDropdown.classList.contains('invisible')) {
                        openDropdown.classList.add('invisible');
                    }
                }
            }
        }
      }

    return (
        <nav className="bg-gray-800 pt-2 md:pt-1 fixed pb-1 px-1 mt-0 h-auto w-full z-20 top-0">
            <div className="flex flex-wrap items-center">
                <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                    <p>
                        <span className="text-xl pl-2">Admin Dashboard</span>
                    </p>
                </div>

                <div>
                    
                </div>

                <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                    <span className="relative w-full">
                        <form action="">
                            <input type="search" placeholder="Search" className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal" />
                        </form>
                        <div className="absolute search-icon" style={{ "top": " 1rem", "left": ".8rem" }}>
                            <svg className="fill-current pointer-events-none text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                            </svg>
                        </div>
                    </span>
                </div>

                <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li className="flex-1 md:flex-none md:mr-3">
                            <Link href="/"> 
                                <a className="inline-block py-2 px-4 text-white no-underline">Home</a>
                            </Link>
                        </li>
                        <li className="flex-1 md:flex-none md:mr-3">
                            <a className="inline-block text-gray-200 no-underline hover:text-gray-400 hover:text-underline py-2 px-4" href="#">link</a>
                        </li>
                        <li className="flex-1 md:flex-none md:mr-3">
                            <div className="relative inline-block">
                                <button onClick={() => toggleDD('myDropdown')} className="drop-button text-white focus:outline-none"> <span className="pr-2"><i className="em em-robot_face"></i></span> Hi, User <svg className="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg></button>
                                <div id="myDropdown" className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible">
                                    <form>
                                        <input type="text" className="drop-search p-2 text-gray-600" placeholder="Search.." id="myInput" onKeyUp={() => filterDD('myDropdown', 'myInput')} />
                                    </form>
                                    <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-user fa-fw"></i> Profile</a>
                                    <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-cog fa-fw"></i> Settings</a>
                                    <div className="border border-gray-800"></div>
                                    <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fas fa-sign-out-alt fa-fw"></i> Log Out</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default AdminNavbar;
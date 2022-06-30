import React from 'react';
import PropTypes from 'prop-types';


Header.propTypes = {
    
};

function Header(props) {
    return (
        <div>
            <nav
                className="z-40 sticky top-0 md:static flex flex-col md:flex-row md:items-center bg-[url('/images/bg-header.jpg')] w-full h-[90px] md:h-[150px] shadow-lg">
                <a href="#">
                    <img className="w-[48px] h-[48px] md:w-[100px] md:h-[100px] rounded-full md:mx-5 xl:ml-[100px] xl:mr-[100px] my-[2px] mx-auto"
                        src="/images/Sonder2.png" alt="logo" />
                </a>
                <div className="flex flex-row items-start md:items-center justify-between mx-2 2xl:mx-8 grow">
                    <div className="md:mt-[57px] grow flex flex-col mr-[30px]">
                        <div className="flex items-start">
                            <button type="button" aria-label="Navigation" id="toggleSidebarMobile" aria-expanded="false"
                                aria-controls="sidebar" className="focus:outline-none md:hidden mr-5 text-white w-5 h-5">
                                <i id="toggleSidebarMobileHamburger" className="fa-solid fa-bars text-white text-xl"></i>
                                <i id="toggleSidebarMobileClose" className="fa-solid fa-xmark text-white text-xl hidden"></i>
                            </button>
                            <div className="grow text-center rounded justify-between bg-white flex items-center">
                                <i className="fa-solid fa-magnifying-glass text-gray-400 mx-3 text-xs md:text-xl"></i>
                                <input className="py-2 grow rounded border-0 focus:ring-0 pl-0 text-xs md:text-sm" type="text"
                                    placeholder="Nhập từ khóa sách cần tìm kiếm" />
                                <button
                                    className="rounded-r w-[110px] bg-emerald-800 text-white h-full py-2 hidden lg:block font-semibold">Tìm
                                    kiếm</button>
                                
                            </div>
                        </div>
                        <div className="md:flex flex-row md:mt-[27px] lg:mt-[23px] justify-center hidden">
                                    <a href="#">
                                        <button
                                            className="outline-0 outline-emerald-800 h-[30px] px-[18px] bg-emerald-800 hover:bg-white text-white hover:text-emerald-800 text-sm hidden md:block whitespace-nowrap">Giới
                                            thiệu</button>
                                    </a>
                                    <a href="#">
                                        <button
                                            className="outline-0 outline-emerald-800 h-[30px] px-3 bg-emerald-800 hover:bg-white text-white hover:text-emerald-800 text-sm hidden md:block mx-4 xl:mx-8 whitespace-nowrap">Chương
                                            trình khuyến mại</button>
                                    </a>
                                    <a href="#">
                                        <button
                                            className="outline-0 outline-emerald-800 h-[30px] px-[18px] bg-emerald-800 hover:bg-white text-white hover:text-emerald-800 text-sm hidden md:block whitespace-nowrap">Chính
                                            sách bảo mật</button>
                                    </a>
                        </div>  
                    </div>
                    <div className="flex flex-row xl:mr-[30px] items-center justify-center">
                                    <span>
                                        <a href="#">
                                            <i
                                                className="fa-solid fa-cart-shopping text-white lg:ml-8 xl:ml-[78px] text-2xl md:text-3xl xl:text-4xl">
                                            </i>
                                        </a>
                                    </span>
                                    <span>
                                        <i id="account"
                                            className="lg:hidden ml-5 fa-regular fa-circle-user text-white text-2xl md:text-3xl lg:text-4xl cursor-pointer">
                                        </i>
                                    </span>
                                    <button id="btn-signup"
                                        className="rounded md:mx-4 py-2 px-4 bg-emerald-800 hover:bg-white text-white font-semibold hover:text-emerald-800 hidden lg:block whitespace-nowrap">Đăng
                                        ký
                                    </button>
                                    <button id="btn-signin"
                                        className="rounded py-2 px-4 bg-emerald-800 hover:bg-white text-white font-semibold hover:text-emerald-800 hidden lg:block whitespace-nowrap">Đăng
                                        nhập
                                    </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
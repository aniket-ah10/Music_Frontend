import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import {clsx} from 'clsx';
import { GiHamburgerMenu } from "react-icons/gi";
import {MenuContext} from "../Hooks/globalHooks.jsx";
import {useContext} from "react";


function Header() {
    const {isOpen,toggle}=useContext(MenuContext);
    return (
        <div className=" flex items-center p-3 bg-slate-900 bg-950 top-0 fixed w-full z-50 h-14 border-gray-600 border-b-2 gap-2 justify-between">
            <div className="flex items-center justify-between gap-5">
                <button className={clsx(isOpen?"bg-gray-600":"","p-2.5 rounded-full  border-gray-300 hover:bg-gray-600 w-fit text-white cursor-pointer")} onClick={toggle}>
                    <GiHamburgerMenu className=" text-2xl "></GiHamburgerMenu>
                </button>
            <h1 className="text-lg">Music App</h1>
            </div>
            {/*
            <div className=" md:flex items-center gap-2 border-1 border-gray-400 rounded-lg p-1 bg-gray-600 md:w-96 hidden ">
                <form className="items-center flex gap-2 w-full" onSubmit={e => e.preventDefault()}>
                   <button className="cursor-pointer bg-gray-500 rounded-full p-1">
                       <CiSearch className="text-2xl text-white"></CiSearch>
                   </button>
                    <input type="text"  className="text-white focus:outline-none w-64 bg-transparent placeholder:text-white " placeholder="Search song,artist or playlist">
                    </input>
                </form>
            </div>
            <div className="user mr-5">
                <button className="text-white"><FaRegUserCircle className="text-3xl"></FaRegUserCircle></button>
            </div>
            */}
        </div>
    )
}
export default Header;
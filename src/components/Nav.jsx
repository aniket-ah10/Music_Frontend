import {Link} from 'react-router-dom';
import {clsx} from 'clsx';
import {FaHome} from 'react-icons/fa';
import { MdOutlineExplore,MdLibraryMusic,MdAdd } from "react-icons/md";
import {MenuContext,SectionContext} from "../Hooks/globalHooks.jsx";
import {useContext} from "react";



function Nav(){
    const {isOpen}=useContext(MenuContext);
    const {sectionOpen,setSectionOpen}=useContext(SectionContext);
    return (
        <div className= {clsx(isOpen?"md:w-1/6":"hidden md:block","h-screen border-r-2 bg-slate-900  border-gray-600 p-1 md:p-2")} >
                <nav className="grid gap-2 ">
                <Link className="" to="/">
                    <button className={clsx("flex items-center p-2 md:p-3 rounded-md  hover:bg-gray-600  cursor-pointer w-full text-xs md:text-base",
                        isOpen?"flex-col md:flex-row gap-1 md:gap-3":"flex-col justify-center",
                        sectionOpen==="home"?"bg-gray-600":"")}
                            onClick={()=>setSectionOpen("home")}>
                        <FaHome className="text-2xl md:text-3xl"/>Home
                    </button>
                </Link>
{/*                <Link className="" to="/explore">
                    <button className={clsx( " flex items-center p-2 md:p-3 rounded-md hover:bg-gray-600  cursor-pointer w-full text-xs md:text-base",
                        isOpen?"flex-col md:flex-row gap-1 md:gap-3":"flex-col justify-center",
                        sectionOpen==="explore"&&"bg-gray-600")}
                            onClick={()=>setSectionOpen("explore")}>
                        <MdOutlineExplore className="text-2xl md:text-3xl"/>Explore
                    </button>
                </Link>
                <Link className="" to="/library">
                    <button className={clsx("flex items-center p-2 md:p-3 rounded-md  hover:bg-gray-600  cursor-pointer w-full text-xs md:text-base",
                        isOpen?"flex-col md:flex-row gap-1 md:gap-3":"flex-col text-xs justify-center",
                        sectionOpen==="library"?"bg-gray-600":"")}
                            onClick={()=>setSectionOpen('library')}>
                        <MdLibraryMusic className="text-2xl md:text-3xl"/>Library
                    </button>
                </Link>
               <Link className="" to="/addMusic">
                        <button className={clsx("items-center flex p-2 md:p-3 rounded-md hover:bg-gray-600  cursor-pointer w-full text-xs md:text-base",
                            isOpen?"flex-col md:flex-row  text-md gap-1  md:gap-3":"flex-col text-xs justify-center",
                            sectionOpen==="addMusic"?"bg-gray-600":"")}
                                onClick={()=>setSectionOpen('addMusic')}>
                            <MdAdd className="text-2xl md:text-3xl"/>
                            Add Music
                        </button>
                    </Link>*/}
                </nav>
        </div>
    )
}

export default Nav;
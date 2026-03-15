import {clsx} from 'clsx';
import SideBarButton from './SideBarButton.jsx';
import { MdOutlineExplore,MdLibraryMusic,MdAdd,MdHome } from "react-icons/md";
import {MenuContext,SectionContext} from "../Hooks/globalHooks.jsx";
import {useContext} from "react";



function Nav(){
    const {isOpen}=useContext(MenuContext);
    const {sectionOpen,setSectionOpen}=useContext(SectionContext);
    return (

        <div className= {clsx(isOpen?"md:w-1/6":"hidden md:block","h-screen border-r-2 bg-slate-900  border-blue-300 p-1 md:p-2")} >
                <nav className="grid gap-2 ">
                    <SideBarButton to={"/"} icon={MdHome} sectionName={'Home'} isOpen={isOpen} setSectionOpen={setSectionOpen} sectionOpen={sectionOpen}/>
                    {/*<SideBarButton to={'/explore'} icon={MdOutlineExplore}  sectionName={'Explore'} isOpen={isOpen} setSectionOpen={setSectionOpen} sectionOpen={sectionOpen}/>
                    <SideBarButton to={'/library'} icon={MdLibraryMusic} sectionName={'Library'} isOpen={isOpen} setSectionOpen={setSectionOpen} sectionOpen={sectionOpen}/>
                    <SideBarButton to={'/addMusic'} icon={MdAdd} sectionName={'Add Music'} isOpen={isOpen} setSectionOpen={setSectionOpen} sectionOpen={sectionOpen}/>*/}
                </nav>
        </div>
    )
}

export default Nav;
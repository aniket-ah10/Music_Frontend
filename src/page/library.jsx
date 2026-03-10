import {useNavigate} from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";



function Library(){
    const navigate=useNavigate();

    return (
        <>
            <h1 className="text-white">Library</h1>
            <div className="m-2">
            <button className="flex gap-2 w-50  h-50 bg-gray-700 rounded-lg shadow-lg shadow-red-700 cursor-pointer" onClick={()=>navigate('./fav')}>
                <MdOutlineFavorite className='text-3xl text-red-600 m-2' />
            </button>
            </div>
        </>
    );
}
export default Library;
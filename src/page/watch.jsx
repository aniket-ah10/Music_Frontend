import {useContext} from "react";
import {MusicPlayerContext,MusicListContext} from "../Hooks/globalHooks.jsx";

function Watch(){
    const [musicList] = useContext(MusicListContext);
    const {currentIndex} = useContext(MusicPlayerContext);
    if(currentIndex===null){
        return (<div className="flex justify-center items-center  h-full text-2xl border-gray-500 border-2 bg-black">Please select music to Play</div>);
    }
    return (
            <div className=" flex items-center justify-center min-h-full ">
                <div className=" w-full max-w-md p-1 m-1 border-white border-2 rounded-xl bg-gray-300">
                    <img className="w-full rounded-xl shadow-lg shadow-gray-700" src={musicList[currentIndex].imgSrc} alt={musicList[currentIndex].imgAlt}/>
                </div>
            </div>
    )
}
export default Watch;
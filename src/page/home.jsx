
import MusicCard from '../components/MusicCard.jsx';
import {useContext} from "react";
import {MusicListContext} from "../Hooks/globalHooks.jsx";

function Home() {
    const [musicList] =useContext(MusicListContext);
    if(musicList.length === 0){
        return (<div className="flex w-full h-full items-center justify-center text-2xl">Music  is Loading...</div>);
    }
return(
    <>
        <div className="max-h-screen mx-0 my-0">
        <div className="flex flex-wrap justify-evenly items-center scroll-smooth m-2">
            {musicList?.map((music) => (
                <MusicCard key={music.id} {...music} />
            ))}
        </div>
        </div>
    </>
);
}
export default Home;
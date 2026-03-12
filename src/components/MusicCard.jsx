import { FaPlay } from "react-icons/fa";
import {useContext, useEffect, useState} from "react";
import {MusicListContext,MusicPlayerContext} from "../Hooks/globalHooks.jsx";
//import axios from "axios";




function MusicCard(props) {
    const [musicList] = useContext(MusicListContext);
    {/*const url = "http://localhost:8080/api/MusicCard";

    const FetchId = () => {
        axios.get(`${url}/${props.id}`).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    const FetchList = () => {
        axios.get(url).then(res => {
            setMusicList(res.data);
        }).catch(err => console.log("not connected to the API", err));
    };
    useEffect(() => {
        FetchList();
    }, []);

    const handleLike = () => {
        const updatedFav = !props.fav;
        const obj = {
            fav: updatedFav
        };
        console.log("this is props", obj);
        axios.patch(`http://localhost:8080/api/MusicCard/${props.id}`,
            obj).then((res) => {
            console.log(res);
            FetchList();
        }).catch((err) => {
            console.log(err)
        });
    }*/}

    const {setIsPlaying,setCurrentIndex} = useContext(MusicPlayerContext);
    const[isMouseEnter, setIsMouseEnter] = useState(false);
    const[isMouseLeave, setIsMouseLeave] = useState(false);
    return (
        <div className="flex flex-col gap-2 p-2 flex-shrink-0 relative wrap-anywhere bg-black rounded-md  shadow-sm shadow-blue-300 ">
        <div className="relative"
             onMouseEnter={()=>{
            setIsMouseEnter(true);
            setIsMouseLeave(false);}}
             onMouseLeave={()=>{
                 setIsMouseLeave(true);
            setIsMouseEnter(false);}}>
            <img
                className={"rounded-sm md:rounded-lg w-30 h-30 md:w-40 md:h-40 items-stretch shadow-sm shadow-gray-300 "}
                src={props.imgSrc}
                 alt={props.imgAlt}/>
            {isMouseEnter && !isMouseLeave && (
                <div className="absolute top-0 left-0 w-full h-full bg-transparent-20 flex justify-center items-center">
                    {/* props.fav?
                        <button className="cursor-pointer" type="button" onClick={()=>handleLike()}>
                            <MdOutlineFavorite className="text-white text-3xl top-2 right-2 p-1 absolute hover:bg-gray-600 rounded-full " ></MdOutlineFavorite>
                        </button>
                        :<button className="cursor-pointer" type="button" onClick={()=>handleLike()}>
                            <MdOutlineFavoriteBorder className="text-white text-3xl top-2 right-2 p-1 absolute hover:bg-gray-600 rounded-full "></MdOutlineFavoriteBorder>
                        </button>
                    */}
                    <button className="cursor-pointer" type="button" onClick={()=>
                    {
                        const index = musicList.findIndex(
                        (i) => i.id === props.id
                        );
                        if (index !== -1) {
                                setCurrentIndex(index);
                                setIsPlaying(true);
                        }}}>
                        <FaPlay className="text-2xl md:text-4xl"></FaPlay>
                    </button>
                </div>
            )
            }
            </div>
            <div className="grid">
                <p className="text-sm md:text-base roboto-font ">{props.title}</p>
                <div className="flex gap-2">
                    <p className=" text-xs md:text-sm nunito-font text-neutral-300">{props.artist}</p>
                </div>
            </div>
        </div>
    );
}
export default MusicCard;
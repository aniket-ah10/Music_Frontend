import {
    IoPlaySkipBack, IoPlaySkipForward, IoPlaySharp, IoPause,
    IoVolumeHigh, IoVolumeLow, IoVolumeMedium, IoVolumeMute
} from "react-icons/io5";
import {useContext, useRef, useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {MusicListContext, MusicPlayerContext} from "../Hooks/globalHooks.jsx";



function Player(){
    const[currentTime, setCurrentTime] = useState(0);
    const[duration, setDuration] = useState(0);
    const [musicList] = useContext(MusicListContext);
    const {isPlaying, setIsPlaying,currentIndex,setCurrentIndex} = useContext(MusicPlayerContext);
    const navigate = useNavigate();
    const musicRef = useRef(null);
    const [volume, setVolume] = useState(0);
    const [watchOpen,setWatchOpen] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (musicRef.current && isPlaying) {
            musicRef.current.play();
            setVolume(musicRef.current.volume);
        }
    }, [currentIndex,isPlaying]);

    if(currentIndex===null) {
        return (
            <div>not playing song</div>
        )
    }
    const currentMusic = musicList[currentIndex];

    if(!currentMusic){
       return( <div>No music</div>)
    }

    function playPrev(){
        if(currentIndex!==0){
            setCurrentIndex(currentIndex-1);
            setIsPlaying(true);
        }
        else
            setMessage('There is no Previous Song in Queue');
    }

    function playNext(){
        if(currentIndex!==musicList.length-1){
            setCurrentIndex(currentIndex+1);
            setIsPlaying(true);
        }
        else
            setMessage('There is no Next Song in Queue');

    }

    function play(){
        musicRef.current.play();
        setIsPlaying(true);
    }
    function pause(){
        musicRef.current.pause();
        setIsPlaying(false);
    }

    function handleTimeUpdate(){
        setCurrentTime(musicRef.current.currentTime);
    }

    function formatTime(time){
        const mm=Math.floor(time/60);
        let second=Math.floor(time%60);
        if(second<10){
            second='0'+second;
        }
        return `${mm}:${second}`;
    }
    const handleCurrentTimeChange=(e)=>{
        musicRef.current.currentTime = e.target.value;
        setCurrentTime(musicRef.current.currentTime);
        console.log(navigator.mediaCapabilities);
    }
    const handleVolumeChange=(e)=>{
        musicRef.current.volume = e.target.value;
        setVolume(musicRef.current.volume);
    }
    function handleWatchChange(){
        if(watchOpen){
            navigate('/');
            setWatchOpen(false);
        }
        else{
            navigate('/watch');
            setWatchOpen(true);
        }

    }

    return (
        <>
            {watchOpen||
            <div className="fixed bottom-25 right-10" >
                <img className="w-25 h-25 md:w-50 md:h-50 rounded-lg shadow-md shadow-gray-400 " src={currentMusic.imgSrc} alt={currentMusic.title} />
            </div>
            }
            {message.length!==0&&
            <div className={"fixed bottom-25 left-2 bg-neutral-800 border-1 border-neutral-600 p-4 rounded-sm"}>
                <p className="md:text-sm text-xs sans-serif-font">{message}</p>
                <button className='bg-white text-black  text-sm  mx-auto mt-5 w-1/3 p-1 rounded-l-full rounded-r-full sans-serif-font' onClick={()=>setMessage('')}>Ok</button>
            </div>
            }
            <div className="fixed bg-black bottom-0  w-full text-white h-18 grid ">
                <input type="range" className="h-1 accent-orange-500 bg-blue-500"
                       value={currentTime}
                       step={5}
                       max={duration}
                       onChange={(e)=>handleCurrentTimeChange(e)}
                       title={"Select duration"}
                />
                <audio src={currentMusic.songLink} ref={musicRef} onEnded={playNext}
                       onTimeUpdate={handleTimeUpdate}
                       onLoadedMetadata={() => setDuration(musicRef.current.duration)}>
                </audio>
                <div className="flex items-center py-1 px-5 gap-3">
                    <div className="flex items-center">
                        <button className="p-1 rounded-full hover:bg-slate-700 cursor-pointer transition" onClick={playPrev} title={"Previous"}>
                        <IoPlaySkipBack className="text-3xl"/>
                        </button>
                        {isPlaying
                            ?<button className="p-1 cursor-pointer rounded-full hover:bg-slate-700" onClick={pause} title={"Pause"}>
                            <IoPause className="text-5xl "/></button>
                            :<button className="p-1 cursor-pointer rounded-full hover:bg-slate-700" onClick={play} title={"Play"}>
                            <IoPlaySharp className="text-5xl"/></button>
                        }
                        <button className="cursor-pointer hover:bg-slate-700 rounded-full p-1" onClick={playNext} title={"Next"}>
                        <IoPlaySkipForward className="text-3xl"/>
                        </button>
                    </div>
                    <div className="m-auto" >
                        {formatTime(currentTime)}/{formatTime(duration)}
                    </div>
                    <div className="md:flex items-center justify-center m-auto gap-4 hidden">
                        <img src={currentMusic.imgSrc} alt={currentMusic.alt} className="w-12 h-12 rounded-md"/>
                        <div className="grid">
                        <p className="text-lg font-semibold text-blue-300">{currentMusic.title}</p>
                        <p className="text-sm nunito-font text-neutral-300">{currentMusic.artist}</p>
                        </div>
                    </div>
                    <div title={"Volume Bar"} className="md:flex items-center justify-center gap-2 hover:bg-slate-700 rounded-l-full rounded-r-full p-1 hidden" >
                        {volume===0?<IoVolumeMute className='text-3xl'/>
                            :(volume<=0.33?<IoVolumeLow className='text-3xl'/>
                                :(volume<=0.66?<IoVolumeMedium className='text-3xl'/>
                                    :<IoVolumeHigh className='text-3xl'/>))}
                        <input type={"range"} className={"h-0.5 w-2/3"} max={1} min={0} step={0.01} value={volume} onChange={(e)=>handleVolumeChange(e)} />
                    </div>
                    {watchOpen?
                            <button className="cursor-pointer" onClick={handleWatchChange}>
                                <IoPlaySharp className="text-4xl rotate-270 transition duration-300"/>
                            </button>
                            :<button className="cursor-pointer" onClick={handleWatchChange}>
                                <IoPlaySharp className="text-4xl rotate-90 transition duration-300"/>
                            </button>
                    }
                </div>
            </div>
        </>
    );
}
export default Player;
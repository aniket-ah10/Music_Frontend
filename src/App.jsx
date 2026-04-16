
import './App.css'
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import Player from './components/player.jsx';
import {useState} from "react";
import {MenuContext, MusicListContext, SectionContext,MusicPlayerContext} from "./Hooks/globalHooks.jsx";
import Home from "./page/home.jsx";
import Explore from "./page/explore.jsx";
import Library from "./page/library.jsx";
import AddMusic from "./page/addMusic.jsx";
import Watch from "./page/watch.jsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";


function App() {
    const[isOpen,setIsOpen]=useState(false);

    const toggle =()=>{setIsOpen(!isOpen);};
    const [sectionOpen,setSectionOpen]=useState("Home");
    const [musicList,setMusicList]=useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex,setCurrentIndex]=useState(null);

    const url = "https://music-backend-8ajw.onrender.com";
    const FetchList=()=>{
        axios.get(url).then(res=>
        {
            setMusicList(res.data);
        }).catch(err=>{
            console.log("Not connected to the API",err)});
    };
    useEffect(() => {
        FetchList();
    }, []);
  return (
    <>
        <BrowserRouter>
        <MenuContext.Provider value={{isOpen,setIsOpen ,toggle}}>
            <SectionContext.Provider value={{sectionOpen,setSectionOpen}}>
                <MusicListContext.Provider value={[musicList,setMusicList]}>
                    <MusicPlayerContext.Provider value={{isPlaying,setIsPlaying,currentIndex,setCurrentIndex}}>
            <div className="grid h-screen ">
                <Header/>
                <div className={`${currentIndex===null?'bottom-0':'bottom-18'} flex top-14 left-0 fixed w-full`}>
                    <Nav/>
                    <div className="flex-1 overflow-y-auto">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            {/*<Route path="/explore" element={<Explore/>}/>
                            <Route path="/library" element={<Library/>}/>
                            <Route path="/addMusic" element={<AddMusic />}/>*/}
                            <Route path="/watch"  element={<Watch/>}/>
                        </Routes>
                    </div>
                </div>
                <Player/>
            </div>
                    </MusicPlayerContext.Provider>
                </MusicListContext.Provider>
            </SectionContext.Provider>
        </MenuContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App

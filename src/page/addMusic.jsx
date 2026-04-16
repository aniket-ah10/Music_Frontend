import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {MusicListContext} from "../Hooks/globalHooks.jsx";

function AddMusic(){
    const [musicList, setMusicList] = useContext(MusicListContext);
    const [formData, setFormData] = useState({title:"",imgSrc:"",imgAlt:"",songLink:"",artist:"",channelLink:"",channelName:""});
    const url="https://music-backend-8ajw.onrender.com/api/MusicCard";

    const FetchList=()=>{
        axios.get(url).then(res=>
        {
        setMusicList(res.data);
        console.log(res.data)
        });
    };
    useEffect(() => {
        FetchList();
    }, []);

    const addMusic=(e)=>{
        e.preventDefault();
        axios.post(url,{...formData}).then((res)=>{
            setFormData({
                title:"",
                imgSrc:"",
                imgAlt:"",
                songLink:"",
                artist:"",
                fav:false
            });
            setMusicList(prev=>[...prev,res.data]);
        }).catch((err)=>{console.log(err)});
    }
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData(prevState => ({...prevState,[name]:value}))
    }

return(
    <>
        <h1 className="text-white">addMusic</h1>
        <form  className="text-white grid gap-1" onSubmit={(e)=>addMusic(e)}>
            <input type="text" name="title" id="title" required placeholder="title" className="outline-hidden border-2 border-gray-200 p-2" value={formData.title} onChange={(e)=>handleChange(e)}/>
            <input type="text" name="imgSrc" id="imgSrc" required placeholder="image link" className="outline-hidden border-2 border-gray-200 p-2" value={formData.imgSrc} onChange={(e)=>handleChange(e)}/>
            <input type="text" name="imgAlt" id="imgAlt"  required placeholder="image alt" className="outline-hidden border-2 border-gray-200 p-2"  value={formData.imgAlt} onChange={(e)=>handleChange(e)}/>
            <input type="text" name="songLink" id="songLink" required placeholder="song link" className="outline-hidden border-2 border-gray-200 p-2" value={formData.songLink} onChange={(e)=>handleChange(e)}/>
            <input type="text" name="artist" id="artist" required placeholder="artist" className="outline-hidden border-2 border-gray-200 p-2" value={formData.artist} onChange={(e)=>handleChange(e)}/>
            <button type="submit" value="Add Music" className="p-2 border-2 border-gray-200 cursor-pointer">submit</button>
        </form>
    </>
);
}
export default AddMusic;

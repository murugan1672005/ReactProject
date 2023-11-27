import React from "react"
import '../Assests/VideoPlayer.css'
const  VideoPlayer=({videoId})=>{

if(!videoId)
{
    return(
        <p style={{textAlign:'center', fontSize:'18px',fontWeight:"bold"}}>
                     Search for Video
        </p>
    )
}
return(
    <div className="video-player" style={{marginRight:"850px"}}>
        <iframe  width="600" height="600" title={videoId} className="video-iframe" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen/>
    </div>
)
}
export default  VideoPlayer;
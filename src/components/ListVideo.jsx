import React from "react";
import Video from './Video'
import '../Assests/ListVideo.css'
const VideoList =({data,onVideoSelected})=>
{
    return(
        <div className="video-list">
            <div style={{padding:'20px 0'}}>
             <h3 style={{textAlign:'center',fontSize:'18px',fontWeight:'bold'}}>
                Videos List
             </h3>
             <div className="videolist-container">
             <Video  style={{width:'100px'}}data={data} onVideoSelected={onVideoSelected}/>
              </div>
            </div>
        </div>
    )
}
export default VideoList;



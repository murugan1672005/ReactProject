import React, { useState } from 'react';
import Search from './Search';
import youtubeApi from '../api/youtube';
import VideoList from './ListVideo';
import VideoPlayer from './VideoPlayer';
import { Box, Paper, Container, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../Assests/Live.css'


const Live = () => {
  const [videoMetaInfo, setVideoMetaInfo] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const onVideoSelected = (videoId) => {
    setSelectedVideoId(videoId);
  };

  const onSearch = async (keyword) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: keyword,
      },
    });

    setVideoMetaInfo(response.data.items);
    setSelectedVideoId(response.data.items[0]?.id.videoId);
  };

  return (
    <Container style={{minWidth:"200vh",minHeight:"250vh",height:"100%",width:"100%",backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMCzbkXHkzMCh9AQgrZAb_pIKXIQMZ6ln36Tkppo_ggHEp1fA3ZahgltquPru69bYVw4&usqp=CAU")',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="20px"
        style={{
          backgroundImage: `url("./image.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
         width:'100%',
         height:'100%',
        
        }}
      >
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Content Searching App
          </Typography>
          <Search onSearch={onSearch} />
        </Paper>

        <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
          <VideoList data={videoMetaInfo.slice(0, 5)} onVideoSelected={onVideoSelected} />
        </Box>

        <VideoPlayer videoId={selectedVideoId} />
      </Box>
      <SearchIcon />
    </Container>
  );
};

export default Live;

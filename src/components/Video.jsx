import React from 'react';
import { Box, Card, Typography } from '@mui/material';

function selectVideo(videoIdobj, onVideoSelected) {
  onVideoSelected(videoIdobj.videoId);
}

const Video = ({ data, onVideoSelected }) => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-around" maxWidth="1200px" margin="0 auto">
      {data.map(({ snippet, id }, index) => (
        <Card
          key={index}
          onClick={() => selectVideo(id, onVideoSelected)}
          style={{
            width: '300px',
            margin: '10px',
            cursor: 'pointer',
            transition: 'transform 0.2s ease-in-out',
            ':hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Box
            component="div"
            sx={{
              backgroundImage: `url(${snippet.thumbnails.high.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              height: '200px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              color: 'white',
              padding: '10px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Typography variant="body1" className="title">
              {snippet.title}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default Video;

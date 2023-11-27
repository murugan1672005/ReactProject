import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TimeDisplay from './time';
const StyledCard = styled(Card)`
  width: 300px;
  margin: 20px auto;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const StyledCardContent = styled(CardContent)`
  background-color: #fff;
`;

const StyledCardActions = styled(CardActions)`
  background-color: #f0f0f0;
  display: flex;
  justify-content: flex-end;
  button {
    background-color: #2196f3;
    color: #fff;
    &:hover {
      background-color: #1565c0;
    }
  }
`;

const Home = () => {
  return (
    <StyledCard variant="outlined">
      <StyledCardContent>
        <Typography variant="h5" component="div">
          Welcome to Creative Home
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Explore the wonders of creativity!
        </Typography>
        <Typography variant="body2">
          Let your imagination soar and create something amazing today.
        </Typography>
        <TimeDisplay/>
      </StyledCardContent>
      <StyledCardActions>
        <Button size="small">Get Started</Button>

      </StyledCardActions>
    </StyledCard>
  );
};

export default Home;
 
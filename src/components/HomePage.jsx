import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

// Placeholder background image URL
const backgroundImageUrl = 'https://www.webfx.com/wp-content/uploads/2021/10/0451-08-website-background-image-levehytter.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledHomeContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 20px;
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  animation: ${fadeIn} 1s ease-in;
  overflow: hidden;
  /* Add an overlay to improve text readability */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));
  }
`;

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  box-shadow: 0px 5px 5px -5px #333;
  border-radius: 0 0 15px 15px; /* Rounded corners at the bottom */
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  &:hover {
    color: #1976D2;
  }
`;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  text-align: center;
  border-radius: 15px 15px 0 0; /* Rounded corners at the top */
`;

const HomePage = () => {
  return (
    <StyledHomeContainer style={{backgroundColor:'darkred'}}>
      <NavbarContainer className="navbar navbar-expand-lg navbar-light bg-light">
        <Typography variant="h6" component="div" style={{ color: 'white' }}>
          Home 
        </Typography>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavbarLinks className="navbar-nav">
            <Button component={Link} to="/search" color="primary" variant="contained" className="nav-item nav-link">
              Search
            </Button>
            <Button component={Link} to="/login" color="primary" variant="contained" className="nav-item nav-link">
              Login
            </Button>
            <Button component={Link} to="/signup" color="primary" variant="contained" className="nav-item nav-link">
              Sign Up
            </Button>
          </NavbarLinks>
        </div>
      </NavbarContainer>

      <Typography variant="h2" component="div" style={{ color: 'white', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
        Welcome to Your Creative Website
      </Typography>

      <FooterContainer className="bg-light">
        <Typography variant="body2" color="textSecondary">
          &copy; 2023 Your Company | Privacy Policy | Terms of Service
        </Typography>
      </FooterContainer>
    </StyledHomeContainer>
  );
};

export default HomePage;

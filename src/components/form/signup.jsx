import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/User_api';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

// Styled-components styles
const StyledFormContainer = styled(animated.div)`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BackgroundImage = styled.div`
  background-image: url('https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.jpg?s=612x612&w=0&k=20&c=Fnx06haU4IHYLcRpy9Po_TBknvBqVjicGuUWkGu8e6Y='); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const RegisterForm = () => {
  const navigate = useNavigate();
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChangeEvent = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(formData);
    navigate('/');
  };

  return (
    <BackgroundImage>
      <StyledFormContainer style={fadeIn}>
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5" style={{ marginBottom: '20px' }}>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange={handleChangeEvent}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChangeEvent}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangeEvent}
            />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
              Register
            </Button>
            <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '10px' }}>
              Already have an account? <Link to="/login63
              ">Login</Link>
            </Typography>
          </form>
        </Container>
      </StyledFormContainer>
    </BackgroundImage>
  );
};

export default RegisterForm;

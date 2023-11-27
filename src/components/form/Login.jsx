import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/User_api';
import { UserContext } from '../context/UseProvider';
import { Paper, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Background = styled(animated.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(to right, #4CAF50, #8ACB88); /* Glass blue color */
`;

const BroadBox = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const AnimatedBackground = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("./your-animated-background.gif"); /* Replace with your animated background */
  background-size: cover;
  background-position: center;
  z-index: 0;
  opacity: 0.6;
`;

const Form = styled.form`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputFields = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const SubmitBtn = styled(Button)`
  && {
    background-color: #1976D2; /* Material-UI primary color */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    align-self: center; // Center-align the submit button
  }
`;

const LinkText = styled(Typography)`
  && {
    margin-top: 10px;
    display: block;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    text-align: center; // Center-align the link text
  }
`;

const LoginForm = () => {
  const { loggedIn, loggedOut } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const handleChangeEvent = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await loginUser(formData);
    if (success) {
      loggedIn();
      navigate('/home');
    } else {
      loggedOut();
    }
  };

  return (
    <Background style={fadeIn}>
      <BroadBox>
        <Paper elevation={8} style={{ minWidth: '500px', minHeight: '500px', alignContent: 'center' }}>
          <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
            Login To Website
          </Typography>
          <Form method="POST" onSubmit={handleSubmit}>
            <InputFields>
              <Icon>
                <EmailOutlinedIcon />
              </Icon>
              <TextField type="email" name="email" label="Email" required onChange={handleChangeEvent} />
            </InputFields>
            <InputFields>
              <Icon>
                <LockOutlinedIcon />
              </Icon>
              <TextField
                type="password"
                name="password"
                label="Password"
                required
                minLength={8}
                maxLength={15}
                onChange={handleChangeEvent}
              />
            </InputFields>
            <SubmitBtn type="submit">Login</SubmitBtn>
          </Form>
          <LinkText variant="body1" component="p" style={{ textAlign: 'center' }}>
            New user?{' '}
            <Link to={`/register`} style={{ textDecoration: 'none' }}>
              Register here
            </Link>
          </LinkText>
          <SearchIcon color="primary" style={{ marginTop: '20px' }} />
        </Paper>
      </BroadBox>
      <AnimatedBackground />
    </Background>
  );
};

export default LoginForm;

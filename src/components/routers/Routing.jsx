import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from '../form/signup';
import LoginForm from '../form/Login';
import PrivateRoute from './PrivateRoute';
import HomePage from '../HomePage';
import UserProvider from '../context/UseProvider';
import SearchPage from '../SearchPage';

const App = () => {
  return (
    <Router>
        <UserProvider>
      <Routes>
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/' element={<LoginForm />} />
        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;

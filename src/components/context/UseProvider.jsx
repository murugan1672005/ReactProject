// UserProvider.js
import React, { createContext, useState, useMemo } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(false);

  const UserValue = useMemo(() => ({
    isAuthenticated,
    loggedIn: () => setAuthentication(true),
    loggedOut: () => setAuthentication(false),
  }), [isAuthenticated]);

  return (
    <UserContext.Provider value={UserValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

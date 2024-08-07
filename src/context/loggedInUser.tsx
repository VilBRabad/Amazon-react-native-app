import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  email: string;
  name: string;
  _id: string;
  isVerified: boolean;
  
}

interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}


const defaultUserContext: UserContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};


const UserContext = createContext<UserContextType>(defaultUserContext);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

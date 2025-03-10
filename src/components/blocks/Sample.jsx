import { create } from 'framer-motion/client';
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
 return (
   <UserContext.Provider value={ { user, setUser }}>
        {children}
   </UserContext.Provider>
 )
}

export default UserProvider;


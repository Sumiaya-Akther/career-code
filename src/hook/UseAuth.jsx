import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const UseAuth = () => {
    const authInfo = useContext(AuthContext);
    return authInfo;
      
    
};

export default UseAuth;
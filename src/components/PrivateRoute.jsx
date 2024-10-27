import React, { useContext } from 'react'
import { ContextStore } from '../store/ContextStore'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

  const {token}=useContext(ContextStore);
  return token ? <>{children}</>:<Navigate to="/login"/>
}

export default PrivateRoute

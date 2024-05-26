// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../lib/auth';

const ProtectLoginRegister = ({ children }) => {
    return !isAuthenticated() ? children : <Navigate to="/profile" />;
};

export default ProtectLoginRegister;
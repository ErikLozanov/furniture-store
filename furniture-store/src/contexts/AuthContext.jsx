import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    
    const [successfulLogin, setSuccessfulLogin] = useState(true);

    const [cartItems,setCartItems] = useState(0);

    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken)

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);
            setSuccessfulLogin(true);

            navigate('/');
        } catch (error) {
            
            setSuccessfulLogin(false);
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);
            setSuccessfulLogin(true);

            navigate('/');
        } catch (error) {
            setSuccessfulLogin(false);
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
        setCartItems,
        cartItems,
        successfulLogin,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};
import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');

    const [cartItems,setCartItems] = useState(0);
    useEffect(() => {
        
    }, [cartItems]);
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken)

    const onLoginSubmit = async (data) => {

        try {
            const result = await authService.login(data);


            setAuth(result);
            setLoginError('');

            navigate('/');
        } catch (error) {
            setLoginError(error.message);
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;


        try {
            const result = await authService.register(registerData);

            if (confirmPassword !== registerData.password) {
                throw new Error('Passwords do not match!')
            }

            setAuth(result);
            setRegisterError('');

            navigate('/');
        } catch (error) {
            setRegisterError(error.message);
            console.log(registerError);
            return;
        }
    };

    const onLogout = async () => {
        await authService.logout();
        setCartItems(0);
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
        loginError,
        registerError,
        setLoginError,
        setRegisterError,
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
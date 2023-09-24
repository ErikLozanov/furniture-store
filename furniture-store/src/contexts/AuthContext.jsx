import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    
    const [successfulLogin, setSuccessfulLogin] = useState(true);
    const [registerError, setRegisterError] = useState('');

    const [cartItems,setCartItems] = useState(0);

    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken)

    const onLoginSubmit = async (data) => {

        if(data.email === '' || data.password === '') {
            return false;
        }

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


        try {
            const result = await authService.register(registerData);

            if (confirmPassword !== registerData.password) {
                throw new Error('Passwords do not match!')
            }
    
            if(confirmPassword === '' || registerData.password === '' || registerData.email === '') {
                throw new Error('Please fill in all inputs!')
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
        registerError,
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
import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';


import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase-config';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [authenticate, setAuthenticate] = useState({});
    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        try {
            const result = await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log(result);
             setAuthenticate({accessToken: result.user.accessToken, _id: result.user.uid, email: result.user.email});
            navigate('/');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await createUserWithEmailAndPassword(auth, values.email, values.password);

            setAuthenticate({accessToken: result.user.accessToken, _id: result.user.uid, email: result.user.email});

            navigate('/');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {

        await signOut(auth);
        setAuthenticate({});
        navigate('/');
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: authenticate._id,
        token: authenticate.accessToken,
        userEmail: authenticate.email,
        isAuthenticated: !!authenticate.accessToken,
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
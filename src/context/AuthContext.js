import {useContext, createContext, useState, useEffect} from 'react'
import axios from '../api/axiosInstance.js';
const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    axios.defaults.withCredentials = true;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get('/api/user/data');
                if(!res.data.success){
                    setUser(null);
                    console.log("User unauthenticated!");
                }
                setUser(res.data.userData);
            } catch (error) {
                setUser(null);
            }
            setLoading(false);
        };
        checkAuth();
    },[]);

    const logout = async() => {
        await axios.post('/api/auth/logout');
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{user, loading, setUser, setLoading}}>
            {children}
        </AuthContext.Provider>
    );
};
export const userAuth = () => useContext(AuthContext);
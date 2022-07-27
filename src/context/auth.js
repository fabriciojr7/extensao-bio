import {
  createContext, useState, useMemo, useCallback, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { api, realizaLogin, realizaLogout } from '../services/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUser = sessionStorage.getItem('user');

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = useCallback(async (email, senha) => {
    const {data} = await realizaLogin({ email, password: senha });
    
    const loggedUser = { id: data.user.id, email: data.user.email, nome: data.user.nome };
    const { token } = data.token;

    sessionStorage.setItem('user', JSON.stringify(loggedUser));
    sessionStorage.setItem('token', token);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
    navigate('/adm');
  }, [navigate]);

  const logout = useCallback(async () => {
    await realizaLogout();
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate('/login');
  }, [navigate]);

  const value = useMemo(() => ({
    authenticated: !!user, user, loading, login, logout,
  }), [login, logout, user, loading]);
  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
}

import {
  createContext, useState, useMemo, useCallback, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { api, realizaLogin, realizaLogout } from '../services/api';
import { Alert } from '../utils/Alert';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUser = sessionStorage.getItem('user');
    const token = sessionStorage.getItem('token');

    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const login = useCallback(async (email, senha) => {
    try {
      const { data } = await realizaLogin({ email, password: senha });

      const loggedUser = { id: data.user.id, email: data.user.email, nome: data.user.nome };
      const { token } = data.token;

      sessionStorage.setItem('user', JSON.stringify(loggedUser));
      sessionStorage.setItem('token', token);
      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser(loggedUser);
      navigate('/adm');
    } catch (error) {
      const status = error.response.data
      if (status === 'E-Mail e/ou Senha incorreta') {
        Alert('Atenção', 'E-mail e/ou Senha incorreta', 'warning');
      } else {
        Alert('Atenção', `Erro ao tentar realizar login: ${error}`, 'error');
      }
    }
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

import { useContext } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Programacao from './pages/Programacao';
import Apresentacao from './pages/Apresentacao';
import Organizacao from './pages/Organizacao';
import EnvioResumo from './pages/EnvioResumo';
import Inscricao from './pages/Inscricao';

// ADM
import Login from './pages/Login';
import Dashboard from './pages/private/Dashboard';
import Inscritos from './pages/private/Inscritos';
import LayoutAdm from './pages/private/LayoutAdm';
import Resumos from './pages/private/Resumos';
import VisualizacaoResumo from './pages/private/VisualizacaoResumo';

import { AuthProvider, AuthContext } from './context/auth';

function PrivateRoute({ children }) {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}

const Redirect = ({ children }) => {
  const { authenticated } = useContext(AuthContext);
  if (authenticated) {
    return <Navigate to='/adm' />
  }
  return children;
}

export default function MainRoutes() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/programacao' element={<Programacao />} />
            <Route path='/apresentacao' element={<Apresentacao />} />
            <Route path='/organizacao' element={<Organizacao />} />
            <Route path='/envioresumo' element={<EnvioResumo />} />
            <Route path='/inscricao' element={<Inscricao />} />
          </Route>


          <Route path='/login' element={
            <Redirect>
              <Login />
            </Redirect>

          } />

          <Route path="/adm" element={<PrivateRoute><LayoutAdm /></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="/adm/inscritos" element={<Inscritos />} />
            <Route path='/adm/resumos' element={<Resumos />} />
            <Route path='/adm/visualizacaoResumo/:id' element={<VisualizacaoResumo />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

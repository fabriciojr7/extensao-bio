import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Programacao from './pages/Programacao';
import Apresentacao from './pages/Apresentação';
import Organizacao from './pages/Organizacao';
import Resumo from './pages/Resumo';

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/programacao' element={<Programacao />} />
          <Route path='/apresentacao' element={<Apresentacao />} />
          <Route path='/organizacao' element={<Organizacao />} />
          <Route path='/resumos' element={<Resumo />} />
        </Route>

      </Routes>
    </Router>
  )
}

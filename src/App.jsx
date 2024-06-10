import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store';
import Home from './pages/Home';
import Carreras from './pages/Carreras/Carreras';
import FormProfes from './pages/FormProfes';
import Admin from './pages/admin/Admin'
import Eventos from './pages/Eventos/Eventos';
import MicroEmpresas from './pages/MicroEmpresas/MicroEmpresas'
import Error404 from './pages/Error404';
function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Errores */}
          <Route path='*' element={<Error404 />}/>
          {/* Paginas */}
          <Route path='/' element={<Home />}/>
          <Route path='/carreras' element={<Carreras />}/>
          <Route path='/formProfes' element={<FormProfes />}/>
          <Route path='/admin' element={<Admin />} />
          <Route path='/eventos' element={<Eventos />}/>
          <Route path='/micro_empresas' element={<MicroEmpresas />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App

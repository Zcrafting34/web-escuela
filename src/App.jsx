import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store';
import Home from './pages/Home';
import Carreras from './pages/Carreras/Carreras';
import FormProfes from './pages/FormProfes';
import Admin from './pages/admin/Admin'
function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Errores */}
          {/* Paginas */}
          <Route path='/' element={<Home />}/>
          <Route path='/carreras' element={<Carreras />}/>
          <Route path='/formProfes' element={<FormProfes />}/>
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App

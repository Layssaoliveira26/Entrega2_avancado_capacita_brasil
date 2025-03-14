import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Aluno from './pages/Cad_Aluno/Aluno'
import Professor from './pages/Cad_Professor/Professor'
import Secretaria from './pages/Secretaria/Secretaria'
import Consulta_alunos from './pages/Consulta_alunos/Consulta_alunos'
import Consulta_professores from './pages/Consulta_Professores/Consulta_professores'
import Consulta_boletins from './pages/Consulta_boletins/Consulta_boletins'
import Cad_boletim_id from './pages/Cad_boletim_id/Cad_boletim_id'
import Consulta_boletim_id from './pages/Consulta_boletim_id/Consulta_boletim_id'

function App() { 
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/aluno" element={<Aluno/>} />
                <Route path="/professor" element={<Professor/>} />
                <Route path="/secretaria" element={<Secretaria/>} />
                <Route path="/consulta_alunos" element={<Consulta_alunos/>} />
                <Route path="/consulta_professores" element={<Consulta_professores/>}/>
                <Route path="/consulta_boletins" element={<Consulta_boletins/>}/>
                <Route path="/cad_boletim_id" element={<Cad_boletim_id/>}/>
                <Route path="/consulta_boletim_id" element={<Consulta_boletim_id/>} />
            </Routes>
        </Router>
    )
}

export default App
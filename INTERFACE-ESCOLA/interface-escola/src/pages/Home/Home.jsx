import './style.css'
import { Link} from 'react-router-dom'

function Home() {
  return (
    <div className='container_home'>
        <h1>Bem-vindo ao Sistema Escolar</h1>
        <div className='buttons'>
        <button className="btn"><Link to='/aluno' className='link_btn'>Área do Aluno</Link></button>
        <button className="btn"><Link to='/professor' className='link_btn'>Área do Professor</Link></button>
        <button className="btn"><Link to='/secretaria' className='link_btn'>Secretaria</Link></button>
        </div>
    </div>
  )
}

export default Home
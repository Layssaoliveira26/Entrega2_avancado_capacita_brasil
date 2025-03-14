import { Link } from 'react-router-dom'

function Secretaria() {
    return (
        <div className='container_home'>
            <h1>Secretaria Escolar</h1>
            <div className='buttons'>
                <button className="btn"><Link to='/consulta_alunos' className='link_btn'>Lista de Alunos</Link></button>
                <button className="btn"><Link to='/consulta_professores' className='link_btn'>Lista de Professores</Link></button>
                <button className="btn"><Link to='/consulta_boletins' className='link_btn'>Lista de Boletins</Link></button>
            </div>
        </div>
    )
}

export default Secretaria
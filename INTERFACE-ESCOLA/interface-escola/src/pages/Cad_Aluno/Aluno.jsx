import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './aluno.css'
import api from '../../services/api'

function Aluno () {
    const inputNome = useRef()

    async function createAluno() {
        try {
            await api.post('/alunos', {
                nome: inputNome.current.value
            })
        alert('Aluno(a) cadastrado(a) com sucesso!')
        } catch(error) {
            console.error('Erro ao cadastrar o aluno', error)
            alert('Erro ao cadastrar o aluno')
        }
    }
    return (
        <div className='container'>
            <Link to='/Consulta_alunos' className='link_boletim'>Deseja acessar seu boletim?</Link>
            <form>
                <h1>Deseja se cadastrar como aluno(a)?</h1>
                <input type="text" ref={inputNome} name="nome" className='input' placeholder="Nome"/>
                <button type="submit" className='dados' onClick={createAluno}>Cadastrar</button>
            </form>
        </div>
    )
}

export default Aluno
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './aluno.css'
import api from '../../services/api'

function Aluno () {
    const inputNome = useRef()

    async function createAluno(event) {
        event.preventDefault()

        const nomeAluno = inputNome.current.value

        try {
            const response = await api.post('/alunos', {
                nome: nomeAluno
            })
            
            console.log('Aluno(a) cadastrado(a)')
        
            if(response.data) {
                alert('Aluno(a) cadastrado(a) com sucesso!')
                inputNome.current.value = ""
            }
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

export default Aluno;
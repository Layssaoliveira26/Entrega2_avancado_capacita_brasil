import { useRef } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'


function Professor() {
    const inputNome = useRef()
    const inputDisciplina = useRef()

    async function createProfessor() {
        const nomeProfessor = inputNome.current.value
        const nomeDisciplina = inputDisciplina.current.value

        try {
            const responseDisciplina = await api.get('/disciplinas', {
                params: {
                    nome: nomeDisciplina
                },
        })

        if(responseDisciplina.data.length === 0) { 
            alert('Disciplina não encontrada, verifique o nome digitado.')
            return
        }

        const disciplina = responseDisciplina.data[0]
        
        await api.post('/professores', {
            nome: nomeProfessor,
            disciplinaId: disciplina.id
        })
        alert('Professor(a) cadastrado(a) com sucesso!')
        
    } catch(error) {
        console.error('Erro ao cadastrar o professor', error)
        alert('Erro ao cadastrar o professor')
    }
    }
    return (
        <div className='container'>
        <Link to='/' className='link_boletim'>Deseja lançar uma nota?</Link> 
        <form>
        <h1>Deseja se cadastrar como professor(a)?</h1>
        <input type="text" ref={inputNome} name="nome" placeholder="Nome"/>
        <input type="text" ref={inputDisciplina} name="disciplina" placeholder="Disciplina que leciona"/>
        <button type="button" onClick={createProfessor}>Cadastrar</button>
        </form>
        </div>
    )
}


export default Professor
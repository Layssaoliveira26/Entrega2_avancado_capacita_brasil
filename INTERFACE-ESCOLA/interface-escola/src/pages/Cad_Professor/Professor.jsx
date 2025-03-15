import { useRef } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'


function Professor() {
    const inputNome = useRef()
    const inputDisciplina = useRef()

    async function createProfessor(event) {
        event.preventDefault()

        const nomeProfessor = inputNome.current.value
        const nomeDisciplina = inputDisciplina.current.value

        console.log('Professor:', nomeProfessor)
        console.log('Disciplina:', nomeDisciplina)

        try {
            const responseDisciplina = await api.get('/disciplinas', {
                params: {
                    nome: nomeDisciplina
                },
        })

        console.log('Resposta da API de Disciplinas:', responseDisciplina.data)

        const disciplinaEncontrada = responseDisciplina.data.find(
            (disciplina) => disciplina.nome.toLowerCase() === nomeDisciplina.toLowerCase()
        )
            if (!disciplinaEncontrada) {
            alert('Disciplina não encontrada')
            return
        }

        const disciplina = disciplinaEncontrada
        
        await api.post('/professores', {
            nome: nomeProfessor,
            disciplinaId: disciplina.id
        })

        alert('Professor(a) cadastrado(a) com sucesso!')
        
        inputNome.current.value = ""; 
        inputDisciplina.current.value = "";
        
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
                <button type="submit" onClick={createProfessor}>Cadastrar</button>
            </form>
        </div>
    )
}


export default Professor
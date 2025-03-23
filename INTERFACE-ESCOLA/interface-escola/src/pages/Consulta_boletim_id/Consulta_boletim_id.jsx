import { useState} from 'react'
import api from '../../services/api'
import '../../pages/Consulta_alunos/consulta.css'


function Consulta_boletim_id() {
    const [boletim, setBoletim] = useState(null)
    const [id, setId] = useState('')
    const[loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function getBoletim(alunoId) {
        if(!alunoId) {
            setError("Por favor, digite uma matrícula válida.")
            return 
        }

        setLoading(true)
        setError(null)

        try {
            console.log(`O id do aluno é: ${alunoId}`)
            const getBoletimById = await api.get(`/boletins/aluno/${alunoId}`) 
            console.log('Resposta da API:', getBoletimById)

            if(getBoletimById.data) {
                console.log('Dados recebidos do boletim:', getBoletimById.data)
                setBoletim(getBoletimById.data)

            } else {
                console.log("Boletim não encontrado para o id:", alunoId)
                setError("Boletim não encontrado para a matrícula informada.")
                setBoletim(null)
            }
        } catch(error) {
            console.error("Erro ao buscar boletim do aluno com a respectiva matrícula.", error)
            setError("Boletim do aluno com a respectiva matrícula não foi encontrado.")
            setBoletim(null) //houve mudaqnça aqui
        } finally {
            setLoading(false)
    }
}

  //ainda tá faltando a parte do handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault()
    const alunoId = parseInt(id)
    if(alunoId && !isNaN(alunoId)) {
        getBoletim(alunoId)
    } else {
        setError("Digite uma matrícula válida para consultar o boletim.")
    }
  }

  //fazer aqui a renderização condicional do boletim
  let conteudo_boletim;
    if(loading) {
        conteudo_boletim = <p>Carregando...</p>
    } else if(error) {
        conteudo_boletim = <p>{error}</p>
    } else if(boletim) {
        conteudo_boletim = (
            <div key={boletim.id} className='container_consulta'>
                <div>
                    <p className='label'>Aluno: <span>{boletim.aluno.nome} </span></p>
                    <p className='label'>Disciplina:<span>{boletim.disciplina.nome} </span> </p>
                    <p className='label'>Nota:<span>{boletim.nota} </span> </p>
                </div>
            </div>
        )
    } 

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1 className='list'>Consulta de Boletim</h1>
                <input 
                    type='text' 
                    placeholder='Digite sua matrícula'
                    value = {id}
                    onChange = {(event) => setId(event.target.value)}/>
                <button type='submit'>Buscar</button>
            </form> 

            {conteudo_boletim}
        </div>
    )
}

export default Consulta_boletim_id;
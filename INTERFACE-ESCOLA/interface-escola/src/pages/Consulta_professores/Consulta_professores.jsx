import { useEffect, useState } from 'react'
import Trash from '../../assets/lixeira.svg'
import '../../pages/Consulta_alunos/consulta.css'
import api from '../../services/api'

function Consulta_professores() {
    const [professores,setProfessores] = useState([])

    async function getProfessores() {
        const professoresFromApi = await api.get('/professores')
        setProfessores(professoresFromApi.data)
    }

    async function deleteProfessor(id) {
        await api.delete(`/professores/${id}`)
        getProfessores()
    }

    //a ideia do useEffect nesse caso é carregar os professores assim que a 
    // página for carregada
    useEffect(()=> {
        getProfessores()
    }, [])
    return (
        <div className='container_consulta'>
                    <h1 className='list'>Lista de Professores</h1>
                    { professores.map(( professor ) => (
                        <div key={professor.id} className='card'>
                            <div>
                                <p className='label'>Nome: <span>{professor.nome} </span></p>
                                <p className='label'>Disciplina: <span>{professor.disciplina.nome} </span></p>
                                <button className='btn_trash' onClick= {() => {
                                    deleteProfessor(professor.id)
                                }}>
                                    <img src= {Trash} alt='ícone de lixeira' />
                                </button>
                            </div>
                        </div>
                    ))}
        </div>   
    )
}

export default Consulta_professores;
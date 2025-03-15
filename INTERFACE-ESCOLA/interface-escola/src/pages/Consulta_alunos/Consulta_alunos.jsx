import { useEffect, useState } from 'react'
import Trash from '../../assets/lixeira.svg'
import './consulta.css'
import api from '../../services/api'

function Consulta_alunos() {
    const [alunos, setAlunos] = useState([])

    async function getAlunos() {
        const alunosFromApi = await api.get('/alunos')
        setAlunos(alunosFromApi.data)
    }

    async function deleteAlunos(id) {
        await api.delete(`/alunos/${id}`)
        getAlunos()
    }

    useEffect(() => {
        getAlunos()
    }, [])

    return (
        <div className='container_consulta'>
            <h1 className='list'>Lista de Alunos</h1>
            { alunos.map(( aluno ) => (
                <div key={aluno.id} className='card'>
                    <div>
                        <p className='label'>Nome: <span>{aluno.nome} </span></p>
                        <button className='btn_trash' onClick={() => {
                            deleteAlunos(aluno.id)
                        }}>
                            <img src= {Trash} alt='ícone de lixeira' />
                        </button>
                    </div>
                </div>
            ))}
        </div>   
    )
}

export default Consulta_alunos;
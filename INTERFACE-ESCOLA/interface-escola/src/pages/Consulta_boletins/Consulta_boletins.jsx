import { useEffect, useState } from 'react'
import Trash from '../../assets/lixeira.svg'
import '../../pages/Consulta_alunos/consulta.css'
import api from '../../services/api'

function Consulta_boletins() {
    const [boletins, setBoletins] = useState([])

    async function getBoletins() {
        const boletinsFromApi = await api.get('/boletins')
            setBoletins(boletinsFromApi.data)
        
    }

    useEffect(() => {
        getBoletins()
    }, [])
    

    return (
        <div className='container_consulta'>
            <h1 className='list'>Lista de Boletins</h1>
            { boletins.map((boletim) => (
                <div key={boletim.id} className='card'>
                    <div>
                        <p className='label'>Aluno(a): <span>{boletim.aluno.nome} </span> </p>
                        <p className='label'>Disciplina: <span>{boletim.disciplina.nome} </span> </p>
                        <p className='label'>Nota: <span>{boletim.nota} </span> </p>
                        <button className='btn_trash'>
                            <img src={Trash} alt='ícone de lixeira' />
                        </button>
                    </div>
                </div>
        ))}
        </div>
    )
}

export default Consulta_boletins;
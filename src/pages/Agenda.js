import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {Delete, SystemUpdateAlt} from '@mui/icons-material';

const Agenda = () => {
    const [agendas, setAgendas] = useState(JSON.parse(window.sessionStorage.getItem('agendas')) || [])
    const [agenda, setAgenda] = useState({})
    const navigate = useNavigate()

    const params = useParams()
    console.log(params)
    useEffect(() => {
        const singleAgenda = agendas.filter((agenda) => agenda.id === params.id)
        setAgenda(singleAgenda[0])
    }, [])
    console.log(agenda)

    //handle Delete
    const handleDelete=() => {
        const newAgendas = agendas.filter(agenda => agenda.id !== params.id)
        window.sessionStorage.setItem('agendas', JSON.stringify(newAgendas));
        navigate('/')
    }

  return (
    <div>
        <Navbar/>
        <div className='px-5 mt-3'>
            <div class="card">
                <div class="card-body d-flex justify-content-between">
                    <div>

                        <div>
                            <span>Title: </span><span>{agenda.title}</span>
                        </div>
                        <div>
                            <span>Facilitator: </span><span>{agenda.facilitator}</span>
                        </div>
                        <div>
                            <span>Purpose: </span><span>{agenda.description}</span>
                        </div>
                        <div>
                            <span>Items: </span>
                            <div className='px-2'>
                                {
                                    agenda.items?.map((a, i) => (
                                        <p key={i}>{a?.item}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <span>Date: </span><span>{agenda.date}</span>
                        </div>
                        <div>
                            <span>Time: </span><span>{agenda.time}</span>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div onClick={handleDelete}>
                            <Delete/>
                        </div>
                        <div>
                            <SystemUpdateAlt/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Agenda
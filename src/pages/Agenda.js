import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {Delete, SystemUpdateAlt} from '@mui/icons-material';

const Agenda = () => {
    const [agendas, setAgendas] = useState(JSON.parse(window.sessionStorage.getItem('agendas')) || [])
    const [agenda, setAgenda] = useState({})
    const [status, setStatus] = useState()
    const navigate = useNavigate()

    const params = useParams()
    // console.log("PARAMS", params)
    useEffect(() => {
        const singleAgenda = agendas.filter((agenda) => agenda.id === params.id)
        setAgenda(singleAgenda[0])
        setStatus(singleAgenda[0].status)
    }, [])
    // console.log(agenda)
    // useEffect(() => {
    //     setStatus(agenda.status)
    // }, [])


    //handle Delete
    const handleDelete=() => {
        const newAgendas = agendas.filter(agenda => agenda.id !== params.id)
        window.sessionStorage.setItem('agendas', JSON.stringify(newAgendas));
        navigate('/')
    }
    console.log(status)
    const handleUpdate = () => {
        setStatus(!status)
        const updatedAgenda = agendas.filter(agenda => agenda.id === params.id)
        updatedAgenda[0].status = status
        const filteredAgendas = agendas.filter(agenda => agenda.id !== params.id)

       const newAgenda = {
            id: agenda.id,
            title: agenda.title,
            description: agenda.description,
            facilitator : agenda.facilitator,
            items: agenda.items,
            date: agenda.date,
            time: agenda.time,
            status: status
        }
         //setAgendas([...filteredAgendas, {...agenda, status}])
       const newAgendas = [...filteredAgendas, updatedAgenda[0]]
        window.sessionStorage.setItem('agendas', JSON.stringify(newAgendas));
        //window.location.replace('/')
    }
    // useEffect(()=> {
    //     handleUpdate()
    //     setStatus(!status)
    // }, [status])

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
                        <div><span>Status:</span>
                            <span>
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value={agenda.status}  checked={agenda.status}
                                onClick={()=>{
                                    // setStatus(!status)
                                    handleUpdate()
                                 }} />
                                {/* <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={(e) => console.log(e)} ></input> */}
                            </span>
                            {/* <div class="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={(e) => console.log(e)}  />
  <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div> */}
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div onClick={handleDelete}>
                            <Delete/>
                        </div>
                        <Link to={`/update/${agenda.id}`}>
                            <div>
                                <SystemUpdateAlt/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Agenda
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Add, ChevronRight } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Home = () => {
  const [agendas, setAgendas] = useState([])
  useEffect(() => {
    setAgendas(JSON.parse(window.sessionStorage.getItem('agendas')) || [])
  }, [])
  console.log("AGENDAS", agendas)
  return (
    <div>
      <Navbar/>
      <h3>
        agendas
      </h3>
      <Link to={"/add-agenda"}>
        <div className='d-flex add-box'>
            <Add/>
            <span>Add agenda</span>
        </div>
      </Link>
      <div className="row p-5">
        {
          agendas.map((a, i) => (
            <div class="col-4 mb-1" key={i}>
              <div class="card">
                <div class="card-body bg-green">
                  <h5 class="card-title text-center">{a.title}</h5>
                  <p class="card-text">{a?.description?.substring(0,30)}...</p>
                  <p><span className='fw-700'>Status:</span><span>{a.status? 'Done': 'Not Done'}</span></p>
                  <Link to={`/${a.id}`}>
                    <h6 className='d-flex justify-content-between'><span>See more</span> <ChevronRight /></h6>
                  </Link>
                </div>
              </div>
            </div>

          ))
        }
       

        
      </div>
    </div>
  )
}

export default Home
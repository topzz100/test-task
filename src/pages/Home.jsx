import React, { useEffect, useState } from 'react'

const Home = () => {
  const [agendas, setAgendas] = useState([])
  useEffect(() => {
    setAgendas(JSON.parse(window.sessionStorage.getItem('agendas')) || [])
  }, [])
  console.log("AGENDAS", agendas)
  return (
    <div>
      <h3>
        agendas
      </h3>
      {
        agendas.map((a, i) => (
          <h4>
            {a.title}
          </h4>
        ))
      }
    </div>
  )
}

export default Home
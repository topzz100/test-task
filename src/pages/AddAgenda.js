import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
//import {data} from '../data'

const AddAgenda = () => {
  const [agendas, setAgendas] = useState(JSON.parse(window.sessionStorage.getItem('agendas')) || [])
  const [itemValues, setItemValues] = useState([{item: ""}])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [facilitator, setFacilitator] = useState("")
  const [date, setDate] = useState("")

  const [time, setTime] = useState("")
  
  const navigate = useNavigate()

  // useEffect(() => {
  //   window.sessionStorage.setItem('agendas', JSON.stringify(agendas))
  // }, [])
  

  const handleChange = (i, e)=> {
    let newItemValues = [...itemValues]
    newItemValues[i].item = e.target.value
    setItemValues(newItemValues)
  }

 
  let addFormFields = (e) => {
    e.preventDefault()
    setItemValues([...itemValues, { item: "" }])
    console.log("item" )
 }
  console.log(itemValues)
  window.sessionStorage.setItem('agendas', JSON.stringify(agendas));

  const handleSubmit = (e) => {
    e.preventDefault()
    // let data = []
    // data.push({
    //   title,
    //   description,
    //   facilitator,
    //   items: itemValues,
    //   date,
    //   time,
    //   status: false
    // })
    setAgendas(prev => (
      [...prev, {
        id: new Date().getTime().toString(),
        title,
        description,
        facilitator,
        items: itemValues,
        date,
        time,
        status: false}]
    ))
    window.sessionStorage.setItem('agendas', JSON.stringify(agendas));
    setDescription("")
    setTitle("")
    setFacilitator("")
    setDate("")
    setTime("")
    setItemValues([{item: ""}])
    
  }
  console.log(agendas)

  return (
    <div >
      <Navbar/>
      <div className='p-5 d-flex justify-content-center'>
        <div className='row w-500'>
          <form>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input  className="form-control" id="exampleFormControlInput1" placeholder="" value={title} onChange={e => setTitle(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Facilitator</label>
            <input className="form-control" id="exampleFormControlInput1"  value={facilitator} onChange={e => setFacilitator(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={e => setDescription(e.target.value)}></textarea>
          </div>
          <div>
            {
              itemValues.map((item, i) => (
                <div className="mb-3" key={i}>
                  <label >Agenda Items</label>
                  <input className="form-control" id="exampleFormControlInput1" value={item.item || ""} onChange={e => handleChange(i, e)}/>
              </div>

              ))
              
            }
            <button onClick={(e) => addFormFields(e)}>Add items</button>
          </div>
          {/* <div className="mb-3" >
                  <label for="exampleFormControlTextarea1" className="form-label">Agenda Items</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1"/>
                <button onClick={() => addFormFields}>Add items</button>
              </div> */}
          
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={date} onChange={e => setDate(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={time} onChange={e => setTime(e.target.value)}/>
          </div>
          <button className='d-flex justify-content-center' type='submit' onClick={handleSubmit}>
            Submit
          </button>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default AddAgenda
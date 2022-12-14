import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
//import {data} from '../data'

const AddAgenda = () => {
  const [agendas, setAgendas] = useState(JSON.parse(window.sessionStorage.getItem('agendas')) || [])
  const [itemValues, setItemValues] = useState([{item: ""}])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [facilitator, setFacilitator] = useState("")
  const [date, setDate] = useState("")

  const [agenda, setAgenda] = useState({})
  const [time, setTime] = useState("")
  const [error, setError] = useState(false)
  
  // const navigate = useNavigate()


  // useEffect(() => {
  //   window.sessionStorage.setItem('agendas', JSON.stringify(agendas))
  // }, [])
  
  const params = useParams()
  console.log("PARAMS", params)

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

  useEffect(() => {
   if(params.id){
    const singleAgenda = agendas.filter((agenda) => agenda.id === params.id)
    setAgenda(singleAgenda[0])
   }
   
  }, [agendas, params.id])
  useEffect(() => {
    
    if(params.id){
      setDescription(agenda?.description)
      setTitle(agenda?.title)
      setFacilitator(agenda?.facilitator)
      setDate(agenda?.date)
      setTime(agenda?.time)
      setItemValues(agenda?.items)
    } 
  }, [agenda, params.id])
  const showError= () => {
    return(
      <p style={{"color": "red"}}>Please fill input field</p>
    )
  }

  const handleUpdate=(e) => {
    e.preventDefault()
    if(title === ""  || description === ""  || facilitator=== ""  || date === ""  || time === "" || itemValues[0].item===""){
      setError(true)
    }else{
    const newAgendas = agendas.filter(agenda => agenda.id !== params.id)
 
    setAgendas([...newAgendas,{
         id: agenda.id,
           title,
           description,
           facilitator,
          items: itemValues,
         date,
         time,
          status: false} ])
    window.sessionStorage.setItem('agendas', JSON.stringify(agendas));
    setDescription("")
    setTitle("")
    setFacilitator("")
    setDate("")
    setTime("")
    setItemValues([{item: ""}])
    window.location.replace('/')
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if(title === ""  || description === ""  || facilitator=== ""  || date === ""  || time === "" || itemValues[0].item===""){
      setError(true)
    }else{
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
          setError(false)
    }
    
  }
  console.log(agendas)

  return (
    <div >
      <Navbar/>
      <div className='p-5 d-flex justify-content-center'>
        {
          params.id?
          (
            <div className='row w-500 bg-green p-2'>
          <form>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input  className="form-control" id="exampleFormControlInput1" placeholder="" value={title} onChange={e => setTitle(e.target.value)}/>
            {error && title ==="" && showError()}
          </div>
          <div className="mb-3">
            <label  className="form-label">Facilitator</label>
            <input className="form-control" id="exampleFormControlInput1"  value={facilitator} onChange={e => setFacilitator(e.target.value)}/>
            {error && facilitator ==="" && showError()}
          </div>
          <div className="mb-3">
            <label  className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            {error && description ==="" && showError()}
          </div>
          <div>
            {
              itemValues?.map((item, i) => (
                <div className="mb-3" key={i}>
                  <label >Agenda Items</label>
                  <input className="form-control" id="exampleFormControlInput1" value={item.item || ""} onChange={e => handleChange(i, e)}/>
                  {error && item?.item ==="" && showError()}
              </div>

              ))
              
            }
            <button className='add-item' onClick={(e) => addFormFields(e)}>Add items</button>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input className="form-control" id="exampleFormControlInput1" value={date} onChange={e => setDate(e.target.value)}/>
            {error && date ==="" && showError()}
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <input  className="form-control" id="exampleFormControlInput1"  value={time} onChange={e => setTime(e.target.value)}/>
            {error && time ==="" && showError()}
          </div>
          <button className='d-flex justify-content-center button' type='submit' onClick={handleUpdate}>
            Submit
          </button>
          </form>
        </div>
          ):

        (<div className='row w-500 bg-green p-2'>
          <form>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input  className="form-control" id="exampleFormControlInput1" placeholder="" value={title} onChange={e => setTitle(e.target.value)}/>
            {error && title ==="" && showError()}
          </div>
          <div className="mb-3">
            <label  className="form-label">Facilitator</label>
            <input className="form-control" id="exampleFormControlInput1"  value={facilitator} onChange={e => setFacilitator(e.target.value)}/>
            {error && facilitator ==="" && showError()}
          </div>
          <div className="mb-3">
            <label  className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={e => setDescription(e.target.value)}></textarea>
            {error && description ==="" && showError()}
          </div>
          <div>
            {
              itemValues.map((item, i) => (
                <div className="mb-3" key={i}>
                  <label >Agenda Items</label>
                  <input className="form-control" id="exampleFormControlInput1" value={item.item || ""} onChange={e => handleChange(i, e)}/>
                  {error && item?.item ==="" && showError()}
              </div>

              ))
              
            }
            <button className='add-item' onClick={(e) => addFormFields(e)}>Add items</button>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input className="form-control" id="exampleFormControlInput1"  value={date} onChange={e => setDate(e.target.value)}/>
            {error && date ==="" && showError()}
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <input  className="form-control" id="exampleFormControlInput1"  value={time} onChange={e => setTime(e.target.value)}/>
            {error && time ==="" && showError()}
          </div>
          <button className='d-flex justify-content-center button' type='submit' onClick={handleSubmit}>
            Submit
          </button>
          </form>
        </div>
        )
      }
      </div>
    </div>
  )
}

export default AddAgenda